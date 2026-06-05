import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Gamepad2, Mail, MapPin, Phone, User } from "lucide-react";

const groups = [
  {
    title: "Event",
    links: [
      { label: "About WAGCON",      to: "/about" },
      { label: "Agenda",            to: "/agenda" },
      { label: "Speakers",          to: "/speakers" },
      { label: "Venues",            to: "/venues" },
      { label: "Gallery",           to: "/gallery" },
    ],
  },
  {
    title: "Participate",
    links: [
      { label: "Get Your Pass",     to: "/tickets" },
      { label: "Exhibit / Sponsor", to: "/exhibit" },
      { label: "Apply to Speak",    to: "/contact" },
      { label: "Partners",          to: "/partners" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact",           to: "/contact" },
      { label: "Press & Media",     to: "/contact" },
      { label: "Sponsorship Deck",  to: "/exhibit" },
    ],
  },
];

const contacts = [
  { name: "Tunde Adekunle", role: "Sponsorship & Exhibition", phone: "+234 901 234 5678", email: "tunde@wagcon.africa" },
  { name: "Amara Nwosu",    role: "Speakers & Programme",     phone: "+234 802 345 6789", email: "amara@wagcon.africa" },
  { name: "Kofi Mensah",    role: "Delegates & Tickets",      phone: "+234 703 456 7890", email: "kofi@wagcon.africa"  },
];

const socials = [
  { Icon: Facebook,  href: "https://facebook.com/WAGCONofficial" },
  { Icon: Twitter,   href: "https://twitter.com/WAGCONofficial" },
  { Icon: Instagram, href: "https://instagram.com/WAGCONofficial" },
  { Icon: Linkedin,  href: "https://linkedin.com/company/wagcon" },
  { Icon: Youtube,   href: "https://youtube.com/@WAGCONofficial" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] mb-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Gamepad2 size={20} strokeWidth={2.5} />
              </span>
              <span className="font-heading text-xl font-black tracking-tight text-foreground">
                WAGCON<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="font-button text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">
              28 – 31 April 2027
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
              West Africa Gaming Convention — four days, three venues, one industry coming
              together in Lagos to build the continent's gaming future.
            </p>
            <div className="mt-6 space-y-2 text-xs text-muted-foreground">
              <a href="mailto:hello@wagcon.africa" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={13} /> hello@wagcon.africa
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={13} /> Victoria Island, Lagos, Nigeria
              </p>
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="font-button text-[11px] uppercase tracking-[0.2em] font-bold text-foreground mb-5">
                {g.title}
              </h4>
              <ul className="space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12 pt-12 border-t border-border/30">
          {contacts.map((c) => (
            <div key={c.name} className="border border-border/40 p-5 bg-black">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center bg-primary/10 border border-primary/30 text-primary">
                  <User size={18} />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground leading-tight">{c.name}</p>
                  <p className="font-button text-[10px] uppercase tracking-widest text-primary mt-0.5">{c.role}</p>
                </div>
              </div>
              <div className="space-y-1.5 text-xs">
                <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={12} /> {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors break-all">
                  <Mail size={12} /> {c.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
          <p className="font-button text-[11px] uppercase tracking-widest text-muted-foreground">
            © 2027 WAGCON · A T.U.A Events Production
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
