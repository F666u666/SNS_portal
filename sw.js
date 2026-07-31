// ============================================================
// Service Worker — offline cache for SNS Roadmap
// Strategy: network-first for same-origin (always fresh online,
//           cache fallback offline). Precache shell for offline.
// Bump CACHE_VERSION whenever shipping a new version.
// ============================================================

const CACHE_VERSION = 'v5-2026-07-30';
const APP_SHELL_CACHE = `sns-roadmap-shell-${CACHE_VERSION}`;
const DYNAMIC_CACHE   = `sns-roadmap-dyn-${CACHE_VERSION}`;

const APP_SHELL = [
  './',
  './index.html',
  './css/tokens.css',
  './css/base.css',
  './css/components.css',
  './css/app.css',
  './css/lesson.css',
  './css/article.css',
  './js/app.js',
  './js/storage.js',
  './js/router.js',
  './js/ui.js',
  './js/models.js',
  './js/curriculum.js',
  './js/views/home.js',
  './js/views/learn.js',
  './js/article.js',
  './js/articles/index.js',
  './js/articles/p1-axis.js',
  './js/articles/p1-bench.js',
  './js/articles/p1-genre.js',
  './js/articles/p1-harm.js',
  './js/articles/p1-profile.js',
  './js/articles/p1-stocktake.js',
  './js/articles/p2-algo.js',
  './js/articles/p2-ana.js',
  './js/articles/p2-basics.js',
  './js/articles/p2-buzz.js',
  './js/articles/p2-capcut.js',
  './js/articles/p2-pre.js',
  './js/articles/p2-templates.js',
  './js/articles/p3-cautions.js',
  './js/articles/p3-conversation.js',
  './js/articles/p3-feed-vs-story.js',
  './js/articles/p3-ideas.js',
  './js/articles/p3-mind.js',
  './js/articles/p3-monetize.js',
  './js/articles/p3-seven.js',
  './js/articles/p3-writing.js',
  './js/articles/p4-cross.js',
  './js/articles/p4-kpi.js',
  './js/articles/p4-mix.js',
  './js/articles/p4-product.js',
  './js/articles/p4-story-design.js',
  './js/articles/p5-close.js',
  './js/articles/p5-highticket.js',
  './js/articles/p5-letter.js',
  './js/articles/p5-list.js',
  './js/articles/p5-overview.js',
  './js/articles/p5-product.js',
  './js/articles/p5-story.js',
  './js/articles/p5-target.js',
  './manifest.json',
  './assets/icons/icon-192.svg',
  './assets/icons/icon-512.svg',
];

// ── Install: pre-cache app shell (for offline) ──
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP_SHELL_CACHE);
    // Allow individual failures so one missing file doesn't break install
    await Promise.all(APP_SHELL.map(p => cache.add(p).catch(() => {})));
    self.skipWaiting();
  })());
});

// ── Activate: cleanup old caches + take control ──
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(
      names.filter(n => n !== APP_SHELL_CACHE && n !== DYNAMIC_CACHE).map(n => caches.delete(n))
    );
    await self.clients.claim();
  })());
});

// ── Fetch ──
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Google Fonts — stale-while-revalidate
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(staleWhileRevalidate(req, DYNAMIC_CACHE));
    return;
  }

  // Other cross-origin — let the browser handle it
  if (url.origin !== self.location.origin) return;

  // Same-origin (HTML / CSS / JS / assets) — network-first so updates always show online
  event.respondWith(networkFirst(req, APP_SHELL_CACHE));
});

async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch {
    const cached = await cache.match(req) || await cache.match('./index.html');
    return cached || new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const fetchPromise = fetch(req).then(res => {
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  }).catch(() => cached);
  return cached || fetchPromise;
}
