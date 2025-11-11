"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MonitorPlay } from "lucide-react"

interface LabRoom {
  id: string
  name: string
  capacity: number
  computersLayout: {
    topRow: number
    leftColumn: number
    rightColumn: number
    centerGrid: number
  }
}

const labRooms: LabRoom[] = [
  {
    id: "C111",
    name: "Sala de Cómputo C111",
    capacity: 22,
    computersLayout: {
      topRow: 4,
      leftColumn: 5,
      rightColumn: 5,
      centerGrid: 8,
    },
  },
  {
    id: "C112",
    name: "Sala de Cómputo C112",
    capacity: 22,
    computersLayout: {
      topRow: 4,
      leftColumn: 5,
      rightColumn: 5,
      centerGrid: 8,
    },
  },
  {
    id: "C113",
    name: "Sala de Cómputo C113",
    capacity: 22,
    computersLayout: {
      topRow: 4,
      leftColumn: 5,
      rightColumn: 5,
      centerGrid: 8,
    },
  },
  {
    id: "C114",
    name: "Sala de Cómputo C114",
    capacity: 22,
    computersLayout: {
      topRow: 4,
      leftColumn: 5,
      rightColumn: 5,
      centerGrid: 8,
    },
  },
  {
    id: "C115",
    name: "Sala de Cómputo C115",
    capacity: 22,
    computersLayout: {
      topRow: 4,
      leftColumn: 5,
      rightColumn: 5,
      centerGrid: 8,
    },
  },
]

const getComputerStatus = (computerId: string): "available" | "occupied" | "maintenance" => {
  const random = Math.random()
  if (random > 0.7) return "maintenance"
  if (random > 0.3) return "occupied"
  return "available"
}

interface Computer {
  id: string
  status: "available" | "occupied" | "maintenance"
  type: "rectangular" | "circular"
}

const generateComputers = (total: number): Computer[] => {
  return Array.from({ length: total }, (_, i) => ({
    id: `PC-${i + 1}`,
    status: getComputerStatus(`PC-${i + 1}`),
    type: "rectangular" as const,
  }))
}

interface ComputerProps {
  computer: Computer
}

