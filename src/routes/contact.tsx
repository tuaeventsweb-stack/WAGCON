import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/wagcon/StubPage";
import { Accent } from "@/components/wagcon/ui/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WAGCON 2027" },
      { name: "description", content: "Speak directly to the WAGCON team about tickets, exhibiting, or speaking." },
      { property: "og:title", content: "Contact — WAGCON 2027" },
      { property: "og:description", content: "Get in touch with the WAGCON team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <StubPage
      eyebrow="CONTACT"
      title={<>Speak directly to <Accent>our team</Accent>.</>}
      description="hello@wagcon.ng · exhibit@wagcon.ng · WhatsApp lines on the homepage. Full contact form launching soon."
    />
  ),
});
