"use server";
import prisma from "@/lib/db";

export interface CrearDatosDeAsistencia {
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  estado: string;
  observaciones?: string;
  horarioId: string;
  asignaturaId: string;
  aulaId: string;
  profesorId?: string;
  cantasistida: number;
}

export async function crearRegistrosDeAsistencia(attendanceData: CrearDatosDeAsistencia[]) {
  try {
    // Filtrar solo registros con estado válido (no vacío ni CANCELADA)
    const validRecords = attendanceData.filter(
      (record) => record.estado && record.estado !== "CANCELADA" && record.estado !== ""
    );

    if (validRecords.length === 0) {
      return {
        success: false,
        message: "No hay registros válidos para guardar."
      };
    }

    // Crear las asistencias en la base de datos
    const createdRecords = await Promise.all(
      validRecords.map(async (record) => {
        // Convertir la fecha del formato MM/DD/YYYY a Date
        //const [month, day, year] = record.fecha.split('/');
        //const fecha = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
        const fecha = record.fecha;
        return await prisma.asistencia.create({
          data: {
            fecha: fecha,
            horaInicio: record.horaInicio,
            horaFin: record.horaFin,
            estado: record.estado,
            observaciones: record.observaciones || "",
            horarioId: record.horarioId,
            asignaturaId: record.asignaturaId,
            aulaId: record.aulaId,
            profesorId: record.profesorId || null,
            actualizadoEn: new Date(),
            cantasistida: record.cantidadAsistida
          },
          include: {
            profesor: true,
            aula: true,
            horario: true,
            asignatura: true,
          }
        });
      })
    );

    return {
      success: true,
      message: `Se guardaron ${createdRecords.length} registros de asistencia exitosamente.`,
      data: createdRecords
    };

  } catch (error) {
    console.error("Error al crear registros de asistencia:", error);

    // Manejar errores específicos
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint failed")) {
        return {
          success: false,
          message: "Ya existe un registro de asistencia para este horario y fecha."
        };
      }
    }

    return {
      success: false,
      message: "Error interno del servidor al guardar las asistencias."
    };
  }
}