import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data";

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-wrapper py-28 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="section-subtext">My work</p>
          <h2 className="section-headtext mt-2">
            โปรเจกต์<span className="gradient-text"> เด่น </span>
          </h2>
        </motion.div>

        {/* Project cards */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredId(project.title)}
                onMouseLeave={() => setHoveredId(null)}
                className="group rounded-2xl overflow-hidden bg-dark-900 border border-dark-700/40 hover:border-primary-500/40 shadow-lg shadow-dark-950/50 hover:shadow-primary-500/10 transition-all"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <AnimatePresence>
                    {hoveredId === project.title && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent flex items-end justify-end p-4 gap-3"
                      >
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full black-gradient flex items-center justify-center text-white hover:scale-110 transition-transform"
                            aria-label="View source code"
                          >
                            <FiGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full black-gradient flex items-center justify-center text-white hover:scale-110 transition-transform"
                            aria-label="View live demo"
                          >
                            <FiExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {/* Featured badge */}
                  {project.featured && (
                    <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full violet-gradient text-white font-medium shadow-lg">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors font-heading">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark-400 mt-2 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-dark-800/60 text-primary-300 border border-dark-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-primary-500/40 text-primary-400 hover:bg-primary-500/10 font-semibold transition-all hover:scale-105 active:scale-95"
            >
              {showAll ? "แสดงน้อยลง" : `ดูทั้งหมด (${projects.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
