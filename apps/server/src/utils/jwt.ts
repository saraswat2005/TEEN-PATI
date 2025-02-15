import jwt from "jsonwebtoken";
import config from "../config/config";

export const generateToken = (data: any) => {
  const token = jwt.sign(data, config.jwtSecret, {
    expiresIn: "1h",
  });
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as { userId: string };
    return decoded;
  } catch (err) {
    return null;
  }
};
