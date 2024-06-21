const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const pool = require('../config/database');
const router = express.Router();

router.get('/:uuid', authMiddleware, async (req, res) => {
  try {
    if (req.user.uuid !== req.params.uuid) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const query = 'SELECT first_name, last_name FROM users WHERE uuid = $1';
    const result = await pool.query(query, [req.params.uuid]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = result.rows[0];
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

module.exports = router;
