import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, BtnPrimary } from "@/components/wagcon/ui/primitives";

export function StubPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white">
      <Nav />
      <main className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
        <div className="wagcon-hero-grid absolute inset-0" />
        <div className="wagcon-hero-glow absolute inset-0" />
        <div className="relative mx-auto w-full max-w-3xl px-6 py-24 text-center md:px-10">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle className="mt-4">{title}</SectionTitle>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-wagcon-muted">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BtnPrimary href="/tickets">Get Your Pass</BtnPrimary>
            <Link to="/" className="text-sm text-wagcon-green hover:underline">
              ← Back to home
            </Link>
          </div>
          <p className="mt-12 inline-block rounded-full border border-wagcon-green-border bg-wagcon-green-dim px-4 py-1.5 text-[11px] font-bold uppercase text-wagcon-green" style={{ letterSpacing: "0.10em" }}>
            Full page coming soon
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
