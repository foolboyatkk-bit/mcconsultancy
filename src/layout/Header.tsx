import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// ─── STATIC DATA ───
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/countries", label: "Countries" },
  { to: "/achievements", label: "Achievements" },
  { to: "/how-to-choose", label: "How to Choose?" },
  { to: "/contact", label: "Contact" },
];

const COUNTRIES_DATA = [
  {
    name: "Russia",
    slug: "russia",
    universities: [
      { name: "Stavropol State Medical University",    to: "/countries/russia/stavropol" },
      { name: "Volgograd State Medical University",    to: "/countries/russia/volgograd" },
      { name: "North-Western State Medical University",to: "/countries/russia/north-western" },
    ],
  },
  {
    name: "Uzbekistan",
    slug: "uzbekistan",
    universities: [
      { name: "Bukhara State Medical University",                    to: "/countries/uzbekistan/bukhara" },
      { name: "Tashkent State Medical University (TPMI Campus)",     to: "/countries/uzbekistan/tashkent-tpmi" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen]               = useState(false);
  const [scrolled, setScrolled]                   = useState(false);
  const [dropdownOpen, setDropdownOpen]           = useState(false);
  const [activeCountry, setActiveCountry]         = useState(COUNTRIES_DATA[0].slug);
  // ← NEW: controls the mobile Countries accordion
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  // close Countries accordion whenever mobile menu closes
  useEffect(() => {
    if (!mobileOpen) setMobileCountriesOpen(false);
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => { clearTimeout(closeTimer.current); setDropdownOpen(true); };
  const handleMouseLeave = () => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 120); };

  const activeData = COUNTRIES_DATA.find((c) => c.slug === activeCountry);

  // total sub-link count for accordion height budget
  const totalUnis = COUNTRIES_DATA.reduce((s, c) => s + c.universities.length, 0);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#dbe8f8] transition-all duration-350 ease-in-out font-['DM_Sans',sans-serif] ${
        scrolled
          ? "bg-white/96 backdrop-blur-[14px] shadow-[0_4px_24px_rgba(26,58,143,0.08)]"
          : "bg-white"
      }`}
    >
      {/* Top hairline */}
      <div className="h-[2.5px] w-full bg-[linear-gradient(90deg,transparent_0%,#1a3a8f_20%,#1976d2_50%,#1a3a8f_80%,transparent_100%)]" />

      {/* Nav bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-2.5">
        <div className="flex justify-between items-center h-17">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="shrink-0 leading-none opacity-100 transition-opacity duration-200 hover:opacity-75"
          >
            <img src="/logo.webp" alt="M&C Educational Consultancy" className="h-17.5 w-auto object-contain block" />
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => {
              if (label === "Countries") {
                return (
                  <div key={to} className="relative flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button
                      className={`relative pb-0.75 text-sm font-semibold uppercase tracking-[0.09em] transition-colors duration-250 cursor-pointer hover:text-[#1a3a8f] text-[#374151] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-linear-to-r after:from-[#1a3a8f] after:via-[#1976d2] after:to-[#1a3a8f] after:rounded-xs after:transition-[width] after:duration-380 ${
                        dropdownOpen ? "text-[#1a3a8f] after:w-full" : "after:w-0"
                      }`}
                    >
                      {label}
                    </button>

                    {/* Mega dropdown */}
                    <div
                      className={`absolute top-[calc(100%+14px)] flex bg-white border border-[#dbe8f8] rounded-md shadow-[0_8px_32px_rgba(26,58,143,0.14)] overflow-hidden transition-all duration-280 origin-top ${
                        dropdownOpen
                          ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                      }`}
                      style={{ minWidth: 480 }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-40 border-r border-[#dbe8f8] py-2">
                        {COUNTRIES_DATA.map((country) => (
                          <button
                            key={country.slug}
                            onMouseEnter={() => setActiveCountry(country.slug)}
                            className={`w-full text-left px-5 py-3.5 text-[0.82rem] font-semibold transition-colors duration-150 ${
                              activeCountry === country.slug
                                ? "bg-[#eef3fd] text-[#1a3a8f]"
                                : "text-[#374151] hover:bg-slate-50 hover:text-[#1a3a8f]"
                            }`}
                          >
                            {country.name}
                          </button>
                        ))}
                      </div>
                      <div className="flex-1 py-2 px-2">
                        {activeData?.universities.map((uni) => (
                          <NavLink
                            key={uni.to}
                            to={uni.to}
                            onClick={() => { setDropdownOpen(false); window.scrollTo(0, 0); }}
                            className="block px-4 py-3.25 text-[0.83rem] font-semibold text-[#1a1a2e] rounded-sm hover:bg-[#eef3fd] hover:text-[#1a3a8f] transition-colors duration-150 leading-snug"
                          >
                            {uni.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={() => window.scrollTo(0, 0)}
                  className={({ isActive }) =>
                    `relative pb-0.75 text-sm font-semibold uppercase tracking-[0.09em] transition-colors duration-250 hover:text-[#1a3a8f] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-linear-to-r after:from-[#1a3a8f] after:via-[#1976d2] after:to-[#1a3a8f] after:rounded-xs after:transition-[width] after:duration-380 hover:after:w-full ${
                      isActive ? "text-[#1a3a8f] after:w-full" : "text-[#374151] after:w-0"
                    }`
                  }
                >
                  {label}
                </NavLink>
              );
            })}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 bg-transparent border-none cursor-pointer p-1.5 rounded-sm"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-5.25 h-[1.5px] bg-[#1a3a8f] rounded-xs origin-center transition-all duration-300 ease-in-out ${
                  mobileOpen
                    ? i === 0 ? "rotate-45 translate-x-[5.5px] translate-y-[5.5px]"
                      : i === 2 ? "-rotate-45 translate-x-[5.5px] translate-y-[-5.5px]"
                      : "scale-x-0 opacity-0"
                    : "opacity-100"
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`lg:hidden overflow-hidden bg-white transition-[max-height] duration-420 ease-in-out ${
          mobileOpen ? "max-h-150 border-t border-[#dbe8f8]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-0.5 px-5 pt-3 pb-5">
          {NAV_LINKS.map(({ to, label }, i) => {
            if (label === "Countries") {
              return (
                <div key={to}>
                  {/* ── Tappable Countries row with chevron ── */}
                  <button
                    onClick={() => setMobileCountriesOpen((v) => !v)}
                    style={{ transitionDelay: `${i * 35}ms` }}
                    className={`w-full flex items-center justify-between text-[0.75rem] uppercase tracking-[0.09em] py-3.25 px-4 rounded-sm border-l-2 font-normal transition-all duration-300 transform ${
                      mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                    } ${
                      mobileCountriesOpen
                        ? "text-[#1a3a8f] bg-[#eef3fd] border-[#1976d2]"
                        : "text-[#374151] border-transparent hover:text-[#1a3a8f] hover:bg-slate-50"
                    }`}
                  >
                    <span>{label}</span>
                    {/* Chevron rotates when open */}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        mobileCountriesOpen ? "rotate-180 text-[#1a3a8f]" : "text-[#9ca3af]"
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* ── Accordion sub-items ── */}
                  <div
                    className="overflow-hidden transition-[max-height] duration-400 ease-in-out"
                    style={{
                      // ~52px per uni link + 32px per country heading
                      maxHeight: mobileCountriesOpen
                        ? `${totalUnis * 52 + COUNTRIES_DATA.length * 32}px`
                        : "0px",
                    }}
                  >
                    {COUNTRIES_DATA.map((country) => (
                      <div key={country.slug} className="ml-4">
                        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#1a3a8f] px-4 pt-2.5 pb-1">
                          {country.name}
                        </p>
                        {country.universities.map((uni) => (
                          <NavLink
                            key={uni.to}
                            to={uni.to}
                            onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                            className="block text-[0.73rem] text-[#374151] py-2.25 px-4 rounded-sm hover:text-[#1a3a8f] hover:bg-[#eef3fd] border-l-2 border-[#dbe8f8] transition-colors"
                          >
                            {uni.name}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                style={{ transitionDelay: `${i * 35}ms` }}
                className={({ isActive }) =>
                  `block text-[0.75rem] uppercase tracking-[0.09em] py-3.25 px-4 rounded-sm border-l-2 transition-all duration-300 transform ${
                    mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                  } ${
                    isActive
                      ? "font-medium text-[#1a3a8f] bg-[#eef3fd] border-[#1976d2]"
                      : "font-normal text-[#374151] bg-transparent border-transparent hover:text-[#1a3a8f] hover:bg-slate-50"
                  }`
                }
              >
                {label}
              </NavLink>
            );
          })}

          <div className="h-px bg-linear-to-r from-transparent via-[#93b4e8] to-transparent mx-4 my-2.5" />

          <NavLink
            to="/contact"
            onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
            style={{ transitionDelay: `${NAV_LINKS.length * 35}ms` }}
            className={`block text-center text-[0.72rem] font-medium uppercase tracking-[0.11em] text-white py-3.25 px-5 mx-4 mt-1 mb-1.5 rounded-xs bg-[linear-gradient(110deg,#1a3a8f_0%,#1565c0_40%,#1976d2_50%,#1565c0_65%,#1a3a8f_100%)] bg-size-[220%_auto] transition-all duration-500 ease-out hover:bg-right hover:shadow-[0_6px_24px_rgba(26,58,143,0.28)] hover:-translate-y-px active:translate-y-0 transform ${
              mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
            }`}
          >
            Enquire Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
}