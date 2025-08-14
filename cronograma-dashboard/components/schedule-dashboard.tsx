"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, CheckCircle, XCircle, Users } from "lucide-react"

const subjectCategories = {
  // Administración de empresas - Morado
  admin: {
    color: "bg-purple-500/20 border-purple-400/50 shadow-purple-400/20",
    glowColor: "shadow-lg shadow-purple-500/30",
    textColor: "text-purple-100",
    subjects: ["COSTOS Y PRESUPUESTO", "ADMINISTRACIÓN", "CONTABILIDAD GENERAL", "MICROECONOMÍA"],
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
    subjects: ["AUTOMATIZACIÓN DE PROCESOS", "ESTRUCTURA DE DATOS", "FUNDAMENTOS DE ELECTRÓNICA"],
  },
  sports: {
    color: "bg-blue-500/20 border-blue-400/50 shadow-blue-400/20",
    glowColor: "shadow-lg shadow-blue-500/30",
    textColor: "text-blue-100",
    subjects: ["FUNDAMENTOS DE ESTADÍSTICA", "BIOESTADÍSTICA APLICADA AL DEPORTE Y LA ACTIVIDAD FÍSICA"],
  },
}

const getSubjectStyle = (subject: string) => {
  for (const [key, category] of Object.entries(subjectCategories)) {
    if (category.subjects.some((s) => subject.includes(s))) {
      return category
    }
  }
  // Default para materias no clasificadas
  return {
    color: "bg-gray-500/20 border-gray-400/50",
    glowColor: "shadow-lg shadow-gray-500/30",
    textColor: "text-gray-100",
  }
}

