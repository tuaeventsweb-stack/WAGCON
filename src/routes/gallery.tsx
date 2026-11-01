import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, Accent, Section } from "@/components/wagcon/ui/primitives";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — WAGCON 2027 · Event Moments & Highlights" },
      {
        name: "description",
        content:
          "Official photo gallery from the West Africa Gaming Convention in Lagos — keynotes, exhibition floor, esports tournaments, and networking moments.",
      },
      { property: "og:title", content: "Gallery — WAGCON 2027" },
      {
        property: "og:description",
        content: "Official photography from past WAGCON editions in Victoria Island, Lagos.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const GALLERY_IMAGES: string[] = [
  "/gallery/_MG_6767.jpg",
  "/gallery/IMG_9143.jpg",
  "/gallery/2J6A6810.jpg",
  "/gallery/_MG_6954.jpg",
  "/gallery/2J6A6809.jpg",
  "/gallery/IMG_9097.jpg",
  "/gallery/IMG_9114.jpg",
  "/gallery/IMG_9119.jpg",
  "/gallery/IMG_9186.jpg",
  "/gallery/IMG_9187.jpg",
  "/gallery/IMG_9782.jpg",
  "/gallery/_MG_6849.jpg",
  "/gallery/_MG_6885.jpg",
  "/gallery/_MG_6982.jpg",
  "/gallery/_MG_6985.jpg",
  "/gallery/_MG_7033.jpg",
  "/gallery/_MG_7086.jpg",
  "/gallery/_MG_7299.jpg",
  "/gallery/_MG_7305.jpg",
  "/gallery/_MG_7367.jpg",
  "/gallery/_MG_7391.jpg",
];

function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Gallery — WAGCON 2027 · Event Moments & Highlights";
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

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
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
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
            <p className="text-lg text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
              Explore the key moments, networking sessions, convention floors, and community energy from past WAGCON editions in Victoria Island, Lagos.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <Section bg="bg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative cursor-pointer overflow-hidden border border-white/10 bg-wagcon-bg3/20 aspect-[4/3] rounded-sm transition-all duration-300 hover:border-primary/50 shadow-md hover:shadow-2xl hover:shadow-primary/10"
                onClick={() => openLightbox(index)}
              >
                {/* Photo */}
                <img
                  src={src}
                  alt={`WAGCON moment ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-[1.05] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.04] group-hover:brightness-100"
                />

                {/* Clean hover overlay with fullscreen view trigger */}
                <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-button uppercase tracking-wider font-semibold">
                    <Maximize2 size={14} className="text-primary" /> View Photo
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && GALLERY_IMAGES[lightboxIndex] && (
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
              src={GALLERY_IMAGES[lightboxIndex]}
              alt={`WAGCON event moment ${lightboxIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain border border-white/10 shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Clean Counter */}
            <div className="mt-4 text-center">
              <p className="text-xs font-button uppercase tracking-widest text-white/60">
                Photo {lightboxIndex + 1} of {GALLERY_IMAGES.length}
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
