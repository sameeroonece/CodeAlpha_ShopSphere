// Script to generate exactly 100 realistic, premium products across 5 categories (20 per category)
const fs = require('fs');
const path = require('path');

const categoriesConfig = [
  {
    category: "Electronics",
    subcategories: ["Audio", "Smartphones", "Wearables", "Cameras", "Accessories", "Power & Cables"],
    imagePool: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
    ],
    items: [
      { name: "AuraSound ANC Wireless Headphones", sub: "Audio", basePrice: 199.99, orig: 279.99 },
      { name: "Apex Pulse Pro Smartwatch", sub: "Wearables", basePrice: 149.50, orig: 220.00 },
      { name: "Quantum Pods True Wireless Earbuds", sub: "Audio", basePrice: 69.99, orig: 99.99 },
      { name: "NeoPhone 15 Pro Max 256GB", sub: "Smartphones", basePrice: 1099.00, orig: 1199.00 },
      { name: "SoundNova 360 Waterproof Speaker", sub: "Audio", basePrice: 64.99, orig: 89.99 },
      { name: "HyperCharge 100W GaN Fast Charger", sub: "Power & Cables", basePrice: 45.99, orig: 65.00 },
      { name: "AeroTune Studio Monitor Headphones", sub: "Audio", basePrice: 159.00, orig: 210.00 },
      { name: "PulseFit Smart Fitness Tracker Band", sub: "Wearables", basePrice: 49.99, orig: 69.99 },
      { name: "VibeBass Portable Bluetooth Speaker", sub: "Audio", basePrice: 39.99, orig: 55.00 },
      { name: "OptiCam 4K Action Camera 60FPS", sub: "Cameras", basePrice: 229.00, orig: 299.00 },
      { name: "Zenith Active Noise Cancelling Buds", sub: "Audio", basePrice: 89.99, orig: 129.99 },
      { name: "MagSafe 3-in-1 Wireless Charging Stand", sub: "Accessories", basePrice: 59.99, orig: 79.99 },
      { name: "CinemaBeam Mini HD Pocket Projector", sub: "Gadgets", basePrice: 279.00, orig: 350.00 },
      { name: "NovaSound Dolby Atmos Soundbar", sub: "Audio", basePrice: 249.99, orig: 329.99 },
      { name: "TitanPower 20000mAh Ultra Powerbank", sub: "Power & Cables", basePrice: 42.50, orig: 59.99 },
      { name: "TrueCapture Dual Lens Dashcam 4K", sub: "Cameras", basePrice: 119.00, orig: 159.00 },
      { name: "AudioPro Wireless Lavalier Microphone", sub: "Audio", basePrice: 79.99, orig: 110.00 },
      { name: "SmartTag Precision Bluetooth Trackers (4-Pack)", sub: "Accessories", basePrice: 69.00, orig: 89.00 },
      { name: "RetroGlow Tube Amp Desktop Speaker", sub: "Audio", basePrice: 189.99, orig: 249.99 },
      { name: "VividView 10-inch Smart Digital Photo Frame", sub: "Gadgets", basePrice: 99.00, orig: 139.00 }
    ]
  },
  {
    category: "Computers",
    subcategories: ["Laptops", "Monitors", "Keyboards", "Mice", "Storage", "Docks & Hubs"],
    imagePool: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    items: [
      { name: "UltraBook Vision 16 M-Core", sub: "Laptops", basePrice: 1199.00, orig: 1399.00 },
      { name: "ProBook Air Ultra 13.3-inch Retina", sub: "Laptops", basePrice: 899.00, orig: 1049.00 },
      { name: "ViewMaster 27-inch 4K HDR IPS Monitor", sub: "Monitors", basePrice: 389.00, orig: 479.00 },
      { name: "ErgoLift Wireless Vertical Ergonomic Mouse", sub: "Mice", basePrice: 49.99, orig: 69.99 },
      { name: "SwiftDrive 2TB External Rugged SSD USB 3.2", sub: "Storage", basePrice: 159.00, orig: 219.00 },
      { name: "ThunderHub 12-in-1 Dual 4K Display Dock", sub: "Docks & Hubs", basePrice: 129.99, orig: 179.99 },
      { name: "KeyMaster Low-Profile Mechanical Keyboard", sub: "Keyboards", basePrice: 99.00, orig: 135.00 },
      { name: "SlimTouch Bluetooth Multi-Device Keyboard", sub: "Keyboards", basePrice: 45.00, orig: 60.00 },
      { name: "PrecisionTrack Wireless Laser Trackball Mouse", sub: "Mice", basePrice: 65.00, orig: 85.00 },
      { name: "UltraWide 38-inch Curved Creator Display", sub: "Monitors", basePrice: 799.00, orig: 999.00 },
      { name: "CreatorBook Pro 15 RTX 4070 Laptop", sub: "Laptops", basePrice: 1699.00, orig: 1899.00 },
      { name: "FastVault NVMe M.2 1TB PCIe 4.0 Internal SSD", sub: "Storage", basePrice: 89.99, orig: 120.00 },
      { name: "DualArm Pneumatic Gas Spring Monitor Mount", sub: "Accessories", basePrice: 59.99, orig: 89.99 },
      { name: "StreamCam 4K UHD Pro Webcam with HDR", sub: "Peripherals", basePrice: 119.00, orig: 159.00 },
      { name: "SilentClick Wireless Office Mouse", sub: "Mice", basePrice: 24.99, orig: 35.00 },
      { name: "StudioDock Thunderbolt 4 85W Charging Hub", sub: "Docks & Hubs", basePrice: 189.00, orig: 240.00 },
      { name: "CarbonShield Waterproof 15\" Laptop Sleeve", sub: "Accessories", basePrice: 29.99, orig: 42.00 },
      { name: "DeskMat XXL Natural Felt Wool Desk Pad", sub: "Accessories", basePrice: 34.00, orig: 48.00 },
      { name: "AeroCool RGB Aluminum Laptop Cooling Stand", sub: "Accessories", basePrice: 39.99, orig: 55.00 },
      { name: "MeshWi-Fi 6E Tri-Band Router System (2-Pack)", sub: "Networking", basePrice: 229.00, orig: 299.00 }
    ]
  },
  {
    category: "Gaming",
    subcategories: ["Peripherals", "Displays", "Consoles & Handhelds", "Audio", "Furniture & Rig"],
    imagePool: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"
    ],
    items: [
      { name: "NeoGamer RGB Mechanical Keyboard", sub: "Peripherals", basePrice: 89.99, orig: 119.99 },
      { name: "Titan 4K 165Hz Curved Gaming Monitor", sub: "Displays", basePrice: 499.00, orig: 649.00 },
      { name: "ApexStrike Pro 26K DPI Wireless Gaming Mouse", sub: "Peripherals", basePrice: 79.99, orig: 109.99 },
      { name: "HyperImmersion 7.1 Surround Gaming Headset", sub: "Audio", basePrice: 74.99, orig: 99.99 },
      { name: "NextGen Elite Wireless Pro Controller", sub: "Consoles & Handhelds", basePrice: 129.00, orig: 169.00 },
      { name: "SpeedFlight Flight Simulator HOTAS Joystick", sub: "Peripherals", basePrice: 189.99, orig: 249.99 },
      { name: "RacerX Force Feedback Racing Steering Wheel", sub: "Peripherals", basePrice: 299.00, orig: 399.00 },
      { name: "StreamDeck Pro 15-Key Customizable Studio", sub: "Peripherals", basePrice: 149.00, orig: 189.00 },
      { name: "AuraBlade Magnetic RGB Gaming Mousepad XXL", sub: "Peripherals", basePrice: 34.99, orig: 49.99 },
      { name: "ShadowStrike Mechanical Numpad with Knob", sub: "Peripherals", basePrice: 39.00, orig: 55.00 },
      { name: "PhantomPro Noise Isolating Esports Mic", sub: "Audio", basePrice: 119.00, orig: 159.00 },
      { name: "VR-Vortex 4K All-In-One Virtual Reality Headset", sub: "Consoles & Handhelds", basePrice: 449.00, orig: 549.00 },
      { name: "AeroThrone Ergonomic Racing Gaming Chair", sub: "Furniture & Rig", basePrice: 239.00, orig: 320.00 },
      { name: "FrostBite RGB Dual Fan Liquid Cooler 360mm", sub: "Peripherals", basePrice: 139.99, orig: 179.99 },
      { name: "BattleStation Modular Cable Management Rig", sub: "Accessories", basePrice: 29.99, orig: 42.00 },
      { name: "Ultra240 24.5-inch 240Hz Fast IPS Esports Display", sub: "Displays", basePrice: 269.00, orig: 349.00 },
      { name: "RetroPlay Handheld Console with 5000+ Games", sub: "Consoles & Handhelds", basePrice: 69.99, orig: 95.00 },
      { name: "GamerGrip Anti-Slip Sweat Absorbent Mouse Skates", sub: "Accessories", basePrice: 14.99, orig: 22.00 },
      { name: "BoomArm Heavy Duty Spring Mic Studio Stand", sub: "Accessories", basePrice: 45.00, orig: 65.00 },
      { name: "CyberDeck 60% Ultra-Compact Hot-Swap Keyboard", sub: "Peripherals", basePrice: 69.99, orig: 99.99 }
    ]
  },
  {
    category: "Fashion",
    subcategories: ["Bags", "Accessories", "Outerwear", "Footwear", "Apparel", "Watches"],
    imagePool: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    items: [
      { name: "Urban Explorer Weatherproof Backpack", sub: "Bags", basePrice: 79.00, orig: 110.00 },
      { name: "Veloce Minimalist Chronograph Watch", sub: "Watches", basePrice: 135.00, orig: 185.00 },
      { name: "Classic Heritage Leather Jacket", sub: "Outerwear", basePrice: 189.00, orig: 260.00 },
      { name: "CloudStride Breathable Runner Sneakers", sub: "Footwear", basePrice: 89.00, orig: 125.00 },
      { name: "MetroCommute Canvas Weekender Duffle", sub: "Bags", basePrice: 65.00, orig: 90.00 },
      { name: "Polarized Titanium Aviator Sunglasses", sub: "Accessories", basePrice: 59.99, orig: 85.00 },
      { name: "Merino Wool Thermal Crewneck Sweater", sub: "Apparel", basePrice: 75.00, orig: 105.00 },
      { name: "Alpine Down Ultra-Light Packable Jacket", sub: "Outerwear", basePrice: 129.00, orig: 175.00 },
      { name: "Full-Grain Italian Leather Trifold Wallet", sub: "Accessories", basePrice: 42.00, orig: 60.00 },
      { name: "Nomad Tactical Sling Bag with RFID Shield", sub: "Bags", basePrice: 48.00, orig: 68.00 },
      { name: "ChronoSport Tachymeter Diver Watch 200m", sub: "Watches", basePrice: 195.00, orig: 260.00 },
      { name: "Heavyweight French Terry Oversized Hoodie", sub: "Apparel", basePrice: 68.00, orig: 95.00 },
      { name: "CityWalker Water-Resistant Chelsea Boots", sub: "Footwear", basePrice: 145.00, orig: 195.00 },
      { name: "Modern Minimalist Reversible Leather Belt", sub: "Accessories", basePrice: 32.00, orig: 45.00 },
      { name: "Nordic Knit Cashmere Touch Winter Scarf", sub: "Accessories", basePrice: 38.00, orig: 55.00 },
      { name: "TrailBlazer Windbreaker Techwear Parka", sub: "Outerwear", basePrice: 115.00, orig: 155.00 },
      { name: "Classic Vintage Wayfarer Acetate Eyewear", sub: "Accessories", basePrice: 52.00, orig: 72.00 },
      { name: "SmartSlim Pop-Up Cardholder Aluminum Wallet", sub: "Accessories", basePrice: 28.99, orig: 39.99 },
      { name: "UrbanUtility Cargo Stretch Trousers", sub: "Apparel", basePrice: 58.00, orig: 80.00 },
      { name: "AeroSprint Lightweight Performance Shorts", sub: "Apparel", basePrice: 34.00, orig: 48.00 }
    ]
  },
  {
    category: "Home & Living",
    subcategories: ["Lighting", "Kitchen", "Furniture", "Appliances", "Smart Living"],
    imagePool: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580481077195-c3f9a71a4980?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
    ],
    items: [
      { name: "Lumina Smart Ambient Desk Lamp", sub: "Lighting", basePrice: 54.99, orig: 75.00 },
      { name: "Barista Touch Espresso Machine", sub: "Kitchen", basePrice: 349.99, orig: 429.99 },
      { name: "AeroGlide Ergonomic Office Chair", sub: "Furniture", basePrice: 249.00, orig: 320.00 },
      { name: "PureBreeze HEPA Smart Air Purifier", sub: "Appliances", basePrice: 129.99, orig: 179.99 },
      { name: "RoboClean Smart Robot Vacuum & Mop", sub: "Smart Living", basePrice: 399.00, orig: 549.00 },
      { name: "Precision Pour-Over Gooseneck Electric Kettle", sub: "Kitchen", basePrice: 69.99, orig: 95.00 },
      { name: "ErgoDesk Electric Dual-Motor Standing Desk", sub: "Furniture", basePrice: 389.00, orig: 499.00 },
      { name: "AuraMist Ultrasonic Essential Oil Diffuser", sub: "Smart Living", basePrice: 36.99, orig: 49.99 },
      { name: "ThermaMug Smart Temperature Controlled Mug", sub: "Kitchen", basePrice: 89.99, orig: 119.99 },
      { name: "CrispAir XL 6-Quart Digital Air Fryer", sub: "Kitchen", basePrice: 99.00, orig: 139.00 },
      { name: "GlowBar Smart Monitor Light Bar with Remote", sub: "Lighting", basePrice: 48.00, orig: 68.00 },
      { name: "PureWater 5-Stage Countertop RO Filter", sub: "Kitchen", basePrice: 189.00, orig: 249.00 },
      { name: "SlumberComfort Memory Foam Ergonomic Pillow", sub: "Home Goods", basePrice: 42.00, orig: 60.00 },
      { name: "QuietNight Ultrasonic Cool Mist Humidifier", sub: "Appliances", basePrice: 45.99, orig: 65.00 },
      { name: "AeroBlend High-Speed Pro Blender 1200W", sub: "Kitchen", basePrice: 119.00, orig: 159.00 },
      { name: "SmartLock Biometric Keyless Entry Deadbolt", sub: "Smart Living", basePrice: 149.00, orig: 199.00 },
      { name: "Minimalist Solid Oak Monitor Stand Riser", sub: "Furniture", basePrice: 55.00, orig: 75.00 },
      { name: "ChronoGlow Digital Sunset Simulation Clock", sub: "Smart Living", basePrice: 39.99, orig: 55.00 },
      { name: "SousVide Precision Thermal Immersion Cooker", sub: "Kitchen", basePrice: 85.00, orig: 115.00 },
      { name: "CleanSweep Cordless Handheld Car Vacuum", sub: "Appliances", basePrice: 49.99, orig: 69.99 }
    ]
  }
];

