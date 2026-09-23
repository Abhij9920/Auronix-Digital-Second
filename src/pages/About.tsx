import { SectionLabel } from '../components/ui/SectionLabel';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function About() {
  return (
    <div className="flex flex-col w-full">

      {/* Page Header */}
      <header className="bg-ivory py-20 px-8 md:px-16 border-b border-border-gray">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <SectionLabel>ABOUT THE STUDIO</SectionLabel>
            <h1
              className="font-sans font-bold text-charcoal leading-tight mt-4 max-w-4xl"
              style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
            >
              Strategy-led. Design-obsessed. Growth-focused.
            </h1>
          </ScrollReveal>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="bg-white py-24 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <SectionLabel>OUR STORY</SectionLabel>
            <h2
              className="font-sans font-bold text-charcoal leading-tight mt-3 mb-6"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
            >
              Built to Drive Growth, Not Just Deliver Work.
            </h2>
            <div className="font-sans font-light text-[16px] text-text-gray leading-relaxed space-y-4">
              <p>
                Auronix Digital was founded on a simple belief: that great digital work should be measurable. We combine the rigour of a growth consultancy with the craft of a design studio.
              </p>
              <p>
                From startups to scaling businesses, we partner with brands that are serious about growth — delivering strategy, design, development, and marketing as one connected engine.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
              alt="Team working together"
              className="w-full h-auto object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-ivory py-24 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="mb-16">
            <SectionLabel>MEET THE TEAM</SectionLabel>
            <h2
              className="font-sans font-bold text-charcoal leading-tight mt-3"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
            >
              The People Behind Your Growth
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Abhijeet Kodag',
                role: 'Founder & CEO',
                bio: 'Strategy, marketing, and digital systems. Abhijeet leads every client engagement with a growth-first mindset.',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&facepad=3',
                bg: '#C8C5FF',
              },
              {
                name: 'Sara Johnson',
                role: 'Head of Design',
                bio: 'Sara crafts visual identities and digital experiences that balance beauty with conversion at every touchpoint.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop&facepad=3',
                bg: '#98F499',
              },
              {
                name: 'Tom Benson',
                role: 'Lead Developer',
                bio: 'Tom architects scalable web products with clean code, fast performance, and future-proof foundations.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&facepad=3',
                bg: '#F7F5F0',
              },
            ].map((person, i) => (
              <ScrollReveal key={i} delay={((i % 3) * 100) as 0 | 100 | 200 | 300}>
                <div className="bg-white border border-border-gray overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative" style={{ backgroundColor: person.bg }}>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full aspect-[4/3] object-cover object-top mix-blend-multiply"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-sans font-semibold text-[18px] text-charcoal">{person.name}</h3>
                    <span className="font-sans text-[11px] text-gold uppercase tracking-[0.15em] mt-1 block">{person.role}</span>
                    <p className="font-sans font-light text-[14px] text-text-gray leading-relaxed mt-3">{person.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-charcoal py-24 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="mb-16">
            <SectionLabel>OUR VALUES</SectionLabel>
            <h2
              className="font-sans font-bold text-white leading-tight mt-3"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
            >
              What Drives Us
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {[
              { num: '01', title: 'Results First', body: 'Every decision is measured against one question: does this drive growth?', bg: '#C8C5FF', dark: false },
              { num: '02', title: 'Design with Purpose', body: 'Beautiful work that also converts. Aesthetics always serve strategy.', bg: '#98F499', dark: false },
              { num: '03', title: 'Radical Transparency', body: 'No black boxes. You see everything — strategy, data, results.', bg: '#1F2022', dark: true },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={((i % 3) * 100) as 0 | 100 | 200 | 300}>
                <div
                  className="p-10 min-h-[260px] flex flex-col justify-between border-r border-white/10 last:border-r-0"
                  style={{ backgroundColor: card.bg }}
                >
                  <div>
                    <div className={`w-3 h-3 rounded-full mb-6 ${card.dark ? 'bg-gold' : 'bg-charcoal'}`}></div>
                    <h3 className={`font-sans font-semibold text-[20px] mb-3 ${card.dark ? 'text-white' : 'text-charcoal'}`}>{card.title}</h3>
                    <p className={`font-sans font-light text-[14px] leading-relaxed ${card.dark ? 'text-white/55' : 'text-charcoal/65'}`}>{card.body}</p>
                  </div>
                  <div className={`text-[11px] font-mono mt-6 ${card.dark ? 'text-gold' : 'text-charcoal/40'}`}>{card.num}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-ivory py-24 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <ScrollReveal>
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2
              className="font-sans font-bold text-charcoal leading-tight mt-3 mb-8"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
            >
              Ready to Leave a Mark?
            </h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">First Name *</label>
                  <input required type="text" className="border-b border-border-gray bg-transparent py-2.5 focus:outline-none focus:border-charcoal font-sans font-light text-sm transition-colors" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Last Name</label>
                  <input type="text" className="border-b border-border-gray bg-transparent py-2.5 focus:outline-none focus:border-charcoal font-sans font-light text-sm transition-colors" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Email *</label>
                <input required type="email" className="border-b border-border-gray bg-transparent py-2.5 focus:outline-none focus:border-charcoal font-sans font-light text-sm transition-colors" />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Phone</label>
                <input type="tel" className="border-b border-border-gray bg-transparent py-2.5 focus:outline-none focus:border-charcoal font-sans font-light text-sm transition-colors" />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Message *</label>
                <textarea required rows={4} className="border-b border-border-gray bg-transparent py-2.5 focus:outline-none focus:border-charcoal font-sans font-light text-sm resize-none transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full bg-charcoal text-white hover:bg-gold transition-colors duration-200 py-4 text-[13px] font-semibold tracking-widest uppercase mt-4">
                Send Message →
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={200} className="lg:pt-24 flex flex-col">
            <h3 className="font-sans font-semibold text-[20px] text-charcoal mb-2">Get in Touch</h3>
            <div className="w-12 h-[2px] bg-gold my-4"></div>

            <div className="space-y-4 font-sans font-light text-text-gray text-[15px]">
              <p><a href="mailto:hello@auronixdigital.com" className="hover:text-charcoal transition-colors">hello@auronixdigital.com</a></p>
              <p><a href="tel:+910000000000" className="hover:text-charcoal transition-colors">+91 00000 00000</a></p>
              <p>Mumbai, India</p>
            </div>

            <div className="mt-8 flex space-x-4 text-sm font-sans font-medium text-charcoal">
              {['FB', 'TW', 'LI', 'IG'].map((s, i, arr) => (
                <span key={s} className="flex items-center gap-4">
                  <a href="#" className="hover:text-gold transition-colors">{s}</a>
                  {i < arr.length - 1 && <span className="text-text-gray/40">&middot;</span>}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
