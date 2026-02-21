import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  label: `Photo ${i + 1}`,
}));

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf: number;
    let speed = 0.5;

    const step = () => {
      setScrollPos((prev) => {
        const next = prev + speed;
        const maxScroll = el.scrollWidth / 2;
        if (next >= maxScroll) return 0;
        return next;
      });
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPos;
    }
  }, [scrollPos]);

  const navigate = (dir: -1 | 1) => {
    if (selected === null) return;
    const next = selected + dir;
    if (next >= 0 && next < GALLERY_IMAGES.length) setSelected(next);
  };

  return (
    <motion.section
      className="py-20 sm:py-28 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="font-display text-foreground text-4xl sm:text-5xl text-center italic">
          Gallery
        </h2>
      </div>

      {/* Auto-scrolling carousel - duplicate items for seamless loop */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden px-6"
        style={{ scrollBehavior: "auto" }}
      >
        {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
          <motion.div
            key={`${img.id}-${i}`}
            className="flex-shrink-0 w-52 sm:w-64 border border-[hsl(var(--gold)/0.2)] rounded-sm overflow-hidden cursor-pointer bg-card hover:border-primary transition-colors duration-300"
            style={{ aspectRatio: "3/4" }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(img.id)}
          >
            <div className="w-full h-full flex items-center justify-center text-muted-foreground font-heading text-xs tracking-widest">
              {img.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary hover:text-accent transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            {selected > 0 && (
              <button
                className="absolute left-6 text-primary hover:text-accent transition-colors"
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
            )}
            {selected < GALLERY_IMAGES.length - 1 && (
              <button
                className="absolute right-6 text-primary hover:text-accent transition-colors"
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            )}

            <motion.div
              className="w-full max-w-lg border border-[hsl(var(--gold)/0.2)] rounded-sm bg-card flex items-center justify-center"
              style={{ aspectRatio: "3/4" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-muted-foreground font-heading tracking-widest text-sm">
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
