// ShopSphere Main App Script (Global Utilities, Cart, Wishlist & Header Logic)

// -------------------------------------------------------------
// Toast Notification Engine
// -------------------------------------------------------------
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconMap = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    warning: 'fa-triangle-exclamation',
    info: 'fa-circle-info'
  };

  toast.innerHTML = `
    <i class="fa-solid ${iconMap[type] || 'fa-bell'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// -------------------------------------------------------------
// Cart Manager (localStorage based reactive store)
// -------------------------------------------------------------
const Cart = {
  KEY: 'shopsphere_cart',

  getItems() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || [];
    } catch (e) {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadges();
    this.renderDrawer();
  },

  addItem(product, quantity = 1) {
    const items = this.getItems();
    const existingIndex = items.findIndex(item => item.id === (product._id || product.id));

    if (existingIndex > -1) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({
        id: product._id || product.id,
        name: product.name,
        price: product.price,
        image: Array.isArray(product.images) ? product.images[0] : product.image,
        category: product.category,
        stock: product.stock || 99,
        quantity: quantity
      });
    }

    this.saveItems(items);
    showToast(`Added "${product.name}" to your cart!`, 'success');
  },

  updateQuantity(id, qty) {
    let items = this.getItems();
    const item = items.find(i => i.id === id);
    if (!item) return;

    if (qty <= 0) {
      this.removeItem(id);
      return;
    }

    item.quantity = qty;
    this.saveItems(items);
  },

  removeItem(id) {
    let items = this.getItems();
    items = items.filter(i => i.id !== id);
    this.saveItems(items);
    showToast('Item removed from cart', 'info');
  },

  clear() {
    localStorage.removeItem(this.KEY);
    this.updateBadges();
    this.renderDrawer();
  },

  getTotalCount() {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  },

  getSubtotal() {
    return this.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  updateBadges() {
    const count = this.getTotalCount();
    document.querySelectorAll('.cart-count-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  renderDrawer() {
    const drawerBody = document.getElementById('cart-drawer-items');
    const drawerSubtotal = document.getElementById('cart-drawer-subtotal');
    if (!drawerBody) return;

    const items = this.getItems();

    if (items.length === 0) {
      drawerBody.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
          <i class="fa-solid fa-cart-shopping" style="font-size: 3rem; margin-bottom: 12px; color: #cbd5e1;"></i>
          <h4 style="color: var(--dark); margin-bottom: 6px;">Your cart is empty</h4>
          <p style="font-size: 0.85rem; margin-bottom: 20px;">Discover our trending products and smart tech deals.</p>
          <a href="/products.html" class="btn btn-brand" style="font-size: 0.85rem; padding: 8px 18px;" onclick="Cart.toggleDrawer(false)">Start Shopping</a>
        </div>
      `;
      if (drawerSubtotal) drawerSubtotal.textContent = '$0.00';
      return;
    }

    drawerBody.innerHTML = items.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=200&q=80'">
        <div class="cart-item-details">
          <a href="/product-detail.html?id=${item.id}" class="cart-item-title">${item.name}</a>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} <span style="font-size:0.75rem; color:var(--text-light); font-weight:normal;">($${item.price.toFixed(2)} each)</span></div>
          <div class="cart-item-actions">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="Cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="Cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
            <button class="cart-item-remove" onclick="Cart.removeItem('${item.id}')" title="Remove item">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    if (drawerSubtotal) {
      drawerSubtotal.textContent = `$${this.getSubtotal().toFixed(2)}`;
    }
  },

  toggleDrawer(open) {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    if (!drawer || !overlay) return;

    if (open) {
      drawer.classList.add('active');
      overlay.classList.add('active');
      this.renderDrawer();
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
};

// -------------------------------------------------------------
// Wishlist Manager (localStorage based)
// -------------------------------------------------------------
const Wishlist = {
  KEY: 'shopsphere_wishlist',

  getItems() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || [];
    } catch (e) {
      return [];
    }
  },

  has(id) {
    return this.getItems().some(item => item.id === id);
  },

  toggle(product) {
    let items = this.getItems();
    const id = product._id || product.id;
    const exists = items.some(item => item.id === id);

    if (exists) {
      items = items.filter(item => item.id !== id);
      localStorage.setItem(this.KEY, JSON.stringify(items));
      showToast(`Removed "${product.name}" from Wishlist`, 'info');
    } else {
      items.push({
        id: id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: Array.isArray(product.images) ? product.images[0] : product.image,
        category: product.category,
        rating: product.rating,
        stock: product.stock
      });
      localStorage.setItem(this.KEY, JSON.stringify(items));
      showToast(`Added "${product.name}" to Wishlist!`, 'success');
    }

    this.updateBadges();
    this.updateHeartIcons();
    return !exists;
  },

  remove(id) {
    let items = this.getItems().filter(item => item.id !== id);
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadges();
    this.updateHeartIcons();
    showToast('Item removed from Wishlist', 'info');
  },

  updateBadges() {
    const count = this.getItems().length;
    document.querySelectorAll('.wishlist-count-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  updateHeartIcons() {
    const wishlistIds = new Set(this.getItems().map(i => i.id));
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = btn.getAttribute('data-wishlist-id');
      if (wishlistIds.has(id)) {
        btn.classList.add('active-wishlist');
        btn.innerHTML = '<i class="fa-solid fa-heart" style="color:#ef4444;"></i>';
      } else {
        btn.classList.remove('active-wishlist');
        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      }
    });
  }
};

