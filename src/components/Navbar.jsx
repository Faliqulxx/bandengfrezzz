import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('produk-bandeng');

  const navLinks = [
    { name: "Produk", href: "#produk-bandeng", targetId: "produk-bandeng" },
    { name: "Keunggulan", href: "#keunggulan", targetId: "keunggulan" },
    { name: "Cara Pesan", href: "#cara-pesan", targetId: "cara-pesan" },
    { name: "Grosir", href: "#grosir", targetId: "grosir" },
    { name: "Testimoni", href: "#testimoni", targetId: "testimoni" },
    { name: "FAQ", href: "#faq", targetId: "faq" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll offset
      const scrollPos = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].targetId);
        if (section) {
          const top = section.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(navLinks[i].targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100" 
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group py-0.5" aria-label="Bandeng Freeze - Beranda">
            <img 
              src="/images/logo-transparent.webp" 
              alt="Bandeng Freeze - Loss Tanpa Duri" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links with Active Animated Indicator */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative py-1.5 ${
                    isActive ? "text-navy font-bold" : "text-slate-sec hover:text-navy"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-tosca rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <WhatsAppButton sizeClass="px-5 py-2 text-sm">
                Pesan
              </WhatsAppButton>
            </div>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-navy hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy-dark/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-72 max-w-[80vw] h-full bg-white z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                  <div className="flex items-center">
                    <img 
                      src="/images/logo-transparent.webp" 
                      alt="Bandeng Freeze" 
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
                    aria-label="Tutup menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-bold text-navy py-2.5 px-3 rounded-xl hover:bg-ice transition-colors flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <span className="text-slate-300">➔</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <WhatsAppButton sizeClass="w-full py-3.5 text-sm justify-center">
                  Chat WhatsApp
                </WhatsAppButton>
                <p className="text-center text-xs text-slate-400 mt-3">
                  Buka setiap hari: 07.00 - 21.00 WIB
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
