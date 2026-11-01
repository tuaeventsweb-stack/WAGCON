import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlyphConfig {
  id: string;
  type: "triangle" | "circle" | "cross" | "square" | "dpad" | "gem" | "hexagon" | "joystick";
  top: string;
  left: string;
  size: number;
  depth: "foreground" | "midground" | "background";
  duration: number;
  delay: number;
  rotateRange: [number, number];
  floatY: number;
  colorScheme: "green" | "purple" | "cyan" | "gold";
  mobileVisible?: boolean;
}

const GLYPHS: GlyphConfig[] = [
  // 1. Triangle - Upper Left (PlayStation icon / Next-gen studio)
  {
    id: "triangle-1",
    type: "triangle",
    top: "14%",
    left: "10%",
    size: 72,
    depth: "midground",
    duration: 9,
    delay: 0,
    rotateRange: [-12, 14],
    floatY: 18,
    colorScheme: "green",
    mobileVisible: true,
  },
  // 2. Circle - Upper Right (Glass ring)
  {
    id: "circle-1",
    type: "circle",
    top: "18%",
    left: "86%",
    size: 80,
    depth: "foreground",
    duration: 11,
    delay: 0.8,
    rotateRange: [8, -14],
    floatY: 22,
    colorScheme: "purple",
    mobileVisible: true,
  },
  // 3. Cross - Mid Left (Precision action button)
  {
    id: "cross-1",
    type: "cross",
    top: "52%",
    left: "7%",
    size: 64,
    depth: "foreground",
    duration: 10,
    delay: 1.4,
    rotateRange: [-18, 16],
    floatY: 16,
    colorScheme: "cyan",
    mobileVisible: false,
  },
  // 4. Square - Mid Right (Console face button)
  {
    id: "square-1",
    type: "square",
    top: "58%",
    left: "88%",
    size: 68,
    depth: "midground",
    duration: 12,
    delay: 0.5,
    rotateRange: [14, -10],
    floatY: 20,
    colorScheme: "green",
    mobileVisible: true,
  },
  // 5. D-Pad - Lower Left (Hardware & studio controller heritage)
  {
    id: "dpad-1",
    type: "dpad",
    top: "76%",
    left: "15%",
    size: 78,
    depth: "midground",
    duration: 13,
    delay: 2.1,
    rotateRange: [-10, 12],
    floatY: 18,
    colorScheme: "gold",
    mobileVisible: false,
  },
  // 6. Polygonal Diamond Gem - Lower Right (iGaming & Web3 economies)
  {
    id: "gem-1",
    type: "gem",
    top: "78%",
    left: "82%",
    size: 74,
    depth: "foreground",
    duration: 8.5,
    delay: 1.2,
    rotateRange: [15, -15],
    floatY: 24,
    colorScheme: "green",
    mobileVisible: true,
  },
  // 7. Hexagonal Node - Deep Top Center Background (Esports network)
  {
    id: "hex-1",
    type: "hexagon",
    top: "8%",
    left: "58%",
    size: 50,
    depth: "background",
    duration: 15,
    delay: 1.8,
    rotateRange: [-8, 8],
    floatY: 12,
    colorScheme: "purple",
    mobileVisible: false,
  },
  // 8. Joystick / Arcade Pivot - Deep Left Background
  {
    id: "joystick-1",
    type: "joystick",
    top: "34%",
    left: "18%",
    size: 52,
    depth: "background",
    duration: 14,
    delay: 2.5,
    rotateRange: [10, -10],
    floatY: 14,
    colorScheme: "green",
    mobileVisible: false,
  },
];

