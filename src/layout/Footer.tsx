import { Link } from "react-router-dom";

// ─── STATIC DATA ───

const QUICK_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Achievements", path: "/achievements" },
  { name: "How to Choose", path: "/how-to-choose" },
  { name: "Contact Us", path: "/contact" },
];

const OFFICES = [
  {
    type: "Head Office",
    address: "28/23/B4, Rock Hall, North Street, Opp. to Womens Police Station, Marthandam, Kanyakumari, Tamil Nadu — 629165"
  },
  {
    type: "Branch Office",
    address: "Near Bajaj Show Room, Parvathipuram, Nagercoil, Kanyakumari, Tamil Nadu — 629501"
  }
];

const CONTACT_DETAILS = [
  { label: "Proprietor", value: "Dr. M.S. Ramesh Babu MD (Russia)", isStrong: true },
  { label: "Consultancy Advisor", value: "R.N. Sowmya", isStrong: true },
  { label: "Phone", value: "+91 9500700113 | +91 8903492113", isStrong: false },
  { label: "Landline", value: "04651-272113", isStrong: false },
];

// ─── STYLES & CSS ───

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

  .mc-footer-link {
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding-bottom: 1px;
    font-weight: 400;
    color: #374151;
    transition: color 0.25s ease;
  }
  .mc-footer-link::after {
    content: ''; position: absolute; left: 0; bottom: 0; width: 0; height: 1px;
    background: linear-gradient(90deg, #1a3a8f, #1976d2);
    transition: width 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mc-footer-link:hover { color: #1a3a8f; }
  .mc-footer-link:hover::after { width: 100%; }
  
  .mc-footer-email { font-size: 0.8rem; color: #374151; font-weight: 300; transition: color 0.25s ease; }
  .mc-footer-email:hover { color: #1976d2; }

  @keyframes mc-footer-fade {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const STYLES: Record<string, React.CSSProperties> = {
  footer: { width: "100%", backgroundColor: "#f9f9fb", borderTop: "1px solid #dbe8f8", fontFamily: "'DM Sans', sans-serif" },
  container: { maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 48px" },
  logoWrap: { display: "flex", flexDirection: "column", gap: "20px" },
  logoImg: { height: "80px", width: "auto", objectFit: "contain", display: "block" },
  tagline: { lineHeight: "1.75", color: "#4b5563", fontWeight: 300, margin: 0 },
  colHeader: { fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a3a8f", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #dbe8f8" },
  list: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" },
  listItem: { display: "flex", alignItems: "center", gap: "8px" },
  listDot: { display: "block", width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#93b4e8", flexShrink: 0 },
  label: { display: "block", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1976d2", marginBottom: "6px" },
  contactLabel: { display: "block", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1976d2", marginBottom: "3px" },
  address: { fontSize: "0.8rem", lineHeight: "1.7", color: "#4b5563", fontWeight: 300, margin: 0 },
  contactWrap: { display: "flex", flexDirection: "column", gap: "16px" },
  divider: { margin: "48px 0 24px", height: "1px", background: "linear-gradient(90deg, transparent, #93b4e8 30%, #93b4e8 70%, transparent)" },
  copyright: { color: "#6b7280", fontWeight: 300, letterSpacing: "0.04em", margin: 0, textAlign: "center" },
  designedBy: { color: "#9ca3af", fontWeight: 300, margin: 0 },
  hairline: { height: "2.5px", background: "linear-gradient(90deg, transparent 0%, #1a3a8f 20%, #1976d2 50%, #1a3a8f 80%, transparent 100%)" }
};

// ─── REUSABLE COMPONENTS ───

const ColumnHeader = ({ title }: { title: string }) => (
  <h3 className="text-sm" style={STYLES.colHeader}>{title}</h3>
);

// ─── MAIN COMPONENT ───

export default function Footer() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <footer style={STYLES.footer}>
        <div style={STYLES.container} className="sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* ── Col 1: Logo + Tagline ── */}
            <div style={STYLES.logoWrap}>
              <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ display: "inline-block", lineHeight: 0 }}>
                <img src="/logo.webp" alt="M&C Educational Consultancy" style={STYLES.logoImg} />
              </Link>
              <p className="text-sm" style={STYLES.tagline}>
                Specializing in guiding Indian students to pursue MBBS in Russia and Uzbekistan. From admission to post-arrival support — trusted, student-focused services to help you become a doctor abroad.
              </p>
            </div>

            {/* ── Col 2: Quick Links ── */}
            <div>
              <ColumnHeader title="Quick Links" />
              <ul style={STYLES.list}>
                {QUICK_LINKS.map(({ name, path }) => (
                  <li key={name} style={STYLES.listItem}>
                    <span style={STYLES.listDot} />
                    <Link 
                      to={path} 
                      className="mc-footer-link text-sm"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Offices ── */}
            <div>
              <ColumnHeader title="Our Offices" />
              {OFFICES.map((office, idx) => (
                <div key={office.type} style={{ marginBottom: idx === 0 ? "24px" : "0" }}>
                  <span className="text-xs" style={STYLES.label}>{office.type}</span>
                  <p style={STYLES.address}>{office.address}</p>
                </div>
              ))}
            </div>

            {/* ── Col 4: Contact ── */}
            <div>
              <ColumnHeader title="Contact" />
              <div style={STYLES.contactWrap}>
                
                {CONTACT_DETAILS.map(({ label, value, isStrong }) => (
                  <div key={label}>
                    <span className="text-xs" style={STYLES.contactLabel}>{label}</span>
                    <span style={{ fontSize: "0.8rem", color: isStrong ? "#1a3a8f" : "#374151", fontWeight: isStrong ? 500 : 300 }}>
                      {value}
                    </span>
                  </div>
                ))}

                {/* Email (Special handling for mailto link) */}
                <div>
                  <span className="text-xs" style={STYLES.contactLabel}>Email</span>
                  <a href="mailto:mandc.edu2020@gmail.com" className="mc-footer-link mc-footer-email">
                    mandc.edu2020@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── Divider ── */}
          <div style={STYLES.divider} />

          {/* ── Copyright bar ── */}
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-2">
            <p className="text-xs" style={STYLES.copyright}>
              © 2025 M&C Educational Consultancy, Marthandam. All rights reserved.
            </p>
            <p className="text-xs" style={STYLES.designedBy}>
              Designed by <a href="https://www.socialwing.in/"><span style={{ color: "#1976d2", fontWeight: 400 }}>Socialwing</span></a>
            </p>
          </div>
        </div>

        {/* ── Bottom navy hairline ── */}
        <div style={STYLES.hairline} />
      </footer>
    </>
  );
}