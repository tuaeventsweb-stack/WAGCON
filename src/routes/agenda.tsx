import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent, Section, Card } from "@/components/wagcon/ui/primitives";
import { Calendar, Clock, MapPin, Tag, Filter } from "lucide-react";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda — WAGCON 2027" },
      { name: "description", content: "Explore the WAGCON 2027 B2B conference agenda, sessions, panels, and networking events. 28–30 April 2027, Lagos." },
      { property: "og:title", content: "Agenda — WAGCON 2027" },
      { property: "og:description", content: "Interactive schedule of conference keynotes, panels, showcases, and the industry after party." },
      { property: "og:url", content: "/agenda" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: AgendaPage,
});

type Session = {
  time: string;
  title: string;
  speaker?: string;
  location: string;
  track: "business" | "tech" | "esports" | "networking" | "all";
  trackLabel: string;
  description: string;
};

const scheduleData: Record<string, Session[]> = {
  "day-1": [
    {
      time: "09:00 AM – 10:00 AM",
      title: "Delegate Registration & Morning Networking Coffee",
      location: "Exhibition Hall — Lagos Oriental Hotel",
      track: "networking",
      trackLabel: "Networking",
      description: "Pick up your physical badges, explore the exhibition stands, and enjoy early morning coffee with developers, publishers, and sponsors.",
    },
    {
      time: "10:00 AM – 10:30 AM",
      title: "Opening Ceremony & Welcome Address",
      speaker: "T.U.A Events & Industry Partners",
      location: "Main Stage — Lagos Oriental Hotel",
      track: "networking",
      trackLabel: "Keynote",
      description: "Inauguration of West Africa Gaming Convention 2027. Brief introduction to this year's themes, targets, and co-location with ABDS 2027.",
    },
    {
      time: "10:30 AM – 11:30 AM",
      title: "Keynote: The Sovereign African Gaming Market — Growth & Scale",
      speaker: "To be announced",
      location: "Main Stage — Lagos Oriental Hotel",
      track: "business",
      trackLabel: "Business of Gaming",
      description: "How localized narratives, mobile monetization mechanics, and demographic shifts are positioning Africa as the fastest-growing gaming ecosystem globally.",
    },
    {
      time: "11:30 AM – 12:45 PM",
      title: "Panel: Venture Capital, Studios & Funding Pipelines in Africa",
      speaker: "Venture Partners, Studio Heads & Incubators",
      location: "Main Stage — Lagos Oriental Hotel",
      track: "business",
      trackLabel: "Business of Gaming",
      description: "A deep dive into funding models for African indie game studios, deal flow structures, and what global publishers are looking for in domestic IPs.",
    },
    {
      time: "12:45 PM – 02:00 PM",
      title: "Networking Lunch & Exhibition Floor Tour",
      location: "Exhibition Hall & Demo Zone",
      track: "networking",
      trackLabel: "Networking",
      description: "Catered lunch at Fahrenheit Cafe & Terrace. Dedicated hours to interact with sponsors, demo upcoming games, and host B2B matchmaking meetings.",
    },
    {
      time: "02:00 PM – 03:15 PM",
      title: "Silent Conference (Track A): Advanced Mobile Game Architecture & Optimization",
      speaker: "Lead Game Engineers & Technical Directors",
      location: "Silent Zone — Lagos Oriental Hotel",
      track: "tech",
      trackLabel: "Tech & Dev",
      description: "Technical masterclass on optimizing games for low-bandwidth environments, memory management in budget smartphones, and local storage design.",
    },
    {
      time: "03:15 PM – 04:30 PM",
      title: "Panel: Developing the Talent Loop — Curriculum, Mentors & Scale",
      speaker: "Ecosystem Educators & Studio Founders",
      location: "Main Stage — Lagos Oriental Hotel",
      track: "tech",
      trackLabel: "Tech & Dev",
      description: "How universities, bootcamps, and developer collectives are scaling local talent pipelines in game design, 3D modeling, and interactive writing.",
    },
    {
      time: "04:30 PM – 06:00 PM",
      title: "Ecosystem Networking Drinks",
      location: "Grand Ballroom Foyer",
      track: "networking",
      trackLabel: "Networking",
      description: "Unwind after Day 1 with refreshing drinks and targeted 1-on-1 networking. Co-hosted by T.U.A Events.",
    },
  ],
  "day-2": [
    {
      time: "09:00 AM – 10:00 AM",
      title: "Doors Open & Exhibition Floor Opens",
      location: "Lagos Oriental Hotel",
      track: "networking",
      trackLabel: "Networking",
      description: "Exhibition boots and live developer demo stations open for general audience and B2B buyers.",
    },
    {
      time: "10:00 AM – 11:30 AM",
      title: "Strategic Joint Panel: Blockchain, Web3 & Digital Assets in Gaming",
      speaker: "Co-hosted with ABDS 2027 - Africa Blockchain Week",
      location: "Main Stage — Lagos Oriental Hotel",
      track: "business",
      trackLabel: "Business of Gaming",
      description: "Exploring cross-over utility: player-owned economies, digital asset licensing, smart contracts for game development, and the future of secure transactions.",
    },
    {
      time: "11:30 AM – 01:00 PM",
      title: "Silent Conference (Track B): Narrative Design & African Folklore Integration",
      speaker: "Creative Directors & Writers",
      location: "Silent Zone — Lagos Oriental Hotel",
      track: "tech",
      trackLabel: "Tech & Dev",
      description: "A workshops-based session on translating rich oral histories and cultural motifs into compelling interactive narratives and gameplay systems.",
    },
    {
      time: "01:00 PM – 02:00 PM",
      title: "Networking Lunch & Indie Developer Showcase Awards",
      location: "Exhibition Hall — Lagos Oriental Hotel",
      track: "networking",
      trackLabel: "Networking",
      description: "Indie studios pitch their games to the jury. Winners across best game design, best aesthetics, and most innovative mechanic are announced.",
    },
    {
      time: "02:00 PM – 03:30 PM",
      title: "Panel: Esports Infrastructure — Arenas, Tournaments & Brand Deals",
      speaker: "Esports Managers & Brand Officers",
      location: "Main Stage — Lagos Oriental Hotel",
      track: "esports",
      trackLabel: "Esports & Community",
      description: "Breaking down how esports tournaments can monetize locally, standardizing player contracts, and aligning with global B2C brands.",
    },
    {
      time: "03:30 PM – 06:00 PM",
      title: "WAGCON Invitational Tournament Finals & Closing Keynote",
      location: "Esports Arena — Lagos Oriental Hotel",
      track: "esports",
      trackLabel: "Esports & Community",
      description: "The ultimate showdown: The region's top competitive gamers fight live on stage for glory and a share of the grand prize pool.",
    },
  ],
  "day-3": [
    {
      time: "12:00 PM – 03:00 PM",
      title: "WAGCON VIP Networking Brunch",
      location: "Lagos Oriental Hotel Penthouse (Champion Pass Only)",
      track: "networking",
      trackLabel: "Networking",
      description: "An exclusive closed-door gathering for Champion Pass holders, title sponsors, global speakers, and senior delegates. Fine dining and business discussions.",
    },
    {
      time: "07:00 PM – Late",
      title: "Official WAGCON × ABDS Industry After Party",
      location: "Fahrenheit — Victoria Island, Lagos (Player & Champion Pass)",
      track: "networking",
      trackLabel: "After Party",
      description: "The official week-closer. Fine drinks, DJ sets, and informal networking overlooking the Lagos skyline. Celebrate the completion of West Africa's Gaming Week.",
    },
  ],
};

