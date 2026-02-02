import { Router } from "express";
import { register, users } from "../controllers/auth.controller";

const router = Router();
router.post("/register", register);
router.get("/", users);

export default router;
