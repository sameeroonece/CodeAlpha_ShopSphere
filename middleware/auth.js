// Authentication and Authorization Middleware
const crypto = require('crypto');
const { UserModel } = require('../config/db');

const JWT_SECRET = process.env.JWT_SECRET || 'shopsphere_super_secret_jwt_token_2026_codealpha';

// Safe token generator & verifier using built-in crypto or jsonwebtoken
function generateToken(payload) {
  try {
    const jwt = require('jsonwebtoken');
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
  } catch (e) {
    // Built-in HMAC token fallback
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
    const body = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + 7 * 86400 * 1000 })).toString('base64url');
    const signature = crypto.createHmac('sha256', JWT_SECRET).update(`${header}.${body}`).digest('base64url');
    return `${header}.${body}.${signature}`;
  }
}

function verifyToken(token) {
  try {
    const jwt = require('jsonwebtoken');
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    // Fallback verification
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      const [header, body, signature] = parts;
      const expectedSig = crypto.createHmac('sha256', JWT_SECRET).update(`${header}.${body}`).digest('base64url');
      if (signature !== expectedSig) return null;
      const decoded = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
      if (decoded.exp && Date.now() > decoded.exp) return null;
      return decoded;
    } catch (err) {
      return null;
    }
  }
}

// Password hashing helper (supports bcryptjs or sha256 salt fallback)
async function hashPassword(plainPassword) {
  try {
    const bcrypt = require('bcryptjs');
    return await bcrypt.hash(plainPassword, 10);
  } catch (e) {
    return crypto.createHash('sha256').update(plainPassword + JWT_SECRET).digest('hex');
  }
}

async function comparePassword(plainPassword, hashedPassword) {
  try {
    const bcrypt = require('bcryptjs');
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (e) {
    const hashed = crypto.createHash('sha256').update(plainPassword + JWT_SECRET).digest('hex');
    return hashed === hashedPassword || plainPassword === hashedPassword;
  }
}

// Authenticate user middleware
async function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'] || req.headers['x-auth-token'];
  if (!authHeader) {
    return res.status(401).json({ success: false, message: 'Access denied. No authentication token provided.' });
  }

  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : authHeader;
  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token. Please log in again.' });
  }

  const user = await UserModel.findById(decoded.id);
  if (!user) {
    return res.status(401).json({ success: false, message: 'User account not found.' });
  }

  req.user = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    avatar: user.avatar
  };

  next();
}

// Admin only middleware
function adminOnly(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Access denied. Administrator privileges required.' });
  }
  next();
}

// Optional authentication (for cart, wishlist if needed)
async function optionalAuth(req, res, next) {
  const authHeader = req.headers['authorization'] || req.headers['x-auth-token'];
  if (authHeader) {
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : authHeader;
    const decoded = verifyToken(token);
    if (decoded) {
      const user = await UserModel.findById(decoded.id);
      if (user) {
        req.user = {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar
        };
      }
    }
  }
  next();
}

module.exports = {
  generateToken,
  verifyToken,
  hashPassword,
  comparePassword,
  authenticate,
  adminOnly,
  optionalAuth
};
