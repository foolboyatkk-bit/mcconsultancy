
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

  @keyframes ch-fade-up    { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes ch-fade-in    { from { opacity: 0; }                              to { opacity: 1; } }
  @keyframes ch-slide-right{ from { opacity: 0; transform: translateX(-24px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes ch-panel-grow { from { transform: scaleY(0); transform-origin: top; } to { transform: scaleY(1); transform-origin: top; } }
  @keyframes ch-dot-pulse  { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.7); } }

  .ch-breadcrumb { animation: ch-slide-right 0.55s ease both; animation-delay: 0.05s; }
  .ch-eyebrow    { animation: ch-fade-up    0.55s ease both; animation-delay: 0.15s; }
  .ch-heading    { animation: ch-fade-up    0.65s ease both; animation-delay: 0.25s; }
  .ch-divider    { animation: ch-fade-in    0.5s  ease both; animation-delay: 0.40s; }
  .ch-body       { animation: ch-fade-up    0.6s  ease both; animation-delay: 0.45s; }
  .ch-cta        { animation: ch-fade-up    0.6s  ease both; animation-delay: 0.60s; }
  .ch-stats      { animation: ch-fade-up    0.6s  ease both; animation-delay: 0.75s; }
  .ch-bg-text    { animation: ch-fade-in    1.2s  ease both; animation-delay: 0.10s; }
  .ch-dot        { animation: ch-dot-pulse 2s ease-in-out infinite; }

  .ch-btn-primary {
    background: linear-gradient(110deg, #1a3a8f 0%, #1565c0 40%, #1976d2 100%);
    background-size: 200% auto;
    transition: background-position 0.5s ease, box-shadow 0.3s ease, transform 0.15s ease;
  }
  .ch-btn-primary:hover {
    background-position: right center;
    box-shadow: 0 8px 28px rgba(26,58,143,0.28);
    transform: translateY(-2px);
  }
  .ch-btn-primary:active { transform: translateY(0); }

  .ch-btn-ghost { transition: background 0.25s ease, color 0.25s ease, transform 0.15s ease; }
  .ch-btn-ghost:hover { background: #eef3fd; color: #1a3a8f; transform: translateY(-1px); }

  .ch-arc-outer {
    position: absolute; top: -80px; right: -80px;
    width: 320px; height: 320px;
    border-radius: 50%; border: 1.5px solid rgba(26,58,143,0.10);
    pointer-events: none;
  }
  .ch-arc-inner {
    position: absolute; top: -40px; right: -40px;
    width: 200px; height: 200px;
    border-radius: 50%; border: 1.5px solid rgba(26,58,143,0.07);
    pointer-events: none;
  }
  @media (max-width: 639px) {
    .ch-arc-outer, .ch-arc-inner { display: none; }
  }

`;

export default function AboutUsHero() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#f4f7fd", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div
          className="ch-bg-text absolute -top-2.5 -right-5 select-none pointer-events-none whitespace-nowrap leading-none"
          style={{
            fontSize: "clamp(56px, 12vw, 180px)",
            fontWeight: 800,
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(26,58,143,0.07)",
          }}
        >
          ABOUT
        </div>

        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-end justify-center">
          <svg viewBox="0 0 1440 320" className="w-full min-w-225 h-auto" fill="none" stroke="#1a3a8f" strokeWidth="1.5">
            <path d="M0,160 C320,300 420,0 720,160 C1020,320 1120,50 1440,160" />
            <path d="M0,180 C320,320 420,20 720,180 C1020,340 1120,70 1440,180" />
            <path d="M0,200 C320,340 420,40 720,200 C1020,360 1120,90 1440,200" />
            <path d="M0,220 C320,360 420,60 720,220 C1020,380 1120,110 1440,220" />
          </svg>
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(26,58,143,0.09) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="ch-arc-outer" />
        <div className="ch-arc-inner" />

        <div
          className="
            relative z-10 max-w-7xl mx-auto
            px-5 sm:px-12 lg:px-16 xl:px-20
            py-16 sm:py-24 lg:py-28
            flex flex-col items-center justify-center
          "
        >
          <div className="ch-eyebrow mb-4 sm:mb-5">
            <span
              className="inline-flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.13em] uppercase rounded-sm border px-3.5 py-1.5"
              style={{ color: "#1976d2", backgroundColor: "#eef3fd", border: "1px solid #c7d8f5" }}
            >
              <span
                className="ch-dot inline-block w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "#1976d2" }}
              />
              M&amp;C Educational Consultancy
            </span>
          </div>

          <h1
            className="ch-heading text-center font-bold leading-[1.15]"
            style={{
              fontSize: "clamp(1.7rem, 5vw, 3.75rem)",
              color: "#0f172a",
              maxWidth: "min(720px, 100%)",
            }}
          >
            Guiding Future Doctors <br className="hidden sm:block" />
            <span
              style={{
                color: "transparent",
                backgroundImage: "linear-gradient(135deg, #1a3a8f, #1976d2, #42a5f5)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              with Integrity and Expertise
            </span>
          </h1>

          <div className="ch-divider flex items-center gap-3 my-5 sm:my-6 w-full max-w-65 sm:max-w-xs">
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #1a3a8f, #93b4e8)" }} />
            <span style={{ color: "#1976d2", fontSize: "0.6rem", lineHeight: 1 }}>◆</span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(270deg, #1a3a8f, #93b4e8)" }} />
          </div>

          <p
            className="ch-body text-center font-light leading-relaxed"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              color: "#4b5563",
              maxWidth: "min(650px, 100%)",
              marginBottom: "clamp(24px, 4vw, 36px)",
              lineHeight: 1.8,
            }}
          >
            With years of experience and a deep commitment to excellence, we help aspiring medical
            students navigate their journey to top medical universities worldwide. Your success is
            our mission.
          </p>

          <div className="ch-cta flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
            <a
              href="/contact"
              className="ch-btn-primary rounded-md text-white"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "13px 28px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}