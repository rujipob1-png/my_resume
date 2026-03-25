import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects } from "../data";

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" className="section-wrapper py-28 px-6 sm:px-10">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="section-subtext mb-3">About Projects</p>
          <h2 className="section-headtext">
            MY<span className="gradient-text"> PROJECTS</span>
          </h2>
        </motion.div>

        {/* Stacked project cards */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-dark-900/60 border border-dark-700/30 hover:border-dark-600/50 transition-all"
              >
                {/* Image */}
                <div className={`relative h-64 md:h-80 overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 text-[10px] px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium border border-white/10">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className={`p-8 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-dark-800/60 text-dark-400 border border-dark-700/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-white transition-colors"
                      >
                        <FiGithub className="w-4 h-4" /> Source
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white font-medium group/link"
                      >
                        Live Demo
                        <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle */}
        {projects.length > featured.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-dark-600/50 text-dark-400 hover:text-white hover:border-dark-400 font-medium text-sm transition-all hover:scale-105 active:scale-95"
            >
              {showAll ? "Show Less" : `View All (${projects.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
