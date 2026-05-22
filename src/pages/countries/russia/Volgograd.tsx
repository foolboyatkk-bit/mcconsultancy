import { Link } from "react-router-dom";

import HERO_IMG      from "../../../assets/countries/volgograd/hero2.webp";
import BUILDING_IMG  from "../../../assets/countries/volgograd/univ2img1.svg";
import ARCH_IMG      from "../../../assets/countries/volgograd/univ2img2.svg";
import STUDENTS_IMG  from "../../../assets/countries/volgograd/univ2img3.svg";
import LECTURE_IMG   from "../../../assets/countries/volgograd/univ2img4.webp";
import LIBRARY_IMG   from "../../../assets/countries/volgograd/univ2img5.svg";
import SPORTS_IMG    from "../../../assets/countries/volgograd/univ2img6.svg";

const STATS = [
  { value: "1935", label: "Year Founded" },
  { value: "WHO", label: "Recognised" },
  { value: "MCI", label: "Approved" },
  { value: "6 yrs", label: "MBBS Duration" },
];

const FACULTIES = [
  { num: "01", name: "General Medicine", years: "6 years" },
  { num: "02", name: "Dentistry", years: "5 years" },
  { num: "03", name: "Pediatrics", years: "6 years" },
  { num: "04", name: "Pharmacy", years: "5 years" },
];

const HIGHLIGHTS = [
  { icon: "🏛️", title: "Licensed by Russian Education Ministry", desc: "Fully authorised to train specialists for foreign countries including India." },
  { icon: "🌍", title: "WHO, UNESCO & MCI Recognised", desc: "Graduates can work in any country after passing national examinations." },
  { icon: "🗣️", title: "English Medium Available", desc: "English medium functioning in Volgograd for more than 10 years." },
  { icon: "📚", title: "6,30,000+ Books", desc: "Library with dictionaries in all world languages and a local computer network." },
  { icon: "🏠", title: "4 Comfortable Hostels", desc: "Modern conveniences, 250–350 US$/semester. City apartments also available." },
  { icon: "🏊", title: "Sports Complex on Volga", desc: "Gymnasiums, swimming pool, stadium, and excursions along the Volga river." },
];

const PG_SPECIALTIES_1 = [
  "Allergology and Immunology", "Cardiology", "Clinical Pharmacology", "Endocrinology",
  "Family Medicine", "Gastroenterology", "Gynecology and Obstetrics", "Infectious Diseases",
  "Maxillofacial Surgery", "Neurology", "Oncology", "Surgical Dentistry",
  "Ophthalmology", "Orthodontics",
];

const PG_SPECIALTIES_2 = [
  "Otolaryngology", "Pathological Anatomy", "Pediatrics", "Pathobiology",
  "Preventive Dentistry", "Prosthodontics", "Psychiatry", "Pulmonologist",
  "Radiotherapy", "Dermatology", "ST Diseases", "Social Hygiene and Public Health",
  "Sports Medicine and Occupational Medicine", "Pedodontics",
  "Surgery of Children", "Surgery", "Therapy (Internal Medicine)",
  "Traumatology and Orthopedics", "Urology",
];

const SEMESTER_ROWS = [
  ["Tuition fees", "RUB.2,45,000", "RUB.2,45,000"],
  ["Hostel fees", "RUB.19,000", "RUB.19,000"],
  ["Medical insurance", "RUB.5,000", "–"],
  ["Medical Check Up", "RUB.9,000", "–"],
  ["Total fees", "RUB.2,78,000", "RUB.2,64,000"],
];

const YEARLY_ROWS = [
  ["Tuition fees", "RUB.4,90,000"],
  ["Hostel fees", "RUB.38,000"],
  ["Medical insurance", "RUB.5,000"],
  ["Medical Check Up", "RUB.9,000"],
  ["Total fees", "RUB.5,42,000"],
];

const DOCUMENTS = [
  "Passport Copy", "10th Marksheet", "11th Marksheet", "12th Marksheet",
  "Transfer Certificate", "NEET Marksheet", "Aadhar Card, PAN Card", "Photo",
];

const ADMISSION_STEPS = [
  { amount: "Rs.50,000", when: "Pay directly when applying for admission" },
  { amount: "Rs.50,000", when: "Pay after receiving the invitation letter" },
  { amount: "Rs.1,00,000", when: "Pay when you get the visa" },
  { amount: "Note", when: "Flight ticket is excluded from the above amounts" },
];

// ── REUSABLE PRIMITIVES ───────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: string }) => (
  <span className="text-[#1976d2] text-xs font-semibold uppercase tracking-[0.2em]">{children}</span>
);

const Divider = () => <div className="w-14 h-0.5 bg-[#1976d2] my-6" />;

