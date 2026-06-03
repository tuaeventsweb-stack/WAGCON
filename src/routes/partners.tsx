import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/wagcon/StubPage";
import { Accent } from "@/components/wagcon/ui/primitives";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — WAGCON 2027" },
      { name: "description", content: "The studios, platforms, and brands backing West Africa's gaming future." },
      { property: "og:title", content: "Partners — WAGCON 2027" },
      { property: "og:description", content: "All WAGCON partners, past and current, by tier." },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: () => (
    <StubPage
      eyebrow="OUR PARTNERS"
      title={<>Backed by the brands powering <Accent>African gaming</Accent>.</>}
      description="Title, Premier, Gold, Silver, and Bronze partners across all WAGCON editions. Full directory launching soon."
    />
  ),
});