const scheduleData = {
  lunes: {
    "07:00-08:00": {
      C111: null,
      C112: { subject: "PENSAMIENTO ALGORÍTMICO" },
      C113: { subject: "SISTEMAS OPERATIVOS" },
      C114: { subject: "PROGRAMACIÓN Y ADMINISTRACIÓN EN BASE DE DATOS" },
      C115: { subject: "SEGURIDAD INFORMÁTICA" },
      A205: null,
      A206: null,
    },
    "08:00-09:00": {
      C111: null,
      C112: { subject: "PENSAMIENTO ALGORÍTMICO" },
      C113: { subject: "SISTEMAS OPERATIVOS" },
      C114: { subject: "PROGRAMACIÓN Y ADMINISTRACIÓN EN BASE DE DATOS" },
      C115: { subject: "SEGURIDAD INFORMÁTICA" },
      A205: { subject: "SISTEMAS OPERATIVOS" },
      A206: null,
    },
    "09:00-10:00": {
      C111: { subject: "SEGURIDAD INFORMÁTICA" },
      C112: { subject: "PENSAMIENTO ALGORÍTMICO" },
      C113: { subject: "DISEÑO Y MODELAMIENTO DE BASE DE DATOS" },
      C114: { subject: "ESTRUCTURA DE DATOS" },
      C115: null,
      A205: { subject: "SISTEMAS OPERATIVOS" },
      A206: { subject: "PROFUNDIZACIÓN DISCIPLINAR (SOFTWARE CON ESTÁNDARES DE...)" },
    },
    "10:00-11:00": {
      C111: { subject: "SEGURIDAD INFORMÁTICA" },
      C112: null,
      C113: { subject: "DISEÑO Y MODELAMIENTO DE BASE DE DATOS" },
      C114: { subject: "ESTRUCTURA DE DATOS" },
      C115: { subject: "PENSAMIENTO ALGORÍTMICO" },
      A205: { subject: "SISTEMAS OPERATIVOS" },
      A206: { subject: "PROFUNDIZACIÓN DISCIPLINAR (SOFTWARE CON ESTÁNDARES DE...)" },
    },
    "11:00-12:00": {
      C111: { subject: "AUTOMATIZACIÓN DE PROCESOS" },
      C112: null,
      C113: { subject: "SISTEMAS OPERATIVOS" },
      C114: { subject: "ESTRUCTURA DE DATOS" },
      C115: { subject: "PENSAMIENTO ALGORÍTMICO" },
      A205: { subject: "DESARROLLO DE SOFTWARE PARA SISTEMA IOT" },
      A206: null,
    },
    "12:00-13:00": {
      C111: { subject: "AUTOMATIZACIÓN DE PROCESOS" },
      C112: null,
      C113: { subject: "SISTEMAS OPERATIVOS" },
      C114: null,
      C115: { subject: "PENSAMIENTO ALGORÍTMICO" },
      A205: { subject: "DESARROLLO DE SOFTWARE PARA SISTEMA IOT" },
      A206: null,
    },
    "13:00-14:00": {
      C111: { subject: "AUTOMATIZACIÓN DE PROCESOS" },
      C112: { subject: "PROGRAMACIÓN II" },
      C113: { subject: "PROGRAMACIÓN II" },
      C114: { subject: "PROGRAMACIÓN I" },
      C115: { subject: "DESARROLLO NATIVO PARA DISPOSITIVOS MÓVILES" },
      A205: { subject: "DESARROLLO DE SOFTWARE PARA SISTEMA IOT" },
      A206: null,
    },
    "14:00-15:00": {
      C111: { subject: "DESARROLLO DE SOFTWARE PARA SISTEMA IOT" },
      C112: { subject: "PROGRAMACIÓN II" },
      C113: { subject: "PROGRAMACIÓN II" },
      C114: { subject: "PROGRAMACIÓN I" },
      C115: { subject: "DESARROLLO NATIVO PARA DISPOSITIVOS MÓVILES" },
      A205: { subject: "FUNDAMENTOS DE ELECTRÓNICA" },
      A206: { subject: "PROGRAMACIÓN II" },
    },
    "15:00-16:00": {
      C111: { subject: "DESARROLLO DE SOFTWARE PARA SISTEMA IOT" },
      C112: { subject: "ARQUITECTURA DE HARDWARE Y SOFTWARE" },
      C113: { subject: "DESARROLLO NATIVO PARA DISPOSITIVOS MÓVILES" },
      C114: { subject: "PROGRAMACIÓN I" },
      C115: null,
      A205: { subject: "FUNDAMENTOS DE ELECTRÓNICA" },
      A206: { subject: "PROGRAMACIÓN II" },
    },
    "16:00-17:00": {
      C111: { subject: "DESARROLLO DE SOFTWARE PARA SISTEMA IOT" },
      C112: { subject: "ARQUITECTURA DE HARDWARE Y SOFTWARE" },
      C113: { subject: "DESARROLLO NATIVO PARA DISPOSITIVOS MÓVILES" },
      C114: { subject: "PROGRAMACIÓN I" },
      C115: { subject: "SEGURIDAD INFORMÁTICA" },
      A205: { subject: "FUNDAMENTOS DE ELECTRÓNICA" },
      A206: null,
    },
    "17:00-18:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: { subject: "SEGURIDAD INFORMÁTICA" },
      A205: null,
      A206: null,
    },
    "18:00-19:00": {
      C111: null,
      C112: { subject: "COSTOS Y PRESUPUESTO" },
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
    "19:00-20:00": {
      C111: null,
      C112: { subject: "COSTOS Y PRESUPUESTO" },
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
    "20:00-21:00": {
      C111: null,
      C112: { subject: "COSTOS Y PRESUPUESTO" },
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null,
    },
  },
  martes: {
    "07:00-08:00": {
      C111: null,
      C112: null,
      C113: { subject: "MODELACION DE OPERACIONES - MODO A" },
      C114: null,
      C115: { subject: "FUNDAMENTOS DE INGENIERIA - 101 FUNI A" },
      A205: null,
      A206: { subject: "AUTOMATIZACION DE PROCESOS - AUTP A" }
    },
    "08:00-09:00": {
      C111: null,
      C112: null,
      C113: { subject: "MODELACION DE OPERACIONES - MODO A" },
      C114: { subject: "INTERFAZ HOMBRE MAQUINA - INGSOFT501" },
      C115: { subject: "FUNDAMENTOS DE INGENIERIA - 101 FUNI A" },
      A205: null,
      A206: { subject: "AUTOMATIZACION DE PROCESOS - AUTP A" }
    },
    "09:00-10:00": {
      C111: { subject: "PROGRAMACION I - PROGI C" },
      C112: { subject: "PROGRAMACION II - PROGII A" },
      C113: { subject: "MODELACION DE OPERACIONES - MODO A" },
      C114: { subject: "INTERFAZ HOMBRE MAQUINA - INGSOFT501" },
      C115: { subject: "PROFUNDIZACION DISCIPLINAR (CIENCIA DE DATOS) - INGSOFT701" },
      A205: null,
      A206: { subject: "AUTOMATIZACION DE PROCESOS - AUTP A" }
    },
    "10:00-11:00": {
      C111: { subject: "PROGRAMACION I - PROGI C" },
      C112: { subject: "PROGRAMACION II - PROGII A" },
      C113: { subject: "INTERFAZ HOMBRE MAQUINA - INGSOFT502" },
      C114: null,
      C115: { subject: "PROFUNDIZACION DISCIPLINAR (CIENCIA DE DATOS) - INGSOFT701" },
      A205: null,
      A206: { subject: "SIMULACION EN INGENIERIA - SIMI A" }
    },
    "11:00-12:00": {
      C111: { subject: "PROGRAMACION I - PROGI C" },
      C112: null,
      C113: { subject: "INTERFAZ HOMBRE MAQUINA - INGSOFT502" },
      C114: null,
      C115: { subject: "FUNDAMENTOS DE ELECTRONICA - 101 FELEC A" },
      A205: null,
      A206: null
    },
    "12:00-13:00": {
      C111: { subject: "ANALISIS DE DATOS (CUANTITATIVA Y CUALITATIVA)" },
      C112: { subject: "MODELACION DE OPERACIONES - MODO B" },
      C113: { subject: "DESARROLLO NATIVO PARA DISPOSITIVOS MOVILES - INGSOFT503" },
      C114: null,
      C115: { subject: "FUNDAMENTOS DE ELECTRONICA - 101 FELEC A" },
      A205: null,
      A206: null
    },
    "13:00-14:00": {
      C111: { subject: "ANALISIS DE DATOS (CUANTITATIVA Y CUALITATIVA)" },
      C112: { subject: "MODELACION DE OPERACIONES - MODO B" },
      C113: { subject: "DESARROLLO NATIVO PARA DISPOSITIVOS MOVILES - INGSOFT503" },
      C114: null,
      C115: null,
      A205: { subject: "PROGRAMACION I - PROGI A" },
      A206: null
    },
    "14:00-15:00": {
      C111: { subject: "ANALISIS DE DATOS (CUANTITATIVA Y CUALITATIVA)" },
      C112: { subject: "MODELACION DE OPERACIONES - MODO B" },
      C113: null,
      C114: null,
      C115: { subject: "FUNDAMENTOS DE ELECTRONICA - INGSOFT102" },
      A205: { subject: "PROGRAMACION I - PROGI A" },
      A206: null
    },
    "15:00-16:00": {
      C111: null,
      C112: { subject: "PROGRAMACION II - PROGII B" },
      C113: { subject: "PROGRAMACION WEB - INGSOFT403" },
      C114: null,
      C115: { subject: "FUNDAMENTOS DE ELECTRONICA - INGSOFT102" },
      A205: { subject: "PROGRAMACION I - PROGI A" },
      A206: null
    },
    "16:00-17:00": {
      C111: null,
      C112: { subject: "PROGRAMACION II - PROGII B" },
      C113: { subject: "PROGRAMACION WEB - INGSOFT403" },
      C114: null,
      C115: null,
      A205: null,
      A206: null
    },
    "17:00-18:00": {
      C111: null,
      C112: null,
      C113: { subject: "PROGRAMACION WEB - INGSOFT403" },
      C114: null,
      C115: null,
      A205: null,
      A206: null
    },
    "18:00-19:00": {
      C111: null,
      C112: { subject: "CONTABILIDAD GENERAL - 101N ADMON SOACHA" },
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null
    },
    "19:00-20:00": {
      C111: null,
      C112: { subject: "CONTABILIDAD GENERAL - 101N ADMON SOACHA" },
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null
    },
    "20:00-21:00": {
      C111: null,
      C112: { subject: "CONTABILIDAD GENERAL - 101N ADMON SOACHA" },
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null
    }
  },

  miercoles: {
    "07:00-08:00": {
      C111: null,
      C112: { subject: "FUNDAMENTOS DE ELECTRONICA - INGSOFT101" },
      C113: { subject: "PENSAMIENTO ALGORITMICO - 101 PENSA A" },
      C114: { subject: "VIRTUALIZACION - INGSOFT702" },
      C115: { subject: "REQUERIMIENTOS DE SOFTWARE - INGSOFT401" },
      A205: null,
      A206: null
    },
    "08:00-09:00": {
      C111: null,
      C112: { subject: "FUNDAMENTOS DE ELECTRONICA - INGSOFT101" },
      C113: { subject: "PENSAMIENTO ALGORITMICO - 101 PENSA A" },
      C114: { subject: "VIRTUALIZACION - INGSOFT702" },
      C115: { subject: "REQUERIMIENTOS DE SOFTWARE - INGSOFT401" },
      A205: null,
      A206: null
    },
    "09:00-10:00": {
      C111: { subject: "VIRTUALIZACION - INGSOFT701" },
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: { subject: "PROGRAMACION I - PROGI C" },
      A206: null
    },
    "10:00-11:00": {
      C111: { subject: "VIRTUALIZACION - INGSOFT701" },
      C112: null,
      C113: null,
      C114: { subject: "PENSAMIENTO ALGORITMICO - 102 PENSA B" },
      C115: null,
      A205: { subject: "PROGRAMACION I - PROGI C" },
      A206: null
    },
    "11:00-12:00": {
      C111: { subject: "DISENO Y MODELAMIENTO DE BASE DE DATOS - INGSOFT403" },
      C112: { subject: "BIOESTADISTICA APLICADA AL DEPORTE Y LA ACTIVIDAD FISICA - 701" },
      C113: null,
      C114: { subject: "PENSAMIENTO ALGORITMICO - 102 PENSA B" },
      C115: null,
      A205: { subject: "PROGRAMACION I - PROGI C" },
      A206: null
    },
    "12:00-13:00": {
      C111: { subject: "DISENO Y MODELAMIENTO DE BASE DE DATOS - INGSOFT403" },
      C112: { subject: "BIOESTADISTICA APLICADA AL DEPORTE Y LA ACTIVIDAD FISICA - 701" },
      C113: null,
      C114: { subject: "PENSAMIENTO ALGORITMICO - 102 PENSA B" },
      C115: { subject: "PROGRAMACION I - PROGI B" },
      A205: null,
      A206: null
    },
    "13:00-14:00": {
      C111: { subject: "PROGRAMACION I - INGSOFT203" },
      C112: { subject: "PENSAMIENTO ALGORITMICO - INGSOFT103" },
      C113: null,
      C114: null,
      C115: { subject: "PROGRAMACION I - PROGI B" },
      A205: null,
      A206: null
    },
    "14:00-15:00": {
      C111: { subject: "PROGRAMACION I - INGSOFT203" },
      C112: { subject: "PENSAMIENTO ALGORITMICO - INGSOFT103" },
      C113: { subject: "FUNDAMENTOS DE ELECTRONICA - INGSOFT102" },
      C114: null,
      C115: { subject: "PROGRAMACION I - PROGI B" },
      A205: null,
      A206: { subject: "BIOESTADISTICA APLICADA AL DEPORTE Y LA ACTIVIDAD FISICA - 702" }
    },
    "15:00-16:00": {
      C111: { subject: "PROGRAMACION I - INGSOFT203" },
      C112: { subject: "PENSAMIENTO ALGORITMICO - INGSOFT103" },
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: { subject: "BIOESTADISTICA APLICADA AL DEPORTE Y LA ACTIVIDAD FISICA - 702" }
    },
    "16:00-17:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: { subject: "FUNDAMENTOS DE ELECTRONICA - INGSOFT103" },
      C115: null,
      A205: null,
      A206: null
    },
    "17:00-18:00": {
      C111: null,
      C112: null,
      C113: null,
      C114: null,
      C115: null,
      A205: null,
      A206: null
    },
    "18:00-19:00": {
      C111: null,
      C112: { subject: "CONTABILIDAD GENERAL - 103N ADMON SOACHA" },
      C113: { subject: "MICROECONOMIA - 101N ADMON SOACHA" },
      C114: { subject: "MICROECONOMIA - 102N ADMON SOACHA" },
      C115: null,
      A205: null,
      A206: null
    },
    "19:00-20:00": {
      C111: null,
      C112: { subject: "CONTABILIDAD GENERAL - 103N ADMON SOACHA" },
      C113: { subject: "MICROECONOMIA - 101N ADMON SOACHA" },
      C114: { subject: "MICROECONOMIA - 102N ADMON SOACHA" },
      C115: null,
      A205: null,
      A206: null
    },
    "20:00-21:00": {
      C111: null,
      C112: { subject: "CONTABILIDAD GENERAL - 103N ADMON SOACHA" },
      C113: { subject: "MICROECONOMIA - 101N ADMON SOACHA" },
      C114: { subject: "MICROECONOMIA - 102N ADMON SOACHA" },
      C115: null,
      A205: null,
      A206: null
    }
  },
  jueves: {
    "07:00-08:00": {
      C111: null,
      C112: { subject: "FUNDAMENTOS DE ELECTRONICA"},
      C113: null,
      C114: { subject: "ARQUITECTURA DE HARDWARE Y SOFTWARE - INGSOFT401" },
      C115: null,
      A205: null,
      A206: null
    },
    "08:00-09:00": {
      C111: null,
      C112: { subject: "FUNDAMENTOS DE ELECTRONICA" },
      C113: { subject: "SIMULACION EN INGENIERIA" },
      C114: { subject: "ARQUITECTURA DE HARDWARE Y SOFTWARE - INGSOFT401" },
      C115: { subject: "PROGRAMACION I - INGSOFT202" },
      A205: { subject: "PENSAMIENTO SISTEMICO Y AUTOMATIZACION - 102 PENSS B" },
      A206: null
    },
    "09:00-10:00": {
      C111: { subject: "ESTRUCTURA DE DATOS - INGSOFT402" },
      C112: null,
      C113: { subject: "SIMULACION EN INGENIERIA" },
      C114: { subject: "FUNDAMENTOS DE ELECTRONICA - 102 FELEC B" },
      C115: { subject: "PROGRAMACION I - INGSOFT202" },
      A205: { subject: "PENSAMIENTO SISTEMICO Y AUTOMATIZACION - 102 PENSS B" },
      A206: null
    },
    "10:00-11:00": {
      C111: { subject: "ESTRUCTURA DE DATOS - INGSOFT402" },
      C112: { subject: "PENSAMIENTO SISTEMICO Y AUTOMATIZACION - 101 PENSS A" },
      C113: null,
      C114: { subject: "FUNDAMENTOS DE ELECTRONICA - 102 FELEC B" },
      C115: { subject: "PROGRAMACION I - INGSOFT202" },
      A205: null,
      A206: { subject: "FUNDAMENTOS DE ESTADISTICA - 601" }
    },
    "11:00-12:00": {
      C111: { subject: "ESTRUCTURA DE DATOS - INGSOFT402" },
      C112: { subject: "PENSAMIENTO SISTEMICO Y AUTOMATIZACION - 101 PENSS A" },
      C113: null,
      C114: { subject: "MOTORES Y GESTORES EN BASE DE DATOS - INGSOFT503" },
      C115: { subject: "REQUERIMIENTOS DE SOFTWARE - INGSOFT403" },
      A205: { subject: "SIMULACION EN INGENIERIA - SIMI B" },
      A206: { subject: "FUNDAMENTOS DE ESTADISTICA - 601" }
    },
    "12:00-13:00": {
      C111:{ subject: "FUNDAMENTOS DE ELECTRONICA - 101 FELEC A" },
      C112: null,
      C113: { subject: "PROFUNDIZACION" },
      C114: { subject: "MOTORES Y GESTORES EN BASE DE DATOS - INGSOFT503" },
      C115: { subject: "REQUERIMIENTOS DE SOFTWARE - INGSOFT403" },
      A205: { subject: "SIMULACION EN INGENIERIA - SIMI B" },
      A206: null
    },
    "13:00-14:00": {
      C111: { subject: "FUNDAMENTOS DE ELECTRONICA - 101 FELEC A" },
      C112: null,
      C113: { subject: "PROFUNDIZACION" },
      C114: { subject: "ANALISIS DE DATOS (CUANTITATIVA Y CUALITATIVA) - ANCC B" },
      C115: { subject: "FUNDAMENTOS DE ESTADISTICA - 602" },
      A205: null,
      A206: { subject: "PROGRAMACION I - PROGI A" }
    },
    "14:00-15:00": {
      C111: { subject: "PROGRAMACION II - PROGII A" },
      C112: null,
      C113: { subject: "PROGRAMACION - 101M" },
      C114: { subject: "ANALISIS DE DATOS (CUANTITATIVA Y CUALITATIVA) - ANCC B" },
      C115: { subject: "FUNDAMENTOS DE ESTADISTICA - 602" },
      A205: null,
      A206: { subject: "PROGRAMACION I - PROGI A" }
    },
    "15:00-16:00": {
      C111: { subject: "PROGRAMACION II - PROGII A" },
      C112: { subject: "ESTRUCTURA DE DATOS - INGSOFT401" },
      C113: { subject: "PROGRAMACION - 101M" },
      C114: { subject: "ANALISIS DE DATOS (CUANTITATIVA Y CUALITATIVA) - ANCC B" },
      C115: null,
      A205: null,
      A206: { subject: "PROGRAMACION I - PROGI A" }
    },
    "16:00-17:00": {
      C111: null,
      C112: { subject: "ESTRUCTURA DE DATOS - INGSOFT401" },
      C113: { subject: "PROGRAMACION - 102M" },
      C114: null,
      C115: {subject: "PROGRAMACION II"},
      A205: null,
      A206: null
    },
    "17:00-18:00": {
      C111: null,
      C112: { subject: "ESTRUCTURA DE DATOS - INGSOFT401" },
      C113: { subject: "PROGRAMACION - 102M" },
      C114: null,
      C115: {subject: "PROGRAMACION II"},
      A205: null,
      A206: null
    },
    "18:00-19:00": {
      C111: null,
      C112: null,
      C113: { subject: "COSTOS Y PRESUPUESTO - 203N ADMON SOACHA" },
      C114: null,
      C115: null,
      A205: null,
      A206: null
    },
    "19:00-20:00": {
      C111: null,
      C112: null,
      C113: { subject: "COSTOS Y PRESUPUESTO - 203N ADMON SOACHA" },
      C114: null,
      C115: null,
      A205: null,
      A206: null
    },
    "20:00-21:00": {
      C111: null,
      C112: null,
      C113: { subject: "COSTOS Y PRESUPUESTO - 203N ADMON SOACHA" },
      C114: null,
      C115: null,
      A205: null,
      A206: null
    }
  },

viernes: {
  "07:00-08:00": {
    C111: { subject: "FUNDAMENTOS DE INGENIERIA - INGSOFT101" },
    C112: { subject: "FORMULACION Y EVALUACION DE PROYECTOS - FORE A" },
    C113: { subject: "ARQUITECTURA DE HARDWARE Y SOFTWARE - INGSOFT402" },
    C114: { subject: "DISENO Y MODELAMIENTO DE BASE DE DATOS - INGSOFT401" },
    C115: { subject: "PENSAMIENTO ALGORITMICO - 102 PENSA B" },
    A205: null,
    A206: { subject: "COSTOS Y PRESUPUESTOS - 702" }
  },
  "08:00-09:00": {
    C111: { subject: "FUNDAMENTOS DE INGENIERIA - INGSOFT101" },
    C112: { subject: "FORMULACION Y EVALUACION DE PROYECTOS - FORE A" },
    C113: { subject: "ARQUITECTURA DE HARDWARE Y SOFTWARE - INGSOFT402" },
    C114: { subject: "DISENO Y MODELAMIENTO DE BASE DE DATOS - INGSOFT401" },
    C115: { subject: "PENSAMIENTO ALGORITMICO - 102 PENSA B" },
    A205: null,
    A206: { subject: "COSTOS Y PRESUPUESTOS - 702" }
  },
  "09:00-10:00": {
    C111: null,
    C112: null,
    C113: { subject: "FUNDAMENTOS DE ELECTRONICA - INGSOFT101" },
    C114: { subject: "AUTOMATIZACIÓN DE PROCESOS" },
    C115: { subject: "PENSAMIENTO ALGORITMICO - 102 PENSA B" },
    A205: { subject: "PROGRAMACION II - INGSOFT303" },
    A206: null
  },
  "10:00-11:00": {
    C111: { subject: "INTERFAZ HOMBRE MAQUINA - INGSOFT503" },
    C112: { subject: "PENSAMIENTO ALGORITMICO - 101 PENSA A" },
    C113: { subject: "FUNDAMENTOS DE ELECTRONICA - INGSOFT101" },
    C114: { subject: "AUTOMATIZACIÓN DE PROCESOS" },
    C115: null,
    A205: { subject: "PROGRAMACION II - INGSOFT303" },
    A206: null
  },
  "11:00-12:00": {
    C111: { subject: "INTERFAZ HOMBRE MAQUINA - INGSOFT503" },
    C112: { subject: "PENSAMIENTO ALGORITMICO - 101 PENSA A" },
    C113: { subject: "ARQUITECTURA DE DATOS - INGSOFT701" },
    C114: { subject: "AUTOMATIZACIÓN DE PROCESOS" },
    C115: { subject: "FUNDAMENTOS DE INGENIERIA - INGSOFT103" },
    A205: null,
    A206: null
  },
  "12:00-13:00": {
    C111: null,
    C112: { subject: "PENSAMIENTO ALGORITMICO - 101 PENSA A" },
    C113: { subject: "ARQUITECTURA DE DATOS - INGSOFT701" },
    C114: null,
    C115: { subject: "FUNDAMENTOS DE INGENIERIA - INGSOFT103" },
    A205: { subject: "FORMULACION Y EVALUACION DE PROYECTOS - FORE B" },
    A206: null
  },
  "13:00-14:00": {
    C111: null,
    C112: { subject: "PROGRAMACION WEB - INGSOFT401" },
    C113: { subject: "PLANIMETRIA - 101M" },
    C114: { subject: "ARQUITECTURA DE DATOS - INGSOFT702" },
    C115: { subject: "PROGRAMACION I - PROGI B" },
    A205: { subject: "FORMULACION Y EVALUACION DE PROYECTOS - FORE B" },
    A206: null
  },
  "14:00-15:00": {
    C111: { subject: "MOTORES Y GESTORES EN BASE DE DATOS - INGSOFT501" },
    C112: { subject: "PROGRAMACION WEB - INGSOFT401" },
    C113: { subject: "PLANIMETRIA - 101M" },
    C114: { subject: "ARQUITECTURA DE DATOS - INGSOFT702" },
    C115: { subject: "PROGRAMACION I - PROGI B" },
    A205: { subject: "PENSAMIENTO ALGORITMICO - INGSOFT102" },
    A206: { subject: "PROGRAMACION II" }
  },
  "15:00-16:00": {
    C111: { subject: "MOTORES Y GESTORES EN BASE DE DATOS - INGSOFT501" },
    C112: { subject: "PROGRAMACION WEB - INGSOFT401" },
    C113: { subject: "PLANIMETRIA - 101M" },
    C114: null,
    C115: { subject: "PROGRAMACION I - PROGI B" },
    A205: { subject: "PENSAMIENTO ALGORITMICO - INGSOFT102" },
    A206: { subject: "PROGRAMACION II" }
  },
  "16:00-17:00": {
    C111: null,
    C112: { subject: "MOTORES Y GESTORES EN BASE DE DATOS - INGSOFT502" },
    C113: { subject: "PLANIMETRIA - 102M" },
    C114: null,
    C115: { subject: "PROGRAMACION II" },
    A205: { subject: "PENSAMIENTO ALGORITMICO - INGSOFT102" },
    A206: null
  },
  "17:00-18:00": {
    C111: null,
    C112: { subject: "MOTORES Y GESTORES EN BASE DE DATOS - INGSOFT502" },
    C113: { subject: "PLANIMETRIA - 102M" },
    C114: null,
    C115:{ subject: "PROGRAMACION II" },
    A205: null,
    A206: null
  },
  "18:00-19:00": {
    C111: null,
    C112: { subject: "CONTABILIDAD GENERAL - 102N ADMON SOACHA" },
    C113: null,
    C114: { subject: "MICROECONOMIA - 103N ADMON SOACHA" },
    C115: null,
    A205: null,
    A206: null
  },
  "19:00-20:00": {
    C111: null,
    C112: { subject: "CONTABILIDAD GENERAL - 102N ADMON SOACHA" },
    C113: null,
    C114: { subject: "MICROECONOMIA - 103N ADMON SOACHA" },
    C115: null,
    A205: null,
    A206: null
  },
  "20:00-21:00": {
    C111: null,
    C112: { subject: "CONTABILIDAD GENERAL - 102N ADMON SOACHA" },
    C113: null,
    C114: { subject: "MICROECONOMIA - 103N ADMON SOACHA" },
    C115: null,
    A205: null,
    A206: null
  },
  "21:00-22:00": {
    C111: null,
    C112: { subject: "CONTABILIDAD GENERAL - 102N ADMON SOACHA" },
    C113: null,
    C114: null,
    C115: null,
    A205: null,
    A206: null
  }
}

}



