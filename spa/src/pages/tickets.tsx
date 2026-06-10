
import { useEffect } from "react";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent } from "@/components/wagcon/ui/primitives";
import { ExternalLink, Loader2 } from "lucide-react";



export default function RedirectTicketsPage() {
  useEffect(() => {
    // Redirect to the external ticket link immediately
    window.location.href = "https://app.eventpadi.com/wagcon";
  }, []);

  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white flex flex-col justify-between">
      <Nav />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary animate-spin">
            <Loader2 size={32} />
          </div>
          <div className="space-y-2">
            <Eyebrow>SECURE YOUR PASS</Eyebrow>
            <h1 className="font-heading text-2xl md:text-3xl font-black text-white">
              Redirecting to <Accent>Eventpadi</Accent>...
            </h1>
            <p className="text-sm text-white/50 font-body leading-relaxed">
              We are forwarding you to the official ticketing portal. If you are not redirected within a few seconds, click the link below:
            </p>
          </div>
          <div>
            <a
              href="https://app.eventpadi.com/wagcon"
              className="inline-flex items-center gap-2 font-button text-xs uppercase tracking-wider font-bold bg-primary text-black px-8 py-4 hover:bg-primary/85 transition-all rounded-sm"
            >
              Go to Ticket Portal <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
