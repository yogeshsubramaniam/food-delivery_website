import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaHeart, FaMotorcycle } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="page-container">
      <div className="home-hero">
        <div className="hero-content">
          <span className="tagline">🔥 #1 Food Delivery App</span>
          <h1>
            Craving Something <span>Delicious?</span>
          </h1>
          <p>
            Experience the fastest delivery with the best food in town. 
            We deliver hot, fresh, and tasty meals straight to your doorstep.
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="btn btn-primary">
              Order Now <FaArrowRight />
            </Link>
          </div>
          
          <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
              <FaClock style={{ color: 'var(--accent)' }}/> Fast Delivery
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
              <FaHeart style={{ color: 'var(--primary)' }}/> 10k+ Favorites
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
              <FaMotorcycle style={{ color: 'var(--success)' }}/> Free Shipping
            </div>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-blob"></div>
          {/* Unsplash beautiful food image */}
          <img 
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Delicious burger" 
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
