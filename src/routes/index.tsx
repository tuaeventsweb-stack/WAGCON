import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WAGCON 2027 — West Africa Gaming Convention · Lagos" },
      { name: "description", content: "Four days. Two venues. The only gaming convention built for West Africa's fastest-growing digital industry. 28 April – 1 May 2027, Lagos. Co-located with ABDS 2027 - Africa Blockchain Week." },
      { property: "og:title", content: "WAGCON 2027 — West Africa Gaming Convention" },
      { property: "og:description", content: "Lagos · 28 April – 1 May 2027 · The Arena · After Party at Fahrenheit · Co-located with ABDS 2027 - Africa Blockchain Week" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});


import { Nav } from "@/components/wagcon/Nav";
import { TopBar } from "@/components/wagcon/TopBar";
import { Footer } from "@/components/wagcon/Footer";
import {
  Hero,
  StatsBar,
  About,
  Venues,
  EventEssentials,
  Speakers,
  Lookback,
  ContentTracks,
  AudienceInsights,
  WhoYouWillMeet,
  LogoWall,
  WhyExhibit,
  WhyWestAfrica,
  PassTiers,
  FinalCTA,
} from "@/components/wagcon/sections";
import { useEffect } from "react";

function Index() {
  useEffect(() => {
    document.title = "WAGCON 2027 — West Africa Gaming Convention · Lagos";
  }, []);
  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Venues />
        <EventEssentials />
        <Speakers />
        <Lookback />
        <ContentTracks />
        <AudienceInsights />
        <WhoYouWillMeet />
        <LogoWall />
        <WhyExhibit />
        <WhyWestAfrica />
        <PassTiers />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
