const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Initialize dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use('/auth', authRoutes);        // Routes for authentication
app.use('/transactions', transactionRoutes);  // Routes for transactions

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
