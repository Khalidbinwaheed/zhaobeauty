import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { categories } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

export function Categories() {
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

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.98 },
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

  const scrollToProducts = (_categoryId: string) => {
    const element = document.querySelector('#best-sellers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 vignette"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="section-label mb-4 block">CATEGORIES</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            Explore Our <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
            Professional-grade aesthetic devices and supplies for clinics and
            beauty experts
          </p>
        </div>

        {/* Category Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => scrollToProducts(category.id)}
              className="group cursor-pointer"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-glass-lg hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Product count badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-text-primary">
                      {category.productCount} Products
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-text-primary mb-2 group-hover:text-gold transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 ml-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
