import connection from "./postgres.js";

export async function findUserByEmail(email) {
  const { rows: user } = await connection.query("SELECT * FROM users WHERE email = $1", [email]);
  return user[0];
}

export async function createUser(user) {
  await connection.query("INSERT INTO users(name, email, password) VALUES ($1, $2, $3)", Object.values(user));
}

export async function createLink(link) {
  await connection.query(`INSERT INTO links(url, "shortUrl", "userId") VALUES ($1, $2, $3)`, Object.values(link));
}

export async function findLinkById(id) {
  const { rows: link } = await connection.query(`SELECT id, "shortUrl", url FROM links WHERE id = $1`, [id]);
  return link[0];
}
