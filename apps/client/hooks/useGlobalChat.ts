import { useEffect, useState } from "react";
import { useSocket } from "../context/SocketContext";


export type GlobalMessage = {
  id: string;
  content: string;
  createdAt: string;
  sender: { username: string };
};

export const useGlobalChat = () => {
  const { socket } = useSocket();
  const [messages, setMessages] = useState<GlobalMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!socket) return;

    socket.on("global_history", (history: GlobalMessage[]) => {
      setMessages(history);
      setIsLoading(false);
    });

    socket.on("global_message", (message: GlobalMessage) => {
      setMessages((prev) => [...prev, message]); // Append new messages
    });

    return () => {
      socket.off("global_history");
      socket.off("global_message");
    };
  }, [socket]);

  const sendMessage = (content: string) => {
    if (socket && content.trim()) {
      socket.emit("global_message", content);
    }
  };

  return { messages, sendMessage, isLoading };
};