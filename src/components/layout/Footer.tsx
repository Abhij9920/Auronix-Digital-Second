import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal relative overflow-hidden pt-20 pb-8 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <div className="font-bold tracking-wide text-sm">AURONIX DIGITAL</div>
              <div className="text-gold text-[10px] uppercase tracking-widest mt-1">
                Your Digital Growth Partner
              </div>
            </div>
            <div className="w-12 h-px bg-gold mb-6"></div>
            <p className="text-white/40 text-sm font-sans font-light mb-8 max-w-xs">
              We offer end-to-end digital solutions designed to grow your brand and maximise your ROI.
            </p>
            <div className="flex space-x-3">
              {['FB', 'TW', 'LI', 'IG'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-[10px] hover:border-gold hover:text-gold transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="col-span-1">
            <div className="text-gold text-[10px] uppercase tracking-widest mb-6 font-medium">
              Contact
            </div>
            <div className="space-y-3 text-white/50 text-sm font-sans font-light">
              <p>hello@auronixdigital.com</p>
              <p>+91 00000 00000</p>
              <p className="pt-2">Mumbai, India</p>
            </div>
          </div>

          {/* Column 3: Since */}
          <div className="col-span-1">
            <div className="text-gold text-[10px] uppercase tracking-widest mb-6 font-medium">
              Since 2024
            </div>
            <div className="text-white/50 text-sm font-sans font-light">
              {currentYear}
            </div>
          </div>

          {/* Column 4: Links */}
          <div className="col-span-1">
            <div className="text-gold text-[10px] uppercase tracking-widest mb-6 font-medium">
              Links
            </div>
            <nav className="flex flex-col space-y-3 text-white/50 text-sm font-sans font-light">
              <Link to="/" className="hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/works" className="hover:text-white transition-colors duration-200">
                Works
              </Link>
              <Link to="/about" className="hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-[11px] text-white/25 uppercase tracking-widest">
          <p>&copy; {currentYear} Auronix Digital. All rights reserved.</p>
          <Link to="#" className="hover:text-white transition-colors duration-200 mt-4 md:mt-0">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Giant Faded Text */}
      <div
        className="absolute bottom-[-40px] md:bottom-[-80px] left-0 right-0 w-full text-center text-white font-serif whitespace-nowrap opacity-[0.04] pointer-events-none select-none z-0"
        style={{ fontSize: 'clamp(80px, 15vw, 180px)', lineHeight: 1 }}
      >
        AURONIX
      </div>
    </footer>
  );
}
