// Database Seeder Script
const path = require('path');
const fs = require('fs');
const { sampleProducts, demoUsers } = require('./seedData');

async function seed() {
  console.log('Seeding ShopSphere Database...');

  // If Mongoose is available and connected
  let mongoose;
  try {
    mongoose = require('mongoose');
  } catch (e) {}

  if (mongoose) {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopsphere_db';
    try {
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 2500 });
      console.log('Connected to MongoDB. Inserting collections...');

      const Product = require('../models/Product');
      const User = require('../models/User');

      if (Product) {
        await Product.deleteMany({});
        await Product.insertMany(sampleProducts);
        console.log(`Inserted ${sampleProducts.length} products to MongoDB.`);
      }

      if (User) {
        await User.deleteMany({});
        await User.insertMany(demoUsers);
        console.log(`Inserted ${demoUsers.length} users to MongoDB.`);
      }

      await mongoose.disconnect();
      console.log('MongoDB Seeding complete!');
      return;
    } catch (err) {
      console.log('MongoDB unreachable, updating local JSON store...');
    }
  }

  // Update local JSON store
  const storeDir = path.join(__dirname, 'store');
  if (!fs.existsSync(storeDir)) fs.mkdirSync(storeDir, { recursive: true });

  fs.writeFileSync(path.join(storeDir, 'products.json'), JSON.stringify(sampleProducts, null, 2), 'utf8');
  fs.writeFileSync(path.join(storeDir, 'users.json'), JSON.stringify(demoUsers, null, 2), 'utf8');
  fs.writeFileSync(path.join(storeDir, 'orders.json'), JSON.stringify([], null, 2), 'utf8');

  console.log(`Seeded ${sampleProducts.length} products and ${demoUsers.length} demo users to local store.`);
  console.log('Seeding completed successfully!');
}

if (require.main === module) {
  seed().then(() => process.exit(0)).catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = seed;
