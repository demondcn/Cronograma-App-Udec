"use client";

//componentes
import { HorarioVer } from "./ComponentesShedule/HorarioVer";
import { AsistenciaVer } from "./ComponentesShedule/AsistenciaVer";
import { VistaTiempoReal } from "./ComponentesShedule/VistaTiempoReal";
import { MateriasVer } from "./ComponentesShedule/MateriasVer";
//
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

//Traedores de info
import { obtenerAulas } from "./Traedores/actions/aulasNombre";
import { materiaH } from "./Traedores/actions/materiaH";
import { Calendar, Users, Play, BookOpen } from "lucide-react";
import { Navegador } from "./ComponentesShedule/NavegadorInicio";
const subjectCategories = {
  // Administración de empresas - Morado
  admin: {
    color: "bg-purple-500/20 border-purple-400/50 shadow-purple-400/20",
    glowColor: "shadow-lg shadow-purple-500/30",
    textColor: "text-purple-100",
    subjects: [
      "COSTOS Y PRESUPUESTO",
      "ADMINISTRACIÓN",
      "CONTABILIDAD GENERAL",
      "MICROECONOMÍA",
    ],
  },
  // Ingeniería de software - Verde institucional UDEC
  software: {
    color: "bg-emerald-800/30 border-emerald-600/60 shadow-emerald-600/25",
    glowColor: "shadow-lg shadow-emerald-700/40",
    textColor: "text-emerald-100",
    subjects: [
      "PROGRAMACIÓN Y ADMINISTRACIÓN EN BASE DE DATOS",
      "PENSAMIENTO ALGORÍTMICO",
      "SISTEMAS OPERATIVOS",
      "SEGURIDAD INFORMÁTICA",
      "DISEÑO Y MODELAMIENTO DE BASE DE DATOS",
      "DESARROLLO DE SOFTWARE PARA SISTEMA IOT",
      "DESARROLLO NATIVO PARA DISPOSITIVOS MÓVILES",
      "PROGRAMACIÓN II",
      "PROGRAMACIÓN I",
      "ARQUITECTURA DE HARDWARE Y SOFTWARE",
      "VIRTUALIZACIÓN",
      "REQUERIMIENTOS DE SOFTWARE",
    ],
  },
  // Ingeniería industrial - Amarillo
  industrial: {
    color: "bg-yellow-500/20 border-yellow-400/50 shadow-yellow-400/20",
    glowColor: "shadow-lg shadow-yellow-500/30",
    textColor: "text-yellow-100",
    subjects: [
      "AUTOMATIZACIÓN DE PROCESOS",
      "ESTRUCTURA DE DATOS",
      "FUNDAMENTOS DE ELECTRÓNICA",
    ],
  },
  sports: {
    color: "bg-blue-500/20 border-blue-400/50 shadow-blue-400/20",
    glowColor: "shadow-lg shadow-blue-500/30",
    textColor: "text-blue-100",
    subjects: [
      "FUNDAMENTOS DE ESTADÍSTICA",
      "BIOESTADÍSTICA APLICADA AL DEPORTE Y LA ACTIVIDAD FÍSICA",
    ],
  },
};

