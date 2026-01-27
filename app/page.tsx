import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/layout/Footer";
import LiquidBackground from "@/components/LiquidBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
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
