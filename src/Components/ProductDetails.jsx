import { whatsappLink } from "../constants";
import categories from "../data/products";

export default function ProductDetails({ product, onBack, setSelectedProduct }) {
  const msg = `Hi! I'd like to order ${product.name} from Aruku Natural.`;
  const allProducts = categories.flatMap((cat) =>
  cat.products.map((p) => ({
    ...p,
    category: cat.label,
  }))
);

const similarProducts = allProducts
  .filter((p) => p.name !== product.name)
  .slice(0, 4);

  return (
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
        }}
      >
        ← Back to Products
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "45% 55%",
          gap: "40px",
          alignItems: "center",
          background: "#fff",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        }}
      >
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
          <h1
            style={{
              fontSize: "2.2rem",
              marginBottom: "15px",
              color: "#1A1A1A",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              color: "#666",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
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
          <div
            style={{
              marginBottom: "25px",
              lineHeight: "2",
            }}
          >
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
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                background: "#25D366",
                color: "#fff",
                border: "none",
                padding: "14px 28px",
                borderRadius: "10px",
                fontWeight: "700",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              💬 Order via WhatsApp
            </button>
          </a>
        </div>
      </div>
      <h2
  style={{
    marginTop: "50px",
    marginBottom: "20px",
  }}
>
  Similar Products
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  }}
>
  {similarProducts.map((item) => (
    <div
      key={item.name}
      onClick={() => setSelectedProduct(item)}
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "15px",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={item.img}
        alt={item.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h4>{item.name}</h4>

      <p
        style={{
          fontSize: "14px",
          color: "#666",
        }}
      >
        {item.desc?.slice(0, 60)}...
      </p>
    </div>
  ))}
</div>
    </section>
  );
}