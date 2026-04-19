import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { FunFacts } from "./components/FunFacts";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)]">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <FunFacts />
      <Footer />
    </main>
  );
}