// -------------------------------------------------------------
// Auth & Navigation Utilities
// -------------------------------------------------------------
const Auth = {
  getUser() {
    try {
      return JSON.parse(localStorage.getItem('shopsphere_user')) || null;
    } catch (e) {
      return null;
    }
  },

  getToken() {
    return localStorage.getItem('shopsphere_token') || null;
  },

  isLoggedIn() {
    return !!this.getToken() && !!this.getUser();
  },

  isAdmin() {
    const user = this.getUser();
    return user && user.role === 'admin';
  },

  logout() {
    localStorage.removeItem('shopsphere_token');
    localStorage.removeItem('shopsphere_user');
    showToast('Signed out successfully', 'info');
    setTimeout(() => {
      window.location.href = '/index.html';
    }, 400);
  },

  renderNavUser() {
    const user = this.getUser();
    const navUserContainer = document.getElementById('nav-user-container');
    if (!navUserContainer) return;

    if (user) {
      navUserContainer.innerHTML = `
        <div style="position: relative;">
          <button class="user-menu-btn" id="user-menu-toggle" onclick="Auth.toggleUserMenu()">
            <img src="${user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'}" class="user-avatar" alt="${user.name}">
            <span>${user.name.split(' ')[0]}</span>
            <i class="fa-solid fa-chevron-down" style="font-size:0.75rem;"></i>
          </button>
          <div class="user-dropdown" id="user-dropdown-menu">
            <div style="padding: 10px 18px; border-bottom: 1px solid var(--border);">
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--dark);">${user.name}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${user.email}</div>
              ${user.role === 'admin' ? '<span style="display:inline-block; margin-top:4px; font-size:0.7rem; background:#4338ca; color:white; padding:2px 8px; border-radius:10px; font-weight:700;">Admin Mode</span>' : ''}
            </div>
            ${user.role === 'admin' ? `
              <a href="/admin.html" class="dropdown-item" style="color:var(--primary); font-weight:700;">
                <i class="fa-solid fa-gauge-high"></i> Admin Dashboard
              </a>
            ` : ''}
            <a href="/orders.html" class="dropdown-item">
              <i class="fa-solid fa-box-open"></i> My Orders
            </a>
            <a href="/wishlist.html" class="dropdown-item">
              <i class="fa-solid fa-heart"></i> My Wishlist
            </a>
            <div class="dropdown-divider"></div>
            <button onclick="Auth.logout()" class="dropdown-item" style="width:100%; border:none; background:transparent; cursor:pointer; color:var(--danger);">
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
            </button>
          </div>
        </div>
      `;
    } else {
      navUserContainer.innerHTML = `
        <a href="/login.html" class="btn btn-brand" style="padding: 8px 18px; font-size: 0.875rem;">
          <i class="fa-regular fa-user"></i> Sign In
        </a>
      `;
    }
  },

  toggleUserMenu() {
    const menu = document.getElementById('user-dropdown-menu');
    if (menu) {
      menu.classList.toggle('show');
    }
  }
};

