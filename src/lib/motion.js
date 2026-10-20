/**
 * Framer Motion Animation Variants & Helper Configs
 * Disesuaikan dengan PRD Bagian 7 (Halus, 60 FPS, prefers-reduced-motion)
 */

export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  }
};

export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    }
  }
});

export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const hoverLift = {
  whileHover: { 
    y: -6,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

export const tapPress = {
  whileTap: { 
    scale: 0.97,
    transition: { duration: 0.1 }
  }
};

export const pulseRing = {
  animate: {
    scale: [1, 1.35, 1],
    opacity: [0.7, 0, 0.7],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      ease: "easeOut"
    }
  }
};
