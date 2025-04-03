import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

const Cart = ({ cart, removeFromCart, updateCartItemQuantity }) => {
  const calculateTotals = () => {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    return { subtotal, shipping, tax, total };
  };

  const totals = calculateTotals();

  const handlePromoCode = () => {
    const promoCode = document.getElementById('promo-code').value;
    if (promoCode.toLowerCase() === 'discount20') {
      alert('Promo code applied! 20% discount.');
    } else {
      alert('Invalid promo code.');
    }
  };

  return (
    <>
      <section className="cart-section">
        <div className="container">
          <h2>Your Shopping Cart</h2>
          {cart.length === 0 ? (
            <div id="cart-empty-message">
              <p>Your cart is empty. <Link to="/products">Continue shopping</Link></p>
            </div>
          ) : (
            <div id="cart-content">
              <div className="cart-items">
                {cart.map((item, index) => {
                  const product = products.find(p => p.id === item.id);
                  return (
                    <div className="cart-item" key={`${item.id}-${item.color}-${item.size}`}>
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <div className="cart-item-price">${item.price.toFixed(2)}</div>
                        <div className="cart-item-options">
                          {item.color && <span>Color: {item.color}</span>}
                          {item.size && <span>Size: {item.size}</span>}
                        </div>
                        <div className="cart-item-quantity">
                          <button 
                            className="quantity-decrease" 
                            onClick={() => updateCartItemQuantity(index, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            value={item.quantity} 
                            min="1" 
                            onChange={(e) => updateCartItemQuantity(index, parseInt(e.target.value) || 1)}
                          />
                          <button 
                            className="quantity-increase" 
                            onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <div className="cart-item-actions">
                          <button onClick={() => removeFromCart(index)}>
                            <i className="fas fa-trash"></i> Remove
                          </button>
                          <button>
                            <i className="far fa-heart"></i> Save for Later
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="cart-summary">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span>${totals.shipping.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Tax:</span>
                  <span>${totals.tax.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>${totals.total.toFixed(2)}</span>
                </div>
                <div className="promo-code">
                  <input type="text" placeholder="Promo Code" id="promo-code" />
                  <button className="btn-small" onClick={handlePromoCode}>Apply</button>
                </div>
                <button className="btn" onClick={() => alert('Checkout functionality would go here in a real e-commerce site.')}>
                  Proceed to Checkout
                </button>
                <Link to="/products" className="btn btn-outline">Continue Shopping</Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="recently-viewed">
        <div className="container">
          <h2 className="section-title">Recently Viewed</h2>
          <div className="products-grid">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;