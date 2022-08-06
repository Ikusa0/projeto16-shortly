import { linkSchema } from "../schemas/linkSchema.js";
import linkRepository from "../repositories/linkRepository.js";

export async function validateLink(req, res, next) {
  try {
    const link = req.body;

    const validate = linkSchema.validate(link);
    if (validate.error) {
      return res.status(422).send(validate.error.details.map((err) => err.message).join("\n"));
    }

    next();
  } catch (err) {
    console.error("Error while validating link", err.message);
    res.sendStatus(500);
  }
}

export async function validateLinkOwner(req, res, next) {
  try {
    const { id: linkId } = req.params;

    const { userId } = res.locals;
    try {
      const { userId: owner } = await linkRepository.findLinkOwnerById(linkId);
      if (userId !== owner) {
        return res.sendStatus(401);
      }
    } catch {
      return res.sendStatus(404);
    }

    next();
  } catch (err) {
    console.error("Error while validating link owner", err.message);
    res.sendStatus(500);
  }
}
