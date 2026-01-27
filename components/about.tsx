import FadeIn from "@/components/FadeIn";
export default function About() {
  return (
    <section id="about" className="py-20 relative px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h2 className="font-display font-bold text-4xl mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="space-y-4 text-slate-400">
            <p>
              I'm a passionate Full Stack Developer with over 5 years of
              experience crafting exceptional digital experiences.
            </p>
            <p>
              I specialize in creating modern, responsive web applications using
              cutting-edge technologies like React, Next.js, and Node.js.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="glass rounded-3xl p-8 space-y-6">
            {[
              {
                icon: "code",
                title: "Full Stack Dev",
                desc: "End-to-end solutions",
              },
              {
                icon: "palette",
                title: "UI/UX Design",
                desc: "User-centered design",
              },
              {
                icon: "speed",
                title: "Performance",
                desc: "Fast and efficient",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="size-16 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
