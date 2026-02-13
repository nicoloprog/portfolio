import FadeIn from ".././FadeIn";
import ContactUsForm from "@/components/Contact/ContactUsForm";

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

          <ContactUsForm />
        </FadeIn>
      </div>
    </section>
  );
}
