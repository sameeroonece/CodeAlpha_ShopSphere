# ShopSphere – Smart Shopping Store
### 💼 CodeAlpha Internship Task 1: Simple E-commerce Store
**Repository Name:** `CodeAlpha_ShopSphere`

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-Framework-lightgrey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![HTML5 & CSS3](https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JS-blue)](https://developer.mozilla.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 Project Overview
**ShopSphere – Smart Shopping Store** is a full-stack, responsive, and feature-complete e-commerce web platform engineered for **CodeAlpha Full-Stack Development Internship Task 1**.

The platform is designed with a modern user experience, glassmorphic UI elements, interactive micro-animations, comprehensive catalog filtering, dynamic cart and checkout wizards, real-time order tracking, and an administrative dashboard for inventory and order fulfillment management.

---

## 🚀 Key Features

### 1. 🔐 User Registration & Authentication
- Secure user registration and login with input validation.
- Password hashing with **Bcrypt** and stateless token management with **JWT**.
- Role-based access control (`customer` vs `admin`).
- Dynamic header profile menu with instant sign-out.
- **1-Click Demo Logins** on the login page for quick evaluator access.

### 2. 🛍️ Product Listings & Categories (100 Products Catalog)
- Extensive catalog of **100 premium realistic products** evenly distributed across:
  - **Electronics & Audio:** 20 items (Headphones, Smartwatches, Smartphones, Action Cams, Wireless Speakers, DACs)
  - **Computers & Laptops:** 20 items (High-performance Laptops, 4K Displays, Ergonomic Mice, Keyboards, NVMe SSDs, Hubs)
  - **Gaming & Esports:** 20 items (Mechanical Keyboards, 165Hz/240Hz Monitors, VR Headsets, Flight Joysticks, Controllers)
  - **Fashion & Lifestyle:** 20 items (Leather Jackets, Chronograph Watches, Sneakers, Duffle Bags, Polarized Aviators)
  - **Home & Modern Living:** 20 items (Robot Vacuums, Espresso Machines, Standing Desks, Air Purifiers, Smart Lighting)
- Dynamic category pills with live inventory counts and multi-attribute filters.

### 3. 🔍 Product Search & Multi-Attribute Filters
- Instant search with debounced typing by keyword in product titles and descriptions.
- Dynamic **Price Range Slider** ($0 – $1,500) with live price indicator.
- **Customer Rating Filter** (4.5★, 4.0★, 3.5★).
- **Sorting Options**: Featured First, Price: Low to High, Price: High to Low, Highest Customer Rating, Newest Arrivals.
- Dynamic pagination controls.

### 4. 📄 Product Details Page (`product-detail.html`)
- Interactive multi-image gallery with thumbnail switcher and zoom hover effect.
- Real-time stock status indicator (*In Stock*, *Low Stock Warning*, *Out of Stock*).
- Star rating breakdown with customer review count.
- Quantity selector with increment/decrement steppers.
- Direct **"Buy Now"** button (bypasses to checkout).
- Tabbed interface: *Technical Specifications*, *Verified Customer Reviews* (with interactive review submission), and *Shipping & Returns Policy*.
- **Related Products** carousel recommendation.

### 5. 🛒 Shopping Cart System
- **Dual Cart Interface**: Slide-over **Cart Drawer** accessible on any page + Dedicated **Cart Page** (`cart.html`).
- Increment, decrement, and item removal with reactive price recalculation.
- Empty cart state with quick "Start Shopping" call-to-action.

### 6. ❤️ Wishlist Management (`wishlist.html`)
- One-click heart toggle on product cards and detail pages.
- Persistent saved items with real-time header count badges.
- Quick **"Move to Cart"** and **"Remove"** operations.

### 7. 💰 Quantity & Total Price Calculation
- Automatic subtotal, shipping cost calculation (Free standard shipping on orders over $99; Express priority $14.99).
- Estimated sales tax calculation (7%).
- **Promo Coupon Engine**:
  - `ALPHA10` — 10% instant discount for CodeAlpha community.
  - `SAVE20` — 20% off on orders over $200.
  - `FREESHIP` — 100% Free shipping.
  - `SMART50` — Flat $50 off on orders over $300.

### 8. 💳 Checkout & Order Processing (`checkout.html`)
- Multi-step checkout wizard with pre-filled customer details.
- Multiple payment options:
  - **Credit / Debit Card** with live interactive card preview widget (updates card number, cardholder name, expiry MM/YY as you type).
  - **Cash on Delivery (COD)**.
  - **PayPal Express**.
- Real-time stock deduction upon order placement.
- Celebratory order confirmation modal with generated Order ID, summary, and email notification simulation.

### 9. 📦 Order History & Real-Time Tracking (`orders.html`)
- View past placed orders with tracking progress stepper: `Processing` ➔ `Confirmed` ➔ `Shipped` ➔ `Delivered`.
- **Tax Invoice Modal**: Generates a clean printable/downloadable receipt with complete itemized billing breakdown.
- **"Buy Again"** button to re-add past ordered items to the cart in 1 click.

### 10. 👑 Admin Dashboard (`admin.html`)
- **KPI Metrics**: Real-time Total Revenue, Orders Count, Active Products, and Customer Count.
- **Inventory Management**:
  - Search and filter all store products.
  - Add new products modal with image URL preview and price fields.
  - Edit existing product details.
  - Delete products with confirmation.
  - Low stock warning badges (⚠️ Stock < 15 units).
- **Order Management**:
  - Filter orders by status.
  - **Instant Status Updater** dropdown directly in table row (`Processing` ➔ `Confirmed` ➔ `Shipped` ➔ `Delivered` ➔ `Cancelled`).
  - View full invoice for any customer order.
- **Customer Roster**: View registered customer profiles, emails, phone numbers, and join dates.

---

## 🎨 Unique Homepage Sections
- **Hero Banner Slider**: High-contrast modern typography with 3D floating rating card.
- **Trust Badges Ribbon**: Free Express Shipping, 2-Year Warranty, 256-Bit SSL, 24/7 Smart Support.
- **Today's Best Deals**: Limited-time discount showcase featuring a **Live Countdown Timer** (`HH:MM:SS`).
- **Trending Products**: Top customer picks with rating stars and quick action overlays.
- **Special Offers Strip**: CodeAlpha exclusive promotion banner with copyable coupon code.
- **New Arrivals & Recommended Products**: Tailored tech additions.
- **Customer Testimonials**: Social proof with verified purchaser reviews.
- **Newsletter Subscription**: VIP drops and flash sale updates.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Modern Glassmorphism & Responsive Grid), JavaScript (Vanilla ES6+), FontAwesome 6, Google Fonts |
| **Backend** | Node.js, Express.js RESTful API |
| **Database** | MongoDB with Mongoose (with built-in local JSON-store fallback) |
| **Authentication** | JWT (JSON Web Tokens), Bcrypt password hashing |
| **Architecture** | MVC (Models, Views/Public, Controllers, Routes, Middleware) |

