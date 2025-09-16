"use client"
import { useState } from "react"
import { DataTable } from "./data-table"

// Mock data - replace with actual API calls
const mockProgramas = [
  {
    id: "1",
    nombre: "Ingeniería de Sistemas",
    codigo: "IS",
    color: "#3B82F6",
    colorBrillo: "#60A5FA",
    colorTexto: "#FFFFFF",
    creadoEn: new Date().toISOString(),
    actualizadoEn: new Date().toISOString(),
  },
  {
    id: "2",
    nombre: "Administración de Empresas",
    codigo: "AE",
    color: "#10B981",
    colorBrillo: "#34D399",
    colorTexto: "#FFFFFF",
    creadoEn: new Date().toISOString(),
    actualizadoEn: new Date().toISOString(),
  },
]

const mockAsignaturas = [
  {
    id: "1",
    nombre: "Programación I",
    codigo: "PROG1",
    programaId: "1",
    semestre: 1,
    creditos: 4,
    activa: true,
    creadoEn: new Date().toISOString(),
    actualizadoEn: new Date().toISOString(),
  },
]

const mockAulas = [
  {
    id: "1",
    nombre: "Aula 101",
    capacidad: 30,
    edificio: "Edificio A",
    piso: "1",
    equipos: { proyector: true, computador: true },
    activa: true,
    creadoEn: new Date().toISOString(),
    actualizadoEn: new Date().toISOString(),
  },
]

const mockProfesores = [
  {
    id: "1",
    nombre: "Dr. Juan Pérez",
    correo: "juan.perez@universidad.edu",
    telefono: "+57 300 123 4567",
    activo: true,
    creadoEn: new Date().toISOString(),
    actualizadoEn: new Date().toISOString(),
  },
]

const mockHorarios = [
  {
    id: "1",
    diaSemana: 1,
    horaInicio: "08:00",
    horaFin: "10:00",
    semestre: "2024-1",
    grupo: "A",
    activo: true,
    asignaturaId: "1",
    aulaId: "1",
    profesorId: "1",
    cantidadSt: 25,
    creadoEn: new Date().toISOString(),
    actualizadoEn: new Date().toISOString(),
  },
]

