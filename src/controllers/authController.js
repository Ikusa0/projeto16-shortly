import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser } from "../databases/dbManager.js";

export async function registerUser(req, res) {
  try {
    const newUser = req.body;

    const hashedPassword = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hashedPassword;

    delete newUser.confirmPassword;
    await createUser(newUser);

    res.sendStatus(201);
  } catch (err) {
    console.error("Error while registering user", err.message);
    res.sendStatus(500);
  }
}

export function logInUser(req, res) {
  try {
    const { user } = res.locals;

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).send(token);
  } catch (err) {
    console.error("Error while logging in user", err.message);
    res.sendStatus(500);
  }
}
