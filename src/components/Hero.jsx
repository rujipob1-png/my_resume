import { motion } from "framer-motion";
import { personalInfo } from "../data";
import { FiArrowDown } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pb-24">
      {/* Ambient glow — left */}
      <div className="hero-glow hero-glow-left" />
      {/* Ambient glow — right */}
      <div className="hero-glow hero-glow-right" />

      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-5xl"
      >
        {/* Name label */}
        <motion.p
          variants={fadeUp(0)}
          className="text-dark-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-mono mb-8"
        >
          {personalInfo.nameEn}
        </motion.p>

        {/* Big title — filled */}
        <motion.h1
          variants={fadeUp(0.12)}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold font-heading leading-[0.9] tracking-tight text-white mb-2"
        >
          FRONTEND
        </motion.h1>

        {/* Big title — outline italic */}
        <motion.h1
          variants={fadeUp(0.22)}
          className="hero-outline-text text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold font-heading leading-[0.9] tracking-tight italic mb-10"
        >
          DEVELOPER
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={fadeUp(0.36)}
          className="text-dark-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp(0.48)} className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href={personalInfo.resumeUrl}
            className="px-7 py-3 rounded-full bg-white text-dark-950 text-sm font-semibold hover:bg-dark-100 transition-all hover:scale-105 active:scale-95"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-dark-500/50 text-dark-300 text-sm font-medium hover:border-dark-300 hover:text-white transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-dark-500 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
