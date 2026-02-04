import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Travaillons ensemble !
            </h2>
            <p className="text-slate-400">
              Vous avez un projet en tête ? Je suis toujours ouvert à la
              discussion de nouvelles idées.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-background-dark/50 border border-white/10 text-white focus:border-primary outline-none transition-all"
                  placeholder="Nom"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-background-dark/50 border border-white/10 text-white focus:border-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background-dark/50 border border-white/10 text-white focus:border-primary outline-none transition-all"
                placeholder="Écrivez votre message ici..."
              ></textarea>
            </div>
            <button className="w-full h-12 rounded-lg bg-primary text-background-dark font-display font-bold text-base hover:bg-gray-700/30 transition-all glow-effect">
              Envoi
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
