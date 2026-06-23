import { useState, useEffect, useRef } from "react";
import img1 from "../assets/store1.jpeg";
import img2 from "../assets/store2.jpeg";
import img3 from "../assets/store3.jpeg";
import img4 from "../assets/image1.png";
import img5 from "../assets/image2.png";
import img6 from "../assets/store4.jpeg";

const images = [img1, img2, img3, img4, img5, img6];

const branches = [
  {
    name: "Muralinagar Branch",
    address: "39-4-25, Burma Colony, Muralinagar, Madhavadhara, Visakhapatnam, Andhra Pradesh 530007",
    timings: "Mon – Sun: 9:00 AM – 9:00 PM",
    phone: "+91 9550972999",
    rating: 4.5,
    reviews: 10,
    mapLink: "https://maps.google.com",
    badge: "⭐ Top Rated",
  },
  {
    name: "Aruku Branch",
    address: "Aruku, Andhra Pradesh",
    timings: "Mon – Sun: 9:00 AM – 9:00 PM",
    phone: "+91 9550972999",
    rating: 4.3,
    reviews: 330,
    mapLink: "https://maps.google.com",
    badge: "330+ Reviews",
  },
];

const reviews = [
  { name: "Ravi Kumar", branch: "Muralinagar Branch", rating: 5, text: "Very clean store with great quality products. The cold-pressed oils are authentic and fresh. Highly recommend!", source: "Yappe.in", avatar: "RK" },
  { name: "Lakshmi Devi", branch: "Muralinagar Branch", rating: 5, text: "Amazing millets and spice powders. You can feel the difference in taste. Pure and natural products.", source: "JustDial", avatar: "LD" },
  { name: "Suresh Babu", branch: "Aruku Branch", rating: 4, text: "Good variety of products. Store is well-organized and staff is helpful. Will visit again.", source: "JustDial", avatar: "SB" },
  { name: "Priya Reddy", branch: "Muralinagar Branch", rating: 5, text: "Best place for organic products in Vizag. The groundnut oil is excellent. Very affordable prices.", source: "Yappe.in", avatar: "PR" },
  { name: "Venkat Rao", branch: "Aruku Branch", rating: 4, text: "Trusted store for natural products. Been buying from here for over a year. Quality is always consistent.", source: "JustDial", avatar: "VR" },
];

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: s <= Math.round(rating) ? "#f5a623" : "#ddd", fontSize: "14px" }}>★</span>
      ))}
    </div>
  );
}

function FanCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 650);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = (dir) => {
    clearInterval(timerRef.current);
    setCurrent((c) => (c + dir + images.length) % images.length);
    startTimer();
  };

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setCurrent(i);
    startTimer();
  };

  const getStyle = (offset) => {
    const abs = Math.abs(offset);
    if (isMobile) {
      if (abs === 0) return { width: "220px", height: "170px", scale: 1, opacity: 1, filter: "none", tx: 0, zIndex: 5 };
      if (abs === 1) return { width: "180px", height: "140px", scale: 0.72, opacity: 0.6, filter: "brightness(0.65)", tx: offset * 170, zIndex: 4 };
      return null;
    }
    if (abs === 0) return { width: "360px", height: "270px", scale: 1, opacity: 1, filter: "none", tx: 0, zIndex: 5 };
    if (abs === 1) return { width: "290px", height: "220px", scale: 0.78, opacity: 0.75, filter: "brightness(0.7)", tx: offset * 280, zIndex: 4 };
    if (abs === 2) return { width: "240px", height: "180px", scale: 0.58, opacity: 0.4, filter: "brightness(0.5)", tx: offset * 270, zIndex: 3 };
    return null;
  };

  const slots = [-2, -1, 0, 1, 2];

  return (
    <div style={{ marginBottom: "40px" }}>
      <div style={{ position: "relative", height: isMobile ? "200px" : "310px", overflow: "hidden" }}>
        {slots.map((offset) => {
          const s = getStyle(offset);
          if (!s) return null;
          const imgIndex = (current + offset + images.length) % images.length;
          return (
            <div
              key={offset}
              onClick={() => offset !== 0 && goTo(imgIndex)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: s.width,
                height: s.height,
                transform: `translate(calc(-50% + ${s.tx}px), -50%)`,
                zIndex: s.zIndex,
                opacity: s.opacity,
                filter: s.filter,
                transition: "all 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
                cursor: offset !== 0 ? "pointer" : "default",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: offset === 0 ? "0 20px 50px rgba(0,0,0,0.3)" : "0 8px 20px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={images[imgIndex]}
                alt={`store-${imgIndex + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none", userSelect: "none" }}
              />
            </div>
          );
        })}

        {/* Arrows */}
        {[-1, 1].map((dir) => (
          <button
            key={dir}
            onClick={() => go(dir)}
            style={{
              position: "absolute",
              [dir === -1 ? "left" : "right"]: isMobile ? "6px" : "16px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(255,255,255,0.92)",
              border: "none",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              fontSize: "20px",
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "inherit",
            }}
          >
            {dir === -1 ? "‹" : "›"}
          </button>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "18px" }}>
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === current ? "#098a25" : "#ccc",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "8px", color: "#aaa", fontSize: "13px" }}>
        {current + 1} / {images.length}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <style>{`
        .about-section { background: #f8faf8; padding: 45px 20px; font-family: 'Segoe UI', Arial, sans-serif; }
        .about-container { max-width: 1100px; margin: 0 auto; }
        .section-label { color: #098a25; font-weight: 700; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; }
        .section-title { font-size: 2.2rem; font-weight: 800; color: #1a1a1a; margin-bottom: 12px; }
        .section-sub { color: #666; max-width: 680px; margin: 0 auto; line-height: 1.8; }
        .stats-bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 30px; }
        .stat-card { background: #fff; border-radius: 14px; padding: 20px 16px; text-align: center; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
        .stat-number { font-size: 1.8rem; font-weight: 800; color: #098a25; }
        .stat-label { font-size: 13px; color: #666; margin-top: 4px; }
        .branches-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 50px; }
        .branch-card { background: #fff; border-radius: 18px; padding: 24px; box-shadow: 0 6px 20px rgba(0,0,0,0.07); border-top: 4px solid #098a25; }
        .branch-badge { display: inline-block; background: #e8f5e9; color: #098a25; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
        .branch-name { font-size: 1.2rem; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; }
        .branch-info { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 10px; color: #555; font-size: 14px; line-height: 1.6; }
        .branch-icon { font-size: 16px; flex-shrink: 0; margin-top: 2px; }
        .branch-map-btn { display: inline-block; margin-top: 14px; padding: 9px 18px; background: #098a25; color: #fff; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none; transition: background 0.2s; }
        .branch-map-btn:hover { background: #076e1e; }
        .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 24px; }
        .review-card { background: #fff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
        .review-quote { font-size: 36px; color: #e8f5e9; line-height: 1; margin-bottom: 6px; }
        .review-text { color: #444; font-size: 14px; line-height: 1.7; margin-bottom: 16px; }
        .review-footer { display: flex; align-items: center; gap: 10px; }
        .review-avatar { width: 38px; height: 38px; border-radius: 50%; background: #098a25; color: #fff; font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .review-name { font-size: 14px; font-weight: 700; color: #1a1a1a; }
        .review-branch { font-size: 11px; color: #098a25; }
        .review-source { margin-left: auto; font-size: 11px; color: #aaa; font-style: italic; }
        .platform-links { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 16px; }
        .platform-btn { padding: 10px 22px; border-radius: 25px; font-size: 13px; font-weight: 600; text-decoration: none; border: 2px solid; transition: all 0.2s; }
        .platform-btn.justdial { color: #e84c00; border-color: #e84c00; }
        .platform-btn.justdial:hover { background: #e84c00; color: #fff; }
        .platform-btn.yappe { color: #1565c0; border-color: #1565c0; }
        .platform-btn.yappe:hover { background: #1565c0; color: #fff; }
        @media (max-width: 768px) {
          .section-title { font-size: 1.6rem; }
          .stats-bar { grid-template-columns: repeat(2, 1fr); }
          .reviews-grid { grid-template-columns: 1fr; }
          .stat-number { font-size: 1.4rem; }
        }
        @media (max-width: 500px) {
          .stats-bar { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .stat-card { padding: 14px 10px; }
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">

          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <div className="section-label">Our Story</div>
            <h1 className="section-title">About Aruku Natural Millets</h1>
            <p className="section-sub">
              We are committed to delivering 100% natural, chemical-free, and
              traditionally processed oils and millets. Our mission is to bring
              farm-fresh products directly to your home with trust and quality.
            </p>
          </div>

          {/* 3D Fan Carousel */}
          <FanCarousel images={images} />

          {/* Stats Bar */}
          <div className="stats-bar">
            {[
              { number: "330+", label: "Happy Customers" },
              { number: "4.5★", label: "Average Rating" },
              { number: "2", label: "Store Branches" },
              { number: "50+", label: "Natural Products" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Why We Started */}
          <div style={{ background: "#fff", padding: "30px", borderRadius: "16px", boxShadow: "0 6px 18px rgba(0,0,0,0.06)", marginBottom: "40px", borderLeft: "5px solid #098a25" }}>
            <h2 style={{ marginBottom: "12px" }}>Why We Started</h2>
            <p style={{ color: "#555", lineHeight: 1.9 }}>
              Modern food contains chemicals, preservatives, and artificial processing.
              We wanted to bring back traditional, healthy, and pure food habits.
              That is how Aruku Natural Millets was born — with a mission of health
              and trust, sourcing directly from farmers in the Araku Valley region.
              "100% Trusted Quality • Fresh Products • Safe Home Delivery"

"We ensure every product meets our quality standards and deliver it directly to your doorstep with care, freshness, and trust."
            </p>
          </div>

          {/* Branches */}
          <div style={{ marginBottom: "25px" }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div className="section-label">Locations</div>
              <h2 className="section-title" style={{ fontSize: "1.8rem" }}>Our Branches</h2>
            </div>
            <div className="branches-grid">
              {branches.map((b) => (
                <div key={b.name} className="branch-card">
                  <div className="branch-badge">{b.badge}</div>
                  <div className="branch-name">📍 {b.name}</div>
                  <div className="branch-info"><span className="branch-icon"></span><span>{b.address}</span></div>
                  <div className="branch-info"><span className="branch-icon"></span><span>{b.timings}</span></div>
                  <div className="branch-info"><span className="branch-icon"></span><span>{b.phone}</span></div>
                  <div className="branch-info"><span className="branch-icon">⭐</span><span><b>{b.rating}/5</b> based on {b.reviews}+ reviews</span></div>
                  <StarRating rating={b.rating} />
                  <a href={b.mapLink} target="_blank" rel="noreferrer" className="branch-map-btn">📍 View on Google Maps</a>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Reviews */}
          <div style={{ marginBottom: "25px" }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div className="section-label">What Customers Say</div>
              <h2 className="section-title" style={{ fontSize: "1.8rem" }}>Customer Reviews</h2>
              <div className="platform-links">
                <a href="https://yappe.in/andhra-pradesh/visakhapatnam/surplus-store" target="_blank" rel="noreferrer" className="platform-btn yappe">⭐ View on Yappe.in</a>
                <a href="https://www.justdial.com" target="_blank" rel="noreferrer" className="platform-btn justdial">⭐ View on JustDial</a>
              </div>
            </div>
            <div className="reviews-grid">
              {reviews.map((r, i) => (
                <div key={i} className="review-card">
                  <div className="review-quote">"</div>
                  <StarRating rating={r.rating} />
                  <p className="review-text" style={{ marginTop: "8px" }}>{r.text}</p>
                  <div className="review-footer">
                    <div className="review-avatar">{r.avatar}</div>
                    <div>
                      <div className="review-name">{r.name}</div>
                      <div className="review-branch">{r.branch}</div>
                    </div>
                    <div className="review-source">{r.source}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}