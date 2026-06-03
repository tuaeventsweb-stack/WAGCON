import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/wagcon/StubPage";
import { Accent } from "@/components/wagcon/ui/primitives";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — WAGCON 2027" },
      { name: "description", content: "The voices shaping West Africa's gaming future." },
      { property: "og:title", content: "Speakers — WAGCON 2027" },
      { property: "og:description", content: "Studio founders, publishers, investors, and gaming leaders at WAGCON 2027." },
      { property: "og:url", content: "/speakers" },
    ],
    links: [{ rel: "canonical", href: "/speakers" }],
  }),
  component: () => (
    <StubPage
      eyebrow="WHO TAKES THE STAGE"
      title={<>The voices shaping West Africa's <Accent>gaming future</Accent>.</>}
      description="Filterable speaker grid — Game Development, Esports, Web3 Gaming, Investment, Publishing, AI, Policy, Creator Economy. Full list coming soon."
    />
  ),
});
