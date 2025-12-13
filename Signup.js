// src/Signup.js
import React from "react";
import "./Auth.css";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

export default function Signup({ onNavigateToSignin, onSignupSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normal email/password signup logic (mock for now)
    console.log("Signup submitted (email/password)");
    alert("Signup form submitted (demo)");

    // ✅ tell App that signup was successful → go back to home
    if (typeof onSignupSuccess === "function") {
      onSignupSuccess();
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google signup user:", user);
      alert(`Signed up / logged in with Google as ${user.email}`);

      // ✅ also go back to home on Google signup success
      if (typeof onSignupSuccess === "function") {
        onSignupSuccess();
      }
    } catch (error) {
      console.error("Google signup error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* LEFT – FORM */}
        <div className="auth-column form-column">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">
            Join thousands of happy shoppers today
          </p>

          <button
            className="google-btn"
            type="button"
            onClick={handleGoogleSignup}
          >
            <span className="google-icon">G</span>
            <span>Sign up with Google</span>
          </button>

          <div className="divider">
            <span>Or sign up with email</span>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label>Full Name</label>
              <div className="field-wrapper">
                <span className="field-icon">👤</span>
                <input type="text" placeholder="John Doe" required />
              </div>
            </div>

            <div className="field-group">
              <label>Email Address</label>
              <div className="field-wrapper">
                <span className="field-icon">@</span>
                <input type="email" placeholder="you@example.com" required />
              </div>
            </div>

            <div className="field-group">
              <label>Password</label>
              <div className="field-wrapper">
                <span className="field-icon">🔒</span>
                <input type="password" placeholder="••••••••" required />
              </div>
            </div>

            <div className="field-group">
              <label>Confirm Password</label>
              <div className="field-wrapper">
                <span className="field-icon">🔒</span>
                <input type="password" placeholder="••••••••" required />
              </div>
            </div>

            <div className="terms-row">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the <a href="#!">Terms of Service</a> and{" "}
                <a href="#!">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="primary-btn">
              Create Account
            </button>

            <p className="switch-text">
              Already have an account?{" "}
              <button
                type="button"
                className="link-btn"
                onClick={onNavigateToSignin}
              >
                Sign in
              </button>
            </p>
          </form>
        </div>

        {/* RIGHT – INFO PANEL */}
        <div className="auth-column info-column">
          <div className="gradient-panel">
            <h2 className="info-title">
              Start Your <br />
              <span>Shopping Journey</span>
            </h2>
            <p className="info-text">
              Create your free account and get instant access to exclusive
              deals, personalized recommendations, and a seamless shopping
              experience.
            </p>

            <div className="info-features">
              <div className="feature-item">
                <div className="feature-icon">⭐</div>
                <div>
                  <h4>Exclusive Deals</h4>
                  <p>Members-only discounts and early access</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <div>
                  <h4>Secure Shopping</h4>
                  <p>100% buyer protection guaranteed</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div>
                  <h4>Fast Delivery</h4>
                  <p>Same-day delivery in select areas</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">❤️</div>
                <div>
                  <h4>Wishlist & Favorites</h4>
                  <p>Save your favorite items for later</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
