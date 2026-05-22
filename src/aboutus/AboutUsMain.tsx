import  { useEffect, useRef, useState } from "react";

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');

  @keyframes au-fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes au-fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes au-slide-right { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }

  .au-section { font-family: 'DM Sans', sans-serif; }
  .au-hidden-start { opacity: 0; will-change: transform, opacity; }
  .is-visible.au-section { animation: au-fade-in 0.8s ease both; }
  .is-visible .anim-img { animation: au-slide-right 0.8s cubic-bezier(0.33, 1, 0.68, 1) forwards; animation-delay: 0.15s; }
  .is-visible .anim-text { animation: au-fade-up 0.8s cubic-bezier(0.33, 1, 0.68, 1) forwards; animation-delay: 0.3s; }
`;

export default function AboutUsMain() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section
        ref={sectionRef}
        className={`au-section w-full py-16 sm:py-24 px-5 sm:px-12 lg:px-16 relative overflow-hidden ${isVisible ? "is-visible" : ""}`}
        style={{
          backgroundColor: "#0a1128",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="au-hidden-start anim-img relative">
              <div
                className="w-full rounded-2xl overflow-hidden relative group"
                style={{
                  boxShadow: "0 24px 64px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-[#0a1128]/60 via-transparent to-transparent pointer-events-none z-10" />
                <img
                  src="about.webp"
                  alt="M & C Educational Consultancy Office"
                  className="w-full h-auto object-cover relative z-0 transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 md:-right-8 bg-[#0d1631]/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl hidden sm:block z-20">
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full absolute animate-ping opacity-75"></div>
                  </div>
                  <p className="text-[0.95rem] font-medium text-blue-50 tracking-wide">
                    Est. 2020 • Kanyakumari
                  </p>
                </div>
              </div>
            </div>

            <div className="au-hidden-start anim-text flex flex-col">
              <div style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "#93b4e8",
                    backgroundColor: "rgba(147,180,232,0.08)",
                    border: "1px solid rgba(147,180,232,0.15)",
                    padding: "6px 16px",
                    borderRadius: "20px",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#60a5fa",
                      display: "inline-block",
                    }}
                  />
                  About Us
                </span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.15,
                  marginBottom: "28px",
                }}
              >
                M & C Educational <br />
                <span
                  style={{
                    color: "transparent",
                    backgroundImage: "linear-gradient(135deg, #60a5fa, #93b4e8, #e0e7ff)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  Consultancy
                </span>
              </h2>

              <div
                className="flex flex-col gap-5 mb-8"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "rgba(219,233,255,0.75)",
                }}
              >
                <p>
                  M & C Educational Consultancy was established in 2020 and is
                  located in Kanyakumari District, Tamil Nadu.
                </p>
                <p>
                  We are a dedicated educational consultancy and social welfare
                  center, guiding and promoting quality education for students
                  in India and overseas. Our team is specialized in providing
                  expert guidance to students and their families at every stage
                  of their academic journey.
                </p>
                <p>
                  With over 10 years of experience, we assist students in
                  choosing top universities for MBBS (General Medicine) in
                  secured countries such as Russia and Uzbekistan.
                </p>
                <p>
                  We strongly uphold our professional ethics to support parents
                  and students in the admission process through legal and lawful
                  ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}