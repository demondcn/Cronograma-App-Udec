"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MonitorPlay, Activity, TrendingUp, AlertCircle } from "lucide-react";

// ============================================
// CONFIGURACIÓN DE OBJETOS EN LA SALA
// ============================================
// Aquí puedes agregar, quitar o modificar la posición de cada objeto
// Formato de posición: { x: "20%", y: "30%" } donde x es horizontal y y es vertical
// x: 0% = izquierda, 100% = derecha
// y: 0% = arriba, 100% = abajo

interface ObjectPosition {
  x: string; // Posición horizontal en porcentaje (ejemplo: "20%")
  y: string; // Posición vertical en porcentaje (ejemplo: "50%")
}

interface ComputadorPosition extends ObjectPosition {
  id: string; // ID del computador (ejemplo: "PC-1")
}

interface RoomObjects {
  // SOFÁS - Cuadrados verdes decorativos
  sofas: ObjectPosition[];

  // MESAS VERTICALES - Rectangulares verticales sin iconos
  mesasVerticales: ObjectPosition[];

  // MESA CIRCULAR - Sin icono
  mesaCircular: ObjectPosition | null;
  mesaPequeño: ObjectPosition | null;

  // MESAS HORIZONTALES - Rectangulares horizontales (junto a la pantalla)
  mesasHorizontales: ObjectPosition[];

  computadores: ComputadorPosition[];
}

interface RoomLayout {
  objects: RoomObjects;
}

interface LabRoom {
  id: string;
  name: string;
  capacity: number;
  layout: RoomLayout;
}

