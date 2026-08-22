import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram, X } from "lucide-react";

/* ── Early Bird deadline logic ── */
const EARLY_BIRD_TIERS = [
  { label: "SUPER EARLY BIRD", discount: "30% OFF", deadline: new Date("2026-09-30T23:59:59+01:00") },
  { label: "EARLY BIRD 2",     discount: "15% OFF", deadline: new Date("2026-11-30T23:59:59+01:00") },
  { label: "EARLY BIRD 3",     discount: "10% OFF", deadline: new Date("2027-01-31T23:59:59+01:00") },
  { label: "FINAL EARLY BIRD", discount: "5% OFF",  deadline: new Date("2027-03-15T23:59:59+01:00") },
];

function getActiveTier() {
  const now = Date.now();
  return EARLY_BIRD_TIERS.find((t) => now < t.deadline.getTime()) ?? null;
}

function formatDeadline(d: Date) {
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function TopBar() {
  const [dismissed, setDismissed] = useState(false);
  const tier = getActiveTier();

  return (
    <>
      {/* Early Bird announcement bar */}
      {tier && !dismissed && (
        <div className="w-full bg-gradient-to-r from-primary/15 via-primary/8 to-transparent border-b border-primary/20 relative">
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-6">
            <a
              href="https://app.eventpadi.com/wagcon/f/WAGCON"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="hidden sm:inline-flex font-button text-[10px] uppercase tracking-[0.25em] font-black text-primary border border-primary/30 px-3 py-1">
                {tier.label}
              </span>
              <span className="font-button text-[11px] sm:text-xs uppercase tracking-wider text-white/90 font-bold">
                <span className="text-primary font-black">{tier.discount}</span>
                {" "}Sponsorship & Exhibition
                <span className="hidden md:inline"> — Ends {formatDeadline(tier.deadline)}</span>
              </span>
              <span className="font-button text-[10px] uppercase tracking-wider text-primary font-black group-hover:text-white transition-colors">
                Book Now
              </span>
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-1"
              aria-label="Dismiss announcement"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Existing contact + social bar */}
      <div className="w-full bg-background/80 border-b border-border/50 text-muted-foreground text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+2349154611827" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone size={13} /> +234 915 461 1827
            </a>
            <a href="mailto:info@tuaevents.org" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail size={13} /> info@tuaevents.org
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> Lagos, Nigeria
            </span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            {[
              { Icon: Facebook,  href: "https://facebook.com/WAGCONofficial" },
              { Icon: Twitter,   href: "https://twitter.com/WAGCONofficial" },
              { Icon: Instagram, href: "https://instagram.com/WAGCONofficial" },
              { Icon: Linkedin,  href: "https://linkedin.com/company/wagcon" },
              { Icon: Youtube,   href: "https://youtube.com/@WAGCONofficial" },
            ].map(({ Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
