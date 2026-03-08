import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaUtensils } from 'react-icons/fa';

const Navbar = () => {
  const { cartItems } = useCart();
  const location = useLocation();

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaUtensils style={{ color: '#ffa502' }} />
          <span>Foodies</span>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link 
              to="/" 
              className="nav-links"
              style={{ color: location.pathname === '/' ? '#ff4757' : '' }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className="nav-links"
              style={{ color: location.pathname === '/menu' ? '#ff4757' : '' }}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-links cart-icon-container">
              <FaShoppingCart size={22} style={{ color: location.pathname === '/cart' ? '#ff4757' : '' }}/>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