export function FloatingGamingGlyphs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Mouse parallax motion values (normalized -1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring dampening for frictionless inertia
  const springX = useSpring(mouseX, { stiffness: 75, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 75, damping: 25 });

  // Depth-based parallax transforms
  const bgX = useTransform(springX, [-1, 1], [-12, 12]);
  const bgY = useTransform(springY, [-1, 1], [-10, 10]);

  const midX = useTransform(springX, [-1, 1], [-26, 26]);
  const midY = useTransform(springY, [-1, 1], [-22, 22]);

  const fgX = useTransform(springX, [-1, 1], [-45, 45]);
  const fgY = useTransform(springY, [-1, 1], [-38, 38]);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseX.set(Math.max(-1, Math.min(1, normX)));
      mouseY.set(Math.max(-1, Math.min(1, normY)));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[2]"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      {GLYPHS.map((glyph) => {
        // Choose parallax transform per depth layer
        const parallaxX =
          glyph.depth === "foreground" ? fgX : glyph.depth === "midground" ? midX : bgX;
        const parallaxY =
          glyph.depth === "foreground" ? fgY : glyph.depth === "midground" ? midY : bgY;

        // Visual properties per depth plane
        const opacity =
          glyph.depth === "foreground"
            ? 0.42
            : glyph.depth === "midground"
            ? 0.28
            : 0.16;

        const blurFilter =
          glyph.depth === "foreground"
            ? "drop-shadow(0 0 25px rgba(34, 197, 94, 0.45))"
            : glyph.depth === "midground"
            ? "drop-shadow(0 0 16px rgba(34, 197, 94, 0.3))"
            : "blur(1.5px) drop-shadow(0 0 8px rgba(147, 51, 234, 0.2))";

        return (
          <motion.div
            key={glyph.id}
            style={{
              top: glyph.top,
              left: glyph.left,
              width: glyph.size,
              height: glyph.size,
              x: isClient ? parallaxX : 0,
              y: isClient ? parallaxY : 0,
            }}
            className={`absolute ${glyph.mobileVisible ? "block" : "hidden md:block"}`}
          >
            <motion.div
              animate={{
                y: [-glyph.floatY, glyph.floatY, -glyph.floatY],
                rotateZ: glyph.rotateRange,
                rotateX: [glyph.rotateRange[0] * 0.7, glyph.rotateRange[1] * 0.7, glyph.rotateRange[0] * 0.7],
                rotateY: [glyph.rotateRange[1] * 0.8, glyph.rotateRange[0] * 0.8, glyph.rotateRange[1] * 0.8],
              }}
              transition={{
                duration: glyph.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: glyph.delay,
              }}
              style={{
                width: "100%",
                height: "100%",
                opacity,
                filter: blurFilter,
                transformStyle: "preserve-3d",
              }}
            >
              <GlyphVector type={glyph.type} colorScheme={glyph.colorScheme} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Isometric 3D SVG Vectors
 * ───────────────────────────────────────────────────────────── */
function GlyphVector({
  type,
  colorScheme,
}: {
  type: GlyphConfig["type"];
  colorScheme: GlyphConfig["colorScheme"];
}) {
  const primaryGlow =
    colorScheme === "green"
      ? "#22c55e"
      : colorScheme === "purple"
      ? "#a855f7"
      : colorScheme === "cyan"
      ? "#06b6d4"
      : "#f59e0b";

  const secondaryColor =
    colorScheme === "green"
      ? "#15803d"
      : colorScheme === "purple"
      ? "#7e22ce"
      : colorScheme === "cyan"
      ? "#0891b2"
      : "#b45309";

  switch (type) {
    // 1. TRIANGLE (PlayStation Isometric Symbol)
    case "triangle":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id={`grad-tri-${colorScheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryGlow} stopOpacity="0.9" />
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id={`edge-tri-${colorScheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor={primaryGlow} stopOpacity="0.8" />
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* 3D Extrusion base */}
          <polygon
            points="50,14 88,82 12,82"
            fill={`url(#grad-tri-${colorScheme})`}
            stroke={`url(#edge-tri-${colorScheme})`}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner glass cut */}
          <polygon
            points="50,34 72,74 28,74"
            fill="rgba(10, 10, 12, 0.75)"
            stroke={primaryGlow}
            strokeWidth="1.8"
            strokeOpacity="0.7"
            strokeLinejoin="round"
          />
          {/* Specular vertex gleam */}
          <circle cx="50" cy="14" r="3.5" fill="#ffffff" opacity="0.95" />
        </svg>
      );

    // 2. CIRCLE (Translucent Neon Torus / Ring)
    case "circle":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id={`grad-circle-${colorScheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryGlow} stopOpacity="0.9" />
              <stop offset="60%" stopColor={secondaryColor} stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Outer ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke={`url(#grad-circle-${colorScheme})`}
            strokeWidth="5"
          />
          {/* Inner ring core */}
          <circle
            cx="50"
            cy="50"
            r="24"
            fill="rgba(10, 10, 12, 0.6)"
            stroke={primaryGlow}
            strokeWidth="1.5"
            strokeDasharray="4 2"
            strokeOpacity="0.6"
          />
          {/* Specular highlight */}
          <ellipse cx="65" cy="30" rx="8" ry="4" transform="rotate(-35 65 30)" fill="#ffffff" opacity="0.8" />
        </svg>
      );

    // 3. CROSS (PlayStation Action Button / Intersection)
    case "cross":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id={`grad-cross-${colorScheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="40%" stopColor={primaryGlow} stopOpacity="0.85" />
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M 28,18 L 50,40 L 72,18 L 82,28 L 60,50 L 82,72 L 72,82 L 50,60 L 28,82 L 18,72 L 40,50 L 18,28 Z"
            fill="rgba(15, 17, 23, 0.7)"
            stroke={`url(#grad-cross-${colorScheme})`}
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="50" r="4.5" fill={primaryGlow} opacity="0.9" />
        </svg>
      );

    // 4. SQUARE (Console Face Button)
    case "square":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id={`grad-square-${colorScheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryGlow} stopOpacity="0.95" />
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.35" />
            </linearGradient>
          </defs>
          {/* Outer isometric 3D plate */}
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            rx="12"
            fill="rgba(10, 10, 15, 0.75)"
            stroke={`url(#grad-square-${colorScheme})`}
            strokeWidth="3.5"
          />
          {/* Inner glow frame */}
          <rect
            x="32"
            y="32"
            width="36"
            height="36"
            rx="6"
            fill="none"
            stroke={primaryGlow}
            strokeWidth="1.8"
            strokeOpacity="0.6"
          />
          <circle cx="28" cy="28" r="3" fill="#ffffff" opacity="0.85" />
        </svg>
      );

    // 5. D-PAD CROSS (Classic Hardware Directional)
    case "dpad":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id={`grad-dpad-${colorScheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryGlow} stopOpacity="0.9" />
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <path
            d="M 38,12 L 62,12 L 62,38 L 88,38 L 88,62 L 62,62 L 62,88 L 38,88 L 38,62 L 12,62 L 12,38 L 38,38 Z"
            fill="rgba(12, 14, 20, 0.85)"
            stroke={`url(#grad-dpad-${colorScheme})`}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Center tactile pivot depression */}
          <circle cx="50" cy="50" r="7" fill="none" stroke={primaryGlow} strokeWidth="2" strokeOpacity="0.75" />
          {/* Directional arrow indicators */}
          <polygon points="50,20 54,26 46,26" fill={primaryGlow} opacity="0.8" />
          <polygon points="50,80 54,74 46,74" fill={primaryGlow} opacity="0.8" />
          <polygon points="20,50 26,46 26,54" fill={primaryGlow} opacity="0.8" />
          <polygon points="80,50 74,46 74,54" fill={primaryGlow} opacity="0.8" />
        </svg>
      );

    // 6. POLYGONAL DIAMOND GEM (iGaming & Web3 Asset Value)
    case "gem":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id={`grad-gem-top-${colorScheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor={primaryGlow} stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id={`grad-gem-facet-${colorScheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryGlow} stopOpacity="0.6" />
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.25" />
            </linearGradient>
          </defs>
          {/* Top table facet */}
          <polygon points="28,26 72,26 86,44 14,44" fill={`url(#grad-gem-top-${colorScheme})`} opacity="0.65" />
          {/* Bottom pavilion facets */}
          <polygon points="14,44 50,86 38,44" fill={`url(#grad-gem-facet-${colorScheme})`} />
          <polygon points="38,44 50,86 62,44" fill={`url(#grad-gem-facet-${colorScheme})`} opacity="0.8" />
          <polygon points="62,44 50,86 86,44" fill={`url(#grad-gem-facet-${colorScheme})`} />
          {/* Outer edge silhouette */}
          <polygon
            points="28,26 72,26 86,44 50,86 14,44"
            fill="none"
            stroke={primaryGlow}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Internal facet borders */}
          <line x1="38" y1="44" x2="28" y2="26" stroke={primaryGlow} strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="62" y1="44" x2="72" y2="26" stroke={primaryGlow} strokeWidth="1.5" strokeOpacity="0.8" />
        </svg>
      );

    // 7. HEXAGONAL NODE (Esports Competition Network)
    case "hexagon":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,12 85,32 85,68 50,88 15,68 15,32"
            fill="rgba(14, 11, 24, 0.7)"
            stroke={primaryGlow}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <polygon
            points="50,26 71,38 71,62 50,74 29,62 29,38"
            fill="none"
            stroke={primaryGlow}
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          <circle cx="50" cy="50" r="6" fill={primaryGlow} opacity="0.9" />
        </svg>
      );

    // 8. JOYSTICK (Arcade Controller Axis)
    case "joystick":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Base ellipse */}
          <ellipse cx="50" cy="74" rx="34" ry="14" fill="rgba(12, 14, 20, 0.8)" stroke={secondaryColor} strokeWidth="2.5" />
          <ellipse cx="50" cy="74" rx="20" ry="8" fill="none" stroke={primaryGlow} strokeWidth="1.5" strokeOpacity="0.6" />
          {/* Shaft */}
          <line x1="50" y1="74" x2="50" y2="38" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          {/* Ball top */}
          <circle cx="50" cy="32" r="16" fill="rgba(10, 10, 14, 0.85)" stroke={primaryGlow} strokeWidth="3" />
          <circle cx="45" cy="27" r="4" fill="#ffffff" opacity="0.9" />
        </svg>
      );

    default:
      return null;
  }
}

