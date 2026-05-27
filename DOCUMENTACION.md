# Documentacion tecnica

## 1. Descripcion del proyecto

Cronograma App UDEC es una aplicacion academica para acceder a diferentes areas de apoyo. La ruta principal muestra la pantalla `Apoyo AcademicoSoftSoacha`; el dashboard de centros de computo queda disponible en `/centros-computo` y concentra varias vistas: cronograma semanal, checklist de asistencia, control de salas en tiempo real, gestion academica, control administrativo de asistencia y salas de computo.

La aplicacion vive dentro de la carpeta `cronograma-dashboard` y usa Next.js App Router. La base de datos se gestiona con Prisma y PostgreSQL.

## 2. Arquitectura

```text
cronograma-dashboard/
+-- app/
|   +-- api/                  # Endpoints REST internos
|   +-- centros-computo/      # Dashboard del cronograma
|   +-- cgca/                 # Placeholder CGCA
|   +-- recursos-educativos/  # Centro de Recursos Deportivos
|   +-- layout.tsx            # Layout raiz
|   \-- page.tsx              # Entrada principal
+-- components/
|   +-- ComponentesShedule/   # Vistas principales del dashboard
|   +-- Agregadores/          # Formularios y actions de creacion
|   +-- Traedores/            # Server actions para lectura/procesamiento
|   +-- Servicios/            # Cliente para endpoints /api
|   +-- ui/                   # Componentes de interfaz
|   +-- academic-support-page.tsx
|   \-- schedule-dashboard.tsx
+-- lib/
|   +-- db.ts                 # Cliente Prisma compartido
|   +-- api.ts                # Helper fetch con fallback
|   \-- utils.ts
\-- prisma/
    \-- schema.prisma         # Modelo de datos
```

## 3. Flujo principal

1. `app/page.tsx` renderiza `AcademicSupportPage`.
2. `components/academic-support-page.tsx` muestra la landing con enlaces a `/cgca`, `/centros-computo` y `/recursos-educativos`.
3. `app/centros-computo/page.tsx` renderiza `ScheduleDashboard`.
4. `components/schedule-dashboard.tsx` controla la vista activa y carga datos iniciales del dashboard.
5. Las server actions de `components/Traedores/actions` consultan Prisma y transforman los datos para la UI.
6. Las vistas muestran la informacion:
   - `HorarioVer`: cronograma por dia y sala.
   - `AsistenciaVer`: registro diario de asistencia.
   - `AsistenciaAdmin`: administracion, historico y exportacion.
   - `VistaTiempoReal`: salas activas segun hora actual.
   - `MateriasVer`: gestion academica.
   - `LabRoomsView`: distribucion visual de salas de computo.
5. Los cambios CRUD se hacen con endpoints internos en `app/api/*` por medio de `components/Servicios/apiServicios.ts`.

## 4. Modelo de datos

El archivo `prisma/schema.prisma` define estos modelos:

| Modelo | Proposito |
| --- | --- |
| `Programa` | Carrera o programa academico. Define colores usados en la UI. |
| `Asignatura` | Materia asociada a un programa. |
| `Aula` | Sala fisica o sala de computo. |
| `Profesor` | Docente asignable a horarios. |
| `Horario` | Clase programada por dia, hora, aula, semestre, grupo y profesor. |
| `Asistencia` | Registro de asistencia asociado a un horario y fecha. |
| `EstadoAula` | Estado de apertura/cierre de una sala por franja. |
| `RegistroSistema` | Bitacora general de acciones. |

Relaciones principales:

- Un `Programa` tiene muchas `Asignatura`.
- Una `Asignatura` tiene muchos `Horario` y `Asistencia`.
- Un `Aula` tiene muchos `Horario`, `Asistencia` y `EstadoAula`.
- Un `Profesor` puede tener muchos `Horario` y `Asistencia`.
- Un `Horario` puede tener muchas `Asistencia`.

La restriccion `@@unique([diaSemana, horaInicio, horaFin, aulaId, semestre])` evita duplicar horarios en una misma aula, dia, franja y semestre.

## 5. Endpoints internos

Los endpoints estan bajo `app/api`. Todos responden JSON.

| Recurso | Rutas | Metodos |
| --- | --- | --- |
| Programas | `/api/programas`, `/api/programas/[id]` | `GET`, `POST`, `PUT`, `DELETE` |
| Asignaturas | `/api/asignaturas`, `/api/asignaturas/[id]` | `GET`, `POST`, `PUT`, `DELETE` |
| Aulas | `/api/aulas`, `/api/aulas/[id]` | `GET`, `POST`, `PUT`, `DELETE` |
| Profesores | `/api/profesores`, `/api/profesores/[id]` | `GET`, `POST`, `PUT`, `DELETE` |
| Horarios | `/api/horarios`, `/api/horarios/[id]` | `GET`, `POST`, `PUT`, `DELETE` |

Campos principales para crear registros:

- `Programa`: `nombre`, `codigo`, `color`, `colorBrillo`, `colorTexto`.
- `Asignatura`: `nombre`, `codigo`, `programaId`, `semestre`, `creditos`, `activa`.
- `Aula`: `nombre`, `capacidad`, `edificio`, `piso`, `equipos`, `activa`.
- `Profesor`: `nombre`, `correo`, `telefono`, `activo`.
- `Horario`: `diaSemana`, `horaInicio`, `horaFin`, `semestre`, `grupo`, `cadi`, `activo`, `asignaturaId`, `aulaId`, `profesorId`, `cantidadSt`.

