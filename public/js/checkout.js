// ShopSphere - Checkout Page Script

let checkoutCoupon = null;
let selectedPaymentMethod = 'card';

function initCheckoutPage() {
  const items = Cart.getItems();
  if (items.length === 0) {
    showToast('Your cart is empty. Please add items before checking out.', 'warning');
    setTimeout(() => {
      window.location.href = '/products.html';
    }, 1500);
    return;
  }

  // Pre-fill user data if logged in
  const user = Auth.getUser();
  if (user) {
    const nameInput = document.getElementById('ship-name');
    const emailInput = document.getElementById('ship-email');
    const phoneInput = document.getElementById('ship-phone');
    if (nameInput) nameInput.value = user.name || '';
    if (emailInput) emailInput.value = user.email || '';
    if (phoneInput && user.phone) phoneInput.value = user.phone;

    if (user.addresses && user.addresses.length > 0) {
      const defAddr = user.addresses.find(a => a.isDefault) || user.addresses[0];
      const addrInput = document.getElementById('ship-address');
      const cityInput = document.getElementById('ship-city');
      const stateInput = document.getElementById('ship-state');
      const zipInput = document.getElementById('ship-zip');
      if (addrInput) addrInput.value = defAddr.addressLine || '';
      if (cityInput) cityInput.value = defAddr.city || '';
      if (stateInput) stateInput.value = defAddr.state || '';
      if (zipInput) zipInput.value = defAddr.postalCode || '';
    }
  }

  // Check saved coupon from cart page
  try {
    const saved = sessionStorage.getItem('shopsphere_coupon');
    if (saved) checkoutCoupon = JSON.parse(saved);
  } catch (e) {}

  renderCheckoutSummary();
  setupCardPreview();
}

function renderCheckoutSummary() {
  const items = Cart.getItems();
  const listEl = document.getElementById('checkout-items-list');
  const subtotal = Cart.getSubtotal();

  if (listEl) {
    listEl.innerHTML = items.map(item => `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; font-size:0.9rem;">
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="${item.image}" alt="${item.name}" style="width:44px; height:44px; border-radius:6px; object-fit:cover; background:#f1f5f9;">
          <div>
            <div style="font-weight:700; color:var(--dark); max-width:180px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.name}</div>
            <div style="color:var(--text-light); font-size:0.8rem;">Qty: ${item.quantity} &times; $${item.price.toFixed(2)}</div>
          </div>
        </div>
        <span style="font-weight:700; color:var(--dark);">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
  }

  // Calculate totals
  let discountAmount = 0;
  if (checkoutCoupon) {
    if (checkoutCoupon.discountPercent) {
      discountAmount = parseFloat(((subtotal * checkoutCoupon.discountPercent) / 100).toFixed(2));
    } else if (checkoutCoupon.flatDiscount) {
      discountAmount = Math.min(checkoutCoupon.flatDiscount, subtotal);
    }
  }

  const shippingCost = (checkoutCoupon && checkoutCoupon.freeShipping) || subtotal >= 99 ? 0 : 5.99;
  const taxable = Math.max(0, subtotal - discountAmount);
  const tax = parseFloat((taxable * 0.07).toFixed(2));
  const grandTotal = parseFloat((taxable + tax + shippingCost).toFixed(2));

  document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  if (discountAmount > 0) {
    document.getElementById('checkout-discount-row').style.display = 'flex';
    document.getElementById('checkout-discount').textContent = `-$${discountAmount.toFixed(2)}`;
  }
  document.getElementById('checkout-shipping').textContent = shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`;
  document.getElementById('checkout-tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('checkout-total').textContent = `$${grandTotal.toFixed(2)}`;
}

// Live interactive Credit Card Preview
function setupCardPreview() {
  const cardNum = document.getElementById('card-number-input');
  const cardHolder = document.getElementById('card-name-input');
  const cardExp = document.getElementById('card-expiry-input');

  const previewNum = document.getElementById('card-preview-number');
  const previewName = document.getElementById('card-preview-name');
  const previewExp = document.getElementById('card-preview-exp');

  if (cardNum && previewNum) {
    cardNum.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      let formatted = val.match(/.{1,4}/g)?.join(' ') || '•••• •••• •••• ••••';
      e.target.value = val.match(/.{1,4}/g)?.join(' ') || val;
      previewNum.textContent = formatted;
    });
  }

  if (cardHolder && previewName) {
    cardHolder.addEventListener('input', (e) => {
      previewName.textContent = e.target.value.toUpperCase() || 'YOUR NAME';
    });
  }

  if (cardExp && previewExp) {
    cardExp.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (val.length >= 2) {
        val = val.substring(0, 2) + '/' + val.substring(2);
      }
      e.target.value = val;
      previewExp.textContent = val || 'MM/YY';
    });
  }
}

