
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
    fecha: Date
    estado: EstadoOrden
    observaciones?: string
    cliente?: Cliente
    conductor?: Conductor
}

export interface CrearOrdenDTO {
    clienteId: number
    fecha: Date
    conductorId: number
    observaciones?: string
}

export interface EditarOrdenDTO {
    clienteId?: number
    conductorId?: number
    fecha?: Date
    estado?: EstadoOrden
    observaciones?: string
}

export interface CrearClienteDTO {
    nombre: string
}

export interface CrearConductorDTO {
    nombre: string
}

export type RespuestaAPI<T> = {
    exitoso: boolean
    datos?: T
    mensaje?: string
    error?: string
}