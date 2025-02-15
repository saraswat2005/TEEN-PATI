// Common request/response types
export interface AuthRequest {
  email: string;
  password: string;
  phone: string;
}

export interface BetRequest {
  userId: string;
  amount: number;
  eventId: string; // ID from third-party API
}

export interface DepositRequest {
  userId: string;
  amount: number;
  paymentMethod: "razorpay" | "stripe";
}

export interface GameResultRequest {
  userId: string;
  gameId: string; // Third-party game ID (e.g., slots_123)
  betAmount: number;
}

export interface CasinoJoinRequest {
  userId: string;
  tableId: string; // e.g., "roulette_1"
}
