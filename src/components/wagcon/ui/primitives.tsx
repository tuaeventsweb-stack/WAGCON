import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type AccentColor = "green" | "purple" | "amber" | "grey";

const accentMap: Record<AccentColor, { text: string; bg: string; border: string }> = {
  green: { text: "text-wagcon-green", bg: "bg-wagcon-green-dim", border: "border-wagcon-green-border" },
  purple: { text: "text-wagcon-purple", bg: "bg-wagcon-purple-dim", border: "border-wagcon-purple-border" },
  amber: { text: "text-wagcon-amber", bg: "bg-wagcon-amber-dim", border: "border-wagcon-amber-border" },
  grey: { text: "text-wagcon-grey", bg: "bg-wagcon-grey-dim", border: "border-wagcon-grey-border" },
};

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "block text-[11px] font-bold uppercase text-wagcon-green",
        className,
      )}
      style={{ letterSpacing: "0.14em", fontFamily: "var(--font-body)" }}
    >
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-[clamp(26px,5vw,44px)] font-extrabold leading-[1.1] text-wagcon-white",
        className,
      )}
      style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

export function Accent({ children, color = "green" }: { children: ReactNode; color?: AccentColor }) {
  return <span className={accentMap[color].text}>{children}</span>;
}

export function IconBox({
  children,
  color = "green",
  size = 44,
}: {
  children: ReactNode;
  color?: AccentColor;
  size?: number;
}) {
  const a = accentMap[color];
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[10px] border text-xl",
        a.bg,
        a.border,
        a.text,
      )}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
}

export function PassPill({
  icon,
  label,
  color = "green",
}: {
  icon: string;
  label: string;
  color?: AccentColor;
}) {
  const a = accentMap[color];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase",
        a.bg,
        a.border,
        a.text,
      )}
      style={{ letterSpacing: "0.06em", fontFamily: "var(--font-body)" }}
    >
      <span>{icon}</span>
      {label}
    </span>
  );
}

export function Card({
  children,
  className,
  accent = "green",
  hoverable = true,
}: {
  children: ReactNode;
  className?: string;
  accent?: AccentColor;
  hoverable?: boolean;
}) {
  const a = accentMap[accent];
  return (
    <div
      className={cn(
        "rounded-xl border bg-wagcon-bg3 p-7 transition-colors duration-200",
        "border-[rgba(255,255,255,0.08)]",
        hoverable && `hover:${a.border}`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function InitialAvatar({
  name,
  size = 64,
  color = "green",
}: {
  name: string;
  size?: number;
  color?: AccentColor;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const a = accentMap[color];
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border",
        a.bg,
        a.border,
        a.text,
      )}
      style={{ width: size, height: size, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: size / 2.6 }}
    >
      {initials}
    </div>
  );
}

export function BtnPrimary({
  children,
  href,
  className,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-md bg-wagcon-green px-6 py-3 text-[13px] font-bold uppercase text-wagcon-bg transition-colors hover:bg-[#3DD680]",
    className,
  );
  if (href) {
    return (
      <a href={href} className={cls} style={{ letterSpacing: "0.04em", fontFamily: "var(--font-body)" }}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls} style={{ letterSpacing: "0.04em", fontFamily: "var(--font-body)" }}>
      {children}
    </button>
  );
}

export function BtnSecondary({
  children,
  href,
  className,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-md border border-[rgba(255,255,255,0.12)] bg-transparent px-6 py-3 text-[13px] font-bold uppercase text-wagcon-white transition-colors hover:border-wagcon-green hover:text-wagcon-green",
    className,
  );
  if (href) {
    return (
      <a href={href} className={cls} style={{ letterSpacing: "0.04em", fontFamily: "var(--font-body)" }}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls} style={{ letterSpacing: "0.04em", fontFamily: "var(--font-body)" }}>
      {children}
    </button>
  );
}

/** Counter that animates from 0 to target when it scrolls into view. */
export function Counter({
  to,
  suffix = "",
  duration = 1800,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(eased * to));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span
      ref={ref}
      style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
      className="text-wagcon-green"
    >
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Section({
  children,
  className,
  bg = "bg",
  id,
}: {
  children: ReactNode;
  className?: string;
  bg?: "bg" | "bg2" | "bg3";
  id?: string;
}) {
  const bgClass =
    bg === "bg" ? "bg-wagcon-bg" : bg === "bg2" ? "bg-wagcon-bg2" : "bg-wagcon-bg3";
  return (
    <section id={id} className={cn(bgClass, "py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">{children}</div>
    </section>
  );
}
