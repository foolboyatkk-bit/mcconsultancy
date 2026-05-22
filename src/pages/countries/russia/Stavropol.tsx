import { Link } from "react-router-dom";
import BUILDING_IMG from "../../../assets/countries/stavropol/univ1img1.svg";
import CEREMONY_IMG from "../../../assets/countries/stavropol/univ1img2.jpg";
import CAMPUS_IMG   from "../../../assets/countries/stavropol/univ1img6.jpg";
import FACULTY_IMG  from "../../../assets/countries/stavropol/univ1img4.svg";
import LIBRARY_IMG  from "../../../assets/countries/stavropol/univ1img3.jpg";
import HOSTEL_IMG   from "../../../assets/countries/stavropol/univ1img5.jpg";

const STATS = [
  { value: "1938", label: "Year Founded" },
  { value: "Top 10", label: "in Russian Federation" },
  { value: "70%+", label: "Indian Graduate Rate" },
  { value: "6 yrs", label: "MBBS Duration" },
];

const HIGHLIGHTS = [
  { icon: "🎓", title: "MCI & WHO Recognised", desc: "Degree accepted by Medical Council of India, WHO & UNESCO globally." },
  { icon: "🌍", title: "English Medium", desc: "Full MBBS taught in English — no language barrier for Indian students." },
  { icon: "🏥", title: "Clinical Hospitals", desc: "Years 3–6 in regional & city hospitals with modern diagnostics." },
  { icon: "📚", title: "3,20,000+ Books", desc: "Specialised scientific library with free Indian medical textbooks (Yr 1–6)." },
  { icon: "🏠", title: "Secured Hostel", desc: "European-furnished rooms, central heating, secured gates, city apartments available." },
  { icon: "🌤️", title: "Mild Climate", desc: "Moderate weather — warm summers (avg 30 °C), mild winters unlike most Russian cities." },
];

const FACULTIES = [
  { num: "01", name: "General medicine", years: "6 years" },
  { num: "02", name: "Dentistry", years: "5 years" },
  { num: "03", name: "Pediatrics", years: "6 years" },
  { num: "04", name: "Pharmacy", years: "5 years" },
];

const SEMESTER_HEAD = [
  "Dept. of General Medicine (MBBS)",
  "Semester 1 (1–6 months)",
  "Semester 2 (6–12 months)",
];

const SEMESTER_ROWS = [
  ["Tuition fees", "2400 US$ – Rs.2,04,000/-", "2400 US$ – Rs.2,04,000/-"],
  ["Hostel fees", "275 US$ – Rs.23,375/-", "275 US$ – Rs.23,375/-"],
  ["Medical insurance", "150 US$ – Rs.12,750/-", "–"],
  ["Total fees", "2825 US$ – Rs.2,40,125/-", "2675 US$ – Rs.2,27,375/-"],
];

const YEARLY_HEAD = [
  "Dept. of General Medicine (MBBS)",
  "Tuition fees for the Academic Year",
];

const YEARLY_ROWS = [
  ["Tuition fees", "4,800 US$ – Rs.4,08,000/-"],
  ["Hostel fees", "550 US$ – Rs.46,750/-"],
  ["Medical insurance", "150 US$ – Rs.12,750/-"],
  ["Total fees", "5,500 US$ – Rs.4,67,500/-"],
];

const DOCUMENTS = [
  "Passport Copy", "10th Marksheet", "11th Marksheet", "12th Marksheet",
  "Transfer Certificate", "NEET Marksheet", "Aadhar Card, PAN Card", "Photo",
];

const ADMISSION_STEPS = [
  { amount: "Rs.50,000", when: "Pay directly when applying for admission." },
  { amount: "Rs.50,000", when: "Pay after receiving the invitation." },
  { amount: "Rs.1,00,000", when: "Pay when you get the visa." },
  { amount: "Note", when: "Excluding ticket." },
];

// ── REUSABLE PRIMITIVES ───────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: string }) => (
  <span className="text-[#1976d2] text-xs font-semibold uppercase tracking-[0.2em]">{children}</span>
);

