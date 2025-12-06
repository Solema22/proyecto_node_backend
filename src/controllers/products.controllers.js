import {
  serviceGetAllProducts,
  serviceGetProductById,
  serviceCreateProduct,
  serviceDeleteProduct
} from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await serviceGetAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await serviceGetProductById(req.params.id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener producto" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await serviceCreateProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Error al crear producto" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await serviceDeleteProduct(req.params.id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar producto" });
  }
};
