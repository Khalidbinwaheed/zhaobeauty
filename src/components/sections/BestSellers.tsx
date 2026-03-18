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
                ? 'bg-gold text-white shadow-lg shadow-gold/25'
                : 'bg-white text-text-secondary hover:bg-gold/10 hover:text-gold'
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
                  ? 'bg-gold text-white shadow-lg shadow-gold/25'
                  : 'bg-white text-text-secondary hover:bg-gold/10 hover:text-gold'
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
                  <div className="absolute top-3 left-3 px-3 py-1 bg-gold text-white text-xs font-medium rounded-full">
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
                          ? 'text-gold fill-gold'
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
                  className="font-heading font-semibold text-lg text-text-primary mb-2 cursor-pointer hover:text-gold transition-colors duration-300 line-clamp-1"
                >
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-heading font-bold text-xl text-gold">
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
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-xl border-white/40 rounded-3xl p-0">
          {selectedProduct && (
            <>
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedProduct.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-medium rounded-full">
                      {selectedProduct.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-6 md:p-8">
                  <DialogHeader>
                    <DialogTitle className="font-heading font-bold text-2xl text-text-primary mb-2">
                      {selectedProduct.name}
                    </DialogTitle>
                  </DialogHeader>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(selectedProduct.rating)
                            ? 'text-gold fill-gold'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-text-secondary ml-1">
                      {selectedProduct.rating} out of 5
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-heading font-bold text-3xl text-gold">
                      {formatPrice(selectedProduct.price)}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-lg text-text-secondary line-through">
                        {formatPrice(selectedProduct.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-text-primary mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.slice(0, 4).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Package Includes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-text-primary mb-3">
                      Package Includes:
                    </h4>
                    <ul className="space-y-1">
                      {selectedProduct.packageIncludes.slice(0, 3).map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => handleWhatsAppOrder(selectedProduct)}
                    className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Order on WhatsApp
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
