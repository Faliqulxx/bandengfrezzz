import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-dark/70 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-navy flex items-center justify-center shadow-md transition-all hover:scale-105"
            aria-label="Tutup popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-ice-subtle">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className={`absolute bottom-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${product.badgeColor || "bg-navy text-white"}`}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-7 overflow-y-auto">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-heading font-extrabold text-navy text-2xl">
                {product.name}
              </h3>
              <span className="text-xs font-bold bg-tosca-light text-tosca-dark px-3 py-1 rounded-full whitespace-nowrap">
                {product.weight}
              </span>
            </div>

            <p className="text-slate-sec text-sm sm:text-base leading-relaxed mb-6">
              {product.description || "Diproses higienis, dibekukan cepat dengan standar kualitas food-grade, cocok untuk sajian istimewa keluarga atau usaha Anda."}
            </p>

            {product.perks && (
              <div className="flex flex-wrap gap-2 mb-6">
                {product.perks.map((perk) => (
                  <span
                    key={perk}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-main bg-ice-subtle border border-slate-200/60 px-3 py-1 rounded-lg"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                    <span>{perk}</span>
                  </span>
                ))}
              </div>
            )}

            {/* Price and CTA */}
            <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                  Harga
                </span>
                <div className="font-heading font-extrabold text-navy text-2xl">
                  {product.priceLabel}
                </div>
              </div>

              <WhatsAppButton
                product={product.name}
                size={product.weight}
                sizeClass="px-6 py-3.5 text-sm"
              >
                Pesan Sekarang
              </WhatsAppButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
