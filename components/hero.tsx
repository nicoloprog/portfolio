import HeroCard from "@/components/HeroCard";
import FadeIn from "@/components/FadeIn";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative px-6"
    >
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
              Available for work
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6">
            Creating digital <br />{" "}
            <span className="text-gradient">masterpieces.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg">
            I'm John Doe, a Full Stack Developer building accessible,
            pixel-perfect, and performant web experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="h-12 px-8 rounded-full bg-primary text-background-dark font-bold hover:bg-white transition-all glow-effect">
              View Projects
            </button>
            <button className="h-12 px-8 rounded-full border border-white/20 hover:bg-white/5 transition-all">
              Contact Me
            </button>
          </div>
        </FadeIn>

        {/* 3D Card Visual */}
        <FadeIn className="flex justify-center lg:justify-end">
          <HeroCard />
          {/* <div className="relative w-full max-w-md aspect-square animate-float">
            <div className="absolute inset-0 glass rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black opacity-80"></div>

              <div className="absolute inset-0 flex items-center justify-center text-slate-700 opacity-20 text-9xl font-bold">
                &lt;/&gt;
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border border-primary/30 z-[-1]"></div>
          </div> */}
        </FadeIn>
      </div>
    </section>
  );
}
