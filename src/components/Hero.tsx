import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const nameLines = ["MOHAMMAD", "HASSAN", "SHAIKH"];

// Clip-path reveal variant — each line sweeps in from bottom
const lineRevealVariants = {
  hidden: {
    clipPath: "inset(100% 0 0 0)",
    y: 40,
  },
  visible: (i: number) => ({
    clipPath: "inset(0% 0 0 0)",
    y: 0,
    transition: {
      delay: i * 0.15 + 0.3,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

// Subtitle word-by-word stagger
const wordRevealVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: {
      delay: i * 0.08 + 1.3,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

// CTA slide-in from bottom with clip
const ctaRevealVariants = {
  hidden: {
    clipPath: "inset(100% 0 0 0)",
    opacity: 0,
  },
  visible: (i: number) => ({
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: {
      delay: i * 0.12 + 1.6,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const subtitleWords = "Full-Stack Developer".split(" ");
  const descWords =
    "Building scalable, high-performance web applications with TypeScript and modern technologies.".split(
      " "
    );

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(204,255,0,0.03),transparent)]" />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full px-5 sm:px-8 lg:px-12 pt-16 sm:pt-0"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
            Available for new projects
          </span>
        </motion.div>

        {/* Massive name typography — clip-path reveal per line */}
        <div className="space-y-0">
          {nameLines.map((line, lineIndex) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                custom={lineIndex}
                variants={lineRevealVariants}
                initial="hidden"
                animate="visible"
                className={`font-display text-[clamp(2rem,9vw,9rem)] leading-[0.85] tracking-tight text-foreground ${lineIndex === 1 ? "text-shimmer" : ""
                  }`}
                aria-label={
                  lineIndex === 0 ? "Mohammad Hassan Shaikh" : undefined
                }
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Neon accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          className="h-[3px] bg-neon mt-6 md:mt-10"
        />

        {/* Subtitle — word-by-word stagger reveal */}
        <div className="mt-5 md:mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
          <div className="flex flex-wrap gap-x-2 overflow-hidden">
            {subtitleWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordRevealVariants}
                initial="hidden"
                animate="visible"
                className="text-sm sm:text-base uppercase tracking-[0.3em] text-muted-foreground font-medium inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex flex-wrap gap-x-1.5 overflow-hidden">
            {descWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i + subtitleWords.length}
                variants={wordRevealVariants}
                initial="hidden"
                animate="visible"
                className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal inline-block"
              >
                {word === "TypeScript" ? (
                  <span className="text-foreground">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA buttons — clip reveal from bottom */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <motion.a
            href="#work"
            custom={0}
            variants={ctaRevealVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 bg-neon text-black text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
          >
            Explore My Work
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            custom={1}
            variants={ctaRevealVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 sm:px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold border border-white/20 text-foreground hover:border-neon hover:text-neon transition-all duration-300 shadow-[0_0_0_rgba(204,255,0,0)] hover:shadow-[inset_0_0_20px_rgba(204,255,0,0.1)]"
          >
            Let's Build Together
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-3 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-neon transition-colors duration-300 group"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5 group-hover:border-neon/50 transition-colors"
          >
            <div className="w-1 h-1.5 bg-white/60 rounded-full group-hover:bg-neon transition-colors" />
          </motion.div>
        </a>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/10 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/10 hidden lg:block" />
    </section>
  );
};
