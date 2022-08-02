import connection from "./postgres.js";
import dayjs from "dayjs";

export async function findUserByEmail(email) {
  const { rows: user } = await connection.query("SELECT * FROM users WHERE email = $1", [email]);
  return user[0];
}

export async function createUser(user) {
  await connection.query("INSERT INTO users(name, email, password) VALUES ($1, $2, $3)", Object.values(user));
}
