self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('fotserwis-local-v5').then((c)=>c.addAll([
    './',
    './index.html?v=5',
    './manifest.webmanifest?v=5'
  ])));
});
self.addEventListener('activate', (e)=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then((r)=> r || fetch(e.request)));
});
