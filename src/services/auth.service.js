import jwt from "jsonwebtoken";

export const loginService = (email, password) => {
  const USER = process.env.ADMIN_EMAIL;
  const PASS = process.env.ADMIN_PASSWORD;

  if (email !== USER || password !== PASS) {
    return null;
  }

  const token = jwt.sign(
    { email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
};