export function TableManagement() {
  const [selectedTable, setSelectedTable] = useState<string>("programas")

  const [programas, setProgramas] = useState(mockProgramas)
  const [asignaturas, setAsignaturas] = useState(mockAsignaturas)
  const [aulas, setAulas] = useState(mockAulas)
  const [profesores, setProfesores] = useState(mockProfesores)
  const [horarios, setHorarios] = useState(mockHorarios)

  // Column definitions for each table
  const programasColumns = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "codigo", label: "Código" },
    { key: "color", label: "Color" },
    { key: "colorBrillo", label: "Color Brillo" },
    { key: "colorTexto", label: "Color Texto" },
    { key: "creadoEn", label: "Creado En", type: "date" as const },
    { key: "actualizadoEn", label: "Actualizado En", type: "date" as const },
  ]

  const asignaturasColumns = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "codigo", label: "Código" },
    { key: "programaId", label: "Programa ID" },
    { key: "semestre", label: "Semestre", type: "number" as const },
    { key: "creditos", label: "Créditos", type: "number" as const },
    { key: "activa", label: "Activa", type: "boolean" as const },
    { key: "creadoEn", label: "Creado En", type: "date" as const },
    { key: "actualizadoEn", label: "Actualizado En", type: "date" as const },
  ]

  const aulasColumns = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "capacidad", label: "Capacidad", type: "number" as const },
    { key: "edificio", label: "Edificio" },
    { key: "piso", label: "Piso" },
    { key: "activa", label: "Activa", type: "boolean" as const },
    { key: "creadoEn", label: "Creado En", type: "date" as const },
    { key: "actualizadoEn", label: "Actualizado En", type: "date" as const },
  ]

  const profesoresColumns = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "correo", label: "Correo" },
    { key: "telefono", label: "Teléfono" },
    { key: "activo", label: "Activo", type: "boolean" as const },
    { key: "creadoEn", label: "Creado En", type: "date" as const },
    { key: "actualizadoEn", label: "Actualizado En", type: "date" as const },
  ]

  const horariosColumns = [
    { key: "id", label: "ID" },
    { key: "diaSemana", label: "Día Semana", type: "number" as const },
    { key: "horaInicio", label: "Hora Inicio" },
    { key: "horaFin", label: "Hora Fin" },
    { key: "semestre", label: "Semestre" },
    { key: "grupo", label: "Grupo" },
    { key: "activo", label: "Activo", type: "boolean" as const },
    { key: "asignaturaId", label: "Asignatura ID" },
    { key: "aulaId", label: "Aula ID" },
    { key: "profesorId", label: "Profesor ID" },
    { key: "cantidadSt", label: "Cantidad Estudiantes", type: "number" as const },
  ]

  // CRUD operations - replace with actual API calls
  const handleEditPrograma = async (id: string, updatedData: any) => {
    setProgramas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...updatedData, actualizadoEn: new Date().toISOString() } : item,
      ),
    )
    console.log("Programa editado:", id, updatedData)
  }

  const handleDeletePrograma = async (id: string) => {
    setProgramas((prev) => prev.filter((item) => item.id !== id))
    console.log("Programa eliminado:", id)
  }

  const handleEditAsignatura = async (id: string, updatedData: any) => {
    setAsignaturas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...updatedData, actualizadoEn: new Date().toISOString() } : item,
      ),
    )
    console.log("Asignatura editada:", id, updatedData)
  }

  const handleDeleteAsignatura = async (id: string) => {
    setAsignaturas((prev) => prev.filter((item) => item.id !== id))
    console.log("Asignatura eliminada:", id)
  }

  const handleEditAula = async (id: string, updatedData: any) => {
    setAulas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...updatedData, actualizadoEn: new Date().toISOString() } : item,
      ),
    )
    console.log("Aula editada:", id, updatedData)
  }

  const handleDeleteAula = async (id: string) => {
    setAulas((prev) => prev.filter((item) => item.id !== id))
    console.log("Aula eliminada:", id)
  }

  const handleEditProfesor = async (id: string, updatedData: any) => {
    setProfesores((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...updatedData, actualizadoEn: new Date().toISOString() } : item,
      ),
    )
    console.log("Profesor editado:", id, updatedData)
  }

  const handleDeleteProfesor = async (id: string) => {
    setProfesores((prev) => prev.filter((item) => item.id !== id))
    console.log("Profesor eliminado:", id)
  }

  const handleEditHorario = async (id: string, updatedData: any) => {
    setHorarios((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...updatedData, actualizadoEn: new Date().toISOString() } : item,
      ),
    )
    console.log("Horario editado:", id, updatedData)
  }

  const handleDeleteHorario = async (id: string) => {
    setHorarios((prev) => prev.filter((item) => item.id !== id))
    console.log("Horario eliminado:", id)
  }

  const tables = {
    programas: {
      title: "Programas",
      columns: programasColumns,
      data: programas,
      onEdit: handleEditPrograma,
      onDelete: handleDeletePrograma,
      colorScheme: "purple" as const,
    },
    asignaturas: {
      title: "Asignaturas",
      columns: asignaturasColumns,
      data: asignaturas,
      onEdit: handleEditAsignatura,
      onDelete: handleDeleteAsignatura,
      colorScheme: "emerald" as const,
    },
    aulas: {
      title: "Aulas",
      columns: aulasColumns,
      data: aulas,
      onEdit: handleEditAula,
      onDelete: handleDeleteAula,
      colorScheme: "blue" as const,
    },
    profesores: {
      title: "Profesores",
      columns: profesoresColumns,
      data: profesores,
      onEdit: handleEditProfesor,
      onDelete: handleDeleteProfesor,
      colorScheme: "yellow" as const,
    },
    horarios: {
      title: "Horarios",
      columns: horariosColumns,
      data: horarios,
      onEdit: handleEditHorario,
      onDelete: handleDeleteHorario,
      colorScheme: "red" as const,
    },
  }

  const currentTable = tables[selectedTable as keyof typeof tables]

  return (
    <div className="space-y-6">
      <div className="bg-green-950/20 backdrop-blur-sm border-2 border-green-800/40 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-green-100 mb-4">Seleccionar Tabla</h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(tables).map(([key, table]) => (
            <button
              key={key}
              onClick={() => setSelectedTable(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedTable === key
                  ? `bg-${table.colorScheme}-600 text-white shadow-lg`
                  : `bg-${table.colorScheme}-950/30 text-${table.colorScheme}-300 hover:bg-${table.colorScheme}-800/50 border border-${table.colorScheme}-700/50`
              }`}
            >
              {table.title}
            </button>
          ))}
        </div>
      </div>

      <DataTable
        title={currentTable.title}
        columns={currentTable.columns}
        data={currentTable.data}
        onEdit={currentTable.onEdit}
        onDelete={currentTable.onDelete}
        colorScheme={currentTable.colorScheme}
      />
    </div>
  )
}
