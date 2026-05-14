import { Router } from "express";
import { router as usersRoutes } from "./users.routes.js";
import { router as productRoutes } from "./products.routes.js";
import { router as noteRoutes } from "./notes.routes.js";

export const router = Router();

router.use("/users", usersRoutes);
router.use("/products", productRoutes);
router.use("/notes", noteRoutes);
