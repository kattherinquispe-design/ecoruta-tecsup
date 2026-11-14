let currentUser = null;

const authSection = document.getElementById('authSection');
const appWorkspace = document.getElementById('appWorkspace');
const userBadge = document.getElementById('userBadge');
const currentUserName = document.getElementById('currentUserName');
const currentUserRole = document.getElementById('currentUserRole');
const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginFeedback = document.getElementById('loginFeedback');
const globalToast = document.getElementById('globalToast');
const routesList = document.getElementById('routesList');
const driverOnlyNotice = document.getElementById('driverOnlyNotice');
const publishRouteForm = document.getElementById('publishRouteForm');

function showFeedback(el, message, type = 'success') {
  el.textContent = message;
  el.className = `feedback ${type}`;
  el.classList.remove('hidden');
}

function showToast(message, type = 'success') {
  showFeedback(globalToast, message, type);
  setTimeout(() => {
    globalToast.classList.add('hidden');
  }, 6000);
}

const INITIAL_DEMO_DATA = {
  users: [
    {
      id: "usr-01",
      email: "maria.quispe@tecsup.edu.pe",
      password: "Password123!",
      name: "María Quispe (Ficticio)",
      role: "conductor",
      career: "Diseño y Desarrollo de Software - 4to Ciclo",
      code: "20241045",
      vehicle: "Toyota Yaris Gris (Placa Ficticia ABC-123)",
      rating: 4.9,
      verifiedInstitutional: true
    },
    {
      id: "usr-02",
      email: "luis.paredes@tecsup.edu.pe",
      password: "Password123!",
      name: "Luis Paredes (Ficticio)",
      role: "conductor",
      career: "Administración de Redes y Comunicaciones - 4to Ciclo",
      code: "20241088",
      vehicle: "Kia Picanto Azul (Placa Ficticia T3C-504)",
      rating: 4.8,
      verifiedInstitutional: true
    },
    {
      id: "usr-03",
      email: "jorge.mendoza@tecsup.edu.pe",
      password: "Password123!",
      name: "Jorge Mendoza (Ficticio)",
      role: "pasajero",
      career: "Diseño y Desarrollo de Software - 4to Ciclo",
      code: "20241102",
      vehicle: null,
      rating: 5.0,
      verifiedInstitutional: true
    },
    {
      id: "usr-04",
      email: "ana.torres@tecsup.edu.pe",
      password: "Password123!",
      name: "Ana Torres (Ficticio)",
      role: "pasajero",
      career: "Mecatrónica Industrial - 4to Ciclo",
      code: "20241159",
      vehicle: null,
      rating: 4.9,
      verifiedInstitutional: true
    }
  ],
  routes: [
    {
      id: "ruta-101",
      driverId: "usr-01",
      driverName: "María Quispe (Ficticio)",
      driverCareer: "Diseño y Desarrollo de Software - 4to Ciclo",
      driverVehicle: "Toyota Yaris Gris (Placa Ficticia ABC-123)",
      originZone: "San Miguel",
      destination: "Campus Tecsup Santa Anita",
      departureTime: "07:10",
      estimatedArrival: "07:50",
      fixedStop: "Cruce Av. La Marina con Av. Universitaria (Paradero Plaza San Miguel)",
      contributionSoles: 6.00,
      totalSeats: 3,
      availableSeats: 2,
      status: "Activa",
      notes: "Salgo puntual 7:10 am. Ruta directa por Evitamiento sin desvíos.",
      createdAt: "2026-11-10T12:00:00Z"
    },
    {
      id: "ruta-102",
      driverId: "usr-02",
      driverName: "Luis Paredes (Ficticio)",
      driverCareer: "Administración de Redes y Comunicaciones - 4to Ciclo",
      driverVehicle: "Kia Picanto Azul (Placa Ficticia T3C-504)",
      originZone: "Javier Prado / Centro Cívico",
      destination: "Campus Tecsup Santa Anita",
      departureTime: "18:10",
      estimatedArrival: "18:45",
      fixedStop: "Paradero puente peatonal La Rambla San Borja (Av. Javier Prado Este)",
      contributionSoles: 5.00,
      totalSeats: 3,
      availableSeats: 1,
      status: "Activa",
      notes: "Ideal para turno noche (clases de 18:50). Salida exacta 18:10.",
      createdAt: "2026-11-10T13:30:00Z"
    },
    {
      id: "ruta-103",
      driverId: "usr-01",
      driverName: "María Quispe (Ficticio)",
      driverCareer: "Diseño y Desarrollo de Software - 4to Ciclo",
      driverVehicle: "Toyota Yaris Gris (Placa Ficticia ABC-123)",
      originZone: "Los Olivos / MegaPlaza",
      destination: "Campus Tecsup Santa Anita",
      departureTime: "06:50",
      estimatedArrival: "07:35",
      fixedStop: "Puente Peatonal MegaPlaza (Panamericana Norte -> Evitamiento)",
      contributionSoles: 6.50,
      totalSeats: 2,
      availableSeats: 0,
      status: "Completa",
      notes: "Viaje directo por Vía de Evitamiento hasta Puente Santa Anita.",
      createdAt: "2026-11-11T09:00:00Z"
    }
  ],
  reservations: [
    {
      id: "res-501",
      routeId: "ruta-101",
      passengerId: "usr-03",
      passengerName: "Jorge Mendoza (Ficticio)",
      passengerEmail: "jorge.mendoza@tecsup.edu.pe",
      passengerCareer: "Diseño y Desarrollo de Software - 4to Ciclo",
      boardingPoint: "Cruce Av. La Marina con Av. Universitaria (Paradero Plaza San Miguel)",
      status: "Confirmada",
      createdAt: "2026-11-11T14:20:00Z"
    },
    {
      id: "res-502",
      routeId: "ruta-102",
      passengerId: "usr-04",
      passengerName: "Ana Torres (Ficticio)",
      passengerEmail: "ana.torres@tecsup.edu.pe",
      passengerCareer: "Mecatrónica Industrial - 4to Ciclo",
      boardingPoint: "Paradero puente peatonal La Rambla San Borja (Av. Javier Prado Este)",
      status: "Confirmada",
      createdAt: "2026-11-11T15:00:00Z"
    },
    {
      id: "res-503",
      routeId: "ruta-102",
      passengerId: "usr-03",
      passengerName: "Jorge Mendoza (Ficticio)",
      passengerEmail: "jorge.mendoza@tecsup.edu.pe",
      passengerCareer: "Diseño y Desarrollo de Software - 4to Ciclo",
      boardingPoint: "Paradero puente peatonal La Rambla San Borja (Av. Javier Prado Este)",
      status: "Confirmada",
      createdAt: "2026-11-11T16:10:00Z"
    }
  ]
};

