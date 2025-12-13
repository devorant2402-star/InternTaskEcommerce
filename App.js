import React, { useState } from "react";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import About from "./About";
import Shop from "./Shop";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import Wishlist from "./Wishlist";
import products from "./products";

function App() {
  const [page, setPage] = useState("home");
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const authSuccess = () => {
    setPage("home");
  };

  // add item to cart
  const addToCart = (product) => {
    setCartItems((items) => {
      const found = items.find((i) => i.product.id === product.id);
      if (found) {
        return items.map((i) =>
          i.product.id === product.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...items, { product, qty: 1 }];
    });
  };

  // remove item completely
  const removeFromCart = (id) => {
    setCartItems((items) =>
      items.filter((i) => i.product.id !== id)
    );
  };

  // change quantity
  const updateQty = (id, qty) => {
    setCartItems((items) =>
      items
        .map((i) =>
          i.product.id === id
            ? { ...i, qty: Math.max(1, qty) }
            : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  // add / remove wishlist
  const toggleWishlist = (id) => {
    setWishlist((list) =>
      list.includes(id)
        ? list.filter((x) => x !== id)
        : [...list, id]
    );
  };

  // open product details
  const openProduct = (id) => {
    setSelectedId(id);
    setPage("product");
  };

  const currentProduct =
    products.find((p) => p.id === selectedId) || null;

  return (
    <>
      {page === "home" && (
        <Home
          onOpenSignin={() => setPage("signin")}
          onOpenAbout={() => setPage("about")}
          onOpenShop={() => setPage("shop")}
        />
      )}

      {page === "shop" && (
        <Shop
          onGoHome={() => setPage("home")}
          onGoSignin={() => setPage("signin")}
          onOpenCart={() => setPage("cart")}
          onOpenWishlist={() => setPage("wishlist")}
          onAddToCart={addToCart}
          onViewDetails={openProduct}
          onToggleWishlist={toggleWishlist}
          wishlistIds={wishlist}
        />
      )}

      {page === "wishlist" && (
        <Wishlist
          onGoHome={() => setPage("home")}
          onGoShop={() => setPage("shop")}
          onGoSignin={() => setPage("signin")}
          onOpenCart={() => setPage("cart")}
          wishlistIds={wishlist}
          onToggleWishlist={toggleWishlist}
          onAddToCart={addToCart}
          onViewDetails={openProduct}
        />
      )}

      {page === "cart" && (
        <Cart
          cartItems={cartItems}
          onGoHome={() => setPage("home")}
          onGoShop={() => setPage("shop")}
          onGoSignin={() => setPage("signin")}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
        />
      )}

      {page === "product" && currentProduct && (
        <ProductDetail
          product={currentProduct}
          isInWishlist={wishlist.includes(currentProduct.id)}
          onBackToShop={() => setPage("shop")}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
        />
      )}

      {page === "about" && (
        <About
          onGoHome={() => setPage("home")}
          onGoSignin={() => setPage("signin")}
        />
      )}

      {page === "signin" && (
        <Signin
          onNavigateToSignup={() => setPage("signup")}
          onLoginSuccess={authSuccess}
        />
      )}

      {page === "signup" && (
        <Signup
          onNavigateToSignin={() => setPage("signin")}
          onSignupSuccess={authSuccess}
        />
      )}
    </>
  );
}

export default App;
