import COLORS from "../theme";
import { whatsappLink } from "../constants";

const contactCards = [
  { icon: "📞", title: "Phone / WhatsApp", detail: "9550972999" },
  { icon: "📍", title: "Location", detail: "Andhra Pradesh, India" },
  { icon: "🕐", title: "Order Hours", detail: "9:00 AM – 8:00 PM (All Days)" },
];

export default function Contact() {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${COLORS.bg}, #f7f7f7)`,
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            background: "#e8f5e9",
            color: COLORS.accent,
            padding: "6px 14px",
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1.2,
            marginBottom: 12,
          }}
        >
          GET IN TOUCH
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: 800,
            color: COLORS.text,
            fontFamily: "Georgia, serif",
            marginBottom: 12,
          }}
        >
          Let’s Talk & Place Your Order
        </h2>

        {/* Subtitle */}
        <p
          style={{
            color: COLORS.textMuted,
            lineHeight: 1.8,
            maxWidth: 650,
            margin: "0 auto 2.5rem",
            fontSize: 15,
          }}
        >
          The fastest way to order fresh, natural products is through WhatsApp.
          Click below and we’ll respond quickly with pricing and availability.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink("Hi Aruku Natural! I want to place an order.")}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            background: "linear-gradient(135deg, #25D366, #1ebe5d)",
            color: "#fff",
            padding: "16px 42px",
            borderRadius: 14,
            fontWeight: 800,
            fontSize: 16,
            textDecoration: "none",
            boxShadow: "0 10px 25px rgba(37, 211, 102, 0.25)",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          📲 Chat on WhatsApp
        </a>

        {/* Divider */}
        <div
          style={{
            margin: "3rem 0 1.5rem",
            color: COLORS.textMuted,
            fontSize: 13,
            letterSpacing: 1,
          }}
        >
          OR CONTACT DETAILS
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {contactCards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: 16,
                padding: "1.5rem",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(0,0,0,0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.05)";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>
                {card.icon}
              </div>

              <div
                style={{
                  fontWeight: 700,
                  color: COLORS.text,
                  fontSize: 15,
                  marginBottom: 6,
                }}
              >
                {card.title}
              </div>

              <div
                style={{
                  color: COLORS.textMuted,
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                {card.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}