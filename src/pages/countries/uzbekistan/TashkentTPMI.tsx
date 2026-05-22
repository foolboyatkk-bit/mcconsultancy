import { Link } from "react-router-dom";
import React from "react";

// ── STATIC DATA ───────────────────────────────────────────────────────────────

const STATS = [
  { value: "1972", label: "Year Founded" },
  { value: "WHO", label: "Recognised" },
  { value: "IMC", label: "Approved" },
  { value: "6 yrs", label: "MBBS Duration" },
];

const HIGHLIGHTS = [
  {
    icon: "🎓",
    title: "WHO & IMC Recognised",
    desc: "TPMI's degrees are recognised by the World Health Organization (WHO) and the Indian Medical Council, accepted globally.",
  },
  {
    icon: "🌍",
    title: "English Medium",
    desc: "Full MBBS program taught in English — no language barrier for Indian and international students.",
  },
  {
    icon: "🏥",
    title: "Hands-On Training",
    desc: "Modern campus with hands-on medical training and advanced simulation centers to prepare students for real cases.",
  },
  {
    icon: "🔬",
    title: "Pediatric Excellence",
    desc: "Focused on pediatric medicine, TPMI addresses the unique medical needs of children and leads in pediatrics healthcare across Central Asia.",
  },
  {
    icon: "📚",
    title: "Vast Medical Library",
    desc: "TPMI's library has a vast medical collection focused on pediatrics and allied sciences with access to the latest research.",
  },
  {
    icon: "🏠",
    title: "On-Campus Hostel",
    desc: "Comfortable single, double, and triple rooms with study rooms, laundry facilities, and a common kitchen for all students.",
  },
];

const HOSTEL_ROOMS = [
  {
    title: "Single Rooms",
    desc: "These are perfect for researchers who incline toward sequestration and calm study time. Single rooms come outfitted with a bed, study desk, closet, and essential amenities.",
  },
  {
    title: "Double Rooms",
    desc: "These rooms accommodate two students and are marginally more affordable than single rooms. Double rooms come with partitioned study divisions and satisfactory storage space for each occupant.",
  },
  {
    title: "Triple Rooms",
    desc: "For those looking for more affordable choices, triple rooms are accessible. These rooms deliver the same comforts as other rooms, fostering a collaborative environment with peers.",
  },
  {
    title: "Study Rooms",
    desc: "Dedicated study rooms in the hostels provide a calm space for individual or group study sessions. These rooms are equipped with tables, chairs, and proper lighting.",
  },
  {
    title: "Laundry Facilities",
    desc: "Each hostel has its own laundry area with washing machines and drying regions, making it simple for students to manage their clothing without leaving the campus.",
  },
  {
    title: "Common Kitchen",
    desc: "For students who prefer cooking their own meals, the hostels provide a common kitchen equipped with stoves, ovens, and refrigerators.",
  },
];

const YEARLY_HEAD = [
  "Year",
  "Tuition Fee (USD)",
  "Hostel Fee (USD)",
  "Govt Registration (USD)",
  "Total Annual Fee (USD)",
];

const YEARLY_ROWS = [
  ["2nd Year", "3600$", "600$", "250$", "4,450$"],
  ["3rd Year", "3600$", "600$", "250$", "4,450$"],
  ["4th Year", "3600$", "600$", "250$", "4,450$"],
  ["5th Year", "3600$", "600$", "250$", "4,450$"],
  ["6th Year", "3600$", "600$", "250$", "4,450$"],
];

const INCLUDED = [
  "Tuition Fee",
  "Development Fee",
  "Visa & Govt Registration",
  "Hostel Accommodation",
  "One time service charges (admission processing, airport pickup, university registration, document apostille, medical check-up abroad and local registrations)",
];

const NOT_INCLUDED = [
  "Mess/Food charges $1,200/year (optional)",
  "Airfare: Approx. INR 15,000–20,000 one-way (to be arranged individually)",
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
  {
    amount: "Rs. 50,000",
    when: "Initial amount — pay directly when applying for the admission.",
  },
  { amount: "Rs. 50,000", when: "Have to pay after get the invitation." },
  { amount: "Rs. 1,00,000", when: "Have to pay when you get the visa." },
  { amount: "Note", when: "Excluding ticket." },
];

// ── REUSABLE PRIMITIVES ───────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#1976d2] text-xs font-semibold uppercase tracking-[0.2em]">
    {children}
  </span>
);

const Divider = () => <div className="w-14 h-0.5 bg-[#1976d2] my-6" />;

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

