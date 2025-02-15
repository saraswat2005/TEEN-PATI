import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.post("/api/instant", (req: Request, res: Response) => {
  // Endpoint to create a new instant game record or to start an instant game
  res.send("Create instant game");
});

router.get("/api/instant", (req: Request, res: Response) => {
  // Endpoint to retrieve all instant games
  res.send("Get all instant games");
});

router.get("/api/instant/:id", (req: Request, res: Response) => {
  // Endpoint to get a specific instant game by id
  const instantId = req.params.id;
  res.send(`Get instant game with id ${instantId}`);
});

router.put("/api/instant/:id", (req: Request, res: Response) => {
  // Endpoint to update an instant game by id
  const instantId = req.params.id;
  res.send(`Update instant game with id ${instantId}`);
});

router.delete("/api/instant/:id", (req: Request, res: Response) => {
  // Endpoint to delete an instant game by id
  const instantId = req.params.id;
  res.send(`Delete instant game with id ${instantId}`);
});

export default router;
