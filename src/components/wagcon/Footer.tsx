import { Link } from "@tanstack/react-router";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { WagconLogo } from "./Nav";

export function Footer() {
  return (
    <footer
      className="border-t border-[rgba(255,255,255,0.08)] pt-16 pb-8"
      style={{ background: "#040508" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <WagconLogo withSub />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-wagcon-muted">
              West Africa's Premier Gaming Convention.
              <br />
              Organized by T.U.A Events.
            </p>
            <p className="mt-3 text-sm text-wagcon-white/70">
              28 – 31 April 2027 &nbsp;|&nbsp; Three Venues · Victoria Island, Lagos, Nigeria
            </p>
            <div className="mt-5 flex gap-2">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-wagcon-bg3 text-wagcon-white/70 transition-colors hover:border hover:border-wagcon-green-border hover:text-wagcon-green"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            links={[
              ["/venues", "Venues"],
              ["/agenda", "Agenda"],
              ["/speakers", "Speakers"],
              ["/tickets", "Tickets"],
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              ["/exhibit", "Exhibit & Sponsor"],
              ["/partners", "Partners"],
              ["/gallery", "Gallery"],
              ["/about", "About"],
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              ["/contact", "Contact Us"],
              ["mailto:hello@wagcon.ng", "hello@wagcon.ng"],
              ["mailto:exhibit@wagcon.ng", "exhibit@wagcon.ng"],
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[rgba(255,255,255,0.08)] pt-6 text-center md:flex-row">
          <p className="text-xs text-wagcon-muted">
            © 2026 WAGCON / T.U.A Events. All rights reserved.
          </p>
          <p className="text-xs text-wagcon-muted">
            Lagos, Nigeria · @WAGCONofficial
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<[string, string]>;
}) {
  return (
    <div>
      <h4
        className="mb-4 text-[11px] font-bold uppercase text-wagcon-green"
        style={{ letterSpacing: "0.14em", fontFamily: "var(--font-body)" }}
      >
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map(([href, label]) => {
          const isExternal = href.startsWith("mailto:") || href.startsWith("http");
          return (
            <li key={href}>
              {isExternal ? (
                <a
                  href={href}
                  className="text-sm text-wagcon-white/70 transition-colors hover:text-wagcon-green"
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={href}
                  className="text-sm text-wagcon-white/70 transition-colors hover:text-wagcon-green"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
