import { useState, useEffect, useRef } from "react";
import categories from "../data/products";
import ProductCard from "./ProductCard";

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

export default function FeaturedProducts({ setSection, setSelectedProduct }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const visibleCount = isMobile ? 2 : 4;
  const gap = 16;
  const maxIndex = featured.length - visibleCount;

  const getCardWidth = () => {
    if (!trackRef.current) return 0;
    return (trackRef.current.offsetWidth - gap * (visibleCount - 1)) / visibleCount;
  };

  const slideTo = (index) => {
    const i = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(i);
    const cardW = getCardWidth();
    setOffset(i * (cardW + gap));
  };

  const go = (dir) => slideTo(currentIndex + dir);

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <>
      <style>{`
        .fp-section { background: #F8FCF8; padding: 4rem 1rem; }
        .fp-container { max-width: 1200px; margin: 0 auto; }
        .fp-viewport { overflow: hidden; flex: 1; }
        .fp-track {
          display: flex;
          gap: 16px;
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        .fp-card { flex-shrink: 0; }
        .fp-arrow {
          width: 45px; height: 45px;
          border-radius: 50%; border: none;
          background: #098a25; color: #fff;
          font-size: 22px; cursor: pointer;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(9,138,37,0.3);
          transition: transform 0.15s, background 0.15s;
          font-family: inherit;
          display: flex; align-items: center; justify-content: center;
        }
        .fp-arrow:hover { transform: scale(1.1); background: #076e1e; }
        .fp-arrow:disabled { opacity: 0.3; cursor: default; transform: none; }
        .fp-dot { height: 7px; border-radius: 4px; cursor: pointer; transition: all 0.3s; }
        @media (max-width: 768px) {
          .fp-section { padding: 2.5rem 0.5rem; }
          .fp-arrow { width: 34px; height: 34px; font-size: 18px; }
        }
      `}</style>

      <section className="fp-section">
        <div className="fp-container">

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
            <div style={{ color: "#098a25", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Handpicked For You
            </div>
            <h2 style={{ fontSize: isMobile ? "1.6rem" : "2rem", fontWeight: 800, color: "#1a1a1a", margin: 0 }}>
              Featured Products
            </h2>
          </div>

          {/* Carousel */}
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "8px" : "15px" }}>

            <button className="fp-arrow" onClick={() => go(-1)} disabled={currentIndex <= 0}>‹</button>

            <div className="fp-viewport" ref={trackRef}>
              <div
                className="fp-track"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                style={{ transform: `translateX(-${offset}px)` }}
              >
                {featured.map((product, i) => (
                  <div
                    key={i}
                    className="fp-card"
                    style={{
                      width: trackRef.current
                        ? `${(trackRef.current.offsetWidth - gap * (visibleCount - 1)) / visibleCount}px`
                        : `calc((100% - ${gap * (visibleCount - 1)}px) / ${visibleCount})`,
                    }}
                  >
                    <ProductCard
                      {...product}
                      category={product.category}
                      onClick={() => setSelectedProduct(product)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button className="fp-arrow" onClick={() => go(1)} disabled={currentIndex >= maxIndex}>›</button>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "7px", marginTop: "18px" }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <div
                key={i}
                className="fp-dot"
                onClick={() => slideTo(i)}
                style={{
                  width: i === currentIndex ? "22px" : "7px",
                  background: i === currentIndex ? "#098a25" : "#ccc",
                }}
              />
            ))}
          </div>

          {/* View All */}
          <div style={{ textAlign: "center", marginTop: "1.8rem" }}>
            <button
              onClick={() => setSection("products")}
              style={{
                background: "#098a25", color: "#fff", border: "none",
                padding: isMobile ? "11px 24px" : "12px 30px",
                borderRadius: "8px", fontWeight: 700, cursor: "pointer",
                fontSize: isMobile ? "14px" : "15px", fontFamily: "inherit",
                boxShadow: "0 4px 12px rgba(9,138,37,0.25)",
              }}
            >
              View All Products
            </button>
          </div>

        </div>
      </section>
    </>
  );
}