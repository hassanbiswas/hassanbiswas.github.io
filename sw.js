/**
 * Web Developer | Hassan Biswas
 * Automated Dynamic Versioning & Cache-Busting Logic
 */

// 1. Dynamic Versioning (Format: YYYY.M.D)
// This automates updates daily to ensure zero-maintenance cache-busting.
const now = new Date();
const VERSION = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;

const CACHE_NAME = `hassan-biswas-v${VERSION}`;
const OFFLINE_URL = '/index.html'; // offline.html

// 2. Logic to map assets with the dynamic version automatically
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/css/style.css',
  '/assets/js/script.js',
  OFFLINE_URL
].map(url => (url === '/' || url === OFFLINE_URL) ? url : `${url}?v=${VERSION}`);

// Install Event: Initialize Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log(`[SW] Initializing Cache: ${CACHE_NAME}`);
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event: Automatic Cleanup of Old Caches
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
          // Return cached asset or fallback to offline page
          return response || caches.match(OFFLINE_URL);
        });
      })
  );
});
