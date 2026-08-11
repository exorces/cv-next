/**
 * All page content lives here so the pages stay dumb.
 * Edit this file to update the site.
 */

import type { IconName } from "@/components/Icon";

export type Span = "large" | "wide" | "tall";

export type Stat = { number: string; label: string };

export type GameJam = {
  title: string;
  description: string;
  date: string;
  span?: Span;
  image?: { src: string; width: number; height: number; alt: string };
  href?: string;
};

export type Project = {
  title: string;
  lang: string;
  description: string;
  links?: { label: string; href: string }[];
};

export type Render = {
  title: string;
  span?: Span;
  media: { src: string; width: number; height: number; alt: string };
};

export type ContactItem = { label: string; value: string; href?: string };
export type SocialLink = { icon: IconName; title: string; href: string };
export type LanguageProficiency = { name: string; count: number };

/* ---------------------------------------------------------------- about */

export const about = {
  paragraphs: [
    "I'm a Computer Science student that is interested in game development and 3D art. Alongside my studies, I've been building hands-on experience through personal projects and have participated in two game jams. I also create 3D models both for games and as a hobby.",
  ],
  stats: [
    { number: "3+", label: "Years" },
    { number: "20+", label: "Projects" },
    { number: "2", label: "GameJams" },
  ] satisfies Stat[],
};

/**
 * Draft, inferred from the `lang` field of each entry in `projects` below —
 * edit names and counts to match actual proficiency before shipping.
 */
export const languages: LanguageProficiency[] = [
  { name: "TypeScript", count: 1 },
  { name: "JavaScript", count: 2 },
  { name: "PHP", count: 2 },
  { name: "C#", count: 1 },
  { name: "Kotlin", count: 1 },
  { name: "SQL", count: 1 },
];

/* ---------------------------------------------------------------- games */

export const gameJams: GameJam[] = [
  {
    title: "Crisis Protocol",
    span: "large",
    date: "2025",
    image: {
      src: "/media/crisis-protocol.png",
      width: 1920,
      height: 1080,
      alt: "Crisis Protocol",
    },
    description:
      "You're on an emergency mission — your ship is damaged and time is running out. Navigate through your damaged ship, defend yourself from relentless Alien attackers, and race to reach safety before your ship explodes. Every second counts: manage your time, stay alert, and fight for survival. Will you make it to the end, or die trying?",
  },
  {
    title: "Magasin",
    span: "large",
    date: "2026",
    image: {
      src: "/media/magasin.png",
      width: 347,
      height: 214,
      alt: "Magasin",
    },
    description:
      "Lost in the aisles of a vast thrift store, you must scour bins and shelves to complete your list before the timer runs out. But be careful — an unseen creature lurks in the shadows, hunting you down. Will you finish your task in time, or will the creature catch you before you escape?",
  },
];

/* ----------------------------------------------------------------- code */

export const projects: Project[] = [
  {
    title: "Habit & Workout Tracker",
    lang: "Kotlin / Jetpack Compose",
    description:
      "Android app that stores everything as plain Markdown so it syncs straight into an Obsidian vault. Swipeable routine pager, per-routine streak logic and several scheduling modes.",
    links: [],
  },
  {
    title: "Les petites annonces GG",
    lang: "PHP / MySQL",
    description:
      "Team capstone classifieds marketplace: relational schema, account creation with email confirmation, password recovery, photo uploads and an admin back office. Deployed to shared hosting.",
    links: [],
  },
  {
    title: "CliniqueSantePlus",
    lang: "T-SQL / SQL Server",
    description:
      "Clinic management database built from the schema up — triggers, stored procedures, user-defined functions, cursors and indexing strategy.",
    links: [],
  },
  {
    title: "Admin CRUD",
    lang: "PHP / PDO / jQuery",
    description:
      "Six-entity administration app with prepared statements throughout and session-based authentication guarding every page.",
    links: [],
  },
  {
    title: "Lode Runner",
    lang: "JavaScript / Canvas",
    description:
      "Browser remake of the original: player physics, guard pathfinding, diggable floors that trap and release enemies, and level progression. No engine, no libraries.",
    links: [],
  },
  {
    title: "Maze Runner",
    lang: "C# / Unity",
    description:
      "Top-down maze game with a switchable aerial view, HUD, scoring and a countdown timer.",
    links: [],
  },
  {
    title: "WebGL Labs",
    lang: "JavaScript / WebGL",
    description:
      "Raw WebGL work without a framework: GLSL shaders, matrix transformations, texture mapping (including a fully textured 3D dice) and a first-person camera.",
    links: [],
  },
  {
    title: "Homelab",
    lang: "Docker / Linux",
    description:
      "Self-hosted stack running Jellyfin, Navidrome, a Cobalt API instance and local LLMs through Ollama, all containerised.",
    links: [],
  },
  {
    title: "Pentesting Labs",
    lang: "Kali / Metasploit",
    description:
      "Recon-to-exploit runs against Metasploitable 2 using Nmap, Hydra and Metasploit, written up as lab reports. Working toward Security+, then OSCP.",
    links: [],
  },
  {
    title: "This site",
    lang: "Next.js / TypeScript",
    description:
      "Portfolio rebuilt from a hand-written HTML/CSS page into the App Router, with routed sections and view transitions.",
    links: [],
  },
];

/* ------------------------------------------------------------------- 3d */

/**
 * Drop image files in /public/renders, then add an entry here.
 * `span` controls the grid footprint: "large" (2x2), "wide" (2x1), "tall" (1x2),
 * or omit it for a normal 1x1 cell.
 *
 * {
 *   title: "Neo-Tokyo Street",
 *   span: "large",
 *   media: {
 *     src: "/renders/neo-tokyo.png",
 *     width: 1920,
 *     height: 1080,
 *     alt: "Neo-Tokyo street scene",
 *   },
 * },
 */
export const renders: Render[] = [];

/* -------------------------------------------------------------- contact */

/**
 * Email is deliberately not listed here — it's rendered separately via
 * <EmailLink> so the address never appears in the prerendered HTML.
 */
export const contactItems: ContactItem[] = [
  { label: "Location", value: "Digital Realm / Earth / Montreal (maybe)" },
  { label: "Availability", value: "Please hire me" },
];

export const socials: SocialLink[] = [
  { icon: "github", title: "GitHub", href: "#" },
  { icon: "itch", title: "itch.io", href: "#" },
  { icon: "linkedin", title: "LinkedIn", href: "#" },
  { icon: "instagram", title: "Instagram", href: "#" },
  { icon: "x", title: "X", href: "#" },
];