// Generate exactly 100 products (20 per category * 5 categories)
const products100 = [];
let counter = 1;

const badges = ["Trending", "Hot Deal", "Best Seller", "New Arrival", "Special Offer", "Editor's Pick"];

categoriesConfig.forEach(catGroup => {
  catGroup.items.forEach((item, idx) => {
    const id = `prod_${String(counter).padStart(3, '0')}`;
    const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const discount = item.orig > item.basePrice 
      ? Math.round(((item.orig - item.basePrice) / item.orig) * 100) 
      : 0;

    const img1 = catGroup.imagePool[idx % catGroup.imagePool.length];
    const img2 = catGroup.imagePool[(idx + 1) % catGroup.imagePool.length];

    const isDeal = discount >= 20 || (counter % 3 === 0);
    const badge = badges[counter % badges.length];

    const tags = [];
    if (counter % 2 === 0) tags.push("trending");
    if (isDeal) tags.push("deals");
    if (counter % 4 === 0) tags.push("new");
    if (counter % 3 === 0 || tags.length === 0) tags.push("recommended");

    const rating = parseFloat((4.3 + (counter % 7) * 0.1).toFixed(1));
    const reviewCount = 45 + (counter * 17) % 750;
    const stock = 8 + (counter * 9) % 85;

    products100.push({
      _id: id,
      name: item.name,
      slug: slug,
      category: catGroup.category,
      subcategory: item.sub,
      price: item.basePrice,
      originalPrice: item.orig,
      discountPercent: discount,
      rating: Math.min(5.0, rating),
      reviewCount: reviewCount,
      stock: stock,
      images: [img1, img2],
      badge: badge,
      tags: tags,
      isFeatured: counter % 5 === 0,
      isDeal: isDeal,
      dealEndsInHours: 6 + (counter % 18),
      description: `Engineered for excellence and peak performance. The ${item.name} combines state-of-the-art technology with refined modern ergonomics to deliver exceptional utility, longevity, and style.`,
      features: [
        "Premium grade materials and refined industrial craftsmanship",
        "Backed by ShopSphere official 2-year manufacturer warranty",
        "Fast dispatch and 30-day hassle-free global return policy",
        "Designed for seamless compatibility and daily productivity"
      ],
      specs: {
        "Category": catGroup.category,
        "Subcategory": item.sub,
        "Warranty": "2 Years Official Coverage",
        "Availability": stock > 15 ? "Immediate Dispatch" : "Low Stock Alert",
        "Origin": "ShopSphere Verified Quality"
      }
    });

    counter++;
  });
});

console.log(`Generated exactly ${products100.length} products.`);

// Write directly to products.json
const storeFile = path.join(__dirname, 'store', 'products.json');
fs.writeFileSync(storeFile, JSON.stringify(products100, null, 2), 'utf8');
console.log(`Successfully updated: ${storeFile}`);

// Update seedData.js with products100
const seedDataFile = path.join(__dirname, 'seedData.js');
let seedContent = fs.readFileSync(seedDataFile, 'utf8');

const regex = /const sampleProducts = \[[\s\S]*?\n\];/;
const replacement = `const sampleProducts = ${JSON.stringify(products100, null, 2)};`;
seedContent = seedContent.replace(regex, replacement);

fs.writeFileSync(seedDataFile, seedContent, 'utf8');
console.log(`Successfully updated: ${seedDataFile}`);
