import { useEffect, useState } from "react"
import type { Cliente, Conductor, CrearOrdenDTO, EditarOrdenDTO, EstadoOrden, Orden } from "../types"
import Button from "./ui/Button"

interface OrdenModalProps {
    orden?: Orden
    clientes: Cliente[]
    conductores: Conductor[]
    onGuardar: (datos: CrearOrdenDTO | EditarOrdenDTO) => void
    onCerrar: () => void
    error?: string
}

const estados: { valor: EstadoOrden, etiqueta: string }[] = [
    { valor: "pendiente", etiqueta: "Pendiente" },
    { valor: "en_ruta", etiqueta: "En ruta" },
    { valor: "entregado", etiqueta: "Entregado" },
    { valor: "cancelado", etiqueta: "Cancelado" },
]

export default function OrdenModal({
    orden,
    clientes,
    conductores,
    onGuardar,
    onCerrar,
    error
}: OrdenModalProps) {
    const esEdicion = !!orden

    const [clienteId, setClienteId] = useState<string>("")
    const [conductorId, setConductorId] = useState<string>("")
    const [fecha, setFecha] = useState<string>("")
    const [estado, setEstado] = useState<EstadoOrden>("pendiente")
    const [observaciones, setObservaciones] = useState<string>("")

    useEffect(() => {
        if (orden) {
            setClienteId(String(orden.clienteId))
            setConductorId(String(orden.conductorId))
            setFecha(orden.fecha.split("T")[0])
            setEstado(orden.estado)
            setObservaciones(orden.observaciones ?? "")
        }
    }, [orden])

    function handleSubmit() {
        if (!clienteId || !conductorId || !fecha) return

        if (esEdicion) {
            const datos: EditarOrdenDTO = {
                clienteId: parseInt(clienteId),
                conductorId: parseInt(conductorId),
                fecha: new Date(fecha).toISOString(),
                estado,
                observaciones: observaciones || undefined,
            }
            onGuardar(datos)
        } else {
            const datos: CrearOrdenDTO = {
                clienteId: parseInt(clienteId),
                conductorId: parseInt(conductorId),
                fecha: new Date(fecha).toISOString(),
                observaciones: observaciones || undefined,
            }
            onGuardar(datos)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
                <h2 className="text-lg font-semibold mb-4">
                    {esEdicion ? "Editar orden" : "Nueva orden"}
                </h2>

                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Cliente
                        </label>
                        <select
                            value={clienteId}
                            onChange={(e) => setClienteId(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Selecciona un cliente</option>
                            {clientes.map((c) => (
                                <option key={c.id} value={String(c.id)}>
                                    {c.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Conductor
                        </label>
                        <select
                            value={conductorId}
                            onChange={(e) => setConductorId(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Selecciona un conductor</option>
                            {conductores.map((c) => (
                                <option key={c.id} value={String(c.id)}>
                                    {c.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Fecha
                        </label>
                        <input
                            type="date"
                            value={fecha}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => setFecha(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {esEdicion && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Estado
                            </label>
                            <select
                                value={estado}
                                onChange={(e) => setEstado(e.target.value as EstadoOrden)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {estados.map((e) => (
                                    <option key={e.valor} value={e.valor}>
                                        {e.etiqueta}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Observaciones
                        </label>
                        <textarea
                            value={observaciones}
                            onChange={(e) => setObservaciones(e.target.value)}
                            rows={3}
                            maxLength={200}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32"
                            placeholder="Opcional"
                        />
                    </div>
                </div>
                {error && (
                    <div className="px-4 py-3 bg-red-50 text-red-700 rounded-md text-sm mb-2">
                        {error}
                    </div>
                )}
                <div className="flex justify-end gap-3 mt-6">
                    <Button onClick={onCerrar} className="bg-gray-200 hover:bg-gray-300" texto="Cancelar"></Button>
                    <Button onClick={handleSubmit}
                        disabled={!clienteId || !conductorId || !fecha} className="text-white disabled:bg-gray-300 disabled:cursor-not-allowed " texto={`${esEdicion ? "Guardar cambios" : "Crear orden"}`}></Button>
                </div>
            </div>
        </div>
    )
}