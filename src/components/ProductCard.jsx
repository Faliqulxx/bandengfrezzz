import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppButton } from './WhatsAppButton';
import { hoverLift } from '../lib/motion';

export default function ProductCard({ product, onSelectProduct }) {
  const categoryNames = {
    segar: "Bandeng Segar",
    olahan: "Olahan Bandeng",
    siapsaji: "Presto & Asap",
    bandeng: "Bandeng Premium",
    udang: "Aneka Udang",
    ikan: "Ikan Laut",
    seafood: "Seafood Lain"
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      {...hoverLift}
      className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-hover hover:border-tosca/40 transition-all duration-300 flex flex-col group"
    >
      <div 
        className="relative aspect-[4/3] overflow-hidden bg-ice-subtle cursor-pointer"
        onClick={() => onSelectProduct && onSelectProduct(product)}
      >
        <span className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-10 text-[9.5px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-sm ${
          product.inStock !== false ? "bg-emerald-500/90 text-white" : "bg-slate-600/90 text-white"
        }`}>
          {product.inStock !== false ? "● Tersedia" : "○ Habis"}
        </span>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        <span className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-tosca-dark mb-0.5 sm:mb-1 line-clamp-1">
          {categoryNames[product.category] || product.category}
        </span>

        <h3 
          onClick={() => onSelectProduct && onSelectProduct(product)}
          className="font-heading font-bold text-navy text-xs sm:text-base mb-1 cursor-pointer hover:text-tosca transition-colors leading-snug line-clamp-1"
          title={product.name}
        >
          {product.name}
        </h3>

        <p className="text-[10px] sm:text-xs text-slate-sec mb-2.5 sm:mb-4 line-clamp-1">
          {product.weight}
        </p>

        <div className="mt-auto pt-2.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-1 sm:gap-3">
          <span className="font-heading font-extrabold text-navy text-xs sm:text-lg sm:text-xl whitespace-nowrap">
            {product.priceLabel}
          </span>

          <WhatsAppButton
            product={product.name}
            size={product.weight}
            sizeClass="px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold"
            showDefaultIcon={false}
          >
            Pesan
          </WhatsAppButton>
        </div>
      </div>
    </motion.div>
  );
}
