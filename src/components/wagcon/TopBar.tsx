import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export function TopBar() {
  return (
    <div className="w-full bg-background/80 border-b border-border/50 text-muted-foreground text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+2349154611827" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Phone size={13} /> +234 915 461 1827
          </a>
          <a href="mailto:hello@wagcon.africa" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Mail size={13} /> hello@wagcon.africa
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
  );
}
