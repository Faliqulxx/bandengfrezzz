import React from 'react';
import Reveal from './Reveal';

export default function Section({ 
  id, 
  tag, 
  title, 
  subtitle, 
  children, 
  className = "py-20", 
  containerClass = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  align = "left", // 'left' | 'center' | 'split'
  headerRight = null
}) {
  return (
    <section id={id} className={className}>
      <div className={containerClass}>
        {(tag || title || subtitle) && (
          <div className={`mb-12 md:mb-16 ${
            align === "center" 
              ? "text-center max-w-2xl mx-auto" 
              : align === "split"
              ? "flex flex-col md:flex-row md:items-end md:justify-between gap-6"
              : "text-left max-w-3xl"
          }`}>
            <div className={align === "split" ? "max-w-2xl" : ""}>
              {tag && (
                <Reveal>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-tosca/12 text-tosca-dark border border-tosca/25 mb-3">
                    {tag}
                  </span>
                </Reveal>
              )}
              {title && (
                <Reveal delay={0.08}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold font-heading text-navy tracking-tight leading-[1.18] mb-3">
                    {title}
                  </h2>
                </Reveal>
              )}
              {subtitle && (
                <Reveal delay={0.16}>
                  <p className="text-slate-sec text-base sm:text-lg leading-relaxed">
                    {subtitle}
                  </p>
                </Reveal>
              )}
            </div>
            {align === "split" && headerRight && (
              <div className="flex-shrink-0">
                {headerRight}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
