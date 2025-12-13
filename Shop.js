// src/Shop.jsx
import React, { useState } from "react";
import "./Home.css";
import "./Shop.css";
import products from "./products";

const categories = [
  "All",
  "Audio",
  "Computers",
  "Phones",
  "Cameras",
  "Wearables",
  "Tablets",
];

export default function Shop({
  onGoHome,
  onGoSignin,
  onOpenCart,
  onOpenWishlist,       // ✅ NEW
  onAddToCart,
  onViewDetails,
  onToggleWishlist,
  wishlistIds = [],
}) {
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCat === "All" || p.category === activeCat;
    const matchQuery =
      !query ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="home-page shop-page">
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
              placeholder="Search in products & deals..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="header-right">
            <nav className="nav-inline">
              <span
                className="pill"
                style={{ cursor: "pointer" }}
                onClick={onGoHome}
              >
                Home
              </span>
              <span>Deals</span>
              <span>Best Sellers</span>
            </nav>

            <div className="header-actions">
              {/* ❤️ Favourites icon → Wishlist page */}
              <button
                className="icon-btn"
                title="Wishlist"
                onClick={onOpenWishlist}
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
      <main className="shop-main">
        <section className="shop-hero">
          <div>
            <p className="badge">🔥 Today&apos;s Top Deals</p>
            <h1 className="shop-title">Discover products you&apos;ll love</h1>
            <p className="muted">
              Browse curated tech, gadgets and accessories with exclusive offers
              for ShopSphere members.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="shop-toolbar">
          <div className="shop-cats">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={
                  "shop-cat-pill" +
                  (activeCat === c ? " shop-cat-pill-active" : "")
                }
                onClick={() => setActiveCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="shop-summary">
            <span className="muted small">
              Showing {filtered.length} of {products.length} products
            </span>
          </div>
        </section>

        {/* Product grid */}
        <section className="product-grid">
          {filtered.map((p) => {
            const isFav = wishlistIds.includes(p.id);
            return (
              <article className="product-card" key={p.id}>
                <div className="product-img-wrap">
                  <img src={p.img} alt={p.name} />
                  {p.tag && <span className="product-tag">{p.tag}</span>}

                  <button
                    type="button"
                    className={
                      "product-fav-btn" + (isFav ? " product-fav-btn-active" : "")
                    }
                    onClick={() => onToggleWishlist(p.id)}
                    aria-label="Toggle favorite"
                    title={isFav ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    {isFav ? "♥" : "♡"}
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
            );
          })}
        </section>
      </main>

      <footer className="site-footer">
        <div>
          © {new Date().getFullYear()} ShopSphere · All rights reserved
        </div>
      </footer>
    </div>
  );
}
