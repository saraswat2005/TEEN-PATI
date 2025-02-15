import { Request, Response } from "express";
import {
  decrementTheBalance,
  getWalletBalance,
  incrementTheBalance,
} from "../services/walletService";

export const walletBalance = async (req: Request, res: Response) => {
  try {
    const wallet = await getWalletBalance(req.user.id);
    res.json({ walletId: wallet?.id, balance: wallet?.balance });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const depositAmount = async (req: Request, res: Response) => {
  try {
    // TODO: Do all the payment gateway stuff here

    // Updating the balance in the DB
    const wallet = await incrementTheBalance(req.user.id, req.body.amount);
    if (!wallet) res.status(500).json({ err: "Something went wrong" });
    res.json({ walletId: wallet?.id, balance: wallet?.balance });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const withdrawAmount = async (req: Request, res: Response) => {
  try {
    // TODO: Do all the payment gateway stuff here

    // Updating the balance in the DB
    const wallet = await decrementTheBalance(req.user.id, req.body.amount);

    if (!wallet) res.status(500).json({ err: "Something went wrong" });
    res.json({ walletId: wallet?.id, balance: wallet?.balance });
  } catch (err) {
    res.status(500).json({ err });
  }
};
