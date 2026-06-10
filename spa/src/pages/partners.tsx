
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent, Section, Card } from "@/components/wagcon/ui/primitives";
import { Handshake, Building, Users, Star, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";



export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white">
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5 bg-wagcon-bg2">
          <div className="absolute inset-0 wagcon-hero-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
            <Eyebrow className="mb-4">THE WAGCON ECOSYSTEM</Eyebrow>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
              Our <Accent>Partners</Accent> & Sponsors.
            </h1>
            <p className="text-lg text-white/60 font-body max-w-2xl mx-auto leading-relaxed">
              WAGCON is powered by a network of studios, technology providers, media outlets, and regulatory bodies committed to scaling Africa's interactive economy.
            </p>
          </div>
        </section>

        {/* Strategic Partners Section */}
        <Section bg="bg">
          <div className="text-center mb-14">
            <Eyebrow>STRATEGIC PARTNERS</Eyebrow>
            <SectionTitle className="mb-4">Co-Location & Organizer Alliance</SectionTitle>
            <p className="text-white/60 font-body max-w-xl mx-auto text-xs md:text-sm">
              Our core alliance connects gaming innovation directly to infrastructure, organizers, and blockchain technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {/* ABDS */}
            <Card className="flex flex-col justify-between bg-wagcon-bg3/40 border-primary/20 hover:border-primary/50 relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[9px] font-black uppercase text-primary tracking-widest block mb-3">STRATEGIC CO-LOCATION PARTNER</span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
                  ABDS 2027 — Africa Blockchain Week
                </h3>
                <p className="text-xs md:text-sm text-white/60 font-body mb-6 leading-relaxed">
                  The primary convergence platform for blockchain technologies, digital assets, and web3 infrastructure in Africa. Co-locating with WAGCON 2027 combines digital entertainment with decentralized economies at the Lagos Oriental Hotel.
                </p>
              </div>
              <div>
                <a 
                  href="https://www.abds.com.ng" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 font-button text-xs uppercase tracking-wider font-bold text-primary hover:text-white transition-colors"
                >
                  Visit ABDS Website <ExternalLink size={14} />
                </a>
              </div>
            </Card>

            {/* TUA Events */}
            <Card className="flex flex-col justify-between bg-wagcon-bg3/40 border-white/5 hover:border-primary/20 relative overflow-hidden transition-all duration-300">
              <div>
                <span className="text-[9px] font-black uppercase text-white/40 tracking-widest block mb-3">ORGANIZER & HOST</span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
                  T.U.A Events
                </h3>
                <p className="text-xs md:text-sm text-white/60 font-body mb-6 leading-relaxed">
                  West Africa's premier B2B technology and entertainment event organizers. T.U.A Events conceptualizes and designs ecosystems that connect investors, brands, and creatives to shape Africa's digital roadmap.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-white/50 font-body">
                  Contact: <a href="mailto:info@tuaevents.org" className="text-primary hover:underline font-bold">info@tuaevents.org</a>
                </span>
              </div>
            </Card>
          </div>

          {/* Partner Directories */}
          <div className="border-t border-white/5 pt-20">
            <div className="text-center mb-12">
              <Eyebrow>ECOSYSTEM CATEGORIES</Eyebrow>
              <SectionTitle className="mb-4">Partner Announcement In Waves</SectionTitle>
              <p className="text-white/60 font-body max-w-xl mx-auto text-xs md:text-sm">
                Exhibitors, media houses, and gaming studios are being onboarded. The full directory will launch starting late June 2026.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-wagcon-bg3/20 border-white/5 text-center p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-white/50 mb-4">
                  <Building size={20} />
                </div>
                <h4 className="font-heading text-base font-bold text-white mb-2">Venue & Hospitality Partners</h4>
                <p className="text-xs text-white/40 font-body leading-relaxed">
                  Lagos Oriental Hotel (Victoria Island) & Fahrenheit VI. Providing B2B halls, networking spaces, and VIP after-party hospitality.
                </p>
              </Card>

              <Card className="bg-wagcon-bg3/20 border-white/5 text-center p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-white/50 mb-4">
                  <Star size={20} />
                </div>
                <h4 className="font-heading text-base font-bold text-white mb-2">Esports & Showcase Partners</h4>
                <p className="text-xs text-white/40 font-body leading-relaxed">
                  Regional esports leagues, console brand distributors, and mobile tournament platforms. Supporting the prize pools and brackets.
                </p>
              </Card>

              <Card className="bg-wagcon-bg3/20 border-white/5 text-center p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-white/50 mb-4">
                  <Users size={20} />
                </div>
                <h4 className="font-heading text-base font-bold text-white mb-2">Press & Media Partners</h4>
                <p className="text-xs text-white/40 font-body leading-relaxed">
                  Tech blogs, gaming journalism portals, and B2B newsletters providing wide regional and international coverage.
                </p>
              </Card>
            </div>
          </div>
        </Section>

        {/* Join CTA */}
        <Section bg="bg2" className="border-t border-white/5 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Eyebrow>JOIN THE COHORT</Eyebrow>
            <SectionTitle>Interested in partnering or sponsoring WAGCON?</SectionTitle>
            <p className="text-sm md:text-base text-white/60 font-body leading-relaxed">
              Maximize your brand visibility, run custom showcase panels, or distribute developer kits. Download the exhibitor deck or contact the committee.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://app.eventpadi.com/wagcon/f/WAGCON"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-button text-xs uppercase tracking-wider font-bold bg-primary text-black px-8 py-4 hover:bg-primary/85 transition-all"
              >
                Request Sponsorship Deck <ArrowRight size={14} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 font-button text-xs uppercase tracking-wider font-bold border border-white/20 text-white px-8 py-4 hover:border-primary hover:text-primary transition-all"
              >
                Speak to a Rep
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
