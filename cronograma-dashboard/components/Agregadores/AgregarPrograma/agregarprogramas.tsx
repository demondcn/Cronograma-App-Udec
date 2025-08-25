"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CrearPrograma } from "./actions/programas";

interface AgregarProgramaFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgregarProgramaForm({
  isOpen,
  onClose,
}: AgregarProgramaFormProps) {
  const [selectedColors, setSelectedColors] = useState({
    color: "#3b82f6",
    colorbrillo: "#60a5fa",
    colortexto: "#ffffff",
  });

  const handleColorChange = (colorType: string, value: string) => {
    setSelectedColors((prev) => ({
      ...prev,
      [colorType]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-400/50 shadow-2xl shadow-purple-500/20">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
          <CardTitle className="text-center font-bold text-xl font-mono">
            🎓 Agregar Nuevo Programa
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form action={CrearPrograma} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className="text-purple-300 font-semibold font-mono"
              >
                Nombre del Programa
              </Label>
              <Input
                name="nombre"
                id="nombre"
                type="text"
                placeholder="Ej: Ingeniería de Software"
                className="border-2 border-purple-400/50 focus:border-purple-400 bg-gray-800/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="codigo"
                className="text-purple-300 font-semibold font-mono"
              >
                Código del programa
              </Label>
              <Input
                name="codigo"
                id="codigo"
                type="text"
                placeholder="Ej: CALC-101"
                className="border-2 border-purple-400/50 focus:border-purple-400 bg-gray-800/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-purple-300 font-semibold font-mono">
                Vista previa de colores
              </Label>
              <div
                className="h-16 rounded-lg flex items-center justify-center font-semibold text-sm transition-all duration-300"
                style={{
                  backgroundColor: selectedColors.color,
                  background: `linear-gradient(135deg, ${selectedColors.color}, ${selectedColors.colorbrillo})`,
                  color: selectedColors.colortexto,
                }}
              >
                Vista previa del programa
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="color"
                className="text-purple-300 font-semibold font-mono"
              >
                Color principal
              </Label>
              <div className="flex gap-2 items-center">
                <input
                  name="color"
                  id="color"
                  type="color"
                  value={selectedColors.color}
                  onChange={(e) => handleColorChange("color", e.target.value)}
                  className="w-12 h-10 rounded border-2 border-purple-400 cursor-pointer"
                />
                <Input
                  type="text"
                  value={selectedColors.color}
                  onChange={(e) => handleColorChange("color", e.target.value)}
                  placeholder="#3b82f6"
                  className="border-2 border-purple-400/50 focus:border-purple-400 bg-gray-800/50 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="colorbrillo"
                className="text-purple-300 font-semibold font-mono"
              >
                Color de brillo
              </Label>
              <div className="flex gap-2 items-center">
                <input
                  name="colorbrillo"
                  id="colorbrillo"
                  type="color"
                  value={selectedColors.colorbrillo}
                  onChange={(e) =>
                    handleColorChange("colorbrillo", e.target.value)
                  }
                  className="w-12 h-10 rounded border-2 border-purple-400 cursor-pointer"
                />
                <Input
                  type="text"
                  value={selectedColors.colorbrillo}
                  onChange={(e) =>
                    handleColorChange("colorbrillo", e.target.value)
                  }
                  placeholder="#60a5fa"
                  className="border-2 border-purple-400/50 focus:border-purple-400 bg-gray-800/50 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="colortexto"
                className="text-purple-300 font-semibold font-mono"
              >
                Color del texto
              </Label>
              <div className="flex gap-2 items-center">
                <input
                  name="colortexto"
                  id="colortexto"
                  type="color"
                  value={selectedColors.colortexto}
                  onChange={(e) =>
                    handleColorChange("colortexto", e.target.value)
                  }
                  className="w-12 h-10 rounded border-2 border-purple-400 cursor-pointer"
                />
                <Input
                  type="text"
                  value={selectedColors.colortexto}
                  onChange={(e) =>
                    handleColorChange("colortexto", e.target.value)
                  }
                  placeholder="#ffffff"
                  className="border-2 border-purple-400/50 focus:border-purple-400 bg-gray-800/50 text-white"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="flex-1 border-gray-500 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
              >
                Crear
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