function AgendaPage() {
  const [activeDay, setActiveDay] = useState("day-1");
  const [activeTrack, setActiveTrack] = useState("all");

  const filteredSessions = scheduleData[activeDay].filter((s) => {
    if (activeTrack === "all") return true;
    return s.track === activeTrack;
  });

  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white">
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5 bg-wagcon-bg2">
          <div className="absolute inset-0 wagcon-hero-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
            <Eyebrow className="mb-4">CONVENTION SCHEDULE</Eyebrow>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
              WAGCON 2027 <Accent>Agenda</Accent>.
            </h1>
            <p className="text-lg text-white/60 font-body max-w-2xl mx-auto leading-relaxed">
              Three days. Two venues. Plan your time at West Africa's most comprehensive gathering for the gaming, esports, and interactive media economy.
            </p>
          </div>
        </section>

        {/* Schedule & Filters Section */}
        <Section bg="bg">
          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { id: "day-1", label: "DAY 1 — 28 APRIL", subtitle: "B2B Conference & Exhibition" },
              { id: "day-2", label: "DAY 2 — 29 APRIL", subtitle: "Showcase & Tournaments" },
              { id: "day-3", label: "DAY 3 — 30 APRIL", subtitle: "VIP & Official After Party" },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setActiveDay(d.id);
                  setActiveTrack("all"); // Reset track filter on day change
                }}
                className={`flex flex-col items-center justify-center p-4 border rounded-sm min-w-[220px] transition-all ${
                  activeDay === d.id
                    ? "border-primary bg-primary/10 text-white"
                    : "border-white/10 bg-wagcon-bg3/40 hover:border-primary/40 text-white/70"
                }`}
              >
                <span className="font-heading font-extrabold text-sm uppercase tracking-wider mb-1">{d.label}</span>
                <span className="text-[10px] opacity-65 font-body uppercase">{d.subtitle}</span>
              </button>
            ))}
          </div>

          {/* Track Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14 border-t border-white/5 pt-8">
            <span className="text-xs text-white/40 font-body mr-2 flex items-center gap-1">
              <Filter size={14} /> Filter by Track:
            </span>
            {[
              { id: "all", label: "ALL SESSIONS" },
              { id: "business", label: "BUSINESS OF GAMING" },
              { id: "tech", label: "TECH & DEV" },
              { id: "esports", label: "ESPORTS & COMMUNITY" },
              { id: "networking", label: "NETWORKING" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTrack(t.id)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider border transition-all rounded-sm ${
                  activeTrack === t.id
                    ? "border-primary bg-primary text-black"
                    : "border-white/10 bg-transparent text-white/60 hover:border-white/25 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto relative pl-6 md:pl-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session, index) => (
                <div key={index} className="relative mb-12 last:mb-0 group">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[30px] md:-left-[34px] w-6 h-6 rounded-full border bg-wagcon-bg flex items-center justify-center transition-colors duration-300 ${
                    session.track === "business"
                      ? "border-primary text-primary"
                      : session.track === "tech"
                      ? "border-secondary text-secondary"
                      : session.track === "esports"
                      ? "border-accent-purple text-accent-purple"
                      : "border-white/35 text-white/60"
                  }`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  </div>

                  <Card className="hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      {/* Left: Time and Title */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-primary font-bold">
                          <Clock size={12} /> {session.time}
                        </div>
                        <h3 className="font-heading text-lg md:text-xl font-bold text-white leading-snug group-hover:text-primary transition-colors">
                          {session.title}
                        </h3>
                      </div>
                      
                      {/* Right: Badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                        session.track === "business"
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : session.track === "tech"
                          ? "bg-secondary/10 text-secondary border border-secondary/20"
                          : session.track === "esports"
                          ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                          : "bg-white/5 text-white/50 border border-white/10"
                      }`}>
                        {session.trackLabel}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-white/60 font-body mb-6 leading-relaxed">
                      {session.description}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-white/40 uppercase tracking-widest font-body pt-4 border-t border-white/5">
                      {session.speaker && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-white/60">SPEAKER:</span> {session.speaker}
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-primary" /> {session.location}
                      </div>
                    </div>
                  </Card>
                </div>
              ))
            ) : (
              <div className="text-center py-12 border border-white/5 bg-wagcon-bg3/30 rounded-sm">
                <p className="text-white/40 font-body">No sessions match the selected track filter.</p>
              </div>
            )}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
