"use client";

import { useState } from "react";
import Image from "next/image";
import ChatWindow from "./ChatWindow";

const CLOSE_ANIMATION_MS = 400;

export default function Character() {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  function openChat() {
    setIsOpen(true);
  }

  function closeChat() {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, CLOSE_ANIMATION_MS);
  }

  return (
    <>
      <div className="character-container">
        <button className="character-btn" onClick={openChat}>
          <Image
            src="/media/character.gif"
            alt=""
            width={1000}
            height={1000}
            className="character"
            unoptimized
            priority
          />
        </button>
      </div>
      {isOpen && <ChatWindow closing={closing} onClose={closeChat} />}
    </>
  );
}