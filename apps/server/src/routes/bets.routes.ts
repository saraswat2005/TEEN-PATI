import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.post("/api/bets", (req: Request, res: Response) => {
  // Endpoint to create a new bet
  res.send("Create bet");
});

router.get("/api/bets", (req: Request, res: Response) => {
  // Endpoint to get all bets (for the current user or all bets, as needed)
  res.send("Get all bets");
});

router.get("/api/bets/:id", (req: Request, res: Response) => {
  // Endpoint to get a single bet by its id
  const betId = req.params.id;
  res.send(`Get bet with id ${betId}`);
});

router.delete("/api/bets/:id", (req: Request, res: Response) => {
  // Endpoint to delete a bet by its id
  const betId = req.params.id;
  res.send(`Delete bet with id ${betId}`);
});

export default router;
