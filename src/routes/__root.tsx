import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "WAGCON 2027 — West Africa Gaming Convention · Lagos" },
      {
        name: "description",
        content:
          "West Africa's premier gaming convention. 28 April – 1 May 2027, Lagos, Nigeria. Four days, three venues, 2,400+ delegates, 120+ exhibitors. Co-located with ABDS 2027 - Africa Blockchain Week.",
      },
      {
        name: "keywords",
        content:
          "WAGCON 2027, West Africa Gaming Convention, Africa gaming convention, gaming event Lagos, esports tournament Africa, game development Africa, African game developers, gaming exhibition Nigeria, TUA Events, ABDS 2027",
      },
      { name: "author", content: "T.U.A Events" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      
      /* OpenGraph / Facebook */
      { property: "og:site_name", content: "WAGCON 2027" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "WAGCON 2027 — West Africa Gaming Convention · Lagos" },
      { property: "og:description", content: "Four days. Three venues. 28 April – 1 May 2027, Lagos, Nigeria. Early bird sponsorship & exhibition pricing now live — save up to 30%." },
      { property: "og:image", content: "https://wagconvention.com/about-audience.jpg" },

      /* Twitter Cards */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@WAGCONofficial" },
      { name: "twitter:title", content: "WAGCON 2027 — West Africa Gaming Convention" },
      { name: "twitter:description", content: "Africa's flagship gaming & esports convention in Lagos, Nigeria. Early bird offer active — save up to 30% on sponsorship & exhibition." },
      { name: "twitter:image", content: "https://wagconvention.com/about-audience.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Event",
              "@id": "https://wagconvention.com/#event",
              "name": "WAGCON 2027 — West Africa Gaming Convention",
              "alternateName": "West Africa Gaming Week 2027",
              "description": "Africa's flagship gaming, esports, game publishing, and interactive entertainment convention. Held over 4 days across 3 venues in Victoria Island, Lagos, Nigeria, co-located with ABDS 2027 - Africa Blockchain Week.",
              "startDate": "2027-04-28T09:00:00+01:00",
              "endDate": "2027-05-01T23:00:00+01:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": [
                {
                  "@type": "Place",
                  "name": "Four Points by Sheraton Lagos",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Plot 9/10 Block 2, Oniru Chieftaincy Estate",
                    "addressLocality": "Victoria Island",
                    "addressRegion": "Lagos",
                    "addressCountry": "NG"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Lagos Oriental Hotel",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "3 Lekki - Epe Express Way",
                    "addressLocality": "Victoria Island",
                    "addressRegion": "Lagos",
                    "addressCountry": "NG"
                  }
                },
                {
                  "@type": "Place",
                  "name": "La Maison de Fahrenheit",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Victoria Island",
                    "addressRegion": "Lagos",
                    "addressCountry": "NG"
                  }
                }
              ],
              "organizer": {
                "@type": "Organization",
                "name": "T.U.A Events",
                "url": "https://tuaevents.org",
                "email": "info@tuaevents.org",
                "telephone": "+2349154611827"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Super Early Bird Sponsorship & Exhibition (30% OFF)",
                  "price": "Discount 30%",
                  "priceCurrency": "USD",
                  "validThrough": "2026-09-30",
                  "url": "https://app.eventpadi.com/wagcon/f/WAGCON"
                },
                {
                  "@type": "Offer",
                  "name": "Green Pass (Exhibition Access)",
                  "price": "0",
                  "priceCurrency": "NGN",
                  "url": "https://app.eventpadi.com/wagcon"
                },
                {
                  "@type": "Offer",
                  "name": "Standard Pass (Conference & Exhibition)",
                  "price": "30000",
                  "priceCurrency": "NGN",
                  "url": "https://app.eventpadi.com/wagcon"
                },
                {
                  "@type": "Offer",
                  "name": "Blue Pass (Full Summit)",
                  "price": "75000",
                  "priceCurrency": "NGN",
                  "url": "https://app.eventpadi.com/wagcon"
                },
                {
                  "@type": "Offer",
                  "name": "Gold Pass (VIP Summit & Leaders Dinner)",
                  "price": "350000",
                  "priceCurrency": "NGN",
                  "url": "https://app.eventpadi.com/wagcon"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "@id": "https://wagconvention.com/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is WAGCON 2027?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WAGCON (West Africa Gaming Convention) is Africa's flagship gaming, esports, game publishing, and interactive entertainment convention. Held over four days across three venues in Victoria Island, Lagos, Nigeria from 28 April to 1 May 2027, co-located with ABDS 2027."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When is WAGCON 2027?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WAGCON 2027 takes place from 28 April to 1 May 2027 in Victoria Island, Lagos, Nigeria."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the WAGCON 2027 Early Bird offers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WAGCON 2027 features four Early Bird pricing windows for sponsorship and exhibition: Super Early Bird (30% OFF, deadline 30 Sep 2026), Early Bird 2 (15% OFF, deadline 30 Nov 2026), Early Bird 3 (10% OFF, deadline 31 Jan 2027), and Final Early Bird (5% OFF, deadline 15 Mar 2027)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is WAGCON 2027 held?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WAGCON 2027 is held across three venues in Victoria Island, Lagos: Four Points by Sheraton (VIP Leaders Dinner), Lagos Oriental Hotel (Conference & Exhibition), and Fahrenheit Rooftop (Official After Party)."
                  }
                }
              ]
            }
          ]
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
