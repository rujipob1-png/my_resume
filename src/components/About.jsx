import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutData, personalInfo } from "../data";
import { FiUser, FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const fadeIn = (dir, delay) => ({
  hidden: { opacity: 0, x: dir === "left" ? -60 : dir === "right" ? 60 : 0, y: dir === "up" ? 60 : 0 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay } },
});

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const contactItems = [
    { icon: <FiUser className="w-5 h-5" />, label: "ชื่อ", text: personalInfo.name },
    { icon: <FiMapPin className="w-5 h-5" />, label: "ที่อยู่", text: personalInfo.location },
    { icon: <FiMail className="w-5 h-5" />, label: "อีเมล", text: personalInfo.email },
    { icon: <FiPhone className="w-5 h-5" />, label: "เบอร์โทร", text: personalInfo.phone },
  ];

  return (
    <section id="about" className="section-wrapper py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16"
        >
          <p className="section-subtext">Introduction</p>
          <h2 className="section-headtext mt-2">
            รู้จัก<span className="gradient-text"> ฉัน </span>มากขึ้น
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — Info card */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden">
              <div className="animated-gradient p-[1px] rounded-2xl">
                <div className="bg-dark-900 rounded-2xl p-6 space-y-2">
                  {contactItems.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-dark-800/60 transition-colors group"
                    >
                      <span className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-400 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all shrink-0">
                        {c.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] text-dark-500 uppercase tracking-[0.15em]">{c.label}</p>
                        <p className="text-dark-100 font-medium truncate text-[15px]">{c.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Description + Stats */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-3"
          >
            <p className="text-dark-300 leading-relaxed text-base mb-12">
              {aboutData.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {aboutData.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="tilt-card p-5 rounded-2xl text-center cursor-default"
                >
                  <div className="text-3xl font-bold gradient-text mb-1 font-heading">{h.value}</div>
                  <div className="text-[11px] text-dark-400 uppercase tracking-[0.15em] font-medium">{h.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
