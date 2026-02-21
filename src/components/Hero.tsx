import { useMemo } from "react";
import { motion } from "framer-motion";
import CitySkylline from "./CitySkylline";
import { COUPLE_NAMES, HERO } from "@/constants";

function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 65}%`,
    size: Math.random() * 2 + 1,
    duration: 2 + Math.random() * 4,
    delay: Math.random() * 5,
  }));
}

const Hero = () => {
  const stars = useMemo(() => generateStars(40), []);

  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1a0f2e 0%, #7b4a8f 70%, #0d0d18 100%)",
      }}
    >
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            "--twinkle-duration": `${star.duration}s`,
            "--twinkle-delay": `${star.delay}s`,
            animationDelay: `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          className="font-heading text-gold tracking-[0.4em] text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {HERO.invitation}
        </motion.p>

        <motion.h1
          className="font-display italic text-warm-white font-light leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {COUPLE_NAMES.partner1} & {COUPLE_NAMES.partner2}
        </motion.h1>

        <motion.p
          className="font-heading text-muted-gold tracking-[0.2em] text-base mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {HERO.date}
        </motion.p>

        <motion.button
          onClick={scrollToRSVP}
          className="font-heading tracking-[0.2em] text-sm px-8 py-3 border border-gold text-gold bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          {HERO.cta}
        </motion.button>
      </div>

      {/* City Skyline */}
      <CitySkylline />
    </section>
  );
};

export default Hero;
