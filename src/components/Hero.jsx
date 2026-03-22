import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data";
import HeroCanvas from "./HeroCanvas";

const socialIcons = [
  personalInfo.social.github && { Icon: FaGithub, url: personalInfo.social.github, label: "GitHub" },
  personalInfo.social.linkedin && { Icon: FaLinkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
].filter(Boolean);

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const seq = personalInfo.titles.flatMap((t) => [t, 2000]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-[-10%] -left-32 w-[500px] h-[500px] bg-primary-600/[0.06] rounded-full blur-[160px]" />
      <div className="absolute bottom-[-5%] -right-32 w-[400px] h-[400px] bg-accent-500/[0.05] rounded-full blur-[140px]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full grid lg:grid-cols-2 gap-12 items-center pt-32 pb-16"
      >
        {/* Left — Text */}
        <div className="order-2 lg:order-1 max-w-xl">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[13px] font-medium bg-dark-800/60 text-dark-300 border border-dark-700/40 tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              สวัสดีครับ, ยินดีต้อนรับ!
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.08] mb-6 text-white font-heading">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.nameEn}</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex items-center gap-3 text-lg sm:text-xl font-medium mb-8 text-dark-300">
            <span className="w-10 h-[2px] rounded-full animated-gradient" />
            <TypeAnimation sequence={seq} wrapper="span" speed={50} repeat={Infinity} className="text-primary-300 font-heading" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-dark-300/80 mb-10 leading-relaxed text-base max-w-md">
            {personalInfo.bio}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#contact"
              className="group relative px-7 py-3 rounded-xl font-semibold text-white text-[15px] overflow-hidden shadow-lg shadow-primary-500/15 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <span className="absolute inset-0 animated-gradient" />
              <span className="relative z-10 tracking-wide">ติดต่อฉัน</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              className="px-7 py-3 rounded-xl border border-dark-600/60 text-dark-300 hover:border-primary-500/50 hover:text-primary-300 font-semibold text-[15px] transition-all hover:scale-[1.03] active:scale-95 inline-flex items-center gap-2 tracking-wide"
            >
              <FiDownload className="w-4 h-4" /> Resume
            </a>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            {socialIcons.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg bg-dark-800/40 hover:bg-primary-500/20 text-dark-400 hover:text-primary-300 transition-all hover:scale-110 hover:-translate-y-0.5 border border-dark-700/30"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Visual */}
        <motion.div
          variants={fadeUp}
          className="order-1 lg:order-2 relative h-[320px] sm:h-[420px] lg:h-[520px]"
        >
          <HeroCanvas />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-dark-500 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] font-mono">Scroll</span>
        <FiArrowDown className="w-3.5 h-3.5" />
      </motion.a>
    </section>
  );
}
