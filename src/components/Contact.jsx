import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { personalInfo } from "../data";

const contactInfo = [
  { icon: <FiMail className="w-6 h-6" />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FiPhone className="w-6 h-6" />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <FiMapPin className="w-6 h-6" />, label: "Location", value: personalInfo.location },
];

const socials = [
  { Icon: FaGithub, url: personalInfo.social.github, label: "GitHub" },
  { Icon: FaLinkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
  { Icon: FaTwitter, url: personalInfo.social.twitter, label: "Twitter" },
  { Icon: FaFacebook, url: personalInfo.social.facebook, label: "Facebook" },
].filter((s) => s.url);

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-dark-950 border border-dark-700/40 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/15 outline-none transition-all text-white placeholder:text-dark-500 text-[15px]";

  return (
    <section id="contact" className="section-wrapper py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="section-subtext">Get in touch</p>
          <h2 className="section-headtext mt-2">
            มา<span className="gradient-text"> พูดคุย </span>กัน
          </h2>
          <p className="text-dark-300/70 mt-4 max-w-lg text-[15px]">
            สนใจจะร่วมงานหรือมีคำถามอะไร ส่งข้อความมาได้เลยครับ!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <span className="w-12 h-12 rounded-xl bg-dark-800/60 text-primary-400 flex items-center justify-center shrink-0 group-hover:violet-gradient group-hover:text-white transition-all border border-dark-700/30">
                  {c.icon}
                </span>
                <div>
                  <p className="text-[11px] text-dark-500 uppercase tracking-[0.15em]">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-medium text-white hover:text-primary-400 transition-colors text-[15px]">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-medium text-white text-[15px]">{c.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="pt-6 border-t border-dark-700/50"
            >
              <p className="text-[12px] text-dark-500 mb-3 uppercase tracking-[0.15em]">ติดตามฉันได้ที่</p>
              <div className="flex gap-3">
                {socials.map(({ Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl bg-dark-800/40 hover:bg-primary-500 text-dark-400 hover:text-white transition-all hover:scale-110 hover:-translate-y-0.5 border border-dark-700/30"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 p-8 rounded-2xl bg-dark-800/50 border border-dark-700/40"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-[13px] font-medium text-dark-400 mb-1.5 tracking-wide">
                  ชื่อ
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="ชื่อของคุณ"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[13px] font-medium text-dark-400 mb-1.5 tracking-wide">
                  อีเมล
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="subject" className="block text-[13px] font-medium text-dark-400 mb-1.5 tracking-wide">
                หัวข้อ
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formState.subject}
                onChange={handleChange}
                className={inputClass}
                placeholder="สนใจจะร่วมงาน..."
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-[13px] font-medium text-dark-400 mb-1.5 tracking-wide">
                ข้อความ
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="เขียนข้อความของคุณที่นี่..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 rounded-xl animated-gradient text-white font-semibold shadow-lg shadow-primary-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {sending ? (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : sent ? (
                <>
                  <FiCheckCircle /> ส่งเรียบร้อย!
                </>
              ) : (
                <>
                  <FiSend /> ส่งข้อความ
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
