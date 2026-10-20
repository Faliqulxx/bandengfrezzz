import React from 'react';
import { motion } from 'framer-motion';
import { Fish, Snowflake, Sparkles, PackageCheck } from 'lucide-react';
import { viewportOnce } from '../lib/motion';

export default function TrustBar() {
  const trustItems = [
    {
      icon: Fish,
      title: "100% Tambak Pilihan",
      metric: "Grade A",
      desc: "Dipanen hidup, bebas bau lumpur atau tanah."
    },
    {
      icon: Snowflake,
      title: "Beku Cepat IQF",
      metric: "-18°C",
      desc: "Mengunci kesegaran sel daging seketika."
    },
    {
      icon: Sparkles,
      title: "Higienis & Bersih",
      metric: "Siap Olah",
      desc: "Disiangi teliti, insang & kotoran dibuang rapi."
    },
    {
      icon: PackageCheck,
      title: "Cold-Chain Bergaransi",
      metric: "100% Aman",
      desc: "Styrofoam box + es gel tahan hingga 24 jam."
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-5 sm:py-6 relative z-20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className="flex items-start sm:items-center gap-3 p-2.5 sm:p-3 rounded-2xl hover:bg-ice/70 transition-colors"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-navy/5 to-tosca/15 text-navy flex items-center justify-center flex-shrink-0 border border-tosca/20">
                  <Icon className="w-5 h-5 text-tosca-dark stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h4 className="font-heading font-extrabold text-navy text-xs sm:text-sm leading-tight truncate">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-sec leading-tight line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
