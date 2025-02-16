"use client";
import { useGlobalChat } from "../hooks/useGlobalChat";
import { useState } from "react";

export const GlobalChat = () => {
  const { messages, sendMessage, isLoading } = useGlobalChat();
  const [input, setInput] = useState("");

  return (
    <div className="chat-container">
      {isLoading ? (
        <div>Loading global chat...</div>
      ) : (
        <>
          <div className="message-list">
            {messages.map((message) => (
              <div key={message.id} className="message">
                <span className="username">{message.sender.username}</span>
                <span className="content">{message.content}</span>
                <span className="timestamp">
                  {new Date(message.createdAt).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
          <div className="message-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim()) {
                  sendMessage(input);
                  setInput("");
                }
              }}
            />
            <button
              onClick={() => {
                if (input.trim()) {
                  sendMessage(input);
                  setInput("");
                }
              }}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};