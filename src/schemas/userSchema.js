import joiBase from "joi";
import joiPassword from "joi-password";

joi = joiBase.extend(joiPassword);

const userSchema = joi.object({
  name: joi.string().trim().required(),
  email: joi.string().email().trim().required(),
  password: joi
    .string()
    .minOfSpecialCharacters(2)
    .minOfLowercase(2)
    .minOfUppercase(2)
    .minOfNumeric(2)
    .required()
    .messages({
      "password.minOfUppercase": "{#label} deve conter ao menos {#min} caracteres em caixa alta",
      "password.minOfSpecialCharacters": "{#label} deve conter ao menos {#min} caracteres especiais",
      "password.minOfLowercase": "{#label} deve conter ao menos {#min} caracteres em caixa baixa",
      "password.minOfNumeric": "{#label} deve conter ao menos {#min} caracteres numéricos",
    }),
});
