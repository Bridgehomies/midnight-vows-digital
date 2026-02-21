import { motion } from "framer-motion";
import { ACCOMMODATIONS } from "@/constants";
import { MapPin } from "lucide-react";

const Accommodations = () => {
  return (
    <motion.section
      className="py-24 bg-night-deep"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-warm-white text-4xl sm:text-5xl text-center mb-16 italic">
          Accommodations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <div className="border border-gold-subtle rounded-sm bg-night-card flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
              <span className="font-heading text-xs tracking-widest text-muted-gold">
                VENUE MAP
              </span>
            </div>
          </div>

          {/* Hotels */}
          <div className="space-y-4">
            {ACCOMMODATIONS.map((hotel) => (
              <div
                key={hotel.name}
                className="border border-gold-subtle rounded-sm p-6 bg-night-card"
              >
                <h3 className="font-display text-warm-white text-xl mb-2">
                  {hotel.name}
                </h3>
                <span className="inline-block font-heading text-[0.65rem] tracking-[0.15em] text-muted-gold border border-gold-subtle rounded-full px-3 py-1 mb-4">
                  {hotel.distance}
                </span>
                <div>
                  <a
                    href={hotel.bookUrl}
                    className="font-heading text-xs tracking-[0.2em] text-gold border border-gold px-5 py-2 inline-block hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    BOOK ROOM
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Accommodations;
