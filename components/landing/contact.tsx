"use client"

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
          Tell us what you're building—we’ll follow up with clarity, strategy, and next steps.
        </p>
        <div className="h-px w-24 bg-white/10 mx-auto mt-6 md:mt-8"></div>
      </div>

      {/* FORM */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-neutral-900/30 border border-white/10 p-6 md:p-10 backdrop-blur-sm">
        <form className="space-y-10">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.3em] text-white/50">Name</label>
              <input
                type="text"
                placeholder="JOHN DOE"
                className="w-full bg-neutral-900/50 border border-white/15 p-3 md:p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-pink-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.3em] text-white/50">Email</label>
              <input
                type="email"
                placeholder="HELLO@EXAMPLE.COM"
                className="w-full bg-neutral-900/50 border border-white/15 p-3 md:p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-pink-500 transition-colors"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-white/50">
              Service Interest
            </label>

            <select
              className="w-full bg-neutral-900/50 border border-white/15 p-3 md:p-4 text-white appearance-none focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-pink-500 transition-colors"
            >
              <option>Web Design and Development</option>
              <option>Social Media and Content Strategy</option>
              <option>Video Editing and Post Production</option>
              <option>Creator and Artist Services</option>
              <option>Other</option>
            </select>
          </div>

          {/* ROW 3 */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-white/50">Message</label>
            <textarea
              rows={5}
              placeholder="TELL US WHAT YOU NEED, YOUR GOAL, AND YOUR TIMELINE..."
              className="w-full bg-neutral-900/50 border border-white/15 p-3 md:p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-pink-500 transition-colors"
            />
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="btn-primary w-full, group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-black text-sm uppercase font-bold tracking-widest rounded-lg shadow-[0_4px_20px_rgba(255,0,90,0.35)] hover:shadow-[0_4px_30px_rgba(255,0,90,0.55)] transition-all duration-300 w-full sm:w-auto">
              Send Message
            </button>
          </div>

          <p className="text-white/50 text-[10px] md:text-xs leading-relaxed text-center max-w-lg mx-auto">
            By submitting this form, you agree to be contacted about your project.  
            We never share or sell your information.
          </p>
        </form>
        </div>
      </div>
      </div>
    </section>
  )
}
