import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutData, personalInfo } from "../data";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-wrapper py-28 px-6 sm:px-10">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left — Title + Stats */}
          <div className="lg:col-span-2">
            <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "show" : "hidden"}>
              <p className="section-subtext mb-3">About Me</p>
              <h2 className="section-headtext">
                ABOUT<span className="gradient-text"> ME</span>
              </h2>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="grid grid-cols-2 gap-4 mt-10"
            >
              {aboutData.highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-xl bg-dark-800/40 border border-dark-700/40">
                  <div className="text-2xl font-bold text-white font-heading">{h.value}</div>
                  <div className="text-[11px] text-dark-500 uppercase tracking-[0.12em] mt-1">{h.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Description */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="relative pl-6 border-l border-dark-700/60">
              <p className="text-dark-300 text-[15px] leading-[1.8]">
                {aboutData.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-dark-400">Available for work</span>
                </div>
                <span className="text-dark-700">|</span>
                <span className="text-sm text-dark-400">Bangkok, Thailand</span>
                <span className="text-dark-700">|</span>
                <a
                  href={personalInfo.resumeUrl}
                  className="text-sm text-white hover:text-dark-300 underline underline-offset-4 decoration-dark-600 hover:decoration-dark-400 transition-all"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
