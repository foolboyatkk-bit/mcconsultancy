import React from 'react';

// ─── STATIC STYLES ───
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');

  @keyframes ci-fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes ci-fade-up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes ci-slide-right { from { opacity: 0; transform: translateX(-24px); } to { opacity: 1; transform: translateX(0); } }

  .ci-section { animation: ci-fade-in 0.6s ease both; font-family: 'DM Sans', sans-serif; }
  .ci-img-wrap { animation: ci-slide-right 0.7s cubic-bezier(0.33, 1, 0.68, 1) both; animation-delay: 0.15s; }
  .ci-content { animation: ci-fade-up 0.7s cubic-bezier(0.33, 1, 0.68, 1) both; animation-delay: 0.3s; }
`;

export default function ConsultancyIntro() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section 
        className="ci-section w-full py-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0a1128",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        {/* Main Container */}
        <div className="max-w-7xl mx-auto">
          
          {/* Grid Layout: 1 column on mobile, 2 columns on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* ── Left Column: Image ── */}
            <div 
              className="ci-img-wrap w-full rounded-lg overflow-hidden relative group"
              style={{ 
                boxShadow: "0 24px 64px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,17,40,0.4), transparent)", pointerEvents: "none", zIndex: 1 }} />
              <img 
                src="img1.svg" 
                alt="Graduating medical students outside a university building" 
                className="w-full h-auto object-cover relative z-0 transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* ── Right Column: Text Content ── */}
            <div className="ci-content flex flex-col">
              
              {/* Eyebrow Tag */}
              <div style={{ marginBottom: "20px" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.68rem", fontWeight: 500,
                  letterSpacing: "0.13em", textTransform: "uppercase", color: "#93b4e8",
                  backgroundColor: "rgba(147,180,232,0.1)", border: "1px solid rgba(147,180,232,0.2)",
                  padding: "6px 16px", borderRadius: "2px"
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#60a5fa", display: "inline-block" }} />
                  Welcome to M&C
                </span>
              </div>

              {/* Heading */}
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: "24px" }}>
                How to Choose the Best Educational Consultancy for <br/>
                <span style={{ color: "transparent", backgroundImage: "linear-gradient(135deg, #60a5fa, #93b4e8, #e0e7ff)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                  MBBS Abroad?
                </span>
              </h2>

              {/* Sub-heading / Greeting */}
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#93b4e8", marginBottom: "16px", letterSpacing: "0.02em" }}>
                Dear Students and Parents,
              </h3>

              {/* Paragraph */}
              <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(219,233,255,0.75)", textAlign: "justify" }}>
                Over the years, M & C Educational Consultancy has guided more than 5000 students 
                to pursue their MBBS dreams in countries like Russia, and Uzbekistan. We feel proud 
                to see our students studying confidently in top universities and building their future 
                as doctors. Choosing the right educational consultancy is one of the most crucial 
                steps when planning to study MBBS abroad. The right consultancy not only guides 
                you through the admission process but also ensures your journey is smooth and 
                secure.
              </p>

            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}