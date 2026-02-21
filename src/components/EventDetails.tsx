import { motion } from "framer-motion";
import { Heart, Wine, MapPin, Clock } from "lucide-react";
import { EVENTS } from "@/constants";

const ICONS: Record<string, typeof Heart> = { Heart, Wine };

const EventDetails = () => {
  return (
    <motion.section
      className="py-24 bg-night-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-warm-white text-4xl sm:text-5xl text-center mb-16 italic">
          Event Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EVENTS.map((event) => {
            const Icon = ICONS[event.icon] || Heart;
            return (
              <motion.div
                key={event.type}
                className="border border-gold-subtle rounded-sm p-8 bg-night-deep transition-colors duration-300 hover:border-gold"
                whileHover={{ y: -4, boxShadow: "0 0 20px rgba(201,168,76,0.3)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-5 h-5 text-gold" />
                  <span className="font-heading text-gold tracking-[0.2em] text-sm uppercase">
                    {event.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3 text-muted-gold">
                  <Clock className="w-4 h-4" />
                  <span className="font-body text-sm">{event.time}</span>
                </div>

                <h3 className="font-display text-warm-white text-2xl mb-1">
                  {event.venue}
                </h3>

                <div className="flex items-start gap-2 mb-6 text-muted-gold">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm">{event.address}</span>
                </div>

                <a
                  href={event.directionsUrl}
                  className="font-heading text-xs tracking-[0.2em] text-gold border-b border-gold-subtle hover:border-gold transition-colors pb-0.5"
                >
                  GET DIRECTIONS
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default EventDetails;
