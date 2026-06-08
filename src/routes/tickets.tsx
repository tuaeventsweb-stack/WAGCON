import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent, Section, Card } from "@/components/wagcon/ui/primitives";
import { Check, ShieldCheck, CreditCard, ArrowRight, User, Briefcase, Mail, ArrowLeft, Barcode } from "lucide-react";

export const Route = createFileRoute("/tickets")({
  head: () => ({
    meta: [
      { title: "Tickets & Passes — WAGCON 2027" },
      { name: "description", content: "Secure your pass for WAGCON 2027. Early bird registration is open for Spectator, Player, and Champion passes." },
      { property: "og:title", content: "Tickets & Passes — WAGCON 2027" },
      { property: "og:description", content: "Select your ticket level and register for the B2B gaming convention. 28–30 April 2027, Lagos." },
      { property: "og:url", content: "/tickets" },
    ],
    links: [{ rel: "canonical", href: "/tickets" }],
  }),
  component: TicketsPage,
});

type Pass = {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  originalPrice: string;
  tag: string;
  color: string;
  features: string[];
};

const passes: Pass[] = [
  {
    id: "spectator",
    name: "SPECTATOR PASS",
    price: "₦5,000",
    priceNum: 5000,
    originalPrice: "₦10,000",
    tag: "EXPO & INDIE ZONE ONLY",
    color: "border-white/10 text-white/70",
    features: [
      "Access to Exhibition Floor (28–29 April)",
      "Access to Indie Developer Showcase Zone",
      "Spectator seating at esports tournament brackets",
      "Standard convention delegate kit",
    ],
  },
  {
    id: "player",
    name: "PLAYER PASS",
    price: "₦25,000",
    priceNum: 25000,
    originalPrice: "₦40,000",
    tag: "CONFERENCE & NETWORKING",
    color: "border-primary/30 text-primary",
    features: [
      "Access to Exhibition Floor & Indie Zone",
      "Full access to B2B Conference Keynotes & Panels",
      "Entry to Silent Conference (Tracks A & B)",
      "Access to official WAGCON Networking App",
      "Ticket to official WAGCON × ABDS After Party (30 April)",
      "Premium convention delegate kit",
    ],
  },
  {
    id: "champion",
    name: "CHAMPION PASS",
    price: "₦150,000",
    priceNum: 150000,
    originalPrice: "₦250,000",
    tag: "VIP EXPERIENCE & ACCESS",
    color: "border-purple-500/30 text-purple-400 animate-pulse",
    features: [
      "All features of Player & Spectator Passes",
      "VIP Fast-track registration line",
      "Front-row reserved seating at Main Stage",
      "Exclusive access to WAGCON VIP Networking Brunch (30 April)",
      "VIP priority section at After Party at Fahrenheit",
      "Post-event delegate directory and video recordings",
      "Executive level WAGCON gift pack",
    ],
  },
];

