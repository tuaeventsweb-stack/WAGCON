import { useEffect, useState } from "react";
import { Nav } from "@/components/wagcon/Nav";
import { Footer } from "@/components/wagcon/Footer";
import { Eyebrow, SectionTitle, Accent, Section } from "@/components/wagcon/ui/primitives";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const GALLERY_IMAGES = [
  "gallery/2J6A6809.jpg",
  "gallery/2J6A6810.jpg",
  "gallery/IMG_9097.jpg",
  "gallery/IMG_9114.jpg",
  "gallery/IMG_9119.jpg",
  "gallery/IMG_9143.jpg",
  "gallery/IMG_9186.jpg",
  "gallery/IMG_9187.jpg",
  "gallery/IMG_9782.jpg",
  "gallery/_MG_6767.jpg",
  "gallery/_MG_6849.jpg",
  "gallery/_MG_6885.jpg",
  "gallery/_MG_6954.jpg",
  "gallery/_MG_6982.jpg",
  "gallery/_MG_6985.jpg",
  "gallery/_MG_7033.jpg",
  "gallery/_MG_7086.jpg",
  "gallery/_MG_7299.jpg",
  "gallery/_MG_7305.jpg",
  "gallery/_MG_7367.jpg",
  "gallery/_MG_7391.jpg"
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Gallery — WAGCON 2027";
  }, []);

  // Handle keyboard navigation for lightbox
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
    document.body.style.overflow = "hidden"; // Disable scroll when open
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = ""; // Re-enable scroll
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
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
              WAGCON <Accent>Gallery</Accent>.
            </h1>
            <p className="text-lg text-white/60 font-body max-w-2xl mx-auto leading-relaxed">
              Explore the key moments, networking sessions, convention floors, and community energy from past WAGCON editions in Lagos.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <Section bg="bg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((src, index) => (
              <div 
                key={index} 
                className="group relative cursor-pointer overflow-hidden border border-white/10 bg-wagcon-bg3/20 aspect-[3/2] rounded-sm transition-all duration-300 hover:border-primary/45"
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <img 
                  src={src} 
                  alt={`WAGCON event moment ${index + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-[1.05] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-100" 
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
                    <span className="w-10 h-10 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary mb-2">
                      <Maximize2 size={16} />
                    </span>
                    <span className="font-button text-[10px] uppercase tracking-widest text-white/80">View Fullscreen</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm select-none"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 z-50 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          {/* Left Arrow */}
          <button 
            className="absolute left-4 z-50 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl max-h-[80vh] px-12 flex flex-col items-center justify-center">
            <img 
              src={GALLERY_IMAGES[lightboxIndex]} 
              alt={`WAGCON full moment`} 
              className="max-w-full max-h-[75vh] object-contain border border-white/5 shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
            {/* Caption / Image count */}
            <div className="absolute bottom-[-40px] text-center text-xs font-button uppercase tracking-widest text-white/60">
              Moment {lightboxIndex + 1} of {GALLERY_IMAGES.length}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            className="absolute right-4 z-50 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