const getSubjectStyle = (subject: string) => {
  for (const [key, category] of Object.entries(subjectCategories)) {
    if (category.subjects.some((s) => subject.includes(s))) {
      return category;
    }
  }
  // Default para materias no clasificadas
  return {
    color: "bg-gray-500/20 border-gray-400/50",
    glowColor: "shadow-lg shadow-gray-500/30",
    textColor: "text-gray-100",
  };
};
/*
const scheduleData = {
  lunes: {
    "07:00": {
      C111: { subject: "SEGURIDAD INFORMÁTICA", duration: 1, professor: "Dr. Carlos Mendoza", group: "A1" },
      C112: { subject: "PENSAMIENTO ALGORÍTMICO", duration: 1, professor: "Ing. María González", group: "B2" },
      C113: { subject: "SISTEMAS OPERATIVOS", duration: 1, professor: "MSc. Roberto Silva", group: "C1" },
      C114: {
        subject: "PROGRAMACIÓN Y ADMINISTRACIÓN EN BASE DE DATOS",
        duration: 2,
        professor: "PhD. Ana Rodríguez",
        group: "A3",
      },
      C115: { subject: "SEGURIDAD INFORMÁTICA", duration: 1, professor: "Dr. Carlos Mendoza", group: "B1" },
      A205: null,
      A206: null,
    },
    "08:00": {
      C111: null,
      C112: { subject: "PENSAMIENTO ALGORÍTMICO", duration: 1, professor: "Ing. María González", group: "C2" },
      C113: { subject: "SISTEMAS OPERATIVOS", duration: 1, professor: "MSc. Roberto Silva", group: "A2" },
      C114: null, // Ocupado por clase anterior
      C115: { subject: "SEGURIDAD INFORMÁTICA", duration: 1, professor: "Dr. Carlos Mendoza", group: "B3" },
      A205: { subject: "SISTEMAS OPERATIVOS", duration: 1, professor: "MSc. Roberto Silva", group: "C3" },
      A206: {
        subject: "PROFUNDIZACIÓN DISCIPLINAR (SOFTWARE CON ESTÁNDARES DE CALIDAD)",
        duration: 1,
        professor: "PhD. Luis Martínez",
        group: "A1",
      },
    },
    "09:00": {
      C111: { subject: "VIRTUALIZACIÓN", duration: 1, professor: "Ing. Patricia López", group: "B1" },
      C112: null,
      C113: {
        subject: "DISEÑO Y MODELAMIENTO DE BASE DE DATOS",
        duration: 1,
        professor: "MSc. Jorge Herrera",
        group: "A2",
      },
      C114: { subject: "ESTRUCTURA DE DATOS", duration: 1, professor: "Ing. Sandra Pérez", group: "C1" },
      C115: { subject: "PENSAMIENTO ALGORÍTMICO", duration: 1, professor: "Ing. María González", group: "A3" },
      A205: {
        subject: "DESARROLLO DE SOFTWARE PARA SISTEMA IOT",
        duration: 1,
        professor: "PhD. Miguel Torres",
        group: "B2",
      },
      A206: null,
    },
    "10:00": {
      C111: { subject: "SEGURIDAD INFORMÁTICA", duration: 1, professor: "Dr. Carlos Mendoza", group: "C2" },
      C112: null,
      C113: null,
      C114: { subject: "ESTRUCTURA DE DATOS", duration: 1, professor: "Ing. Sandra Pérez", group: "A1" },
      C115: null,
      A205: null,
      A206: null,
    },
    "11:00": {
      C111: null,
      C112: null,
      C113: { subject: "SISTEMAS OPERATIVOS", duration: 1, professor: "MSc. Roberto Silva", group: "B3" },
      C114: null,
      C115: { subject: "PENSAMIENTO ALGORÍTMICO", duration: 1, professor: "Ing. María González", group: "C1" },
      A205: {
        subject: "DESARROLLO DE SOFTWARE PARA SISTEMA IOT",
        duration: 1,
        professor: "PhD. Miguel Torres",
        group: "A2",
      },
      A206: null,
    },
    "12:00": {
      C111: { subject: "AUTOMATIZACIÓN DE PROCESOS", duration: 1, professor: "Ing. Fernando Castro", group: "B1" },
      C112: null,
      C113: { subject: "SISTEMAS OPERATIVOS", duration: 1, professor: "MSc. Roberto Silva", group: "C3" },
      C114: null,
      C115: {
        subject: "DESARROLLO NATIVO PARA DISPOSITIVOS MÓVILES",
        duration: 1,
        professor: "MSc. Elena Vargas",
        group: "A3",
      },
      A205: null,
      A206: null,
    },
    "13:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
    "14:00": {
      C111: null,
      C112: { subject: "PROGRAMACIÓN II", duration: 1, professor: "Ing. David Ramírez", group: "B2" },
      C113: { subject: "PROGRAMACIÓN II", duration: 1, professor: "Ing. David Ramírez", group: "C1" },
      C114: null,
      C115: null,
      A205: { subject: "FUNDAMENTOS DE ELECTRÓNICA", duration: 1, professor: "Ing. Carmen Jiménez", group: "A1" },
      A206: { subject: "PROGRAMACIÓN II", duration: 1, professor: "Ing. David Ramírez", group: "A2" },
    },
    "15:00": {
      C111: {
        subject: "DESARROLLO DE SOFTWARE PARA SISTEMA IOT",
        duration: 1,
        professor: "PhD. Miguel Torres",
        group: "C2",
      },
      C112: null,
      C113: null,
      C114: { subject: "PROGRAMACIÓN I", duration: 1, professor: "MSc. Andrea Morales", group: "B3" },
      C115: null,
      A205: null,
      A206: null,
    },
    "16:00": {
      C111: null,
      C112: {
        subject: "ARQUITECTURA DE HARDWARE Y SOFTWARE",
        duration: 1,
        professor: "PhD. Ricardo Vega",
        group: "A3",
      },
      C113: {
        subject: "DESARROLLO NATIVO PARA DISPOSITIVOS MÓVILES",
        duration: 1,
        professor: "MSc. Elena Vargas",
        group: "B1",
      },
      C114: null,
      C115: { subject: "SEGURIDAD INFORMÁTICA", duration: 1, professor: "Dr. Carlos Mendoza", group: "C3" },
      A205: null,
      A206: null,
    },
    "17:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
    "18:00": {
      C111: null,
      C112: { subject: "COSTOS Y PRESUPUESTO", duration: 2, professor: "CPA. Gloria Sánchez", group: "ADM-1" },
      C113: { subject: "MICROECONOMÍA", duration: 2, professor: "Eco. Jaime Ruiz", group: "ADM-2" },
      C114: { subject: "MICROECONOMÍA", duration: 2, professor: "Eco. Jaime Ruiz", group: "ADM-3" },
      C115: null,
      A205: null,
      A206: null,
    },
    "19:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
    "20:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
  },
  miércoles: {
    "07:00": {
      C111: { subject: "FUNDAMENTOS DE ELECTRÓNICA", duration: 1, professor: "Ing. Carmen Jiménez", group: "IND-1" },
      C112: { subject: "FUNDAMENTOS DE ELECTRÓNICA", duration: 1, professor: "Ing. Carmen Jiménez", group: "IND-2" },
      C113: { subject: "PENSAMIENTO ALGORÍTMICO", duration: 1, professor: "Ing. María González", group: "SW-1" },
      C114: { subject: "VIRTUALIZACIÓN", duration: 1, professor: "Ing. Patricia López", group: "SW-2" },
      C115: { subject: "REQUERIMIENTOS DE SOFTWARE", duration: 1, professor: "MSc. Claudia Moreno", group: "SW-3" },
      A205: null,
      A206: null,
    },
    "08:00": {
      C111: null,
      C112: null,
      C113: { subject: "PENSAMIENTO ALGORÍTMICO", duration: 1, professor: "Ing. María González", group: "SW-4" },
      C114: { subject: "VIRTUALIZACIÓN", duration: 1, professor: "Ing. Patricia López", group: "SW-5" },
      C115: { subject: "REQUERIMIENTOS DE SOFTWARE", duration: 1, professor: "MSc. Claudia Moreno", group: "SW-6" },
      A205: null,
      A206: null,
    },
    "09:00": {
      C111: { subject: "VIRTUALIZACIÓN", duration: 1, professor: "Ing. Patricia López", group: "SW-7" },
      C112: null,
      C113: { subject: "PENSAMIENTO ALGORÍTMICO", duration: 1, professor: "Ing. María González", group: "SW-8" },
      C114: null,
      C115: null,
      A205: { subject: "PROGRAMACIÓN I", duration: 1, professor: "MSc. Andrea Morales", group: "SW-9" },
      A206: null,
    },
    "10:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: { subject: "FUNDAMENTOS DE ESTADÍSTICA", duration: 1, professor: "MSc. Pablo Herrera", group: "DEP-1" },
      A205: { subject: "PROGRAMACIÓN I", duration: 1, professor: "MSc. Andrea Morales", group: "SW-10" },
      A206: { subject: "FUNDAMENTOS DE ESTADÍSTICA", duration: 1, professor: "MSc. Pablo Herrera", group: "DEP-2" },
    },
    "11:00": {
      C111: {
        subject: "DISEÑO Y MODELAMIENTO DE BASE DE DATOS",
        duration: 1,
        professor: "MSc. Jorge Herrera",
        group: "SW-11",
      },
      C112: {
        subject: "BIOESTADÍSTICA APLICADA AL DEPORTE Y LA ACTIVIDAD FÍSICA",
        duration: 1,
        professor: "PhD. Mónica Castillo",
        group: "DEP-3",
      },
      C113: { subject: "PENSAMIENTO ALGORÍTMICO", duration: 1, professor: "Ing. María González", group: "SW-12" },
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
    "12:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: { subject: "FUNDAMENTOS DE ESTADÍSTICA", duration: 2, professor: "MSc. Pablo Herrera", group: "DEP-4" },
      A206: null,
    },
    "13:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: { subject: "PROGRAMACIÓN I", duration: 1, professor: "MSc. Andrea Morales", group: "SW-13" },
      A205: null,
      A206: null,
    },
    "14:00": {
      C111: { subject: "PROGRAMACIÓN I", duration: 1, professor: "MSc. Andrea Morales", group: "SW-14" },
      C112: { subject: "PENSAMIENTO ALGORÍTMICO", duration: 1, professor: "Ing. María González", group: "SW-15" },
      C113: { subject: "FUNDAMENTOS DE ELECTRÓNICA", duration: 1, professor: "Ing. Carmen Jiménez", group: "IND-3" },
      C114: { subject: "PROGRAMACIÓN I", duration: 1, professor: "MSc. Andrea Morales", group: "SW-16" },
      C115: null,
      A205: null,
      A206: { subject: "FUNDAMENTOS DE ESTADÍSTICA", duration: 1, professor: "MSc. Pablo Herrera", group: "DEP-5" },
    },
    "15:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: { subject: "FUNDAMENTOS DE ESTADÍSTICA", duration: 1, professor: "MSc. Pablo Herrera", group: "DEP-6" },
    },
    "16:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: { subject: "FUNDAMENTOS DE ELECTRÓNICA", duration: 1, professor: "Ing. Carmen Jiménez", group: "IND-4" },
      C115: { subject: "PROGRAMACIÓN II", duration: 1, professor: "Ing. David Ramírez", group: "SW-17" },
      A205: null,
      A206: null,
    },
    "17:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
    "18:00": {
      C111: null,
      C112: { subject: "CONTABILIDAD GENERAL", duration: 2, professor: "CPA. Beatriz Morales", group: "ADM-4" },
      C113: { subject: "MICROECONOMÍA", duration: 2, professor: "Eco. Jaime Ruiz", group: "ADM-5" },
      C114: { subject: "MICROECONOMÍA", duration: 2, professor: "Eco. Jaime Ruiz", group: "ADM-6" },
      C115: null,
      A205: null,
      A206: null,
    },
    "19:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
    "20:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
  },
}*/
const timeSlots = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];
const days = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

