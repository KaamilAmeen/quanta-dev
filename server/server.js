const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const quantaRoutes = require('./src/routes/quantaRoutes');

// Configure dotend to lead env var of .env file
dotenv.config({path: path.resolve(__dirname, '.env')});

// Initialize express app
const app = express();

// Middleware
app.use(cors());

// To parse JSON Bodies
app.use(express.json());

// Routes
app.use('/quanta', quantaRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})