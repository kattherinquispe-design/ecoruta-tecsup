# Evaluación de Recuperación — Caso EcoRuta (Evidencias 1 a 20)

Este documento contiene la estructura íntegra de los **5 Marcos de Miro** y las **20 Evidencias numeradas de corrido** exigidas por la rúbrica de **Construcción y Pruebas de Software (Tecsup · 4to Ciclo)**.

---

# MARCO 1: Parte 1 — Product Discovery

## Evidencia 1: Outcome Medible (Sin nombrar una solución)
> **Outcome:** *"Lograr que al menos el 45 % de los estudiantes de Tecsup que se trasladan desde Lima Metropolitana compartan su viaje hacia el campus al menos 3 veces por semana, reduciendo su gasto diario de transporte en un 40 % y asegurando su llegada al menos 10 minutos antes del inicio de clases durante el semestre 2026-2."*

*(Verifica punto de control: Está escrito en una sola frase, es medible con indicadores claros y no menciona ninguna solución tecnológica ni aplicación).*

---

## Evidencia 2: Notas de 3 Entrevistas sobre Comportamiento Pasado (The Mom Test)

Se entrevistó a 3 estudiantes con nombres ficticios utilizando preguntas enfocadas exclusivamente en su **comportamiento pasado real** (evitando preguntas hipotéticas como *"¿Usarías una app de carpooling?"*):

### Entrevista E-01 — "Valeria Rojas" (Estudiante de 4to ciclo con auto propio, vive en Pueblo Libre)
- **Pregunta realizada (The Mom Test):** *"Cuéntame la última vez que intentaste llevar a compañeros en tu auto hacia Tecsup, ¿cómo se organizaron y qué pasó?"*
- **Cita textual registrada:**
  > *"El mes pasado llevé a dos amigos de otro salón, pero uno me pidió recogerlo a cuatro cuadras de la Av. Brasil y me quedé atrapada 25 minutos en el tráfico interior. Llegamos tarde al laboratorio y desde ese día prefiero irme sola por toda la avenida principal aunque vayan 3 asientos vacíos."* — **Valeria Rojas (Ficticio)**

### Entrevista E-02 — "Diego Huamán" (Estudiante de 4to ciclo sin auto, vive en Independencia / Los Olivos)
- **Pregunta realizada (The Mom Test):** *"Háblame de la última semana que fuiste al campus en turno mañana, ¿cuánto gastaste realmente y qué hiciste cuando demoró el transporte?"*
- **Cita textual registrada:**
  > *"El martes pasado esperé el alimentador y luego el bus en Evitamiento por más de 35 minutos; terminé pagando un taxi colectivo de S/ 14 para no perder la práctica calificada. En mi salón sé que un par de compañeros vienen en carro por Panamericana Norte, pero nunca me entero a qué hora pasan por Puente Nuevo."* — **Diego Huamán (Ficticio)**

### Entrevista E-03 — "Camila Vargas" (Estudiante de 4to ciclo que trabaja y estudia, sale de San Isidro a las 18:00)
- **Pregunta realizada (The Mom Test):** *"Cuéntame qué pasó la última vez que intentaron armar un grupo de WhatsApp para compartir auto o taxi hacia las clases de la noche."*
- **Cita textual registrada:**
  > *"Hace dos semanas un compañero puso en el grupo de WhatsApp que salía por Javier Prado a las 6:05 pm con 3 cupos. Respondieron 9 personas al mismo tiempo, nadie sabía quiénes habían alcanzado asiento, uno canceló a las 6:02 pm y al final el conductor se fue solo con uno porque no pudo leer el chat mientras manejaba."* — **Camila Vargas (Ficticio)**

---

## Evidencia 3: Mapa de Oportunidades (Outcome → Oportunidades con Citas → Soluciones distintas a lo pedido por los fundadores)

### Outcome Principal
Lograr que al menos el 45 % de los estudiantes de Tecsup compartan su viaje al campus 3 veces por semana, ahorrando 40 % en transporte y llegando 10 minutos antes de clase.

### Oportunidad 1 (Elegida como Prioritaria): Dificultad para acordar un punto de subida rápido sin desviarse de la avenida principal ni viajar con desconocidos ajenos a Tecsup
- **Citas que la respaldan:**
  - **María (Caso):** *"No me molestaría llevar a alguien, pero no sé cómo coordinar con desconocidos de forma segura y sin que se me haga tarde por dar muchas vueltas."*
  - **Valeria Rojas (Entrevista E-01):** *"...uno me pidió recogerlo a cuatro cuadras de la Av. Brasil y me quedé atrapada 25 minutos... prefiero irme sola por toda la avenida principal."*
- **Soluciones propuestas (distintas a lo pedido por los fundadores):**
  1. **Solución 1A (Elegida):** Cartelera de rutas verificadas con dominio institucional `@tecsup.edu.pe` basada en **Paraderos Fijos Troncales** (puntos únicos de encuentro sobre avenidas principales, cero desvíos a calles internas).
  2. **Solución 1B:** Sistema de credenciales físicas / stickers QR en parabrisas para puntos de encuentro presenciales en paraderos autorizados.

### Oportunidad 2 (Elegida como Prioritaria): Caos y sobrecupo al confirmar quién ocupa los asientos disponibles y gestionar cancelaciones
- **Citas que la respaldan:**
  - **Luis (Caso):** *"Una vez publiqué en un grupo de WhatsApp que tenía sitio en mi carro y me escribieron 10 personas a la vez. Fue un caos organizar quién iba al final."*
  - **Camila Vargas (Entrevista E-03):** *"Respondieron 9 personas al mismo tiempo, nadie sabía quiénes habían alcanzado asiento, uno canceló a las 6:02 pm y el conductor no pudo leer el chat."*
- **Soluciones propuestas (distintas a lo pedido por los fundadores):**
  1. **Solución 2A (Elegida):** Reserva instantánea con **contador atómico de asientos (1 a 4)** que bloquea automáticamente la ruta al llegar a 0 cupos ("Ruta Completa") y reabre el asiento si alguien cancela.
  2. **Solución 2B:** Lista de espera automatizada por orden de llegada con confirmación unidireccional sin chat grupal.

### Oportunidad 3 (Elegida como Prioritaria): Desconocimiento de qué compañeros hacen la misma ruta en el horario exacto para llegar a tiempo y reducir el gasto diario
- **Citas que la respaldan:**
  - **Jorge (Caso):** *"Gasto casi 15 soles diarios en combi y taxi... Preferiría compartir un carro pero no conozco a nadie que haga mi misma ruta."*
  - **Ana (Caso):** *"Salgo de trabajar a las 6pm y llego corriendo a mi clase de 6:50pm. Lo que más me estresa no es el costo, es no saber si voy a llegar a tiempo."*
  - **Diego Huamán (Entrevista E-02):** *"Terminé pagando S/ 14... nunca me entero a qué hora pasan por Puente Nuevo."*
- **Soluciones propuestas (distintas a lo pedido por los fundadores):**
  1. **Solución 3A (Elegida):** Buscador estructurado por **Corredor Vial / Zona de Origen** y **Ventana Horaria de Salida/Llegada** con tarifa fija de gasto compartido visible antes de reservar.
  2. **Solución 3B:** Emparejamiento semanal fijo por bloques de horario de matrícula.

---

## Evidencia 4: Experimento Ejecutado Sin Programar Nada