function getLocalDb() {
  const raw = localStorage.getItem('ecoruta_persistent_db_v1');
  if (!raw) {
    localStorage.setItem('ecoruta_persistent_db_v1', JSON.stringify(INITIAL_DEMO_DATA));
    return JSON.parse(JSON.stringify(INITIAL_DEMO_DATA));
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return JSON.parse(JSON.stringify(INITIAL_DEMO_DATA));
  }
}

function saveLocalDb(db) {
  localStorage.setItem('ecoruta_persistent_db_v1', JSON.stringify(db));
}

function handleLocalApi(url, options = {}) {
  const method = (options.method || 'GET').toUpperCase();
  const body = options.body ? JSON.parse(options.body) : {};
  const parsed = new URL(url, window.location.origin);
  const pathname = parsed.pathname.replace(/.*\/api/, '/api');
  const db = getLocalDb();

  if (pathname === '/api/auth/login' && method === 'POST') {
    const cleanEmail = (body.email || '').trim().toLowerCase();
    if (!cleanEmail.endsWith('@tecsup.edu.pe')) {
      return {
        status: 403,
        data: {
          ok: false,
          code: 'NON_INSTITUTIONAL_EMAIL',
          message: 'Acceso restringido: Solo se permiten correos institucionales con dominio @tecsup.edu.pe para garantizar una comunidad verificada.'
        }
      };
    }
    const user = db.users.find(u => u.email.toLowerCase() === cleanEmail && u.password === body.password);
    if (!user) {
      return {
        status: 401,
        data: { ok: false, message: 'Credenciales incorrectas. Usa uno de los usuarios de prueba @tecsup.edu.pe.' }
      };
    }
    const { password: _, ...safeUser } = user;
    return { status: 200, data: { ok: true, user: safeUser } };
  }

  if (pathname === '/api/routes' && method === 'GET') {
    const zone = (parsed.searchParams.get('zone') || '').trim().toLowerCase();
    const time = (parsed.searchParams.get('time') || '').trim();
    const onlyAvailable = parsed.searchParams.get('onlyAvailable') === 'true';

    let routes = db.routes.map(r => ({
      ...r,
      passengers: db.reservations.filter(rv => rv.routeId === r.id && rv.status === 'Confirmada')
    }));

    if (zone) {
      routes = routes.filter(r => r.originZone.toLowerCase().includes(zone) || r.fixedStop.toLowerCase().includes(zone));
    }
    if (time) {
      routes = routes.filter(r => r.departureTime.startsWith(time));
    }
    if (onlyAvailable) {
      routes = routes.filter(r => r.availableSeats > 0 && r.status === 'Activa');
    }
    return { status: 200, data: { ok: true, routes } };
  }

  if (pathname === '/api/routes' && method === 'POST') {
    const driver = db.users.find(u => u.id === body.driverId);
    if (!driver || driver.role !== 'conductor') {
      return { status: 403, data: { ok: false, message: 'Solo un estudiante con rol Conductor puede publicar rutas.' } };
    }
    const seatsNum = Number(body.totalSeats);
    const contributionNum = Number(body.contributionSoles);
    if (!Number.isInteger(seatsNum) || seatsNum < 1 || seatsNum > 4) {
      return { status: 400, data: { ok: false, message: 'El número de asientos disponibles debe estar entre 1 y 4.' } };
    }
    const newRoute = {
      id: 'ruta-' + (100 + db.routes.length + 1),
      driverId: driver.id,
      driverName: driver.name,
      driverCareer: driver.career,
      driverVehicle: driver.vehicle || 'Vehículo particular verificado',
      originZone: (body.originZone || '').trim(),
      destination: 'Campus Tecsup Santa Anita',
      departureTime: (body.departureTime || '').trim(),
      estimatedArrival: (body.estimatedArrival || '').trim(),
      fixedStop: (body.fixedStop || '').trim(),
      contributionSoles: Number(contributionNum.toFixed(2)),
      totalSeats: seatsNum,
      availableSeats: seatsNum,
      status: 'Activa',
      notes: (body.notes || 'Salida puntual desde el paradero fijo acordado.').trim(),
      createdAt: new Date().toISOString()
    };
    db.routes.unshift(newRoute);
    saveLocalDb(db);
    return { status: 201, data: { ok: true, message: 'Ruta publicada exitosamente con paradero fijo y cupos controlados.', route: newRoute } };
  }

  if (pathname === '/api/reservations' && method === 'POST') {
    const route = db.routes.find(r => r.id === body.routeId);
    const passenger = db.users.find(u => u.id === body.passengerId);
    if (!route || !passenger) {
      return { status: 404, data: { ok: false, message: 'Ruta o pasajero no encontrado.' } };
    }
    const existing = db.reservations.find(rv => rv.routeId === route.id && rv.passengerId === passenger.id && rv.status === 'Confirmada');
    if (existing) {
      return { status: 409, data: { ok: false, message: 'Ya tienes una reserva confirmada en esta ruta.' } };
    }
    if (route.availableSeats <= 0 || route.status === 'Completa') {
      return { status: 409, data: { ok: false, message: 'Ruta Completa (0 asientos disponibles): El sistema impide nuevas reservas.' } };
    }
    route.availableSeats -= 1;
    if (route.availableSeats === 0) route.status = 'Completa';
    const newRes = {
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
    db.reservations.push(newRes);
    saveLocalDb(db);
    return {
      status: 201,
      data: {
        ok: true,
        message: `Reserva confirmada en el paradero fijo: ${route.fixedStop}. Quedan ${route.availableSeats} asiento(s).`,
        reservation: newRes,
        route
      }
    };
  }

  if (pathname.startsWith('/api/reservations/') && method === 'DELETE') {
    const resId = pathname.split('/')[3];
    const reservation = db.reservations.find(r => r.id === resId);
    if (!reservation) return { status: 404, data: { ok: false, message: 'Reserva no encontrada.' } };
    reservation.status = 'Cancelada';
    const route = db.routes.find(r => r.id === reservation.routeId);
    if (route) {
      route.availableSeats = Math.min(route.totalSeats, route.availableSeats + 1);
      if (route.availableSeats > 0) route.status = 'Activa';
    }
    saveLocalDb(db);
    return { status: 200, data: { ok: true, message: 'Reserva cancelada correctamente. El asiento ha sido liberado (+1).', reservation, route } };
  }

  if (pathname === '/api/my-trips' && method === 'GET') {
    const userId = parsed.searchParams.get('userId');
    const driverRoutes = db.routes
      .filter(r => r.driverId === userId)
      .map(r => ({
        ...r,
        passengers: db.reservations.filter(rv => rv.routeId === r.id && rv.status === 'Confirmada')
      }));
    const passengerReservations = db.reservations
      .filter(rv => rv.passengerId === userId && rv.status === 'Confirmada')
      .map(rv => ({
        ...rv,
        route: db.routes.find(r => r.id === rv.routeId)
      }));
    return { status: 200, data: { ok: true, driverRoutes, passengerReservations } };
  }

  if (pathname === '/api/reset' && method === 'POST') {
    localStorage.setItem('ecoruta_persistent_db_v1', JSON.stringify(INITIAL_DEMO_DATA));
    return { status: 200, data: { ok: true, message: 'Datos ficticios de demostración restaurados correctamente.' } };
  }

  return { status: 404, data: { ok: false, message: 'Endpoint no encontrado' } };
}

async function apiRequest(url, options = {}) {
  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options
    });
    const contentType = res.headers.get('content-type') || '';
    if (res.ok || (res.status >= 400 && res.status < 500 && contentType.includes('application/json'))) {
      const data = await res.json();
      return { status: res.status, data };
    }
    return handleLocalApi(url, options);
  } catch (e) {
    return handleLocalApi(url, options);
  }
}

