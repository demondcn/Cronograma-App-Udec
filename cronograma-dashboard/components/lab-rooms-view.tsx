"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MonitorPlay, Activity, TrendingUp, AlertCircle } from "lucide-react"

interface RoomLayout {
  hasPuffs: boolean
  puffPositions: Array<{ x: string; y: string }>
  computersLayout: {
    topRow: number
    leftColumn: number
    rightColumn: number
    centerGrid: number
  }
}

interface LabRoom {
  id: string
  name: string
  capacity: number
  layout: RoomLayout
}

const labRooms: LabRoom[] = [
  {
    id: "C111",
    name: "Sala de Cómputo C111",
    capacity: 22,
    layout: {
      hasPuffs: true,
      puffPositions: [
        { x: "20%", y: "50%" },
        { x: "25%", y: "40%" },
        { x: "20%", y: "60%" },
        { x: "30%", y: "50%" },
      ],
      computersLayout: {
        topRow: 4,
        leftColumn: 5,
        rightColumn: 5,
        centerGrid: 8,
      },
    },
  },
  {
    id: "C112",
    name: "Sala de Cómputo C112",
    capacity: 22,
    layout: {
      hasPuffs: false,
      puffPositions: [],
      computersLayout: {
        topRow: 4,
        leftColumn: 5,
        rightColumn: 5,
        centerGrid: 8,
      },
    },
  },
  {
    id: "C113",
    name: "Sala de Cómputo C113",
    capacity: 22,
    layout: {
      hasPuffs: false,
      puffPositions: [],
      computersLayout: {
        topRow: 4,
        leftColumn: 5,
        rightColumn: 5,
        centerGrid: 8,
      },
    },
  },
  {
    id: "C114",
    name: "Sala de Cómputo C114",
    capacity: 22,
    layout: {
      hasPuffs: false,
      puffPositions: [],
      computersLayout: {
        topRow: 4,
        leftColumn: 5,
        rightColumn: 5,
        centerGrid: 8,
      },
    },
  },
  {
    id: "C115",
    name: "Sala de Cómputo C115",
    capacity: 22,
    layout: {
      hasPuffs: false,
      puffPositions: [],
      computersLayout: {
        topRow: 4,
        leftColumn: 5,
        rightColumn: 5,
        centerGrid: 8,
      },
    },
  },
]

const getComputerStatus = (computerId: string): "active" | "inactive" => {
  const random = Math.random()
  return random > 0.4 ? "active" : "inactive"
}

