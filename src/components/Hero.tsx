import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { COUPLE_NAMES, HERO } from "@/constants";
import heroBg from "@/assets/hero-bg.jpg";
import carImg from "@/assets/car.png";

const Hero = () => {
  // This outer div is the tall scroll container (200vh = enough room to scroll
  // through the car animation before the next section appears).
  const containerRef = useRef<HTMLDivElement>(null);

  // Scope useScroll to THIS container so progress goes 0→1 as you scroll
  // through the hero's own 200vh, not the entire page.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring wrapper — keeps the car gliding rather than snapping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.5,
  });

  // Car drives from left edge to right edge as user scrolls through [0 → 0.7]
  // then fades out [0.7 → 1.0] so it disappears cleanly before the next section
  const carX = useTransform(smoothProgress, [0, 0.7], ["-80px", "calc(100vw + 20px)"]);
  const carOpacity = useTransform(smoothProgress, [0.65, 0.85], [1, 0]);

  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Outer container: 200vh gives scroll room for the animation.
    // "sticky" inner panel keeps the visual locked while scrolling through.
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky panel — this is what the user SEES while scrolling */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-end justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="City skyline at twilight" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Car — animates left→right as the user scrolls the 200vh container */}
        <motion.img
          src={carImg}
          alt="Vintage car driving away"
          className="absolute bottom-[6%] z-20 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] pointer-events-none"
          style={{ left: carX, opacity: carOpacity }}
        />

        {/* Text Content */}
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
      </div>
    </div>
  );
};

export default Hero;
