import FadeIn from "@/components/FadeIn";
export default function About() {
  return (
    <section id="about" className="py-20 relative px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h2 className="font-display font-bold text-4xl mb-6">
            À propos de moi
          </h2>
          <div className="space-y-4 text-slate-400">
            <p>
              Je suis un développeur Full Stack passionné, avec plus de 5 ans
              d'expérience dans la création d'expériences numériques
              exceptionnelles.
            </p>
            <p>
              Je me spécialise dans la création d'applications web modernes et
              réactives utilisant des technologies de pointe comme React,
              Next.js et Node.js.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="glass rounded-3xl p-8 space-y-6">
            {/* Item 1: Full Stack */}
            <div className="flex items-center gap-4">
              <div className="size-16 rounded-xl flex items-center justify-center text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-10 h-10 text-cyan-400"
                >
                  <path
                    d="M8 6L2 12L8 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 6L22 12L16 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">
                  Full Stack Dev
                </h3>
                <p className="text-slate-400 text-sm">
                  Solutions de bout en bout
                </p>
              </div>
            </div>

            {/* Item 2: UI/UX */}
            <div className="flex items-center gap-4">
              <div className="size-16 rounded-xl bg-primary/20 flex items-center justify-center text-primary  overflow-hidden">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-10 h-10 text-cyan-400"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14 4.5 15.5 4.5 17.5C4.5 19.5 6 21 8 21H12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
                  <circle cx="13.5" cy="7.5" r="1.5" fill="currentColor" />
                  <circle cx="10" cy="7.5" r="1.5" fill="currentColor" />
                  <circle cx="17" cy="9.5" r="1.5" fill="currentColor" />
                  <circle cx="17" cy="14.5" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Design UI/UX</h3>
                <p className="text-slate-400 text-sm">
                  Conception centrée utilisateur
                </p>
              </div>
            </div>

            {/* Item 3: Performance */}
            <div className="flex items-center gap-4">
              <div className="size-16 rounded-xl bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-cyan-400"
                >
                  <path
                    d="M12 13V9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.92999 19.07C3.10999 17.25 2 14.75 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 14.75 20.89 17.25 19.07 19.07"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Performance</h3>
                <p className="text-slate-400 text-sm">Rapide et efficace</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