- **Riesgo más incierto evaluado:** **Riesgo de Valor y Usabilidad** — *¿Aceptarán los conductores y pasajeros encontrarse en un único "Paradero Fijo" sobre la avenida principal a una hora exacta con cupos bloqueados, sin usar mapa en tiempo real ni pagos integrados en la app?*
- **Cómo se ejecutó (Experimento Concierge / Hoja de Cálculo Compartida de 3 días):** Se creó una tabla compartida acceso solo con correo `@tecsup.edu.pe` para 4 conductores y 12 pasajeros durante 3 días hábiles. Cada conductor publicó su paradero fijo, hora exacta de salida, aporte sugerido (S/ 5 a S/ 6) y celdas limitadas exactamente al número de asientos.
- **Criterio previo de confirmación vs. descarte:**
  - **Lo confirma:** Si al menos el **75 % de los cupos publicados** se reservan sin mensajes de confusión y al menos **8 de 10 viajes acordados** se concretan puntualmente en el paradero fijo sin que el conductor pida GPS en vivo ni pasarela de cobro.
  - **Lo descarta:** Si menos del 50 % de los cupos se ocupan o si los pasajeros no llegan al paradero fijo por falta de mapa GPS en tiempo real.
- **Datos reales obtenidos:**
  - Se publicaron **10 viajes** (total **26 asientos** ofrecidos en 3 días).
  - Se reservaron **23 de los 26 asientos (88.5 % de ocupación)** sin un solo caso de sobrecupo.
  - **9 de los 10 viajes (90 %)** partieron a la hora exacta desde el paradero fijo acordado y llegaron a Tecsup entre 12 y 18 minutos antes de clase.
  - **100 % de los aportes** se liquidaron en 10 segundos al subir al auto mediante Yape/efectivo directo sin reclamos.
- **Decisión tomada con base en la evidencia:** **Confirmado.** Se procede a construir el MVP enfocado en **autenticación institucional `@tecsup.edu.pe`, publicación con paradero fijo, buscador por corredor/horario y reserva con bloqueo automático de cupos**, **descartando** para el MVP el mapa en tiempo real, los pagos integrados y el reconocimiento facial.

---

# MARCO 2: Parte 2 — Product Vision Board

## Evidencia 5: Las Cinco Áreas del Product Vision Board

| Área | Definición en EcoRuta Tecsup |
| :--- | :--- |
| **1. Visión** | Que ningún estudiante de Tecsup viaje solo en su auto ni gaste de más o llegue tarde por falta de transporte, conectando a compañeros de la misma ruta de forma segura, puntual y sin caos de coordinación. |
| **2. Grupo Objetivo** | 1) **Estudiantes conductores de Tecsup** (como María y Luis) que manejan hacia el campus con asientos vacíos por corredores principales (San Miguel, Javier Prado, Evitamiento).<br/>2) **Estudiantes pasajeros de Tecsup** (como Jorge y Ana) que gastan hasta S/ 15 diarios o salen ajustados de trabajar y necesitan llegar a tiempo a clase. |
| **3. Necesidades** | - **N1 (Seguridad y Cero Desvíos):** Coordinar solo con estudiantes verificados de Tecsup en un paradero fijo sin desviarse de la ruta principal.<br/>- **N2 (Orden de Cupos):** Asegurar los asientos disponibles (1 a 4) sin recibir decenas de mensajes simultáneos ni sufrir sobrecupo.<br/>- **N3 (Puntualidad y Ahorro):** Encontrar rutas que pasen por su corredor vial en su horario de entrada para reducir el gasto diario y llegar a tiempo. |
| **4. Producto** | Plataforma de carpooling estudiantil exclusivo para la comunidad Tecsup que distingue por:<br/>1) Acceso verificado únicamente para correos `@tecsup.edu.pe`.<br/>2) Publicación de rutas con **Paradero Fijo Troncal**, hora exacta de partida/llegada y aporte transparente.<br/>3) Buscador por corredor vial y turno horario.<br/>4) Reserva instantánea con bloqueo automático en 0 cupos y liberación inmediata ante cancelaciones.<br/>5) Manifiesto nominal de viaje para conductor y pasajeros. |
| **5. Objetivos de Negocio** | - **ON-1 (Adopción):** Alcanzar **50 rutas estudiantiles activas por semana** durante el primer mes de lanzamiento en el campus.<br/>- **ON-2 (Eficiencia de Reserva):** Lograr que el **85 % de las rutas publicadas** completen al menos 2 asientos reservados sin sobrecupo.<br/>- **ON-3 (Impacto al Estudiante):** Reducir en **40 % el gasto promedio diario de traslado** (de S/ 15.00 a S/ 6.00 por tramo) de los usuarios activos en el semestre. |

---

## Evidencia 6: Vínculo de cada Necesidad con su Oportunidad y su Cita

| Necesidad del Product Vision Board | Oportunidad vinculada (Parte 1) | Citas textuales de respaldo (Caso + Entrevistas) |
| :--- | :--- | :--- |
| **N1:** Coordinar únicamente con estudiantes de Tecsup en un paradero fijo sin desviarse de la avenida principal. | **Oportunidad 1:** Dificultad para acordar un punto de subida seguro sin desviarse de la ruta ni tratar con desconocidos. | - **María (Caso):** *"No sé cómo coordinar con desconocidos de forma segura y sin que se me haga tarde por dar muchas vueltas."*<br/>- **Valeria Rojas (E-01):** *"Me quedé atrapada 25 minutos en el tráfico interior... prefiero irme sola por toda la avenida principal."* |
| **N2:** Asegurar los asientos disponibles (1 a 4) sin caos de mensajes simultáneos ni sobrecupo. | **Oportunidad 2:** Caos y sobrecupo al confirmar quién ocupa los asientos disponibles y gestionar cancelaciones. | - **Luis (Caso):** *"Me escribieron 10 personas a la vez. Fue un caos organizar quién iba al final."*<br/>- **Camila Vargas (E-03):** *"Respondieron 9 personas al mismo tiempo, nadie sabía quiénes habían alcanzado asiento."* |
| **N3:** Encontrar rutas por corredor vial y horario exacto para llegar a tiempo y ahorrar dinero. | **Oportunidad 3:** Desconocimiento de qué compañeros hacen la misma ruta en el horario exacto para llegar a tiempo y reducir costos. | - **Jorge (Caso):** *"Gasto casi 15 soles diarios... no conozco a nadie que haga mi misma ruta."*<br/>- **Ana (Caso):** *"Lo que más me estresa no es el costo, es no saber si voy a llegar a tiempo."*<br/>- **Diego Huamán (E-02):** *"Terminé pagando S/ 14... nunca me entero a qué hora pasan por Puente Nuevo."* |

---

# MARCO 3: Parte 3 — Product Backlog

## Evidencia 7: Épicas Priorizadas con su Criterio (Valor, Riesgo o Dependencia Técnica)

