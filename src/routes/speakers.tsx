import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent, Section, Card } from "@/components/wagcon/ui/primitives";
import { Mic, Check, Send, Award, BookOpen, Cpu, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Call for Speakers — WAGCON 2027" },
      { name: "description", content: "Apply to speak at WAGCON 2027. Share your insights on game design, B2B investment, mobile esports, and web3 in Africa." },
      { property: "og:title", content: "Call for Speakers — WAGCON 2027" },
      { property: "og:description", content: "Pitch your session proposals for the flagship West Africa Gaming Convention." },
      { property: "og:url", content: "/speakers" },
    ],
    links: [{ rel: "canonical", href: "/speakers" }],
  }),
  component: SpeakersPage,
});

type Track = {
  title: string;
  desc: string;
  icon: typeof Mic;
};

const speakTracks: Track[] = [
  {
    title: "Venture Capital & Investment",
    desc: "Targeting VC deals, studio growth funding, cross-border M&As, and building sustainable business models in emerging markets.",
    icon: Award,
  },
  {
    title: "Game Dev & Technical Production",
    desc: "Highlighting asset pipelines, low-spec optimization, AI tools in production, localized narrative design, and engine performance.",
    icon: Cpu,
  },
  {
    title: "Esports & Community Scaling",
    desc: "Focusing on tournament operations, telco integrations, community engagement, athlete recruitment, and B2C marketing.",
    icon: Mic,
  },
  {
    title: "Web3 & Co-located Blockchain Gaming",
    desc: "Aligning with ABDS 2027 on player-owned economies, digital asset contracts, and tokenized game loops in emerging markets.",
    icon: BookOpen,
  },
];

function SpeakersPage() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    track: "development",
    pitchTitle: "",
    pitchDesc: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.title || !formData.email || !formData.pitchTitle) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        name: "",
        title: "",
        company: "",
        email: "",
        track: "development",
        pitchTitle: "",
        pitchDesc: "",
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white">
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5 bg-wagcon-bg2">
          <div className="absolute inset-0 wagcon-hero-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
            <Eyebrow className="mb-4">CALL FOR PAPERS & SPEAKERS</Eyebrow>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
              Apply to <Accent>Speak</Accent> at WAGCON.
            </h1>
            <p className="text-lg text-white/60 font-body max-w-2xl mx-auto leading-relaxed">
              We are assembling a line-up of founders, studio heads, esports leaders, and policy voices shaping West Africa's gaming economy.
            </p>
          </div>
        </section>

        {/* Directory Notice & Tracks */}
        <Section bg="bg">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <div className="p-8 border border-primary/20 bg-primary/[0.02] rounded-sm inline-block w-full">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">Speakers Announcement Coming Soon</h3>
              <p className="text-xs md:text-sm text-white/60 font-body max-w-2xl mx-auto leading-relaxed">
                Our main directory of confirmed keynote speakers and panelists will launch in waves starting late June 2026. Do you want to join them? We invite submissions for panels, workshops, and technical keynotes.
              </p>
            </div>
          </div>

          <div className="border-t border-white/5 pt-16">
            <div className="text-center mb-12">
              <Eyebrow>SPEAKER TRACKS</Eyebrow>
              <SectionTitle className="mb-4">Presentation Focus Areas</SectionTitle>
              <p className="text-white/60 font-body max-w-xl mx-auto text-xs md:text-sm">
                We accept session proposals across four primary tracks tailored for the B2B audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {speakTracks.map((track) => (
                <Card key={track.title} className="flex gap-4 items-start bg-wagcon-bg3/30 border-white/5">
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <track.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-white mb-2">{track.title}</h4>
                    <p className="text-xs text-white/50 font-body leading-relaxed">{track.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Application Form */}
        <Section bg="bg2" className="border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow>SUBMIT YOUR PROPOSAL</Eyebrow>
              <SectionTitle className="mb-3">Speaker Application Form</SectionTitle>
              <p className="text-white/60 font-body text-xs md:text-sm">
                Pitch your topic to our programming committee. Reviewing is on a rolling basis.
              </p>
            </div>

            {success ? (
              <div className="p-8 border border-primary/20 bg-primary/5 rounded-sm text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Application Received</h3>
                <p className="text-sm text-white/70 font-body max-w-md mx-auto leading-relaxed">
                  Thank you! Your speaking proposal has been logged. The program committee will review your pitch details and respond via email within 14 days.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="font-button text-[10px] uppercase tracking-wider font-bold text-primary hover:text-white transition-colors"
                >
                  [ Submit Another Pitch ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-wagcon-bg3/30 border border-white/5 p-8 rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Your Name *</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. David Ogbor"
                      className="w-full bg-wagcon-bg border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Job Title / Role *</label>
                    <input
                      type="text"
                      required
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g. Lead Developer"
                      className="w-full bg-wagcon-bg border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Company / Studio</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Maliyo Games"
                      className="w-full bg-wagcon-bg border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Contact Email *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. speaker@studio.com"
                      className="w-full bg-wagcon-bg border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Target Track</label>
                  <select
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    className="w-full bg-wagcon-bg border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                  >
                    <option value="investment">Venture Capital & Investment</option>
                    <option value="development">Game Dev & Technical Production</option>
                    <option value="esports">Esports & Community Scaling</option>
                    <option value="web3">Web3 & Co-located Blockchain Gaming</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Proposed Session Title *</label>
                  <input
                    type="text"
                    required
                    name="pitchTitle"
                    value={formData.pitchTitle}
                    onChange={handleChange}
                    placeholder="e.g. Overcoming Fragmented Mobile Monetization Mechanics"
                    className="w-full bg-wagcon-bg border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Session Abstract / Pitch Outline *</label>
                  <textarea
                    required
                    name="pitchDesc"
                    rows={5}
                    value={formData.pitchDesc}
                    onChange={handleChange}
                    placeholder="Briefly outline what the session will cover, who the target audience is, and the key takeaways for delegates..."
                    className="w-full bg-wagcon-bg border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 font-button text-xs uppercase tracking-wider font-bold bg-primary text-black py-4 hover:bg-primary/85 transition-all disabled:opacity-50 rounded-sm"
                >
                  {submitting ? "SUBMITTING PROPOSAL..." : <>SUBMIT SPEAKING PROPOSAL <Send size={14} /></>}
                </button>
              </form>
            )}
            
            <div className="mt-8 text-center text-xs text-white/40 font-body">
              For programming questions, reach out to <a href="mailto:info@tuaevents.org" className="text-primary hover:underline font-bold">info@tuaevents.org</a>.
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
