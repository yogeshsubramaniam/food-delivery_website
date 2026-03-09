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
      <div className="checkout-wrapper">
        <h2 className="checkout-title">Delivery Address</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="form-control"
              required 
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className="form-control"
              required 
              placeholder="+91 9876543210"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Street Address</label>
            <textarea 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              className="form-control"
              required 
              rows="3"
              style={{ resize: 'vertical' }}
              placeholder="123 Food Lane, Appt 4B"
            ></textarea>
          </div>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <div className="form-group" style={{ flex: '1' }}>
              <label htmlFor="city">City</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                className="form-control"
                required 
                placeholder="Mumbai"
              />
            </div>
            <div className="form-group" style={{ flex: '1' }}>
              <label htmlFor="zip">Postal Code</label>
              <input 
                type="text" 
                id="zip" 
                name="zip" 
                value={formData.zip} 
                onChange={handleChange} 
                className="form-control"
                required 
                placeholder="400001"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Address;
