import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Particles() {
  const [stars, setStars] = useState<
    { id: number; x: number; y: number; size: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    // Generate 150 static twinkling stars
    const generated = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 2,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden isolate">
      
      {/* ⭐ Twinkling Stars */}
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]"
          style={{
            left: `${s.x}vw`,
            top: `${s.y}vh`,
            width: s.size,
            height: s.size,
          }}
          animate={{ opacity: [0.1, 1, 0.1] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
