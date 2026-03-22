import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data";
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiPython, SiMongodb, SiPostgresql, SiFirebase,
  SiGit, SiDocker, SiFigma, SiGithub,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const iconMap = {
  "React": SiReact,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "HTML/CSS": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Python": SiPython,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Firebase": SiFirebase,
  "Git": SiGit,
  "GitHub": SiGithub,
  "Docker": SiDocker,
  "Figma": SiFigma,
  "VS Code": VscCode,
};

const categories = ["All", ...new Set(skills.map((s) => s.category))];

export default function Skills() {
  const [active, setActive] = useState("All");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="section-wrapper py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="section-subtext">What I work with</p>
          <h2 className="section-headtext mt-2">
            ความ<span className="gradient-text"> เชี่ยวชาญ </span>ของฉัน
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all overflow-hidden ${
                active === cat
                  ? "text-white shadow-lg shadow-primary-500/20"
                  : "bg-dark-800/50 text-tertiary-500 hover:text-white border border-dark-700/50"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 animated-gradient"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid — ball style */}
        <motion.div layout className="flex flex-wrap justify-center gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => {
              const Icon = iconMap[skill.name];
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-2 group"
                >
                  {/* Ball with circular progress */}
                  <div
                    className="skill-ball"
                    style={{ "--skill-pct": `${skill.level}%` }}
                  >
                    <div className="w-[90px] h-[90px] rounded-full bg-dark-900 flex items-center justify-center">
                      {Icon ? (
                        <Icon className="w-10 h-10 text-dark-400 group-hover:text-primary-400 transition-colors duration-300" />
                      ) : (
                        <span className="text-lg font-bold text-dark-400 font-heading">{skill.name.slice(0, 2)}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-[13px] font-medium text-dark-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
