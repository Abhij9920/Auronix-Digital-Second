import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';

// Marquee component
function Marquee() {
  const text = 'Strategy / Branding / Creative / Content ';
  const repeated = text.repeat(8);
  return (
    <div className="bg-[#98F499] overflow-hidden py-3.5 border-y border-black/10">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
        <span className="text-charcoal font-sans font-medium text-[17px] tracking-wide pr-4">{repeated}</span>
        <span className="text-charcoal font-sans font-medium text-[17px] tracking-wide pr-4" aria-hidden="true">{repeated}</span>
      </div>
    </div>
  );
}

export function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">

      {/* ──────────── HERO SECTION ──────────── */}
      <section className="bg-ivory min-h-[80vh] flex flex-col justify-end pb-0 px-8 md:px-16 pt-36">
        <div className="max-w-[1400px] mx-auto w-full">

          {/* Small label */}
          <div className="mb-6">
            <SectionLabel>STRATEGY · BRANDING · CREATIVE · CONTENT</SectionLabel>
          </div>

          {/* Giant headline + circle CTA row */}
          <div className="flex items-end justify-between gap-8">
            <h1
              className="font-sans font-bold text-charcoal leading-[1.05] flex-1"
              style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}
            >
              We Specialize in Strategy,&nbsp;Design &amp;&nbsp;Marketing
            </h1>

            {/* Floating circular CTA button */}
            <div className="flex-shrink-0 hidden md:flex">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-charcoal text-white hover:bg-gold transition-colors duration-300 rounded-full text-[14px] font-medium text-center leading-tight"
                style={{ width: '140px', height: '140px' }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Subtext */}
          <p className="font-sans text-text-gray font-light text-[17px] mt-6 max-w-xl leading-relaxed">
            Auronix Digital is your end-to-end growth partner — combining strategy, creativity, and technology to build brands that scale.
          </p>

          {/* Mobile CTA */}
          <div className="mt-8 flex gap-4 md:hidden">
            <Button variant="gold" size="lg">Contact Us →</Button>
            <Button variant="outline-dark" size="lg">Our Work</Button>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-12 -mx-8 md:-mx-16">
          <Marquee />
        </div>
      </section>

      {/* ──────────── FULL-WIDTH IMAGE ──────────── */}
      <section className="w-full h-[420px] md:h-[560px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=700&fit=crop"
          alt="Modern creative agency workspace"
          className="w-full h-full object-cover"
        />
      </section>

      {/* ──────────── SERVICES SECTION ──────────── */}
      <section className="bg-charcoal py-24 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <p className="text-gold text-[11px] uppercase tracking-[0.2em] font-medium mb-4">OUR SERVICES</p>
            <h2
              className="font-sans font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(44px, 5.5vw, 72px)' }}
            >
              What We Do Best
            </h2>
          </div>

          {/* 4 service cards (2 rows of 2, or 4-col on xl) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border border-white/10">
            {[
              {
                bg: '#C8C5FF', // lavender
                num: '01',
                title: 'Comprehensive Digital Campaigns',
                body: 'Creating holistic digital strategies that connect every touchpoint of your customer journey.',
              },
              {
                bg: '#98F499', // lime
                num: '02',
                title: 'SEO Mastery',
                body: 'Boosting your site on search engines with data-driven keyword strategy and content optimisation.',
              },
              {
                bg: '#F7F5F0', // cream/ivory
                num: '03',
                title: 'Targeted Advertisement',
                body: 'Maximising ROI through precise audience targeting across Google, Meta, and LinkedIn.',
              },
              {
                bg: '#1F2022', // charcoal card, inverted
                num: '04',
                title: 'Brand & Creative',
                body: 'Building brand identities that stand out — logos, guidelines, and visual systems.',
                inverted: true,
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={((i % 3) * 100) as 0 | 100 | 200 | 300}>
                <div
                  className="p-10 flex flex-col justify-between min-h-[340px] border-r border-white/10 last:border-r-0 transition-opacity duration-300 hover:opacity-90"
                  style={{ backgroundColor: card.bg }}
                >
                  <div>
                    <div
                      className={`w-3 h-3 rounded-full mb-8 ${card.inverted ? 'bg-gold' : 'bg-charcoal'}`}
                    ></div>
                    <h3
                      className={`font-sans font-semibold text-[20px] leading-snug mb-4 ${card.inverted ? 'text-white' : 'text-charcoal'}`}
                    >
                      {card.title}
                    </h3>
                    <p className={`font-sans font-light text-[14px] leading-relaxed ${card.inverted ? 'text-white/60' : 'text-charcoal/65'}`}>
                      {card.body}
                    </p>
                  </div>
                  <div className={`text-[11px] font-mono mt-8 ${card.inverted ? 'text-gold' : 'text-charcoal/50'}`}>
                    {card.num}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── WHAT WE OFFER SECTION ──────────── */}
      <section className="bg-ivory py-28 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <p className="text-gold text-[11px] uppercase tracking-[0.2em] font-medium mb-6">WHAT WE OFFER</p>
            <h2
              className="font-sans font-bold text-charcoal leading-tight"
              style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}
            >
              Built for Businesses Ready to Grow
            </h2>
            <p className="font-sans text-[16px] text-text-gray font-light leading-relaxed mt-6 max-w-md">
              We combine the rigour of a growth consultancy with the craft of a design studio. From strategy to execution, we deliver design, development, and marketing as one connected engine.
            </p>

            <ul className="space-y-4 mt-8 mb-10">
              {['End-to-end digital strategy', 'Design that converts, not just impresses', 'Transparent reporting and measurable results'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0"></div>
                  <span className="font-sans text-[15px] text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            {/* Sharp "Book Now" style button matching Wix */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-charcoal text-white hover:bg-gold transition-colors duration-300 px-8 py-4 text-[14px] font-medium tracking-wide"
            >
              Book a Free Call →
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=700&fit=crop"
              alt="Team collaborating on a project"
              className="w-full h-auto object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────── CTA BANNER ──────────── */}
      <section className="bg-charcoal py-24 px-8 md:px-16 text-center">
        <ScrollReveal className="max-w-4xl mx-auto">
          <h2
            className="font-sans font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
          >
            Ready to Grow Your Business?
          </h2>
          <p className="font-sans font-light text-[17px] text-white/60 mt-4 mb-10">
            Let's build something remarkable together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#98F499] text-charcoal hover:bg-gold hover:text-white transition-colors duration-300 px-10 py-4 text-[14px] font-semibold tracking-wide"
          >
            Let's Talk →
          </Link>
        </ScrollReveal>
      </section>

      {/* ──────────── APPOINTMENT BOOKING SECTION ──────────── */}
      <section className="bg-ivory py-28 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left text */}
          <ScrollReveal>
            <p className="text-gold text-[11px] uppercase tracking-[0.2em] font-medium mb-6">BOOK A CALL</p>
            <h2
              className="font-sans font-bold text-charcoal leading-tight"
              style={{ fontSize: 'clamp(40px, 4.5vw, 60px)' }}
            >
              Book a Free Strategy Call
            </h2>
            <p className="font-sans text-[16px] text-text-gray font-light mt-5 leading-relaxed max-w-sm">
              30 minutes. No commitment. Just clarity on how to grow your business.
            </p>

            <div className="mt-10 p-6 border border-border-gray bg-white">
              <div className="w-2 h-2 rounded-full bg-gold mb-4"></div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-medium mb-2">AVAILABILITY</p>
              <p className="font-sans text-[15px] text-charcoal">Monday – Friday, 10AM – 6PM IST</p>
            </div>
          </ScrollReveal>

          {/* Right form — on lime green bg like the Wix booking section */}
          <ScrollReveal delay={200}>
            {formSubmitted ? (
              <div className="bg-[#98F499] p-10 text-center">
                <div className="w-3 h-3 rounded-full bg-charcoal mx-auto mb-6"></div>
                <h3 className="font-sans font-bold text-[22px] text-charcoal mb-2">Thanks! We'll be in touch within 24 hours.</h3>
                <p className="font-sans font-light text-charcoal/65 text-[15px]">Your strategy call request has been received.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#98F499] p-10 space-y-5">
                <div className="w-3 h-3 rounded-full bg-charcoal mb-6"></div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">First Name *</label>
                    <input required type="text" className="bg-transparent border-b border-charcoal/40 py-2 px-0 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal placeholder-charcoal/40" placeholder="Jane" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Last Name *</label>
                    <input required type="text" className="bg-transparent border-b border-charcoal/40 py-2 px-0 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal placeholder-charcoal/40" placeholder="Doe" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Email *</label>
                  <input required type="email" className="bg-transparent border-b border-charcoal/40 py-2 px-0 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal placeholder-charcoal/40" placeholder="jane@company.com" />
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Phone</label>
                  <input type="tel" className="bg-transparent border-b border-charcoal/40 py-2 px-0 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal placeholder-charcoal/40" placeholder="+91 00000 00000" />
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Service Needed</label>
                  <select className="bg-transparent border-b border-charcoal/40 py-2 px-0 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal appearance-none">
                    <option>Design</option>
                    <option>Develop</option>
                    <option>Market</option>
                    <option>Scale</option>
                    <option>Full Package</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal mb-2 font-medium">Message</label>
                  <textarea rows={3} className="bg-transparent border-b border-charcoal/40 py-2 px-0 focus:outline-none focus:border-charcoal font-sans font-light text-sm text-charcoal placeholder-charcoal/40 resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal text-white hover:bg-charcoal/80 transition-colors duration-200 py-4 text-[13px] font-semibold tracking-widest uppercase mt-4"
                >
                  Request a Call →
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
