/**
 * Shared Framer Motion variants used across all sections.
 * Apply `variants={fadeUp}` + `initial="hidden"` + `whileInView="visible"`
 * on motion elements. Use `stagger` on containers to cascade children.
 */
import { type Variants } from "framer-motion";

// Framer Motion 12 requires a bezier tuple for `ease`, not a string name.
// [0.25, 0.46, 0.45, 0.94] is the classic ease-out cubic-bezier.
const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

/**
 * Container variant — apply to the parent motion.div.
 * Children that also use variants will stagger automatically.
 */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/** Slightly tighter stagger for badge/chip groups */
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

/** Viewport options reused everywhere — triggers slightly before element enters */
export const viewport = { once: true, margin: "-60px" };
