import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Fintech Dashboard",
    desc: "A comprehensive financial dashboard with real-time analytics and data visualization.",
    icon: "dashboard",
    tags: ["React", "TypeScript", "Chart.js"],
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "E-Commerce Platform",
    desc: "Modern e-commerce solution with payment integration and admin dashboard.",
    icon: "shopping_cart",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "Real-time Chat App",
    desc: "Scalable messaging application with live notifications and group chats.",
    icon: "chat_bubble",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    gradient: "from-secondary/20 to-primary/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Projets <span className="text-primary">réalisés</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une sélection de mes travaux récents illustrant mes compétences et
            mon expertise.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-10 items-center">
          {/* --- CARTE 3 : APPLICATION SOCIALE --- */}
          <a
            href="https://conceptrenovationprestige.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-3xl group"
          >
            <FadeIn className="project-card glass rounded-2xl overflow-hidden border border-white/5 hover:border-pink-500/50 hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-pink-600 to-rose-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-white/40 group-hover:scale-110 transition-transform">
                    Site web
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4 ">
                  <h3 className="font-display font-bold text-2xl text-white">
                    Entreprise Locale
                  </h3>
                  <span className="material-symbols-outlined text-white text-4xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ⇨
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Un site web pour une entreprise en rénovation. Dans cette
                  réalisations, j'ai développer un interface moderne et
                  attrayante.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    Next.js
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    React
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    Node.js
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    ChakraUI
                  </span>
                </div>
              </div>
            </FadeIn>
          </a>

          {/* --- CARTE 2 : DASHBOARD --- */}
          <a
            href="https://grandiflores.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-3xl group"
          >
            <FadeIn className="project-card glass rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-emerald-600 to-teal-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-white/40 group-hover:scale-110 transition-transform">
                    App Web
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-2xl text-white">
                    Progressive Web App
                  </h3>
                  <span className="material-symbols-outlined text-white text-4xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ⇨
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Une application web téléchargeable avec une section pour
                  clients. Ici, j'ai pu développer une architecture backend avec
                  authentification google et hautement scalable .
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    Next.js
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    React
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    ChakraUI
                  </span>
                </div>
              </div>
            </FadeIn>
          </a>
          {/* --- CARTE 1 : PROJET E-COMMERCE --- */}
          <a
            href="https://madscientistcookie.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-3xl group"
          >
            <FadeIn className="project-card glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-white/40 group-hover:scale-110 transition-transform">
                    E-commerce
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-2xl text-white">
                    Entreprise (USA)
                  </h3>
                  <span className="material-symbols-outlined text-4xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ⇨
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Développement d'une boutique complète avec paiement sécurisé.
                  Rapidité de chargement et expérience utilisateur fluide.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    Next.js
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    React
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    Node.js
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300">
                    Tailwind
                  </span>
                </div>
              </div>
            </FadeIn>
          </a>
        </div>
      </div>
    </section>
  );
}
