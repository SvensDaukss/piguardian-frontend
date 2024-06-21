const express = require('express');
const { signup, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const pool = require('../config/database');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.get('/me', authMiddleware, async (req, res) => {
  try {
    const query = 'SELECT uuid, first_name, last_name, email FROM users WHERE uuid = $1';
    const result = await pool.query(query, [req.user.uuid]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result.rows[0];
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Failed to fetch user data' });
  }
});

module.exports = router;
