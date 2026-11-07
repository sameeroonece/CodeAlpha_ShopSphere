// User Model (Mongoose Schema)
let mongoose;
try {
  mongoose = require('mongoose');
} catch (e) {}

let userSchema = null;
let User = null;

if (mongoose && mongoose.Schema) {
  userSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, unique: true, lowercase: true, trim: true },
      password: { type: String, required: true },
      role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
      avatar: { type: String, default: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80' },
      phone: { type: String, default: '' },
      addresses: [
        {
          fullName: String,
          addressLine: String,
          city: String,
          state: String,
          postalCode: String,
          country: String,
          isDefault: Boolean
        }
      ]
    },
    { timestamps: true }
  );

  User = mongoose.models.User || mongoose.model('User', userSchema);
}

module.exports = User;
