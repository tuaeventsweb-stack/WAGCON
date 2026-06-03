import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/wagcon/StubPage";
import { Accent } from "@/components/wagcon/ui/primitives";

export const Route = createFileRoute("/venues")({
  head: () => ({
    meta: [
      { title: "Venues — WAGCON 2027" },
      { name: "description", content: "Three Lagos venues across four days: The Guild, The Arena, and The Respawn." },
      { property: "og:title", content: "Venues — WAGCON 2027" },
      { property: "og:description", content: "Four Points by Sheraton · Lagos Oriental Hotel · Fahrenheit" },
      { property: "og:url", content: "/venues" },
    ],
    links: [{ rel: "canonical", href: "/venues" }],
  }),
  component: () => (
    <StubPage
      eyebrow="THE THREE VENUES"
      title={<>Four Days. <Accent>Three Venues</Accent>. One Lagos.</>}
      description="The Guild at Four Points by Sheraton · The Arena at Lagos Oriental Hotel · The Respawn at Fahrenheit. Detailed venue pages launching soon."
    />
  ),
});
