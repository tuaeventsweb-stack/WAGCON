import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda — WAGCON 2027" },
      { name: "description", content: "Explore the WAGCON 2027 B2B conference agenda, sessions, panels, and networking events. 28 April – 1 May 2027, Lagos." },
      { property: "og:title", content: "Agenda — WAGCON 2027" },
      { property: "og:description", content: "Interactive schedule of conference keynotes, panels, showcases, and the industry after party." },
      { property: "og:url", content: "/agenda" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: AgendaPage,
});


import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, Accent, Section } from "@/components/wagcon/ui/primitives";
import { Calendar } from "lucide-react";



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
      time: "07:00 PM – Late",
      title: "Blockchain & Web3 Leaders Networking Dinner",
      location: "VIP Dining Room — Four Points by Sheraton",
      track: "networking",
      trackLabel: "VIP Dinner",
      description: "The exclusive, closed-door gathering designed for C-level founders, investors, and government officials. Co-hosted with ABDS.com.ng.",
    }
  ],
  "day-2": [
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
      description: "Unwind after Day 2 with refreshing drinks and targeted 1-on-1 networking. Co-hosted by T.U.A Events.",
    },
  ],
  "day-3": [
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
  "day-4": [
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
              Four days. Three venues. Plan your time at West Africa's most comprehensive gathering for the gaming, esports, and interactive media economy.
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <Section bg="bg">
          <div className="max-w-4xl mx-auto text-center py-20 px-6 border border-primary/20 bg-gradient-to-b from-wagcon-bg3/50 to-wagcon-bg3/10 rounded-sm space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
              <Calendar size={32} />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white tracking-tighter">
              Agenda <Accent>Coming Soon</Accent>.
            </h2>
            <p className="text-sm md:text-base text-white/70 font-body max-w-lg mx-auto leading-relaxed">
              We are currently finalizing the full B2B speaker sessions, panels, developer showcases, and esports tournament schedules for WAGCON 2027. Sign up for updates to receive the full convention agenda directly in your inbox.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="font-button text-xs uppercase tracking-wider font-bold bg-primary text-black px-10 py-5 hover:bg-primary/85 transition-all rounded-sm flex items-center justify-center gap-2"
              >
                Get Notified
              </a>
              <a
                href="/tickets"
                className="font-button text-xs uppercase tracking-wider font-bold border-2 border-white/20 text-white px-10 py-5 hover:border-primary hover:text-primary transition-all rounded-sm flex items-center justify-center gap-2"
              >
                Explore Passes
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
