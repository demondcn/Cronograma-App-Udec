import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CrearHorario } from "./actions/horarios";
interface Profes {
  id: string;
  nombre: string;
}
interface Aulas {
  id: string;
  nombre: string;
}
interface Asignatura {
  id: string;
  nombre: string;
}
interface AgregarHorarioFormProps {
  isOpen: boolean;
  onClose: () => void;
  profes: Profes[];
  aulas: Aulas[];
  asignaturas: Asignatura[];
}
// Mock data for demonstration purposes
const mockAsignaturas = [
  {
    id: 1,
    nombre: "Programación I",
    codigo: "PROG1",
    creditos: 3,
    semestre: 1,
    programaId: 1,
  },
  {
    id: 2,
    nombre: "Pensamiento Algorítmico",
    codigo: "PA",
    creditos: 2,
    semestre: 1,
    programaId: 1,
  },
  {
    id: 3,
    nombre: "Sistemas Operativos",
    codigo: "SO",
    creditos: 3,
    semestre: 4,
    programaId: 1,
  },
  {
    id: 4,
    nombre: "Base de Datos",
    codigo: "BD",
    creditos: 3,
    semestre: 3,
    programaId: 1,
  },
  {
    id: 5,
    nombre: "Contabilidad General",
    codigo: "CG",
    creditos: 3,
    semestre: 1,
    programaId: 2,
  },
  {
    id: 6,
    nombre: "Microeconomía",
    codigo: "ME",
    creditos: 2,
    semestre: 2,
    programaId: 2,
  },
  {
    id: 7,
    nombre: "Automatización de Procesos",
    codigo: "AP",
    creditos: 3,
    semestre: 5,
    programaId: 3,
  },
  {
    id: 8,
    nombre: "Fundamentos de Estadística",
    codigo: "FE",
    creditos: 2,
    semestre: 2,
    programaId: 4,
  },
  {
    id: 9,
    nombre: "Bioestadística",
    codigo: "BE",
    creditos: 3,
    semestre: 3,
    programaId: 4,
  },
];

const mockAulas = [
  { id: 1, nombre: "C111"},
  { id: 2, nombre: "C112"},
  { id: 3, nombre: "C113"},
  { id: 4, nombre: "C114"},
  { id: 5, nombre: "C115"},
  { id: 6, nombre: "A205"},
  { id: "xdd", nombre: "A206" },
];

const mockProfesores = [
  {
    id: 1,
    nombre: "Dr. Carlos Mendoza",
  },
  {
    id: 2,
    nombre: "Ing. María González",
  },
  {
    id: 3,
    nombre: "Mg. Juan Pérez",
  },
  {
    id: 4,
    nombre: "Dra. Ana Rodríguez",
  },
  {
    id: 5,
    nombre: "Ing. Luis Torres",
    email: "luis.torres@udec.edu.co",
    telefono: "3002468135",
  },
  {
    id: 6,
    nombre: "Mg. Carmen Silva",
    email: "carmen.silva@udec.edu.co",
    telefono: "3008642097",
  },
];

const Dias = [
  { id: 1, nombre: "lunes" },
  { id: 2, nombre: "martes" },
  { id: 3, nombre: "miércoles" },
  { id: 4, nombre: "jueves" },
  { id: 5, nombre: "viernes" },
  { id: 6, nombre: "sabado" },
];

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

