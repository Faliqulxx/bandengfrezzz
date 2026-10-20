import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { viewportOnce } from '../lib/motion';

export default function WholesaleBanner() {
  return (
    <section id="grosir" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-r from-navy-dark via-navy to-navy-light text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          {/* Subtle Ambient Background Gradients & Soft Moving Sheen */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-tosca/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-shrimp/10 rounded-full blur-3xl pointer-events-none -ml-20"></div>
          <motion.div
            animate={{ x: ["-100%", "250%"] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear", repeatDelay: 3 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
          />

          {/* Left Text */}
          <div className="max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur-md text-tosca-light mb-4">
              <Building2 className="w-3.5 h-3.5" />
              Mitra Bisnis & Grosir
            </span>

            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight mb-4">
              Beli Banyak Lebih Hemat — Khusus Restoran, Warung & Reseller
            </h3>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Dapatkan harga partai khusus untuk kebutuhan pasokan katering, rumah makan seafood, warteg, atau Anda yang ingin memulai bisnis reseller frozen food di kota Anda. Pasokan stabil sepanjang tahun dengan faktur resmi.
            </p>
          </div>

          {/* Right Action Button - Fixed layout: icon + text + arrow strictly in ONE row */}
          <div className="relative z-10 flex-shrink-0">
            <WhatsAppButton
              variant="shrimp"
              message="Halo Bandeng Freeze, saya pemilik usaha/resto/katering dan tertarik info daftar harga grosir & minimal order."
              sizeClass="px-7 py-4 text-sm sm:text-base"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg font-bold"
            >
              <span>Daftar Harga Grosir</span>
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
