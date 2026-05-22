import React from "react";

// ─── STATIC ICONS ───

const PinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.08.02h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.72a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 15.92z" />
  </svg>
);
const LandlineIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

// ─── STATIC DATA & STYLES (Moved outside to prevent re-rendering allocations) ───

const OFFICE_DATA = [
  {
    tag: "Head Office",
    title: "Marthandam, Kanyakumari",
    address:
      "28/23/B4, Rock Hall, North Street, Opp. to Womens Police Station, Marthandam, Kanyakumari, Tamil Nadu — 629165",
    email: "mandc.edu2020@gmail.com",
    phones: ["9500700113", "8903492113"], // Cleaned data: removed commas from string
    landline: "04651-272113",
  },
  {
    tag: "Branch Office",
    title: "Nagercoil, Kanyakumari",
    address:
      "Near Bajaj Show Room, Parvathipuram, Nagercoil, Kanyakumari, Tamil Nadu — 629501",
    email: "mandc.edu2020@gmail.com",
    phones: ["9500700113", "8903492113"], // Cleaned data: removed commas from string
    landline: "04651-272113",
  },
];

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

  @keyframes ci-fade-up { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  .ci-heading { animation: ci-fade-up 0.55s ease both; animation-delay: 0.05s; }
  .ci-card-0  { animation: ci-fade-up 0.55s ease both; animation-delay: 0.15s; }
  .ci-card-1  { animation: ci-fade-up 0.55s ease both; animation-delay: 0.28s; }

  .ci-info-row { display: flex; align-items: flex-start; gap: 14px; padding: 14px 0; border-bottom: 1px solid #dbe8f8; transition: background 0.2s ease; }
  .ci-info-row:last-child { border-bottom: none; padding-bottom: 0; }
  .ci-info-row:first-child { padding-top: 0; }

  .ci-icon-wrap { flex-shrink: 0; width: 36px; height: 36px; border-radius: 3px; background: #eef3fd; border: 1px solid #c7d8f5; display: flex; align-items: center; justify-content: center; color: #1976d2; transition: background 0.2s ease, color 0.2s ease; }
  .ci-info-row:hover .ci-icon-wrap { background: #1a3a8f; color: #ffffff; border-color: #1a3a8f; }

  .ci-link { text-decoration: none; color: #374151; transition: color 0.2s ease; }
  .ci-link:hover { color: #1976d2; }

  .ci-card { background: #ffffff; border: 1px solid #dbe8f8; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 24px rgba(26,58,143,0.07); transition: box-shadow 0.3s ease, transform 0.3s ease; }
  .ci-card:hover { box-shadow: 0 12px 36px rgba(26,58,143,0.12); transform: translateY(-3px); }
`;

const STYLES: Record<string, React.CSSProperties> = {
  section: {
    width: "100%",
    backgroundColor: "#f4f7fd",
    fontFamily: "'DM Sans', sans-serif",
    backgroundImage:
      "radial-gradient(circle, rgba(26,58,143,0.06) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  },
  container: { maxWidth: "1100px", margin: "0 auto" },
  tagWrap: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.13em",
    textTransform: "uppercase",
    color: "#1976d2",
    backgroundColor: "#eef3fd",
    border: "1px solid #c7d8f5",
    padding: "6px 16px",
    borderRadius: "2px",
    marginBottom: "16px",
  },
  tagDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    backgroundColor: "#1976d2",
    display: "inline-block",
  },
  heading: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    fontWeight: 700,
    color: "#0f172a",
    margin: "0 0 16px",
    lineHeight: 1.2,
  },
  gradientText: {
    color: "transparent",
    backgroundImage: "linear-gradient(135deg, #1a3a8f, #1976d2, #42a5f5)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  },
  dividerWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    maxWidth: "320px",
  },
  cardHeader: {
    background:
      "linear-gradient(110deg, #0f2265 0%, #1a3a8f 60%, #1565c0 100%)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "12px",
  },
  cardTag: {
    display: "inline-block",
    fontSize: "0.6rem",
    fontWeight: 500,
    letterSpacing: "0.13em",
    textTransform: "uppercase",
    color: "rgba(147,180,232,0.8)",
    marginBottom: "6px",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#ffffff",
    margin: 0,
    lineHeight: 1.3,
  },
  badge: {
    flexShrink: 0,
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "1.5px solid rgba(147,180,232,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Playfair Display', serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "rgba(219,233,255,0.7)",
  },
  rowLabel: {
    display: "block",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#1976d2",
    marginBottom: "4px",
  },
  rowText: {
    fontSize: "0.82rem",
    fontWeight: 300,
    color: "#374151",
    lineHeight: 1.7,
    margin: 0,
  },
  rowLink: { fontSize: "0.82rem", fontWeight: 400 },
};

// ─── REUSABLE HELPER COMPONENT ───

const InfoRow = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="ci-info-row">
    <div className="ci-icon-wrap">{icon}</div>
    <div>
      <span className="text-xs" style={STYLES.rowLabel}>
        {label}
      </span>
      {children}
    </div>
  </div>
);

// ─── MAIN COMPONENT ───

export default function ContactInfo() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      {/* Added responsive Tailwind padding here */}
      <section style={STYLES.section} className="py-16 px-5 sm:py-24 sm:px-12">
        <div style={STYLES.container} className="w-full">
          {/* ── Section header ── */}
          <div className="ci-heading" style={{ marginBottom: "52px" }}>
            <span style={STYLES.tagWrap}>
              <span style={STYLES.tagDot} />
              Our Locations
            </span>

            <h2 style={STYLES.heading}>
              For More <span style={STYLES.gradientText}>Information</span>
            </h2>

            <div style={STYLES.dividerWrap}>
              <div
                style={{
                  height: "1px",
                  flex: 1,
                  background: "linear-gradient(90deg, #1a3a8f, #93b4e8)",
                }}
              />
              <span style={{ color: "#1976d2", fontSize: "0.55rem" }}>◆</span>
              <div
                style={{
                  height: "1px",
                  flex: 1,
                  background: "linear-gradient(90deg, #1a3a8f, #93b4e8)",
                }}
              />
            </div>
          </div>

          {/* ── Office cards grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OFFICE_DATA.map((office, index) => (
              <div key={index} className={`ci-card ci-card-${index}`}>
                {/* Card header stripe - using Tailwind for responsive padding */}
                <div style={STYLES.cardHeader} className="p-6 sm:p-8">
                  <div>
                    <span style={STYLES.cardTag}>{office.tag}</span>
                    <h3 style={STYLES.cardTitle}>{office.title}</h3>
                  </div>
                  <span style={STYLES.badge}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card body - using Tailwind for responsive padding */}
                <div className="p-6 sm:p-8">
                  <InfoRow icon={<PinIcon />} label="Address">
                    <p style={STYLES.rowText}>{office.address}</p>
                  </InfoRow>

                  <InfoRow icon={<MailIcon />} label="Email">
                    <a
                      href={`mailto:${office.email}`}
                      className="ci-link"
                      style={STYLES.rowLink}
                    >
                      {office.email}
                    </a>
                  </InfoRow>

                  <InfoRow icon={<PhoneIcon />} label="Mobile">
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                    >
                      {office.phones.map((num, idx) => (
                        <React.Fragment key={num}>
                          <a
                            href={`tel:${num}`}
                            className="ci-link"
                            style={STYLES.rowLink}
                          >
                            {num}
                          </a>
                          {/* Adds comma nicely without breaking the tel link */}
                          {idx !== office.phones.length - 1 && (
                            <span className="text-[#374151] text-[0.82rem]">
                              ,
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </InfoRow>

                  <InfoRow icon={<LandlineIcon />} label="Landline">
                    <a
                      href={`tel:${office.landline}`}
                      className="ci-link"
                      style={STYLES.rowLink}
                    >
                      {office.landline}
                    </a>
                  </InfoRow>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
