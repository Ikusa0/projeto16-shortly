import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";
import { createLink, findLinkById, findLinkByShortUrl, incrementLinkVisitCount } from "../databases/dbManager.js";

export async function shortenLink(req, res) {
  try {
    const nanoid = customAlphabet(alphanumeric, 10);
    const { userId } = res.locals;
    const { url } = req.body;
    const shortUrl = nanoid();

    const link = { url, shortUrl, userId };
    await createLink(link);

    res.status(201).send({ shortUrl });
  } catch (err) {
    console.error("Error while shortening link", err.message);
    res.sendStatus(500);
  }
}

export async function getLink(req, res) {
  try {
    const { id: linkId } = req.params;

    const link = await findLinkById(linkId);

    res.status(200).send(link);
  } catch (err) {
    console.error("Error while getting link", err.message);
    res.sendStatus(500);
  }
}

export async function accessLink(req, res) {
  try {
    const { shortUrl } = req.params;

    const link = await findLinkByShortUrl(shortUrl);
    if (!link) {
      return res.sendStatus(404);
    }
    await incrementLinkVisitCount(link.id);

    res.redirect(link.url);
  } catch (err) {
    console.error("Error while accessing link", err.message);
    res.sendStatus(500);
  }
}
