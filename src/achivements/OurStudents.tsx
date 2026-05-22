import { useEffect, useRef, useState } from 'react';

// ─── STATIC STYLES ───

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

  @keyframes os-fade-up { 
    0% { opacity: 0; transform: translateY(30px); } 
    100% { opacity: 1; transform: translateY(0); } 
  }

  .os-section { 
    font-family: 'DM Sans', sans-serif; 
  }

  .os-hidden-start {
    opacity: 0;
    will-change: transform, opacity; 
  }
  
  /* Staggered animation triggers */
  .is-visible .anim-1 { animation: os-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.1s; }
  .is-visible .anim-2 { animation: os-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.25s; }
  .is-visible .anim-3 { animation: os-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.4s; }
  .is-visible .anim-4 { animation: os-fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.55s; }

  /* Premium Image Frame Hover */
  .os-image-frame {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(147, 180, 232, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .os-image-frame:hover {
    border-color: rgba(96, 165, 250, 0.4);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px -10px rgba(96, 165, 250, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transform: translateY(-6px);
  }
`;

export default function OurStudents() {
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
        className={`os-section w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
        style={{
          backgroundColor: "#0a1128",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        {/* Performance-friendly Ambient Glows */}
        <div 
          className="absolute top-0 left-0 w-150 h-150 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(26,58,143,0.2) 0%, transparent 60%)', transform: 'translate(-20%, -20%)' }} 
        />
        <div 
          className="absolute bottom-1/4 right-0 w-125 h-125 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(66,165,245,0.1) 0%, transparent 60%)', transform: 'translate(20%, 20%)' }} 
        />

        <div className="max-w-340 mx-auto relative z-10">
          
          {/* ── Block 1: Content Left, Image Right ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
            
            {/* Content (Left - spans 5 columns on large screens) */}
            <div className="flex flex-col items-start text-left os-hidden-start anim-1 order-1 lg:col-span-5">
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.68rem", fontWeight: 600,
                letterSpacing: "0.13em", textTransform: "uppercase", color: "#93b4e8",
                backgroundColor: "rgba(147,180,232,0.08)", border: "1px solid rgba(147,180,232,0.15)",
                padding: "6px 16px", borderRadius: "20px", marginBottom: "20px"
              }}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Global Reach
              </span>

              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: "20px" }}>
                Our Students <br/>
                <span style={{ color: "transparent", backgroundImage: "linear-gradient(135deg, #60a5fa, #93b4e8, #ffffff)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Sent to Abroad</span>
              </h2>
              
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(219,233,255,0.7)", lineHeight: 1.7 }}>
                Over the years, M & C Educational Consultancy has guided more than 150 students to pursue their MBBS dreams in countries like Russia and Uzbekistan. We feel proud to see our students studying confidently in top universities and building their future as doctors.
              </p>
            </div>

            {/* Image (Right - spans 7 columns on large screens to make it bigger) */}
            <div className="os-hidden-start anim-2 order-2 lg:col-span-7 w-full">
              <div className="os-image-frame p-2 rounded-2xl group overflow-hidden w-full shadow-2xl">
                <div className="w-full overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a1128]/60 via-transparent to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="img1(1).svg" 
                    alt="Group of students arriving at the terminal abroad" 
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

          </div>


          {/* ── Block 2: Image Left, Content Right ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Image (Left on Desktop - spans 7 columns to make it bigger) */}
            <div className="os-hidden-start anim-3 order-2 lg:order-1 lg:col-span-7 w-full">
              <div className="os-image-frame p-2 rounded-2xl group overflow-hidden w-full shadow-2xl">
                <div className="w-full overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a1128]/60 via-transparent to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="img2.svg" 
                    alt="Group of successful students in doctor coats" 
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            {/* Content (Right on Desktop - spans 5 columns) */}
            <div className="flex flex-col items-start text-left os-hidden-start anim-4 order-1 lg:order-2 lg:col-span-5">
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.68rem", fontWeight: 600,
                letterSpacing: "0.13em", textTransform: "uppercase", color: "#93b4e8",
                backgroundColor: "rgba(147,180,232,0.08)", border: "1px solid rgba(147,180,232,0.15)",
                padding: "6px 16px", borderRadius: "20px", marginBottom: "20px"
              }}>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Success Stories
              </span>

              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: "20px" }}>
                Our Students <br/>
                <span style={{ color: "transparent", backgroundImage: "linear-gradient(135deg, #60a5fa, #93b4e8, #ffffff)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>as Doctors</span>
              </h2>
              
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(219,233,255,0.7)", lineHeight: 1.7 }}>
                Today, over 50 of our students are working as successful doctors in India and abroad. Their journey inspires us every day to continue guiding new students with the same dedication and care.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}