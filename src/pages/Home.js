import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import bImage from "./1.jpeg";
import aImage from "./2.avif";
import cImage from "./3.avif";
import dImage from "./4.webp";

const Home = ({ addToCart }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    setFeaturedProducts(shuffled.slice(0, 4));
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Summer Collection 2025</h2>
            <p>Discover the latest trends in fashion and get 20% off on your first purchase</p>
            <Link to="/products" className="btn">Shop Now</Link>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="category-grid">
            <div className="category-card">
              <img src={bImage} alt="Men's Clothing" />
              <h3>Men's Clothing</h3>
              <Link to="/products?category=men" className="btn-small">View All</Link>
            </div>
            <div className="category-card">
              <img src={aImage} alt="Women's Clothing" />
              <h3>Women's Clothing</h3>
              <Link to="/products?category=women" className="btn-small">View All</Link>
            </div>
            <div className="category-card">
              <img src={dImage} alt="Accessories" />
              <h3>Accessories</h3>
              <Link to="/products?category=accessories" className="btn-small">View All</Link>
            </div>
            <div className="category-card">
              <img src={cImage} alt="Footwear" />
              <h3>Footwear</h3>
              <Link to="/products?category=footwear" className="btn-small">View All</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get updates on new arrivals and special offers</p>
          <form id="newsletter-form">
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
