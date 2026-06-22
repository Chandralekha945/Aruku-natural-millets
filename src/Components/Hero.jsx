import COLORS from "../theme";
import storeImg from "../assets/store.jpeg";
import { whatsappLink } from "../constants";

export default function Hero({ setSection }) {
  return (
    <section
      style={{
        background: "#faf7f2",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Content */}
        <div
          style={{
            flex: 1,
            minWidth: "320px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#e8f5e9",
              color: "#2e7d32",
              padding: "8px 18px",
              borderRadius: "50px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            🌿 Authentic Products from Araku Valley
          </div>

          <h1
            style={{
              fontSize: "clamp(2.8rem, 3vw, 3.5rem)",
              fontWeight: "800",
              lineHeight: "1.1",
              color: "#1b1b1b",
              marginBottom: "20px",
            }}
          >
            Bringing Nature's
            <br />
            <span style={{ color: "#2e7d32" }}>
              Goodness
            </span>
            <br />
            to Your Doorstep
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "600px",
              marginBottom: "35px",
            }}
          >
            Premium Araku Coffee, Organic Millets,
            Cold Pressed Oils, Traditional Spice Powders,
            and Natural Wellness Products sourced directly
            from trusted farmers and delivered with care.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <button
              onClick={() => setSection("products")}
              style={{
                background: "#2e7d32",
                color: "#fff",
                border: "none",
                padding: "14px 30px",
                borderRadius: "10px",
                fontWeight: "700",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              Shop Products
            </button>

            <a
              href={whatsappLink(
                "Hi! I would like to order products from Araku Natural."
              )}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                background: "#25D366",
                color: "#fff",
                padding: "14px 30px",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "15px",
              }}
            >
              WhatsApp Order
            </a>
          </div>

          {/* Feature Pills */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {[
              "☕ Premium Coffee",
              "🌾 Organic Millets",
              "🫙 Cold Pressed Oils",
              "🌶️ Traditional Spices",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#fff",
                  padding: "10px 16px",
                  borderRadius: "30px",
                  border: "1px solid #e0e0e0",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div
          style={{
            flex: 1,
            minWidth: "320px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <img
              src={storeImg}
              alt="Araku Natural Store"
              style={{
                width: "100%",
                borderRadius: "24px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                objectFit: "cover",
              }}
            />

            {/* Floating Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                background: "#2e7d32",
                color: "#fff",
                padding: "14px 18px",
                borderRadius: "14px",
                fontWeight: "700",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            >
              🌿 100% Natural
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}