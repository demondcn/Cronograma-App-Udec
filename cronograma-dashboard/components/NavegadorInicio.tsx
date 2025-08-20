import React from 'react';
import { Calendar } from "lucide-react"
export const Navegador = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    CRONOGRAMA DASHBOARD
                </h1>
                <p className="text-cyan-300 mt-1 font-mono">Control y gestión de salas académicas</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-cyan-400 bg-gray-900/50 px-4 py-2 rounded-lg border border-cyan-500/30">
                <Calendar className="w-4 h-4" />
                <span className="font-mono">SEMESTRE 2025-1</span>
            </div>
        </div>
    );
}