// ============================================
// CONFIGURACIÓN DE SALAS
// ============================================
// Puedes modificar cada sala independientemente
// Cada computador, sofá, mesa se puede colocar con x e y
const labRooms: LabRoom[] = [
  {
    id: "C111",
    name: "Sala de Cómputo C111",
    capacity: 22,
    layout: {
      objects: {
        // SOFÁS (cuadrados verdes) - Ubicación: x e y en porcentaje
        sofas: [
          { x: "92%", y: "85%" }, // Sofá superior izquierdo
          { x: "92%", y: "85%" }, // Sofá medio izquierdo
          { x: "92%", y: "85%" }, // Sofá superior derecho
          { x: "92%", y: "85%" }, // Sofá medio derecho
          { x: "92%", y: "85%" }, // Sofá inferior izquierdo
          { x: "92%", y: "85%" }, // Sofá inferior derecho
        ],

        // MESAS VERTICALES (rectangulares sin iconos) - Ubicación: x e y
        mesasVerticales: [
          { x: "8%", y: "34%" }, // Mesa vertical izquierda superior
          { x: "8%", y: "58%" }, // Mesa vertical izquierda inferior
          { x: "46%", y: "18%" }, // Mesa vertical derecha superior
          { x: "46%", y: "42%" }, // Mesa vertical derecha inferior
          { x: "46%", y: "66%" }, // Mesa vertical derecha inferior
        ],

        // MESA CIRCULAR (sin icono) - Ubicación: x e y
        mesaCircular: { x: "8%", y: "84%" },
        mesaPequeño: { x: "8%", y: "84%" },

        // MESAS HORIZONTALES - Ubicación: x e y para cada mesa
        mesasHorizontales: [
          { x: "16%", y: "12%" }, // Mesa horizontal 1
          { x: "26%", y: "12%" }, // Mesa horizontal 2
          { x: "36%", y: "12%" }, // Mesa horizontal 3
        ],

        // Puedes agregar, quitar o mover cada PC individualmente
        computadores: [
          // Fila vertical izquierda (6 PCs)
          { id: "PC-1", x: "46%", y: "71%" },
          { id: "PC-2", x: "46%", y: "61%" },
          { id: "PC-3", x: "46%", y: "47%" },
          { id: "PC-4", x: "46%", y: "37%" },
          { id: "PC-5", x: "46%", y: "23%" },
          { id: "PC-6", x: "46%", y: "13%" },
          // Fila horizontal superior (5 PCs)
          { id: "PC-7", x: "18%", y: "12%" },
          { id: "PC-8", x: "24%", y: "12%" },
          { id: "PC-7", x: "28%", y: "12%" },
          { id: "PC-9", x: "34%", y: "12%" },
          { id: "PC-7", x: "38%", y: "12%" },
          // Fila vertical derecha (4 PCs)
          { id: "PC-8", x: "8%", y: "39%" },
          { id: "PC-9", x: "8%", y: "29%" },
          { id: "PC-10", x: "8%", y: "53%" },
          { id: "PC-11", x: "8%", y: "63%" },
          // Pc profesor (1 PCs)
          { id: "PC-12", x: "8%", y: "84%" },
        ],
      },
    },
  },
  {
    id: "C112",
    name: "Sala de Cómputo C112",
    capacity: 22,
    layout: {
      objects: {
        sofas: [],
        mesasVerticales: [],
        mesaCircular: null,
        mesaPequeño: null,
        mesasHorizontales: [
          { x: "55%", y: "88%" },
          { x: "65%", y: "88%" },
        ],
        computadores: [
          { id: "PC-1", x: "25%", y: "10%" },
          { id: "PC-2", x: "40%", y: "10%" },
          { id: "PC-3", x: "60%", y: "10%" },
          { id: "PC-4", x: "75%", y: "10%" },
          { id: "PC-5", x: "20%", y: "25%" },
          { id: "PC-6", x: "20%", y: "35%" },
          { id: "PC-7", x: "20%", y: "45%" },
          { id: "PC-8", x: "20%", y: "55%" },
          { id: "PC-9", x: "20%", y: "65%" },
          { id: "PC-10", x: "80%", y: "25%" },
          { id: "PC-11", x: "80%", y: "35%" },
          { id: "PC-12", x: "80%", y: "45%" },
          { id: "PC-13", x: "80%", y: "55%" },
          { id: "PC-14", x: "80%", y: "65%" },
          { id: "PC-15", x: "40%", y: "35%" },
          { id: "PC-16", x: "50%", y: "35%" },
          { id: "PC-17", x: "60%", y: "35%" },
          { id: "PC-18", x: "40%", y: "45%" },
          { id: "PC-19", x: "50%", y: "45%" },
          { id: "PC-20", x: "60%", y: "45%" },
          { id: "PC-21", x: "40%", y: "55%" },
          { id: "PC-22", x: "50%", y: "55%" },
        ],
      },
    },
  },
  {
    id: "C113",
    name: "Sala de Cómputo C113",
    capacity: 22,
    layout: {
      objects: {
        sofas: [],
        mesasVerticales: [],
        mesaCircular: null,
        mesaPequeño: null,
        mesasHorizontales: [
          { x: "55%", y: "88%" },
          { x: "65%", y: "88%" },
        ],
        computadores: [
          { id: "PC-1", x: "25%", y: "10%" },
          { id: "PC-2", x: "40%", y: "10%" },
          { id: "PC-3", x: "60%", y: "10%" },
          { id: "PC-4", x: "75%", y: "10%" },
          { id: "PC-5", x: "20%", y: "25%" },
          { id: "PC-6", x: "20%", y: "35%" },
          { id: "PC-7", x: "20%", y: "45%" },
          { id: "PC-8", x: "20%", y: "55%" },
          { id: "PC-9", x: "20%", y: "65%" },
          { id: "PC-10", x: "80%", y: "25%" },
          { id: "PC-11", x: "80%", y: "35%" },
          { id: "PC-12", x: "80%", y: "45%" },
          { id: "PC-13", x: "80%", y: "55%" },
          { id: "PC-14", x: "80%", y: "65%" },
          { id: "PC-15", x: "40%", y: "35%" },
          { id: "PC-16", x: "50%", y: "35%" },
          { id: "PC-17", x: "60%", y: "35%" },
          { id: "PC-18", x: "40%", y: "45%" },
          { id: "PC-19", x: "50%", y: "45%" },
          { id: "PC-20", x: "60%", y: "45%" },
          { id: "PC-21", x: "40%", y: "55%" },
          { id: "PC-22", x: "50%", y: "55%" },
        ],
      },
    },
  },
  {
    id: "C114",
    name: "Sala de Cómputo C114",
    capacity: 22,
    layout: {
      objects: {
        sofas: [],
        mesasVerticales: [],
        mesaCircular: null,
        mesaPequeño: null,
        mesasHorizontales: [
          { x: "55%", y: "88%" },
          { x: "65%", y: "88%" },
        ],
        computadores: [
          { id: "PC-1", x: "25%", y: "10%" },
          { id: "PC-2", x: "40%", y: "10%" },
          { id: "PC-3", x: "60%", y: "10%" },
          { id: "PC-4", x: "75%", y: "10%" },
          { id: "PC-5", x: "20%", y: "25%" },
          { id: "PC-6", x: "20%", y: "35%" },
          { id: "PC-7", x: "20%", y: "45%" },
          { id: "PC-8", x: "20%", y: "55%" },
          { id: "PC-9", x: "20%", y: "65%" },
          { id: "PC-10", x: "80%", y: "25%" },
          { id: "PC-11", x: "80%", y: "35%" },
          { id: "PC-12", x: "80%", y: "45%" },
          { id: "PC-13", x: "80%", y: "55%" },
          { id: "PC-14", x: "80%", y: "65%" },
          { id: "PC-15", x: "40%", y: "35%" },
          { id: "PC-16", x: "50%", y: "35%" },
          { id: "PC-17", x: "60%", y: "35%" },
          { id: "PC-18", x: "40%", y: "45%" },
          { id: "PC-19", x: "50%", y: "45%" },
          { id: "PC-20", x: "60%", y: "45%" },
          { id: "PC-21", x: "40%", y: "55%" },
          { id: "PC-22", x: "50%", y: "55%" },
        ],
      },
    },
  },
  {
    id: "C115",
    name: "Sala de Cómputo C115",
    capacity: 22,
    layout: {
      objects: {
        sofas: [],
        mesasVerticales: [],
        mesaCircular: null,
        mesaPequeño: null,
        mesasHorizontales: [
          { x: "55%", y: "88%" },
          { x: "65%", y: "88%" },
        ],
        computadores: [
          { id: "PC-1", x: "25%", y: "10%" },
          { id: "PC-2", x: "40%", y: "10%" },
          { id: "PC-3", x: "60%", y: "10%" },
          { id: "PC-4", x: "75%", y: "10%" },
          { id: "PC-5", x: "20%", y: "25%" },
          { id: "PC-6", x: "20%", y: "35%" },
          { id: "PC-7", x: "20%", y: "45%" },
          { id: "PC-8", x: "20%", y: "55%" },
          { id: "PC-9", x: "20%", y: "65%" },
          { id: "PC-10", x: "80%", y: "25%" },
          { id: "PC-11", x: "80%", y: "35%" },
          { id: "PC-12", x: "80%", y: "45%" },
          { id: "PC-13", x: "80%", y: "55%" },
          { id: "PC-14", x: "80%", y: "65%" },
          { id: "PC-15", x: "40%", y: "35%" },
          { id: "PC-16", x: "50%", y: "35%" },
          { id: "PC-17", x: "60%", y: "35%" },
          { id: "PC-18", x: "40%", y: "45%" },
          { id: "PC-19", x: "50%", y: "45%" },
          { id: "PC-20", x: "60%", y: "45%" },
          { id: "PC-21", x: "40%", y: "55%" },
          { id: "PC-22", x: "50%", y: "55%" },
        ],
      },
    },
  },
];

