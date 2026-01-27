export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-surface-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg">Technologies I use daily</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Frontend", ["React", "Next.js", "TypeScript", "Tailwind"]],
            ["Backend", ["Node.js", "PostgreSQL", "MongoDB", "GraphQL"]],
            ["Tools", ["Git", "Docker", "AWS", "Figma"]],
          ].map(([title, items]) => (
            <div key={title as string} className="glass p-6 rounded-2xl">
              <h3 className="font-display text-xl font-bold mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
