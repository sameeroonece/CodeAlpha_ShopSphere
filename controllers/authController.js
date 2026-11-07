// Authentication Controller
const { UserModel } = require('../config/db');
const { generateToken, hashPassword, comparePassword } = require('../middleware/auth');

// Register new user
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and password.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long.' });
    }

    // Check if user already exists
    const existing = await UserModel.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ success: false, message: 'An account with this email already exists.' });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await UserModel.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      phone: phone || '',
      role: 'customer',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80`,
      addresses: []
    });

    const token = generateToken({
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    });

    return res.status(201).json({
      success: true,
      message: 'Account registered successfully!',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        avatar: newUser.avatar,
        phone: newUser.phone
      }
    });
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error during registration.' });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide both email and password.' });
    }

    const user = await UserModel.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials. User not found.' });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials. Incorrect password.' });
    }

    const token = generateToken({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    });

    return res.json({
      success: true,
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        phone: user.phone,
        addresses: user.addresses || []
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error during login.' });
  }
};

// Get current profile
exports.getProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User profile not found.' });
    }

    return res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        avatar: user.avatar,
        addresses: user.addresses || []
      }
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to retrieve profile.' });
  }
};

// Update profile / address
exports.updateProfile = async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    const updates = {};
    if (name) updates.name = name.trim();
    if (phone !== undefined) updates.phone = phone.trim();

    if (address) {
      const addresses = user.addresses || [];
      addresses.push({
        fullName: address.fullName || user.name,
        addressLine: address.addressLine,
        city: address.city,
        state: address.state,
        postalCode: address.postalCode,
        country: address.country || 'United States',
        isDefault: true
      });
      updates.addresses = addresses;
    }

    const updated = await UserModel.findByIdAndUpdate(req.user.id, updates);

    return res.json({
      success: true,
      message: 'Profile updated successfully!',
      user: {
        id: updated._id,
        name: updated.name,
        email: updated.email,
        role: updated.role,
        phone: updated.phone,
        addresses: updated.addresses
      }
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to update profile.' });
  }
};
