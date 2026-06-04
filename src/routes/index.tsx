import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/wagcon/Nav";
import { TopBar } from "@/components/wagcon/TopBar";
import { Footer } from "@/components/wagcon/Footer";
import {
  Hero,
  StatsBar,
  About,
  Venues,
  Lookback,
  EventEssentials,
  Speakers,
  ContentTracks,
  AudienceInsights,
  WhoYouWillMeet,
  LogoWall,
  Testimonials,
  WhyExhibit,
  WhyWestAfrica,
  PartnersPreview,
  PassTiers,
  FinalCTA,
} from "@/components/wagcon/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WAGCON 2027 — West Africa Gaming Convention · Lagos" },
      { name: "description", content: "Four days. Three venues. The only gaming convention built for West Africa's fastest-growing digital industry. 28–31 April 2027, Lagos." },
      { property: "og:title", content: "WAGCON 2027 — West Africa Gaming Convention" },
      { property: "og:description", content: "Lagos · 28–31 April 2027 · The Guild · The Arena · The Respawn" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Venues />
        <Lookback />
        <EventEssentials />
        <Speakers />
        <ContentTracks />
        <AudienceInsights />
        <WhoYouWillMeet />
        <LogoWall />
        <Testimonials />
        <WhyExhibit />
        <WhyWestAfrica />
        <PartnersPreview />
        <PassTiers />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
