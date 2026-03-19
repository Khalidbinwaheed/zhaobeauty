import { useEffect, useRef, useState } from 'react';
import { Star, ShoppingBag, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products, categories } from '@/data/products';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';

gsap.registerPlugin(ScrollTrigger);

export function BestSellers() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

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

      // Filters animation
      gsap.fromTo(
        filtersRef.current?.children || [],
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          scrollTrigger: {
            trigger: filtersRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Grid animation
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProducts]);

  const openProductDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hi, I want to order ${product.name} (Rs ${product.price.toLocaleString()})`;
    const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatPrice = (price: number) => {
    return `Rs ${price.toLocaleString()}`;
  };

  return (
    <section
      id="best-sellers"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 vignette"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-10 opacity-0">
          <span className="section-label mb-4 block">BEST SELLERS</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            Popular <span className="text-gradient">Products</span>
          </h2>
          <p className="text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
            Clinic-tested devices with reliable support and clear pricing
          </p>
        </div>

        {/* Category Filters */}
        <div
          ref={filtersRef}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-cyan text-white shadow-lg shadow-cyan/25'
                : 'bg-white text-text-secondary hover:bg-cyan/10 hover:text-cyan'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-cyan text-white shadow-lg shadow-cyan/25'
                  : 'bg-white text-text-secondary hover:bg-cyan/10 hover:text-cyan'
              }`}
            >
              {cat.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-glass-lg hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-cyan text-white text-xs font-medium rounded-full">
                    {product.badge}
                  </div>
                )}
                
                {/* Discount badge */}
                {product.originalPrice && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}% OFF
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-cyan fill-cyan'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-text-secondary ml-1">
                    ({product.rating})
                  </span>
                </div>

                {/* Name */}
                <h3
                  onClick={() => openProductDialog(product)}
                  className="font-heading font-semibold text-lg text-text-primary mb-2 cursor-pointer hover:text-cyan transition-colors duration-300 line-clamp-1"
                >
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-heading font-bold text-xl text-cyan">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-text-secondary line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleWhatsAppOrder(product)}
                  className="w-full py-3 bg-[#25D366] text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[95vw] max-w-5xl md:h-[85vh] max-h-[90vh] overflow-y-auto md:overflow-hidden bg-white border-white/40 rounded-[2rem] p-0 custom-scrollbar shadow-2xl">
          {selectedProduct && (
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Section - Fixed on Desktop */}
              <div className="w-full md:w-[45%] lg:w-[40%] h-[40vh] md:h-full relative shrink-0 bg-gray-50 hidden md:block">
                 <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
                  {selectedProduct.badge && (
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-cyan text-white text-sm font-semibold tracking-wide rounded-full shadow-lg shadow-cyan/30">
                      {selectedProduct.badge}
                    </div>
                  )}
              </div>
              
              {/* Mobile Image (rendered normal in flex flow) */}
              <div className="w-full h-72 relative shrink-0 bg-gray-50 md:hidden">
                 <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
                  {selectedProduct.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-cyan text-white text-xs font-semibold tracking-wide rounded-full shadow-lg shadow-cyan/30">
                      {selectedProduct.badge}
                    </div>
                  )}
              </div>

              {/* Content Section - Scrollable */}
              <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col md:overflow-y-auto custom-scrollbar relative">
                <div className="p-6 md:p-8 lg:p-12 flex-1">
                  <DialogHeader className="mb-4 text-left">
                    <DialogTitle className="font-heading font-bold text-2xl md:text-3xl text-text-primary leading-tight">
                      {selectedProduct.name}
                    </DialogTitle>
                  </DialogHeader>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 md:w-5 md:h-5 ${
                            i < Math.floor(selectedProduct.rating)
                              ? 'text-cyan fill-cyan'
                              : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-text-secondary bg-gray-100 px-2 py-0.5 rounded-full ml-2">
                      {selectedProduct.rating} / 5.0
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-4 mb-8 bg-cyan/5 p-4 rounded-2xl border border-cyan/10">
                    <span className="font-heading font-black text-3xl md:text-4xl text-cyan">
                      {formatPrice(selectedProduct.price)}
                    </span>
                    {selectedProduct.originalPrice && (
                      <div className="flex flex-col">
                        <span className="text-xs md:text-sm text-text-secondary font-medium uppercase tracking-wider mb-0.5">Original Price</span>
                        <span className="text-base md:text-lg text-red-400 font-semibold line-through decoration-red-400/50">
                          {formatPrice(selectedProduct.originalPrice)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-10">
                    <h4 className="font-semibold text-base text-text-primary mb-3">Product Overview</h4>
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="mb-10">
                    <h4 className="font-semibold text-base text-text-primary mb-4">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {selectedProduct.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-cyan/5 hover:border-cyan/20 transition-colors"
                        >
                          <div className="mt-0.5 w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 text-cyan" />
                          </div>
                          <span className="text-sm text-text-secondary leading-snug font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Package Includes */}
                  {selectedProduct.packageIncludes.length > 0 && (
                    <div className="mb-6 p-6 rounded-3xl bg-gray-50 border border-gray-100">
                      <h4 className="font-semibold text-base text-text-primary mb-4 flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-cyan" />
                        What's in the Box?
                      </h4>
                      <ul className="space-y-3">
                        {selectedProduct.packageIncludes.map((item, i) => (
                           <li
                            key={i}
                            className="flex items-center gap-3 text-sm text-text-primary font-medium"
                          >
                            <span className="w-2 h-2 bg-cyan rounded-full flex-shrink-0 shadow-sm shadow-cyan/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA - Fixed to bottom of scroll area */}
                <div className="sticky bottom-0 p-6 md:px-8 md:py-6 mt-auto bg-white/95 backdrop-blur-md border-t border-gray-100/80 z-20 w-full shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                  <Button
                    onClick={() => handleWhatsAppOrder(selectedProduct)}
                    className="w-full py-6 md:py-7 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#25D366]/20 hover:shadow-[#128C7E]/30 hover:-translate-y-1"
                  >
                    <ShoppingBag className="w-6 h-6 mb-0.5" />
                    Place Order on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
