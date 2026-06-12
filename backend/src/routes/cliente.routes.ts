import { Router } from "express";
import * as ClienteController from "../controllers/cliente.controller";

const router = Router();

router.get("/", ClienteController.obtenerClientes);
router.get("/:id", ClienteController.obtenerClientePorId);
router.post("/", ClienteController.crearCliente);

export default router;