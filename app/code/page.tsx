import Section from "@/components/Section";
import { projects } from "@/lib/content";

export const metadata = { title: "Programming — Ken-Li Roux" };

export default function CodePage() {
  return (
    <Section label="Programming" className="programming-list">
      {projects.map((project) => (
        <article className="prog-item" key={project.title}>
          <h2 className="prog-title">{project.title}</h2>
          <span className="prog-lang">{project.lang}</span>
          <p className="prog-desc">{project.description}</p>
          {project.links && project.links.length > 0 ? (
            <div className="prog-links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </Section>
  );
}
