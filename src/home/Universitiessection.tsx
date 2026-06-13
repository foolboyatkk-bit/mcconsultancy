"use client";

import { useEffect, useRef } from "react";
// IMPORTANT: If you are using Next.js, import Link:
// import Link from "next/link";

import stavropol from "../assets/countries/stavropol/univ1img1.svg";
import volgograd  from "../assets/countries/volgograd/univ2img1.svg";
import nwsmu      from "../assets/countries/northwestern/university3.webp";
import bukhara    from "../assets/countries/bukhara/bukhara_state_medical_institute1_f3ae66fb3a (1).webp";
import asia   from "../assets/countries/asia/asia.png";

/* ── Reveal hooks ── */
function useReveal(direction: "up" | "left" | "right" = "up") {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.dir = direction;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [direction]);
  return ref;
}

/* ── Data ── */
const RUSSIA = [
  {
    img: stavropol,
    name: "Stavropol State Medical University",
    country: "Russia",
    desc: "A top-ranked Russian medical university, widely chosen by Indian students. It offers globally recognized MBBS/MD degrees with strong clinical and research opportunities.",
    link: "/countries/russia/stavropol" // <-- Added Link
  },
  {
    img: volgograd,
    name: "Volgograd State Medical University",
    country: "Russia",
    desc: "A globally recognized institution, known for excellence in medical education and research. Accredited by WHO and the Russian government, its graduates can work worldwide.",
    link: "/countries/russia/volgograd" // <-- Added Link
  },
  {
    img: nwsmu,
    name: "North-Western State Medical University",
    country: "Russia",
    desc: "Blends Western and Russian medical education, offering a rich legacy since 1897. It ranks among Russia's top medical universities and plays a key role in healthcare.",
    link: "/countries/russia/north-western" // <-- Added Link
  },
];

const UZBEKISTAN = [
  {
    img: bukhara,
    name: "Bukhara State Medical University",
    country: "Uzbekistan",
    desc: "Offers an English-medium 6-year MD program equivalent to MBBS in India. With strong clinical training and global recognition, it attracts students from across the world.",
    link: "/countries/uzbekistan/bukhara" // <-- Added Link
  },
  {
    img: asia,
    name: "Asia International University in Uzbekistan",
    country: "Uzbekistan",
    desc: "At AIU, we don't just teach—we ignite ambition. With world-class faculty, hands-on learning, and a global outlook, we empower students to become changemakers in medicine, technology, business, and beyond.",
    link: "/countries/uzbekistan/asia" // <-- Added Link
  },
];

/* ── Country Pill ── */
const CountryPill = ({ country }: { country: string }) => (
  <span
    className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-md backdrop-blur-md shadow-sm"
    style={{
      background: country === "Russia" ? "rgba(239,246,255,0.95)" : "rgba(240,253,244,0.95)",
      color:      country === "Russia" ? "#1D4ED8"                : "#15803D",
    }}
  >
    {country}
  </span>
);

/* ── Types ── */
// UPDATED: Added 'link' to the props
type UniCardProps = { img: string; name: string; country: string; desc: string; link: string };

