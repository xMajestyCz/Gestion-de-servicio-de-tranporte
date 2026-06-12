import { Request, Response } from "express";
import * as OrdenService from "../services/orden.service";
import { CrearOrdenDTO, EditarOrdenDTO, RespuestaAPI } from "../types";

export async function obtenerOrdenes(req: Request, res: Response): Promise<void> {
    const estado = req.query.estado as string | undefined;
    const conductorId = req.query.conductorId ? parseInt(req.query.conductorId as string) : undefined;

    const ordenes = await OrdenService.obtenerOrdenes(estado, conductorId);
    const respuesta: RespuestaAPI<typeof ordenes> = {
        exitoso: true,
        datos: ordenes,
    };
    res.json(respuesta);
}

export async function obtenerOrdenPorId(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params['id'] as string)
    const orden = await OrdenService.obtenerOrdenPorId(id);

    if (!orden) {
        const respuesta: RespuestaAPI<null> = {
            exitoso: false,
            mensaje: "Orden no encontrada",
        };
        res.status(404).json(respuesta);
        return;
    }

    const respuesta: RespuestaAPI<typeof orden> = {
        exitoso: true,
        datos: orden,
    };
    res.json(respuesta);
}

export async function crearOrden(req: Request, res: Response): Promise<void> {
    const body: CrearOrdenDTO = req.body;
    const nuevaOrden = await OrdenService.crearOrden(body);

    const respuesta: RespuestaAPI<typeof nuevaOrden> = {
        exitoso: true,
        datos: nuevaOrden,
        mensaje: "Orden creada con éxito",
    };
    res.status(201).json(respuesta);
}

export async function editarOrden(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params['id'] as string)
    const ordenExistente = await OrdenService.obtenerOrdenPorId(id);

    if (!ordenExistente) {
        const respuesta: RespuestaAPI<null> = {
            exitoso: false,
            mensaje: "Orden no encontrada",
        };
        res.status(404).json(respuesta);
        return;
    }

    const body: EditarOrdenDTO = req.body;
    const ordenActualizada = await OrdenService.editarOrden(id, body);

    const respuesta: RespuestaAPI<typeof ordenActualizada> = {
        exitoso: true,
        datos: ordenActualizada,
        mensaje: "Orden actualizada con éxito",
    };
    res.json(respuesta);
}

export async function cancelarOrden(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params['id'] as string)
    const ordenExistente = await OrdenService.obtenerOrdenPorId(id);

    if (!ordenExistente) {
        const respuesta: RespuestaAPI<null> = {
            exitoso: false,
            mensaje: "Orden no encontrada",
        };
        res.status(404).json(respuesta);
        return;
    }

    const ordenCancelada = await OrdenService.cancelarOrden(id);

    const respuesta: RespuestaAPI<typeof ordenCancelada> = {
        exitoso: true,
        datos: ordenCancelada,
        mensaje: "Orden cancelada con éxito",
    };
    res.json(respuesta);
}