# EcoRuta Tecsup — MVP de Carpooling Universitario Verificado (`v1.0.0`)

**Curso:** Construcción y Pruebas de Software · 4to Ciclo · Tecsup (2026-2)  
**Actividad:** Evaluación de Recuperación — Caso EcoRuta (Del Product Discovery al MVP desplegado)  
**Docente:** Edwin Córdova B.  
**Autora:** Kattherin  

---

## 1. Propósito del Producto y Vínculo con el Product Discovery

**EcoRuta Tecsup** es una aplicación web diseñada para ayudar a los estudiantes de Tecsup a compartir el costo y el tiempo de su traslado hacia el campus mediante rutas con **paraderos fijos en avenidas principales**, **cupos exactos controlados automáticamente** y **acceso exclusivo con correo institucional (`@tecsup.edu.pe`)**.

A diferencia del pedido inicial sin validar de los fundadores (*mapa GPS en tiempo real, pasarela de pagos integrada y reconocimiento facial*), el Product Discovery demostró con evidencia real (4 citas del caso + 3 entrevistas con *The Mom Test* + 1 experimento de conserje) que los verdaderos dolores eran:
1. **Desconfianza de viajar con desconocidos** y temor a desviarse de la ruta principal (María y Entrevista E-01).
2. **Gasto elevado (S/ 15 diarios) e incertidumbre de horario** por falta de compañeros identificados en la misma ruta (Jorge, Ana y Entrevista E-02).
3. **Caos de coordinación en WhatsApp** cuando 10 personas escriben a la vez por 3 asientos disponibles (Luis y Entrevista E-03).

---

## 2. Credenciales de Prueba (Datos 100% Ficticios)

La aplicación cuenta con botones de **acceso en 1 clic** en la pantalla de inicio de sesión para facilitar la evaluación en modo incógnito:

| Rol | Nombre Ficticio | Correo Institucional | Contraseña | Propósito de Prueba |
| :--- | :--- | :--- | :--- | :--- |
| **Pasajero** | Jorge Mendoza (Ficticio) | `jorge.mendoza@tecsup.edu.pe` | `Password123!` | Buscar rutas (H-03), reservar asiento (H-04) y cancelar reserva (H-05). |
| **Conductor** | María Quispe (Ficticio) | `maria.quispe@tecsup.edu.pe` | `Password123!` | Publicar ruta con paradero fijo (H-02) y consultar manifiesto de pasajeros (H-06). |
| **Pasajero** | Ana Torres (Ficticio) | `ana.torres@tecsup.edu.pe` | `Password123!` | Filtrar rutas de turno noche (18:10 hrs) y verificar llegada puntual. |
| **Conductor** | Luis Paredes (Ficticio) | `luis.paredes@tecsup.edu.pe` | `Password123!` | Gestionar ruta con cupos controlados sin sobrecupo. |
| **Prueba Negativa** | Usuario Externo | `externo.desconocido@gmail.com` | `Password123!` | Comprobar el Criterio 2 de `H-01` (rechazo de correos fuera de `@tecsup.edu.pe`). |

---

## 3. Historias de Usuario Incluidas en el Corte del MVP (`v1.0.0`)

| ID | Historia de Usuario | Rama Git | Estado |
| :--- | :--- | :--- | :--- |
| **H-01** | Como estudiante de Tecsup, quiero iniciar sesión validando mi correo institucional `@tecsup.edu.pe` para asegurarme de viajar únicamente con miembros verificados del campus. | `feature/H-01-autenticacion-tecsup` | Cumplida y verificada |
| **H-02** | Como estudiante conductor, quiero publicar mi ruta hacia el campus indicando zona de origen, paradero fijo, hora de salida, llegada estimada, aporte en soles y asientos disponibles (1 a 4) para ofrecer sitios sin desviarme de mi camino. | `feature/H-02-publicar-ruta-paradero` | Cumplida y verificada |
| **H-03** | Como estudiante pasajero, quiero buscar y filtrar rutas activas por zona de origen, horario de salida y disponibilidad de asientos para encontrar un viaje compatible que me permita llegar a tiempo y ahorrar. | `feature/H-03-buscar-filtrar-rutas` | Cumplida y verificada |
| **H-04** | Como estudiante pasajero, quiero reservar un asiento en una ruta activa con descuento automático de cupos y bloqueo al llegar a cero para asegurar mi sitio sin el caos de mensajes simultáneos. | `feature/H-04-reserva-control-cupos` | Cumplida y verificada |
| **H-05** | Como estudiante pasajero, quiero cancelar una reserva activa para liberar inmediatamente el asiento y permitir que otro compañero pueda tomarlo. | `feature/H-05-cancelar-reserva-liberar` | Cumplida y verificada |
| **H-06** | Como estudiante conductor o pasajero, quiero visualizar el manifiesto del viaje (lista de pasajeros confirmados, datos del vehículo y paradero fijo acordado) para abordar puntualmente sin confusiones. | `feature/H-06-manifiesto-viaje-paradero` | Cumplida y verificada |

---

## 4. Requisitos y Ejecución Local

### Requisitos previos
- **Node.js** `>= 18.0.0` (Construido sin dependencias externas pesadas para máxima velocidad y estabilidad en despliegue).
- **Git** `>= 2.x`

### Pasos para ejecutar el proyecto localmente

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd ecoruta-tecsup

# 2. Ejecutar las pruebas automatizadas de aceptación (H-01 a H-06)
npm test

# 3. Iniciar el servidor en http://localhost:3000
npm start
```

---

## 5. Documentación Completa de Evidencias (Evidencias 1 a 20)

Además del tablero en **Miro**, una copia íntegra de respaldo de las **Evidencias 1 a 20** (Discovery, Product Vision Board, Product Backlog con INVEST/Fibonacci, Sprint Backlog, Burndown, Matriz del Hilo Conductor, Sprint Review y Retrospectiva) se encuentra en [`docs/EVIDENCIAS_MIRO_1_A_20.md`](./docs/EVIDENCIAS_MIRO_1_A_20.md).
