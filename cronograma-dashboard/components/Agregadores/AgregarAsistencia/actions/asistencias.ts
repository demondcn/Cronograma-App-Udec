"use server"
import prisma from '@/lib/db'

export async function CrearHorario(formData: FormData) {
  const id = formData.get("id") as string;
  const diaSemana = parseInt(formData.get("diaSemana") as string, 10);
  const horaInicioId = parseInt(formData.get("horaInicio") as string, 10);
  const horaFinId = parseInt(formData.get("horaFin") as string, 10);
  const semestre = formData.get("semestre") as string;
  const grupo = formData.get("grupo") as string;
  const asignaturaId = formData.get("asignaturaId") as string;
  const aulaId = formData.get("aulaId") as string;
  const profesorId = formData.get("profesorId") as string;

  const Horas = [
    { id: 1, hora: "07:00" },
    { id: 2, hora: "08:00" },
    { id: 3, hora: "09:00" },
    { id: 4, hora: "10:00" },
    { id: 5, hora: "11:00" },
    { id: 6, hora: "12:00" },
    { id: 7, hora: "13:00" },
    { id: 8, hora: "14:00" },
    { id: 9, hora: "15:00" },
    { id: 10, hora: "16:00" },
    { id: 11, hora: "17:00" },
    { id: 12, hora: "18:00" },
    { id: 13, hora: "19:00" },
    { id: 14, hora: "20:00" },
    { id: 15, hora: "21:00" },
    { id: 16, hora: "22:00" },
  ];

  const horaInicio = Horas.find(h => h.id === horaInicioId)?.hora || "";
  const horaFin = Horas.find(h => h.id === horaFinId)?.hora || "";

  if (!id || !diaSemana || !horaInicio || !horaFin || !semestre || !asignaturaId || !aulaId) {
    throw new Error("Faltan datos requeridos");
  }

  try {
    const nuevoHorario = await prisma.horario.create({
      data: {
        id,
        diaSemana,
        horaInicio,
        horaFin,
        semestre,
        grupo,
        asignaturaId,
        aulaId,
        profesorId,
        actualizadoEn: new Date(),
        activo: true,
      }
    });

    return nuevoHorario;
  } catch (error) {
    console.error("Error al crear horario:", error);
    throw new Error("No se pudo crear el horario");
  }
}