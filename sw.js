/* DoParu service worker · build c4714efd · офлайн після першого відкриття */
const C = "doparu-c4714efd";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./data/core.js?b=c4714efd", "./data/cs101.js?b=c4714efd", "./data/cs101.2.js?b=c4714efd", "./data/cs101.3.js?b=c4714efd", "./data/cs201.js?b=c4714efd", "./data/cs201.2.js?b=c4714efd", "./data/cs201.3.js?b=c4714efd", "./data/math101.js?b=c4714efd", "./data/math101.2.js?b=c4714efd", "./data/math101.3.js?b=c4714efd", "./data/math115.js?b=c4714efd", "./data/math115.2.js?b=c4714efd", "./data/math115.3.js?b=c4714efd"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url); if (u.origin !== location.origin) return;
  if (u.pathname.includes("/fonts/")) { e.respondWith(caches.open(C).then(async c => (await c.match(e.request)) || fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; }))); return; }
  e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
