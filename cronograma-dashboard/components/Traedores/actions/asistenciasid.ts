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
  cantidadtotal: number; // ✅ Agregado
  cantidadAsistida: number;
  programaNombre: string;
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
        cantasistida: true,
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
            cantidadSt: true, // ✅ Agregado - este es el total de estudiantes
          }
        },
        asignatura: {
          select: {
            nombre: true,
            programa: {
              select: {
                nombre: true,
              }
            }
          }
        },
      },
    });

    // Transformar los datos a la estructura deseada
    return asistencias.map((asistencia) => ({
      id: asistencia.id,
      fecha: asistencia.fecha.toISOString().split('T')[0],
      horaInicio: asistencia.horaInicio,
      horaFin: asistencia.horaFin,
      materiaAsignada: asistencia.asignatura.nombre,
      profeAsignado: asistencia.profesor ? asistencia.profesor.nombre : '',
      estadoAsistencia: asistencia.estado,
      sala: asistencia.aula.nombre,
      observaciones: asistencia.observaciones || '',
      diaSemana: asistencia.horario.diaSemana.toString(), // Convertir a string si es necesario
      horarioId: asistencia.horarioId,
      asignaturaId: asistencia.asignaturaId,
      aulaId: asistencia.aulaId,
      profesorId: asistencia.profesorId || '',
      cantidadtotal: asistencia.horario.cantidadSt || 0, // ✅ Agregado
      cantidadAsistida: asistencia.cantasistida || 0,
      programaNombre: asistencia.asignatura.programa.nombre,
    }));
  } catch (error) {
    console.error('Error obteniendo asistencias:', error);
    return [];
  }
}