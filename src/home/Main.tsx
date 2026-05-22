import React, { useEffect, useRef, useState } from 'react';

// ─── STATIC DATA & ICONS ───

const STATS_DATA = [
  {
    value: "600+",
    label: "Happy Students",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "10+",
    label: "Years Experience",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l-3 3-2-8 5-2 5 2-2 8-3-3z" />
        <path d="M12 2v6" />
        <path d="M12 22v-4" />
        <path d="M4.93 10.93l-4.24 4.24" />
        <path d="M23.31 15.17l-4.24-4.24" />
      </svg>
    ),
  },
  {
    value: "75+",
    label: "Working Doctors",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <path d="M12 11v4" />
        <path d="M10 13h4" />
      </svg>
    ),
  },
];

// ─── STYLES ───

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

  @keyframes stat-fly-up {
    0%   { opacity: 0; transform: translateY(60px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .stat-section { font-family: 'DM Sans', sans-serif; }

  .stat-hidden-start { opacity: 0; }

  .is-visible .anim-up {
    animation: stat-fly-up 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
  }

  .stat-card {
    background: #ffffff;
    border: 1px solid rgba(26, 58, 143, 0.1);
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                box-shadow 0.4s ease, border-color 0.4s ease;
  }

  .stat-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 4px;
    background: linear-gradient(90deg, #1a3a8f, #42a5f5, #1a3a8f);
    background-size: 200% 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  .stat-card:hover {
    transform: translateY(-8px);
    border-color: rgba(26, 58, 143, 0.2);
    box-shadow: 0 20px 40px -10px rgba(26, 58, 143, 0.12);
  }

  .stat-card:hover::after {
    transform: scaleX(1);
    animation: stat-shimmer 2s linear infinite;
  }

  @keyframes stat-shimmer {
    0%   { background-position:  100% 0; }
    100% { background-position: -100% 0; }
  }

  .stat-icon-badge {
    background: #eef3fd;
    color: #1976d2;
    border: 1px solid #c7d8f5;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .stat-card:hover .stat-icon-badge {
    background: linear-gradient(110deg, #1a3a8f 0%, #1976d2 100%);
    color: #ffffff;
    border-color: transparent;
    transform: scale(1.1) rotate(-6deg);
    box-shadow: 0 6px 16px rgba(26, 58, 143, 0.25);
  }
`;

// ─── COMPONENT ───

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section
        ref={sectionRef}
        className={`stat-section w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
          isVisible ? "is-visible" : ""
        }`}
        style={{
          backgroundColor: "#f4f7fd",
          backgroundImage: "radial-gradient(circle, rgba(26,58,143,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        {/* Ambient glows — hidden on mobile to avoid overflow bleed */}
        <div className="hidden sm:block absolute top-1/2 left-1/4 w-64 lg:w-80 h-64 lg:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 pointer-events-none -translate-y-1/2" />
        <div className="hidden sm:block absolute top-1/2 right-1/4 w-64 lg:w-80 h-64 lg:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 pointer-events-none -translate-y-1/2" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* ── Grid: 1 col mobile → 3 col md+ ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {STATS_DATA.map((stat, index) => (
              <div
                key={index}
                className="stat-hidden-start stat-card anim-up rounded-2xl flex flex-col items-center justify-center text-center
                           p-6 sm:p-8"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="stat-icon-badge p-2.5 rounded-md flex items-center justify-center mb-5 shrink-0">
                  {stat.icon}
                </div>

                {/* Value */}
                <h3 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
                  <span
                    style={{
                      color: "transparent",
                      backgroundImage: "linear-gradient(135deg, #1a3a8f, #1976d2)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </span>
                </h3>

                {/* Label */}
                <p className="text-sm sm:text-[0.95rem] lg:text-[1.05rem] font-medium tracking-wide uppercase text-[#4b5563]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}