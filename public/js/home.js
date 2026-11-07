// ShopSphere - Homepage Script
// Populates dynamic sections: Categories, Trending, Deals, New Arrivals, Recommended

// Product Card HTML Template Generator
function createProductCardHTML(p) {
  const isWish = Wishlist.has(p._id);
  const discountBadge = p.discountPercent > 0 
    ? `<span class="badge-discount">-${p.discountPercent}%</span>` 
    : '';

  let sectionBadge = '';
  if (p.badge) {
    let badgeClass = 'badge-trending';
    if (p.badge.toLowerCase().includes('deal')) badgeClass = 'badge-deal';
    if (p.badge.toLowerCase().includes('new')) badgeClass = 'badge-new';
    sectionBadge = `<span class="badge-tag ${badgeClass}">${p.badge}</span>`;
  }

  const firstImg = p.images && p.images[0] ? p.images[0] : 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80';

  return `
    <div class="product-card" id="card-${p._id}">
      <div class="product-thumb">
        ${sectionBadge}
        ${discountBadge}
        <a href="/product-detail.html?id=${p._id}">
          <img src="${firstImg}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80'">
        </a>
        <div class="quick-actions">
          <button class="quick-btn ${isWish ? 'active-wishlist' : ''}" data-wishlist-id="${p._id}" onclick="Wishlist.toggle(${JSON.stringify(p).replace(/"/g, '&quot;')})" title="Add to Wishlist">
            <i class="${isWish ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}" style="${isWish ? 'color:#ef4444;' : ''}"></i>
          </button>
          <button class="quick-btn" onclick="openQuickView('${p._id}')" title="Quick View">
            <i class="fa-regular fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <a href="/product-detail.html?id=${p._id}" class="product-title" title="${p.name}">${p.name}</a>
        <div class="product-rating">
          <div class="rating-stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}</div>
          <span class="review-count">(${p.reviewCount})</span>
        </div>
        <div class="product-price-row">
          <span class="current-price">$${p.price.toFixed(2)}</span>
          ${p.originalPrice > p.price ? `<span class="original-price">$${p.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <button class="add-cart-btn" onclick="Cart.addItem(${JSON.stringify(p).replace(/"/g, '&quot;')}, 1)">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

// Countdown timer for Today's Best Deals
function startDealsCountdown() {
  const timerEl = document.getElementById('deals-countdown');
  if (!timerEl) return;

  // 14 hours countdown target
  let totalSeconds = 14 * 3600 + 45 * 60 + 20;

  setInterval(() => {
    if (totalSeconds <= 0) {
      timerEl.textContent = '00:00:00';
      return;
    }
    totalSeconds--;
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    timerEl.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

// Load Home Sections
async function initHomePage() {
  startDealsCountdown();

  try {
    // 1. Load Categories
    const catRes = await api.products.getCategories();
    const categoriesContainer = document.getElementById('categories-container');
    if (categoriesContainer && catRes.categories) {
      categoriesContainer.innerHTML = catRes.categories.map(cat => `
        <div class="category-card" onclick="window.location.href='/products.html?category=${encodeURIComponent(cat.id)}'">
          <div class="category-card-icon">
            <i class="fa-solid ${cat.icon || 'fa-tag'}"></i>
          </div>
          <h3>${cat.name}</h3>
          <span>${cat.itemCount} Products</span>
        </div>
      `).join('');
    }

    // 2. Load Trending Products
    const trendingRes = await api.products.getAll({ tag: 'trending', limit: 4 });
    const trendingGrid = document.getElementById('trending-products-grid');
    if (trendingGrid && trendingRes.products) {
      trendingGrid.innerHTML = trendingRes.products.map(p => createProductCardHTML(p)).join('');
    }

    // 3. Load Today's Deals
    const dealsRes = await api.products.getAll({ isDeal: 'true', limit: 4 });
    const dealsGrid = document.getElementById('deals-products-grid');
    if (dealsGrid && dealsRes.products) {
      dealsGrid.innerHTML = dealsRes.products.map(p => createProductCardHTML(p)).join('');
    }

    // 4. Load New Arrivals
    const newRes = await api.products.getAll({ tag: 'new', limit: 4 });
    const newGrid = document.getElementById('new-arrivals-grid');
    if (newGrid && newRes.products) {
      newGrid.innerHTML = newRes.products.map(p => createProductCardHTML(p)).join('');
    }

    // 5. Load Recommended Products
    const recRes = await api.products.getAll({ tag: 'recommended', limit: 4 });
    const recGrid = document.getElementById('recommended-products-grid');
    if (recGrid && recRes.products) {
      recGrid.innerHTML = recRes.products.map(p => createProductCardHTML(p)).join('');
    }

    Wishlist.updateHeartIcons();
  } catch (err) {
    console.error('Error loading homepage data:', err);
  }
}

document.addEventListener('DOMContentLoaded', initHomePage);
