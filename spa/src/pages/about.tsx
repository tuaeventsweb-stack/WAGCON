
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent, Card, Section } from "@/components/wagcon/ui/primitives";
import { Gamepad2, Trophy, Building2, ExternalLink } from "lucide-react";



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white">
      <Nav />
      
      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5 bg-wagcon-bg2">
          <div className="absolute inset-0 wagcon-hero-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
            <Eyebrow className="mb-4">ABOUT THE CONVENTION</Eyebrow>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
              West Africa's Gaming Industry,<br />
              <Accent>On One Stage</Accent>.
            </h1>
            <p className="text-lg text-white/60 font-body max-w-2xl mx-auto leading-relaxed">
              WAGCON — West Africa Gaming Convention is Africa's flagship B2B gaming, esports, and interactive entertainment industry event, bringing together the ecosystem's builders and leaders.
            </p>
          </div>
        </section>

        {/* The Story & Image Section */}
        <Section bg="bg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow>OUR MISSION</Eyebrow>
              <SectionTitle>Shaping the Future of Africa's Digital Entertainment</SectionTitle>
              <div className="space-y-4 text-white/70 font-body leading-relaxed text-sm md:text-base">
                <p>
                  West Africa's gaming economy is expanding at an unprecedented rate, powered by mobile connectivity, a massive youth demographic, and exceptional creative talent. WAGCON serves as the premier bridge connecting developers, esports teams, publishers, investors, and regulators.
                </p>
                <p>
                  Our four-day event features conferences, B2B exhibition spaces, startup pitch contests, and the region's most competitive esports showcases. Positioned as West Africa's Gaming Week, we take the business of gaming as seriously as the games themselves.
                </p>
                <p>
                  By facilitating investment, supporting local talent development, and opening dialogue on policy and infrastructure, WAGCON builds a sustainable pipeline for African creators to thrive globally.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative rounded-lg overflow-hidden border border-white/10 bg-wagcon-bg3">
                  <img 
                    src="about-audience.jpg" 
                    alt="WAGCON delegates at silent conference" 
                    className="w-full object-cover aspect-[4/3] grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-widest font-bold text-primary">Live at WAGCON</p>
                    <p className="text-[10px] text-white/50 uppercase">B2B Conference Sessions & Exhibition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Pillars Section */}
        <Section bg="bg2" className="border-t border-white/5">
          <div className="text-center mb-16">
            <Eyebrow>THE THREE PILLARS</Eyebrow>
            <SectionTitle className="mb-4">How We Drive Impact</SectionTitle>
            <p className="text-white/60 font-body max-w-xl mx-auto text-sm md:text-base">
              WAGCON operates across three primary vectors to accelerate the regional gaming ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full bg-wagcon-bg3/50 border-white/5 hover:border-primary/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                <Gamepad2 size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-3">Industry Collaboration</h3>
              <p className="text-xs text-white/50 font-body flex-1 leading-relaxed">
                Bringing together game developers, studios, publishers, and platforms to exchange resources, licensing, and distribution pathways.
              </p>
            </Card>

            <Card className="flex flex-col h-full bg-wagcon-bg3/50 border-white/5 hover:border-secondary/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary mb-6">
                <Building2 size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-3">Investment & Market Entry</h3>
              <p className="text-xs text-white/50 font-body flex-1 leading-relaxed">
                Connecting venture capitalists, angel investors, and global gaming companies directly to African studios seeking growth capital and expansion.
              </p>
            </Card>

            <Card className="flex flex-col h-full bg-wagcon-bg3/50 border-white/5 hover:border-primary/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                <Trophy size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-3">Talent & Ecosystem Development</h3>
              <p className="text-xs text-white/50 font-body flex-1 leading-relaxed">
                Hosting game jams, mentoring panels, and tech masterclasses to upskill the next generation of African digital artists and esports athletes.
              </p>
            </Card>
          </div>
        </Section>

        {/* Organizer & Co-location Info */}
        <Section bg="bg3" className="border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Eyebrow>ORGANIZED BY T.U.A EVENTS</Eyebrow>
            <SectionTitle>B2B Events Made to Connect</SectionTitle>
            <p className="text-white/70 font-body leading-relaxed text-sm md:text-base">
              WAGCON is conceptualized, designed, and executed by **T.U.A Events** (a brand under the T.U.A group), the team behind the region's most ambitious technology and industry conferences. For general inquiries, sponsorship bookings, or strategic partnership alignments, contact us at <a href="mailto:info@tuaevents.org" className="text-primary hover:underline font-bold">info@tuaevents.org</a>.
            </p>
            
            <div className="p-8 bg-gradient-to-br from-card/90 to-background border border-primary/20 hover:border-primary/40 rounded-lg max-w-2xl mx-auto transition-all text-left">
              <h3 className="font-heading text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                Co-located with ABDS 2027
              </h3>
              <p className="text-xs text-white/60 font-body mb-6 leading-relaxed">
                WAGCON 2027 is co-located with **ABDS 2027 - Africa Blockchain Week** at the Lagos Oriental Hotel, combining the power of digital entertainment with web3, digital assets, and next-generation blockchain technologies.
              </p>
              <a 
                href="https://www.abds.com.ng" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 font-button text-xs uppercase tracking-wider font-bold text-primary hover:text-white transition-colors"
              >
                Explore ABDS 2027 Website <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
