"use client";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Users,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  FileX,
  Archive,
  Download,
  Calendar,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";
import {
  crearRegistrosDeAsistencia,
  CrearDatosDeAsistencia,
} from "../Agregadores/AgregarAsistencia/actions/crearRegistrosDeAsistencia";
//Traedores de info
import { obtenerAsistencias } from "./../Traedores/actions/asistenciasid";
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
  const [currentRecords, setCurrentRecords] = useState<AttendanceRecord[]>(attendanceData);
  const [savedRecords, setSavedRecords] = useState<AttendanceRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  // Función para recargar las asistencias guardadas
  const reloadSavedAttendances = async () => {
    try {
      const asissdata = await obtenerAsistencias();
      setSavedRecords(asissdata);
    } catch (error) {
      console.error("Error al recargar asistencias guardadas:", error);
      setSavedRecords([]);
    }
  };

  const handleStatusChange = (recordId: string, newStatus: string) => {
    setCurrentRecords((prev) =>
      prev.map((record) =>
        record.id === recordId
          ? { ...record, estadoAsistencia: newStatus }
          : record
      )
    );
  };

  const handleObservationsChange = (
    recordId: string,
    newObservations: string
  ) => {
    setCurrentRecords((prev) =>
      prev.map((record) =>
        record.id === recordId
          ? { ...record, observaciones: newObservations }
          : record
      )
    );
  };

  const handleSave = async () => {
    try {
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
        (record) => ({
          fecha: record.fecha,
          horaInicio: record.horaInicio,
          horaFin: record.horaFin,
          estado: record.estadoAsistencia,
          observaciones: record.observaciones,
          horarioId: record.horarioId,
          asignaturaId: record.asignaturaId,
          aulaId: record.aulaId,
          profesorId: record.profesorId,
        })
      );

      // Llamar al action para guardar en la base de datos
      const result = await crearRegistrosDeAsistencia(attendanceDataToSave);

      if (result.success) {
        // Recargar los datos después de guardar
        await reloadAttendanceData();
        await reloadSavedAttendances();
        
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

  const exportToExcel = () => {
    let filteredRecords = savedRecords;

    if (startDate || endDate) {
      filteredRecords = savedRecords.filter((record) => {
        const recordDate = new Date(record.fecha);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        if (start && end) {
          return recordDate >= start && recordDate <= end;
        } else if (start) {
          return recordDate >= start;
        } else if (end) {
          return recordDate <= end;
        }
        return true;
      });
    }

    const headers = [
      "Fecha",
      "Hora Inicio",
      "Hora Fin",
      "Materia Asignada",
      "Profe Asignado",
      "Estado Asistencia",
      "Sala",
      "Observaciones",
    ];
    const csvContent = [
      headers.join(","),
      ...filteredRecords.map((record) =>
        [
          record.fecha,
          record.horaInicio,
          record.horaFin,
          `"${record.materiaAsignada}"`,
          `"${record.profeAsignado}"`,
          ATTENDANCE_STATUS[
            record.estadoAsistencia as keyof typeof ATTENDANCE_STATUS
          ]?.label || record.estadoAsistencia,
          record.sala,
          `"${record.observaciones}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `asistencias_${startDate || "todas"}_${endDate || "hasta_hoy"}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    reloadSavedAttendances();
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
        </CardHeader>
        <CardContent>
          {currentRecords.length > 0 && (
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
                      ESTADO ASISTENCIA
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                      SALA
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                      OBSERVACIONES
                    </div>
                  </div>

                  {currentRecords.map((record) => {
                    const subjectStyle = getSubjectStyle(
                      record.materiaAsignada
                    );

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
                        <div className="bg-blue-50/90 border border-blue-200 p-3 rounded-lg flex items-center justify-center shadow-sm">
                          <Select
                            value={record.estadoAsistencia}
                            onValueChange={(value) =>
                              handleStatusChange(record.id, value)
                            }
                          >
                            <SelectTrigger className="w-full border-blue-300 focus:border-blue-500">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.entries(ATTENDANCE_STATUS).map(
                                ([key, status]) => (
                                  <SelectItem key={key} value={key}>
                                    <div className="flex items-center gap-2">
                                      {getStatusIcon(key)}
                                      {status.label}
                                    </div>
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                          {record.sala}
                        </div>
                        <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                          <Input
                            value={record.observaciones}
                            onChange={(e) =>
                              handleObservationsChange(
                                record.id,
                                e.target.value
                              )
                            }
                            placeholder="Agregar observaciones..."
                            className="border-cyan-400/30 focus:border-blue-500 text-blue-800 text-sm bg-white/80"
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
          )}

          {currentRecords.length === 0 && (
            <div className="text-center py-8 text-blue-700">
              <p className="text-lg font-semibold">No hay registros pendientes de asistencia para hoy.</p>
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

      <Card className="bg-gray-900/20 backdrop-blur-md border-cyan-400/30 shadow-2xl shadow-orange-500/10 mt-6">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-cyan-300 font-semibold text-xl flex items-center gap-2">
              <Archive className="w-6 h-6" />
              ASISTENCIAS GUARDADAS
            </CardTitle>
            <Button
              onClick={reloadSavedAttendances}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              ACTUALIZAR
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-cyan-400/30">
            <h3 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Filtrar por Fecha para Exportar
            </h3>
            <div className="flex gap-4 items-center flex-wrap">
              <div className="flex items-center gap-2">
                <label className="text-cyan-300 font-medium text-sm">
                  Desde:
                </label>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border-cyan-400/50 focus:border-cyan-400 bg-gray-900/30 text-white"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-cyan-300 font-medium text-sm">
                  Hasta:
                </label>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border-cyan-400/50 focus:border-cyan-400 bg-gray-900/30 text-white"
                />
              </div>
              <Button
                onClick={exportToExcel}
                className="bg-gradient-to-r from-cyan-500 to-cyan-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                DESCARGAR EXCEL
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[1200px]">
              <div className="grid grid-cols-8 gap-2 mb-3">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                  FECHA
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                  HORA INICIO
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                  HORA FIN
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                  MATERIA ASIGNADA
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                  PROFE ASIGNADO
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                  ESTADO ASISTENCIA
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                  SALA
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 text-center font-semibold rounded-lg shadow-md">
                  OBSERVACIONES
                </div>
              </div>

              {savedRecords.map((record) => {
                const subjectStyle = getSubjectStyle(record.materiaAsignada);
                const statusInfo =
                  ATTENDANCE_STATUS[
                    record.estadoAsistencia as keyof typeof ATTENDANCE_STATUS
                  ];

                return (
                  <div key={record.id} className="grid grid-cols-8 gap-2 mb-2">
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
                    <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center shadow-sm">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(record.estadoAsistencia)}
                        <span
                          className={`font-medium text-sm ${
                            statusInfo?.color || "text-gray-400"
                          }`}
                        >
                          {statusInfo?.label || record.estadoAsistencia}
                        </span>
                      </div>
                    </div>
                    <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                      {record.sala}
                    </div>
                    <div className="bg-gray-900/40 border border-cyan-400/30 p-3 rounded-lg flex items-center justify-center text-cyan-200 font-medium text-sm shadow-sm">
                      {record.observaciones}
                    </div>
                  </div>
                );
              })}

              {savedRecords.length === 0 && (
                <div className="text-center py-8 text-cyan-300">
                  <p className="text-lg font-semibold">No hay asistencias guardadas.</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}