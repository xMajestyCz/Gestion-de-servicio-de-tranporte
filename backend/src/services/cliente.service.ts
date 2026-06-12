import prisma from "../lib/prisma";
import { CrearClienteDTO } from "../types";

export async function obtenerClientes() {
    return prisma.cliente.findMany({
        orderBy: { nombre: "asc" },
    });
}

export async function obtenerClientePorId(id: number) {
    return prisma.cliente.findUnique({
        where: { id },
    });
}

export async function crearCliente(datos: CrearClienteDTO) {
    return prisma.cliente.create({
        data: datos,
    });
}