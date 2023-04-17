self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-pwa-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
  
        '/manifest.json',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css',
'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/regular.min.css',
'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/solid.min.css',

      
        '/512.png',
        '/192.png',
'/5b888d2f-1a8b-4fd9-878e-e0ca1df3b71e%20(1).png',
'/swiper-bundle.min.js'


       
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