const rooms = ["C111", "C112", "C113", "C114", "C115", "A205", "A206"]
const timeSlots = [
  "07:00-08:00",
  "08:00-09:00",
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
  "17:00-18:00",
  "18:00-19:00",
  "19:00-20:00",
  "20:00-21:00",
]
const days = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]

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
]

export function ScheduleDashboard() {
  const [selectedDay, setSelectedDay] = useState("lunes")
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  const [activeView, setActiveView] = useState<"schedule" | "attendance">("schedule")

  const currentSchedule = scheduleData[selectedDay as keyof typeof scheduleData] || scheduleData.lunes

  return (
    <div className="container mx-auto p-6 space-y-6 relative z-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            CRONOGRAMA DASHBOARD
          </h1>
          <p className="text-cyan-300 mt-1 font-mono">Control y gestión de salas académicas</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-cyan-400 bg-gray-900/50 px-4 py-2 rounded-lg border border-cyan-500/30">
          <Calendar className="w-4 h-4" />
          <span className="font-mono">SEMESTRE 2024-1</span>
        </div>
      </div>

      <Card className="bg-gray-900/30 backdrop-blur-sm border-cyan-500/30 shadow-lg shadow-cyan-500/20">
        <CardContent className="p-4">
          <div className="flex gap-2">
            <Button
              variant={activeView === "schedule" ? "default" : "outline"}
              onClick={() => setActiveView("schedule")}
              className={`font-mono transition-all duration-300 ${activeView === "schedule"
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
              className={`font-mono transition-all duration-300 ${activeView === "attendance"
                ? "bg-purple-500 hover:bg-purple-400 text-black shadow-lg shadow-purple-500/50"
                : "border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400"
                }`}
            >
              <Users className="w-4 h-4 mr-2" />
              CHECK LIST DE ASISTENCIA
            </Button>
          </div>
        </CardContent>
      </Card>

      {activeView === "schedule" ? (
        <>
          <Card className="bg-gray-900/30 backdrop-blur-sm border-cyan-500/30 shadow-lg shadow-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-cyan-300 font-mono">
                <Clock className="w-5 h-5" />
                SELECCIONAR DÍA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {days.map((day) => (
                  <Button
                    key={day}
                    variant={selectedDay === day ? "default" : "outline"}
                    onClick={() => setSelectedDay(day)}
                    className={`capitalize font-mono transition-all duration-300 ${selectedDay === day
                      ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/50"
                      : "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
                      }`}
                  >
                    {day}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-500/30 shadow-lg shadow-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-300 font-mono">
                <MapPin className="w-5 h-5" />
                FILTRAR POR SALA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedRoom === null ? "default" : "outline"}
                  onClick={() => setSelectedRoom(null)}
                  className={`font-mono transition-all duration-300 ${selectedRoom === null
                    ? "bg-purple-500 hover:bg-purple-400 text-black shadow-lg shadow-purple-500/50"
                    : "border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400"
                    }`}
                >
                  TODAS LAS SALAS
                </Button>
                {rooms.map((room) => (
                  <Button
                    key={room}
                    variant={selectedRoom === room ? "default" : "outline"}
                    onClick={() => setSelectedRoom(room)}
                    className={`font-mono transition-all duration-300 ${selectedRoom === room
                      ? "bg-purple-500 hover:bg-purple-400 text-black shadow-lg shadow-purple-500/50"
                      : "border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400"
                      }`}
                  >
                    {room}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/20 backdrop-blur-md border-cyan-400/30 shadow-2xl shadow-cyan-500/10">
            <CardHeader>
              <CardTitle className="capitalize text-cyan-300 font-mono text-xl">
                CRONOGRAMA - {selectedDay.toUpperCase()}
                {selectedRoom && ` - SALA ${selectedRoom}`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                  <div className="grid grid-cols-8 gap-1 mb-2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-black p-3 text-center font-bold rounded font-mono shadow-lg shadow-orange-500/50">
                      HORA
                    </div>
                    {rooms
                      .filter((room) => selectedRoom === null || room === selectedRoom)
                      .map((room) => (
                        <div
                          key={room}
                          className="bg-gradient-to-r from-orange-500 to-red-500 text-black p-3 text-center font-bold rounded font-mono shadow-lg shadow-orange-500/50"
                        >
                          {room}
                        </div>
                      ))}
                  </div>

                  {timeSlots.map((timeSlot) => (
                    <div key={timeSlot} className="grid grid-cols-8 gap-1 mb-1">
                      <div className="bg-gradient-to-r from-orange-400 to-red-400 text-black p-3 text-center font-bold rounded flex items-center justify-center font-mono shadow-lg shadow-orange-400/50">
                        {timeSlot}
                      </div>
                      {rooms
                        .filter((room) => selectedRoom === null || room === selectedRoom)
                        .map((room) => {
                          const classInfo = currentSchedule[timeSlot]?.[room]
                          const style = classInfo ? getSubjectStyle(classInfo.subject) : null

                          return (
                            <div
                              key={room}
                              className={`p-2 rounded min-h-[60px] flex items-center justify-center text-xs text-center border transition-all duration-300 ${classInfo
                                ? `${style?.color} ${style?.glowColor} border-2 hover:scale-105`
                                : "bg-gray-900/30 border-gray-600/30 backdrop-blur-sm"
                                }`}
                            >
                              {classInfo && (
                                <div className="w-full">
                                  <div className={`font-bold leading-tight font-mono ${style?.textColor}`}>
                                    {classInfo.subject}
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-emerald-700/40 shadow-lg shadow-emerald-700/25">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-emerald-200">SALAS ACTIVAS</p>
                    <p className="text-3xl font-bold text-emerald-300 font-mono">
                      {rooms.filter((room) => timeSlots.some((slot) => currentSchedule[slot]?.[room])).length}
                    </p>
                  </div>
                  <MapPin className="w-8 h-8 text-emerald-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 backdrop-blur-sm border-cyan-500/30 shadow-lg shadow-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-cyan-300">CLASES PROGRAMADAS</p>
                    <p className="text-3xl font-bold text-cyan-400 font-mono">
                      {timeSlots.reduce(
                        (count, slot) => count + rooms.filter((room) => currentSchedule[slot]?.[room]).length,
                        0,
                      )}
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-500/30 shadow-lg shadow-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-purple-300">OCUPACIÓN</p>
                    <p className="text-3xl font-bold text-purple-400 font-mono">
                      {Math.round(
                        (timeSlots.reduce(
                          (count, slot) => count + rooms.filter((room) => currentSchedule[slot]?.[room]).length,
                          0,
                        ) /
                          (timeSlots.length * rooms.length)) *
                        100,
                      )}
                      %
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900/20 backdrop-blur-md border-gray-500/30 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-300 font-mono">LEYENDA DE CARRERAS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500/50 border border-purple-400/50 rounded shadow-purple-500/30 shadow-sm"></div>
                  <span className="text-purple-300 font-mono text-sm">ADMINISTRACIÓN DE EMPRESAS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-emerald-800/50 border border-emerald-600/60 rounded shadow-emerald-700/30 shadow-sm"></div>
                  <span className="text-emerald-200 font-mono text-sm">INGENIERÍA DE SOFTWARE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500/50 border border-yellow-400/50 rounded shadow-yellow-500/30 shadow-sm"></div>
                  <span className="text-yellow-300 font-mono text-sm">INGENIERÍA INDUSTRIAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500/50 border border-blue-400/50 rounded shadow-blue-500/30 shadow-sm"></div>
                  <span className="text-blue-300 font-mono text-sm">CIENCIAS DEL DEPORTE</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          <Card className="bg-gray-900/20 backdrop-blur-md border-purple-400/30 shadow-2xl shadow-purple-500/10">
            <CardHeader>
              <CardTitle className="text-purple-300 font-mono text-xl flex items-center gap-2">
                <Users className="w-6 h-6" />
                VERIFICADOR DE ASISTENCIA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="min-w-[1000px]">
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black p-3 text-center font-bold rounded font-mono shadow-lg shadow-purple-500/50">
                      FECHA
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black p-3 text-center font-bold rounded font-mono shadow-lg shadow-purple-500/50">
                      HORA DE INGRESO Y SALIDA
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black p-3 text-center font-bold rounded font-mono shadow-lg shadow-purple-500/50">
                      MATERIA Y GRUPO
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black p-3 text-center font-bold rounded font-mono shadow-lg shadow-purple-500/50">
                      PROFE ASIGNADO
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black p-3 text-center font-bold rounded font-mono shadow-lg shadow-purple-500/50">
                      ESTADO DE ASISTENCIA
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black p-3 text-center font-bold rounded font-mono shadow-lg shadow-purple-500/50">
                      SALA
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black p-3 text-center font-bold rounded font-mono shadow-lg shadow-purple-500/50">
                      ACCIONES
                    </div>
                  </div>

                  {attendanceData.map((record) => {
                    const subjectStyle = getSubjectStyle(record.materia)
                    const isPresent = record.estadoAsistencia === "ASISTIÓ"

                    return (
                      <div key={record.id} className="grid grid-cols-7 gap-1 mb-1">
                        <div className="bg-gray-900/30 border border-gray-600/30 backdrop-blur-sm p-3 rounded flex items-center justify-center text-cyan-300 font-mono text-sm">
                          {record.fecha}
                        </div>
                        <div className="bg-gray-900/30 border border-gray-600/30 backdrop-blur-sm p-3 rounded flex items-center justify-center text-cyan-300 font-mono text-sm">
                          {record.horaIngreso}
                        </div>
                        <div
                          className={`p-3 rounded flex items-center justify-center text-xs text-center border-2 ${subjectStyle.color} ${subjectStyle.textColor}`}
                        >
                          <div className="font-bold leading-tight font-mono">{record.materia}</div>
                        </div>
                        <div className="bg-gray-900/30 border border-gray-600/30 backdrop-blur-sm p-3 rounded flex items-center justify-center text-cyan-300 font-mono text-sm">
                          {record.profeAsignado}
                        </div>
                        <div
                          className={`p-3 rounded flex items-center justify-center font-mono text-sm border-2 ${isPresent
                            ? "bg-green-500/20 border-green-400/50 text-green-300 shadow-green-500/30"
                            : "bg-red-500/20 border-red-400/50 text-red-300 shadow-red-500/30"
                            }`}
                        >
                          <div className="flex items-center gap-2">
                            {isPresent ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                            {record.estadoAsistencia}
                          </div>
                        </div>
                        <div className="bg-gray-900/30 border border-gray-600/30 backdrop-blur-sm p-3 rounded flex items-center justify-center text-cyan-300 font-mono text-sm font-bold">
                          {record.sala}
                        </div>
                        <div className="bg-gray-900/30 border border-gray-600/30 backdrop-blur-sm p-3 rounded flex items-center justify-center">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 font-mono text-xs bg-transparent"
                          >
                            EDITAR
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gray-900/30 backdrop-blur-sm border-green-500/30 shadow-lg shadow-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-green-300">ASISTENCIAS</p>
                    <p className="text-3xl font-bold text-green-400 font-mono">
                      {attendanceData.filter((record) => record.estadoAsistencia === "ASISTIÓ").length}
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 backdrop-blur-sm border-red-500/30 shadow-lg shadow-red-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-red-300">INASISTENCIAS</p>
                    <p className="text-3xl font-bold text-red-400 font-mono">
                      {attendanceData.filter((record) => record.estadoAsistencia === "NO ASISTIÓ").length}
                    </p>
                  </div>
                  <XCircle className="w-8 h-8 text-red-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-500/30 shadow-lg shadow-purple-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-mono text-purple-300">% ASISTENCIA</p>
                    <p className="text-3xl font-bold text-purple-400 font-mono">
                      {Math.round(
                        (attendanceData.filter((record) => record.estadoAsistencia === "ASISTIÓ").length /
                          attendanceData.length) *
                        100,
                      )}
                      %
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}
