import { Instagram, Linkedin, MessageCircleMore } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FAQItem = {
  question: string
  answer: string
}

type ContactPageContentProps = {
  faqs?: FAQItem[]
}

export function ContactPageContent({ faqs = [] }: ContactPageContentProps) {
  const contactLinkClassName = "text-sm font-medium leading-none text-white transition-colors hover:text-purple-400"

  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-14">
        {/* Left Column: Info */}
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]">
            Start a Project
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.9]">
            Start Your <br />
            Next Launch.
          </h1>

          <div className="h-px w-32 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />

          <div className="space-y-8">
            {/* Email */}
            <div>
              <a
                href="mailto:contact@waincreative.com"
                className={contactLinkClassName}
              >
                contact@waincreative.com
              </a>
            </div>

            {/* WhatsApp Business */}
            <div className="space-y-3">
              <a
                href="https://wa.me/12135895458"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 py-1 transition-colors hover:text-purple-400"
              >
                <MessageCircleMore className="h-4 w-4 text-white" />
                <span className={contactLinkClassName}>Quick Coordination via WhatsApp</span>
              </a>
            </div>

            {/* Socials */}
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <a
                  href="https://www.instagram.com/waincreativeco/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-purple-400"
                >
                  <Instagram className="h-4 w-4 text-white" />
                  <span className={contactLinkClassName}>Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/wainmusic/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-purple-400"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                  <span className={contactLinkClassName}>LinkedIn</span>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-neutral-950 p-6 md:p-7 lg:p-8 border border-white/10 rounded-none relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
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
        className="max-w-6xl mx-auto mt-36 md:mt-52 border-t border-white/10 pt-24 md:pt-32"
        aria-labelledby="contact-faq-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-white/60 leading-[1.45]">
              FAQs
            </p>
            <h2 id="contact-faq-heading" className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-[1.05]">
              What to expect
            </h2>
          </div>
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="border-t border-white/10">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="py-6 text-base font-semibold tracking-tight text-white/72 hover:no-underline data-[state=open]:text-white md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pr-10 text-base leading-relaxed text-white/60">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
