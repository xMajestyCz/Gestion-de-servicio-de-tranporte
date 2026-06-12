export type EstadoOrden = "pendiente" | "en_ruta" | "entregado" | "cancelado"

export interface Cliente {
    id: number
    nombre: string
}

export interface Conductor {
    id: number
    nombre: string
}

export interface Orden {
    id: number
    clienteId: number
    conductorId: number
    fecha: string
    estado: EstadoOrden
    observaciones?: string
    creadoEn: string
    actualizadoEn: string
    cliente: Cliente
    conductor: Conductor
}

export interface CrearOrdenDTO {
    clienteId: number
    conductorId: number
    fecha: string
    observaciones?: string
}

export interface EditarOrdenDTO {
    clienteId?: number
    conductorId?: number
    fecha?: string
    estado?: EstadoOrden
    observaciones?: string
}

export type RespuestaAPI<T> = {
    exitoso: boolean
    datos?: T
    mensaje?: string
    error?: string
}