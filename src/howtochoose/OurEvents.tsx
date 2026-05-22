import { useEffect, useRef, useState } from 'react';

// ─── STATIC STYLES ───

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

  @keyframes oe-fade-up { 
    0% { opacity: 0; transform: translateY(30px); } 
    100% { opacity: 1; transform: translateY(0); } 
  }

  .oe-section { 
    font-family: 'DM Sans', sans-serif; 
  }

  .oe-hidden-start {
    opacity: 0;
    /* Hardware acceleration hint for smoother scrolling animations */
    will-change: transform, opacity; 
  }
  
  /* Staggered animation triggers */
  .is-visible .anim-1 { animation: oe-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.1s; }
  .is-visible .anim-2 { animation: oe-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.25s; }
  .is-visible .anim-3 { animation: oe-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.4s; }

  /* Premium Image Frame Hover */
  .oe-image-frame {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(147, 180, 232, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .oe-image-frame:hover {
    border-color: rgba(96, 165, 250, 0.4);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px -10px rgba(96, 165, 250, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transform: translateY(-6px);
  }
`;

export default function OurEvents() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -100px 0px" }
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
        className={`oe-section w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
        style={{
          backgroundColor: "#0a1128",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        {/* PERFORMANCE FIX: Replaced heavy CSS blur() filters with lightweight radial gradients */}
        <div 
          className="absolute top-0 right-0 w-150 h-150 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(26,58,143,0.2) 0%, transparent 60%)', transform: 'translate(20%, -20%)' }} 
        />
        <div 
          className="absolute bottom-0 left-0 w-125 h-125 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(66,165,245,0.1) 0%, transparent 60%)', transform: 'translate(-20%, 20%)' }} 
        />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* ── Section Header ── */}
          <div className="text-center mb-16 flex flex-col items-center oe-hidden-start anim-1">
            {/* Eyebrow Tag */}
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.13em", textTransform: "uppercase", color: "#93b4e8",
              backgroundColor: "rgba(147,180,232,0.08)", border: "1px solid rgba(147,180,232,0.15)",
              padding: "6px 16px", borderRadius: "20px", marginBottom: "20px"
            }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Gallery & Memories
            </span>

            <h2 style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}>
              Discover{" "}
              <span style={{ color: "transparent", backgroundImage: "linear-gradient(135deg, #60a5fa, #93b4e8, #ffffff)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                Our Events
              </span>
            </h2>
            
            <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(219,233,255,0.7)", maxWidth: "800px", lineHeight: 1.7, margin: "0 auto" }}>
              Parents students meeting held on 2019. Our old student’s speech regarding college environment, accommodation, 
              classes and their routine life. Parent speech regarding college visit, our guidance in Russia, about the travel and the 
              college infrastructure.
            </p>
          </div>

          {/* ── Event Block 1: Parents Meeting ── */}
          <div className="mb-20 oe-hidden-start anim-2">
            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="oe-image-frame p-2 rounded-2xl group overflow-hidden">
                <div className="w-full h-full overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a1128]/60 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="gallery1.svg" 
                    alt="Parents and students interacting around a table" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="oe-image-frame p-2 rounded-2xl group overflow-hidden">
                <div className="w-full h-full overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a1128]/60 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="gallery2.svg" 
                    alt="Group discussion with students and parents" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            {/* Caption */}
            <div className="mt-8 flex justify-center">
              <h3 className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 text-center text-[0.95rem] sm:text-base font-medium text-[#dbe9ff] shadow-lg">
                <span className="text-blue-400 font-bold mr-2">2019</span> 
                Student's parents get together meeting
              </h3>
            </div>
          </div>

          {/* ── Event Block 2: Group Photo ── */}
          <div className="oe-hidden-start anim-3">
            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="oe-image-frame p-2 rounded-2xl group overflow-hidden">
                <div className="w-full h-full overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a1128]/60 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="gallery3.svg" 
                    alt="Consultancy staff speaking to students and parents" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="oe-image-frame p-2 rounded-2xl group overflow-hidden">
                <div className="w-full h-full overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a1128]/60 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="gallery4.svg" 
                    alt="Large group photo of students and parents" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            {/* Caption */}
            <div className="mt-8 flex justify-center">
              <h3 className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 text-center text-[0.95rem] sm:text-base font-medium text-[#dbe9ff] shadow-lg">
                <span className="text-blue-400 font-bold mr-2">2019</span> 
                Student's group photo
              </h3>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}