// -------------------------------------------------------------
// Quick View Modal
// -------------------------------------------------------------
async function openQuickView(productId) {
  try {
    const res = await api.products.getById(productId);
    const p = res.product;

    let modal = document.getElementById('quickview-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'quickview-modal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    const firstImg = p.images && p.images[0] ? p.images[0] : 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80';

    modal.innerHTML = `
      <div class="modal-container" style="max-width: 820px;">
        <button class="modal-close" onclick="closeQuickView()">&times;</button>
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 30px;">
          <div>
            <img src="${firstImg}" alt="${p.name}" id="qv-main-img" style="width: 100%; height: 320px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 12px;">
            <div style="display: flex; gap: 8px; overflow-x: auto;">
              ${(p.images || [firstImg]).map((img, i) => `
                <img src="${img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid ${i === 0 ? 'var(--primary)' : 'transparent'};" onclick="document.getElementById('qv-main-img').src='${img}'">
              `).join('')}
            </div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--primary); font-weight: 700;">${p.category}</span>
            <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--dark); margin: 6px 0 10px;">${p.name}</h2>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
              <div class="rating-stars">
                ${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}
              </div>
              <span style="font-size: 0.85rem; color: var(--text-muted);">(${p.reviewCount} customer reviews)</span>
            </div>
            <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 16px;">
              <span style="font-size: 1.6rem; font-weight: 800; color: var(--dark);">$${p.price.toFixed(2)}</span>
              ${p.originalPrice > p.price ? `<span style="font-size: 1rem; color: var(--text-light); text-decoration: line-through;">$${p.originalPrice.toFixed(2)}</span>` : ''}
              ${p.discountPercent > 0 ? `<span style="background:#fef2f2; color:#ef4444; font-size:0.8rem; font-weight:800; padding:2px 8px; border-radius:4px;">${p.discountPercent}% OFF</span>` : ''}
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 20px;">${p.description}</p>
            
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px;">
              <div class="qty-stepper" style="padding: 4px;">
                <button class="qty-btn" onclick="let q=document.getElementById('qv-qty'); if(q.value>1)q.value--">-</button>
                <input type="number" id="qv-qty" value="1" min="1" max="${p.stock}" style="width: 40px; text-align: center; border: none; font-weight: 700; outline: none;">
                <button class="qty-btn" onclick="let q=document.getElementById('qv-qty'); if(q.value<${p.stock})q.value++">+</button>
              </div>
              <button class="btn btn-brand" style="flex: 1;" onclick="Cart.addItem(${JSON.stringify(p).replace(/"/g, '&quot;')}, parseInt(document.getElementById('qv-qty').value, 10)); closeQuickView();">
                <i class="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>
            </div>

            <div style="display: flex; gap: 16px; font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--border); padding-top: 14px;">
              <span><i class="fa-solid fa-shield-halved" style="color:var(--primary);"></i> 1-Year Guarantee</span>
              <span><i class="fa-solid fa-truck" style="color:var(--success);"></i> Free Shipping > $99</span>
              <a href="/product-detail.html?id=${p._id}" style="color:var(--primary); font-weight:700; margin-left:auto;">Full Details &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  } catch (err) {
    showToast('Failed to load product preview', 'error');
  }
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadges();
  Cart.renderDrawer();
  Wishlist.updateBadges();
  Wishlist.updateHeartIcons();
  Auth.renderNavUser();

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    const userMenu = document.getElementById('user-dropdown-menu');
    const toggle = document.getElementById('user-menu-toggle');
    if (userMenu && toggle && !toggle.contains(e.target) && !userMenu.contains(e.target)) {
      userMenu.classList.remove('show');
    }
  });

  // Global search form handling
  const searchForm = document.getElementById('global-search-form');
  const searchInput = document.getElementById('global-search-input');
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `/products.html?search=${encodeURIComponent(query)}`;
      }
    });
  }
});
