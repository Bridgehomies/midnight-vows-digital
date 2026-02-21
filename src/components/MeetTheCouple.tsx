import { motion } from "framer-motion";
import { MEET_THE_COUPLE } from "@/constants";
import coupleIllustration from "@/assets/couple-illustration.jpg";
import ornament from "@/assets/ornament.png";

const MeetTheCouple = () => {
  return (
    <motion.section
      className="py-20 sm:py-28 bg-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading text-muted-foreground tracking-[0.2em] text-xs uppercase text-center mb-2">
          meet the
        </h2>
        <h3 className="font-display text-foreground text-3xl sm:text-5xl text-center mb-12 italic">
          Bride & Groom
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Illustration */}
          <motion.div
            className="rounded-sm overflow-hidden border border-[hsl(var(--gold)/0.2)]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={coupleIllustration}
              alt="Couple illustration"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              {MEET_THE_COUPLE.description}
            </p>
            <img
              src={ornament}
              alt=""
              className="w-32 opacity-50"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MeetTheCouple;
