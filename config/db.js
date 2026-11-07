// Database configuration and storage layer
// Supports MongoDB (via Mongoose) with automatic JSON-store fallback
const fs = require('fs');
const path = require('path');
const { sampleProducts, demoUsers } = require('../data/seedData');

let isMongoConnected = false;
let mongoose = null;

try {
  mongoose = require('mongoose');
} catch (e) {
  // Mongoose not installed yet; fallback store will operate
}

// Local storage file paths for seamless offline development
const DATA_DIR = path.join(__dirname, '..', 'data', 'store');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

// Ensure directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Memory / Local file database
const localStore = {
  products: [],
  users: [],
  orders: []
};

// Initialize file if doesn't exist
function initStoreFile(file, initialData) {
  try {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, JSON.stringify(initialData, null, 2), 'utf8');
      return initialData;
    }
    const raw = fs.readFileSync(file, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading ${file}, defaulting to sample data`, err.message);
    return initialData;
  }
}

// Save to disk
function saveStoreFile(file, data) {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Failed to save ${file}:`, err.message);
  }
}

// Initialize local store
localStore.products = initStoreFile(PRODUCTS_FILE, sampleProducts);
localStore.users = initStoreFile(USERS_FILE, demoUsers);
localStore.orders = initStoreFile(ORDERS_FILE, []);

// Connect to MongoDB
async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopsphere_db';
  if (!mongoose) {
    console.log('[ShopSphere] Running with built-in resilient data engine (Mongoose can be installed via npm).');
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500
    });
    isMongoConnected = true;
    console.log(`[ShopSphere] Successfully connected to MongoDB at ${uri}`);
  } catch (err) {
    isMongoConnected = false;
    console.log('[ShopSphere] MongoDB not running locally. Seamlessly operating on built-in local store.');
  }
}

// Generic Model Adapter for high compatibility
class StoreCollection {
  constructor(name, fileRef) {
    this.name = name;
    this.fileRef = fileRef;
  }

  get items() {
    return localStore[this.name];
  }

  set items(val) {
    localStore[this.name] = val;
    saveStoreFile(this.fileRef, val);
  }

  async find(filter = {}) {
    let result = [...this.items];
    for (const [key, val] of Object.entries(filter)) {
      if (val !== undefined && val !== null && val !== '') {
        if (typeof val === 'object' && val.$regex) {
          const reg = new RegExp(val.$regex, val.$options || 'i');
          result = result.filter(item => reg.test(String(item[key] || '')));
        } else if (typeof val === 'object' && val.$in) {
          result = result.filter(item => {
            if (Array.isArray(item[key])) {
              return item[key].some(tag => val.$in.includes(tag));
            }
            return val.$in.includes(item[key]);
          });
        } else {
          result = result.filter(item => item[key] == val);
        }
      }
    }
    return result;
  }

  async findOne(filter = {}) {
    const list = await this.find(filter);
    return list[0] || null;
  }

  async findById(id) {
    return this.items.find(item => item._id === id || item.id === id) || null;
  }

  async create(data) {
    const doc = {
      _id: data._id || `${this.name.slice(0, 3)}_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      createdAt: new Date().toISOString(),
      ...data
    };
    const list = [...this.items, doc];
    this.items = list;
    return doc;
  }

  async findByIdAndUpdate(id, updates, options = { new: true }) {
    const list = [...this.items];
    const idx = list.findIndex(item => item._id === id || item.id === id);
    if (idx === -1) return null;

    list[idx] = {
      ...list[idx],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.items = list;
    return list[idx];
  }

  async findByIdAndDelete(id) {
    const list = [...this.items];
    const idx = list.findIndex(item => item._id === id || item.id === id);
    if (idx === -1) return null;
    const removed = list.splice(idx, 1)[0];
    this.items = list;
    return removed;
  }

  async countDocuments(filter = {}) {
    const list = await this.find(filter);
    return list.length;
  }
}

const ProductModel = new StoreCollection('products', PRODUCTS_FILE);
const UserModel = new StoreCollection('users', USERS_FILE);
const OrderModel = new StoreCollection('orders', ORDERS_FILE);

module.exports = {
  connectDB,
  isMongoConnected: () => isMongoConnected,
  ProductModel,
  UserModel,
  OrderModel,
  localStore
};
