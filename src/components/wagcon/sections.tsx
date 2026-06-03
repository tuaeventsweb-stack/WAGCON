import { useEffect, useState } from "react";
import {
  Gamepad2,
  Trophy,
  Link2,
  Package,
  Bot,
  Glasses,
  Hammer,
  DollarSign,
  Landmark,
  CreditCard,
  Palette,
  Users,
  Monitor,
  Globe,
  FileText,
  User,
  Calendar,
  BarChart3,
  Download,
  ArrowRight,
  Check,
  X as XIcon,
  Quote,
  Building2,
  Mic,
} from "lucide-react";
import {
  Accent,
  BtnPrimary,
  BtnSecondary,
  Card,
  Counter,
  Eyebrow,
  IconBox,
  InitialAvatar,
  PassPill,
  Section,
  SectionTitle,
} from "./ui/primitives";

/* ─────────────────────────────────────────────────────────────
 * 1. HERO
 * ───────────────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-wagcon-bg">
      {/* Grid overlay */}
      <div className="wagcon-hero-grid absolute inset-0" />
      {/* Radial glow */}
      <div className="wagcon-hero-glow absolute inset-0" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,10,6,0.4) 0%, transparent 30%, transparent 70%, rgba(6,10,6,0.95) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-24 text-center md:px-10">
        <p
          className="mb-6 text-[12px] font-bold uppercase text-wagcon-green"
          style={{ letterSpacing: "0.18em", fontFamily: "var(--font-body)" }}
        >
          LAGOS, NIGERIA &nbsp;·&nbsp; 28 – 31 APRIL 2027
        </p>

        <h1
          className="text-[clamp(36px,8vw,72px)] leading-[1.05] text-wagcon-white"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
          }}
        >
          West Africa's Gaming
          <br />
          Industry <Accent>Levels Up</Accent>
          <br />
          in Lagos.
        </h1>

        <p className="mt-6 text-base text-wagcon-muted md:text-lg">
          The Guild &nbsp;·&nbsp; The Arena &nbsp;·&nbsp; The Respawn
        </p>

        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-wagcon-white/80">
          Four days. Three venues. The only gaming convention built for West Africa's
          fastest-growing digital industry.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BtnPrimary href="/tickets">🎮 Get Your Pass</BtnPrimary>
          <BtnSecondary href="/exhibit">Exhibit at WAGCON →</BtnSecondary>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <a href="/tickets">
            <PassPill icon="👁️" label="Spectator Pass" color="grey" />
          </a>
          <a href="/tickets">
            <PassPill icon="🎮" label="Player Pass" color="green" />
          </a>
          <a href="/tickets">
            <PassPill icon="👑" label="Champion Pass" color="amber" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-wagcon-muted">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-wagcon-green-border p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-wagcon-green" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2. STATS BAR
 * ───────────────────────────────────────────────────────────── */
const stats: Array<{ value: number; suffix?: string; label: string }> = [
  { value: 2400, suffix: "+", label: "Players, Developers & Industry Leaders" },
  { value: 80, suffix: "+", label: "Speakers & Industry Voices" },
  { value: 120, suffix: "+", label: "Exhibiting Brands & Studios" },
  { value: 25, suffix: "+", label: "Countries Represented" },
  { value: 3, label: "Venues Across Lagos" },
  { value: 4, label: "Days of Programming" },
];

