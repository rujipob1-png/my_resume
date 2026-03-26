import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const socials = [
  personalInfo.social.github && { label: "GitHub", href: personalInfo.social.github, Icon: FaGithub },
  personalInfo.social.linkedin && { label: "LinkedIn", href: personalInfo.social.linkedin, Icon: FaLinkedin },
].filter(Boolean);

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const anim = inView ? "show" : "hidden";

  return (
    <section id="contact" className="section-wrapper py-32 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        {/* Subtext */}
        <motion.p variants={fadeUp(0)} initial="hidden" animate={anim} className="section-subtext mb-4">
          Contact
        </motion.p>

        {/* Heading */}
        <motion.h2 variants={fadeUp(0.08)} initial="hidden" animate={anim} className="section-headtext">
          LET'S<span className="gradient-text"> WORK TOGETHER</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp(0.16)}
          initial="hidden"
          animate={anim}
          className="text-dark-400 text-lg sm:text-xl mt-6 max-w-xl mx-auto leading-relaxed"
        >
          Feel free to reach out if you’d like to collaborate or just say hi. I’m always open to new ideas, opportunities, and interesting projects.
        </motion.p>

        {/* Contact info — Email & Phone */}
        <motion.div
          variants={fadeUp(0.24)}
          initial="hidden"
          animate={anim}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10"
        >
          <span className="inline-flex items-center gap-2.5">
            <FiMail className="w-5 h-5 text-accent-400" />
            <a href={`mailto:${personalInfo.email}`} className="text-base sm:text-lg text-dark-300 hover:text-white transition-colors">
              {personalInfo.email}
            </a>
          </span>
          <span className="inline-flex items-center gap-2.5">
            <FiPhone className="w-5 h-5 text-accent-400" />
            <a href={`tel:${personalInfo.phone}`} className="text-base sm:text-lg text-dark-300 hover:text-white transition-colors">
              {personalInfo.phone}
            </a>
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp(0.32)}
          initial="hidden"
          animate={anim}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-accent-400 text-dark-950 font-semibold text-base hover:bg-accent-500 transition-all hover:scale-105 active:scale-95"
          >
            <FiMail className="w-4 h-4" />
            Send Email
          </a>

          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-dark-800 border border-dark-600/40 text-white font-semibold text-base hover:bg-dark-700 hover:border-dark-500/50 transition-all hover:scale-105 active:scale-95"
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
