const mongoose = require('mongoose');
const connectDB = require('./config/db');
const User = require('./models/User');
const Food = require('./models/Food');
const Order = require('./models/Order');
const dotenv = require('dotenv');

dotenv.config();

const seedOrder = async () => {
  try {
    await connectDB();

    // Check if a test user exists, otherwise create one
    let user = await User.findOne({ email: 'test@example.com' });
    if (!user) {
      user = await User.create({
        name: 'John Doe Customer',
        email: 'test@example.com',
        password: 'password123',
      });
    }

    // Get any food item
    const food = await Food.findOne();
    if (!food) {
      console.log('No food available to create an order.');
      process.exit();
    }

    // Create a mock order
    await Order.create({
      user: user._id,
      orderItems: [
        {
          name: food.name,
          qty: 2,
          image: food.image,
          price: food.price,
          food: food._id,
        },
      ],
      shippingAddress: {
        address: '123 Main Street',
        city: 'Metropolis',
        postalCode: '12345',
      },
      paymentMethod: 'PayPal',
      totalPrice: food.price * 2,
      isPaid: true,
      paidAt: Date.now(),
      isDelivered: false,
    });

    console.log('Mock Order successfully seeded into the database!');
    process.exit();
  } catch (error) {
    console.error('Error seeding order:', error);
    process.exit(1);
  }
};

seedOrder();
