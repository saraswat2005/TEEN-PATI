import express from "express";
import { Request, Response } from "express";
import { getAllEvents, getEventById } from "../controllers/eventController";

const router = express.Router();

router.get("/api/events", getAllEvents);

router.get("/api/events/:id", getEventById);

export default router;
