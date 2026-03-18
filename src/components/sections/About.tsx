import { useEffect, useRef } from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Award, value: '500+', label: 'Products Delivered' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Globe, value: '15+', label: 'Cities Covered' },
  { icon: TrendingUp, value: '99%', label: 'Satisfaction Rate' },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats animation
      const statItems = statsRef.current?.children;
      if (statItems) {
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 vignette overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="opacity-0">
            <span className="section-label mb-4 block">ABOUT US</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
              Your Trusted Partner in{' '}
              <span className="text-gradient">Aesthetic Technology</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Zhao Beauty Tech is a leading supplier of professional aesthetic
                devices in Pakistan. We specialize in bringing high-quality beauty
                technology from certified manufacturers directly to clinics, spas,
                and beauty professionals.
              </p>
              <p>
                Our mission is simple: provide original products at competitive
                prices with exceptional after-sales support. We believe that every
                beauty professional deserves access to world-class equipment
                without breaking the bank.
              </p>
              <p>
                From microneedling devices to laser systems, HIFU machines to
                treatment serums—we carefully curate our product range to ensure
                only the best makes it to your clinic.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-text-secondary">
                  100% Original Products
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm text-text-secondary">
                  Warranty Included
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm text-text-secondary">
                  Expert Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-glass-lg">
              <img
                src="/images/kit-contents.jpg"
                alt="Professional Aesthetic Kit"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-xl rounded-2xl">
                <p className="font-heading font-semibold text-lg text-text-primary mb-2">
                  "Quality you can trust, service you can rely on"
                </p>
                <p className="text-sm text-text-secondary">
                  — Zhao Beauty Tech Team
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 lg:mt-24"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-card hover:shadow-glass transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="font-heading font-bold text-3xl lg:text-4xl text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
