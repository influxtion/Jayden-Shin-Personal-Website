import type { Metadata } from "next";
import { Projects } from "../components/Projects";

export const metadata: Metadata = { title: "Projects · Jayden Shin" };

export default function Page() {
  return <Projects />;
}
