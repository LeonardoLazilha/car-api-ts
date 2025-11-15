import express from "express";
import carRoutes from "./routes/car-routes";
import { setupSwagger } from "./config/swagger";


const app = express();

app.use(express.json());

app.use("/cars", carRoutes);

setupSwagger(app)

export default app;