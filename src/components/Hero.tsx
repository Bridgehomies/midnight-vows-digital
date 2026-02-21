import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { COUPLE_NAMES, HERO } from "@/constants";
import heroBg from "@/assets/hero-bg.jpg";
import carImg from "@/assets/car.png";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    mass: 0.5,
  });

  // Car drives from center to off-screen right
  const carX = useTransform(smoothProgress, [0, 0.7], ["0%", "120%"]);
  const carScale = useTransform(smoothProgress, [0, 0.5], [1, 0.85]);
  const carOpacity = useTransform(smoothProgress, [0.5, 0.75], [1, 0]);
  const textOpacity = useTransform(smoothProgress, [0.2, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Palace Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
        </div>

        {/* Text Content - positioned above the car */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full" style={{ paddingBottom: "35vh" }}>
          <motion.p
            style={{ opacity: textOpacity }}
            className="font-heading text-primary tracking-[0.3em] text-xs sm:text-sm uppercase mb-6"
          >
            {HERO.invitation}
          </motion.p>
          <motion.h1
            style={{ opacity: textOpacity }}
            className="font-display italic text-foreground text-5xl sm:text-6xl md:text-8xl text-center leading-none"
          >
            {COUPLE_NAMES.partner1}
            <span className="text-lg sm:text-xl md:text-2xl block my-3 sm:my-4 tracking-[0.5em] font-heading uppercase text-primary not-italic">
              &
            </span>
            {COUPLE_NAMES.partner2}
          </motion.h1>
          <motion.p
            style={{ opacity: textOpacity }}
            className="font-body text-muted-foreground text-sm sm:text-base mt-6 tracking-wide"
          >
            {HERO.date}
          </motion.p>
        </div>

        {/* Car - positioned at the bottom */}
        <motion.div
          style={{
            x: carX,
            scale: carScale,
            opacity: carOpacity,
          }}
          className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-20 w-[260px] sm:w-[380px] md:w-[500px]"
        >
          <img src={carImg} alt="Vintage Car" className="w-full h-auto drop-shadow-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
