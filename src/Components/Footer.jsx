import COLORS from "../theme";
import categories from "../data/products";

const quickLinks = ["home", "products", "about", "contact"];

export default function Footer({ setSection }) {
  return (
    <footer
      style={{
        background: COLORS.footerBg,
        color: "rgba(255,255,255,0.75)",
        padding: "3rem 1.5rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3rem",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          {/* Brand */}
          <div style={{ flex: 2, minWidth: "250px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "15px",
              }}
            >
              <span style={{ fontSize: "28px" }}>🌿</span>

              <span
                style={{
                  color: COLORS.white,
                  fontWeight: "800",
                  fontSize: "22px",
                }}
              >
                Aruku Natural Millets
              </span>
            </div>

            <p
              style={{
                lineHeight: "1.8",
                fontSize: "14px",
                maxWidth: "350px",
                margin: 0,
              }}
            >
              Bringing Nature's Goodness to Your Doorstep.
              Premium Araku Coffee, Organic Millets,
              Cold Pressed Oils, Traditional Spice Powders,
              and Natural Wellness Products.
            </p>
          </div>

          {/* Categories */}
          <div style={{ flex: 1, minWidth: "180px" }}>
            <h4
              style={{
                color: COLORS.white,
                marginBottom: "15px",
              }}
            >
              Categories
            </h4>

            {categories.map((c) => (
              <div
                key={c.id}
                style={{
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                {c.icon} {c.label}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div style={{ flex: 1, minWidth: "180px" }}>
            <h4
              style={{
                color: COLORS.white,
                marginBottom: "15px",
              }}
            >
              Quick Links
            </h4>

            {quickLinks.map((link) => (
              <div key={link} style={{ marginBottom: "8px" }}>
                <button
                  onClick={() => setSection(link)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "rgba(255,255,255,0.75)",
                    cursor: "pointer",
                    fontSize: "14px",
                    textTransform: "capitalize",
                  }}
                >
                  {link}
                </button>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{ flex: 1.5, minWidth: "220px" }}>
            <h4
              style={{
                color: COLORS.white,
                marginBottom: "15px",
              }}
            >
              Contact Us
            </h4>

            <div style={{ marginBottom: "10px", fontSize: "14px" }}>
              📍 Araku Natural Store,
              Visakhapatnam, Andhra Pradesh
            </div>

            <div style={{ marginBottom: "10px", fontSize: "14px" }}>
              📞{" "}
              <a
                href="tel:+919550972999"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                }}
              >
                +91 9550972999
              </a>
            </div>

            <div style={{ marginBottom: "10px", fontSize: "14px" }}>
              📧{" "}
              <a
                href="mailto:arukunaturalmillets@gmail.com"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                }}
              >
                arukunaturalmillets@gmail.com
              </a>
            </div>

            <div style={{ marginBottom: "10px", fontSize: "14px" }}>
              🕒 Mon - Sat : 9:00 AM - 8:00 PM
            </div>

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "15px",
                fontSize: "20px",
              }}
            >
              <a
                href="https://wa.me/919550972999"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                📞
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                📸
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                👍
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "1.5rem",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          © {new Date().getFullYear()} Aruku Natural. All Rights Reserved.
          <br />
          Bringing Nature's Goodness to Your Doorstep 🌿
        </div>
      </div>
    </footer>
  );
}