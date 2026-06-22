import COLORS from "../theme";

import about1 from "../assets/store1.jpeg";
import about2 from "../assets/store2.jpeg";
import about3 from "../assets/store3.jpeg";

const stats = [
  { number: "50+", label: "Products" },
  { number: "100%", label: "Organic" },
  { number: "0", label: "Preservatives" },
  { number: "∞", label: "Purity" },
];

export default function About() {
  return (
    <section
      style={{
        background: COLORS.primaryLight,
        padding: "5rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              color: COLORS.primary,
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            About Araku Natural
          </h2>

          <p
            style={{
              maxWidth: 700,
              margin: "0 auto",
              color: COLORS.textMuted,
              lineHeight: 1.8,
            }}
          >
            Bringing pure cold-pressed oils, organic millets, spices, and
            wellness products to families who value health and tradition.
          </p>
        </div>

        {/* Photos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            marginBottom: "3rem",
          }}
        >
          <img
            src={about1}
            alt="Store Interior"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
          />

          <img
            src={about2}
            alt="Products"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
          />

          <img
            src={about3}
            alt="Araku Natural"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Story */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            marginBottom: "2rem",
          }}
        >
          <h3
            style={{
              color: COLORS.primary,
              marginBottom: "1rem",
              fontSize: "1.8rem",
            }}
          >
            Our Story
          </h3>

          <p
            style={{
              color: COLORS.textMuted,
              lineHeight: 1.8,
            }}
          >
            Araku Natural was founded with a simple mission — to provide
            authentic, natural, and healthy food products without compromising
            on quality. We carefully source premium oils, millets, spices,
            coffee, and wellness products that retain their natural nutrition
            and traditional goodness.
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "1.5rem",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  color: COLORS.primary,
                  fontSize: "2rem",
                  fontWeight: 800,
                }}
              >
                {stat.number}
              </div>

              <div
                style={{
                  color: COLORS.textMuted,
                  marginTop: 8,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}