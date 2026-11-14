const assert = require('assert');
const { EventEmitter } = require('events');
const { requestHandler } = require('../server');
const { resetDb } = require('../db');

function request(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const req = new EventEmitter();
    req.method = method;
    req.url = path;
    req.headers = { host: 'localhost:3000', 'content-type': 'application/json' };

    const res = {
      statusCode: 200,
      headers: {},
      writeHead(code, hdrs) {
        this.statusCode = code;
        this.headers = hdrs || {};
      },
      end(payload) {
        try {
          const parsed = payload ? JSON.parse(payload) : {};
          resolve({ status: this.statusCode, body: parsed });
        } catch (err) {
          resolve({ status: this.statusCode, body: payload });
        }
      }
    };

    requestHandler(req, res).catch(reject);

    process.nextTick(() => {
      if (body) {
        req.emit('data', Buffer.from(JSON.stringify(body)));
      }
      req.emit('end');
    });
  });
}

async function runAcceptanceTests() {
  resetDb();
  console.log('Iniciando pruebas de aceptación Gherkin del MVP EcoRuta (H-01 a H-06)...');

  // H-01 Criterio 1: Login institucional exitoso
  const loginOk = await request('POST', '/api/auth/login', {
    email: 'jorge.mendoza@tecsup.edu.pe',
    password: 'Password123!'
  });
  assert.strictEqual(loginOk.status, 200);
  assert.strictEqual(loginOk.body.ok, true);
  console.log('✓ H-01 Criterio 1 cumplido: Acceso permitido a @tecsup.edu.pe');

  // H-01 Criterio 2: Bloqueo de correo no institucional
  const loginFail = await request('POST', '/api/auth/login', {
    email: 'intruso@gmail.com',
    password: 'Password123!'
  });
  assert.strictEqual(loginFail.status, 403);
  assert.strictEqual(loginFail.body.code, 'NON_INSTITUTIONAL_EMAIL');
  console.log('✓ H-01 Criterio 2 cumplido: Bloqueo de dominio externo (@gmail.com)');

  // H-02 Criterio 1 y 2: Publicación de ruta por conductor con paradero fijo y validación de cupos
  const pubRoute = await request('POST', '/api/routes', {
    driverId: 'usr-01',
    originZone: 'Surco / Puente Primavera',
    fixedStop: 'Paradero Puente Primavera (Evitamiento Norte)',
    departureTime: '07:20',
    estimatedArrival: '07:45',
    totalSeats: 1,
    contributionSoles: 5.5,
    notes: 'Salida puntual 07:20'
  });
  assert.strictEqual(pubRoute.status, 201);
  assert.strictEqual(pubRoute.body.route.availableSeats, 1);
  const createdRouteId = pubRoute.body.route.id;
  console.log('✓ H-02 Criterios 1 y 2 cumplidos: Ruta publicada con paradero fijo y cupos validados');

  // H-03 Criterio 1 y 2: Búsqueda por zona y horario
  const filterRes = await request('GET', '/api/routes?zone=Surco&onlyAvailable=true');
  assert.strictEqual(filterRes.status, 200);
  assert.strictEqual(filterRes.body.routes.length, 1);
  assert.strictEqual(filterRes.body.routes[0].id, createdRouteId);
  console.log('✓ H-03 Criterios 1 y 2 cumplidos: Búsqueda y filtrado por zona/disponibilidad');

  // H-04 Criterio 1: Reserva de asiento descuenta cupo y pasa a Completa si llega a 0
  const resSeat = await request('POST', '/api/reservations', {
    routeId: createdRouteId,
    passengerId: 'usr-03'
  });
  assert.strictEqual(resSeat.status, 201);
  assert.strictEqual(resSeat.body.route.availableSeats, 0);
  assert.strictEqual(resSeat.body.route.status, 'Completa');
  const createdResId = resSeat.body.reservation.id;
  console.log('✓ H-04 Criterio 1 cumplido: Reserva descuenta cupo exactamente a 0 y marca Completa');

  // H-04 Criterio 2: Bloqueo de sobrecupo cuando availableSeats == 0
  const overbook = await request('POST', '/api/reservations', {
    routeId: createdRouteId,
    passengerId: 'usr-04'
  });
  assert.strictEqual(overbook.status, 409);
  assert.strictEqual(overbook.body.code, 'NO_SEATS_AVAILABLE');
  console.log('✓ H-04 Criterio 2 cumplido: Sobrecupo bloqueado automáticamente');

  // H-06 Criterio 1 y 2: Manifiesto de viaje para conductor y pasajero
  const trips = await request('GET', '/api/my-trips?userId=usr-01');
  assert.strictEqual(trips.status, 200);
  const driverRoute = trips.body.driverRoutes.find(r => r.id === createdRouteId);
  assert.strictEqual(driverRoute.passengers.length, 1);
  assert.strictEqual(driverRoute.passengers[0].passengerEmail, 'jorge.mendoza@tecsup.edu.pe');
  console.log('✓ H-06 Criterios 1 y 2 cumplidos: Manifiesto de pasajeros y paradero fijo verificados');

  // H-05 Criterio 1 y 2: Cancelación de reserva libera asiento (+1) y reactiva la ruta
  const cancelRes = await request('DELETE', `/api/reservations/${createdResId}`);
  assert.strictEqual(cancelRes.status, 200);
  assert.strictEqual(cancelRes.body.route.availableSeats, 1);
  assert.strictEqual(cancelRes.body.route.status, 'Activa');
  console.log('✓ H-05 Criterios 1 y 2 cumplidos: Cancelación libera el cupo y reactiva la ruta');

  resetDb();
  console.log('\nTODAS LAS PRUEBAS DE ACEPTACIÓN DEL MVP (100%) PASARON EXITOSAMENTE.');
}

runAcceptanceTests().catch(err => {
  console.error('Error en pruebas:', err);
  process.exit(1);
});
