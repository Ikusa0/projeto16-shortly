import connection from "../databases/postgres.js";

async function findUserByEmail(email) {
  const { rows: user } = await connection.query(`SELECT * FROM users WHERE "email" = $1`, [email]);
  return user[0];
}

async function findUserById(id) {
  const { rows: user } = await connection.query(`SELECT * FROM users WHERE "id" = $1`, [id]);
  return user[0];
}

async function findUserInformationById(id) {
  const { rows: user } = await connection.query(
    `SELECT users."id", users."name", COALESCE(SUM(links."visitCount"), 0) AS "visitCount" 
    FROM users
    LEFT JOIN links
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

async function findRanking() {
  const { rows: ranking } = await connection.query(
    `SELECT users."id", users."name", COUNT(links) AS "linksCount", COALESCE(SUM(links."visitCount"), 0) AS "visitCount" 
     FROM users
     LEFT JOIN links
     ON links."userId" = users."id"
     GROUP BY users."id"
     ORDER BY "visitCount" DESC, users."id" ASC
     LIMIT 10`
  );
  return ranking;
}

async function createUser(user) {
  await connection.query(`INSERT INTO users("name", "email", "password") VALUES ($1, $2, $3)`, Object.values(user));
}

export default { createUser, findUserByEmail, findUserById, findUserInformationById, findRanking };
