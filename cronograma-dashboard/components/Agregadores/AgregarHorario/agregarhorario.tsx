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

interface AgregarHorarioFormProps {
  isOpen: boolean;
  onClose: () => void;
}

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
}: AgregarHorarioFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-cyan-50 to-emerald-50 border-2 border-emerald-400 shadow-lg shadow-emerald-200/50">
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-t-lg">
          <CardTitle className="text-center font-bold text-xl">
            Agregar Nuevo Horario
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-cyan-100">
          <form action={CrearHorario} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="id" className="text-emerald-700 font-semibold">
                Id del Horario
              </Label>
              <Input
                name="id"
                id="id"
                type="text"
                placeholder="Ej: HOR-001"
                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="diaSemana"
                className="text-emerald-700 font-semibold"
              >
                Selecciona Día de la Clase
              </Label>
              <Select name="diaSemana">
                <SelectTrigger className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80">
                  <SelectValue placeholder="Selecciona un día" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-emerald-300">
                  {Dias.map((dia) => (
                    <SelectItem
                      key={dia.id}
                      value={dia.id.toString()}
                      className="hover:bg-emerald-50 focus:bg-emerald-100"
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
                className="text-emerald-700 font-semibold"
              >
                Hora de Inicio de Clase
              </Label>
              <Select name="horaInicio">
                <SelectTrigger className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80">
                  <SelectValue placeholder="Selecciona una hora de inicio" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-emerald-300">
                  {Horas.map((hora) => (
                    <SelectItem
                      key={hora.id}
                      value={hora.id.toString()}
                      className="hover:bg-emerald-50 focus:bg-emerald-100"
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
                className="text-emerald-700 font-semibold"
              >
                Hora de Fin de Clase
              </Label>
              <Select name="horaFin">
                <SelectTrigger className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80">
                  <SelectValue placeholder="Selecciona una hora de fin" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-emerald-300">
                  {Horas.map((hora) => (
                    <SelectItem
                      key={`fin-${hora.id}`}
                      value={hora.id.toString()}
                      className="hover:bg-emerald-50 focus:bg-emerald-100"
                    >
                      {hora.hora}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="semestre"
                className="text-emerald-700 font-semibold"
              >
                Semestre del Aula
              </Label>
              <Input
                name="semestre"
                id="semestre"
                type="text"
                placeholder="Ej: 2024-1"
                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grupo" className="text-emerald-700 font-semibold">
                Grupo del Aula
              </Label>
              <Input
                name="grupo"
                id="grupo"
                type="text"
                placeholder="Ej: 101"
                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="asignaturaId"
                className="text-emerald-700 font-semibold"
              >
                Asignatura id con la que se vincula el Horario
              </Label>
              <Input
                name="asignaturaId"
                id="asignaturaId"
                type="text"
                placeholder="Ej: ASG-001"
                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="aulaId"
                className="text-emerald-700 font-semibold"
              >
                Aula id con la que se vincula el Horario
              </Label>
              <Input
                name="aulaId"
                id="aulaId"
                type="text"
                placeholder="Ej: AUL-001"
                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="profesorId"
                className="text-emerald-700 font-semibold"
              >
                Profesor id con el que se vincula el Horario
              </Label>
              <Input
                name="profesorId"
                id="profesorId"
                type="text"
                placeholder="Ej: PROF-001"
                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 shadow-lg shadow-emerald-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-400/50"
              >
                Agregar Horario
              </Button>
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="flex-1 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
