import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaCheckCircle, FaArrowRight, FaHome } from 'react-icons/fa';

const OrderConfirm = () => {
  const { clearCart } = useCart();
  const [orderId] = useState(() => Math.floor(100000 + Math.random() * 900000));

  useEffect(() => {
    if (clearCart) {
      clearCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-container">
      <div className="confirm-wrapper">
        <FaCheckCircle className="success-icon" />
        
        <h1>Order Confirmed!</h1>
        <p>
          Thank you for your purchase. Your delicious food is currently being prepared and will be delivered shortly.
        </p>
        
        <div className="order-details-card">
          <h3>Order Details</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Order ID: <span style={{ color: 'var(--secondary)', fontWeight: '800' }}>#{orderId}</span>
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link to="/" className="btn" style={{ background: 'white', color: 'var(--secondary)', border: '2px solid rgba(0,0,0,0.1)' }}>
            <FaHome /> Back to Home
          </Link>
          <Link to="/menu" className="btn btn-primary">
            Order More Food <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
