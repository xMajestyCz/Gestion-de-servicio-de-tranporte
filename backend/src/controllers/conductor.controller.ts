import { Request, Response } from "express";
import * as ConductorService from "../services/conductor.service";
import { CrearConductorDTO, RespuestaAPI } from "../types";

export async function obtenerConductores(req: Request, res: Response): Promise<void> {
    const conductores = await ConductorService.obtenerConductores();
    const respuesta: RespuestaAPI<typeof conductores> = {
        exitoso: true,
        datos: conductores,
    };
    res.json(respuesta);
}

export async function obtenerConductorPorId(req: Request, res: Response): Promise<void> {
    const conductor = await ConductorService.obtenerConductorPorId(parseInt(req.params['id'] as string));

    if (!conductor) {
        const respuesta: RespuestaAPI<null> = {
            exitoso: false,
            mensaje: "Conductor no encontrado",
        };
        res.status(404).json(respuesta);
        return;
    }

    const respuesta: RespuestaAPI<typeof conductor> = {
        exitoso: true,
        datos: conductor,
    };
    res.json(respuesta);
}

export async function crearConductor(req: Request, res: Response): Promise<void> {
    const body: CrearConductorDTO = req.body;
    const nuevoConductor = await ConductorService.crearConductor(body);

    const respuesta: RespuestaAPI<typeof nuevoConductor> = {
        exitoso: true,
        datos: nuevoConductor,
        mensaje: "Conductor creado con éxito",
    };
    res.status(201).json(respuesta);
}