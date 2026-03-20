import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
        throw new Error('Please configure VITE_WEB3FORMS_ACCESS_KEY in your .env file');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Contact Form Submission - ZHAO Beauty Tech',
          from_name: formData.name || 'Website Visitor',
          replyto: formData.email, // Enables Web3Forms auto-reply if Pro is active
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Message Sent Successfully!',
          description: 'Thank you for reaching out. We will get back to you within 24 hours.',
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: error instanceof Error ? error.message : 'Failed to send message. Please try again or use WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    if (!formData.message && !formData.name) {
      const message = 'Hi, I am interested in your products. Can you provide more information?';
      window.open(`https://wa.me/923119604749?text=${encodeURIComponent(message)}`, '_blank');
      return;
    }
    
    // Format structured message matching form
    const message = `*New Inquiry from Website*\n\n*Name:* ${formData.name || 'N/A'}\n*Email:* ${formData.email || 'N/A'}\n*Phone:* ${formData.phone || 'N/A'}\n\n*Message:*\n${formData.message}`;
    window.open(`https://wa.me/923119604749?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: 'Opening WhatsApp...',
      description: 'You can now send your message directly to our WhatsApp.',
    });
  };

  const openWhatsApp = () => {
    const message = 'Hi, I am interested in your products. Can you provide more information?';
    const whatsappUrl = `https://wa.me/923119604749?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-navy overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-navy/80 via-navy to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(30,38,52,0.6),rgba(11,15,23,1)_70%)]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div ref={contentRef} className="opacity-0">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-cyan mb-4 block">
              GET IN TOUCH
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Equip Your{' '}
              <span className="text-gradient">Clinic?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Tell us what you need. We'll recommend the right device and send a
              quote within one business day. Our team is always ready to help you
              make the best choice for your business.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone / WhatsApp</h4>
                  <p className="text-gray-400">+92 311 9604749</p>
                  <p className="text-gray-500 text-sm">Mon-Sat, 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-400">zhaobeautytech@gmail.com</p>
                  <p className="text-gray-500 text-sm">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-400">Lahore, Pakistan</p>
                  <p className="text-gray-500 text-sm">Nationwide delivery</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>

          {/* Right Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 opacity-0"
          >
            <h3 className="font-heading font-semibold text-2xl text-white mb-6">
              Send us a Message
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan focus:ring-cyan/20 rounded-xl h-12"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan focus:ring-cyan/20 rounded-xl h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="+92 311 9604749"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan focus:ring-cyan/20 rounded-xl h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan focus:ring-cyan/20 rounded-xl min-h-[120px] resize-none"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 bg-cyan hover:bg-cyan-dark text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Email
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
