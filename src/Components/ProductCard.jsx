import { useState } from "react";
import { whatsappLink } from "../constants";

const categoryIcon = {
  "Cold Pressed Oils":  "🫙",
  "Spice Powders":      "🌶️",
  "Millets & Grains":   "🌾",
  "Flours & Jaggery":   "🏺",
  "Coffee":             "☕",
  "Wellness & Beauty":  "🍃",
};

export default function ProductCard({ name, sizes, desc, img, category,onClick }) {
  const [selected, setSelected] = useState(sizes[0]);
  const [imgError, setImgError] = useState(false);

  const msg = `Hi! I'd like to order *${name}*${selected !== "available" ? ` (${selected})` : ""} from Aruku Natural.`;

  return (
    <div
    onClick={onClick}
      style={{
        background: "#FFFFFF",
        borderRadius: 14,
        border: "1px solid #D8EED8",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.25s, transform 0.25s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(9,138,37,0.13)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* ── Image area ── */}
      <div style={{
        background: "#F0FAF2",
        height: 170,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        {img && !imgError ? (
          <img
            src={img}
            alt={name}
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span style={{ fontSize: 54 }}>{categoryIcon[category] || "🌿"}</span>
        )}

        {/* Category badge */}
        <div style={{
          position: "absolute", top: 10, left: 10,
          background: "rgba(9,138,37,0.90)",
          color: "#fff",
          fontSize: 10, fontWeight: 700,
          padding: "3px 9px", borderRadius: 6, letterSpacing: 0.4,
        }}>
          {category}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: "14px 14px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>

        {/* Product name */}
        <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", lineHeight: 1.3 }}>
          {name}
        </div>

        {/* Description */}
        <div style={{ fontSize: 12.5, color: "#5A6E5A", lineHeight: 1.65, flexGrow: 1 }}>
          {desc}
        </div>

        {/* Quality badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {["No Preservatives", "Authentic Taste"].map((b) => (
            <span key={b} style={{
              background: "#F0FAF2", color: "#098a25",
              border: "1px solid #C8E6C9",
              borderRadius: 10, fontSize: 10, fontWeight: 600, padding: "3px 8px",
            }}>
              ✓ {b}
            </span>
          ))}
        </div>

        {/* Size selector */}
        {sizes[0] !== "available" && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {sizes.map((s) => (
              <button key={s} onClick={() => setSelected(s)}
                style={{
                  padding: "5px 12px", borderRadius: 7,
                  fontSize: 12, fontWeight: 600, cursor: "pointer",
                  border: `1.5px solid ${selected === s ? "#098a25" : "#C8E6C9"}`,
                  background: selected === s ? "#E8F5E9" : "#fff",
                  color: selected === s ? "#098a25" : "#5A6E5A",
                  transition: "all 0.15s",
                }}>
                {s}
              </button>
            ))}
          </div>
        )}
        
        {/* WhatsApp order button */}
        <a href={whatsappLink(msg)} target="_blank" rel="noreferrer">
          <button style={{
            width: "100%",
            background: "#098a25",
            color: "#fff",
            border: "none",
            padding: "11px",
            borderRadius: 9,
            fontWeight: 700,
            fontSize: 13,
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
            letterSpacing: 0.3,
          }}>
            💬 Order via WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
}