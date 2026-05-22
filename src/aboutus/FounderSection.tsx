import { useEffect, useRef, useState } from 'react';

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

  .fs-section { font-family: 'DM Sans', sans-serif; overflow: hidden; }

  @keyframes fs-fade-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
  @keyframes fs-slide-right { 0% { opacity: 0; transform: translateX(-40px); } 100% { opacity: 1; transform: translateX(0); } }

  .fs-hidden-start { opacity: 0; will-change: transform, opacity; }

  .is-visible .anim-img { animation: fs-slide-right 0.8s cubic-bezier(0.33, 1, 0.68, 1) forwards; animation-delay: 0.1s; }
  .is-visible .anim-text { animation: fs-fade-up 0.8s cubic-bezier(0.33, 1, 0.68, 1) forwards; animation-delay: 0.3s; }

  .fs-image-frame {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(147, 180, 232, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

export default function FounderSection() {
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
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section 
        ref={sectionRef}
        className={`fs-section w-full py-16 sm:py-24 px-5 sm:px-12 relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
        style={{
          backgroundColor: "#0a1128",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="fs-hidden-start anim-img order-1 lg:col-span-4 w-full max-w-[320px] sm:max-w-95 lg:max-w-full mx-auto lg:mx-0">
              <div className="fs-image-frame p-1.5 rounded-xl overflow-hidden shadow-2xl">
                <div className="w-full overflow-hidden rounded-lg relative bg-[#eef3fd] aspect-4/5">
                  <img 
                    src="founder.webp" 
                    alt="Dr. M.S. Ramesh Babu - Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="fs-hidden-start anim-text order-2 lg:col-span-8 flex flex-col items-start text-left">
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.65rem", fontWeight: 600,
                letterSpacing: "0.13em", textTransform: "uppercase", color: "#93b4e8",
                backgroundColor: "rgba(147,180,232,0.08)", border: "1px solid rgba(147,180,232,0.15)",
                padding: "4px 12px", borderRadius: "20px", marginBottom: "16px"
              }}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Our Founder
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Dr. M.S. Ramesh Babu
              </h2>
              
              <p className="text-[0.95rem] font-light text-blue-100/70 leading-relaxed text-left">
                Welcome to M and C Educational Consultancy. We are a team of experienced and 
                passionate professionals who are dedicated to helping students achieve their dreams of 
                studying MBBS in Russia. I founded M and C Educational Consultancy with the vision of 
                creating a consultancy firm that would provide students with the highest quality of 
                service and support throughout the study process.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}