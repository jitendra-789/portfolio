import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 tracking-tight">Let's Connect</h2>
      <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto mb-12" />
      
      <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
      </p>

      <Card className="p-8 md:p-12 inline-block max-w-xl w-full">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Mail className="w-8 h-8 text-sky-400" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-white">Get In Touch</h3>
        <a 
          href="mailto:jitendrakolli18@gmail.com" 
          className="text-lg text-white/50 hover:text-white transition-colors block mb-8"
        >
          jitendrakolli18@gmail.com
        </a>
        <a 
          href="mailto:jitendrakolli18@gmail.com"
          className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform"
        >
          <span>Send an Email</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </Card>
    </Section>
  );
}
