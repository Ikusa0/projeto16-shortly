import connection from "./postgres.js";

export async function findUserByEmail(email) {
  const { rows: user } = await connection.query(`SELECT * FROM users WHERE "email" = $1`, [email]);
  return user[0];
}

export async function findUserById(id) {
  const { rows: user } = await connection.query(`SELECT * FROM users WHERE "id" = $1`, [id]);
  return user[0];
}

export async function findUserInformationById(id) {
  const { rows: user } = await connection.query(
    `SELECT users."id", users."name", SUM(links."visitCount") AS "visitCount" 
     FROM users
     JOIN links
     ON links."userId" = users."id"
     WHERE users."id" = $1
     GROUP BY users."id"`,
    [id]
  );
  const { rows: shortenedUrls } = await connection.query(
    `SELECT "id", "shortUrl", "url", "visitCount" 
     FROM links 
     WHERE "userId" = $1
     ORDER BY "id"`,
    [id]
  );
  user[0].shortenedUrls = shortenedUrls;
  return user[0];
}

export async function findRanking() {
  const { rows: ranking } = await connection.query(
    `SELECT users."id", users."name", COALESCE(SUM(links."visitCount"), 0) AS "visitCount" 
     FROM users
     LEFT JOIN links
     ON links."userId" = users."id"
     GROUP BY users."id"
     ORDER BY "visitCount" DESC, users."id" ASC
     LIMIT 10`
  );
  return ranking;
}

export async function createUser(user) {
  await connection.query(`INSERT INTO users("name", "email", "password") VALUES ($1, $2, $3)`, Object.values(user));
}

export async function createLink(link) {
  await connection.query(`INSERT INTO links("url", "shortUrl", "userId") VALUES ($1, $2, $3)`, Object.values(link));
}

export async function findLinkById(id) {
  const { rows: link } = await connection.query(`SELECT "id", "shortUrl", "url" FROM links WHERE id = $1`, [id]);
  return link[0];
}

export async function incrementLinkVisitCount(id) {
  await connection.query(`UPDATE links SET "visitCount"="visitCount"+1 WHERE id = $1`, [id]);
}

export async function findLinkByShortUrl(shortUrl) {
  const { rows: link } = await connection.query(`SELECT "id", "shortUrl", "url" FROM links WHERE "shortUrl" = $1`, [
    shortUrl,
  ]);
  return link[0];
}

export async function findLinkOwnerById(id) {
  const { rows: owner } = await connection.query(`SELECT "userId" FROM links WHERE "id" = $1`, [id]);
  return owner[0];
}

export async function deleteLinkById(id) {
  await connection.query(`DELETE FROM links WHERE "id" = $1`, [id]);
}
