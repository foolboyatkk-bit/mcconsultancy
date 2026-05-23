import { useEffect, useRef, useState, useCallback } from "react";

interface ImageItem {
  src: string;
}

interface ScrollRevealResult {
  ref: React.RefObject<HTMLDivElement | null>;
  visible: boolean;
}

const images: ImageItem[] = [
  { src: "/mc1.webp" },
  { src: "/mc3.webp" },
  { src: "/mc4.webp"},
  { src: "/mc5.webp"},
  { src: "/mc6.webp"},
  { src: "/mc7.webp"},
  { src: "/mc8.webp" },
];

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  .gal * { box-sizing: border-box; margin: 0; padding: 0; }
  .gal { font-family: 'DM Sans', sans-serif; }

  /* ── Tile ── */
  .gal-tile {
    position: relative; overflow: hidden; cursor: pointer;
    background: #0b1325; width: 100%; height: 100%;
    border-radius: 10px;
  }

  .gal-tile img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    filter: saturate(0.75) brightness(0.88);
    transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s ease;
  }
  .gal-tile:hover img {
    transform: scale(1.09);
    filter: saturate(1.08) brightness(1.02);
  }

  /* bottom vignette */
  .gal-tile-vignette {
    position: absolute; inset: 0; z-index: 2; pointer-events: none;
    background: linear-gradient(
      to top,
      rgba(6,13,31,0.96) 0%,
      rgba(6,13,31,0.4) 38%,
      rgba(6,13,31,0.08) 65%,
      transparent 100%
    );
    opacity: 0.7;
    transition: opacity 0.5s ease;
  }
  .gal-tile:hover .gal-tile-vignette { opacity: 1; }

  /* ghost index number */
  .gal-num {
    position: absolute; z-index: 1; pointer-events: none; user-select: none;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300; line-height: 1; color: transparent;
    -webkit-text-stroke: 1px rgba(147,180,232,0.06);
    transition: -webkit-text-stroke 0.5s ease;
  }
  .gal-tile:hover .gal-num { -webkit-text-stroke: 1px rgba(147,180,232,0.22); }

  /* meta label */
  .gal-meta {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 16px 18px; z-index: 3;
    transform: translateY(10px);
    transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
  }
  .gal-tile:hover .gal-meta { transform: translateY(0); }

  .gal-meta-eyebrow {
    display: block;
    font-size: 0.6rem; font-weight: 600;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(147,180,232,0.55);
    margin-bottom: 3px;
    opacity: 0;
    transition: opacity 0.3s ease 0.08s;
  }
  .gal-tile:hover .gal-meta-eyebrow { opacity: 1; }

  .gal-meta-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 400; font-style: italic;
    color: rgba(219,233,255,0.92); line-height: 1.2;
  }

  .gal-meta-rule {
    width: 0; height: 1px; margin-bottom: 8px;
    background: linear-gradient(90deg, #60a5fa, transparent);
    transition: width 0.4s ease 0.05s;
  }
  .gal-tile:hover .gal-meta-rule { width: 22px; }

  /* expand icon */
  .gal-expand {
    position: absolute; top: 12px; right: 12px; z-index: 3;
    width: 28px; height: 28px; border-radius: 50%;
    border: 1px solid rgba(147,180,232,0.2);
    background: rgba(6,13,31,0.5);
    display: flex; align-items: center; justify-content: center;
    color: rgba(147,180,232,0.6);
    opacity: 0; transform: scale(0.7) rotate(-20deg);
    transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
  }
  .gal-tile:hover .gal-expand { opacity: 1; transform: scale(1) rotate(0deg); }

  /* thin border frame that appears on hover */
  .gal-tile::after {
    content: '';
    position: absolute; inset: 0; z-index: 4;
    border-radius: 10px;
    border: 1px solid rgba(147,180,232,0);
    transition: border-color 0.4s ease;
    pointer-events: none;
  }
  .gal-tile:hover::after { border-color: rgba(147,180,232,0.16); }

  /* ── Lightbox ── */
  .lb-bg {
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(4,8,22,0.97);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 24px 80px;
    animation: lb-in 0.3s ease both;
  }
  @keyframes lb-in { from { opacity:0 } to { opacity:1 } }

  .lb-body {
    position: relative; width: 100%; max-width: 940px;
    animation: lb-rise 0.38s cubic-bezier(0.16,1,0.3,1) 0.04s both;
  }
  @keyframes lb-rise {
    from { opacity:0; transform: translateY(18px) scale(0.98) }
    to   { opacity:1; transform: translateY(0) scale(1) }
  }

  .lb-body > img {
    width: 100%; max-height: 68vh;
    object-fit: contain; display: block;
    border-radius: 4px;
    border: 1px solid rgba(147,180,232,0.1);
  }

  /* top-right close */
  .lb-close {
    position: absolute; top: -44px; right: 0;
    width: 32px; height: 32px; border-radius: 50%;
    border: 1px solid rgba(147,180,232,0.15);
    background: transparent; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: rgba(219,233,255,0.5); font-size: 14px;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .lb-close:hover { background: rgba(26,58,143,0.55); color:#fff; border-color:rgba(147,180,232,0.4); }

  /* side navs */
  .lb-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 42px; height: 42px; border-radius: 50%;
    border: 1px solid rgba(147,180,232,0.18);
    background: rgba(255,255,255,0.03);
    display: flex; align-items: center; justify-content: center;
    color: rgba(219,233,255,0.6); font-size: 22px; cursor: pointer;
    transition: background 0.2s, border-color 0.2s, color 0.2s;
  }
  .lb-nav:hover { background: rgba(26,58,143,0.55); border-color:rgba(147,180,232,0.42); color:#fff; }
  .lb-prev { right: calc(100% + 16px); }
  .lb-next { left: calc(100% + 16px); }

  /* caption bar */
  .lb-caption {
    display: flex; align-items: center; gap: 12px;
    margin-top: 16px;
  }

  /* filmstrip */
  .lb-strip {
    display: flex; gap: 7px; margin-top: 12px;
    width: 100%; overflow-x: auto; padding-bottom: 2px;
    scrollbar-width: none;
  }
  .lb-strip::-webkit-scrollbar { display: none; }

  .lb-thumb {
    flex-shrink: 0; width: 56px; height: 38px; border-radius: 3px;
    overflow: hidden; cursor: pointer; opacity: 0.38;
    border: 1.5px solid transparent;
    transition: opacity 0.2s, border-color 0.2s;
  }
  .lb-thumb.on { opacity: 1; border-color: #1976d2; }
  .lb-thumb:not(.on):hover { opacity: 0.72; }
  .lb-thumb img { width:100%; height:100%; object-fit:cover; display:block; }

  @media (max-width: 640px) {
    .lb-bg { padding: 16px; }
    .lb-nav { width:34px; height:34px; font-size:18px; }
    .lb-prev { right: calc(100% + 6px); }
    .lb-next { left: calc(100% + 6px); }
  }
`;

/* ─── hook ──────────────────────────────────────────────────────────── */
function useScrollReveal(threshold = 0.1): ScrollRevealResult {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.unobserve(el); } },
      { threshold },
    );
    io.observe(el);
    return () => io.unobserve(el);
  }, [threshold]);
  return { ref, visible };
}

/* ─── Tile ───────────────────────────────────────────────────────────── */
function Tile({
  image, index, visible, delay, onOpen, numSize, numPos,
}: {
  image: ImageItem; index: number; visible: boolean; delay: number;
  onOpen: () => void; numSize: number;
  numPos: { top?: string; bottom?: string; left?: string; right?: string };
}) {
  return (
    <div
      className="gal-tile"
      style={{
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
      }}
      onClick={onOpen}
    >
      {/* ghost number */}
      <div className="gal-num" style={{ fontSize: `${numSize}px`, ...numPos }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <img src={image.src}  loading="lazy" />
      <div className="gal-tile-vignette" />

      {/* meta */}
      <div className="gal-meta">
        <div className="gal-meta-rule" />
   
      </div>

      {/* expand icon */}
      <div className="gal-expand" aria-hidden="true">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Lightbox ───────────────────────────────────────────────────────── */
function Lightbox({
  images, activeIndex, onClose, onNav,
}: {
  images: ImageItem[]; activeIndex: number;
  onClose: () => void; onNav: (d: number) => void;
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft")  onNav(-1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, onNav]);

  return (
    <div className="lb-bg" onClick={onClose}>
      <div className="lb-body" onClick={(e) => e.stopPropagation()}>

        <button className="lb-close" aria-label="Close" onClick={onClose}>✕</button>

        <img src={images[activeIndex].src}  />

        {/* caption */}
        <div className="lb-caption">
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "0.82rem", color: "rgba(219,233,255,0.32)", letterSpacing: "0.03em",
          }}>
            {String(activeIndex + 1).padStart(2, "0")}&thinsp;/&thinsp;
            {String(images.length).padStart(2, "0")}
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(147,180,232,0.08)" }} />
         
        </div>

        {/* filmstrip */}
       

        <button className="lb-nav lb-prev" aria-label="Previous" onClick={() => onNav(-1)}>‹</button>
        <button className="lb-nav lb-next" aria-label="Next"     onClick={() => onNav(1)}>›</button>
      </div>
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────────────────── */
export default function AboutUsGallery() {
  const { ref, visible } = useScrollReveal();
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const handleNav   = useCallback((d: number) =>
    setLbIndex((p) => p === null ? null : (p + d + images.length) % images.length), []);
  const handleClose = useCallback(() => setLbIndex(null), []);
  const handleOpen  = useCallback((i: number) => setLbIndex(i), []);

  return (
    <>
      <style>{STYLES}</style>

      <section
        className="gal relative w-full overflow-hidden"
        style={{
          backgroundColor: "#060d1f",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        {/* Ambient glows */}
        <div style={{
          position: "absolute", top: "-5%", right: "-8%",
          width: "55vw", height: "55vw", maxWidth: "700px", maxHeight: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,58,143,0.16) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-5%", left: "5%",
          width: "40vw", height: "40vw", maxWidth: "500px", maxHeight: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(21,101,192,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "88px 32px 100px",
          position: "relative",
        }}>

          {/* ══ HEADER ══ */}
          <div
            ref={ref}
            style={{
              marginBottom: "64px",
              transition: "opacity 0.9s ease, transform 0.9s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
            }}
          >
            {/* eyebrow row */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
              <div style={{ width: "36px", height: "1px", background: "rgba(147,180,232,0.35)", flexShrink: 0 }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.6rem", fontWeight: 600,
                letterSpacing: "0.26em", textTransform: "uppercase",
                color: "#60a5fa", flexShrink: 0,
              }}>
                Inside Our World
              </span>
              <div style={{ flex: 1, height: "1px", background: "rgba(147,180,232,0.07)" }} />
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic", fontSize: "0.82rem",
                color: "rgba(147,180,232,0.3)", flexShrink: 0,
              }}>
                {images.length} spaces
              </span>
            </div>

            {/* headline row — heading left, subtitle right, baseline-aligned */}
            <div style={{
              display: "flex", flexWrap: "wrap",
              alignItems: "flex-end", gap: "12px 40px",
            }}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 300, lineHeight: 1.1,
                color: "#ffffff", letterSpacing: "-0.01em",
              }}>
                A Glimpse of{" "}
                <em style={{
                  fontStyle: "italic", fontWeight: 300,
                  background: "linear-gradient(130deg, #93b4e8 0%, #60a5fa 45%, #e0e7ff 100%)",
                  WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
                }}>
                  Our Office
                </em>
              </h2>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem", fontWeight: 300,
                color: "rgba(219,233,255,0.42)", lineHeight: 1.8,
                maxWidth: "290px", paddingBottom: "7px",
              }}>
                Built to welcome you with warmth, professionalism, and care.
              </p>
            </div>
          </div>

          {/* ══ GRID ══ */}

          {/* Row 1 — feature (tall 2-row) + 2×2 cluster */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.55fr 1fr 1fr",
            gridTemplateRows: "260px 260px",
            gap: "10px",
            marginBottom: "10px",
          }}>
            {/* Feature tile spans both rows */}
            <div style={{ gridRow: "1 / 3" }}>
              <Tile image={images[0]} index={0} visible={visible} delay={0}
                onOpen={() => handleOpen(0)} numSize={144} numPos={{ top: "-18px", left: "10px" }} />
            </div>

            <Tile image={images[1]} index={1} visible={visible} delay={80}
              onOpen={() => handleOpen(1)} numSize={86} numPos={{ top: "-8px", right: "8px" }} />
            <Tile image={images[2]} index={2} visible={visible} delay={150}
              onOpen={() => handleOpen(2)} numSize={86} numPos={{ top: "-8px", right: "8px" }} />
            <Tile image={images[3]} index={3} visible={visible} delay={210}
              onOpen={() => handleOpen(3)} numSize={86} numPos={{ top: "-8px", right: "8px" }} />
            <Tile image={images[4]} index={4} visible={visible} delay={270}
              onOpen={() => handleOpen(4)} numSize={86} numPos={{ top: "-8px", right: "8px" }} />
          </div>

          {/* Row 2 — two wide panoramic tiles */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "215px",
            gap: "10px",
          }}>
            <Tile image={images[5]} index={5} visible={visible} delay={340}
              onOpen={() => handleOpen(5)} numSize={108} numPos={{ bottom: "-6px", left: "10px" }} />
            <Tile image={images[6]} index={6} visible={visible} delay={410}
              onOpen={() => handleOpen(6)} numSize={108} numPos={{ bottom: "-6px", right: "10px" }} />
          </div>

          {/* ══ FOOTER HINT ══ */}
          <div style={{
            display: "flex", alignItems: "center", gap: "14px",
            marginTop: "36px",
            transition: `opacity 0.8s ease ${images.length * 65 + 320}ms`,
            opacity: visible ? 1 : 0,
          }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(147,180,232,0.06)" }} />
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.66rem", fontWeight: 400,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(147,180,232,0.28)",
            }}>
              Click any image to explore
            </p>
            <div style={{ flex: 1, height: "1px", background: "rgba(147,180,232,0.06)" }} />
          </div>

        </div>
      </section>

      {lbIndex !== null && (
        <Lightbox
          images={images}
          activeIndex={lbIndex}
          onClose={handleClose}
          onNav={handleNav}
        />
      )}
    </>
  );
}