import { linkSchema } from "./linkSchema.js";
import { newUserSchema, userSchema } from "./userSchema.js";

export default { "create_link": linkSchema, "signup": newUserSchema, "login":userSchema };
