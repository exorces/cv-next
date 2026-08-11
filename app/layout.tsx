import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Character from "@/components/Character";
import { ChatProvider } from "@/components/ChatContext";
import { EmailText } from "@/components/ObfuscatedEmail";
import "./globals.css";

const punk = localFont({
  src: "./fonts/punk-typewriter.otf",
  variable: "--font-punk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ken-Li Roux",
  description:
    "Portfolio of Ken-Li Roux — Computer Science student, game dev and 3D art.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${punk.variable} h-full`}>
      <body className="h-full">
        <ChatProvider>
          <div className="scanlines" aria-hidden="true" />
          <div className="noise" aria-hidden="true" />

          <header>
            <h1 className="glow-text">Ken-Li Roux</h1>
            <div className="contact">
              contact: <EmailText />
              <p>website still in progress</p>
            </div>
          </header>

          <main className="main-frame">
            <div className="frame-left" id="contentArea">
              {children}
            </div>
            <Sidebar />
          </main>

          <Character />
        </ChatProvider>
      </body>
    </html>
  );
}
