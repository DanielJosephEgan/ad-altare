const CACHE = 'ad-altare-2026-10-28-beta-4';
const FILES = ['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg','./data/masses-2026-part1.js','./data/masses-2026-part2.js','./data/masses-2026-part3.js','./data/masses-2026-part4.js','./data/latin-lexicon.js','./data/word-match-overrides.js'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request,copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
