import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import { experiences, education } from "../data";

function CareerItem({ data, index, inView, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`py-6 ${!isLast ? "border-b border-dark-600/30" : ""}`}
    >
      {/* Date */}
      <span className="inline-block text-xs text-accent-400 font-mono mb-2">
        {data.date}
      </span>

      {/* Title & company */}
      <h3 className="text-base font-bold text-white font-heading leading-snug">
        {data.title || data.degree}
      </h3>
      <p className="text-sm text-dark-400 mt-1">
        {data.company || data.school}
      </p>

      {/* Summary line */}
      {data.points && (
        <p className="text-xs text-dark-400/80 mt-2 line-clamp-2 leading-relaxed">
          {data.points.join(" • ")}
        </p>
      )}
      {!data.points && data.description && (
        <p className="text-xs text-dark-400/80 mt-2 leading-relaxed">{data.description}</p>
      )}

      {/* Tags */}
      {data.tags && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-dark-700/40 text-dark-300 border border-dark-600/20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function SectionCard({ title, icon, items, inView, indexOffset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * indexOffset, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl bg-dark-800/50 border border-dark-600/30 p-7 sm:p-8"
    >
      {/* Card header */}
      <div className="flex items-center gap-2.5 mb-1">
        {icon}
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-dark-400">{title}</h3>
      </div>

      {/* Items */}
      <div>
        {items.map((item, i) => (
          <CareerItem
            key={i}
            data={item}
            index={indexOffset + i}
            inView={inView}
            isLast={i === items.length - 1}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="section-wrapper py-28 px-6 sm:px-10">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className="section-subtext mb-3">About Education</p>
          <h2 className="section-headtext">
            MY EDUCATION<span className="gradient-text"> & EXPERIENCE</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Career path */}
          <div>
            <SectionCard
              title="Career Path"
              icon={<FiBriefcase className="w-3.5 h-3.5 text-dark-400" />}
              items={experiences}
              inView={inView}
              indexOffset={0}
            />
          </div>

          {/* Education */}
          <div>
            <SectionCard
              title="Education"
              icon={<FiBookOpen className="w-3.5 h-3.5 text-dark-400" />}
              items={education}
              inView={inView}
              indexOffset={experiences.length}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