const Divider = () => <div className="w-14 h-0.5 bg-[#1976d2] my-6" />;

const InfoTable = ({ head, rows }: { head: string[]; rows: string[][] }) => (
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

const Stavropol: React.FC = () => {
  return (
    <div className="font-['DM_Sans',sans-serif] text-[#1a1a2e] bg-white">

      {/* HERO SECTION */}
      <section className="relative min-h-120 sm:min-h-140 lg:min-h-155 flex flex-col justify-end overflow-hidden">
        <img
          src={BUILDING_IMG}
          alt="Stavropol State Medical University"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d1b5e] via-[#1a237e]/75 to-[#1a237e]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-12 sm:pb-16 pt-20 sm:pt-24 w-full">
          <span className="inline-block text-[#64b5f6] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Russia · Medical University
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 max-w-3xl">
            Stavropol State<br />Medical University
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-xl">
            Affordable MBBS with strong Indian student support
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
              A legacy of excellence since 1938
            </h2>
            <Divider />
            <div className="space-y-6 text-[#4b5563] leading-relaxed text-[15.2px]">
              <p>
                The Stavropol State Medical University was founded in 1938 and belongs to the top 10 leading medical
                institutions in the Russian Federation. An active participant in international projects promoting
                medical research and clinical practice, the university has decades of experience teaching students from
                all over the world — over 70% of Indian students graduate with an MD physician degree here, and alumni
                are well-settled in hospitals worldwide and in India.
              </p>
              <p>
                Students have plentiful opportunities to conduct research, participate in scientific conferences, and
                publish results in Russia and abroad. After completing MBBS/MD, graduates can work in hospitals or
                pursue PG studies in Russia.
              </p>
              <p>
                Training at Stavropol is prestigious. Academic clinics, methodical and scientific schools guarantee
                excellent knowledge and a high level of professional medical training.
              </p>
            </div>
            <blockquote className="mt-10 border-l-4 border-[#1976d2] pl-6 text-[#1a237e] italic">
              "Academic clinics and scientific schools guarantee a high level of professional medical training."
            </blockquote>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src={BUILDING_IMG}
              alt="Stavropol State Medical University main building"
              className="w-full rounded-2xl object-cover shadow-lg aspect-16/11"
            />
            <img
              src={CEREMONY_IMG}
              alt="Graduation ceremony"
              className="w-full rounded-2xl object-cover shadow-lg aspect-video object-top"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS GRID */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <SectionLabel>Why Choose Stavropol</SectionLabel>
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

      {/* RECOGNITION + FACULTIES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Recognition</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-6">Recognition &amp; Medium of Teaching</h2>
            <Divider />
            <p className="text-[#4b5563] leading-relaxed text-base mb-8">
              The degree is recognised by the Medical Council of India (MCI), World Health Organization (WHO)
              &amp; UNESCO.
            </p>
            <p className="text-[#4b5563] leading-relaxed text-base">
              Classes are conducted in English. The first two years cover anatomy, physiology, pathology,
              biochemistry, microbiology and pharmacology on campus; years 3–6 are clinical rotations in
              city hospitals.
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
            src={CAMPUS_IMG}
            alt="Campus"
            className="w-full rounded-2xl object-cover shadow-lg aspect-4/3"
          />
        </div>
      </section>

      {/* PG SPECIALTIES */}
      <section className="bg-[#1a237e] py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <img
              src="/Convocation-Ceremony.webp"
              alt="Faculty and staff"
              className="w-full rounded-2xl object-cover shadow-2xl aspect-video"
            />
            <div>
              <span className="text-[#90caf9] text-xs font-semibold uppercase tracking-[0.2em]">After Graduation</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">Post-Graduation Specialties</h2>
              <p className="text-white/80 text-[15.2px] leading-relaxed mb-8">
                Main Specialties in Post-Graduation Training: Postgraduate training is offered across a wide
                range of clinical disciplines.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Obstetrics & Gynecology", "Otorhinolaryngology", "Internal diseases", "Cardiology",
                  "Ophthalmology", "Pediatrics", "Infectious diseases", "Dermatovenereology",
                  "Psychiatry", "Traumatology & Orthopedics", "Phthisiatry", "Surgery",
                  "Urology", "Surgical Stomatology", "Therapeutic Stomatology", "Orthodontics",
                ].map((s) => (
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

      {/* EDUCATIONAL FACILITIES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        <SectionLabel>On Campus</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a237e] mt-3 mb-2">Educational Facilities</h2>
        <Divider />
        <p className="text-[#4b5563] leading-relaxed text-[15.2px] mb-10 max-w-3xl">
          The academy has four educational buildings, a dentistry outpatient department, and clinics for eye
          microsurgery, borderline psychological disorders, and vertebra-neurology. All clinical departments are
          located in regional and city hospitals with modern diagnostic and treatment technologies.
          Inter-departmental computer classes of gradually increasing level connect students to world medical
          knowledge.
        </p>
        <img
          src={FACULTY_IMG}
          alt="Faculty and staff group photo"
          className="w-full rounded-2xl object-cover shadow-lg aspect-video"
        />
        <p className="text-[#4b5563] leading-relaxed text-[15.2px] mt-10 max-w-3xl">
          In 1996, a larger physical-training department was completed — featuring a swimming pool, gym,
          training halls, solarium, sauna, massage room, and physician control room — serving both coursework
          and recreation.
        </p>
      </section>

      {/* LIBRARY + HOSTEL */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20 flex flex-col gap-20">

        {/* Library */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Resources</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-6">Library</h2>
            <Divider />
            <p className="text-[#4b5563] leading-relaxed text-base">
              The academy's scientific library holds more than 320,000 books and magazines. It offers all
              material necessary for teaching, learning and research, along with the university's own
              publications — a "Medics" newspaper and a scientific magazine. All Indian medical books are
              available free of cost from 1st to 6th year.
            </p>
          </div>
          <img
            src={LIBRARY_IMG}
            alt="Library"
            className="w-full rounded-2xl object-cover shadow-lg aspect-16/10"
          />
        </div>

        <div className="w-full h-px bg-[#dbe8f8]" />

        {/* Hostel */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <img
            src={HOSTEL_IMG}
            alt="Hostel room"
            className="w-full rounded-2xl object-cover shadow-lg aspect-16/10"
          />
          <div>
            <SectionLabel>Accommodation</SectionLabel>
            <h2 className="text-3xl font-bold text-[#1a237e] mt-3 mb-6">Hostel Facilities</h2>
            <Divider />
            <div className="space-y-6 text-[#4b5563] text-base leading-relaxed">
              <p>
                Every student receives on-campus accommodation. Rooms feature European furnishing, bedding,
                central heating, gas/electricity in kitchens, and secured entrance gates. City apartments are
                also available to rent.
              </p>
              <p>
                Stavropol has a moderate climate — warm summers (Jun–Sep, avg. high 30 °C, low 18 °C) and mild
                winters, unlike most Russian cities.
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

          <h3 className="text-lg font-semibold text-[#1a237e] mb-5">Semester Wise Fees (Half Yearly)</h3>
          <InfoTable head={SEMESTER_HEAD} rows={SEMESTER_ROWS} />

          <h3 className="text-lg font-semibold text-[#1a237e] mb-5 mt-12">Yearly Wise Fees</h3>
          <InfoTable head={YEARLY_HEAD} rows={YEARLY_ROWS} />

          <p className="text-[#4b5563] text-[15px] leading-relaxed mb-8 max-w-2xl">
            Estimated total — tuition, hostel, and health insurance for entire course:{" "}
            <strong className="text-[#1a237e]">Rs.28,05,000/-</strong>. Amount subject to change per USD
            exchange rate (1 US$ ≈ Rs.85/-).
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

export default Stavropol;