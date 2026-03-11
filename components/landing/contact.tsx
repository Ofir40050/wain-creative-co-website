import { ContactForm } from "@/components/contact/contact-form"

export function Contact() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden px-6 md:px-10 lg:px-16 border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-purple-900/20 blur-[120px] md:blur-[160px] pointer-events-none" />

      <div className="animate-[fadeInUp_0.6s_ease-out]">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto relative z-10 text-center mb-14 md:mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
          Get in touch
        </p>

        <h2 className="font-extrabold uppercase tracking-tight leading-[0.9] text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 max-w-3xl mx-auto">
          Ready to{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Scale Your Brand?
          </span>
        </h2>

        <p className="text-white/70 leading-relaxed text-sm md:text-lg max-w-2xl mx-auto">
          Tell us what you&apos;re building, we’ll follow up with clarity, strategy, and next steps.
        </p>
        <div className="h-px w-24 bg-white/10 mx-auto mt-6 md:mt-8"></div>
      </div>

      {/* FORM */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-neutral-900/30 border border-white/10 p-6 md:p-10 backdrop-blur-sm">
          <ContactForm layout="compact" source="home_contact_form" submitLabel="Start a Project" titleId="home-contact-form-title" />
        </div>
      </div>
      </div>
    </section>
  )
}