const Tashkent = () => {
  return (
    <div className="font-['DM_Sans',sans-serif] text-[#1a1a2e] bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-120 sm:min-h-140 lg:min-h-155 flex flex-col justify-end overflow-hidden">
        <img
          src="/hero5.webp"
          alt="Tashkent State Medical University TPMI Campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d1b5e] via-[#1a237e]/75 to-[#1a237e]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-12 sm:pb-16 pt-20 sm:pt-24 w-full">
          <span className="inline-block text-[#64b5f6] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Uzbekistan · Medical University
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 max-w-3xl">
            Tashkent State Medical
            <br />
            University (TPMI Campus)
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-xl">
            Modern campus with hands-on medical training
          </p>
        </div>

        <div className="absolute right-0 top-0 h-full w-1 bg-linear-to-b from-transparent via-[#1976d2] to-transparent opacity-60" />
      </section>

      {/* STATS BAR */}
      <div className="bg-[#1a237e] text-white py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map(({ value, label }) => (
              <div key={label} className="px-4 sm:px-6 py-6 text-center">
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

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid md:grid-cols-[1fr_1.7fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>About the University</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a237e] mt-3 mb-6 leading-tight">
              Leading pediatric medical education since 1972
            </h2>
            <Divider />
            <div className="space-y-5 text-[#4b5563] leading-relaxed text-[15.2px]">
              <p>
                The Tashkent Pediatric Medical Institute (TPMI) in Uzbekistan is
                a leading institution. It focuses on pediatric medicine.
                Established in 1972, TPMI is a top center for medical education
                in Central Asia.
              </p>
              <p>
                It addresses the unique medical needs of children. Over the
                years, it has gained recognition for its strong academics. It
                offers comprehensive training programs. It has made major
                contributions to pediatrics healthcare in Uzbekistan and beyond.
              </p>
            </div>
            <blockquote className="mt-10 border-l-4 border-[#1976d2] pl-6 text-[#1a237e] italic">
              "A leading centre of pediatric medical education and hands-on
              clinical training in Central Asia."
            </blockquote>
          </div>

          <div className="relative">
            <img
              src="/univ5img1.svg"
              alt="Tashkent State Medical University building"
              className="w-full h-auto rounded-2xl shadow-lg aspect-16/11 object-cover"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS GRID */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionLabel>Why Choose TPMI</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a237e] mt-3 mb-10 sm:mb-12">
            Key highlights at a glance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#dbe8f8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform origin-left">
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

      {/* RECOGNITION + LIBRARY */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        {/* Recognition */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          <div className="order-2 md:order-1">
            <SectionLabel>Recognition</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-8 leading-tight">
              Accreditation &amp; Recognition
            </h2>

            <div className="flex flex-col gap-3 mb-8">
              {[
                { code: "WHO", full: "World Health Organization (WHO)" },
                { code: "IMC", full: "Indian Medical Council (IMC)" },
                { code: "MOE", full: "Ministry of Education, Uzbekistan" },
              ].map(({ code, full }) => (
                <div
                  key={code}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#dbe8f8] bg-[#f8faff]"
                >
                  <span className="w-11 h-11 rounded-lg bg-[#1a237e] text-white text-[10px] font-bold flex items-center justify-center shrink-0 tracking-wide">
                    {code}
                  </span>
                  <span className="text-[#374151] text-sm font-medium leading-snug">
                    {full}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[#4b5563] leading-relaxed text-base">
              Accredited by the World Health Organization (WHO) and the Indian
              Medical Council, TPMI's degrees are recognized globally,
              reflecting adherence to the highest standards of medical education
              and practice.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="/univ5img2.webp"
              alt="TPMI Library"
              className="w-full h-auto aspect-4/3 rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="w-full h-px bg-[#dbe8f8] mb-16 sm:mb-20" />

        {/* Library Facilities */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Academics</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-6">
              Library Facilities
            </h2>
            <Divider />
            <div className="space-y-5 text-[#4b5563] text-base leading-relaxed">
              <p>
                TPMI's library has a vast medical collection. It focuses on
                pediatrics and allied sciences. Students access the latest
                research. The institute has advanced simulation centers. They
                practice skills before handling real cases. This prepares them
                for complex medical situations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              { label: "1972", sub: "Year Established" },
              { label: "Central", sub: "Asia's Top Med Institute" },
              { label: "English", sub: "Medium of Instruction" },
              { label: "6 Years", sub: "Total Program Duration" },
            ].map(({ label, sub }) => (
              <div
                key={sub}
                className="rounded-xl border border-[#dbe8f8] bg-[#f8faff] p-5 text-center sm:text-left"
              >
                <p className="text-2xl font-bold text-[#1976d2]">{label}</p>
                <p className="text-[#6b7280] text-sm mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOSTEL SECTION */}
      <section className="bg-[#1a237e] py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 md:order-1 space-y-6">
              <img
                src="/univ5img3.webp"
                alt="TPMI Hostel room"
                className="w-full rounded-2xl shadow-2xl aspect-video object-cover"
              />
              <img
                src="/univ5img4.webp"
                alt="TPMI Computer Lab"
                className="w-full rounded-2xl shadow-2xl aspect-video object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <span className="text-[#90caf9] text-xs font-semibold uppercase tracking-[0.2em]">
                Accommodation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-8">
                Hostel Facilities
              </h2>
              <div className="flex flex-col gap-6">
                {HOSTEL_ROOMS.map(({ title, desc }) => (
                  <div
                    key={title}
                    className="border-l-2 border-[#64b5f6]/50 pl-5"
                  >
                    <p className="font-bold text-[#90caf9] text-sm mb-1">
                      {title}
                    </p>
                    <p className="text-white/75 text-[14.5px] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionLabel>Transparency</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a237e] mt-3 mb-10 sm:mb-12">
            Fee Structure
          </h2>

          {/* First Year Package */}
          <div className="rounded-2xl bg-[#dbeafe] border border-[#b3cde8] p-8 sm:p-10 text-center mb-6 shadow-sm">
            <p className="text-base sm:text-lg font-semibold tracking-[0.15em] text-[#1a237e] uppercase mb-2">
              First Year Package
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-[#1a237e]">
              TOTAL: USD 6,800
            </p>
          </div>

          {/* Payment Terms */}
          <div className="rounded-2xl border border-[#b3cde8] bg-white p-6 sm:p-8 mb-10 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1a237e] mb-4">
              Payment Terms
            </h3>
            <ul className="list-disc list-inside text-[#374151] text-sm space-y-2 mb-8">
              <li>
                <strong>$ 4,000</strong> payable before classes start (approx.
                September 2025)
              </li>
              <li>
                Balance payable before the <strong>2nd semester</strong> begins
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#1a237e] mb-3">Included:</h4>
                <ul className="list-disc list-inside text-[#374151] text-sm space-y-1.5">
                  {INCLUDED.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#1a237e] mb-3">
                  Not Included:
                </h4>
                <ul className="list-disc list-inside text-[#374151] text-sm space-y-1.5">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Yearly Fees Table */}
          <h3 className="text-lg font-semibold text-[#1a237e] mb-5">
            Yearly Wise Fees
          </h3>
          <div className="rounded-2xl border border-[#b3cde8] bg-white shadow-sm overflow-hidden mb-4">
            <div className="bg-[#dbeafe] px-5 py-4 text-center font-semibold text-[#1a237e] tracking-widest text-sm border-b border-[#b3cde8]">
              SECOND YEAR ONWARDS
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-[#374151] min-w-155">
                <thead>
                  <tr className="bg-[#dbeafe]">
                    {YEARLY_HEAD.map((h, i) => (
                      <th
                        key={i}
                        className="border-b border-[#b3cde8] px-5 py-4 text-left font-semibold whitespace-nowrap"
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
                          className={`border-t border-[#dbe8f8] ${j > 0 ? "border-l" : ""} px-5 py-4 whitespace-nowrap`}
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
            Note: Semester-wise payment of tuition fees is allowed
          </p>

          {/* Admission Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Documents */}
            <div className="bg-white rounded-2xl border border-[#dbe8f8] p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-[#1a237e] text-xl mb-2">
                Admission Procedure:
              </h3>
              <p className="text-[#4b5563] text-sm mb-5">
                Needed documents are:
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
                    <span>{doc}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Admission Steps */}
            <div className="bg-white rounded-2xl border border-[#dbe8f8] p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-[#1a237e] text-xl mb-6">
                Admission Process:
              </h3>
              <div className="flex flex-col gap-6 sm:gap-8">
                {ADMISSION_STEPS.map(({ amount, when }, i) => (
                  <div key={i} className="flex gap-4">
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

      {/* CTA */}
      <section className="bg-[#1a237e] py-16 px-5 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to begin your MBBS journey?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto text-sm sm:text-base">
          Our experienced counsellors are available to guide you through every
          step.
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

export default Tashkent;
