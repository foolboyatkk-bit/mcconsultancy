import { useEffect, useRef } from "react";
import mission from "../assets/about/ourvision.webp";
import vision from "../assets/about/ourmission.webp";
import values from "../assets/about/values.webp";

const TIMELINE_DATA = [
  {
    id: "mission",
    title: "Our mission",
    description:
      "To empower students, women, and children through education, healthcare, and support. We collaborate with top Indian and international institutions to promote excellence in medical and engineering fields. With compassion and care, we provide relief during calamities and deliver valuable services to society.",
    imageSrc: mission,
    label: "What We Do",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "vision",
    title: "Our vision",
    description:
      "We envision creating a better and more inclusive society by providing opportunities for growth through education. Our focus is on empowering students to achieve academic and professional success. We are deeply committed to uplifting women and children through continuous support and guidance.",
    imageSrc: vision,
    label: "Where We're Headed",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "values",
    title: "Our values",
    description:
      "We believe in empowering students, women, and children through education, healthcare, and support, while promoting excellence in medical and engineering fields. We uphold Excellence by delivering the best services in education and healthcare. Through Collaboration with reputed institutions, we create better opportunities and lasting impact on society.",
    imageSrc: values,
    label: "What We Stand For",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3h12l4 6-10 13L2 9Z" />
      </svg>
    ),
  },
];

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

  .mvv-section { font-family: 'DM Sans', sans-serif; background-color: #f4f7fd; }
  .mvv-panel { opacity: 0; transform: translateY(48px); transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1); }
  .mvv-panel.mvv-in { opacity: 1; transform: translateY(0); }

  .mvv-img-wrap { opacity: 0; transform: translateX(40px); transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s; }
  .mvv-panel.mvv-in .mvv-img-wrap { opacity: 1; transform: translateX(0); }
  .mvv-panel:nth-child(even) .mvv-img-wrap { transform: translateX(-40px); }
  .mvv-panel.mvv-in:nth-child(even) .mvv-img-wrap { transform: translateX(0); }

  .mvv-card {
    background: #ffffff; border: 1px solid rgba(26,58,143,0.1); border-radius: 20px;
    position: relative; overflow: hidden; transition: box-shadow 0.4s ease, border-color 0.4s ease;
  }
  .mvv-card:hover { border-color: rgba(26,58,143,0.22); box-shadow: 0 24px 60px -12px rgba(26,58,143,0.13); }
  .mvv-card::after {
    content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 3px;
    background: linear-gradient(90deg, #1a3a8f, #42a5f5, #1a3a8f); background-size: 200% 100%;
    transform: scaleX(0); transform-origin: left; transition: transform 0.45s ease;
  }
  .mvv-card:hover::after { transform: scaleX(1); animation: mvv-shimmer 2s linear infinite; }
  @keyframes mvv-shimmer { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }

  .mvv-accent-bar {
    position: absolute; left: 0; top: 10%; bottom: 10%; width: 4px;
    border-radius: 0 4px 4px 0; background: linear-gradient(180deg, #1a3a8f 0%, #42a5f5 100%);
  }
  .mvv-ghost-num {
    font-family: 'DM Sans', sans-serif; font-weight: 800; font-size: clamp(60px, 10vw, 120px);
    line-height: 1; background: linear-gradient(135deg, rgba(26,58,143,0.07) 0%, rgba(66,165,250,0.04) 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
    position: absolute; right: -10px; bottom: -10px; pointer-events: none; user-select: none; z-index: 0;
  }
  .mvv-icon-badge {
    width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, #1a3a8f 0%, #1976d2 100%);
    display: flex; align-items: center; justify-content: center; color: #fff; flex-shrink: 0;
    box-shadow: 0 6px 16px rgba(26,58,143,0.25); transition: transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
  }
  .mvv-card:hover .mvv-icon-badge { transform: scale(1.12) rotate(-6deg); }
  .mvv-pill {
    display: inline-flex; align-items: center; gap: 6px; font-size: 0.67rem; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase; color: #1976d2; background: #eef3fd;
    border: 1px solid #c7d8f5; padding: 5px 13px; border-radius: 100px;
  }
  .mvv-img-panel {
    background: linear-gradient(135deg, #eef3fd 0%, #f4f7fd 100%); border-radius: 14px; overflow: hidden;
    display: flex; align-items: center; justify-content: center; padding: 24px; min-height: 200px;
  }
  @media (max-width: 768px) {
    .mvv-inner-grid { flex-direction: column !important; }
    .mvv-img-panel { min-height: 180px; }
  }
`;

export default function MissionVisionTimeline() {
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mvv-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    panelRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section
        className="mvv-section w-full py-16 sm:py-24 px-5 sm:px-12 lg:px-16 relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,58,143,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "20%",
            width: "500px",
            height: "400px",
            background: "rgba(66,165,250,0.07)",
            borderRadius: "50%",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "15%",
            width: "400px",
            height: "300px",
            background: "rgba(26,58,143,0.07)",
            borderRadius: "50%",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span
              className="mvv-pill"
              style={{ marginBottom: "18px", display: "inline-flex" }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#1976d2",
                }}
              />
              Who We Are
            </span>
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 2.9rem)",
                color: "#0f172a",
                lineHeight: 1.15,
                margin: "0 auto",
                maxWidth: "600px",
              }}
            >
              Built on Purpose,{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg,#1a3a8f,#1976d2,#42a5f5)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Driven by Vision
              </span>
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    panelRefs.current[index] = el;
                  }}
                  className="mvv-panel mvv-card p-7 pl-10 sm:p-10 sm:pl-12"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="mvv-accent-bar" />
                  <div className="mvv-ghost-num">0{index + 1}</div>

                  <div
                    className="mvv-inner-grid"
                    style={{
                      display: "flex",
                      flexDirection: isEven ? "row" : "row-reverse",
                      gap: "36px",
                      alignItems: "center",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          marginBottom: "16px",
                        }}
                      >
                        <div className="mvv-icon-badge">{item.icon}</div>
                        <span className="mvv-pill">{item.label}</span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                          color: "#0f172a",
                          marginBottom: "14px",
                          lineHeight: 1.2,
                          textTransform: "capitalize",
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "0.97rem",
                          fontWeight: 300,
                          color: "#4b5563",
                          lineHeight: 1.75,
                          margin: 0,
                          maxWidth: "540px",
                        }}
                      >
                        {item.description}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          marginTop: "22px",
                          alignItems: "center",
                        }}
                      >
                        {[40, 24, 14].map((w, i) => (
                          <div
                            key={i}
                            style={{
                              height: "3px",
                              width: `${w}px`,
                              borderRadius: "4px",
                              background:
                                i === 0
                                  ? "linear-gradient(90deg,#1a3a8f,#42a5f5)"
                                  : "rgba(26,58,143,0.12)",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mvv-img-wrap w-full max-w-60 sm:max-w-70 lg:max-w-75 shrink-0 mx-auto lg:mx-0">
                      <div className="mvv-img-panel">
                        <img
                          src={item.imageSrc}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                            transition: "transform 0.6s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "scale(1.06)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
