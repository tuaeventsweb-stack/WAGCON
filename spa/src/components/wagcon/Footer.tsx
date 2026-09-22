import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Gamepad2, Mail, MapPin, Phone, User } from "lucide-react";

const groups = [
  {
    title: "Event",
    links: [
      { label: "About WAGCON",      to: "/about" },
      { label: "Agenda",            to: "/agenda" },
      { label: "Speakers",          to: "/speakers" },
      { label: "Venues",            to: "/venues" },
    ],
  },
  {
    title: "Participate",
    links: [
      { label: "Get Your Pass",     to: "https://app.eventpadi.com/wagcon" },
      { label: "Exhibit / Sponsor", to: "https://app.eventpadi.com/wagcon/f/WAGCON" },
      { label: "Apply to Speak",    to: "/contact" },
      { label: "Partners",          to: "/partners" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact",           to: "/contact" },
      { label: "Press & Media",     to: "/contact" },
      { label: "Sponsorship Deck",  to: "https://app.eventpadi.com/wagcon/f/WAGCON" },
    ],
  },
];

const contacts = [
  { 
    name: "Jidenna Iwuno",    
    role: "Sponsorship & Exhibitions Enquiry", 
    phone: "+234 (803) 971 7998", 
    email: "jidenna@tuaevents.org",
    image: "/team/jidenna-iwuno.jpg",
  },
  { 
    name: "Queeneth Clinton", 
    role: "Speaker & Media Enquiry",         
    phone: "+234 (809) 567 8301", 
    email: "queeneth@tuaevents.org",
    image: "/team/queeneth-clinton.jpg",
  },
  { 
    name: "Jerome Miller",    
    role: "International Sales & Partnerships", 
    phone: "+1 (912) 695-5453",   
    email: "sales@tuaevents.org",
    image: "/team/jerome-miller.jpg",
  },
  { 
    name: "Gigi Ait-Messaoud", 
    role: "International Sales & Partnerships", 
    phone: "+1 (678) 907-6692",   
    email: "sales@tuaevents.org",
    image: "/team/gigi-ait-messaoud.jpg",
  },
  { 
    name: "David Ogbor",      
    role: "Media Partnerships",    
    phone: "+234 (915) 461 1827", 
    email: "info@tuaevents.org",
    image: "/team/david-ogbor.jpg",
  },
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
    <footer className="relative border-t border-white/5 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/hero_bg_uploaded.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] mb-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
              <img src="/wagcon-logo.png" alt="WAGCON" className="h-10 w-auto" />
            </Link>
            <p className="font-button text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">
              28 April – 1 May 2027
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
              West Africa Gaming Convention — four days, three venues, one industry coming
              together in Lagos to build the continent's gaming future.
            </p>
            <div className="mt-6 space-y-2 text-xs text-muted-foreground">
              <a href="mailto:info@tuaevents.org" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={13} /> info@tuaevents.org
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
                    {l.to.startsWith("http") ? (
                      <a
                        href={l.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        to={l.to as any}
                        className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-14 pt-14 border-t border-border/40">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-button text-xs uppercase tracking-[0.25em] font-bold text-primary mb-1">
                GET IN TOUCH WITH OUR TEAM
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-black text-white">
                Direct Event Representatives
              </h3>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 font-button text-xs uppercase tracking-wider font-bold text-primary hover:text-white transition-colors border-b border-primary/30 pb-0.5 hover:border-primary"
            >
              Contact Page & Inquiry Form →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {contacts.map((c) => (
              <div 
                key={c.name} 
                className="group relative border-2 border-white/10 bg-zinc-950/80 p-6 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300 flex flex-col justify-between rounded-sm"
              >
                {/* Top Avatar + Details */}
                <div className="text-center">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/40 group-hover:border-primary group-hover:scale-105 transition-all duration-300 bg-black shadow-lg">
                    <img 
                      src={c.image} 
                      alt={c.name} 
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-105 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-heading text-base md:text-lg font-black text-white group-hover:text-primary transition-colors leading-tight mb-1">
                    {c.name}
                  </h4>
                  <p className="font-button text-[11px] uppercase tracking-wider text-primary font-bold min-h-[32px] flex items-center justify-center leading-snug">
                    {c.role}
                  </p>
                </div>

                {/* Bottom Action Links */}
                <div className="space-y-2 pt-4 mt-4 border-t border-white/10 text-xs font-body">
                  <a 
                    href={`mailto:${c.email}`} 
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-white/5 hover:bg-primary hover:text-black border border-white/10 hover:border-primary transition-all rounded-xs text-white/90 font-medium group/mail"
                    title={`Email ${c.name}`}
                  >
                    <Mail size={14} className="shrink-0 text-primary group-hover/mail:text-black transition-colors" />
                    <span className="truncate">{c.email}</span>
                  </a>
                  <a 
                    href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`} 
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-white/5 hover:bg-white/15 border border-white/10 transition-all rounded-xs text-white/90 font-medium"
                    title={`Call ${c.name}`}
                  >
                    <Phone size={14} className="shrink-0 text-primary" />
                    <span className="truncate">{c.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
          <p className="font-button text-[11px] uppercase tracking-widest text-muted-foreground">
            © 2027 WAGCON · A T.U.A Events Production · To sponsor and exhibit at the event, get in touch
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