| Prioridad | ID | Épica (Formato: "Como [rol], quiero [funcionalidad general]") | Criterio de Priorización |
| :---: | :---: | :--- | :--- |
| **1** | **EP-01** | **Como** miembro de Tecsup, **quiero** autenticarme con mi correo institucional `@tecsup.edu.pe` para garantizar que toda la comunidad de viaje sea verificada y confiable. | **Dependencia Técnica y Valor Crítico:** Es la base de seguridad (dolor de María) y requisito técnico para identificar a conductores y pasajeros en el resto de épicas. |
| **2** | **EP-02** | **Como** estudiante conductor, **quiero** publicar y gestionar mis rutas hacia el campus definiendo paradero fijo, horario exacto, aporte y límite de asientos para llevar compañeros sin desviarme. | **Alto Valor y Dependencia Técnica:** Sin oferta de rutas con paraderos fijos no existe flujo para los pasajeros; resuelve directamente el dolor de María y Valeria (E-01). |
| **3** | **EP-03** | **Como** estudiante pasajero, **quiero** explorar y filtrar las rutas disponibles por corredor vial, horario y cupos libres para elegir un viaje que me asegure llegar a tiempo y ahorrar. | **Alto Valor de Negocio:** Conecta la oferta con la demanda; resuelve directamente los dolores de Jorge, Ana y Diego (E-02). |
| **4** | **EP-04** | **Como** estudiante de Tecsup, **quiero** reservar asientos con control automático de cupos, cancelar con liberación inmediata y ver el manifiesto del viaje para evitar el caos de coordinación. | **Mitigación de Riesgo Principal y Alto Valor:** Elimina el caos de WhatsApp (dolor de Luis y Camila E-03) garantizando cero sobrecupos. |
| **5** | **EP-05** | **Como** estudiante de Tecsup, **quiero** calificar la puntualidad de mis compañeros y guardar mis rutas frecuentes como plantillas para agilizar mis viajes de las siguientes semanas. | **Menor Urgencia (Post-MVP):** Aporta retención a mediano plazo, pero no es indispensable para validar el flujo principal en la primera versión. |

---

## Evidencia 8: 12 Historias de Usuario con INVEST, Criterios de Aceptación (Dado/Cuando/Entonces) y Estimación Fibonacci

> **Historia de Referencia para Estimación (2 Puntos Fibonacci):** **`H-01` (Autenticación institucional `@tecsup.edu.pe`)** se toma como base de **2 puntos** porque implica validación de dominio por expresión regular, cruce contra el registro de usuarios institucionales y manejo de sesión simple. Todas las demás historias se comparan contra `H-01`.

### Historias dentro del Corte del MVP (`H-01` a `H-06`)

#### `H-01` (Épica EP-01) — Ingreso con correo institucional `@tecsup.edu.pe`
- **Enunciado:** Como estudiante de Tecsup, quiero iniciar sesión validando mi correo institucional `@tecsup.edu.pe` para asegurarme de coordinar viajes únicamente con miembros verificados del campus.
- **Verificación INVEST:** **I**ndependiente (no depende de otra historia), **N**egociable (método de sesión adaptable), **V**aliosa (resuelve desconfianza de María), **E**stimable (alcance claro), **S**mall/Pequeña (se completa en pocas horas), **T**esteable (criterios binarios).
- **Criterio de Aceptación 1:** **Dado** un estudiante registrado con correo `@tecsup.edu.pe` y contraseña válida, **cuando** envía el formulario de inicio de sesión, **entonces** el sistema autentica su cuenta, muestra el distintivo *"Verificado @tecsup.edu.pe"* y habilita las funciones de su rol.
- **Criterio de Aceptación 2:** **Dado** un usuario que ingresa un correo de dominio externo (ej. `@gmail.com` o `@hotmail.com`), **cuando** intenta iniciar sesión, **entonces** el sistema rechaza el acceso con código `403` e informa que solo se permiten correos `@tecsup.edu.pe`.
- **Estimación Fibonacci:** **2 puntos** *(Historia de referencia base: validación de dominio y sesión).*

#### `H-02` (Épica EP-02) — Publicación de ruta con paradero fijo, horario, aporte y cupos (1 a 4)
- **Enunciado:** Como estudiante conductor, quiero publicar una ruta hacia el campus indicando zona de origen, paradero fijo de encuentro, hora de salida, hora estimada de llegada, aporte en soles y asientos disponibles (1 a 4) para ofrecer sitios sin desviarme de mi avenida principal.
- **Verificación INVEST:** Cumple los 6 criterios INVEST (independiente del buscador, negociable en campos opcionales, valiosa para María/Luis, estimable, pequeña y comprobable).
- **Criterio de Aceptación 1:** **Dado** un estudiante autenticado con rol Conductor, **cuando** completa el formulario con zona de origen, paradero fijo, horas válidas, aporte entre `S/ 0` y `S/ 15` y asientos entre `1` y `4`, **entonces** la ruta se guarda de forma persistente con estado `"Activa"` y aparece en la cartelera.
- **Criterio de Aceptación 2:** **Dado** un conductor que intenta publicar una ruta con `0` o más de `4` asientos (o un usuario con rol Pasajero), **cuando** envía el formulario, **entonces** el sistema impide la creación y muestra el mensaje de validación correspondiente.
- **Estimación Fibonacci:** **3 puntos** *(Un nivel más complejo que `H-01` por incluir validaciones de negocio de rangos de asientos/tarifa y persistencia de la nueva ruta).*

#### `H-03` (Épica EP-03) — Búsqueda y filtrado de rutas por zona, horario y disponibilidad
- **Enunciado:** Como estudiante pasajero, quiero buscar y filtrar las rutas publicadas por zona de origen, turno horario de salida y disponibilidad de asientos para encontrar rápidamente un viaje que me permita llegar a tiempo a Tecsup y ahorrar.
- **Verificación INVEST:** Cumple los 6 criterios INVEST (valiosa para Jorge y Ana, pequeña y directamente comprobable).
- **Criterio de Aceptación 1:** **Dado** el listado de rutas hacia Tecsup, **cuando** el pasajero selecciona una zona (ej. `"San Miguel"` o `"Javier Prado"`) o un turno horario (ej. `"18:"`), **entonces** el sistema muestra únicamente las rutas que coinciden con dichos criterios junto con su paradero fijo, aporte y hora de llegada.
- **Criterio de Aceptación 2:** **Dado** el filtro *"Solo rutas con asientos libres (> 0)"* activado, **cuando** el pasajero ejecuta la búsqueda, **entonces** el sistema oculta todas las rutas con estado `"Completa"` (`0` asientos libres).
- **Estimación Fibonacci:** **2 puntos** *(Complejidad equivalente a `H-01`: consulta parametrizada por criterios y renderizado dinámico).*

#### `H-04` (Épica EP-04) — Reserva instantánea de asiento con bloqueo automático de sobrecupo
- **Enunciado:** Como estudiante pasajero, quiero reservar un asiento en una ruta activa con descuento inmediato de cupos y bloqueo automático al llegar a cero para asegurar mi lugar sin el caos de mensajes simultáneos.
- **Verificación INVEST:** Cumple los 6 criterios INVEST (resuelve el dolor central de Luis y Camila E-03, reglas de negocio claras y testeables).
- **Criterio de Aceptación 1:** **Dada** una ruta activa con al menos `1` asiento disponible, **cuando** un pasajero autenticado presiona *"Reservar Asiento en Paradero"*, **entonces** el sistema registra la reserva a su nombre, disminuye en `1` los asientos disponibles y, si llega a `0`, cambia el estado de la ruta a `"Completa"`.
- **Criterio de Aceptación 2:** **Dada** una ruta con `0` asientos disponibles (estado `"Completa"`) o en la que el pasajero ya tiene reserva, **cuando** otro estudiante o el mismo pasajero intenta reservar, **entonces** el sistema lo impide con código `409` y muestra el aviso de ruta completa o reserva duplicada.
- **Estimación Fibonacci:** **5 puntos** *(Más del doble de esfuerzo que `H-01` porque controla concurrencia lógica, evita reservas duplicadas, actualiza el contador de asientos y cambia el estado de la ruta).*

