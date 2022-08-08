import schemas from "../schemas/allSchemas.js";

export default function validateJoi(schema) {
  try {
    if (!schemas[schema]) {
      return (req, res) => res.status(422).send("Error during validation: schema not found.");
    }

    return (req, res, next) => {
      const object = req.body;

      const validate = schemas[schema].validate(object);
      if (validate.error) {
        return res.status(422).send(validate.error.details.map((err) => err.message).join("\n"));
      }

      next();
    };
  } catch (error) {
    console.error("Error while validating schema: ", schema, err.message);
    res.sendStatus(500);
  }
}
