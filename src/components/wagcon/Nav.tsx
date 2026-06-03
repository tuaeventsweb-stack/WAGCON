import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/venues", label: "Venues" },
  { to: "/agenda", label: "Agenda" },
  { to: "/speakers", label: "Speakers" },
  { to: "/exhibit", label: "Exhibit" },
  { to: "/tickets", label: "Tickets" },
  { to: "/partners", label: "Partners" },
  { to: "/about", label: "About" },
] as const;

export function WagconLogo({ withSub = false }: { withSub?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-md bg-wagcon-green text-wagcon-bg"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16 }}
      >
        W
      </div>
      <div className="flex flex-col leading-none">
        <span
          className="text-[18px] md:text-[20px]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
        >
          <span className="text-wagcon-green">WAG</span>
          <span className="text-wagcon-white">CON</span>{" "}
          <span className="text-wagcon-green">2027</span>
        </span>
        {withSub && (
          <span className="mt-1 text-[11px] text-wagcon-muted">
            West Africa Gaming Convention
          </span>
        )}
      </div>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] backdrop-blur-xl"
      style={{ background: "rgba(6,10,6,0.85)" }}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <WagconLogo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13.5px] font-medium text-wagcon-white/80 transition-colors hover:text-wagcon-green"
              activeProps={{ className: "text-wagcon-green" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/tickets"
            className="rounded-md bg-wagcon-green px-4 py-2 text-[12.5px] font-bold uppercase text-wagcon-bg transition-colors hover:bg-[#3DD680]"
            style={{ letterSpacing: "0.04em" }}
          >
            🎮 Get Tickets
          </Link>
          <Link
            to="/exhibit"
            className="rounded-md border border-[rgba(255,255,255,0.12)] px-4 py-2 text-[12.5px] font-bold uppercase text-wagcon-white transition-colors hover:border-wagcon-green hover:text-wagcon-green"
            style={{ letterSpacing: "0.04em" }}
          >
            Exhibit Now →
          </Link>
        </div>

        <button
          className="lg:hidden text-wagcon-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[rgba(255,255,255,0.08)] bg-wagcon-bg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-wagcon-white/80 hover:bg-wagcon-bg3 hover:text-wagcon-green"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link
                to="/tickets"
                onClick={() => setOpen(false)}
                className="rounded-md bg-wagcon-green px-4 py-3 text-center text-[12.5px] font-bold uppercase text-wagcon-bg"
                style={{ letterSpacing: "0.04em" }}
              >
                🎮 Get Tickets
              </Link>
              <Link
                to="/exhibit"
                onClick={() => setOpen(false)}
                className="rounded-md border border-[rgba(255,255,255,0.12)] px-4 py-3 text-center text-[12.5px] font-bold uppercase text-wagcon-white"
                style={{ letterSpacing: "0.04em" }}
              >
                Exhibit Now →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
