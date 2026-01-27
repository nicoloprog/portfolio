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
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and expertise.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <FadeIn
              key={idx}
              className="project-card glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-white/50">
                    {project.icon}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-bold text-xl">
                    {project.title}
                  </h3>
                  <a
                    href="#"
                    className="text-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </a>
                </div>
                <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
