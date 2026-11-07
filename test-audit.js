// Comprehensive End-to-End Functional Test Suite
const { app } = require('./server');
const EventEmitter = require('events');

function createMockReq(options) {
  const req = new EventEmitter();
  req.method = options.method || 'GET';
  req.url = options.url || '/';
  req.headers = options.headers || {};
  if (options.body) {
    req.headers['content-type'] = 'application/json';
  }
  process.nextTick(() => {
    if (options.body) {
      req.emit('data', JSON.stringify(options.body));
    }
    req.emit('end');
  });
  return req;
}

function createMockRes() {
  const res = new EventEmitter();
  res.statusCode = 200;
  res.headers = {};
  res._data = '';
  res.setHeader = (k, v) => { res.headers[k.toLowerCase()] = v; };
  res.writeHead = (code, headers = {}) => {
    res.statusCode = code;
    Object.entries(headers).forEach(([k, v]) => res.headers[k.toLowerCase()] = v);
  };
  res.write = (chunk) => { res._data += chunk; };
  res.end = (chunk) => {
    if (chunk) res._data += chunk;
    res.emit('finish');
  };
  return res;
}

function apiCall(options) {
  return new Promise((resolve, reject) => {
    const req = createMockReq(options);
    const res = createMockRes();
    res.on('finish', () => {
      let parsed = res._data;
      try {
        parsed = JSON.parse(res._data);
      } catch (e) {}
      resolve({ status: res.statusCode, data: parsed });
    });
    try {
      app._dispatch(req, res);
    } catch (err) {
      reject(err);
    }
  });
}

