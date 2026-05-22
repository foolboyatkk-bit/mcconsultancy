import { Link } from "react-router-dom";

// ── Replace with your actual asset paths ────────────────────────────────────
import BUILDING_IMG  from "../../../assets/countries/northwestern/buildingImg.webp";
import HERO_IMG      from "../../../assets/countries/northwestern/hero3.jpg";
import CEREMONY_IMG  from "../../../assets/countries/northwestern/ceremony.png";
import CAMPUS_IMG    from "../../../assets/countries/stavropol/univ1img2.jpg";
import FACULTY_IMG   from "../../../assets/countries/stavropol/univ1img4.svg";
import HOSTEL_IMG    from "../../../assets/countries/stavropol/univ1img5.jpg";

// ── STATIC DATA ──────────────────────────────────────────────────────────────

const STATS = [
  { value: "1897",   label: "Year Founded"           },
  { value: "Top",    label: "Medical University"      },
  { value: "WHO",    label: "Recognised"              },
  { value: "6 yrs",  label: "MBBS Duration"           },
];

const HIGHLIGHTS = [
  { icon: "🎓", title: "WHO & NMC Recognised",      desc: "Degree accepted by National Medical Commission of India, WHO & Ministry of Education, Russian Federation." },
  { icon: "🌍", title: "English Medium",             desc: "Full MBBS taught in English — no language barrier for Indian students." },
  { icon: "🏥", title: "Clinical Training",          desc: "6-year program with 1 year apprenticeship and 5 years of classroom learning and hospital rotations." },
  { icon: "🔬", title: "Western + Russian Method",  desc: "Exclusive teaching methodology blending Western educational methods with the best of Russian traditional medical education." },
  { icon: "🏠", title: "Secured Hostel",             desc: "On-campus hostels with common kitchens, central heating, 24-hour security by the Internal Affair Ministry of Russia." },
  { icon: "📋", title: "Real-Time Experience",       desc: "Students get real-time clinical exposure during their 6-year span with opportunities to work in Russian hospitals." },
];

const FACULTIES = [
  { num: "01", name: "General Medicine",              years: "6 years" },
  { num: "02", name: "Biology",                       years: "5 years" },
  { num: "03", name: "Psychology",                    years: "5 years" },
  { num: "04", name: "Dental & Medical Technology",  years: "5 years" },
  { num: "05", name: "Chemistry",                     years: "5 years" },
];

const SEMESTER_HEAD = [
  "Dept. of General Medicine (MBBS) · English Medium (1–6 yrs.)",
  "Semester 1 (1–6 months)",
  "Semester 2 (6–12 months)",
];

const SEMESTER_ROWS = [
  ["Tuition fees",      "RUB. 2,45,000", "RUB. 2,45,000"],
  ["Hostel fees",       "RUB. 20,000",   "RUB. 20,000"  ],
  ["Medical insurance", "RUB. 5,000",    "–"            ],
  ["Medical Check Up",  "RUB. 9,000",    "–"            ],
  ["Total fees",        "RUB. 2,79,000", "RUB. 2,65,000"],
];

const YEARLY_HEAD = [
  "Dept. of General Medicine (MBBS) · English Medium (1–6 yrs.)",
  "Tuition Fees for the Academic Year",
];

const YEARLY_ROWS = [
  ["Tuition fees",      "RUB. 4,90,000"],
  ["Hostel fees",       "RUB. 40,000"  ],
  ["Medical insurance", "RUB. 5,000"   ],
  ["Medical Check Up",  "RUB. 9,000"   ],
  ["Total fees",        "RUB. 5,44,000"],
];

const DOCUMENTS = [
  "Passport Copy",
  "10th Marksheet",
  "11th Marksheet",
  "12th Marksheet",
  "Transfer Certificate",
  "NEET Marksheet",
  "Aadhar Card, PAN Card",
  "Photo",
];

const ADMISSION_STEPS = [
  { amount: "Rs. 50,000",   when: "Initial amount — pay directly when applying for admission." },
  { amount: "Rs. 50,000",   when: "Pay after receiving the invitation letter."                  },
  { amount: "Rs. 1,00,000", when: "Pay when you receive your visa."                            },
  { amount: "Note",         when: "Excluding flight ticket charges."                            },
];

// ── REUSABLE PRIMITIVES (identical to Stavropol) ─────────────────────────────