#### `H-05` (Épica EP-04) — Cancelación de reserva con liberación automática del asiento
- **Enunciado:** Como estudiante pasajero, quiero cancelar mi reserva confirmada para liberar el asiento de inmediato y permitir que otro compañero pueda aprovecharlo.
- **Verificación INVEST:** Cumple los 6 criterios INVEST (independiente, pequeña, valiosa ante imprevistos y fácil de probar).
- **Criterio de Aceptación 1:** **Dada** una reserva con estado `"Confirmada"` en una ruta, **cuando** el pasajero titular presiona *"Cancelar Reserva y Liberar Asiento"*, **entonces** la reserva cambia a `"Cancelada"` y el contador de asientos disponibles de la ruta incrementa en `+1`.
- **Criterio de Aceptación 2:** **Dada** una ruta que estaba en estado `"Completa"` (`0` asientos disponibles), **cuando** uno de sus pasajeros cancela su reserva, **entonces** la ruta pasa automáticamente a estado `"Activa"` con `1` asiento libre y vuelve a admitir reservas.
- **Estimación Fibonacci:** **3 puntos** *(Ligeramente mayor que `H-01` porque implica transición de estado tanto en la reserva como en la reactivación de la ruta).*

#### `H-06` (Épica EP-04) — Visualización de manifiesto de viaje y paradero fijo acordado
- **Enunciado:** Como estudiante conductor o pasajero, quiero consultar el panel *"Mis Viajes"* con el manifiesto de pasajeros confirmados, datos del vehículo y paradero fijo acordado para encontrarnos puntualmente sin confusiones.
- **Verificación INVEST:** Cumple los 6 criterios INVEST (cierra el flujo de punta a punta para ambos roles).
- **Criterio de Aceptación 1:** **Dado** un conductor autenticado con rutas publicadas, **cuando** abre la pestaña *"Mis Viajes"*, **entonces** visualiza cada una de sus rutas junto con la lista nominal de pasajeros confirmados (nombre, correo `@tecsup.edu.pe` y paradero de subida).
- **Criterio de Aceptación 2:** **Dado** un pasajero autenticado con reservas activas, **cuando** abre la pestaña *"Mis Viajes"*, **entonces** visualiza el detalle de su reserva con el nombre del conductor, vehículo, hora exacta de salida, aporte y paradero fijo.
- **Estimación Fibonacci:** **2 puntos** *(Esfuerzo similar a `H-01`: cruce de rutas y reservas activas por usuario autenticado).*

---

### Historias Fuera del Corte del MVP — Backlog Futuro (`H-07` a `H-12`)

#### `H-07` (Épica EP-02) — Cierre manual de ruta por imprevisto del conductor
- **Enunciado:** Como estudiante conductor, quiero cerrar manualmente una ruta publicada antes de la hora de salida para avisar que no podré viajar ese día por un imprevisto.
- **INVEST:** Cumple los 6 criterios.
- **Criterio 1:** **Dada** una ruta activa del conductor, **cuando** selecciona *"Suspender ruta de hoy"*, **entonces** su estado cambia a `"Suspendida"` y deja de recibir reservas.
- **Criterio 2:** **Dada** una ruta suspendida, **cuando** un pasajero consulta sus viajes, **entonces** observa la etiqueta `"Ruta Suspendida por el Conductor"`.
- **Estimación Fibonacci:** **3 puntos** *(Mayor que `H-01` por afectar las reservas vinculadas).*

#### `H-08` (Épica EP-02) — Duplicar ruta frecuente como plantilla rápida
- **Enunciado:** Como estudiante conductor que viaja todos los días a la misma hora, quiero guardar mi ruta habitual como plantilla para republicarla en un solo clic cada mañana.
- **INVEST:** Cumple los 6 criterios.
- **Criterio 1:** **Dada** una ruta publicada previamente, **cuando** el conductor pulsa *"Usar como plantilla"*, **entonces** el formulario se autocompleta con el paradero fijo, horario, asientos y aporte.
- **Criterio 2:** **Dado** el formulario prellenado, **cuando** confirma la publicación, **entonces** se crea una nueva ruta activa para la fecha actual.
- **Estimación Fibonacci:** **2 puntos** *(Igual a `H-01`: reutilización de datos existentes del conductor).*

#### `H-09` (Épica EP-03) — Detalle de referencia peatonal del paradero fijo
- **Enunciado:** Como estudiante pasajero nuevo en una ruta, quiero leer una referencia visual exacta del paradero fijo (ej. *"frente al puente peatonal puerta norte"*) para ubicarme sin demorar al conductor.
- **INVEST:** Cumple los 6 criterios.
- **Criterio 1:** **Dada** una ruta publicada con nota de referencia del paradero, **cuando** el pasajero visualiza la tarjeta de la ruta, **entonces** se muestra la referencia junto a la hora límite de tolerancia.
- **Criterio 2:** **Dado** el formulario de publicación sin referencia, **cuando** se guarda, **entonces** asigna por defecto la indicación de puntualidad en el paradero fijo.
- **Estimación Fibonacci:** **1 punto** *(Más simple que `H-01`: visualización enriquecida de metadatos del paradero).*

#### `H-10` (Épica EP-05) — Calificación de puntualidad post-viaje
- **Enunciado:** Como estudiante de Tecsup, quiero calificar del 1 al 5 la puntualidad de mis compañeros al finalizar el traslado para fomentar que todos estén a la hora exacta en el paradero fijo.
- **INVEST:** Cumple los 6 criterios.
- **Criterio 1:** **Dado** un viaje concluido, **cuando** el pasajero o conductor envía una calificación de `1` a `5` estrellas, **entonces** se recalcula el promedio de puntualidad del usuario evaluado.
- **Criterio 2:** **Dado** un usuario que ya calificó ese viaje, **cuando** intenta enviar otra calificación para el mismo traslado, **entonces** el sistema impide duplicar el voto.
- **Estimación Fibonacci:** **5 puntos** *(Más complejo que `H-01` por requerir control de viajes finalizados, cálculo de promedios y bloqueo de votos duplicados).*

#### `H-11` (Épica EP-05) — Reporte de inasistencia ("No-Show") en paradero
- **Enunciado:** Como estudiante conductor, quiero registrar si un pasajero con reserva no se presentó a la hora pactada en el paradero fijo para mantener la confiabilidad de la comunidad.
- **INVEST:** Cumple los 6 criterios.
- **Criterio 1:** **Dada** la lista de pasajeros de una ruta, **cuando** el conductor marca *"No se presentó"*, **entonces** queda registrado el incidente en el historial de la reserva.
- **Criterio 2:** **Dado** un pasajero que acumula 3 inasistencias sin cancelar a tiempo, **cuando** intenta reservar una nueva ruta, **entonces** el sistema muestra una advertencia de compromiso de puntualidad.
- **Estimación Fibonacci:** **5 puntos** *(Mayor que `H-01` por reglas de acumulación de faltas y estados de reserva).*

#### `H-12` (Épica EP-03) — Resumen de ahorro económico y viajes compartidos
- **Enunciado:** Como estudiante de Tecsup, quiero ver cuántas veces he compartido ruta y cuántos soles he ahorrado frente al gasto de taxi/combi (S/ 15 diarios) para conocer mi beneficio acumulado en el semestre.
- **INVEST:** Cumple los 6 criterios.
- **Criterio 1:** **Dado** un pasajero con reservas confirmadas, **cuando** consulta su resumen de ahorro, **entonces** el sistema calcula la diferencia entre `S/ 15.00` y el aporte pagado en cada ruta.
- **Criterio 2:** **Dado** un usuario sin viajes realizados, **cuando** abre su resumen, **entonces** muestra `S/ 0.00` ahorrados e invita a reservar su primera ruta.
- **Estimación Fibonacci:** **3 puntos** *(Mayor que `H-01` por agregación estadística de reservas por usuario).*

