// Order Controller
const { OrderModel, ProductModel } = require('../config/db');
const { promoCoupons } = require('../data/seedData');

// Validate promo coupon
exports.validateCoupon = (req, res) => {
  const { code, subtotal = 0 } = req.body;
  if (!code) {
    return res.status(400).json({ success: false, message: 'Coupon code is required.' });
  }

  const cleanCode = code.trim().toUpperCase();
  const coupon = promoCoupons[cleanCode];

  if (!coupon) {
    return res.status(404).json({ success: false, message: 'Invalid or expired promo code.' });
  }

  if (coupon.minSpend && subtotal < coupon.minSpend) {
    return res.status(400).json({
      success: false,
      message: `Coupon requires a minimum order subtotal of $${coupon.minSpend}.`
    });
  }

  let discountAmount = 0;
  if (coupon.discountPercent) {
    discountAmount = parseFloat(((subtotal * coupon.discountPercent) / 100).toFixed(2));
  } else if (coupon.flatDiscount) {
    discountAmount = Math.min(coupon.flatDiscount, subtotal);
  }

  return res.json({
    success: true,
    code: cleanCode,
    discountAmount,
    freeShipping: !!coupon.freeShipping,
    description: coupon.description
  });
};

// Create new order (Checkout)
exports.createOrder = async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      paymentMethod = 'card',
      couponCode,
      shippingOption = 'standard'
    } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Your cart is empty. Add items before checkout.' });
    }

    if (!shippingAddress || !shippingAddress.fullName || !shippingAddress.addressLine || !shippingAddress.city) {
      return res.status(400).json({ success: false, message: 'Complete shipping address is required.' });
    }

    // Verify stock and compute verified subtotal from database items
    let subtotal = 0;
    const verifiedItems = [];

    for (const item of items) {
      const product = await ProductModel.findById(item.productId);
      if (!product) {
        return res.status(400).json({ success: false, message: `Product "${item.name || item.productId}" is no longer available.` });
      }

      const qty = parseInt(item.quantity, 10) || 1;
      if (product.stock < qty) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for "${product.name}". Only ${product.stock} units remaining.`
        });
      }

      const itemTotal = product.price * qty;
      subtotal += itemTotal;

      verifiedItems.push({
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: qty,
        image: product.images && product.images[0] ? product.images[0] : ''
      });

      // Deduct stock
      await ProductModel.findByIdAndUpdate(product._id, {
        stock: Math.max(0, product.stock - qty)
      });
    }

    // Calculate Discounts
    let discount = 0;
    let freeShipping = false;
    if (couponCode) {
      const code = couponCode.trim().toUpperCase();
      const coupon = promoCoupons[code];
      if (coupon) {
        if (!coupon.minSpend || subtotal >= coupon.minSpend) {
          if (coupon.discountPercent) {
            discount = parseFloat(((subtotal * coupon.discountPercent) / 100).toFixed(2));
          } else if (coupon.flatDiscount) {
            discount = Math.min(coupon.flatDiscount, subtotal);
          }
          if (coupon.freeShipping) freeShipping = true;
        }
      }
    }

    // Shipping cost calculation
    let shippingCost = 0;
    if (!freeShipping) {
      if (shippingOption === 'express') {
        shippingCost = 14.99;
      } else if (subtotal < 99) {
        shippingCost = 5.99;
      } else {
        shippingCost = 0; // Free standard shipping on orders over $99
      }
    }

    // Tax calculation (e.g. 7% estimated state/local sales tax)
    const taxableAmount = Math.max(0, subtotal - discount);
    const tax = parseFloat((taxableAmount * 0.07).toFixed(2));

    const totalAmount = parseFloat((taxableAmount + tax + shippingCost).toFixed(2));

    // Generate unique order number (e.g., SS-2026-8942)
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `SS-${new Date().getFullYear()}-${randomDigits}`;

    // Estimated delivery 3 to 5 business days from now
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + (shippingOption === 'express' ? 2 : 4));
    const estimatedDelivery = deliveryDate.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });

    const newOrder = await OrderModel.create({
      orderNumber,
      user: {
        userId: req.user ? req.user.id : 'guest',
        name: req.user ? req.user.name : shippingAddress.fullName,
        email: req.user ? req.user.email : shippingAddress.email || 'customer@shopsphere.com'
      },
      items: verifiedItems,
      shippingAddress: {
        fullName: shippingAddress.fullName,
        addressLine: shippingAddress.addressLine,
        city: shippingAddress.city,
        state: shippingAddress.state || '',
        postalCode: shippingAddress.postalCode || '',
        country: shippingAddress.country || 'United States',
        phone: shippingAddress.phone || ''
      },
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'Pending' : 'Paid',
      orderStatus: 'Processing',
      subtotal: parseFloat(subtotal.toFixed(2)),
      discount,
      tax,
      shippingCost,
      totalAmount,
      couponCode: couponCode ? couponCode.toUpperCase() : '',
      estimatedDelivery
    });

    return res.status(201).json({
      success: true,
      message: 'Order placed successfully!',
      order: newOrder
    });
  } catch (err) {
    console.error('createOrder error:', err);
    return res.status(500).json({ success: false, message: 'Failed to process checkout order.' });
  }
};

// Get current user's order history
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    // Filter orders by user id or user email
    const userOrders = orders
      .filter(o => o.user && (o.user.userId === req.user.id || o.user.email === req.user.email))
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    return res.json({
      success: true,
      orders: userOrders
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to fetch order history.' });
  }
};

// Get single order details
exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await OrderModel.findById(id);

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }

    // Check authorization: user can only view their own order unless admin
    if (req.user.role !== 'admin' && order.user.userId !== req.user.id && order.user.email !== req.user.email) {
      return res.status(403).json({ success: false, message: 'Access denied to this order.' });
    }

    return res.json({
      success: true,
      order
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to retrieve order details.' });
  }
};
