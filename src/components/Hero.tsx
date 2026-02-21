import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { COUPLE_NAMES, HERO } from "@/constants";
import heroBg from "@/assets/hero-bg.jpg";
import carSideView from "@/assets/car.png"; // Use a side-profile car image

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Smooth out the scroll progress to prevent "jittery" driving
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  // 3. Map vertical scroll (0 to 1) to horizontal position (-20% to 110%)
  // This makes the car drive across the entire width of the screen
  const carX = useTransform(smoothProgress, [0, 1], ["-20vw", "105vw"]);

  // Optional: Rotate the car slightly to simulate a "bumpy" road or incline
  const carRotate = useTransform(smoothProgress, [0, 0.5, 1], [0, -2, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {" "}
      {/* The "Track" length */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#fdfaf5]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Palace" className="w-full h-full object-cover" />
        </div>

        {/* Text Layer (Behind the Car) */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display italic text-white text-6xl md:text-9xl drop-shadow-md text-center"
          >
            {COUPLE_NAMES.partner1} <br />
            <span className="text-2xl block my-4 font-serif">weds</span>
            {COUPLE_NAMES.partner2}
          </motion.h1>
        </div>

        {/* The Car - Moving Left to Right */}
        <motion.div
          style={{
            x: carX,
            rotate: carRotate,
          }}
          className="absolute bottom-[10%] z-20 w-[250px] sm:w-[400px] md:w-[500px]"
        >
          <img src={carSideView} alt="Driving Car" className="w-full h-auto drop-shadow-2xl" />
          {/* Subtle Shadow on the ground */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-xl rounded-[100%]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
