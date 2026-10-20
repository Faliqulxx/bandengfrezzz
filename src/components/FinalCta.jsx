import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppButton } from './WhatsAppButton';
import { viewportOnce } from '../lib/motion';

export default function FinalCta() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white relative overflow-hidden text-center">
      {/* Decorative Moving Wave Elements & Ambient Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-tosca rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.2, 0.12]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-shrimp rounded-full blur-3xl pointer-events-none"
      />

      {/* Decorative Wave Line at Bottom */}
      <div className="absolute inset-x-0 bottom-0 opacity-15 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-16">
          <path
            d="M0 60 C 360 120, 720 0, 1080 60 C 1260 90, 1380 30, 1440 60 L 1440 120 L 0 120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-tosca-light mb-6 border border-white/15">
            Pesan Praktis Hari Ini
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-6 leading-tight">
            Siap Menikmati Ikan Segar Berkualitas di Rumah Anda?
          </h2>

          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Praktis, higienis, dan tanpa repot bersihkan sisik/kotoran. Pesan sekarang dan rasakan gurihnya bandeng premium loss tanpa duri langsung dari tambak terbaik hari ini.
          </p>

          {/* CTA Button with Pulsing Ring Attention Effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative inline-flex items-center justify-center">
              {/* Outer Pulse Ring */}
              <motion.span
                animate={{
                  scale: [1, 1.35, 1.45],
                  opacity: [0.6, 0.2, 0]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute inset-0 rounded-full bg-wa pointer-events-none"
              />
              <WhatsAppButton sizeClass="px-8 py-4 text-base relative z-10 shadow-xl hover:shadow-2xl">
                Pesan via WhatsApp Sekarang
              </WhatsAppButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
