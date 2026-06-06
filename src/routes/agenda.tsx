import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/wagcon/StubPage";
import { Accent } from "@/components/wagcon/ui/primitives";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda — WAGCON 2027" },
      { name: "description", content: "Three days, two venues. Every session, every stage, every tournament bracket." },
      { property: "og:title", content: "Agenda — WAGCON 2027" },
      { property: "og:description", content: "The complete WAGCON 2027 programme, 29 April – 1 May." },
      { property: "og:url", content: "/agenda" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: () => (
    <StubPage
      eyebrow="THE PROGRAMME"
      title={<>The complete <Accent>WAGCON 2027</Accent> programme.</>}
      description="Three days across two venues — every session, every stage, every tournament bracket. Full agenda dropping soon."
    />
  ),
});
