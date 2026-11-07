// Order Model (Mongoose Schema)
let mongoose;
try {
  mongoose = require('mongoose');
} catch (e) {}

let orderSchema = null;
let Order = null;

if (mongoose && mongoose.Schema) {
  orderSchema = new mongoose.Schema(
    {
      orderNumber: { type: String, required: true, unique: true },
      user: {
        userId: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true }
      },
      items: [
        {
          productId: { type: String, required: true },
          name: { type: String, required: true },
          price: { type: Number, required: true },
          quantity: { type: Number, required: true },
          image: { type: String }
        }
      ],
      shippingAddress: {
        fullName: { type: String, required: true },
        addressLine: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
        phone: { type: String }
      },
      paymentMethod: { type: String, required: true, default: 'card' },
      paymentStatus: { type: String, enum: ['Paid', 'Pending', 'Failed'], default: 'Paid' },
      orderStatus: {
        type: String,
        enum: ['Processing', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Processing'
      },
      subtotal: { type: Number, required: true },
      discount: { type: Number, default: 0 },
      tax: { type: Number, default: 0 },
      shippingCost: { type: Number, default: 0 },
      totalAmount: { type: Number, required: true },
      couponCode: { type: String, default: '' },
      estimatedDelivery: { type: String }
    },
    { timestamps: true }
  );

  Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
}

module.exports = Order;
