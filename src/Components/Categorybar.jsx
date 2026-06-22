import categories from "../data/products";

const allTab = { id: "all", label: "All Products", icon: "🛒" };

export default function CategoryBar({ activeCategory, setActiveCategory, setSection }) {
  const tabs = [allTab, ...categories];

  const handleClick = (id) => {
    setActiveCategory(id);
    setSection("products");
  };

  return (
    <>
      <style>{`
        .category-bar-wrapper {
          background: #1a1a1a;
          border-bottom: 2px solid #333;
          position: sticky;
          top: 75px;
          z-index: 999;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .category-bar-wrapper::-webkit-scrollbar {
          display: none;
        }
        .category-bar-inner {
          display: flex;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 12px;
        }
        .cat-tab {
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          color: #ccc;
          padding: 14px 16px;
          cursor: pointer;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.5px;
          white-space: nowrap;
          transition: all 0.2s;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
        }
        .cat-tab:hover {
          color: #fff;
        }
        .cat-tab.active {
          color: #4caf50;
          border-bottom: 3px solid #4caf50;
          font-weight: 700;
        }
        .cat-tab .cat-icon {
          font-size: 15px;
        }

        /* Mobile */
        @media (max-width: 600px) {
          .category-bar-wrapper {
            top: 65px;
          }
          .cat-tab {
            padding: 10px 11px;
            font-size: 11px;
            gap: 4px;
          }
          .cat-tab .cat-icon {
            font-size: 13px;
          }
          .category-bar-inner {
            padding: 0 6px;
          }
        }

        /* Tablet */
        @media (min-width: 601px) and (max-width: 1024px) {
          .category-bar-wrapper {
            top: 75px;
          }
          .cat-tab {
            padding: 12px 13px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="category-bar-wrapper">
        <div className="category-bar-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`cat-tab${activeCategory === tab.id ? " active" : ""}`}
              onClick={() => handleClick(tab.id)}
            >
              <span className="cat-icon">{tab.icon}</span>
              {tab.label?.toUpperCase() || tab.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}