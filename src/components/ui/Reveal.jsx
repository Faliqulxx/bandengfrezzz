import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

export default function Reveal({ children, delay = 0, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: delay,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}
