import React from 'react';

// ─── STATIC STYLES ───

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');

  @keyframes eh-fade-up { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes eh-fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes eh-dot-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.7); } }

  .eh-eyebrow     { animation: eh-fade-up    0.55s ease both; animation-delay: 0.15s; }
  .eh-heading     { animation: eh-fade-up    0.65s ease both; animation-delay: 0.25s; }
  .eh-divider     { animation: eh-fade-in    0.5s  ease both; animation-delay: 0.4s; }
  .eh-body        { animation: eh-fade-up    0.6s  ease both; animation-delay: 0.45s; }
  .eh-bg-text     { animation: eh-fade-in    1.2s  ease both; animation-delay: 0.1s; }
  .eh-dot         { animation: eh-dot-pulse 2s ease-in-out infinite; }
`;

const STYLES: Record<string, React.CSSProperties> = {
  section: { position: "relative", width: "100%", backgroundColor: "#f4f7fd", overflow: "hidden", fontFamily: "'DM Sans', sans-serif" },
  watermark: { position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", fontSize: "clamp(60px, 12vw, 150px)", fontWeight: 800, color: "transparent", WebkitTextStroke: "1.5px rgba(26,58,143,0.05)", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" },
  gridTexture: { position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(26,58,143,0.09) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" },
  arcOuter: { position: "absolute", top: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", border: "1.5px solid rgba(26,58,143,0.1)", pointerEvents: "none" },
  arcInner: { position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", border: "1.5px solid rgba(26,58,143,0.07)", pointerEvents: "none" },
  mainContent: { maxWidth: "1280px", margin: "0 auto", padding: "100px 24px", position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center" },
  eyebrow: { display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.13em", textTransform: "uppercase", color: "#1976d2", backgroundColor: "#eef3fd", border: "1px solid #c7d8f5", padding: "6px 14px", borderRadius: "2px" },
  dot: { display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1976d2" },
  heading: { fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.2, color: "#0f172a", marginBottom: "0", maxWidth: "900px", textAlign: "center" },
  gradientText: { color: "transparent", backgroundImage: "linear-gradient(135deg, #1a3a8f, #1976d2, #42a5f5)", WebkitBackgroundClip: "text", backgroundClip: "text" },
  dividerWrap: { display: "flex", alignItems: "center", gap: "12px", margin: "28px 0", maxWidth: "480px", width: "100%", justifyContent: "center" },
  lineLong: { height: "1px", width: "100px", background: "linear-gradient(90deg, transparent, #1a3a8f)" },
  lineShort: { height: "1px", width: "100px", background: "linear-gradient(90deg, #1a3a8f, transparent)" },
  bodyText: { fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", fontWeight: 300, lineHeight: 1.8, color: "#4b5563", maxWidth: "800px", textAlign: "center" },
};

// ─── MAIN COMPONENT ───

export default function EmpoweringHero() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section style={STYLES.section}>
        {/* ── Giant ghost text watermark ── */}
        <div className="eh-bg-text" style={STYLES.watermark}>
          EMPOWERING
        </div>

        {/* ── SVG Wave Background ── */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-end justify-center">
          <svg viewBox="0 0 1440 320" className="w-full min-w-360 h-auto" fill="none" stroke="#1a3a8f" strokeWidth="1.5">
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
        <div className="sm:px-12 lg:px-20" style={STYLES.mainContent}>
          
          {/* Eyebrow tag */}
          <div className="eh-eyebrow" style={{ marginBottom: "20px" }}>
            <span style={STYLES.eyebrow}>
              <span className="eh-dot" style={STYLES.dot} />
              M&C Educational Consultancy
            </span>
          </div>

          {/* Main heading */}
          <h1 className="eh-heading" style={STYLES.heading}>
            Empowering Indian Students <br className="hidden sm:block" />
            to Become <span style={STYLES.gradientText}>Global Doctors</span>
          </h1>

          {/* Ruled divider with diamond */}
          <div className="eh-divider" style={STYLES.dividerWrap}>
            <div style={STYLES.lineLong} />
            <span style={{ color: "#1976d2", fontSize: "0.6rem" }}>◆</span>
            <div style={STYLES.lineShort} />
          </div>

          {/* Body text */}
          <p className="eh-body" style={STYLES.bodyText}>
            Affordable tuition, globally recognized degrees, and full support from application to arrival — your medical career starts here.
          </p>
          
        </div>
      </section>
    </>
  );
}