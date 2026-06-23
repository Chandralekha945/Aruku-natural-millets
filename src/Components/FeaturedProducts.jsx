import { useState } from "react";
import categories from "../data/products";
import ProductCard from "./ProductCard";

// Featured Products
const featured = [
  ...categories.map((c) => ({
    ...c.products[0],
    color: c.color,
    bg: c.bg,
    category: c.label,
  })),
  {
    ...categories[0].products[1],
    color: categories[0].color,
    bg: categories[0].bg,
    category: categories[0].label,
  },
  {
    ...categories[2].products[1],
    color: categories[2].color,
    bg: categories[2].bg,
    category: categories[2].label,
  },
].slice(0, 8);

export default function FeaturedProducts({
  setSection,
  setSelectedProduct,
}) {
  const [startIndex, setStartIndex] = useState(0);

  const isMobile = window.innerWidth < 768;
  const visibleCount = isMobile ? 2 : 4;

  const visibleProducts = featured.slice(
    startIndex,
    startIndex + visibleCount
  );

  const nextSlide = () => {
    if (startIndex + visibleCount < featured.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section
      style={{
        background: "#F8FCF8",
        padding: "4rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              color: "#098a25",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Handpicked For You
          </div>

          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Featured Products
          </h2>
        </div>

        {/* Carousel */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              border: "none",
              background: "#098a25",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              opacity: startIndex === 0 ? 0.4 : 1,
              flexShrink: 0,
            }}
          >
            ‹
          </button>

          {/* Products */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                category={product.category}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={startIndex + visibleCount >= featured.length}
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              border: "none",
              background: "#098a25",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              opacity:
                startIndex + visibleCount >= featured.length ? 0.4 : 1,
              flexShrink: 0,
            }}
          >
            ›
          </button>
        </div>

        {/* View All Button */}
        <div
          style={{
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          <button
            onClick={() => setSection("products")}
            style={{
              background: "#098a25",
              color: "#fff",
              border: "none",
              padding: "12px 30px",
              borderRadius: "8px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}