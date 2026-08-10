import Image from "next/image";
import Section from "@/components/Section";
import { renders } from "@/lib/content";

export const metadata = { title: "3D — Ken-Li Roux" };

export default function ThreeDPage() {
  if (renders.length === 0) {
    return (
      <Section label="Blender 3D" className="gallery-empty">
        <p>renders incoming — check back soon</p>
      </Section>
    );
  }

  return (
    <Section label="Blender 3D" className="blender-gallery">
      {renders.map((render) => (
        <figure className={`blend-item ${render.span ?? ""}`} key={render.title}>
          <Image
            src={render.media.src}
            alt={render.media.alt}
            width={render.media.width}
            height={render.media.height}
          />
          <figcaption className="blend-caption">{render.title}</figcaption>
        </figure>
      ))}
    </Section>
  );
}
