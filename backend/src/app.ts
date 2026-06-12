import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./middlewares/errorHandler";
import ordenRoutes from "./routes/orden.routes";
import clienteRoutes from "./routes/cliente.routes";
import conductorRoutes from "./routes/conductor.routes";

const app = express();
const PORT = process.env.PORT ?? 3000;

// Middlewares globales
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/ordenes", ordenRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/conductores", conductorRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});