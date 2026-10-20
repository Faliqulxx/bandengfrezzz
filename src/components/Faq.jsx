import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import { faqs } from '../data/faq';
import { viewportOnce } from '../lib/motion';
import { createGeneralWhatsAppUrl } from '../lib/whatsapp';
import { WhatsAppIcon } from './WhatsAppButton';

export default function Faq() {
  const [openId, setOpenId] = useState("faq-1");

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-ice">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky Header & Help Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-tosca/12 text-tosca-dark border border-tosca/25 mb-3">
              FAQ & Informasi
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-navy tracking-tight leading-[1.18] mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>

            <p className="text-slate-sec text-base leading-relaxed mb-8">
              Semua info penting seputar penyimpanan di freezer, cara mencairkan (thawing) tanpa merusak rasa, estimasi kirim, dan garansi 100%.
            </p>

            {/* Quick WhatsApp Support Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-wa/15 text-wa flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-navy text-sm">
                    Butuh Bantuan Langsung?
                  </h4>
                  <p className="text-xs text-slate-sec">
                    Admin CS aktif 07.00 - 21.00 WIB
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-sec mb-4">
                Punya pertanyaan di luar daftar ini? Chat tim kami untuk konsultasi langsung.
              </p>
              <a
                href={createGeneralWhatsAppUrl("Halo admin, saya mau tanya informasi tentang produk ikan beku.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold font-heading bg-wa hover:bg-wa-hover text-white shadow-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat Admin CS</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-white border-tosca/60 shadow-md ring-1 ring-tosca/30" 
                      : "bg-white/90 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-navy text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? "bg-tosca text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-sec text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3.5 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
