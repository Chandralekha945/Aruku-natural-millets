import { useState } from "react";
import categories from "../data/products";

const CLOUDINARY_CLOUD = "detm9pyvl";
const CLOUDINARY_PRESET = "aruku_upload";

async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`,
    { method: "POST", body: formData }
  );
  const data = await res.json();
  return data.secure_url;
}

function ImageUploader({ currentImg, onUploaded, label = "Product Image" }) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImg || null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      onUploaded(url);
      setPreview(url);
    } catch {
      alert("Upload failed. Check your internet and try again.");
    }
    setUploading(false);
  };

  return (
    <div style={{ marginBottom: "14px" }}>
      <label className="form-label">{label}</label>
      <div
        style={{
          border: "2px dashed #c8e6c9",
          borderRadius: "12px",
          padding: "16px",
          textAlign: "center",
          background: "#f9fdf9",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => document.getElementById(`upload-${label.replace(/\s/g, "")}`).click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="preview"
            style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px" }}
          />
        ) : (
          <div style={{ color: "#aaa", fontSize: "13px" }}>
            <div style={{ fontSize: "28px", marginBottom: "6px" }}>📷</div>
            Click to upload image
          </div>
        )}
        {uploading && (
          <div style={{
            position: "absolute", inset: 0, background: "rgba(255,255,255,0.8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: "10px", fontSize: "13px", color: "#098a25", fontWeight: 600,
          }}>
            ⏳ Uploading...
          </div>
        )}
      </div>
      <input
        id={`upload-${label.replace(/\s/g, "")}`}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFile}
      />
      {preview && !uploading && (
        <div style={{ fontSize: "11px", color: "#098a25", marginTop: "4px", textAlign: "center" }}>
          ✅ Image uploaded successfully
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard({ onLogout }) {
  const [allCategories, setAllCategories] = useState(
    categories.map((cat) => ({ ...cat, products: [...cat.products] }))
  );
  const [editingProduct, setEditingProduct] = useState(null);
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", desc: "", sizes: "", img: null });
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const currentCat = allCategories.find((c) => c.id === activeTab);

  const handleDelete = (productName) => {
    if (!window.confirm(`Delete "${productName}"?`)) return;
    setAllCategories((cats) =>
      cats.map((cat) =>
        cat.id === activeTab
          ? { ...cat, products: cat.products.filter((p) => p.name !== productName) }
          : cat
      )
    );
    showToast("Product deleted");
  };

  const handleEdit = (product) => {
    setEditingProduct({ ...product, sizesStr: product.sizes?.join(", ") || "" });
  };

  const handleSaveEdit = () => {
    setAllCategories((cats) =>
      cats.map((cat) =>
        cat.id === activeTab
          ? {
              ...cat,
              products: cat.products.map((p) =>
                p.name === editingProduct.name
                  ? {
                      ...p,
                      desc: editingProduct.desc,
                      img: editingProduct.img,
                      sizes: editingProduct.sizesStr
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    }
                  : p
              ),
            }
          : cat
      )
    );
    setEditingProduct(null);
    showToast("Product updated ✅");
  };

  const handleAddProduct = () => {
    if (!newProduct.name.trim()) return;
    const product = {
      name: newProduct.name.trim(),
      desc: newProduct.desc.trim(),
      sizes: newProduct.sizes.split(",").map((s) => s.trim()).filter(Boolean),
      img: newProduct.img || null,
    };
    setAllCategories((cats) =>
      cats.map((cat) =>
        cat.id === activeTab
          ? { ...cat, products: [...cat.products, product] }
          : cat
      )
    );
    setNewProduct({ name: "", desc: "", sizes: "", img: null });
    setShowAddForm(false);
    showToast("Product added ✅");
  };

  return (
    <>
      <style>{`
        .admin-wrap { max-width: 1100px; margin: 0 auto; padding: 30px 20px; }
        .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px; flex-wrap: wrap; gap: 12px; }
        .admin-title { font-size: 1.6rem; font-weight: 800; color: #1a1a1a; }
        .logout-btn { padding: 9px 18px; background: #e53935; color: #fff; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-family: inherit; }
        .tab-bar { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
        .tab-btn { padding: 8px 16px; border-radius: 20px; border: 2px solid #e0e0e0; background: #fff; cursor: pointer; font-size: 13px; font-weight: 600; font-family: inherit; transition: all 0.2s; }
        .tab-btn.active { background: #098a25; color: #fff; border-color: #098a25; }
        .product-table { background: #fff; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.07); overflow: hidden; }
        .product-row { display: grid; grid-template-columns: 55px 1fr 1fr auto; gap: 12px; align-items: center; padding: 14px 18px; border-bottom: 1px solid #f0f0f0; }
        .product-row:last-child { border-bottom: none; }
        .product-row:hover { background: #f9fdf9; }
        .product-img { width: 48px; height: 48px; object-fit: cover; border-radius: 8px; background: #f0f0f0; }
        .product-name { font-weight: 600; font-size: 14px; color: #1a1a1a; }
        .product-desc { font-size: 12px; color: #888; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 300px; }
        .product-sizes { font-size: 12px; color: #098a25; }
        .action-btns { display: flex; gap: 6px; }
        .edit-btn { padding: 6px 12px; background: #e8f5e9; color: #098a25; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; font-family: inherit; }
        .del-btn { padding: 6px 12px; background: #fdecea; color: #e53935; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; font-family: inherit; }
        .add-btn { padding: 10px 20px; background: #098a25; color: #fff; border: none; border-radius: 10px; cursor: pointer; font-weight: 700; font-family: inherit; font-size: 14px; }
        .form-box { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 4px 16px rgba(0,0,0,0.07); margin-bottom: 20px; }
        .form-input { width: 100%; padding: 10px 14px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 14px; font-family: inherit; outline: none; box-sizing: border-box; margin-bottom: 12px; }
        .form-input:focus { border-color: #098a25; }
        .form-label { font-size: 13px; font-weight: 600; color: #555; margin-bottom: 4px; display: block; }
        .toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: #1a1a1a; color: #fff; padding: 12px 24px; border-radius: 25px; font-size: 14px; z-index: 9999; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 8000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal-box { background: #fff; border-radius: 18px; padding: 28px; width: 100%; max-width: 440px; max-height: 90vh; overflow-y: auto; }
        @media (max-width: 600px) {
          .product-row { grid-template-columns: 44px 1fr auto; }
          .product-sizes { display: none; }
          .product-desc { max-width: 160px; }
        }
      `}</style>

      <div style={{ background: "#f8faf8", minHeight: "100vh" }}>
        <div className="admin-wrap">

          {/* Header */}
          <div className="admin-header">
            <div>
              <div className="admin-title">Admin Dashboard</div>
              <div style={{ color: "#888", fontSize: "13px", marginTop: "4px" }}>
                Manage your products
              </div>
            </div>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "14px", marginBottom: "28px" }}>
            {[
              { label: "Total Products", value: allCategories.reduce((a, c) => a + c.products.length, 0) },
              { label: "Categories", value: allCategories.length },
              { label: "Current Tab", value: currentCat?.label },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", borderRadius: "12px", padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#098a25" }}>{s.value}</div>
                <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="tab-bar">
            {allCategories.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn${activeTab === cat.id ? " active" : ""}`}
                onClick={() => { setActiveTab(cat.id); setShowAddForm(false); }}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* Add Product Button */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
            <button className="add-btn" onClick={() => setShowAddForm((s) => !s)}>
              {showAddForm ? "✕ Cancel" : "+ Add Product"}
            </button>
          </div>

          {/* Add Product Form */}
          {showAddForm && (
            <div className="form-box">
              <h3 style={{ marginTop: 0, marginBottom: "16px" }}>
                Add New Product to {currentCat?.label}
              </h3>

              <ImageUploader
                label="Product Image"
                onUploaded={(url) => setNewProduct({ ...newProduct, img: url })}
              />

              <label className="form-label">Product Name *</label>
              <input
                className="form-input"
                placeholder="e.g. Black Pepper Powder"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />

              <label className="form-label">Description</label>
              <textarea
                className="form-input"
                placeholder="Short product description..."
                rows={3}
                value={newProduct.desc}
                onChange={(e) => setNewProduct({ ...newProduct, desc: e.target.value })}
                style={{ resize: "vertical" }}
              />

              <label className="form-label">Sizes (comma separated)</label>
              <input
                className="form-input"
                placeholder="e.g. 250g, 500g, 1kg"
                value={newProduct.sizes}
                onChange={(e) => setNewProduct({ ...newProduct, sizes: e.target.value })}
              />

              <button className="add-btn" onClick={handleAddProduct}>
                ✅ Save Product
              </button>
            </div>
          )}

          {/* Product List */}
          <div className="product-table">
            <div className="product-row" style={{ background: "#f5f5f5", fontWeight: 700, fontSize: "12px", color: "#888", textTransform: "uppercase" }}>
              <div>IMG</div>
              <div>Product</div>
              <div>Sizes</div>
              <div>Actions</div>
            </div>

            {currentCat?.products.length === 0 && (
              <div style={{ padding: "30px", textAlign: "center", color: "#aaa" }}>
                No products in this category yet.
              </div>
            )}

            {currentCat?.products.map((product) => (
              <div key={product.name} className="product-row">
                {product.img ? (
                  <img src={product.img} alt={product.name} className="product-img" />
                ) : (
                  <div className="product-img" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                    {currentCat.icon}
                  </div>
                )}
                <div>
                  <div className="product-name">{product.name}</div>
                  <div className="product-desc">{product.desc}</div>
                </div>
                <div className="product-sizes">{product.sizes?.join(" • ")}</div>
                <div className="action-btns">
                  <button className="edit-btn" onClick={() => handleEdit(product)}>Edit</button>
                  <button className="del-btn" onClick={() => handleDelete(product.name)}>🗑️</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="modal-overlay" onClick={() => setEditingProduct(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: 0, marginBottom: "16px" }}>
              Edit: {editingProduct.name}
            </h3>

            <ImageUploader
              label="Change Image"
              currentImg={editingProduct.img}
              onUploaded={(url) => setEditingProduct({ ...editingProduct, img: url })}
            />

            <label className="form-label">Description</label>
            <textarea
              className="form-input"
              rows={4}
              value={editingProduct.desc}
              onChange={(e) => setEditingProduct({ ...editingProduct, desc: e.target.value })}
              style={{ resize: "vertical" }}
            />

            <label className="form-label">Sizes (comma separated)</label>
            <input
              className="form-input"
              value={editingProduct.sizesStr}
              onChange={(e) => setEditingProduct({ ...editingProduct, sizesStr: e.target.value })}
            />

            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
              <button className="add-btn" style={{ flex: 1 }} onClick={handleSaveEdit}>
                ✅ Save Changes
              </button>
              <button
                onClick={() => setEditingProduct(null)}
                style={{ flex: 1, padding: "10px", border: "2px solid #e0e0e0", borderRadius: "10px", background: "#fff", cursor: "pointer", fontFamily: "inherit" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}