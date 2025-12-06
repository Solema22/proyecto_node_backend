import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import productsRouter from "./src/router/products.routes.js";
import authRouter from "./src/router/auth.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas principales
app.use("/api/products", productsRouter);
app.use("/auth", authRouter);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API Proyecto Final funcionando correctamente 🚀");
});

// Error 404
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Ruta no encontrada o inválida",
  });
});

// Error 500
app.use((err, req, res, next) => {
  console.error("Error interno:", err);
  res.status(500).json({
    status: 500,
    message: "Error interno del servidor",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
