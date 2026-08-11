"use client";

import { useEffect } from "react";

type ChatWindowProps = {
  closing: boolean;
  onClose: () => void;
};

export default function ChatWindow({ closing, onClose }: ChatWindowProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="chat-backdrop" onClick={onClose}>
      <div
        className={`chat-window${closing ? " closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="chat-close" onClick={onClose} aria-label="Close chat">
          ×
        </button>
      </div>
    </div>
  );
}
