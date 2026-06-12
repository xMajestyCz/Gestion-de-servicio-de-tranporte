import type { CrearOrdenDTO, EditarOrdenDTO, Orden, Cliente, Conductor, RespuestaAPI } from "../types"

const BASE_URL = "http://localhost:3000/api"

export async function obtenerOrdenes(estado?: string, conductorId?: number): Promise<Orden[]> {
    const params = new URLSearchParams()
    if (estado) params.append("estado", estado)
    if (conductorId) params.append("conductorId", String(conductorId))

    const url = `${BASE_URL}/ordenes${params.toString() ? `?${params}` : ""}`
    const res = await fetch(url)
    const data: RespuestaAPI<Orden[]> = await res.json()
    return data.datos ?? []
}

export async function crearOrden(body: CrearOrdenDTO): Promise<Orden> {
    const res = await fetch(`${BASE_URL}/ordenes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
    const data: RespuestaAPI<Orden> = await res.json()
    if (!data.exitoso) throw new Error(data.mensaje ?? "Error al crear orden")
    return data.datos!
}

export async function editarOrden(id: number, body: EditarOrdenDTO): Promise<Orden> {
    const res = await fetch(`${BASE_URL}/ordenes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
    const data: RespuestaAPI<Orden> = await res.json()
    if (!data.exitoso) throw new Error(data.mensaje ?? "Error al editar orden")
    return data.datos!
}

export async function cancelarOrden(id: number): Promise<Orden> {
    const res = await fetch(`${BASE_URL}/ordenes/${id}/cancelar`, {
        method: "PATCH",
    })
    const data: RespuestaAPI<Orden> = await res.json()
    if (!data.exitoso) throw new Error(data.mensaje ?? "Error al cancelar orden")
    return data.datos!
}

export async function crearCliente(nombre: string): Promise<Cliente> {
    const res = await fetch(`${BASE_URL}/clientes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre })
    })
    const data: RespuestaAPI<Cliente> = await res.json()
    if (!data.exitoso) throw new Error(data.mensaje ?? "Error al crear cliente")
    return data.datos!
}

export async function crearConductor(nombre: string): Promise<Conductor> {
    const res = await fetch(`${BASE_URL}/conductores`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre })
    })
    const data: RespuestaAPI<Conductor> = await res.json()
    if (!data.exitoso) throw new Error(data.mensaje ?? "Error al crear conductor")
    return data.datos!
}

export async function obtenerClientes(): Promise<Cliente[]> {
    const res = await fetch(`${BASE_URL}/clientes`)
    const data: RespuestaAPI<Cliente[]> = await res.json()
    return data.datos ?? []
}

export async function obtenerConductores(): Promise<Conductor[]> {
    const res = await fetch(`${BASE_URL}/conductores`)
    const data: RespuestaAPI<Conductor[]> = await res.json()
    return data.datos ?? []
}