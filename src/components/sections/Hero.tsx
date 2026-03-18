import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Card entrance
      tl.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      );

      // Label
      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.5'
      );

      // Title
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      );

      // Body
      tl.fromTo(
        bodyRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      );

      // Buttons
      tl.fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
        '-=0.2'
      );

      // Image
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 0.7 },
        '-=0.6'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center vignette overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Main Glass Card */}
      <div
        ref={cardRef}
        className="relative w-[92vw] max-w-[1100px] min-h-[520px] h-[62vh] max-h-[700px] glass-card mx-auto opacity-0"
      >
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-16 order-2 lg:order-1">
            {/* Label */}
            <span
              ref={labelRef}
              className="section-label mb-4 opacity-0 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              AESTHETIC DEVICES
            </span>

            {/* Title */}
            <h1
              ref={titleRef}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-text-primary mb-2 opacity-0"
            >
              Professional
            </h1>
            <span
              ref={subtitleRef}
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient mb-6 opacity-0"
            >
              Aesthetic Technology
            </span>

            {/* Body */}
            <p
              ref={bodyRef}
              className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-md mb-8 opacity-0"
            >
              High-performance devices for microneedling, laser, HIFU, and skin
              rejuvenation—trusted by clinics and beauty professionals across
              Pakistan.
            </p>

            {/* CTAs */}
            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProducts}
                className="btn-primary flex items-center gap-2 opacity-0"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToContact}
                className="btn-secondary opacity-0"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={imageRef}
            className="lg:w-[48%] h-64 lg:h-full relative order-1 lg:order-2 opacity-0"
          >
            <div className="absolute inset-0 p-4 lg:p-6">
              <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden">
                <img
                  src="/images/hero-device.jpg"
                  alt="Professional Aesthetic Device"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 sm:gap-10 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm text-text-secondary whitespace-nowrap">
            100% Original
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-2 h-2 bg-gold rounded-full" />
          <span className="text-sm text-text-secondary">Trusted by Clinics</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-xs sm:text-sm text-text-secondary whitespace-nowrap">
            Fast Delivery
          </span>
        </div>
      </div>
    </section>
  );
}
