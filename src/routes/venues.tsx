import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/wagcon/StubPage";
import { Accent } from "@/components/wagcon/ui/primitives";

export const Route = createFileRoute("/venues")({
  head: () => ({
    meta: [
      { title: "Venues — WAGCON 2027" },
      { name: "description", content: "Two Lagos venues across three days: The Arena at Lagos Oriental Hotel and After Party at Fahrenheit." },
      { property: "og:title", content: "Venues — WAGCON 2027" },
      { property: "og:description", content: "Lagos Oriental Hotel · Fahrenheit · 29 April – 1 May 2027" },
      { property: "og:url", content: "/venues" },
    ],
    links: [{ rel: "canonical", href: "/venues" }],
  }),
  component: () => (
    <StubPage
      eyebrow="THE TWO VENUES"
      title={<>Three Days. <Accent>Two Venues</Accent>. One Lagos.</>}
      description="The Arena at Lagos Oriental Hotel · After Party at Fahrenheit. Detailed venue pages launching soon."
    />
  ),
});