interface Computer {
  id: string
  status: "active" | "inactive"
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
      case "active":
        return "bg-blue-500 border-blue-400 shadow-blue-500/50"
      case "inactive":
        return "bg-red-500 border-red-400 shadow-red-500/50"
    }
  }

  const getStatusText = () => {
    switch (computer.status) {
      case "active":
        return "Activo"
      case "inactive":
        return "Inactivo"
    }
  }

  return (
    <div className="group relative">
      <div
        className={`w-12 h-12 rounded-lg border-2 transition-all duration-300 ${getStatusColor()} flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-xl backdrop-blur-sm`}
      >
        <MonitorPlay className="w-5 h-5 text-white" />
      </div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-950/95 backdrop-blur-sm border border-primary/50 rounded-lg text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 font-mono shadow-lg">
        <div className="font-semibold text-primary">{computer.id}</div>
        <div className="text-muted-foreground">{getStatusText()}</div>
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
  const topRowComputers = computers.slice(0, room.layout.computersLayout.topRow)
  const leftColumnComputers = computers.slice(
    room.layout.computersLayout.topRow,
    room.layout.computersLayout.topRow + room.layout.computersLayout.leftColumn,
  )
  const rightColumnComputers = computers.slice(
    room.layout.computersLayout.topRow + room.layout.computersLayout.leftColumn,
    room.layout.computersLayout.topRow +
      room.layout.computersLayout.leftColumn +
      room.layout.computersLayout.rightColumn,
  )
  const centerGridComputers = computers
    .slice(
      room.layout.computersLayout.topRow +
        room.layout.computersLayout.leftColumn +
        room.layout.computersLayout.rightColumn,
    )
    .map((c, i) => ({
      ...c,
      type: i === 4 ? "circular" : "rectangular",
    }))

  const stats = {
    active: computers.filter((c) => c.status === "active").length,
    inactive: computers.filter((c) => c.status === "inactive").length,
  }

  const usagePercent = Math.round((stats.active / room.capacity) * 100)

  return (
    <Card className="bg-card border-border shadow-xl overflow-hidden">
      <CardHeader className="border-b border-border bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary rounded-xl shadow-lg shadow-primary/50">
              <MonitorPlay className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">{room.name}</CardTitle>
              <p className="text-sm text-muted-foreground font-mono mt-1">
                Capacidad total: {room.capacity} estaciones
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm text-muted-foreground font-mono">Uso actual</div>
              <div className="text-2xl font-bold text-primary">{usagePercent}%</div>
            </div>
            <Activity className="w-8 h-8 text-primary" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-8 space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-xl p-5 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Activos</span>
                <TrendingUp className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400">{stats.active}</div>
              <div className="mt-2 h-1.5 bg-blue-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                  style={{ width: `${(stats.active / room.capacity) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/30 rounded-xl p-5 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/20">
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-red-400 tracking-wider uppercase">Inactivos</span>
                <AlertCircle className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-4xl font-bold text-red-400">{stats.inactive}</div>
              <div className="mt-2 h-1.5 bg-red-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                  style={{ width: `${(stats.inactive / room.capacity) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-green-100 to-green-200 border border-border rounded-2xl p-12 min-h-[600px] overflow-hidden shadow-inner">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="absolute left-[8%] top-[15%] w-16 h-16 border-2 border-green-600/80 bg-green-500/60 rounded-lg shadow-lg"></div>
          <div className="absolute left-[8%] top-[32%] w-16 h-16 border-2 border-green-600/80 bg-green-500/60 rounded-lg shadow-lg"></div>

          <div className="absolute right-[8%] top-[15%] w-16 h-16 border-2 border-green-600/80 bg-green-500/60 rounded-lg shadow-lg"></div>
          <div className="absolute right-[8%] top-[32%] w-16 h-16 border-2 border-green-600/80 bg-green-500/60 rounded-lg shadow-lg"></div>

          <div className="absolute left-[8%] bottom-[15%] w-16 h-16 border-2 border-green-600/80 bg-green-500/60 rounded-lg shadow-lg"></div>
          <div className="absolute right-[8%] bottom-[15%] w-16 h-16 border-2 border-green-600/80 bg-green-500/60 rounded-lg shadow-lg"></div>

          <div className="absolute left-[15%] top-[20%] w-16 h-32 border-2 border-green-400/60 bg-green-300/30 rounded-lg shadow-lg"></div>
          <div className="absolute left-[15%] top-[55%] w-16 h-32 border-2 border-green-400/60 bg-green-300/30 rounded-lg shadow-lg"></div>
          <div className="absolute right-[15%] top-[20%] w-16 h-32 border-2 border-green-400/60 bg-green-300/30 rounded-lg shadow-lg"></div>
          <div className="absolute right-[15%] top-[55%] w-16 h-32 border-2 border-green-400/60 bg-green-300/30 rounded-lg shadow-lg"></div>

          <div className="flex-1 flex flex-col justify-between h-full gap-12 relative z-10">
            <div className="flex justify-around items-start gap-6">
              {topRowComputers.map((computer) => (
                <ComputerIcon key={computer.id} computer={computer} />
              ))}
            </div>

            <div className="flex justify-between items-center gap-12 flex-1">
              <div className="flex flex-col justify-around gap-4 h-full">
                {leftColumnComputers.map((computer) => (
                  <ComputerIcon key={computer.id} computer={computer} />
                ))}
              </div>

              <div className="flex flex-col items-center justify-center gap-8">
                <div className="grid grid-cols-3 gap-6">
                  {centerGridComputers.map((computer) => (
                    <ComputerIcon key={computer.id} computer={computer} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-around gap-4 h-full">
                {rightColumnComputers.map((computer) => (
                  <ComputerIcon key={computer.id} computer={computer} />
                ))}
              </div>
            </div>

            <div className="flex justify-between items-end gap-16">
              <div className="flex flex-col items-center gap-3">
                <div className="w-40 h-40 rounded-full border-2 border-green-400/60 bg-green-300/30 flex items-center justify-center shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent"></div>
                </div>
                <span className="text-xs text-green-900 font-mono font-semibold">Mesa Colaborativa</span>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-48 border-2 border-green-400/60 bg-green-300/30 rounded-lg shadow-lg"></div>
                  <span className="text-xs text-green-900 font-mono">Mesa de Trabajo</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-48 border-2 border-green-400/60 bg-green-300/30 rounded-lg shadow-lg"></div>
                  <span className="text-xs text-green-900 font-mono">Mesa de Trabajo</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-64 h-20 border-2 border-primary/60 bg-gradient-to-r from-card via-primary/10 to-card rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5"></div>
                  <span className="text-xl font-bold text-primary relative z-10 flex items-center gap-2">
                    📺 Pantalla Principal
                  </span>
                </div>
                <div className="w-16 h-1.5 bg-muted rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 bg-secondary/50 border border-border rounded-xl p-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded bg-blue-500 border border-blue-400 shadow-sm shadow-blue-500/50"></div>
            <span className="font-mono text-foreground">Activo</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded bg-red-500 border border-red-400 shadow-sm shadow-red-500/50"></div>
            <span className="font-mono text-foreground">Inactivo</span>
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
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-foreground">Seleccionar Sala:</h2>
        <div className="flex gap-2 flex-wrap">
          {labRooms.map((room) => (
            <Button
              key={room.id}
              onClick={() => setSelectedRoom(room.id)}
              variant={selectedRoom === room.id ? "default" : "outline"}
              className={`font-mono transition-all duration-300 ${
                selectedRoom === room.id
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
                  : "border-border text-muted-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <MonitorPlay className="w-4 h-4 mr-2" />
              {room.id}
            </Button>
          ))}
        </div>
      </div>

      <LabRoomView room={currentRoom} getSubjectStyle={getSubjectStyle} />
    </div>
  )
}
