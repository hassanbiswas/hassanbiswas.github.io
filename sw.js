/**
 * Web Developer | Hassan Biswas
 * Automated Versioning Logic
 */

// 1. Manually update this single string when you push a big update.
// Or use: 
const VERSION = new Date().getDate(); // for absolute automation.
// const VERSION = '1.2.0'; 

const CACHE_NAME = `hassan-biswas-v${VERSION}`;
const OFFLINE_URL = '/index.html'; // /offline.html

// 2. Logic to map your assets with the version automatically
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/css/style.css',
  '/assets/js/script.js',
  OFFLINE_URL
].map(url => (url === '/' || url === OFFLINE_URL) ? url : `${url}?v=${VERSION}`);

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log(`[SW] Initializing Cache: ${CACHE_NAME}`);
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event: Automatic Cleanup
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`[SW] Deleting Old Cache: ${cache}`);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event: Network-first Strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request).then((response) => {
          return response || caches.match(OFFLINE_URL);
        });
      })
  );
});
