import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, Accent, Section } from "@/components/wagcon/ui/primitives";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — WAGCON 2027 · Event Moments & Highlights" },
      { name: "description", content: "Explore photos and moments from past editions of the West Africa Gaming Convention in Lagos — keynotes, exhibition floor, esports tournaments, and VIP networking." },
      { property: "og:title", content: "Gallery — WAGCON 2027" },
      { property: "og:description", content: "Official photography from past WAGCON editions in Victoria Island, Lagos." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

interface GalleryItem {
  src: string;
  title: string;
  category: "Panels" | "Exhibition" | "Networking" | "Esports";
}

const GALLERY_ITEMS: GalleryItem[] = [
  { src: "/gallery/_MG_6767.jpg", title: "Executive B2B Panel Sessions", category: "Panels" },
  { src: "/gallery/IMG_9143.jpg", title: "Exhibition Floor Showcase & Booths", category: "Exhibition" },
  { src: "/gallery/2J6A6810.jpg", title: "Arena Gaming Competitions & Crowd", category: "Esports" },
  { src: "/gallery/_MG_6954.jpg", title: "VIP Networking Lounge Exchanges", category: "Networking" },
  { src: "/gallery/2J6A6809.jpg", title: "Convention Hall & Main Stage Discussions", category: "Panels" },
  { src: "/gallery/IMG_9097.jpg", title: "Industry Leaders Networking", category: "Networking" },
  { src: "/gallery/IMG_9114.jpg", title: "Keynote Address & Audience Engagement", category: "Panels" },
  { src: "/gallery/IMG_9119.jpg", title: "Interactive Developer Showcase", category: "Exhibition" },
  { src: "/gallery/IMG_9186.jpg", title: "Esports Tournament Finals", category: "Esports" },
  { src: "/gallery/IMG_9187.jpg", title: "Competitive Gaming Brackets", category: "Esports" },
  { src: "/gallery/IMG_9782.jpg", title: "Audience & Stage Lighting", category: "Panels" },
  { src: "/gallery/_MG_6849.jpg", title: "Tech & Gaming Demonstrations", category: "Exhibition" },
  { src: "/gallery/_MG_6885.jpg", title: "Delegates & Speaker Sessions", category: "Panels" },
  { src: "/gallery/_MG_6982.jpg", title: "Industry Dealmakers in Conversation", category: "Networking" },
  { src: "/gallery/_MG_6985.jpg", title: "Investor & Founder Roundtables", category: "Networking" },
  { src: "/gallery/_MG_7033.jpg", title: "Product Booth Showcases", category: "Exhibition" },
  { src: "/gallery/_MG_7086.jpg", title: "Audience Q&A Discussions", category: "Panels" },
  { src: "/gallery/_MG_7299.jpg", title: "Indie Game Demo Stations", category: "Exhibition" },
  { src: "/gallery/_MG_7305.jpg", title: "Gaming Community Highlights", category: "Esports" },
  { src: "/gallery/_MG_7367.jpg", title: "Exhibition Hall Buzz & Meetings", category: "Exhibition" },
  { src: "/gallery/_MG_7391.jpg", title: "Closing Networking & Connections", category: "Networking" },
];

const CATEGORIES = ["All", "Panels", "Exhibition", "Networking", "Esports"] as const;

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Gallery — WAGCON 2027 · Event Moments & Highlights";
  }, []);

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="min-h-screen bg-wagcon-bg text-wagcon-white">
      <Nav />

      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5 bg-wagcon-bg2">
          <div className="absolute inset-0 wagcon-hero-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
            <Eyebrow className="mb-4">EVENT PHOTOGRAPHY</Eyebrow>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
              WAGCON in <Accent>Action</Accent>.
            </h1>
            <p className="text-lg text-white/70 font-body max-w-2xl mx-auto leading-relaxed mb-8">
              Relive the energy from Victoria Island, Lagos. From keynotes and B2B dealmaking to the bustling exhibition floor, tournament brackets, and VIP networking.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`font-button text-xs uppercase tracking-wider px-5 py-2.5 transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary font-bold shadow-lg shadow-primary/20"
                      : "bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat === "All" ? `All Photos (${GALLERY_ITEMS.length})` : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <Section bg="bg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.src}
                className="group relative cursor-pointer overflow-hidden border border-white/10 bg-wagcon-bg3/20 aspect-[4/3] rounded-sm transition-all duration-300 hover:border-primary/50 shadow-sm hover:shadow-xl"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-[1.05] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.04] group-hover:brightness-100"
                />

                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="font-button text-[9px] uppercase tracking-wider px-2 py-1 bg-black/70 backdrop-blur-md text-white/80 border border-white/10 rounded-sm">
                    {item.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="font-heading text-sm font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-1.5 text-primary font-button text-[11px] uppercase tracking-widest font-bold">
                    <Maximize2 size={13} /> View Photo
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-white/50">
              No photos found in this category.
            </div>
          )}
        </Section>
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-md select-none"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-4 md:left-8 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
            onClick={prevImage}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl max-h-[85vh] px-12 flex flex-col items-center justify-center">
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain border border-white/10 shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Title & Counter */}
            <div className="mt-4 text-center">
              <p className="text-sm font-heading font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </p>
              <p className="text-xs font-button uppercase tracking-widest text-white/50 mt-1">
                {filteredItems[lightboxIndex].category} · Photo {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-4 md:right-8 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
            onClick={nextImage}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
