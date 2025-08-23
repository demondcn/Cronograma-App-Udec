"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, CheckCircle, XCircle } from "lucide-react"

interface AttendanceViewProps {
  attendanceData: any[]
  getSubjectStyle: (subject: string) => any
}

export function AsistenciaVer({ attendanceData, getSubjectStyle }: AttendanceViewProps) {
  return (
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
                      className={`p-3 rounded flex items-center justify-center font-mono text-sm border-2 ${
                        isPresent
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
  )
}
