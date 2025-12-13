// src/products.js
// Single source of truth for products used by Shop, Cart, ProductDetail

const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Audio",
    price: 5999,
    oldPrice: 7999,
    rating: 4.8,
    tag: "Best Seller",
    img: "/P1.png"
  },
  {
    id: 2,
    name: "Ultra-Slim Laptop 14\"",
    category: "Computers",
    price: 52999,
    oldPrice: 59999,
    rating: 4.7,
    tag: "Limited Offer",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Smartphone Pro Max 5G",
    category: "Phones",
    price: 74999,
    oldPrice: 82999,
    rating: 4.9,
    tag: "New",
    img: "/P2.png"
  },
  {
    id: 4,
    name: "4K Action Camera",
    category: "Cameras",
    price: 12999,
    oldPrice: 15999,
    rating: 4.6,
    tag: "Trending",
    img: "/P3.jpg"
  },
  {
    id: 5,
    name: "Fitness Smartwatch",
    category: "Wearables",
    price: 3999,
    oldPrice: 4999,
    rating: 4.5,
    tag: "Hot Deal",
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    name: "10.5\" Entertainment Tablet",
    category: "Tablets",
    price: 21999,
    oldPrice: 24999,
    rating: 4.4,
    tag: "Bestseller",
    img: "/P4.avif"
  }
];

export default products;
