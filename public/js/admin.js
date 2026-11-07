// ShopSphere - Admin Dashboard Script

let allAdminProducts = [];
let allAdminOrders = [];
let currentAdminTab = 'overview';

async function initAdminDashboard() {
  if (!Auth.isLoggedIn() || !Auth.isAdmin()) {
    showToast('Access denied. Administrator privileges required.', 'error');
    setTimeout(() => {
      window.location.href = '/login.html?returnUrl=/admin.html';
    }, 800);
    return;
  }

  loadAdminStats();
  loadAdminProducts();
  loadAdminOrders();
  loadAdminCustomers();
}

// 1. Load KPI Stats
async function loadAdminStats() {
  try {
    const res = await api.admin.getStats();
    const stats = res.stats;

    document.getElementById('stat-revenue').textContent = `$${stats.totalRevenue.toLocaleString()}`;
    document.getElementById('stat-orders').textContent = stats.totalOrders;
    document.getElementById('stat-products').textContent = stats.totalProducts;
    document.getElementById('stat-customers').textContent = stats.totalCustomers;

    // Render Recent Orders in Overview
    const recentTable = document.getElementById('admin-recent-orders-table');
    if (recentTable && stats.recentOrders) {
      recentTable.innerHTML = stats.recentOrders.map(o => `
        <tr>
          <td style="font-family:monospace; font-weight:700;">${o.orderNumber}</td>
          <td>${o.shippingAddress.fullName}</td>
          <td>${new Date(o.createdAt).toLocaleDateString()}</td>
          <td style="font-weight:700;">$${o.totalAmount.toFixed(2)}</td>
          <td><span class="status-pill status-${o.orderStatus.toLowerCase()}">${o.orderStatus}</span></td>
          <td>
            <button class="btn btn-outline" style="padding:4px 10px; font-size:0.75rem;" onclick="openOrderInvoiceModal('${o._id}')">View</button>
          </td>
        </tr>
      `).join('');
    }
  } catch (err) {
    console.error('Failed to load admin stats:', err);
  }
}

// 2. Load Products Table
async function loadAdminProducts() {
  const table = document.getElementById('admin-products-table');
  if (!table) return;

  try {
    const res = await api.products.getAll({ limit: 100 });
    allAdminProducts = res.products || [];
    renderAdminProductsTable(allAdminProducts);
  } catch (err) {
    table.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--danger);">Failed to load products</td></tr>`;
  }
}

function renderAdminProductsTable(products) {
  const table = document.getElementById('admin-products-table');
  if (!table) return;

  if (products.length === 0) {
    table.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-muted);">No products found</td></tr>`;
    return;
  }

  table.innerHTML = products.map(p => `
    <tr>
      <td style="display:flex; align-items:center; gap:12px;">
        <img src="${p.images && p.images[0] ? p.images[0] : ''}" style="width:40px; height:40px; border-radius:6px; object-fit:cover; background:#f1f5f9;">
        <div>
          <div style="font-weight:700; color:var(--dark); max-width:220px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${p.slug}</div>
        </div>
      </td>
      <td><span style="font-size:0.8rem; background:#f1f5f9; padding:3px 8px; border-radius:4px; font-weight:600;">${p.category}</span></td>
      <td style="font-weight:700;">$${p.price.toFixed(2)}</td>
      <td>
        <span style="font-weight:700; color:${p.stock < 15 ? 'var(--danger)' : 'var(--success)'};">
          ${p.stock} units ${p.stock < 15 ? '⚠️' : ''}
        </span>
      </td>
      <td><span style="font-size:0.8rem; color:var(--text-muted);">${p.badge || 'None'}</span></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-outline" style="padding:4px 8px; font-size:0.75rem;" onclick="openEditProductModal('${p._id}')" title="Edit">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-outline" style="padding:4px 8px; font-size:0.75rem; color:var(--danger); border-color:#fecaca;" onclick="deleteAdminProduct('${p._id}')" title="Delete">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// 3. Load Orders Table
async function loadAdminOrders(status = 'all') {
  const table = document.getElementById('admin-orders-table');
  if (!table) return;

  try {
    const res = await api.admin.getOrders(status === 'all' ? '' : status);
    allAdminOrders = res.orders || [];
    renderAdminOrdersTable(allAdminOrders);
  } catch (err) {
    table.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--danger);">Failed to load orders</td></tr>`;
  }
}

function renderAdminOrdersTable(orders) {
  const table = document.getElementById('admin-orders-table');
  if (!table) return;

  if (orders.length === 0) {
    table.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--text-muted);">No orders found matching filter</td></tr>`;
    return;
  }

  table.innerHTML = orders.map(o => `
    <tr>
      <td style="font-family:monospace; font-weight:800; color:var(--primary);">${o.orderNumber}</td>
      <td>
        <strong>${o.shippingAddress.fullName}</strong>
        <div style="font-size:0.75rem; color:var(--text-muted);">${o.user.email}</div>
      </td>
      <td>${new Date(o.createdAt).toLocaleDateString()}</td>
      <td style="font-weight:700;">$${o.totalAmount.toFixed(2)}</td>
      <td>
        <select onchange="updateOrderStatus('${o._id}', this.value)" style="padding:4px 8px; border-radius:6px; border:1px solid var(--border); font-size:0.8rem; font-weight:700; background:white; outline:none;">
          <option value="Processing" ${o.orderStatus === 'Processing' ? 'selected' : ''}>Processing</option>
          <option value="Confirmed" ${o.orderStatus === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
          <option value="Shipped" ${o.orderStatus === 'Shipped' ? 'selected' : ''}>Shipped</option>
          <option value="Delivered" ${o.orderStatus === 'Delivered' ? 'selected' : ''}>Delivered</option>
          <option value="Cancelled" ${o.orderStatus === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
        </select>
      </td>
      <td><span style="font-size:0.8rem; text-transform:uppercase; font-weight:700;">${o.paymentMethod}</span></td>
      <td>
        <button class="btn btn-outline" style="padding:4px 10px; font-size:0.75rem;" onclick="openOrderInvoiceModal('${o._id}')">
          <i class="fa-solid fa-receipt"></i> Details
        </button>
      </td>
    </tr>
  `).join('');
}

