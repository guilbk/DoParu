/* DoParu service worker · build 9d2c7f5e · офлайн після першого відкриття */
const C = "doparu-9d2c7f5e";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./data/core.js?b=9d2c7f5e", "./data/cs101.js?b=9d2c7f5e", "./data/cs101.2.js?b=9d2c7f5e", "./data/cs101.3.js?b=9d2c7f5e", "./data/cs201.js?b=9d2c7f5e", "./data/cs201.2.js?b=9d2c7f5e", "./data/cs201.3.js?b=9d2c7f5e", "./data/math101.js?b=9d2c7f5e", "./data/math101.2.js?b=9d2c7f5e", "./data/math101.3.js?b=9d2c7f5e", "./data/math115.js?b=9d2c7f5e", "./data/math115.2.js?b=9d2c7f5e", "./data/math115.3.js?b=9d2c7f5e"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url); if (u.origin !== location.origin) return;
  if (u.pathname.includes("/fonts/")) { e.respondWith(caches.open(C).then(async c => (await c.match(e.request)) || fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; }))); return; }
  e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