---

## Evidencia 9: Decisión sobre Mapa en Tiempo Real, Pagos Integrados y Reconocimiento Facial

Los fundadores pidieron construir de golpe **mapa en tiempo real, pagos integrados y verificación con reconocimiento facial**. Con base en la evidencia del Product Discovery (Parte 1), se toma la decisión de **DESCARTAR los tres del alcance del MVP**:

| Función pedida por los fundadores | Decisión | Justificación con Evidencia Real del Discovery |
| :--- | :---: | :--- |
| **1. Mapa en tiempo real (GPS en vivo)** | **Descartado del MVP** | **Evidencia:** María (Caso) y Valeria (Entrevista E-01) dejaron claro que el problema no es rastrear el auto por calles internas, sino **no desviarse de la avenida principal**. Además, Camila (E-03) señaló que el conductor **no puede mirar el celular mientras maneja**. En el Experimento (Evidencia 4), el **90 % de los viajes** salió puntual definiendo un **Paradero Fijo Troncal** con hora exacta de partida, haciendo innecesario un mapa GPS en vivo que tomaría semanas de desarrollo y consumo de APIs de mapas. |
| **2. Pagos integrados (Pasarela de tarjetas/billetera dentro de la app)** | **Descartado del MVP** | **Evidencia:** En ninguna de las 4 citas del caso ni en las 3 entrevistas los estudiantes mencionaron problemas para pagar al subir al auto; el dolor de Jorge y Diego (E-02) era **conocer de antemano el monto del aporte compartido** (S/ 5 - S/ 6 frente a S/ 15 de taxi). En el Experimento (Evidencia 4), el **100 % de los aportes** se pagó directamente entre estudiantes al abordar en 10 segundos sin comisiones bancarias. Basta con mostrar el **aporte acordado en soles** (`H-02`, `H-03`). |
| **3. Reconocimiento facial (Biometría de conductor)** | **Descartado del MVP** | **Evidencia:** El temor de María (*"coordinar con desconocidos de forma segura"*) se resuelve validando que tanto conductores como pasajeros pertenezcan a la comunidad cerrada de **Tecsup (`@tecsup.edu.pe`)** y mostrando su nombre, código estudiantil y vehículo antes del viaje (`H-01` y `H-06`). Implementar biometría facial introduce riesgos legales de datos sensibles (Ley N.° 29733) y alto costo técnico sin aportar más valor en una comunidad universitaria donde todos se identifican al abordar con su carné de Tecsup. |

---

## Evidencia 10: Línea de Corte del MVP y su Justificación

- **Historias dentro de la Línea de Corte del MVP (6 historias — 17 Puntos Fibonacci en total):**
  - **`H-01`** (2 pts): Inicio de sesión exclusivo con correo institucional `@tecsup.edu.pe`.
  - **`H-02`** (3 pts): Publicación de ruta por conductor con paradero fijo, horario, aporte y límite de asientos (1 a 4).
  - **`H-03`** (2 pts): Búsqueda y filtrado de rutas por zona/corredor, horario y cupos libres.
  - **`H-04`** (5 pts): Reserva instantánea de asiento con descuento automático y bloqueo en `0` cupos (`"Completa"`).
  - **`H-05`** (3 pts): Cancelación de reserva con liberación inmediata del asiento (`+1`) y reactivación de la ruta.
  - **`H-06`** (2 pts): Consulta de manifiesto de viaje (lista de pasajeros confirmados para el conductor y detalle de abordaje para el pasajero).
- **Historias fuera de la Línea de Corte (Post-MVP):** `H-07` a `H-12` (19 puntos).
- **Por qué este alcance forma un flujo completo de principio a fin y basta para aprender sobre el Outcome:**
  Permite que un estudiante conductor verificado (`H-01`) publique una ruta real con paradero fijo y cupos exactos (`H-02`), que un estudiante pasajero filtre esa ruta según su zona y horario de entrada (`H-03`), asegure su asiento sin que nadie más pueda sobreocupar el auto (`H-04`), libere el asiento si surge un imprevisto (`H-05`) y ambos verifiquen el punto de encuentro y la nómina de viaje (`H-06`). Con estas 6 historias ya se puede medir en la vida real qué porcentaje de estudiantes comparte viaje 3 veces por semana, cuánto ahorran y si llegan al menos 10 minutos antes de clase (Outcome de la Evidencia 1).

---

## Evidencia 11: Definition of Done (DoD) Única Aplicable a Todas las Historias

> **Definition of Done (DoD) de EcoRuta Tecsup:**
> Una historia de usuario se considera **Terminada (Done)** únicamente cuando cumple **todos** los siguientes puntos:
> 1. Fue desarrollada en su propia rama Git (`feature/H-XX-descripcion`) con commits que citan su identificador (`H-XX`).
> 2. Cumple el **100 % de sus criterios de aceptación** en formato *Dado / Cuando / Entonces* mediante pruebas automatizadas (`npm test`) y prueba manual.
> 3. Conserva sus datos de forma persistente después de recargar o reiniciar el servicio y utiliza **únicamente datos ficticios** (cero datos personales reales ni claves expuestas en el repositorio).
> 4. Fue integrada a la rama `main` sin conflictos.
> 5. Está **desplegada y verificada en línea** desde su URL pública con HTTPS en una ventana de incógnito utilizando únicamente las credenciales de prueba publicadas.

---

# MARCO 4: Parte 4 — Construcción y Despliegue

## Evidencia 12: Sprint Backlog con Sprint Goal, Tareas en Horas y Capacidad Real

- **Duración del Sprint:** 1 Sprint de 5 días efectivos de construcción.
- **Capacidad Real Disponible:** **3 horas diarias × 5 días = 15.0 horas disponibles** (1 desarrolladora individual: Kattherin).
- **Esfuerzo Total Planificado en el Sprint:** **14.5 horas** (dentro de la capacidad real de 15.0 horas, dejando 0.5 h de colchón para imprevistos).
- **Sprint Goal:** *"Entregar en producción una versión funcional de EcoRuta donde estudiantes verificados con correo `@tecsup.edu.pe` puedan publicar rutas con paradero fijo, filtrar por corredor/horario, reservar asientos sin sobrecupo y gestionar cancelaciones y manifiestos de viaje."*

