// ============================================================
// Models — TODO / Notes / Reads / shape helpers over storage
// ============================================================

import { storage } from './storage.js';

// ── ID gen ──
export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const todayISO = () => new Date().toISOString();
const todayKey = () => new Date().toISOString().slice(0, 10);

// ── Default data shape ──
export function ensureShape(data) {
  return {
    todos: [],          // [{id, text, status:'open'|'done', focused:bool, source?, sourceRef?, createdAt, completedAt?}]
    notes: [],          // [{id, text, tags:[], chapterRef?, createdAt, updatedAt}]
    reads: {},          // { [chapterId]: { firstOpenedISO, lastOpenedISO, doneISO? } }
    lastChapterRef: null,
    ...(data || {}),
  };
}

function getDataSafe() {
  const user = storage.getUser();
  if (!user) throw new Error('user not set');
  return { user, data: ensureShape(storage.getData(user.id)) };
}

function saveData(user, data) {
  storage.setData(user.id, data);
  // Tell views to refresh
  document.dispatchEvent(new CustomEvent('snsr:data-changed', { detail: { keys: ['data'] } }));
}

// ── TODO ──
export const todos = {
  all() {
    const { data } = getDataSafe();
    return data.todos;
  },
  add({ text, source, sourceRef, focused = false }) {
    const { user, data } = getDataSafe();
    if (!text || !text.trim()) return null;
    const t = {
      id: uid(),
      text: text.trim(),
      status: 'open',
      focused: !!focused,
      source: source || 'manual',
      sourceRef: sourceRef || null,
      createdAt: todayISO(),
    };
    data.todos.unshift(t);
    saveData(user, data);
    return t;
  },
  toggle(id) {
    const { user, data } = getDataSafe();
    const t = data.todos.find(x => x.id === id);
    if (!t) return null;
    if (t.status === 'open') {
      t.status = 'done';
      t.completedAt = todayISO();
    } else {
      t.status = 'open';
      delete t.completedAt;
    }
    saveData(user, data);
    return t;
  },
  toggleFocus(id) {
    const { user, data } = getDataSafe();
    const t = data.todos.find(x => x.id === id);
    if (!t) return null;
    const focusedCount = data.todos.filter(x => x.focused && x.status === 'open').length;
    if (!t.focused && focusedCount >= 3) {
      throw new Error('今日のフォーカスは3つまで。完了するか外してから追加してください。');
    }
    t.focused = !t.focused;
    saveData(user, data);
    return t;
  },
  remove(id) {
    const { user, data } = getDataSafe();
    data.todos = data.todos.filter(x => x.id !== id);
    saveData(user, data);
  },
  rename(id, text) {
    const { user, data } = getDataSafe();
    const t = data.todos.find(x => x.id === id);
    if (!t) return null;
    t.text = text.trim();
    saveData(user, data);
    return t;
  },
  todaysFocus() {
    return this.all().filter(t => t.focused);
  },
  openCount() {
    return this.all().filter(t => t.status === 'open').length;
  },
  doneTodayCount() {
    const k = todayKey();
    return this.all().filter(t => t.status === 'done' && (t.completedAt || '').slice(0, 10) === k).length;
  },
  doneTotal() {
    return this.all().filter(t => t.status === 'done').length;
  },
};

// ── Notes ──
export const notes = {
  all() {
    const { data } = getDataSafe();
    return data.notes;
  },
  add({ text, tags = [], chapterRef = null }) {
    const { user, data } = getDataSafe();
    if (!text || !text.trim()) return null;
    const n = {
      id: uid(),
      text: text.trim(),
      tags: tags.filter(Boolean),
      chapterRef,
      createdAt: todayISO(),
      updatedAt: todayISO(),
    };
    data.notes.unshift(n);
    saveData(user, data);
    return n;
  },
  update(id, patch) {
    const { user, data } = getDataSafe();
    const n = data.notes.find(x => x.id === id);
    if (!n) return null;
    Object.assign(n, patch, { updatedAt: todayISO() });
    saveData(user, data);
    return n;
  },
  remove(id) {
    const { user, data } = getDataSafe();
    data.notes = data.notes.filter(x => x.id !== id);
    saveData(user, data);
  },
  search(q) {
    const lo = q.toLowerCase();
    return this.all().filter(n =>
      n.text.toLowerCase().includes(lo) ||
      (n.tags || []).some(t => t.toLowerCase().includes(lo))
    );
  },
};

// ── Reads (which chapter has been opened/completed) ──
export const reads = {
  all() {
    const { data } = getDataSafe();
    return data.reads;
  },
  open(chapterId) {
    const { user, data } = getDataSafe();
    const r = data.reads[chapterId] || { firstOpenedISO: todayISO() };
    r.lastOpenedISO = todayISO();
    data.reads[chapterId] = r;
    data.lastChapterRef = chapterId;
    saveData(user, data);
    return r;
  },
  markDone(chapterId, done = true) {
    const { user, data } = getDataSafe();
    const r = data.reads[chapterId] || { firstOpenedISO: todayISO(), lastOpenedISO: todayISO() };
    if (done) r.doneISO = todayISO(); else delete r.doneISO;
    data.reads[chapterId] = r;
    saveData(user, data);
    return r;
  },
  isDone(chapterId) {
    return !!this.all()[chapterId]?.doneISO;
  },
  lastChapter() {
    const { data } = getDataSafe();
    return data.lastChapterRef;
  },
};
