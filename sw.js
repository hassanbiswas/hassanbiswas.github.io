/**
 * Web Developer | Hassan Biswas
 * Automated Dynamic Versioning & Cache-Busting Logic (YY.MM.DD)
 */

// Automated version logic: YY.MM.DD
const VERSION = '26.04.07';

const CACHE_NAME = `hassan-biswas-v${VERSION}`;
const OFFLINE_URL = `/index.html`;

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/css/style.css',
  '/assets/js/script.js',
  OFFLINE_URL
].map(url => {
  // Apply cache-busting query string to assets, excluding the root and offline page
  return (url === '/' || url === OFFLINE_URL) ? url : `${url}?v=${VERSION}`;
});

// Install Event - Caching assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        // Fallback security: prevents service worker failure if one asset is missing
        console.error('Pre-cache failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate Event - Cleaning up old caches automatically
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

// Fetch Event - Network first, fallback to cache (best for SEO & performance)
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests (like browser extensions or POST)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If network is successful, potentially update cache here if needed
        return response;
      })
      .catch(() => {
        // If network fails, look in cache
        return caches.match(event.request).then((response) => {
          return response || caches.match(OFFLINE_URL);
        });
      })
  );
});
