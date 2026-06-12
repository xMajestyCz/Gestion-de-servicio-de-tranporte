import prisma from "../lib/prisma";
import { CrearOrdenDTO, EditarOrdenDTO, EstadoOrden } from "../types";
import { EstadoOrden as PrismaEstadoOrden } from "../generated/prisma";

const transicionesValidas: Record<string, string[]> = {
    pendiente: ["en_ruta", "cancelado"],
    en_ruta: ["entregado", "cancelado"],
    entregado: ["cancelado"],
    cancelado: [],
}


export async function obtenerOrdenes(estado?: string, conductorId?: number) {
    return prisma.orden.findMany({
        where: {
            ...(estado && { estado: estado as PrismaEstadoOrden }),
            ...(conductorId && { conductorId }),
        },
        include: {
            cliente: true,
            conductor: true,
        },
        orderBy: { creadoEn: "desc" },
    });
}

export async function obtenerOrdenPorId(id: number) {
    return prisma.orden.findUnique({
        where: { id },
        include: {
            cliente: true,
            conductor: true,
        },
    });
}

export async function crearOrden(datos: CrearOrdenDTO) {
    return prisma.orden.create({
        data: {
            fecha: datos.fecha,
            observaciones: datos.observaciones,
            cliente: { connect: { id: datos.clienteId } },
            conductor: { connect: { id: datos.conductorId } },
        },
        include: {
            cliente: true,
            conductor: true,
        },
    });
}

export async function editarOrden(id: number, datos: EditarOrdenDTO) {
    const ordenActual = await prisma.orden.findUnique({ where: { id } })


    if (datos.estado && ordenActual) {
        const transiciones = transicionesValidas[ordenActual.estado]
        if (!transiciones.includes(datos.estado)) {
            const etiquetas: Record<string, string> = {
                pendiente: "Pendiente",
                en_ruta: "En ruta",
                entregado: "Entregado",
                cancelado: "Cancelado",
            }

            throw new Error(
                `No se puede cambiar el estado de "${etiquetas[ordenActual.estado]}" a "${etiquetas[datos.estado]}"`
            )
        }
    }

    return prisma.orden.update({
        where: { id },
        data: {
            ...(datos.fecha && { fecha: new Date(datos.fecha) }),
            ...(datos.observaciones !== undefined && { observaciones: datos.observaciones }),
            ...(datos.estado && { estado: datos.estado as PrismaEstadoOrden }),
            ...(datos.clienteId && { cliente: { connect: { id: datos.clienteId } } }),
            ...(datos.conductorId && { conductor: { connect: { id: datos.conductorId } } }),
        },
        include: {
            cliente: true,
            conductor: true,
        },
    })
}

export async function cancelarOrden(id: number) {
    return prisma.orden.update({
        where: { id },
        data: { estado: PrismaEstadoOrden.cancelado },
        include: {
            cliente: true,
            conductor: true,
        },
    });
}