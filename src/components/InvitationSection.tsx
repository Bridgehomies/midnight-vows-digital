import { motion } from "framer-motion";
import { INVITATION, COUPLE_NAMES } from "@/constants";
import ornament from "@/assets/ornament.png";

const InvitationSection = () => {
  return (
    <motion.section
      className="py-20 sm:py-28 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-body text-muted-foreground text-sm sm:text-base italic mb-8">
          {INVITATION.blessing}
        </p>

        <img
          src={ornament}
          alt=""
          className="w-40 sm:w-52 mx-auto mb-8 opacity-60"
          aria-hidden="true"
        />

        <p className="font-heading text-foreground text-xs sm:text-sm tracking-[0.15em] mb-2">
          {INVITATION.familyLine1}
        </p>
        <p className="font-body text-muted-foreground text-xs mb-6">——</p>
        <p className="font-heading text-foreground text-xs sm:text-sm tracking-[0.15em] mb-10">
          {INVITATION.familyLine2}
        </p>

        <p className="font-heading text-gold tracking-[0.2em] text-xs uppercase mb-8">
          {INVITATION.inviteText}
        </p>

        <h2
          className="font-display italic text-foreground font-light leading-tight mb-3"
          style={{ fontSize: "clamp(2rem, 7vw, 4rem)" }}
        >
          {COUPLE_NAMES.partner1}
        </h2>

        <p className="font-display italic text-gold text-2xl sm:text-3xl mb-3">&</p>

        <h2
          className="font-display italic text-foreground font-light leading-tight mb-10"
          style={{ fontSize: "clamp(2rem, 7vw, 4rem)" }}
        >
          {COUPLE_NAMES.partner2}
        </h2>

        <img
          src={ornament}
          alt=""
          className="w-40 sm:w-52 mx-auto mb-10 opacity-60 rotate-180"
          aria-hidden="true"
        />

        <p className="font-heading text-muted-foreground tracking-[0.2em] text-xs uppercase">
          {INVITATION.closingText}
        </p>
      </div>
    </motion.section>
  );
};

export default InvitationSection;
