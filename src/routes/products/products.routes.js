import express from "express";
const { Router } = express;
const router = Router();

import authMiddleware from "../../middlewares/auth/auth.middleware.js";
import productsController from "../../controllers/products.controller.js"
const productsControllerMethods = new productsController()

router.get("/", productsControllerMethods.getAll);

router.get("/:id", productsControllerMethods.getById);

router.post("/", productsControllerMethods.saveProduct);

router.put("/:id", productsControllerMethods.updateProduct);

router.delete("/:id", productsControllerMethods.deleteProduct);

export default router;

