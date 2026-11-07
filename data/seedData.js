// ShopSphere - Sample Seed Data
// Includes realistic products across 6 major categories with high-res images and demo users

const demoUsers = [
  {
    _id: "usr_admin_001",
    name: "Alex Morgan (Admin)",
    email: "admin@shopsphere.com",
    password: "admin123", // Will be hashed or matched
    role: "admin",
    phone: "+1 (555) 019-2834",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    addresses: [
      {
        fullName: "Alex Morgan",
        addressLine: "742 Evergreen Terrace",
        city: "Springfield",
        state: "Oregon",
        postalCode: "97477",
        country: "United States",
        isDefault: true
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    _id: "usr_cust_002",
    name: "Sarah Jenkins",
    email: "customer@shopsphere.com",
    password: "password123",
    role: "customer",
    phone: "+1 (555) 432-8765",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    addresses: [
      {
        fullName: "Sarah Jenkins",
        addressLine: "124 Conch Street",
        city: "Seattle",
        state: "Washington",
        postalCode: "98101",
        country: "United States",
        isDefault: true
      }
    ],
    createdAt: new Date().toISOString()
  }
];

const sampleProducts = [
  {
    "_id": "prod_001",
    "name": "AuraSound ANC Wireless Headphones",
    "slug": "aurasound-anc-wireless-headphones",
    "category": "Electronics",
    "subcategory": "Audio",
    "price": 199.99,
    "originalPrice": 279.99,
    "discountPercent": 29,
    "rating": 4.4,
    "reviewCount": 62,
    "stock": 17,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 7,
    "description": "Engineered for excellence and peak performance. The AuraSound ANC Wireless Headphones combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_002",
    "name": "Apex Pulse Pro Smartwatch",
    "slug": "apex-pulse-pro-smartwatch",
    "category": "Electronics",
    "subcategory": "Wearables",
    "price": 149.5,
    "originalPrice": 220,
    "discountPercent": 32,
    "rating": 4.5,
    "reviewCount": 79,
    "stock": 26,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 8,
    "description": "Engineered for excellence and peak performance. The Apex Pulse Pro Smartwatch combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Wearables",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_003",
    "name": "Quantum Pods True Wireless Earbuds",
    "slug": "quantum-pods-true-wireless-earbuds",
    "category": "Electronics",
    "subcategory": "Audio",
    "price": 69.99,
    "originalPrice": 99.99,
    "discountPercent": 30,
    "rating": 4.6,
    "reviewCount": 96,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 9,
    "description": "Engineered for excellence and peak performance. The Quantum Pods True Wireless Earbuds combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_004",
    "name": "NeoPhone 15 Pro Max 256GB",
    "slug": "neophone-15-pro-max-256gb",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 1099,
    "originalPrice": 1199,
    "discountPercent": 8,
    "rating": 4.7,
    "reviewCount": 113,
    "stock": 44,
    "images": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "new"
    ],
    "isFeatured": false,
    "isDeal": false,
    "dealEndsInHours": 10,
    "description": "Engineered for excellence and peak performance. The NeoPhone 15 Pro Max 256GB combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Smartphones",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_005",
    "name": "SoundNova 360 Waterproof Speaker",
    "slug": "soundnova-360-waterproof-speaker",
    "category": "Electronics",
    "subcategory": "Audio",
    "price": 64.99,
    "originalPrice": 89.99,
    "discountPercent": 28,
    "rating": 4.8,
    "reviewCount": 130,
    "stock": 53,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 11,
    "description": "Engineered for excellence and peak performance. The SoundNova 360 Waterproof Speaker combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_006",
    "name": "HyperCharge 100W GaN Fast Charger",
    "slug": "hypercharge-100w-gan-fast-charger",
    "category": "Electronics",
    "subcategory": "Power & Cables",
    "price": 45.99,
    "originalPrice": 65,
    "discountPercent": 29,
    "rating": 4.9,
    "reviewCount": 147,
    "stock": 62,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 12,
    "description": "Engineered for excellence and peak performance. The HyperCharge 100W GaN Fast Charger combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Power & Cables",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_007",
    "name": "AeroTune Studio Monitor Headphones",
    "slug": "aerotune-studio-monitor-headphones",
    "category": "Electronics",
    "subcategory": "Audio",
    "price": 159,
    "originalPrice": 210,
    "discountPercent": 24,
    "rating": 4.3,
    "reviewCount": 164,
    "stock": 71,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 13,
    "description": "Engineered for excellence and peak performance. The AeroTune Studio Monitor Headphones combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_008",
    "name": "PulseFit Smart Fitness Tracker Band",
    "slug": "pulsefit-smart-fitness-tracker-band",
    "category": "Electronics",
    "subcategory": "Wearables",
    "price": 49.99,
    "originalPrice": 69.99,
    "discountPercent": 29,
    "rating": 4.4,
    "reviewCount": 181,
    "stock": 80,
    "images": [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 14,
    "description": "Engineered for excellence and peak performance. The PulseFit Smart Fitness Tracker Band combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Wearables",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_009",
    "name": "VibeBass Portable Bluetooth Speaker",
    "slug": "vibebass-portable-bluetooth-speaker",
    "category": "Electronics",
    "subcategory": "Audio",
    "price": 39.99,
    "originalPrice": 55,
    "discountPercent": 27,
    "rating": 4.5,
    "reviewCount": 198,
    "stock": 89,
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 15,
    "description": "Engineered for excellence and peak performance. The VibeBass Portable Bluetooth Speaker combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_010",
    "name": "OptiCam 4K Action Camera 60FPS",
    "slug": "opticam-4k-action-camera-60fps",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 229,
    "originalPrice": 299,
    "discountPercent": 23,
    "rating": 4.6,
    "reviewCount": 215,
    "stock": 13,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 16,
    "description": "Engineered for excellence and peak performance. The OptiCam 4K Action Camera 60FPS combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Cameras",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Low Stock Alert",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_011",
    "name": "Zenith Active Noise Cancelling Buds",
    "slug": "zenith-active-noise-cancelling-buds",
    "category": "Electronics",
    "subcategory": "Audio",
    "price": 89.99,
    "originalPrice": 129.99,
    "discountPercent": 31,
    "rating": 4.7,
    "reviewCount": 232,
    "stock": 22,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 17,
    "description": "Engineered for excellence and peak performance. The Zenith Active Noise Cancelling Buds combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_012",
    "name": "MagSafe 3-in-1 Wireless Charging Stand",
    "slug": "magsafe-3-in-1-wireless-charging-stand",
    "category": "Electronics",
    "subcategory": "Accessories",
    "price": 59.99,
    "originalPrice": 79.99,
    "discountPercent": 25,
    "rating": 4.8,
    "reviewCount": 249,
    "stock": 31,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "new",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 18,
    "description": "Engineered for excellence and peak performance. The MagSafe 3-in-1 Wireless Charging Stand combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_013",
    "name": "CinemaBeam Mini HD Pocket Projector",
    "slug": "cinemabeam-mini-hd-pocket-projector",
    "category": "Electronics",
    "subcategory": "Gadgets",
    "price": 279,
    "originalPrice": 350,
    "discountPercent": 20,
    "rating": 4.9,
    "reviewCount": 266,
    "stock": 40,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 19,
    "description": "Engineered for excellence and peak performance. The CinemaBeam Mini HD Pocket Projector combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Gadgets",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_014",
    "name": "NovaSound Dolby Atmos Soundbar",
    "slug": "novasound-dolby-atmos-soundbar",
    "category": "Electronics",
    "subcategory": "Audio",
    "price": 249.99,
    "originalPrice": 329.99,
    "discountPercent": 24,
    "rating": 4.3,
    "reviewCount": 283,
    "stock": 49,
    "images": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 20,
    "description": "Engineered for excellence and peak performance. The NovaSound Dolby Atmos Soundbar combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_015",
    "name": "TitanPower 20000mAh Ultra Powerbank",
    "slug": "titanpower-20000mah-ultra-powerbank",
    "category": "Electronics",
    "subcategory": "Power & Cables",
    "price": 42.5,
    "originalPrice": 59.99,
    "discountPercent": 29,
    "rating": 4.4,
    "reviewCount": 300,
    "stock": 58,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 21,
    "description": "Engineered for excellence and peak performance. The TitanPower 20000mAh Ultra Powerbank combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Power & Cables",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_016",
    "name": "TrueCapture Dual Lens Dashcam 4K",
    "slug": "truecapture-dual-lens-dashcam-4k",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 119,
    "originalPrice": 159,
    "discountPercent": 25,
    "rating": 4.5,
    "reviewCount": 317,
    "stock": 67,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 22,
    "description": "Engineered for excellence and peak performance. The TrueCapture Dual Lens Dashcam 4K combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Cameras",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_017",
    "name": "AudioPro Wireless Lavalier Microphone",
    "slug": "audiopro-wireless-lavalier-microphone",
    "category": "Electronics",
    "subcategory": "Audio",
    "price": 79.99,
    "originalPrice": 110,
    "discountPercent": 27,
    "rating": 4.6,
    "reviewCount": 334,
    "stock": 76,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 23,
    "description": "Engineered for excellence and peak performance. The AudioPro Wireless Lavalier Microphone combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_018",
    "name": "SmartTag Precision Bluetooth Trackers (4-Pack)",
    "slug": "smarttag-precision-bluetooth-trackers-4-pack-",
    "category": "Electronics",
    "subcategory": "Accessories",
    "price": 69,
    "originalPrice": 89,
    "discountPercent": 22,
    "rating": 4.7,
    "reviewCount": 351,
    "stock": 85,
    "images": [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 6,
    "description": "Engineered for excellence and peak performance. The SmartTag Precision Bluetooth Trackers (4-Pack) combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_019",
    "name": "RetroGlow Tube Amp Desktop Speaker",
    "slug": "retroglow-tube-amp-desktop-speaker",
    "category": "Electronics",
    "subcategory": "Audio",
    "price": 189.99,
    "originalPrice": 249.99,
    "discountPercent": 24,
    "rating": 4.8,
    "reviewCount": 368,
    "stock": 9,
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 7,
    "description": "Engineered for excellence and peak performance. The RetroGlow Tube Amp Desktop Speaker combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Low Stock Alert",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_020",
    "name": "VividView 10-inch Smart Digital Photo Frame",
    "slug": "vividview-10-inch-smart-digital-photo-frame",
    "category": "Electronics",
    "subcategory": "Gadgets",
    "price": 99,
    "originalPrice": 139,
    "discountPercent": 29,
    "rating": 4.9,
    "reviewCount": 385,
    "stock": 18,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 8,
    "description": "Engineered for excellence and peak performance. The VividView 10-inch Smart Digital Photo Frame combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Electronics",
      "Subcategory": "Gadgets",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_021",
    "name": "UltraBook Vision 16 M-Core",
    "slug": "ultrabook-vision-16-m-core",
    "category": "Computers",
    "subcategory": "Laptops",
    "price": 1199,
    "originalPrice": 1399,
    "discountPercent": 14,
    "rating": 4.3,
    "reviewCount": 402,
    "stock": 27,
    "images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 9,
    "description": "Engineered for excellence and peak performance. The UltraBook Vision 16 M-Core combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Laptops",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_022",
    "name": "ProBook Air Ultra 13.3-inch Retina",
    "slug": "probook-air-ultra-13-3-inch-retina",
    "category": "Computers",
    "subcategory": "Laptops",
    "price": 899,
    "originalPrice": 1049,
    "discountPercent": 14,
    "rating": 4.4,
    "reviewCount": 419,
    "stock": 36,
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending"
    ],
    "isFeatured": false,
    "isDeal": false,
    "dealEndsInHours": 10,
    "description": "Engineered for excellence and peak performance. The ProBook Air Ultra 13.3-inch Retina combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Laptops",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_023",
    "name": "ViewMaster 27-inch 4K HDR IPS Monitor",
    "slug": "viewmaster-27-inch-4k-hdr-ips-monitor",
    "category": "Computers",
    "subcategory": "Monitors",
    "price": 389,
    "originalPrice": 479,
    "discountPercent": 19,
    "rating": 4.5,
    "reviewCount": 436,
    "stock": 45,
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": false,
    "dealEndsInHours": 11,
    "description": "Engineered for excellence and peak performance. The ViewMaster 27-inch 4K HDR IPS Monitor combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Monitors",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_024",
    "name": "ErgoLift Wireless Vertical Ergonomic Mouse",
    "slug": "ergolift-wireless-vertical-ergonomic-mouse",
    "category": "Computers",
    "subcategory": "Mice",
    "price": 49.99,
    "originalPrice": 69.99,
    "discountPercent": 29,
    "rating": 4.6,
    "reviewCount": 453,
    "stock": 54,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "new",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 12,
    "description": "Engineered for excellence and peak performance. The ErgoLift Wireless Vertical Ergonomic Mouse combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Mice",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_025",
    "name": "SwiftDrive 2TB External Rugged SSD USB 3.2",
    "slug": "swiftdrive-2tb-external-rugged-ssd-usb-3-2",
    "category": "Computers",
    "subcategory": "Storage",
    "price": 159,
    "originalPrice": 219,
    "discountPercent": 27,
    "rating": 4.7,
    "reviewCount": 470,
    "stock": 63,
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 13,
    "description": "Engineered for excellence and peak performance. The SwiftDrive 2TB External Rugged SSD USB 3.2 combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Storage",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_026",
    "name": "ThunderHub 12-in-1 Dual 4K Display Dock",
    "slug": "thunderhub-12-in-1-dual-4k-display-dock",
    "category": "Computers",
    "subcategory": "Docks & Hubs",
    "price": 129.99,
    "originalPrice": 179.99,
    "discountPercent": 28,
    "rating": 4.8,
    "reviewCount": 487,
    "stock": 72,
    "images": [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 14,
    "description": "Engineered for excellence and peak performance. The ThunderHub 12-in-1 Dual 4K Display Dock combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Docks & Hubs",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_027",
    "name": "KeyMaster Low-Profile Mechanical Keyboard",
    "slug": "keymaster-low-profile-mechanical-keyboard",
    "category": "Computers",
    "subcategory": "Keyboards",
    "price": 99,
    "originalPrice": 135,
    "discountPercent": 27,
    "rating": 4.9,
    "reviewCount": 504,
    "stock": 81,
    "images": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 15,
    "description": "Engineered for excellence and peak performance. The KeyMaster Low-Profile Mechanical Keyboard combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Keyboards",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_028",
    "name": "SlimTouch Bluetooth Multi-Device Keyboard",
    "slug": "slimtouch-bluetooth-multi-device-keyboard",
    "category": "Computers",
    "subcategory": "Keyboards",
    "price": 45,
    "originalPrice": 60,
    "discountPercent": 25,
    "rating": 4.3,
    "reviewCount": 521,
    "stock": 90,
    "images": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 16,
    "description": "Engineered for excellence and peak performance. The SlimTouch Bluetooth Multi-Device Keyboard combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Keyboards",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_029",
    "name": "PrecisionTrack Wireless Laser Trackball Mouse",
    "slug": "precisiontrack-wireless-laser-trackball-mouse",
    "category": "Computers",
    "subcategory": "Mice",
    "price": 65,
    "originalPrice": 85,
    "discountPercent": 24,
    "rating": 4.4,
    "reviewCount": 538,
    "stock": 14,
    "images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 17,
    "description": "Engineered for excellence and peak performance. The PrecisionTrack Wireless Laser Trackball Mouse combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Mice",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Low Stock Alert",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_030",
    "name": "UltraWide 38-inch Curved Creator Display",
    "slug": "ultrawide-38-inch-curved-creator-display",
    "category": "Computers",
    "subcategory": "Monitors",
    "price": 799,
    "originalPrice": 999,
    "discountPercent": 20,
    "rating": 4.5,
    "reviewCount": 555,
    "stock": 23,
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "recommended"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 18,
    "description": "Engineered for excellence and peak performance. The UltraWide 38-inch Curved Creator Display combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Monitors",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_031",
    "name": "CreatorBook Pro 15 RTX 4070 Laptop",
    "slug": "creatorbook-pro-15-rtx-4070-laptop",
    "category": "Computers",
    "subcategory": "Laptops",
    "price": 1699,
    "originalPrice": 1899,
    "discountPercent": 11,
    "rating": 4.6,
    "reviewCount": 572,
    "stock": 32,
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": false,
    "dealEndsInHours": 19,
    "description": "Engineered for excellence and peak performance. The CreatorBook Pro 15 RTX 4070 Laptop combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Laptops",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_032",
    "name": "FastVault NVMe M.2 1TB PCIe 4.0 Internal SSD",
    "slug": "fastvault-nvme-m-2-1tb-pcie-4-0-internal-ssd",
    "category": "Computers",
    "subcategory": "Storage",
    "price": 89.99,
    "originalPrice": 120,
    "discountPercent": 25,
    "rating": 4.7,
    "reviewCount": 589,
    "stock": 41,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 20,
    "description": "Engineered for excellence and peak performance. The FastVault NVMe M.2 1TB PCIe 4.0 Internal SSD combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Storage",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_033",
    "name": "DualArm Pneumatic Gas Spring Monitor Mount",
    "slug": "dualarm-pneumatic-gas-spring-monitor-mount",
    "category": "Computers",
    "subcategory": "Accessories",
    "price": 59.99,
    "originalPrice": 89.99,
    "discountPercent": 33,
    "rating": 4.8,
    "reviewCount": 606,
    "stock": 50,
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 21,
    "description": "Engineered for excellence and peak performance. The DualArm Pneumatic Gas Spring Monitor Mount combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_034",
    "name": "StreamCam 4K UHD Pro Webcam with HDR",
    "slug": "streamcam-4k-uhd-pro-webcam-with-hdr",
    "category": "Computers",
    "subcategory": "Peripherals",
    "price": 119,
    "originalPrice": 159,
    "discountPercent": 25,
    "rating": 4.9,
    "reviewCount": 623,
    "stock": 59,
    "images": [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 22,
    "description": "Engineered for excellence and peak performance. The StreamCam 4K UHD Pro Webcam with HDR combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Peripherals",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_035",
    "name": "SilentClick Wireless Office Mouse",
    "slug": "silentclick-wireless-office-mouse",
    "category": "Computers",
    "subcategory": "Mice",
    "price": 24.99,
    "originalPrice": 35,
    "discountPercent": 29,
    "rating": 4.3,
    "reviewCount": 640,
    "stock": 68,
    "images": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 23,
    "description": "Engineered for excellence and peak performance. The SilentClick Wireless Office Mouse combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Mice",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_036",
    "name": "StudioDock Thunderbolt 4 85W Charging Hub",
    "slug": "studiodock-thunderbolt-4-85w-charging-hub",
    "category": "Computers",
    "subcategory": "Docks & Hubs",
    "price": 189,
    "originalPrice": 240,
    "discountPercent": 21,
    "rating": 4.4,
    "reviewCount": 657,
    "stock": 77,
    "images": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "new",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 6,
    "description": "Engineered for excellence and peak performance. The StudioDock Thunderbolt 4 85W Charging Hub combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Docks & Hubs",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_037",
    "name": "CarbonShield Waterproof 15\" Laptop Sleeve",
    "slug": "carbonshield-waterproof-15-laptop-sleeve",
    "category": "Computers",
    "subcategory": "Accessories",
    "price": 29.99,
    "originalPrice": 42,
    "discountPercent": 29,
    "rating": 4.5,
    "reviewCount": 674,
    "stock": 86,
    "images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 7,
    "description": "Engineered for excellence and peak performance. The CarbonShield Waterproof 15\" Laptop Sleeve combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_038",
    "name": "DeskMat XXL Natural Felt Wool Desk Pad",
    "slug": "deskmat-xxl-natural-felt-wool-desk-pad",
    "category": "Computers",
    "subcategory": "Accessories",
    "price": 34,
    "originalPrice": 48,
    "discountPercent": 29,
    "rating": 4.6,
    "reviewCount": 691,
    "stock": 10,
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 8,
    "description": "Engineered for excellence and peak performance. The DeskMat XXL Natural Felt Wool Desk Pad combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Low Stock Alert",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_039",
    "name": "AeroCool RGB Aluminum Laptop Cooling Stand",
    "slug": "aerocool-rgb-aluminum-laptop-cooling-stand",
    "category": "Computers",
    "subcategory": "Accessories",
    "price": 39.99,
    "originalPrice": 55,
    "discountPercent": 27,
    "rating": 4.7,
    "reviewCount": 708,
    "stock": 19,
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 9,
    "description": "Engineered for excellence and peak performance. The AeroCool RGB Aluminum Laptop Cooling Stand combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_040",
    "name": "MeshWi-Fi 6E Tri-Band Router System (2-Pack)",
    "slug": "meshwi-fi-6e-tri-band-router-system-2-pack-",
    "category": "Computers",
    "subcategory": "Networking",
    "price": 229,
    "originalPrice": 299,
    "discountPercent": 23,
    "rating": 4.8,
    "reviewCount": 725,
    "stock": 28,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 10,
    "description": "Engineered for excellence and peak performance. The MeshWi-Fi 6E Tri-Band Router System (2-Pack) combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Computers",
      "Subcategory": "Networking",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_041",
    "name": "NeoGamer RGB Mechanical Keyboard",
    "slug": "neogamer-rgb-mechanical-keyboard",
    "category": "Gaming",
    "subcategory": "Peripherals",
    "price": 89.99,
    "originalPrice": 119.99,
    "discountPercent": 25,
    "rating": 4.9,
    "reviewCount": 742,
    "stock": 37,
    "images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 11,
    "description": "Engineered for excellence and peak performance. The NeoGamer RGB Mechanical Keyboard combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Peripherals",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_042",
    "name": "Titan 4K 165Hz Curved Gaming Monitor",
    "slug": "titan-4k-165hz-curved-gaming-monitor",
    "category": "Gaming",
    "subcategory": "Displays",
    "price": 499,
    "originalPrice": 649,
    "discountPercent": 23,
    "rating": 4.3,
    "reviewCount": 759,
    "stock": 46,
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 12,
    "description": "Engineered for excellence and peak performance. The Titan 4K 165Hz Curved Gaming Monitor combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Displays",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_043",
    "name": "ApexStrike Pro 26K DPI Wireless Gaming Mouse",
    "slug": "apexstrike-pro-26k-dpi-wireless-gaming-mouse",
    "category": "Gaming",
    "subcategory": "Peripherals",
    "price": 79.99,
    "originalPrice": 109.99,
    "discountPercent": 27,
    "rating": 4.4,
    "reviewCount": 776,
    "stock": 55,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 13,
    "description": "Engineered for excellence and peak performance. The ApexStrike Pro 26K DPI Wireless Gaming Mouse combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Peripherals",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_044",
    "name": "HyperImmersion 7.1 Surround Gaming Headset",
    "slug": "hyperimmersion-7-1-surround-gaming-headset",
    "category": "Gaming",
    "subcategory": "Audio",
    "price": 74.99,
    "originalPrice": 99.99,
    "discountPercent": 25,
    "rating": 4.5,
    "reviewCount": 793,
    "stock": 64,
    "images": [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 14,
    "description": "Engineered for excellence and peak performance. The HyperImmersion 7.1 Surround Gaming Headset combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_045",
    "name": "NextGen Elite Wireless Pro Controller",
    "slug": "nextgen-elite-wireless-pro-controller",
    "category": "Gaming",
    "subcategory": "Consoles & Handhelds",
    "price": 129,
    "originalPrice": 169,
    "discountPercent": 24,
    "rating": 4.6,
    "reviewCount": 60,
    "stock": 73,
    "images": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 15,
    "description": "Engineered for excellence and peak performance. The NextGen Elite Wireless Pro Controller combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Consoles & Handhelds",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_046",
    "name": "SpeedFlight Flight Simulator HOTAS Joystick",
    "slug": "speedflight-flight-simulator-hotas-joystick",
    "category": "Gaming",
    "subcategory": "Peripherals",
    "price": 189.99,
    "originalPrice": 249.99,
    "discountPercent": 24,
    "rating": 4.7,
    "reviewCount": 77,
    "stock": 82,
    "images": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 16,
    "description": "Engineered for excellence and peak performance. The SpeedFlight Flight Simulator HOTAS Joystick combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Peripherals",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_047",
    "name": "RacerX Force Feedback Racing Steering Wheel",
    "slug": "racerx-force-feedback-racing-steering-wheel",
    "category": "Gaming",
    "subcategory": "Peripherals",
    "price": 299,
    "originalPrice": 399,
    "discountPercent": 25,
    "rating": 4.8,
    "reviewCount": 94,
    "stock": 91,
    "images": [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 17,
    "description": "Engineered for excellence and peak performance. The RacerX Force Feedback Racing Steering Wheel combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Peripherals",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_048",
    "name": "StreamDeck Pro 15-Key Customizable Studio",
    "slug": "streamdeck-pro-15-key-customizable-studio",
    "category": "Gaming",
    "subcategory": "Peripherals",
    "price": 149,
    "originalPrice": 189,
    "discountPercent": 21,
    "rating": 4.9,
    "reviewCount": 111,
    "stock": 15,
    "images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "new",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 18,
    "description": "Engineered for excellence and peak performance. The StreamDeck Pro 15-Key Customizable Studio combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Peripherals",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Low Stock Alert",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_049",
    "name": "AuraBlade Magnetic RGB Gaming Mousepad XXL",
    "slug": "aurablade-magnetic-rgb-gaming-mousepad-xxl",
    "category": "Gaming",
    "subcategory": "Peripherals",
    "price": 34.99,
    "originalPrice": 49.99,
    "discountPercent": 30,
    "rating": 4.3,
    "reviewCount": 128,
    "stock": 24,
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 19,
    "description": "Engineered for excellence and peak performance. The AuraBlade Magnetic RGB Gaming Mousepad XXL combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Peripherals",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_050",
    "name": "ShadowStrike Mechanical Numpad with Knob",
    "slug": "shadowstrike-mechanical-numpad-with-knob",
    "category": "Gaming",
    "subcategory": "Peripherals",
    "price": 39,
    "originalPrice": 55,
    "discountPercent": 29,
    "rating": 4.4,
    "reviewCount": 145,
    "stock": 33,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 20,
    "description": "Engineered for excellence and peak performance. The ShadowStrike Mechanical Numpad with Knob combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Peripherals",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_051",
    "name": "PhantomPro Noise Isolating Esports Mic",
    "slug": "phantompro-noise-isolating-esports-mic",
    "category": "Gaming",
    "subcategory": "Audio",
    "price": 119,
    "originalPrice": 159,
    "discountPercent": 25,
    "rating": 4.5,
    "reviewCount": 162,
    "stock": 42,
    "images": [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 21,
    "description": "Engineered for excellence and peak performance. The PhantomPro Noise Isolating Esports Mic combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Audio",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_052",
    "name": "VR-Vortex 4K All-In-One Virtual Reality Headset",
    "slug": "vr-vortex-4k-all-in-one-virtual-reality-headset",
    "category": "Gaming",
    "subcategory": "Consoles & Handhelds",
    "price": 449,
    "originalPrice": 549,
    "discountPercent": 18,
    "rating": 4.6,
    "reviewCount": 179,
    "stock": 51,
    "images": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "new"
    ],
    "isFeatured": false,
    "isDeal": false,
    "dealEndsInHours": 22,
    "description": "Engineered for excellence and peak performance. The VR-Vortex 4K All-In-One Virtual Reality Headset combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Consoles & Handhelds",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_053",
    "name": "AeroThrone Ergonomic Racing Gaming Chair",
    "slug": "aerothrone-ergonomic-racing-gaming-chair",
    "category": "Gaming",
    "subcategory": "Furniture & Rig",
    "price": 239,
    "originalPrice": 320,
    "discountPercent": 25,
    "rating": 4.7,
    "reviewCount": 196,
    "stock": 60,
    "images": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 23,
    "description": "Engineered for excellence and peak performance. The AeroThrone Ergonomic Racing Gaming Chair combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Furniture & Rig",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_054",
    "name": "FrostBite RGB Dual Fan Liquid Cooler 360mm",
    "slug": "frostbite-rgb-dual-fan-liquid-cooler-360mm",
    "category": "Gaming",
    "subcategory": "Peripherals",
    "price": 139.99,
    "originalPrice": 179.99,
    "discountPercent": 22,
    "rating": 4.8,
    "reviewCount": 213,
    "stock": 69,
    "images": [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 6,
    "description": "Engineered for excellence and peak performance. The FrostBite RGB Dual Fan Liquid Cooler 360mm combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Peripherals",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_055",
    "name": "BattleStation Modular Cable Management Rig",
    "slug": "battlestation-modular-cable-management-rig",
    "category": "Gaming",
    "subcategory": "Accessories",
    "price": 29.99,
    "originalPrice": 42,
    "discountPercent": 29,
    "rating": 4.9,
    "reviewCount": 230,
    "stock": 78,
    "images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 7,
    "description": "Engineered for excellence and peak performance. The BattleStation Modular Cable Management Rig combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_056",
    "name": "Ultra240 24.5-inch 240Hz Fast IPS Esports Display",
    "slug": "ultra240-24-5-inch-240hz-fast-ips-esports-display",
    "category": "Gaming",
    "subcategory": "Displays",
    "price": 269,
    "originalPrice": 349,
    "discountPercent": 23,
    "rating": 4.3,
    "reviewCount": 247,
    "stock": 87,
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 8,
    "description": "Engineered for excellence and peak performance. The Ultra240 24.5-inch 240Hz Fast IPS Esports Display combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Displays",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_057",
    "name": "RetroPlay Handheld Console with 5000+ Games",
    "slug": "retroplay-handheld-console-with-5000-games",
    "category": "Gaming",
    "subcategory": "Consoles & Handhelds",
    "price": 69.99,
    "originalPrice": 95,
    "discountPercent": 26,
    "rating": 4.4,
    "reviewCount": 264,
    "stock": 11,
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 9,
    "description": "Engineered for excellence and peak performance. The RetroPlay Handheld Console with 5000+ Games combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Consoles & Handhelds",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Low Stock Alert",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_058",
    "name": "GamerGrip Anti-Slip Sweat Absorbent Mouse Skates",
    "slug": "gamergrip-anti-slip-sweat-absorbent-mouse-skates",
    "category": "Gaming",
    "subcategory": "Accessories",
    "price": 14.99,
    "originalPrice": 22,
    "discountPercent": 32,
    "rating": 4.5,
    "reviewCount": 281,
    "stock": 20,
    "images": [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 10,
    "description": "Engineered for excellence and peak performance. The GamerGrip Anti-Slip Sweat Absorbent Mouse Skates combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_059",
    "name": "BoomArm Heavy Duty Spring Mic Studio Stand",
    "slug": "boomarm-heavy-duty-spring-mic-studio-stand",
    "category": "Gaming",
    "subcategory": "Accessories",
    "price": 45,
    "originalPrice": 65,
    "discountPercent": 31,
    "rating": 4.6,
    "reviewCount": 298,
    "stock": 29,
    "images": [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 11,
    "description": "Engineered for excellence and peak performance. The BoomArm Heavy Duty Spring Mic Studio Stand combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_060",
    "name": "CyberDeck 60% Ultra-Compact Hot-Swap Keyboard",
    "slug": "cyberdeck-60-ultra-compact-hot-swap-keyboard",
    "category": "Gaming",
    "subcategory": "Peripherals",
    "price": 69.99,
    "originalPrice": 99.99,
    "discountPercent": 30,
    "rating": 4.7,
    "reviewCount": 315,
    "stock": 38,
    "images": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "new",
      "recommended"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 12,
    "description": "Engineered for excellence and peak performance. The CyberDeck 60% Ultra-Compact Hot-Swap Keyboard combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Gaming",
      "Subcategory": "Peripherals",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_061",
    "name": "Urban Explorer Weatherproof Backpack",
    "slug": "urban-explorer-weatherproof-backpack",
    "category": "Fashion",
    "subcategory": "Bags",
    "price": 79,
    "originalPrice": 110,
    "discountPercent": 28,
    "rating": 4.8,
    "reviewCount": 332,
    "stock": 47,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 13,
    "description": "Engineered for excellence and peak performance. The Urban Explorer Weatherproof Backpack combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Bags",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_062",
    "name": "Veloce Minimalist Chronograph Watch",
    "slug": "veloce-minimalist-chronograph-watch",
    "category": "Fashion",
    "subcategory": "Watches",
    "price": 135,
    "originalPrice": 185,
    "discountPercent": 27,
    "rating": 4.9,
    "reviewCount": 349,
    "stock": 56,
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 14,
    "description": "Engineered for excellence and peak performance. The Veloce Minimalist Chronograph Watch combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Watches",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_063",
    "name": "Classic Heritage Leather Jacket",
    "slug": "classic-heritage-leather-jacket",
    "category": "Fashion",
    "subcategory": "Outerwear",
    "price": 189,
    "originalPrice": 260,
    "discountPercent": 27,
    "rating": 4.3,
    "reviewCount": 366,
    "stock": 65,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 15,
    "description": "Engineered for excellence and peak performance. The Classic Heritage Leather Jacket combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Outerwear",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_064",
    "name": "CloudStride Breathable Runner Sneakers",
    "slug": "cloudstride-breathable-runner-sneakers",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 89,
    "originalPrice": 125,
    "discountPercent": 29,
    "rating": 4.4,
    "reviewCount": 383,
    "stock": 74,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 16,
    "description": "Engineered for excellence and peak performance. The CloudStride Breathable Runner Sneakers combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Footwear",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_065",
    "name": "MetroCommute Canvas Weekender Duffle",
    "slug": "metrocommute-canvas-weekender-duffle",
    "category": "Fashion",
    "subcategory": "Bags",
    "price": 65,
    "originalPrice": 90,
    "discountPercent": 28,
    "rating": 4.5,
    "reviewCount": 400,
    "stock": 83,
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 17,
    "description": "Engineered for excellence and peak performance. The MetroCommute Canvas Weekender Duffle combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Bags",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_066",
    "name": "Polarized Titanium Aviator Sunglasses",
    "slug": "polarized-titanium-aviator-sunglasses",
    "category": "Fashion",
    "subcategory": "Accessories",
    "price": 59.99,
    "originalPrice": 85,
    "discountPercent": 29,
    "rating": 4.6,
    "reviewCount": 417,
    "stock": 92,
    "images": [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 18,
    "description": "Engineered for excellence and peak performance. The Polarized Titanium Aviator Sunglasses combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_067",
    "name": "Merino Wool Thermal Crewneck Sweater",
    "slug": "merino-wool-thermal-crewneck-sweater",
    "category": "Fashion",
    "subcategory": "Apparel",
    "price": 75,
    "originalPrice": 105,
    "discountPercent": 29,
    "rating": 4.7,
    "reviewCount": 434,
    "stock": 16,
    "images": [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 19,
    "description": "Engineered for excellence and peak performance. The Merino Wool Thermal Crewneck Sweater combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Apparel",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_068",
    "name": "Alpine Down Ultra-Light Packable Jacket",
    "slug": "alpine-down-ultra-light-packable-jacket",
    "category": "Fashion",
    "subcategory": "Outerwear",
    "price": 129,
    "originalPrice": 175,
    "discountPercent": 26,
    "rating": 4.8,
    "reviewCount": 451,
    "stock": 25,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 20,
    "description": "Engineered for excellence and peak performance. The Alpine Down Ultra-Light Packable Jacket combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Outerwear",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_069",
    "name": "Full-Grain Italian Leather Trifold Wallet",
    "slug": "full-grain-italian-leather-trifold-wallet",
    "category": "Fashion",
    "subcategory": "Accessories",
    "price": 42,
    "originalPrice": 60,
    "discountPercent": 30,
    "rating": 4.9,
    "reviewCount": 468,
    "stock": 34,
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 21,
    "description": "Engineered for excellence and peak performance. The Full-Grain Italian Leather Trifold Wallet combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_070",
    "name": "Nomad Tactical Sling Bag with RFID Shield",
    "slug": "nomad-tactical-sling-bag-with-rfid-shield",
    "category": "Fashion",
    "subcategory": "Bags",
    "price": 48,
    "originalPrice": 68,
    "discountPercent": 29,
    "rating": 4.3,
    "reviewCount": 485,
    "stock": 43,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 22,
    "description": "Engineered for excellence and peak performance. The Nomad Tactical Sling Bag with RFID Shield combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Bags",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_071",
    "name": "ChronoSport Tachymeter Diver Watch 200m",
    "slug": "chronosport-tachymeter-diver-watch-200m",
    "category": "Fashion",
    "subcategory": "Watches",
    "price": 195,
    "originalPrice": 260,
    "discountPercent": 25,
    "rating": 4.4,
    "reviewCount": 502,
    "stock": 52,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 23,
    "description": "Engineered for excellence and peak performance. The ChronoSport Tachymeter Diver Watch 200m combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Watches",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_072",
    "name": "Heavyweight French Terry Oversized Hoodie",
    "slug": "heavyweight-french-terry-oversized-hoodie",
    "category": "Fashion",
    "subcategory": "Apparel",
    "price": 68,
    "originalPrice": 95,
    "discountPercent": 28,
    "rating": 4.5,
    "reviewCount": 519,
    "stock": 61,
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "new",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 6,
    "description": "Engineered for excellence and peak performance. The Heavyweight French Terry Oversized Hoodie combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Apparel",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_073",
    "name": "CityWalker Water-Resistant Chelsea Boots",
    "slug": "citywalker-water-resistant-chelsea-boots",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 145,
    "originalPrice": 195,
    "discountPercent": 26,
    "rating": 4.6,
    "reviewCount": 536,
    "stock": 70,
    "images": [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 7,
    "description": "Engineered for excellence and peak performance. The CityWalker Water-Resistant Chelsea Boots combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Footwear",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_074",
    "name": "Modern Minimalist Reversible Leather Belt",
    "slug": "modern-minimalist-reversible-leather-belt",
    "category": "Fashion",
    "subcategory": "Accessories",
    "price": 32,
    "originalPrice": 45,
    "discountPercent": 29,
    "rating": 4.7,
    "reviewCount": 553,
    "stock": 79,
    "images": [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 8,
    "description": "Engineered for excellence and peak performance. The Modern Minimalist Reversible Leather Belt combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_075",
    "name": "Nordic Knit Cashmere Touch Winter Scarf",
    "slug": "nordic-knit-cashmere-touch-winter-scarf",
    "category": "Fashion",
    "subcategory": "Accessories",
    "price": 38,
    "originalPrice": 55,
    "discountPercent": 31,
    "rating": 4.8,
    "reviewCount": 570,
    "stock": 88,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 9,
    "description": "Engineered for excellence and peak performance. The Nordic Knit Cashmere Touch Winter Scarf combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_076",
    "name": "TrailBlazer Windbreaker Techwear Parka",
    "slug": "trailblazer-windbreaker-techwear-parka",
    "category": "Fashion",
    "subcategory": "Outerwear",
    "price": 115,
    "originalPrice": 155,
    "discountPercent": 26,
    "rating": 4.9,
    "reviewCount": 587,
    "stock": 12,
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 10,
    "description": "Engineered for excellence and peak performance. The TrailBlazer Windbreaker Techwear Parka combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Outerwear",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Low Stock Alert",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_077",
    "name": "Classic Vintage Wayfarer Acetate Eyewear",
    "slug": "classic-vintage-wayfarer-acetate-eyewear",
    "category": "Fashion",
    "subcategory": "Accessories",
    "price": 52,
    "originalPrice": 72,
    "discountPercent": 28,
    "rating": 4.3,
    "reviewCount": 604,
    "stock": 21,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 11,
    "description": "Engineered for excellence and peak performance. The Classic Vintage Wayfarer Acetate Eyewear combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_078",
    "name": "SmartSlim Pop-Up Cardholder Aluminum Wallet",
    "slug": "smartslim-pop-up-cardholder-aluminum-wallet",
    "category": "Fashion",
    "subcategory": "Accessories",
    "price": 28.99,
    "originalPrice": 39.99,
    "discountPercent": 28,
    "rating": 4.4,
    "reviewCount": 621,
    "stock": 30,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 12,
    "description": "Engineered for excellence and peak performance. The SmartSlim Pop-Up Cardholder Aluminum Wallet combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Accessories",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_079",
    "name": "UrbanUtility Cargo Stretch Trousers",
    "slug": "urbanutility-cargo-stretch-trousers",
    "category": "Fashion",
    "subcategory": "Apparel",
    "price": 58,
    "originalPrice": 80,
    "discountPercent": 28,
    "rating": 4.5,
    "reviewCount": 638,
    "stock": 39,
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 13,
    "description": "Engineered for excellence and peak performance. The UrbanUtility Cargo Stretch Trousers combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Apparel",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_080",
    "name": "AeroSprint Lightweight Performance Shorts",
    "slug": "aerosprint-lightweight-performance-shorts",
    "category": "Fashion",
    "subcategory": "Apparel",
    "price": 34,
    "originalPrice": 48,
    "discountPercent": 29,
    "rating": 4.6,
    "reviewCount": 655,
    "stock": 48,
    "images": [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 14,
    "description": "Engineered for excellence and peak performance. The AeroSprint Lightweight Performance Shorts combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Fashion",
      "Subcategory": "Apparel",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_081",
    "name": "Lumina Smart Ambient Desk Lamp",
    "slug": "lumina-smart-ambient-desk-lamp",
    "category": "Home & Living",
    "subcategory": "Lighting",
    "price": 54.99,
    "originalPrice": 75,
    "discountPercent": 27,
    "rating": 4.7,
    "reviewCount": 672,
    "stock": 57,
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 15,
    "description": "Engineered for excellence and peak performance. The Lumina Smart Ambient Desk Lamp combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Lighting",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_082",
    "name": "Barista Touch Espresso Machine",
    "slug": "barista-touch-espresso-machine",
    "category": "Home & Living",
    "subcategory": "Kitchen",
    "price": 349.99,
    "originalPrice": 429.99,
    "discountPercent": 19,
    "rating": 4.8,
    "reviewCount": 689,
    "stock": 66,
    "images": [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580481077195-c3f9a71a4980?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending"
    ],
    "isFeatured": false,
    "isDeal": false,
    "dealEndsInHours": 16,
    "description": "Engineered for excellence and peak performance. The Barista Touch Espresso Machine combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Kitchen",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_083",
    "name": "AeroGlide Ergonomic Office Chair",
    "slug": "aeroglide-ergonomic-office-chair",
    "category": "Home & Living",
    "subcategory": "Furniture",
    "price": 249,
    "originalPrice": 320,
    "discountPercent": 22,
    "rating": 4.9,
    "reviewCount": 706,
    "stock": 75,
    "images": [
      "https://images.unsplash.com/photo-1580481077195-c3f9a71a4980?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 17,
    "description": "Engineered for excellence and peak performance. The AeroGlide Ergonomic Office Chair combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Furniture",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_084",
    "name": "PureBreeze HEPA Smart Air Purifier",
    "slug": "purebreeze-hepa-smart-air-purifier",
    "category": "Home & Living",
    "subcategory": "Appliances",
    "price": 129.99,
    "originalPrice": 179.99,
    "discountPercent": 28,
    "rating": 4.3,
    "reviewCount": 723,
    "stock": 84,
    "images": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "new",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 18,
    "description": "Engineered for excellence and peak performance. The PureBreeze HEPA Smart Air Purifier combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Appliances",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_085",
    "name": "RoboClean Smart Robot Vacuum & Mop",
    "slug": "roboclean-smart-robot-vacuum-mop",
    "category": "Home & Living",
    "subcategory": "Smart Living",
    "price": 399,
    "originalPrice": 549,
    "discountPercent": 27,
    "rating": 4.4,
    "reviewCount": 740,
    "stock": 8,
    "images": [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 19,
    "description": "Engineered for excellence and peak performance. The RoboClean Smart Robot Vacuum & Mop combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Smart Living",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Low Stock Alert",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_086",
    "name": "Precision Pour-Over Gooseneck Electric Kettle",
    "slug": "precision-pour-over-gooseneck-electric-kettle",
    "category": "Home & Living",
    "subcategory": "Kitchen",
    "price": 69.99,
    "originalPrice": 95,
    "discountPercent": 26,
    "rating": 4.5,
    "reviewCount": 757,
    "stock": 17,
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 20,
    "description": "Engineered for excellence and peak performance. The Precision Pour-Over Gooseneck Electric Kettle combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Kitchen",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_087",
    "name": "ErgoDesk Electric Dual-Motor Standing Desk",
    "slug": "ergodesk-electric-dual-motor-standing-desk",
    "category": "Home & Living",
    "subcategory": "Furniture",
    "price": 389,
    "originalPrice": 499,
    "discountPercent": 22,
    "rating": 4.6,
    "reviewCount": 774,
    "stock": 26,
    "images": [
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 21,
    "description": "Engineered for excellence and peak performance. The ErgoDesk Electric Dual-Motor Standing Desk combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Furniture",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_088",
    "name": "AuraMist Ultrasonic Essential Oil Diffuser",
    "slug": "auramist-ultrasonic-essential-oil-diffuser",
    "category": "Home & Living",
    "subcategory": "Smart Living",
    "price": 36.99,
    "originalPrice": 49.99,
    "discountPercent": 26,
    "rating": 4.7,
    "reviewCount": 791,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 22,
    "description": "Engineered for excellence and peak performance. The AuraMist Ultrasonic Essential Oil Diffuser combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Smart Living",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_089",
    "name": "ThermaMug Smart Temperature Controlled Mug",
    "slug": "thermamug-smart-temperature-controlled-mug",
    "category": "Home & Living",
    "subcategory": "Kitchen",
    "price": 89.99,
    "originalPrice": 119.99,
    "discountPercent": 25,
    "rating": 4.8,
    "reviewCount": 58,
    "stock": 44,
    "images": [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580481077195-c3f9a71a4980?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 23,
    "description": "Engineered for excellence and peak performance. The ThermaMug Smart Temperature Controlled Mug combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Kitchen",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_090",
    "name": "CrispAir XL 6-Quart Digital Air Fryer",
    "slug": "crispair-xl-6-quart-digital-air-fryer",
    "category": "Home & Living",
    "subcategory": "Kitchen",
    "price": 99,
    "originalPrice": 139,
    "discountPercent": 29,
    "rating": 4.9,
    "reviewCount": 75,
    "stock": 53,
    "images": [
      "https://images.unsplash.com/photo-1580481077195-c3f9a71a4980?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "recommended"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 6,
    "description": "Engineered for excellence and peak performance. The CrispAir XL 6-Quart Digital Air Fryer combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Kitchen",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_091",
    "name": "GlowBar Smart Monitor Light Bar with Remote",
    "slug": "glowbar-smart-monitor-light-bar-with-remote",
    "category": "Home & Living",
    "subcategory": "Lighting",
    "price": 48,
    "originalPrice": 68,
    "discountPercent": 29,
    "rating": 4.3,
    "reviewCount": 92,
    "stock": 62,
    "images": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 7,
    "description": "Engineered for excellence and peak performance. The GlowBar Smart Monitor Light Bar with Remote combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Lighting",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_092",
    "name": "PureWater 5-Stage Countertop RO Filter",
    "slug": "purewater-5-stage-countertop-ro-filter",
    "category": "Home & Living",
    "subcategory": "Kitchen",
    "price": 189,
    "originalPrice": 249,
    "discountPercent": 24,
    "rating": 4.4,
    "reviewCount": 109,
    "stock": 71,
    "images": [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 8,
    "description": "Engineered for excellence and peak performance. The PureWater 5-Stage Countertop RO Filter combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Kitchen",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_093",
    "name": "SlumberComfort Memory Foam Ergonomic Pillow",
    "slug": "slumbercomfort-memory-foam-ergonomic-pillow",
    "category": "Home & Living",
    "subcategory": "Home Goods",
    "price": 42,
    "originalPrice": 60,
    "discountPercent": 30,
    "rating": 4.5,
    "reviewCount": 126,
    "stock": 80,
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 9,
    "description": "Engineered for excellence and peak performance. The SlumberComfort Memory Foam Ergonomic Pillow combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Home Goods",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_094",
    "name": "QuietNight Ultrasonic Cool Mist Humidifier",
    "slug": "quietnight-ultrasonic-cool-mist-humidifier",
    "category": "Home & Living",
    "subcategory": "Appliances",
    "price": 45.99,
    "originalPrice": 65,
    "discountPercent": 29,
    "rating": 4.6,
    "reviewCount": 143,
    "stock": 89,
    "images": [
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 10,
    "description": "Engineered for excellence and peak performance. The QuietNight Ultrasonic Cool Mist Humidifier combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Appliances",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_095",
    "name": "AeroBlend High-Speed Pro Blender 1200W",
    "slug": "aeroblend-high-speed-pro-blender-1200w",
    "category": "Home & Living",
    "subcategory": "Kitchen",
    "price": 119,
    "originalPrice": 159,
    "discountPercent": 25,
    "rating": 4.7,
    "reviewCount": 160,
    "stock": 13,
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Editor's Pick",
    "tags": [
      "deals"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 11,
    "description": "Engineered for excellence and peak performance. The AeroBlend High-Speed Pro Blender 1200W combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Kitchen",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Low Stock Alert",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_096",
    "name": "SmartLock Biometric Keyless Entry Deadbolt",
    "slug": "smartlock-biometric-keyless-entry-deadbolt",
    "category": "Home & Living",
    "subcategory": "Smart Living",
    "price": 149,
    "originalPrice": 199,
    "discountPercent": 25,
    "rating": 4.8,
    "reviewCount": 177,
    "stock": 22,
    "images": [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580481077195-c3f9a71a4980?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "tags": [
      "trending",
      "deals",
      "new",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 12,
    "description": "Engineered for excellence and peak performance. The SmartLock Biometric Keyless Entry Deadbolt combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Smart Living",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_097",
    "name": "Minimalist Solid Oak Monitor Stand Riser",
    "slug": "minimalist-solid-oak-monitor-stand-riser",
    "category": "Home & Living",
    "subcategory": "Furniture",
    "price": 55,
    "originalPrice": 75,
    "discountPercent": 27,
    "rating": 4.9,
    "reviewCount": 194,
    "stock": 31,
    "images": [
      "https://images.unsplash.com/photo-1580481077195-c3f9a71a4980?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Hot Deal",
    "tags": [
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 13,
    "description": "Engineered for excellence and peak performance. The Minimalist Solid Oak Monitor Stand Riser combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Furniture",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_098",
    "name": "ChronoGlow Digital Sunset Simulation Clock",
    "slug": "chronoglow-digital-sunset-simulation-clock",
    "category": "Home & Living",
    "subcategory": "Smart Living",
    "price": 39.99,
    "originalPrice": 55,
    "discountPercent": 27,
    "rating": 4.3,
    "reviewCount": 211,
    "stock": 40,
    "images": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Best Seller",
    "tags": [
      "trending",
      "deals"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 14,
    "description": "Engineered for excellence and peak performance. The ChronoGlow Digital Sunset Simulation Clock combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Smart Living",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_099",
    "name": "SousVide Precision Thermal Immersion Cooker",
    "slug": "sousvide-precision-thermal-immersion-cooker",
    "category": "Home & Living",
    "subcategory": "Kitchen",
    "price": 85,
    "originalPrice": 115,
    "discountPercent": 26,
    "rating": 4.4,
    "reviewCount": 228,
    "stock": 49,
    "images": [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "tags": [
      "deals",
      "recommended"
    ],
    "isFeatured": false,
    "isDeal": true,
    "dealEndsInHours": 15,
    "description": "Engineered for excellence and peak performance. The SousVide Precision Thermal Immersion Cooker combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Kitchen",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  },
  {
    "_id": "prod_100",
    "name": "CleanSweep Cordless Handheld Car Vacuum",
    "slug": "cleansweep-cordless-handheld-car-vacuum",
    "category": "Home & Living",
    "subcategory": "Appliances",
    "price": 49.99,
    "originalPrice": 69.99,
    "discountPercent": 29,
    "rating": 4.5,
    "reviewCount": 245,
    "stock": 58,
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Special Offer",
    "tags": [
      "trending",
      "deals",
      "new"
    ],
    "isFeatured": true,
    "isDeal": true,
    "dealEndsInHours": 16,
    "description": "Engineered for excellence and peak performance. The CleanSweep Cordless Handheld Car Vacuum combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.",
    "features": [
      "Premium grade materials and refined industrial craftsmanship",
      "Backed by ShopSphere official 2-year manufacturer warranty",
      "Fast dispatch and 30-day hassle-free global return policy",
      "Designed for seamless compatibility and daily productivity"
    ],
    "specs": {
      "Category": "Home & Living",
      "Subcategory": "Appliances",
      "Warranty": "2 Years Official Coverage",
      "Availability": "Immediate Dispatch",
      "Origin": "ShopSphere Verified Quality"
    }
  }
];

// Sample categories with icons and banner images
const sampleCategories = [
  {
    id: "Electronics",
    name: "Electronics & Audio",
    icon: "fa-headphones-simple",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    itemCount: 8,
    description: "State-of-the-art headphones, smartwatches, and audio tech."
  },
  {
    id: "Computers",
    name: "Computers & Laptops",
    icon: "fa-laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
    itemCount: 4,
    description: "High performance laptops, accessories and productivity powerhouses."
  },
  {
    id: "Gaming",
    name: "Gaming & Esports",
    icon: "fa-gamepad",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80",
    itemCount: 6,
    description: "Pro mechanical keyboards, curved monitors, and gamer gear."
  },
  {
    id: "Fashion",
    name: "Fashion & Lifestyle",
    icon: "fa-shirt",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
    itemCount: 5,
    description: "Curated apparel, luxury leather jackets, and chronograph watches."
  },
  {
    id: "Home & Living",
    name: "Home & Modern Living",
    icon: "fa-couch",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
    itemCount: 7,
    description: "Smart appliances, ambient lighting, and ergonomic design."
  }
];

// Promo coupons
const promoCoupons = {
  "ALPHA10": { discountPercent: 10, description: "10% Off for CodeAlpha Community" },
  "SAVE20": { discountPercent: 20, description: "20% Off on Orders above $200", minSpend: 200 },
  "FREESHIP": { freeShipping: true, description: "Free Standard Shipping" },
  "SMART50": { flatDiscount: 50, minSpend: 300, description: "Flat $50 Off on orders above $300" }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    demoUsers,
    sampleProducts,
    sampleCategories,
    promoCoupons
  };
}
