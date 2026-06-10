import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/venues")({
  head: () => ({
    meta: [
      { title: "Venues — WAGCON 2027" },
      { name: "description", content: "Learn about the WAGCON 2027 B2B venues: The Arena at Lagos Oriental Hotel and After Party at Fahrenheit, Victoria Island, Lagos." },
      { property: "og:title", content: "Venues — WAGCON 2027" },
      { property: "og:description", content: "Location coordinates, dates, and event facilities across Victoria Island, Lagos." },
      { property: "og:url", content: "/venues" },
    ],
    links: [{ rel: "canonical", href: "/venues" }],
  }),
  component: VenuesPage,
});


import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent, Section, Card } from "@/components/wagcon/ui/primitives";
import { MapPin, Calendar, Clock, Compass, Shield, Hotel, Plane, Navigation2 } from "lucide-react";



function VenuesPage() {
  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white">
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5 bg-wagcon-bg2">
          <div className="absolute inset-0 wagcon-hero-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
            <Eyebrow className="mb-4">THE WAGCON LOCATIONS</Eyebrow>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
              Four Days. <Accent>Two Venues</Accent>.
            </h1>
            <p className="text-lg text-white/60 font-body max-w-2xl mx-auto leading-relaxed">
              WAGCON 2027 unfolds across Victoria Island, the premium tech and commercial hub of Lagos, Nigeria. Co-located with ABDS 2027.
            </p>
          </div>
        </section>

        {/* Venues Grid */}
        <Section bg="bg">
          <div className="space-y-24">
            {/* Venue 1: Leaders Dinner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] uppercase font-bold text-primary tracking-widest block">VENUE 01 · DAY 1</span>
                <SectionTitle>Leaders Networking Dinner — Lagos Oriental Hotel</SectionTitle>
                
                <div className="flex flex-wrap gap-4 text-xs font-body uppercase text-white/50 tracking-wider">
                  <span className="flex items-center gap-1"><Calendar size={13} className="text-primary" /> 28 April 2027</span>
                  <span className="flex items-center gap-1"><Clock size={13} className="text-primary" /> 7:00 PM – Late</span>
                  <span className="flex items-center gap-1"><MapPin size={13} className="text-primary" /> Victoria Island, Lagos</span>
                </div>

                <p className="text-sm md:text-base text-white/70 font-body leading-relaxed">
                  The exclusive, closed-door gathering designed for C-level executives, founders, investors, and senior blockchain & gaming leaders. Co-hosted with **ABDS.com.ng** to establish high-impact connections before the main convention floors open.
                </p>

                <ul className="grid grid-cols-2 gap-4 text-xs font-body text-white/80">
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>Private VIP Dining Hall</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>C-Level & Investor Roundtable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>Government & Policy Leaders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>Fine Dining & Private Bar</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Lagos+Oriental+Hotel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-button text-xs uppercase tracking-wider font-bold text-primary hover:text-white transition-colors"
                  >
                    Get Directions <Navigation2 size={12} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative border border-white/10 bg-wagcon-bg3 p-2 rounded-lg overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="/hero_bg_uploaded.jpg" 
                    alt="Leaders Networking Dinner Lounge" 
                    className="w-full object-cover aspect-[16/10] rounded-sm grayscale contrast-125 brightness-95" 
                  />
                  <div className="p-4 text-xs font-body uppercase text-white/50 flex justify-between items-center">
                    <span>Lagos Oriental Hotel</span>
                    <span>VIP Dining Room</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue 2: The Arena */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-white/5 pt-16">
              <div className="lg:col-span-6 lg:order-2 space-y-6">
                <span className="text-[10px] uppercase font-bold text-primary tracking-widest block">VENUE 02 · DAYS 2 & 3</span>
                <SectionTitle>Conference & Exhibition — Lagos Oriental Hotel</SectionTitle>
                
                <div className="flex flex-wrap gap-4 text-xs font-body uppercase text-white/50 tracking-wider">
                  <span className="flex items-center gap-1"><Calendar size={13} className="text-primary" /> 29–30 April 2027</span>
                  <span className="flex items-center gap-1"><Clock size={13} className="text-primary" /> 9:00 AM – 6:00 PM</span>
                  <span className="flex items-center gap-1"><MapPin size={13} className="text-primary" /> Victoria Island, Lagos</span>
                </div>

                <p className="text-sm md:text-base text-white/70 font-body leading-relaxed">
                  Lagos Oriental Hotel serves as the core hub for WAGCON 2027 and our co-located event, **ABDS 2027 - Africa Blockchain Week**. Conference & Exhibition hosts all B2B conference keynotes, panel sessions, the indie developer showcase, standard exhibition booths, B2B meeting lounges, and our live esports tournament arena.
                </p>

                <ul className="grid grid-cols-2 gap-4 text-xs font-body text-white/80">
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>Grand Ballroom Exhibition Floor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>B2B Silent Conference Zone</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>Live Esports Tournament Stage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>Indie Showcase Demo Zone</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Lagos+Oriental+Hotel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-button text-xs uppercase tracking-wider font-bold text-primary hover:text-white transition-colors"
                  >
                    Get Directions <Navigation2 size={12} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 lg:order-1">
                <div className="relative border border-white/10 bg-wagcon-bg3 p-2 rounded-lg overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="/about-audience.jpg" 
                    alt="Lagos Oriental Hotel Convention Floor" 
                    className="w-full object-cover aspect-[16/10] rounded-sm grayscale contrast-125 brightness-95" 
                  />
                  <div className="p-4 text-xs font-body uppercase text-white/50 flex justify-between items-center">
                    <span>Lagos Oriental Hotel</span>
                    <span>Convention Hall</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue 3: Fahrenheit */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-white/5 pt-16">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] uppercase font-bold text-primary tracking-widest block">VENUE 03 · DAY 4</span>
                <SectionTitle>The After Party — Fahrenheit</SectionTitle>
                
                <div className="flex flex-wrap gap-4 text-xs font-body uppercase text-white/50 tracking-wider">
                  <span className="flex items-center gap-1"><Calendar size={13} className="text-primary" /> 1 May 2027</span>
                  <span className="flex items-center gap-1"><Clock size={13} className="text-primary" /> 7:00 PM – Late</span>
                  <span className="flex items-center gap-1"><MapPin size={13} className="text-primary" /> VI, Lagos</span>
                </div>

                <p className="text-sm md:text-base text-white/70 font-body leading-relaxed">
                  Close the week the right way. The official WAGCON × ABDS industry after party takes place at the premium Fahrenheit Rooftop in Victoria Island. High-profile networking, open bars, and curated DJ sets overlooking the beautiful Lagos skyline.
                </p>

                <ul className="grid grid-cols-2 gap-4 text-xs font-body text-white/80">
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>Rooftop Ocean View Terrace</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>Curated Networking Lounges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>Premium Open Cocktail Bar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass size={14} className="text-primary shrink-0" />
                    <span>DJ Live Sets & Entertainment</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Fahrenheit+Victoria+Island+Lagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-button text-xs uppercase tracking-wider font-bold text-primary hover:text-white transition-colors"
                  >
                    Get Directions <Navigation2 size={12} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative border border-white/10 bg-wagcon-bg3 p-2 rounded-lg overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="/convention-hall.jpg" 
                    alt="Fahrenheit Rooftop Lounge" 
                    className="w-full object-cover aspect-[16/10] rounded-sm grayscale contrast-125 brightness-95" 
                  />
                  <div className="p-4 text-xs font-body uppercase text-white/50 flex justify-between items-center">
                    <span>Fahrenheit Rooftop Lounge</span>
                    <span>Rooftop Terrace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Travel & Accommodation Section */}
        <Section bg="bg2" className="border-t border-white/5">
          <div className="text-center mb-16">
            <Eyebrow>DELEGATE ASSISTANCE</Eyebrow>
            <SectionTitle className="mb-4">Travel & Accommodation Info</SectionTitle>
            <p className="text-white/60 font-body max-w-xl mx-auto text-xs md:text-sm">
              Flying into Lagos? We have coordinated with partner hotels and airlines to provide discounted B2B booking packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Hotel Accommodation */}
            <Card className="bg-wagcon-bg3/30 border-white/5 space-y-6">
              <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary">
                <Hotel size={22} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">Preferred Hotel Partners</h3>
              <p className="text-xs text-white/60 font-body leading-relaxed">
                Attendees get discounted delegate rates at **Lagos Oriental Hotel** and neighboring premium properties in Victoria Island. Mention WAGCON 2027 when booking or use our digital attendee discount token in your ticket confirmation mail.
              </p>
              <div className="text-xs font-bold text-white/80 font-body">
                Rates starting from ₦120,000 / night.
              </div>
            </Card>

            {/* Flight Discounts */}
            <Card className="bg-wagcon-bg3/30 border-white/5 space-y-6">
              <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary">
                <Plane size={22} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">International Flight Alignments</h3>
              <p className="text-xs text-white/60 font-body leading-relaxed">
                Murtala Muhammed International Airport (LOS) in Ikeja, Lagos is the primary flight port. We have partners providing airport shuttle transfers directly to Victoria Island for all Champion Pass and international speaker delegates.
              </p>
              <div className="text-xs font-bold text-white/80 font-body">
                Contact: <a href="mailto:info@tuaevents.org" className="text-primary hover:underline">info@tuaevents.org</a>
              </div>
            </Card>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
