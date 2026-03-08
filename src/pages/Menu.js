import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { FaPlus } from 'react-icons/fa';

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/foods');
        setFoods(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching foods', error);
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

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
