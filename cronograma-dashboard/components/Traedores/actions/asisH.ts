"use server";
import prisma from "@/lib/db";
import { id } from "date-fns/locale";

interface Asistencia {
  id: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  materiaAsignada: string;
  profeAsignado: string;
  estadoAsistencia: string;
  sala: string;
  observaciones: string;
  diaSemana: string;
  horarioId: string;
  asignaturaId: string;
  aulaId: string;
  profesorId: string;
}

// Función para obtener los horarios de hoy
export async function AsistenciaHorario(): Promise<Asistencia[]> {
  const todayDate = new Date();
  const startOfDay = new Date(todayDate);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(todayDate);
  endOfDay.setHours(23, 59, 59, 999);
  const horariosHoy = await prisma.horario.findMany({
    where: {
      diaSemana: new Date().getDay(),
      activo: true,
      // AQUÍ ESTÁ LA CLAVE: Excluir horarios que ya tienen asistencia HOY
      NOT: {
        asistencias: {
          some: {
            fecha: {
              gte: startOfDay,
              lte: endOfDay,
            },
          },
        },
      },
    },
    include: {
      asignatura: {
        select: {
          nombre: true,
          id: true,
        },
      },
      aula: {
        select: {
          nombre: true,
          id: true,
        },
      },
      profesor: {
        select: {
          id: true,
          nombre: true,
        },
      },
    },
  });
  // Formateamos la fecha actual a cadena antes de asignarla
  const todayDateString = todayDate.toLocaleDateString();
  // Formateamos la respuesta de acuerdo a la estructura requerida
  const mockAttendanceForToday: Asistencia[] = horariosHoy.map((horario) => ({
    id: `att-${horario.id}`,
    fecha: todayDateString,
    horaInicio: horario.horaInicio,
    horaFin: horario.horaFin,
    materiaAsignada: horario.asignatura.nombre,
    profeAsignado: horario.profesor ? horario.profesor.nombre : "Sin profesor",
    estadoAsistencia: "",
    sala: horario.aula.nombre,
    observaciones: "",
    diaSemana: convertirDiaSemana(horario.diaSemana),
    horarioId: horario.id,
    asignaturaId: horario.asignatura.id,
    aulaId: horario.aula.id,
    profesorId: horario.profesor ? horario.profesor.id : id,
  }));

  return mockAttendanceForToday;
}

// Función auxiliar para convertir el día de la semana en texto
function convertirDiaSemana(dia: number): string {
  const dias: string[] = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  return dias[dia];
}
