// ShopSphere - Product Details Page Script

let currentProduct = null;
let selectedQuantity = 1;

async function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  if (!productId) {
    window.location.href = '/products.html';
    return;
  }

  try {
    const res = await api.products.getById(productId);
    currentProduct = res.product;
    renderProductDetails(currentProduct);

    if (res.relatedProducts && res.relatedProducts.length > 0) {
      renderRelatedProducts(res.relatedProducts);
    }
  } catch (err) {
    document.getElementById('product-detail-container').innerHTML = `
      <div style="text-align: center; padding: 80px 20px;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: var(--danger); margin-bottom: 16px;"></i>
        <h2>Product Not Found</h2>
        <p style="color: var(--text-muted); margin: 10px 0 24px;">The product you are looking for may have been removed or does not exist.</p>
        <a href="/products.html" class="btn btn-brand">Browse All Products</a>
      </div>
    `;
  }
}

function renderProductDetails(p) {
  document.title = `${p.name} | ShopSphere`;

  // Breadcrumbs
  const breadcrumbCategory = document.getElementById('breadcrumb-category');
  const breadcrumbProduct = document.getElementById('breadcrumb-product');
  if (breadcrumbCategory) breadcrumbCategory.textContent = p.category;
  if (breadcrumbProduct) breadcrumbProduct.textContent = p.name;

  // Main Image & Gallery
  const mainImg = document.getElementById('main-gallery-image');
  const thumbsContainer = document.getElementById('gallery-thumbnails');
  const images = Array.isArray(p.images) && p.images.length > 0 
    ? p.images 
    : ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'];

  if (mainImg) mainImg.src = images[0];

  if (thumbsContainer) {
    thumbsContainer.innerHTML = images.map((img, i) => `
      <div class="thumb-box ${i === 0 ? 'active' : ''}" onclick="switchGalleryImage('${img}', this)">
        <img src="${img}" alt="${p.name}">
      </div>
    `).join('');
  }

  // Details
  document.getElementById('detail-category').textContent = p.category;
  document.getElementById('detail-title').textContent = p.name;
  document.getElementById('detail-stars').innerHTML = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
  document.getElementById('detail-reviews-count').textContent = `(${p.reviewCount} customer reviews)`;
  document.getElementById('detail-price').textContent = `$${p.price.toFixed(2)}`;

  if (p.originalPrice > p.price) {
    const origEl = document.getElementById('detail-original-price');
    if (origEl) {
      origEl.textContent = `$${p.originalPrice.toFixed(2)}`;
      origEl.style.display = 'inline-block';
    }
  }

  if (p.discountPercent > 0) {
    const discountEl = document.getElementById('detail-discount-badge');
    if (discountEl) {
      discountEl.textContent = `${p.discountPercent}% OFF`;
      discountEl.style.display = 'inline-block';
    }
  }

  // Stock status
  const stockEl = document.getElementById('detail-stock-status');
  if (stockEl) {
    if (p.stock > 10) {
      stockEl.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--success);"></i> In Stock (${p.stock} units)`;
      stockEl.style.color = 'var(--success)';
    } else if (p.stock > 0) {
      stockEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color:var(--warning);"></i> Only ${p.stock} left in stock - order soon`;
      stockEl.style.color = 'var(--warning)';
    } else {
      stockEl.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color:var(--danger);"></i> Out of Stock`;
      stockEl.style.color = 'var(--danger)';
    }
  }

  // Description & Features
  document.getElementById('detail-short-desc').textContent = p.description;

  const featuresList = document.getElementById('detail-features-list');
  if (featuresList && Array.isArray(p.features)) {
    featuresList.innerHTML = p.features.map(f => `
      <li><i class="fa-solid fa-check" style="color:var(--primary); margin-right:8px;"></i>${f}</li>
    `).join('');
  }

  // Specs Tab
  const specsTable = document.getElementById('tab-specs-table');
  if (specsTable && p.specs) {
    specsTable.innerHTML = Object.entries(p.specs).map(([key, val]) => `
      <tr>
        <td style="font-weight:700; width:35%;">${key}</td>
        <td>${val}</td>
      </tr>
    `).join('');
  }

  // Update Wishlist button
  updateDetailWishlistButton();
}

function switchGalleryImage(src, element) {
  const mainImg = document.getElementById('main-gallery-image');
  if (mainImg) mainImg.src = src;

  document.querySelectorAll('.thumb-box').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');
}

function changeQuantity(delta) {
  const input = document.getElementById('detail-quantity-input');
  if (!input || !currentProduct) return;

  let val = parseInt(input.value, 10) + delta;
  if (val < 1) val = 1;
  if (val > currentProduct.stock) val = currentProduct.stock;

  input.value = val;
  selectedQuantity = val;
}

function addCurrentToCart() {
  if (!currentProduct) return;
  Cart.addItem(currentProduct, selectedQuantity);
}

function buyNow() {
  if (!currentProduct) return;
  Cart.addItem(currentProduct, selectedQuantity);
  window.location.href = '/checkout.html';
}

function toggleDetailWishlist() {
  if (!currentProduct) return;
  Wishlist.toggle(currentProduct);
  updateDetailWishlistButton();
}

function updateDetailWishlistButton() {
  const btn = document.getElementById('detail-wishlist-btn');
  if (!btn || !currentProduct) return;

  const isWish = Wishlist.has(currentProduct._id);
  if (isWish) {
    btn.innerHTML = `<i class="fa-solid fa-heart" style="color:#ef4444;"></i> In Wishlist`;
    btn.classList.add('active-wishlist');
  } else {
    btn.innerHTML = `<i class="fa-regular fa-heart"></i> Add to Wishlist`;
    btn.classList.remove('active-wishlist');
  }
}

function renderRelatedProducts(products) {
  const container = document.getElementById('related-products-grid');
  if (!container) return;

  container.innerHTML = products.map(p => createProductCardHTML(p)).join('');
  Wishlist.updateHeartIcons();
}

// Tab Switching
function switchDetailTab(tabName, btnElement) {
  document.querySelectorAll('.detail-tab-pane').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

  const activePane = document.getElementById(`tab-pane-${tabName}`);
  if (activePane) activePane.style.display = 'block';
  if (btnElement) btnElement.classList.add('active');
}

// Submit review
function submitReview(e) {
  e.preventDefault();
  const name = document.getElementById('review-name').value;
  const comment = document.getElementById('review-comment').value;

  if (!name || !comment) {
    showToast('Please provide your name and review message.', 'warning');
    return;
  }

  showToast('Thank you! Your verified review has been submitted.', 'success');
  document.getElementById('review-comment').value = '';
}

document.addEventListener('DOMContentLoaded', initProductDetailPage);
