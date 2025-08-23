"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Plus} from "lucide-react";
//Componentes Crud
import AgregarMateriaForm from "../AgregarMaterias/agregarmaterias";
import AgregarProgramas from "../Agregadores/AgregarPrograma/agregarprogramas";
import AgregarAulaForm from "../Agregadores/AgregarAula/agregaraula";
import AgregarProfeForm from "../Agregadores/AgregarProfe/agregarprofe";
import AgregarHorarioForm from "../Agregadores/AgregarHorario/agregarhorario";
interface SubjectsViewProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  isModalOpenAula: boolean;
  setIsModalOpenAula: (isOpen: boolean) => void;
  isModalOpenProgram: boolean;
  setIsModalOpenProgram: (isOpen: boolean) => void;
  isModalOpenProfe: boolean;
  setIsModalOpenProfe: (isOpen: boolean) => void;
  isModalOpenHorario: boolean;
  setIsModalOpenHorario: (isOpen: boolean) => void;
}

export function MateriasVer({
  isModalOpen,
  setIsModalOpen,
  isModalOpenAula,
  setIsModalOpenAula,
  isModalOpenProgram,
  setIsModalOpenProgram,
  isModalOpenProfe,
  setIsModalOpenProfe,
  isModalOpenHorario,
  setIsModalOpenHorario,
}: SubjectsViewProps) {
  return (
    <>
      <Card className="bg-gray-900/20 backdrop-blur-md border-orange-400/30 shadow-2xl shadow-orange-500/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-orange-300 font-mono text-xl flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              GESTIÓN DE MATERIAS
            </CardTitle>

            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-t-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              NUEVA MATERIA
            </Button>
            <Button
              onClick={() => setIsModalOpenProgram(true)}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-t-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              NUEVO PROGRAMA
            </Button>
            <Button
              onClick={() => setIsModalOpenAula(true)}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-t-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              NUEVA AULA
            </Button>

            <Button
              onClick={() => setIsModalOpenProfe(true)}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-t-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              NUEVO PROFE
            </Button>
            <Button
              onClick={() => setIsModalOpenHorario(true)}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-t-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              NUEVO HORARIOCLASS
            </Button>
          </div>
        </CardHeader>
      </Card>
      {/* Agregadore */}
      <AgregarMateriaForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("Materia agregada:", data);
          setIsModalOpen(false);
        }}
      />
      <AgregarProgramas
        isOpen={isModalOpenProgram}
        onClose={() => setIsModalOpenProgram(false)}
        onSubmit={(data) => {
          console.log("Programa agregada:", data);
          setIsModalOpenProgram(false);
        }}
      />
      <AgregarAulaForm
        isOpen={isModalOpenAula}
        onClose={() => setIsModalOpenAula(false)}
        onSubmit={(data) => {
          console.log("Programa agregada:", data);
          setIsModalOpenAula(false);
        }}
      />
      <AgregarProfeForm
        isOpen={isModalOpenProfe}
        onClose={() => setIsModalOpenProfe(false)}
        onSubmit={(data) => {
          console.log("Programa agregada:", data);
          setIsModalOpenProfe(false);
        }}
      />
      <AgregarHorarioForm
        isOpen={isModalOpenHorario}
        onClose={() => setIsModalOpenHorario(false)}
        onSubmit={(data) => {
          console.log("Programa agregada:", data);
          setIsModalOpenHorario(false);
        }}
      />
    </>
  );
}
