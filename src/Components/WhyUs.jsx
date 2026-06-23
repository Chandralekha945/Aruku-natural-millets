import COLORS from "../theme";

const points = [
  {
    title: "No Chemicals",
    desc: "Zero preservatives, additives or artificial flavours in any product.",
  },
  {
    title: "Farm Direct",
    desc: "Sourced straight from trusted farmers across Andhra Pradesh & beyond.",
  },
  {
    title: "Cold Pressed",
    desc: "Traditional wooden churner (Ghani) method retains full nutrition.",
  },
  {
    title: "Organic Certified",
    desc: "Grown without pesticides or synthetic fertilisers.",
  },
];

export default function WhyUs() {
  return (
    <section
      style={{
        background: "#eef7ee",
        padding: "1rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div
            style={{
              color: "#2e7d32",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            Why Aruku Natural
          </div>

          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#1b1b1b",
              margin: 0,
            }}
          >
            Purity You Can Taste
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {points.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#f4fbf4",
                border: "1px solid #d9ead9",
                borderRadius: "14px",
                padding: "1.2rem",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#1b5e20",
                  marginBottom: "8px",
                }}
              >
                {p.title}
              </div>

              <div
                style={{
                  color: "#555",
                  lineHeight: 1.7,
                  fontSize: "14px",
                }}
              >
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}