const ComputerIcon = ({ computer }: ComputerProps) => {
  const getStatusColor = () => {
    switch (computer.status) {
      case "available":
        return "bg-emerald-500/80 border-emerald-400 shadow-emerald-500/50 hover:shadow-emerald-400/80"
      case "occupied":
        return "bg-orange-500/80 border-orange-400 shadow-orange-500/50 hover:shadow-orange-400/80"
      case "maintenance":
        return "bg-red-500/80 border-red-400 shadow-red-500/50 hover:shadow-red-400/80"
    }
  }

  const getStatusText = () => {
    switch (computer.status) {
      case "available":
        return "Disponible"
      case "occupied":
        return "Ocupada"
      case "maintenance":
        return "Mantenimiento"
    }
  }

  return (
    <div className="group relative">
      {computer.type === "rectangular" ? (
        <div
          className={`w-14 h-10 rounded border-2 transition-all duration-300 ${getStatusColor()} flex items-center justify-center cursor-pointer hover:scale-110`}
        >
          <MonitorPlay className="w-5 h-5 text-white" />
        </div>
      ) : (
        <div
          className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${getStatusColor()} flex items-center justify-center cursor-pointer hover:scale-110`}
        >
          <MonitorPlay className="w-5 h-5 text-white" />
        </div>
      )}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 border border-cyan-400/50 rounded text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        {computer.id}
        <br />
        {getStatusText()}
      </div>
    </div>
  )
}

interface LabRoomViewProps {
  room: LabRoom
  getSubjectStyle: (subject: string) => any
}

const LabRoomView = ({ room, getSubjectStyle }: LabRoomViewProps) => {
  const computers = generateComputers(room.capacity)
  const topRowComputers = computers.slice(0, room.computersLayout.topRow)
  const leftColumnComputers = computers.slice(
    room.computersLayout.topRow,
    room.computersLayout.topRow + room.computersLayout.leftColumn,
  )
  const rightColumnComputers = computers.slice(
    room.computersLayout.topRow + room.computersLayout.leftColumn,
    room.computersLayout.topRow + room.computersLayout.leftColumn + room.computersLayout.rightColumn,
  )
  const centerGridComputers = computers
    .slice(room.computersLayout.topRow + room.computersLayout.leftColumn + room.computersLayout.rightColumn)
    .map((c, i) => ({
      ...c,
      type: i === 4 ? "circular" : "rectangular",
    }))

  const stats = {
    available: computers.filter((c) => c.status === "available").length,
    occupied: computers.filter((c) => c.status === "occupied").length,
    maintenance: computers.filter((c) => c.status === "maintenance").length,
  }

  return (
    <Card className="bg-gray-900/50 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
      <CardHeader className="border-b border-cyan-500/20">
        <div className="flex items-center justify-between">
          <CardTitle className="text-cyan-400 font-mono flex items-center gap-2">
            <MonitorPlay className="w-5 h-5" />
            {room.name}
          </CardTitle>
          <div className="text-sm text-gray-300 font-mono">Capacidad: {room.capacity} mesas</div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Estadísticas */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-emerald-500/20 border border-emerald-400/50 rounded-lg p-3 text-center">
            <div className="text-emerald-400 text-2xl font-bold">{stats.available}</div>
            <div className="text-emerald-300 text-xs font-mono">DISPONIBLES</div>
          </div>
          <div className="bg-orange-500/20 border border-orange-400/50 rounded-lg p-3 text-center">
            <div className="text-orange-400 text-2xl font-bold">{stats.occupied}</div>
            <div className="text-orange-300 text-xs font-mono">OCUPADAS</div>
          </div>
          <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-3 text-center">
            <div className="text-red-400 text-2xl font-bold">{stats.maintenance}</div>
            <div className="text-red-300 text-xs font-mono">MANTENIMIENTO</div>
          </div>
        </div>

        {/* Esquema de la sala */}
        <div className="bg-black/80 border-4 border-black rounded-lg p-8 overflow-auto min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col justify-between h-full gap-8">
            <div className="flex justify-around items-start px-4 gap-8">
              {topRowComputers.map((computer) => (
                <div key={computer.id} className="flex flex-col items-center gap-2">
                  <div className="w-20 h-14 border-2 border-gray-500 bg-gray-800/50 rounded flex items-center justify-center">
                    <ComputerIcon computer={computer} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-stretch gap-16 flex-1 px-8">
              {/* Columna izquierda - 5 mesas verticalmente */}
              <div className="flex flex-col justify-between gap-4 min-w-max">
                {leftColumnComputers.map((computer) => (
                  <div key={computer.id} className="flex items-center gap-3">
                    <div className="w-20 h-14 border-2 border-gray-500 bg-gray-800/50 rounded flex items-center justify-center">
                      <ComputerIcon computer={computer} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Centro - Grid 3x3 con mesa circular en el medio */}
              <div className="flex flex-col items-center justify-center gap-8">
                {/* Grid 3x3 con espaciado uniforme */}
                <div className="grid grid-cols-3 gap-6">
                  {centerGridComputers.map((computer, idx) => (
                    <div key={computer.id} className="flex items-center justify-center">
                      {computer.type === "circular" ? (
                        <div className="w-20 h-20 border-2 border-cyan-400/80 bg-gray-800/50 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/30">
                          <ComputerIcon computer={computer} />
                        </div>
                      ) : (
                        <div className="w-16 h-12 border-2 border-gray-500 bg-gray-800/50 rounded flex items-center justify-center">
                          <ComputerIcon computer={computer} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna derecha - 5 mesas verticalmente */}
              <div className="flex flex-col justify-between gap-4 min-w-max">
                {rightColumnComputers.map((computer) => (
                  <div key={computer.id} className="flex items-center gap-3">
                    <div className="w-20 h-14 border-2 border-gray-500 bg-gray-800/50 rounded flex items-center justify-center">
                      <ComputerIcon computer={computer} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-end px-12 gap-20">
              {/* Mesa circular grande en esquina inferior izquierda */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-40 h-40 border-4 border-cyan-400/70 rounded-full bg-gray-800/30 flex items-center justify-center shadow-lg shadow-cyan-400/20">
                  <div className="w-16 h-12 border-2 border-gray-400 bg-gray-800/50 rounded flex items-center justify-center text-xs text-gray-300 font-mono">
                    PC
                  </div>
                </div>
                <span className="text-xs text-cyan-300 font-mono">Mesa Redonda</span>
              </div>

              {/* TV en la parte inferior */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-64 h-20 border-4 border-cyan-400/70 bg-gray-900/50 rounded flex items-center justify-center shadow-lg shadow-cyan-400/20">
                  <span className="text-xl text-cyan-300 font-bold font-mono">TV</span>
                </div>
                <div className="w-16 h-3 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Leyenda */}
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-300">
            <div className="w-3 h-3 rounded bg-emerald-500 border border-emerald-400"></div>
            <span className="font-mono">Disponible</span>
          </div>
          <div className="flex items-center gap-2 text-orange-300">
            <div className="w-3 h-3 rounded bg-orange-500 border border-orange-400"></div>
            <span className="font-mono">Ocupada</span>
          </div>
          <div className="flex items-center gap-2 text-red-300">
            <div className="w-3 h-3 rounded bg-red-500 border border-red-400"></div>
            <span className="font-mono">Mantenimiento</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function LabRoomsView({ getSubjectStyle }: { getSubjectStyle: (subject: string) => any }) {
  const [selectedRoom, setSelectedRoom] = useState("C111")

  const currentRoom = labRooms.find((room) => room.id === selectedRoom) || labRooms[0]

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {labRooms.map((room) => (
          <Button
            key={room.id}
            onClick={() => setSelectedRoom(room.id)}
            variant={selectedRoom === room.id ? "default" : "outline"}
            className={`font-mono transition-all duration-300 ${
              selectedRoom === room.id
                ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/50"
                : "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
            }`}
          >
            <MonitorPlay className="w-4 h-4 mr-2" />
            {room.id}
          </Button>
        ))}
      </div>

      <LabRoomView room={currentRoom} getSubjectStyle={getSubjectStyle} />
    </div>
  )
}
