import { useEffect, useRef } from 'react';
import { Shield, BadgeCheck, HeadphonesIcon, Truck, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: 'Original Products',
    description:
      'All our devices are sourced directly from certified manufacturers with complete authenticity guarantee.',
  },
  {
    icon: BadgeCheck,
    title: 'Competitive Pricing',
    description:
      'We offer the best prices in Pakistan without compromising on quality. Bulk discounts available.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description:
      'Our technical team provides comprehensive guidance on device usage, maintenance, and troubleshooting.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'Nationwide shipping with careful packaging. Most orders delivered within 3-5 business days.',
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
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
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 vignette overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="section-label mb-4 block flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" />
            WHY CHOOSE US
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            Why Clinics Trust{' '}
            <span className="text-gradient">Zhao Beauty Tech</span>
          </h2>
          <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
            We focus on consistent supply, transparent specs, and after-sales
            support that keeps your business running smoothly.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-card transition-all duration-500 hover:shadow-glass-lg hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-gold group-hover:to-gold-dark transition-all duration-500">
                <feature.icon className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">
            Have questions? We're here to help you choose the right equipment.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white rounded-full font-medium hover:bg-gold-dark transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
            <Sparkles className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