/* ── Vertical Card (Russia 3-col grid) ── */
const UniCard = ({ img, name, country, desc, link }: UniCardProps) => (
  <div className="group bg-white rounded-[20px] p-3 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(29,78,216,0.18)]">
    {/* Image */}
    <div
      className="relative w-full rounded-[14px] overflow-hidden bg-slate-100 shrink-0"
      style={{ height: "clamp(180px, 28vw, 220px)" }}
    >
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-[#1a2472]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-3 left-3">
        <CountryPill country={country} />
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 px-3 sm:px-4 py-5 sm:py-6">
      <h3 className="font-bold text-[#1a2472] text-base sm:text-lg leading-snug mb-3">{name}</h3>
      <div className="w-8 h-0.5 bg-linear-to-r from-[#1D4ED8] to-[#60A5FA] mb-4 transition-all duration-500 group-hover:w-20 rounded-full" />
      <p className="text-sm text-slate-500 leading-relaxed flex-1">{desc}</p>
      
      {/* UPDATED: Changed from div to 'a' tag. (Use <Link href={link}> if using Next.js) */}
      <a href={link} className="mt-5 w-fit flex items-center gap-1.5 text-[#1D4ED8] text-sm font-semibold opacity-0 -translate-x-3 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0 cursor-pointer">
        Learn more
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-xs">→</span>
      </a>
    </div>
  </div>
);

/* ── Horizontal Card (Uzbekistan full-width) ── */
const UniCardHorizontal = ({ img, name, country, desc, link, index }: UniCardProps & { index: number }) => (
  <div className="group bg-white rounded-[20px] overflow-hidden flex flex-col sm:flex-row transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(21,128,61,0.15)]">
    {/* Image — left on sm+, top on mobile */}
    <div className="relative w-full sm:w-[38%] lg:w-[32%] shrink-0 overflow-hidden bg-slate-100" style={{ minHeight: "clamp(200px, 28vw, 260px)" }}>
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        style={{ objectPosition: "center top" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/10 sm:bg-linear-to-r sm:from-transparent sm:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-3 left-3">
        <CountryPill country={country} />
      </div>
      {/* Index badge */}
      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#15803D] text-xs font-black shadow-md">
        0{index + 1}
      </div>
    </div>

    {/* Content — right on sm+ */}
    <div className="flex flex-col flex-1 p-5 sm:p-7 lg:p-9 justify-center">
      {/* Eyebrow */}
      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#15803D] mb-2 flex items-center gap-2">
        <span className="w-4 h-[1.5px] bg-[#15803D] inline-block" />
        Uzbekistan
      </p>
      <h3 className="font-bold text-[#1a2472] text-lg sm:text-xl lg:text-2xl leading-snug mb-3 transition-colors duration-300 group-hover:text-[#1D4ED8]">
        {name}
      </h3>
      <div className="w-10 h-0.5 bg-linear-to-r from-[#15803D] to-[#34D399] mb-4 transition-all duration-500 group-hover:w-24 rounded-full" />
      <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">{desc}</p>

      {/* CTA row */}
      <div className="mt-6 flex items-center gap-4">
        
        {/* UPDATED: Changed from div to 'a' tag. (Use <Link href={link}> if using Next.js) */}
        <a href={link} className="flex items-center gap-1.5 text-[#1D4ED8] text-sm font-semibold opacity-0 -translate-x-3 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0 cursor-pointer">
          Learn more
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-xs">→</span>
        </a>

        {/* Decorative dots */}
        <div className="ml-auto flex gap-1 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ── Animated wrapper ── */
const AnimatedElement = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}) => {
  const ref = useReveal(direction);
  return (
    <div
      ref={ref}
      className={`reveal-anim ${className}`}
      data-dir={direction}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

/* ── Section divider ── */
const SectionDivider = ({
  title,
  count,
  delay,
}: {
  title: string;
  count: string;
  delay?: number;
}) => (
  <AnimatedElement
    delay={delay}
    className="flex items-center justify-between pb-4 mb-8 sm:mb-10"
  >
    <div className="flex items-center gap-3">
      <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
    </div>
    <div className="flex items-center gap-2">
      <span className="hidden sm:inline-block h-px w-12 bg-blue-400/30" />
      <span className="text-blue-300 text-sm font-medium bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
        {count}
      </span>
    </div>
  </AnimatedElement>
);

/* ── Main Section ── */
const UniversitiesSection = () => (
  <>
    <style>{`
      /* Base hidden state */
      .reveal-anim {
        opacity: 0;
        transition:
          opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--delay, 0ms)),
          transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--delay, 0ms));
      }
      .reveal-anim[data-dir="up"]    { transform: translateY(36px); }
      .reveal-anim[data-dir="left"]  { transform: translateX(-36px); }
      .reveal-anim[data-dir="right"] { transform: translateX(36px); }

      /* Revealed */
      .reveal-anim.revealed {
        opacity: 1;
        transform: translate(0, 0);
      }

      /* Scale hover utility used on images */
      .group:hover .group-hover\\:scale-108 { transform: scale(1.08); }

      /* Animated background shimmer on section */
      @keyframes shimmer-drift {
        0%   { transform: translate(-50%, 0) scale(1);    opacity: 0.18; }
        50%  { transform: translate(-50%, -40px) scale(1.15); opacity: 0.24; }
        100% { transform: translate(-50%, 0) scale(1);    opacity: 0.18; }
      }
      .bg-glow { animation: shimmer-drift 8s ease-in-out infinite; }

      /* Floating orb bottom */
      @keyframes orb-float {
        0%, 100% { transform: translate(0, 0); }
        50%       { transform: translate(20px, -30px); }
      }
      .bg-orb { animation: orb-float 12s ease-in-out infinite; }

      /* Divider line reveal */
      .divider-line {
        position: relative;
        border: none;
        height: 1px;
        background: transparent;
      }
      .divider-line::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, rgba(96,165,250,0.4), rgba(96,165,250,0), rgba(96,165,250,0.4));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 1s ease 0.3s;
      }
      .reveal-anim.revealed .divider-line::after { transform: scaleX(1); }
    `}</style>

    <section
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#1a2472", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background glows */}
      <div className="bg-glow absolute top-0 left-1/2 w-[min(900px,100vw)] h-130 bg-[#1D4ED8] blur-[160px] rounded-full pointer-events-none" />
      <div className="bg-orb absolute bottom-20 -right-25 w-100 h-100 bg-[#1D4ED8] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <AnimatedElement className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-0.5 w-8 bg-[#60A5FA] rounded-full" />
            <p className="text-xs font-bold tracking-widest uppercase text-[#60A5FA]">Global Pathways</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Partner Institutions{" "}
            <span className="bg-linear-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text">
              Abroad
            </span>
          </h2>
          <p className="text-blue-100/75 text-base sm:text-lg leading-relaxed max-w-2xl">
            We have partnered with highly ranked, globally recognized universities across Russia and
            Uzbekistan to provide world-class medical education opportunities.
          </p>
        </AnimatedElement>

        {/* ── Russia ── */}
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <div className="divider-line mb-8 sm:mb-10">
            <SectionDivider title="Programs in Russia" count="3 Institutions" delay={100} />
          </div>

          {/* 1 col → 2 col sm → 3 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {RUSSIA.map((uni, i) => (
              <AnimatedElement
                key={uni.name}
                delay={i * 130 + 200}
                direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
              >
                <UniCard {...uni} />
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* ── Uzbekistan ── */}
        <div>
          <div className="divider-line mb-8 sm:mb-10">
            <SectionDivider title="Programs in Uzbekistan" count="2 Institutions" delay={100} />
          </div>

          {/* Full-width horizontal cards — stacked, no blank space */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
            {UZBEKISTAN.map((uni, i) => (
              <AnimatedElement
                key={uni.name}
                delay={i * 150 + 200}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <UniCardHorizontal {...uni} index={i} />
              </AnimatedElement>
            ))}
          </div>
        </div>

      </div>
    </section>
  </>
);

export default UniversitiesSection;