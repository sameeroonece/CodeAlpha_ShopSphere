// Product Controller
const { ProductModel } = require('../config/db');
const { sampleCategories } = require('../data/seedData');

// Get all products with multi-attribute filtering & search
exports.getProducts = async (req, res) => {
  try {
    const {
      search,
      category,
      minPrice,
      maxPrice,
      rating,
      tag,
      isDeal,
      sort,
      page = 1,
      limit = 12
    } = req.query;

    let items = await ProductModel.find();

    // Text Search
    if (search && search.trim() !== '') {
      const q = search.trim().toLowerCase();
      items = items.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.category && p.category.toLowerCase().includes(q)) ||
          (p.subcategory && p.subcategory.toLowerCase().includes(q))
      );
    }

    // Category Filter
    if (category && category !== 'All' && category !== '') {
      items = items.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    // Price Filter
    if (minPrice !== undefined && minPrice !== '') {
      items = items.filter(p => p.price >= parseFloat(minPrice));
    }
    if (maxPrice !== undefined && maxPrice !== '') {
      items = items.filter(p => p.price <= parseFloat(maxPrice));
    }

    // Rating Filter
    if (rating !== undefined && rating !== '') {
      items = items.filter(p => p.rating >= parseFloat(rating));
    }

    // Tag / Section Filter (trending, deals, new, recommended)
    if (tag && tag !== '') {
      items = items.filter(p => Array.isArray(p.tags) && p.tags.includes(tag.toLowerCase()));
    }

    // Deals Filter
    if (isDeal === 'true') {
      items = items.filter(p => p.isDeal === true);
    }

    // Sorting
    if (sort === 'price-low') {
      items.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      items.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'newest') {
      items.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    } else {
      // Default: featured first
      items.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    // Total count after filters
    const totalCount = items.length;

    // Pagination
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 12;
    const startIndex = (pageNum - 1) * limitNum;
    const paginatedProducts = items.slice(startIndex, startIndex + limitNum);

    return res.json({
      success: true,
      totalCount,
      totalPages: Math.ceil(totalCount / limitNum),
      currentPage: pageNum,
      products: paginatedProducts
    });
  } catch (err) {
    console.error('getProducts error:', err);
    return res.status(500).json({ success: false, message: 'Failed to retrieve products.' });
  }
};

// Get single product details + related products
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    // Fetch up to 4 related products in same category
    const allProducts = await ProductModel.find();
    const relatedProducts = allProducts
      .filter(p => p._id !== id && p.category === product.category)
      .slice(0, 4);

    return res.json({
      success: true,
      product,
      relatedProducts
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to fetch product details.' });
  }
};

// Get categories list with counts
exports.getCategories = async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    const categoriesWithCount = sampleCategories.map(cat => {
      const count = allProducts.filter(p => p.category.toLowerCase() === cat.id.toLowerCase()).length;
      return {
        ...cat,
        itemCount: count || cat.itemCount
      };
    });

    return res.json({
      success: true,
      categories: categoriesWithCount
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to retrieve categories.' });
  }
};

// Create product (Admin)
exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      subcategory,
      price,
      originalPrice,
      stock,
      description,
      images,
      badge,
      tags
    } = req.body;

    if (!name || !category || !price) {
      return res.status(400).json({ success: false, message: 'Name, category, and price are required.' });
    }

    const priceNum = parseFloat(price);
    const origPriceNum = originalPrice ? parseFloat(originalPrice) : priceNum;
    const discount = origPriceNum > priceNum ? Math.round(((origPriceNum - priceNum) / origPriceNum) * 100) : 0;

    const newProduct = await ProductModel.create({
      name: name.trim(),
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category,
      subcategory: subcategory || 'General',
      price: priceNum,
      originalPrice: origPriceNum,
      discountPercent: discount,
      rating: 5.0,
      reviewCount: 1,
      stock: parseInt(stock, 10) || 10,
      images: Array.isArray(images) && images.length ? images : ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'],
      badge: badge || 'New',
      tags: Array.isArray(tags) ? tags : ['new'],
      isFeatured: false,
      isDeal: false,
      description: description || 'High quality premium product.',
      features: ['Premium craftsmanship', '1-year warranty', 'Fast dispatch'],
      specs: { Brand: 'ShopSphere Official', Origin: 'Global' }
    });

    return res.status(201).json({
      success: true,
      message: 'Product created successfully!',
      product: newProduct
    });
  } catch (err) {
    console.error('createProduct error:', err);
    return res.status(500).json({ success: false, message: 'Failed to create product.' });
  }
};

// Update product (Admin)
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.price) updates.price = parseFloat(updates.price);
    if (updates.originalPrice) updates.originalPrice = parseFloat(updates.originalPrice);
    if (updates.stock !== undefined) updates.stock = parseInt(updates.stock, 10);

    const updated = await ProductModel.findByIdAndUpdate(id, updates);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    return res.json({
      success: true,
      message: 'Product updated successfully!',
      product: updated
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to update product.' });
  }
};

// Delete product (Admin)
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ProductModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    return res.json({
      success: true,
      message: 'Product deleted successfully!',
      deletedId: id
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to delete product.' });
  }
};
