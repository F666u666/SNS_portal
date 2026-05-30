// ============================================================
// Service Worker — offline cache for SNS Roadmap
// Strategy: Cache-first for app shell, network-first for chapter bodies
// Bump CACHE_VERSION whenever shipping a new version.
// ============================================================

const CACHE_VERSION = 'v2-2026-05-30';
const APP_SHELL_CACHE = `sns-roadmap-shell-${CACHE_VERSION}`;
const DYNAMIC_CACHE   = `sns-roadmap-dyn-${CACHE_VERSION}`;

const APP_SHELL = [
  './',
  './index.html',
  './css/tokens.css',
  './css/base.css',
  './css/components.css',
  './css/app.css',
  './js/app.js',
  './js/storage.js',
  './js/router.js',
  './js/ui.js',
  './js/models.js',
  './js/curriculum.js',
  './js/views/home.js',
  './js/views/learn.js',
  './js/views/todo.js',
  './js/views/notes.js',
  './manifest.json',
  './assets/icons/icon-192.svg',
  './assets/icons/icon-512.svg',
];

// ── Install: pre-cache app shell ──
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP_SHELL_CACHE);
    await cache.addAll(APP_SHELL);
    self.skipWaiting();
  })());
});

// ── Activate: cleanup old caches ──
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(
      names.filter(n => n !== APP_SHELL_CACHE && n !== DYNAMIC_CACHE).map(n => caches.delete(n))
    );
    self.clients.claim();
  })());
});

// ── Fetch: cache-first for shell, network-first for everything else ──
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin && !url.hostname.includes('googleapis.com') && !url.hostname.includes('gstatic.com')) return;

  // Google Fonts — stale-while-revalidate
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(staleWhileRevalidate(req, DYNAMIC_CACHE));
    return;
  }

  // App shell — cache-first
  if (APP_SHELL.some(path => url.pathname.endsWith(path.replace('./', '/')) || url.pathname === path.replace('./', '/'))) {
    event.respondWith(cacheFirst(req, APP_SHELL_CACHE));
    return;
  }

  // Everything else — network-first
  event.respondWith(networkFirst(req, DYNAMIC_CACHE));
});

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch {
    const cached = await cache.match(req);
    return cached || new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const fetchPromise = fetch(req).then(res => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  }).catch(() => cached);
  return cached || fetchPromise;
}
