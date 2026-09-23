import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-ivory border-b border-border-gray transition-all duration-300',
        isScrolled ? 'shadow-md py-4' : 'py-7'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col group">
          <span className="text-charcoal font-bold text-xl tracking-tight leading-tight">
            AURONIX DIGITAL
          </span>
          <span className="text-gold text-[10px] uppercase tracking-[0.2em] mt-0.5 font-medium">
            Your Digital Growth Partner
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'font-sans text-[16px] font-medium transition-colors duration-200 py-1',
                location.pathname === link.path
                  ? 'text-charcoal border-b-2 border-charcoal pb-0'
                  : 'text-charcoal/70 hover:text-charcoal'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA — Round circle button like the Wix reference */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-charcoal text-white hover:bg-gold transition-colors duration-200 rounded-full w-[110px] h-[110px] text-[13px] font-medium text-center leading-tight"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-charcoal p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ivory border-b border-border-gray shadow-md py-6 px-8 flex flex-col space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'text-base font-medium py-2 border-b border-border-gray/50',
                location.pathname === link.path ? 'text-charcoal font-semibold' : 'text-charcoal/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center bg-charcoal text-white rounded-full w-28 h-28 text-sm font-medium mt-2 mx-auto"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </header>
  );
}
