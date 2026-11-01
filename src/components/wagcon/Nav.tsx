import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Ticket, ArrowRight, ChevronDown } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Logo - Fixed aspect ratio & shrink protection */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/wagcon-logo.png"
            alt="WAGCON"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain shrink-0"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
          <Link
            to="/"
            className="font-button text-xs xl:text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors py-2"
          >
            Home
          </Link>

          <Link
            to="/agenda"
            className="font-button text-xs xl:text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors py-2"
          >
            Agenda
          </Link>

          <Link
            to="/speakers"
            className="font-button text-xs xl:text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors py-2"
          >
            Speakers
          </Link>

          {/* Venues Dropdown */}
          <div className="relative group">
            <button className="font-button text-xs xl:text-sm uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1.5 py-2">
              Venues
              <ChevronDown
                size={14}
                className="transition-transform duration-200 group-hover:rotate-180 text-muted-foreground group-hover:text-primary"
              />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-80 bg-card/95 backdrop-blur-xl border border-border/60 shadow-2xl py-2">
                <Link
                  to="/venues"
                  className="block px-4 py-3 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-pass-green" />
                    <span className="font-heading text-sm font-bold text-pass-green">
                      Conference & Exhibition
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tight">
                    Lagos Oriental Hotel, Victoria Island · Days 2 & 3 · 29–30 April
                  </p>
                </Link>
                <Link
                  to="/venues"
                  className="block px-4 py-3 hover:bg-white/5 transition-colors border-t border-border/20"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-pass-blue" />
                    <span className="font-heading text-sm font-bold text-pass-blue">
                      After Party · Fahrenheit
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tight">
                    Industry After Party · Day 4 · 1 May · Victoria Island, Lagos
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/gallery"
            className="font-button text-xs xl:text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors py-2"
          >
            Gallery
          </Link>

          {/* About / More Dropdown */}
          <div className="relative group">
            <button className="font-button text-xs xl:text-sm uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1.5 py-2">
              About
              <ChevronDown
                size={14}
                className="transition-transform duration-200 group-hover:rotate-180 text-muted-foreground group-hover:text-primary"
              />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-72 bg-card/95 backdrop-blur-xl border border-border/60 shadow-2xl py-2">
                <Link
                  to="/about"
                  className="block px-4 py-3 hover:bg-white/5 transition-colors"
                >
                  <div className="font-heading text-sm font-bold text-foreground hover:text-primary transition-colors mb-0.5">
                    About WAGCON
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tight">
                    Mission, Pillars & ABDS Co-location
                  </p>
                </Link>
                <Link
                  to="/partners"
                  className="block px-4 py-3 hover:bg-white/5 transition-colors border-t border-border/20"
                >
                  <div className="font-heading text-sm font-bold text-foreground hover:text-primary transition-colors mb-0.5">
                    Partners & Sponsors
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tight">
                    Ecosystem Sponsors & Collaboration
                  </p>
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 hover:bg-white/5 transition-colors border-t border-border/20"
                >
                  <div className="font-heading text-sm font-bold text-foreground hover:text-primary transition-colors mb-0.5">
                    Contact Team
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tight">
                    Organizer Leads & Attendee Support
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 ml-2 xl:ml-4">
            <a
              href="https://app.eventpadi.com/wagcon"
              target="_blank"
              rel="noopener noreferrer"
              className="font-button text-[10px] xl:text-xs uppercase tracking-wider font-bold bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/85 transition-all duration-300 active:scale-[0.97] flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,197,94,0.35)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:scale-105"
            >
              <Ticket size={13} /> Tickets
            </a>
            <a
              href="https://app.eventpadi.com/wagcon/f/WAGCON"
              target="_blank"
              rel="noopener noreferrer"
              className="font-button text-[10px] xl:text-xs uppercase tracking-wider font-bold border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all active:scale-[0.97] flex items-center gap-1.5"
            >
              Exhibit <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2 active:scale-95 shrink-0"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col px-4 py-4 gap-1.5">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary py-2.5 transition-colors px-2"
            >
              Home
            </Link>
            <Link
              to="/agenda"
              onClick={() => setOpen(false)}
              className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary py-2.5 transition-colors px-2"
            >
              Agenda
            </Link>
            <Link
              to="/speakers"
              onClick={() => setOpen(false)}
              className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary py-2.5 transition-colors px-2"
            >
              Speakers
            </Link>
            <Link
              to="/gallery"
              onClick={() => setOpen(false)}
              className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary py-2.5 transition-colors px-2"
            >
              Gallery
            </Link>

            {/* Mobile Venues Section */}
            <div className="my-2 pt-2 border-t border-border/30">
              <p className="font-button text-[10px] uppercase tracking-widest text-muted-foreground px-2 mb-2">
                Venues
              </p>
              <div className="space-y-1.5">
                <Link
                  to="/venues"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 bg-white/5 border border-border/20"
                >
                  <span className="w-2 h-2 rounded-full bg-pass-green shrink-0" />
                  <div>
                    <div className="font-button text-xs uppercase text-pass-green font-bold">
                      Conference & Exhibition
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      Lagos Oriental Hotel · 29–30 April
                    </div>
                  </div>
                </Link>
                <Link
                  to="/venues"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 bg-white/5 border border-border/20"
                >
                  <span className="w-2 h-2 rounded-full bg-pass-blue shrink-0" />
                  <div>
                    <div className="font-button text-xs uppercase text-pass-blue font-bold">
                      After Party · Fahrenheit
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      Victoria Island, Lagos · 1 May
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile About Section */}
            <div className="my-2 pt-2 border-t border-border/30">
              <p className="font-button text-[10px] uppercase tracking-widest text-muted-foreground px-2 mb-2">
                Information & Support
              </p>
              <div className="flex flex-col gap-1">
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary py-2 transition-colors px-2"
                >
                  About WAGCON
                </Link>
                <Link
                  to="/partners"
                  onClick={() => setOpen(false)}
                  className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary py-2 transition-colors px-2"
                >
                  Partners & Sponsors
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="font-button text-sm uppercase tracking-wider text-muted-foreground hover:text-primary py-2 transition-colors px-2"
                >
                  Contact Team
                </Link>
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-border/30">
              <a
                href="https://app.eventpadi.com/wagcon"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="font-button text-xs uppercase tracking-wider font-bold bg-primary text-primary-foreground px-4 py-3 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(34,197,94,0.35)]"
              >
                <Ticket size={14} /> Tickets
              </a>
              <a
                href="https://app.eventpadi.com/wagcon/f/WAGCON"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="font-button text-xs uppercase tracking-wider font-bold border border-primary text-primary px-4 py-3 flex items-center justify-center gap-1.5"
              >
                Exhibit <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
