import COLORS from "../theme";
import categories from "../data/products";
import ProductCard from "./ProductCard";

export default function Products({ searchTerm, activeCategory, setSelectedProduct }) {
  const term = (searchTerm ?? "").trim().toLowerCase();

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      products: cat.products.filter((product) =>
        (product.name + " " + cat.label + " " + (product.desc || ""))
          .toLowerCase()
          .includes(term)
      ),
    }))
    .filter((cat) => cat.products.length > 0);

  const shown =
    term !== ""
      ? filteredCategories
      : activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section
      style={{
        background: COLORS.primaryPale,
        padding: "5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              color: COLORS.primary,
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Our Products
          </div>

          <h2
            style={{
              fontSize: "2.3rem",
              fontWeight: 800,
              color: COLORS.text,
              marginBottom: "1rem",
            }}
          >
            Explore Our Natural Collection
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              color: COLORS.textMuted,
              lineHeight: 1.7,
            }}
          >
            Premium cold-pressed oils, organic millets, spices, coffee,
            flours, and wellness products sourced directly from trusted farms.
          </p>
        </div>

        {/* No Results */}
        {shown.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              background: "#fff",
              borderRadius: "16px",
            }}
          >
            <h3>No products found</h3>
            <p>
              No products match "<strong>{searchTerm}</strong>"
            </p>
          </div>
        )}

        {/* Product Categories */}
        {shown.map((cat) => (
          <div key={cat.id} style={{ marginBottom: "3rem" }}>
            {/* Category Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: cat.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                {cat.icon}
              </div>

              <h3
                style={{
                  margin: 0,
                  color: cat.color,
                  fontSize: "1.4rem",
                  fontWeight: 700,
                }}
              >
                {cat.label}
              </h3>

              <div style={{ flex: 1, height: "2px", background: cat.bg }} />
            </div>

            {/* Products Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "20px",
              }}
            >
              {cat.products.map((product) => (
                <ProductCard
                  key={product.name}
                  {...product}
                  category={cat.label}
                  onClick={() => setSelectedProduct({ ...product, categoryLabel: cat.label })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}