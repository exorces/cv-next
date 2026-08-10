import Section from "@/components/Section";
import { about, languages } from "@/lib/content";

export const metadata = { title: "About — Ken-Li Roux" };

export default function AboutPage() {
  return (
    <Section label="About" className="about-content">
      <div className="about-text">
        <h2>about me</h2>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <div className="about-stats">
          {about.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="language-list">
        {languages.map((language) => (
          <div className="language-row" key={language.name}>
            <span className="language-name">{language.name}</span>
            <span className="language-count">{language.count}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
