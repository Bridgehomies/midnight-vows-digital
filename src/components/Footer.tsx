import { COUPLE_MONOGRAM, COUPLE_HASHTAG } from "@/constants";
import ornament from "@/assets/ornament.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-card text-center">
      <div className="font-display text-foreground text-5xl sm:text-7xl italic mb-6">
        {COUPLE_MONOGRAM}
      </div>
      <img
        src={ornament}
        alt=""
        className="w-28 mx-auto mb-6 opacity-40"
        aria-hidden="true"
      />
      <p className="font-heading text-primary tracking-[0.3em] text-sm mb-8">
        {COUPLE_HASHTAG}
      </p>
      <p className="font-body text-muted-foreground text-xs">
        Made with love
      </p>
    </footer>
  );
};

export default Footer;
