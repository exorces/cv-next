"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ChatContextValue = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatOpen() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChatOpen must be used within ChatProvider");
  return ctx;
}
