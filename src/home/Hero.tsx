"use client";

import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ─── STATIC DATA ───
const SLIDES = [
  {
    id: 1,
    title: "Empowering Futures Through Education",
    description: "Affordable tuition, globally recognized degrees, and full support from application to arrival—your medical career starts here.",
    image: "/doctorhero2.png",
    buttons: [
      { text: "Get Started", primary: true, link: "/contact" },
      { text: "Contact Us", primary: false, link: "/contact" }
    ]
  },
  {
    id: 2,
    title: "Your Journey to Medical Excellence",
    description: "Join top-ranked medical universities abroad with our comprehensive guidance and expert counseling.",
    image: "/doctorhero1.png",
    buttons: [
      { text: "Get Started", primary: true, link: "/contact" },
      { text: "Contact Us", primary: false, link: "/contact" }
    ]
  }
];

// ─── HELPER COMPONENTS ───

const WaveBackground = () => (
  <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center mix-blend-screen">
    <svg viewBox="0 0 1440 320" className="w-full min-w-90 h-auto text-blue-200" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0,160 C320,300 420,0 720,160 C1020,320 1120,50 1440,160" />
      <path d="M0,180 C320,320 420,20 720,180 C1020,340 1120,70 1440,180" />
      <path d="M0,200 C320,340 420,40 720,200 C1020,360 1120,90 1440,200" />
      <path d="M0,220 C320,360 420,60 720,220 C1020,380 1120,110 1440,220" />
    </svg>
  </div>
);

const SlideButton = ({ btn }: { btn: any }) => {
  const buttonClasses = btn.primary 
    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] hover:-translate-y-0.5" 
    : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 hover:border-white/40";

  const buttonElement = (
    <button className={`group flex items-center justify-center gap-2 font-semibold py-3 px-8 rounded-md transition-all duration-300 w-full sm:w-auto ${buttonClasses}`}>
      {btn.text} 
      {btn.primary && (
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      )}
    </button>
  );

  return btn.link ? <Link to={btn.link}>{buttonElement}</Link> : buttonElement;
};

// ─── MAIN COMPONENT ───

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Interval logic that resets on user interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="san relative w-full h-155 bg-linear-to-br from-[#0f172a] via-[#1a1b4b] to-[#1e3a8a] overflow-hidden font-sans">
      <WaveBackground />

      {/* Main Carousel Track */}
      <div className="relative z-10 w-full h-full overflow-hidden">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div key={slide.id} className="w-full h-full shrink-0 flex justify-center">
              <div className="w-full max-w-7xl flex flex-col lg:flex-row items-stretch justify-between px-6 sm:px-8 lg:px-16 pt-16 pb-20 lg:pt-20 lg:pb-0 min-h-150 gap-8 lg:gap-12">
                
                {/* Text Content Area */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    {slide.buttons.map((btn, index) => <SlideButton key={index} btn={btn} />)}
                  </div>
                </div>

                {/* Image Area */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-end relative order-1 lg:order-2">
                  <div className="relative w-full max-w-100 lg:w-full flex items-end justify-center lg:justify-end">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full bottom-10"></div>
                    <img
                      src={slide.image}
                      alt="Hero Graphic"
                      className="relative z-10 w-full h-auto max-h-125 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              currentSlide === index ? 'bg-blue-400 w-10' : 'bg-white/30 w-3 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}