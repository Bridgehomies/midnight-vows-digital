import { motion } from "framer-motion";
import { Hash, Sun, Car, Shirt } from "lucide-react";
import { THINGS_TO_KNOW } from "@/constants";

const ICONS: Record<string, React.ElementType> = { Hash, Sun, Car, Shirt };

const ThingsToKnow = () => {
  return (
    <motion.section
      className="py-20 sm:py-28 bg-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-foreground text-4xl sm:text-5xl text-center mb-4 italic">
          Things to Know
        </h2>
        <p className="font-body text-muted-foreground text-sm sm:text-base text-center mb-14 max-w-xl mx-auto">
          To help you feel at ease and enjoy every moment of the celebrations, here are a few details we'd love for you to know.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {THINGS_TO_KNOW.map((item, i) => {
            const Icon = ICONS[item.icon] || Hash;
            return (
              <motion.div
                key={item.title}
                className="border border-[hsl(var(--gold)/0.2)] rounded-sm p-6 bg-background/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-foreground tracking-[0.15em] text-xs uppercase mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ThingsToKnow;
