import type { Metadata } from "next";
import { FunFacts } from "../components/FunFacts";

export const metadata: Metadata = { title: "Other stuff · Jayden Shin" };

export default function Page() {
  return <FunFacts />;
}
