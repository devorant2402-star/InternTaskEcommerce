// src/Signin.js
import React from "react";
import "./Auth.css";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

export default function Signin({ onNavigateToSignup, onLoginSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normal email/password login logic (mock for now)
    console.log("Login submitted (email/password)");
    alert("Login form submitted (demo)");

    // ✅ tell App that login was successful → go back to home
    if (typeof onLoginSuccess === "function") {
      onLoginSuccess();
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google login user:", user);
      alert(`Logged in with Google as ${user.email}`);

      // ✅ also go back to home on Google login success
      if (typeof onLoginSuccess === "function") {
        onLoginSuccess();
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* LEFT – INFO PANEL */}
        <div className="auth-column info-column">
          <div className="gradient-panel">
            <h2 className="info-title">
              Welcome Back to <br />
              <span>ShopSphere</span>
            </h2>
            <p className="info-text">
              Sign in to access your account and continue your shopping journey
              with exclusive deals and personalized recommendations.
            </p>

            <ul className="info-bullets">
              <li>Access exclusive member-only deals</li>
              <li>Track your orders in real-time</li>
              <li>Save your favorite items</li>
              <li>Faster checkout experience</li>
            </ul>

            <div className="info-stats">
              <div>
                <h3>50K+</h3>
                <p>Users</p>
              </div>
              <div>
                <h3>100K+</h3>
                <p>Products</p>
              </div>
              <div>
                <h3>4.9</h3>
                <p>Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="auth-column form-column">
          <h1 className="auth-title">
            Enter your credentials to access your account
          </h1>

          <button
            className="google-btn"
            type="button"
            onClick={handleGoogleLogin}
          >
            <span className="google-icon">G</span>
            <span>Continue with Google</span>
          </button>

          <div className="divider">
            <span>Or continue with email</span>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
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

            <div className="extras-row">
              <div className="remember-row">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button type="button" className="link-btn">
                Forgot password?
              </button>
            </div>

            <button type="submit" className="primary-btn">
              Sign In
            </button>

            <p className="switch-text">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="link-btn"
                onClick={onNavigateToSignup}
              >
                Sign up for free
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
