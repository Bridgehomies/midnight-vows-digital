import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { COUPLE_NAMES, HERO } from "@/constants";
import heroBg from "@/assets/hero-bg.jpg";
import carImg from "@/assets/car.png"; // Rear view of the Mercedes

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // ANIMATION LOGIC:
  // x: Starts at 0 (center) and moves to 100vw (completely off-screen to the right)
  const carX = useTransform(smoothProgress, [0, 0.8], ["0%", "100vw"]);

  // scale & y: Subtle movement to make it look like it's pulling away
  const carScale = useTransform(smoothProgress, [0, 0.5], [1, 0.9]);
  const carOpacity = useTransform(smoothProgress, [0.4, 0.7], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[180vh]">
      {/* Sticky wrapper keeps the scene visible while you scroll the 180vh track */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Palace */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Palace Background" className="w-full h-full object-cover" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pb-32">
          <motion.h1
            style={{ opacity: carOpacity }}
            className="font-display italic text-white text-6xl md:text-8xl text-center leading-none"
          >
            {COUPLE_NAMES.partner1} <br />
            <span className="text-xl md:text-2xl block my-4 tracking-[0.5em] font-serif uppercase">Weds</span>
            {COUPLE_NAMES.partner2}
          </motion.h1>
        </div>

        {/* THE CAR: Starts centered, drives Right */}
        <motion.div
          style={{
            x: carX,
            scale: carScale,
            opacity: carOpacity,
            left: "50%",
            translateX: "-50%", // Keeps it centered initially
          }}
          className="absolute bottom-[8%] z-20 w-[280px] sm:w-[400px] md:w-[550px]"
        >
          <img src={carImg} alt="Vintage Car" className="w-full h-auto drop-shadow-2xl" />
        </motion.div>

        {/* Top UI buttons as seen in video */}
        <div className="absolute top-6 right-6 z-30 flex gap-2">
          <button className="bg-white text-black px-5 py-1.5 rounded-full text-xs font-bold shadow-md">Buy Now</button>
          <button className="bg-black/80 text-white px-5 py-1.5 rounded-full text-xs font-bold">INR 3999</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
