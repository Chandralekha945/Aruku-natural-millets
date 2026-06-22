import { useState, useRef, useEffect } from "react";
import COLORS from "../theme";
import logo from "../assets/storelogo.jpg";
import categories from "../data/products";

const navItems = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" },
];

// Flatten all products with their category label
const allProducts = categories.flatMap((cat) =>
  cat.products.map((p) => ({
    name: p.name,
    category: cat.label,
    categoryId: cat.id,
    icon: cat.icon,
    color: cat.color,
  }))
);

export default function Navbar({
  activeSection,
  setSection,
  searchTerm,
  setSearchTerm,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchRef = useRef(null);

  // Suggestions: filter by name or category
  const suggestions = searchTerm.trim().length > 0
    ? allProducts.filter((p) =>
        (p.name + " " + p.category)
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
      ).slice(0, 8)
    : [];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleNav = (id) => {
    setSection(id);
    setMenuOpen(false);
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
    setSection("products");
    setDropdownOpen(true);
  };

  const handleSelect = (product) => {
    setSearchTerm(product.name);
    setSection("products");
    setDropdownOpen(false);
  };

  const handleClear = () => {
    setSearchTerm("");
    setDropdownOpen(false);
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: COLORS.primary,
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          height: "75px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => handleNav("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
          }}
        >
          <img
            src={logo}
            alt="Aruku Natural"
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              objectFit: "cover",
              background: "#fff",
              padding: "2px",
            }}
          />
          <div>
            <div style={{ color: "#fff", fontWeight: "800", fontSize: "20px" }}>
              Aruku Natural Millets
            </div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px" }}>
              Pure • Organic • Traditional
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>

          {/* Search Bar with Dropdown */}
          <div ref={searchRef} style={{ position: "relative", minWidth: "240px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.15)",
                padding: "8px 14px",
                borderRadius: dropdownOpen && suggestions.length > 0 ? "12px 12px 0 0" : "25px",
                transition: "border-radius 0.15s",
              }}
            >
              <span style={{ color: "#fff", marginRight: "8px", fontSize: "16px" }}>
                🔍
              </span>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleInput}
                onFocus={() => searchTerm.trim() && setDropdownOpen(true)}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: "#fff",
                  width: "100%",
                  fontSize: "14px",
                }}
              />
              {/* Clear button */}
              {searchTerm && (
                <span
                  onClick={handleClear}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginLeft: "6px",
                    lineHeight: 1,
                  }}
                >
                  ✕
                </span>
              )}
            </div>

            {/* Dropdown */}
            {dropdownOpen && suggestions.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#fff",
                  borderRadius: "0 0 14px 14px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                  zIndex: 2000,
                  overflow: "hidden",
                  maxHeight: "320px",
                  overflowY: "auto",
                }}
              >
                {suggestions.map((product, i) => (
                  <div
                    key={i}
                    onMouseDown={() => handleSelect(product)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 16px",
                      cursor: "pointer",
                      borderBottom:
                        i < suggestions.length - 1
                          ? "1px solid #f0f0f0"
                          : "none",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#f5fdf6")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {/* Category icon bubble */}
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "#F0FAF2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "15px",
                        flexShrink: 0,
                      }}
                    >
                      {product.icon}
                    </div>

                    {/* Name + category */}
                    <div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#1a1a1a",
                        }}
                      >
                        {product.name}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: product.color,
                          fontWeight: 500,
                        }}
                      >
                        {product.category}
                      </div>
                    </div>

                    {/* Arrow hint */}
                    <div style={{ marginLeft: "auto", color: "#ccc", fontSize: "13px" }}>
                      →
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No results hint */}
            {dropdownOpen && searchTerm.trim().length > 0 && suggestions.length === 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#fff",
                  borderRadius: "0 0 14px 14px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                  zIndex: 2000,
                  padding: "14px 16px",
                  color: "#888",
                  fontSize: "13px",
                  textAlign: "center",
                }}
              >
                No products match "{searchTerm}"
              </div>
            )}
          </div>

          {/* Navigation */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                background:
                  activeSection === item.id
                    ? "rgba(255,255,255,0.18)"
                    : "transparent",
                border: "none",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: activeSection === item.id ? 700 : 500,
                fontSize: "14px",
                transition: "0.2s",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}