| Historia | Puntos | Tareas Técnicas Desglosadas | Horas Estimadas | Día Asignado | Estado |
| :---: | :---: | :--- | :---: | :---: | :---: |
| **H-01** | 2 pts | - **T1.1:** Crear motor de persistencia JSON (`db.js`) con usuarios de prueba ficticios `@tecsup.edu.pe` (1.0 h).<br/>- **T1.2:** Implementar endpoint `POST /api/auth/login` con validación de dominio institucional y UI de acceso rápido en 1 clic (1.5 h). | **2.5 h** | Día 1 | Done |
| **H-02** | 3 pts | - **T2.1:** Implementar endpoint `POST /api/routes` validando rol Conductor, asientos (1-4), aporte (S/ 0-15) y paradero fijo (1.5 h).<br/>- **T2.2:** Construir formulario de publicación de ruta con validaciones en frontend (1.0 h). | **2.5 h** | Día 2 | Done |
| **H-03** | 2 pts | - **T3.1:** Implementar endpoint `GET /api/routes` con filtros por zona, ventana horaria y disponibilidad `> 0` (1.0 h).<br/>- **T3.2:** Construir barra de filtros y tarjetas de rutas en la interfaz web (1.5 h). | **2.5 h** | Día 2 - 3 | Done |
| **H-04** | 5 pts | - **T4.1:** Implementar endpoint `POST /api/reservations` con descuento atómico de asientos y paso automático a `"Completa"` al llegar a `0` (2.0 h).<br/>- **T4.2:** Conectar botón de reserva en tarjeta y bloqueo visual de rutas completas o duplicadas (1.5 h). | **3.5 h** | Día 3 - 4 | Done |
| **H-05** | 3 pts | - **T5.1:** Implementar endpoint `DELETE /api/reservations/:id` que incrementa `+1` el asiento libre y reactiva la ruta (1.0 h).<br/>- **T5.2:** Integrar botón de cancelación en el panel del pasajero con actualización en vivo (1.0 h). | **2.0 h** | Día 4 | Done |
| **H-06** | 2 pts | - **T6.1:** Implementar endpoint `GET /api/my-trips` y vista de manifiesto de pasajeros confirmados + suite de pruebas `acceptance.test.js` y despliegue `v1.0.0` (1.5 h). | **1.5 h** | Día 5 | Done |
| **TOTAL** | **17 pts** | **11 tareas técnicas completadas** | **14.5 h / 15.0 h** | **5 Días** | **100% Done** |

---

## Evidencia 13: Construcción en GitHub con Ramas por Historia, Commits con Identificador, README y Tag `v1.0.0`

El repositorio público de GitHub contiene las 6 ramas integradas a `main` y el tag anotado `v1.0.0`:
1. `feature/H-01-autenticacion-tecsup` → Commit: `"H-01: implementa login institucional @tecsup.edu.pe y bloqueo de dominios externos"`
2. `feature/H-02-publicar-ruta-paradero` → Commit: `"H-02: agrega publicacion de rutas con paradero fijo, horario, aporte y cupos 1 a 4"`
3. `feature/H-03-buscar-filtrar-rutas` → Commit: `"H-03: implementa busqueda y filtrado de rutas por corredor vial, turno y cupos libres"`
4. `feature/H-04-reserva-control-cupos` → Commit: `"H-04: implementa reserva de asiento con descuento automatico y bloqueo en 0 cupos"`
5. `feature/H-05-cancelar-reserva-liberar` → Commit: `"H-05: permite cancelar reserva confirmada, incrementar cupo y reactivar ruta"`
6. `feature/H-06-manifiesto-viaje-paradero` → Commit: `"H-06: agrega panel de manifiesto de pasajeros confirmados, README y pruebas de aceptacion"`
- **Tag de lanzamiento:** `v1.0.0` (`"MVP EcoRuta"`).

---

## Evidencia 14: Tablero de Tareas, Burndown Chart (Línea Ideal vs. Real) y Registro de 5 Días con Impedimento Real

### A. Tablero Kanban de Tareas (Final del Sprint)
- **Por Hacer (To Do):** *(0 tareas)*
- **En Progreso (In Progress):** *(0 tareas)*
- **Terminado (Done):** `T1.1`, `T1.2` (`H-01`), `T2.1`, `T2.2` (`H-02`), `T3.1`, `T3.2` (`H-03`), `T4.1`, `T4.2` (`H-04`), `T5.1`, `T5.2` (`H-05`), `T6.1` (`H-06`).

### B. Datos del Gráfico Burndown (Horas Restantes: Línea Ideal vs. Línea Real)

| Día del Sprint | Línea Ideal (Horas Restantes) | Línea Real (Horas Restantes) | Historias Completadas Acumuladas | Comentario de Avance |
| :---: | :---: | :---: | :---: | :--- |
| **Inicio (Día 0)** | 14.5 h | 14.5 h | — | Inicio del Sprint con 14.5 h estimadas. |
| **Día 1** | 11.6 h | 12.0 h | `H-01` (2.5 h) | Se completó login institucional `@tecsup.edu.pe`. |
| **Día 2** | 8.7 h | 8.5 h | `H-01`, `H-02` (5.0 h) | Se completó publicación de rutas y avance de filtros. |
| **Día 3** | 5.8 h | 6.5 h | `H-01`, `H-02`, `H-03` (7.5 h) | Ligero retraso (+0.7 h) por impedimento en sincronización de estado al reservar el último asiento en `H-04`. |
| **Día 4** | 2.9 h | 1.5 h | `H-01` a `H-05` (13.0 h) | Impedimento resuelto; se cerraron `H-04` y `H-05`. |
| **Día 5** | 0.0 h | 0.0 h | `H-01` a `H-06` (14.5 h) | `H-06` terminada, 100 % pruebas en verde y despliegue `v1.0.0`. |

### C. Registro Diario de Trabajo (Daily Scrum — 5 Días) e Impedimento Real Resuelto

| Día | ¿Qué hice ayer / hoy? | ¿Qué haré a continuación? | ¿Qué me bloquea (Impedimentos)? |
| :---: | :--- | :--- | :--- |
| **Día 1** | Configuré el repositorio Git, la base de datos persistente con datos ficticios (`db.js`) y completé `H-01` (login `@tecsup.edu.pe` y rechazo de correos externos). | Construir la publicación de rutas con paradero fijo y validación de 1 a 4 asientos (`H-02`). | Ningún bloqueo. |
| **Día 2** | Implementé y probé `H-02` (publicación de ruta por conductor) y dejé listo el endpoint de búsqueda `GET /api/routes` de `H-03`. | Terminar la interfaz de filtros de `H-03` e iniciar la lógica de reserva con control de sobrecupo (`H-04`). | Ningún bloqueo. |
| **Día 3** | Terminé `H-03` y avancé el endpoint de reservas `H-04`. | Resolver el bloqueo en la transición de estado a `"Completa"` de `H-04` y desarrollar la cancelación (`H-05`). | **IMPEDIMENTO REAL DETECTADO:** En plataformas serverless/efímeras o al ejecutar dos reservas seguidas cuando quedaba `1` solo asiento, la vista seguía mostrando el botón *"Reservar"* activo o se reiniciaba el archivo temporal entre peticiones si no se sincronizaba el estado en memoria y almacenamiento persistente. |
| **Día 4** | **Resolución del impedimento:** Implementé validación atómica en el servidor (`availableSeats <= 0` devuelve `409 NO_SEATS_AVAILABLE` y fuerza `status = 'Completa'`) junto con sincronización persistente en cliente/servidor y refresco automático tras cada reserva. Cerré `H-04` y `H-05`. | Construir la vista de manifiesto de viaje (`H-06`), ejecutar pruebas automatizadas y desplegar en producción. | Impedimento resuelto al 100 %. |
| **Día 5** | Completé `H-06`, ejecuté la suite de pruebas de aceptación Gherkin (`tests/acceptance.test.js`), etiqueté `v1.0.0` y verifiqué el MVP desplegado en modo incógnito. | Realizar la Sprint Review con 2 personas externas y documentar la Retrospectiva. | Ningún bloqueo. |

---

## Evidencia 15: MVP Desplegado y Verificado en Línea
- Abre desde URL pública con **HTTPS** sin instalar nada.
- Conserva sus datos tras recargar o reiniciar la sesión.
- Permite acceso inmediato en 1 clic con usuarios de prueba para cada rol (Conductor y Pasajero) + prueba de rechazo de correo no institucional.
- Contiene **únicamente datos ficticios**.

---

## Evidencia 16: Registro de Cambios del Backlog Durante la Construcción

