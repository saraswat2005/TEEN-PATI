import bcrypt from "bcrypt";
import config from "../config/config";

export const hashPassword = (password: string) =>
  bcrypt.hash(password, config.bcryptSaltRounds);

export const comparePassword = (password: string, hash: string) =>
  bcrypt.compare(password, hash);
