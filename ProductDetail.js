// src/ProductDetail.jsx
import React from "react";
import "./Home.css";
import "./Shop.css";

export default function ProductDetail({
  product,
  isInWishlist,
  onBackToShop,
  onAddToCart,
  onToggleWishlist,
}) {
  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    alert("Added to cart");
  };

  return (
    <div className="home-page product-page">
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner">
          <div
            className="header-left"
            onClick={onBackToShop}
            style={{ cursor: "pointer" }}
          >
            <div className="logo" aria-hidden>
              ✨
            </div>
            <div className="brand-text">
              <div className="brand-name">ShopSphere</div>
              <div className="brand-sub">Shop Everything You Love</div>
            </div>
          </div>

          <div className="search-wrap">
            <input
              className="search"
              placeholder="Search products..."
              readOnly
            />
          </div>

          <div className="header-right">
            <nav className="nav-inline">
              <span
                className="pill"
                style={{ cursor: "pointer" }}
                onClick={onBackToShop}
              >
                Back to Shop
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="product-main">
        <div className="product-detail-card">
          <div className="product-detail-image">
            <img src={product.img} alt={product.name} />
            <button
              type="button"
              className={
                "product-fav-btn" +
                (isInWishlist ? " product-fav-btn-active" : "")
              }
              onClick={() => onToggleWishlist(product.id)}
            >
              {isInWishlist ? "♥" : "♡"}
            </button>
          </div>

          <div className="product-detail-info">
            <p className="small muted">{product.category}</p>
            <h1 className="product-detail-title">{product.name}</h1>

            <div className="product-detail-meta">
              <span>⭐ {product.rating} / 5</span>
              <span className="muted small">Free delivery & returns</span>
            </div>

            <div className="product-price-row">
              <span className="product-price">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="product-old">
                ₹{product.oldPrice.toLocaleString()}
              </span>
            </div>

            <p className="muted">
              This is a sample product description. You can replace this text
              with real product details such as features, specs, warranty
              information and more.
            </p>

            <div className="product-detail-actions">
              <button
                className="btn btn-primary product-btn"
                type="button"
                onClick={handleAdd}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-outline product-btn"
                type="button"
                onClick={onBackToShop}
              >
                Back to Shop
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div>
          © {new Date().getFullYear()} ShopSphere · All rights reserved
        </div>
      </footer>
    </div>
  );
}
