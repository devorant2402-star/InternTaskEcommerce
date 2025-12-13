// src/Wishlist.jsx
import React from "react";
import "./Home.css";
import "./Shop.css";
import products from "./products";

export default function Wishlist({
  onGoHome,
  onGoShop,
  onGoSignin,
  onOpenCart,
  wishlistIds = [],
  onToggleWishlist,
  onAddToCart,
  onViewDetails,
}) {
  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));
  const hasItems = wishlistProducts.length > 0;

  return (
    <div className="home-page wishlist-page">
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner">
          <div
            className="header-left"
            onClick={onGoHome}
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
              placeholder="Search your wishlist..."
              readOnly
            />
          </div>

          <div className="header-right">
            <nav className="nav-inline">
              <span
                className="pill"
                style={{ cursor: "pointer" }}
                onClick={onGoShop}
              >
                Shop
              </span>
            </nav>

            <div className="header-actions">
              {/* highlight heart since we are on wishlist */}
              <button
                className="icon-btn"
                title="Wishlist"
                style={{ background: "rgba(255,255,255,0.28)" }}
              >
                ♥
              </button>

              <button className="icon-btn" title="Sign in" onClick={onGoSignin}>
                👤
              </button>

              <button
                className="icon-btn"
                title="Cart"
                onClick={onOpenCart}
              >
                🛒
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="wishlist-main">
        <h1 className="wishlist-title">Your Wishlist</h1>

        {!hasItems && (
          <div className="wishlist-empty">
            <p>You haven&apos;t added any items to your wishlist yet.</p>
            <button className="btn btn-primary" onClick={onGoShop}>
              Browse Products
            </button>
          </div>
        )}

        {hasItems && (
          <section className="product-grid">
            {wishlistProducts.map((p) => (
              <article className="product-card" key={p.id}>
                <div className="product-img-wrap">
                  <img src={p.img} alt={p.name} />
                  {p.tag && <span className="product-tag">{p.tag}</span>}

                  <button
                    type="button"
                    className="product-fav-btn product-fav-btn-active"
                    onClick={() => onToggleWishlist(p.id)}
                    aria-label="Remove from wishlist"
                    title="Remove from wishlist"
                  >
                    ♥
                  </button>
                </div>

                <div className="product-body">
                  <p className="product-category small">{p.category}</p>
                  <h3 className="product-title">{p.name}</h3>

                  <div className="product-price-row">
                    <span className="product-price">
                      ₹{p.price.toLocaleString()}
                    </span>
                    <span className="product-old">
                      ₹{p.oldPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="product-meta">
                    <span>⭐ {p.rating}</span>
                    <span className="muted small">Free delivery</span>
                  </div>

                  <div className="product-actions">
                    <button
                      className="btn btn-primary product-btn"
                      type="button"
                      onClick={() => onAddToCart(p)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline product-btn"
                      type="button"
                      onClick={() => onViewDetails(p.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div>
          © {new Date().getFullYear()} ShopSphere · All rights reserved
        </div>
      </footer>
    </div>
  );
}
