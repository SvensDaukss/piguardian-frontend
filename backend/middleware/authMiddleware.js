const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Access denied, no token provided' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { uuid: decoded.uuid, firstName: decoded.firstName, lastName: decoded.lastName };
    next();
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
