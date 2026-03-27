import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data";
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiPython, SiMongodb, SiPostgresql, SiFirebase,
  SiGit, SiDocker, SiFigma, SiGithub, SiPostman, SiMysql, SiSupabase,
  SiJsonwebtokens,
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
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "Supabase": SiSupabase,
  "JWT / RBAC": SiJsonwebtokens,
  "Firebase": SiFirebase,
  "Git": SiGit,
  "GitHub": SiGithub,
  "Docker": SiDocker,
  "Figma": SiFigma,
  "Postman": SiPostman,
  "VS Code": VscCode,
};

const brandColor = {
  "React": "#61DAFB",
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "HTML/CSS": "#E34F26",
  "Tailwind CSS": "#06B6D4",
  "Next.js": "#FFFFFF",
  "Node.js": "#339933",
  "Express.js": "#FFFFFF",
  "Python": "#3776AB",
  "MongoDB": "#47A248",
  "MySQL": "#4479A1",
  "PostgreSQL": "#4169E1",
  "Supabase": "#3FCF8E",
  "JWT / RBAC": "#FB015B",
  "Firebase": "#FFCA28",
  "Git": "#F05032",
  "GitHub": "#FFFFFF",
  "Docker": "#2496ED",
  "Figma": "#F24E1E",
  "Postman": "#FF6C37",
  "VS Code": "#007ACC",
};

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section-wrapper py-28">
      <div ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 px-6"
        >
          <p className="section-subtext mb-3">My TechStack</p>
          <h2 className="section-headtext">
            MY<span className="gradient-text"> TECHSTACK</span>
          </h2>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden py-8 mb-16">
          <div className="marquee-fade" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="marquee"
          >
            <div className="marquee-track">
              {[...skills, ...skills].map((skill, i) => {
                const Icon = iconMap[skill.name];
                const color = brandColor[skill.name];
                return (
                  <div key={i} className="flex items-center gap-3 px-8 shrink-0">
                    {Icon && <Icon className="w-6 h-6" style={{ color: color || undefined, opacity: 0.5 }} />}
                    <span className="text-2xl font-heading font-bold text-dark-400 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Skill cards grid */}
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.name];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group p-5 rounded-2xl bg-dark-800/30 border border-dark-700/30 hover:border-dark-600/60 hover:bg-dark-800/60 transition-all text-center"
              >
                {Icon && (
                  <Icon
                    className="w-8 h-8 mx-auto transition-colors mb-3 text-dark-500"
                    style={{ "--brand": brandColor[skill.name] || "#a1a1aa" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = brandColor[skill.name] || "#d4d4d8"}
                    onMouseLeave={(e) => e.currentTarget.style.color = ""}
                  />
                )}
                <p className="text-sm text-dark-100 font-medium">{skill.name}</p>
                <p className="text-[10px] text-dark-400 mt-1 uppercase tracking-wider">{skill.category}</p>

                {/* Skill bar */}
                <div className="mt-3 h-1 rounded-full bg-dark-700/40 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(to right, ${brandColor[skill.name] || "#a1a1aa"}88, ${brandColor[skill.name] || "#a1a1aa"})` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
