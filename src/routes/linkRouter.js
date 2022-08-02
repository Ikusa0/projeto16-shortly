import { Router } from "express";
import { shortenLink, getLink, accessLink, deleteLink } from "../controllers/linkController.js";
import { validateLink, validateLinkOwner } from "../middlewares/validateLinkMiddleware.js";
import validateToken from "../middlewares/validateTokenMiddleware.js";

const router = Router();

router.post("/urls/shorten", validateToken, validateLink, shortenLink);
router.get("/urls/:id", getLink);
router.get("/urls/open/:shortUrl", accessLink);
router.delete("/urls/:id", validateToken, validateLinkOwner, deleteLink);

export default router;
