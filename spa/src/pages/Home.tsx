
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

export default function HomePage() {
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
