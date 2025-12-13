// src/Cart.jsx
import React from "react";
import "./Home.css";
import "./Shop.css";

export default function Cart({
  cartItems,
  onGoHome,
  onGoShop,
  onGoSignin,
  onRemove,
  onUpdateQty,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  const handleQtyChange = (productId, value) => {
    const num = parseInt(value, 10);
    if (Number.isNaN(num)) return;
    onUpdateQty(productId, num);
  };

  const hasItems = cartItems.length > 0;

  return (
    <div className="home-page cart-page">
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner">
          <div
            className="header-left"
            style={{ cursor: "pointer" }}
            onClick={onGoHome}
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
              placeholder="Search more products..."
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
                Continue Shopping
              </span>
            </nav>

            <div className="header-actions">
              <button className="icon-btn" title="Sign in" onClick={onGoSignin}>
                👤
              </button>
              <button className="icon-btn" title="Cart">
                🛒
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="cart-main">
        <h1 className="cart-title">Your Cart</h1>

        {!hasItems && (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <button className="btn btn-primary" onClick={onGoShop}>
              Browse Products
            </button>
          </div>
        )}

        {hasItems && (
          <div className="cart-card">
            <div className="cart-items">
              {cartItems.map(({ product, qty }) => (
                <div className="cart-item" key={product.id}>
                  <div className="cart-item-img">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="cart-item-info">
                    <h3>{product.name}</h3>
                    <p className="muted small">{product.category}</p>
                    <p className="cart-item-price">
                      ₹{product.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="cart-item-actions">
                    <label className="qty-label">
                      Qty
                      <input
                        type="number"
                        min="1"
                        value={qty}
                        onChange={(e) =>
                          handleQtyChange(product.id, e.target.value)
                        }
                      />
                    </label>
                    <button
                      type="button"
                      className="link-btn small-link"
                      onClick={() => onRemove(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary-box">
              <h2>Order Summary</h2>
              <div className="cart-total-row">
                <span>Total</span>
                <span className="cart-total-amt">
                  ₹{total.toLocaleString()}
                </span>
              </div>
              <button className="btn btn-primary cart-checkout-btn">
                Proceed to Checkout
              </button>
              <p className="muted small">
                You&apos;ll be able to enter address and payment details on the
                next step.
              </p>
            </div>
          </div>
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
