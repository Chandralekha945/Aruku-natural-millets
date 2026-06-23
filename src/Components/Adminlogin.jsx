import { useState } from "react";

const ADMIN_PASSWORD = "aruku2024"; // Change this to your password

export default function AdminLogin({ onLogin, onClose }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError("Incorrect password. Try again.");
      setPassword("");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "36px 32px",
          width: "100%",
          maxWidth: "380px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ fontSize: "40px", marginBottom: "10px" }}>🔐</div>
          <h2 style={{ margin: 0, color: "#1a1a1a", fontSize: "1.4rem" }}>
            Owner Login
          </h2>
          <p style={{ color: "#888", fontSize: "13px", marginTop: "6px" }}>
            Enter your admin password to continue
          </p>
        </div>

        {/* Password Input */}
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <input
            type={show ? "text" : "password"}
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            autoFocus
            style={{
              width: "100%",
              padding: "12px 44px 12px 16px",
              borderRadius: "10px",
              border: error ? "2px solid #e53935" : "2px solid #e0e0e0",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
              fontFamily: "inherit",
            }}
          />
          <span
            onClick={() => setShow((s) => !s)}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            {show ? "🙈" : "👁️"}
          </span>
        </div>

        {error && (
          <div style={{
            color: "#e53935",
            fontSize: "13px",
            marginBottom: "14px",
            textAlign: "center",
          }}>
            {error}
          </div>
        )}

        {/* Buttons */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "13px",
            background: "#098a25",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: "10px",
            fontFamily: "inherit",
          }}
        >
          Login
        </button>
        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "11px",
            background: "transparent",
            color: "#888",
            border: "2px solid #e0e0e0",
            borderRadius: "10px",
            fontSize: "14px",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}