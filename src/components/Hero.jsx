import React from 'react';
import { motion } from 'framer-motion';
import { Check, Snowflake, Truck, Star, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { tapPress } from '../lib/motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 lg:pb-24">
      {/* Background Freezer Image — Reaches All The Way to Navbar & Top */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-freezer-bg.webp"
          alt="Display Freezer Seafood Bandeng Freeze"
          className="w-full h-full object-cover object-right md:object-center"
          loading="eager"
        />

        {/* Soft Natural Fog/Mist Gradient Wash (NO grid/border, seamless fade across hero) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(245, 250, 252, 0.94) 0%, rgba(245, 250, 252, 0.88) 26%, rgba(245, 250, 252, 0.70) 42%, rgba(245, 250, 252, 0.25) 58%, transparent 75%)",
          }}
        />

        {/* Mobile & Tablet Full Translucent Fog */}
        <div
          className="absolute inset-0 lg:hidden pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245, 250, 252, 0.92) 0%, rgba(245, 250, 252, 0.85) 60%, rgba(245, 250, 252, 0.65) 100%)",
          }}
        />
      </div>

      {/* Main Hero Content (Completely Free-Floating, NO Box, NO Border, NO Grid) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Pure Clean Text Floating Seamlessly over the Background */}
          <div className="lg:col-span-7 xl:col-span-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Pill Badge: Live Stock & Rating */}
              <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-sm border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-sm mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-navy tracking-tight">
                  Panen Baru Minggu Ini
                </span>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>4.9/5 (850+ Ulasan)</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-[2.35rem] sm:text-5xl lg:text-[3.25rem] font-extrabold font-heading text-navy tracking-tight leading-[1.12] mb-5">
                Bandeng Beku Segar,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-tosca-dark to-tosca">
                  Bersih & Siap Masak
                </span>
              </h1>

              {/* Sub-headline Paragraph */}
              <p className="text-base sm:text-lg text-slate-sec max-w-xl leading-relaxed mb-8 font-normal">
                Langsung dari tambak pilihan, disiangi bersih tanpa bau lumpur, dan dibekukan cepat (-18°C) untuk mengunci manisnya daging. Dikirim beku rapi sampai dapur Anda.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-9">
                <WhatsAppButton 
                  sizeClass="px-7 py-3.5 text-base justify-center shadow-md hover:shadow-lg"
                  message="Halo Bandeng Freeze, saya mau pesan bandeng beku segar. Mohon info pilihan paket & ongkir hari ini."
                >
                  Pesan via WhatsApp
                </WhatsAppButton>

                <motion.a
                  href="#produk-bandeng"
                  {...tapPress}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold font-heading text-sm sm:text-base text-navy bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
                >
                  <span>Lihat Produk</span>
                  <ArrowRight className="w-4 h-4 text-tosca" />
                </motion.a>
              </div>

              {/* 3 Trust Badges: Clean Inline Icons (NO pill borders, exactly matching image) */}
              <div className="pt-5 border-t border-slate-200/60 flex flex-wrap items-center gap-5 sm:gap-7 text-xs font-semibold text-navy">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.8]" />
                  <span>Tanpa Pengawet</span>
                </div>
                <div className="flex items-center gap-2">
                  <Snowflake className="w-4 h-4 text-tosca-dark" />
                  <span>Beku Cepat IQF</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-shrimp" />
                  <span>Garansi Dingin</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Open window onto the freezer showcase with cold vapor mist & seafood */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

        </div>
      </div>
    </section>
  );
}
