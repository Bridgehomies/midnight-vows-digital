import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { COUPLE_NAMES, HERO } from "@/constants";
import heroBg from "@/assets/hero-bg.jpg"; // The palace illustration
import carImg from "@/assets/car-rear.png"; // Rear view of the Mercedes

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

  // Parallax: Background moves slightly slower than scroll
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);

  // Text moves up faster than the background
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  // Car: Scales down slightly as if driving into the distance while scrolling
  const carScale = useTransform(smoothProgress, [0, 1], [1, 0.9]);
  const carY = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);

  return (
    <div ref={containerRef} className="relative h-[150vh] bg-[#fdfaf5]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 1. Background Image with Parallax */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
          <img src={heroBg} alt="Palace Background" className="w-full h-full object-cover scale-110" />
          {/* Subtle vignette to make text pop */}
          <div className="absolute inset-0 bg-black/10 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
        </motion.div>

        {/* 2. Central Text Content */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 flex flex-col items-center justify-center h-full pb-32"
        >
          <motion.span
            className="text-white/90 tracking-[0.3em] text-[10px] sm:text-xs mb-6 uppercase font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {HERO.invitation || "The Wedding of"}
          </motion.span>

          <h1 className="flex flex-col items-center text-center">
            <span className="font-display italic text-white text-5xl md:text-7xl lg:text-8xl drop-shadow-lg leading-tight">
              {COUPLE_NAMES.partner1}
            </span>
            <span className="font-serif text-white/80 italic text-xl md:text-2xl my-2 tracking-widest">weds</span>
            <span className="font-display italic text-white text-5xl md:text-7xl lg:text-8xl drop-shadow-lg leading-tight">
              {COUPLE_NAMES.partner2}
            </span>
          </h1>
        </motion.div>

        {/* 3. The Vintage Car (Rear View) */}
        <motion.div
          style={{
            scale: carScale,
            y: carY,
            x: "-50%",
          }}
          className="absolute bottom-[-2%] left-1/2 z-20 w-[300px] sm:w-[450px] md:w-[600px] lg:w-[750px]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={carImg}
            alt="Vintage Mercedes"
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          />
        </motion.div>

        {/* 4. Top UI Elements (Buttons) */}
        <div className="absolute top-6 right-6 z-30 flex gap-2">
          <button className="bg-white/90 text-black px-4 py-1.5 rounded-full text-xs font-bold shadow-sm hover:bg-white transition-colors">
            Buy Now
          </button>
          <button className="bg-black/80 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
            INR 3999
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
