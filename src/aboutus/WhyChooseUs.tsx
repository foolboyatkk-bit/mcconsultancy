import { Building2, GraduationCap, Plane, ShieldCheck, Users } from "lucide-react";

const FEATURES = [
  { title: "Safe & Student-Friendly Environment", icon: ShieldCheck },
  { title: "100% Admission Guidance", icon: GraduationCap },
  { title: "Visa Success & Travel Support", icon: Plane },
  { title: "Top University Partnerships", icon: Building2 },
  { title: "Trusted by Hundreds of Students", icon: Users },
];

export default function WhyChooseUs() {
  return (
    <section
      className="w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundColor: "#0a1128",
        fontFamily:"'Inter',sans-serif",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Background Glow Effects (same style as events) */}
      <div
        className="absolute top-0 right-0 w-125 h-125 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(26,58,143,0.25) 0%, transparent 60%)",
          transform: "translate(20%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-100 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(66,165,245,0.12) 0%, transparent 60%)",
          transform: "translate(-20%, 20%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-widest uppercase text-[#93b4e8] bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Your Trusted{" "}
            <span className="bg-linear-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text">
              Education Partner
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(96,165,250,0.15)]"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20 group-hover:bg-blue-500/20 transition">
                    <Icon className="text-blue-400 w-6 h-6" />
                  </div>

                  {/* Text */}
                  <p className="text-[#dbe9ff] font-medium leading-relaxed">
                    {feature.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}