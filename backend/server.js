const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Route files
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Main Routes
app.use('/api/foods', foodRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