---

## 📁 Project Directory Structure
```
CodeAlpha_ShopSphere/
├── package.json               # Dependencies & build scripts
├── .env.example               # Environment variables configuration template
├── .gitignore                 # Files excluded from git
├── README.md                  # Comprehensive project documentation
├── server.js                  # Main server entry point & HTTP dispatcher
├── config/
│   └── db.js                  # Database connection & model adapter
├── models/
│   ├── User.js                # User Mongoose Schema
│   ├── Product.js             # Product Mongoose Schema
│   └── Order.js               # Order Mongoose Schema
├── middleware/
│   └── auth.js                # JWT verification & Admin authorization middleware
├── controllers/
│   ├── authController.js      # Register, Login, Profile endpoints
│   ├── productController.js   # Product filtering, search, catalog CRUD
│   ├── orderController.js     # Checkout processing, coupons, order history
│   └── adminController.js     # Dashboard stats, status updater, customer list
├── routes/
│   ├── authRoutes.js          # Authentication routing
│   ├── productRoutes.js       # Product routing
│   ├── orderRoutes.js         # Orders routing
│   └── adminRoutes.js         # Admin dashboard routing
├── data/
│   ├── seedData.js            # Sample catalog of 30+ products & demo accounts
│   ├── seed.js                # Database seeder runner
│   └── store/                 # Local data persistence files
└── public/
    ├── css/
    │   └── style.css          # Design system & responsive styles
    ├── js/
    │   ├── api.js             # Client API service
    │   ├── main.js            # Global state (Cart, Wishlist, Auth header, Toasts)
    │   ├── home.js            # Homepage section renderers & deal countdown
    │   ├── products.js        # Catalog search, filter pills, price slider, pagination
    │   ├── product-detail.js  # Gallery switcher, tabs, specs, reviews
    │   ├── cart.js            # Cart calculations & promo validation
    │   ├── checkout.js        # Checkout wizard & interactive credit card
    │   ├── orders.js          # Order tracking timeline & invoice generator
    │   ├── wishlist.js        # Wishlist manager
    │   ├── auth.js            # Login/Register handlers & demo logins
    │   └── admin.js           # Admin KPI analytics & inventory CRUD
    ├── index.html             # Homepage
    ├── products.html          # Product catalog
    ├── product-detail.html    # Product details
    ├── cart.html              # Shopping cart page
    ├── checkout.html          # Checkout page
    ├── orders.html            # Order history page
    ├── wishlist.html          # Saved items page
    ├── login.html             # Sign In page
    ├── register.html          # Account Registration page
    └── admin.html             # Admin Dashboard
```

