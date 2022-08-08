import { Router } from "express";
import { shortenLink, getLink, accessLink, deleteLink } from "../controllers/linkController.js";
import { validateUserExistence } from "../middlewares/validateUserMiddleware.js";
import { validateLinkOwner } from "../middlewares/validateLinkMiddleware.js";
import validateToken from "../middlewares/validateTokenMiddleware.js";
import validateJoi from "../middlewares/validateJoiMiddleware.js";

const router = Router();

router.post("/urls/shorten", validateToken, validateUserExistence, validateJoi("create_link"), shortenLink);
router.get("/urls/:id", getLink);
router.get("/urls/open/:shortUrl", accessLink);
router.delete("/urls/:id", validateToken, validateUserExistence, validateLinkOwner, deleteLink);

export default router;
