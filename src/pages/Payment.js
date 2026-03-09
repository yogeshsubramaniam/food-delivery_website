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
      <div className="checkout-wrapper">
        <h2 className="checkout-title">Payment Method</h2>
        
        <p style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          <FaLock /> Your payment Information is secure
        </p>
        
        <form onSubmit={handleSubmit}>
          
          <div className="payment-options">
            <label className="payment-option">
              <input 
                type="radio" 
                name="payment" 
                value="card" 
                checked={paymentMethod === 'card'} 
                onChange={() => setPaymentMethod('card')} 
              />
              <FaCreditCard style={{ fontSize: '1.8rem', color: paymentMethod === 'card' ? 'var(--primary)' : 'var(--text-muted)' }} />
              <div>
                <h4 style={{ color: 'var(--text-main)' }}>Credit / Debit Card</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Pay securely with your card</p>
              </div>
            </label>

            <label className="payment-option">
              <input 
                type="radio" 
                name="payment" 
                value="cod" 
                checked={paymentMethod === 'cod'} 
                onChange={() => setPaymentMethod('cod')}
              />
              <FaMoneyBillWave style={{ fontSize: '1.8rem', color: paymentMethod === 'cod' ? 'var(--success)' : 'var(--text-muted)' }} />
              <div>
                <h4 style={{ color: 'var(--text-main)' }}>Cash on Delivery (COD)</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Pay with cash when your food arrives</p>
              </div>
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
