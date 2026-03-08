import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Address = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving address securely
    console.log('Address saved:', formData);
    navigate('/payment');
  };

  return (
    <div className="page-container">
      <div className="menu-header">
        <div>
          <h2 className="cart-title">Delivery Address</h2>
          <p className="cart-subtitle">Where should we deliver your delicious food?</p>
        </div>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name" style={{ fontWeight: '500', color: 'var(--text-color)' }}>Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
              placeholder="John Doe"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="phone" style={{ fontWeight: '500', color: 'var(--text-color)' }}>Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
              style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none' }}
              placeholder="+91 9876543210"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="address" style={{ fontWeight: '500', color: 'var(--text-color)' }}>Street Address</label>
            <textarea 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
              rows="3"
              style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
              placeholder="123 Food Lane, Appt 4B"
            ></textarea>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="city" style={{ fontWeight: '500', color: 'var(--text-color)' }}>City</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                required 
                style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none' }}
                placeholder="Mumbai"
              />
            </div>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="zip" style={{ fontWeight: '500', color: 'var(--text-color)' }}>Postal Code</label>
              <input 
                type="text" 
                id="zip" 
                name="zip" 
                value={formData.zip} 
                onChange={handleChange} 
                required 
                style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none' }}
                placeholder="400001"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Address;
