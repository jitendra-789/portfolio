import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Terminal, Database, Cpu } from "lucide-react";

export function About() {
  return (
    <Section id="about" className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mb-8" />
          
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            I am a Software Engineer with a deep passion for building scalable systems, distributed architectures, and AI-driven applications. 
            Currently pursuing my B.Tech in CSE (AI & ML) at <span className="text-white font-medium">Gayatri Vidya Parishad College of Engineering</span>.
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            My expertise lies in backend development, performance optimization, and real-time data processing. 
            I enjoy transforming complex problems into elegant, highly-performant solutions.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card 
            className="p-6"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4 border border-sky-500/20">
              <Terminal className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Backend & Systems</h3>
            <p className="text-white/50 text-sm">Low-latency APIs and asynchronous pipelines.</p>
          </Card>
          <Card 
            className="p-6"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 border border-indigo-500/20">
              <Cpu className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
            <p className="text-white/50 text-sm">RAG, LLMs, and Computer Vision models.</p>
          </Card>
          <Card 
            className="p-6 sm:col-span-2"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20">
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Distributed Data</h3>
            <p className="text-white/50 text-sm">Optimizing vector search & real-time databases.</p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
