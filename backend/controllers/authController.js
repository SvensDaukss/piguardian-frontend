const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');
require('dotenv').config();

const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(email, hashedPassword, firstName, lastName);
    const token = jwt.sign(
      { uuid: user.uuid, firstName: user.first_name, lastName: user.last_name },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      domain: '.piguardian.org', // Set cookie for all subdomains
    });
    res.status(201).json({ token, uuid: user.uuid, user });
  } catch (err) {
    if (err.code === '23505') {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { uuid: user.uuid, firstName: user.first_name, lastName: user.last_name },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      domain: '.piguardian.org', // Set cookie for all subdomains
    });
    res.json({ token, uuid: user.uuid, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    domain: '.piguardian.org', // Clear cookie for all subdomains
  });
  res.json({ message: 'Logged out successfully' });
};

module.exports = {
  signup,
  login,
  logout,
};
