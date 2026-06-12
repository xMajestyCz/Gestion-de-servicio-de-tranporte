import { Router } from "express";
import * as OrdenController from "../controllers/orden.controller";

const router = Router();

router.get("/", OrdenController.obtenerOrdenes);
router.get("/:id", OrdenController.obtenerOrdenPorId);
router.post("/", OrdenController.crearOrden);
router.patch("/:id", OrdenController.editarOrden);
router.patch("/:id/cancelar", OrdenController.cancelarOrden);

export default router;