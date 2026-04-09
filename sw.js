// Automated version logic: YY.MM.DD
const VERSION = '26.04.09';

const CACHE_NAME = `hassan-biswas-v${VERSION}`;

// Assets to cache (Removed offline.html)
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/css/style.css',
  '/assets/js/script.js'
].map(url => {
  // Apply cache-busting query string to assets, excluding the root
  return (url === '/') ? url : `${url}?v=${VERSION}`;
});

// Install Event - Caching assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        // Fallback Security: Logic Preservation
        console.error('Pre-cache failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate Event - Cleaning up old caches automatically (Zero Maintenance)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Network first, fallback to cache (Best for SEO & performance)
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests (like browser extensions or POST)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If network is successful, return the fresh content
        return response;
      })
      .catch(() => {
        // If network fails (Offline), look in cache for the resource
        return caches.match(event.request).then((response) => {
          // Since no offline.html, we return the cached index.html as a generic fallback
          return response || caches.match('/');
        });
      })
  );
});