const SectionLabel = ({ children }: { children: string }) => (
  <span className="text-[#1976d2] text-xs font-semibold uppercase tracking-[0.2em]">{children}</span>
);

const Divider = () => <div className="w-14 h-0.5 bg-[#1976d2] my-6" />;

const InfoTable = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto rounded-2xl border border-[#b3cde8] bg-white mb-10 shadow-sm">
    <table className="w-full text-sm text-[#374151]">
      <thead>
        <tr className="bg-[#dbeafe]">
          {head.map((h, i) => (
            <th key={i} className="border-b border-[#b3cde8] px-6 py-5 text-left font-semibold whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((cells, i) => {
          const isTotal = i === rows.length - 1;
          return (
            <tr key={i} className={isTotal ? "bg-[#eef3fd]" : "hover:bg-[#f8faff] transition-colors"}>
              {cells.map((c, j) => (
                <td
                  key={j}
                  className={`border-t border-[#dbe8f8] ${j > 0 ? "border-l" : ""} px-6 py-4 ${
                    isTotal ? "font-bold text-[#1a237e]" : ""
                  }`}
                >
                  {c}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

// ── PAGE COMPONENT ────────────────────────────────────────────────────────────

const NorthWestern: React.FC = () => {
  return (
    <div className="font-['DM_Sans',sans-serif] text-[#1a1a2e] bg-white">

      {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[520px] flex flex-col justify-end overflow-hidden">
        <img
          src={HERO_IMG}
          alt="North-Western State Medical University"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b5e] via-[#1a237e]/75 to-[#1a237e]/40" />

        <div className="relative z-10 max-w-315 mx-auto px-6 sm:px-10 w-full pb-16 pt-24">
          <span className="inline-block text-[#64b5f6] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Russia · Medical University
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-5 max-w-3xl">
            North-Western State<br />Medical University
          </h1>
          <p className="text-white/90 text-xl max-w-xl">
            Trusted, affordable, and globally recognized
          </p>
        </div>

        <div className="absolute right-0 top-0 h-full w-1 bg-linear-to-b from-transparent via-[#1976d2] to-transparent opacity-60" />
      </section>

      {/* ══ STATS BAR ══════════════════════════════════════════════════════ */}
      <div className="bg-[#1a237e] text-white py-2">
        <div className="max-w-315 mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map(({ value, label }) => (
              <div key={label} className="px-6 py-8 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#64b5f6]">{value}</p>
                <p className="text-white/70 text-sm uppercase tracking-widest mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ABOUT ══════════════════════════════════════════════════════════ */}
      <section className="max-w-315 mx-auto px-6 sm:px-10 py-20">
        <div className="grid md:grid-cols-[1fr_1.7fr] gap-16 items-center">
          <div>
            <SectionLabel>About the University</SectionLabel>
            <h2 className="text-4xl font-bold text-[#1a237e] mt-3 mb-6 leading-tight">
              A legacy of excellence since 1897
            </h2>
            <Divider />
            <div className="space-y-6 text-[#4b5563] leading-relaxed text-[15.2px]">
              <p>
                North-Western State Medical University was established on 14th September, 1897. Since its
                inception the University has adopted an exclusive teaching methodology based on the
                amalgamation of the Western methods of educational teaching and of the best Russian
                traditional medical education.
              </p>
              <p>
                The University has officially become one of the top most medical universities across the
                country. St. Petersburg Medical University largely involves itself in improving and
                developing the Health Care services and towards the progress of medical science in Russia.
              </p>
              <p>
                The duration of the undergraduate MBBS program is 6 years — including 1 year of
                apprenticeship and 5 years of classroom learning — giving students real-time experience
                exposure throughout their course.
              </p>
            </div>
            <blockquote className="mt-10 border-l-4 border-[#1976d2] pl-6 text-[#1a237e] italic">
              "An exclusive blend of Western educational methods and the best of Russian traditional medical education."
            </blockquote>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src={BUILDING_IMG}
              alt="North-Western State Medical University main building"
              className="w-full rounded-2xl object-cover shadow-lg max-h-105"
            />

          </div>
        </div>
      </section>

      {/* ══ HIGHLIGHTS GRID ════════════════════════════════════════════════ */}
      <section className="bg-[#f8fbff] py-20">
        <div className="max-w-315 mx-auto px-6 sm:px-10">
          <SectionLabel>Why Choose NWSMU</SectionLabel>
          <h2 className="text-4xl font-bold text-[#1a237e] mt-3 mb-12">Key highlights at a glance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-[#dbe8f8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{icon}</span>
                <h3 className="font-bold text-[#1a237e] text-lg leading-tight">{title}</h3>
                <p className="text-[#4b5563] text-[15px] leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="max-w-315 mx-auto px-6 sm:px-10 py-20">

  {/* ── Top: Recognition ── */}
  <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-center mb-20">
    <div>
      <SectionLabel>Recognition</SectionLabel>
      <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-8 leading-tight">
        Accreditation &amp; Recognition
      </h2>

      <div className="flex flex-col gap-3 mb-8">
        {[
          { code: "WHO",  full: "World Health Organization (WHO)"                              },
          { code: "NMC",  full: "National Medical Commission of India (NMC)"                   },
          { code: "MOE",  full: "Ministry of Education and Science of the Russian Federation"  },
        ].map(({ code, full }) => (
          <div key={code} className="flex items-center gap-4 p-4 rounded-xl border border-[#dbe8f8] bg-[#f8faff]">
            <span className="w-11 h-11 rounded-lg bg-[#1a237e] text-white text-[10px] font-bold flex items-center justify-center shrink-0 tracking-wide">
              {code}
            </span>
            <span className="text-[#374151] text-sm font-medium leading-snug">{full}</span>
          </div>
        ))}
      </div>

      <p className="text-[#4b5563] leading-relaxed text-base">
        Classes are conducted in English. The program is 6 years — 5 years of classroom learning
        followed by 1 year of apprenticeship — providing students with real-time clinical experience
        exposure throughout Russian hospitals.
      </p>
    </div>

    <img
      src={CEREMONY_IMG}
      alt="Campus"
      className="w-full h-[460px] rounded-2xl object-cover shadow-lg"
    />
  </div>

  {/* ── Divider ── */}
  <div className="w-full h-px bg-[#dbe8f8] mb-20" />

  {/* ── Bottom: Faculties ── */}
  <div>
    <div className="flex items-end justify-between mb-8">
      <div>
        <SectionLabel>Academics</SectionLabel>
        <h2 className="text-3xl font-bold text-[#1a237e] mt-2">Faculties &amp; Departments</h2>
      </div>
      <span className="text-[#9ca3af] text-sm hidden sm:block">{FACULTIES.length} departments offered</span>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {FACULTIES.map(({ num, name, years }) => (
        <div
          key={num}
          className="group flex flex-col gap-3 p-5 rounded-2xl border border-[#dbe8f8] bg-white hover:border-[#1976d2] hover:shadow-md transition-all duration-200"
        >
          <span className="text-xs font-bold text-[#1976d2] tracking-widest">{num}</span>
          <p className="font-semibold text-[#1a237e] text-sm leading-snug flex-1">{name}</p>
          <span className="inline-block text-xs text-[#6b7280] bg-[#f1f5f9] px-2 py-1 rounded-md w-fit">
            {years}
          </span>
        </div>
      ))}
    </div>
  </div>

</section>

      {/* ══ CLINICAL TRAINING (dark section) ═══════════════════════════════ */}
      <section className="bg-[#1a237e] py-20 text-white">
        <div className="max-w-325 mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img
              src={FACULTY_IMG}
              alt="Faculty and clinical training"
              className="w-full rounded-2xl object-cover shadow-2xl h-[400px]"
            />
            <div>
              <span className="text-[#90caf9] text-xs font-semibold uppercase tracking-[0.2em]">Clinical Exposure</span>
              <h2 className="text-3xl font-bold mt-3 mb-6">Real-World Medical Training</h2>
              <p className="text-white/80 text-[15.2px] leading-relaxed mb-8">
                Students at NWSMU get real-time experience during their 6-year program. The university
                provides great opportunity to work in hospital environments, developing clinical skills
                alongside theoretical learning from the very first year.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "6 Years",      sub: "Total Program Duration"       },
                  { label: "5 Years",      sub: "Classroom Learning"           },
                  { label: "1 Year",       sub: "Clinical Apprenticeship"      },
                  { label: "English",      sub: "Medium of Instruction"        },
                ].map(({ label, sub }) => (
                  <div key={sub} className="rounded-xl border border-white/15 bg-white/5 p-5">
                    <p className="text-2xl font-bold text-[#64b5f6]">{label}</p>
                    <p className="text-white/60 text-sm mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOSTEL ═════════════════════════════════════════════════════════ */}
      <section className="max-w-315 mx-auto px-6 sm:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src={HOSTEL_IMG}
            alt="Hostel room"
            className="w-full rounded-md object-cover shadow-lg max-h-150"
          />
          <div>
            <SectionLabel>Accommodation</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-6">Hostel Facilities</h2>
            <Divider />
            <div className="space-y-5 text-[#4b5563] text-base leading-relaxed">
              <p>
                Every Higher Educational Institute in Russia provides campus accommodations to its
                students. Dormitories are on a sharing basis — at least one or two other students are
                expected to share a housing facility.
              </p>
              <p>
                All hostels are situated within the university premises to maintain discipline and ensure
                utmost safety. Hostels are equipped with common kitchens, central heating systems,
                bathrooms, electricity, hot and cold water, and toilets.
              </p>
              <p>
                Students are provided beds, chairs, pillows, sheets, study tables, and a wardrobe.
                The hostels have <strong className="text-[#1a237e]">24-hour surveillance and security</strong> by
                the Internal Affair Ministry of Russia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEE STRUCTURE ══════════════════════════════════════════════════ */}
      <section className="bg-[#f8fbff] py-20">
        <div className="max-w-315 mx-auto px-6 sm:px-10">
          <SectionLabel>Transparency</SectionLabel>
          <h2 className="text-4xl font-bold text-[#1a237e] mt-3 mb-12">Fee Structure</h2>

          <h3 className="text-lg font-semibold text-[#1a237e] mb-5">Semester Wise Fees (Half Yearly)</h3>
          <InfoTable head={SEMESTER_HEAD} rows={SEMESTER_ROWS} />

          <h3 className="text-lg font-semibold text-[#1a237e] mb-5 mt-12">Yearly Wise Fees</h3>
          <InfoTable head={YEARLY_HEAD} rows={YEARLY_ROWS} />

          <p className="text-[#4b5563] text-[15px] leading-relaxed mb-8 max-w-2xl">
            Estimated total — tuition, hostel, and health insurance for entire course:{" "}
            <strong className="text-[#1a237e]">RUB. 32,64,000</strong>. Amount subject to change per
            exchange rate fluctuations.
          </p>

          <div className="rounded-2xl bg-[#1a237e] text-white text-center py-6 px-8 font-semibold text-lg mb-12 shadow-sm">
            All Fees Are Paid Directly to the College — No Hidden Charges
          </div>

          {/* Admission */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Documents */}
            <div className="bg-white rounded-2xl border border-[#dbe8f8] p-8 shadow-sm">
              <h3 className="font-bold text-[#1a237e] text-xl mb-6">Required Documents</h3>
              <ol className="space-y-4">
                {DOCUMENTS.map((doc, i) => (
                  <li key={doc} className="flex items-center gap-4 text-[#374151]">
                    <span className="w-7 h-7 rounded-full bg-[#dbeafe] text-[#1a237e] text-sm font-semibold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Admission Steps */}
            <div className="bg-white rounded-2xl border border-[#dbe8f8] p-8 shadow-sm">
              <h3 className="font-bold text-[#1a237e] text-xl mb-6">Admission Process</h3>
              <div className="flex flex-col gap-8">
                {ADMISSION_STEPS.map(({ amount, when }, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="shrink-0 w-px self-stretch bg-[#dbe8f8] relative ml-1">
                      <span className="absolute -top-1 -left-[13px] w-7 h-7 rounded-full bg-[#1a237e] text-white text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-[#1a237e] text-lg">{amount}</p>
                      <p className="text-[#4b5563] mt-1">{when}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ CTA STRIP ══════════════════════════════════════════════════════ */}
      <section className="bg-[#1a237e] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Ready to begin your MBBS journey?</h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Our experienced counsellors are available to guide you through every step.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-[#1a237e] font-semibold px-10 py-4 rounded-full text-base hover:bg-[#f0f7ff] transition-all active:scale-95"
        >
          Enquire Now →
        </Link>
      </section>

    </div>
  );
};

export default NorthWestern;