import type { EstadoOrden } from "../types"

interface BadgeProps {
    estado: EstadoOrden
}

const estilos: Record<EstadoOrden, string> = {
    pendiente: "bg-yellow-100 text-yellow-800",
    en_ruta: "bg-blue-100 text-blue-800",
    entregado: "bg-green-100 text-green-800",
    cancelado: "bg-red-100 text-red-800",
}

const etiquetas: Record<EstadoOrden, string> = {
    pendiente: "Pendiente",
    en_ruta: "En ruta",
    entregado: "Entregado",
    cancelado: "Cancelado",
}

export default function Badge({ estado }: BadgeProps) {
    return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${estilos[estado]}`}>
            {etiquetas[estado]}
        </span>
    )
}