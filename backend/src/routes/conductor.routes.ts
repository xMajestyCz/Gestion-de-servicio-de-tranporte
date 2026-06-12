import { Router } from "express";
import * as ConductorController from "../controllers/conductor.controller";

const router = Router();

router.get("/", ConductorController.obtenerConductores);
router.get("/:id", ConductorController.obtenerConductorPorId);
router.post("/", ConductorController.crearConductor);

export default router;