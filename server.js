const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const { readDb, writeDb, resetDb } = require('./db');

const PORT = process.env.PORT || 3000;

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(payload));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(new Error('JSON inválido'));
      }
    });
  });
}

const server = http.createServer(requestHandler);

async function requestHandler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  try {
    // H-01: Autenticación con correo institucional @tecsup.edu.pe
    if (pathname === '/api/auth/login' && req.method === 'POST') {
      const { email, password } = await parseBody(req);
      const cleanEmail = (email || '').trim().toLowerCase();

      if (!cleanEmail.endsWith('@tecsup.edu.pe')) {
        return sendJson(res, 403, {
          ok: false,
          code: 'NON_INSTITUTIONAL_EMAIL',
          message: 'Acceso restringido: Solo se permiten correos institucionales con dominio @tecsup.edu.pe para garantizar una comunidad verificada.'
        });
      }

      const db = readDb();
      const user = db.users.find(u => u.email.toLowerCase() === cleanEmail && u.password === password);

      if (!user) {
        return sendJson(res, 401, {
          ok: false,
          code: 'INVALID_CREDENTIALS',
          message: 'Credenciales incorrectas. Usa uno de los usuarios de prueba @tecsup.edu.pe.'
        });
      }

      const { password: _, ...safeUser } = user;
      return sendJson(res, 200, {
        ok: true,
        message: 'Sesión iniciada correctamente en comunidad verificada Tecsup.',
        user: safeUser
      });
    }

    // H-02 & H-03: Listar y filtrar rutas disponibles con cupos, horario, paradero fijo y aporte
    if (pathname === '/api/routes' && req.method === 'GET') {
      const zone = (parsedUrl.searchParams.get('zone') || '').trim().toLowerCase();
      const timeWindow = (parsedUrl.searchParams.get('time') || '').trim();
      const onlyAvailable = parsedUrl.searchParams.get('onlyAvailable') === 'true';

      const db = readDb();
      let routes = db.routes.map(r => {
        const routeReservations = db.reservations.filter(
          resv => resv.routeId === r.id && resv.status === 'Confirmada'
        );
        return {
          ...r,
          passengers: routeReservations.map(rv => ({
            reservationId: rv.id,
            passengerId: rv.passengerId,
            passengerName: rv.passengerName,
            passengerCareer: rv.passengerCareer,
            boardingPoint: rv.boardingPoint,
            createdAt: rv.createdAt
          }))
        };
      });

      if (zone) {
        routes = routes.filter(r =>
          r.originZone.toLowerCase().includes(zone) ||
          r.fixedStop.toLowerCase().includes(zone)
        );
      }

      if (timeWindow) {
        routes = routes.filter(r => r.departureTime.startsWith(timeWindow));
      }

      if (onlyAvailable) {
        routes = routes.filter(r => r.availableSeats > 0 && r.status === 'Activa');
      }

      return sendJson(res, 200, { ok: true, routes });
    }

    // H-02: Publicar una nueva ruta hacia Tecsup con paradero fijo, hora exacta, aporte y asientos
    if (pathname === '/api/routes' && req.method === 'POST') {
      const body = await parseBody(req);
      const {
        driverId,
        originZone,
        departureTime,
        estimatedArrival,
        fixedStop,
        contributionSoles,
        totalSeats,
        notes
      } = body;

      const db = readDb();
      const driver = db.users.find(u => u.id === driverId);

      if (!driver || driver.role !== 'conductor') {
        return sendJson(res, 403, {
          ok: false,
          message: 'Solo un estudiante registrado con rol Conductor puede publicar rutas.'
        });
      }

      const seatsNum = Number(totalSeats);
      const contributionNum = Number(contributionSoles);

      if (!originZone || !departureTime || !estimatedArrival || !fixedStop) {
        return sendJson(res, 400, {
          ok: false,
          message: 'Todos los campos obligatorios (zona de origen, paradero fijo, hora de salida y llegada estimada) deben completarse.'
        });
      }

      if (!Number.isInteger(seatsNum) || seatsNum < 1 || seatsNum > 4) {
        return sendJson(res, 400, {
          ok: false,
          message: 'El número de asientos disponibles debe estar entre 1 y 4.'
        });
      }

      if (isNaN(contributionNum) || contributionNum < 0 || contributionNum > 15) {
        return sendJson(res, 400, {
          ok: false,
          message: 'El aporte sugerido por pasajero debe estar entre S/ 0.00 y S/ 15.00.'
        });
      }

      const newRoute = {
        id: 'ruta-' + (100 + db.routes.length + 1),
        driverId: driver.id,
        driverName: driver.name,
        driverCareer: driver.career,
        driverVehicle: driver.vehicle || 'Vehículo particular verificado',
        originZone: originZone.trim(),
        destination: 'Campus Tecsup Santa Anita',
        departureTime: departureTime.trim(),
        estimatedArrival: estimatedArrival.trim(),
        fixedStop: fixedStop.trim(),
        contributionSoles: Number(contributionNum.toFixed(2)),
        totalSeats: seatsNum,
        availableSeats: seatsNum,
        status: 'Activa',
        notes: (notes || 'Salida puntual desde el paradero fijo acordado.').trim(),
        createdAt: new Date().toISOString()
      };

      db.routes.unshift(newRoute);
      writeDb(db);

      return sendJson(res, 201, {
        ok: true,
        message: 'Ruta publicada exitosamente con paradero fijo y cupos controlados.',
        route: newRoute
      });
    }

    // H-04: Reservar un asiento disponible con bloqueo automático de sobrecupo
    if (pathname === '/api/reservations' && req.method === 'POST') {
      const { routeId, passengerId } = await parseBody(req);
      const db = readDb();

      const route = db.routes.find(r => r.id === routeId);
      if (!route) {
        return sendJson(res, 404, { ok: false, message: 'La ruta seleccionada no existe.' });
      }

      const passenger = db.users.find(u => u.id === passengerId);
      if (!passenger) {
        return sendJson(res, 404, { ok: false, message: 'Usuario pasajero no encontrado.' });
      }

      if (route.driverId === passenger.id) {
        return sendJson(res, 400, {
          ok: false,
          message: 'No puedes reservar un asiento en tu propia ruta de conductor.'
        });
      }

      const existing = db.reservations.find(
        rv => rv.routeId === routeId && rv.passengerId === passengerId && rv.status === 'Confirmada'
      );
      if (existing) {
        return sendJson(res, 409, {
          ok: false,
          code: 'ALREADY_RESERVED',
          message: 'Ya tienes una reserva confirmada en esta ruta.'
        });
      }

      if (route.availableSeats <= 0 || route.status === 'Completa') {
        return sendJson(res, 409, {
          ok: false,
          code: 'NO_SEATS_AVAILABLE',
          message: 'Ruta Completa (0 asientos disponibles): El sistema impide nuevas reservas para evitar el caos de coordinación.'
        });
      }

      route.availableSeats -= 1;
      if (route.availableSeats === 0) {
        route.status = 'Completa';
      }

      const newReservation = {
        id: 'res-' + (500 + db.reservations.length + 1),
        routeId: route.id,
        passengerId: passenger.id,
        passengerName: passenger.name,
        passengerEmail: passenger.email,
        passengerCareer: passenger.career,
        boardingPoint: route.fixedStop,
        status: 'Confirmada',
        createdAt: new Date().toISOString()
      };

      db.reservations.push(newReservation);
      writeDb(db);

      return sendJson(res, 201, {
        ok: true,
        message: `Reserva confirmada en el paradero fijo: ${route.fixedStop}. Quedan ${route.availableSeats} asiento(s).`,
        reservation: newReservation,
        route
      });
    }

    // H-05: Cancelar una reserva y liberar el cupo automáticamente
    if (pathname.startsWith('/api/reservations/') && req.method === 'DELETE') {
      const reservationId = pathname.split('/')[3];
      const db = readDb();

      const reservation = db.reservations.find(r => r.id === reservationId);
      if (!reservation) {
        return sendJson(res, 404, { ok: false, message: 'Reserva no encontrada.' });
      }

      if (reservation.status === 'Cancelada') {
        return sendJson(res, 400, { ok: false, message: 'Esta reserva ya fue cancelada previamente.' });
      }

      reservation.status = 'Cancelada';
      const route = db.routes.find(r => r.id === reservation.routeId);
      if (route) {
        route.availableSeats = Math.min(route.totalSeats, route.availableSeats + 1);
        if (route.availableSeats > 0) {
          route.status = 'Activa';
        }
      }

      writeDb(db);
      return sendJson(res, 200, {
        ok: true,
        message: 'Reserva cancelada correctamente. El asiento ha sido liberado para otro estudiante.',
        reservation,
        route
      });
    }

    // H-06: Consultar manifiesto de viaje / reservas por usuario (conductor o pasajero)
    if (pathname === '/api/my-trips' && req.method === 'GET') {
      const userId = parsedUrl.searchParams.get('userId');
      const db = readDb();
      const user = db.users.find(u => u.id === userId);
      if (!user) {
        return sendJson(res, 404, { ok: false, message: 'Usuario no encontrado.' });
      }

      const driverRoutes = db.routes
        .filter(r => r.driverId === userId)
        .map(r => ({
          ...r,
          passengers: db.reservations.filter(rv => rv.routeId === r.id && rv.status === 'Confirmada')
        }));

      const passengerReservations = db.reservations
        .filter(rv => rv.passengerId === userId && rv.status === 'Confirmada')
        .map(rv => {
          const route = db.routes.find(r => r.id === rv.routeId);
          return {
            ...rv,
            route
          };
        });

      return sendJson(res, 200, {
        ok: true,
        driverRoutes,
        passengerReservations
      });
    }

    // Endpoint utilitario para restaurar datos de demostración si se desea
    if (pathname === '/api/reset' && req.method === 'POST') {
      const data = resetDb();
      return sendJson(res, 200, {
        ok: true,
        message: 'Datos ficticios de demostración restaurados correctamente.',
        counts: {
          users: data.users.length,
          routes: data.routes.length,
          reservations: data.reservations.length
        }
      });
    }

    // Servir archivos estáticos
    let filePath = pathname === '/' ? '/index.html' : pathname;
    const fullPath = path.join(__dirname, 'public', filePath);

    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      const ext = path.extname(fullPath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.js': 'application/javascript; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.svg': 'image/svg+xml'
      };
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain; charset=utf-8' });
      return fs.createReadStream(fullPath).pipe(res);
    }

    return sendJson(res, 404, { ok: false, message: 'Recurso no encontrado' });
  } catch (err) {
    return sendJson(res, 500, { ok: false, message: err.message || 'Error interno del servidor' });
  }
}

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`EcoRuta Tecsup MVP ejecutándose en http://localhost:${PORT}`);
  });
}

module.exports = server;
module.exports.requestHandler = requestHandler;
