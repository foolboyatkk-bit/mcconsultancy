import { useState } from "react";

// ─── STATIC DATA & STYLES (Moved outside to prevent re-rendering allocations) ───

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  fontSize: "0.62rem",
  fontWeight: 500,
  letterSpacing: "0.11em",
  textTransform: "uppercase",
  color: "white",
  marginBottom: "6px",
  fontFamily: "'DM Sans', sans-serif",
};

const ENQUIRY_OPTIONS = [
  "MBBS Admission — Russia",
  "MBBS Admission — Uzbekistan",
  "University Selection Guidance",
  "Visa & Documentation",
  "Post-Arrival Support",
  "Other"
];

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.08.02h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.72a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 15.92z"/>
      </svg>
    ),
    label: "Phone",
    value: "9500700113 · 8903492113",
    href: "tel:9500700113",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "mandc.edu2020@gmail.com",
    href: "mailto:mandc.edu2020@gmail.com",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Head Office",
    value: "Rock Hall, North Street, Marthandam, Kanyakumari — 629165",
    href: undefined,
  },
];

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

  @keyframes cf-fade-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes cf-fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes cf-check-pop { 0% { transform: scale(0) rotate(-10deg); opacity: 0; } 70% { transform: scale(1.15) rotate(3deg); } 100% { transform: scale(1) rotate(0deg); opacity: 1; } }

  .cf-section  { animation: cf-fade-in  0.5s ease both; }
  .cf-left     { animation: cf-fade-up  0.6s ease both; animation-delay: 0.1s; }
  .cf-right    { animation: cf-fade-up  0.6s ease both; animation-delay: 0.22s; }
  .cf-field-1  { animation: cf-fade-up  0.5s ease both; animation-delay: 0.3s; }
  .cf-field-2  { animation: cf-fade-up  0.5s ease both; animation-delay: 0.38s; }
  .cf-field-3  { animation: cf-fade-up  0.5s ease both; animation-delay: 0.46s; }
  .cf-field-4  { animation: cf-fade-up  0.5s ease both; animation-delay: 0.54s; }
  .cf-field-5  { animation: cf-fade-up  0.5s ease both; animation-delay: 0.62s; }
  .cf-check    { animation: cf-check-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }

  .cf-submit-btn {
    background: linear-gradient(110deg, #1976d2 0%, #42a5f5 45%, #1976d2 100%);
    background-size: 200% auto;
    transition: background-position 0.55s ease, box-shadow 0.3s ease, transform 0.15s ease;
    cursor: pointer; border: none;
  }
  .cf-submit-btn:hover { background-position: right center; box-shadow: 0 8px 28px rgba(66,165,245,0.25); transform: translateY(-2px); }
  .cf-submit-btn:active { transform: translateY(0); }
  .cf-submit-btn:disabled { opacity: 0.7; cursor: default; transform: none; }

  .cf-contact-item { transition: background 0.2s ease; border-radius: 4px; }
  .cf-contact-item:hover { background: rgba(255,255,255,0.05); }

  input::placeholder, textarea::placeholder { color: #64748b; font-family: 'DM Sans', sans-serif; }
  textarea { resize: none; }

  .cf-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%2393b4e8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px !important;
    cursor: pointer;
  }
`;

// ─── MAIN COMPONENT ───

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    padding: "13px 16px",
    fontSize: "0.82rem",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    color: "#ffffff",
    backgroundColor: focused === name ? "#1a254a" : "#141e3d",
    border: `1px solid ${focused === name ? "#42a5f5" : "#22315c"}`,
    borderRadius: "3px",
    outline: "none",
    transition: "border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
    boxSizing: "border-box",
    boxShadow: focused === name ? "0 0 0 3px rgba(66,165,245,0.15)" : "none",
  });

  // Helper to DRY up inputs
  const getFieldProps = (name: string) => ({
    required: true,
    style: inputStyle(name),
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
  });

  // Helper to quickly render standard text inputs
  const renderInput = (id: string, label: string, type: string, placeholder: string) => (
    <div>
      <label className="text-xs!" style={LABEL_STYLE}>{label}</label>
      <input type={type} placeholder={placeholder} {...getFieldProps(id)} />
    </div>
  );

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section
        id="contact-form"
        className="cf-section"
        style={{
          backgroundColor: "#0a1128",
          padding: "80px 24px",
          fontFamily: "'DM Sans', sans-serif",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="sm:px-4 lg:px-0">
          
          {/* ── Section Label ── */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.68rem", fontWeight: 500,
              letterSpacing: "0.13em", textTransform: "uppercase", color: "#93b4e8",
              backgroundColor: "rgba(147,180,232,0.1)", border: "1px solid rgba(147,180,232,0.2)",
              padding: "6px 16px", borderRadius: "2px", marginBottom: "16px",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#60a5fa", display: "inline-block" }} />
              Send Us a Message
            </span>
            <h2 className="san" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 10px", lineHeight: 1.2 }}>
              Let's Start Your{" "}
              <span style={{ color: "transparent", backgroundImage: "linear-gradient(135deg, #60a5fa, #93b4e8, #e0e7ff)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                MBBS Journey
              </span>
            </h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "16px" }}>
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, #3b82f6)" }} />
              <span style={{ color: "#60a5fa", fontSize: "0.55rem" }}>◆</span>
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
            </div>
          </div>

          {/* ── Two-Panel Card ── */}
          <div style={{ display: "grid", borderRadius: "4px", overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)" }} className="grid-cols-1 lg:grid-cols-5">

            {/* ── LEFT: Navy Info Panel ── */}
            <div className="cf-left" style={{ gridColumn: "span 2", background: "linear-gradient(160deg, #0f2265 0%, #1a3a8f 50%, #1565c0 100%)", padding: "52px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
              
              {/* Decorative Circles */}
              {[
                { bottom: "-60px", right: "-60px", width: "220px", height: "220px", border: "1.5px solid rgba(255,255,255,0.07)" },
                { bottom: "-20px", right: "-20px", width: "130px", height: "130px", border: "1.5px solid rgba(255,255,255,0.05)" },
                { top: "-50px", left: "-50px", width: "160px", height: "160px", border: "1px solid rgba(255,255,255,0.04)" }
              ].map((style, i) => <div key={i} style={{ position: "absolute", borderRadius: "50%", pointerEvents: "none", ...style }} />)}

              <div>
                <p style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(147,180,232,0.8)", marginBottom: "12px" }}>Contact Information</p>
                <h3 className="san" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.25, marginBottom: "10px" }}>We'd Love to<br />Hear from You</h3>
                <p style={{ fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.75, color: "rgba(219,233,255,0.75)", maxWidth: "260px", marginBottom: "40px" }}>Reach out for admissions guidance, university selection, or any queries about studying MBBS abroad.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                    <div key={label} className="cf-contact-item" style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "8px" }}>
                      <div style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#93b4e8" }}>
                        {icon}
                      </div>
                      <div>
                        <p style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(147,180,232,0.7)", marginBottom: "3px" }}>{label}</p>
                        {href 
                          ? <a href={href} style={{ fontSize: "0.8rem", fontWeight: 400, color: "#dbe9ff", textDecoration: "none", lineHeight: 1.6 }}>{value}</a>
                          : <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "#dbe9ff", lineHeight: 1.6, margin: 0 }}>{value}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form Panel ── */}
            <div className="cf-right" style={{ gridColumn: "span 3", backgroundColor: "#0d1631", padding: "52px 44px" }}>
              {submitted ? (
                /* Success State */
                <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", textAlign: "center" }}>
                  <div className="cf-check" style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(66,165,245,0.1)", border: "2px solid rgba(66,165,245,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#42a5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>Message Sent!</h3>
                  <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "#94a3b8", lineHeight: 1.7, maxWidth: "320px", margin: 0 }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  
                  <div className="cf-field-1 grid grid-cols-1 sm:grid-cols-2" style={{ display: "grid", gap: "16px", marginBottom: "20px" }}>
                    {renderInput("first", "First Name", "text", "Dr. Ramesh")}
                    {renderInput("last", "Last Name", "text", "Kumar")}
                  </div>

                  <div className="cf-field-2" style={{ marginBottom: "20px" }}>
                    {renderInput("email", "Email Address", "email", "you@example.com")}
                  </div>

                  <div className="cf-field-3" style={{ marginBottom: "20px" }}>
                    {renderInput("phone", "Phone Number", "tel", "+91 99999 99999")}
                  </div>

                  <div className="cf-field-4" style={{ marginBottom: "20px" }}>
                    <label className="text-xs!" style={LABEL_STYLE}>Enquiry About</label>
                    <select
                      className="cf-select"
                      {...getFieldProps("type")}
                      style={{ ...inputStyle("type"), color: focused === "type" ? "#ffffff" : "#64748b" }}
                    >
                      <option value="">Select a topic…</option>
                      {ENQUIRY_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div className="cf-field-5" style={{ marginBottom: "32px" }}>
                    <label className="text-xs!" style={LABEL_STYLE}>Your Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your goals, current qualifications, or any questions you have…"
                      {...getFieldProps("msg")}
                    />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                    <button type="submit" className="cf-submit-btn" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.11em", textTransform: "uppercase", color: "#ffffff", padding: "13px 32px", borderRadius: "3px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}