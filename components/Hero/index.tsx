import HeroCard from "@/components/Hero/HeroCard";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center justify-center relative px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit my-4">
            <div className="relative flex h-2.5 w-2.5">
              <div className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></div>
              <div className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
              Disponible
            </div>
          </div>
          <h1 className="font-display font-bold text-slate-300 text-lg sm:text-lg md:text-2xl leading-tight mb-2">
            Bonjour, je m'appelle Nicolas, <br />{" "}
            <div className="text-gradient text-3xl md:text-4xl">
              Développeur full-stack
            </div>
          </h1>
          <p className="text-md md:text-lg text-slate-400 mb-2 max-w-2xl">
            Développement de projets complets, de la conception à la mise en
            production, avec une attention portée à la performance, à la
            maintenabilité et à l'expérience utilisateur.
          </p>
          <div className="hidden md:flex flex-wrap gap-4">
            <Link
              href="#projects" // ← replace with your path
              className="text-sm h-10 px-6 inline-flex items-center justify-center rounded-full bg-primary text-gray-300 text-background-dark font-bold hover:bg-gray-700/30 transition-all glow-effect"
            >
              Freelance
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
