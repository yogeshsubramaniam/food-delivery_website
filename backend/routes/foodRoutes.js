const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Fetch all food items
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find({});
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Seed some initial data
router.post('/seed', async (req, res) => {
  try {
    await Food.deleteMany({});
    const createdFoods = await Food.insertMany([
      { name: 'Burger', description: 'Juicy beef burger', price: 70, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Fast Food' },
      { name: 'Pizza', description: 'Cheese pizza', price: 120, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Fast Food' },
      { name: 'Salad', description: 'Healthy green salad', price: 90, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Healthy' },
      { name: 'Butter Chicken', description: 'Creamy and spicy Indian curry', price: 250, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=60', category: 'Indian' },
      { name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', price: 180, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Indian' },
      { name: 'Sushi Roll', description: 'Fresh salmon maki rolls', price: 350, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Japanese' },
      { name: 'Pasta Alfredo', description: 'Creamy white sauce pasta', price: 210, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=500&q=60', category: 'Italian' },
      { name: 'Chocolate Cake', description: 'Rich loaded chocolate dessert', price: 150, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', category: 'Dessert' }
    ]);
    res.json(createdFoods);
  } catch(error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
