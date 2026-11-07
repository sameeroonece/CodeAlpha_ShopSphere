// Product Model (Mongoose Schema)
let mongoose;
try {
  mongoose = require('mongoose');
} catch (e) {}

let productSchema = null;
let Product = null;

if (mongoose && mongoose.Schema) {
  productSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
      slug: { type: String, required: true, lowercase: true },
      category: { type: String, required: true },
      subcategory: { type: String, default: 'General' },
      price: { type: Number, required: true },
      originalPrice: { type: Number, default: 0 },
      discountPercent: { type: Number, default: 0 },
      rating: { type: Number, default: 4.5 },
      reviewCount: { type: Number, default: 0 },
      stock: { type: Number, required: true, default: 10 },
      images: [{ type: String }],
      badge: { type: String, default: '' },
      tags: [{ type: String }],
      isFeatured: { type: Boolean, default: false },
      isDeal: { type: Boolean, default: false },
      dealEndsInHours: { type: Number, default: 0 },
      description: { type: String, required: true },
      features: [{ type: String }],
      specs: { type: Map, of: String }
    },
    { timestamps: true }
  );

  Product = mongoose.models.Product || mongoose.model('Product', productSchema);
}

module.exports = Product;
