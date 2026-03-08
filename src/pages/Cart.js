import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaTrash, FaShoppingBag, FaArrowRight } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/address');
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  };

  return (
    <div className="page-container">
      <div className="menu-header">
        <div>
          <h2 className="cart-title">Your Cart</h2>
          <p className="cart-subtitle">Review your items before proceeding to checkout</p>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <FaShoppingBag className="empty-cart-icon" />
          <h3>Your cart feels light</h3>
          <p>Looks like you haven't added any delicious food to your cart yet.</p>
          <Link to="/menu" className="btn btn-primary">
            Explore Menu <FaArrowRight />
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <div className="cart-item-price">₹{item.price}</div>
                </div>
                
                <div className="cart-item-actions">
                  <div className="qty-selector">
                    <select
                      value={item.qty}
                      onChange={(e) => updateQty(item._id, e.target.value)}
                    >
                      {[...Array(10).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <button 
                    className="btn-remove" 
                    onClick={() => removeFromCart(item._id)}
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>
            
            <div className="summary-row">
              <span>Items ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</span>
              <span>₹{calculateTotal()}</span>
            </div>
            
            <div className="summary-row">
              <span>Delivery</span>
              <span style={{color: 'var(--success)', fontWeight: 'bold'}}>Free</span>
            </div>
            
            <div className="summary-row">
              <span>Taxes</span>
              <span>₹{(calculateTotal() * 0.05).toFixed(2)}</span>
            </div>
            
            <div className="summary-total">
              <span>Total</span>
              <span>₹{(calculateTotal() * 1.05).toFixed(2)}</span>
            </div>
            
            <button className="btn btn-checkout" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