export default function AgregarHorarioForm({
  isOpen,
  onClose,
  profes,
  aulas,
  asignaturas,
}: AgregarHorarioFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-red-400/50 shadow-2xl shadow-emerald-500/20">
        <CardHeader className="bg-gradient-to-r from-red-500 to-red-500 text-white rounded-t-lg">
          <CardTitle className="text-center font-bold text-xl font-mono">
            🕒 Agregar Nuevo Horario
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 max-h-[80vh] overflow-y-auto">
          <form action={CrearHorario} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="diaSemana"
                  className="text-red-300 font-semibold font-mono"
                >
                  📅 Día de la Semana
                </Label>
                <Select name="diaSemana" required>
                  <SelectTrigger className="border-2 border-red-400/50 focus:border-red-400 bg-gray-800/50 text-white">
                    <SelectValue placeholder="Selecciona un día" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-red-400/50">
                    {Dias.map((dia) => (
                      <SelectItem
                        key={dia.id}
                        value={dia.id.toString()}
                        className="text-white hover:bg-red-500/20"
                      >
                        {dia.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="horaInicio"
                  className="text-red-300 font-semibold font-mono"
                >
                  🕐 Hora de Inicio
                </Label>
                <Select name="horaInicio" required>
                  <SelectTrigger className="border-2 border-red-400/50 focus:border-red-400 bg-gray-800/50 text-white">
                    <SelectValue placeholder="Hora de inicio" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-red-400/50">
                    {Horas.map((hora) => (
                      <SelectItem
                        key={hora.id}
                        value={hora.id.toString()}
                        className="text-white hover:bg-red-500/20"
                      >
                        {hora.hora}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="horaFin"
                  className="text-red-300 font-semibold font-mono"
                >
                  🕐 Hora de Fin
                </Label>
                <Select name="horaFin" required>
                  <SelectTrigger className="border-2 border-red-400/50 focus:border-red-400 bg-gray-800/50 text-white">
                    <SelectValue placeholder="Hora de fin" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-red-400/50">
                    {Horas.map((hora) => (
                      <SelectItem
                        key={`fin-${hora.id}`}
                        value={hora.id.toString()}
                        className="text-white hover:bg-red-500/20"
                      >
                        {hora.hora}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="asignaturaId"
                  className="text-red-300 font-semibold font-mono"
                >
                  📚 Asignatura
                </Label>
                <Select name="asignaturaId" required>
                  <SelectTrigger className="border-2 border-red-400/50 focus:border-red-400 bg-gray-800/50 text-white">
                    <SelectValue placeholder="Selecciona una asignatura" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-red-400/50">
                    {asignaturas.map((asignatura) => (
                      <SelectItem
                        key={asignatura.id}
                        value={asignatura.id.toString()}
                        className="text-white hover:bg-red-500/20"
                      >
                        {asignatura.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="aulaId"
                  className="text-red-300 font-semibold font-mono"
                >
                  🏫 Aula
                </Label>
                <Select name="aulaId" required>
                  <SelectTrigger className="border-2 border-red-400/50 focus:border-red-400 bg-gray-800/50 text-white">
                    <SelectValue placeholder="Selecciona un aula" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-red-400/50">
                    {aulas.map((aula) => (
                      <SelectItem
                        key={aula.id}
                        value={aula.id.toString()}
                        className="text-white hover:bg-red-500/20"
                      >
                        {aula.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="profesorId"
                  className="text-red-300 font-semibold font-mono"
                >
                  👨‍🏫 Profesor
                </Label>
                <Select name="profesorId">
                  <SelectTrigger className="border-2 border-red-400/50 focus:border-red-400 bg-gray-800/50 text-white">
                    <SelectValue placeholder="Selecciona un profesor (opcional)" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-red-400/50">
                    {profes.map((profesor) => (
                      <SelectItem
                        key={profesor.id}
                        value={profesor.id.toString()}
                        className="text-white hover:bg-red-500/20"
                      >
                        {profesor.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="semestre"
                  className="text-red-300 font-semibold font-mono"
                >
                  📅 Semestre
                </Label>
                <Input
                  name="semestre"
                  id="semestre"
                  type="text"
                  placeholder="Ej: 2024-1"
                  className="border-2 border-red-400/50 focus:border-red-400 bg-gray-800/50 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="grupo"
                  className="text-red-300 font-semibold font-mono"
                >
                  👥 Grupo
                </Label>
                <Input
                  name="grupo"
                  id="grupo"
                  type="text"
                  placeholder="Ej: 101"
                  className="border-2 border-red-400/50 focus:border-red-400 bg-gray-800/50 text-white"
                  required
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="flex-1 border-gray-500 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                onClick={onClose}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-500 hover:from-red-600 hover:to-red-600 text-white font-semibold shadow-lg shadow-red-300/50 transition-all duration-300"
              >
                Crear Horario
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