const attendanceData = [
  {
    id: 1,
    fecha: "8/11/2024",
    horaIngreso: "07:00-08:00",
    horaSalida: "08:00-09:00",
    materia: "PENSAMIENTO ALGORÍTMICO",
    profeAsignado: "Prof. García",
    estadoAsistencia: "ASISTIÓ",
    sala: "C112",
  },
  {
    id: 2,
    fecha: "8/11/2024",
    horaIngreso: "07:00-08:00",
    horaSalida: "08:00-09:00",
    materia: "PROGRAMACIÓN Y ADMINISTRACIÓN EN BASE DE DATOS",
    profeAsignado: "Prof. Martínez",
    estadoAsistencia: "ASISTIÓ",
    sala: "C114",
  },
  {
    id: 3,
    fecha: "8/11/2024",
    horaIngreso: "07:00-08:00",
    horaSalida: "08:00-09:00",
    materia: "SEGURIDAD INFORMÁTICA",
    profeAsignado: "Prof. López",
    estadoAsistencia: "ASISTIÓ",
    sala: "C115",
  },
  {
    id: 4,
    fecha: "8/11/2024",
    horaIngreso: "08:00-09:00",
    horaSalida: "09:00-10:00",
    materia: "SISTEMAS OPERATIVOS",
    profeAsignado: "Prof. Rodríguez",
    estadoAsistencia: "NO ASISTIÓ",
    sala: "A205",
  },
  {
    id: 5,
    fecha: "8/11/2024",
    horaIngreso: "09:00-10:00",
    horaSalida: "10:00-11:00",
    materia: "PROFUNDIZACIÓN DISCIPLINAR (SOFTWARE CON ESTÁNDARES DE CALIDAD)",
    profeAsignado: "Prof. Hernández",
    estadoAsistencia: "ASISTIÓ",
    sala: "A206",
  },
  {
    id: 6,
    fecha: "8/11/2024",
    horaIngreso: "10:00-11:00",
    horaSalida: "11:00-12:00",
    materia: "SEGURIDAD INFORMÁTICA",
    profeAsignado: "Prof. López",
    estadoAsistencia: "ASISTIÓ",
    sala: "C111",
  },
  {
    id: 7,
    fecha: "8/11/2024",
    horaIngreso: "11:00-12:00",
    horaSalida: "12:00-13:00",
    materia: "PENSAMIENTO ALGORÍTMICO",
    profeAsignado: "Prof. García",
    estadoAsistencia: "NO ASISTIÓ",
    sala: "C115",
  },
];

