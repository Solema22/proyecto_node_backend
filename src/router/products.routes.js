import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from "../controllers/products.controllers.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// GET todos los productos
router.get("/", getAllProducts);

// GET producto por ID
router.get("/:id", getProductById);

// POST crear producto (protegido)
router.post("/create", authMiddleware, createProduct);

// DELETE eliminar producto (protegido)
router.delete("/:id", authMiddleware, deleteProduct);

export default router;
