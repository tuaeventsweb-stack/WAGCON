import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — WAGCON 2027" },
      { name: "description", content: "Get in touch with WAGCON 2027 organizers. Contact us for sponsorships, speaking opportunities, and tickets." },
      { property: "og:title", content: "Contact Us — WAGCON 2027" },
      { property: "og:description", content: "Contact information for T.U.A Events and key team representatives of WAGCON." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});


import { useState } from "react";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent, Section, Card } from "@/components/wagcon/ui/primitives";
import { Mail, Phone, MapPin, Send, ShieldCheck, ExternalLink, Globe } from "lucide-react";



function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
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
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "general",
        message: "",
      });
    }, 1200);
  };

  const teamMembers = [
    {
      name: "Jidenna Iwuno",
      role: "Sponsorship & Partnerships",
      email: "jidennaiwino@tuaevents.org",
      phone: "+234 915 461 1827",
    },
    {
      name: "Queeneth Clinton",
      role: "Delegate & Tickets",
      email: "queeneth@tuaevents.org",
      phone: "+234 915 461 1827",
    },
    {
      name: "David Ogbor",
      role: "Exhibition & Operations",
      email: "info@tuaevents.org",
      phone: "+234 915 461 1827",
    },
  ];

  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white">
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5 bg-wagcon-bg2">
          <div className="absolute inset-0 wagcon-hero-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
            <Eyebrow className="mb-4">CONNECT WITH THE TEAM</Eyebrow>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
              Contact <Accent>WAGCON</Accent>.
            </h1>
            <p className="text-lg text-white/60 font-body max-w-2xl mx-auto leading-relaxed">
              Have questions about registration, exhibition booths, or speaking slots? Get in touch with the T.U.A Events organizing committee.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <Section bg="bg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="mb-4">
                <Eyebrow>SEND A MESSAGE</Eyebrow>
                <SectionTitle className="text-2xl md:text-3xl font-extrabold mt-1">Get in Touch Directly</SectionTitle>
              </div>

              {success ? (
                <div className="p-8 border border-primary/20 bg-primary/5 rounded-sm space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">Message Dispatched</h3>
                  <p className="text-xs md:text-sm text-white/70 font-body leading-relaxed">
                    Thank you! Your message has been routed to the appropriate team member. We will review your inquiry and get back to you at the email address provided.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="font-button text-[10px] uppercase tracking-wider font-bold text-primary hover:text-white transition-colors"
                  >
                    [ Send Another Message ]
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
                        placeholder="e.g. Queeneth Clinton"
                        className="w-full bg-wagcon-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Email Address *</label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@company.com"
                        className="w-full bg-wagcon-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Inquiry Type</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-wagcon-bg border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body"
                    >
                      <option value="general">General Inquiry & Delegates</option>
                      <option value="sponsorship">Sponsorship & Exhibition Booths</option>
                      <option value="speaking">Speaking Proposals</option>
                      <option value="press">Press & Media Partnerships</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">Message *</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message details here..."
                      className="w-full bg-wagcon-bg border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary rounded-sm font-body resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 font-button text-xs uppercase tracking-wider font-bold bg-primary text-black py-4 hover:bg-primary/85 transition-all disabled:opacity-50 rounded-sm"
                  >
                    {submitting ? "SENDING MESSAGE..." : <>SEND INQUIRY <Send size={14} /></>}
                  </button>
                </form>
              )}
            </div>

            {/* Contacts Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Host & Location */}
              <div>
                <Eyebrow className="mb-3">ORGANIZER OFFICE</Eyebrow>
                <Card className="bg-wagcon-bg3/30 border-white/5 space-y-4">
                  <div className="flex items-center gap-3 text-white/85">
                    <MapPin size={18} className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-heading text-xs font-bold uppercase text-white">Event Venue</h4>
                      <p className="text-xs text-white/60 font-body">Lagos Oriental Hotel, Victoria Island, Lagos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-white/85">
                    <Mail size={18} className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-heading text-xs font-bold uppercase text-white">General Email</h4>
                      <a href="mailto:info@tuaevents.org" className="text-xs text-primary hover:underline font-body">info@tuaevents.org</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-white/85">
                    <Phone size={18} className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-heading text-xs font-bold uppercase text-white">Contact Phone</h4>
                      <a href="tel:+2349154611827" className="text-xs text-white/60 hover:text-white font-body">+234 915 461 1827</a>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Individual Contacts */}
              <div className="space-y-4">
                <Eyebrow>KEY REPRESENTATIVES</Eyebrow>
                
                {teamMembers.map((member) => (
                  <div 
                    key={member.name}
                    className="p-5 border border-white/5 bg-wagcon-bg3/25 rounded-sm hover:border-primary/20 transition-all"
                  >
                    <span className="text-[9px] uppercase font-bold text-primary tracking-widest block mb-1">{member.role}</span>
                    <h4 className="font-heading text-sm font-bold text-white mb-2">{member.name}</h4>
                    
                    <div className="space-y-1.5 font-body text-xs text-white/50">
                      <div className="flex items-center gap-2">
                        <Mail size={12} className="text-white/30" />
                        <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">{member.email}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={12} className="text-white/30" />
                        <a href={`tel:${member.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">{member.phone}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
