"use client";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  FileX,
  RefreshCw,
  Filter,
  Search
} from "lucide-react";
import { useState } from "react";
import {
  crearRegistrosDeAsistencia,
  CrearDatosDeAsistencia,
} from "../Agregadores/AgregarAsistencia/actions/crearRegistrosDeAsistencia";
// Importar la función para obtener horarios sin asistencia
import { AsistenciaHorario } from "./../Traedores/actions/asisH";

interface AttendanceRecord {
  id: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  materiaAsignada: string;
  profeAsignado: string;
  estadoAsistencia: string;
  sala: string;
  observaciones: string;
  diaSemana: string;
  horarioId: string;
  asignaturaId: string;
  aulaId: string;
  profesorId: string;
  cantidadtotal: number;
  cantidadAsistida?: number;
}

interface AttendanceViewProps {
  attendanceData: AttendanceRecord[];
  getSubjectStyle: (subject: string) => any;
}

const ATTENDANCE_STATUS = {
  ASISTIO: { label: "ASISTIÓ", icon: CheckCircle, color: "text-green-600" },
  NO_ASISTIO: { label: "NO ASISTIÓ", icon: XCircle, color: "text-red-600" },
  TARDANZA: { label: "TARDANZA", icon: Clock, color: "text-orange-600" },
  JUSTIFICADA: {
    label: "JUSTIFICADA",
    icon: AlertTriangle,
    color: "text-blue-600",
  },
  CANCELADA: { label: "CANCELADA", icon: FileX, color: "text-gray-600" },
};

