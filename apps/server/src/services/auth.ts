import prisma from "@repo/db";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";
import {
  createUserInDB,
  getUserById,
  updatePhoneOrEmail,
  updateUserById,
} from "./userService";

export const register = async (data: {
  username: string;
  email: string;
  phone?: string;
  password: string;
  name?: string;
}) => {
  // Hash the password using bcrypt
  const hashedPassword = await hashPassword(data.password);

  // Create a new user using Prisma
  const user = await createUserInDB({
    username: data.username,
    email: data.email,
    phone: data.phone,
    password: hashedPassword,
  });

  return user;
};

export const login = async (data: { email: string; password: string }) => {
  // Find user by email using Prisma
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) throw new Error("User not found");

  const match = await comparePassword(data.password, user.password);
  if (!match) throw new Error("Incorrect password");

  // Create a JWT token
  const token = generateToken({ id: user.id, username: user.username });

  return token;
};

export const profile = async (id: string) => {
  const user = await getUserById(id);

  return user;
};

export const update = async (id: string, data: any) => {
  if (data.phone || data.email) {
    const user = await updatePhoneOrEmail(id, data);
    return user;
  } else {
    const user = await updateUserById(id, data);
    return user;
  }
};
