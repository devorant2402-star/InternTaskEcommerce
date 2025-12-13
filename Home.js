import React from "react";
import "./Home.css";

function Home({ onOpenSignin, onOpenAbout, onOpenShop }) {

  const cats = ["Audio", "Computers", "Phones", "Cameras", "Wearables", "Tablets"];

  const stats = [
    ["50K+", "Happy Customers"],
    ["100K+", "Products Sold"],
    ["98%", "Satisfaction"],
    ["4.9", "Avg Rating"]
  ];

  const reviews = [
    { n: "Sarah J", t: "Best online shopping experience I've ever had." },
    { n: "Michael C", t: "Amazing selection at competitive prices." },
    { n: "Emma D", t: "Quality products, fast shipping!" }
  ];

  const goShop = () => {
    if (onOpenShop) onOpenShop();
  };

  return (
    <div className="home-page">

      <header className="site-header">
        <div className="header-inner">

          <div className="header-left">
            <div className="logo">✨</div>
            <div className="brand-text">
              <div className="brand-name">ShopSphere</div>
              <div className="brand-sub">Shop Everything You Love</div>
            </div>
          </div>

          <div className="search-wrap">
            <input
              className="search"
              placeholder="Search for products, brands, and more..."
            />
          </div>

          <div className="header-right">
            <nav className="nav-inline">
              <span onClick={goShop}>New Arrivals</span>
              <span onClick={goShop}>Electronics</span>
              <span onClick={goShop}>Fashion</span>
              <span className="pill" onClick={goShop}>Deals ✨</span>
              <span onClick={onOpenAbout}>About</span>
            </nav>

            <div className="header-actions">
              <button className="icon-btn">♡</button>
              <button className="icon-btn" onClick={onOpenSignin}>👤</button>
              <button className="icon-btn">🛒</button>
            </div>
          </div>

        </div>
      </header>

      <main className="main">

        <section className="hero">
          <div className="hero-left">
            <div className="badge">✨ New Arrivals Every Week</div>

            <h1 className="hero-title">
              Premium Tech, <span className="hero-accent">Unbeatable Prices</span>
            </h1>

            <p className="hero-sub muted">
              Shop the latest electronics and gadgets. Free shipping &amp; 30-day returns.
            </p>

            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={goShop}>
                Shop Now &amp; Save 20%
              </button>
              <button className="btn btn-outline" onClick={goShop}>
                Browse Deals
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="promo">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/478/302/non_2x/sale-electronics-banner-background-free-vector.jpg"
                alt="sale banner"
              />
              <div className="promo-badge">98% Rating</div>
            </div>
          </div>
        </section>

        <section className="stats">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat-num">{s[0]}</div>
              <div className="stat-label muted">{s[1]}</div>
            </div>
          ))}
        </section>

        <section className="categories">
          <h3 className="section-title">Shop by Category</h3>

          <div className="cat-grid">
            {cats.map((c, i) => (
              <div className="cat" key={i}>
                <div className="cat-ico">{c[0]}</div>
                <h4>{c}</h4>
                <p className="muted small">Latest collection</p>
                <button className="link-btn" onClick={goShop}>
                  Shop Now →
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="features">
          <h3 className="section-title">Built for Your Convenience</h3>
          <div className="feat-grid">
            <div className="feat">⚡ Fast Delivery</div>
            <div className="feat">🔒 Secure Payments</div>
            <div className="feat">🚚 Free Shipping</div>
          </div>
        </section>

        <section className="reviews">
          <h3 className="section-title">Loved by Thousands</h3>

          <div className="review-grid">
            {reviews.map((r, i) => (
              <div className="review" key={i}>
                <div className="stars">★★★★★</div>
                <blockquote>"{r.t}"</blockquote>
                <div className="author">
                  <div className="avatar">{r.n[0]}</div>
                  <strong>{r.n}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} ShopSphere · All rights reserved
      </footer>
    </div>
  );
}

export default Home;