function updateSessionUI() {
  if (!currentUser) {
    authSection.classList.remove('hidden');
    appWorkspace.classList.add('hidden');
    userBadge.classList.add('hidden');
    return;
  }

  authSection.classList.add('hidden');
  appWorkspace.classList.remove('hidden');
  userBadge.classList.remove('hidden');

  currentUserName.textContent = `${currentUser.name} (${currentUser.email})`;
  currentUserRole.textContent = currentUser.role === 'conductor' ? 'Conductor' : 'Pasajero';
  currentUserRole.className = `role-tag ${currentUser.role}`;

  if (currentUser.role !== 'conductor') {
    driverOnlyNotice.classList.remove('hidden');
  } else {
    driverOnlyNotice.classList.add('hidden');
  }

  loadRoutes();
  loadMyTrips();
}

async function loginWithCredentials(email, password) {
  loginFeedback.classList.add('hidden');
  const { status, data } = await apiRequest('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });

  if (status !== 200 || !data.ok) {
    showFeedback(loginFeedback, data.message || 'Error al iniciar sesión', 'error');
    return;
  }

  currentUser = data.user;
  localStorage.setItem('ecoruta_user', JSON.stringify(currentUser));
  updateSessionUI();
  showToast(`Bienvenido(a), ${currentUser.name}. Has ingresado con cuenta institucional verificada.`, 'success');
}

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  await loginWithCredentials(loginEmail.value, loginPassword.value);
});

