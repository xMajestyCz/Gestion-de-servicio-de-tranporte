import type { Orden } from "../types"
import Badge from "./Badge"

interface OrdenTablaProps {
    ordenes: Orden[]
    onEditar: (orden: Orden) => void
    onCancelar: (id: number) => void
}

export default function OrdenTabla({ ordenes, onEditar, onCancelar }: OrdenTablaProps) {
    if (ordenes.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                No hay órdenes registradas
            </div>
        )
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                    <tr>
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Cliente</th>
                        <th className="px-4 py-3">Conductor</th>
                        <th className="px-4 py-3">Fecha</th>
                        <th className="px-4 py-3">Estado</th>
                        <th className="px-4 py-3">Observaciones</th>
                        <th className="px-4 py-3">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {ordenes.map((orden) => (
                        <tr key={orden.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-gray-500">{orden.id}</td>
                            <td className="px-4 py-3 font-medium">{orden.cliente.nombre}</td>
                            <td className="px-4 py-3">{orden.conductor.nombre}</td>
                            <td className="px-4 py-3">
                                {new Date(orden.fecha).toLocaleDateString("es-CO")}
                            </td>
                            <td className="px-4 py-3">
                                <Badge estado={orden.estado} />
                            </td>
                            <td className="px-4 py-3 text-gray-500 max-w-60 text-ellipsis line-clamp-5">
                                {orden.observaciones ?? "—"}
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => onEditar(orden)}
                                        disabled={orden.estado === "cancelado"}
                                        className="text-blue-600 hover:underline disabled:text-gray-300 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => onCancelar(orden.id)}
                                        disabled={orden.estado === "cancelado"}
                                        className="text-red-600 hover:underline disabled:text-gray-300 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}