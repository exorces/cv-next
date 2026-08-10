"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { sections, sectionIndex } from "@/lib/sections";

const NEXT_KEYS = ["ArrowDown", "ArrowRight"];
const PREV_KEYS = ["ArrowUp", "ArrowLeft"];

/** Moving down the list reads as "forward", up as "back". */
function transitionType(from: number, to: number) {
  return to > from ? ["nav-forward"] : ["nav-back"];
}

function isTyping(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const activeIndex = sectionIndex(pathname);

  // Warm up every route so switching sections is instant (and so the
  // view transition can pair old and new content in the same commit).
  useEffect(() => {
    for (const section of sections) router.prefetch(section.href);
  }, [router]);

  // Arrow keys cycle through the sections, same as the old vanilla version.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTyping(event.target)) return;

      const step = NEXT_KEYS.includes(event.key)
        ? 1
        : PREV_KEYS.includes(event.key)
          ? -1
          : 0;
      if (step === 0) return;

      event.preventDefault();
      const next = (activeIndex + step + sections.length) % sections.length;
      router.push(sections[next].href, {
        transitionTypes: transitionType(activeIndex, next),
      });
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, router]);

  return (
    <nav className="frame-right" aria-label="Sections">
      {sections.map((section, index) => {
        const isActive = index === activeIndex;
        return (
          <Link
            key={section.href}
            href={section.href}
            transitionTypes={transitionType(activeIndex, index)}
            aria-current={isActive ? "page" : undefined}
            className={`swaying-box ${isActive ? "active" : "inactive"}`}
          >
            <span className="box-icon">{section.icon}</span>
          </Link>
        );
      })}
      <div className="nav-hint">
        ↑↓ Arrows
        <br />
        or Click
      </div>
    </nav>
  );
}
