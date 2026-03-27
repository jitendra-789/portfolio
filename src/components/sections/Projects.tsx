import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Scalable Hybrid RAG System",
    description: "Designed a distributed retrieval system using Neo4j and Qdrant. Built a real-time 'Chat with Data' system with <5s latency.",
    tags: ["Neo4j", "Qdrant", "Async ETL", "Python"],
    metrics: "100+ pages/min, <5s latency"
  },
  {
    title: "Financial Document Analysis",
    description: "Intelligent document analysis system built by fine-tuning an LLM on 100K+ documents. Deployed as a scalable backend system.",
    tags: ["LLMs", "Fine-tuning", "Python", "Backend"],
    metrics: "95% accuracy, 80% efficiency boost",
    githubUrl: "https://github.com/jitendra-789/Analysing_Income_Statement_with_LLM"
  },
  {
    title: "Face Anti-Spoofing System",
    description: "Real-time CNN-based authentication system deployed on AWS. Significantly reduced spoofing attacks across the platform.",
    tags: ["CNNs", "Computer Vision", "AWS EC2/S3", "SageMaker"],
    metrics: "90% spoof reduction, <200ms latency"
  },
  {
    title: "PPE Detection System",
    description: "Real-time YOLO-based detection pipeline designed to monitor and reduce workplace safety violations.",
    tags: ["YOLO", "Real-time Pipeline", "Computer Vision"],
    metrics: "70% reduction in safety violations"
  }
];

export function Projects() {
  return (
    <Section id="projects" className="max-w-5xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Projects</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-sky-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <Card 
            key={idx} 
            className="flex flex-col h-full group"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors pr-4">
                {project.title}
              </h3>
              
              <div className="relative z-20 shrink-0">
                <a 
                  href={project.githubUrl || "#"} 
                  target={project.githubUrl ? "_blank" : undefined}
                  rel={project.githubUrl ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all pointer-events-auto text-sm font-medium"
                >
                  <FaGithub className="w-4 h-4" />
                  <span className="hidden sm:block">GitHub</span>
                </a>
              </div>
            </div>
            
            <p className="text-white/70 text-base leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>
            
            <div className="mt-auto relative z-20">
              {project.metrics && (
                <div className="mb-6 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium inline-block">
                  {project.metrics}
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-sm font-medium text-white/50">
                    {tag}{tIdx !== project.tags.length - 1 ? <span className="mx-2 text-white/20">•</span> : ""}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
