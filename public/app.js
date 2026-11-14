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

async function apiRequest(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const data = await res.json();
  return { status: res.status, data };
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
