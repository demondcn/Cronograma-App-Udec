// components/table-management.tsx
"use client"
import { useState, useEffect } from "react"
import { DataTable } from "./data-table"
import { 
  programaService, 
  asignaturaService, 
  aulaService, 
  profesorService, 
  horarioService 
} from "../../Servicios/apiServicios"

export function TableManagement() {
  const [selectedTable, setSelectedTable] = useState<string>("programas")
  const [programas, setProgramas] = useState<any[]>([])
  const [asignaturas, setAsignaturas] = useState<any[]>([])
  const [aulas, setAulas] = useState<any[]>([])
  const [profesores, setProfesores] = useState<any[]>([])
  const [horarios, setHorarios] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Cargar datos iniciales
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setIsLoading(true)
    try {
      const [
        programasData, 
        asignaturasData, 
        aulasData, 
        profesoresData, 
        horariosData
      ] = await Promise.all([
        programaService.getAll(),
        asignaturaService.getAll(),
        aulaService.getAll(),
        profesorService.getAll(),
        horarioService.getAll()
      ])

      setProgramas(programasData)
      setAsignaturas(asignaturasData)
      setAulas(aulasData)
      setProfesores(profesoresData)
      setHorarios(horariosData)
    } catch (error) {
      console.error("Error loading data:", error)
      alert("Error al cargar los datos. Por favor, intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

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
    { 
      key: "programaId", 
      label: "Programa",
      type: "select" as const,
      options: programas.map(p => ({ value: p.id, label: p.nombre }))
    },
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
    { 
      key: "asignaturaId", 
      label: "Asignatura",
      type: "select" as const,
      options: asignaturas.map(a => ({ value: a.id, label: a.nombre }))
    },
    { 
      key: "aulaId", 
      label: "Aula",
      type: "select" as const,
      options: aulas.map(a => ({ value: a.id, label: a.nombre }))
    },
    { 
      key: "profesorId", 
      label: "Profesor",
      type: "select" as const,
      options: profesores.map(p => ({ value: p.id, label: p.nombre }))
    },
    { key: "cantidadSt", label: "Cantidad Estudiantes", type: "number" as const },
  ]

  // CRUD operations
  const handleEditPrograma = async (id: string, updatedData: any) => {
    try {
      await programaService.update(id, updatedData)
      // Recargar datos después de editar
      const updatedProgramas = await programaService.getAll()
      setProgramas(updatedProgramas)
    } catch (error) {
      console.error("Error updating programa:", error)
      throw error
    }
  }

  const handleDeletePrograma = async (id: string) => {
    try {
      await programaService.delete(id)
      // Recargar datos después de eliminar
      const updatedProgramas = await programaService.getAll()
      setProgramas(updatedProgramas)
    } catch (error) {
      console.error("Error deleting programa:", error)
      throw error
    }
  }

  const handleCreatePrograma = async (data: any) => {
    try {
      await programaService.create(data)
      // Recargar datos después de crear
      const updatedProgramas = await programaService.getAll()
      setProgramas(updatedProgramas)
    } catch (error) {
      console.error("Error creating programa:", error)
      throw error
    }
  }

  // Implementar funciones similares para las demás entidades...
  const handleEditAsignatura = async (id: string, updatedData: any) => {
    try {
      await asignaturaService.update(id, updatedData)
      const updatedAsignaturas = await asignaturaService.getAll()
      setAsignaturas(updatedAsignaturas)
    } catch (error) {
      console.error("Error updating asignatura:", error)
      throw error
    }
  }

  const handleDeleteAsignatura = async (id: string) => {
    try {
      await asignaturaService.delete(id)
      const updatedAsignaturas = await asignaturaService.getAll()
      setAsignaturas(updatedAsignaturas)
    } catch (error) {
      console.error("Error deleting asignatura:", error)
      throw error
    }
  }

  const handleCreateAsignatura = async (data: any) => {
    try {
      await asignaturaService.create(data)
      const updatedAsignaturas = await asignaturaService.getAll()
      setAsignaturas(updatedAsignaturas)
    } catch (error) {
      console.error("Error creating asignatura:", error)
      throw error
    }
  }

  const handleEditAula = async (id: string, updatedData: any) => {
    try {
      await aulaService.update(id, updatedData)
      const updatedAulas = await aulaService.getAll()
      setAulas(updatedAulas)
    } catch (error) {
      console.error("Error updating aula:", error)
      throw error
    }
  }

  const handleDeleteAula = async (id: string) => {
    try {
      await aulaService.delete(id)
      const updatedAulas = await aulaService.getAll()
      setAulas(updatedAulas)
    } catch (error) {
      console.error("Error deleting aula:", error)
      throw error
    }
  }

  const handleCreateAula = async (data: any) => {
    try {
      await aulaService.create(data)
      const updatedAulas = await aulaService.getAll()
      setAulas(updatedAulas)
    } catch (error) {
      console.error("Error creating aula:", error)
      throw error
    }
  }

  const handleEditProfesor = async (id: string, updatedData: any) => {
    try {
      await profesorService.update(id, updatedData)
      const updatedProfesores = await profesorService.getAll()
      setProfesores(updatedProfesores)
    } catch (error) {
      console.error("Error updating profesor:", error)
      throw error
    }
  }

  const handleDeleteProfesor = async (id: string) => {
    try {
      await profesorService.delete(id)
      const updatedProfesores = await profesorService.getAll()
      setProfesores(updatedProfesores)
    } catch (error) {
      console.error("Error deleting profesor:", error)
      throw error
    }
  }

  const handleCreateProfesor = async (data: any) => {
    try {
      await profesorService.create(data)
      const updatedProfesores = await profesorService.getAll()
      setProfesores(updatedProfesores)
    } catch (error) {
      console.error("Error creating profesor:", error)
      throw error
    }
  }

  const handleEditHorario = async (id: string, updatedData: any) => {
    try {
      await horarioService.update(id, updatedData)
      const updatedHorarios = await horarioService.getAll()
      setHorarios(updatedHorarios)
    } catch (error) {
      console.error("Error updating horario:", error)
      throw error
    }
  }

  const handleDeleteHorario = async (id: string) => {
    try {
      await horarioService.delete(id)
      const updatedHorarios = await horarioService.getAll()
      setHorarios(updatedHorarios)
    } catch (error) {
      console.error("Error deleting horario:", error)
      throw error
    }
  }

  const handleCreateHorario = async (data: any) => {
    try {
      await horarioService.create(data)
      const updatedHorarios = await horarioService.getAll()
      setHorarios(updatedHorarios)
    } catch (error) {
      console.error("Error creating horario:", error)
      throw error
    }
  }

  const tables = {
    programas: {
      title: "Programas",
      columns: programasColumns,
      data: programas,
      onEdit: handleEditPrograma,
      onDelete: handleDeletePrograma,
      onCreate: handleCreatePrograma,
      colorScheme: "purple" as const,
      service: programaService
    },
    asignaturas: {
      title: "Asignaturas",
      columns: asignaturasColumns,
      data: asignaturas,
      onEdit: handleEditAsignatura,
      onDelete: handleDeleteAsignatura,
      onCreate: handleCreateAsignatura,
      colorScheme: "emerald" as const,
      service: asignaturaService
    },
    aulas: {
      title: "Aulas",
      columns: aulasColumns,
      data: aulas,
      onEdit: handleEditAula,
      onDelete: handleDeleteAula,
      onCreate: handleCreateAula,
      colorScheme: "blue" as const,
      service: aulaService
    },
    profesores: {
      title: "Profesores",
      columns: profesoresColumns,
      data: profesores,
      onEdit: handleEditProfesor,
      onDelete: handleDeleteProfesor,
      onCreate: handleCreateProfesor,
      colorScheme: "yellow" as const,
      service: profesorService
    },
    horarios: {
      title: "Horarios",
      columns: horariosColumns,
      data: horarios,
      onEdit: handleEditHorario,
      onDelete: handleDeleteHorario,
      onCreate: handleCreateHorario,
      colorScheme: "red" as const,
      service: horarioService
    },
  }

  const currentTable = tables[selectedTable as keyof typeof tables]

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-green-400">Cargando datos...</div>
      </div>
    )
  }

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
        onCreate={currentTable.onCreate}
        colorScheme={currentTable.colorScheme}
        service={currentTable.service}
      />
    </div>
  )
}