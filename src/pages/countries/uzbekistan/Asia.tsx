import { Link } from "react-router-dom";
import React from "react";
import hero from "../../../assets/countries/asia/asia.png"
import students from "../../../assets/countries/asia/students.jpg"
import campus from "../../../assets/countries/asia/compus.webp"
import hostel from "../../../assets/countries/asia/hostal.webp"

// ── STATIC DATA ──────────────────────────────────────────────────────────────

const STATS = [
  { value: "WHO & NMC", label: "Recognised" },
  { value: "6 yrs", label: "MBBS Duration" },
  { value: "Global", label: "Standards" },
  { value: "English", label: "Medium" },
];

const HIGHLIGHTS = [
  {
    icon: "🌍",
    title: "Globally Recognized",
    desc: "Recognized by WHO, NMC, GMC, AMC, ECFMG, and other international medical bodies.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Faculty",
    desc: "Learn from experienced faculty from India, Nepal, Bangladesh & other South Asian countries.",
  },
  {
    icon: "🏥",
    title: "Modern Clinical Training",
    desc: "Hands-on clinical training in modern hospitals with advanced infrastructure and simulation labs.",
  },
  {
    icon: "📚",
    title: "Global Exam Support",
    desc: "Continuous academic support and preparation for FMGE, USMLE, PLAB, AMC, and GMC from Year 1.",
  },
  {
    icon: "🍛",
    title: "Indian Mess",
    desc: "Hygienic Indian mess offering both vegetarian and non-vegetarian nutritious meal options.",
  },
  {
    icon: "🛡️",
    title: "Secure Campus",
    desc: "Comfortable and secure separate hostels for boys and girls, with Wi-Fi, digital library, and sports facilities.",
  },
];

const FACILITIES = [
  { num: "01", name: "Smart Classrooms & Technology" },
  { num: "02", name: "Advanced Simulation Center" },
  { num: "03", name: "Practical Training Labs" },
  { num: "04", name: "Digital Library & Study Lounges" },
  { num: "05", name: "State-of-the-art Sports Facilities" },
];

const RECOGNITIONS = [
  { code: "WHO", full: "World Health Organization (WHO)" },
  { code: "NMC", full: "National Medical Commission (India)" },
  { code: "GMC", full: "General Medical Council (UK)" },
  { code: "AMC", full: "Australian Medical Council" },
  {
    code: "ECFMG",
    full: "Educational Commission for Foreign Medical Graduates",
  },
];

const YEARLY_HEAD = [
  "Year",
  "Tuition Fee (USD)",
  "Hostel & Mess (USD)",
  "Visa & Reg. (USD)",
  "Total Annual Fee (USD)",
];

const YEARLY_ROWS = [
  ["2nd Year", "2,600$", "1,820$", "570$", "4,990$"],
  ["3rd Year", "2,600$", "1,820$", "570$", "4,990$"],
  ["4th Year", "2,600$", "1,820$", "570$", "4,990$"],
  ["5th Year", "2,600$", "1,820$", "570$", "4,990$"],
  ["6th Year", "2,600$", "1,820$", "570$", "4,990$"],
];

const INCLUDED = [
  "Tuition fees",
  "Development fees",
  "Visa and government registration",
  "Hostel, accommodation and Mess",
  "One time service charges (Admission processing, Airport pickup, University Registration, Document Apostile, Medical Checkup abroad and local registration)",
];

const NOT_INCLUDED = [
  "Hostel accommodation and mess services are mandatory until the end of the second year.",
  "From the third year onwards, the mess is optional . Students who choose not to use the mess will not be charged for it and only need to pay the $1,100 hostel fee.",
  "Excluding ticket fare. "
];

const DOCUMENTS = [
  "Passport copy",
  "10th Marksheet copy",
  "11th Marksheet copy",
  "12th Marksheet copy",
  "Transfer Certificate copy",
  "NEET Certificate copy",
  "Aadhar copy",
  "PAN card copy",
  "Photos",
];

const ADMISSION_STEPS = [
  {
    amount: "Rs. 50,000",
    when: "Initial amount while applying for admission with all the documents.",
  },
  {
    amount: "Rs. 50,000",
    when: "Second payment when you get the admission letter.",
  },
  {
    amount: "Rs. 50,000",
    when: "Third payment when you receive the invitation for the visa purpose.",
  },
  {
    amount: "Rs. 50,000",
    when: "Balance amount when you receive the passport with visa.",
  },
];

// ── REUSABLE PRIMITIVES ───────────────────────────────────────────────────────

const SectionLabel: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <span className="text-[#1976d2] text-xs font-semibold uppercase tracking-[0.2em]">
    {children}
  </span>
);

const Divider = () => <div className="w-14 h-0.5 bg-[#1976d2] my-6" />;

// ── PAGE COMPONENT ────────────────────────────────────────────────────────────