type ClassInfo = {
  subject: string;
  duration: number;
};

export function ScheduleDashboard() {
  const [selectedDay, setSelectedDay] = useState("lunes");
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<
    "schedule" | "attendance" | "realtime" | "subjects"
  >("schedule");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openedRooms, setOpenedRooms] = useState<Set<string>>(new Set());
  //Traedores de info
  const [rooms, setRooms] = useState<string[]>([]);
  const [scheduleData, setScheduleData] = useState<any>({});
  //boton de programas agregar
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenAula, setIsModalOpenAula] = useState(false);
  const [isModalOpenProgram, setIsModalOpenProgram] = useState(false);
  const [isModalOpenProfe, setIsModalOpenProfe] = useState(false);
  const [isModalOpenHorario, setIsModalOpenHorario] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);
  const getProcessedSchedule = (daySchedule: any) => {
    const processed: any = {};

    timeSlots.forEach((timeSlot) => {
      processed[timeSlot] = {};

      rooms.forEach((room) => {
        const classInfo = daySchedule[timeSlot]?.[room];

        if (classInfo && classInfo.duration > 1) {
          // Clase de múltiples horas
          const startIndex = timeSlots.indexOf(timeSlot);
          const endIndex = startIndex + classInfo.duration - 1;
          const endTime = timeSlots[endIndex];

          processed[timeSlot][room] = {
            subject: classInfo.subject,
            isMultiHour: true,
            rowSpan: classInfo.duration,
            timeRange: `${timeSlot}-${endTime}`,
          };

          // Marcar las siguientes horas como ocupadas
          for (let i = 1; i < classInfo.duration; i++) {
            const nextTimeSlot = timeSlots[startIndex + i];
            if (nextTimeSlot) {
              if (!processed[nextTimeSlot]) processed[nextTimeSlot] = {};
              processed[nextTimeSlot][room] = { occupied: true };
            }
          }
        } else if (classInfo && classInfo.duration === 1) {
          // Clase de una hora
          processed[timeSlot][room] = {
            subject: classInfo.subject,
            isMultiHour: false,
            rowSpan: 1,
          };
        } else if (!classInfo) {
          // Sin clase programada
          processed[timeSlot][room] = null;
        }
      });
    });

    return processed;
  };
  //variables de inicio de dias
  //el encargado de que se muestren las materias
  const getCurrentDay = () => {
    const days = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];
    return days[currentTime.getDay()];
  };
  const getCurrentTimeSlot = () => {
    const hour = currentTime.getHours();
    const currentHourString = `${hour.toString().padStart(2, "0")}:00`;

    return timeSlots.includes(currentHourString) ? currentHourString : null;
  };

  const getCurrentActiveClasses = () => {
    const currentDay = getCurrentDay();
    const currentSlot = getCurrentTimeSlot();

    if (
      !currentSlot ||
      !scheduleData[currentDay as keyof typeof scheduleData]
    ) {
      return [];
    }

    const daySchedule = scheduleData[currentDay as keyof typeof scheduleData];
    const slotData = daySchedule[currentSlot];

    if (!slotData) return [];

    return rooms
      .map((room) => ({
        room,
        subject: slotData[room]?.subject || null,
        isOpened: openedRooms.has(`${room}-${currentSlot}`),
      }))
      .filter((item) => item.subject !== null);
  };
  const toggleRoomOpened = (room: string, timeSlot: string) => {
    const key = `${room}-${timeSlot}`;
    const newOpenedRooms = new Set(openedRooms);

    if (newOpenedRooms.has(key)) {
      newOpenedRooms.delete(key);
    } else {
      newOpenedRooms.add(key);
    }

    setOpenedRooms(newOpenedRooms);
  };

  const cargarAulas = async () => {
    try {
      const aulas = await obtenerAulas();
      setRooms(aulas);
    } catch (error) {
      console.error("Error cargando aulas:", error);
      setRooms(["D06"]);
    }
  };
  const cargarHorarios = async () => {
    try {
      const horarios = await materiaH();
      setScheduleData(horarios);
      console.log("Horarios cargados:", horarios);
    } catch (error) {
      console.error("Error cargando horarios:", error);
      setScheduleData({});
    }
  };

  const currentSchedule = getProcessedSchedule(
    scheduleData[selectedDay as keyof typeof scheduleData] || {}
  );
  const activeClasses = getCurrentActiveClasses();

  useEffect(() => {
    cargarAulas();
    //cargarHorarios;
    //5h debugeando para saber que solo faltaba un ()
    cargarHorarios();
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-6 relative z-10">
      <Navegador />
      <Card className="bg-gray-900/30 backdrop-blur-sm border-cyan-500/30 shadow-lg shadow-cyan-500/20">
        <CardContent className="p-4">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={activeView === "schedule" ? "default" : "outline"}
              onClick={() => setActiveView("schedule")}
              className={`font-mono transition-all duration-300 ${
                activeView === "schedule"
                  ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/50"
                  : "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              CRONOGRAMA
            </Button>
            <Button
              variant={activeView === "attendance" ? "default" : "outline"}
              onClick={() => setActiveView("attendance")}
              className={`font-mono transition-all duration-300 ${
                activeView === "attendance"
                  ? "bg-purple-500 hover:bg-purple-400 text-black shadow-lg shadow-purple-500/50"
                  : "border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400"
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              CHECK LIST DE ASISTENCIA
            </Button>
            <Button
              variant={activeView === "realtime" ? "default" : "outline"}
              onClick={() => setActiveView("realtime")}
              className={`font-mono transition-all duration-300 ${
                activeView === "realtime"
                  ? "bg-green-500 hover:bg-green-400 text-black shadow-lg shadow-green-500/50"
                  : "border-green-500/50 text-green-300 hover:bg-green-500/20 hover:border-green-400"
              }`}
            >
              <Play className="w-4 h-4 mr-2" />
              CONTROL TIEMPO REAL
            </Button>
            <Button
              variant={activeView === "subjects" ? "default" : "outline"}
              onClick={() => setActiveView("subjects")}
              className={`font-mono transition-all duration-300 ${
                activeView === "subjects"
                  ? "bg-orange-500 hover:bg-orange-400 text-black shadow-lg shadow-orange-500/50"
                  : "border-orange-500/50 text-orange-300 hover:bg-orange-500/20 hover:border-orange-400"
              }`}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              GESTIÓN DE MATERIAS
            </Button>
          </div>
        </CardContent>
      </Card>

      {activeView === "subjects" ? (
        <>
          <MateriasVer
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            isModalOpenAula={isModalOpenAula}
            setIsModalOpenAula={setIsModalOpenAula}
            isModalOpenProgram={isModalOpenProgram}
            setIsModalOpenProgram={setIsModalOpenProgram}
            isModalOpenProfe={isModalOpenProfe}
            setIsModalOpenProfe={setIsModalOpenProfe}
            isModalOpenHorario={isModalOpenHorario}
            setIsModalOpenHorario={setIsModalOpenHorario}
          />
        </>
      ) : activeView === "realtime" ? (
        <VistaTiempoReal
          currentTime={currentTime}
          getCurrentDay={getCurrentDay}
          getCurrentTimeSlot={getCurrentTimeSlot}
          activeClasses={activeClasses}
          toggleRoomOpened={toggleRoomOpened}
          getSubjectStyle={getSubjectStyle}
        />
      ) : activeView === "schedule" ? (
        <HorarioVer
          selectedDay={selectedDay}
          selectedRoom={selectedRoom}
          setSelectedDay={setSelectedDay}
          setSelectedRoom={setSelectedRoom}
          days={days}
          rooms={rooms}
          currentSchedule={currentSchedule}
          timeSlots={timeSlots}
          getSubjectStyle={getSubjectStyle}
        />
      ) : (
        <AsistenciaVer
          attendanceData={attendanceData}
          getSubjectStyle={getSubjectStyle}
        />
      )}
    </div>
  );
}
