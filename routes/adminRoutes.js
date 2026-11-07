// Admin Routes
const adminController = require('../controllers/adminController');
const { authenticate, adminOnly } = require('../middleware/auth');

function registerAdminRoutes(app) {
  app.get('/api/admin/stats', authenticate, adminOnly, adminController.getDashboardStats);
  app.get('/api/admin/orders', authenticate, adminOnly, adminController.getAllOrders);
  app.put('/api/admin/orders/:id/status', authenticate, adminOnly, adminController.updateOrderStatus);
  app.get('/api/admin/customers', authenticate, adminOnly, adminController.getCustomers);
}

module.exports = registerAdminRoutes;
