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
  setShowAdmin,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
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
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(e.target)) {
        if (!searchTerm) setSearchExpanded(false);
        setDropdownOpen(false);
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

  useEffect(() => {
    if (searchExpanded && inputRef.current) inputRef.current.focus();
  }, [searchExpanded]);

  const handleNav = (id) => {
    setSection(id);
    setMenuOpen(false);
    setDropdownOpen(false);
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

  const SuggestionDropdown = () => (
    <>
      {dropdownOpen && suggestions.length > 0 && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "#fff", borderRadius: "0 0 14px 14px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
          zIndex: 2000, overflow: "hidden", maxHeight: "300px", overflowY: "auto",
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
              <div style={{
                width: "30px", height: "30px", borderRadius: "50%",
                background: "#F0FAF2", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "14px", flexShrink: 0,
              }}>
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
          zIndex: 2000, padding: "14px 16px", color: "#888",
          fontSize: "13px", textAlign: "center",
        }}>
          No products match "{searchTerm}"
        </div>
      )}
    </>
  );

  return (
    <>
      <style>{`
        /* ── DESKTOP ── */
        .nb-wrap {
          max-width: 1200px; margin: 0 auto;
          padding: 0 20px; height: 70px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 14px;
        }
        .nb-logo {
          display: flex; align-items: center;
          gap: 10px; cursor: pointer; flex-shrink: 0;
        }
        .nb-logo-title { color:#fff; font-weight:800; font-size:20px; }
        .nb-logo-sub { color:rgba(255,255,255,0.85); font-size:12px; }

        .nb-search-wrap {
          position: relative; min-width: 220px; flex: 1; max-width: 340px;
        }
        .nb-search-inner {
          display: flex; align-items: center;
          background: rgba(255,255,255,0.15);
          padding: 7px 12px; border-radius: 25px;
          transition: border-radius 0.15s;
        }
        .nb-search-inner input {
          border: none; outline: none;
          background: transparent; color: #fff;
          width: 100%; font-size: 13px; font-family: inherit;
        }
        .nb-search-inner input::placeholder { color: rgba(255,255,255,0.65); }

        .nb-links {
          display: flex; align-items: center; gap: 2px; flex-shrink: 0;
        }
        .nb-link {
          background: transparent; border: none; color: #fff;
          padding: 8px 11px; border-radius: 8px; cursor: pointer;
          font-weight: 500; font-size: 14px; font-family: inherit;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .nb-link:hover { background: rgba(255,255,255,0.12); }
        .nb-link.active { background: rgba(255,255,255,0.2); font-weight: 700; }
        .nb-admin-btn {
          background: rgba(0,0,0,0.35); color: #fff;
          border: none; padding: 7px 14px;
          border-radius: 8px; cursor: pointer;
          font-weight: 700; font-size: 13px;
          font-family: inherit; margin-left: 4px;
          transition: background 0.2s;
        }
        .nb-admin-btn:hover { background: rgba(0,0,0,0.55); }

        /* ── MOBILE ── */
        .nb-hamburger {
          display: none; background: transparent; border: none;
          color: #fff; font-size: 26px; cursor: pointer; padding: 4px;
          flex-shrink: 0;
        }
        .nb-search-icon {
          display: none; background: rgba(255,255,255,0.15);
          border: none; color: #fff; width: 36px; height: 36px;
          border-radius: 50%; font-size: 15px; cursor: pointer;
          align-items: center; justify-content: center; flex-shrink: 0;
        }

        /* Mobile search overlay */
        .nb-mobile-search {
          display: none; position: absolute;
          top: 0; left: 0; right: 0; height: 62px;
          background: ${COLORS.primary};
          z-index: 1100; align-items: center;
          padding: 0 12px; gap: 10px;
        }
        .nb-mobile-search.open { display: flex; }

        /* Mobile dropdown menu */
        .nb-mobile-menu {
          display: none; flex-direction: column;
          background: #1a5e2e;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .nb-mobile-menu.open { display: flex; }
        .nb-mobile-menu-item {
          background: transparent; border: none; color: #fff;
          padding: 15px 22px; font-size: 15px; font-weight: 500;
          text-align: left; cursor: pointer; font-family: inherit;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: background 0.15s;
        }
        .nb-mobile-menu-item:hover { background: rgba(255,255,255,0.07); }
        .nb-mobile-menu-item.active { font-weight: 700; color: #a8f0b0; }

        @media (max-width: 768px) {
          .nb-wrap { height: 62px; padding: 0 14px; }
          .nb-logo-title { font-size: 15px; }
          .nb-logo-sub { display: none; }
          .nb-search-wrap { display: none; }
          .nb-links { display: none; }
          .nb-hamburger { display: block; }
          .nb-search-icon { display: flex; }
        }
        @media (max-width: 380px) {
          .nb-logo-title { font-size: 13px; }
        }
      `}</style>

      <nav style={{
        position: "sticky", top: 0, zIndex: 1000,
        background: COLORS.primary,
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}>
        {/* Mobile search overlay */}
        <div className={`nb-mobile-search${searchExpanded ? " open" : ""}`} ref={mobileSearchRef}>
          <div style={{
            display: "flex", alignItems: "center",
            background: "rgba(255,255,255,0.15)",
            padding: "7px 12px", borderRadius: "25px", flex: 1,
            position: "relative",
          }}>
            <span style={{ color: "#fff", marginRight: "7px", fontSize: "15px" }}>🔍</span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleInput}
              style={{
                border: "none", outline: "none", background: "transparent",
                color: "#fff", width: "100%", fontSize: "14px", fontFamily: "inherit",
              }}
            />
            {searchTerm && (
              <span onClick={handleClear} style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer", fontSize: "15px", marginLeft: "5px" }}>✕</span>
            )}
            <SuggestionDropdown />
          </div>
          <button
            onClick={() => { setSearchExpanded(false); if (!searchTerm) setDropdownOpen(false); }}
            style={{ background: "transparent", border: "none", color: "#fff", fontSize: "20px", cursor: "pointer", padding: "4px", fontFamily: "inherit" }}
          >✕</button>
        </div>

        {/* Main bar */}
        <div className="nb-wrap">
          {/* Logo */}
          <div className="nb-logo" onClick={() => handleNav("home")}>
            <img src={logo} alt="Aruku Natural" style={{
              width: "46px", height: "46px", borderRadius: "50%",
              objectFit: "cover", background: "#fff", padding: "2px", flexShrink: 0,
            }} />
            <div>
              <div className="nb-logo-title">Aruku Natural Millets</div>
              <div className="nb-logo-sub">Pure • Organic • Traditional</div>
            </div>
          </div>

          {/* Desktop search */}
          <div className="nb-search-wrap" ref={searchRef}>
            <div className="nb-search-inner" style={{
              borderRadius: dropdownOpen && suggestions.length > 0 ? "12px 12px 0 0" : "25px",
            }}>
              <span style={{ color: "#fff", marginRight: "7px", fontSize: "15px" }}>🔍</span>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleInput}
                onFocus={() => searchTerm.trim() && setDropdownOpen(true)}
              />
              {searchTerm && (
                <span onClick={handleClear} style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer", fontSize: "15px", marginLeft: "5px" }}>✕</span>
              )}
            </div>
            <SuggestionDropdown />
          </div>

          {/* Desktop nav links */}
          <div className="nb-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nb-link${activeSection === item.id ? " active" : ""}`}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button className="nb-admin-btn" onClick={() => setShowAdmin(true)}>
              Admin
            </button>
          </div>

          {/* Mobile right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button className="nb-search-icon" onClick={() => setSearchExpanded(true)}>🔍</button>
            <button className="nb-hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`nb-mobile-menu${menuOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nb-mobile-menu-item${activeSection === item.id ? " active" : ""}`}
              onClick={() => handleNav(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="nb-mobile-menu-item"
            onClick={() => { setShowAdmin(true); setMenuOpen(false); }}
            style={{ fontWeight: 700, color: "#ffd54f" }}
          >
             Admin
          </button>
        </div>
      </nav>
    </>
  );
}