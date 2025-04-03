import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images[0]);
      if (foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      if (foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
      
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return <div className="container">Product not found.</div>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fas fa-star"></i>
        ))}
        {halfStar && <i key="half" className="fas fa-star-half-alt"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star"></i>
        ))}
      </>
    );
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity, selectedColor, selectedSize);
  };

  return (
    <>
      <section className="product-detail">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt;
            <Link to="/products">Products</Link> &gt;
            <span>{product.name}</span>
          </div>
          
          <div className="product-container">
            <div className="product-gallery">
              <div className="thumbnail-container">
                {product.images.map((img, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                    onClick={() => setMainImage(img)}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className="main-image">
                <img src={mainImage} alt={product.name} />
              </div>
            </div>
            <div className="product-details">
              <h1>{product.name}</h1>
              <div className="product-meta">
                <span>Category: {product.category}</span>
                <span>SKU: {product.id}{product.category.charAt(0).toUpperCase()}{product.id * 100}</span>
              </div>
              <div className="product-price">
                <span className="current-price">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <>
                    <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                    <span className="discount">{product.discount} off</span>
                  </>
                )}
              </div>
              <div className="product-rating">
                <div className="stars">
                  {renderStars(product.rating)}
                </div>
                <span className="review-count">{product.reviewCount} reviews</span>
              </div>
              <div className="product-description">
                {product.description}
              </div>
              <div className="product-options">
                {product.colors.length > 0 && (
                  <div className="option-group">
                    <h3>Color:</h3>
                    <div className="color-options">
                      {product.colors.map((color, index) => (
                        <div 
                          key={index}
                          className={`color-option ${selectedColor === color ? 'active' : ''}`}
                          style={{ backgroundColor: color }}
                          onClick={() => setSelectedColor(color)}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
                {product.sizes.length > 0 && (
                  <div className="option-group">
                    <h3>Size:</h3>
                    <div className="size-options">
                      {product.sizes.map((size, index) => (
                        <div 
                          key={index}
                          className={`size-option ${selectedSize === size ? 'active' : ''}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="quantity-selector">
                <span>Quantity:</span>
                <div className="quantity-input">
                  <button 
                    className="quantity-decrease" 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                  <button 
                    className="quantity-increase" 
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="product-actions">
                <button className="btn" onClick={handleAddToCart}>Add to Cart</button>
                <button className="btn btn-outline">Buy Now</button>
                <button className="wishlist-btn">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              <div className="product-meta-info">
                <div className="meta-item">
                  <span className="meta-label">SKU:</span>
                  <span>{product.id}{product.category.charAt(0).toUpperCase()}{product.id * 100}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Category:</span>
                  <span>{product.category}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Tags:</span>
                  <span>Fashion, {product.category}, {product.badge || 'Trending'}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Share:</span>
                  <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-products">
        <div className="container">
          <h2 className="section-title">You May Also Like</h2>
          <div className="products-grid">
            {relatedProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;