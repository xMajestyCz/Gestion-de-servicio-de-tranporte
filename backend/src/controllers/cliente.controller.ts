import { Request, Response } from "express";
import * as ClienteService from "../services/cliente.service";
import { CrearClienteDTO, RespuestaAPI } from "../types";

export async function obtenerClientes(req: Request, res: Response): Promise<void> {
    const clientes = await ClienteService.obtenerClientes();
    const respuesta: RespuestaAPI<typeof clientes> = {
        exitoso: true,
        datos: clientes,
    };
    res.json(respuesta);
}

export async function obtenerClientePorId(req: Request, res: Response): Promise<void> {
    const cliente = await ClienteService.obtenerClientePorId(parseInt(req.params['id'] as string));

    if (!cliente) {
        const respuesta: RespuestaAPI<null> = {
            exitoso: false,
            mensaje: "Cliente no encontrado",
        };
        res.status(404).json(respuesta);
        return;
    }

    const respuesta: RespuestaAPI<typeof cliente> = {
        exitoso: true,
        datos: cliente,
    };
    res.json(respuesta);
}

export async function crearCliente(req: Request, res: Response): Promise<void> {
    console.log("Datos recibidos:", req.body)
    const body: CrearClienteDTO = req.body;
    const nuevoCliente = await ClienteService.crearCliente(body);

    const respuesta: RespuestaAPI<typeof nuevoCliente> = {
        exitoso: true,
        datos: nuevoCliente,
        mensaje: "Cliente creado con éxito",
    };
    res.status(201).json(respuesta);
}