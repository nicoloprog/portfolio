import FadeIn from "./FadeIn";
import Link from "next/link";

const projects = [
  {
    title: "Entreprise Locale",
    desc: "Un site web pour une entreprise en rénovation. Dans cette réalisations, j'ai développer un interface moderne et attrayante.",
    icon: "Site web",
    tags: ["Next.js", "React", "Node.js", "ChakraUI"],
    gradient: "from-pink-600 to-rose-500",
    url: "https://conceptrenovationprestige.com",
    hoverBorder: "hover:border-pink-500/50",
  },
  {
    title: "Progressive Web App",
    desc: "Une application web téléchargeable avec une section pour clients. Ici, j'ai pu développer une architecture backend avec authentification google et hautement scalable.",
    icon: "App Web",
    tags: ["Next.js", "React", "PostgreSQL", "ChakraUI"],
    gradient: "from-emerald-600 to-teal-500",
    url: "https://grandiflores.com",
    hoverBorder: "hover:border-emerald-500/50",
  },
  {
    title: "Entreprise (USA)",
    desc: "Développement d'une boutique complète avec paiement sécurisé. Rapidité de chargement et expérience utilisateur fluide.",
    icon: "E-commerce",
    tags: ["Next.js", "React", "Node.js", "Tailwind"],
    gradient: "from-indigo-600 to-blue-500",
    url: "https://madscientistcookie.vercel.app/",
    hoverBorder: "hover:border-blue-500/50",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Projets <div className="text-primary">réalisés</div>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une sélection de mes contrats récents illustrant mes compétences et
            mon expertise.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-10 items-center">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-3xl group"
            >
              <FadeIn
                className={`project-card glass rounded-2xl overflow-hidden border border-white/5 ${project.hoverBorder} hover:-translate-y-2 transition-all duration-300`}
              >
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-white/40 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-2xl text-white">
                      {project.title}
                    </h3>
                    <span className="material-symbols-outlined text-white text-4xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      ⇨
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex gap-2 text-xs text-slate-300">
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="px-3 py-1 rounded-lg bg-white/5"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
