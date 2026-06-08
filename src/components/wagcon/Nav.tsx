import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Ticket, ArrowRight, Gamepad2 } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Agenda",   href: "/agenda" },
  { label: "Speakers", href: "/speakers" },
  { label: "Exhibit",  href: "/exhibit" },
  { label: "Tickets",  href: "https://app.eventpadi.com/wagcon" },
  { label: "Partners", href: "/partners" },
  { label: "About",    href: "/about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/60 border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/wagcon-logo.png" alt="WAGCON" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              Venues <span className="text-[10px]">▼</span>
            </button>
            <div className="absolute top-full left-0 w-80 bg-card border border-border/50 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link to="/venues" className="block px-4 py-3 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-pass-green" />
                  <span className="font-heading text-sm font-bold text-pass-green">The Arena</span>
                </div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-tight">Conference & Exhibition · Days 1 & 2 · 29–30 April · Lagos Oriental Hotel, Victoria Island</p>
              </Link>
              <Link to="/venues" className="block px-4 py-3 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-pass-blue" />
                  <span className="font-heading text-sm font-bold text-pass-blue">After Party · Fahrenheit</span>
                </div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-tight">Industry After Party · Day 3 · 1 May · Fahrenheit, Victoria Island, Lagos</p>
              </Link>
            </div>
          </div>

          {NAV_LINKS.map((link) => 
            link.href.startsWith("http") ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href as any}
                className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          <div className="flex items-center gap-3 ml-4">
            <a
              href="https://app.eventpadi.com/wagcon"
              target="_blank"
              rel="noopener noreferrer"
              className="font-button text-[10px] uppercase tracking-wider font-bold bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/85 transition-all active:scale-[0.97] flex items-center gap-1.5"
            >
              <Ticket size={12} /> Tickets
            </a>
            <Link
              to="/exhibit"
              className="font-button text-[10px] uppercase tracking-wider font-bold border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all active:scale-[0.97] flex items-center gap-1.5"
            >
              Exhibit <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2 active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-4 py-4 gap-2">
            <p className="font-button text-[10px] uppercase tracking-widest text-muted-foreground px-2 mt-2">Venues</p>
            {[
              ["The Arena",          "text-pass-green", "bg-pass-green"],
              ["After Party · Fahrenheit", "text-pass-blue",  "bg-pass-blue"],
            ].map(([name, txt, dot]) => (
              <Link key={name} to="/venues" onClick={() => setOpen(false)} className="flex items-center gap-3 px-2 py-2 bg-white/5">
                <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                <span className={`font-button text-xs uppercase ${txt}`}>{name}</span>
              </Link>
            ))}

            {NAV_LINKS.map((link) => 
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary py-2 transition-colors px-2"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href as any}
                  onClick={() => setOpen(false)}
                  className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary py-2 transition-colors px-2"
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="grid grid-cols-2 gap-3 mt-4">
              <a
                href="https://app.eventpadi.com/wagcon"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="font-button text-xs uppercase tracking-wider font-bold bg-primary text-primary-foreground px-4 py-3 flex items-center justify-center gap-1.5"
              >
                <Ticket size={14} /> Tickets
              </a>
              <Link
                to="/exhibit"
                onClick={() => setOpen(false)}
                className="font-button text-xs uppercase tracking-wider font-bold border border-primary text-primary px-4 py-3 flex items-center justify-center gap-1.5"
              >
                Exhibit <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
