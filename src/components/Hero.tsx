import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { COUPLE_NAMES, HERO } from "@/constants";
import heroBg from "@/assets/hero-bg.jpg";
import carImg from "@/assets/car.png";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, mass: 0.5 });

  const carX = useTransform(smoothProgress, [0, 0.15], ["20px", "calc(100vw - 300px)"]);
  const carOpacity = useTransform(smoothProgress, [0.12, 0.18], [1, 0]);

  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-end justify-center overflow-visible">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="City skyline at twilight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Car — starts at left, moves right on scroll */}
      <motion.img
        src={carImg}
        alt="Vintage car driving away"
        className="fixed bottom-[6%] z-20 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] pointer-events-none"
        style={{ left: carX, opacity: carOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pb-20 pt-40">
        <motion.p
          className="font-heading text-gold tracking-[0.4em] text-xs sm:text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {HERO.invitation}
        </motion.p>

        <motion.h1
          className="font-display italic text-foreground font-light leading-none mb-2"
          style={{ fontSize: "clamp(2.5rem, 10vw, 6rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {COUPLE_NAMES.partner1}
        </motion.h1>

        <motion.p
          className="font-heading text-gold tracking-[0.5em] text-xs sm:text-sm my-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          WEDS
        </motion.p>

        <motion.h1
          className="font-display italic text-foreground font-light leading-none mb-8"
          style={{ fontSize: "clamp(2.5rem, 10vw, 6rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {COUPLE_NAMES.partner2}
        </motion.h1>

        <motion.button
          onClick={scrollToRSVP}
          className="font-heading tracking-[0.2em] text-xs sm:text-sm px-8 py-3 border border-gold text-gold bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          {HERO.cta}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
