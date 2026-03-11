import { Instagram, Linkedin } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"

type FAQItem = {
  question: string
  answer: string
}

type ContactPageContentProps = {
  faqs?: FAQItem[]
}

export function ContactPageContent({ faqs = [] }: ContactPageContentProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left Column: Info */}
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/60 mb-6 leading-[1.45]">
            Start a Project
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.9] mb-8">
            Let’s Build <br />
            Something <br />
            Iconic
          </h1>

          <div className="h-px w-40 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 mb-10" />

          <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-xl mb-12">
            Tell us what you’re building. Whether it’s a premium website, a social system, or a content rollout, we’ll reply with a clear plan, timeline, and next steps.
          </p>

          <div className="space-y-10">
            {/* Email */}
            <div>
              <h3 className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45] mb-3">
                Email
              </h3>
              <a
                href="mailto:contact@waincreative.com"
                className="text-2xl md:text-3xl font-light text-white hover:text-purple-400 transition-colors"
              >
                contact@waincreative.com
              </a>
              <p className="text-white/60 leading-relaxed text-base md:text-lg mt-2">
                Average response time: within 24-48 hours.
              </p>
            </div>

            {/* WhatsApp Business */}
            <div>
              <h3 className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45] mb-3">
                WhatsApp Business
              </h3>
              <a
                href="https://wa.me/12135895458"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-light text-white hover:text-purple-400 transition-colors"
              >
                +1 (213) 589-5458
              </a>
              <p className="text-white/60 leading-relaxed text-base md:text-lg mt-2">
                Fast coordination for moving parts and tight timelines.
              </p>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45] mb-4">
                Socials
              </h3>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <a
                  href="https://www.instagram.com/waincreativeco/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-purple-400 transition-colors inline-flex items-center gap-3"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-widest">
                    Instagram
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/wainmusic/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-purple-400 transition-colors inline-flex items-center gap-3"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-widest">
                    LinkedIn
                  </span>
                </a>

              </div>
            </div>

            {/* Availability Note */}
            <div className="group relative p-7 bg-neutral-950 border border-white/10 rounded-none hover:border-white/20 hover:bg-white/5 transition-all overflow-hidden">
              <p className="text-white/60 leading-relaxed text-base md:text-lg">
                Now booking new projects. If you have a launch date or deadline, mention it so we can prioritize correctly.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-neutral-950 p-7 md:p-10 lg:p-12 border border-white/10 rounded-none relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
          {/* Decorative Gradient */}
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-purple-900/25 blur-[110px] pointer-events-none" />
          <ContactForm
            className="relative z-10"
            layout="full"
            source="contact_page_form"
            submitLabel="Start Project"
            titleId="contact-form-title"
          />
        </div>
      </div>

      {/* FAQ / additional content for SEO strength */}
      <section
        className="max-w-6xl mx-auto mt-20 md:mt-24 border-t border-white/10 pt-12 md:pt-16"
        aria-labelledby="contact-faq-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]">
              FAQs & Expectations
            </p>
            <h2 id="contact-faq-heading" className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-[1.05]">
              What to expect when we work together
            </h2>
            <p className="text-white/70 leading-relaxed text-base">
              Transparent scope, timelines, and deliverables so you know exactly how we’ll launch your site or campaign.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-6">
              {faqs.map((faq) => (
                <li key={faq.question} className="p-6 bg-neutral-950 border border-white/10 hover:border-white/20 transition-colors">
                  <p className="text-lg md:text-xl font-semibold text-white mb-2">{faq.question}</p>
                  <p className="text-white/70 leading-relaxed text-base">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
