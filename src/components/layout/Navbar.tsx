import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import { MagneticButton } from "../ui/MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", ...navLinks.map((l) => l.href.substring(1)), "contact"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 pointer-events-none">
        <nav
          className={cn(
            "pointer-events-auto flex items-center space-x-2 md:space-x-1 rounded-full px-4 md:px-6 py-2.5 md:py-3 transition-all duration-500 border",
            isScrolled 
              ? "glass border-surface-border bg-black/90 md:bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-3xl" 
              : "bg-surface border-surface-border backdrop-blur-xl bg-black/60 md:bg-transparent"
          )}
        >
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-2xl font-black tracking-tighter text-white mr-2 md:mr-6 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">JK</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center relative gap-1 md:gap-0">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={cn(
                    "relative px-4 md:px-5 py-2 text-sm font-medium transition-colors rounded-full",
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  )}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {hoveredIndex === idx && !isActive && (
                    <motion.span
                      layoutId="navHover"
                      className="absolute inset-0 bg-white/[0.05] rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
            
            <MagneticButton className="ml-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block text-sm font-bold text-black bg-white px-6 py-2.5 rounded-full transition-all outline-none border border-transparent hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:bg-black hover:text-white"
              >
                Contact
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors ml-4 p-2 rounded-full hover:bg-white/10 pointer-events-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto md:hidden absolute top-[70px] left-6 right-6 p-4 glass bg-black/95 border border-white/10 rounded-3xl flex flex-col space-y-2 origin-top shadow-2xl shadow-black/50"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={cn(
                      "text-base font-medium px-4 py-3 rounded-xl transition-colors",
                      isActive ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-base font-bold text-black bg-white px-4 py-3 rounded-xl text-center hover:bg-black hover:text-white border border-transparent hover:border-white transition-all shadow-lg"
              >
                Contact Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Résumé Button - Fixed top-right corner */}
      <a
        href="/Resume.pdf"
        download
        className="fixed top-7 right-6 z-50 text-sm font-bold text-white/80 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full transition-all border border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        Résumé
      </a>
    </>
  );
}
