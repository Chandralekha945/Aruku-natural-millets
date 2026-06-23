import COLORS from "../theme";
import categories from "../data/products";
import ProductCard from "./ProductCard";

// Pick first product from each category = 6 featured, then 2 more from oils
const featured = [
  ...categories.map((c) => ({ ...c.products[0], color: c.color, bg: c.bg, category: c.label })),
  { ...categories[0].products[1], color: categories[0].color, bg: categories[0].bg, category: categories[0].label },
  { ...categories[2].products[1], color: categories[2].color, bg: categories[2].bg, category: categories[2].label },
].slice(0, 8);

export default function FeaturedProducts({ setSection, searchTerm, setSelectedProduct }) {
  return (
    <section style={{ background: "#F8FCF8", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ color: "#098a25", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>
              Handpicked for You
            </div>
            <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#1A1A1A", fontFamily: "Georgia, serif", margin: 0 }}>
              Popular Products
            </h2>
          </div>
          <button
            onClick={() => setSection("products")}
            style={{
              background: "transparent", border: "2px solid #098a25",
              color: "#098a25", padding: "10px 24px",
              borderRadius: 8, fontWeight: 700, fontSize: 14,
              cursor: "pointer",
            }}
          >
            View All Products →
          </button>
        </div>

        {/* 4-column grid, 2 rows = 8 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 20 }}>
          {featured.map((p, i) => (
  <ProductCard
    key={i}
    {...p}
    onClick={() => setSelectedProduct(p)}
  />
))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            onClick={() => setSection("products")}
            style={{
              background: "#098a25", color: "#fff",
              border: "none", padding: "14px 36px",
              borderRadius: 9, fontWeight: 700, fontSize: 15,
              cursor: "pointer", letterSpacing: 0.3,
            }}
          >
            Browse All  Products
          </button>
        </div>
      </div>
    </section>
  );
}