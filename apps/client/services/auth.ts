import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "../Types";

// Hashing the password
export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Comparing passwords
export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

// Secret key for JWT

// Generate a token
const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user: IUser) => {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET!, {
    expiresIn: "1h",
  });
};

// Verify a token
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET!);
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};

// Middleware to verify JWT

// authMiddleware.use((req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Authorization token required" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = verifyToken(token);
//     req.user = decoded; // Attach user info to the request
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: "Invalid or expired token" });
//   }
// });
