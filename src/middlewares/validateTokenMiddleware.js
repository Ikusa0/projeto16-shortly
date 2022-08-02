import jwt from "jsonwebtoken";

export default function validateToken(req, res, next) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).send("Token is empty.");
    }

    try {
      const { id: userId } = jwt.verify(token, process.env.JWT_SECRET);
      res.locals.userId = userId;
    } catch (err) {
      if (err) return res.status(401).send("Invalid token.");
    }

    next();
  } catch (err) {
    console.error("Error while validating token", err.message);
    return res.sendStatus(500);
  }
}
