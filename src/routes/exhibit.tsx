import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/wagcon/StubPage";
import { Accent } from "@/components/wagcon/ui/primitives";

export const Route = createFileRoute("/exhibit")({
  head: () => ({
    meta: [
      { title: "Exhibit & Sponsor — WAGCON 2027" },
      { name: "description", content: "Your gateway to West Africa's gaming industry. Sponsorship and exhibition opportunities." },
      { property: "og:title", content: "Exhibit & Sponsor — WAGCON 2027" },
      { property: "og:description", content: "Reach studio founders, publishers, investors, and platform leads across three Lagos venues." },
      { property: "og:url", content: "/exhibit" },
    ],
    links: [{ rel: "canonical", href: "/exhibit" }],
  }),
  component: () => (
    <StubPage
      eyebrow="EXHIBIT & SPONSOR"
      title={<>Your gateway to West Africa's <Accent>gaming industry</Accent>.</>}
      description="Sponsorship tiers, exhibition packages, and venue naming rights for WAGCON 2027. Full deck and pricing available on request."
    />
  ),
});
