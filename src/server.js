const express = require('express');
const connectDB = require('../src/models/db');
const cors = require('cors');

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
