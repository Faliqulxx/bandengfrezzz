import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';
import ProductCard from './ProductCard';
import { otherProducts } from '../data/products';

export default function ProductGrid({ onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'olahan', label: '🍢 Otak-Otak' },
    { id: 'segar', label: '🐟 Bandeng Segar' },
    { id: 'siapsaji', label: '🔥 Presto & Asap' },
  ];

  const filteredProducts = activeTab === 'all'
    ? otherProducts
    : otherProducts.filter(p => p.category === activeTab);

  return (
    <Section
      id="katalog-produk"
      tag="Katalog Lengkap"
      title="Katalog Produk Pilihan Bandeng Freeze"
      subtitle="Pilihan lengkap aneka otak-otak, bandeng cabut duri, frozen segar, dan presto empuk kemasan vacuum higienis siap masak."
      align="split"
      headerRight={
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold font-heading transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-slate-sec hover:text-navy bg-white border border-slate-200 hover:border-tosca"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProductTab"
                    className="absolute inset-0 bg-navy rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      }
      className="py-16 md:py-24 bg-ice"
    >
      {/* Animated Product Grid: 2 columns on mobile (kiri-kanan), 3 columns on desktop */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
