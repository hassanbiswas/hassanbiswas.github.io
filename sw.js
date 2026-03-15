/**
 * Web Developer | Hassan Biswas
 * Automated Dynamic Versioning & Cache-Busting Logic (YY.MM.DD)
 */

const now = new Date();
const YY = now.getFullYear().toString().slice(-2);
const MM = (now.getMonth() + 1).toString().padStart(2, '0');
const DD = now.getDate().toString().padStart(2, '0');
const VERSION = '26.03.15';

const CACHE_NAME = `hassan-biswas-v${VERSION}`;
const OFFLINE_URL = '/index.html';

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
      console.log(`[SW] Initializing Cache: ${CACHE_NAME}`);
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
            console.log(`[SW] Deleting Old Cache: ${cache}`);
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
