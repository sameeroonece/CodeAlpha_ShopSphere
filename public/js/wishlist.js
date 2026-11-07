// ShopSphere - Wishlist Page Script

function initWishlistPage() {
  renderWishlistPage();
}

function renderWishlistPage() {
  const container = document.getElementById('wishlist-grid');
  const emptyState = document.getElementById('wishlist-empty-state');
  const headerCount = document.getElementById('wishlist-page-count');
  if (!container) return;

  const items = Wishlist.getItems();

  if (headerCount) {
    headerCount.textContent = `(${items.length} ${items.length === 1 ? 'item' : 'items'})`;
  }

  if (items.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    container.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  container.style.display = 'grid';

  container.innerHTML = items.map(item => `
    <div class="product-card" id="wishlist-item-${item.id}">
      <div class="product-thumb">
        <a href="/product-detail.html?id=${item.id}">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80'">
        </a>
        <button class="quick-btn active-wishlist" style="position:absolute; top:12px; right:12px;" onclick="removeFromWishlistPage('${item.id}')" title="Remove from wishlist">
          <i class="fa-solid fa-heart" style="color:#ef4444;"></i>
        </button>
      </div>
      <div class="product-info">
        <span class="product-category">${item.category || 'Product'}</span>
        <a href="/product-detail.html?id=${item.id}" class="product-title">${item.name}</a>
        <div class="product-price-row">
          <span class="current-price">$${item.price.toFixed(2)}</span>
          ${item.originalPrice > item.price ? `<span class="original-price">$${item.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button class="btn btn-brand" style="flex:1; padding:8px; font-size:0.85rem;" onclick="moveToCart('${item.id}')">
            <i class="fa-solid fa-cart-plus"></i> Move to Cart
          </button>
          <button class="btn btn-outline" style="padding:8px 12px; font-size:0.85rem; color:var(--danger); border-color:#fecaca;" onclick="removeFromWishlistPage('${item.id}')">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function moveToCart(id) {
  const items = Wishlist.getItems();
  const item = items.find(i => i.id === id);
  if (!item) return;

  Cart.addItem({
    _id: item.id,
    name: item.name,
    price: item.price,
    images: [item.image],
    stock: item.stock || 99
  }, 1);

  Wishlist.remove(id);
  renderWishlistPage();
}

function removeFromWishlistPage(id) {
  Wishlist.remove(id);
  renderWishlistPage();
}

function clearAllWishlist() {
  if (confirm('Are you sure you want to clear your entire wishlist?')) {
    localStorage.removeItem(Wishlist.KEY);
    Wishlist.updateBadges();
    renderWishlistPage();
    showToast('Wishlist cleared', 'info');
  }
}

document.addEventListener('DOMContentLoaded', initWishlistPage);
