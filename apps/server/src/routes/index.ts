import express from "express";
import auth from "./auth.routes";
import bet from "./bets.routes";
import events from "./live-events.routes";
import casino from "./casino.routes";
import instant from "./instant-games.routes";
import wallet from "./wallet.routes";
import { authenticate } from "../middlewares";
const router = express.Router();

router.use("/auth", auth);
router.use("/wallet", authenticate, wallet);
router.use("/events", authenticate, events);
router.use("/bets", authenticate, bet);
router.use("/casino", authenticate, casino);
router.use("/instant-games", authenticate, instant);

export default router;