function TicketsPage() {
  const [step, setStep] = useState(1);
  const [selectedPass, setSelectedPass] = useState<Pass>(passes[1]); // default player
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const handleSelectPass = (pass: Pass) => {
    setSelectedPass(pass);
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      // Generate mock ticket number
      const code = "WAG-" + Math.floor(100000 + Math.random() * 900000);
      setTicketNumber(code);
      setSubmitting(false);
      setStep(3);
    }, 1500);
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
    });
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
            <Eyebrow className="mb-4">REGISTRATION IS OPEN</Eyebrow>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
              Get Your <Accent>WAGCON Pass</Accent>.
            </h1>
            <p className="text-lg text-white/60 font-body max-w-2xl mx-auto leading-relaxed">
              Three days. Two venues. Secure your early bird passes to join West Africa's flagship B2B gaming convention. Co-located with ABDS 2027.
            </p>
          </div>
        </section>

        {/* Wizard Container */}
        <Section bg="bg">
          <div className="max-w-5xl mx-auto">
            {/* Step Indicators */}
            <div className="flex justify-center items-center gap-4 mb-12 border-b border-white/5 pb-6">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${step === 1 ? "text-primary" : "text-white/40"}`}>
                1. Select Pass
              </span>
              <div className="w-8 h-[1px] bg-white/10" />
              <span className={`text-[10px] font-bold uppercase tracking-wider ${step === 2 ? "text-primary" : "text-white/40"}`}>
                2. Attendee Details
              </span>
              <div className="w-8 h-[1px] bg-white/10" />
              <span className={`text-[10px] font-bold uppercase tracking-wider ${step === 3 ? "text-primary" : "text-white/40"}`}>
                3. Order Confirmed
              </span>
            </div>

            {/* STEP 1: Select Pass */}
            {step === 1 && (
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {passes.map((pass) => (
                    <div
                      key={pass.id}
                      onClick={() => handleSelectPass(pass)}
                      className={`relative border p-8 bg-wagcon-bg3/40 rounded-sm cursor-pointer transition-all duration-300 ${
                        selectedPass.id === pass.id
                          ? "border-primary bg-primary/[0.03] scale-[1.02] shadow-[0_0_20px_rgba(40,223,128,0.15)]"
                          : "border-white/5 hover:border-white/20"
                      }`}
                    >
                      {selectedPass.id === pass.id && (
                        <div className="absolute top-4 right-4 text-primary bg-primary/10 p-1.5 rounded-full">
                          <Check size={14} />
                        </div>
                      )}
                      
                      <div className="mb-6">
                        <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider block mb-2">{pass.name}</span>
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-3xl font-heading font-black text-white">{pass.price}</h3>
                          <span className="text-xs text-white/40 line-through font-body">{pass.originalPrice}</span>
                        </div>
                        <p className="text-[10px] font-body uppercase text-primary font-bold mt-1 tracking-wider">
                          {pass.tag}
                        </p>
                      </div>

                      <ul className="space-y-3 font-body text-xs text-white/70 border-t border-white/5 pt-4">
                        {pass.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check size={12} className="text-primary shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleNextStep}
                    className="flex items-center gap-2 font-button text-xs uppercase tracking-wider font-bold bg-primary text-black px-10 py-4 hover:bg-primary/85 transition-all"
                  >
                    CONTINUE TO REGISTRATION <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Attendee Details */}
            {step === 2 && (
              <div className="max-w-2xl mx-auto">
                <Card className="bg-wagcon-bg3/30 border-white/5 p-8">
                  <div className="mb-6 border-b border-white/5 pb-4 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-white/50 uppercase tracking-widest font-body">Selected Pass</span>
                      <h4 className="font-heading text-lg font-black text-white">{selectedPass.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-white/50 uppercase tracking-widest font-body">Subtotal</span>
                      <h4 className="font-heading text-lg font-black text-primary">{selectedPass.price}</h4>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">FullName *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 text-white/30" size={16} />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g. Queeneth Clinton"
                          className="w-full bg-wagcon-bg border border-white/10 pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Work Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 text-white/30" size={16} />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="e.g. queeneth@tuaevents.org"
                          className="w-full bg-wagcon-bg border border-white/10 pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Company / Studio</label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-3.5 text-white/30" size={16} />
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                            placeholder="e.g. T.U.A Events"
                            className="w-full bg-wagcon-bg border border-white/10 pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Job Title / Role</label>
                        <input
                          type="text"
                          value={formData.role}
                          onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                          placeholder="e.g. Product Manager"
                          className="w-full bg-wagcon-bg border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="flex items-center gap-1.5 font-button text-xs uppercase tracking-wider font-bold text-white/60 hover:text-white transition-colors"
                      >
                        <ArrowLeft size={14} /> Back
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex items-center gap-2 font-button text-xs uppercase tracking-wider font-bold bg-primary text-black px-10 py-4 hover:bg-primary/85 transition-all disabled:opacity-50"
                      >
                        {submitting ? "CONFIRMING ORDER..." : <>CONFIRM & REGISTER <CreditCard size={14} /></>}
                      </button>
                    </div>
                  </form>
                </Card>
              </div>
            )}

            {/* STEP 3: Order Confirmed */}
            {step === 3 && (
              <div className="max-w-md mx-auto space-y-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2 animate-bounce">
                  <ShieldCheck size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-black text-white">Pass Secured Successfully</h3>
                  <p className="text-sm text-white/60 font-body">
                    We've emailed your confirmation and QR ticket to **{formData.email}**. Present your digital badge at registration on Day 1.
                  </p>
                </div>

                {/* Printable Ticket Mockup */}
                <div className="relative border border-primary/20 bg-gradient-to-b from-wagcon-bg3 to-black p-6 rounded-sm text-left overflow-hidden">
                  <div className="absolute inset-0 wagcon-hero-grid opacity-5" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest">WAGCON 2027 TICKET</span>
                    <span className="text-[9px] font-body bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm uppercase">{selectedPass.id}</span>
                  </div>

                  <div className="space-y-4 border-b border-dashed border-white/10 pb-6 mb-6">
                    <div>
                      <span className="text-[8px] text-white/40 uppercase tracking-wider block">DELEGATE NAME</span>
                      <span className="text-sm font-heading font-bold text-white uppercase">{formData.name}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[8px] text-white/40 uppercase tracking-wider block">ORGANIZATION</span>
                        <span className="text-xs font-body text-white/80">{formData.company || "Independent"}</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-white/40 uppercase tracking-wider block">ROLE</span>
                        <span className="text-xs font-body text-white/80">{formData.role || "Delegate"}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[8px] text-white/40 uppercase tracking-wider block">DATE</span>
                        <span className="text-xs font-body text-white/80">28–30 April 2027</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-white/40 uppercase tracking-wider block">VENUE</span>
                        <span className="text-xs font-body text-white/80">Lagos Oriental Hotel</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[8px] text-white/40 uppercase tracking-wider block">TICKET ID</span>
                      <span className="text-xs font-mono font-bold text-white tracking-widest">{ticketNumber}</span>
                    </div>
                    <div className="text-white/40 hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer">
                      <Barcode size={32} />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="font-button text-[10px] uppercase tracking-wider font-bold text-primary hover:text-white transition-all"
                  >
                    [ Register another delegate ]
                  </button>
                </div>
              </div>
            )}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
