# Cronograma App UDEC

Aplicacion web para consultar y administrar el cronograma academico de salas, materias, profesores, aulas y asistencias. El proyecto esta construido con Next.js, React, Prisma y PostgreSQL.

## Funcionalidades principales

- Pantalla principal de acceso a las areas de apoyo academico.
- Visualizacion del cronograma por dia y sala en `/centros-computo`.
- Filtro de aulas y estadisticas de ocupacion.
- Control en tiempo real de salas que deben estar abiertas.
- Registro diario de asistencia por clase.
- Panel administrativo para consultar asistencias guardadas y exportarlas a Excel.
- Gestion academica de programas, asignaturas, aulas, profesores y horarios.
- Vista de salas de computo con distribucion de equipos.
- Gestion local de solicitudes de elementos deportivos en `/recursos-educativos`.

## Tecnologias

- Next.js 15 con App Router
- React 19
- TypeScript
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- shadcn/ui y Radix UI
- Lucide React
- xlsx para exportacion de asistencias
- Netlify para despliegue

## Estructura general

```text
.
+-- netlify.toml
+-- README.md
+-- DOCUMENTACION.md
\-- cronograma-dashboard/
    +-- app/
    |   +-- api/
    |   +-- centros-computo/
    |   +-- cgca/
    |   +-- recursos-educativos/
    |   +-- layout.tsx
    |   \-- page.tsx
    +-- components/
    +-- lib/
    +-- prisma/
    |   \-- schema.prisma
    +-- public/
    \-- package.json
```

## Requisitos

- Node.js 18 o superior.
- npm.
- Base de datos PostgreSQL disponible.
- Variable de entorno `DATABASE_URL` configurada.

## Instalacion

Desde la raiz del repositorio:

```bash
cd cronograma-dashboard
npm install
```

Crea un archivo `.env` dentro de `cronograma-dashboard`:

```env
DATABASE_URL="postgresql://usuario:password@host:puerto/base_de_datos"
```

Genera el cliente de Prisma:

```bash
npx prisma generate
```

Si necesitas sincronizar el esquema con la base de datos:

```bash
npx prisma db push
```

## Ejecucion local

```bash
npm run dev
```

La aplicacion queda disponible en:

```text
http://localhost:3000
```

Rutas principales:

```text
/                    # Pantalla Apoyo AcademicoSoftSoacha
/centros-computo     # Dashboard actual del cronograma
/cgca                # Placeholder de CGCA
/recursos-educativos # Centro de Recursos Deportivos
```

## Scripts disponibles

```bash
npm run dev      # Levanta el servidor de desarrollo
npm run build    # Compila la aplicacion
npm run start    # Ejecuta la version compilada
npm run lint     # Ejecuta lint configurado en Next.js
```

El script `postinstall` ejecuta `prisma generate` automaticamente despues de instalar dependencias.

## Variables de entorno

| Variable | Descripcion |
| --- | --- |
| `DATABASE_URL` | Cadena de conexion a PostgreSQL usada por Prisma. |

## Base de datos

El modelo principal esta en `cronograma-dashboard/prisma/schema.prisma`. Las entidades centrales son:

- `Programa`
- `Asignatura`
- `Aula`
- `Profesor`
- `Horario`
- `Asistencia`
- `EstadoAula`
- `RegistroSistema`

## Despliegue

El repositorio incluye `netlify.toml` en la raiz. Netlify usa:

```toml
[build]
  base = "cronograma-dashboard"
  command = "npx prisma generate && next build"
  publish = ".next"
```

Configura `DATABASE_URL` en las variables de entorno del sitio antes de desplegar.

## Notas importantes

- Las vistas administrativas tienen una validacion de contrasena implementada en el cliente. Para produccion se recomienda reemplazarla por autenticacion real en servidor.
- `next.config.mjs` ignora errores de TypeScript y ESLint durante el build. Conviene corregir los errores antes de usar la aplicacion en produccion.
- La vista de salas de computo usa datos estaticos en el componente `components/lab-rooms-view.tsx`.

Consulta `DOCUMENTACION.md` para el detalle tecnico del flujo de datos, endpoints y componentes.