## 6. Server actions relevantes

| Archivo | Funcion | Uso |
| --- | --- | --- |
| `Traedores/actions/materiaH.ts` | `materiaH` | Genera la estructura del cronograma agrupada por dia, hora y aula. |
| `Traedores/actions/asisH.ts` | `AsistenciaHorario` | Obtiene horarios del dia actual que aun no tienen asistencia registrada. |
| `Traedores/actions/colortraedor.ts` | `Colores` | Construye categorias visuales por programa y asignaturas activas. |
| `Traedores/actions/asistenciasid.ts` | `obtenerAsistencias` | Obtiene asistencias guardadas con materia, programa, profesor, aula y cantidades. |
| `Agregadores/AgregarAsistencia/actions/crearRegistrosDeAsistencia.ts` | `crearRegistrosDeAsistencia` | Guarda asistencias validas en la base de datos. |

## 7. Vistas funcionales

### Cronograma

`HorarioVer` muestra la grilla de horarios. Permite seleccionar dia, filtrar por sala y abrir un modal de detalle de materia. Calcula estadisticas de salas activas, clases programadas y porcentaje de ocupacion.

### Checklist de asistencia

`AsistenciaVer` muestra los horarios pendientes de asistencia del dia actual. Permite filtrar por profesor o materia, ingresar cantidad de estudiantes asistentes y guardar registros.

### Control de asistencia

`AsistenciaAdmin` permite asignar estados de asistencia, agregar observaciones, consultar historico y exportar registros a Excel con filtro por fecha.

Estados soportados:

- `ASISTIO`
- `NO_ASISTIO`
- `TARDANZA`
- `JUSTIFICADA`
- `CANCELADA`

### Control en tiempo real

`VistaTiempoReal` compara el dia y bloque horario actual contra el cronograma cargado. Muestra las salas que deberian estar abiertas y permite marcarlas como abiertas o cerradas en estado local del navegador.

### Gestion academica

`MateriasVer` agrupa formularios para crear programas, materias, aulas, profesores y horarios. Tambien incluye una tabla administrativa con busqueda, filtros, edicion, creacion y eliminacion.

### Salas de computo

`LabRoomsView` renderiza distribuciones visuales de salas como C111, C112, C113, C114 y C115. La informacion de equipos y posiciones esta definida de forma estatica dentro del componente.

### Centro de Recursos Deportivos

`SportsResourcesView` renderiza la gestion local de solicitudes de elementos deportivos en `/recursos-educativos`. Permite crear solicitudes con documento, rol y elementos solicitados, genera fecha y dia automaticamente, asigna estado inicial `RECEPCIONADA`, calcula estadisticas por estado y permite cambiar estado, editar observaciones y eliminar solicitudes en memoria.

## 8. Convenciones importantes

- `diaSemana` usa numeros de JavaScript:
  - `0`: domingo
  - `1`: lunes
  - `2`: martes
  - `3`: miercoles
  - `4`: jueves
  - `5`: viernes
  - `6`: sabado
- Las horas se manejan como texto en formato `HH:mm`.
- El cronograma genera franjas desde `07:00` hasta `22:00`.
- Los colores de materias salen del modelo `Programa`, no de una constante fija.
- Las asistencias se filtran para evitar crear dos registros del mismo horario en la misma fecha.

## 9. Configuracion local

Dentro de `cronograma-dashboard`, crear `.env`:

```env
DATABASE_URL="postgresql://usuario:password@host:puerto/base_de_datos"
```

Comandos principales:

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

Para abrir Prisma Studio:

```bash
npx prisma studio
```

## 10. Despliegue en Netlify

El archivo `netlify.toml` configura:

- Base del proyecto: `cronograma-dashboard`.
- Build command: `npx prisma generate && next build`.
- Publicacion: `.next`.
- Plugin: `@netlify/plugin-nextjs`.

Antes de desplegar, configurar `DATABASE_URL` en Netlify.

## 11. Riesgos y mejoras recomendadas

- Reemplazar la contrasena del cliente por autenticacion real del lado servidor.
- Mover URLs placeholder de `lib/api.ts` a variables de entorno.
- Revisar `next.config.mjs`, porque actualmente ignora errores de ESLint y TypeScript durante el build.
- Unificar el uso de Prisma para evitar crear `new PrismaClient()` repetidamente en rutas API.
- Corregir textos con problemas de codificacion en componentes existentes.
- Agregar migraciones Prisma versionadas si se quiere controlar cambios de esquema en equipo.
- Agregar pruebas para server actions, endpoints CRUD y calculo de cronograma.

## 12. Guia rapida de mantenimiento

Para agregar una nueva entidad administrativa:

1. Definir el modelo en `prisma/schema.prisma`.
2. Ejecutar `npx prisma generate` y sincronizar la base de datos.
3. Crear rutas en `app/api/<entidad>`.
4. Agregar un servicio en `components/Servicios/apiServicios.ts`.
5. Agregar columnas y handlers en `TableManagement`.
6. Crear formularios en `components/Agregadores` si se requiere captura especializada.

Para modificar la vista de salas de computo:

1. Abrir `components/lab-rooms-view.tsx`.
2. Editar el arreglo `labRooms`.
3. Ajustar capacidad, nombre, posiciones de mesas, sofas y computadores.
4. Probar visualmente en la vista `SALAS DE COMPUTO`.
