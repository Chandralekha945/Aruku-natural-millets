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
  const [searchExpanded, setSearchExpanded] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const suggestions =
    searchTerm.trim().length > 0
      ? allProducts
          .filter((p) =>
            (p.name + " " + p.category)
              .toLowerCase()
              .includes(searchTerm.trim().toLowerCase())
          )
          .slice(0, 8)
      : [];

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setDropdownOpen(false);
        if (!searchTerm) setSearchExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [searchTerm]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-focus input when expanded
  useEffect(() => {
    if (searchExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchExpanded]);

  const handleNav = (id) => {
    setSection(id);
    setMenuOpen(false);
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
    setSection("products");
    setDropdownOpen(true);
    setMenuOpen(false);
  };

  const handleSelect = (product) => {
    setSearchTerm(product.name);
    setSection("products");
    setDropdownOpen(false);
    setSearchExpanded(false);
  };

  const handleClear = () => {
    setSearchTerm("");
    setDropdownOpen(false);
    setSearchExpanded(false);
  };

  const toggleSearch = () => {
    setSearchExpanded((s) => !s);
    if (searchTerm) setSearchTerm("");
  };

  return (
    <>
      <style>{`
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .logo-text-main { color: #fff; font-weight: 800; font-size: 20px; }
        .logo-tagline { color: rgba(255,255,255,0.85); font-size: 12px; }
        .desktop-nav { display: flex; align-items: center; gap: 2px; }
        .hamburger {
          display: none;
          background: transparent; border: none;
          color: #fff; font-size: 26px; cursor: pointer;
          padding: 6px; line-height: 1;
        }
        .mobile-menu {
          display: none; flex-direction: column;
          background: #1e6e32; padding: 10px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu button {
          background: transparent; border: none; color: #fff;
          padding: 14px 24px; font-size: 15px; font-weight: 500;
          text-align: left; cursor: pointer; font-family: inherit;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .mobile-menu button:hover { background: rgba(255,255,255,0.08); }
        .mobile-menu button.active { font-weight: 700; color: #a8f0b0; }

        /* Desktop search */
        .search-desktop {
          position: relative;
          min-width: 240px;
        }

        /* Mobile search icon button */
        .search-icon-btn {
          display: none;
          background: rgba(255,255,255,0.15);
          border: none;
          color: #fff;
          width: 38px; height: 38px;
          border-radius: 50%;
          font-size: 16px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Mobile search expanded overlay */
        .mobile-search-bar {
          display: none;
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 62px;
          background: ${COLORS.primary};
          z-index: 1100;
          align-items: center;
          padding: 0 14px;
          gap: 10px;
        }
        .mobile-search-bar.open { display: flex; }

        .search-inner {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.15);
          padding: 7px 12px;
          border-radius: 25px;
          flex: 1;
        }

        @media (max-width: 768px) {
          .navbar-inner { height: 62px; padding: 0 14px; }
          .logo-text-main { font-size: 15px; }
          .logo-tagline { display: none; }
          .desktop-nav { display: none; }
          .hamburger { display: block; }
          .search-desktop { display: none; }
          .search-icon-btn { display: flex; }
        }
        @media (max-width: 400px) {
          .logo-text-main { font-size: 13px; }
        }
      `}</style>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: COLORS.primary,
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        }}
      >
        {/* Mobile search expanded overlay */}
        <div className={`mobile-search-bar${searchExpanded ? " open" : ""}`} ref={searchRef}>
          <div className="search-inner">
            <span style={{ color: "#fff", marginRight: "7px", fontSize: "15px" }}>🔍</span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleInput}
              style={{
                border: "none", outline: "none",
                background: "transparent", color: "#fff",
                width: "100%", fontSize: "14px",
              }}
            />
            {searchTerm && (
              <span onClick={handleClear} style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer", fontSize: "15px", marginLeft: "5px" }}>✕</span>
            )}
          </div>
          <button
            onClick={toggleSearch}
            style={{ background: "transparent", border: "none", color: "#fff", fontSize: "20px", cursor: "pointer", padding: "4px" }}
          >
            ✕
          </button>

          {/* Mobile dropdown */}
          {dropdownOpen && suggestions.length > 0 && (
            <div style={{
              position: "absolute", top: "62px", left: 0, right: 0,
              background: "#fff", zIndex: 2000,
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
              maxHeight: "320px", overflowY: "auto",
              borderRadius: "0 0 14px 14px",
            }}>
              {suggestions.map((product, i) => (
                <div
                  key={i}
                  onMouseDown={() => handleSelect(product)}
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "10px 14px", cursor: "pointer",
                    borderBottom: i < suggestions.length - 1 ? "1px solid #f0f0f0" : "none",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#f5fdf6"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#F0FAF2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>
                    {product.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>{product.name}</div>
                    <div style={{ fontSize: "11px", color: product.color, fontWeight: 500 }}>{product.category}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "#ccc", fontSize: "13px" }}>→</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="navbar-inner">
          {/* Logo */}
          <div onClick={() => handleNav("home")} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", flexShrink: 0 }}>
            <img src={logo} alt="Aruku Natural" style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover", background: "#fff", padding: "2px", flexShrink: 0 }} />
            <div>
              <div className="logo-text-main">Aruku Natural Millets</div>
              <div className="logo-tagline">Pure • Organic • Traditional</div>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="search-desktop" ref={searchRef}>
            <div style={{
              display: "flex", alignItems: "center",
              background: "rgba(255,255,255,0.15)",
              padding: "7px 12px",
              borderRadius: dropdownOpen && suggestions.length > 0 ? "12px 12px 0 0" : "25px",
              transition: "border-radius 0.15s",
            }}>
              <span style={{ color: "#fff", marginRight: "7px", fontSize: "15px" }}>🔍</span>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleInput}
                onFocus={() => searchTerm.trim() && setDropdownOpen(true)}
                style={{ border: "none", outline: "none", background: "transparent", color: "#fff", width: "100%", fontSize: "13px" }}
              />
              {searchTerm && (
                <span onClick={handleClear} style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer", fontSize: "15px", marginLeft: "5px", lineHeight: 1 }}>✕</span>
              )}
            </div>

            {/* Desktop Dropdown */}
            {dropdownOpen && suggestions.length > 0 && (
              <div style={{
                position: "absolute", top: "100%", left: 0, right: 0,
                background: "#fff", borderRadius: "0 0 14px 14px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                zIndex: 2000, overflow: "hidden", maxHeight: "320px", overflowY: "auto",
              }}>
                {suggestions.map((product, i) => (
                  <div
                    key={i}
                    onMouseDown={() => handleSelect(product)}
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", cursor: "pointer", borderBottom: i < suggestions.length - 1 ? "1px solid #f0f0f0" : "none" }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#f5fdf6"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#F0FAF2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>
                      {product.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>{product.name}</div>
                      <div style={{ fontSize: "11px", color: product.color, fontWeight: 500 }}>{product.category}</div>
                    </div>
                    <div style={{ marginLeft: "auto", color: "#ccc", fontSize: "13px" }}>→</div>
                  </div>
                ))}
              </div>
            )}

            {dropdownOpen && searchTerm.trim().length > 0 && suggestions.length === 0 && (
              <div style={{
                position: "absolute", top: "100%", left: 0, right: 0,
                background: "#fff", borderRadius: "0 0 14px 14px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                zIndex: 2000, padding: "14px 16px", color: "#888", fontSize: "13px", textAlign: "center",
              }}>
                No products match "{searchTerm}"
              </div>
            )}
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNav(item.id)} style={{
                background: activeSection === item.id ? "rgba(255,255,255,0.18)" : "transparent",
                border: "none", color: "#fff", padding: "8px 10px", borderRadius: "8px",
                cursor: "pointer", fontWeight: activeSection === item.id ? 700 : 500,
                fontSize: "14px", transition: "0.2s", fontFamily: "inherit",
              }}>
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Mobile search icon */}
            <button className="search-icon-btn" onClick={toggleSearch}>🔍</button>

            {/* Hamburger */}
            <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <button key={item.id} className={activeSection === item.id ? "active" : ""} onClick={() => handleNav(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}