import { COUPLE_MONOGRAM, COUPLE_HASHTAG } from "@/constants";

const Footer = () => {
  return (
    <footer className="py-16 bg-night-card text-center">
      <div className="font-display text-warm-white text-5xl sm:text-7xl italic mb-6">
        {COUPLE_MONOGRAM}
      </div>
      <p className="font-heading text-gold tracking-[0.3em] text-sm mb-8">
        {COUPLE_HASHTAG}
      </p>
      <p className="font-body text-muted-gold text-xs">
        Made with love
      </p>
    </footer>
  );
};

export default Footer;
