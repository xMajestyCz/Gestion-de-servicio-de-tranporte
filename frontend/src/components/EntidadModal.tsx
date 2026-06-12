import { useState } from "react"
import Button from "./ui/Button"

interface EntidadModalProps {
    titulo: string
    placeholder: string
    onGuardar: (nombre: string) => void
    onCerrar: () => void
}

export default function EntidadModal({
    titulo,
    placeholder,
    onGuardar,
    onCerrar,
}: EntidadModalProps) {
    const [nombre, setNombre] = useState("")

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-6">
                <h2 className="text-lg font-semibold mb-4">{titulo}</h2>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder={placeholder}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
                />
                <div className="flex justify-end gap-3">
                    <Button onClick={onCerrar} texto="Cancelar" className="hover:bg-gray-300 bg-gray-200 text-black-600"></Button>
                    <Button onClick={() => onGuardar(nombre)} disabled={!nombre.trim()}texto="Guardar" className="disabled:bg-gray-300 disabled:cursor-not-allowed text-white"></Button>
                </div>
            </div>
        </div>
    )
}