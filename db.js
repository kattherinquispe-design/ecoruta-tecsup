const fs = require('fs');
const path = require('path');

const os = require('os');
const DEFAULT_DB_FILE = path.join(__dirname, 'data', 'db.json');
const FALLBACK_DB_FILE = path.join(os.tmpdir(), 'ecoruta_tecsup_db.json');

function getDbFilePath() {
  try {
    const dir = path.dirname(DEFAULT_DB_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.accessSync(dir, fs.constants.W_OK);
    return DEFAULT_DB_FILE;
  } catch (e) {
    return FALLBACK_DB_FILE;
  }
}

const INITIAL_DATA = {
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

function ensureDb() {
  const dbFile = getDbFilePath();
  const dir = path.dirname(dbFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify(INITIAL_DATA, null, 2), 'utf8');
  }
  return dbFile;
}

function readDb() {
  const dbFile = ensureDb();
  try {
    const raw = fs.readFileSync(dbFile, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }
}

function writeDb(data) {
  const dbFile = ensureDb();
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf8');
}

function resetDb() {
  writeDb(INITIAL_DATA);
  return readDb();
}

module.exports = {
  readDb,
  writeDb,
  resetDb,
  INITIAL_DATA
};
