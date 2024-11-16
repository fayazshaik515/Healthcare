const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/services'); // Correct path to the routes

// Create an Express app
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/healthcare', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes for handling services
app.use('/api', serviceRoutes);  // Prefix `/api` to the routes

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
