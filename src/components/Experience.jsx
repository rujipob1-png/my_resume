import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiBookOpen, FiArrowUpRight } from "react-icons/fi";
import { experiences, education } from "../data";

function CareerCard({ data, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.08 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative rounded-2xl bg-dark-800/40 border border-dark-700/30 hover:border-accent-400/20 transition-all duration-300 overflow-hidden">
        {/* Accent top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="p-6 sm:p-8">
          {/* Top row: number + date */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-[11px] font-mono text-dark-400 tracking-wider">
              0{index + 1}
            </span>
            <span className="text-xs font-mono text-accent-400 bg-accent-400/10 px-3 py-1 rounded-full">
              {data.date}
            </span>
          </div>

          {/* Title + Company */}
          <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug mb-1.5">
            {data.title}
          </h3>
          <p className="text-sm text-dark-200 mb-4">{data.company}</p>

          {/* Points */}
          {data.points && (
            <ul className="space-y-2 mb-5">
              {data.points.map((point, i) => (
                <li key={i} className="flex gap-2.5 text-xs text-dark-200 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-400/50 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          {data.tags && (
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-3 py-1 rounded-full bg-dark-700/50 text-dark-100 border border-dark-600/20 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function EduCard({ data, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.08 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative rounded-2xl bg-dark-800/40 border border-dark-700/30 hover:border-accent-400/20 transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[11px] font-mono text-dark-400 tracking-wider">
              0{index + 1}
            </span>
            <span className="text-xs font-mono text-accent-400 bg-accent-400/10 px-3 py-1 rounded-full">
              {data.date}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug mb-1.5">
            {data.degree}
          </h3>
          <p className="text-sm text-dark-200 mb-3">{data.school}</p>

          {data.description && (
            <p className="text-sm text-dark-100 font-medium">{data.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [tab, setTab] = useState("career");

  return (
    <section id="experience" className="section-wrapper py-28 px-6 sm:px-10">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="section-subtext mb-3">MY EXPERINECE</p>
          <h2 className="section-headtext">
            EXPERIENCE<span className="gradient-text"> & EDUCATION</span>
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex gap-1 p-1 rounded-full bg-dark-800/60 border border-dark-700/30">
            <button
              onClick={() => setTab("career")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                tab === "career"
                  ? "bg-accent-400/15 text-accent-400 border border-accent-400/30"
                  : "text-dark-200 hover:text-dark-100 border border-transparent"
              }`}
            >
              <FiBriefcase className="w-3.5 h-3.5" />
              Career
              <span className={`text-[10px] font-mono ${tab === "career" ? "text-accent-400/60" : "text-dark-400"}`}>
                {experiences.length}
              </span>
            </button>
            <button
              onClick={() => setTab("education")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                tab === "education"
                  ? "bg-accent-400/15 text-accent-400 border border-accent-400/30"
                  : "text-dark-200 hover:text-dark-100 border border-transparent"
              }`}
            >
              <FiBookOpen className="w-3.5 h-3.5" />
              Education
              <span className={`text-[10px] font-mono ${tab === "education" ? "text-accent-400/60" : "text-dark-400"}`}>
                {education.length}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          {tab === "career" ? (
            <motion.div
              key="career"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4"
            >
              {experiences.map((exp, i) => (
                <CareerCard key={i} data={exp} index={i} inView={inView} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4"
            >
              {education.map((edu, i) => (
                <EduCard key={i} data={edu} index={i} inView={inView} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
