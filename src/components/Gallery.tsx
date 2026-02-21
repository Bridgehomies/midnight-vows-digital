import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GALLERY_COUNT = 8;

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <motion.section
      className="py-24 bg-night-deep"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-warm-white text-4xl sm:text-5xl text-center mb-16 italic">
          Gallery
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
          {Array.from({ length: GALLERY_COUNT }, (_, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-52 border border-gold-subtle rounded-sm overflow-hidden cursor-pointer bg-night-card"
              style={{ aspectRatio: "3/4" }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(i)}
            >
              <div className="w-full h-full flex items-center justify-center text-muted-gold font-heading text-xs tracking-widest">
                PHOTO {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-gold hover:text-gold-highlight transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              className="w-full max-w-lg border border-gold-subtle rounded-sm bg-night-card flex items-center justify-center"
              style={{ aspectRatio: "3/4" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-muted-gold font-heading tracking-widest text-sm">
                PHOTO {selected + 1}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Gallery;
