import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { Categories } from '@/components/sections/Categories';
import { BestSellers } from '@/components/sections/BestSellers';
import { About } from '@/components/sections/About';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
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
        <BestSellers />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
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
