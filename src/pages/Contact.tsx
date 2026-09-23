import { SectionLabel } from '../components/ui/SectionLabel';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <header className="bg-ivory py-20 px-8 md:px-16 border-b border-border-gray">
        <ScrollReveal className="max-w-[1400px] mx-auto">
          <SectionLabel>CONTACT</SectionLabel>
          <h1
            className="font-sans font-bold text-charcoal leading-tight mt-4"
            style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}
          >
            Let's Talk Growth
          </h1>
          <p className="font-sans text-[16px] text-text-gray font-light mt-3">
            We respond within 24 hours on business days.
          </p>
        </ScrollReveal>
      </header>

      {/* Main Contact Section */}
      <section className="bg-white py-24 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT — Info */}
          <ScrollReveal>
            <h2
              className="font-sans font-bold text-charcoal leading-tight"
              style={{ fontSize: 'clamp(32px, 3.5vw, 46px)' }}
            >
              Book a Free 30-Min Strategy Call
            </h2>
            <p className="font-sans font-light text-[16px] text-text-gray mt-5 leading-relaxed">
              No pitch, no pressure. Just a focused conversation about your business goals and how we can help you get there.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Audit of your current digital presence',
                'Clarity on the biggest growth opportunities',
                'A clear next step — no obligation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0"></div>
                  <span className="font-sans text-[15px] text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            {/* Availability box */}
            <div className="mt-10 p-6 border border-border-gray bg-ivory">
              <SectionLabel className="mb-2">AVAILABILITY</SectionLabel>
              <p className="font-sans text-[15px] text-charcoal font-medium">Monday – Friday, 10AM – 6PM IST</p>
            </div>

            {/* Direct contact */}
            <div className="mt-8">
              <SectionLabel className="mb-2">DIRECT CONTACT</SectionLabel>
              <div className="font-sans font-light text-[15px] text-text-gray space-y-2">
                <p><a href="mailto:hello@auronixdigital.com" className="hover:text-charcoal transition-colors">hello@auronixdigital.com</a></p>
                <p><a href="tel:+910000000000" className="hover:text-charcoal transition-colors">+91 00000 00000</a></p>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Form */}
          <ScrollReveal delay={200}>
            <form className="bg-[#98F499] p-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="w-3 h-3 rounded-full bg-charcoal mb-6"></div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">First Name *</label>
                  <input required type="text" className="bg-transparent border-b border-charcoal/40 py-2 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal transition-colors" placeholder="Jane" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Last Name *</label>
                  <input required type="text" className="bg-transparent border-b border-charcoal/40 py-2 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Email *</label>
                  <input required type="email" className="bg-transparent border-b border-charcoal/40 py-2 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal transition-colors" placeholder="jane@company.com" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Phone *</label>
                  <input required type="tel" className="bg-transparent border-b border-charcoal/40 py-2 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Service</label>
                <select className="bg-transparent border-b border-charcoal/40 py-2 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal appearance-none transition-colors">
                  <option>Design</option>
                  <option>Develop</option>
                  <option>Market</option>
                  <option>Scale</option>
                  <option>Full Package</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Budget</label>
                <select className="bg-transparent border-b border-charcoal/40 py-2 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal appearance-none transition-colors">
                  <option>Under $1K</option>
                  <option>$1K–$5K</option>
                  <option>$5K–$10K</option>
                  <option>$10K+</option>
                  <option>Let's Discuss</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Message</label>
                <textarea rows={4} className="bg-transparent border-b border-charcoal/40 py-2 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal placeholder-charcoal/40 resize-none transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-charcoal text-white hover:bg-charcoal/80 transition-colors duration-200 py-4 text-[12px] font-semibold tracking-widest uppercase mt-4"
              >
                + Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
