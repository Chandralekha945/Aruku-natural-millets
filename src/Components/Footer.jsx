import COLORS from "../theme";
import categories from "../data/products";

const quickLinks = ["home", "products", "about", "contact"];

const branches = [
  {
    name: "Muralinagar Branch",
    address:
      "39-4-25, Burma Colony, Muralinagar, Madhavadhara, Visakhapatnam, AP 530007",
    timings: "Mon – Sun: 9:00 AM – 9:00 PM",
    phone: "+91 9550972999",
    mapLink: "https://maps.google.com",
  },
  {
    name: "Aruku Branch",
    address: "Aruku, Andhra Pradesh",
    timings: "Mon – Sun: 9:00 AM – 9:00 PM",
    phone: "+91 9550972999",
    mapLink: "https://maps.google.com",
  },
];

export default function Footer({ setSection, onAdminClick }) {
  return (
    <footer
      style={{
        background: COLORS.footerBg,
        color: "rgba(255,255,255,0.75)",
        padding: "3rem 1.5rem 1.5rem",
      }}
    >
      <style>{`
        .footer-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .footer-branches {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 20px;
}

        .branch-box {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 14px;
        }

        .branch-box-title {
          color: #fff;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .branch-box-row {
          display: flex;
          gap: 6px;
          margin-bottom: 6px;
          font-size: 13px;
          line-height: 1.5;
        }

        .branch-map-link {
          color: #4caf50;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
        }

        .branch-map-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .footer-grid {
            flex-direction: column;
          }

          .footer-branches {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="footer-grid">

          {/* Brand */}
          <div style={{ flex: 1, minWidth: "250px" }}>
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
              }}
            >
              Bringing Nature's Goodness to Your Doorstep. Premium Araku
              Coffee, Organic Millets, Cold Pressed Oils, Traditional Spice
              Powders and Natural Wellness Products.
            </p>
          </div>

          {/* Store Locations */}
          <div style={{ flex: 1.5, minWidth: "500px" }}>
            <h4
              style={{
                color: "#fff",
                marginBottom: "15px",
              }}
            >
              📍 Our Store Locations
            </h4>

            <div className="footer-branches">
              {branches.map((b) => (
                <div key={b.name} className="branch-box">
                  <div className="branch-box-title">
                    🏪 {b.name}
                  </div>

                  <div className="branch-box-row">
                    <span>🏠</span>
                    <span>{b.address}</span>
                  </div>

                  <div className="branch-box-row">
                    <span>🕐</span>
                    <span>{b.timings}</span>
                  </div>

                  <div className="branch-box-row">
                    <span>📞</span>
                    <span>{b.phone}</span>
                  </div>

                  <a
                    href={b.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="branch-map-link"
                  >
                    📍 View Map →
                  </a>
                </div>
              ))}
            </div>
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
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                {c.icon} {c.label}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div style={{ flex: 1, minWidth: "150px" }}>
            <h4
              style={{
                color: COLORS.white,
                marginBottom: "15px",
              }}
            >
              Quick Links
            </h4>

            {quickLinks.map((link) => (
              <div key={link} style={{ marginBottom: "10px" }}>
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
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span>
            © {new Date().getFullYear()} Aruku Natural Millets. All Rights Reserved. 🌿
          </span>

          <button
            onClick={onAdminClick}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.25)",
              cursor: "pointer",
              fontSize: "11px",
            }}
          >
            Owner
          </button>
        </div>
      </div>
    </footer>
  );
}