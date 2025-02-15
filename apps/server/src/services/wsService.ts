import { Server as SocketIOServer, Socket } from "socket.io";

import { verifyToken } from "../utils/jwt";

// Initialize Socket.IO and handle authentication and message routing
export const initializeSocket = (io: SocketIOServer) => {
  // Middleware for authenticating Socket.IO connections
  io.use((socket: any, next) => {
    const token = socket.handshake.auth.token; // Clients must send token in handshake auth
    if (!token) {
      return next(new Error("Authentication error: No token provided"));
    }
    const decoded = verifyToken(token); // Verify the token
    if (!decoded) {
      return next(new Error("Authentication error: Invalid token"));
    }
    next();
  });

  // Listen for new connections
  io.on("connection", (socket: Socket) => {
    console.log("New socket connected:", (socket as any).user);

    // Emit an authentication success event to the client
    socket.emit("auth_success", { message: "Connected successfully" });

    // Listen for subscription requests
    socket.on("subscribe", (data) => {
      // data.channel could be e.g., "oddsUpdate" or "liveEventUpdate"
      console.log("Subscribing to channel:", data.channel);
      socket.join(data.channel);
      // Optionally, emit a confirmation back to the client
      socket.emit("subscribed", { channel: data.channel });
    });

    // Listen for unsubscription requests
    socket.on("unsubscribe", (data) => {
      console.log("Unsubscribing from channel:", data.channel);
      socket.leave(data.channel);
      socket.emit("unsubscribed", { channel: data.channel });
    });

    // Handle custom events (for example, client-initiated messages)
    socket.on("client_message", (data) => {
      console.log("Received client_message:", data);
      // You can handle these events as needed.
    });

    // Listen for disconnection
    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};