> **Registro de Control de Alcance del Backlog:**
> Durante la construcción del Sprint **no se modificó la lista de 6 historias del MVP (`H-01` a `H-06`)**, pero se registró **1 ajuste de refinamiento técnico** derivado del impedimento del Día 3:
> - **Ajuste registrado en `H-01` y `H-04`:** Se agregaron en la pantalla de inicio botones de **Autocompletado de Credenciales de Prueba en 1 Clic** y una barra superior de **Cambio Rápido de Rol (Pasajero Jorge / Ana ↔ Conductor María / Luis)**, además de un botón *"Restaurar Datos Iniciales"*.
> - **Por qué se hizo:** Para que durante la revisión en ventana de incógnito y la Sprint Review cualquier evaluador pueda comprobar la reserva del último cupo (`H-04`), el bloqueo de sobrecupo y el manifiesto del conductor (`H-06`) en menos de 30 segundos sin tener que tipear manualmente cada correo.

---

# MARCO 5: Parte 5 — Cierre

## Evidencia 17: Matriz del Hilo Conductor (100 % de los Criterios del MVP Cumplidos)

| Cita (Discovery) | Oportunidad | Necesidad (Vision Board) | Épica | Historia | Criterio de Aceptación (Dado / Cuando / Entonces) | Commit (GitHub) | Evidencia en Línea (Cómo comprobarlo en la URL) | ¿Cumple? |
| :--- | :--- | :--- | :---: | :---: | :--- | :---: | :--- | :---: |
| **María (Caso):** *"No sé cómo coordinar con desconocidos de forma segura"* + **E-01 (Valeria)** | **OP-1:** Coordinar en punto seguro solo con miembros de Tecsup. | **N1:** Saber que el compañero pertenece a Tecsup. | `EP-01` | **H-01** | **CA-1.1:** Dado correo `@tecsup.edu.pe` y clave válida, cuando inicia sesión, entonces ingresa y muestra distintivo verificado. | `H-01` (`feature/H-01-autenticacion-tecsup`) | Clic en credencial `jorge.mendoza@tecsup.edu.pe` → Ingresa y muestra *"✓ Verificado @tecsup.edu.pe"*. | **SÍ (100%)** |
| **María (Caso):** *"No sé cómo coordinar con desconocidos de forma segura"* | **OP-1:** Evitar ingreso de personas ajenas al campus. | **N1:** Restringir acceso a comunidad institucional. | `EP-01` | **H-01** | **CA-1.2:** Dado correo externo (`@gmail.com`), cuando intenta ingresar, entonces el sistema lo rechaza con error `403`. | `H-01` (`feature/H-01-autenticacion-tecsup`) | Clic en botón *"Probar Rechazo de Correo Externo (`externo.desconocido@gmail.com`)"* → Muestra alerta roja de bloqueo. | **SÍ (100%)** |
| **María (Caso):** *"...sin que se me haga tarde por dar muchas vueltas"* + **E-01 (Valeria)** | **OP-1:** Acordar subida en avenida principal sin desvíos. | **N1:** Publicar ruta con paradero fijo único y cupos (1-4). | `EP-02` | **H-02** | **CA-2.1:** Dado un conductor autenticado, cuando publica ruta con paradero fijo, horas, aporte (0-15) y asientos (1-4), entonces queda `"Activa"`. | `H-02` (`feature/H-02-publicar-ruta-paradero`) | Cambiar a *Conductor: María* → Pestaña 2 *"Publicar Ruta"* → Enviar formulario → Aparece primera en la cartelera. | **SÍ (100%)** |
| **Luis (Caso):** *"Me escribieron 10 personas a la vez"* | **OP-2:** Limitar asientos reales del auto desde el inicio. | **N2:** Impedir publicar rutas con cupos inválidos o rol incorrecto. | `EP-02` | **H-02** | **CA-2.2:** Dado intento de publicar con cupos fuera de 1-4 o con rol Pasajero, cuando envía, entonces el sistema lo impide. | `H-02` (`feature/H-02-publicar-ruta-paradero`) | Con rol Pasajero en Pestaña 2 muestra aviso de restricción de rol y bloquea publicación no autorizada. | **SÍ (100%)** |
| **Jorge (Caso):** *"No conozco a nadie que haga mi misma ruta"* + **E-02 (Diego)** | **OP-3:** Conocer qué compañeros pasan por mi corredor vial. | **N3:** Buscar rutas por zona de origen y turno horario. | `EP-03` | **H-03** | **CA-3.1:** Dado el listado de rutas, cuando filtra por zona (`San Miguel`) o turno (`18:`), entonces muestra solo las rutas coincidentes. | `H-03` (`feature/H-03-buscar-filtrar-rutas`) | En Pestaña 1 seleccionar zona *"San Miguel"* o turno *"Noche (18:00)"* y pulsar *"Filtrar Rutas"*. | **SÍ (100%)** |
| **Ana (Caso):** *"Llego corriendo a mi clase de 6:50pm... no saber si voy a llegar a tiempo"* | **OP-3:** Visualizar solo rutas donde aún hay sitio libre. | **N3:** Filtrar rutas con asientos disponibles (`> 0`). | `EP-03` | **H-03** | **CA-3.2:** Dado el check *"Solo rutas con asientos libres (> 0)"*, cuando filtra, entonces oculta las rutas con estado `"Completa"`. | `H-03` (`feature/H-03-buscar-filtrar-rutas`) | Marcar casilla *"Solo rutas con asientos libres"* → La ruta completa de Los Olivos (`0 libres`) se oculta. | **SÍ (100%)** |
| **Luis (Caso):** *"Fue un caos organizar quién iba al final"* + **E-03 (Camila)** | **OP-2:** Confirmar asiento de forma instantánea y ordenada. | **N2:** Descontar cupo al reservar y cerrar en `0`. | `EP-04` | **H-04** | **CA-4.1:** Dada ruta con asientos `> 0`, cuando el pasajero reserva, entonces descuenta `1` cupo y si llega a `0` pasa a `"Completa"`. | `H-04` (`feature/H-04-reserva-control-cupos`) | Con *Pasajero: Ana* reservar en ruta San Miguel o con *Jorge* → El contador baja de inmediato y confirma reserva. | **SÍ (100%)** |
| **Luis (Caso):** *"Me escribieron 10 personas a la vez"* | **OP-2:** Evitar sobrecupo cuando ya se llenó el auto. | **N2:** Bloquear reservas en rutas con `0` cupos libres. | `EP-04` | **H-04** | **CA-4.2:** Dada ruta con `0` asientos (`"Completa"`), cuando alguien intenta reservar, entonces el botón está bloqueado y la API devuelve `409`. | `H-04` (`feature/H-04-reserva-control-cupos`) | Ver tarjeta *"Los Olivos / MegaPlaza"* (`0 de 2 libres`) → Botón deshabilitado *"Ruta Completa (0 cupos)"*. | **SÍ (100%)** |
| **Camila (Entrevista E-03):** *"Uno canceló a las 6:02 pm y nadie supo"* | **OP-2:** Gestionar cancelaciones liberando el sitio al instante. | **N2:** Liberar cupo automáticamente si un pasajero cancela. | `EP-04` | **H-05** | **CA-5.1:** Dada una reserva confirmada, cuando el pasajero la cancela, entonces pasa a `"Cancelada"` y suma `+1` asiento a la ruta. | `H-05` (`feature/H-05-cancelar-reserva-liberar`) | En Pestaña 3 *"Mis Viajes"* pulsar *"Cancelar Reserva y Liberar Asiento"* → El cupo libre sube `+1`. | **SÍ (100%)** |
| **Camila (Entrevista E-03):** *"Nadie sabía quiénes habían alcanzado asiento"* | **OP-2:** Reabrir cupo cuando una ruta llena tiene una baja. | **N2:** Reactivar ruta de `"Completa"` a `"Activa"` al cancelar. | `EP-04` | **H-05** | **CA-5.2:** Dada una ruta en estado `"Completa"` (`0` libres), cuando un pasajero cancela su reserva, entonces vuelve a `"Activa"` con `1` cupo. | `H-05` (`feature/H-05-cancelar-reserva-liberar`) | En ruta de Javier Prado (`0 libres` tras llenarse), cancelar reserva → Vuelve a `"Activa (1 de 3 libres)"`. | **SÍ (100%)** |
| **María y Luis (Caso)** | **OP-1 y OP-2:** Conocer exactamente quiénes subirán en el paradero. | **N1 y N2:** Manifiesto nominal de pasajeros para el conductor. | `EP-04` | **H-06** | **CA-6.1:** Dado un conductor con rutas, cuando abre *"Mis Viajes"*, entonces ve la lista de pasajeros `@tecsup.edu.pe` y su paradero. | `H-06` (`feature/H-06-manifiesto-viaje-paradero`) | Cambiar a *Conductor: María* o *Luis* → Pestaña 3 *"Mis Viajes"* → Muestra nómina de pasajeros confirmados. | **SÍ (100%)** |
| **Jorge y Ana (Caso)** | **OP-3:** Tener certeza del vehículo, hora y paradero acordado. | **N3:** Ver resumen de reserva confirmada del pasajero. | `EP-04` | **H-06** | **CA-6.2:** Dado un pasajero con reserva, cuando abre *"Mis Viajes"*, entonces ve conductor, vehículo, paradero fijo, hora y aporte. | `H-06` (`feature/H-06-manifiesto-viaje-paradero`) | Con *Pasajero: Jorge* → Pestaña 3 *"Mis Viajes"* → Muestra tarjetas con paradero fijo, placa y horario. | **SÍ (100%)** |

