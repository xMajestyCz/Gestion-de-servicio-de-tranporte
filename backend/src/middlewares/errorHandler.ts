import { Request, Response, NextFunction } from "express";
import { RespuestaAPI } from "../types";

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    console.error(err.stack)
    const esErrorDeNegocio = err.message.startsWith("No se puede")
    const respuesta: RespuestaAPI<null> = {
        exitoso: false,
        error: esErrorDeNegocio ? err.message : "Error interno del servidor",
        mensaje: err.message,
    }
    res.status(esErrorDeNegocio ? 400 : 500).json(respuesta)
}