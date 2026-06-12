import type { Conductor, EstadoOrden } from "../types"

interface FiltroOrdenesProps {
    conductores: Conductor[]
    estadoSeleccionado: string
    conductorSeleccionado: string
    onEstadoChange: (estado: string) => void
    onConductorChange: (conductorId: string) => void
}

const estados: { valor: string, etiqueta: string }[] = [
    { valor: "", etiqueta: "Todos los estados" },
    { valor: "pendiente", etiqueta: "Pendiente" },
    { valor: "en_ruta", etiqueta: "En ruta" },
    { valor: "entregado", etiqueta: "Entregado" },
    { valor: "cancelado", etiqueta: "Cancelado" },
]

export default function FiltroOrdenes({
    conductores,
    estadoSeleccionado,
    conductorSeleccionado,
    onEstadoChange,
    onConductorChange,
}: FiltroOrdenesProps) {
    return (
        <div className="flex gap-4 mb-6">
            <select
                value={estadoSeleccionado}
                onChange={(e) => onEstadoChange(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {estados.map((e) => (
                    <option key={e.valor} value={e.valor}>
                        {e.etiqueta}
                    </option>
                ))}
            </select>

            <select
                value={conductorSeleccionado}
                onChange={(e) => onConductorChange(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Todos los conductores</option>
                {conductores.map((c) => (
                    <option key={c.id} value={String(c.id)}>
                        {c.nombre}
                    </option>
                ))}
            </select>
        </div>
    )
}