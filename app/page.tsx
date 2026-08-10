import { redirect } from "next/navigation";
import { defaultSection } from "@/lib/sections";

export default function Home() {
  redirect(defaultSection.href);
}
