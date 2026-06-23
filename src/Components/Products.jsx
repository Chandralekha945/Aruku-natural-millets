import COLORS from "../theme";
import categories from "../data/products";
import ProductCard from "./ProductCard";

export default function Products({
  searchTerm,
  activeCategory,
  setSelectedProduct,
}) {
  const term = (searchTerm ?? "").trim().toLowerCase();

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      products: cat.products.filter((product) =>
        (
          product.name +
          " " +
          cat.label +
          " " +
          (product.desc || "")
        )
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
        padding: "2rem 1rem",
      }}
    >
      <style>{`
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* No Results */}
        {shown.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
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

        {/* Categories */}
        {shown.map((cat) => (
          <div
            key={cat.id}
            style={{
              marginBottom: "2.5rem",
            }}
          >
            {/* Category Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "1rem",
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

              <div
                style={{
                  flex: 1,
                  height: "2px",
                  background: cat.bg,
                }}
              />
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {cat.products.map((product) => (
                <ProductCard
                  key={product.name}
                  {...product}
                  category={cat.label}
                  onClick={() =>
                    setSelectedProduct({
                      ...product,
                      categoryLabel: cat.label,
                    })
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}