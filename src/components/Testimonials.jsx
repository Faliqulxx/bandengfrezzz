import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import Section from './ui/Section';
import { testimonials } from '../data/testimonials';
import { viewportOnce } from '../lib/motion';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  return (
    <Section
      id="testimoni"
      tag="Ulasan Pembeli Nyata"
      title="Dipercaya Rumah Tangga Hingga Restoran"
      subtitle="Bukan testimoni rekayasa. Ini pengalaman nyata dari mereka yang menyajikan hidangan bandeng kami di meja makan dan bisnis kuliner."
      align="split"
      headerRight={
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Ulasan sebelumnya"
            className="w-11 h-11 rounded-full border border-slate-200 bg-white text-navy flex items-center justify-center hover:bg-ice hover:border-tosca transition-all shadow-sm active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Ulasan selanjutnya"
            className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center hover:bg-navy-light transition-all shadow-md active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      }
      className="py-20 md:py-24 bg-white"
    >
      <div className="relative">
        {/* Main Swipeable Carousel Container */}
        <div className="overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="cursor-grab active:cursor-grabbing bg-gradient-to-br from-navy via-navy to-navy-dark rounded-3xl p-8 sm:p-12 text-white relative shadow-xl min-h-[340px] flex flex-col justify-between"
            >
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-tosca/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-shrimp/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Card Header: Rating + Badge */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex text-amber-400 gap-1.5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-tosca-light bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-tosca" /> Pembeli Terverifikasi
                </span>
              </div>

              {/* Quote Body */}
              <div className="relative z-10 mb-8">
                <Quote className="w-8 h-8 text-tosca/30 mb-2 rotate-180" />
                <p className="font-heading font-medium text-lg sm:text-2xl md:text-[1.65rem] text-white/95 leading-relaxed italic">
                  "{current.quote}"
                </p>
              </div>

              {/* Card Footer: User Info */}
              <div className="relative z-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-tr from-tosca to-wa text-navy font-black text-lg flex items-center justify-center shadow-md">
                    {current.avatar}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-white text-base sm:text-lg">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70">
                      {current.role} — <span className="text-tosca-light font-medium">{current.city}</span>
                    </p>
                  </div>
                </div>

                <div className="text-xs text-white/50 font-medium hidden sm:block">
                  Geser kartu untuk ulasan lain ➔
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ulasan ${idx + 1} dari ${item.name}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? "w-8 bg-tosca shadow-sm shadow-tosca/30" 
                  : "w-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
