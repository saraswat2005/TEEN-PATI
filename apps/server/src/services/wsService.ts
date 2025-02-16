// import { Server as SocketIOServer, Socket } from "socket.io";

// import { verifyToken } from "../utils/jwt";

// // Initialize Socket.IO and handle authentication and message routing
// export const initializeSocket = (io: SocketIOServer) => {
//   // Middleware for authenticating Socket.IO connections
//   io.use((socket: any, next) => {
//     const token = socket.handshake.auth.token; // Clients must send token in handshake auth
//     if (!token) {
//       return next(new Error("Authentication error: No token provided"));
//     }
//     const decoded = verifyToken(token); // Verify the token
//     if (!decoded) {
//       return next(new Error("Authentication error: Invalid token"));
//     }
//     next();
//   });

//   // Listen for new connections
//   io.on("connection", (socket: Socket) => {
//     console.log("New socket connected:", (socket as any).user);

//     // Emit an authentication success event to the client
//     socket.emit("auth_success", { message: "Connected successfully" });

//     // Listen for subscription requests
//     socket.on("subscribe", (data) => {
//       // data.channel could be e.g., "oddsUpdate" or "liveEventUpdate"
//       console.log("Subscribing to channel:", data.channel);
//       socket.join(data.channel);
//       // Optionally, emit a confirmation back to the client
//       socket.emit("subscribed", { channel: data.channel });
//     });

//     // Listen for unsubscription requests
//     socket.on("unsubscribe", (data) => {
//       console.log("Unsubscribing from channel:", data.channel);
//       socket.leave(data.channel);
//       socket.emit("unsubscribed", { channel: data.channel });
//     });

//     // Handle custom events (for example, client-initiated messages)
//     socket.on("client_message", (data) => {
//       console.log("Received client_message:", data);
//       // You can handle these events as needed.
//     });

//     // Listen for disconnection
//     socket.on("disconnect", () => {
//       console.log("Socket disconnected:", socket.id);
//     });
//   });
// };

// Changes done by @warui-slime
import { Server as SocketIOServer, Socket } from "socket.io";
import { verifyToken } from "../utils/jwt";
import prisma from "@repo/db";


export const initializeSocket = (io: SocketIOServer) => {
  io.use(async (socket: any, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("Authentication required"));
    try {
      const decoded = verifyToken(token);
      if (!decoded) {
        return next(new Error("Invalid token"));
      }
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: { id: true, username: true },
      });
      if (!user) return next(new Error("User not found"));
      socket.user = user;
      next();
    } catch (error) {
      next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket: Socket & { user?: { id: string; username: string } }) => {
    // Send last 50 messages on connection
    const loadHistory = async () => {
      const messages = await prisma.message.findMany({
        where: { channel: "global" },
        orderBy: { createdAt: "desc" },
        take: 50,
        include: { sender: { select: { username: true } } },
      });
      socket.emit("global_history", messages.reverse()); // Oldest first
    };
    loadHistory();

    // Handle new global messages
    socket.on("global_message", async (content: string) => {
      if (!socket.user || !content.trim()) return;

      try {
        const message = await prisma.message.create({
          data: {
            content,
            senderId: socket.user.id,
            channel: "global",
          },
          include: { sender: { select: { username: true } } },
        });
        io.emit("global_message", message); // Broadcast to all
      } catch (error) {
        socket.emit("error", { message: "Failed to send message" });
      }
    });
  });
};