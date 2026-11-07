// ShopSphere - Orders History Script

async function initOrdersPage() {
  const container = document.getElementById('orders-list-container');
  const authPrompt = document.getElementById('orders-auth-prompt');
  if (!container) return;

  if (!Auth.isLoggedIn()) {
    if (authPrompt) authPrompt.style.display = 'block';
    container.style.display = 'none';
    return;
  }

  if (authPrompt) authPrompt.style.display = 'none';
  container.style.display = 'block';

  container.innerHTML = `
    <div style="text-align: center; padding: 60px 20px;">
      <i class="fa-solid fa-spinner fa-spin" style="font-size: 2.5rem; color: var(--primary);"></i>
      <p style="margin-top: 14px; color: var(--text-muted);">Fetching your orders...</p>
    </div>
  `;

  try {
    const res = await api.orders.getMyOrders();
    const orders = res.orders || [];

    if (orders.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 80px 20px; background: white; border-radius: var(--radius-lg); border: 1px solid var(--border);">
          <i class="fa-solid fa-box-open" style="font-size: 3.5rem; color: #cbd5e1; margin-bottom: 16px;"></i>
          <h3 style="color: var(--dark); margin-bottom: 8px;">No orders found yet</h3>
          <p style="color: var(--text-muted); margin-bottom: 24px;">You haven't placed any orders yet. Discover our latest tech collections!</p>
          <a href="/products.html" class="btn btn-brand">Start Shopping</a>
        </div>
      `;
      return;
    }

    container.innerHTML = orders.map(order => createOrderCardHTML(order)).join('');
  } catch (err) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--danger); background: white; border-radius: var(--radius-lg); border: 1px solid var(--border);">
        <p>Failed to load orders: ${err.message}</p>
        <button class="btn btn-brand" onclick="initOrdersPage()" style="margin-top: 14px;">Try Again</button>
      </div>
    `;
  }
}

function createOrderCardHTML(order) {
  const statusColors = {
    Processing: { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe' },
    Confirmed: { bg: '#f5f3ff', text: '#7c3aed', border: '#ddd6fe' },
    Shipped: { bg: '#fef3c7', text: '#d97706', border: '#fde68a' },
    Delivered: { bg: '#ecfdf5', text: '#059669', border: '#a7f3d0' },
    Cancelled: { bg: '#fef2f2', text: '#dc2626', border: '#fecaca' }
  };

  const st = statusColors[order.orderStatus] || statusColors.Processing;
  const dateFormatted = new Date(order.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Tracking steps progress calculation
  const steps = ['Processing', 'Confirmed', 'Shipped', 'Delivered'];
  const currentStepIdx = steps.indexOf(order.orderStatus);

  return `
    <div class="order-card" style="background:#ffffff; border:1px solid var(--border); border-radius:var(--radius-lg); padding:24px; margin-bottom:24px; box-shadow:var(--shadow-sm);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px; border-bottom:1px solid var(--border); padding-bottom:16px; margin-bottom:20px;">
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Order ID</span>
          <div style="font-family:monospace; font-size:1.15rem; font-weight:800; color:var(--dark);">${order.orderNumber}</div>
          <span style="font-size:0.8rem; color:var(--text-light);">Placed on ${dateFormatted}</span>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="background:${st.bg}; color:${st.text}; border:1px solid ${st.border}; padding:6px 14px; border-radius:var(--radius-full); font-size:0.85rem; font-weight:700;">
            <i class="fa-solid fa-circle-dot" style="font-size:0.7rem; margin-right:4px;"></i> ${order.orderStatus}
          </span>
          <button class="btn btn-outline" style="padding:6px 14px; font-size:0.85rem; color:var(--dark); border-color:var(--border);" onclick="openOrderInvoiceModal('${order._id}')">
            <i class="fa-solid fa-receipt"></i> Invoice
          </button>
        </div>
      </div>

      <!-- Tracking Stepper -->
      ${order.orderStatus !== 'Cancelled' ? `
        <div style="margin-bottom:24px; background:#f8fafc; border-radius:var(--radius-md); padding:16px 20px;">
          <div style="display:flex; justify-content:space-between; position:relative;">
            ${steps.map((step, idx) => {
              const isDone = idx <= currentStepIdx;
              const isCurrent = idx === currentStepIdx;
              return `
                <div style="text-align:center; flex:1; position:relative; z-index:2;">
                  <div style="width:28px; height:28px; border-radius:50%; background:${isDone ? 'var(--primary)' : '#e2e8f0'}; color:${isDone ? 'white' : 'var(--text-light)'}; display:flex; align-items:center; justify-content:center; margin:0 auto 6px; font-size:0.75rem; font-weight:700;">
                    ${isDone ? '<i class="fa-solid fa-check"></i>' : idx + 1}
                  </div>
                  <div style="font-size:0.78rem; font-weight:${isCurrent ? '800' : '600'}; color:${isCurrent ? 'var(--primary)' : 'var(--text-muted)'};">${step}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Items List -->
      <div style="margin-bottom:18px;">
        ${order.items.map(item => `
          <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 0; border-bottom:1px dashed #f1f5f9;">
            <div style="display:flex; align-items:center; gap:14px;">
              <img src="${item.image}" alt="${item.name}" style="width:52px; height:52px; border-radius:var(--radius-sm); object-fit:cover; background:#f1f5f9;">
              <div>
                <a href="/product-detail.html?id=${item.productId}" style="font-weight:700; color:var(--dark); font-size:0.95rem;">${item.name}</a>
                <div style="font-size:0.8rem; color:var(--text-light);">Qty: ${item.quantity} &times; $${item.price.toFixed(2)}</div>
              </div>
            </div>
            <div style="font-weight:700; color:var(--dark);">$${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        `).join('')}
      </div>

      <!-- Order Footer -->
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; padding-top:12px;">
        <div style="font-size:0.85rem; color:var(--text-muted);">
          <span>Shipping to: <strong>${order.shippingAddress.fullName}</strong> (${order.shippingAddress.city}, ${order.shippingAddress.postalCode})</span>
          ${order.estimatedDelivery ? ` &bull; <span>Delivery: <strong>${order.estimatedDelivery}</strong></span>` : ''}
        </div>
        <div style="display:flex; align-items:center; gap:14px;">
          <span style="font-size:1.1rem; font-weight:800; color:var(--dark);">Total: $${order.totalAmount.toFixed(2)}</span>
          <button class="btn btn-brand" style="padding:6px 14px; font-size:0.85rem;" onclick="reorderItems(${JSON.stringify(order.items).replace(/"/g, '&quot;')})">
            <i class="fa-solid fa-rotate-right"></i> Buy Again
          </button>
        </div>
      </div>
    </div>
  `;
}

function reorderItems(items) {
  items.forEach(i => {
    Cart.addItem({
      _id: i.productId,
      name: i.name,
      price: i.price,
      images: [i.image]
    }, i.quantity);
  });
  showToast('Items added back to your cart!', 'success');
  Cart.toggleDrawer(true);
}

// Order Invoice Modal
async function openOrderInvoiceModal(orderId) {
  try {
    const res = await api.orders.getById(orderId);
    const o = res.order;

    let modal = document.getElementById('order-invoice-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'order-invoice-modal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-container" style="max-width: 650px;" id="printable-invoice">
        <button class="modal-close" onclick="document.getElementById('order-invoice-modal').classList.remove('active')">&times;</button>
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid var(--border); padding-bottom:18px; margin-bottom:20px;">
          <div>
            <h2 style="font-size:1.6rem; font-weight:800; color:var(--primary); margin-bottom:4px;">ShopSphere</h2>
            <p style="font-size:0.8rem; color:var(--text-muted);">Official Tax Invoice &amp; Receipt</p>
          </div>
          <div style="text-align:right;">
            <div style="font-family:monospace; font-weight:800; font-size:1.1rem;">${o.orderNumber}</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">${new Date(o.createdAt).toLocaleDateString()}</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px; font-size:0.85rem;">
          <div>
            <strong style="color:var(--dark); display:block; margin-bottom:4px;">Billed &amp; Shipped To:</strong>
            <div>${o.shippingAddress.fullName}</div>
            <div>${o.shippingAddress.addressLine}</div>
            <div>${o.shippingAddress.city}, ${o.shippingAddress.state} ${o.shippingAddress.postalCode}</div>
            <div>${o.shippingAddress.country}</div>
          </div>
          <div style="text-align:right;">
            <strong style="color:var(--dark); display:block; margin-bottom:4px;">Payment Info:</strong>
            <div>Method: <span style="text-transform:uppercase;">${o.paymentMethod}</span></div>
            <div>Payment Status: <strong style="color:var(--success);">${o.paymentStatus}</strong></div>
            <div>Order Status: <strong>${o.orderStatus}</strong></div>
          </div>
        </div>

        <table style="width:100%; border-collapse:collapse; margin-bottom:20px; font-size:0.85rem;">
          <thead>
            <tr style="background:#f8fafc; border-bottom:1px solid var(--border);">
              <th style="text-align:left; padding:8px;">Item</th>
              <th style="text-align:center; padding:8px;">Qty</th>
              <th style="text-align:right; padding:8px;">Price</th>
              <th style="text-align:right; padding:8px;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${o.items.map(i => `
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:10px 8px;">${i.name}</td>
                <td style="text-align:center; padding:10px 8px;">${i.quantity}</td>
                <td style="text-align:right; padding:10px 8px;">$${i.price.toFixed(2)}</td>
                <td style="text-align:right; padding:10px 8px; font-weight:700;">$${(i.price * i.quantity).toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="display:flex; justify-content:flex-end; margin-bottom:24px;">
          <div style="width:240px; font-size:0.85rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
              <span>Subtotal:</span>
              <strong>$${o.subtotal.toFixed(2)}</strong>
            </div>
            ${o.discount > 0 ? `
              <div style="display:flex; justify-content:space-between; margin-bottom:6px; color:var(--success);">
                <span>Discount:</span>
                <strong>-$${o.discount.toFixed(2)}</strong>
              </div>
            ` : ''}
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
              <span>Shipping:</span>
              <span>${o.shippingCost === 0 ? 'FREE' : `$${o.shippingCost.toFixed(2)}`}</span>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
              <span>Estimated Tax:</span>
              <span>$${o.tax.toFixed(2)}</span>
            </div>
            <div style="display:flex; justify-content:space-between; border-top:2px solid var(--border); padding-top:8px; font-size:1.05rem; font-weight:800; color:var(--dark);">
              <span>Grand Total:</span>
              <span>$${o.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:10px;">
          <button class="btn btn-outline" style="color:var(--dark); border-color:var(--border);" onclick="window.print()">
            <i class="fa-solid fa-print"></i> Print Invoice
          </button>
          <button class="btn btn-brand" onclick="document.getElementById('order-invoice-modal').classList.remove('active')">
            Close
          </button>
        </div>
      </div>
    `;

    modal.classList.add('active');
  } catch (err) {
    showToast('Failed to load invoice', 'error');
  }
}

document.addEventListener('DOMContentLoaded', initOrdersPage);
