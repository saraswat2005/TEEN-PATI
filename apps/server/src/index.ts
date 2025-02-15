import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";

import router from "./routes";

import corsMiddleware, { corsOptions } from "./middlewares/corsMiddleware";
import { errorHandler } from "./middlewares/errorMiddleware";
import { initializeSocket } from "./services/wsService";

import config from "./config/config";

const app = express();

const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: corsOptions,
});

initializeSocket(io);

app.use(corsMiddleware);
app.use(express.json());

app.use("/api/v1/", router);

app.use(errorHandler);

server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
