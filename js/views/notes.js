// ============================================================
// View: Notes — search, tag filter, edit, delete
// ============================================================

import { notes } from '../models.js';
import { getChapter } from '../curriculum.js';
import { h, escapeHtml, toast, openModal } from '../ui.js';

let currentQuery = '';
let currentTag = null;
let currentSort = 'new'; // 'new' | 'old'

export function renderNotes() {
  const all = notes.all();
  let filtered = all;
  if (currentTag) filtered = filtered.filter(n => (n.tags || []).includes(currentTag));
  if (currentQuery) {
    const lo = currentQuery.toLowerCase();
    filtered = filtered.filter(n => n.text.toLowerCase().includes(lo) || (n.tags || []).some(t => t.toLowerCase().includes(lo)));
  }
  filtered = filtered.slice().sort((a, b) => {
    const da = new Date(a.createdAt).getTime();
    const db = new Date(b.createdAt).getTime();
    return currentSort === 'new' ? db - da : da - db;
  });

  // Collect tags
  const tagCounts = {};
  all.forEach(n => (n.tags || []).forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1; }));
  const tags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  return h('section', { class: 'view' }, [
    h('p', { class: 'eyebrow' }, ['NOTES']),
    h('h2', { class: 'section__title', style: { marginTop: '6px', marginBottom: '8px' } }, ['ノート']),
    h('p', { class: 'card__lede', style: { marginBottom: '16px' } }, [`${all.length} 件のノート`]),

    // Search
    renderSearchBar(),

    // Tag filters
    tags.length ? h('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap', margin: '14px 0' } }, [
      h('button', {
        type: 'button',
        class: `badge ${currentTag === null ? 'badge--accent' : ''}`,
        style: { cursor: 'pointer', border: '0' },
        onclick: () => { currentTag = null; refresh(); },
      }, [`すべて · ${all.length}`]),
      ...tags.map(([t, c]) => h('button', {
        type: 'button',
        class: `badge ${currentTag === t ? 'badge--accent' : ''}`,
        style: { cursor: 'pointer', border: '0' },
        onclick: () => { currentTag = currentTag === t ? null : t; refresh(); },
      }, [`${t} · ${c}`])),
    ]) : null,

    // Add free note button
    h('button', { type: 'button', class: 'btn btn--secondary btn--block', style: { marginBottom: '16px' }, onclick: addNote }, ['＋ 新しいノートを追加']),

    // Note list
    filtered.length === 0
      ? h('div', { class: 'empty', style: { marginTop: '16px' } }, [
          h('p', { class: 'empty__title' }, [
            currentQuery ? '検索結果なし' : currentTag ? `「${currentTag}」のノートなし` : 'まだノートはありません',
          ]),
          h('p', { class: 'empty__hint' }, ['章の本文ページからメモを保存するか、上のボタンから新しく追加できます']),
        ])
      : h('div', {}, filtered.map(n => renderNoteCard(n))),
  ]);
}

function renderSearchBar() {
  const input = h('input', { class: 'input', type: 'search', placeholder: '本文・タグから検索…', value: currentQuery, maxlength: 200 });
  input.addEventListener('input', (e) => { currentQuery = e.target.value; refresh(); });
  return h('div', {}, [input]);
}

function renderNoteCard(n) {
  const chapter = n.chapterRef ? getChapter(n.chapterRef) : null;
  const dt = new Date(n.createdAt).toLocaleString('ja-JP', { dateStyle: 'short', timeStyle: 'short' });
  return h('div', { class: 'card', style: { marginBottom: '10px' } }, [
    chapter ? h('a', {
      href: `#/learn/${chapter.id}`,
      style: { display: 'inline-block', marginBottom: '8px' },
      class: 'badge badge--accent',
    }, [`📖 ${chapter.title}`]) : null,
    h('p', { style: { whiteSpace: 'pre-wrap', lineHeight: '1.7' } }, [n.text]),
    h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', flexWrap: 'wrap', gap: '8px' } }, [
      h('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap' } }, [
        ...(n.tags || []).map(t => h('span', { class: 'badge' }, [t])),
        h('span', { class: 'card__lede', style: { fontSize: '11px' } }, [dt]),
      ]),
      h('div', { style: { display: 'flex', gap: '4px' } }, [
        h('button', { type: 'button', class: 'btn btn--ghost btn--sm', onclick: () => editNote(n) }, ['編集']),
        h('button', { type: 'button', class: 'btn btn--ghost btn--sm', style: { color: 'var(--c-danger)' }, onclick: () => removeNote(n) }, ['削除']),
      ]),
    ]),
  ]);
}

function addNote() {
  const ta = h('textarea', { class: 'textarea', placeholder: 'ノート本文…', maxlength: 4000 });
  const tagInput = h('input', { class: 'input', type: 'text', placeholder: 'タグ（カンマ区切り）例：気づき, 仮説', maxlength: 100 });
  openModal({
    title: '新しいノート',
    body: h('div', {}, [
      h('div', { class: 'field' }, [h('label', { class: 'field__label' }, ['本文']), ta]),
      h('div', { class: 'field' }, [h('label', { class: 'field__label' }, ['タグ']), tagInput]),
    ]),
    actions: [
      { label: 'キャンセル', variant: 'secondary', onClick: (_e, { close }) => close() },
      { label: '保存', onClick: (_e, { close }) => {
        if (!ta.value.trim()) return;
        const tags = tagInput.value.split(',').map(s => s.trim()).filter(Boolean);
        notes.add({ text: ta.value, tags });
        close();
        toast('ノートを保存');
        refresh();
      } },
    ],
  });
}

function editNote(n) {
  const ta = h('textarea', { class: 'textarea', value: n.text, maxlength: 4000 });
  const tagInput = h('input', { class: 'input', type: 'text', value: (n.tags || []).join(', '), maxlength: 100 });
  openModal({
    title: 'ノート編集',
    body: h('div', {}, [
      h('div', { class: 'field' }, [h('label', { class: 'field__label' }, ['本文']), ta]),
      h('div', { class: 'field' }, [h('label', { class: 'field__label' }, ['タグ']), tagInput]),
    ]),
    actions: [
      { label: 'キャンセル', variant: 'secondary', onClick: (_e, { close }) => close() },
      { label: '保存', onClick: (_e, { close }) => {
        const tags = tagInput.value.split(',').map(s => s.trim()).filter(Boolean);
        notes.update(n.id, { text: ta.value, tags });
        close();
        toast('保存');
        refresh();
      } },
    ],
  });
}

function removeNote(n) {
  if (!confirm('このノートを削除しますか？')) return;
  notes.remove(n.id);
  toast('削除');
  refresh();
}

let lastMount = null;
export function mountNotes(viewRoot) {
  viewRoot.innerHTML = '';
  viewRoot.appendChild(renderNotes());
  lastMount = viewRoot;
}
function refresh() { if (lastMount) mountNotes(lastMount); }
