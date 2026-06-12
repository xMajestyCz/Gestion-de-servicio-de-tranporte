import prisma from "../lib/prisma";
import { CrearConductorDTO } from "../types";

export async function obtenerConductores() {
    return prisma.conductor.findMany({
        orderBy: { nombre: "asc" },
    });
}

export async function obtenerConductorPorId(id: number) {
    return prisma.conductor.findUnique({
        where: { id },
    });
}

export async function crearConductor(datos: CrearConductorDTO) {
    return prisma.conductor.create({
        data: datos,
    });
}