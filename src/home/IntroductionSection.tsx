"use client";

import { Mail, Phone, ArrowRight, MapPin } from "lucide-react";
import intro from "../assets/introImg.webp";

const STATS = [
  { value: "10+",  label: "Years of Experience" },
  { value: "300+", label: "Students Placed"     },
  { value: "2020", label: "Established"         },
  { value: "100%", label: "Transparency"        },
];

const IntroductionSection = () => {
  return (
    <section
      className="overflow-hidden py-14 sm:py-20 lg:py-24"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Zone 1: Headline ── */}
        <div className="mb-10 sm:mb-12 lg:mb-16">

          {/* Brand label */}
          <div className="flex items-center gap-3 mb-5 sm:mb-7">
            <div className="h-px w-8 shrink-0" style={{ backgroundColor: "#1976d2" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#1976d2" }}>
              M &amp; C Educational Consultancy · Est. 2020
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-bold tracking-tight leading-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 3.6rem)", color: "#0f172a" }}
          >
            Empowering Future{" "}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: "#1a3a8f" }}>Doctors</span>
              <span
                className="absolute left-0 right-0 bottom-1 z-0"
                style={{ height: "30%", borderRadius: "2px", backgroundColor: "#c7d8f5" }}
              />
            </span>
            <span style={{ color: "#93b4e8" }}> /</span>
            <br className="hidden sm:block" />
            <span className="font-light" style={{ color: "#4b5563" }}> to Shine Worldwide</span>
          </h1>
        </div>

        {/* ── Zone 2: Bento grid ── */}
        {/* Mobile: stacked. lg: 5-col side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5">

          {/* ── Image tile ── */}
          <div
            className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-xl"
            style={{
              minHeight: "280px",
              height: "clamp(280px, 50vw, 460px)",
              border: "1px solid rgba(255,255,255,0.4)",
            }}
          >
            <img
              src={intro}
              alt="M&C Educational Consultancy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-end justify-between gap-3 flex-wrap">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#93b4e8" }}>
                  Partner Destinations
                </p>
                <p className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Russia &nbsp;·&nbsp; Uzbekistan
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5">
                <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-pulse shrink-0" />
                <span className="text-white text-xs font-medium whitespace-nowrap">Trusted by 300+</span>
              </div>
            </div>
          </div>

          {/* ── Right column ── */}
          {/* On mobile this stacks below the image; on lg it sits beside it */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">

            {/* Stats card */}
            <div
              className="rounded-2xl p-5 sm:p-6 lg:p-7 text-white shadow-lg"
              style={{ background: "linear-gradient(160deg, #0f2265 0%, #1a3a8f 50%, #1565c0 100%)" }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-5" style={{ color: "rgba(219,233,255,0.8)" }}>
                Our Impact
              </p>
              {/* Always 2×2 grid — works on all widths */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-y-5">
                {STATS.map((s, i) => (
                  <div key={i} className="pt-3 sm:pt-4" style={{ borderTop: "1px solid rgba(147,180,232,0.3)" }}>
                    <p className="text-2xl sm:text-3xl font-bold leading-none">{s.value}</p>
                    <p className="text-xs mt-1.5 leading-snug" style={{ color: "rgba(219,233,255,0.8)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Body + CTA card */}
            <div
              className="rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between flex-1 shadow-lg"
              style={{ backgroundColor: "#ffffff", border: "1px solid #dbe8f8" }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: "#1976d2" }} />
                  <span className="text-xs font-medium" style={{ color: "#374151" }}>
                    Kanyakumari, Tamil Nadu
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                  A trusted name in medical admissions, guiding aspiring doctors
                  from India to top universities in Russia and Uzbekistan with
                  complete transparency and hands-on support.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 mt-5 sm:mt-6">
                <a
                  href="mailto:mandc.edu2020@gmail.com"
                  className="group flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-all duration-300 hover:shadow-md"
                  style={{
                    background: "linear-gradient(110deg, #1a3a8f 0%, #1565c0 40%, #1976d2 100%)",
                    color: "#ffffff",
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="w-4 h-4 shrink-0" />
                    {/* Truncate long email on small screens */}
                    <span className="text-sm font-medium truncate">mandc.edu2020@gmail.com</span>
                  </div>
                  <ArrowRight className="w-4 h-4 shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-2" />
                </a>

                <a
                  href="tel:+919500700113"
                  className="group flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-colors duration-300 hover:bg-[#e0e7ff]"
                  style={{ border: "1px solid #c7d8f5", color: "#1a3a8f", backgroundColor: "#f4f7fd" }}
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 shrink-0" style={{ color: "#1976d2" }} />
                    <span className="text-sm font-medium">+91 95007 00113</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-2" style={{ color: "#1976d2" }} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;