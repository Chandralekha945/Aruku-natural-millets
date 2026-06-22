import { whatsappLink } from "../constants";
import categories from "../data/products";

export default function ProductDetails({ product, onBack, setSelectedProduct }) {
  const msg = `Hi! I'd like to order ${product.name} from Aruku Natural.`;

  const allProducts = categories.flatMap((cat) =>
    cat.products.map((p) => ({ ...p, category: cat.label }))
  );

  const similarProducts = allProducts
    .filter((p) => p.name !== product.name)
    .slice(0, 4);

  return (
    <>
      <style>{`
        .product-grid {
          display: grid;
          grid-template-columns: 45% 55%;
          gap: 40px;
          align-items: start;
          background: #fff;
          padding: 20px;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }
        .product-title {
          font-size: 2.2rem;
          margin-bottom: 15px;
          color: #1A1A1A;
        }
        .whatsapp-btn {
          background: #25D366;
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          font-size: 15px;
          width: auto;
          font-family: inherit;
        }
        @media (max-width: 650px) {
          .product-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 16px;
          }
          .product-title {
            font-size: 1.6rem;
            margin-top: 10px;
          }
          .whatsapp-btn {
            width: 100%;
            font-size: 16px;
            padding: 14px;
          }
        }
      `}</style>

      <section
        style={{
          padding: "40px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Back Button */}
        <button
          onClick={onBack}
          style={{
            marginBottom: "20px",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            background: "#098a25",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
            fontFamily: "inherit",
          }}
        >
          ← Back to Products
        </button>

        <div className="product-grid">
          {/* Product Image */}
          <div>
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="product-title">{product.name}</h1>

            <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "20px" }}>
              {product.desc}
            </p>

            {/* Sizes */}
            {product.sizes && (
              <>
                <h3>Available Sizes</h3>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginBottom: "25px",
                  }}
                >
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      style={{
                        padding: "8px 14px",
                        background: "#E8F5E9",
                        borderRadius: "8px",
                        color: "#098a25",
                        fontWeight: "600",
                      }}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Features */}
            <div style={{ marginBottom: "25px", lineHeight: "2" }}>
              <div>✅ 100% Natural</div>
              <div>✅ No Preservatives</div>
              <div>✅ Authentic Taste</div>
              <div>✅ Farm Fresh</div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink(msg)}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", display: "block" }}
            >
              <button className="whatsapp-btn">💬 Order via WhatsApp</button>
            </a>
          </div>
        </div>

        {/* Similar Products */}
        <h2 style={{ marginTop: "50px", marginBottom: "20px" }}>
          Similar Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px",
          }}
        >
          {similarProducts.map((item) => (
            <div
              key={item.name}
              onClick={() => setSelectedProduct(item)}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "12px",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h4 style={{ fontSize: "14px", margin: "8px 0 4px" }}>
                {item.name}
              </h4>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
                {item.desc?.slice(0, 55)}...
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}