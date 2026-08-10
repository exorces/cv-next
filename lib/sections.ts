export type Section = {
  /** URL segment, matches the folder name under app/ */
  href: string;
  /** Text shown inside the swaying box */
  icon: string;
  /** Text shown in the small badge at the top-left of the content area */
  label: string;
};

/**
 * Order matters: arrow-key navigation walks this array.
 * Add a section here + create app/<href>/page.tsx and it shows up in the sidebar.
 */
export const sections: Section[] = [
  { href: "/about", icon: "ABOUT", label: "About" },
  { href: "/games", icon: "GAMES", label: "GameJams" },
  { href: "/code", icon: "CODE", label: "Programming" },
  { href: "/3d", icon: "3D", label: "Blender 3D" },
  { href: "/contact", icon: "Contact", label: "Contact" },
];

export const defaultSection = sections[0];

export function sectionIndex(pathname: string): number {
  const i = sections.findIndex(
    (s) => pathname === s.href || pathname.startsWith(`${s.href}/`)
  );
  return i === -1 ? 0 : i;
}
