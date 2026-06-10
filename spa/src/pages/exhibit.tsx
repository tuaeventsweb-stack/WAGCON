
import { useState } from "react";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent, Section, Card } from "@/components/wagcon/ui/primitives";
import { Building2, Landmark, Check, ShieldCheck, Mail, Send, Award, Phone, ExternalLink } from "lucide-react";





export default function ExhibitPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    package: "gold",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        package: "gold",
        message: "",
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
            <Eyebrow className="mb-4">SPONSORSHIP & EXHIBITIONS</Eyebrow>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
              Partner with <Accent>WAGCON 2027</Accent>.
            </h1>
            <p className="text-lg text-white/60 font-body max-w-2xl mx-auto leading-relaxed">
              Exhibiting at WAGCON places your studio, brand, or platform directly in front of West Africa's B2B gaming buyers, executives, publishers, and investors.
            </p>
          </div>
        </section>

        {/* Stats & Why Exhibit */}
        <Section bg="bg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Eyebrow>WHY EXHIBIT?</Eyebrow>
              <SectionTitle className="mb-6">The Gateway to Africa's B2B Gaming Market</SectionTitle>
              <p className="text-white/70 font-body text-sm md:text-base leading-relaxed mb-6">
                WAGCON is the region's largest gaming ecosystem platform. Whether you are launching a new game, searching for development talent, scaling a distribution platform, or seeking VC funding, our B2B exhibition floor is designed to generate business.
              </p>
              
              <ul className="space-y-4 font-body text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5 shrink-0">
                    <Check size={12} />
                  </span>
                  <span><strong>Build Authority:</strong> Showcase your games or technology on West Africa's primary stage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5 shrink-0">
                    <Check size={12} />
                  </span>
                  <span><strong>Unlock Partnerships:</strong> Meet international publishers, telecom operators, and local distributors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5 shrink-0">
                    <Check size={12} />
                  </span>
                  <span><strong>Pitch to Investors:</strong> Gain dedicated exposure to early-stage technology and entertainment VCs.</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-wagcon-bg3/50 border border-white/5 rounded-sm text-center">
                <h3 className="text-3xl font-heading font-black text-primary mb-1">120+</h3>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-body">Exhibiting Brands</p>
              </div>
              <div className="p-6 bg-wagcon-bg3/50 border border-white/5 rounded-sm text-center">
                <h3 className="text-3xl font-heading font-black text-primary mb-1">2,400+</h3>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-body">Expected Delegates</p>
              </div>
              <div className="p-6 bg-wagcon-bg3/50 border border-white/5 rounded-sm text-center">
                <h3 className="text-3xl font-heading font-black text-primary mb-1">25+</h3>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-body">Countries Represented</p>
              </div>
              <div className="p-6 bg-wagcon-bg3/50 border border-white/5 rounded-sm text-center">
                <h3 className="text-3xl font-heading font-black text-primary mb-1">48%</h3>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-body">Investment Mandate</p>
              </div>
            </div>
          </div>

        </Section>

        {/* Eventpadi Sponsor Form CTA */}
        <Section bg="bg2" className="border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 md:p-12 border border-primary/20 bg-gradient-to-b from-wagcon-bg3/50 to-wagcon-bg3/10 rounded-sm space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
                <Building2 size={32} />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white">Sponsorship & Exhibitor Registration</h3>
              <p className="text-sm md:text-base text-white/70 font-body max-w-lg mx-auto leading-relaxed">
                WAGCON 2027 sponsorship applications and exhibition booth reservations are managed externally on our official platform, Eventpadi. 
              </p>
              <div className="pt-4">
                <a
                  href="https://app.eventpadi.com/wagcon/f/WAGCON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-button text-sm uppercase tracking-wider font-bold bg-primary text-black px-10 py-5 hover:bg-primary/85 transition-all shadow-[0_0_30px_rgba(34,197,94,0.25)] rounded-sm"
                >
                  Open Registration Form <ExternalLink size={16} />
                </a>
              </div>
            </div>
            
            <div className="mt-8 text-center text-xs text-white/40 font-body">
              For immediate assistance, contact us directly at <a href="mailto:info@tuaevents.org" className="text-primary hover:underline font-bold">info@tuaevents.org</a>.
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
