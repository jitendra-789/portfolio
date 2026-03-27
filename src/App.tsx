import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Particles } from "./components/ui/Particles";
import { NoiseOverlay } from "./components/ui/NoiseOverlay";

import { useEffect } from "react";

import { Analytics } from "@vercel/analytics/react";

export default function App() {
  useEffect(() => {
    // Force the title to update (bypassing any cached index.html title)
    document.title = "jitendrakolli";
  }, []);

  return (
    <div className="relative min-h-screen bg-background selection:bg-white/20 selection:text-white">
      
      {/* Cinematic Film Grain & Dark Space Layer */}
      <NoiseOverlay />

      {/* Liquid Glass Background Gradients & Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_60%)] animate-blob" />
        <div className="hidden md:block absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="hidden md:block absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <Particles />

      <Navbar />

      <main className="relative z-10 font-sans">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
