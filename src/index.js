import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import authRouter from "./routes/authRouter.js";
import linkRouter from "./routes/linkRouter.js";

const app = express();
app.use(cors(), json());
app.use(authRouter);
app.use(linkRouter);

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));
