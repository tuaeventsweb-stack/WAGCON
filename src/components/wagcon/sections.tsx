import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Ticket, MapPin, Download, FileText, BarChart3, Calendar, Quote,
  Gamepad2, Trophy, Link2, Package, Bot, Glasses, Hammer, DollarSign, Landmark,
  CreditCard, Palette, Users, Monitor, Globe, Check, X as XIcon, Mic, Building2,
  Target, Zap, Award, MessageSquare, Eye, Crown, PlayCircle, User, Phone,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
 * Shared atoms
 * ───────────────────────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-button text-xs uppercase tracking-[0.4em] text-primary font-bold mb-4">
      {children}
    </p>
  );
}

function InitialAvatar({ name, size = 56 }: { name: string; size?: number }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div
      className="flex items-center justify-center bg-primary/10 border border-primary/25 text-primary font-heading font-black"
      style={{ width: size, height: size, fontSize: size / 2.6 }}
    >
      {initials}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1. HERO with countdown
 * ───────────────────────────────────────────────────────────── */
const TARGET_DATE = new Date("2027-04-29T09:00:00+01:00");
function getTimeLeft() {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex flex-col items-center justify-center">
    <span className="font-heading text-lg sm:text-xl font-black tabular-nums text-primary-foreground leading-none">
      {String(value).padStart(2, "0")}
    </span>
    <span className="font-button text-[8px] uppercase tracking-widest text-primary-foreground/80 mt-0.5">
      {label}
    </span>
  </div>
);

export function Hero() {
  const [time, setTime] = useState(getTimeLeft);
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 wagcon-hero-grid" />
        <div className="absolute inset-0 grain opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="font-button text-xs sm:text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6">
          WEST AFRICA GAMING CONVENTION  ·  29 APRIL – 1 MAY 2027
        </p>

        <h1 className="font-heading text-4xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-foreground mb-8">
          West Africa's Gaming<br />
          Industry Levels Up<br />
          <span className="gradient-text">in Lagos.</span>
        </h1>

        <p className="font-button text-xs sm:text-sm uppercase tracking-widest text-white/40 mb-8">
          VICTORIA ISLAND, LAGOS, NIGERIA
        </p>

        <p className="font-button text-sm sm:text-base uppercase tracking-widest text-primary font-bold mb-3">
          Africa's Largest Gaming & Esports Event
        </p>

        <p className="font-button text-xs sm:text-sm uppercase tracking-widest text-white/60 mb-6">
          Conference & Exhibition  ·  After Party  ·  Co-located with{" "}
          <a href="https://www.abds.com.ng" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">ABDS 2027 - Africa Blockchain Week</a>
        </p>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-body leading-[1.8] mb-12 px-4">
          Three days. Two venues. The only gaming convention built for West Africa's
          fastest-growing digital industry. Co-located with{" "}
          <a href="https://www.abds.com.ng" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">ABDS 2027 - Africa Blockchain Week</a>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link
            to="/tickets"
            className="font-button text-sm uppercase tracking-wider font-bold bg-primary text-primary-foreground px-6 py-4 sm:px-10 sm:py-5 hover:bg-primary/85 transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2.5"
          >
            <Ticket size={18} /> Get Your Pass
          </Link>
          <Link
            to="/exhibit"
            className="font-button text-sm uppercase tracking-wider font-bold border-2 border-white/20 text-white px-10 py-5 hover:border-primary hover:text-primary transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2.5"
          >
            Exhibit at WAGCON <ArrowRight size={18} />
          </Link>
        </div>

        <div className="flex justify-center gap-4">
          <CountdownUnit value={time.days}    label="Days" />
          <CountdownUnit value={time.hours}   label="Hours" />
          <CountdownUnit value={time.minutes} label="Min" />
          <CountdownUnit value={time.seconds} label="Sec" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2. STATS BAR
 * ───────────────────────────────────────────────────────────── */
const stats = [
  { value: 2400, label: "EXPECTED DELEGATES",            suffix: "+" },
  { value: 80,   label: "WORLD-CLASS SPEAKERS",          suffix: "+" },
  { value: 120,  label: "EXHIBITING BRANDS & STUDIOS",   suffix: "+" },
  { value: 25,   label: "COUNTRIES REPRESENTED",         suffix: "+" },
  { value: 2,    label: "VENUES ACROSS LAGOS",           suffix: "" },
  { value: 3,    label: "DAYS OF PROGRAMMING",           suffix: "" },
];

function StatItem({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let s = 0; const inc = value / (2000 / 16);
    const t = setInterval(() => {
      s += inc;
      if (s >= value) { setCount(value); clearInterval(t); }
      else setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [visible, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 border-r border-border last:border-r-0">
      <span className="font-heading text-3xl md:text-5xl font-black text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="font-button text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground text-center">
        {label}
      </span>
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="w-full bg-card/30 border-y border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="py-4 px-6 border-b border-border/30">
          <p className="font-button text-xs sm:text-sm uppercase tracking-[0.3em] text-center font-bold text-white/90">
            <span className="text-primary font-black">WAGCON 2027</span> — THE OPPORTUNITY
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => <StatItem key={i} {...s} />)}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3. ABOUT
 * ───────────────────────────────────────────────────────────── */
export function About() {
  return (
    <section className="py-24 bg-background overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <Eyebrow>WHAT IS WAGCON?</Eyebrow>
            <h2 className="font-heading text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
              This is where we define<br />gaming's future in Africa.
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground font-body leading-relaxed mb-10">
              <p>
                WAGCON — West Africa Gaming Convention is Africa's flagship gaming, esports, and interactive entertainment industry event, bringing together game developers, esports organizations, publishers, gaming operators, investors, technology providers, content creators, regulators, and industry innovators to shape the future of the continent's digital entertainment ecosystem.
              </p>
              <p>
                Positioned as <span className="font-bold text-white">West Africa Gaming Week</span>, WAGCON unfolds over three days across premier venues in Lagos, Nigeria, co-located with{" "}
                <a href="https://www.abds.com.ng" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">ABDS</a>, serving as a platform for industry collaboration, investment, innovation, talent development, and market expansion. The event features conferences, exhibitions, esports tournaments, networking sessions, product showcases, and thought-leadership discussions spanning video gaming, esports, interactive entertainment, gaming technologies, and the broader gaming economy.
              </p>
              <p>
                As the region's most comprehensive gathering for the gaming industry, WAGCON uniquely bridges the worlds of interactive entertainment, competitive gaming, digital engagement, and gaming commerce—creating opportunities for businesses, investors, creators, and communities to connect, collaborate, and drive the next phase of growth across Africa's rapidly evolving digital entertainment landscape.
              </p>
            </div>

            <div className="p-6 bg-primary/5 border-l-4 border-primary mb-10">
              <p className="font-heading text-xl font-bold text-foreground mb-2 italic">
                "Africa's mobile gaming market is projected to exceed $1B by 2027. West Africa is
                leading that growth. This is where the industry meets."
              </p>
            </div>

            <Link
              to="/tickets"
              className="inline-flex items-center gap-2 font-button text-sm uppercase tracking-widest font-black bg-primary text-primary-foreground px-6 py-4 sm:px-10 sm:py-5 hover:bg-primary/85 transition-all"
            >
              <Ticket size={16} /> Get Your Pass
            </Link>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 relative group bg-card/40">
              <img
                src="/about-audience.jpg"
                alt="WAGCON delegates"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute bottom-8 left-8 z-10">
                <p className="font-heading text-3xl font-black tracking-tighter text-white">
                  Lagos, Nigeria
                </p>
                <p className="font-button text-[10px] uppercase tracking-[0.3em] text-primary font-bold mt-1">
                  Built for Africa's Gaming Industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4. VENUES (3 cards + timeline)
 * ───────────────────────────────────────────────────────────── */
const venues = [
  {
    id: "arena",
    tag: "DAYS 1 & 2 · 29–30 APRIL 2027 · 9AM – 6PM",
    brand: "THE ARENA",
    name: "Lagos Oriental Hotel — Victoria Island, Lagos",
    Icon: Gamepad2,
    description: "Two full days of conference sessions, keynotes, panels, exhibition floor, live esports tournament, indie developer showcase, gaming demo zone, and startup pitch stage. West Africa's most immersive gaming convention experience, at full scale.",
    pass: "Player & Champion — Full access · Spectator — Expo + Demo only",
    passColor: "text-pass-green",
    PassIcon: Gamepad2,
    cta: "Get Your Pass",
    href: "/tickets",
  },
  {
    id: "afterparty",
    tag: "DAY 3 · 1 MAY 2027 · 7PM – LATE",
    brand: "AFTER PARTY",
    name: "Fahrenheit — Victoria Island, Lagos",
    Icon: Mic,
    description: "Game over? Not even close. The official WAGCON × ABDS industry after party at Fahrenheit, VI closes the week the right way — curated networking, open bar, and the conversations that only happen when the convention floor has closed.",
    pass: "Player & Champion — Included · Spectator — Upgrade required",
    passColor: "text-pass-blue",
    PassIcon: Mic,
    cta: "Upgrade to Player Pass",
    href: "/tickets",
  },
] as const;

function VenueCard({ v }: { v: typeof venues[number] }) {
  return (
    <div className="group relative flex flex-col h-[600px] overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card/40">
      <div className="absolute inset-0">
        <div className="absolute inset-0 wagcon-hero-grid opacity-60" />
        <div className="absolute inset-0 wagcon-hero-glow opacity-50" />
        
      </div>

      <div className="absolute top-7 right-7 z-10">
        <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
          <v.Icon size={26} />
        </div>
      </div>

      <div className="relative z-10 mt-auto p-8">
        <p className="font-button text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-4">
          {v.tag}
        </p>
        <h3 className="font-heading text-4xl font-black text-white mb-2 tracking-tighter">
          {v.brand}
        </h3>
        <div className="flex items-center gap-2 text-white/60 mb-6">
          <MapPin size={14} />
          <span className="font-button text-[10px] uppercase tracking-wider">{v.name}</span>
        </div>
        <p className="text-base text-white/70 font-body leading-relaxed mb-8 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
          {v.description}
        </p>

        <div className="mb-8 p-4 bg-white/5 border-l-2 border-primary flex items-start gap-3">
          <v.PassIcon size={14} className={`${v.passColor} mt-0.5 shrink-0`} />
          <p className={`font-button text-[10px] uppercase tracking-widest font-bold ${v.passColor}`}>
            {v.pass}
          </p>
        </div>

        <Link
          to={v.href}
          className="inline-flex items-center gap-3 font-button text-xs uppercase tracking-widest font-black text-white hover:text-primary transition-colors group/btn"
        >
          [ {v.cta} ]
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}

export function Venues() {
  return (
    <section className="py-24 bg-background border-t border-white/5 overflow-hidden" id="venues">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <Eyebrow>THE WAGCON 2027 EXPERIENCE</Eyebrow>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tighter leading-[0.9]">
            Three Days. Two Venues.<br />
            Level Up in Every Mode.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-body leading-relaxed">
            From the continent's most immersive gaming convention and exhibition floor
            to the after party that closes the week. Co-located with{" "}
            <a href="https://www.abds.com.ng" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">ABDS 2027 - Africa Blockchain Week</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {venues.map((v) => <VenueCard key={v.id} v={v} />)}
        </div>

        {/* Timeline */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-white/10 mt-12">
          {[
            ["DAY 1 · 29 APRIL",  "THE ARENA",     "Lagos Oriental · Conference & Exhibition · 9AM–6PM",  "pass-green"],
            ["DAY 2 · 30 APRIL",  "THE ARENA",     "Lagos Oriental · Conference & Exhibition · 9AM–6PM",  "pass-green"],
            ["DAY 3 · 1 MAY",      "AFTER PARTY",   "Fahrenheit · Industry After Party · 7PM–Late",        "pass-blue"],
          ].map(([day, name, desc, color], i, arr) => (
            <div
              key={i}
              className={`p-6 border-white/10 ${i < arr.length - 1 ? "lg:border-r" : ""} ${i < arr.length - 1 ? "border-b lg:border-b-0" : ""} bg-${color}/5`}
            >
              <p className={`font-button text-[10px] text-${color} font-bold mb-1`}>{day}</p>
              <p className="font-heading text-sm font-bold text-white mb-1">{name}</p>
              <p className="text-[10px] text-white/50 uppercase tracking-tight">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5. LOOKBACK / GALLERY CTA
 * ───────────────────────────────────────────────────────────── */
export function Lookback() {
  return null;
}

/* ─────────────────────────────────────────────────────────────
 * 6. EVENT ESSENTIALS — 4 downloads
 * ───────────────────────────────────────────────────────────── */
const downloads = [
  { Icon: FileText,   title: "Sponsorship & Exhibitor Brochure", description: "Booth packages, sponsorship tiers, and visibility options across WAGCON venues.",            href: "#" },
  { Icon: Calendar,   title: "2027 Convention Agenda",            description: "Three days, two venues — every session, every stage, every tournament bracket.",            href: "/agenda" },
];

export function EventEssentials() {
  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <Eyebrow>RESOURCES</Eyebrow>
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-[0.9]">
            Event Essentials.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloads.map((item, i) => (
            <div key={i} className="bg-card border border-white/10 p-8 flex flex-col hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <item.Icon size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-white/50 font-body mb-8 flex-1 leading-relaxed">
                {item.description}
              </p>
              <a href={item.href} className="font-button text-[10px] uppercase tracking-widest font-bold text-primary hover:text-white transition-colors flex items-center gap-2">
                [ DOWNLOAD PDF ] <Download size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7. SPEAKERS
 * ───────────────────────────────────────────────────────────── */
const confirmedSpeakers = [
  { name: "Speaker TBA",  role: "To be announced",  company: "" },
  { name: "Speaker TBA",  role: "To be announced",  company: "" },
  { name: "Speaker TBA",  role: "To be announced",  company: "" },
  { name: "Speaker TBA",  role: "To be announced",  company: "" },
];

export function Speakers() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.05 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="speakers" className="py-20 md:py-28 bg-card/40 scroll-mt-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <Eyebrow>WHO TAKES THE STAGE</Eyebrow>
          <h2 className="font-heading text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tighter leading-[0.9]">
            WAGCON 2027 Speakers.
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Speakers to be announced. The founders, executives, esports leaders, and policy voices
            shaping West Africa's gaming industry — on one stage.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {confirmedSpeakers.map((s, i) => (
            <div
              key={s.name}
              className={`group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-20 translate-y-4"}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="relative w-full aspect-[3/4] bg-card/40 border border-white/10 overflow-hidden mb-3">
                <div className="absolute inset-0 wagcon-hero-grid opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <InitialAvatar name={s.name} size={96} />
                </div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-heading text-sm md:text-base font-bold text-foreground leading-tight">{s.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5 font-body">{s.role}</p>
              <p className="text-xs text-primary/80 font-body">{s.company}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/speakers"
            className="inline-flex items-center gap-2 font-button text-sm uppercase tracking-wider font-bold border-2 border-white/10 text-foreground px-10 py-5 hover:border-primary hover:text-primary transition-all"
          >
            View All Speakers <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8. CONTENT TRACKS — 14 tiles
 * ───────────────────────────────────────────────────────────── */
const tracks = [
  { Icon: Gamepad2,    title: "Mobile Gaming & Development" },
  { Icon: Trophy,      title: "Esports & Competitive Gaming" },
  { Icon: Link2,       title: "Web3 & Blockchain Gaming" },
  { Icon: Package,     title: "Game Publishing & Distribution" },
  { Icon: Bot,         title: "AI in Game Development" },
  { Icon: Glasses,     title: "AR/VR & Immersive Gaming" },
  { Icon: Hammer,      title: "Indie Game Development" },
  { Icon: DollarSign,  title: "Gaming Investment & VC" },
  { Icon: Landmark,    title: "Regulation & Gaming Policy" },
  { Icon: CreditCard,  title: "Monetization & Game Economy" },
  { Icon: Palette,     title: "Game Design & UX" },
  { Icon: Users,       title: "Community & Creator Economy" },
  { Icon: Monitor,     title: "Console & PC Gaming" },
  { Icon: Globe,       title: "African Game Studios" },
];

export function ContentTracks() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Eyebrow>PROGRAMME FOCUS</Eyebrow>
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-[0.9]">
            The 14 Content Tracks.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-white/10 border border-white/10">
          {tracks.map((t, i) => (
            <div key={i} className="bg-background p-8 flex flex-col items-center justify-center text-center group hover:bg-primary/5 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/40 group-hover:text-primary mb-4 transition-all group-hover:scale-110">
                <t.Icon size={24} />
              </div>
              <p className="font-button text-[10px] uppercase tracking-widest text-white/60 font-bold group-hover:text-white transition-colors">
                {t.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9. AUDIENCE INSIGHTS
 * ───────────────────────────────────────────────────────────── */
const insights = {
  stats: [
    { value: "62%",    label: "C-Level, Founders & Studio Heads" },
    { value: "25+",    label: "Countries Represented" },
    { value: "94%",    label: "Plan to Return or Recommend WAGCON" },
    { value: "48%",    label: "Delegates with Active Investment Mandate" },
  ],
  seniority: [
    { label: "C-Level / Studio Founders / CEOs", value: 28, color: "bg-pass-gold" },
    { label: "Heads / Directors / VPs",          value: 22, color: "bg-pass-blue" },
    { label: "Developers & Engineers",           value: 20, color: "bg-pass-green" },
    { label: "Investors & Fund Managers",        value: 12, color: "bg-purple-500" },
    { label: "Publishers & Distribution",        value: 10, color: "bg-white/40" },
    { label: "Creators, Media & Community",      value:  8, color: "bg-white/15" },
  ],
  industry: [
    { label: "Game Development Studios",      value: 18 },
    { label: "Startups & Indie Developers",   value: 16 },
    { label: "Esports Teams & Orgs",          value: 12 },
    { label: "Web3 Gaming Companies",         value: 11 },
    { label: "Game Publishers & Distribution",value: 10 },
    { label: "Tech & Hardware Innovators",    value:  9 },
    { label: "AI & Data Science in Gaming",   value:  8 },
    { label: "Gaming Investors & VCs",        value:  7 },
    { label: "Gaming Media & Creators",       value:  5 },
    { label: "Policy & Gaming Associations",  value:  4 },
  ],
  outcomes: [
    { value: "1,800+", label: "Meetings scheduled via the WAGCON networking app" },
    { value: "120+",   label: "Studio partnerships or publishing deals initiated" },
    { value: "91%",    label: "Exhibitors who rated their ROI as high or very high" },
    { value: "78%",    label: "Delegates who confirmed attendance at WAGCON 2027" },
  ],
};

export function AudienceInsights() {
  return (
    <section className="py-24 bg-background overflow-hidden" id="insights">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <Eyebrow>WHO'S IN THE ROOM</Eyebrow>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
            This is not a casual<br />player crowd.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-body leading-relaxed">
            Every delegate at WAGCON is a professional, creator, investor, or decision-maker in
            West Africa's gaming and digital entertainment industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {insights.stats.map((s, i) => (
            <div key={i} className="text-center lg:text-left">
              <p className="font-heading text-4xl md:text-6xl font-black text-primary mb-2 tracking-tighter">{s.value}</p>
              <p className="font-button text-[10px] uppercase tracking-widest text-white/40 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          <div className="bg-white/5 p-10 border border-white/10">
            <p className="font-button text-[10px] uppercase tracking-[0.3em] text-primary mb-10">WHO ATTENDS BY SENIORITY</p>
            <div className="space-y-6">
              {insights.seniority.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-button text-xs uppercase tracking-wider text-white/80">{item.label}</span>
                    <span className="font-heading text-lg font-bold text-white">{item.value}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 overflow-hidden">
                    <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: `${item.value * 3}%`, maxWidth: "100%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 p-10 border border-white/10">
            <p className="font-button text-[10px] uppercase tracking-[0.3em] text-primary mb-10">DELEGATE INDUSTRY BREAKDOWN</p>
            <div className="space-y-4">
              {insights.industry.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-sm font-bold text-white/40 w-8">{item.value}%</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-button text-[10px] uppercase tracking-wider text-white/60 group-hover:text-primary transition-colors">{item.label}</span>
                      </div>
                      <div className="w-full h-1 bg-white/5">
                        <div className="h-full bg-pass-blue group-hover:bg-primary transition-all duration-700" style={{ width: `${item.value * 4}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 10. WHO YOU WILL MEET — 5 tabs
 * ───────────────────────────────────────────────────────────── */
const personas = [
  { id: "devs",       label: "Developers",  title: "Game Developers & Studio Founders.", description: "Studios, indie developers, and technical founders actively building games for African and global audiences — mobile, esports-ready, and Web3-powered.", stats: "850+ Developers & Studio Founders" },
  { id: "publishers", label: "Publishers",  title: "Publishers & Distributors.",         description: "Game publishers, distribution leads, and app store representatives deciding which African games reach regional and global audiences.",                            stats: "240+ Publishers & Distribution Leaders" },
  { id: "investors",  label: "Investors",   title: "Investors & Gaming Funds.",          description: "VCs, angel investors, gaming-focused funds, and corporate VCs actively backing the continent's most promising gaming startups.",                                  stats: "180+ Investors & Fund Representatives" },
  { id: "esports",    label: "Esports",     title: "Esports Teams & Organizers.",        description: "Team owners, tournament organizers, esports infrastructure builders, and competitive gaming communities defining the African esports landscape.",                  stats: "320+ Esports Industry Delegates" },
  { id: "creators",   label: "Creators",    title: "Creators, Media & Community.",       description: "Gaming creators, streamers, journalists, podcast hosts, and community managers shaping public perception and driving audience growth.",                            stats: "410+ Creators, Media & Community Leaders" },
  { id: "gamers",    label: "Gamers",    title: "Gaming Enthusiasts & Aficionados.",  description: "The players, enthusiasts, and competitive gamers who make West Africa's gaming scene vibrant — from casual mobile to hardcore esports.",                                stats: "500+ Gaming Enthusiasts" },
];

export function WhoYouWillMeet() {
  const [active, setActive] = useState(personas[0].id);
  return (
    <section className="py-24 bg-card/20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Eyebrow>THE COMMUNITY</Eyebrow>
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-[0.9]">
            Who you will meet.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {personas.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`font-button text-xs uppercase tracking-widest font-bold px-8 py-4 transition-all ${
                active === p.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {personas.map((p) => (
            <div key={p.id} className={`transition-all duration-500 ${active === p.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 hidden"}`}>
              <div className="bg-card border border-white/10 p-12 text-center">
                <h3 className="font-heading text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">{p.title}</h3>
                <p className="text-lg text-white/60 font-body leading-relaxed mb-10 max-w-2xl mx-auto">{p.description}</p>
                <div className="inline-block px-8 py-3 bg-primary/10 border border-primary/20">
                  <p className="font-button text-sm uppercase tracking-widest font-bold text-primary">{p.stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11. LOGO WALL — marquee
 * ───────────────────────────────────────────────────────────── */
const studios = ["MALIYO GAMES", "KUCHO STUDIOS", "GAMR AFRICA", "CARRY1ST", "USIKU GAMES", "RAVEN STUDIOS", "PLAYBOOK GAMES", "AFRICOMICS", "STUDIO MAYANGA", "NYAMAKOP"];
const platforms = ["ESL AFRICA", "MTN GAMING", "TENCENT", "RIOT GAMES", "MICROSOFT XBOX", "PLAYSTATION", "GOOGLE PLAY", "META", "EPIC GAMES", "UNITY"];

function LogoChip({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center bg-white/95 rounded-md shadow-sm min-w-[170px] h-16 md:h-20 px-6 py-3 flex-shrink-0">
      <span className="font-heading text-sm font-black tracking-[0.08em] text-zinc-900">{label}</span>
    </div>
  );
}

export function LogoWall() {
  return (
    <section className="py-24 bg-background overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Eyebrow>PARTNER WITH WAGCON</Eyebrow>
        <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
          Want to sponsor, exhibit,<br />or speak at WAGCON 2027?
        </h2>
        <p className="text-xl text-primary font-bold font-body max-w-2xl mx-auto mb-4">
          To sponsor and exhibit at the event, get in touch.
        </p>
        <p className="text-base text-white/60 font-body max-w-2xl mx-auto mb-12">
          Put your brand in front of West Africa's top gaming decision-makers. WAGCON 2027 is powered by T.U.A Events and co-located with{" "}
          <a href="https://www.abds.com.ng" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">ABDS 2027 - Africa Blockchain Week</a>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/exhibit" className="font-button text-sm uppercase tracking-wider font-bold bg-primary text-primary-foreground px-10 py-5 hover:bg-primary/85 transition-all flex items-center justify-center gap-2.5">
            <Building2 size={18} /> Exhibit or Sponsor
          </Link>
          <Link to="/contact" className="font-button text-sm uppercase tracking-wider font-bold border-2 border-white/20 text-white px-10 py-5 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2.5">
            <Mic size={18} /> Apply to Speak
          </Link>
          <Link to="/contact" className="font-button text-sm uppercase tracking-wider font-bold border-2 border-white/20 text-white px-10 py-5 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2.5">
            <Phone size={18} /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 12. TESTIMONIALS
 * ───────────────────────────────────────────────────────────── */
const testimonials = [
  { quote: "WAGCON is the first event that took the business of gaming in West Africa seriously. We closed a publishing deal at The Guild dinner — before the convention floor even opened.", author: "Hugo Obi", company: "CEO, Maliyo Studios" },
  { quote: "I've spoken at gaming events in Berlin, San Francisco, and Tokyo. WAGCON is the only one where I left with three signed term sheets from African studios.",                       author: "Iyinoluwa Aboyeji", company: "Founding Partner, Future Africa" },
  { quote: "We exhibited at WAGCON 2026 as a way to test the market. We left with 80 qualified leads, 12 partnership conversations, and a regional distributor. ROI was off the charts.",      author: "Olamide Akinwale", company: "Founder, NextGen Esports" },
  { quote: "Lagos is the gaming capital of West Africa, and WAGCON proved it. The energy on the floor, the calibre of the delegates — this isn't aspirational. It's already here.",            author: "Adia Sowho", company: "MD, Mara Phones Gaming" },
];

export function Testimonials() {
  return null;
}

/* ─────────────────────────────────────────────────────────────
 * 13. WHY EXHIBIT
 * ───────────────────────────────────────────────────────────── */
const reasons = [
  { Icon: Target,         title: "High-Concentration Audience",            description: "Meet the people who sign the cheques. 62% of WAGCON delegates are C-level, founders, or senior decision-makers." },
  { Icon: Users,          title: "Unmatched Networking",                   description: "Use the WAGCON networking app to schedule 1-on-1 meetings with publishers, investors, and potential studio partners." },
  { Icon: Zap,            title: "Market Entry & Scale",                   description: "Launch your studio, hardware, or platform in the heart of Africa's most active gaming market — Lagos." },
  { Icon: Globe,          title: "Global Visibility",                      description: "Benefit from extensive local and international gaming media coverage focused on West Africa's gaming convention." },
  { Icon: MessageSquare,  title: "Thought Leadership",                     description: "Position your brand alongside the continent's most influential gaming voices on the main stage." },
  { Icon: Award,          title: "Ecosystem Credibility",                  description: "Join the brands the African gaming industry trusts for their West African market presence." },
];

export function WhyExhibit() {
  return (
    <section className="py-24 bg-background border-b border-white/5 overflow-hidden" id="exhibit">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-20 gap-10 text-center">
          <div className="max-w-2xl">
            <Eyebrow>GROW YOUR BRAND</Eyebrow>
            <h2 className="font-heading text-4xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.9] mb-8">
              Why exhibit at WAGCON?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/exhibit" className="font-button text-sm uppercase tracking-widest font-black bg-primary text-primary-foreground px-10 py-5 hover:bg-primary/85 transition-all shadow-[0_0_30px_rgba(34,197,94,0.25)]">
              [ DOWNLOAD BROCHURE ]
            </Link>
            <Link to="/contact" className="font-button text-sm uppercase tracking-widest font-black border-2 border-white/10 text-foreground px-10 py-5 hover:border-primary hover:text-primary transition-all">
              [ ENQUIRE NOW ]
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="p-10 bg-card border border-white/10 hover:border-primary/40 transition-all group">
              <div className="text-primary mb-6">
                <r.Icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{r.title}</h3>
              <p className="text-sm text-white/60 font-body leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 14. WHY WEST AFRICA
 * ───────────────────────────────────────────────────────────── */
const waStats = [
  { value: "40M+",    label: "Active mobile gamers in Nigeria alone." },
  { value: "$1B+",    label: "Africa's projected gaming market size by 2027." },
  { value: "Under 30", label: "Average age of Africa's mobile-native gaming population." },
];

export function WhyWestAfrica() {
  return (
    <section className="py-24 bg-card/20 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Eyebrow>WHY WEST AFRICA. WHY NOW.</Eyebrow>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              West Africa isn't just<br />playing games.<br /><span className="text-primary">It's building them.</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 font-body leading-relaxed mb-10">
              <p>
                Nigeria alone has over 40 million active mobile gamers — and that number is
                growing faster than almost any other market on earth. Africa's young, mobile-first
                population is not waiting for gaming culture to reach them. They are building it themselves.
              </p>
              <p>
                Game studios, esports teams, and gaming communities are forming across Lagos,
                Accra, and Abidjan right now. WAGCON is where that momentum gets its stage.
              </p>
            </div>
            <Link to="/tickets" className="inline-flex items-center gap-3 font-button text-xs uppercase tracking-widest font-black text-white hover:text-primary transition-colors group">
              [ JOIN THE MOVEMENT ]
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {waStats.map((s, i) => (
              <div key={i} className="p-8 bg-card border border-white/10 hover:border-primary/50 transition-all flex items-center gap-8">
                <p className="font-heading text-4xl md:text-5xl font-black text-primary tracking-tighter w-1/3">{s.value}</p>
                <p className="font-button text-[11px] uppercase tracking-widest text-white/60 w-2/3 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15. PARTNERS PREVIEW
 * ───────────────────────────────────────────────────────────── */
const partners = ["MTN", "AIRTEL", "GTBANK", "STANBIC", "ACCESS BANK", "MICROSOFT", "GOOGLE", "META", "CARRY1ST", "MALIYO", "ESL", "UNITY"];

export function PartnersPreview() {
  return null;
}

/* ─────────────────────────────────────────────────────────────
 * 16. PASS TIERS
 * ───────────────────────────────────────────────────────────── */
type Tier = {
  name: string;
  tag: string;
  price: string;
  oldPrice?: string;
  Icon: typeof Eye;
  color: "green" | "blue" | "gold";
  features: Array<[boolean, string]>;
  ideal: string;
  cta: string;
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "SPECTATOR PASS",
    tag: "Exhibition + Demo Access",
    price: "FREE",
    Icon: Eye,
    color: "green",
    features: [
      [true,  "The Arena — Exhibition Floor (Days 2 & 3)"],
      [true,  "The Arena — Gaming Demo Zone (Days 2 & 3)"],
      [true,  "WAGCON Networking App"],
      [false, "Bootcamp & Conference Sessions"],
      [false, "Esports Tournament seating"],
      [false, "After Party (1 May)"],
    ],
    ideal: "Local enthusiasts, students, and community members exploring the convention floor.",
    cta: "REGISTER FREE",
  },
  {
    name: "PLAYER PASS",
    tag: "Full Convention Access",
    price: "₦185,000",
    oldPrice: "₦240,000",
    Icon: Gamepad2,
    color: "blue",
    features: [
      [true,  "Keynotes, panels & bootcamp (Days 2 & 3)"],
      [true,  "Exhibition Floor & Demo Zone (Days 2 & 3)"],
      [true,  "Esports Tournament & Indie Showcase"],
      [true,  "After Party — Industry After Party (Day 3)"],
      [true,  "Startup Pitch Stage access"],
      [true,  "Workshop & masterclass access"],
      [true,  "Lunch & refreshments (Days 2 & 3)"],
    ],
    ideal: "Developers, founders, publishers, and creators seeking the full WAGCON experience.",
    cta: "GET PLAYER PASS",
    popular: true,
  },
  {
    name: "CHAMPION PASS",
    tag: "Full Convention + VIP Access",
    price: "₦650,000",
    Icon: Crown,
    color: "gold",
    features: [
      [true, "Everything on the Player Pass"],
      [true, "VIP Networking Dinner (Day 1)"],
      [true, "After Party — Priority VIP section"],
      [true, "VIP Speaker & Sponsor Lounge"],
      [true, "Reserved front-row seating — all sessions"],
      [true, "3 curated 1-on-1 meeting introductions"],
      [true, "Gaming Investor Lounge access"],
      [true, "Exclusive VIP networking dinner"],
      [true, "Commemorative Champion Pass gift"],
    ],
    ideal: "Studio executives, fund managers, publishers, sponsors, and senior industry leaders.",
    cta: "UNLOCK CHAMPION ACCESS",
  },
];

const colorMap = {
  green: { text: "text-pass-green", border: "border-pass-green", bg: "bg-pass-green" },
  blue:  { text: "text-pass-blue",  border: "border-pass-blue",  bg: "bg-pass-blue" },
  gold:  { text: "text-pass-gold",  border: "border-pass-gold",  bg: "bg-pass-gold" },
};

export function PassTiers() {
  return (
    <section className="py-24 bg-background border-t border-white/5" id="tickets">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Eyebrow>GET YOUR PASS</Eyebrow>
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-[0.9]">
            Choose your role at<br />WAGCON 2027.
          </h2>
          <p className="text-lg text-white/60 font-body max-w-xl mx-auto">
            Three days. Two venues. Every level of participation covered. Early bird pricing
            active — ends 28 February 2027.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((t) => {
            const c = colorMap[t.color];
            return (
              <div
                key={t.name}
                className={`relative bg-card border ${t.popular ? `border-2 ${c.border}` : "border-white/10"} p-8 flex flex-col`}
              >
                {t.popular && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 ${c.bg} text-background font-button text-[10px] uppercase tracking-widest font-black px-4 py-1.5`}>
                    MOST POPULAR
                  </div>
                )}

                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${c.text} bg-white/5 flex items-center justify-center border ${c.border}`}>
                    <t.Icon size={20} />
                  </div>
                  <div>
                    <h3 className={`font-heading text-lg font-black ${c.text} tracking-tight`}>{t.name}</h3>
                    <p className="font-button text-[10px] uppercase tracking-widest text-white/40">{t.tag}</p>
                  </div>
                </div>

                <div className="my-6 flex items-baseline gap-3">
                  {t.oldPrice && <span className="font-body text-sm text-white/30 line-through">{t.oldPrice}</span>}
                  <span className="font-heading text-4xl font-black text-white tracking-tighter">{t.price}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map(([on, label], i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      {on
                        ? <Check size={16} className={`mt-0.5 shrink-0 ${c.text}`} />
                        : <XIcon size={16} className="mt-0.5 shrink-0 text-white/20" />}
                      <span className={on ? "text-white/85" : "text-white/30 line-through"}>{label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <p className="font-button text-[10px] uppercase tracking-widest text-white/40 mb-2">IDEAL FOR</p>
                  <p className="font-body text-xs text-white/60 leading-relaxed">{t.ideal}</p>
                </div>

                <button className={`w-full font-button text-xs uppercase tracking-widest font-black ${c.bg} text-background px-6 py-4 hover:opacity-85 transition-all`}>
                  [ {t.cta} ]
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 17. FINAL CTA — Ticket banner + team contacts
 * ───────────────────────────────────────────────────────────── */
const team = [
  { name: "T.U.A Events", role: "Sponsorship & Exhibition", phone: "info@tuaevents.org" },
  { name: "T.U.A Events", role: "Speakers & Programme",     phone: "info@tuaevents.org" },
  { name: "T.U.A Events", role: "Delegates & Tickets",      phone: "info@tuaevents.org" },
];

export function FinalCTA() {
  return (
    <section className="py-24 bg-card/10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden border border-white/10 p-12 md:p-16 text-center mb-20 bg-black">
          <img
            src="/convention-hall.jpg"
            alt="WAGCON convention hall"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black" />
          <div className="relative z-10">
            <Eyebrow>DON'T MISS WAGCON 2027</Eyebrow>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
              How will you show up<br />at WAGCON 2027?
            </h2>
            <p className="text-lg text-white/70 font-body max-w-2xl mx-auto mb-10">
              Three days. Two venues. The only gaming convention built for West Africa's
              fastest-growing digital industry. The room is filling up — secure your place.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/tickets" className="font-button text-sm uppercase tracking-wider font-bold bg-primary text-primary-foreground px-10 py-5 hover:bg-primary/85 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_50px_rgba(34,197,94,0.35)]">
                <Ticket size={18} /> Get Your Pass
              </Link>
              <Link to="/exhibit" className="font-button text-sm uppercase tracking-wider font-bold border-2 border-white/20 text-white px-10 py-5 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2.5">
                Exhibit at WAGCON <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Three pillar CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { Icon: Gamepad2,  title: "Get Your Pass",    body: "The Arena for conference and exhibition, the After Party at Fahrenheit. Choose your level.",                cta: "Get Tickets",  href: "/tickets" as const },
            { Icon: Building2, title: "Exhibit or Sponsor", body: "Put your brand in front of West Africa's top gaming decision-makers across both WAGCON venues.", cta: "Exhibit Now",  href: "/exhibit" as const },
            { Icon: Mic,       title: "Apply to Speak",   body: "Share your expertise with West Africa's most engaged gaming audience. Applications open.",              cta: "Apply Now",    href: "/contact" as const },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-white/10 p-8 hover:border-primary/40 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <c.Icon size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{c.title}</h3>
              <p className="text-sm text-white/60 font-body mb-6 leading-relaxed">{c.body}</p>
              <Link to={c.href} className="font-button text-[10px] uppercase tracking-widest font-bold text-primary hover:text-white transition-colors flex items-center gap-2">
                [ {c.cta} ] <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
