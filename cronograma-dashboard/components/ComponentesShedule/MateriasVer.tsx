"use client";
import { useState } from "react";
import { useEffect } from "react";
//UI
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Plus } from "lucide-react";
//Traedores de info
import { obtenerProgramas } from "./../Traedores/actions/programasIds";
import { obtenerAsignaturas } from "./../Traedores/actions/asignaturasIds";
import { obtenerProfes } from "./../Traedores/actions/profesIds";
import { obtenerAulas } from "./../Traedores/actions/aulasIds";
//Componentes Crud
import AgregarMateriaForm from "../Agregadores/AgregarMaterias/agregarmaterias";
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
interface Programa {
  id: string;
  nombre: string;
}
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
  const [programas, setProgramas] = useState<Programa[]>([]);
  const [profes, setProfes] = useState<Profes[]>([]);
  const [aulas, setAulas] = useState<Aulas[]>([]);
  const [asignaturas, setAsignaturas] = useState<Asignatura[]>([]);
  const cargarProfes = async () => {
    try {
      const profesData = await obtenerProfes();
      setProfes(profesData);
      console.log("Profes cargados:", profesData);
    } catch (error) {
      console.error("Error cargando Profes:", error);
      setProfes([]);
    } finally {
    }
  };
  const cargarAulas = async () => {
    try {
      const aulasData = await obtenerAulas();
      setAulas(aulasData);
      console.log("Aulas cargados:", aulasData);
    } catch (error) {
      console.error("Error cargando Aulas:", error);
      setAulas([]);
    } finally {
    }
  };
  const cargarAsignaturas = async () => {
    try {
      const asignaturasData = await obtenerAsignaturas();
      setAsignaturas(asignaturasData);
      console.log("Asignaturas cargados:", asignaturasData);
    } catch (error) {
      console.error("Error cargando Asignaturas:", error);
      setAsignaturas([]);
    } finally {
    }
  };
  const cargarProgramas = async () => {
    try {
      const programasData = await obtenerProgramas();
      setProgramas(programasData);
      console.log("Programas cargados:", programasData);
    } catch (error) {
      console.error("Error cargando Programas:", error);
      setProgramas([]);
    } finally {
    }
  };
  // Cargar programas cuando el componente se monta
  useEffect(() => {
    cargarProgramas();
    cargarProfes();
    cargarAulas();
    cargarAsignaturas();
  }, []);
  return (
    <>
      <Card className="bg-gray-900/20 backdrop-blur-md border-orange-400/30 shadow-2xl shadow-orange-500/10">
        <CardHeader>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <CardTitle className="text-orange-300 font-mono text-xl flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Configuración Académica
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-mono shadow-lg shadow-emerald-500/30 transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                NUEVA MATERIA
              </Button>
              <Button
                onClick={() => setIsModalOpenProgram(true)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-mono shadow-lg shadow-purple-500/30 transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                NUEVO PROGRAMA
              </Button>
              <Button
                onClick={() => setIsModalOpenAula(true)}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-mono shadow-lg shadow-blue-500/30 transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                NUEVA AULA
              </Button>

              <Button
                onClick={() => setIsModalOpenProfe(true)}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-mono shadow-lg shadow-yellow-500/30 transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                NUEVO PROFE
              </Button>
              <Button
                onClick={() => setIsModalOpenHorario(true)}
                className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-mono shadow-lg shadow-red-500/30 transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                NUEVO HORARIOCLASS
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
      {/* Agregadore */}
      <AgregarMateriaForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programas={programas}
        //carga programas al abrir el modal
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
        profes={profes}
        aulas={aulas}
        asignaturas={asignaturas}
        onSubmit={(data) => {
          console.log("Programa agregada:", data);
          setIsModalOpenHorario(false);
        }}
      />
    </>
  );
}
