import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RSVP_WEBHOOK, MEAL_OPTIONS } from "@/constants";
import { Check, Minus, Plus } from "lucide-react";
import ornament from "@/assets/ornament.png";

type Status = "idle" | "loading" | "success" | "error";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guests, setGuests] = useState(1);
  const [meal, setMeal] = useState("");
  const [song, setSong] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg("Please fill in your name and email.");
      setStatus("error");
      return;
    }
    if (attending === null) {
      setErrorMsg("Please let us know if you're attending.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const payload = { name, email, attending, guests, meal, song, message };

    try {
      if (RSVP_WEBHOOK) {
        await fetch(RSVP_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.section
        id="rsvp"
        className="py-24 bg-background"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-primary flex items-center justify-center"
          >
            <Check className="w-10 h-10 text-primary" />
          </motion.div>
          <h3 className="font-display text-foreground text-3xl italic mb-4">
            Thank You!
          </h3>
          <p className="font-body text-muted-foreground text-lg">
            We can't wait to celebrate with you!
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="rsvp"
      className="py-20 sm:py-28 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-xl mx-auto px-6">
        <h2 className="font-heading text-muted-foreground tracking-[0.2em] text-xs uppercase text-center mb-2">
          Please
        </h2>
        <h3 className="font-display text-foreground text-4xl sm:text-5xl text-center mb-4 italic">
          RSVP
        </h3>

        <div className="flex justify-center mb-10">
          <img src={ornament} alt="" className="w-32 opacity-40" aria-hidden="true" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-heading text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
              Name *
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-card border-[hsl(var(--gold)/0.2)] text-foreground font-body focus:border-primary"
              placeholder="Your full name"
              maxLength={100}
            />
          </div>

          <div>
            <label className="font-heading text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
              Email *
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card border-[hsl(var(--gold)/0.2)] text-foreground font-body focus:border-primary"
              placeholder="your@email.com"
              maxLength={255}
            />
          </div>

          <div>
            <label className="font-heading text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
              Will you attend?
            </label>
            <div className="flex gap-3">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  type="button"
                  onClick={() => setAttending(val)}
                  className={`flex-1 py-3 font-heading text-xs tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
                    attending === val
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-[hsl(var(--gold)/0.2)] hover:border-primary"
                  }`}
                >
                  {val ? "JOYFULLY ACCEPT" : "REGRETFULLY DECLINE"}
                </button>
              ))}
            </div>
          </div>

          {attending && (
            <>
              <div>
                <label className="font-heading text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
                  Number of Guests
                </label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="w-10 h-10 border border-[hsl(var(--gold)/0.2)] text-primary flex items-center justify-center hover:border-primary transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-display text-foreground text-3xl w-8 text-center">
                    {guests}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.min(6, g + 1))}
                    className="w-10 h-10 border border-[hsl(var(--gold)/0.2)] text-primary flex items-center justify-center hover:border-primary transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <label className="font-heading text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
                  Meal Preference
                </label>
                <Select value={meal} onValueChange={setMeal}>
                  <SelectTrigger className="bg-card border-[hsl(var(--gold)/0.2)] text-foreground font-body focus:border-primary">
                    <SelectValue placeholder="Select your meal" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-[hsl(var(--gold)/0.2)]">
                    {MEAL_OPTIONS.map((opt) => (
                      <SelectItem
                        key={opt}
                        value={opt}
                        className="text-foreground font-body focus:bg-muted"
                      >
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="font-heading text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
                  Song Request
                </label>
                <Input
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                  className="bg-card border-[hsl(var(--gold)/0.2)] text-foreground font-body focus:border-primary"
                  placeholder="What song gets you on the dance floor?"
                  maxLength={200}
                />
              </div>
            </>
          )}

          <div>
            <label className="font-heading text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
              Message
            </label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-card border-[hsl(var(--gold)/0.2)] text-foreground font-body focus:border-primary min-h-[100px]"
              placeholder="Leave a note for the couple..."
              maxLength={1000}
            />
          </div>

          {status === "error" && (
            <p className="text-destructive font-body text-sm">{errorMsg}</p>
          )}

          <motion.button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 font-heading tracking-[0.2em] text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === "loading" ? "SENDING..." : "SEND RSVP"}
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default RSVPForm;
