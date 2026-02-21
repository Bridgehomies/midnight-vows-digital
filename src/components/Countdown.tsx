import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { WEDDING_DATE } from "@/constants";

const LABELS = ["Days", "Hours", "Minutes", "Seconds"] as const;

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);
  const values = [days, hours, minutes, seconds];

  return (
    <motion.section
      className="py-20 bg-night-deep"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-center gap-4 sm:gap-8">
          {values.map((val, i) => (
            <div
              key={LABELS[i]}
              className="border border-gold-subtle rounded-sm px-4 py-5 sm:px-8 sm:py-6 text-center min-w-[70px] sm:min-w-[100px]"
            >
              <div className="font-display text-gold-highlight text-3xl sm:text-5xl leading-none">
                {String(val).padStart(2, "0")}
              </div>
              <div className="font-heading text-muted-gold text-[0.65rem] sm:text-xs tracking-[0.2em] mt-2 uppercase">
                {LABELS[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Countdown;