const InfoTable = ({
  head, rows,
}: {
  head: string[];
  rows: string[][];
}) => (
  <div className="overflow-x-auto rounded-2xl border border-[#b3cde8] bg-white mb-10 shadow-sm">
    <table className="w-full text-sm text-[#374151] min-w-170">
      <thead>
        <tr className="bg-[#dbeafe]">
          {head.map((h, i) => (
            <th key={i} className="border-b border-[#b3cde8] px-5 sm:px-6 py-5 text-left font-semibold whitespace-nowrap">
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
                  className={`border-t border-[#dbe8f8] ${j > 0 ? "border-l" : ""} px-5 sm:px-6 py-4 ${isTotal ? "font-bold text-[#1a237e]" : ""}`}
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

const Volgograd: React.FC = () => {
  return (
    <div className="font-['DM_Sans',sans-serif] text-[#1a1a2e] bg-white">

      {/* HERO SECTION */}
      <section className="relative min-h-120 sm:min-h-140 lg:min-h-155 flex flex-col justify-end overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Volgograd State Medical University"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d1b5e] via-[#1a237e]/75 to-[#1a237e]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-12 sm:pb-16 pt-20 sm:pt-24 w-full">
          <span className="inline-block text-[#64b5f6] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Russia · Medical University
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 max-w-3xl">
            Volgograd State<br />Medical University
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-xl">
            Prestigious university with excellent global rankings and a legacy of medical excellence
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
                <p className="text-3xl sm:text-4xl font-bold text-[#64b5f6]">{value}</p>
                <p className="text-white/70 text-sm uppercase tracking-widest mt-2">{label}</p>
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
              A world-famous centre for medical excellence
            </h2>
            <Divider />
            <div className="space-y-6 text-[#4b5563] leading-relaxed text-[15.2px]">
              <p>
                Volgograd State Medical University is one of the most famous and highly reputable higher schools
                both in Russia and abroad. It is proud of its highly-qualified teaching staff, advanced researchers
                and experienced physicians whose names are world-famous.
              </p>
              <p>
                It is currently headed by the prominent Russian scientist, Academician of the Russian Academy for
                Medical Sciences — Professor Vladimir I. Petrov. Choosing this University means plentiful
                opportunities for gaining professional expertise and career pursuit.
              </p>
              <p>
                The University is accredited by the Russian Ministry for Education for the teaching of both Russian
                and overseas students. It is also listed in the Directory of Higher Medical Schools recognised by
                the World Health Organization.
              </p>
            </div>
            <blockquote className="mt-10 border-l-4 border-[#1976d2] pl-6 text-[#1a237e] italic">
              "Many scientists of the university are known not only in Russia but also abroad due to their great
              contribution to practical and functional medicine."
            </blockquote>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src={BUILDING_IMG}
              alt="Volgograd State Medical University building"
              className="w-full rounded-2xl object-cover shadow-lg aspect-16/11"
            />
            <img
              src={ARCH_IMG}
              alt="University entrance archway"
              className="w-full rounded-2xl object-cover shadow-lg aspect-video"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS GRID */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionLabel>Why Choose Volgograd</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a237e] mt-3 mb-10 sm:mb-12">Key highlights at a glance</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#dbe8f8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{icon}</span>
                <h3 className="font-bold text-[#1a237e] text-lg leading-tight">{title}</h3>
                <p className="text-[#4b5563] text-[15px] leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITATION + FACULTIES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Recognition</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-6">Accreditation &amp; Recognition</h2>
            <Divider />
            <p className="text-[#4b5563] leading-relaxed text-base">
              The Volgograd State Medical University has been licensed by the Russian Education Ministry to train 
              specialists for foreign countries. It is recognised by WHO, UNESCO, MCI and the Dental Council of India. 
              Graduates are eligible to practice anywhere in the world after clearing the respective national licensing examinations.
            </p>

            <div className="mt-14">
              <SectionLabel>Academics</SectionLabel>
              <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-6">Main Faculties &amp; Duration</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {FACULTIES.map(({ num, name, years }) => (
                  <div
                    key={num}
                    className="rounded-2xl border border-[#dbe8f8] p-6 bg-[#f8faff] hover:border-[#1976d2] transition-all hover:shadow-md"
                  >
                    <p className="text-[#1976d2] text-3xl font-bold mb-2">{num}</p>
                    <p className="font-semibold text-[#1a237e] text-[15.5px]">{name}</p>
                    <p className="text-[#6b7280] text-sm mt-1">{years}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img
            src={ARCH_IMG}
            alt="University arch entrance"
            className="w-full rounded-2xl object-cover shadow-lg aspect-4/3"
          />
        </div>
      </section>

      {/* PG SPECIALTIES */}
      <section className="bg-[#1a237e] py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <img
              src={STUDENTS_IMG}
              alt="Volgograd medical students"
              className="w-full rounded-2xl object-cover shadow-2xl aspect-video"
            />
            <div>
              <span className="text-[#90caf9] text-xs font-semibold uppercase tracking-[0.2em]">After Graduation</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">Post-Graduation Specialties</h2>
              <p className="text-white/80 text-[15.2px] leading-relaxed mb-8">
                Postgraduate training is offered through Internship, Residency, and Ph.D. programmes. 
                A wide range of clinical specialties are available for advanced medical training.
              </p>
              <div className="flex flex-wrap gap-2">
                {[...PG_SPECIALTIES_1, ...PG_SPECIALTIES_2].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-xs hover:bg-white/10 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIUM OF STUDY */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        <SectionLabel>Language</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a237e] mt-3 mb-2">Medium of Study</h2>
        <p className="text-[#1a237e] font-semibold mb-6">Duration of Course: 6 Years</p>
        <Divider />

        <div className="max-w-3xl">
          <p className="text-[#4b5563] leading-relaxed text-[15.2px] mb-10">
            Foreign students can choose between Russian and English medium of instruction. 
            The English medium programme has been successfully running for more than 10 years. 
            All lectures, practicals, seminars, tests and examinations are conducted in English.
          </p>
        </div>

        <img
          src={LECTURE_IMG}
          alt="Lecture hall at Volgograd Medical University"
          className="w-full rounded-2xl object-cover shadow-lg aspect-video"
        />
      </section>

      {/* LIBRARY + HOSTEL + SPORTS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20 flex flex-col gap-20">

        {/* Library & Accommodation */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Resources</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-6">Library &amp; Accommodation</h2>
            <Divider />
            <div className="space-y-6 text-[#4b5563] text-base leading-relaxed">
              <p>
                The university library houses over <strong>630,000 books</strong> in multiple languages, 
                including comprehensive dictionaries and a fully networked digital system.
              </p>
              <p>
                Students are accommodated in 4 modern hostels with all amenities. 
                Hostel fees range between <strong>250–350 US$ per semester</strong>. 
                Private apartments in the city are also available.
              </p>
              <p>
                Volgograd, located on the Volga River, enjoys a favourable climate with a population exceeding one million.
              </p>
            </div>
          </div>
          <img
            src={LIBRARY_IMG}
            alt="Library at Volgograd Medical University"
            className="w-full rounded-2xl object-cover shadow-lg aspect-16/10"
          />
        </div>

        <div className="w-full h-px bg-[#dbe8f8]" />

        {/* Sports */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <img
            src={SPORTS_IMG}
            alt="Sports and entertainment at Volgograd"
            className="w-full rounded-2xl object-cover shadow-lg aspect-16/10"
          />
          <div>
            <SectionLabel>Campus Life</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-6">Sports &amp; Entertainment</h2>
            <Divider />
            <div className="space-y-6 text-[#4b5563] text-base leading-relaxed">
              <p>
                The University places strong emphasis on physical fitness and offers multiple gymnasiums, 
                a swimming pool, and a stadium.
              </p>
              <p>
                A dedicated sports complex on the Volga riverbank provides excellent recreational facilities. 
                Students can also enjoy river excursions, cultural tours, and national festival celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionLabel>Transparency</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a237e] mt-3 mb-10 sm:mb-12">Fee Structure</h2>

          <h3 className="text-lg font-semibold text-[#1a237e] mb-5">Semester Wise Fees (English Medium)</h3>
          <InfoTable
            head={[
              "Dept. of General Medicine (MBBS)",
              "Semester 1 (1–6 months)",
              "Semester 2 (6–12 months)",
            ]}
            rows={SEMESTER_ROWS}
          />

          <h3 className="text-lg font-semibold text-[#1a237e] mb-5 mt-12">Yearly Wise Fees</h3>
          <InfoTable
            head={[
              "Dept. of General Medicine (MBBS)",
              "Tuition fees for the Academic Year",
            ]}
            rows={YEARLY_ROWS}
          />

          <p className="text-[#4b5563] text-[15px] leading-relaxed mb-8 max-w-2xl">
            Estimated total amount of tuition fees, hostel, and health insurance for the entire 6-year course:{" "}
            <strong className="text-[#1a237e]">RUB.32,52,000</strong>.
          </p>

          <div className="rounded-2xl bg-[#1a237e] text-white text-center py-6 px-8 font-semibold text-lg mb-12 shadow-sm">
            All Fees Are Paid Directly to the College — No Hidden Charges
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Documents */}
            <div className="bg-white rounded-2xl border border-[#dbe8f8] p-6 sm:p-8 shadow-sm">
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
            <div className="bg-white rounded-2xl border border-[#dbe8f8] p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-[#1a237e] text-xl mb-6">Admission Process</h3>
              <div className="flex flex-col gap-8">
                {ADMISSION_STEPS.map(({ amount, when }, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="shrink-0 w-px self-stretch bg-[#dbe8f8] relative ml-1">
                      <span className="absolute -top-1 -left-3.25 w-7 h-7 rounded-full bg-[#1a237e] text-white text-sm font-bold flex items-center justify-center">
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

      {/* CTA */}
      <section className="bg-[#1a237e] py-16 px-5 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to begin your MBBS journey?</h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto text-sm sm:text-base">
          Our experienced counsellors are available to guide you through every step.
        </p>
        <Link
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block bg-white text-[#1a237e] font-semibold px-10 py-4 rounded-full text-sm sm:text-base hover:bg-[#f0f7ff] transition-all active:scale-95"
        >
          Enquire Now →
        </Link>
      </section>

    </div>
  );
};

export default Volgograd;