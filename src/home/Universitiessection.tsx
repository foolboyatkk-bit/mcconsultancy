"use client";

import { useEffect, useRef } from "react";

import stavropol from "../assets/countries/stavropol/univ1img1.svg";
import volgograd  from "../assets/countries/volgograd/univ2img1.svg";
import nwsmu      from "../assets/university3.webp";
import bukhara    from "../assets/university4.webp";
import tashkent   from "../assets/university5.webp";

/* ── Reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); observer.disconnect(); } },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Data ── */
const RUSSIA = [
  {
    img: stavropol,
    name: "Stavropol State Medical University",
    country: "Russia",
    desc: "A top-ranked Russian medical university, widely chosen by Indian students. It offers globally recognized MBBS/MD degrees with strong clinical and research opportunities.",
  },
  {
    img: volgograd,
    name: "Volgograd State Medical University",
    country: "Russia",
    desc: "A globally recognized institution, known for excellence in medical education and research. Accredited by WHO and the Russian government, its graduates can work worldwide.",
  },
  {
    img: nwsmu,
    name: "North-Western State Medical University",
    country: "Russia",
    desc: "Blends Western and Russian medical education, offering a rich legacy since 1897. It ranks among Russia's top medical universities and plays a key role in healthcare.",
  },
];

const UZBEKISTAN = [
  {
    img: bukhara,
    name: "Bukhara State Medical University",
    country: "Uzbekistan",
    desc: "Offers an English-medium 6-year MD program equivalent to MBBS in India. With strong clinical training and global recognition, it attracts students from across the world.",
  },
  {
    img: tashkent,
    name: "Tashkent State Medical University",
    country: "Uzbekistan",
    desc: "A top Uzbek university focused on pediatric medicine since 1972. It offers strong academic training and contributes significantly to child healthcare in Central Asia.",
  },
];

/* ── Country Pill ── */
const CountryPill = ({ country }: { country: string }) => (
  <span
    className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-md backdrop-blur-md shadow-sm"
    style={{
      background: country === "Russia" ? "rgba(239,246,255,0.95)" : "rgba(240,253,244,0.95)",
      color:      country === "Russia" ? "#1D4ED8"                 : "#15803D",
    }}
  >
    {country}
  </span>
);

/* ── University Card ── */
type UniCardProps = { img: string; name: string; country: string; desc: string };

const UniCard = ({ img, name, country, desc }: UniCardProps) => (
  <div className="group bg-white rounded-[20px] p-3 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
    <div
      className="relative w-full rounded-[14px] overflow-hidden bg-slate-100 shrink-0"
      style={{ height: "clamp(180px, 30vw, 220px)" }}
    >
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute top-3 left-3">
        <CountryPill country={country} />
      </div>
    </div>

    <div className="flex flex-col flex-1 px-3 sm:px-4 py-5 sm:py-6">
      <h3 className="font-bold text-[#1a2472] text-base sm:text-lg leading-snug mb-3">{name}</h3>
      <div className="w-8 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] mb-4 transition-all duration-300 group-hover:w-16" />
      <p className="text-sm text-slate-500 leading-relaxed flex-1">{desc}</p>
      <div className="mt-4 text-[#1D4ED8] text-sm font-semibold flex items-center opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Learn more <span className="ml-1">→</span>
      </div>
    </div>
  </div>
);

/* ── Animated wrapper ── */
const AnimatedElement = ({
  children, delay = 0, className = "",
}: {
  children: React.ReactNode; delay?: number; className?: string;
}) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-fade ${className}`} style={{ "--delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
};

/* ── Main Section ── */
const UniversitiesSection = () => (
  <>
    <style>{`
      .reveal-fade {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease calc(var(--delay, 0ms)),
                    transform 0.8s ease calc(var(--delay, 0ms));
      }
      .reveal-fade.revealed { opacity: 1; transform: translateY(0); }
    `}</style>

    <section
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#1a2472", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background glow — capped to viewport width on mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[500px] bg-[#1D4ED8] opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <AnimatedElement className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#60A5FA]" />
            <p className="text-xs font-bold tracking-widest uppercase text-[#60A5FA]">Global Pathways</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Partner Institutions{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text">
              Abroad
            </span>
          </h2>
          <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed max-w-2xl">
            We have partnered with highly ranked, globally recognized universities across Russia and
            Uzbekistan to provide world-class medical education opportunities.
          </p>
        </AnimatedElement>

        {/* ── Russia ── */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <AnimatedElement
            delay={100}
            className="flex items-center justify-between border-b border-blue-400/20 pb-4 mb-8 sm:mb-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">Programs in Russia</h3>
            <span className="text-blue-300 text-sm font-medium">3 Institutions</span>
          </AnimatedElement>

          {/* 1 col mobile → 2 col sm → 3 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {RUSSIA.map((uni, i) => (
              <AnimatedElement key={uni.name} delay={i * 150 + 200}>
                <UniCard {...uni} />
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* ── Uzbekistan ── */}
        <div>
          <AnimatedElement
            delay={100}
            className="flex items-center justify-between border-b border-blue-400/20 pb-4 mb-8 sm:mb-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">Programs in Uzbekistan</h3>
            <span className="text-blue-300 text-sm font-medium">2 Institutions</span>
          </AnimatedElement>

          {/* 1 col mobile → 2 col sm; constrained on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 lg:max-w-[66%]">
            {UZBEKISTAN.map((uni, i) => (
              <AnimatedElement key={uni.name} delay={i * 150 + 200}>
                <UniCard {...uni} />
              </AnimatedElement>
            ))}
          </div>
        </div>

      </div>
    </section>
  </>
);

export default UniversitiesSection;