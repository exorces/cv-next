import Icon from "@/components/Icon";
import Section from "@/components/Section";
import { EmailLink } from "@/components/ObfuscatedEmail";
import { contactItems, socials } from "@/lib/content";

export const metadata = { title: "Contact — Ken-Li Roux" };

export default function ContactPage() {
  return (
    <Section label="Contact" className="contact-section">
      <div className="contact-box">
        <h2>Contact me</h2>

        <div className="contact-item">
          <div className="contact-label">Email</div>
          <div className="contact-value">
            <EmailLink />
          </div>
        </div>

        {contactItems.map((item) => (
          <div className="contact-item" key={item.label}>
            <div className="contact-label">{item.label}</div>
            <div className="contact-value">
              {item.href ? <a href={item.href}>{item.value}</a> : item.value}
            </div>
          </div>
        ))}

        <div className="social-links">
          {socials.map((social) => (
            <a
              key={social.icon}
              className="social-link"
              href={social.href}
              title={social.title}
              aria-label={social.title}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
