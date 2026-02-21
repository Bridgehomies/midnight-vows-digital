import { motion } from "framer-motion";
import { Heart, Wine, PartyPopper, GlassWater, Music, MapPin } from "lucide-react";
import { EVENTS } from "@/constants";
import venueBg from "@/assets/venue-bg.jpg";

const ICONS: Record<string, React.ElementType> = {
  Heart,
  Wine,
  PartyPopper,
  GlassWater,
  Music,
};

const EventDetails = () => {
  return (
    <section className="relative">
      {/* Decorative background band */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={venueBg}
          alt=""
          className="w-full h-full object-cover opacity-15"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            className="font-display text-foreground text-4xl sm:text-5xl text-center mb-16 italic"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Wedding Events
          </motion.h2>

          <div className="space-y-6">
            {EVENTS.map((event, i) => {
              const Icon = ICONS[event.icon] || Heart;
              return (
                <motion.div
                  key={event.type}
                  className="border border-[hsl(var(--gold)/0.2)] rounded-sm p-6 sm:p-8 bg-card/80 backdrop-blur-sm transition-colors duration-300 hover:border-primary"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, boxShadow: "0 0 20px hsl(var(--gold-glow))" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                    <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-heading text-primary tracking-[0.15em] text-xs sm:text-sm uppercase">
                        {event.type}
                      </span>
                    </div>

                    <div className="flex-1">
                      <p className="font-display text-foreground text-lg sm:text-xl mb-1">
                        {event.venue}
                      </p>
                      <p className="font-body text-muted-foreground text-sm mb-1">
                        {event.date} — {event.time}
                      </p>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="font-body text-xs">{event.address}</span>
                      </div>
                    </div>

                    <a
                      href={event.directionsUrl}
                      className="font-heading text-[0.65rem] tracking-[0.2em] text-primary border-b border-[hsl(var(--gold)/0.3)] hover:border-primary transition-colors pb-0.5 self-start sm:self-center"
                    >
                      SEE THE ROUTE
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
