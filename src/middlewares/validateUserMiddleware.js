import userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

export async function validateNewUser(req, res, next) {
  try {
    const newUser = req.body;

    const emailExists = await userRepository.findUserByEmail(newUser.email);
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

    const dbUser = await userRepository.findUserByEmail(user.email);
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

export async function validateUserExistence(req, res, next) {
  try {
    const { userId } = res.locals;

    const validate = await userRepository.findUserById(userId);
    if (!validate) {
      return res.status(404).send("User not found.");
    }

    next();
  } catch (err) {
    console.error("Error while validating user existence", err.message);
    res.sendStatus(500);
  }
}
