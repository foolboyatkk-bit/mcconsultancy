import React, { useState, useCallback, useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    name: "Dr. Astalekshmi",
    location: "Russia",
    initials: "AS",
    quote:
      "M & C Consultancy made my dream simple. I was scared to study abroad, but they arranged everything legally and safely. I feel proud today as a final-year MBBS student.",
  },
  {
    name: "Dr. Sapphire",
    location: "Russia",
    initials: "SA",
    quote:
      "Their team explained everything clearly to my family. Today I am a doctor, and I always suggest M & C to my juniors.",
  },
  {
    name: "Dr. Bini",
    location: "Russia",
    initials: "BI",
    quote:
      "From choosing my university to settling in Russia, M & C supported me like a family. Thanks to them, I am confident in my future.",
  },
  {
    name: "Dr. Monicka",
    location: "Russia",
    initials: "MO",
    quote:
      "M & C made my MBBS journey smooth from admission to settling in Russia. They are always clear and reliable. I strongly recommend them to every aspiring doctor.",
  },
  {
    name: "Dr. Raj Kamal",
    location: "Russia",
    initials: "KA",
    quote:
      "Thank you for guiding me step by step and supporting my parents in the entire process. I am now a successful intern doctor in Chennai.",
  },
];

const GAP = 20; // px gap between cards

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap');

  :root {
    --bg:        #f4f7fd;
    --card:      #ffffff;
    --border:    rgba(26,58,143,0.12);
    --sky:       #1976d2;
    --text-main: #0f172a;
    --text-sub:  #4b5563;
    --muted:     #64748b;
  }

  .tsr-section {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    position: relative;
    overflow: hidden;
  }

  .tsr-arc {
    position: absolute; top: -120px; left: 50%;
    transform: translateX(-50%);
    width: min(700px, 100vw); height: 400px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(26,58,143,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
  .tsr-glow-bottom {
    position: absolute; bottom: -80px; right: 10%;
    width: 400px; height: 300px; border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(26,58,143,0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  /* ── Header ── */
  .tsr-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 0.65rem; font-weight: 600;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--sky); margin-bottom: 14px;
  }
  .tsr-eyebrow-line { width: 28px; height: 1px; background: var(--sky); opacity: 0.6; }

  .tsr-heading {
    font-size: clamp(1.8rem, 5vw, 3.8rem);
    font-weight: 700; color: var(--text-main);
    line-height: 1.1; margin: 0;
  }
  .tsr-heading em { font-style: italic; color: var(--sky); }

  .tsr-subtext {
    font-size: 0.95rem; font-weight: 300;
    color: var(--text-sub); margin-top: 12px; line-height: 1.65;
  }

  /* ── Viewport: exact width, no negative-margin trick ── */
  .tsr-viewport {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-bottom: 16px; /* room for drop-shadow */
    touch-action: pan-y pinch-zoom;
  }

  /* ── Track: JS drives width + translateX via inline styles ── */
  .tsr-track {
    display: flex;
    gap: ${GAP}px;
    transition: transform 0.55s cubic-bezier(0.34, 1.4, 0.64, 1);
    will-change: transform;
    align-items: stretch;
  }

  /* ── Card: width set by inline style from JS ── */
  .tsr-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 28px 22px;
    flex-shrink: 0;
    display: flex; flex-direction: column; justify-content: space-between;
    min-height: 260px; position: relative; overflow: hidden;
    transition: box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
    box-shadow: 0 4px 20px rgba(26,58,143,0.04);
    box-sizing: border-box;
  }
  .tsr-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(26,58,143,0.1);
    border-color: rgba(25,118,210,0.3);
  }
  .tsr-card::before {
    content: ''; position: absolute; inset: 0; border-radius: 8px;
    border: 1px solid transparent;
    background: linear-gradient(135deg, rgba(25,118,210,0.3), transparent 60%) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out; mask-composite: exclude;
    opacity: 0; transition: opacity 0.4s ease;
  }
  .tsr-card:hover::before { opacity: 1; }

  .tsr-big-quote {
    font-size: clamp(4rem, 8vw, 7rem);
    line-height: 0.5; color: rgba(26,58,143,0.04);
    font-weight: 700; user-select: none;
    position: absolute; top: 24px; right: 16px; pointer-events: none;
  }

  .tsr-quote-text {
    font-size: 0.9rem;
    font-weight: 400; color: var(--text-sub);
    line-height: 1.7; position: relative; z-index: 1;
    flex-grow: 1; margin-bottom: 20px;
  }

  .tsr-divider { height: 1px; background: rgba(26,58,143,0.08); margin-bottom: 18px; }
  .tsr-footer  { display: flex; align-items: center; gap: 12px; }

  .tsr-avatar {
    width: 40px; height: 40px; border-radius: 50%;
    background: linear-gradient(135deg, #1a3a8f 0%, var(--sky) 100%);
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: 0.7rem; font-weight: 700;
    letter-spacing: 0.06em; flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(25,118,210,0.25);
  }

  .tsr-name { font-weight: 700; font-size: 0.92rem; color: var(--text-main); line-height: 1.2; }
  .tsr-loc  {
    font-size: 0.76rem; font-weight: 500; color: var(--sky);
    display: flex; align-items: center; gap: 4px; margin-top: 3px;
  }

  .tsr-stars { display: flex; gap: 3px; margin-bottom: 14px; }
  .tsr-star  { color: #f59e0b; font-size: 13px; }

  /* ── Nav ── */
  .tsr-nav { display: flex; align-items: center; gap: 12px; }

  .tsr-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: 1px solid rgba(26,58,143,0.15);
    background: #fff; display: flex; align-items: center; justify-content: center;
    cursor: pointer; color: var(--sky);
    transition: all 0.25s ease; flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(26,58,143,0.05);
  }
  .tsr-btn:hover:not(:disabled) {
    background: var(--sky); color: #fff; border-color: var(--sky);
    box-shadow: 0 6px 20px rgba(25,118,210,0.3); transform: scale(1.06);
  }
  .tsr-btn:disabled { opacity: 0.35; cursor: not-allowed; box-shadow: none; }

  /* Dots */
  .tsr-dots { display: flex; gap: 8px; align-items: center; }
  .tsr-dot {
    width: 6px; height: 6px; border-radius: 3px;
    background: rgba(26,58,143,0.15);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    cursor: pointer; border: none; padding: 0;
  }
  .tsr-dot.active { width: 22px; background: var(--sky); box-shadow: 0 0 8px rgba(25,118,210,0.4); }

  .tsr-counter {
    text-align: center; margin-top: 12px;
    font-size: 0.72rem; font-weight: 600;
    letter-spacing: 0.12em; color: var(--muted); text-transform: uppercase;
  }

  /* Mobile dots — below carousel xs only */
  .tsr-dots-mobile { display: flex; justify-content: center; gap: 8px; margin-top: 18px; }
  @media (min-width: 640px) { .tsr-dots-mobile { display: none; } }

  @media (max-width: 640px) {
    .tsr-card { padding: 22px 18px; min-height: 230px; }
  }
`;

export default function TestimonialCarousel() {
  const [page, setPage]             = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  // JS-measured card dimensions
  const [cardWidth, setCardWidth]   = useState(0);
  const viewportRef                 = useRef<HTMLDivElement>(null);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd]     = useState(0);

  const total  = TESTIMONIALS.length;

  // ── Compute visible count from window width ──
  const getVisible = (w: number) => {
    if (w <= 640)  return 1.15;
    if (w <= 1024) return 2.2;
    return 3;
  };

  // ── Measure viewport and derive exact card pixel width ──
  const measure = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const w        = vp.clientWidth;               // exact rendered width
    const visible  = getVisible(window.innerWidth);
    const cw       = (w - (Math.floor(visible) * GAP)) / visible;
    setVisibleCount(visible);
    setCardWidth(cw);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxPage = Math.max(0, total - Math.floor(visibleCount));

  useEffect(() => {
    if (page > maxPage) setPage(maxPage);
  }, [maxPage, page]);

  const prev = useCallback(() => setPage((p) => Math.max(0, p - 1)), []);
  const next = useCallback(() => setPage((p) => Math.min(maxPage, p + 1)), [maxPage]);

  // ── Swipe ──
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove  = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd   = () => {
    const d = touchStart - touchEnd;
    if (d >  50) next();
    if (d < -50) prev();
    setTouchStart(0); setTouchEnd(0);
  };

  // translateX = page * (cardWidth + gap)
  const translateX = page * (cardWidth + GAP);

  const dotButtons = Array.from({ length: maxPage + 1 }).map((_, i) => (
    <button
      key={i}
      className={`tsr-dot${page === i ? " active" : ""}`}
      onClick={() => setPage(i)}
      aria-label={`Go to slide ${i + 1}`}
    />
  ));

  return (
    <>
      <style>{STYLES}</style>

      <section className="tsr-section w-full py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-16">
        <div className="tsr-arc" />
        <div className="tsr-glow-bottom" />

        <div className="max-w-340 mx-auto relative" style={{ zIndex: 1 }}>

          {/* ── Header row ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6 mb-8 sm:mb-10">
            {/* Text */}
            <div className="min-w-0">
              <div className="tsr-eyebrow">
                <span className="tsr-eyebrow-line" />
                Student Stories
                <span className="tsr-eyebrow-line" />
              </div>
              <h2 className="tsr-heading">Voices of <em>Success</em></h2>
              <p className="tsr-subtext">Real doctors. Real journeys. All guided by M &amp; C.</p>
            </div>

            {/* Nav: dots (sm+) + prev/next */}
            <div className="tsr-nav self-start sm:self-auto shrink-0">
              <div className="tsr-dots hidden sm:flex">{dotButtons}</div>
              <button className="tsr-btn" onClick={prev} disabled={page === 0} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="tsr-btn" onClick={next} disabled={page >= maxPage} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Carousel ── */}
          <div
            ref={viewportRef}
            className="tsr-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="tsr-track"
              style={{ transform: `translateX(-${translateX}px)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="tsr-card"
                  /* ← exact pixel width from JS measurement, never overflows */
                  style={{ width: cardWidth > 0 ? cardWidth : undefined }}
                >
                  <div className="tsr-big-quote">"</div>
                  <div className="tsr-stars">
                    {[1,2,3,4,5].map((s) => <span key={s} className="tsr-star">★</span>)}
                  </div>
                  <p className="tsr-quote-text">"{t.quote}"</p>
                  <div>
                    <div className="tsr-divider" />
                    <div className="tsr-footer">
                      <div className="tsr-avatar">{t.initials}</div>
                      <div>
                        <div className="tsr-name">{t.name}</div>
                        <div className="tsr-loc">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                          </svg>
                          {t.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile dots */}
          <div className="tsr-dots-mobile">{dotButtons}</div>

          {/* Counter */}
          <div className="tsr-counter">
            {page + 1} – {Math.min(page + Math.floor(visibleCount), total)}&nbsp;/&nbsp;{total}
          </div>

        </div>
      </section>
    </>
  );
}