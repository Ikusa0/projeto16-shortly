import connection from "../databases/postgres.js";

async function createLink(link) {
  await connection.query(`INSERT INTO links("url", "shortUrl", "userId") VALUES ($1, $2, $3)`, Object.values(link));
}

async function findLinkById(id) {
  const { rows: link } = await connection.query(`SELECT "id", "shortUrl", "url" FROM links WHERE id = $1`, [id]);
  return link[0];
}

async function incrementLinkVisitCount(id) {
  await connection.query(`UPDATE links SET "visitCount"="visitCount"+1 WHERE id = $1`, [id]);
}

async function findLinkByShortUrl(shortUrl) {
  const { rows: link } = await connection.query(`SELECT "id", "shortUrl", "url" FROM links WHERE "shortUrl" = $1`, [
    shortUrl,
  ]);
  return link[0];
}

async function findLinkOwnerById(id) {
  const { rows: owner } = await connection.query(`SELECT "userId" FROM links WHERE "id" = $1`, [id]);
  return owner[0];
}

async function deleteLinkById(id) {
  await connection.query(`DELETE FROM links WHERE "id" = $1`, [id]);
}

export default {
  createLink,
  findLinkById,
  incrementLinkVisitCount,
  findLinkByShortUrl,
  findLinkOwnerById,
  deleteLinkById,
};