document.querySelectorAll('.cred-item').forEach(btn => {
  btn.addEventListener('click', async () => {
    const email = btn.getAttribute('data-email');
    const pass = btn.getAttribute('data-pass');
    loginEmail.value = email;
    loginPassword.value = pass;
    await loginWithCredentials(email, pass);
  });
});

document.querySelectorAll('[data-quick-email]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const email = btn.getAttribute('data-quick-email');
    await loginWithCredentials(email, 'Password123!');
  });
});

document.getElementById('btnLogout').addEventListener('click', () => {
  currentUser = null;
  localStorage.removeItem('ecoruta_user');
  loginFeedback.classList.add('hidden');
  updateSessionUI();
});

document.getElementById('btnResetDemo').addEventListener('click', async () => {
  const { data } = await apiRequest('/api/reset', { method: 'POST' });
  if (data.ok) {
    if (currentUser) {
      loadRoutes();
      loadMyTrips();
      showToast(data.message, 'success');
    } else {
      showFeedback(loginFeedback, data.message, 'success');
    }
  }
});

// Navegación por pestañas
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => {
      p.classList.remove('active');
      p.classList.add('hidden');
    });

    btn.classList.add('active');
    const targetId = btn.getAttribute('data-tab');
    const panel = document.getElementById(targetId);
    panel.classList.remove('hidden');
    panel.classList.add('active');

    if (targetId === 'tabExplore') loadRoutes();
    if (targetId === 'tabMyTrips') loadMyTrips();
  });
});

