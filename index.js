import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

import rutasLog from "./src/routes/auth.routes.js";
import rutasProducts from "./src/routes/products.routes.js";

// Cargar variables del .env
configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

// CONFIGURACIÓN CORS 
const corsConfig = {
    origin: ["http://localhost:5173", "https://midominio.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Length"],
    credentials: true,
    maxAge: 600,
    optionsSuccessStatus: 204
};

app.use(cors(corsConfig));
app.use(express.json());

// RUTAS NO PROTEGIDAS
app.use("/api", rutasLog); // login


app.use((req, res, next) => {
    console.log(`Datos received at: ${req.method} ${req.url}`);
    next();
});


app.use("/api/products", rutasProducts);

// RUTA 404
app.use((req, res) => {
    res.status(404).send("Recurso no encontrado o ruta inválida");
});


app.use((err, req, res, next) => {
    console.error(" ERROR INTERNO:", err.message);
    res.status(500).json({
        message: "Error interno del servidor",
        error: err.message
    });
});

// NECESARIO PARA VERCEL 
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}

//  ESTO ES OBLIGATORIO PARA VERCEL
export default app;
