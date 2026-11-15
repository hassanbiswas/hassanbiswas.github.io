/**
 * Web Developer | Hassan Biswas
 * UI/UX & Front-End Architecture
 * Automated Dynamic Versioning & Cache-Busting Logic (YY.MM.DD)
 */

const VERSION = '26.11.01';
const CACHE_NAME = `hassan-biswas-v${VERSION}`;
const OFFLINE_URL = '/index.html';

// Assets to cache
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.html' // 404.html
];

// Install Event - Cache the offline shell with cache-busting during download
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Add the version only to the network request; store responses under clean URLs.
        const versionedRequests = ASSETS_TO_CACHE.map(url => {
          const separator = url.includes('?') ? '&' : '?';
          return new Request(`${url}${separator}v=${VERSION}`, { cache: 'reload' });
        });

        return Promise.all(
          versionedRequests.map((request, index) => {
            return fetch(request).then((response) => {
              if (!response.ok) throw new TypeError('Bad response status');
              return cache.put(ASSETS_TO_CACHE[index], response);
            });
          })
        );
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

// Fetch Event - Network first, with cached pages/assets available offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(event.request);
        if (response.ok && response.type === 'basic' &&
            new URL(event.request.url).origin === self.location.origin) {
          try {
            await cache.put(event.request, response.clone());
          } catch (error) {
            console.warn('Could not update cache:', error);
          }
        }
        return response;
      } catch (error) {
        // Use the cached request first, then the offline shell for page navigations.
        const cachedResponse = await cache.match(event.request, { ignoreSearch: true });
        if (cachedResponse) return cachedResponse;
        if (event.request.mode === 'navigate') {
          return (await cache.match(OFFLINE_URL)) || Response.error();
        }
        return Response.error();
      }
    })()
  );
});
