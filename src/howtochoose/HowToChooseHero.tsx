import React from "react";

// ─── STATIC DATA & STYLES (Moved outside to prevent re-allocation) ───

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

  @keyframes ch-fade-up { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes ch-fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes ch-slide-right { from { opacity: 0; transform: translateX(-24px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes ch-panel-grow { from { transform: scaleY(0); transform-origin: top; } to { transform: scaleY(1); transform-origin: top; } }
  @keyframes ch-dot-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.7); } }

  .ch-breadcrumb  { animation: ch-slide-right 0.55s ease both; animation-delay: 0.05s; }
  .ch-eyebrow     { animation: ch-fade-up    0.55s ease both; animation-delay: 0.15s; }
  .ch-heading     { animation: ch-fade-up    0.65s ease both; animation-delay: 0.25s; }
  .ch-divider     { animation: ch-fade-in    0.5s  ease both; animation-delay: 0.4s; }
  .ch-body        { animation: ch-fade-up    0.6s  ease both; animation-delay: 0.45s; }
  .ch-cta         { animation: ch-fade-up    0.6s  ease both; animation-delay: 0.6s; }
  .ch-stats       { animation: ch-fade-up    0.6s  ease both; animation-delay: 0.75s; }
  .ch-panel       { animation: ch-panel-grow 0.7s  cubic-bezier(0.4,0,0.2,1) both; animation-delay: 0s; }
  .ch-bg-text     { animation: ch-fade-in    1.2s  ease both; animation-delay: 0.1s; }
  .ch-dot         { animation: ch-dot-pulse 2s ease-in-out infinite; }

  /* CTA hover */
  .ch-btn-primary {
    background: linear-gradient(110deg, #1a3a8f 0%, #1565c0 40%, #1976d2 100%);
    background-size: 200% auto;
    transition: background-position 0.5s ease, box-shadow 0.3s ease, transform 0.15s ease;
  }
  .ch-btn-primary:hover { background-position: right center; box-shadow: 0 8px 28px rgba(26,58,143,0.28); transform: translateY(-2px); }
  .ch-btn-primary:active { transform: translateY(0); }

  .ch-btn-ghost { transition: background 0.25s ease, color 0.25s ease, transform 0.15s ease; }
  .ch-btn-ghost:hover { background: #eef3fd; color: #1a3a8f; transform: translateY(-1px); }
`;

// Add the type definition right here
const STYLES: Record<string, React.CSSProperties> = {
  section: {
    position: "relative",
    width: "100%",
    backgroundColor: "#f4f7fd",
    overflow: "hidden",
    fontFamily: "'DM Sans', sans-serif",
  },
  watermark: {
    position: "absolute",
    top: "-10px",
    right: "-20px",
    fontSize: "clamp(80px, 14vw, 180px)",
    fontWeight: 800,
    color: "transparent",
    WebkitTextStroke: "1.5px rgba(26,58,143,0.07)",
    lineHeight: 1,
    userSelect: "none",
    pointerEvents: "none",
    whiteSpace: "nowrap",
  },
  gridTexture: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(circle, rgba(26,58,143,0.09) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
    pointerEvents: "none",
  },
  arcOuter: {
    position: "absolute",
    top: "-80px",
    right: "-80px",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    border: "1.5px solid rgba(26,58,143,0.1)",
    pointerEvents: "none",
  },
  arcInner: {
    position: "absolute",
    top: "-40px",
    right: "-40px",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "1.5px solid rgba(26,58,143,0.07)",
    pointerEvents: "none",
  },
  mainContent: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "72px 24px 68px 48px",
    position: "relative",
    zIndex: 2,
  },
  breadcrumbWrap: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "28px",
  },
  bcText: {
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#6b7280",
  },
  bcActive: {
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#1a3a8f",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.13em",
    textTransform: "uppercase",
    color: "#1976d2",
    backgroundColor: "#eef3fd",
    border: "1px solid #c7d8f5",
    padding: "6px 14px",
    borderRadius: "2px",
  },
  dot: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#1976d2",
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 3.75rem)",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "#0f172a",
    marginBottom: "0",
    maxWidth: "800px",
  },
  gradientText: {
    color: "transparent",
    backgroundImage: "linear-gradient(135deg, #1a3a8f, #1976d2, #42a5f5)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  },
  dividerWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    margin: "28px 0",
    maxWidth: "480px",
  },
  lineLong: {
    height: "1px",
    flex: 1,
    background: "linear-gradient(90deg, #1a3a8f, #93b4e8)",
  },
  lineShort: { height: "1px", width: "100px", backgroundColor: "#dbe8f8" },
  bodyText: {
    fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
    fontWeight: 300,
    lineHeight: 1.8,
    color: "#4b5563",
    maxWidth: "650px",
    marginBottom: "36px",
  },
  ctaWrap: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "14px",
    marginBottom: "52px",
  },
  btnPrimary: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#ffffff",
    padding: "13px 28px",
    textDecoration: "none",
    display: "inline-block",
  },
  btnGhost: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#374151",
    padding: "12px 24px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    border: "1px solid #1976d2",
    backgroundColor: "transparent",
  },
  iconCall: { color: "#1976d2", fontSize: "1rem", lineHeight: 1 },
};

// ─── MAIN COMPONENT ───

export default function HowToChooseHero() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section  style={STYLES.section}>
        {/* ── Giant ghost text watermark ── */}
        <div className="ch-bg-text" style={STYLES.watermark}>
          RUSSIA
        </div>

        {/* ── SVG Wave Background ── */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-end justify-center">
          <svg
            viewBox="0 0 1440 320"
            className="w-full min-w-360 h-auto"
            fill="none"
            stroke="#1a3a8f"
            strokeWidth="1.5"
          >
            <path d="M0,160 C320,300 420,0 720,160 C1020,320 1120,50 1440,160" />
            <path d="M0,180 C320,320 420,20 720,180 C1020,340 1120,70 1440,180" />
            <path d="M0,200 C320,340 420,40 720,200 C1020,360 1120,90 1440,200" />
            <path d="M0,220 C320,360 420,60 720,220 C1020,380 1120,110 1440,220" />
          </svg>
        </div>

        {/* ── Background Elements ── */}
        <div style={STYLES.gridTexture} />
        <div style={STYLES.arcOuter} />
        <div style={STYLES.arcInner} />

        {/* ── Main content ── */}
        <div
          className="sm:px-12 lg:px-20 flex flex-col justify-center items-center"
          style={STYLES.mainContent}
        >
          {/* Eyebrow tag */}
          <div className="ch-eyebrow" style={{ marginBottom: "16px" }}>
            <span style={STYLES.eyebrow}>
              <span className="ch-dot" style={STYLES.dot} />
              M&C Educational Consultancy
            </span>
          </div>

          {/* Main heading */}
          <h1 className="ch-heading text-center" style={STYLES.heading}>
            Your <span style={STYLES.gradientText}>Trusted Partner</span>
            <br />
            for <span style={{ color: "#1a3a8f" }}>MBBS in Russia</span>
          </h1>

          {/* Ruled divider with diamond */}
          <div className="ch-divider" style={STYLES.dividerWrap}>
            <div style={STYLES.lineLong} />
            <span style={{ color: "#1976d2", fontSize: "0.6rem" }}>◆</span>
            <div style={STYLES.lineShort} />
            <span style={{ color: "#1976d2", fontSize: "0.6rem" }}>◆</span>
          </div>

          {/* Body text */}
          <p className="ch-body text-center" style={STYLES.bodyText}>
            Affordable tuition, globally recognized degrees, and full support
            from application to arrival.
            <br />
            <br />— your medical career starts here.
          </p>
        </div>
      </section>
    </>
  );
}
