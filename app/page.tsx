import Navbar from "@/components/layout/navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";
import LiquidBackground from "@/components/LiquidBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <LiquidBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
