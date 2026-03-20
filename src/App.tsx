import { useEffect, Suspense, lazy } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { Categories } from '@/components/sections/Categories';

// Lazy loaded sections for faster initial load
const BestSellers = lazy(() => import('@/components/sections/BestSellers').then(module => ({ default: module.BestSellers })));
const About = lazy(() => import('@/components/sections/About').then(module => ({ default: module.About })));
const WhyChooseUs = lazy(() => import('@/components/sections/WhyChooseUs').then(module => ({ default: module.WhyChooseUs })));
const Contact = lazy(() => import('@/components/sections/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('@/components/Footer').then(module => ({ default: module.Footer })));

import { Toaster } from '@/components/ui/sonner';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-cloud">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <Categories />
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-gray-400">Loading section...</div>}>
          <BestSellers />
          <About />
          <WhyChooseUs />
          <Contact />
        </Suspense>
      </main>
      
      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      {/* Toast notifications */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(212, 160, 90, 0.2)',
            borderRadius: '16px',
          },
        }}
      />
    </div>
  );
}

export default App;
