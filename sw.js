/**
 * Web Developer | Hassan Biswas
 * UI/UX & Front-End Architecture
 * Automated Dynamic Versioning & Cache-Busting Logic (YY.MM.DD)
 */

const VERSION = new Date().toLocaleDateString('en-GB').split('/').reverse().join('.');
const CACHE_NAME = `hassan-biswas-v${VERSION}`;
const OFFLINE_URL = '/index.html';

// Assets to cache
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/404.html',
  '/manifest.json',
  '/assets/css/style.css',
  '/assets/js/script.js'
];

// Install Event - Caching assets with cache-busting during download
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Map assets to include the version query string ONLY for the network request
        const versionsedRequests = ASSETS_TO_CACHE.map(url => {
          const separator = url.includes('?') ? '&' : '?';
          return new Request(`${url}${separator}v=${VERSION}`, { cache: 'reload' });
        });
        
        // We fetch the versioned URL but we want to store it under the clean URL 
        // to make offline matching seamless.
        return Promise.all(
          versionsedRequests.map((request, index) => {
            return fetch(request).then((response) => {
              if (!response.ok) throw new TypeError('Bad response status');
              return cache.put(ASSETS_TO_CACHE[index], response);
            });
          })
        );
      })
      .catch((error) => {
        console.error('Pre-cache failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate Event - Zero Maintenance Cleanup
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

// Fetch Event - Performance & Offline Reliability
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Optional: Update cache dynamically if online
        return networkResponse;
      })
      .catch(() => {
        // Offline Logic: Match clean URLs
        return caches.match(event.request, { ignoreSearch: true })
          .then((cachedResponse) => {
            return cachedResponse || caches.match(OFFLINE_URL);
          });
      })
  );
});