const Asia = () => {
  return (
    <div className="font-['DM_Sans',sans-serif] text-[#1a1a2e] bg-white">
      {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-130 flex flex-col justify-end overflow-hidden">
        <img
          src={hero}
          alt="Asia International University"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d1b5e] via-[#1a237e]/75 to-[#1a237e]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full pb-16 pt-24">
          <span className="inline-block text-[#64b5f6] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Uzbekistan · Medical University
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-5 max-w-3xl">
            Asia International
            <br />
            University
          </h1>
          <p className="text-white/90 text-xl max-w-xl">
            Nurturing Minds. Shaping Tomorrow. Rooted in Excellence Today.
          </p>
        </div>

        <div className="absolute right-0 top-0 h-full w-1 bg-linear-to-b from-transparent via-[#1976d2] to-transparent opacity-60" />
      </section>

      {/* ══ STATS BAR ══════════════════════════════════════════════════════ */}
      <div className="bg-[#1a237e] text-white py-2">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map(({ value, label }) => (
              <div key={label} className="px-6 py-8 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#64b5f6]">
                  {value}
                </p>
                <p className="text-white/70 text-sm uppercase tracking-widest mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ABOUT ══════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid md:grid-cols-[1fr_1.7fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>About the University</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a237e] mt-3 mb-6 leading-tight">
              Global Education for Tomorrow
            </h2>
            <Divider />
            <div className="space-y-5 text-[#4b5563] leading-relaxed text-[15.2px]">
              <p>
                Asia International University (AIU) offers a globally recognized
                6-year MBBS program (5 years academic + 1 year internship)
                designed to develop future-ready doctors through a balance of
                theory, clinical skills, and research.
              </p>
              <p>
                The program follows modern international medical education
                standards with a South Asian-friendly academic environment.
                Learning methodology includes small group discussions,
                case-based learning, simulation labs for procedural skills, and
                early patient interaction with bedside teaching.
              </p>
              <p>
                Clinical training encompasses Core Clinical Rotations in
                Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology,
                Psychiatry, and Orthopedics, followed by a 1-year hands-on
                internship across affiliated hospital departments under expert
                supervision.
              </p>
            </div>
          </div>

          <div className="flex h-75 sm:h-80 flex-col gap-6">
            <img
              src={students}
              alt="Asia International University students"
              className="w-full rounded-2xl object-cover shadow-lg h-75 sm:h-80"
            />
          </div>
        </div>
      </section>

      {/* ══ HIGHLIGHTS GRID ════════════════════════════════════════════════ */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <SectionLabel>Why Choose AIU</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a237e] mt-3 mb-10 sm:mb-12">
            Key highlights at a glance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#dbe8f8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform origin-left">
                  {icon}
                </span>
                <h3 className="font-bold text-[#1a237e] text-lg leading-tight">
                  {title}
                </h3>
                <p className="text-[#4b5563] text-[15px] leading-relaxed flex-1">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RECOGNITION + FACILITIES ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Recognition */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          <div className="order-2 md:order-1">
            <SectionLabel>Recognition</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-8 leading-tight">
              Accreditation &amp; Recognition
            </h2>

            <div className="flex flex-col gap-3 mb-8">
              {RECOGNITIONS.map(({ code, full }) => (
                <div
                  key={code}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#dbe8f8] bg-[#f8faff]"
                >
                  <span className="w-12 h-11 rounded-lg bg-[#1a237e] text-white text-[10px] font-bold flex items-center justify-center shrink-0 tracking-wide">
                    {code}
                  </span>
                  <span className="text-[#374151] text-sm font-medium leading-snug">
                    {full}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={campus}
              alt="AIU Recognition"
              className="w-full h-75 sm:h-115 rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#dbe8f8] mb-16 sm:mb-20" />

        {/* Facilities */}
        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              <SectionLabel>Campus Life</SectionLabel>
              <h2 className="text-3xl font-bold text-[#1a237e] mt-2">
                University Facilities
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FACILITIES.map(({ num, name }) => (
              <div
                key={num}
                className="group flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 p-5 rounded-2xl border border-[#dbe8f8] bg-white hover:border-[#1976d2] hover:shadow-md transition-all duration-200"
              >
                <span className="text-sm sm:text-xs font-bold text-[#1976d2] tracking-widest">
                  {num}
                </span>
                <p className="font-semibold text-[#1a237e] text-sm leading-snug flex-1">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOSTEL ═════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <img
            src={hostel}
            alt="AIU Hostel room"
            className="w-full rounded-2xl object-cover shadow-lg max-h-75 sm:max-h-105"
          />
          <div>
            <SectionLabel>Accommodation</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-6">
              Hostel & Dining Facilities
            </h2>
            <Divider />
            <div className="space-y-5 text-[#4b5563] text-base leading-relaxed">
              <p>
                AIU Hostel provides a safe, comfortable, and well-maintained
                living environment for students. It supports academic focus with
                essential amenities, a disciplined atmosphere, and a homely
                setting that promotes well-being, interaction, and a balanced
                student life.
              </p>
              <p>
                The mess offers hygienic, nutritious, and balanced meals to meet
                students' daily dietary needs. It maintains high standards of
                cleanliness and quality while ensuring a variety of food options
                that support healthy living and overall student wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEE STRUCTURE ══════════════════════════════════════════════════ */}
      <section className="bg-[#f8fbff] py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <SectionLabel>Transparency</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a237e] mt-3 mb-10 sm:mb-12">
            Fee Structure (2026-2027)
          </h2>

          {/* First Year Package */}
          <div className="rounded-2xl bg-[#dbeafe] border border-[#b3cde8] p-8 sm:p-10 text-center mb-4 shadow-sm">
            <p className="text-base sm:text-lg font-semibold tracking-[0.15em] text-[#1a237e] uppercase mb-2">
              First Year Package
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-[#1a237e]">
              TOTAL: USD 7,300 $
            </p>
          </div>

          {/* Payment Terms + Included/Not Included */}
          <div className="rounded-2xl border border-[#b3cde8] bg-white p-6 sm:p-8 mb-10 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1a237e] mb-4">
              Payment Terms
            </h3>
            <ul className="list-disc list-inside text-[#374151] text-sm space-y-2 mb-8">
              <li>
                <strong>$ 5,100</strong> is payable before classes start
                (approximately September 2026)
              </li>
              <li>
                The balance amount is payable before the{" "}
                <strong>2nd semester</strong> begins.
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#1a237e] mb-3">Included:</h4>
                <ul className="list-disc list-inside text-[#374151] text-sm space-y-1.5">
                  {INCLUDED.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#1a237e] mb-3">
                  Not Included / Important Notes:
                </h4>
                <ul className="list-disc list-inside text-[#374151] text-sm space-y-1.5">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Yearly Wise Fees */}
          <h3 className="text-lg font-semibold text-[#1a237e] mb-5">
            Yearly Wise Fees (2026-2031)
          </h3>
          <div className="w-full rounded-2xl border border-[#b3cde8] bg-white mb-4 shadow-sm overflow-hidden">
            {/* Header banner */}
            <div className="bg-[#dbeafe] px-4 sm:px-6 py-4 text-center font-semibold text-[#1a237e] tracking-widest text-xs sm:text-sm border-b border-[#b3cde8]">
              SECOND YEAR ONWARDS
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-sm text-[#374151] min-w-162.5">
                <thead>
                  <tr className="bg-[#dbeafe]">
                    {YEARLY_HEAD.map((h, i) => (
                      <th
                        key={i}
                        className="border-b border-[#b3cde8] px-4 sm:px-6 py-4 sm:py-5 text-left font-semibold whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {YEARLY_ROWS.map((cells, i) => (
                    <tr
                      key={i}
                      className="hover:bg-[#f8faff] transition-colors"
                    >
                      {cells.map((c, j) => (
                        <td
                          key={j}
                          className={`border-t border-[#dbe8f8] ${
                            j > 0 ? "border-l" : ""
                          } px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap`}
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-[#1976d2] font-semibold text-center text-[15px] mb-12">
            Note: Hostel accommodation and mess services are mandatory until the
            end of the second year.
          </p>

          {/* Admission Process via Consultancy */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Documents */}
            <div className="bg-white rounded-2xl border border-[#dbe8f8] p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-[#1a237e] text-xl mb-2">
                Required Documents:
              </h3>
              <p className="text-[#4b5563] text-sm mb-5">
                For the admission procedure:
              </p>
              <ol className="space-y-4">
                {DOCUMENTS.map((doc, i) => (
                  <li
                    key={doc}
                    className="flex items-center gap-4 text-[#374151]"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#dbeafe] text-[#1a237e] text-sm font-semibold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="leading-tight">{doc}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Admission Steps */}
            <div className="bg-white rounded-2xl border border-[#dbe8f8] p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-[#1a237e] text-xl mb-2">
                Consultancy Process:
              </h3>
              <p className="text-[#4b5563] text-sm mb-6">
                Total admission process amount is Rs. 2,00,000 to be paid to the
                consultancy account. It includes admission letter, invitation,
                pickup and drop in the airport, transportation, 3 months student
                visa, and 2 days food in the hostel.
              </p>
              <div className="flex flex-col gap-6 sm:gap-8">
                {ADMISSION_STEPS.map(({ amount, when }, i) => (
                  <div key={i} className="flex gap-4 sm:gap-5">
                    <div className="shrink-0 w-px self-stretch bg-[#dbe8f8] relative ml-1">
                      <span className="absolute -top-1 -left-3.25 w-7 h-7 rounded-full bg-[#1a237e] text-white text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-[#1a237e] text-base sm:text-lg">
                        {amount}
                      </p>
                      <p className="text-[#4b5563] mt-1 text-sm sm:text-base leading-relaxed">
                        {when}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA STRIP ══════════════════════════════════════════════════════ */}
      <section className="bg-[#1a237e] py-16 px-6 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to begin your MBBS journey at AIU?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto text-sm sm:text-base">
          Contact M&C Educational Consultancy to process your application and
          secure your admission seamlessly.
        </p>
        <Link
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-block bg-white text-[#1a237e] font-semibold px-10 py-4 rounded-full text-sm sm:text-base hover:bg-[#f0f7ff] transition-all active:scale-95"
        >
          Enquire Now →
        </Link>
      </section>
    </div>
  );
};

export default Asia;
