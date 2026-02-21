import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { COUPLE_NAMES, HERO } from "@/constants";
import heroBg from "@/assets/hero-bg.jpg";
import carImg from "@/assets/car.png";

const Hero = () => {
  /**
   * WHY THE ORIGINAL WAS BROKEN:
   *
   * useScroll() with no target tracks the ENTIRE page scroll.
   * The hero was only min-h-screen (100vh) — so when the page loaded,
   * scrollYProgress was already past 0.15 (the car's full range).
   * The car sat frozen because it had nowhere to animate to.
   *
   * THE FIX — sticky scroll container pattern:
   *   1. Outer div (200vh)  → gives the browser real scroll distance
   *   2. Sticky inner div   → stays pinned while the user scrolls 200vh
   *   3. useScroll({ target: containerRef }) → progress 0→1 within those 200vh
   *
   * ALSO: replaced `left` with Framer's `x` prop — GPU-accelerated transform,
   * no layout recalculation, much smoother on low-end devices.
   */

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  // Car: off-screen left → off-screen right over first 80% of scroll
  const carX = useTransform(smoothProgress, [0, 0.8], ["-300px", "calc(100vw + 50px)"]);

  // Car fades out between 55% → 80% scroll progress
  const carOpacity = useTransform(smoothProgress, [0.55, 0.8], [1, 0]);

  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // 200vh outer div — this is what the page scrolls through
    <div ref={containerRef} style={{ height: "200vh" }}>
      {/* Sticky panel — stays locked to viewport as user scrolls the 200vh */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-end justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="City skyline at twilight" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Car
            - `absolute` keeps it inside the sticky panel (not fixed to page)
            - `x` prop (transform) is GPU-accelerated, unlike `left`
            - starts at -300px (fully hidden left), drives to 100vw+50px (off right)
            - bottom-[6%] sits it on the "ground" of the cityscape */}
        <motion.img
          src={carImg}
          alt="Vintage car driving away"
          className="absolute bottom-[6%] z-20 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] pointer-events-none"
          style={{
            x: carX,
            opacity: carOpacity,
          }}
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
      </div>
    </div>
  );
};

export default Hero;
