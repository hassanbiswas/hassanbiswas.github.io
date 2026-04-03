/**
 * Web Developer | Hassan Biswas
 * Automated Dynamic Versioning & Cache-Busting Logic (YY.MM.DD)
 */
const VERSION = '26.04.03';

const CACHE_NAME = `hassan-biswas-v${VERSION}`;
const OFFLINE_URL = '/index.html'; // offline.html

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/css/style.css',
  '/assets/js/script.js',
  OFFLINE_URL
].map(url => (url === '/' || url === OFFLINE_URL) ? url : `${url}?v=${VERSION}`);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log(`[SW] Initializing Cache: ${CACHE_NAME}`);
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            // console.log(`[SW] Deleting Old Cache: ${cache}`);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((response) => {
        return response || caches.match(OFFLINE_URL);
      });
    })
  );
});
