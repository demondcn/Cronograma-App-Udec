const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const CARRERA_DEPORTES = "Deportes";

function normalizeDocument(value) {
  return String(value || "")
    .replace(/\.0$/, "")
    .replace(/[.\-\s]/g, "")
    .trim();
}

function normalizeName(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function parseManualRows(text) {
  const normalized = text
    .replace(/\r/g, "\n")
    .replace(/([A-ZÁÉÍÓÚÑ ]+)(?=\d{6,})/g, "$1\n");
  const rows = normalized.split(/\n+/);
  const parsed = [];

  for (const rawRow of rows) {
    const row = rawRow.trim();
    if (!row) continue;

    const tabMatch = row.match(/^([A-Za-z]?\d[\d.\-\s]*)\s+(.+)$/);
    if (!tabMatch) {
      parsed.push({ cc: "", nombre: row });
      continue;
    }

    const cc = normalizeDocument(tabMatch[1]);
    const nombre = normalizeName(tabMatch[2]);
    parsed.push({ cc, nombre });
  }

  return parsed;
}

async function main() {
  const inputPath =
    process.argv[2] ||
    path.join("prisma", "data", "estudiantes-deportes-manual.txt");
  const resolvedPath = path.resolve(process.cwd(), inputPath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`No existe el archivo de entrada: ${resolvedPath}`);
  }

  const rows = parseManualRows(fs.readFileSync(resolvedPath, "utf8"));
  const seen = new Map();
  const stats = {
    creados: 0,
    actualizados: 0,
    omitidos: 0,
    duplicados: 0,
    invalidos: 0,
  };

  for (const row of rows) {
    if (!row.cc || row.cc.toLowerCase() === "c" || !/^\d{6,}$/.test(row.cc)) {
      stats.invalidos += 1;
      continue;
    }

    if (!row.nombre) {
      stats.invalidos += 1;
      continue;
    }

    if (seen.has(row.cc)) {
      stats.duplicados += 1;
      const firstName = seen.get(row.cc);
      if (firstName !== row.nombre) {
        console.warn(
          `Documento duplicado con nombres distintos: ${row.cc} -> '${firstName}' / '${row.nombre}'`
        );
      }
      continue;
    }
    seen.set(row.cc, row.nombre);

    const existing = await prisma.estudiante.findUnique({
      where: { cc: row.cc },
    });

    if (existing) {
      await prisma.estudiante.update({
        where: { cc: row.cc },
        data: {
          nombre: row.nombre || existing.nombre,
          carrera: CARRERA_DEPORTES,
          activo: true,
        },
      });
      stats.actualizados += 1;
    } else {
      await prisma.estudiante.create({
        data: {
          cc: row.cc,
          nombre: row.nombre,
          carrera: CARRERA_DEPORTES,
          activo: true,
        },
      });
      stats.creados += 1;
    }
  }

  console.log("\nResumen importacion manual estudiantes Deportes:");
  console.table(stats);
}

main()
  .catch((error) => {
    console.error("Error importando estudiantes manuales:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
