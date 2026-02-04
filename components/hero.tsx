import HeroCard from "@/components/HeroCard";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative px-6"
    >
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-6 items-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
              Disponible
            </span>
          </div>
          <h1 className="font-display font-bold text-gray-300 text-lg sm:text-lg md:text-3xl leading-tight mb-3">
            Bonjour, je m'appel Nicolas, <br />{" "}
            <span className="text-gradient text-4xl md:text-6xl">
              Développeur full-stack
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-6 max-w-2xl">
            Développement de projets complets, de la conception de
            l'architecture visuelle à la mise en production, avec une attention
            rigoureuse portée à la performance, à la maintenabilité et à
            l'expérience utilisateur.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects" // ← replace with your path
              className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-primary text-gray-300 text-background-dark font-bold hover:bg-white/3 transition-all glow-effect"
            >
              Voir mes projets
            </Link>

            <Link
              href="#contact" // ← replace with your path
              className="h-12 px-8 inline-flex items-center justify-center rounded-full border text-gray-300 border-white/20 hover:bg-white/3 transition-all"
            >
              Contactez-moi
            </Link>
          </div>
        </FadeIn>

        {/* 3D Card Visual */}
        <FadeIn className="flex justify-center lg:justify-end">
          <HeroCard />
        </FadeIn>
      </div>
    </section>
  );
}
