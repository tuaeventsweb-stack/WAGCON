import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/wagcon/StubPage";
import { Accent } from "@/components/wagcon/ui/primitives";

export const Route = createFileRoute("/tickets")({
  head: () => ({
    meta: [
      { title: "Tickets & Passes — WAGCON 2027" },
      { name: "description", content: "Spectator, Player, and Champion passes — plus Squad and Guild group bundles." },
      { property: "og:title", content: "Tickets & Passes — WAGCON 2027" },
      { property: "og:description", content: "Choose your role at WAGCON 2027. Early bird pricing active." },
      { property: "og:url", content: "/tickets" },
    ],
    links: [{ rel: "canonical", href: "/tickets" }],
  }),
  component: () => (
    <StubPage
      eyebrow="GET YOUR PASS"
      title={<>Choose your role at <Accent>WAGCON 2027</Accent>.</>}
      description="Spectator (free) · Player (₦185,000) · Champion (₦650,000) · plus Squad and Guild group bundles. Pass details on the homepage; checkout launching soon."
    />
  ),
});
