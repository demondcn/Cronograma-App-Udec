'use server'

import prisma from "@/lib/db";

// Definir la estructura final que queremos devolver
interface AttendanceRecord {
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

// Action para obtener las asistencias
export async function obtenerAsistencias(): Promise<AttendanceRecord[]> {
  try {
    const asistencias = await prisma.asistencia.findMany({
      select: {
        id: true,
        fecha: true,
        horaInicio: true,
        horaFin: true,
        estado: true,
        observaciones: true,
        horarioId: true,
        asignaturaId: true,
        aulaId: true,
        profesorId: true,
        profesor: {
          select: {
            nombre: true,
          }
        },
        aula: {
          select: {
            nombre: true,
          }
        },
        horario: {
          select: {
            diaSemana: true,
          }
        },
        asignatura: {
          select: {
            nombre: true,
          }
        },
      },
    });

    // Transformar los datos a la estructura deseada
    return asistencias.map((asistencia) => ({
      id: asistencia.id,
      fecha: asistencia.fecha.toISOString().split('T')[0], // Formatear a 'YYYY-MM-DD'
      horaInicio: asistencia.horaInicio,
      horaFin: asistencia.horaFin,
      materiaAsignada: asistencia.asignatura.nombre,
      profeAsignado: asistencia.profesor ? asistencia.profesor.nombre : '',
      estadoAsistencia: asistencia.estado,
      sala: asistencia.aula.nombre,
      observaciones: asistencia.observaciones || '', // Si no hay observaciones, dejar vacío
      diaSemana: asistencia.horario.diaSemana,
      horarioId: asistencia.horarioId,
      asignaturaId: asistencia.asignaturaId,
      aulaId: asistencia.aulaId,
      profesorId: asistencia.profesorId || '',
    }));
  } catch (error) {
    console.error('Error obteniendo asistencias:', error);
    return [];
  }
}
