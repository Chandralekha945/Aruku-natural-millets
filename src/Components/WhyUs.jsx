import COLORS from "../theme";

const points = [
  { icon: "", title: "No Chemicals",     desc: "Zero preservatives, additives or artificial flavours in any product." },
  { icon: "", title: "Farm Direct",      desc: "Sourced straight from trusted farmers across Andhra Pradesh & beyond." },
  { icon: "", title: "Cold Pressed",     desc: "Traditional wooden churner (Ghani) method retains full nutrition." },
  { icon: "", title: "Organic Certified", desc: "Grown without pesticides or synthetic fertilisers." },
];

export default function WhyUs() {
  return (
    <section style={{ background: COLORS.bgSection, padding: "2rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div style={{ color: COLORS.accent, fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
            Why Aruku Natural
          </div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: COLORS.text, fontFamily: "Georgia, serif", margin: 0 }}>
            Purity You Can Taste
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {points.map((p) => (
            <div key={p.title} style={{
              background: COLORS.cardBg,
              borderRadius: 16,
              padding: "1rem 1.5rem",
              boxShadow: "0 2px 16px rgba(41, 26, 26, 0.06)",
              borderTop: `4px solid ${COLORS.accent}`,
            }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>{p.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: COLORS.text }}>{p.title}</div>
              <div style={{ color: COLORS.textMuted, lineHeight: 1.65, fontSize: 14 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
