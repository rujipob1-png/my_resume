import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import { experiences, education } from "../data";

function TimelineCard({ data, index, icon, color }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref} className="flex gap-4 sm:gap-8 mb-10 group">
      {/* Left dot + line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg shrink-0 text-white z-10 ${color}`}
        >
          {icon}
        </motion.div>
        <div className="w-0.5 flex-1 bg-gradient-to-b from-dark-600 to-transparent mt-2" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex-1 pb-2"
      >
        <div className="tilt-card rounded-2xl p-6 group-hover:border-primary-500/30">
          <span className="inline-block text-[12px] font-mono text-primary-400 bg-primary-500/10 px-3 py-1.5 rounded-full border border-primary-500/15 mb-3 tracking-wide">
            {data.date}
          </span>
          <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors font-heading">
            {data.title || data.degree}
          </h3>
          <p className="text-primary-400/70 font-medium text-[13px] mt-1 tracking-wide">
            {data.company || data.school}
          </p>
          <p className="text-dark-300/70 text-sm mt-3 leading-relaxed">
            {data.description}
          </p>
          {data.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-dark-800/60 text-primary-300 border border-dark-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="section-wrapper py-28 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="section-subtext">What I have done so far</p>
          <h2 className="section-headtext mt-2">
            เส้นทาง<span className="gradient-text"> อาชีพ </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <TimelineCard
              key={i}
              data={exp}
              index={i}
              icon={<FiBriefcase className="w-5 h-5" />}
              color="violet-gradient"
            />
          ))}
          {education.map((edu, i) => (
            <TimelineCard
              key={`edu-${i}`}
              data={edu}
              index={experiences.length + i}
              icon={<FiBookOpen className="w-5 h-5" />}
              color="green-pink-gradient"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
