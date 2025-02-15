import { z } from "zod";

// Registration validation schema
export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),

  email: z.string().email("Invalid email address"),

  // Optional phone number: only digits allowed with a length between 10 and 15 digits.
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true; // skip validation if phone is not provided
        return /^[0-9]{10,15}$/.test(val);
      },
      {
        message:
          "Phone number must contain only digits and be 10 to 15 characters long",
      }
    ),

  password: z.string().min(6, "Password must be at least 6 characters long"),

  // Optional avatar must be a valid URL if provided.
  avatar: z.string().url("Avatar must be a valid URL").optional(),
});

// Login validation schema
// Here we assume login via email and password. Adjust if you want to allow username or phone login.
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Example: Schema for updating user details (only allowing changes to username, email, phone, and avatar)
export const updateUserSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .optional(),

  email: z.string().email("Invalid email address").optional(),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        return /^[0-9]{10,15}$/.test(val);
      },
      {
        message:
          "Phone number must contain only digits and be 10 to 15 characters long",
      }
    ),

  avatar: z.string().url("Avatar must be a valid URL").optional(),
});

// 1. Schema to check the balance (must have userId)
export const checkBalanceSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  // .regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId format"),
});

// 2. Schema to increment the wallet balance
export const incrementWalletSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  // .regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId format"),

  amount: z.number().positive("Amount must be greater than zero"),
});

// 3. Schema to decrement the wallet balance
export const decrementWalletSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  // .regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId format"),

  amount: z.number().positive("Amount must be greater than zero"),
});
