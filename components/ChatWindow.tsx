"use client";

import { useEffect, useRef, useState } from "react";

type ChatWindowProps = {
  closing: boolean;
  onClose: () => void;
};

type Message = {
  from: "you" | "ken";
  text: string;
};

const GREETING: Message = {
  from: "ken",
  text: "hey, thanks for stopping by. what's up?",
};

const REPLIES = [
  "haha yeah, still figuring that part out.",
  "check the /code section, that's probably what you're after.",
  "not gonna lie, this chat doesn't actually do anything yet.",
  "ask me again once I've wired up a real backend for this.",
  "noted. filing that under 'later'.",
];

function randomReply() {
  return REPLIES[Math.floor(Math.random() * REPLIES.length)];
}

export default function ChatWindow({ closing, onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [draft, setDraft] = useState("");
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages]);

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { from: "you", text },
      { from: "ken", text: randomReply() },
    ]);
    setDraft("");
  }

  return (
    <div className="chat-backdrop" onClick={onClose}>
      <div
        className={`chat-window${closing ? " closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="chat-header">
          <span className="chat-title">ken@portfolio: ~/chat</span>
          <button className="chat-close" onClick={onClose} aria-label="Close chat">
            ×
          </button>
        </div>

        <div className="chat-log" ref={logRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg--${m.from}`}>
              <span className="chat-prompt">{m.from === "you" ? "you>" : "ken>"}</span>{" "}
              {m.text}
            </div>
          ))}
        </div>

        <form className="chat-input-row" onSubmit={sendMessage}>
          <span className="chat-prompt">you&gt;</span>
          <input
            className="chat-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="type something..."
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
