import  { useEffect, useRef, useState } from 'react';

// ─── STATIC DATA & STYLES ───

const ADVICE_POINTS = [
  {
    title: "Decide Early",
    description: "If you wish to become a doctor, plan from your school days. Focus on Biology and Chemistry, and aim for good scores in 12th standard."
  },
  {
    title: "Choose the Right University",
    description: "Select a recognised university with proper MCI/NMC approval to ensure your degree is valid in India."
  },
  {
    title: "Be Ready for Hard Work",
    description: "Medical studies require long hours, detailed reading, and practical training. Stay consistent without giving up."
  },
  {
    title: "Face Challenges Bravely",
    description: "Living away from family, language barriers, and exam pressures are common challenges. Stay positive and seek help whenever needed."
  },
  {
    title: "Prepare for Licensing Exams",
    description: "After completing MBBS abroad, you need to clear exams like FMGE/NExT in India to practice as a doctor. Start preparing early."
  },
  {
    title: "Never Lose Compassion",
    description: "Being a doctor is not just about studies. Care for patients with kindness, respect, and responsibility."
  }
];

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
  
  .da-section { font-family: 'DM Sans', sans-serif; }
  .da-hidden { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
  .da-visible { opacity: 1; transform: translateY(0); }
  
  .da-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(147, 180, 232, 0.1);
    transition: all 0.3s ease;
  }
  .da-card:hover { background: rgba(255, 255, 255, 0.06); border-color: rgba(96, 165, 250, 0.3); }
`;

export default function DoctorsAdviceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section
        ref={sectionRef}
        className={`da-section w-full py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
        style={{
          backgroundColor: "#0a1128",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className={`da-hidden ${isVisible ? 'da-visible' : ''} text-center mb-8`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-0">
              A Doctor's Advice — <span className="text-blue-400 italic">How to Become a Doctor?</span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">

            {/* Image Side */}
            <div className={`da-hidden ${isVisible ? 'da-visible' : ''} transition-all duration-1000 delay-300`}>
              <div className="p-1.5 rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
                <img src="adviceImg.svg" alt="Students in doctor coats" className="rounded-xl w-full h-auto" />
              </div>
            </div>

            {/* Advice List Side */}
            <div className="flex flex-col gap-7">
              <p className="text-blue-100/80 mb-1 font-normal text-sm">Becoming a doctor is a noble journey filled with dedication and challenges. Here is my advice to all future doctors:</p>
              {ADVICE_POINTS.map((item, i) => (
                <div key={i} className={`da-card px-4 py-3 rounded-xl flex gap-3 da-hidden ${isVisible ? 'da-visible' : ''}`} style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="text-blue-400 mt-0.5 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-blue-100/60 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Quote */}
          <div className={`da-hidden ${isVisible ? 'da-visible' : ''} transition-all duration-1000 delay-700 text-center bg-white/5 px-8 py-6 rounded-2xl border border-white/10`}>
            <p className="text-base sm:text-lg text-blue-100 font-medium leading-relaxed">
              "Becoming a doctor is not easy, but with focus, discipline, and proper guidance, you can achieve your dream. Never stop learning and always believe in yourself."
            </p>
          </div>

        </div>
      </section>
    </>
  );
}