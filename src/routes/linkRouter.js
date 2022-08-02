import { Router } from "express";
import { shortenLink, getLink } from "../controllers/linkController.js";
import validateToken from "../middlewares/validateTokenMiddleware.js";

const router = Router();

router.post("/urls/shorten", validateToken, shortenLink);
router.get("/urls/:id", getLink);
router.get("/urls/open/:shortUrl");
router.delete("/urls/:id");

export default router;
