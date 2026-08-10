"use client";

import { useEffect, useState } from "react";

const USER = "kenli.roux";
const DOMAIN = "gmail.com";

/**
 * Assembles the address only after mount, so the plain string never lands in
 * the prerendered HTML that regex-based scrapers grep — it only exists in
 * the DOM once a browser has actually run the JS.
 */
function useEmail() {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => setEmail(`${USER}@${DOMAIN}`), []);
  return email;
}

export function EmailText({ className }: { className?: string }) {
  const email = useEmail();
  return <span className={className}>{email ?? "···"}</span>;
}

export function EmailLink({ className }: { className?: string }) {
  const email = useEmail();
  if (!email) return <span className={className}>···</span>;
  return (
    <a className={className} href={`mailto:${email}`}>
      {email}
    </a>
  );
}
