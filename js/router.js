// ============================================================
// Router — hash-based, simple
// ============================================================

const routes = new Map();
let notFoundHandler = null;
let beforeEach = null;

export const router = {
  on(pattern, handler) {
    routes.set(pattern, handler);
    return this;
  },
  fallback(handler) {
    notFoundHandler = handler;
    return this;
  },
  guard(fn) {
    beforeEach = fn;
    return this;
  },
  start() {
    window.addEventListener('hashchange', () => this.resolve());
    window.addEventListener('DOMContentLoaded', () => this.resolve());
    this.resolve();
  },
  go(path) {
    if (path.startsWith('#')) location.hash = path;
    else location.hash = '#' + path;
  },
  current() {
    const raw = location.hash.replace(/^#/, '') || '/home';
    return raw.startsWith('/') ? raw : '/' + raw;
  },
  resolve() {
    const path = this.current();
    if (beforeEach && beforeEach(path) === false) return;
    for (const [pattern, handler] of routes) {
      const m = matchRoute(pattern, path);
      if (m) {
        handler(m.params, path);
        return;
      }
    }
    if (notFoundHandler) notFoundHandler(path);
  },
};

function matchRoute(pattern, path) {
  const pSeg = pattern.split('/').filter(Boolean);
  const tSeg = path.split('/').filter(Boolean);
  if (pSeg.length !== tSeg.length) return null;
  const params = {};
  for (let i = 0; i < pSeg.length; i++) {
    if (pSeg[i].startsWith(':')) {
      params[pSeg[i].slice(1)] = decodeURIComponent(tSeg[i]);
    } else if (pSeg[i] !== tSeg[i]) {
      return null;
    }
  }
  return { params };
}
