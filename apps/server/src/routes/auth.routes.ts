import express, { Router } from "express";
import { accountExists, authenticate } from "../middlewares/index";
import { login, profile, register, update } from "../controllers/auth";
import { validateData } from "../middlewares/errorMiddleware";
import { loginSchema, registerSchema } from "../utils/logger";

const router: Router = express.Router();

router.post("/register", validateData(registerSchema), register);

router.post("/login", validateData(loginSchema), login);

router.get("/profile", authenticate, profile);

router.post("/update", authenticate, accountExists, update);

export default router;
