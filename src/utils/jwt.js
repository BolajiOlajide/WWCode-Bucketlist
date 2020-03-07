const jwt = require('jsonwebtoken');

const JWT_SECRET = 'wwcode';

exports.generateToken = (payload) => jwt
  .sign(payload, JWT_SECRET, { expiresIn: '2h' });

exports.decodeToken = (token) => jwt.verify(token, JWT_SECRET);
