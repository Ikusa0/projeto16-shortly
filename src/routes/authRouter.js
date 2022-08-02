import { Router } from "express";
import { validateNewUser, validateUser, validateUserExistence } from "../middlewares/validateUserMiddleware.js";
import validateToken from "../middlewares/validateTokenMiddleware.js";
import { registerUser, logInUser, getUserInformation, getRanking } from "../controllers/authController.js";

const router = Router();

router.post("/signup", validateNewUser, registerUser);
router.post("/signin", validateUser, logInUser);
router.get("/users/me", validateToken, validateUserExistence, getUserInformation);
router.get("/ranking", getRanking);

export default router;
