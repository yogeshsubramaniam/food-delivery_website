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
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon fast"><FaClock /></div>
              <div className="stat-text">
                <h4>Fast Delivery</h4>
                <p>Under 30 minutes</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon hot"><FaHeart /></div>
              <div className="stat-text">
                <h4>10k+ Favorites</h4>
                <p>Loved by many</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon fresh"><FaMotorcycle /></div>
              <div className="stat-text">
                <h4>Free Shipping</h4>
                <p>On all orders</p>
              </div>
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
