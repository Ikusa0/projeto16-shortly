import linkRepository from "../repositories/linkRepository.js";

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
