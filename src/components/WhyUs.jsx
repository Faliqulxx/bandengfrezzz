import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Sparkles, Tag, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import { viewportOnce, hoverLift } from '../lib/motion';

export default function WhyUs() {
  return (
    <Section
      id="keunggulan"
      tag="Kualitas Teruji"
      title="Standar Mutu yang Membuat Rasa Ikan Berbeda"
      subtitle="Bukan sekadar ikan beku biasa. Kami menerapkan kontrol suhu rantai dingin (cold chain) ketat dari kolam tambak sampai paket sampai di tangan Anda."
      align="split"
      className="py-20 md:py-28 bg-white"
    >
      {/* Bento Grid: 4 Varied Cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Bento 1: Suhu & Cold-Chain (Large Card with Visual) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          {...hoverLift}
          className="md:col-span-7 bg-navy rounded-3xl p-7 sm:p-9 text-white relative overflow-hidden flex flex-col justify-between min-h-[320px] shadow-xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-tosca/25 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 backdrop-blur-md text-tosca-light mb-4">
              <Snowflake className="w-3.5 h-3.5" />
              IQF Quick Freeze
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight mb-3 text-white">
              Suhu Stabil -18°C Mengunci Rasa Manis Alami
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg">
              Kristal es yang terbentuk berukuran mikro sehingga tidak merusak serat daging. Saat dicairkan, tekstur ikan tetap kenyal, padat, dan juicy seperti baru dipancing.
            </p>
          </div>

          <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/90">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-tosca" /> Packing Styrofoam Tebal
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-tosca" /> Es Gel Tahan 24 Jam
            </span>
          </div>
        </motion.div>

        {/* Bento 2: Bebas Bau Lumpur (Clean White Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.1 }}
          {...hoverLift}
          className="md:col-span-5 bg-ice rounded-3xl p-7 sm:p-9 border border-slate-200/80 flex flex-col justify-between shadow-sm hover:shadow-card transition-all group"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-tosca/15 text-tosca-dark flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Sparkles className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-heading font-extrabold text-navy text-xl sm:text-2xl mb-3">
              100% Bebas Bau Lumpur
            </h3>
            <p className="text-slate-sec text-sm leading-relaxed">
              Ikan dibudidayakan di tambak air payau berdasar pasir karang dengan sirkulasi air laut bersih. Rasa daging murni gurih tanpa aroma tanah yang mengganggu.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-200/70 text-xs font-bold text-navy flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Aman & Disukai Anak-Anak
          </div>
        </motion.div>

        {/* Bento 3: Bersih Siap Masak (Clean White Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.15 }}
          {...hoverLift}
          className="md:col-span-5 bg-ice rounded-3xl p-7 sm:p-9 border border-slate-200/80 flex flex-col justify-between shadow-sm hover:shadow-card transition-all group"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
              <Tag className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-heading font-extrabold text-navy text-xl sm:text-2xl mb-3">
              Disiangi Bersih & Praktis
            </h3>
            <p className="text-slate-sec text-sm leading-relaxed">
              Semua sisik, insang, dan kotoran empedu sudah dibuang higienis. Anda tidak perlu repot kotor-kotoran di dapur, tinggal thawing lalu siap bumbui.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-200/70 text-xs font-bold text-navy flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tosca"></span>
            Hemat Waktu Masak 30 Menit
          </div>
        </motion.div>

        {/* Bento 4: Garansi 100% Dingin / Ganti Baru (Span 7, High-Trust Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.2 }}
          {...hoverLift}
          className="md:col-span-7 bg-gradient-to-tr from-white via-ice-subtle to-tosca-light/30 rounded-3xl p-7 sm:p-9 border border-tosca/30 shadow-card flex flex-col sm:flex-row items-center gap-6 justify-between"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-3">
              <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" /> Garansi Toko Resmi
            </span>
            <h3 className="font-heading font-extrabold text-navy text-xl sm:text-2xl mb-2">
              Rusak atau Cair Saat Tiba? Kami Ganti Baru 100%
            </h3>
            <p className="text-slate-sec text-xs sm:text-sm leading-relaxed">
              Jika kemasan bocor atau mencair dalam perjalanan, cukup kirim foto/video unboxing dalam 2 jam. Tim kami kirim paket pengganti tanpa biaya tambahan.
            </p>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
