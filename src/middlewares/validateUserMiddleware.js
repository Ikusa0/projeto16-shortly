import { findUserByEmail } from "../databases/dbManager.js";
import { userSchema, newUserSchema } from "../schemas/userSchema.js";
import bcrypt from "bcrypt";

export async function validateNewUser(req, res, next) {
  try {
    const newUser = req.body;

    const validate = newUserSchema.validate(newUser, { abortEarly: false });
    if (validate.error) {
      return res.status(422).send(validate.error.details.map((err) => err.message).join("\n"));
    }

    const emailExists = await findUserByEmail(newUser.email);
    if (emailExists) {
      return res.status(409).send("Email informado já está em uso.");
    }

    next();
  } catch (err) {
    console.error("Error while validating new user", err.message);
    res.sendStatus(500);
  }
}

export async function validateUser(req, res, next) {
  try {
    const user = req.body;

    const validate = userSchema.validate(user, { abortEarly: false });
    if (validate.error) {
      return res.status(422).send(validate.error.details.map((err) => err.message).join("\n"));
    }

    const dbUser = await findUserByEmail(user.email);
    if (!bcrypt.compareSync(user.password, dbUser?.password || "")) {
      return res.status(401).send("E-mail ou Senha inválido.");
    }

    res.locals.user = dbUser;

    next();
  } catch (err) {
    console.error("Error while validating user", err.message);
    res.sendStatus(500);
  }
}
