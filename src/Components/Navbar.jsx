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

const allProducts = categories.flatMap((cat) =>
  cat.products.map((p) => ({
    name: p.name,
    category: cat.label,
    icon: cat.icon,
    color: cat.color,
  }))
);

export default function Navbar({
  activeSection,
  setSection,
  searchTerm,
  setSearchTerm,
  setShowAdmin,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchRef = useRef(null);

  const suggestions =
    searchTerm.trim()
      ? allProducts
          .filter((p) =>
            (p.name + " " + p.category)
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
          .slice(0, 8)
      : [];

  // close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNav = (id) => {
    setSection(id);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSection("products");
    setDropdownOpen(true);
  };

  const handleSelect = (product) => {
    setSearchTerm(product.name);
    setSection("products");
    setDropdownOpen(false);
  };

  const clearSearch = () => {
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
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        {/* LOGO */}
        <div
          onClick={() => handleNav("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: 45,
              height: 45,
              borderRadius: "50%",
              background: "#fff",
            }}
          />
          <div style={{ color: "#fff" }}>
            <div style={{ fontWeight: "bold" }}>Aruku Natural</div>
            <div style={{ fontSize: "11px", opacity: 0.8 }}>
              Pure • Organic • Traditional
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div ref={searchRef} style={{ position: "relative", flex: 1, margin: "0 10px" }}>
          <input
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search products..."
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "20px",
              border: "none",
              outline: "none",
            }}
            onFocus={() => searchTerm && setDropdownOpen(true)}
          />

          {searchTerm && (
            <span
              onClick={clearSearch}
              style={{
                position: "absolute",
                right: 10,
                top: 8,
                cursor: "pointer",
              }}
            >
              ✕
            </span>
          )}

          {/* DROPDOWN */}
          {dropdownOpen && suggestions.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: 0,
                right: 0,
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                maxHeight: "250px",
                overflowY: "auto",
                zIndex: 999,
              }}
            >
              {suggestions.map((p, i) => (
                <div
                  key={i}
                  onClick={() => handleSelect(p)}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{p.name}</div>
                  <div style={{ fontSize: "12px", color: p.color }}>
                    {p.category}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DESKTOP MENU */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "6px 10px",
                borderRadius: "6px",
              }}
            >
              {item.label}
            </button>
          ))}

          {/* ⭐ ADMIN BUTTON */}
          <button
            onClick={() => setShowAdmin(true)}
            style={{
              background: "#000",
              color: "#fff",
              border: "none",
              padding: "6px 10px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Admin
          </button>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "22px",
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ background: "#1e6e32", padding: "10px" }}>
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{ padding: "10px", color: "#fff", cursor: "pointer" }}
            >
              {item.label}
            </div>
          ))}

          <div
            onClick={() => setShowAdmin(true)}
            style={{ padding: "10px", color: "#fff", fontWeight: "bold" }}
          >
            Admin
          </div>
        </div>
      )}
    </nav>
  );
}