import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMoneyBillWave, FaCreditCard, FaLock } from 'react-icons/fa';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Please select a payment method!');
      return;
    }
    // Proceed to confirm order
    navigate('/order-confirm');
  };

  return (
    <div className="page-container">
      <div className="menu-header">
        <div>
          <h2 className="cart-title">Payment Method</h2>
          <p className="cart-subtitle">Choose how you'd like to pay</p>
        </div>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem' }}>
          <FaLock /> Your payment Information is secure
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div 
            onClick={() => setPaymentMethod('card')}
            style={{ 
              padding: '1.5rem', 
              border: paymentMethod === 'card' ? '2px solid var(--primary-color)' : '2px solid #e2e8f0', 
              borderRadius: '10px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.2s',
              background: paymentMethod === 'card' ? 'rgba(255, 71, 87, 0.05)' : 'white'
            }}
          >
            <input 
              type="radio" 
              name="payment" 
              value="card" 
              checked={paymentMethod === 'card'} 
              onChange={() => setPaymentMethod('card')} 
              style={{ width: '1.2rem', height: '1.2rem', accentColor: 'var(--primary-color)' }}
            />
            <FaCreditCard style={{ fontSize: '1.5rem', color: paymentMethod === 'card' ? 'var(--primary-color)' : '#94a3b8' }} />
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-color)' }}>Credit / Debit Card</h4>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.9rem', color: '#64748b' }}>Pay securely with your card</p>
            </div>
          </div>

          <div 
            onClick={() => setPaymentMethod('cod')}
            style={{ 
              padding: '1.5rem', 
              border: paymentMethod === 'cod' ? '2px solid var(--primary-color)' : '2px solid #e2e8f0', 
              borderRadius: '10px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.2s',
              background: paymentMethod === 'cod' ? 'rgba(255, 71, 87, 0.05)' : 'white'
            }}
          >
            <input 
              type="radio" 
              name="payment" 
              value="cod" 
              checked={paymentMethod === 'cod'} 
              onChange={() => setPaymentMethod('cod')}
              style={{ width: '1.2rem', height: '1.2rem', accentColor: 'var(--primary-color)' }}
            />
            <FaMoneyBillWave style={{ fontSize: '1.5rem', color: paymentMethod === 'cod' ? 'var(--success)' : '#94a3b8' }} />
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-color)' }}>Cash on Delivery (COD)</h4>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.9rem', color: '#64748b' }}>Pay with cash when your food arrives</p>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
