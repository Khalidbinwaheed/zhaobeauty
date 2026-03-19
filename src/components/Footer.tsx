import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const TikTokIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const footerLinks = {
  products: [
    { label: 'Microneedling', href: '#products' },
    { label: 'Laser & IPL', href: '#products' },
    { label: 'HIFU Machines', href: '#products' },
    { label: 'Treatment Kits', href: '#products' },
    { label: 'Serums', href: '#products' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Best Sellers', href: '#best-sellers' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  support: [
    { label: 'FAQs', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Warranty', href: '#' },
    { label: 'Support Center', href: '#' },
  ],
};

const socialLinks = [
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@zhao.beauty.tech', label: 'TikTok' },
  { icon: Instagram, href: 'https://www.instagram.com/zhaobeauty.tech', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/share/17VQ3dr636/', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://wa.me/923119604749', label: 'WhatsApp' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-navy border-t border-white/10">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Zhao Beauty Tech Logo" className="h-12 w-auto object-contain" />
              <span className="font-heading font-bold text-xl text-white">
                Zhao Beauty Tech
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Your trusted partner for professional aesthetic devices in Pakistan.
              Quality products, competitive prices, exceptional support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan" />
                <span className="text-sm">+92 311 9604749</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan" />
                <span className="text-sm">zhaobeautytech@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan" />
                <span className="text-sm">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-cyan transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-gray-400 hover:text-cyan transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Zhao Beauty Tech. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
