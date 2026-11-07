// Order Routes
const orderController = require('../controllers/orderController');
const { optionalAuth, authenticate } = require('../middleware/auth');

function registerOrderRoutes(app) {
  // Coupon verification
  app.post('/api/orders/validate-coupon', orderController.validateCoupon);

  // Create order (supports both logged-in and guest checkout)
  app.post('/api/orders', optionalAuth, orderController.createOrder);

  // Authenticated user order history
  app.get('/api/orders/my-orders', authenticate, orderController.getMyOrders);
  app.get('/api/orders/:id', authenticate, orderController.getOrderById);
}

module.exports = registerOrderRoutes;
