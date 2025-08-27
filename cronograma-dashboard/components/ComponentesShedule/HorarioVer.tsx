"use client";

import type React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Calendar, Filter, X, User, Users } from "lucide-react";
import { useState, useMemo } from "react";
import { debugHorarios } from "@/components/Traedores/actions/debugHorarios";
interface ScheduleViewProps {
  selectedDay: string;
  selectedRoom: string | null;
  setSelectedDay: (day: string) => void;
  setSelectedRoom: (room: string | null) => void;
  days: string[];
  rooms: string[];
  currentSchedule: any;
  timeSlots: string[];
  getSubjectStyle: (subject: string) => any;
}

export function HorarioVer({
  selectedDay,
  selectedRoom,
  setSelectedDay,
  setSelectedRoom,
  days,
  rooms,
  currentSchedule,
  timeSlots,
  getSubjectStyle,
}: ScheduleViewProps) {
  const [showRoomFilter, setShowRoomFilter] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<any>(null);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);

  const handleSubjectClick = (
    classInfo: any,
    room: string,
    timeSlot: string
  ) => {
    setSelectedSubject({
      ...classInfo,
      room,
      timeSlot,
    });
    setIsSubjectModalOpen(true);
  };
  // Estadísticas
  const stats = useMemo(() => {
    const activeRooms = new Set<string>();
    let totalClasses = 0;

    timeSlots.forEach((slot) => {
      rooms.forEach((room) => {
        if (
          currentSchedule[slot]?.[room] &&
          !currentSchedule[slot][room].occupied
        ) {
          activeRooms.add(room);
          totalClasses++;
        }
      });
    });

    const occupancyRate =
      rooms.length && timeSlots.length
        ? Math.round((totalClasses / (timeSlots.length * rooms.length)) * 100)
        : 0;

    return {
      activeRooms: activeRooms.size,
      totalClasses,
      occupancyRate,
    };
  }, [timeSlots, rooms, currentSchedule]);

  // Responsive room filter
  const displayedRooms = showRoomFilter ? rooms : rooms.slice(0, 4);
  const hasMoreRooms = rooms.length > 4;

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Botón para recargar la página */}
      <div className="flex justify-end">
        <Button
          size="sm"
          variant="outline"
          className="text-xs px-2 py-1 border-cyan-400 text-cyan-500 hover:bg-cyan-500/10"
          onClick={() => window.location.reload()}
        >
          Recargar
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="text-xs px-2 py-1 border-cyan-400 text-cyan-500 hover:bg-cyan-500/10"
          onClick={() =>
            console.log(currentSchedule ? currentSchedule : "Está vacía")
          }
        >
          Debug Schedule
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="text-xs px-2 py-1 border-cyan-400 text-cyan-500 hover:bg-cyan-500/10"
          onClick={async () => {
            const result = await debugHorarios();
            console.log("Debug Horarios:", result);
          }}
        >
          Debug Horarios DB
        </Button>
      </div>
      {/* Selector de día */}
      <Card className="bg-gray-900/30 backdrop-blur-sm border-cyan-500/30 shadow-lg shadow-cyan-500/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-cyan-300 font-mono text-sm sm:text-base">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            SELECCIONAR DÍA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? "default" : "outline"}
                onClick={() => setSelectedDay(day)}
                className={`capitalize font-mono transition-all duration-300 text-xs sm:text-sm flex-1 min-w-[80px] ${selectedDay === day
                  ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/50"
                  : "border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
                  }`}
                size="sm"
              >
                {day.substring(0, 3)}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filtro de sala */}
      <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-500/30 shadow-lg shadow-purple-500/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-purple-300 font-mono text-sm sm:text-base">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              FILTRAR POR SALA
            </CardTitle>
            {hasMoreRooms && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowRoomFilter(!showRoomFilter)}
                className="text-purple-300 hover:text-purple-100 hover:bg-purple-500/20"
              >
                {showRoomFilter ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Filter className="w-4 h-4" />
                )}
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedRoom === null ? "default" : "outline"}
              onClick={() => setSelectedRoom(null)}
              className={`font-mono transition-all duration-300 text-xs sm:text-sm ${selectedRoom === null
                ? "bg-purple-500 hover:bg-purple-400 text-black shadow-lg shadow-purple-500/50"
                : "border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400"
                }`}
              size="sm"
            >
              TODAS
            </Button>
            {displayedRooms.map((room) => (
              <Button
                key={room}
                variant={selectedRoom === room ? "default" : "outline"}
                onClick={() => setSelectedRoom(room)}
                className={`font-mono transition-all duration-300 text-xs sm:text-sm ${selectedRoom === room
                  ? "bg-purple-500 hover:bg-purple-400 text-black shadow-lg shadow-purple-500/50"
                  : "border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400"
                  }`}
                size="sm"
              >
                {room}
              </Button>
            ))}
            {hasMoreRooms && !showRoomFilter && (
              <Button
                variant="outline"
                onClick={() => setShowRoomFilter(true)}
                className="font-mono border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 text-xs"
                size="sm"
              >
                +{rooms.length - 4}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Panel de estadísticas */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <StatCard
          title="SALAS ACTIVAS"
          value={stats.activeRooms}
          icon={<MapPin className="w-4 h-4 sm:w-5 sm:h-5" />}
          color="emerald"
        />
        <StatCard
          title="CLASES PROGRAMADAS"
          value={stats.totalClasses}
          icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5" />}
          color="cyan"
        />
        <StatCard
          title="OCUPACIÓN"
          value={`${stats.occupancyRate}%`}
          icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5" />}
          color="purple"
          className="col-span-2 md:col-span-1"
        />
      </div>

      {/* Tabla de horario */}
      <Card className="bg-gray-900/20 backdrop-blur-md border-cyan-400/30 shadow-2xl shadow-cyan-500/10">
        <CardHeader className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md pb-3">
          <CardTitle className="capitalize text-cyan-300 font-mono text-lg sm:text-xl">
            CRONOGRAMA - {selectedDay.toUpperCase()}
            {selectedRoom && ` - SALA ${selectedRoom}`}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 sm:p-4 lg:p-6">
          <div className="overflow-x-auto scrollbar-thin scrollbar-track-gray-900/50 scrollbar-thumb-cyan-500/50 hover:scrollbar-thumb-cyan-400/70">
            <ScheduleTable
              selectedRoom={selectedRoom}
              rooms={rooms}
              currentSchedule={currentSchedule}
              timeSlots={timeSlots}
              getSubjectStyle={getSubjectStyle}
              onSubjectClick={handleSubjectClick}
            />
          </div>
        </CardContent>
      </Card>

      {/* Leyenda */}
      <LegendCard />
      {isSubjectModalOpen && selectedSubject && (
        <SubjectInfoModal
          subject={selectedSubject}
          onClose={() => setIsSubjectModalOpen(false)}
          getSubjectStyle={getSubjectStyle}
        />
      )}
    </div>
  );
}
// componente para mostrar estadísticas
function SubjectInfoModal({
  subject,
  onClose,
  getSubjectStyle,
}: {
  subject: any;
  onClose: () => void;
  getSubjectStyle: (subject: string) => any;
}) {
  const style = getSubjectStyle(subject.subject);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="bg-gray-900/95 backdrop-blur-md border-cyan-500/50 shadow-2xl shadow-cyan-500/20 max-w-md w-full">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-cyan-300 font-mono text-lg">
              INFORMACIÓN DE MATERIA
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-gray-800/50"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Materia */}
          <div
            className={`p-4 rounded-lg border-2 ${style?.color || "bg-gray-800"
              } ${style?.glowColor || ""}`}
          >
            <h3
              className={`font-bold text-sm uppercase tracking-wide ${style?.textColor || "text-white"
                } text-center`}
            >
              {subject.subject}
            </h3>
          </div>

          {/* Información detallada */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <User className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-xs text-gray-400 font-mono">PROFESOR</p>
                <p className="text-white font-semibold">
                  {subject.professor || "No asignado"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <Users className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-xs text-gray-400 font-mono">GRUPO</p>
                <p className="text-white font-semibold">
                  {subject.group || "No asignado"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <MapPin className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-xs text-gray-400 font-mono">SALA</p>
                <p className="text-white font-semibold">{subject.room}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <Clock className="w-5 h-5 text-orange-400" />
              <div>
                <p className="text-xs text-gray-400 font-mono">HORARIO</p>
                <p className="text-white font-semibold">
                  {subject.timeRange || subject.timeSlot}
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold"
          >
            CERRAR
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
// Tabla de horario
function ScheduleTable({
  selectedRoom,
  rooms,
  currentSchedule,
  timeSlots,
  getSubjectStyle,
  onSubjectClick,
}: {
  selectedRoom: string | null;
  rooms: string[];
  currentSchedule: any;
  timeSlots: string[];
  getSubjectStyle: (subject: string) => any;
  onSubjectClick: (classInfo: any, room: string, timeSlot: string) => void;
}) {
  const filteredRooms = rooms.filter(
    (room) => selectedRoom === null || room === selectedRoom
  );

  const visibleTimeSlots = timeSlots.filter((timeSlot) => {
    return !filteredRooms.some((room) => {
      const classInfo = currentSchedule[timeSlot]?.[room];
      return classInfo && classInfo.occupied;
    });
  });

  return (
    <div className="min-w-[600px] sm:min-w-full relative">
      {/* Cabecera */}
      <div
        className="grid gap-2 mb-4"
        style={{
          gridTemplateColumns: `120px repeat(${filteredRooms.length}, 150px)`,
        }}
      >
        <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white p-3 text-center font-bold rounded-lg font-mono shadow-lg border border-orange-400/50">
          <div className="text-sm font-extrabold">HORA</div>
        </div>
        {filteredRooms.map((room) => (
          <div
            key={room}
            className="bg-gradient-to-br from-orange-500 to-pink-500 text-white p-3 text-center font-bold rounded-lg font-mono shadow-lg border border-orange-400/50"
          >
            <div className="text-sm font-extrabold">{room}</div>
          </div>
        ))}
      </div>

      {/* Cuerpo con posicionamiento relativo para materias expandidas */}
      <div className="space-y-2 relative">
        {visibleTimeSlots.map((timeSlot) => (
          <ScheduleRow
            key={timeSlot}
            timeSlot={timeSlot}
            filteredRooms={filteredRooms}
            currentSchedule={currentSchedule}
            getSubjectStyle={getSubjectStyle}
            onSubjectClick={onSubjectClick}
          />
        ))}

        {timeSlots.map((timeSlot, timeIndex) =>
          filteredRooms.map((room, roomIndex) => {
            const classInfo = currentSchedule[timeSlot]?.[room];
            if (!classInfo || !classInfo.isMultiHour) return null;

            const style = getSubjectStyle(classInfo.subject);
            const rowHeight = 65; // Altura fija de cada fila
            const gap = 8; // Gap entre filas
            const totalRowHeight = rowHeight + gap;

            // Calcular posición basada en filas visibles
            const visibleRowIndex = visibleTimeSlots.indexOf(timeSlot);
            if (visibleRowIndex === -1) return null;

            const top = visibleRowIndex * totalRowHeight;
            const left = 130 + roomIndex * 150 + roomIndex * 8; // 120px para columna hora + ancho columna + gaps
            const height = classInfo.rowSpan * totalRowHeight - gap;
            return (
              <div
                key={`${timeSlot}-${room}-multi`}
                className={`absolute rounded-lg border-2 transition-all duration-200 cursor-pointer ${style?.color || "bg-gray-800"
                  } ${style?.glowColor || ""} hover:scale-[1.02] hover:shadow-lg z-10`}
                style={{
                  top: `${top}px`,
                  left: `${left}px`,
                  width: "150px",
                  height: `${height}px`,
                }}
                onClick={() => onSubjectClick(classInfo, room, timeSlot)}
              >
                <div className="p-3 h-full flex flex-col justify-center text-center">
                  <div
                    className={`font-bold text-xs uppercase tracking-wide ${style?.textColor || "text-white"
                      } line-clamp-2`}
                  >
                    {classInfo.subject}
                  </div>
                  {classInfo.timeRange && (
                    <div className="text-xs mt-1 font-mono text-white">
                      {`${timeSlot}-${timeSlots[
                        Math.min(timeIndex + (classInfo.rowSpan ?? 1), timeSlots.length - 1)
                      ]
                        }`}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// Modificando fila para omitir celdas ocupadas por materias multi-hora (se renderizan con posicionamiento absoluto)
function ScheduleRow({
  timeSlot,
  filteredRooms,
  currentSchedule,
  getSubjectStyle,
  onSubjectClick,
}: {
  timeSlot: string;
  filteredRooms: string[];
  currentSchedule: any;
  getSubjectStyle: (subject: string) => any;
  onSubjectClick: (classInfo: any, room: string, timeSlot: string) => void
}) {
  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: `120px repeat(${filteredRooms.length}, 150px)`,
        height: "65px", // Altura fija
      }}
    >
      <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white p-3 text-center font-bold rounded-lg flex items-center justify-center font-mono shadow-md border border-orange-300/50">
        <div className="text-sm font-extrabold">{timeSlot}</div>
      </div>

      {filteredRooms.map((room) => {
        const classInfo = currentSchedule[timeSlot]?.[room];

        // Si la celda está ocupada por materia extendida o es multi-hora, no mostrar nada
        if (!classInfo || classInfo.occupied || classInfo.isMultiHour) {
          return (
            <div
              key={room}
              className="bg-gray-900/40 border-2 border-gray-600/40 hover:bg-gray-800/50 rounded-lg flex items-center justify-center text-center transition-all duration-200"
            >
              {/* No mostrar "Disponible" */}
            </div>
          );
        }

        // Renderizar clases de una hora normalmente
        const style = getSubjectStyle(classInfo.subject);
        return (
          <div
            key={room}
            className={`p-3 rounded-lg flex items-center justify-center text-center border-2 transition-all duration-200 cursor-pointer ${style?.color || "bg-gray-800"
              } ${style?.glowColor || ""} hover:scale-[1.02] hover:shadow-lg`}
            onClick={() => onSubjectClick(classInfo, room, timeSlot)}
          >
            <div className="w-full">
              <div
                className={`font-bold text-xs uppercase tracking-wide ${style?.textColor || "text-white"
                  } line-clamp-2`}
              >
                {classInfo.subject}
              </div>
              {classInfo.instructor && (
                <div className="text-xs mt-1 opacity-80">
                  {classInfo.instructor}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Tarjetas de estadísticas
function StatCard({
  title,
  value,
  icon,
  color,
  className = "",
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: "emerald" | "cyan" | "purple";
  className?: string;
}) {
  const colorClasses = {
    emerald: "border-emerald-500/30 text-emerald-300 shadow-emerald-500/20",
    cyan: "border-cyan-500/30 text-cyan-300 shadow-cyan-500/20",
    purple: "border-purple-500/30 text-purple-300 shadow-purple-500/20",
  };

  return (
    <Card
      className={`bg-gray-900/30 backdrop-blur-sm ${colorClasses[color]} ${className}`}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-mono opacity-80">{title}</p>
            <p className="text-2xl font-bold font-mono">{value}</p>
          </div>
          <div className="opacity-70">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

// Leyenda de carreras
function LegendCard() {
  const legends = [
    {
      color: "from-purple-500 to-purple-700",
      text: "text-purple-300",
      label: "ADMINISTRACIÓN",
    },
    {
      color: "from-emerald-700 to-emerald-900",
      text: "text-emerald-200",
      label: "ING. SOFTWARE",
    },
    {
      color: "from-yellow-500 to-yellow-700",
      text: "text-yellow-300",
      label: "ING. INDUSTRIAL",
    },
    {
      color: "from-blue-500 to-blue-700",
      text: "text-blue-300",
      label: "CIENCIAS DEPORTE",
    },
  ];

  return (
    <Card className="bg-gray-900/20 backdrop-blur-md border-gray-500/30 shadow-xl shadow-gray-500/10">
      <CardHeader>
        <CardTitle className="text-gray-300 font-mono text-base sm:text-lg">
          LEYENDA DE CARRERAS
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {legends.map((legend, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-600/30"
            >
              <div
                className={`w-4 h-4 bg-gradient-to-br ${legend.color} rounded-md shadow-md flex-shrink-0`}
              ></div>
              <span
                className={`font-mono text-xs font-semibold ${legend.text}`}
              >
                {legend.label}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
