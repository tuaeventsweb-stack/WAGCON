
import { useState } from "react";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent, Section, Card } from "@/components/wagcon/ui/primitives";
import { Mail, Phone, MapPin, Send, ShieldCheck, ExternalLink, Globe } from "lucide-react";



export default function ContactPage() {
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
      role: "Sponsorship & Exhibitions Enquiry",
      email: "jidenna@tuaevents.org",
      phone: "+234 (803) 971 7998",
      image: "/team/jidenna-iwuno.jpg",
      tag: "Sponsorships",
    },
    {
      name: "Queeneth Clinton",
      role: "Speaker & Media Enquiry",
      email: "queeneth@tuaevents.org",
      phone: "+234 (809) 567 8301",
      image: "/team/queeneth-clinton.jpg",
      tag: "Speakers & Media",
    },
    {
      name: "Jerome Miller",
      role: "International Sales & Partnerships",
      email: "sales@tuaevents.org",
      phone: "+1 (912) 695-5453",
      image: "/team/jerome-miller.jpg",
      tag: "International",
    },
    {
      name: "Gigi Ait-Messaoud",
      role: "International Sales & Partnerships",
      email: "sales@tuaevents.org",
      phone: "+1 (678) 907-6692",
      image: "/team/gigi-ait-messaoud.jpg",
      tag: "International",
    },
    {
      name: "David Ogbor",
      role: "Media Partnerships",
      email: "info@tuaevents.org",
      phone: "+234 (915) 461 1827",
      image: "/team/david-ogbor.jpg",
      tag: "Media",
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
              Have questions about registration, exhibition booths, sponsorship, or speaking slots? Get in touch with our team leads and representatives directly.
            </p>
          </div>
        </section>

        {/* Team Representatives Grid */}
        <Section bg="bg" className="border-b border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>DIRECT CONTACTS</Eyebrow>
            <SectionTitle className="text-3xl md:text-4xl font-black mt-2">
              Key <Accent>Representatives</Accent>
            </SectionTitle>
            <p className="font-body text-sm text-white/60 mt-3">
              Reach out directly to our dedicated leads for partnerships, speaking engagements, and event inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="group relative border-2 border-white/10 bg-wagcon-bg3/50 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.18)] transition-all duration-300 p-7 flex flex-col justify-between overflow-hidden rounded-sm"
              >
                {/* Accent glow corner */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-all pointer-events-none" />
                
                <div>
                  <div className="flex items-center gap-5 mb-5">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden border-2 border-primary/40 group-hover:border-primary group-hover:scale-105 transition-all duration-300 bg-black shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-105 transition-all duration-300"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-xs mb-1.5">
                        {member.tag}
                      </span>
                      <h3 className="font-heading text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight truncate">
                        {member.name}
                      </h3>
                      <p className="font-body text-xs md:text-sm text-white/70 mt-1 leading-snug">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-2 border-t border-white/10 space-y-2.5 font-body text-xs md:text-sm text-white/80">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="flex items-center gap-3 py-2 px-3 bg-white/5 hover:bg-primary hover:text-black border border-white/10 hover:border-primary transition-all rounded-xs group/link"
                  >
                    <Mail size={16} className="text-primary group-hover/link:text-black shrink-0 transition-colors" />
                    <span className="truncate font-medium">{member.email}</span>
                  </a>
                  <a 
                    href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`} 
                    className="flex items-center gap-3 py-2 px-3 bg-white/5 hover:bg-white/15 border border-white/10 transition-all rounded-xs group/link"
                  >
                    <Phone size={16} className="text-primary shrink-0" />
                    <span className="font-medium">{member.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Form & Office Section */}
        <Section bg="bg2">
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

            {/* Organizer Office Column */}
            <div className="lg:col-span-5 space-y-8">
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
                      <h4 className="font-heading text-xs font-bold uppercase text-white">General Inquiries</h4>
                      <a href="tel:+2349154611827" className="text-xs text-white/60 hover:text-white font-body">+234 915 461 1827</a>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Event Location Card */}
              <div className="p-6 border border-white/10 bg-wagcon-bg3/20 rounded-sm">
                <h4 className="font-heading text-sm font-bold text-white mb-2">Hosted by T.U.A Events</h4>
                <p className="text-xs text-white/60 font-body leading-relaxed">
                  T.U.A Events is the premier event production group spearheading Africa's technological, gaming, and interactive media revolutions.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