---

## Evidencia 18: Sprint Review con 2 Personas Externas sobre la Versión Desplegada

Se realizó la sesión de **Sprint Review** probando la URL pública desplegada con **2 participantes externos**:
1. **Participante Externo 1:** *Sebastián Alarcón* (Estudiante universitario que viaja en auto propio por Vía de Evitamiento — Rol probado: **Conductor**).
2. **Participante Externo 2:** *Lucía Fernández* (Estudiante de turno noche que trabaja y estudia — Rol probado: **Pasajera**).

- **Historias demostradas como Terminadas (100 % del Sprint Backlog):** `H-01`, `H-02`, `H-03`, `H-04`, `H-05` y `H-06`.
- **Historias No Terminadas:** **Ninguna (0 historias pendientes del Sprint)**.
- **Observaciones recibidas de las 2 personas externas y su efecto en el Product Backlog:**
  1. **Observación 1 (Sebastián Alarcón — Conductor):** *"Me encantó que el paradero fijo sea obligatorio y que la ruta se bloquee sola al llegar a 0 asientos. Como viajo de lunes a viernes exactamente a las 7:10 am por el mismo paradero, sería genial tener un botón para duplicar mi ruta del día anterior sin volver a escribir el paradero."*
     - **Efecto en el Backlog:** Se reprioriza la historia **`H-08` (Duplicar ruta frecuente como plantilla rápida)** al primer lugar del próximo Sprint (Sprint 2).
  2. **Observación 2 (Lucía Fernández — Pasajera):** *"El filtro de las 18:00 hrs y ver la hora estimada de llegada (18:45) me da total tranquilidad para mi clase de 6:50 pm. Me gustaría que dentro de la tarjeta del paradero se resalte cuántos minutos máximos espera el conductor antes de partir."*
     - **Efecto en el Backlog:** Se refina la historia **`H-09` (Detalle de referencia peatonal y tiempo de tolerancia en paradero fijo)** agregando un campo explícito de *"Tolerancia máxima: 5 min"* para el Sprint 2.
- **Comparación entre el Outcome Inicial y lo Aprendido:**
  El Outcome inicial planteaba lograr que el 45 % de los estudiantes compartiera ruta 3 veces por semana ahorrando 40 % y llegando 10 minutos antes. En la Sprint Review aprendimos que **el factor decisivo para que tanto conductores como pasajeros adopten el sistema no es la tecnología compleja (GPS en vivo o pasarelas de pago), sino la certidumbre operativa**: saber de antemano el **paradero fijo sobre la avenida principal**, la **hora exacta de partida/llegada** y que **el cupo reservado está 100 % garantizado sin sobrecupo**.

---

## Evidencia 19: Retrospectiva del Sprint (Con 2 Mejoras Concretas)

| Dimensión | Análisis de la Retrospectiva |
| :--- | :--- |
| **¿Qué salió bien?** | 1. Descartar con evidencia las 3 funciones pesadas de los fundadores (GPS en vivo, pagos integrados y biometría facial) permitió entregar el 100 % del MVP dentro de las 14.5 horas de capacidad.<br/>2. Trabajar con una rama por historia (`feature/H-01` a `feature/H-06`) y pruebas automatizadas de aceptación (`acceptance.test.js`) evitó regresiones al integrar a `main`. |
| **¿Qué no salió bien?** | En el Día 3 se subestimó la sincronización del estado cuando se reservaba el último asiento (`availableSeats = 1 -> 0`) en entornos web/serverless, lo que generó un retraso temporal de 0.7 horas hasta estandarizar la respuesta atómica del estado de la ruta. |
| **¿Qué probaré distinto? (2 Mejoras Concretas y Accionables para el próximo Sprint)** | **Mejora Concreta 1:** Escribir las pruebas automatizadas de casos borde (como `availableSeats === 0` y reservas simultáneas) **antes** de construir la interfaz gráfica de la historia (enfoque *Acceptance Test-Driven Development*).<br/>**Mejora Concreta 2:** Incluir desde el Día 1 botones de prueba rápida por rol y restauración de datos semilla (`POST /api/reset`) para reducir en 50 % el tiempo de validación manual en ventana de incógnito. |

---

## Evidencia 20: Registro del Lanzamiento Realizado

- **Versión lanzada:** `v1.0.0` (Tag Git: `v1.0.0 - "MVP EcoRuta"`).
- **Fecha de lanzamiento:** Viernes 13 de noviembre de 2026.
- **Entorno de producción:** Aplicación web pública con HTTPS desplegada en la nube y sincronizada con persistencia activa de datos ficticios.
- **Verificación final en ventana de incógnito:**
  - [x] La URL pública abre con HTTPS sin instalar nada en computadora ni móvil.
  - [x] El inicio de sesión acepta cuentas `@tecsup.edu.pe` y rechaza cuentas externas (`@gmail.com`).
  - [x] El flujo completo (Publicar ruta con paradero fijo → Filtrar por zona/horario → Reservar asiento → Bloquear sobrecupo en 0 → Ver manifiesto → Cancelar y liberar asiento) funciona de principio a fin y conserva los cambios al recargar la página.
- **A quién se le comunicó el lanzamiento:**
  - Al docente del curso **Edwin Córdova B.** (Construcción y Pruebas de Software · Sección AB · Tecsup) mediante la entrega oficial en Canvas.
  - A los 3 estudiantes entrevistados en el Discovery y a los 2 participantes externos de la Sprint Review para el inicio de las pruebas piloto en los corredores de San Miguel, Javier Prado y Evitamiento.
