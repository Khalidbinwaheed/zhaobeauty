import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-glass'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-text-primary tracking-tight">
                Zhao Beauty Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-text-secondary hover:text-gold transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Button - Desktop */}
            <a
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20to%20request%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gold text-white rounded-full text-sm font-medium hover:bg-gold-dark transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>Request Quote</span>
            </a>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-gold/10"
                >
                  <Menu className="w-6 h-6 text-text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] bg-white/95 backdrop-blur-xl border-l border-white/40 p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <span className="font-heading font-bold text-lg">
                      Zhao Beauty Tech
                    </span>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-gold/10"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col p-6 gap-2">
                    {navItems.map((item, index) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className="text-lg font-medium text-text-primary hover:text-gold transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-gold/5"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-auto p-6 border-t border-gray-100">
                    <a
                      href="https://wa.me/923001234567?text=Hi,%20I%20want%20to%20request%20a%20quote"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
