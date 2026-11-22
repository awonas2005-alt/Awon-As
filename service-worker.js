self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('my-cache-name').then((cache) => {
return cache.addAll([
'/',
'/index.html',
'/style.css',
'/app.js',
]);
})
);
});

self.addEventListener('fetch', (e) => {
console.log(e.request.url);
e.respondWith(
caches.match(e.request).then((response) => {
return response || fetch(e.request);
})
);
});