// ============================================
// FUNCIONES AUXILIARES (NO MODIFICAR)
// ============================================

const getComputerStatus = (computerId: string): "active" | "inactive" => {
  const random = Math.random();
  return random > 0.4 ? "active" : "inactive";
};

interface Computer {
  id: string;
  status: "active" | "inactive";
  x: string;
  y: string;
}

interface ComputerProps {
  computer: Computer;
}

const ComputerIcon = ({ computer }: ComputerProps) => {
  const getStatusColor = () => {
    switch (computer.status) {
      case "active":
        return "bg-blue-500 border-blue-400 shadow-blue-500/50";
      case "inactive":
        return "bg-red-500 border-red-400 shadow-red-500/50";
    }
  };

  const getStatusText = () => {
    switch (computer.status) {
      case "active":
        return "Activo";
      case "inactive":
        return "Inactivo";
    }
  };

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
  );
};

// ============================================
// COMPONENTE DE VISUALIZACIÓN
// ============================================

interface LabRoomViewProps {
  room: LabRoom;
  getSubjectStyle: (subject: string) => any;
}

const LabRoomView = ({ room, getSubjectStyle }: LabRoomViewProps) => {
  const computers: Computer[] = room.layout.objects.computadores.map((pc) => ({
    id: pc.id,
    x: pc.x,
    y: pc.y,
    status: getComputerStatus(pc.id),
  }));

  const stats = {
    active: computers.filter((c) => c.status === "active").length,
    inactive: computers.filter((c) => c.status === "inactive").length,
  };

  const usagePercent = Math.round((stats.active / room.capacity) * 100);

  return (
    <Card className="bg-card border-border shadow-xl overflow-hidden">
      <CardHeader className="border-b border-border bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary rounded-xl shadow-lg shadow-primary/50">
              <MonitorPlay className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                {room.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground font-mono mt-1">
                Capacidad total: {room.capacity} estaciones
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm text-muted-foreground font-mono">
                Uso actual
              </div>
              <div className="text-2xl font-bold text-primary">
                {usagePercent}%
              </div>
            </div>
            <Activity className="w-8 h-8 text-primary" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-8 space-y-8">
        {/* Estadísticas */}
        <div className="grid grid-cols-2 gap-4">
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-xl p-5 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
                  Activos
                </span>
                <TrendingUp className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400">
                {stats.active}
              </div>
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
                <span className="text-xs font-mono text-red-400 tracking-wider uppercase">
                  Inactivos
                </span>
                <AlertCircle className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-4xl font-bold text-red-400">
                {stats.inactive}
              </div>
              <div className="mt-2 h-1.5 bg-red-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                  style={{
                    width: `${(stats.inactive / room.capacity) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout de la Sala */}
        <div className="relative bg-gradient-to-br from-green-100 to-green-200 border border-border rounded-2xl p-12 min-h-[600px] overflow-hidden shadow-inner">
          {/* Grid de fondo */}
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

          {/* SOFÁS - Renderizado dinámico */}
          {room.layout.objects.sofas.map((sofa, index) => (
            <div
              key={`sofa-${index}`}
              className="absolute w-16 h-16 border-2 border-green-600/80 bg-green-500/60 rounded-lg shadow-lg"
              style={{
                left: sofa.x,
                top: sofa.y,
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          ))}

          {/* MESAS VERTICALES - Renderizado dinámico */}
          {room.layout.objects.mesasVerticales.map((mesa, index) => (
            <div
              key={`mesa-vertical-${index}`}
              className="absolute w-16 h-32 border-2 border-green-400/60 bg-green-300/30 rounded-lg shadow-lg"
              style={{
                left: mesa.x,
                top: mesa.y,
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          ))}

          {/* MESA CIRCULAR */}
          {room.layout.objects.mesaCircular && (
            <div
              className="absolute w-40 h-40 rounded-full border-2 border-green-400/60 bg-green-300/30 flex items-center justify-center shadow-lg"
              style={{
                left: room.layout.objects.mesaCircular.x,
                top: room.layout.objects.mesaCircular.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent rounded-full"></div>
            </div>
          )}

          {/* MESAS HORIZONTALES */}
          {room.layout.objects.mesasHorizontales.map((mesa, index) => (
            <div
              key={`mesa-horizontal-${index}`}
              className="absolute w-32 h-16 border-2 border-green-400/60 bg-green-300/30 rounded-lg shadow-lg"
              style={{
                left: mesa.x,
                top: mesa.y,
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          ))}

          {computers.map((computer) => (
            <div
              key={computer.id}
              className="absolute"
              style={{
                left: computer.x,
                top: computer.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <ComputerIcon computer={computer} />
            </div>
          ))}

          {/* Pantalla principal - Posición fija en la parte inferior derecha */}
          <div
            className="absolute flex flex-col items-center gap-3"
            style={{
              left: "75%",
              top: "88%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-64 h-20 border-2 border-primary/60 bg-gradient-to-r from-card via-primary/10 to-card rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5"></div>
              <span className="text-xl font-bold text-primary relative z-10 flex items-center gap-2">
                📺 Pantalla Principal
              </span>
            </div>
            <div className="w-16 h-1.5 bg-muted rounded-full"></div>
          </div>
        </div>

        {/* Leyenda */}
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
  );
};

export function LabRoomsView({
  getSubjectStyle,
}: {
  getSubjectStyle: (subject: string) => any;
}) {
  const [selectedRoom, setSelectedRoom] = useState("C111");

  const currentRoom =
    labRooms.find((room) => room.id === selectedRoom) || labRooms[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-foreground">
          Seleccionar Sala:
        </h2>
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
  );
}
