"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock, Calendar, MapPin, CheckCircle, XCircle, Check } from "lucide-react"

interface RealtimeViewProps {
  currentTime: Date
  getCurrentDay: () => string
  getCurrentTimeSlot: () => string | null
  activeClasses: any[]
  toggleRoomOpened: (room: string, timeSlot: string) => void
  getSubjectStyle: (subject: string) => any
}

export function VistaTiempoReal({
  currentTime,
  getCurrentDay,
  getCurrentTimeSlot,
  activeClasses,
  toggleRoomOpened,
  getSubjectStyle,
}: RealtimeViewProps) {
  const currentSlot = getCurrentTimeSlot()

  return (
    <>
      <Card className="bg-gray-900/20 backdrop-blur-md border-green-400/30 shadow-2xl shadow-green-500/10">
        <CardHeader>
          <CardTitle className="text-green-300 font-mono text-xl flex items-center gap-2">
            <Play className="w-6 h-6" />
            CONTROL EN TIEMPO REAL
          </CardTitle>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-green-400 bg-gray-900/50 px-3 py-1 rounded border border-green-500/30">
              <Clock className="w-4 h-4" />
              <span className="font-mono">
                {currentTime.toLocaleTimeString("es-CO", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400 bg-gray-900/50 px-3 py-1 rounded border border-cyan-500/30">
              <Calendar className="w-4 h-4" />
              <span className="font-mono capitalize">
                {getCurrentDay()}, {currentTime.toLocaleDateString("es-CO")}
              </span>
            </div>
            {currentSlot && (
              <div className="flex items-center gap-2 text-yellow-400 bg-gray-900/50 px-3 py-1 rounded border border-yellow-500/30">
                <MapPin className="w-4 h-4" />
                <span className="font-mono">BLOQUE: {currentSlot}</span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {activeClasses.length > 0 ? (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-green-300 font-mono mb-4">SALAS QUE DEBEN ESTAR ABIERTAS AHORA:</h3>
              <div className="grid gap-3">
                {activeClasses.map(({ room, subject, isOpened }) => {
                  const subjectStyle = getSubjectStyle(subject!)

                  return (
                    <div
                      key={room}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        isOpened
                          ? "bg-green-500/20 border-green-400/60 shadow-green-500/30"
                          : "bg-gray-900/40 border-gray-600/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-300 font-mono">{room}</div>
                            <div className="text-xs text-cyan-400 font-mono">SALA</div>
                          </div>
                          <div className="flex-1">
                            <div className={`font-bold text-sm font-mono ${subjectStyle.textColor} mb-1`}>
                              {subject}
                            </div>
                            <div className="text-xs text-gray-400 font-mono">Horario: {currentSlot}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                              isOpened
                                ? "bg-green-500/30 text-green-300 border border-green-400/50"
                                : "bg-red-500/30 text-red-300 border border-red-400/50"
                            }`}
                          >
                            {isOpened ? "ABIERTA" : "CERRADA"}
                          </div>
                          <Button
                            onClick={() => toggleRoomOpened(room, currentSlot!)}
                            variant="outline"
                            size="sm"
                            className={`font-mono transition-all duration-300 ${
                              isOpened
                                ? "border-green-500/50 text-green-300 hover:bg-green-500/20 hover:border-green-400"
                                : "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
                            }`}
                          >
                            {isOpened ? (
                              <>
                                <Check className="w-4 h-4 mr-1" />
                                ABIERTA
                              </>
                            ) : (
                              <>
                                <Play className="w-4 h-4 mr-1" />
                                MARCAR ABIERTA
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Clock className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 font-mono mb-2">NO HAY CLASES PROGRAMADAS</h3>
              <p className="text-gray-500 font-mono">
                En este momento no hay clases programadas para {getCurrentDay()}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900/30 backdrop-blur-sm border-green-500/30 shadow-lg shadow-green-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-mono text-green-300">SALAS ABIERTAS</p>
                <p className="text-3xl font-bold text-green-400 font-mono">
                  {activeClasses.filter((c) => c.isOpened).length}
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
                <p className="text-sm font-mono text-red-300">SALAS CERRADAS</p>
                <p className="text-3xl font-bold text-red-400 font-mono">
                  {activeClasses.filter((c) => !c.isOpened).length}
                </p>
              </div>
              <XCircle className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/30 backdrop-blur-sm border-cyan-500/30 shadow-lg shadow-cyan-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-mono text-cyan-300">TOTAL ACTIVAS</p>
                <p className="text-3xl font-bold text-cyan-400 font-mono">{activeClasses.length}</p>
              </div>
              <Play className="w-8 h-8 text-cyan-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-500/30 shadow-lg shadow-purple-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-mono text-purple-300">% APERTURA</p>
                <p className="text-3xl font-bold text-purple-400 font-mono">
                  {activeClasses.length > 0
                    ? Math.round((activeClasses.filter((c) => c.isOpened).length / activeClasses.length) * 100)
                    : 0}
                  %
                </p>
              </div>
              <MapPin className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
