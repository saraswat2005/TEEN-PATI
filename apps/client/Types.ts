// Role Enum
export enum Role {
  Admin = "admin",
  User = "user",
  SuperAdmin = "superAdmin",
}

// User Interface
export interface IUser {
  id: string; // MongoDB ObjectId as string
  username: string;
  email: string;
  phone?: string | null; // Optional
  password: string;
  avatar?: string | null; // Optional
  role: Role;
  walletId?: string | null; // Optional, MongoDB ObjectId as string
  wallet?: IWallet | null; // Optional, linked Wallet
}

// Wallet Interface
export interface IWallet {
  id: string; // MongoDB ObjectId as string
  balance: number;
  user?: IUser | null; // Optional, linked User
  transactions?: ITransaction[]; // Optional, list of linked Transactions
  userId: string; // MongoDB ObjectId as string
}

// Transaction Interface
export interface ITransaction {
  id: string; // MongoDB ObjectId as string
  amount: number;
  date: Date; // Transaction date
  walletId: string; // MongoDB ObjectId as string
  wallet?: IWallet | null; // Optional, linked Wallet
}

// Game Interface
export interface IGame {
  id: string; // MongoDB ObjectId as string
  name: string; // Name of the game
  api: string; // Game's API URL or endpoint
}
