// ============================================================
// Storage — localStorage wrapper with user-scoping + safe JSON
// ============================================================

const APP_NS = 'snsRoadmap';
const KEYS = {
  user:     `${APP_NS}:user`,           // { id, name, createdAt }
  theme:    `${APP_NS}:theme`,
  data:     (userId) => `${APP_NS}:data:${userId}`,
  backups:  (userId) => `${APP_NS}:backups:${userId}`,
  meta:     (userId) => `${APP_NS}:meta:${userId}`,    // { lastOpenISO, streak, lastBackupISO }
};

function safeParse(raw, fallback) {
  if (raw == null) return fallback;
  try { return JSON.parse(raw); } catch { return fallback; }
}

export const storage = {
  // ── User profile ──
  getUser() {
    return safeParse(localStorage.getItem(KEYS.user), null);
  },
  setUser(user) {
    localStorage.setItem(KEYS.user, JSON.stringify(user));
  },

  // ── Theme ──
  getTheme() {
    return localStorage.getItem(KEYS.theme) || 'sage';
  },
  setTheme(name) {
    localStorage.setItem(KEYS.theme, name);
  },

  // ── User-scoped data blob ──
  getData(userId) {
    return safeParse(localStorage.getItem(KEYS.data(userId)), {});
  },
  setData(userId, data) {
    localStorage.setItem(KEYS.data(userId), JSON.stringify(data));
  },
  patchData(userId, patch) {
    const cur = this.getData(userId);
    const next = { ...cur, ...patch };
    this.setData(userId, next);
    return next;
  },

  // ── Meta (streak, lastOpen, etc.) ──
  getMeta(userId) {
    return safeParse(localStorage.getItem(KEYS.meta(userId)), {
      lastOpenISO: null,
      streak: 0,
      bestStreak: 0,
      lastBackupISO: null,
    });
  },
  setMeta(userId, meta) {
    localStorage.setItem(KEYS.meta(userId), JSON.stringify(meta));
  },

  // ── Backup ring buffer (7 slots) ──
  getBackups(userId) {
    return safeParse(localStorage.getItem(KEYS.backups(userId)), []);
  },
  pushBackup(userId, snapshot) {
    const list = this.getBackups(userId);
    const entry = { takenAtISO: new Date().toISOString(), snapshot };
    list.unshift(entry);
    while (list.length > 7) list.pop();
    localStorage.setItem(KEYS.backups(userId), JSON.stringify(list));
    return entry;
  },

  // ── Export / Import ──
  exportAll(userId) {
    return {
      version: 1,
      exportedAtISO: new Date().toISOString(),
      user: this.getUser(),
      theme: this.getTheme(),
      data: this.getData(userId),
      meta: this.getMeta(userId),
    };
  },
  importAll(payload) {
    if (!payload || typeof payload !== 'object') throw new Error('invalid payload');
    if (payload.user) this.setUser(payload.user);
    if (payload.theme) this.setTheme(payload.theme);
    if (payload.user?.id && payload.data) this.setData(payload.user.id, payload.data);
    if (payload.user?.id && payload.meta) this.setMeta(payload.user.id, payload.meta);
  },

  // ── Reset (danger) ──
  wipeUser(userId) {
    localStorage.removeItem(KEYS.data(userId));
    localStorage.removeItem(KEYS.meta(userId));
    localStorage.removeItem(KEYS.backups(userId));
  },
};

// ── Migration shim: read legacy keys from the old index.html ──
// Old app stored under sns_portal_<userId> / sns_user_id / theme / many flat keys.
export function migrateLegacyIfNeeded() {
  if (storage.getUser()) return false;             // already migrated
  const legacyUserId = localStorage.getItem('sns_user_id');
  if (!legacyUserId) return false;

  const legacyBlobRaw = localStorage.getItem(`sns_portal_${legacyUserId}`);
  const legacyBlob = safeParse(legacyBlobRaw, {});
  const legacyTheme = localStorage.getItem('theme') || 'sage';

  // Collect flat legacy keys that don't belong to the namespaced new model
  // (best-effort — anything else stays in localStorage untouched)
  const flatKeys = ['accounts', 'hooks', 'buzzes', 'analytics', 'axisItems', 'memoGenres', 'memoItems', 'strategy_url', 'account_sheet_url'];
  const flatData = {};
  flatKeys.forEach(k => {
    const v = localStorage.getItem(k);
    if (v != null) flatData[k] = safeParse(v, v);
  });

  const userName = legacyBlob.name || legacyBlob.userName || legacyUserId;
  const user = { id: legacyUserId, name: userName, createdAt: new Date().toISOString() };
  storage.setUser(user);
  storage.setTheme(legacyTheme);
  storage.setData(legacyUserId, { ...legacyBlob, _legacyFlat: flatData });
  return true;
}
