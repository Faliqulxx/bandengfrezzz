import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageSquare, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import { viewportOnce } from '../lib/motion';

export default function HowToOrder() {
  const steps = [
    {
      num: "01",
      icon: ShoppingCart,
      title: "Pilih Varian Produk",
      desc: "Tentukan varian bandeng atau seafood favorit Anda di katalog. Klik tombol 'Pesan via WhatsApp'."
    },
    {
      num: "02",
      icon: MessageSquare,
      title: "Konfirmasi Chat WA",
      desc: "Format pesanan otomatis terisi. Admin kami langsung mengecek stok segar dan menghitung promo ongkir termurah."
    },
    {
      num: "03",
      icon: Truck,
      title: "Ikan Dikirim Beku",
      desc: "Setelah pembayaran dikonfirmasi, paket disiapkan dalam styrofoam pendingin dan dikirim beku sampai meja dapur Anda."
    }
  ];

  return (
    <Section
      id="cara-pesan"
      tag="Alur Transparan"
      title="Pesan Ikan Segar Cuma 3 Langkah Mudah"
      subtitle="Tidak perlu registrasi akun atau isi formulir panjang. Cukup beberapa ketukan di layar HP Anda."
      align="left"
      className="py-20 md:py-24 bg-ice relative overflow-hidden"
    >
      <div className="relative">
        {/* Desktop Animated Connector Line between Steps */}
        <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-1 z-0 pointer-events-none">
          <svg className="w-full h-4 overflow-visible" fill="none">
            <motion.path
              d="M 0 2 H 800"
              stroke="#1FB6C1"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Step Number + Floating Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.span
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                      className="font-heading font-black text-4xl sm:text-5xl text-slate-200 group-hover:text-tosca transition-colors"
                    >
                      {step.num}
                    </motion.span>
                    
                    <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-tosca-light text-tosca-dark flex items-center justify-center group-hover:bg-tosca group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-navy text-lg sm:text-xl mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-slate-sec text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Connector Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1.5 text-tosca-dark">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Langkah {index + 1} dari 3
                  </span>
                  {index < 2 && (
                    <span className="hidden md:flex items-center gap-1 text-slate-300">
                      <span>Lanjut</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
