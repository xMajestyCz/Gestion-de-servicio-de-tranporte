import { PrismaClient } from "../src/generated/prisma"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"
import "dotenv/config"

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL! })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log("Sembrando datos iniciales...")

    // Clientes
    const clientes = await Promise.all([
        prisma.cliente.upsert({
            where: { id: 1 },
            update: {},
            create: { nombre: "Transportes Andinos S.A." },
        }),
        prisma.cliente.upsert({
            where: { id: 2 },
            update: {},
            create: { nombre: "Logistica del Norte" },
        }),
        prisma.cliente.upsert({
            where: { id: 3 },
            update: {},
            create: { nombre: "Distribuidora Central" },
        }),
    ])

    // Conductores
    const conductores = await Promise.all([
        prisma.conductor.upsert({
            where: { id: 1 },
            update: {},
            create: { nombre: "Carlos Ramirez" },
        }),
        prisma.conductor.upsert({
            where: { id: 2 },
            update: {},
            create: { nombre: "Pedro Suarez" },
        }),
        prisma.conductor.upsert({
            where: { id: 3 },
            update: {},
            create: { nombre: "Andres Morales" },
        }),
    ])

    // Ordenes
    await Promise.all([
        prisma.orden.upsert({
            where: { id: 1 },
            update: {},
            create: {
                clienteId: clientes[0].id,
                conductorId: conductores[0].id,
                fecha: new Date("2026-06-15"),
                estado: "pendiente",
                observaciones: "Entregar en horario de oficina",
            },
        }),
        prisma.orden.upsert({
            where: { id: 2 },
            update: {},
            create: {
                clienteId: clientes[1].id,
                conductorId: conductores[1].id,
                fecha: new Date("2026-06-16"),
                estado: "en_ruta",
            },
        }),
        prisma.orden.upsert({
            where: { id: 3 },
            update: {},
            create: {
                clienteId: clientes[2].id,
                conductorId: conductores[2].id,
                fecha: new Date("2026-06-17"),
                estado: "entregado",
                observaciones: "Fragil, manejar con cuidado",
            },
        }),
        prisma.orden.upsert({
            where: { id: 4 },
            update: {},
            create: {
                clienteId: clientes[0].id,
                conductorId: conductores[2].id,
                fecha: new Date("2026-06-18"),
                estado: "cancelado",
                observaciones: "Cliente cancelo por cambio de direccion",
            },
        }),
    ])

    console.log("Datos iniciales creados correctamente")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })