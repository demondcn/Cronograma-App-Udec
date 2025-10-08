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
  cadi: string;
  observaciones: string;
  diaSemana: string;
  horarioId: string;
  asignaturaId: string;
  aulaId: string;
  profesorId: string;
  cantidadtotal: number;
  cantidadAsistida: number;
  programaNombre: string;
  grupo: string;
}

// Action para obtener las asistencias
export async function obtenerAsistencias(): Promise<AttendanceRecord[]> {
  try {
    const asistencias = await prisma.asistencia.findMany({
      where: {
        horario: {
          activo: true
        }
      },
      include: {
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
          include: {
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
            asignatura: {
              include: {
                programa: {
                  select: {
                    nombre: true,
                  }
                }
              }
            }
          }
        },
        asignatura: {
          include: {
            programa: {
              select: {
                nombre: true,
              }
            }
          }
        },
      },
      orderBy: {
        fecha: 'desc'
      }
    });

    // Transformar los datos a la estructura deseada
    return asistencias.map((asistencia) => {
      // Usar el profesor actual del horario si está disponible, sino el de la asistencia
      const profesorActual = asistencia.horario.profesor?.nombre || 
                           asistencia.profesor?.nombre || 
                           'NULO';
      
      // Usar el aula actual del horario si está disponible, sino el de la asistencia
      const aulaActual = asistencia.horario.aula?.nombre || 
                        asistencia.aula.nombre;

      return {
        id: asistencia.id,
        fecha: asistencia.fecha.toISOString().split('T')[0],
        horaInicio: asistencia.horaInicio,
        horaFin: asistencia.horaFin,
        materiaAsignada: asistencia.asignatura.nombre,
        profeAsignado: profesorActual,
        estadoAsistencia: asistencia.estado,
        sala: aulaActual,
        observaciones: asistencia.observaciones || '',
        diaSemana: asistencia.horario.diaSemana.toString(),
        horarioId: asistencia.horarioId,
        asignaturaId: asistencia.asignaturaId,
        aulaId: asistencia.aulaId,
        profesorId: asistencia.profesorId || asistencia.horario.profesorId || '',
        cadi: asistencia.horario.cadi || 'falta agregar',
        cantidadtotal: asistencia.horario.cantidadSt || 0,
        cantidadAsistida: asistencia.cantasistida || 0,
        programaNombre: asistencia.asignatura.programa.nombre,
        grupo: asistencia.horario.grupo || ''
      };
    });
  } catch (error) {
    console.error('Error obteniendo asistencias:', error);
    return [];
  }
}