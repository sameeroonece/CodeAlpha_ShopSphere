// ShopSphere - Cart Page Script

let appliedCoupon = null;
let selectedShipping = 'standard';

function initCartPage() {
  renderCartPage();
}

function renderCartPage() {
  const itemsContainer = document.getElementById('cart-page-items');
  const emptyState = document.getElementById('cart-empty-state');
  const cartContent = document.getElementById('cart-page-content');
  if (!itemsContainer) return;

  const items = Cart.getItems();

  if (items.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (cartContent) cartContent.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (cartContent) cartContent.style.display = 'grid';

  itemsContainer.innerHTML = items.map(item => `
    <tr class="cart-table-row">
      <td style="display:flex; align-items:center; gap:16px; padding:18px 0;">
        <img src="${item.image}" alt="${item.name}" style="width:75px; height:75px; object-fit:cover; border-radius:var(--radius-sm); background:#f1f5f9;">
        <div>
          <a href="/product-detail.html?id=${item.id}" style="font-weight:700; color:var(--dark); display:block; margin-bottom:4px;">${item.name}</a>
          <span style="font-size:0.8rem; color:var(--text-light); text-transform:uppercase;">${item.category || 'Product'}</span>
        </div>
      </td>
      <td style="font-weight:700;">$${item.price.toFixed(2)}</td>
      <td>
        <div class="qty-stepper">
          <button class="qty-btn" onclick="updateCartItemQty('${item.id}', ${item.quantity - 1})">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartItemQty('${item.id}', ${item.quantity + 1})">+</button>
        </div>
      </td>
      <td style="font-weight:800; color:var(--primary);">$${(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <button onclick="removeCartItem('${item.id}')" style="background:transparent; border:none; color:var(--danger); cursor:pointer; font-size:1.1rem;" title="Remove Item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  `).join('');

  calculateOrderSummary();
}

function updateCartItemQty(id, newQty) {
  Cart.updateQuantity(id, newQty);
  renderCartPage();
}

function removeCartItem(id) {
  Cart.removeItem(id);
  renderCartPage();
}

function calculateOrderSummary() {
  const subtotal = Cart.getSubtotal();
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountRow = document.getElementById('cart-discount-row');
  const discountVal = document.getElementById('cart-discount-val');
  const shippingVal = document.getElementById('cart-shipping-val');
  const taxVal = document.getElementById('cart-tax-val');
  const totalVal = document.getElementById('cart-grand-total');

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  // Discount
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discountAmount = parseFloat(((subtotal * appliedCoupon.discountPercent) / 100).toFixed(2));
    } else if (appliedCoupon.flatDiscount) {
      discountAmount = Math.min(appliedCoupon.flatDiscount, subtotal);
    }
    if (discountRow && discountVal) {
      discountRow.style.display = 'flex';
      discountVal.textContent = `-$${discountAmount.toFixed(2)}`;
    }
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  // Shipping
  let shippingCost = 0;
  if (appliedCoupon && appliedCoupon.freeShipping) {
    shippingCost = 0;
  } else if (selectedShipping === 'express') {
    shippingCost = 14.99;
  } else if (subtotal >= 99) {
    shippingCost = 0;
  } else {
    shippingCost = 5.99;
  }

  if (shippingVal) {
    shippingVal.textContent = shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`;
  }

  // Tax (7%)
  const taxable = Math.max(0, subtotal - discountAmount);
  const tax = parseFloat((taxable * 0.07).toFixed(2));
  if (taxVal) taxVal.textContent = `$${tax.toFixed(2)}`;

  // Grand Total
  const grandTotal = parseFloat((taxable + tax + shippingCost).toFixed(2));
  if (totalVal) totalVal.textContent = `$${grandTotal.toFixed(2)}`;
}

// Apply Coupon
async function handleApplyCoupon(e) {
  e.preventDefault();
  const input = document.getElementById('cart-coupon-input');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast('Please enter a coupon code', 'warning');
    return;
  }

  try {
    const res = await api.orders.validateCoupon(code, Cart.getSubtotal());
    appliedCoupon = res;
    sessionStorage.setItem('shopsphere_coupon', JSON.stringify(res));

    showToast(`Coupon "${code}" applied: ${res.description}!`, 'success');

    const couponStatus = document.getElementById('coupon-applied-status');
    if (couponStatus) {
      couponStatus.innerHTML = `
        <div style="background:#ecfdf5; border:1px solid #a7f3d0; color:#065f46; padding:8px 12px; border-radius:var(--radius-sm); font-size:0.85rem; display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
          <span><strong>${code}</strong> applied (${res.description})</span>
          <button onclick="removeCoupon()" style="background:transparent; border:none; cursor:pointer; color:#065f46; font-size:1rem;">&times;</button>
        </div>
      `;
    }

    calculateOrderSummary();
  } catch (err) {
    showToast(err.message || 'Invalid coupon code', 'error');
  }
}

function removeCoupon() {
  appliedCoupon = null;
  sessionStorage.removeItem('shopsphere_coupon');
  const couponStatus = document.getElementById('coupon-applied-status');
  if (couponStatus) couponStatus.innerHTML = '';
  const input = document.getElementById('cart-coupon-input');
  if (input) input.value = '';
  calculateOrderSummary();
  showToast('Coupon removed', 'info');
}

// Shipping method change
function handleShippingChange(e) {
  selectedShipping = e.target.value;
  calculateOrderSummary();
}

document.addEventListener('DOMContentLoaded', () => {
  initCartPage();

  const couponForm = document.getElementById('cart-coupon-form');
  if (couponForm) couponForm.addEventListener('submit', handleApplyCoupon);

  document.querySelectorAll('input[name="shipping_method"]').forEach(radio => {
    radio.addEventListener('change', handleShippingChange);
  });
});
