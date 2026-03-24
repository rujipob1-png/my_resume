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
      className={`py-5 ${!isLast ? "border-b border-dark-600/30" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[15px] font-bold text-white font-heading leading-snug">
            {data.title || data.degree}
          </h3>
          <p className="text-sm text-dark-400 mt-0.5">
            {data.company || data.school}
          </p>
          {data.points && (
            <p className="text-xs text-dark-400/80 mt-1 line-clamp-1">
              {data.points.join(" • ")}
            </p>
          )}
          {!data.points && data.description && (
            <p className="text-xs text-dark-400/80 mt-1">{data.description}</p>
          )}
        </div>
        <span className="text-xs text-accent-400 font-mono whitespace-nowrap shrink-0 mt-0.5">
          {data.date}
        </span>
      </div>
    </motion.div>
  );
}

function SectionCard({ title, icon, items, inView, indexOffset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * indexOffset, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl bg-dark-800/50 border border-dark-600/30 p-6 sm:p-7"
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
      <div ref={ref} className="max-w-4xl mx-auto">
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
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Career path — takes more space */}
          <div className="lg:col-span-3">
            <SectionCard
              title="Career Path"
              icon={<FiBriefcase className="w-3.5 h-3.5 text-dark-400" />}
              items={experiences}
              inView={inView}
              indexOffset={0}
            />
          </div>

          {/* Education */}
          <div className="lg:col-span-2">
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
