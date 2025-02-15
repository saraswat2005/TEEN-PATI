import express from "express";
import {
  depositAmount,
  walletBalance,
  withdrawAmount,
} from "../controllers/walletController";
import { validateData } from "../middlewares/errorMiddleware";
import {
  checkBalanceSchema,
  decrementWalletSchema,
  incrementWalletSchema,
} from "../utils/logger";

const router = express.Router();

router.get("/balance", validateData(checkBalanceSchema), walletBalance);

router.post("/deposit", validateData(incrementWalletSchema), depositAmount);

router.post("/withdraw", validateData(decrementWalletSchema), withdrawAmount);

export default router;
