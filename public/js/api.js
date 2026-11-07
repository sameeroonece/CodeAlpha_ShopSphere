// ShopSphere API Client
const API_BASE = '/api';

const api = {
  // Helper for requests
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('shopsphere_token');
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const res = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'API request failed');
      }
      return data;
    } catch (err) {
      console.error(`API Error [${endpoint}]:`, err.message);
      throw err;
    }
  },

  // Authentication API
  auth: {
    async register(userData) {
      return api.request('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData)
      });
    },
    async login(credentials) {
      return api.request('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
    },
    async getProfile() {
      return api.request('/auth/profile');
    },
    async updateProfile(profileData) {
      return api.request('/auth/profile', {
        method: 'PUT',
        body: JSON.stringify(profileData)
      });
    }
  },

  // Products API
  products: {
    async getAll(params = {}) {
      const query = new URLSearchParams();
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '') {
          query.append(key, val);
        }
      });
      const queryString = query.toString() ? `?${query.toString()}` : '';
      return api.request(`/products${queryString}`);
    },
    async getById(id) {
      return api.request(`/products/${id}`);
    },
    async getCategories() {
      return api.request('/products/categories');
    },
    async create(productData) {
      return api.request('/products', {
        method: 'POST',
        body: JSON.stringify(productData)
      });
    },
    async update(id, productData) {
      return api.request(`/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(productData)
      });
    },
    async delete(id) {
      return api.request(`/products/${id}`, {
        method: 'DELETE'
      });
    }
  },

  // Orders API
  orders: {
    async create(orderData) {
      return api.request('/orders', {
        method: 'POST',
        body: JSON.stringify(orderData)
      });
    },
    async validateCoupon(code, subtotal) {
      return api.request('/orders/validate-coupon', {
        method: 'POST',
        body: JSON.stringify({ code, subtotal })
      });
    },
    async getMyOrders() {
      return api.request('/orders/my-orders');
    },
    async getById(id) {
      return api.request(`/orders/${id}`);
    }
  },

  // Admin Dashboard API
  admin: {
    async getStats() {
      return api.request('/admin/stats');
    },
    async getOrders(status) {
      const query = status ? `?status=${status}` : '';
      return api.request(`/admin/orders${query}`);
    },
    async updateOrderStatus(id, orderStatus, paymentStatus) {
      return api.request(`/admin/orders/${id}/status`, {
        method: 'PUT',
        body: JSON.stringify({ orderStatus, paymentStatus })
      });
    },
    async getCustomers() {
      return api.request('/admin/customers');
    }
  }
};
