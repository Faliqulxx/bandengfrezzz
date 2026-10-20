import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Flame, 
  Star, 
  Snowflake, 
  Wind, 
  ShoppingCart, 
  ArrowRight, 
  Eye, 
  ShoppingBag, 
  Scissors 
} from 'lucide-react';
import { bandengProducts } from '../data/products';
import { createProductWhatsAppUrl } from '../lib/whatsapp';
import { viewportOnce } from '../lib/motion';

export default function FeaturedBandeng({ onSelectProduct }) {
  const getBadgeIcon = (type) => {
    switch (type) {
      case "fire":
        return <Flame className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-current" />;
      case "star":
        return <Star className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-current" />;
      case "snowflake":
        return <Snowflake className="w-3 h-3 lg:w-3.5 lg:h-3.5" />;
      case "smoke":
        return <Wind className="w-3 h-3 lg:w-3.5 lg:h-3.5" />;
      default:
        return null;
    }
  };

  const getPillIcon = (iconName) => {
    switch (iconName) {
      case "weight":
        return <ShoppingBag className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />;
      case "scissors":
        return <Scissors className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />;
      case "fire":
        return <Flame className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />;
      case "snowflake":
        return <Snowflake className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />;
      case "leaf":
        return <Wind className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />;
      default:
        return <ShoppingBag className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />;
    }
  };

  return (
    <section 
      id="produk-bandeng" 
      className="relative py-8 sm:py-10 md:py-12 lg:py-12 2xl:py-16 overflow-hidden bg-[#EBF7FF]"
    >
      {/* 
        Full-Bleed Edge-to-Edge Background:
        Extends 100% across the full viewport on both laptop and 24-inch monitor.
        Uses responsive object positioning so the fish on ice, water waves, and ice bed 
        stay naturally proportioned without over-cropping.
      */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img 
          src="/images/bandeng-section-bg.webp" 
          alt="Bandeng Freeze Background" 
          className="w-full h-full object-cover object-[center_15%] 2xl:object-[center_10%]"
        />
        {/* Soft edge blend transitions */}
        <div className="absolute inset-x-0 top-0 h-10 lg:h-12 bg-gradient-to-b from-white/75 via-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-12 lg:h-16 bg-gradient-to-t from-white/85 via-white/30 to-transparent" />
      </div>

      {/* 
        Main Responsive Content Container:
        - On Laptop (1366px-1440px): Stays compact (~1260px), keeping the layout that already looks great!
        - On 24" Monitor (1920px): Expands generously (w-[86%] max-w-[1650px]), so Card 4 sits directly
          under the Fish on Ice, Card 1 sits directly under the Title, and the 4 cards span luxuriously 
          across the screen exactly like Mockup Gambar 3!
      */}
      <div className="relative w-[94%] sm:w-[92%] lg:w-[90%] 2xl:w-[86%] max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-6 z-10">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="relative mb-5 sm:mb-6 lg:mb-7 2xl:mb-9 flex flex-col md:flex-row md:items-end justify-between gap-4">
          
          {/* Left: Tag + Title + Subtitle */}
          <div className="max-w-md lg:max-w-lg 2xl:max-w-xl flex-1">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] 2xl:text-xs font-bold bg-[#E0F2FE]/95 backdrop-blur-sm text-[#0284C7] shadow-sm mb-2"
            >
              <span>⭐</span>
              <span className="tracking-wide uppercase text-[10px] sm:text-[11px] 2xl:text-xs">PRODUK UNGGULAN</span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-2xl sm:text-3xl lg:text-[2.35rem] 2xl:text-[2.75rem] font-extrabold font-heading text-[#0B3C5D] tracking-tight leading-[1.18] mb-1.5 sm:mb-2 drop-shadow-sm"
            >
              Bandeng, Andalan Kami
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-slate-600 text-xs sm:text-sm 2xl:text-[15px] leading-relaxed max-w-sm sm:max-w-md lg:max-w-xl"
            >
              Diproses higienis dari tambak pilihan dengan kontrol suhu ketat (-18°C), disiangi bersih, dan 100% bebas bau lumpur.
            </motion.p>
          </div>

          {/* Center: Stamp "Segar Berkualitas Terpercaya" */}
          <div className="hidden md:flex flex-col items-center -rotate-6 select-none pointer-events-none px-4 lg:px-6 2xl:px-10 mb-2">
            <div className="text-center font-bold tracking-wide text-[#0284C7] drop-shadow-sm">
              <span className="block text-xs lg:text-sm 2xl:text-base font-extrabold italic leading-tight">Segar</span>
              <span className="block text-[10px] lg:text-xs 2xl:text-sm font-bold italic leading-tight">Berkualitas</span>
              <span className="block text-xs lg:text-sm 2xl:text-base font-extrabold italic leading-tight">Terpercaya</span>
            </div>
            {/* Hand-drawn curved arrow/swoosh */}
            <svg className="w-8 h-5 lg:w-9 lg:h-6 2xl:w-11 2xl:h-7 text-[#0284C7] -rotate-12 mt-0.5" viewBox="0 0 40 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6 C 14 2, 28 6, 32 20 M24 18 L32 20 L30 11" />
            </svg>
          </div>

          {/* Right: Transparent Spacer mapped directly above Card 4 and the Fish on Ice */}
          <div className="hidden md:block w-36 md:w-44 lg:w-60 2xl:w-80 h-16 md:h-20 lg:h-24 2xl:h-32 flex-shrink-0 pointer-events-none" />
        </div>

        {/* 
          ================= 4-CARD GRID LAYOUT ================= 
          Exact 4-column layout matching Gambar 3 on Laptop, 24" Monitor, and Tablet (md+).
          On 24" monitors (2xl), the cards span up to 1650px so Card 4 sits right below 
          the Fish on Ice with beautiful, balanced proportions!
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 2xl:gap-6">
          {bandengProducts.map((product, index) => {
            const waUrl = createProductWhatsAppUrl(product.name, product.weight);

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-4px_rgba(11,60,93,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(11,60,93,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* 1. Image Container with Badges */}
                <div className="relative">
                  <div 
                    className="relative aspect-[16/10] overflow-hidden bg-slate-50 cursor-pointer"
                    onClick={() => onSelectProduct && onSelectProduct(product)}
                  >
                    {/* Top Left Badge */}
                    {product.badge && (
                      <div className={`absolute top-2.5 left-2.5 2xl:top-3 2xl:left-3 z-10 px-2.5 py-0.5 2xl:px-3 2xl:py-1 rounded-full text-[10px] 2xl:text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1 ${product.badgeColor}`}>
                        {getBadgeIcon(product.badgeType)}
                        <span>{product.badge}</span>
                      </div>
                    )}

                    {/* Top Right Badge (Tersedia) */}
                    <div className="absolute top-2.5 right-2.5 2xl:top-3 2xl:right-3 z-10 px-2.5 py-0.5 2xl:px-3 2xl:py-1 rounded-full text-[10px] 2xl:text-xs font-bold shadow-sm flex items-center gap-1 bg-[#10B981] text-white">
                      <Check className="w-2.5 h-2.5 2xl:w-3 2xl:h-3 stroke-[3]" />
                      <span>Tersedia</span>
                    </div>

                    {/* Product Photo */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 2. Card Content Body */}
                <div className="p-3.5 sm:p-4 lg:p-4.5 2xl:p-5 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Product Title */}
                    <h3 
                      onClick={() => onSelectProduct && onSelectProduct(product)}
                      className="font-heading font-extrabold text-[#0B3C5D] text-base lg:text-[17px] 2xl:text-xl hover:text-[#0284C7] transition-colors cursor-pointer leading-snug mb-2 line-clamp-1"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* Attribute Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                      {product.pills ? (
                        product.pills.map((pill, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center gap-1 text-[11px] 2xl:text-xs font-semibold text-[#0369A1] bg-[#F0F9FF] border border-sky-100 px-2 2xl:px-2.5 py-0.5 2xl:py-1 rounded-lg"
                          >
                            {getPillIcon(pill.icon)}
                            <span className="truncate">{pill.text}</span>
                          </span>
                        ))
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] 2xl:text-xs font-semibold text-[#0369A1] bg-[#F0F9FF] border border-sky-100 px-2 py-0.5 rounded-lg">
                          <ShoppingBag className="w-3.5 h-3.5 text-[#0284C7]" />
                          <span>{product.weight}</span>
                        </span>
                      )}
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-500 text-xs 2xl:text-[13px] leading-relaxed mb-3 line-clamp-2 min-h-[32px] 2xl:min-h-[36px]">
                      {product.description}
                    </p>

                    {/* 2-Item Checklist */}
                    <ul className="space-y-1 2xl:space-y-1.5 mb-3.5 2xl:mb-4">
                      {product.perks.slice(0, 2).map((perk, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-xs 2xl:text-[13px] font-semibold text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3] flex-shrink-0" />
                          <span className="truncate">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. Action Buttons Row: [Pesan Sekarang ➔] & [Detail] */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100/90">
                    {/* Dark Navy WhatsApp Order Button */}
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0B3C5D] hover:bg-[#07283e] active:scale-95 text-white text-xs 2xl:text-sm font-bold py-2.5 2xl:py-3 px-3 2xl:px-4 rounded-full flex items-center justify-center gap-1.5 shadow-sm transition-all whitespace-nowrap"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 flex-shrink-0" />
                      <span>Pesan Sekarang</span>
                      <ArrowRight className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 flex-shrink-0" />
                    </a>

                    {/* Light Sky Blue Detail Button */}
                    <button
                      type="button"
                      onClick={() => onSelectProduct && onSelectProduct(product)}
                      className="bg-[#E0F2FE] hover:bg-[#BAE6FD] active:scale-95 text-[#0284C7] text-xs 2xl:text-sm font-bold py-2.5 2xl:py-3 px-3 2xl:px-4 rounded-full flex items-center justify-center gap-1 transition-all whitespace-nowrap flex-shrink-0"
                    >
                      <Eye className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 flex-shrink-0" />
                      <span>Detail</span>
                    </button>
                  </div>
                </div>

                {/* Decorative Bottom-Right Wave / Water Curve */}
                <div className="absolute -bottom-1 -right-1 w-14 h-14 2xl:w-16 2xl:h-16 pointer-events-none rounded-br-3xl overflow-hidden z-0">
                  <div className="absolute bottom-0 right-0 w-16 h-16 2xl:w-20 2xl:h-20 bg-gradient-to-tl from-sky-200/50 via-sky-100/30 to-transparent rounded-tl-full" />
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
