// Admin Controller
const { OrderModel, ProductModel, UserModel } = require('../config/db');

// Get all orders (Admin)
exports.getAllOrders = async (req, res) => {
  try {
    const { status } = req.query;
    let orders = await OrderModel.find();

    if (status && status !== 'all') {
      orders = orders.filter(o => o.orderStatus.toLowerCase() === status.toLowerCase());
    }

    orders.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    return res.json({
      success: true,
      total: orders.length,
      orders
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to retrieve admin orders.' });
  }
};

// Update order status (Admin)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus, paymentStatus } = req.body;

    const validStatuses = ['Processing', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'];
    if (orderStatus && !validStatuses.includes(orderStatus)) {
      return res.status(400).json({ success: false, message: 'Invalid order status value.' });
    }

    const updates = {};
    if (orderStatus) updates.orderStatus = orderStatus;
    if (paymentStatus) updates.paymentStatus = paymentStatus;

    const updated = await OrderModel.findByIdAndUpdate(id, updates);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }

    return res.json({
      success: true,
      message: `Order status updated to "${orderStatus || updated.orderStatus}".`,
      order: updated
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to update order status.' });
  }
};

// Get Dashboard KPI & Analytics stats (Admin)
exports.getDashboardStats = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    const products = await ProductModel.find();
    const users = await UserModel.find();

    // Compute metrics
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, o) => {
      // only count non-cancelled orders for revenue
      return o.orderStatus !== 'Cancelled' ? sum + (o.totalAmount || 0) : sum;
    }, 0);

    const totalProducts = products.length;
    const totalCustomers = users.filter(u => u.role !== 'admin').length;

    // Low stock items (stock < 15)
    const lowStockProducts = products.filter(p => p.stock < 15);

    // Orders by status
    const statusCounts = {
      Processing: orders.filter(o => o.orderStatus === 'Processing').length,
      Confirmed: orders.filter(o => o.orderStatus === 'Confirmed').length,
      Shipped: orders.filter(o => o.orderStatus === 'Shipped').length,
      Delivered: orders.filter(o => o.orderStatus === 'Delivered').length,
      Cancelled: orders.filter(o => o.orderStatus === 'Cancelled').length
    };

    // Category distribution
    const categoryCounts = {};
    products.forEach(p => {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });

    // Recent 5 orders
    const recentOrders = [...orders]
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
      .slice(0, 5);

    return res.json({
      success: true,
      stats: {
        totalRevenue: parseFloat(totalRevenue.toFixed(2)),
        totalOrders,
        totalProducts,
        totalCustomers,
        lowStockCount: lowStockProducts.length,
        statusCounts,
        categoryCounts,
        recentOrders
      }
    });
  } catch (err) {
    console.error('getDashboardStats error:', err);
    return res.status(500).json({ success: false, message: 'Failed to generate dashboard statistics.' });
  }
};

// Get customers list (Admin)
exports.getCustomers = async (req, res) => {
  try {
    const users = await UserModel.find();
    const customers = users
      .filter(u => u.role !== 'admin')
      .map(u => ({
        id: u._id,
        name: u.name,
        email: u.email,
        phone: u.phone,
        createdAt: u.createdAt,
        addressCount: (u.addresses || []).length
      }));

    return res.json({
      success: true,
      customers
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to fetch customer list.' });
  }
};
