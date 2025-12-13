// src/About.jsx
import React from "react";
import "./Home.css";
import "./About.css";

export default function About({ onGoHome, onGoSignin }) {
  const highlights = [
    "Fast & reliable delivery partners across multiple cities.",
    "Curated catalog of premium tech, gadgets and accessories.",
    "Transparent pricing, easy returns and responsive support.",
  ];

  const values = [
    {
      title: "Customer First",
      text: "We design every experience around making shopping easier and more delightful for our customers."
    },
    {
      title: "Trusted Quality",
      text: "Products are handpicked from verified brands and sellers so you can shop with confidence."
    },
    {
      title: "Constant Innovation",
      text: "We keep improving ShopSphere with smarter recommendations and tracking."
    }
  ];

  return (
    <div className="home-page">
      {/* HEADER – same as Home, About highlighted */}
      <header className="site-header">
        <div className="header-inner">
          <div
            className="header-left"
            onClick={onGoHome}
            style={{ cursor: "pointer" }}
          >
            <div className="logo" aria-hidden>✨</div>
            <div className="brand-text">
              <div className="brand-name">ShopSphere</div>
              <div className="brand-sub">Shop Everything You Love</div>
            </div>
          </div>

          <div className="search-wrap">
            <input
              className="search"
              placeholder="Search for products, brands, and more..."
              aria-label="Search"
            />
          </div>

          <div className="header-right">
            <nav className="nav-inline" aria-label="Main navigation">
              <span onClick={onGoHome} style={{ cursor: "pointer" }}>New Arrivals</span>
              <span>Electronics</span>
              <span>Fashion</span>
              <span className="pill">Deals ✨</span>
              <span className="pill about-pill">About</span>
            </nav>

            <div className="header-actions">
              <button className="icon-btn">♡</button>
              <button
                className="icon-btn"
                title="Sign in"
                onClick={onGoSignin}
              >
                👤
              </button>
              <button className="icon-btn">🛒</button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="about-main">
        <div className="about-card">
          {/* LEFT gradient panel */}
          <section className="about-left">
            <p className="about-badge">About ShopSphere</p>
            <h1 className="about-title">
              Making online shopping{" "}
              <span className="hero-accent">simple, fast & joyful.</span>
            </h1>

            <p className="about-lead">
              ShopSphere is built for modern shoppers. We combine curated
              products, powerful technology and human support to create a
              delightful shopping journey from search to doorstep.
            </p>

            <ul className="about-highlights">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="about-cta-row">
              <button className="btn btn-primary" onClick={onGoHome}>
                Start Shopping
              </button>
              <button className="btn btn-outline" onClick={onGoSignin}>
                Sign in to your account
              </button>
            </div>

            <div className="about-numbers">
              <div>
                <span className="about-num">50K+</span>
                <span className="about-label">Happy customers</span>
              </div>
              <div>
                <span className="about-num">100K+</span>
                <span className="about-label">Products listed</span>
              </div>
              <div>
                <span className="about-num">4.9</span>
                <span className="about-label">Average rating</span>
              </div>
            </div>
          </section>

          {/* RIGHT white info panel */}
          <section className="about-right">
            <h2>Our Story</h2>
            <p className="muted">
              We started ShopSphere with a simple idea: online shopping should
              feel as friendly as your favorite local store, but with the speed
              and selection of the internet.
            </p>
            <p className="muted">
              Today, thousands of shoppers trust ShopSphere to discover
              premium tech, track orders in real time, and get support when
              they need it — not after.
            </p>

            <div className="about-values-grid">
              {values.map((v) => (
                <div key={v.title} className="about-value-card">
                  <h3>{v.title}</h3>
                  <p className="muted">{v.text}</p>
                </div>
              ))}
            </div>

            <div className="about-footer-note">
              Have suggestions or feedback? We’d love to hear from you —
              your ideas help shape the future of ShopSphere.
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} ShopSphere · All rights reserved</div>
      </footer>
    </div>
  );
}
