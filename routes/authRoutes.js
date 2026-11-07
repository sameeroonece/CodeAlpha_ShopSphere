// Auth Routes
const authController = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');

function registerAuthRoutes(app) {
  app.post('/api/auth/register', authController.register);
  app.post('/api/auth/login', authController.login);
  app.get('/api/auth/profile', authenticate, authController.getProfile);
  app.put('/api/auth/profile', authenticate, authController.updateProfile);
}

module.exports = registerAuthRoutes;
