const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pool = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});

// Debugging output for environment variables
console.log('Database User:', process.env.DATABASE_USER);
console.log('Database Host:', process.env.DATABASE_HOST);
console.log('Database Name:', process.env.DATABASE_NAME);
console.log('Database Password:', process.env.DATABASE_PASSWORD);
console.log('Database Port:', process.env.DATABASE_PORT);

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
});
