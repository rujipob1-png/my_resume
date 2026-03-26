import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import { experiences, education } from "../data";

/* Merge experiences + education into a unified timeline */
const timelineItems = [
  ...experiences.map((e) => ({ ...e, type: "career" })),
  ...education.map((e) => ({
    ...e,
    title: e.degree,
    company: e.school,
    type: "education",
  })),
];

function TimelineItem({ data, index, inView }) {
  const isCareer = data.type === "career";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 sm:pl-14 pb-10 last:pb-0 group"
    >
      {/* Vertical line */}
      <span className="absolute left-[11px] sm:left-[19px] top-0 bottom-0 w-px bg-dark-600/40 group-last:hidden" />

      {/* Dot on the timeline */}
      <span className="absolute left-1 sm:left-2.5 top-1 w-5 h-5 rounded-full bg-dark-800 border-2 border-accent-400/60 flex items-center justify-center z-10">
        <span className="w-2 h-2 rounded-full bg-accent-400" />
      </span>

      {/* Card */}
      <div className="rounded-2xl bg-dark-800/50 border border-dark-600/30 p-6 sm:p-7 hover:border-dark-500/40 transition-colors">
        {/* Type badge + Date */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-dark-500">
            {isCareer ? <FiBriefcase className="w-3 h-3" /> : <FiBookOpen className="w-3 h-3" />}
            {isCareer ? "Career" : "Education"}
          </span>
          <span className="text-xs text-accent-400 font-mono">{data.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-snug">
          {data.title}
        </h3>

        {/* Company / School */}
        <p className="text-sm text-dark-400 mt-1">{data.company}</p>

        {/* Points / Description */}
        {data.points && (
          <p className="text-xs text-dark-400/80 mt-3 line-clamp-2 leading-relaxed">
            {data.points.join(" • ")}
          </p>
        )}
        {!data.points && data.description && (
          <p className="text-xs text-dark-400/80 mt-3 leading-relaxed">{data.description}</p>
        )}

        {/* Tags */}
        {data.tags && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-1 rounded-full bg-dark-700/40 text-dark-300 border border-dark-600/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="section-wrapper py-28 px-6 sm:px-10">
      <div ref={ref} className="max-w-3xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <p className="section-subtext mb-3">Background</p>
          <h2 className="section-headtext">
            EXPERIENCE<span className="gradient-text"> & EDUCATION</span>
          </h2>
        </motion.div>

        {/* Unified timeline */}
        <div>
          {timelineItems.map((item, i) => (
            <TimelineItem key={i} data={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
