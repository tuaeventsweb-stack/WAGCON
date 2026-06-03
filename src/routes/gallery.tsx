import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/wagcon/StubPage";
import { Accent } from "@/components/wagcon/ui/primitives";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — WAGCON 2027" },
      { name: "description", content: "Highlights from past WAGCON editions in Lagos." },
      { property: "og:title", content: "Gallery — WAGCON 2027" },
      { property: "og:description", content: "Event photography from WAGCON 2026." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <StubPage
      eyebrow="GALLERY"
      title={<>See what happened at <Accent>WAGCON 2026</Accent>.</>}
      description="Photos from the convention floor, the Guild dinner, the Arena, and the Respawn after party. Full gallery loading soon."
    />
  ),
});
