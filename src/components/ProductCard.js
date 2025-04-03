import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.badge && <span className="product-badge">{product.badge}</span>}
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="product-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <>
              <span className="old-price">${product.oldPrice.toFixed(2)}</span>
              <span className="discount">{product.discount} off</span>
            </>
          )}
        </div>
        <div className="product-actions">
          <button 
            className="btn btn-small add-to-cart" 
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </button>
          <button className="wishlist-btn">
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;