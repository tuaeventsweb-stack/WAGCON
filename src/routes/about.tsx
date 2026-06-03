import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/wagcon/StubPage";
import { Accent } from "@/components/wagcon/ui/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WAGCON 2027" },
      { name: "description", content: "WAGCON is organized by T.U.A Events — West Africa's gaming industry convention." },
      { property: "og:title", content: "About — WAGCON 2027" },
      { property: "og:description", content: "The story of WAGCON and the team behind it." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <StubPage
      eyebrow="ABOUT WAGCON"
      title={<>West Africa's gaming industry, <Accent>on one stage</Accent>.</>}
      description="WAGCON is organized by T.U.A Events — the team behind ABDS and West Africa's most ambitious B2B convention slate. Full story coming soon."
    />
  ),
});
