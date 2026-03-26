import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiDownload, FiGlobe } from "react-icons/fi";
import { aboutData, personalInfo } from "../data";

const card = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } },
});

const bentoCard = "rounded-2xl bg-dark-800/50 border border-dark-600/30 p-6 sm:p-7";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const anim = inView ? "show" : "hidden";

  return (
    <section id="about" className="section-wrapper py-28 px-6 sm:px-10">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div variants={card(0)} initial="hidden" animate={anim} className="mb-12">
          <p className="section-subtext mb-3">About Me</p>
          <h2 className="section-headtext">
            ABOUT<span className="gradient-text"> ME</span>
          </h2>
        </motion.div>

        {/* ═══ Top row: Photo | Intro | Location + Status ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 mb-4">
          {/* Profile photo */}
          <motion.div
            variants={card(0.05)}
            initial="hidden"
            animate={anim}
            className="md:col-span-1 lg:col-span-3 rounded-2xl overflow-hidden border border-dark-600/30"
          >
            <img
              src="/profile.jpg"
              alt={personalInfo.nameEn}
              className="w-full h-full min-h-[280px] object-cover object-top"
              loading="lazy"
            />
          </motion.div>

          {/* Introduction */}
          <motion.div
            variants={card(0.1)}
            initial="hidden"
            animate={anim}
            className={`md:col-span-2 lg:col-span-6 ${bentoCard} flex flex-col justify-center`}
          >
            <p className="text-[11px] text-dark-500 uppercase tracking-[0.2em] font-mono mb-4">Introduction</p>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-snug mb-4">
              Hi , I'm {personalInfo.nameEn.split(" ")[0]} — a{" "}
              <span className="gradient-text">Frontend Developer</span>
            </h3>
            <p className="text-sm text-dark-400 leading-relaxed">
              {aboutData.description}
            </p>
          </motion.div>

          {/* Right column: Location + Status + CV (single card) */}
          <motion.div
            variants={card(0.15)}
            initial="hidden"
            animate={anim}
            className={`md:col-span-1 lg:col-span-3 ${bentoCard} flex flex-col justify-between`}
          >
            {/* Location */}
            <div>
              <p className="text-[11px] text-dark-500 uppercase tracking-[0.2em] font-mono mb-3">Location</p>
              <div className="flex items-center gap-2.5">
                <FiMapPin className="w-4 h-4 text-accent-400 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Bangkok, Thailand</p>
                  <p className="text-[11px] text-dark-500 mt-0.5">GMT+7</p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-400" />
              </span>
              <p className="text-sm font-medium text-white">Available for work</p>
            </div>

            {/* Download buttons */}
            <div className="flex gap-2">
              <a
                href={personalInfo.resumeUrl}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-dark-700/40 border border-dark-600/20 py-3 hover:bg-dark-700/70 transition-all group cursor-pointer"
              >
                <FiDownload className="w-4 h-4 text-white group-hover:text-accent-400 transition-colors" />
                <span className="text-sm font-semibold text-white group-hover:text-accent-400 transition-colors">
                  CV
                </span>
              </a>
              <a
                href="/Transcript.pdf"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-dark-700/40 border border-dark-600/20 py-3 hover:bg-dark-700/70 transition-all group cursor-pointer"
              >
                <FiDownload className="w-4 h-4 text-white group-hover:text-accent-400 transition-colors" />
                <span className="text-sm font-semibold text-white group-hover:text-accent-400 transition-colors">
                  Transcript
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ═══ Bottom row: GPA | Languages | Soft Skills ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* GPA */}
          <motion.div variants={card(0.25)} initial="hidden" animate={anim} className={bentoCard}>
            <div className="text-[11px] text-dark-500 uppercase tracking-[0.12em] mb-2">GPA</div>
            <div className="text-3xl font-bold text-white font-heading">{aboutData.gpa}</div>
            <div className="text-xs text-dark-400 mt-1">Information Technology — Kasetsart University</div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={card(0.3)} initial="hidden" animate={anim} className={bentoCard}>
            <div className="flex items-center gap-2 mb-4">
              <FiGlobe className="w-3.5 h-3.5 text-dark-500" />
              <span className="text-[11px] text-dark-500 uppercase tracking-[0.12em]">Languages</span>
            </div>
            <div className="space-y-3">
              {aboutData.languages.map((lang, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-white font-medium">{lang.name}</span>
                  <span className="text-xs text-dark-400 font-mono">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={card(0.35)} initial="hidden" animate={anim} className={`sm:col-span-2 lg:col-span-1 ${bentoCard}`}>
            <div className="text-[11px] text-dark-500 uppercase tracking-[0.12em] mb-4">Soft Skills</div>
            <div className="flex flex-wrap gap-2">
              {aboutData.softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full bg-dark-700/40 text-dark-300 border border-dark-600/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