function selectPaymentMethod(method) {
  selectedPaymentMethod = method;
  document.querySelectorAll('.payment-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.payment-pane').forEach(p => p.style.display = 'none');

  const activeTab = document.querySelector(`[data-payment="${method}"]`);
  const activePane = document.getElementById(`payment-pane-${method}`);
  if (activeTab) activeTab.classList.add('active');
  if (activePane) activePane.style.display = 'block';
}

// Handle Order Placement
async function handlePlaceOrder(e) {
  e.preventDefault();

  const name = document.getElementById('ship-name').value.trim();
  const email = document.getElementById('ship-email').value.trim();
  const address = document.getElementById('ship-address').value.trim();
  const city = document.getElementById('ship-city').value.trim();
  const state = document.getElementById('ship-state').value.trim();
  const zip = document.getElementById('ship-zip').value.trim();
  const country = document.getElementById('ship-country').value;
  const phone = document.getElementById('ship-phone').value.trim();

  if (!name || !email || !address || !city || !zip) {
    showToast('Please fill out all required shipping fields.', 'warning');
    return;
  }

  if (selectedPaymentMethod === 'card') {
    const cardNum = document.getElementById('card-number-input').value.replace(/\s+/g, '');
    const cardExp = document.getElementById('card-expiry-input').value.trim();
    const cardCvc = document.getElementById('card-cvc-input').value.trim();
    if (cardNum.length < 15 || !cardExp || !cardCvc) {
      showToast('Please provide valid card details.', 'warning');
      return;
    }
  }

  const placeBtn = document.getElementById('place-order-btn');
  if (placeBtn) {
    placeBtn.disabled = true;
    placeBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Order...`;
  }

  try {
    const items = Cart.getItems().map(i => ({
      productId: i.id,
      name: i.name,
      price: i.price,
      quantity: i.quantity,
      image: i.image
    }));

    const orderData = {
      items,
      shippingAddress: {
        fullName: name,
        email,
        addressLine: address,
        city,
        state,
        postalCode: zip,
        country,
        phone
      },
      paymentMethod: selectedPaymentMethod,
      couponCode: checkoutCoupon ? checkoutCoupon.code : ''
    };

    const res = await api.orders.create(orderData);

    // Clear cart and stored coupon
    Cart.clear();
    sessionStorage.removeItem('shopsphere_coupon');

    // Show Celebration Confirmation Modal
    showOrderSuccessModal(res.order);
  } catch (err) {
    showToast(err.message || 'Failed to place order', 'error');
    if (placeBtn) {
      placeBtn.disabled = false;
      placeBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Complete Order`;
    }
  }
}

function showOrderSuccessModal(order) {
  let modal = document.getElementById('order-success-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'order-success-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-container" style="max-width: 580px; text-align: center; padding: 40px 30px;">
      <div style="width: 76px; height: 76px; background: #ecfdf5; color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 20px;">
        <i class="fa-solid fa-check"></i>
      </div>
      <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--dark); margin-bottom: 8px;">Order Placed Successfully!</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px;">
        Thank you for shopping with <strong>ShopSphere</strong>. We've sent an order confirmation email to <strong>${order.shippingAddress.email || order.user.email}</strong>.
      </p>

      <div style="background: #f8fafc; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 20px; text-align: left; margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem;">
          <span style="color: var(--text-muted);">Order Number:</span>
          <strong style="color: var(--primary); font-family: monospace; font-size: 1.05rem;">${order.orderNumber}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem;">
          <span style="color: var(--text-muted);">Total Amount:</span>
          <strong>$${order.totalAmount.toFixed(2)}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.9rem;">
          <span style="color: var(--text-muted);">Payment Method:</span>
          <span style="text-transform: uppercase; font-weight: 700;">${order.paymentMethod}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
          <span style="color: var(--text-muted);">Estimated Delivery:</span>
          <strong style="color: var(--success);">${order.estimatedDelivery}</strong>
        </div>
      </div>

      <div style="display: flex; gap: 14px; justify-content: center;">
        <a href="/orders.html" class="btn btn-brand" style="flex: 1;">
          <i class="fa-solid fa-box-open"></i> View My Orders
        </a>
        <a href="/index.html" class="btn btn-outline" style="flex: 1; color: var(--dark); border-color: var(--border);">
          Continue Shopping
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  initCheckoutPage();
  const form = document.getElementById('checkout-form');
  if (form) form.addEventListener('submit', handlePlaceOrder);
});
