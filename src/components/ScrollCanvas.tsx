"use client";

import { useEffect, useRef, type RefObject } from "react";

const FADE_MASK =
  "radial-gradient(ellipse 64% 62% at 50% 45%, #000 32%, transparent 78%)";
// Clip finishes exactly as the pin releases, so the next section comes in right
// when the animation ends — no extra dead scroll at the tail.
const COMPLETE_AT = 1;

/**
 * Scroll-driven image-sequence player (the Apple/Sony technique). Preloads a
 * clip's frames and draws the scroll-mapped frame onto a <canvas> — no video
 * decode/seek, so it scrubs smoothly on real mobile devices where
 * video.currentTime scrubbing stutters. Frames load lazily as the section nears;
 * the clip reaches its last frame at COMPLETE_AT of the pin travel.
 */
export default function ScrollCanvas({
  sectionRef,
  base,
  count,
  fade = false,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  /** frame URL prefix, e.g. "/frames/s4" → /frames/s4/001.webp */
  base: string;
  /** number of frames */
  count: number;
  fade?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgs: HTMLImageElement[] = new Array(count);
    let started = false;
    let curFrame = -1;
    let raf = 0;

    const url = (i: number) =>
      `${base}/${String(i + 1).padStart(3, "0")}.webp`;

    const draw = (idx: number) => {
      const im = imgs[idx];
      if (!im || !im.complete || !im.naturalWidth) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w) canvas.width = w;
      if (canvas.height !== h) canvas.height = h;
      const cw = canvas.width;
      const ch = canvas.height;
      const ir = im.naturalWidth / im.naturalHeight;
      const cr = cw / ch;
      let dw: number;
      let dh: number;
      if (ir > cr) {
        dw = cw;
        dh = cw / ir;
      } else {
        dh = ch;
        dw = ch * ir;
      }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(im, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    const startLoad = () => {
      if (started) return;
      started = true;
      for (let i = 0; i < count; i++) {
        const im = new Image();
        im.decoding = "async";
        im.src = url(i);
        if (i === 0) im.onload = () => draw(0);
        imgs[i] = im;
      }
    };

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (!started && rect.top < vh * 1.5 && rect.bottom > -vh * 0.5)
        startLoad();
      const travel = rect.height - vh;
      if (travel <= 0) return;
      const raw = Math.min(1, Math.max(0, -rect.top / travel));
      const p = Math.min(1, raw / COMPLETE_AT);
      const idx = Math.min(count - 1, Math.round(p * (count - 1)));
      if (idx !== curFrame) {
        curFrame = idx;
        draw(idx);
      }
    };

    const onScroll = () => {
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0;
          update();
        });
      update();
    };
    const onResize = () => {
      curFrame = -1;
      update();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const id = window.setInterval(update, 120);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearInterval(id);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sectionRef, base, count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={fade ? { maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK } : undefined}
    />
  );
}