export function AsistenciaVer({
  attendanceData,
  getSubjectStyle,
}: AttendanceViewProps) {
  //guardar asistencias nuevas
  const [currentRecords, setCurrentRecords] = useState<AttendanceRecord[]>(attendanceData);
  //asistencias guardadas
  const [savedRecords, setSavedRecords] = useState<AttendanceRecord[]>([]);
  //otras cuestiones
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  //filtros
  const [filterName, setFilterName] = useState("");
  const [filterSubject, setFilterSubject] = useState("");

  // Filtrar registros basados en los filtros (versión mejorada)
  const filteredRecords = currentRecords.filter(record => {
    const matchesSubject = filterSubject === "" ||
      record.materiaAsignada.toLowerCase().includes(filterSubject.toLowerCase());
    let matchesName = true;
    if (filterName !== "") {
      const searchTerms = filterName.toLowerCase().split(/\s+/).filter(term => term.length > 0);
      const profesor = record.profeAsignado.toLowerCase();
      matchesName = searchTerms.every(term => profesor.includes(term));
    }

    return matchesName && matchesSubject;
  });

  // Función para recargar los horarios sin asistencia
  const reloadAttendanceData = async () => {
    setIsLoading(true);
    try {
      const newAttendanceData = await AsistenciaHorario();
      setCurrentRecords(newAttendanceData);
    } catch (error) {
      console.error("Error al recargar datos de asistencia:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCantidadAsistidaChange = (
    recordId: string,
    newCantidad: string
  ) => {
    // Convertir a número, si está vacío usar 0
    const cantidadNum = newCantidad === "" ? 0 : parseInt(newCantidad) || 0;

    setCurrentRecords((prev) =>
      prev.map((record) =>
        record.id === recordId
          ? {
            ...record,
            cantidadAsistida: cantidadNum,
            estadoAsistencia: cantidadNum > 0 ? "ASISTIO" : record.estadoAsistencia
          }
          : record
      )
    );
  };

  const handleSave = async () => {
    try {
      // Validar que los registros con estado ASISTIO tengan cantidadAsistida > 0
      const invalidRecords = currentRecords.filter(
        record => record.estadoAsistencia === "ASISTIO" &&
          (!record.cantidadAsistida || record.cantidadAsistida <= 0)
      );

      if (invalidRecords.length > 0) {
        alert("Los registros marcados como 'ASISTIÓ' deben tener un número mayor a 0 en 'ASISTENCIA ESTUDIANTES'.");
        return;
      }

      // Filtrar solo los registros que tienen un estado de asistencia válido
      const validRecords = currentRecords.filter(
        (record) =>
          record.estadoAsistencia !== "CANCELADA" &&
          record.estadoAsistencia !== ""
      );

      if (validRecords.length === 0) {
        alert("No hay registros válidos para guardar.");
        return;
      }

      // Transformar los datos al formato esperado por el action
      const attendanceDataToSave: CrearDatosDeAsistencia[] = validRecords.map(
        (record) => {
          // Convertir la fecha string a Date object válido
          let fechaObj = new Date(record.fecha);
          if (isNaN(fechaObj.getTime())) {
            // Si la fecha es inválida, usar fecha actual
            fechaObj = new Date();
          }

          return {
            fecha: fechaObj, // Enviar objeto Date, no string
            horaInicio: record.horaInicio,
            horaFin: record.horaFin,
            estado: record.estadoAsistencia,
            observaciones: record.observaciones,
            horarioId: record.horarioId,
            asignaturaId: record.asignaturaId,
            aulaId: record.aulaId,
            profesorId: record.profesorId,
            cantasistida: record.cantidadAsistida || 0,
          }
        }
      );

      // Llamar al action para guardar en la base de datos
      const result = await crearRegistrosDeAsistencia(attendanceDataToSave);

      if (result.success) {
        // Recargar los datos después de guardar
        await reloadAttendanceData();

        alert("Asistencias guardadas correctamente.");
      } else {
        // Mostrar mensaje de error
        alert(result.message);
      }
    } catch (error) {
      console.error("Error al guardar asistencias:", error);
      alert(
        "Error inesperado al guardar las asistencias. Por favor, inténtalo de nuevo."
      );
    }
  };

  const getStatusIcon = (status: string) => {
    const statusInfo =
      ATTENDANCE_STATUS[status as keyof typeof ATTENDANCE_STATUS];
    if (!statusInfo) return null;
    const Icon = statusInfo.icon;
    return <Icon className={`w-4 h-4 ${statusInfo.color}`} />;
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <Card className="bg-gray-900/20 backdrop-blur-md border-blue-200/60 shadow-xl shadow-blue-500/10">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-blue-700 font-semibold text-xl flex items-center gap-2">
              <Users className="w-6 h-6" />
              REGISTRO DE ASISTENCIA
            </CardTitle>
            <Button
              onClick={reloadAttendanceData}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'CARGANDO...' : 'RECARGAR'}
            </Button>
          </div>
          <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-blue-200/30">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-5 h-5 text-blue-400" />
              <h3 className="text-blue-400 font-semibold">FILTROS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-cyan-200">Filtrar por Profesor:</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar por nombre del profesor..."
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                    className="pl-10 bg-gray-900/40 border-cyan-400/30 text-cyan-200 placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-cyan-200">Filtrar por Materia:</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar por materia..."
                    value={filterSubject}
                    onChange={(e) => setFilterSubject(e.target.value)}
                    className="pl-10 bg-gray-900/40 border-cyan-400/30 text-cyan-200 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
            {(filterName || filterSubject) && (
              <div className="mt-3 flex items-center gap-2 text-sm text-blue-300">
                <span>
                  Mostrando {filteredRecords.length} de {currentRecords.length} registros
                </span>
                <Button
                  onClick={() => {
                    setFilterName("")
                    setFilterSubject("")
                  }}
                  variant="outline"
                  size="sm"
                  className="h-6 px-2 text-xs border-blue-400/30 text-blue-300 hover:bg-blue-400/10"
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {filteredRecords.length > 0 ? (
            <>
              <div className="overflow-x-auto mb-6">
                <div className="min-w-[1200px]">
                  <div className="grid grid-cols-8 gap-2 mb-3">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                      FECHA
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                      HORA INICIO
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                      HORA FIN
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                      MATERIA ASIGNADA
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                      PROFE ASIGNADO
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                      SALA
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                      TOTAL ESTUDIANTES
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                      ASISTENCIA ESTUDIANTES
                    </div>
                  </div>

                  {filteredRecords
                    .sort((a, b) => {
                      // Convertir horas a minutos para comparar numéricamente
                      const timeToMinutes = (time: string) => {
                        const [hours, minutes] = time.split(':').map(Number);
                        return hours * 60 + minutes;
                      };

                      return timeToMinutes(a.horaInicio) - timeToMinutes(b.horaInicio);
                    })
                    .map((record) => {
                      const subjectStyle = getSubjectStyle(record.materiaAsignada);

                      return (
                        <div
                          key={record.id}
                          className="grid grid-cols-8 gap-2 mb-2"
                        >
                          <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                            {record.fecha}
                          </div>
                          <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                            {record.horaInicio}
                          </div>
                          <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                            {record.horaFin}
                          </div>
                          <div
                            className={`p-3 rounded-lg flex items-center justify-center text-xs text-center border-2 shadow-sm ${subjectStyle.color} ${subjectStyle.textColor}`}
                          >
                            <div className="font-semibold leading-tight">
                              {record.materiaAsignada}
                            </div>
                          </div>
                          <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                            {record.profeAsignado}
                          </div>
                          <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                            {record.sala}
                          </div>
                          <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                            {record.cantidadtotal}
                          </div>
                          <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                            <Input
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              value={record.cantidadAsistida === undefined ? "" : record.cantidadAsistida}
                              onChange={(e) => handleCantidadAsistidaChange(
                                record.id,
                                e.target.value
                              )}
                              placeholder="0"
                              min="0"
                              max={record.cantidadtotal}
                              className="text-center"
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <Button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-8 py-2 rounded-lg shadow-lg"
                >
                  GUARDAR ASISTENCIAS
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-blue-700">
              <p className="text-lg font-semibold">
                {currentRecords.length === 0
                  ? "No hay registros pendientes de asistencia para hoy."
                  : "No se encontraron registros que coincidan con los filtros."
                }
              </p>
              <Button
                onClick={reloadAttendanceData}
                disabled={isLoading}
                className="mt-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 mx-auto"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                {isLoading ? 'CARGANDO...' : 'VERIFICAR NUEVOS REGISTROS'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}