async function runFullE2ETest() {
  console.log('\n======================================================');
  console.log('  🔍 SHOPSPHERE FULL-STACK SYSTEM AUDIT & VERIFICATION');
  console.log('======================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(name, condition, extra = '') {
    if (condition) {
      console.log(`  ✅ [PASS] ${name} ${extra ? `(${extra})` : ''}`);
      passed++;
    } else {
      console.error(`  ❌ [FAIL] ${name} ${extra ? `(${extra})` : ''}`);
      failed++;
    }
  }

  // 1. Static HTML Pages Serving
  const pages = [
    '/',
    '/products.html',
    '/product-detail.html',
    '/cart.html',
    '/checkout.html',
    '/orders.html',
    '/wishlist.html',
    '/login.html',
    '/register.html',
    '/admin.html'
  ];
  for (const page of pages) {
    const res = await apiCall({ method: 'GET', url: page });
    assert(`Static Page: ${page}`, res.status === 200, 'Status 200 OK');
  }

  // 2. User Registration
  const testEmail = `intern_${Date.now()}@shopsphere.com`;
  const regRes = await apiCall({
    method: 'POST',
    url: '/api/auth/register',
    body: {
      name: 'CodeAlpha Intern',
      email: testEmail,
      password: 'password123',
      phone: '+1 555-019-8877'
    }
  });
  assert('User Registration API', regRes.status === 201 && regRes.data.success, `Created user: ${testEmail}`);
  const userToken = regRes.data.token;

  // 3. User Login
  const loginRes = await apiCall({
    method: 'POST',
    url: '/api/auth/login',
    body: {
      email: testEmail,
      password: 'password123'
    }
  });
  assert('User Login API', loginRes.status === 200 && loginRes.data.success, `Logged in: ${loginRes.data.user.name}`);

  // 4. Authenticated Profile
  const profileRes = await apiCall({
    method: 'GET',
    url: '/api/auth/profile',
    headers: { authorization: `Bearer ${userToken}` }
  });
  assert('Get Profile API', profileRes.status === 200 && profileRes.data.user.email === testEmail, `Role: ${profileRes.data.user.role}`);

  // 5. Product Catalog & Search
  const searchRes = await apiCall({
    method: 'GET',
    url: '/api/products?search=wireless&category=Electronics'
  });
  assert('Product Search & Category Filter', searchRes.status === 200 && searchRes.data.products.length > 0, `${searchRes.data.products.length} matching products found`);

  // 6. Product Detail
  const targetProduct = searchRes.data.products[0];
  const detailRes = await apiCall({
    method: 'GET',
    url: `/api/products/${targetProduct._id}`
  });
  assert('Product Detail & Related API', detailRes.status === 200 && detailRes.data.product._id === targetProduct._id, `Found: ${detailRes.data.product.name}`);

  // 7. Coupon Validation
  const couponRes = await apiCall({
    method: 'POST',
    url: '/api/orders/validate-coupon',
    body: { code: 'ALPHA10', subtotal: 200 }
  });
  assert('Coupon Validation API', couponRes.status === 200 && couponRes.data.discountAmount === 20, `Code ALPHA10 discount: $${couponRes.data.discountAmount}`);

  // 8. Order Placement & Stock Decrement
  const initialStock = targetProduct.stock;
  const orderRes = await apiCall({
    method: 'POST',
    url: '/api/orders',
    headers: { authorization: `Bearer ${userToken}` },
    body: {
      items: [
        {
          productId: targetProduct._id,
          name: targetProduct.name,
          price: targetProduct.price,
          quantity: 2
        }
      ],
      shippingAddress: {
        fullName: 'CodeAlpha Intern',
        email: testEmail,
        addressLine: '123 Innovation Drive',
        city: 'San Francisco',
        state: 'CA',
        postalCode: '94105',
        country: 'United States',
        phone: '+1 555-019-8877'
      },
      paymentMethod: 'card',
      couponCode: 'ALPHA10'
    }
  });
  assert('Order Placement API', orderRes.status === 201 && orderRes.data.success, `Order Number: ${orderRes.data.order.orderNumber}`);

  // Check stock decreased by 2
  const checkProduct = await apiCall({ method: 'GET', url: `/api/products/${targetProduct._id}` });
  assert('Stock Inventory Decrement', checkProduct.data.product.stock === initialStock - 2, `Stock: ${initialStock} -> ${checkProduct.data.product.stock}`);

  // 9. Customer Order History
  const myOrdersRes = await apiCall({
    method: 'GET',
    url: '/api/orders/my-orders',
    headers: { authorization: `Bearer ${userToken}` }
  });
  assert('Order History API', myOrdersRes.status === 200 && myOrdersRes.data.orders.length >= 1, `Total orders found: ${myOrdersRes.data.orders.length}`);

  // 10. Single Order Invoice by ID
  const orderId = orderRes.data.order._id;
  const singleOrderRes = await apiCall({
    method: 'GET',
    url: `/api/orders/${orderId}`,
    headers: { authorization: `Bearer ${userToken}` }
  });
  assert('Single Order Invoice API', singleOrderRes.status === 200 && singleOrderRes.data.order.orderNumber === orderRes.data.order.orderNumber, 'Itemized receipt retrieved');

  // 11. Admin Login
  const adminLoginRes = await apiCall({
    method: 'POST',
    url: '/api/auth/login',
    body: { email: 'admin@shopsphere.com', password: 'admin123' }
  });
  assert('Admin Authentication', adminLoginRes.status === 200 && adminLoginRes.data.user.role === 'admin', 'Administrator access verified');
  const adminToken = adminLoginRes.data.token;

  // 12. Admin KPI Stats
  const adminStats = await apiCall({
    method: 'GET',
    url: '/api/admin/stats',
    headers: { authorization: `Bearer ${adminToken}` }
  });
  assert('Admin Dashboard KPI Stats', adminStats.status === 200 && adminStats.data.stats.totalOrders > 0, `Revenue: $${adminStats.data.stats.totalRevenue}, Orders: ${adminStats.data.stats.totalOrders}`);

  // 13. Admin Order Status Update
  const statusUpdate = await apiCall({
    method: 'PUT',
    url: `/api/admin/orders/${orderId}/status`,
    headers: { authorization: `Bearer ${adminToken}` },
    body: { orderStatus: 'Delivered', paymentStatus: 'Paid' }
  });
  assert('Admin Order Status Changer', statusUpdate.status === 200 && statusUpdate.data.order.orderStatus === 'Delivered', 'Updated status to Delivered');

  // 14. Admin Product CRUD
  const createProdRes = await apiCall({
    method: 'POST',
    url: '/api/products',
    headers: { authorization: `Bearer ${adminToken}` },
    body: {
      name: 'CyberVision 8K HDR Smart Headset',
      category: 'Electronics',
      price: 499.99,
      originalPrice: 699.99,
      stock: 20,
      description: 'Ultra high-definition augmented and virtual audio headset.'
    }
  });
  assert('Admin Create Product API', createProdRes.status === 201 && createProdRes.data.success, `Created: ${createProdRes.data.product.name}`);
  const newProdId = createProdRes.data.product._id;

  const updateProdRes = await apiCall({
    method: 'PUT',
    url: `/api/products/${newProdId}`,
    headers: { authorization: `Bearer ${adminToken}` },
    body: { price: 449.99 }
  });
  assert('Admin Update Product API', updateProdRes.status === 200 && updateProdRes.data.product.price === 449.99, `Updated price to $449.99`);

  const deleteProdRes = await apiCall({
    method: 'DELETE',
    url: `/api/products/${newProdId}`,
    headers: { authorization: `Bearer ${adminToken}` }
  });
  assert('Admin Delete Product API', deleteProdRes.status === 200 && deleteProdRes.data.success, `Deleted item ID: ${newProdId}`);

  console.log('\n======================================================');
  console.log(`  AUDIT SUMMARY: ${passed} PASSED | ${failed} FAILED`);
  console.log('======================================================\n');

  if (failed === 0) {
    console.log('🎉 ALL SYSTEM MODULES, ROUTES, AND INTEGRATIONS ARE HEALTHY & 100% OPERATIONAL!\n');
    process.exit(0);
  } else {
    process.exit(1);
  }
}

runFullE2ETest().catch(err => {
  console.error('Audit Error:', err);
  process.exit(1);
});
