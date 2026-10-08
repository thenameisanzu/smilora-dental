"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { animate } from "framer-motion";
import { ChevronsLeftRight, Sparkles } from "lucide-react";
import Image from "next/image";

interface BeforeAfterProps {
  before?: string;
  after?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  before = "/images/whitening-before.jpg",
  after = "/images/whitening-after.jpg",
  beforeLabel = "Before (Stained Enamel)",
  afterLabel = "After 1 Session",
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const userInteracted = useRef(false);
  const [pos, setPos] = useState(50);

  // Smooth intro sweep on mount (stops on user touch/drag)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = animate(50, [50, 80, 20, 50], {
      duration: 3.2,
      delay: 0.6,
      ease: "easeInOut",
      onUpdate: (v) => {
        if (!userInteracted.current) setPos(v);
      },
    });
    return () => c.stop();
  }, []);

  const handlePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPos(percentage);
  }, []);

  // Global pointer move and up listeners to track dragging even outside container bounds
  useEffect(() => {
    const onGlobalPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      handlePosition(e.clientX);
    };

    const onGlobalPointerUp = () => {
      isDragging.current = false;
    };

    const onGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || e.touches.length === 0) return;
      handlePosition(e.touches[0].clientX);
    };

    window.addEventListener("pointermove", onGlobalPointerMove, { passive: true });
    window.addEventListener("pointerup", onGlobalPointerUp);
    window.addEventListener("pointercancel", onGlobalPointerUp);
    window.addEventListener("touchmove", onGlobalTouchMove, { passive: true });
    window.addEventListener("touchend", onGlobalPointerUp);

    return () => {
      window.removeEventListener("pointermove", onGlobalPointerMove);
      window.removeEventListener("pointerup", onGlobalPointerUp);
      window.removeEventListener("pointercancel", onGlobalPointerUp);
      window.removeEventListener("touchmove", onGlobalTouchMove);
      window.removeEventListener("touchend", onGlobalPointerUp);
    };
  }, [handlePosition]);

  const startDrag = (clientX: number) => {
    userInteracted.current = true;
    isDragging.current = true;
    handlePosition(clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    userInteracted.current = true;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  const animateTo = (target: number) => {
    userInteracted.current = true;
    animate(pos, target, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setPos(v),
    });
  };

  return (
    <div className="relative w-full select-none">
      {/* Interactive Slider Container with touch-none for flawless mobile dragging */}
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label="Teeth whitening before and after comparison slider"
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onPointerDown={(e) => startDrag(e.clientX)}
        onTouchStart={(e) => {
          if (e.touches.length > 0) startDrag(e.touches[0].clientX);
        }}
        onKeyDown={handleKeyDown}
        style={{ touchAction: "none" }}
        className="group relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-[2rem] bg-ink/5 shadow-[0_24px_50px_-15px_rgba(11,60,73,0.35)] ring-1 ring-ink/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal"
      >
        {/* Layer: After (Background) */}
        <div className="pointer-events-none relative h-full w-full">
          <Image
            src={after}
            alt="Teeth after whitening"
            fill
            sizes="(max-width: 768px) 100vw, 550px"
            className="pointer-events-none object-cover"
            priority
          />
        </div>

        {/* Layer: Before (Clipped on top) */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <div className="relative h-full w-full">
            <Image
              src={before}
              alt="Teeth before whitening"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="pointer-events-none object-cover"
              priority
            />
          </div>
        </div>

        {/* Badges */}
        <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-between px-4">
          <span className="rounded-full bg-ink/85 px-3.5 py-1 text-xs font-semibold tracking-wide text-white shadow-md backdrop-blur-md">
            {beforeLabel}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1 text-xs font-semibold tracking-wide text-teal-dark shadow-md backdrop-blur-md">
            <Sparkles size={13} className="text-teal" />
            {afterLabel}
          </span>
        </div>

        {/* Slider Handle Line */}
        <div
          className="pointer-events-none absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-teal shadow-2xl ring-4 ring-teal/30 transition-transform group-hover:scale-110 group-active:scale-110">
            <ChevronsLeftRight size={22} className="stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Quick preset buttons */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => animateTo(100)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
            Math.round(pos) >= 85
              ? "bg-ink text-white shadow-sm"
              : "bg-mist text-ink/70 hover:bg-aqua/60 hover:text-ink"
          }`}
        >
          Before (Stains)
        </button>
        <button
          type="button"
          onClick={() => animateTo(50)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
            Math.round(pos) > 25 && Math.round(pos) < 75
              ? "bg-teal text-white shadow-sm"
              : "bg-mist text-ink/70 hover:bg-aqua/60 hover:text-ink"
          }`}
        >
          50% Split
        </button>
        <button
          type="button"
          onClick={() => animateTo(0)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
            Math.round(pos) <= 15
              ? "bg-teal-dark text-white shadow-sm"
              : "bg-mist text-ink/70 hover:bg-aqua/60 hover:text-ink"
          }`}
        >
          After (Whitened)
        </button>
      </div>
    </div>
  );
}
