"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  BadgeDollarSign,
  Building2,
  UserCheck,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

// ─── STATIC DATA ───

const SERVICES = [
  {
    icon: ClipboardList,
    title: "Complete Admission Guidance",
    description: "End-to-end support ensuring your university application is flawless and timely.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Fees Structure",
    description: "Transparent and cost-effective educational options without hidden charges.",
  },
  {
    icon: Building2,
    title: "World-Class Infrastructure",
    description: "Study in highly accredited universities with state-of-the-art medical facilities.",
  },
  {
    icon: UserCheck,
    title: "Personalized Mentorship",
    description: "Dedicated counselors to guide you through academics and career planning.",
  },
  {
    icon: GraduationCap,
    title: "Educational Loan Assistance",
    description: "Streamlined paperwork and guidance to help you secure student financing.",
  },
  {
    icon: CheckCircle2,
    title: "Hassle-Free Process",
    description: "From visas to travel arrangements, we handle the complexities for you.",
  },
];

// ─── STATIC STYLES ───

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

  /* ── Scroll-Triggered Keyframes ── */
  @keyframes hs-fly-in-left { 
    0% { opacity: 0; transform: translateX(-100vw) rotateY(-15deg); } 
    100% { opacity: 1; transform: translateX(0) rotateY(0); } 
  }
  
  @keyframes hs-fly-in-right { 
    0% { opacity: 0; transform: translateX(100vw) rotateY(15deg); } 
    100% { opacity: 1; transform: translateX(0) rotateY(0); } 
  }

  @keyframes hs-fly-in-bottom { 
    0% { opacity: 0; transform: translateY(120px) scale(0.9); } 
    100% { opacity: 1; transform: translateY(0) scale(1); } 
  }

  .hs-section { 
    font-family: 'DM Sans', sans-serif; 
    perspective: 1500px; /* Gives the flying effect a 3D depth */
  }

  /* Base hidden state */
  .hs-hidden-start {
    opacity: 0;
  }
  
  /* Active animation states triggered by Javascript */
  .is-visible .anim-left { animation: hs-fly-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards; }
  .is-visible .anim-right { animation: hs-fly-in-right 1s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards; }
  .is-visible .anim-bottom { animation: hs-fly-in-bottom 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards; }

  /* ── Card Styles & Hover Effects ── */
  .hs-card {
    background: #ffffff;
    border: 1px solid rgba(26, 58, 143, 0.1);
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
  }

  /* Animated bottom gradient line */
  .hs-card::after {
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
  
  .hs-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(26, 58, 143, 0.2);
    box-shadow: 0 20px 40px -10px rgba(26, 58, 143, 0.12);
  }

  /* Expand the gradient line on hover */
  .hs-card:hover::after {
    transform: scaleX(1);
    animation: hs-shimmer 2s linear infinite;
  }

  @keyframes hs-shimmer {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }

  .hs-icon-badge {
    background: #eef3fd;
    color: #1976d2;
    border: 1px solid #c7d8f5;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .hs-card:hover .hs-icon-badge {
    background: linear-gradient(110deg, #1a3a8f 0%, #1976d2 100%);
    color: #ffffff;
    border-color: transparent;
    transform: scale(1.15) rotate(-6deg);
    box-shadow: 0 6px 16px rgba(26, 58, 143, 0.25);
  }
`;

export default function HighlightedServices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
        className={`hs-section w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${isVisible ? 'is-visible' : ''}`}
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
          <div className="text-center mb-16 flex flex-col items-center hs-hidden-start anim-bottom">
            {/* Eyebrow */}
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.13em", textTransform: "uppercase", color: "#1976d2",
              backgroundColor: "#eef3fd", border: "1px solid #c7d8f5",
              padding: "6px 16px", borderRadius: "20px", marginBottom: "20px"
            }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1976d2" }} />
              What We Offer
            </span>

            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.2, marginBottom: "16px" }}>
              Our Highlighted 
              <span style={{ color: "transparent", backgroundImage: "linear-gradient(135deg, #1a3a8f, #1976d2, #42a5f5)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                {" "}Services
              </span>
            </h2>
            
            <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "#4b5563", maxWidth: "600px", lineHeight: 1.6 }}>
              Comprehensive support designed to make your journey to becoming a medical professional as smooth as possible.
            </p>
          </div>

          {/* ── Bento Grid Layout ── */}
          <div className="grid grid-cols-12 gap-5 xl:gap-6">
            {SERVICES.map((service, index) => {
              
              // Animation Logic: Decide which direction the card comes from based on column position
              let animationDirection = '';
              if (index % 3 === 0) {
                animationDirection = 'anim-left'; // Left column flies from left
              } else if (index % 3 === 2) {
                animationDirection = 'anim-right'; // Right column flies from right
              } else {
                animationDirection = 'anim-bottom'; // Middle column pops up from bottom
              }

              // Staggered delay so they don't all fly in at the exact same millisecond
              const delay = (index * 0.1) + 's';
              const Icon = service.icon;
              
              return (
                <div 
                  key={index} 
                  className={`
                    hs-hidden-start hs-card p-6 sm:p-8 rounded-xl flex flex-col items-start text-left
                    col-span-12 md:col-span-6 lg:col-span-4
                    ${animationDirection}
                  `}
                  style={{ animationDelay: delay }}
                >
                  <div className="flex items-center gap-4 mb-5 w-full relative z-10">
                    <span className="hs-icon-badge w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <h3 className="text-[#0f172a] font-semibold text-lg leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#4b5563] text-[0.92rem] leading-relaxed font-light mt-auto relative z-10">
                    {service.description}
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