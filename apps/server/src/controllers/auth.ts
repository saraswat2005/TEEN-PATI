// src/controllers/authController.ts
import { Request, Response } from "express";
import * as authService from "../services/auth";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await authService.login(req.body);
    res.json({ token });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};

export const profile = async (req: Request, res: Response) => {
  try {
    const user = await authService.profile(req.user.id);
    res.json(user);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const user = await authService.update(req.user.id, req.body.data);
    res.json(user);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};
