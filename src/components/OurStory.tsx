import { motion } from "framer-motion";
import { STORY_ITEMS } from "@/constants";

const OurStory = () => {
  return (
    <motion.section
      className="py-24 bg-night-deep"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-warm-white text-4xl sm:text-5xl text-center mb-20 italic">
          Our Story
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {STORY_ITEMS.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 bg-night-card border border-gold-subtle rounded-sm p-6 sm:p-8 ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <h3 className="font-display text-warm-white text-2xl mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-gold leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Year badge */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="font-heading text-primary-foreground text-xs tracking-wider">
                      {item.year}
                    </span>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory;
