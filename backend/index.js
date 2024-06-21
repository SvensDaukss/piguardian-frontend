require('dotenv').config(); // Load environment variables at the top
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pool = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(5000, () => {
  console.log('Backend listening on port 5000');
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
});
