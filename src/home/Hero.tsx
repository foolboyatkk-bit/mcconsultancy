"use client";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ─── STATIC DATA ───
const SLIDES = [
  {
    id: 1,
    title: "Empowering Futures Through Education",
    description: "Affordable tuition, globally recognized degrees, and full support from application to arrival—your medical career starts here.",
    image: "/doctorhero2.png",
    buttons: [
      { text: "Get Started", primary: true,  link: "/contact" },
      { text: "Contact Us",  primary: false, link: "/contact" },
    ],
  },
  {
    id: 2,
    title: "Your Journey to Medical Excellence",
    description: "Join top-ranked medical universities abroad with our comprehensive guidance and expert counseling.",
    image: "/doctorhero1.png",
    buttons: [
      { text: "Get Started", primary: true,  link: "/contact" },
      { text: "Contact Us",  primary: false, link: "/contact" },
    ],
  },
];

// ─── WAVE BG ───
const WaveBackground = () => (
  <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center mix-blend-screen">
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-auto text-blue-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0,160 C320,300 420,0 720,160 C1020,320 1120,50 1440,160" />
      <path d="M0,180 C320,320 420,20 720,180 C1020,340 1120,70 1440,180" />
      <path d="M0,200 C320,340 420,40 720,200 C1020,360 1120,90 1440,200" />
      <path d="M0,220 C320,360 420,60 720,220 C1020,380 1120,110 1440,220" />
    </svg>
  </div>
);

// ─── BUTTON ───
const SlideButton = ({ btn }: { btn: any }) => {
  const cls = btn.primary
    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] hover:-translate-y-0.5"
    : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 hover:border-white/40";

  const el = (
    <button
      className={`group flex items-center justify-center gap-2 font-semibold
        py-2.5 px-6 sm:py-3 sm:px-8
        text-sm sm:text-base
        rounded-md transition-all duration-300 w-full sm:w-auto ${cls}`}
    >
      {btn.text}
      {btn.primary && (
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      )}
    </button>
  );

  return btn.link ? <Link to={btn.link}>{el}</Link> : el;
};

// ─── MAIN ───
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p === SLIDES.length - 1 ? 0 : p + 1)),
      5000,
    );
    return () => clearInterval(t);
  }, [current]);

  return (
    <section
      className=" san
        relative w-full overflow-hidden
        bg-linear-to-br from-[#0f172a] via-[#1a1b4b] to-[#1e3a8a]

        /* height: fluid — min 100dvh on mobile, auto on lg so image never clips */
        min-h-dvh lg:min-h-0
      "
    >
      <WaveBackground />

      {/* ── Track ── */}
      <div className="relative z-10 w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div key={slide.id} className="w-full shrink-0 flex justify-center">

              {/*
                Mobile  : single column, image on top (smaller), text below
                Tablet  : single column, image medium
                Desktop : two columns side-by-side, image bottom-aligned
              */}
              <div
                className="
                  w-full max-w-7xl
                  flex flex-col lg:flex-row
                  items-center lg:items-stretch
                  justify-between
                  px-5 sm:px-8 lg:px-16
                  pt-20 pb-16
                  sm:pt-24 sm:pb-20
                  lg:pt-24 lg:pb-0
                  gap-6 sm:gap-8 lg:gap-12
                  min-h-dvh lg:min-h-[88vh]
                "
              >
                {/* Image — top on mobile, right on desktop */}
                <div
                  className="
                    w-full lg:w-[45%]
                    flex justify-center lg:justify-end items-end
                    order-1 lg:order-2
                    /* constrain height on mobile so text gets enough room */
                    max-h-[38vh] sm:max-h-[45vh] lg:max-h-none
                  "
                >
                  <div className="relative w-full flex items-end justify-center lg:justify-end
                    max-w-70 sm:max-w-90 md:max-w-105 lg:max-w-full"
                  >
                    {/* Glow blob */}
                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-blue-500/20 blur-[80px] rounded-full" />
                    <img
                      src={slide.image}
                      alt="Hero Graphic"
                      className="
                        relative z-10 w-full h-auto object-contain
                        drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                        /* clamp height: small on mobile, full on desktop */
                        max-h-[35vh] sm:max-h-[42vh] lg:max-h-[82vh]
                      "
                    />
                  </div>
                </div>

                {/* Text — below image on mobile, left on desktop */}
                <div
                  className="
                    w-full lg:w-[55%]
                    flex flex-col justify-center
                    text-center lg:text-left
                    order-2 lg:order-1
                    pb-4 lg:pb-16
                  "
                >
                  <h1
                    className="
                      font-bold text-white leading-[1.15] tracking-tight mb-4 sm:mb-6
                      text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl
                    "
                  >
                    {slide.title}
                  </h1>

                  <p
                    className="
                      text-blue-100 leading-relaxed font-light mb-6 sm:mb-8
                      text-sm sm:text-base lg:text-lg
                      max-w-xl mx-auto lg:mx-0
                    "
                  >
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                    {slide.buttons.map((btn, i) => (
                      <SlideButton key={i} btn={btn} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dots ── */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              current === i
                ? "bg-blue-400 w-10"
                : "bg-white/30 w-3 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}