import COLORS from "../theme";
import { whatsappLink } from "../constants";

const contactCards = [
  { title: "Phone/WhatsApp", detail: "9550972999" },
  { title: "Location", detail: "Andhra Pradesh, India" },
  { title: "Order Hours", detail: "9:00 AM – 8:00 PM (All Days)" },
];

export default function Contact() {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${COLORS.bg}, #f7f7f7)`,
        padding: "4rem 1.3rem",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
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
            fontSize: "1.9rem",
            fontWeight: 800,
            color: COLORS.text,
            fontFamily: "Georgia, serif",
            marginBottom: 9,
          }}
        >
          Let's Talk & Place Your Order
        </h2>

        {/* Subtitle */}
        <p
          style={{
            color: COLORS.textMuted,
            lineHeight: 1.8,
            maxWidth: 650,
            margin: "0 auto 1rem",
            fontSize: 15,
          }}
        >
         At Aruku Natural Millets, every product is carefully sourced from trusted
  farmers and prepared using traditional methods. We focus on purity,
  freshness, and quality, ensuring that the oils, millets, spices, and
  natural foods you receive are free from harmful chemicals and unnecessary
  additives. Your family's health and trust are our highest priorities. The fastest way to order fresh, natural products is through WhatsApp.
          Click below and we'll respond quickly with pricing and availability.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {/* WhatsApp Button */}
          <a
            href={whatsappLink(
              "Hi Aruku Natural! I want to place an order."
            )}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "linear-gradient(135deg, #25D366, #1ebe5d)",
              color: "#fff",
              padding: "16px 38px",
              borderRadius: 13,
              fontWeight: 800,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 10px 25px rgba(37,211,102,0.25)",
            }}
          >
            Chat on WhatsApp
          </a>

          {/* Call Button */}
          <a
            href="tel:+919550972999"
            style={{
              background: "linear-gradient(135deg, #da8a4c, #f02b2b)",
              color: "#fff",
              padding: "16px 38px",
              borderRadius: 13,
              fontWeight: 800,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            Call Now
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            margin: "2rem 0 1rem",
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
            gap: "10px",
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
                transition: "all 0.3s ease",
              }}
            >
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