---

## ⚡ Getting Started & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [MongoDB](https://www.mongodb.com/) (Optional: The application automatically runs with a built-in local store if MongoDB is not locally running)

### 1. Clone or Open Project
```bash
cd CodeAlpha_ShopSphere
```

### 2. Environment Variables Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(Default settings work out-of-the-box on `http://localhost:5000`)*

### 3. Install Dependencies
```bash
npm install
```

### 4. Seed Sample Products (Optional)
```bash
npm run seed
```

### 5. Start the Server
```bash
npm start
```
Open your browser and navigate to:
```
http://localhost:5000
```

---

## 🔑 Demo Credentials

| Role | Email | Password | Permissions |
| :--- | :--- | :--- | :--- |
| **👑 Admin** | `admin@shopsphere.com` | `admin123` | Full access to Admin Dashboard, Product CRUD, Order Status Changer, Customer Roster |
| **👤 Customer** | `customer@shopsphere.com` | `password123` | Browse catalog, Add to Cart/Wishlist, Checkout, View Order History & Invoices |

*(You can also use the 1-click demo buttons on `login.html`)*

---

## 📡 RESTful API Endpoints

### 🔐 Authentication
- `POST /api/auth/register` — Create a new customer account
- `POST /api/auth/login` — Sign in and receive JWT token
- `GET /api/auth/profile` — Get authenticated user details
- `PUT /api/auth/profile` — Update address and personal profile

### 📦 Products
- `GET /api/products` — Get products with search, category, price, rating & sorting query params
- `GET /api/products/categories` — Get category list with live item counts
- `GET /api/products/:id` — Get product details with related recommendations
- `POST /api/products` — Admin: Add a new product
- `PUT /api/products/:id` — Admin: Update product details
- `DELETE /api/products/:id` — Admin: Remove a product

### 🛒 Orders & Checkout
- `POST /api/orders/validate-coupon` — Verify promo coupon codes (`ALPHA10`, `SAVE20`, etc.)
- `POST /api/orders` — Process checkout and create a new order
- `GET /api/orders/my-orders` — View authenticated user's order history
- `GET /api/orders/:id` — View specific order invoice

### 👑 Admin Management
- `GET /api/admin/stats` — Revenue, order counts, product counts, and customer KPI analytics
- `GET /api/admin/orders` — View all orders with optional status filter
- `PUT /api/admin/orders/:id/status` — Update order fulfillment status
- `GET /api/admin/customers` — View registered customer list

---

## 🏆 CodeAlpha Submission Checklist
- [x] Full-Stack E-commerce Application with HTML, CSS, JavaScript, Node.js, Express.js & MongoDB
- [x] Product Listings and Categories
- [x] Product Search and Filters
- [x] Product Details Page
- [x] Shopping Cart with Slide-over Drawer & Dedicated Page
- [x] Add to Wishlist
- [x] Quantity and Total Price Calculation with Tax & Shipping
- [x] Checkout and Order Processing
- [x] Order History with Real-Time Tracking & Tax Invoice
- [x] Admin Dashboard (Inventory CRUD & Order Management)
- [x] Unique Sections (Trending Products, Today's Deals with Countdown, New Arrivals, Recommended, Special Offers)
- [x] Complete README.md and .env.example
- [x] Tested and verified without errors

---

## 👨‍💻 Author & Acknowledgements
- **Developer:** CodeAlpha Full-Stack Web Development Intern
- **Company:** [CodeAlpha](https://www.codealpha.tech)
- **Task:** Task 1 – Simple E-Commerce Store
