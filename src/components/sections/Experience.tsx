import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Gyan Data Pvt. Ltd.",
    date: "Sept 2025 – Present",
    location: "Chennai",
    points: [
      "Designed and implemented a scalable hybrid RAG system for enterprise knowledge retrieval.",
      "Built asynchronous data pipelines and optimized vector search workflows.",
      "Developed backend components enabling low-latency (<5s) real-time querying."
    ]
  },
  {
    role: "Research Intern",
    company: "NIT Karnataka",
    date: "May 2025 – June 2025",
    location: "Surathkal",
    points: [
      "Modeled task offloading in Mobile Edge Computing as a stochastic congestion game.",
      "Analyzed Nash Equilibrium and decentralized learning convergence.",
      "Contributed to a research publication."
    ]
  },
  {
    role: "AI Intern",
    company: "Infosys Springboard",
    date: "Oct 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Built an LLM-based financial document analysis system improving efficiency by 80%.",
      "Containerized and deployed a Flask-based web application."
    ]
  }
];

export function Experience() {
  return (
    <Section id="experience" className="max-w-5xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-5xl font-black mb-4 tracking-tighter">Experience</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" />
      </div>

      <div className="flex flex-col gap-12 md:gap-16">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          >
            {/* Left side: Massive Numbering & Company */}
            <div className="md:w-1/3 shrink-0 pt-2">
              <h3 className="text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 tracking-tighter mb-4 select-none">
                0{idx + 1}/
              </h3>
              <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">{exp.company}</h4>
              <p className="text-sky-400 font-medium tracking-wide text-sm uppercase">{exp.role}</p>
            </div>

            {/* Right side: Glass Card Details */}
            <Card className="md:w-2/3 p-6 md:p-8 flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="flex flex-wrap gap-3 text-sm text-white/60 mb-6 border-b border-white/10 pb-5">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <Calendar className="w-4 h-4 text-white/80" />
                  <span>{exp.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <ul className="space-y-4">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-white/80 text-base leading-relaxed flex items-start group/item">
                    <span className="mr-5 mt-2.5 w-1.5 h-1.5 rounded-full bg-sky-500/50 group-hover/item:bg-sky-400 transition-colors block shrink-0 shadow-[0_0_10px_rgba(14,165,233,0)] group-hover/item:shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
