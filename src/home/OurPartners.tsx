"use client";

import { ArrowRight, Globe2, Award } from "lucide-react";
import { Link } from "react-router";

const OurPartners = () => {
  const partners = [
    { img: "/p1.webp", name: "Stavropol" },
    { img: "/p2.webp", name: "Volgograd" },
    { img: "/p3.webp", name: "NWSMU" },
    { img: "/p4.webp", name: "Bukhara" },
    { img: "/p5.webp", name: "Tashkent" },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-slate-50"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="text-[#1D4ED8] font-bold tracking-widest text-xs uppercase bg-blue-100/50 px-4 py-1.5 rounded-full mb-4 md:mb-5 border border-blue-200/50">
            Global Network
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight px-4">
            Recognized by the World's Best
          </h2>
        </div>

        {/* ── Logo Grid ── */}
        <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm px-6 py-10 sm:px-8 sm:py-12 md:py-16 mb-16 md:mb-24 lg:mb-32">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`flex justify-center group cursor-pointer
                  ${/* Center the lone 5th item on 2-col mobile layout */
                    index === 4 ? "col-span-2 sm:col-span-1" : ""
                  }`}
              >
                <img
                  src={partner.img}
                  alt={`${partner.name} Medical University`}
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-500 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="relative bg-[#1a2472] rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl">

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2472] via-[#1a2472] to-[#1D4ED8] opacity-90" />

          {/* Ambient glow — hidden on mobile for cleaner look */}
          <div className="hidden md:block absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#60A5FA] rounded-full mix-blend-screen blur-[120px] opacity-20 pointer-events-none" />

          {/* Decorative globe icon */}
          <Globe2 className="absolute -bottom-16 -left-16 w-64 md:w-80 h-64 md:h-80 text-white/5 rotate-12 pointer-events-none" />

          {/* Text Content */}
          <div className="relative z-10 flex-1 px-6 py-12 sm:px-8 sm:py-14 md:p-16 lg:p-20 text-center md:text-left flex flex-col justify-center">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-6 text-blue-300">
              <Award className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <span className="font-semibold text-xs sm:text-sm tracking-widest uppercase">
                100% Admission Support
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 md:mb-10">
              Begin your journey to becoming a{" "}
              <span className="text-[#60A5FA]">Global Doctor</span>.
            </h3>

            <div>
              <Link to="/contact">
              
              <button className="inline-flex items-center gap-3 bg-white text-[#1a2472] px-6 py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-blue-50 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 group">
                Start Your Application
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
            </div>
          </div>

          {/* Student Image */}
          <div className="relative z-10 w-full md:w-[42%] h-52 sm:h-64 md:h-auto flex items-end justify-center md:justify-end px-6 pt-0 md:pt-0">
            <img
              src="/Partner.png"
              alt="Medical Student"
              className="w-auto h-full md:h-72 lg:h-96 xl:h-[420px] max-w-none object-contain object-bottom drop-shadow-2xl"
              style={{ transform: "translateY(2px)" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurPartners;