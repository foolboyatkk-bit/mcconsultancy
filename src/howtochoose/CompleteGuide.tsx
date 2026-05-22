import  { useEffect, useRef, useState } from 'react';

// ─── STATIC DATA & STYLES ───

const GUIDE_POINTS = [
  {
    title: "Experience Matters",
    description: "Check how many years they are working and how many students they have guided successfully."
  },
  {
    title: "They Speak the Truth",
    description: "A good consultancy will tell you clearly which university you can get and the exact fees. They will not give false promises."
  },
  {
    title: "Legally Registered",
    description: "Make sure the consultancy is registered and works legally. Ask for their registration proof if needed."
  },
  {
    title: "Complete Support",
    description: "They should help you in choosing the course, admission process, visa, travel, and staying abroad."
  },
  {
    title: "Happy Students",
    description: "Ask for their past students' details or photos. Their success stories show how genuine the consultancy is."
  },
  {
    title: "Clear Fees",
    description: "They should explain their service charges and university fees clearly without hiding anything."
  },
  {
    title: "Respect and Care",
    description: "Good consultancies listen to students and parents with patience and guide them like their own family."
  }
];

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

  /* ── Scroll-Triggered Keyframes ── */
  @keyframes cg-fly-in-left { 
    0% { opacity: 0; transform: translateX(-100vw) rotateY(-15deg); } 
    100% { opacity: 1; transform: translateX(0) rotateY(0); } 
  }
  
  @keyframes cg-fly-in-right { 
    0% { opacity: 0; transform: translateX(100vw) rotateY(15deg); } 
    100% { opacity: 1; transform: translateX(0) rotateY(0); } 
  }

  @keyframes cg-fly-in-bottom { 
    0% { opacity: 0; transform: translateY(120px) scale(0.9); } 
    100% { opacity: 1; transform: translateY(0) scale(1); } 
  }

  .cg-section { 
    font-family: 'DM Sans', sans-serif; 
    perspective: 1500px; /* Gives the flying effect a 3D depth */
  }

  /* Base hidden state */
  .cg-hidden-start {
    opacity: 0;
  }
  
  /* Active animation states triggered by Javascript */
  .is-visible .anim-left { animation: cg-fly-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards; }
  .is-visible .anim-right { animation: cg-fly-in-right 1s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards; }
  .is-visible .anim-bottom { animation: cg-fly-in-bottom 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards; }

  /* ── Card Styles & Hover Effects ── */
  .cg-card {
    background: #ffffff;
    border: 1px solid rgba(26, 58, 143, 0.1);
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
  }

  /* Animated bottom gradient line */
  .cg-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #1a3a8f, #42a5f5, #1a3a8f);
    background-size: 200% 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  .cg-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(26, 58, 143, 0.2);
    box-shadow: 0 20px 40px -10px rgba(26, 58, 143, 0.12);
  }

  /* Expand the gradient line on hover */
  .cg-card:hover::after {
    transform: scaleX(1);
    animation: cg-shimmer 2s linear infinite;
  }

  @keyframes cg-shimmer {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }

  .cg-number-badge {
    background: #eef3fd;
    color: #1976d2;
    border: 1px solid #c7d8f5;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .cg-card:hover .cg-number-badge {
    background: linear-gradient(110deg, #1a3a8f 0%, #1976d2 100%);
    color: #ffffff;
    border-color: transparent;
    transform: scale(1.15) rotate(-6deg);
    box-shadow: 0 6px 16px rgba(26, 58, 143, 0.25);
  }
`;

export default function CompleteGuide() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Unobserve so it only animates once
        }
      },
      { 
        threshold: 0, 
        rootMargin: "0px 0px -100px 0px" // Triggers exactly when the section enters the bottom of the screen
      } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      {/* Attach ref and toggle 'is-visible' class based on scroll */}
      <section 
        ref={sectionRef}
        className={`cg-section w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
        style={{
          backgroundColor: "#f4f7fd",
          backgroundImage: "radial-gradient(circle, rgba(26,58,143,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        {/* Ambient Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* ── Section Header (Animates from bottom) ── */}
          <div className="text-center mb-16 flex flex-col items-center cg-hidden-start anim-bottom">
            {/* Eyebrow */}
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.13em", textTransform: "uppercase", color: "#1976d2",
              backgroundColor: "#eef3fd", border: "1px solid #c7d8f5",
              padding: "6px 16px", borderRadius: "20px", marginBottom: "20px"
            }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1976d2" }} />
              Essential Checklist
            </span>

            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.2, marginBottom: "16px" }}>
              A Complete Guide for <br className="hidden sm:block" />
              <span style={{ color: "transparent", backgroundImage: "linear-gradient(135deg, #1a3a8f, #1976d2, #42a5f5)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                Indian Students
              </span>
            </h2>
            
            <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "#4b5563", maxWidth: "600px", lineHeight: 1.6 }}>
              Choosing the right consultancy is the foundation of your medical career. Please evaluate your options using these critical points.
            </p>
          </div>

          {/* ── Bento Grid Layout ── */}
          <div className="grid grid-cols-12 gap-5 xl:gap-6">
            {GUIDE_POINTS.map((point, index) => {
              // Grid Logic
              const isTopRow = index < 4;
              
              // Animation Logic: Decide which direction the card comes from
              let animationDirection = '';
              if (index === 0 || index === 4) {
                animationDirection = 'anim-left'; // Far left cards fly from left
              } else if (index === 3 || index === 6) {
                animationDirection = 'anim-right'; // Far right cards fly from right
              } else {
                animationDirection = 'anim-bottom'; // Middle cards pop up from bottom
              }

              // Staggered delay so they don't all fly in at the exact same millisecond
              const delay = (index * 0.1) + 's';
              
              return (
                <div 
                  key={index} 
                  className={`
                    cg-hidden-start cg-card p-6 sm:p-8 rounded-xl flex flex-col items-start text-left
                    col-span-12 md:col-span-6 
                    ${isTopRow ? 'lg:col-span-3' : 'lg:col-span-4'}
                    ${animationDirection}
                  `}
                  style={{ animationDelay: delay }}
                >
                  <div className="flex items-center gap-4 mb-5 w-full relative z-10">
                    <span className="cg-number-badge w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="text-[#0f172a] font-semibold text-lg leading-tight">
                      {point.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#4b5563] text-[0.92rem] leading-relaxed font-light mt-auto relative z-10">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}