export function StatsBar() {
  return (
    <section className="border-y border-[rgba(255,255,255,0.08)] bg-wagcon-bg2">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <p
          className="mb-8 text-center text-[11px] font-bold uppercase text-wagcon-muted"
          style={{ letterSpacing: "0.18em" }}
        >
          WAGCON 2026 — BY THE NUMBERS
        </p>
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`px-2 text-center ${
                i > 0
                  ? "lg:border-l border-[rgba(255,255,255,0.06)]"
                  : ""
              }`}
            >
              <div className="text-[clamp(28px,4vw,42px)]">
                <Counter to={s.value} suffix={s.suffix ?? ""} />
              </div>
              <div
                className="mt-2 text-[10.5px] font-bold uppercase text-wagcon-muted"
                style={{ letterSpacing: "0.10em" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3. ABOUT / IDENTITY
 * ───────────────────────────────────────────────────────────── */
export function About() {
  return (
    <Section bg="bg">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>WHAT IS WAGCON?</Eyebrow>
          <SectionTitle className="mt-4">
            West Africa's gaming<br />
            industry finally has<br />
            its own <Accent>stage</Accent>.
          </SectionTitle>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-wagcon-white/80">
            <p>
              WAGCON — West Africa Gaming Convention — is the annual gathering where
              Africa's game developers, esports teams, publishers, investors, and gaming
              innovators converge in Lagos to build the continent's digital entertainment future.
            </p>
            <p>
              Four days. Three landmark venues. The only event on the continent that takes the
              business of gaming as seriously as the games themselves.
            </p>
          </div>
          <div className="mt-6 rounded-lg border border-wagcon-green-border bg-wagcon-green-dim p-5 text-sm leading-relaxed text-wagcon-white">
            Africa's mobile gaming market is projected to exceed{" "}
            <span className="text-wagcon-green font-semibold">$1 billion</span> by 2027.
            West Africa is leading that growth. This is where the industry meets.
          </div>
          <div className="mt-7">
            <BtnPrimary href="/tickets">Get Your Pass</BtnPrimary>
          </div>
        </div>

        {/* Placeholder visual */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3">
          <div className="absolute inset-0 wagcon-hero-grid opacity-60" />
          <div className="absolute inset-0 wagcon-hero-glow" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <Gamepad2 className="text-wagcon-green" size={64} />
            <p
              className="text-3xl text-wagcon-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              LAGOS · 2027
            </p>
            <p className="text-xs text-wagcon-muted" style={{ letterSpacing: "0.14em" }}>
              GAMING · BUILT IN AFRICA
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4. THREE VENUES
 * ───────────────────────────────────────────────────────────── */
type Venue = {
  brand: string;
  day: string;
  attribution: string;
  description: string;
  pass: string;
  cta: string;
  color: "amber" | "green" | "purple";
  icon: typeof Trophy;
};

const venues: Venue[] = [
  {
    brand: "THE GUILD",
    day: "DAY 1  ·  28 APRIL 2027  ·  EVENING",
    attribution: "Four Points by Sheraton — Victoria Island, Lagos",
    description:
      "You don't join a guild. You earn your invitation.\n\nThe Gaming Leaders Networking Dinner opens WAGCON 2027 — an exclusive private evening for West Africa's most senior game studio founders, esports executives, publishers, and gaming investors. The industry's most important conversations start here, the night before the convention floor opens.",
    pass: "👑 Champion Pass — Invitation Required",
    cta: "Request Invitation",
    color: "amber",
    icon: Trophy,
  },
  {
    brand: "THE ARENA",
    day: "DAYS 2 & 3  ·  29–30 APRIL 2027  ·  9AM – 6PM",
    attribution: "Lagos Oriental Hotel — Victoria Island, Lagos",
    description:
      "This is where the game is played.\n\nTwo full days of bootcamp sessions, keynote addresses, panel discussions, exhibition floor, live esports tournament, indie developer showcase, gaming demo zone, and startup pitch stage. The main event — West Africa's most immersive gaming convention experience, at full scale.",
    pass: "🎮 Player & 👑 Champion — Full access  ·  👁️ Spectator — Expo + Demo only",
    cta: "Get Your Pass",
    color: "green",
    icon: Gamepad2,
  },
  {
    brand: "THE RESPAWN",
    day: "DAY 4  ·  31 APRIL 2027  ·  7PM – LATE",
    attribution: "Fahrenheit — Victoria Island, Lagos",
    description:
      "Game over? Not even close.\n\nIn gaming, a respawn is not an ending — it's a second chance with everything you've learned. WAGCON's official industry after party at Fahrenheit, VI closes the week the right way — curated networking, open bar, and the conversations that only happen when the convention floor has closed.",
    pass: "🎮 Player & 👑 Champion — Included  ·  👁️ Spectator — Upgrade required",
    cta: "Upgrade to Player Pass",
    color: "purple",
    icon: Mic,
  },
];

export function Venues() {
  return (
    <section className="bg-wagcon-bg pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:px-10 md:pt-28">
        <div className="text-center">
          <Eyebrow>THE WAGCON 2027 EXPERIENCE</Eyebrow>
          <SectionTitle className="mt-4">
            Four Days. Three Venues.<br />
            Level Up in Every <Accent>Mode</Accent>.
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-wagcon-muted">
            From an exclusive dinner for West Africa's gaming industry leaders to the continent's
            most immersive gaming convention floor — and the after party that closes the week.
          </p>
        </div>
      </div>

      {/* Full-bleed venue cards */}
      <div className="grid gap-0.5 md:grid-cols-3">
        {venues.map((v) => (
          <VenueCard key={v.brand} venue={v} />
        ))}
      </div>

      {/* Timeline strip */}
      <div className="mx-auto mt-8 max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3 md:grid-cols-4">
          {[
            ["DAY 1 · 28 APRIL", "The Guild", "Four Points by Sheraton · Gaming Leaders Dinner · Evening · Champion Pass Only", "amber"],
            ["DAY 2 · 29 APRIL", "The Arena", "Lagos Oriental Hotel · Bootcamp + Conference + Expo + Esports Day 1 · 9AM–6PM · All Passes", "green"],
            ["DAY 3 · 30 APRIL", "The Arena", "Lagos Oriental Hotel · Conference + Esports Finals + Indie Showcase + Expo · 9AM–6PM · All Passes", "green"],
            ["DAY 4 · 31 APRIL", "The Respawn", "Fahrenheit VI · Industry After Party · 7PM–Late · Player + Champion Only", "purple"],
          ].map(([day, name, desc, color], i, arr) => (
            <div
              key={i}
              className={`p-5 ${i < arr.length - 1 ? "md:border-r border-b md:border-b-0 border-[rgba(255,255,255,0.06)]" : ""}`}
            >
              <div
                className={`text-[10.5px] font-bold uppercase ${
                  color === "amber"
                    ? "text-wagcon-amber"
                    : color === "green"
                    ? "text-wagcon-green"
                    : "text-wagcon-purple"
                }`}
                style={{ letterSpacing: "0.14em" }}
              >
                {day as string}
              </div>
              <div
                className="mt-1 text-lg text-wagcon-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
              >
                {name as string}
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-wagcon-muted">{desc as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VenueCard({ venue }: { venue: Venue }) {
  const colorClass =
    venue.color === "amber"
      ? "from-wagcon-amber-dim"
      : venue.color === "green"
      ? "from-wagcon-green-dim"
      : "from-wagcon-purple-dim";
  const accentText =
    venue.color === "amber"
      ? "text-wagcon-amber"
      : venue.color === "green"
      ? "text-wagcon-green"
      : "text-wagcon-purple";
  const Icon = venue.icon;
  return (
    <article
      className={`group relative flex min-h-[560px] flex-col justify-end overflow-hidden bg-gradient-to-b ${colorClass} to-wagcon-bg3 p-7 transition-transform duration-300 hover:scale-[1.01]`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 wagcon-hero-grid opacity-30" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent to-wagcon-bg/30" />

      {/* Top-right icon */}
      <div className="absolute right-6 top-6 z-10">
        <IconBox color={venue.color} size={56}>
          <Icon size={26} />
        </IconBox>
      </div>

      <div className="relative z-10">
        <div
          className={`text-[10.5px] font-bold uppercase ${accentText}`}
          style={{ letterSpacing: "0.14em" }}
        >
          {venue.day}
        </div>
        <h3
          className="mt-3 text-[clamp(32px,4vw,44px)] text-wagcon-white"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          {venue.brand}
        </h3>
        <p className="mt-1 text-xs text-wagcon-muted">{venue.attribution}</p>
        <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-wagcon-white/85">
          {venue.description}
        </p>
        <div className="mt-5 inline-block rounded-md border border-[rgba(255,255,255,0.08)] bg-wagcon-bg/60 px-3 py-2 text-[11px] text-wagcon-white/80">
          {venue.pass}
        </div>
        <div className="mt-5">
          <BtnSecondary href="/tickets">{venue.cta}</BtnSecondary>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5. LOOKBACK VIDEO / GALLERY CTA
 * ───────────────────────────────────────────────────────────── */
export function Lookback() {
  return (
    <Section bg="bg2">
      <div className="mb-10 text-center">
        <Eyebrow>WAGCON 2026 — HIGHLIGHTS</Eyebrow>
        <SectionTitle className="mt-4">
          See what happened when<br />
          West Africa's gaming<br />
          industry came to <Accent>play</Accent>.
        </SectionTitle>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Video placeholder */}
        <div className="relative aspect-video overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3">
          <div className="absolute inset-0 wagcon-hero-glow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-wagcon-green bg-wagcon-green-dim">
              <div className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-wagcon-green" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-xs text-wagcon-muted">
            WAGCON 2026 · Lagos · 2,400+ Attendees · 80+ Speakers · 120+ Exhibiting Brands
          </div>
        </div>

        {/* Gallery grid */}
        <div className="flex flex-col">
          <div className="grid flex-1 grid-cols-2 gap-3">
            {[Trophy, Users, Mic, Gamepad2].map((Icon, i) => (
              <div
                key={i}
                className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3"
              >
                <div className="absolute inset-0 wagcon-hero-grid opacity-50" />
                <Icon className="relative text-wagcon-green/60" size={42} />
              </div>
            ))}
          </div>
          <div className="mt-5">
            <BtnPrimary href="/gallery">View Full Event Gallery →</BtnPrimary>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 6. EVENT ESSENTIALS — 4 DOWNLOAD CARDS
 * ───────────────────────────────────────────────────────────── */
const essentials = [
  {
    icon: FileText,
    title: "Sponsorship & Exhibitor Brochure",
    desc: "Booth packages, sponsorship tiers, pricing, and visibility options across all three venues.",
  },
  {
    icon: User,
    title: "Sample Delegate Profile",
    desc: "A look at who fills this room — studios, publishers, developers, investors, and creators.",
  },
  {
    icon: Calendar,
    title: "2027 Convention Agenda",
    desc: "Four days across three venues — every session, every stage, every tournament bracket.",
  },
  {
    icon: BarChart3,
    title: "WAGCON 2026 Post-Event Report",
    desc: "The numbers, the highlights, and what the room said after. Proof from the 2026 edition.",
  },
];

export function EventEssentials() {
  return (
    <Section bg="bg">
      <div className="mb-12 text-center">
        <Eyebrow>EVENT ESSENTIALS</Eyebrow>
        <SectionTitle className="mt-4">
          Everything you need<br />
          before you <Accent>load in</Accent>.
        </SectionTitle>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {essentials.map((e) => (
          <Card key={e.title}>
            <IconBox>
              <e.icon size={20} />
            </IconBox>
            <h3
              className="mt-4 text-lg text-wagcon-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {e.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-wagcon-muted">{e.desc}</p>
            <button className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-wagcon-green hover:underline" style={{ letterSpacing: "0.10em" }}>
              <Download size={13} /> Download
            </button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7. SPEAKERS
 * ───────────────────────────────────────────────────────────── */
const seriesSpeakers = [
  "Olumide Adeyemi", "Aisha Bello", "Tunde Okafor", "Chinaza Eze", "Kwame Asante",
  "Yetunde Bakare", "Femi Adesina", "Ngozi Okonjo", "Samuel Owusu", "Halima Yusuf",
  "Emeka Iheanacho", "Fatima Sanusi",
];

const confirmedSpeakers = [
  { name: "Olamide Akinwale", role: "Founder · Maliyo Games", topic: "Mobile Gaming" },
  { name: "Hugo Obi", role: "CEO · Maliyo Studios", topic: "Game Publishing" },
  { name: "Adia Sowho", role: "MD · Mara Phones Gaming", topic: "Hardware" },
  { name: "Iyinoluwa Aboyeji", role: "Founding Partner · Future Africa", topic: "Investment" },
  { name: "Ada Nduka Oyom", role: "Founder · She Code Africa", topic: "Community" },
  { name: "Chika Stacy Orie", role: "Esports Lead · ESL Africa", topic: "Esports" },
  { name: "Bayo Adekanmbi", role: "CEO · Data Science Nigeria", topic: "AI in Games" },
  { name: "Funke Opeke", role: "Founder · MainOne", topic: "Infrastructure" },
];

export function Speakers() {
  return (
    <Section bg="bg2">
      <div className="mb-10 text-center">
        <Eyebrow>WHO TAKES THE STAGE</Eyebrow>
        <SectionTitle className="mt-4">
          The voices shaping<br />
          West Africa's <Accent>gaming future</Accent>.
        </SectionTitle>
      </div>

      {/* Series speakers ticker */}
      <div className="mb-12">
        <p
          className="mb-4 text-[11px] font-bold uppercase text-wagcon-muted"
          style={{ letterSpacing: "0.14em" }}
        >
          SERIES SPEAKERS — Past Editions
        </p>
        <div className="wagcon-ticker-pause overflow-hidden">
          <div className="wagcon-ticker-left flex w-max gap-3">
            {[...seriesSpeakers, ...seriesSpeakers].map((name, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3 px-4 py-3"
              >
                <InitialAvatar name={name} size={36} />
                <span className="text-sm text-wagcon-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2027 confirmed grid */}
      <div>
        <p
          className="mb-5 text-[11px] font-bold uppercase text-wagcon-green"
          style={{ letterSpacing: "0.14em" }}
        >
          WAGCON 2027 — CONFIRMED SPEAKERS
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {confirmedSpeakers.map((s) => (
            <Card key={s.name} className="text-center" hoverable>
              <div className="flex justify-center">
                <InitialAvatar name={s.name} size={64} />
              </div>
              <div
                className="mt-4 text-sm text-wagcon-white"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
              >
                {s.name}
              </div>
              <div className="mt-1 text-[11.5px] text-wagcon-muted">{s.role}</div>
              <div className="mt-3 inline-block rounded-full bg-wagcon-green-dim px-2.5 py-1 text-[10px] font-bold uppercase text-wagcon-green" style={{ letterSpacing: "0.06em" }}>
                {s.topic}
              </div>
            </Card>
          ))}

          {/* "More speakers" final card */}
          <Card className="flex flex-col items-center justify-center text-center">
            <div
              className="text-base text-wagcon-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              More Speakers<br />Being Announced.
            </div>
            <p className="mt-3 text-[11.5px] text-wagcon-muted">
              Follow <span className="text-wagcon-green">@WAGCONofficial</span> for updates.
            </p>
          </Card>
        </div>
        <div className="mt-10 text-center">
          <BtnSecondary href="/speakers">View All Speakers</BtnSecondary>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8. CONTENT TRACKS — 14 tiles
 * ───────────────────────────────────────────────────────────── */
const tracks: Array<[typeof Gamepad2, string]> = [
  [Gamepad2, "Mobile Gaming & Development"],
  [Trophy, "Esports & Competitive Gaming"],
  [Link2, "Web3 & Blockchain Gaming"],
  [Package, "Game Publishing & Distribution"],
  [Bot, "AI in Game Development"],
  [Glasses, "AR/VR & Immersive Gaming"],
  [Hammer, "Indie Game Development"],
  [DollarSign, "Gaming Investment & VC"],
  [Landmark, "Regulation & Gaming Policy"],
  [CreditCard, "Monetization & Game Economy"],
  [Palette, "Game Design & Player Experience"],
  [Users, "Community & Creator Economy"],
  [Monitor, "Console & PC Gaming"],
  [Globe, "African Game Studios"],
];

export function ContentTracks() {
  return (
    <Section bg="bg">
      <div className="mb-12 text-center">
        <Eyebrow>CONTENT TRACKS</Eyebrow>
        <SectionTitle className="mt-4">
          Every corner of West Africa's<br />
          gaming ecosystem — on <Accent>one stage</Accent>.
        </SectionTitle>
      </div>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-7">
        {tracks.map(([Icon, label]) => (
          <div
            key={label}
            className="group rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3 p-4 text-center transition-all hover:border-wagcon-green-border hover:bg-wagcon-green-dim"
          >
            <Icon
              size={24}
              className="mx-auto mb-2.5 text-wagcon-white/80 transition-colors group-hover:text-wagcon-green"
            />
            <div
              className="text-[11.5px] leading-tight text-wagcon-muted transition-colors group-hover:text-wagcon-green"
              style={{ fontWeight: 600 }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9. AUDIENCE INSIGHTS
 * ───────────────────────────────────────────────────────────── */
export function AudienceInsights() {
  const topRow = [
    { v: "62%", l: "C-Level, Founders & Studio Heads" },
    { v: "2,400+", l: "Registered Delegates (2026 Edition)" },
    { v: "25+", l: "Countries Represented" },
    { v: "94%", l: "Plan to Return or Recommend WAGCON" },
    { v: "48%", l: "Delegates with Active Investment Mandate" },
  ];

  const jobLevels = [
    ["28%", "C-Level / Studio Founders / CEOs", "The decision-makers. They greenlight projects and sign deals."],
    ["22%", "Heads / Directors / VPs", "The influencers. They manage teams and recommend decisions."],
    ["20%", "Developers & Engineers", "The builders. They are evaluating tools, engines, and platforms."],
    ["12%", "Investors & Fund Managers", "The capital. They back the next generation of African games."],
    ["10%", "Publishers & Distribution Leads", "The gatekeepers. They decide what games reach audiences."],
    ["8%", "Creators, Media & Community", "The amplifiers. They shape community and public perception."],
  ];

  const sectors = [
    ["18%", "Game Development Studios"],
    ["16%", "Startups & Indie Developers"],
    ["12%", "Esports Teams & Organizations"],
    ["11%", "Metaverse & Web3 Gaming Companies"],
    ["10%", "Game Publishers & Distributors"],
    ["9%", "Tech & Hardware Innovators"],
    ["8%", "AI & Data Science in Gaming"],
    ["7%", "Gaming Investors & VCs"],
    ["5%", "Gaming Media & Content Creators"],
    ["4%", "Policy, Regulation & Gaming Associations"],
  ];

  const sizes = [
    ["44%", "Startups & Indies (1–50)"],
    ["32%", "Mid-size Studios (51–500)"],
    ["18%", "Large Studios & Publishers (500–5,000)"],
    ["6%", "Enterprise & Conglomerates (5,000+)"],
  ];

  const geo = [
    ["54%", "West Africa (Nigeria, Ghana, Côte d'Ivoire, Senegal)"],
    ["18%", "East Africa (Kenya, Ethiopia, Tanzania)"],
    ["12%", "Southern Africa (South Africa, Zimbabwe)"],
    ["8%", "Europe (UK, France, Germany)"],
    ["5%", "Middle East & Asia (UAE, India, Singapore)"],
    ["3%", "North America (USA, Canada)"],
  ];

  const outcomes = [
    ["1,800+", "Meetings scheduled via the WAGCON networking app"],
    ["120+", "Studio partnerships or publishing deals initiated"],
    ["91%", "Exhibitors who rated their ROI as 'high' or 'very high'"],
    ["78%", "Delegates who confirmed attendance at WAGCON 2027"],
  ];

  return (
    <Section bg="bg2">
      <div className="mb-10 text-center">
        <Eyebrow>WHO'S IN THE ROOM</Eyebrow>
        <SectionTitle className="mt-4">
          This is not a casual<br />
          <Accent>player crowd</Accent>.
        </SectionTitle>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-wagcon-muted">
          Every delegate at WAGCON is a professional, creator, investor, or decision-maker in
          West Africa's gaming and digital entertainment industry. Here's exactly who you'll meet.
        </p>
      </div>

      {/* Top callout stats */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5 mb-14">
        {topRow.map((s) => (
          <div
            key={s.l}
            className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3 p-5 text-center"
          >
            <div
              className="text-3xl text-wagcon-green"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              {s.v}
            </div>
            <div className="mt-2 text-[11px] text-wagcon-muted">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Job levels */}
        <SubSection title="By Job Level" subtitle="Who attends by seniority">
          <div className="space-y-3">
            {jobLevels.map(([p, role, desc]) => (
              <div key={role} className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3 p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <div
                    className="text-xl text-wagcon-green"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {p}
                  </div>
                  <div className="flex-1 text-right text-sm text-wagcon-white" style={{ fontWeight: 600 }}>
                    {role}
                  </div>
                </div>
                <p className="mt-1.5 text-xs text-wagcon-muted">{desc}</p>
              </div>
            ))}
          </div>
        </SubSection>

        {/* Sectors */}
        <SubSection title="By Sector" subtitle="Delegate industry breakdown">
          <div className="space-y-2.5">
            {sectors.map(([p, label]) => {
              const pct = parseInt(p);
              return (
                <div key={label}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-wagcon-white">{label}</span>
                    <span className="text-wagcon-green font-bold">{p}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-wagcon-bg3">
                    <div
                      className="h-full bg-wagcon-green"
                      style={{ width: `${pct * 4}%`, maxWidth: "100%" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </SubSection>

        {/* Sizes */}
        <SubSection title="By Company Size" subtitle="Delegate organization size">
          <div className="grid grid-cols-2 gap-3">
            {sizes.map(([p, label]) => (
              <div key={label} className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3 p-4">
                <div className="text-2xl text-wagcon-green" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
                  {p}
                </div>
                <div className="mt-1 text-[11px] text-wagcon-muted">{label}</div>
              </div>
            ))}
          </div>
        </SubSection>

        {/* Geography */}
        <SubSection title="By Geography" subtitle="Where delegates travel from">
          <div className="space-y-2">
            {geo.map(([p, label]) => (
              <div key={label} className="flex items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3 p-3">
                <div className="w-12 text-base text-wagcon-green" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
                  {p}
                </div>
                <div className="text-xs text-wagcon-white/80">{label}</div>
              </div>
            ))}
          </div>
        </SubSection>
      </div>

      {/* Past outcomes */}
      <div className="mt-12">
        <SubSection title="Past Outcomes" subtitle="What came out of WAGCON 2026">
          <div className="grid gap-3 md:grid-cols-4">
            {outcomes.map(([v, l]) => (
              <div key={l} className="rounded-xl border border-wagcon-green-border bg-wagcon-green-dim p-5">
                <div className="text-2xl text-wagcon-green" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
                  {v}
                </div>
                <div className="mt-2 text-xs text-wagcon-white/80">{l}</div>
              </div>
            ))}
          </div>
        </SubSection>
      </div>

      <div className="mt-12 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3 p-8 text-center">
        <p className="text-base text-wagcon-white">
          Want the full audience breakdown?<br />
          <span className="text-wagcon-muted">
            Download the WAGCON 2026 Post-Event Report.
          </span>
        </p>
        <div className="mt-5">
          <BtnPrimary>Download Post-Event Report</BtnPrimary>
        </div>
      </div>
    </Section>
  );
}

function SubSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        className="text-lg text-wagcon-white"
        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
      >
        {title}
      </h3>
      <p className="mt-1 mb-5 text-xs text-wagcon-muted" style={{ letterSpacing: "0.10em", textTransform: "uppercase" }}>
        {subtitle}
      </p>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 10. WHO YOU WILL MEET — 5 tabs
 * ───────────────────────────────────────────────────────────── */
const personas = [
  {
    title: "Game Developers & Studio Founders",
    body: "The makers. Game development studios, indie developers, and technical founders actively building games for African and global audiences — from mobile titles to esports-ready competitive games and Web3-powered play-to-earn experiences.",
    titles: "Studio Founders · Lead Game Designers · Technical Directors · Senior Game Engineers · Indie Developers · Creative Directors",
    count: "850+ Developers & Studio Founders",
  },
  {
    title: "Publishers & Distributors",
    body: "The gatekeepers of scale. Game publishers, distribution platform leads, and app store representatives who decide which African games reach regional and global audiences. Meeting them at WAGCON is the fastest path to distribution.",
    titles: "Publishing Directors · Platform Leads · Licensing Managers · Head of Acquisitions · Distribution Executives · Regional Heads",
    count: "240+ Publishers & Distribution Leaders",
  },
  {
    title: "Investors & Gaming Funds",
    body: "The capital behind the next wave of African game studios. Venture capitalists, angel investors, gaming-focused funds, and corporate VCs actively seeking to back the continent's most promising gaming startups and studios.",
    titles: "General Partners · Fund Managers · Investment Analysts · Gaming Investors · Corporate Venture Leads · Angel Investors",
    count: "180+ Investors & Fund Representatives",
  },
  {
    title: "Esports Teams & Organizers",
    body: "The competitors and the architects of Africa's esports ecosystem. Esports team owners, tournament organizers, esports infrastructure builders, and competitive gaming communities defining the continent's competitive gaming landscape.",
    titles: "Esports Directors · Team Managers · Tournament Organizers · Esports Coaches · Competitive Gaming Leads · Community Managers",
    count: "320+ Esports Industry Delegates",
  },
  {
    title: "Creators, Media & Community",
    body: "The amplifiers. Gaming content creators, streamers, gaming journalists, YouTube/TikTok gaming channels, podcast hosts, and community managers who shape public perception and drive audience growth for Africa's gaming brands.",
    titles: "Gaming Creators · Streamers · Gaming Journalists · Community Managers · Gaming Podcast Hosts · Esports Commentators",
    count: "410+ Creators, Media & Community Leaders",
  },
];

export function WhoYouWillMeet() {
  const [active, setActive] = useState(0);
  const p = personas[active];
  return (
    <Section bg="bg">
      <div className="mb-10 text-center">
        <Eyebrow>WHO YOU WILL MEET</Eyebrow>
        <SectionTitle className="mt-4">
          Every person in that room<br />
          is someone your studio<br />
          <Accent>needs to know</Accent>.
        </SectionTitle>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {personas.map((per, i) => (
          <button
            key={per.title}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase transition-colors ${
              active === i
                ? "bg-wagcon-green text-wagcon-bg"
                : "border border-[rgba(255,255,255,0.10)] text-wagcon-white/70 hover:border-wagcon-green hover:text-wagcon-green"
            }`}
            style={{ letterSpacing: "0.06em" }}
          >
            {per.title}
          </button>
        ))}
      </div>

      <Card className="mx-auto max-w-3xl text-center" hoverable={false}>
        <h3 className="text-2xl text-wagcon-white" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
          {p.title}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-wagcon-white/85">{p.body}</p>
        <p className="mt-5 text-xs text-wagcon-muted">{p.titles}</p>
        <div className="mt-6 inline-block rounded-full bg-wagcon-green-dim border border-wagcon-green-border px-4 py-1.5 text-[11px] font-bold uppercase text-wagcon-green" style={{ letterSpacing: "0.06em" }}>
          {p.count}
        </div>
      </Card>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11. PAST COMPANIES / LOGO WALL
 * ───────────────────────────────────────────────────────────── */
const logos1 = [
  "MALIYO GAMES", "KUCHO STUDIOS", "GAMR AFRICA", "CARRY1ST", "USIKU GAMES",
  "RAVEN STUDIOS", "PLAYBOOK GAMES", "AFRICOMICS", "STUDIO MAYANGA", "NYAMAKOP",
];
const logos2 = [
  "ESL AFRICA", "MTN GAMING", "TENCENT", "RIOT GAMES", "MICROSOFT XBOX",
  "PLAYSTATION", "GOOGLE PLAY", "META", "EPIC GAMES", "UNITY",
];

export function LogoWall() {
  return (
    <Section bg="bg2">
      <div className="mb-10 text-center">
        <SectionTitle>
          The studios and brands<br />
          that were in <Accent>the room</Accent>.
        </SectionTitle>
      </div>

      <div className="wagcon-ticker-pause space-y-4">
        <div className="overflow-hidden">
          <div className="wagcon-ticker-left flex w-max gap-4">
            {[...logos1, ...logos1].map((l, i) => (
              <LogoChip key={`a-${i}`} label={l} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="wagcon-ticker-right flex w-max gap-4">
            {[...logos2, ...logos2].map((l, i) => (
              <LogoChip key={`b-${i}`} label={l} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function LogoChip({ label }: { label: string }) {
  return (
    <div
      className="flex h-14 shrink-0 items-center rounded-lg border border-[rgba(255,255,255,0.06)] bg-wagcon-bg3 px-7"
      style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "0.06em" }}
    >
      <span className="text-sm text-wagcon-white/60">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 12. TESTIMONIALS
 * ───────────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "WAGCON is the first event that took the business of gaming in West Africa seriously. We closed a publishing deal at the Guild dinner — before the convention floor even opened.",
    name: "Hugo Obi",
    role: "CEO, Maliyo Studios",
  },
  {
    quote:
      "I've spoken at gaming events in Berlin, San Francisco, and Tokyo. WAGCON is the only one where I left with three signed term sheets from African studios. This is where the next decade gets built.",
    name: "Iyinoluwa Aboyeji",
    role: "Founding Partner, Future Africa",
  },
  {
    quote:
      "We exhibited at WAGCON 2026 as a way to test the market. We left with 80 qualified leads, 12 partnership conversations, and a regional distributor. ROI was off the charts.",
    name: "Olamide Akinwale",
    role: "Founder, NextGen Esports",
  },
  {
    quote:
      "Lagos is the gaming capital of West Africa, and WAGCON proved it. The energy on the floor, the calibre of the delegates, the quality of the conversations — this isn't aspirational. It's already here.",
    name: "Adia Sowho",
    role: "MD, Mara Phones Gaming",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[idx];
  return (
    <Section bg="bg">
      <div className="mb-10 text-center">
        <SectionTitle>
          What the industry said<br />
          after <Accent>WAGCON 2026</Accent>.
        </SectionTitle>
      </div>
      <div
        className="mx-auto max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Card hoverable={false} className="relative">
          <Quote className="absolute -top-3 left-6 h-10 w-10 text-wagcon-green" />
          <p className="mt-4 text-lg leading-relaxed text-wagcon-white/90">"{t.quote}"</p>
          <div className="mt-6 flex items-center gap-4">
            <InitialAvatar name={t.name} size={48} />
            <div>
              <div className="text-sm text-wagcon-white" style={{ fontWeight: 700 }}>
                {t.name}
              </div>
              <div className="text-xs text-wagcon-muted">{t.role}</div>
            </div>
          </div>
        </Card>
        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-wagcon-green" : "w-2 bg-wagcon-muted/40"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 13. WHY EXHIBIT — 6 reason cards
 * ───────────────────────────────────────────────────────────── */
const reasons = [
  { icon: Trophy, title: "West Africa's #1 Gaming Convention", body: "The only event on the continent covering the full gaming stack — development, esports, publishing, Web3 gaming, AI, and investment — under one roof." },
  { icon: Users, title: "62%+ Industry Decision-Makers", body: "More than half our delegates are studio founders, C-level executives, publishers, or fund managers. The people who greenlight budgets and sign partnership agreements attend WAGCON." },
  { icon: Globe, title: "The African Gaming Market — A Category Opportunity", body: "Africa's mobile gaming market is growing faster than any other region. West Africa alone has tens of millions of active mobile gamers and a rapidly developing studio ecosystem. WAGCON puts you at the front of that opportunity." },
  { icon: Users, title: "Structured Deal-Making Environment", body: "Beyond the expo floor: dedicated networking zones, the Indie Showcase pitch stage, gaming investor lounge, and 1-on-1 meeting facilitation built for serious partnership conversations." },
  { icon: Mic, title: "Visibility Before, During & After", body: "Your brand appears in all pre-event marketing: email campaigns, social media, press releases, website, on-site digital screens. After the event, your logo is in the official Post-Event Report." },
  { icon: Gamepad2, title: "Three Venues. Triple the Touchpoints.", body: "Your brand spans The Guild, The Arena, and The Respawn — reaching delegates in private dinner mode, full convention mode, and social mode across all four days." },
];

export function WhyExhibit() {
  return (
    <Section bg="bg2">
      <div className="mb-12 text-center">
        <Eyebrow>WHY EXHIBIT AT WAGCON</Eyebrow>
        <SectionTitle className="mt-4">
          Build your pipeline<br />
          across West Africa's<br />
          <Accent>gaming industry</Accent>.
        </SectionTitle>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-wagcon-muted">
          Exhibiting at WAGCON puts your brand at the epicentre of West Africa's gaming economy.
          First in, best placed. Let's talk.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => (
          <Card key={r.title}>
            <IconBox>
              <r.icon size={20} />
            </IconBox>
            <h3 className="mt-4 text-lg text-wagcon-white" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              {r.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-wagcon-muted">{r.body}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <BtnPrimary href="/exhibit">Request Sponsorship Deck</BtnPrimary>
        <BtnSecondary href="/exhibit">Request Exhibition Deck</BtnSecondary>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 14. WHY WEST AFRICA
 * ───────────────────────────────────────────────────────────── */
export function WhyWestAfrica() {
  return (
    <section className="relative overflow-hidden bg-wagcon-bg py-20 md:py-28">
      <div className="wagcon-hero-grid absolute inset-0 opacity-50" />
      <div className="wagcon-hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-10 text-center">
        <Eyebrow>WHY WEST AFRICA. WHY NOW.</Eyebrow>
        <SectionTitle className="mt-4">
          The world's gaming industry<br />
          cannot afford to overlook<br />
          <Accent>this market</Accent>.
        </SectionTitle>
        <div className="mx-auto mt-7 max-w-3xl space-y-4 text-[15px] leading-relaxed text-wagcon-white/85">
          <p>West Africa is not an emerging gaming market. It is an arrived one.</p>
          <p>
            Nigeria alone has over 40 million active mobile gamers — and that number is growing
            faster than almost any other market on earth. Africa's young, mobile-first population
            is not waiting for gaming culture to reach them. They are building it themselves —
            game studios, esports teams, and gaming communities are forming across Lagos, Accra,
            and Abidjan right now.
          </p>
          <p className="text-wagcon-green">WAGCON is where that momentum gets its stage.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "40M+ Active Mobile Gamers in Nigeria Alone",
            "Africa's Gaming Market Projected to Exceed $1B by 2027",
            "Fastest-Growing Gaming Demographic on Earth — Under 30, Mobile-Native",
          ].map((s) => (
            <div
              key={s}
              className="rounded-xl border border-wagcon-green-border bg-wagcon-green-dim p-5 text-[14px] text-wagcon-white"
              style={{ fontWeight: 500 }}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <BtnPrimary href="/exhibit">Secure Your Exhibition Slot</BtnPrimary>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15. PARTNERS PREVIEW
 * ───────────────────────────────────────────────────────────── */
const partners = [
  "MTN", "AIRTEL", "GTBANK", "STANBIC", "ACCESS BANK", "MICROSOFT", "GOOGLE", "META",
  "CARRY1ST", "MALIYO", "ESL", "UNITY",
];

export function PartnersPreview() {
  return (
    <Section bg="bg2">
      <div className="mb-10 text-center">
        <Eyebrow>OUR PARTNERS</Eyebrow>
        <SectionTitle className="mt-4">
          Backed by the studios<br />
          and platforms powering<br />
          West Africa's <Accent>gaming future</Accent>.
        </SectionTitle>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {partners.map((p) => (
          <div
            key={p}
            className="flex h-20 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.06)] bg-wagcon-bg3 transition-colors hover:border-wagcon-green-border"
          >
            <span
              className="text-sm text-wagcon-white/60"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "0.06em" }}
            >
              {p}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <BtnSecondary href="/partners">View All Partners →</BtnSecondary>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 16. PASS TIERS
 * ───────────────────────────────────────────────────────────── */
type Pass = {
  icon: string;
  name: string;
  sub: string;
  tag: string;
  price: string;
  oldPrice?: string;
  earlyBirdNote?: string;
  benefits: Array<[boolean, string]>;
  cta: string;
  color: "grey" | "green" | "amber";
  featured?: boolean;
  badge?: string;
};

const passes: Pass[] = [
  {
    icon: "👁️",
    name: "Spectator Pass",
    sub: "Visitor",
    tag: "Demo Zone + Exhibition Access",
    price: "FREE",
    benefits: [
      [true, "The Arena — Exhibition Floor (Days 2 & 3)"],
      [true, "The Arena — Gaming Demo Zone (Days 2 & 3)"],
      [true, "WAGCON Networking App"],
      [false, "Bootcamp & Conference Sessions"],
      [false, "Esports Tournament seating"],
      [false, "The Guild (28 April)"],
      [false, "The Respawn (31 April)"],
    ],
    cta: "Register Free",
    color: "grey",
  },
  {
    icon: "🎮",
    name: "Player Pass",
    sub: "Delegate",
    tag: "Full Convention Access",
    price: "₦185,000",
    oldPrice: "₦240,000",
    earlyBirdNote: "Ends 28 February 2027",
    benefits: [
      [true, "The Arena — Keynotes, panels & bootcamp (Days 2 & 3)"],
      [true, "Exhibition Floor & Demo Zone (Days 2 & 3)"],
      [true, "Esports Tournament & Indie Showcase"],
      [true, "The Respawn — Industry After Party (Day 4)"],
      [true, "Startup Pitch Stage access"],
      [true, "Workshop & masterclass access"],
      [true, "Lunch & refreshments (Days 2 & 3)"],
      [true, "Networking App + meeting scheduler"],
      [false, "The Guild — Champion Pass only"],
    ],
    cta: "Get Player Pass",
    color: "green",
    featured: true,
    badge: "MOST POPULAR",
  },
  {
    icon: "👑",
    name: "Champion Pass",
    sub: "VIP",
    tag: "Full Convention + VIP Access",
    price: "₦650,000",
    benefits: [
      [true, "Everything on the Player Pass"],
      [true, "The Guild — Gaming Leaders Dinner (Day 1)"],
      [true, "The Respawn — Priority VIP section"],
      [true, "VIP Speaker & Sponsor Lounge"],
      [true, "Reserved front-row seating — all sessions"],
      [true, "3 curated 1-on-1 meeting introductions"],
      [true, "Gaming Investor Lounge access"],
      [true, "Exclusive VIP networking dinner"],
      [true, "Dedicated VIP registration desk"],
      [true, "Commemorative Champion Pass gift"],
    ],
    cta: "Unlock Champion Access",
    color: "amber",
    badge: "MOST EXCLUSIVE",
  },
];

export function PassTiers() {
  return (
    <Section bg="bg">
      <div className="mb-12 text-center">
        <Eyebrow>GET YOUR PASS</Eyebrow>
        <SectionTitle className="mt-4">
          Choose your role<br />
          at <Accent>WAGCON 2027</Accent>.
        </SectionTitle>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-wagcon-muted">
          Four days. Three venues. Every level of participation covered.
          <br />
          Early bird pricing active — ends 28 February 2027.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {passes.map((p) => (
          <PassCard key={p.name} pass={p} />
        ))}
      </div>

      {/* Group bundles */}
      <div className="mt-16">
        <div className="mb-8 text-center">
          <Eyebrow>GROUP BUNDLE PASSES</Eyebrow>
          <h3
            className="mt-3 text-2xl text-wagcon-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Bring your <Accent>squad</Accent>. Bring your <Accent>guild</Accent>.
          </h3>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <BundleCard
            icon="🎮🎮🎮"
            name="THE SQUAD PASS"
            tag="3 Player Passes · Group Bundle"
            price="₦495,000"
            savings="save 11% vs individual"
            includes="3× Player Pass — all benefits"
            ideal="Small studios, gaming agencies, startup teams"
            cta="Get The Squad Pass"
            color="green"
          />
          <BundleCard
            icon="👑👑👑👑👑"
            name="THE GUILD PASS"
            tag="5 Champion Passes · Group Bundle"
            price="₦2,950,000"
            savings="save 9% vs individual"
            includes="5× Champion Pass — all benefits including The Guild dinner"
            ideal="Enterprise studios, publishers, large delegations, major sponsors"
            cta="Get The Guild Pass"
            color="amber"
          />
        </div>
      </div>
    </Section>
  );
}

function PassCard({ pass }: { pass: Pass }) {
  const accent =
    pass.color === "grey"
      ? { text: "text-wagcon-grey", border: "border-wagcon-grey-border", btn: "bg-wagcon-grey text-wagcon-bg hover:bg-[#B5BAC5]" }
      : pass.color === "amber"
      ? { text: "text-wagcon-amber", border: "border-wagcon-amber-border", btn: "bg-wagcon-amber text-wagcon-bg hover:bg-[#FBB935]" }
      : { text: "text-wagcon-green", border: "border-wagcon-green-border", btn: "bg-wagcon-green text-wagcon-bg hover:bg-[#3DD680]" };

  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-wagcon-bg2 p-7 transition-transform ${
        pass.featured ? `border-2 ${accent.border} lg:-translate-y-4` : "border border-[rgba(255,255,255,0.08)]"
      }`}
    >
      {pass.badge && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase ${accent.text} bg-wagcon-bg border ${accent.border}`} style={{ letterSpacing: "0.10em" }}>
          {pass.badge}
        </div>
      )}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl">{pass.icon}</span>
        <div>
          <div
            className={`text-xl ${accent.text}`}
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            {pass.name}
          </div>
          <div className="text-[11px] uppercase text-wagcon-muted" style={{ letterSpacing: "0.10em" }}>
            {pass.sub}
          </div>
        </div>
      </div>

      <p className="text-xs text-wagcon-muted">{pass.tag}</p>

      <div className="mt-5 flex items-baseline gap-2">
        {pass.oldPrice && (
          <span className="text-sm text-wagcon-muted line-through">{pass.oldPrice}</span>
        )}
        <span
          className="text-4xl text-wagcon-white"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
        >
          {pass.price}
        </span>
      </div>
      {pass.earlyBirdNote && (
        <p className="mt-1 text-[11px] text-wagcon-green">{pass.earlyBirdNote}</p>
      )}

      <ul className="my-6 flex-1 space-y-2.5 text-sm">
        {pass.benefits.map(([on, label], i) => (
          <li key={i} className="flex items-start gap-2.5">
            {on ? (
              <Check size={16} className="mt-0.5 shrink-0 text-wagcon-green" />
            ) : (
              <XIcon size={16} className="mt-0.5 shrink-0 text-wagcon-muted/40" />
            )}
            <span className={on ? "text-wagcon-white/90" : "text-wagcon-muted/60 line-through"}>
              {label}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full rounded-md py-3 text-[13px] font-bold uppercase transition-colors ${accent.btn}`}
        style={{ letterSpacing: "0.06em" }}
      >
        {pass.cta}
      </button>
    </div>
  );
}

function BundleCard({
  icon,
  name,
  tag,
  price,
  savings,
  includes,
  ideal,
  cta,
  color,
}: {
  icon: string;
  name: string;
  tag: string;
  price: string;
  savings: string;
  includes: string;
  ideal: string;
  cta: string;
  color: "green" | "amber";
}) {
  const accent =
    color === "amber"
      ? { text: "text-wagcon-amber", border: "border-wagcon-amber-border", bg: "bg-wagcon-amber-dim" }
      : { text: "text-wagcon-green", border: "border-wagcon-green-border", bg: "bg-wagcon-green-dim" };

  return (
    <div className={`rounded-2xl border ${accent.border} ${accent.bg} p-7`}>
      <div className="mb-3 text-2xl">{icon}</div>
      <h3
        className={`text-2xl ${accent.text}`}
        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
      >
        {name}
      </h3>
      <p className="mt-1 text-xs text-wagcon-muted">{tag}</p>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-3xl text-wagcon-white" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
          {price}
        </span>
        <span className={`text-xs ${accent.text}`}>{savings}</span>
      </div>

      <div className="mt-5 space-y-3 text-sm text-wagcon-white/80">
        <div>
          <span className="text-[11px] uppercase text-wagcon-muted" style={{ letterSpacing: "0.10em" }}>Includes</span>
          <p className="mt-1">{includes}</p>
        </div>
        <div>
          <span className="text-[11px] uppercase text-wagcon-muted" style={{ letterSpacing: "0.10em" }}>Ideal For</span>
          <p className="mt-1">{ideal}</p>
        </div>
      </div>

      <button className="mt-6 w-full rounded-md border border-[rgba(255,255,255,0.12)] py-3 text-[13px] font-bold uppercase text-wagcon-white transition-colors hover:border-wagcon-white hover:bg-wagcon-white hover:text-wagcon-bg" style={{ letterSpacing: "0.06em" }}>
        {cta}
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 17. FINAL CTA + TEAM CONTACTS
 * ───────────────────────────────────────────────────────────── */
export function FinalCTA() {
  return (
    <Section bg="bg2">
      <div className="mb-12 text-center">
        <SectionTitle>
          How will you show up<br />
          at <Accent>WAGCON 2027</Accent>?
        </SectionTitle>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          { icon: Gamepad2, title: "Get Your Pass", body: "The Arena, The Respawn, and for Champion Pass holders — The Guild. Choose your level.", cta: "Get Tickets", href: "/tickets" },
          { icon: Building2, title: "Exhibit or Sponsor", body: "Put your brand in front of West Africa's top gaming decision-makers across all three WAGCON venues.", cta: "Exhibit Now", href: "/exhibit" },
          { icon: Mic, title: "Apply to Speak", body: "Share your expertise with West Africa's most engaged gaming audience. Applications open.", cta: "Apply Now", href: "/contact" },
        ].map((c) => (
          <Card key={c.title}>
            <IconBox><c.icon size={20} /></IconBox>
            <h3 className="mt-4 text-xl text-wagcon-white" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
              {c.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-wagcon-muted">{c.body}</p>
            <div className="mt-5">
              <BtnPrimary href={c.href}>{c.cta}</BtnPrimary>
            </div>
          </Card>
        ))}
      </div>

      {/* Team contacts */}
      <div className="mt-16 text-center">
        <h3 className="text-xl text-wagcon-white" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
          Speak directly to our team.
        </h3>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-3">
          {[
            { name: "Tunde Adekunle", role: "Sponsorship & Exhibition Lead", contact: "+234 901 234 5678" },
            { name: "Amara Nwosu", role: "Speaker & Programme Lead", contact: "+234 802 345 6789" },
            { name: "Kofi Mensah", role: "Delegate & Tickets Lead", contact: "+234 703 456 7890" },
          ].map((t) => (
            <div key={t.name} className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-wagcon-bg3 p-5 text-left">
              <div className="flex items-center gap-3">
                <InitialAvatar name={t.name} size={48} />
                <div>
                  <div className="text-sm text-wagcon-white" style={{ fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div className="text-[11px] text-wagcon-muted">{t.role}</div>
                </div>
              </div>
              <a href={`tel:${t.contact.replace(/\s/g, "")}`} className="mt-3 block text-xs text-wagcon-green">
                💬 WhatsApp · {t.contact}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
