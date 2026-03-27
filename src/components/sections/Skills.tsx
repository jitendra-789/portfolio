import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C/C++", "SQL", "TypeScript"],
  },
  {
    title: "Backend & Systems",
    skills: ["REST APIs", "Flask", "Node.js", "Asynch Processing"],
  },
  {
    title: "Machine Learning",
    skills: ["NLP", "RAG", "LLMs", "CNNs", "YOLO", "Computer Vision"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "Neo4j", "Qdrant", "PostgreSQL"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "Docker", "AWS", "Postman", "SageMaker", "EC2"],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical Arsenal</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <Card 
            key={idx} 
            className="p-8 h-full flex flex-col justify-start"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-4 py-2 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
