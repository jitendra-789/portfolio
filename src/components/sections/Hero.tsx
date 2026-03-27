import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MagneticButton } from "../ui/MagneticButton";

const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/jitendra-789" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/jitendrakolli" },
  { name: "LeetCode", icon: SiLeetcode, url: "https://leetcode.com/u/jitendra789/" },
  { name: "Email", icon: Mail, url: "mailto:jitendrakolli18@gmail.com" },
];

export function Hero() {
  const nameText = "Jitendra Kolli".split(" ");
  const titleText = "Software Engineer | Scalable Systems | AI Applications".split(" ");

  return (
    <Section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center text-center pt-32 pb-16 px-6">
      
      {/* 🟢 Pulsing Availability Indicator */}
      <motion.div 
        className="flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-10 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default hover:bg-white/5 transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
        </span>
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-[0.2em]">Available for opportunities</span>
      </motion.div>

      {/* Cinematic Staggered Title Reveal */}
      <div className="mb-6 flex flex-wrap justify-center gap-x-4">
        {nameText.map((word, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 + idx * 0.15 }}
            className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Cinematic Staggered Subtitle Reveal */}
      <div className="mb-10 flex flex-wrap justify-center gap-x-2 text-lg md:text-xl font-medium text-white/50">
        {titleText.map((word, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 + idx * 0.05 }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="max-w-2xl text-base md:text-lg text-white/40 font-light leading-relaxed"
      >
        I build high-performance distributed architectures and fine-tune large scale ML models.
      </motion.p>

      {/* Magnetic Physics Social Buttons */}
      <div className="flex items-center space-x-4 md:space-x-6 mt-16">
        {socialLinks.map((link, idx) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.6 + idx * 0.1 }}
          >
            <MagneticButton>
              <a
                href={link.url}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full glass border border-white/20 flex items-center justify-center text-white/70 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(52,211,153,0.3)]"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </MagneticButton>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
