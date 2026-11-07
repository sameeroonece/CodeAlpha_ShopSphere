// Product Routes
const productController = require('../controllers/productController');
const { authenticate, adminOnly } = require('../middleware/auth');

function registerProductRoutes(app) {
  // Public product browsing
  app.get('/api/products', productController.getProducts);
  app.get('/api/products/categories', productController.getCategories);
  app.get('/api/products/:id', productController.getProductById);

  // Admin product operations
  app.post('/api/products', authenticate, adminOnly, productController.createProduct);
  app.put('/api/products/:id', authenticate, adminOnly, productController.updateProduct);
  app.delete('/api/products/:id', authenticate, adminOnly, productController.deleteProduct);
}

module.exports = registerProductRoutes;
