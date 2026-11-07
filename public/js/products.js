// ShopSphere - Products Catalog Page Script

let currentFilters = {
  category: 'All',
  search: '',
  minPrice: 0,
  maxPrice: 1500,
  rating: '',
  sort: 'featured',
  page: 1,
  limit: 12
};

// Parse URL Query Params
function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('category')) currentFilters.category = params.get('category');
  if (params.has('search')) currentFilters.search = params.get('search');
  if (params.has('sort')) currentFilters.sort = params.get('sort');
}

// Render Category Filter Pills
async function renderCategoryFilters() {
  const container = document.getElementById('catalog-category-list');
  if (!container) return;

  try {
    const res = await api.products.getCategories();
    const categories = [{ id: 'All', name: 'All Products', itemCount: '' }, ...res.categories];

    container.innerHTML = categories.map(cat => `
      <li class="filter-pill ${currentFilters.category.toLowerCase() === cat.id.toLowerCase() ? 'active' : ''}" 
          onclick="applyCategoryFilter('${cat.id}')">
        <span>${cat.name}</span>
        ${cat.itemCount ? `<span class="pill-count">${cat.itemCount}</span>` : ''}
      </li>
    `).join('');
  } catch (err) {
    console.error('Failed to load category filters:', err);
  }
}

function applyCategoryFilter(catId) {
  currentFilters.category = catId;
  currentFilters.page = 1;
  document.querySelectorAll('.filter-pill').forEach(el => {
    el.classList.toggle('active', el.textContent.includes(catId) || (catId === 'All' && el.textContent.includes('All')));
  });
  loadProducts();
}

// Fetch & Render Products
async function loadProducts() {
  const grid = document.getElementById('catalog-products-grid');
  const countLabel = document.getElementById('results-count');
  const paginationContainer = document.getElementById('pagination-container');
  if (!grid) return;

  grid.innerHTML = `
    <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
      <i class="fa-solid fa-spinner fa-spin" style="font-size: 2.5rem; color: var(--primary);"></i>
      <p style="margin-top: 14px; color: var(--text-muted); font-weight: 600;">Loading smart catalog...</p>
    </div>
  `;

  try {
    const query = {
      search: currentFilters.search,
      category: currentFilters.category === 'All' ? '' : currentFilters.category,
      minPrice: currentFilters.minPrice,
      maxPrice: currentFilters.maxPrice,
      rating: currentFilters.rating,
      sort: currentFilters.sort,
      page: currentFilters.page,
      limit: currentFilters.limit
    };

    const res = await api.products.getAll(query);

    if (countLabel) {
      countLabel.textContent = `Showing ${res.products.length} of ${res.totalCount} products`;
    }

    if (!res.products || res.products.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 3.5rem; color: #cbd5e1; margin-bottom: 16px;"></i>
          <h3 style="color: var(--dark); margin-bottom: 8px;">No matching products found</h3>
          <p style="color: var(--text-muted); margin-bottom: 24px;">Try loosening your filters or searching for different keywords.</p>
          <button class="btn btn-brand" onclick="resetAllFilters()">Clear All Filters</button>
        </div>
      `;
      if (paginationContainer) paginationContainer.innerHTML = '';
      return;
    }

    grid.innerHTML = res.products.map(p => createProductCardHTML(p)).join('');
    Wishlist.updateHeartIcons();

    // Render Pagination
    if (paginationContainer) {
      renderPagination(res.totalPages, res.currentPage, paginationContainer);
    }
  } catch (err) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--danger);">
        Failed to load products. Please check server connection.
      </div>
    `;
  }
}

function renderPagination(totalPages, currentPage, container) {
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let html = `<div style="display: flex; gap: 8px; justify-content: center; align-items: center; margin-top: 40px;">`;

  if (currentPage > 1) {
    html += `<button class="page-btn" onclick="goToPage(${currentPage - 1})">&laquo; Prev</button>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }

  if (currentPage < totalPages) {
    html += `<button class="page-btn" onclick="goToPage(${currentPage + 1})">Next &raquo;</button>`;
  }

  html += `</div>`;
  container.innerHTML = html;
}

function goToPage(page) {
  currentFilters.page = page;
  loadProducts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetAllFilters() {
  currentFilters = {
    category: 'All',
    search: '',
    minPrice: 0,
    maxPrice: 1500,
    rating: '',
    sort: 'featured',
    page: 1,
    limit: 12
  };

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';

  const priceSlider = document.getElementById('price-range-slider');
  const priceDisplay = document.getElementById('price-slider-value');
  if (priceSlider) priceSlider.value = 1500;
  if (priceDisplay) priceDisplay.textContent = '$1,500';

  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) sortSelect.value = 'featured';

  document.querySelectorAll('input[name="rating-filter"]').forEach(r => r.checked = false);

  renderCategoryFilters();
  loadProducts();
}

// Event Listeners Initialization
document.addEventListener('DOMContentLoaded', () => {
  parseUrlParams();
  renderCategoryFilters();

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    if (currentFilters.search) searchInput.value = currentFilters.search;
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentFilters.search = e.target.value.trim();
        currentFilters.page = 1;
        loadProducts();
      }, 350);
    });
  }

  const priceSlider = document.getElementById('price-range-slider');
  const priceDisplay = document.getElementById('price-slider-value');
  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      priceDisplay.textContent = `$${val}`;
      currentFilters.maxPrice = val;
      currentFilters.page = 1;
      loadProducts();
    });
  }

  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) {
    if (currentFilters.sort) sortSelect.value = currentFilters.sort;
    sortSelect.addEventListener('change', (e) => {
      currentFilters.sort = e.target.value;
      currentFilters.page = 1;
      loadProducts();
    });
  }

  document.querySelectorAll('input[name="rating-filter"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentFilters.rating = e.target.value;
      currentFilters.page = 1;
      loadProducts();
    });
  });

  loadProducts();
});