async function updateOrderStatus(id, newStatus) {
  try {
    await api.admin.updateOrderStatus(id, newStatus);
    showToast(`Order status updated to "${newStatus}"`, 'success');
    loadAdminStats();
  } catch (err) {
    showToast('Failed to update status: ' + err.message, 'error');
  }
}

// 4. Load Customers Table
async function loadAdminCustomers() {
  const table = document.getElementById('admin-customers-table');
  if (!table) return;

  try {
    const res = await api.admin.getCustomers();
    const customers = res.customers || [];

    table.innerHTML = customers.map(c => `
      <tr>
        <td style="font-weight:700; color:var(--dark);">${c.name}</td>
        <td>${c.email}</td>
        <td>${c.phone || 'N/A'}</td>
        <td>${c.createdAt ? new Date(c.createdAt).toLocaleDateString() : 'Active'}</td>
        <td><span style="background:#ecfdf5; color:#059669; padding:2px 8px; border-radius:10px; font-size:0.75rem; font-weight:700;">Active Customer</span></td>
      </tr>
    `).join('');
  } catch (err) {
    table.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--danger);">Failed to load customers</td></tr>`;
  }
}

// Product Management (Create / Edit / Delete)
function openAddProductModal() {
  document.getElementById('product-modal-title').textContent = 'Add New Product';
  document.getElementById('prod-form-id').value = '';
  document.getElementById('admin-product-form').reset();
  document.getElementById('admin-product-modal').classList.add('active');
}

function openEditProductModal(id) {
  const p = allAdminProducts.find(item => item._id === id);
  if (!p) return;

  document.getElementById('product-modal-title').textContent = 'Edit Product';
  document.getElementById('prod-form-id').value = p._id;
  document.getElementById('prod-form-name').value = p.name;
  document.getElementById('prod-form-category').value = p.category;
  document.getElementById('prod-form-price').value = p.price;
  document.getElementById('prod-form-orig-price').value = p.originalPrice || '';
  document.getElementById('prod-form-stock').value = p.stock;
  document.getElementById('prod-form-badge').value = p.badge || '';
  document.getElementById('prod-form-image').value = p.images && p.images[0] ? p.images[0] : '';
  document.getElementById('prod-form-desc').value = p.description;

  document.getElementById('admin-product-modal').classList.add('active');
}

function closeAdminProductModal() {
  document.getElementById('admin-product-modal').classList.remove('active');
}

async function handleProductFormSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('prod-form-id').value;
  const name = document.getElementById('prod-form-name').value.trim();
  const category = document.getElementById('prod-form-category').value;
  const price = parseFloat(document.getElementById('prod-form-price').value);
  const origPrice = document.getElementById('prod-form-orig-price').value ? parseFloat(document.getElementById('prod-form-orig-price').value) : price;
  const stock = parseInt(document.getElementById('prod-form-stock').value, 10);
  const badge = document.getElementById('prod-form-badge').value.trim();
  const imageUrl = document.getElementById('prod-form-image').value.trim();
  const desc = document.getElementById('prod-form-desc').value.trim();

  const payload = {
    name,
    category,
    price,
    originalPrice: origPrice,
    stock,
    badge,
    images: [imageUrl || 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'],
    description: desc
  };

  try {
    if (id) {
      await api.products.update(id, payload);
      showToast(`Product "${name}" updated successfully!`, 'success');
    } else {
      await api.products.create(payload);
      showToast(`Product "${name}" created successfully!`, 'success');
    }

    closeAdminProductModal();
    loadAdminProducts();
    loadAdminStats();
  } catch (err) {
    showToast(err.message || 'Operation failed', 'error');
  }
}

async function deleteAdminProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    try {
      await api.products.delete(id);
      showToast('Product deleted successfully', 'info');
      loadAdminProducts();
      loadAdminStats();
    } catch (err) {
      showToast('Failed to delete: ' + err.message, 'error');
    }
  }
}

// Tab navigation
function switchAdminTab(tabName, btn) {
  currentAdminTab = tabName;
  document.querySelectorAll('.admin-tab-pane').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.admin-nav-item').forEach(el => el.classList.remove('active'));

  const pane = document.getElementById(`admin-pane-${tabName}`);
  if (pane) pane.style.display = 'block';
  if (btn) btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  initAdminDashboard();

  const prodForm = document.getElementById('admin-product-form');
  if (prodForm) prodForm.addEventListener('submit', handleProductFormSubmit);
});
