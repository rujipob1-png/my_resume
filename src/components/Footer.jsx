import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { personalInfo } from "../data";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-dark-700/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-dark-300 text-[13px] flex items-center gap-1 tracking-wide"
        >
          © {new Date().getFullYear()} {personalInfo.nameEn}. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          {[
            { Icon: FaGithub, url: personalInfo.social.github },
            { Icon: FaLinkedin, url: personalInfo.social.linkedin },
            { Icon: FaTwitter, url: personalInfo.social.twitter },
          ]
            .filter((s) => s.url)
            .map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-primary-400 transition-colors duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
        </motion.div>
      </div>
    </footer>
  );
}
