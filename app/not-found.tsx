import Link from "next/link";
import Section from "@/components/Section";
import { defaultSection } from "@/lib/sections";

export default function NotFound() {
  return (
    <Section label="404" className="about-content">
      <h2>404</h2>
      <p>That section does not exist.</p>
      <div className="prog-links">
        <Link href={defaultSection.href}>back to about</Link>
      </div>
    </Section>
  );
}
