import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Experience } from "./components/Experience";
import { Leadership } from "./components/Leadership";
import { Projects } from "./components/Projects";
import { FunFacts } from "./components/FunFacts";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)]">
      <Nav />
      <Hero />
      <Experience />
      <Leadership />
      <Projects />
      <FunFacts />
      <Footer />
    </main>
  );
}
