import COLORS from "../theme";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function About() {
  const aboutImages = [
    "/assets/store1.jpg",
    "/assets/store2.jpg",
    
  ];

  const branches = [
    {
      name: "Anakapalli Branch",
      location: "Anakapalli, Andhra Pradesh",
      note: "Main production unit for oils & millets",
    },
    {
      name: "Visakhapatnam Branch",
      location: "Visakhapatnam, Andhra Pradesh",
      note: "Retail store for direct customers",
    },
  ];

  return (
    <section
      style={{
        padding: "clamp(2rem, 5vw, 4rem) 1rem",
        background: COLORS.bg,
        fontFamily: "Segoe UI, Arial",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* TITLE */}
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            marginBottom: "10px",
          }}
        >
          About Araku Natural Millets
        </h2>

        <p
          style={{
            color: "#666",
            lineHeight: 1.8,
            marginBottom: "2rem",
            fontSize: "clamp(13px, 2vw, 15px)",
          }}
        >
          We provide 100% natural, chemical-free, and traditionally processed
          oils and millets directly from farmers to your home.
        </p>

        {/* CAROUSEL */}
        <div style={{ marginBottom: "3rem" }}>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={2500}
          >
            {aboutImages.map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  alt="about"
                  style={{
                    height: "clamp(200px, 50vw, 400px)",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* TRUST */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.4rem" }}>⭐ Why Trust Us</h3>

          <ul style={{ color: "#555", lineHeight: 2, fontSize: 14 }}>
            <li>✔ 100% Natural Products</li>
            <li>✔ Cold-Pressed Traditional Methods</li>
            <li>✔ No Chemicals or Preservatives</li>
            <li>✔ Fresh Farm-to-Home Supply</li>
          </ul>
        </div>

        {/* RATINGS */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.4rem" }}>
            ⭐ Ratings & Reviews
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 12,
              marginTop: 15,
            }}
          >
            {[
              { t: "Justdial", v: "4.2/5" },
              { t: "Yappe", v: "4.5/5" },
              { t: "Trust", v: "High" },
            ].map((r) => (
              <div
                key={r.t}
                style={{
                  background: "#fff",
                  padding: "14px",
                  borderRadius: 12,
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <b>{r.t}</b>
                <p style={{ marginTop: 6 }}>{r.v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BRANCHES */}
        <div>
          <h3 style={{ fontSize: "1.4rem" }}>🏬 Our Branches</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 15,
              marginTop: 15,
            }}
          >
            {branches.map((b) => (
              <div
                key={b.name}
                style={{
                  background: "#fff",
                  padding: "16px",
                  borderRadius: 12,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <h4>{b.name}</h4>
                <p style={{ color: "#666" }}>📍 {b.location}</p>
                <p style={{ fontSize: 13, color: "#888" }}>{b.note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}