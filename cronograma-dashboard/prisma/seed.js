const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const elementos = [
  {
    nombre: "Balón de Fútbol",
    codigo: "BAL-FUT-001",
    marca: "Golty",
    color: "Amarillo",
    categoria: "Balones",
    cantidadTotal: 3,
    cantidadDisponible: 3,
    icono: "⚽",
  },
  {
    nombre: "Balón de Voleibol",
    codigo: "BAL-VOL-001",
    marca: "Mikasa",
    color: "Azul/Amarillo",
    categoria: "Balones",
    cantidadTotal: 4,
    cantidadDisponible: 4,
    icono: "🏐",
  },
  {
    nombre: "Raqueta de Tenis",
    codigo: "RAQ-TEN-001",
    marca: "Genérica",
    color: "N/A",
    categoria: "Raquetas",
    cantidadTotal: 6,
    cantidadDisponible: 6,
    icono: "🎾",
  },
  {
    nombre: "Conos",
    codigo: "CON-001",
    marca: "Genérica",
    color: "Naranja",
    categoria: "Entrenamiento",
    cantidadTotal: 20,
    cantidadDisponible: 20,
    icono: "🔶",
  },
  {
    nombre: "Petos",
    codigo: "PET-001",
    marca: "Genérica",
    color: "Surtidos",
    categoria: "Entrenamiento",
    cantidadTotal: 15,
    cantidadDisponible: 15,
    icono: "🎽",
  },
  {
    nombre: "Platillos",
    codigo: "PLA-001",
    marca: "Genérica",
    color: "Naranja/Amarillo",
    categoria: "Entrenamiento",
    cantidadTotal: 30,
    cantidadDisponible: 30,
    icono: "🟠",
  },
  {
    nombre: "Aros",
    codigo: "ARO-001",
    marca: "Genérica",
    color: "Plástico",
    categoria: "Entrenamiento",
    cantidadTotal: 10,
    cantidadDisponible: 10,
    icono: "⭕",
  },
  {
    nombre: "Volante",
    codigo: "VOL-BAD-001",
    marca: "Genérica",
    color: "Blanco",
    categoria: "Bádminton",
    cantidadTotal: 10,
    cantidadDisponible: 10,
    icono: "🏸",
  },
];

async function main() {
  for (const elemento of elementos) {
    await prisma.elementoDeportivo.upsert({
      where: { codigo: elemento.codigo },
      update: elemento,
      create: elemento,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