async function loadRoutes() {
  const zone = document.getElementById('filterZone').value;
  const time = document.getElementById('filterTime').value;
  const onlyAvailable = document.getElementById('filterOnlyAvailable').checked;

  const params = new URLSearchParams();
  if (zone) params.set('zone', zone);
  if (time) params.set('time', time);
  if (onlyAvailable) params.set('onlyAvailable', 'true');

  const { data } = await apiRequest(`/api/routes?${params.toString()}`);
  renderRoutes(data.routes || []);
}

function renderRoutes(routes) {
  if (!routes.length) {
    routesList.innerHTML = `
      <div class="card">
        <p class="muted">No se encontraron rutas para este filtro. Prueba con "Ver Todas" o publica una nueva ruta.</p>
      </div>
    `;
    return;
  }

  routesList.innerHTML = routes.map(route => {
    const isFull = route.availableSeats <= 0 || route.status === 'Completa';
    const isDriverOwnRoute = currentUser && route.driverId === currentUser.id;
    const alreadyReserved = currentUser && (route.passengers || []).some(p => p.passengerId === currentUser.id);

    let actionButtonHtml = '';
    if (isDriverOwnRoute) {
      actionButtonHtml = `<span class="role-tag conductor">Tu Ruta Publicada</span>`;
    } else if (alreadyReserved) {
      actionButtonHtml = `<span class="status-pill ok">✓ Ya tienes asiento reservado</span>`;
    } else if (isFull) {
      actionButtonHtml = `<button type="button" class="btn btn-outline btn-sm" disabled>Ruta Completa (0 cupos)</button>`;
    } else {
      actionButtonHtml = `<button type="button" class="btn btn-primary btn-sm" data-reserve-id="${route.id}">Reservar Asiento en Paradero</button>`;
    }

    const passengerNames = (route.passengers || []).map(p => p.passengerName).join(', ') || 'Ningún pasajero aún';

    return `
      <article class="route-card ${isFull ? 'completa' : ''}">
        <div>
          <div class="route-top">
            <div>
              <div class="zone-title">${route.originZone} → Tecsup</div>
              <div class="passengers-mini">Conductor(a): <strong>${route.driverName}</strong></div>
            </div>
            <span class="status-pill ${isFull ? 'full' : 'ok'}">
              ${isFull ? 'Completa (0 libres)' : `Activa (${route.availableSeats} de ${route.totalSeats} libres)`}
            </span>
          </div>

          <div class="route-meta" style="margin-top: 10px;">
            <div><strong>📍 Paradero Fijo:</strong> ${route.fixedStop}</div>
            <div><strong>🕒 Salida Exacta:</strong> ${route.departureTime} hrs · <strong>Llegada Tecsup:</strong> ${route.estimatedArrival} hrs</div>
            <div><strong>🚗 Vehículo:</strong> ${route.driverVehicle}</div>
            <div><strong>📝 Nota:</strong> ${route.notes}</div>
            <div class="passengers-mini"><strong>👥 Pasajeros confirmados:</strong> ${passengerNames}</div>
          </div>
        </div>

        <div class="route-price-seats">
          <div>
            <span class="price-tag">S/ ${Number(route.contributionSoles).toFixed(2)}</span>
            <span class="passengers-mini"> / pasajero</span>
          </div>
          <div>${actionButtonHtml}</div>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('[data-reserve-id]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const routeId = btn.getAttribute('data-reserve-id');
      await reserveSeat(routeId);
    });
  });
}

async function reserveSeat(routeId) {
  if (!currentUser) return;
  const { status, data } = await apiRequest('/api/reservations', {
    method: 'POST',
    body: JSON.stringify({ routeId, passengerId: currentUser.id })
  });

  if (status !== 201 || !data.ok) {
    showToast(data.message || 'No se pudo completar la reserva.', 'error');
    return;
  }

  showToast(data.message, 'success');
  await loadRoutes();
  await loadMyTrips();
}

document.getElementById('filterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  loadRoutes();
});

document.getElementById('btnClearFilters').addEventListener('click', () => {
  document.getElementById('filterZone').value = '';
  document.getElementById('filterTime').value = '';
  document.getElementById('filterOnlyAvailable').checked = false;
  loadRoutes();
});

publishRouteForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!currentUser) return;

  const payload = {
    driverId: currentUser.id,
    originZone: document.getElementById('routeOriginZone').value,
    fixedStop: document.getElementById('routeFixedStop').value,
    departureTime: document.getElementById('routeDepartureTime').value,
    estimatedArrival: document.getElementById('routeArrivalTime').value,
    totalSeats: Number(document.getElementById('routeSeats').value),
    contributionSoles: Number(document.getElementById('routeContribution').value),
    notes: document.getElementById('routeNotes').value
  };

  const { status, data } = await apiRequest('/api/routes', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (status !== 201 || !data.ok) {
    showToast(data.message || 'No se pudo publicar la ruta', 'error');
    return;
  }

  publishRouteForm.reset();
  document.getElementById('routeDepartureTime').value = '07:15';
  document.getElementById('routeArrivalTime').value = '07:55';
  document.getElementById('routeSeats').value = '3';
  document.getElementById('routeContribution').value = '6.00';

  showToast(data.message, 'success');
  document.querySelector('[data-tab="tabExplore"]').click();
});

async function loadMyTrips() {
  if (!currentUser) return;
  const { data } = await apiRequest(`/api/my-trips?userId=${encodeURIComponent(currentUser.id)}`);

  const passengerContainer = document.getElementById('myPassengerReservations');
  const driverContainer = document.getElementById('myDriverRoutes');

  const reservations = data.passengerReservations || [];
  if (!reservations.length) {
    passengerContainer.innerHTML = `<p class="muted">No tienes reservas activas como pasajero en este momento.</p>`;
  } else {
    passengerContainer.innerHTML = reservations.map(rv => {
      const r = rv.route || {};
      return `
        <div class="trip-item">
          <div class="route-top">
            <strong>${r.originZone || 'Ruta'} → Campus Tecsup</strong>
            <span class="status-pill ok">Reserva Confirmada</span>
          </div>
          <div style="font-size: 0.86rem; margin: 8px 0;">
            <div><strong>📍 Punto de encuentro:</strong> ${rv.boardingPoint}</div>
            <div><strong>🕒 Salida:</strong> ${r.departureTime} hrs · <strong>Llegada:</strong> ${r.estimatedArrival} hrs</div>
            <div><strong>🚗 Conductor(a):</strong> ${r.driverName} (${r.driverVehicle})</div>
            <div><strong>💵 Aporte acordado:</strong> S/ ${Number(r.contributionSoles || 0).toFixed(2)}</div>
          </div>
          <button type="button" class="btn btn-danger btn-sm" data-cancel-id="${rv.id}">
            Cancelar Reserva y Liberar Asiento (H-05)
          </button>
        </div>
      `;
    }).join('');

    passengerContainer.querySelectorAll('[data-cancel-id]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const resId = btn.getAttribute('data-cancel-id');
        const { data: cancelData } = await apiRequest(`/api/reservations/${resId}`, {
          method: 'DELETE'
        });
        if (cancelData.ok) {
          showToast(cancelData.message, 'success');
          loadMyTrips();
          loadRoutes();
        } else {
          showToast(cancelData.message || 'Error al cancelar', 'error');
        }
      });
    });
  }

  const driverRoutes = data.driverRoutes || [];
  if (!driverRoutes.length) {
    driverContainer.innerHTML = `<p class="muted">No has publicado rutas como conductor con este usuario.</p>`;
  } else {
    driverContainer.innerHTML = driverRoutes.map(dr => {
      const paxList = (dr.passengers || []).length
        ? dr.passengers.map(p => `<li><strong>${p.passengerName}</strong> (${p.passengerEmail}) — Subida: ${p.boardingPoint}</li>`).join('')
        : '<li>Sin pasajeros confirmados todavía.</li>';

      return `
        <div class="trip-item">
          <div class="route-top">
            <strong>${dr.originZone} → Campus Tecsup</strong>
            <span class="status-pill ${dr.availableSeats === 0 ? 'full' : 'ok'}">
              ${dr.status} (${dr.availableSeats}/${dr.totalSeats} libres)
            </span>
          </div>
          <div style="font-size: 0.86rem; margin: 8px 0;">
            <div><strong>📍 Paradero Fijo:</strong> ${dr.fixedStop}</div>
            <div><strong>🕒 Horario:</strong> Salida ${dr.departureTime} hrs · Llegada ${dr.estimatedArrival} hrs</div>
            <div style="margin-top: 6px;"><strong>👥 Manifiesto de Pasajeros Verificados:</strong></div>
            <ul style="padding-left: 18px; margin-top: 4px;">${paxList}</ul>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Restaurar sesión previa si existe
(function init() {
  const saved = localStorage.getItem('ecoruta_user');
  if (saved) {
    try {
      currentUser = JSON.parse(saved);
      updateSessionUI();
    } catch (e) {
      localStorage.removeItem('ecoruta_user');
    }
  }
})();
