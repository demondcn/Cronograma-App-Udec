const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const statements = [
    `ALTER TABLE "profesores" ADD COLUMN IF NOT EXISTS "cc" TEXT`,
    `ALTER TABLE "profesores" ADD COLUMN IF NOT EXISTS "carrera" TEXT`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "profesores_cc_key" ON "profesores" ("cc")`,
    `CREATE INDEX IF NOT EXISTS "profesores_cc_idx" ON "profesores" ("cc")`,
    `CREATE INDEX IF NOT EXISTS "profesores_carrera_idx" ON "profesores" ("carrera")`,
    `CREATE TABLE IF NOT EXISTS "estudiantes" (
      "id" TEXT NOT NULL,
      "nombre" TEXT NOT NULL,
      "cc" TEXT NOT NULL,
      "carrera" TEXT,
      "activo" BOOLEAN NOT NULL DEFAULT true,
      "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "actualizadoEn" TIMESTAMP(3) NOT NULL,
      CONSTRAINT "estudiantes_pkey" PRIMARY KEY ("id")
    )`,
    `CREATE UNIQUE INDEX IF NOT EXISTS "estudiantes_cc_key" ON "estudiantes" ("cc")`,
    `CREATE INDEX IF NOT EXISTS "estudiantes_cc_idx" ON "estudiantes" ("cc")`,
    `CREATE INDEX IF NOT EXISTS "estudiantes_activo_idx" ON "estudiantes" ("activo")`,
    `CREATE INDEX IF NOT EXISTS "estudiantes_carrera_idx" ON "estudiantes" ("carrera")`,
    `ALTER TABLE "solicitudes_deportivas" ADD COLUMN IF NOT EXISTS "estudianteId" TEXT`,
    `CREATE INDEX IF NOT EXISTS "solicitudes_deportivas_estudianteId_idx" ON "solicitudes_deportivas" ("estudianteId")`,
    `DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1
          FROM information_schema.table_constraints
          WHERE constraint_schema = 'public'
            AND constraint_name = 'solicitudes_deportivas_estudianteId_fkey'
        ) THEN
          ALTER TABLE "solicitudes_deportivas"
          ADD CONSTRAINT "solicitudes_deportivas_estudianteId_fkey"
          FOREIGN KEY ("estudianteId") REFERENCES "estudiantes"("id")
          ON DELETE SET NULL ON UPDATE CASCADE;
        END IF;
      END
    $$`,
  ];

  for (const statement of statements) {
    await prisma.$executeRawUnsafe(statement);
  }

  console.log("Schema complementario de previos aplicado correctamente.");
}

main()
  .catch((error) => {
    console.error("Error aplicando schema complementario de previos:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
