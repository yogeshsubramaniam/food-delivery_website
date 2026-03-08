import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaCheckCircle, FaArrowRight, FaHome } from 'react-icons/fa';

const OrderConfirm = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart when the component mounts successfully
    if (clearCart) {
      clearCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Generate a random order ID once for display purposes
  const [orderId] = React.useState(() => Math.floor(100000 + Math.random() * 900000));

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <FaCheckCircle style={{ fontSize: '6rem', color: 'var(--success)', marginBottom: '1.5rem' }} />
      
      <h2 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Order Confirmed!</h2>
      <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '500px', marginBottom: '1rem' }}>
        Thank you for your purchase. Your delicious food is currently being prepared and will be delivered shortly.
      </p>
      
      <div style={{ background: '#f8fafc', padding: '1rem 2rem', borderRadius: '10px', marginBottom: '2.5rem', border: '1px dashed #cbd5e1' }}>
        <p style={{ margin: 0, color: '#64748b', fontWeight: '500' }}>Order ID: <span style={{ color: 'var(--text-color)', fontWeight: 'bold' }}>#{orderId}</span></p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn" style={{ background: 'white', border: '2px solid #e2e8f0', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FaHome /> Back to Home
        </Link>
        <Link to="/menu" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Order More Food <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirm;
