import { useState } from "react";
import { whatsappLink } from "../constants";

const categoryIcon = {
  "Cold Pressed Oils": "🫙",
  "Spice Powders": "🌶️",
  "Millets & Grains": "🌾",
  "Flours & Jaggery": "🏺",
  "Coffee": "☕",
  "Wellness & Beauty": "🍃",
};

export default function ProductCard({ name, sizes, desc, img, category, onClick }) {
  const [selected, setSelected] = useState(sizes[0]);
  const [imgError, setImgError] = useState(false);

  const msg = `Hi! I'd like to order *${name}*${selected !== "available" ? ` (${selected})` : ""} from Aruku Natural.`;

  return (
    <>
      <style>{`
        .pcard {
          background: #fff;
          border-radius: 14px;
          border: 1px solid #D8EED8;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s, transform 0.25s;
          cursor: pointer;
          height: 100%;
        }
        .pcard:hover {
          box-shadow: 0 8px 28px rgba(9,138,37,0.13);
          transform: translateY(-3px);
        }
        .pcard-img {
          background: #F0FAF2;
          height: 170px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .pcard-body {
          padding: 12px 12px 14px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .pcard-name {
          font-weight: 700;
          font-size: 15px;
          color: #1A1A1A;
          line-height: 1.3;
        }
        .pcard-desc {
          font-size: 12.5px;
          color: #5A6E5A;
          line-height: 1.55;
          min-height: 58px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pcard-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .pcard-badge {
          background: #F0FAF2;
          color: #098a25;
          border: 1px solid #C8E6C9;
          border-radius: 10px;
          font-size: 10px;
          font-weight: 600;
          padding: 3px 7px;
        }
        .pcard-sizes {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          min-height: 58px;
  align-content: flex-start;
        }
        .pcard-size-btn {
          padding: 4px 10px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
        }
        .pcard-order-btn {
          width: 100%;
          background: #098a25;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 9px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-family: inherit;
        }

        @media (max-width: 650px) {
          .pcard-img { height: 130px; }
          .pcard-body { padding: 10px 10px 12px; gap: 6px; }
          .pcard-name { font-size: 13px; }
          .pcard-desc { font-size: 11.5px; -webkit-line-clamp: 2; min-height: 36px; }
          .pcard-badge { font-size: 9px; padding: 2px 6px; }
          .pcard-size-btn { font-size: 10px; padding: 3px 8px; }
          .pcard-order-btn { font-size: 12px; padding: 9px 6px; gap: 4px; }
        }
      `}</style>

      <div className="pcard" onClick={onClick}>
        {/* Image */}
        <div className="pcard-img">
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
          <div style={{
            position: "absolute", top: 8, left: 8,
            background: "rgba(9,138,37,0.90)",
            color: "#fff",
            fontSize: 10, fontWeight: 700,
            padding: "3px 8px", borderRadius: 6,
          }}>
            {category}
          </div>
        </div>

        {/* Body */}
        <div className="pcard-body">
          <div className="pcard-name">{name}</div>
          <div className="pcard-desc">{desc}</div>

          <div className="pcard-badges">
            {["No Preservatives", "Authentic Taste"].map((b) => (
              <span key={b} className="pcard-badge">✓ {b}</span>
            ))}
          </div>

          <div className="pcard-sizes">
  {sizes[0] !== "available" &&
    sizes.map((s) => (
      <button
        key={s}
        className="pcard-size-btn"
        onClick={(e) => {
          e.stopPropagation();
          setSelected(s);
        }}
        style={{
          border: `1.5px solid ${selected === s ? "#098a25" : "#C8E6C9"}`,
          background: selected === s ? "#E8F5E9" : "#fff",
          color: selected === s ? "#098a25" : "#5A6E5A",
        }}
      >
        {s}
      </button>
    ))}
</div>
          <a
            href={whatsappLink(msg)}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="pcard-order-btn">
              💬 Order via WhatsApp
            </button>
          </a>
        </div>
      </div>
    </>
  );
}