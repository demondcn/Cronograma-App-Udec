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
} from "lucide-react";
import { useState } from "react";
import {
  crearRegistrosDeAsistencia,
  CrearDatosDeAsistencia,
} from "../Agregadores/AgregarAsistencia/actions/crearRegistrosDeAsistencia";
//Traedores de info
import { obtenerAsistencias } from "./../Traedores/actions/asistenciasid";
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
// Datos de ejemplo para asistencias guardadas hay que
// reemplazarlos con datos reales osea con un traedor de asistencias
// const MOCK_SAVED_ATTENDANCE: AttendanceRecord[] = [
//   {
//     id: "saved-1",
//     fecha: "2024-01-15",
//     horaInicio: "08:00",
//     horaFin: "10:00",
//     materiaAsignada: "Matemáticas",
//     profeAsignado: "Dr. García",
//     estadoAsistencia: "ASISTIO",
//     sala: "A-101",
//     observaciones: "Clase completada exitosamente",
//     diaSemana: "lunes",
//     horarioId: "1",
//     asignaturaId: "1",
//     aulaId: "1",
//     profesorId: "1",
//   },
//   {
//     id: "saved-2",
//     fecha: "2024-01-15",
//     horaInicio: "10:30",
//     horaFin: "12:30",
//     materiaAsignada: "Física",
//     profeAsignado: "Dra. López",
//     estadoAsistencia: "TARDANZA",
//     sala: "B-205",
//     observaciones: "Llegó 15 minutos tarde",
//     diaSemana: "lunes",
//     horarioId: "2",
//     asignaturaId: "2",
//     aulaId: "2",
//     profesorId: "2",
//   },
//   {
//     id: "saved-3",
//     fecha: "2024-01-16",
//     horaInicio: "14:00",
//     horaFin: "16:00",
//     materiaAsignada: "Química",
//     profeAsignado: "Prof. Martínez",
//     estadoAsistencia: "JUSTIFICADA",
//     sala: "C-301",
//     observaciones: "Ausencia por cita médica",
//     diaSemana: "martes",
//     horarioId: "3",
//     asignaturaId: "3",
//     aulaId: "3",
//     profesorId: "3",
//   },
// ];
//
export function AsistenciaVer({
  attendanceData,
  getSubjectStyle,
}: AttendanceViewProps) {
  const [currentRecords, setCurrentRecords] =
    useState<AttendanceRecord[]>(attendanceData);
  const [savedRecords, setSavedRecords] = useState<AttendanceRecord[]>([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
        // Mostrar mensaje de éxito
        alert(result.message);

        // Agregar los registros guardados a la lista de asistencias guardadas
        const newSavedRecords = validRecords.map((record) => ({
          ...record,
          id: `saved-${Date.now()}-${Math.random()}`, // Generar nuevo ID único
        }));
        // Limpiar los registros actuales
        setCurrentRecords([]);
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
  const cargarAsistencia = async () => {
    try {
      const asissdata = await obtenerAsistencias();
      setSavedRecords(asissdata);
    } catch (error) {
      setSavedRecords([]);
    } finally {
    }
  };
  useEffect(() => {
    cargarAsistencia();
  }, []);

  return (
    <>
      <Card className="bg-gray-900/20 backdrop-blur-md border-blue-200/60 shadow-xl shadow-blue-500/10">
        <CardHeader>
          <CardTitle className="text-blue-700 font-semibold text-xl flex items-center gap-2">
            <Users className="w-6 h-6" />
            REGISTRO DE ASISTENCIA
          </CardTitle>
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
        </CardContent>
      </Card>

      <Card className="bg-gray-900/20 backdrop-blur-md border-cyan-400/30 shadow-2xl shadow-orange-500/10 mt-6">
        <CardHeader>
          <CardTitle className="text-cyan-300 font-semibold text-xl flex items-center gap-2">
            <Archive className="w-6 h-6" />
            ASISTENCIAS GUARDADAS
          </CardTitle>
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
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
