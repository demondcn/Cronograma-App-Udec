const path = require("path");
const XLSX = require("xlsx");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function normalizeDocument(value) {
  return String(value || "")
    .trim()
    .replace(/[\s.-]+/g, "");
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

function isHeaderLike(value) {
  const text = normalizeHeader(value);
  return ["DOCUMENTO", "CC", "CEDULA", "IDENTIFICACION"].includes(text);
}

function placeholderEmail(cc) {
  return `${cc}@sin-correo.local`;
}

function getSheet(workbook, name) {
  const exact = workbook.Sheets[name];
  if (exact) return exact;

  const foundName = workbook.SheetNames.find(
    (sheetName) => normalizeHeader(sheetName) === normalizeHeader(name)
  );
  return foundName ? workbook.Sheets[foundName] : null;
}

async function importProfesores(sheet, stats) {
  if (!sheet) {
    console.warn("Hoja 'profes' no encontrada. Se omite importacion de profesores.");
    return;
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
  const seen = new Set();

  for (const row of rows) {
    const cc = normalizeDocument(row.DOCUMENTO);
    const nombre = normalizeText(row.NOMBRE);

    if (!cc || !nombre || isHeaderLike(cc)) {
      stats.profesoresSaltados += 1;
      continue;
    }

    if (seen.has(cc)) {
      stats.duplicadosEncontrados += 1;
      stats.profesoresSaltados += 1;
      continue;
    }
    seen.add(cc);

    const data = {
      nombre,
      cc,
      carrera: null,
      correo: placeholderEmail(cc),
      telefono: null,
      activo: true,
      actualizadoEn: new Date(),
    };

    const existente = await prisma.profesor.findFirst({ where: { cc } });

    if (existente) {
      await prisma.profesor.update({
        where: { id: existente.id },
        data: {
          nombre: data.nombre,
          carrera: data.carrera,
          correo: existente.correo || data.correo,
          telefono: existente.telefono,
          activo: true,
          actualizadoEn: new Date(),
        },
      });
      stats.profesoresActualizados += 1;
    } else {
      await prisma.profesor.create({ data });
      stats.profesoresCreados += 1;
    }
  }
}

async function importEstudiantes(sheet, stats) {
  if (!sheet) {
    console.warn("Hoja 'Estudiantes' no encontrada. Se omite importacion de estudiantes.");
    return;
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  const seen = new Set();

  for (const row of rows) {
    const cc = normalizeDocument(row[0]);
    const nombre = normalizeText(row[1]);
    const rol = normalizeHeader(row[2]);

    if (!cc || !nombre || isHeaderLike(cc)) {
      stats.estudiantesSaltados += 1;
      continue;
    }

    if (rol !== "ESTUDIANTE") {
      stats.estudiantesSaltados += 1;
      continue;
    }

    if (seen.has(cc)) {
      stats.duplicadosEncontrados += 1;
      stats.estudiantesSaltados += 1;
      continue;
    }
    seen.add(cc);

    const existente = await prisma.estudiante.findUnique({ where: { cc } });

    if (existente) {
      await prisma.estudiante.update({
        where: { cc },
        data: {
          nombre,
          carrera: existente.carrera,
          activo: true,
        },
      });
      stats.estudiantesActualizados += 1;
    } else {
      await prisma.estudiante.create({
        data: {
          cc,
          nombre,
          carrera: null,
          activo: true,
        },
      });
      stats.estudiantesCreados += 1;
    }
  }
}

async function main() {
  const inputPath = process.argv[2] || path.join("prisma", "data", "previos.xlsx");
  const resolvedPath = path.resolve(process.cwd(), inputPath);

  const workbook = XLSX.readFile(resolvedPath);
  const stats = {
    estudiantesCreados: 0,
    estudiantesActualizados: 0,
    estudiantesSaltados: 0,
    profesoresCreados: 0,
    profesoresActualizados: 0,
    profesoresSaltados: 0,
    duplicadosEncontrados: 0,
  };

  await importProfesores(getSheet(workbook, "profes"), stats);
  await importEstudiantes(getSheet(workbook, "Estudiantes"), stats);

  console.log("\nResumen de importacion:");
  console.table(stats);
}

main()
  .catch((error) => {
    console.error("Error importando previos.xlsx:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
