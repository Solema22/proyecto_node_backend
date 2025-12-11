// src/routes/products.routes.js
import express from "express";
import {
    addProduct,
    deleteProduct,
    getAllProducts,
    getProductById
} from "../controllers/products.controllers.js";

import { authentication } from "../midleware/authentication.js";

const routes = express.Router();

// ----- RUTAS DE PRODUCTOS -----
// GET todos los productos → /api/products
routes.get("/", authentication, getAllProducts);

// GET producto por id → /api/products/:id
routes.get("/:id", authentication, getProductById);

// POST agregar producto → /api/products
routes.post("/", authentication, addProduct);

// DELETE producto por id → /api/products/:id
routes.delete("/:id", authentication, deleteProduct);

export default routes;
