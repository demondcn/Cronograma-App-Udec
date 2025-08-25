"use server";
import prisma from "@/lib/db";

// Definición de tipos
interface ClassInfo {
  subject: string;
  duration: number;
  professor: string;
  group: string;
}

type ScheduleData = {
  [dia: string]: {
    [hora: string]: {
      [aula: string]: ClassInfo | null;
    };
  };
};

/**
 * Genera la estructura de scheduleData desde la base de datos
 * @returns {Promise<ScheduleData>} - Objeto con la estructura scheduleData
 */
export async function materiaH(): Promise<ScheduleData> {
  try {
    // 1. Obtener todos los horarios activos del semestre con relaciones
    const horarios = await prisma.horario.findMany({
      where: {
        activo: true,
      },
      include: {
        asignatura: true,
        profesor: true,
        aula: true,
      },
      orderBy: [{ diaSemana: "asc" }, { horaInicio: "asc" }],
    });

    console.log("Horarios encontrados:", horarios.length); // Debug

    // 2. Obtener todas las aulas para inicializar la estructura
    const aulas = await prisma.aula.findMany({
      where: { activa: true },
      select: { nombre: true },
      orderBy: { nombre: "asc" },
    });

    console.log(
      "Aulas encontradas:",
      aulas.map((a) => a.nombre)
    ); // Debug

    // 3. Mapear días de la semana
    const diasSemana: { [key: number]: string } = {
      1: "lunes",
      2: "martes",
      3: "miércoles",
      4: "jueves",
      5: "viernes",
      6: "sábado",
      0: "domingo",
    };

    // 4. Generar franjas horarias desde 07:00 hasta 20:00 (coincide con tu estructura)
    const generateTimeSlots = (): string[] => {
      const slots: string[] = [];
      for (let hour = 7; hour <= 22; hour++) {
        slots.push(`${hour.toString().padStart(2, "0")}:00`);
      }
      return slots;
    };

    const timeSlots = generateTimeSlots();
    const roomNames = aulas.map((aula) => aula.nombre);

    // 5. Inicializar estructura scheduleData
    const scheduleData: ScheduleData = {};

    // Inicializar todos los días, horas y aulas con null
    Object.values(diasSemana).forEach((dia) => {
      scheduleData[dia] = {};
      timeSlots.forEach((hora) => {
        scheduleData[dia][hora] = {};
        roomNames.forEach((aula) => {
          scheduleData[dia][hora][aula] = null;
        });
      });
    });

    // 6. Función para calcular la duración en horas (simplificada)
    const calculateDuration = (horaInicio: string, horaFin: string): number => {
      const [inicioH] = horaInicio.split(":").map(Number);
      const [finH] = horaFin.split(":").map(Number);
      return finH - inicioH;
    };

    // 7. Llenar la estructura con los datos de horarios
    horarios.forEach((horario) => {
      const dia = diasSemana[horario.diaSemana];
      const aulaNombre = horario.aula.nombre;
      const horaInicio = horario.horaInicio;
      const duration = calculateDuration(horario.horaInicio, horario.horaFin);

      console.log("Procesando horario:", {
        dia,
        aula: aulaNombre,
        horaInicio,
        duration,
      }); // Debug

      // Verificar que el día y la hora existan en la estructura
      if (scheduleData[dia] && scheduleData[dia][horaInicio]) {
        // Crear el objeto de clase solo en la hora de inicio
        scheduleData[dia][horaInicio][aulaNombre] = {
          subject: horario.asignatura.nombre,
          duration: duration,
          professor: horario.profesor ? horario.profesor.nombre : "Sin asignar",
          group: horario.grupo || "Sin grupo",
        };

        // Marcar las horas siguientes como ocupadas (null)
        if (duration > 1) {
          const startHour = parseInt(horaInicio.split(":")[0]);
          for (let i = 1; i < duration; i++) {
            const nextHour = startHour + i;
            const nextTimeSlot = `${nextHour.toString().padStart(2, "0")}:00`;

            if (
              scheduleData[dia][nextTimeSlot] &&
              scheduleData[dia][nextTimeSlot][aulaNombre] === null
            ) {
              scheduleData[dia][nextTimeSlot][aulaNombre] = null; // Ya está null por inicialización
            }
          }
        }
      }
    });

    return scheduleData;

    // ...
  } catch (error) {
    console.error("Error generando scheduleData:", error);
    throw new Error(
      "Error al generar los datos de horario: " + (error as Error).message
    );
  }
}
