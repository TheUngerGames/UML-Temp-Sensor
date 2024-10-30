const cacheName = 'esp32-data-cache-v1';
const assetsToCache = [
  '/UML-Temp-Sensor/',
  '/UML-Temp-Sensor/index.html',
  '/UML-Temp-Sensor/manifest.json',
  '/UML-Temp-Sensor/service-worker.js',
  '/UML-Temp-Sensor/style.css',
  '/UML-Temp-Sensor/icons/icon-192x192.png',
  '/UML-Temp-Sensor/icons/icon-512x512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(assetsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
