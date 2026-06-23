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
    color: cat.color,
  }))
);

export default function Navbar({
  setSection,
  searchTerm,
  setSearchTerm,
  setShowAdmin,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const searchRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
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
          padding: isMobile ? "10px" : "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        {/* LOGO */}
        <div
          onClick={() => handleNav("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: isMobile ? 40 : 48,
              height: isMobile ? 40 : 48,
              borderRadius: "50%",
              background: "#fff",
            }}
          />

          {!isMobile && (
            <div style={{ color: "#fff" }}>
              <div style={{ fontWeight: "700" }}>
                Aruku Natural
              </div>

              <div
                style={{
                  fontSize: "11px",
                  opacity: 0.85,
                }}
              >
                Pure • Organic • Traditional
              </div>
            </div>
          )}
        </div>

        {/* SEARCH DESKTOP */}
        {!isMobile && (
          <div
            ref={searchRef}
            style={{
              position: "relative",
              flex: 1,
              margin: "0 15px",
            }}
          >
            <input
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search products..."
              style={{
                width: "100%",
                padding: "10px 16px",
                borderRadius: "25px",
                border: "none",
                outline: "none",
              }}
            />

            {dropdownOpen && suggestions.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "45px",
                  left: 0,
                  right: 0,
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow:
                    "0 10px 20px rgba(0,0,0,0.15)",
                  overflow: "hidden",
                }}
              >
                {suggestions.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #eee",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSearchTerm(p.name);
                      setSection("products");
                      setDropdownOpen(false);
                    }}
                  >
                    <div>{p.name}</div>

                    <small style={{ color: p.color }}>
                      {p.category}
                    </small>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DESKTOP MENU */}
        {!isMobile ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
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
                  padding: "8px 12px",
                  borderRadius: "8px",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => setShowAdmin(true)}
              style={{
                background: "#000",
                color: "#fff",
                border: "none",
                padding: "8px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Admin
            </button>
          </div>
        ) : (
          /* MOBILE HAMBURGER */
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* MOBILE SEARCH */}
      {isMobile && (
        <div
          style={{
            padding: "0 10px 10px",
            background: COLORS.primary,
          }}
        >
          <input
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search products..."
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "20px",
              border: "none",
              outline: "none",
            }}
          />
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && isMobile && (
        <div
          style={{
            background: "#1e6e32",
            padding: "10px",
          }}
        >
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                padding: "12px",
                color: "#fff",
                borderBottom:
                  "1px solid rgba(255,255,255,0.15)",
                cursor: "pointer",
              }}
            >
              {item.label}
            </div>
          ))}

          <div
            onClick={() => setShowAdmin(true)}
            style={{
              padding: "12px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Admin
          </div>
        </div>
      )}
    </nav>
  );
}