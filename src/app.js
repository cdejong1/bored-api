const express = require('express');
const activityRoutes = require('./routes/activityRoutes');

const app = express();

app.use(express.json());

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Server running.' });
});

// Activity Routes
app.use('/activity', activityRoutes);

module.exports = app;
