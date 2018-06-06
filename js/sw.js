const cacheName = 'restaurant-cache';
const urlsToCache = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg',
    
  'index.html',
  'restaurant.html',
  'css/styles.css',
  'js/main.js',
  'js/restaurant_info.js',
  'js/dbhelper.js',
  'data/restaurants.json',
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches
        .open(cacheName)
        .then(cache => cache.addAll(urlsToCache))
        );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request.then(response => {
            return response || fetch(event.request);
        })))
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});


