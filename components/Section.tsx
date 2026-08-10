import { ViewTransition, type ReactNode } from "react";

/**
 * Maps the transition type set by the sidebar onto a CSS class.
 * `default: "none"` keeps browser back/forward and refreshes from animating.
 */
const direction = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
};

type SectionProps = {
  /** Text for the small badge in the top-left corner */
  label: string;
  /** Layout class for the inner wrapper (e.g. "about-content", "gamejam-grid") */
  className: string;
  children: ReactNode;
};

/**
 * Every page renders inside this. Handles the scroll container, the section
 * label and the directional view transition.
 *
 * This has to live in the page subtree (not in layout.tsx) — layouts persist
 * across navigation, so enter/exit would never fire there.
 */
export default function Section({ label, className, children }: SectionProps) {
  return (
    <ViewTransition enter={direction} exit={direction} default="none">
      <section className="content-section">
        <span className="section-label">{label}</span>
        <div className={className}>{children}</div>
      </section>
    </ViewTransition>
  );
}
