import Image from "next/image";
import Section from "@/components/Section";
import { gameJams } from "@/lib/content";

export const metadata = { title: "GameJams — Ken-Li Roux" };

export default function GamesPage() {
  return (
    <Section label="GameJams" className="gamejam-grid">
      {gameJams.map((jam) => (
        <article
          className={`jam-card ${jam.span ?? ""}`}
          key={jam.title}
        >
          <h2 className="jam-title">{jam.title}</h2>
          {jam.image ? (
            <Image
              className="jam-thumb"
              src={jam.image.src}
              alt={jam.image.alt}
              width={jam.image.width}
              height={jam.image.height}
            />
          ) : null}
          <p className="jam-desc">{jam.description}</p>
          <span className="jam-date">{jam.date}</span>
        </article>
      ))}
    </Section>
  );
}
