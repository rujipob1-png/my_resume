import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiArrowRight, FiFileText, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { projects } from "../data";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section-wrapper py-28">
      <div ref={ref}>
        {/* Header row — title left + arrows right */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-10 flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="section-subtext mb-3">PROJECTS</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-[1.1]">
              <span className="gradient-text">MY</span>
              {" "}
              <span className="text-white">PROJECTS</span>
            </h2>
          </motion.div>

          {/* Scroll arrows with label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="hidden sm:flex items-center gap-3"
          >
            <span className="text-xs text-dark-500 font-mono uppercase tracking-wider">Scroll</span>
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-dark-600/50 text-dark-400 hover:text-accent-400 hover:border-accent-400/50 flex items-center justify-center transition-all"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-dark-600/50 text-dark-400 hover:text-accent-400 hover:border-accent-400/50 flex items-center justify-center transition-all"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Horizontal scroll — featured */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 px-6 sm:px-10 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {featured.map((project, index) => (
            <div
              key={project.title}
              className="group flex-shrink-0 w-[85vw] sm:w-[55vw] lg:w-[42vw] rounded-2xl overflow-hidden snap-start bg-dark-800/40 border border-dark-600/30 hover:border-accent-400/30 transition-all duration-500"
            >
              {/* Image area */}
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />

                {/* Number badge */}
                <span className="absolute top-4 left-4 text-xs font-mono text-accent-400/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content area */}
              <div className="p-6 sm:p-7">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-dark-700/50 text-dark-300 border border-dark-600/30">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-dark-400 line-clamp-2 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-5 pt-4 border-t border-dark-600/20">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-accent-400 transition-colors">
                      <FiGithub className="w-4 h-4" /> Source
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-accent-400 transition-colors group/link">
                      Live Demo <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  )}
                  {project.docs && (
                    <a href={project.docs} download className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-accent-400 transition-colors group/link">
                      <FiFileText className="w-4 h-4" /> Manual <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Other projects — smaller grid */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-7xl mx-auto px-6 sm:px-10 mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden"
            >
              {others.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl overflow-hidden bg-dark-800/50 border border-dark-600/30 hover:border-dark-500/50 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-dark-700/40 text-dark-400 border border-dark-600/20">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-base font-bold text-white font-heading mb-1">{project.title}</h3>
                    <p className="text-xs text-dark-400 line-clamp-2 leading-relaxed mb-3">{project.description}</p>
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-dark-400 hover:text-white transition-colors">
                          <FiGithub className="w-3.5 h-3.5" /> Source
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white font-medium group/link">
                          Demo <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle */}
        {others.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-accent-400/60 text-accent-400 hover:bg-accent-400 hover:text-dark-950 font-medium text-sm transition-all hover:scale-105 active:scale-95"
            >
              {showAll ? "Show Less" : `View All Projects (${projects.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
