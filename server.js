// ShopSphere – Smart Shopping Store
// Full-Stack E-commerce Server (Node.js & Express.js)
// CodeAlpha Internship Task 1

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { connectDB } = require('./config/db');

// Load environment variables if dotenv is available or fallback to defaults
try {
  require('dotenv').config();
} catch (e) {}

const PORT = process.env.PORT || 5000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// MIME types for static assets
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

// Express or Built-in High Performance Engine
let app;
let useNativeExpress = false;

try {
  const express = require('express');
  const cors = require('cors');
  const nativeApp = express();

  nativeApp.use(cors());
  nativeApp.use(express.json());
  nativeApp.use(express.static(PUBLIC_DIR));

  app = nativeApp;
  useNativeExpress = true;
} catch (e) {
  // Built-in Express-compatible HTTP Router & Dispatcher
  const routes = {
    GET: [],
    POST: [],
    PUT: [],
    DELETE: [],
    PATCH: []
  };

  function createRoutePattern(pattern) {
    const paramNames = [];
    const regexPath = pattern.replace(/:([a-zA-Z0-9_]+)/g, (_, paramName) => {
      paramNames.push(paramName);
      return '([^\\/]+)';
    });
    return {
      regex: new RegExp(`^${regexPath}$`),
      paramNames
    };
  }

  function addRoute(method, pattern, ...handlers) {
    routes[method].push({
      pattern,
      ...createRoutePattern(pattern),
      handlers: handlers.flat()
    });
  }

  app = {
    get: (pattern, ...handlers) => addRoute('GET', pattern, ...handlers),
    post: (pattern, ...handlers) => addRoute('POST', pattern, ...handlers),
    put: (pattern, ...handlers) => addRoute('PUT', pattern, ...handlers),
    delete: (pattern, ...handlers) => addRoute('DELETE', pattern, ...handlers),
    patch: (pattern, ...handlers) => addRoute('PATCH', pattern, ...handlers),
    use: () => {} // Middleware registration
  };

  // Dispatch incoming requests
  app._dispatch = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-auth-token');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      return res.end();
    }

    const parsedUrl = new URL(req.url, 'http://localhost');
    const pathname = parsedUrl.pathname;
    req.query = Object.fromEntries(parsedUrl.searchParams.entries());
    req.params = {};

    // Helper functions for response
    res.status = function (code) {
      res.statusCode = code;
      return res;
    };

    res.json = function (data) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify(data));
      return res;
    };

    res.sendFile = function (filePath) {
      if (fs.existsSync(filePath)) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.status(404).json({ success: false, message: 'File not found' });
      }
    };

    // Body parser for POST/PUT/PATCH
    let bodyData = '';
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      await new Promise(resolve => {
        req.on('data', chunk => {
          bodyData += chunk;
        });
        req.on('end', () => {
          try {
            req.body = bodyData ? JSON.parse(bodyData) : {};
          } catch (err) {
            req.body = {};
          }
          resolve();
        });
      });
    } else {
      req.body = {};
    }

    // Match API routes
    const methodRoutes = routes[req.method] || [];
    let matchedRoute = null;
    let routeParams = {};

    for (const r of methodRoutes) {
      const match = pathname.match(r.regex);
      if (match) {
        matchedRoute = r;
        r.paramNames.forEach((name, index) => {
          routeParams[name] = match[index + 1];
        });
        break;
      }
    }

    if (matchedRoute) {
      req.params = routeParams;
      // Execute handler chain with next()
      const chain = matchedRoute.handlers;
      let idx = 0;
      function next(err) {
        if (err) {
          console.error('Middleware Error:', err);
          return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        if (idx < chain.length) {
          const fn = chain[idx++];
          try {
            fn(req, res, next);
          } catch (handlerErr) {
            console.error('Handler Error:', handlerErr);
            res.status(500).json({ success: false, message: handlerErr.message });
          }
        }
      }
      return next();
    }

    // Static file serving from public directory
    let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
    if (safePath === '/' || safePath === '\\') safePath = '/index.html';

    let filePath = path.join(PUBLIC_DIR, safePath);

    // If request has no extension and file exists as .html, serve that
    if (!path.extname(filePath) && fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      return fs.createReadStream(filePath).pipe(res);
    }

    // Fallback for SPA or 404
    if (pathname.startsWith('/api/')) {
      return res.status(404).json({ success: false, message: `Endpoint ${req.method} ${pathname} not found.` });
    }

    // If client requested non-existent page, serve 404 or index.html
    const indexFallback = path.join(PUBLIC_DIR, 'index.html');
    if (fs.existsSync(indexFallback)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return fs.createReadStream(indexFallback).pipe(res);
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  };
}

// Register modular application routes
require('./routes/authRoutes')(app);
require('./routes/productRoutes')(app);
require('./routes/orderRoutes')(app);
require('./routes/adminRoutes')(app);

// Start server
async function startServer() {
  await connectDB();

  let server;
  if (useNativeExpress) {
    server = app.listen(PORT, () => {
      printBanner();
    });
  } else {
    server = http.createServer((req, res) => {
      app._dispatch(req, res);
    });
    server.listen(PORT, () => {
      printBanner();
    });
  }

  function printBanner() {
    console.log('\n' + '='.repeat(64));
    console.log('   🚀 ShopSphere – Smart Shopping Store (Full-Stack E-Commerce)');
    console.log('   💼 CodeAlpha Internship Task 1: Simple E-commerce Store');
    console.log('   🌐 Server Live at: http://localhost:' + PORT);
    console.log('   📦 Engine: ' + (useNativeExpress ? 'Express.js Native' : 'Built-in Express-Compatible Node Server'));
    console.log('   🛡️  Admin Account: admin@shopsphere.com | admin123');
    console.log('   👤 Customer Account: customer@shopsphere.com | password123');
    console.log('='.repeat(64) + '\n');
  }

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`\n================================================================`);
      console.log(`  ℹ️  Notice: Port ${PORT} is already in use.`);
      console.log(`  🚀 The ShopSphere server is ALREADY RUNNING!`);
      console.log(`  🌐 Open your browser at: http://localhost:${PORT}`);
      console.log(`================================================================\n`);
    } else {
      console.error('Server error:', err);
    }
  });

  return server;
}

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };
