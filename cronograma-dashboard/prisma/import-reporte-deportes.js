const path = require("path");
const XLSX = require("xlsx");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const SHEET_NAME = "Reporte_Ubicacion_Semestral";
const CARRERA_DEPORTES = "Deportes";

function normalizeDocument(value) {
  if (value === null || value === undefined) return "";

  return String(value)
    .replace(/\.0$/, "")
    .replace(/[.\-\s]/g, "")
    .trim();
}

function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function normalizeHeader(value) {
  return normalizeText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

function getSheet(workbook, name) {
  const exactSheet = workbook.Sheets[name];
  if (exactSheet) return exactSheet;

  const foundName = workbook.SheetNames.find(
    (sheetName) => normalizeHeader(sheetName) === normalizeHeader(name)
  );

  return foundName ? workbook.Sheets[foundName] : null;
}

function getValue(row, headerName) {
  const expectedHeader = normalizeHeader(headerName);
  const key = Object.keys(row).find(
    (currentKey) => normalizeHeader(currentKey) === expectedHeader
  );

  return key ? row[key] : "";
}

async function main() {
  const inputPath =
    process.argv[2] ||
    path.join("prisma", "data", "Reporte_Ubicacion_Semestral.xlsx");
  const resolvedPath = path.resolve(process.cwd(), inputPath);
  const workbook = XLSX.readFile(resolvedPath);
  const sheet = getSheet(workbook, SHEET_NAME);

  if (!sheet) {
    throw new Error(`No se encontro la hoja '${SHEET_NAME}'.`);
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
  const seen = new Set();
  const stats = {
    estudiantesCreados: 0,
    estudiantesActualizados: 0,
    filasSaltadas: 0,
    duplicadosDetectados: 0,
  };

  // El Excel trae Semestre, pero el modelo Estudiante aun no tiene campo semestre.
  // Si despues se requiere, agregar semestre Int? al modelo Estudiante.
  for (const row of rows) {
    const cc = normalizeDocument(getValue(row, "Documento"));
    const nombre = normalizeText(getValue(row, "Nombre"));

    if (!cc || !nombre) {
      stats.filasSaltadas += 1;
      continue;
    }

    if (seen.has(cc)) {
      stats.duplicadosDetectados += 1;
      stats.filasSaltadas += 1;
      continue;
    }
    seen.add(cc);

    const existente = await prisma.estudiante.findUnique({ where: { cc } });

    await prisma.estudiante.upsert({
      where: { cc },
      update: {
        nombre,
        carrera: CARRERA_DEPORTES,
        activo: true,
      },
      create: {
        cc,
        nombre,
        carrera: CARRERA_DEPORTES,
        activo: true,
      },
    });

    if (existente) {
      stats.estudiantesActualizados += 1;
    } else {
      stats.estudiantesCreados += 1;
    }
  }

  console.log("\nResumen de importacion Reporte_Ubicacion_Semestral:");
  console.table(stats);
}

main()
  .catch((error) => {
    console.error("Error importando Reporte_Ubicacion_Semestral.xlsx:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
