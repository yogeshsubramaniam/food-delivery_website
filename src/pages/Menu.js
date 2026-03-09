import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaPlus } from 'react-icons/fa';
import { foods as staticFoods } from '../data/foods';

const Menu = () => {
  const [foods] = useState(staticFoods);
  const [loading] = useState(false);
  const { addToCart } = useCart();

  if (loading) return (
    <div className="page-container loader-container">
      <div className="spinner"></div>
      <h3>Loading deliciousness...</h3>
    </div>
  );

  return (
    <div className="page-container">
      <div className="menu-header">
        <div>
          <h2>Our Popular Menu</h2>
          <p>Discover our chef's specials and mostly ordered dishes.</p>
        </div>
      </div>
      
      <div className="food-grid">
        {foods.map((food) => (
          <div key={food._id} className="food-card">
            <span className="category-badge">{food.category}</span>
            <div className="food-image-container">
              <img src={food.image} alt={food.name} />
            </div>
            <div className="food-info">
              <h3>{food.name}</h3>
              <p>{food.description}</p>
              
              <div className="price-row">
                <div className="price">
                  <span>₹</span>{food.price}
                </div>
                <button 
                  className="btn-add-icon"
                  onClick={() => addToCart(food)}
                  title="Add to Cart"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
