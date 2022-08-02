import linkSchema from "../schemas/linkSchema.js";

export default async function validateLink(req, res, next) {
  try {
    const link = req.body;

    const validate = linkSchema.validate(link);
    if (validate.error) {
      return res.status(422).send(validate.error.details.map((err) => err.message).join("\n"));
    }

    next();
  } catch (err) {
    console.error("Error while validating link", err.message);
    res.sendStatus(500);
  }
}
