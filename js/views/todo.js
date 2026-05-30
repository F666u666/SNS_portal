// ============================================================
// View: TODO — add / focus toggle / done / filter
// ============================================================

import { todos } from '../models.js';
import { getChapter } from '../curriculum.js';
import { h, toast } from '../ui.js';

let currentFilter = 'all'; // 'all' | 'open' | 'done' | 'focus'

export function renderTodo() {
  const all = todos.all();
  const filtered = filterList(all, currentFilter);
  const openCount = all.filter(t => t.status === 'open').length;
  const doneCount = all.filter(t => t.status === 'done').length;
  const focusCount = all.filter(t => t.focused && t.status === 'open').length;

  return h('section', { class: 'view' }, [
    h('p', { class: 'eyebrow' }, ['TASKS']),
    h('h2', { class: 'section__title', style: { marginTop: '6px', marginBottom: '8px' } }, ['TODO']),
    h('p', { class: 'card__lede', style: { marginBottom: '16px' } }, [`未完了 ${openCount} / 完了 ${doneCount} ・ 今日のフォーカス ${focusCount}/3`]),

    renderAddForm(),

    h('div', { style: { display: 'flex', justifyContent: 'center', margin: '20px 0 12px' } }, [
      h('div', { class: 'segment', role: 'tablist' }, [
        segItem('all',   'すべて'),
        segItem('open',  '未完了'),
        segItem('focus', '今日'),
        segItem('done',  '完了'),
      ]),
    ]),

    filtered.length === 0
      ? h('div', { class: 'empty' }, [
          h('p', { class: 'empty__title' }, [emptyTitleFor(currentFilter)]),
          h('p', { class: 'empty__hint' }, ['上のフォームから追加できます']),
        ])
      : h('div', {}, filtered.map(t => renderTodoRow(t))),
  ]);
}

function segItem(value, label) {
  return h('button', {
    type: 'button',
    class: 'segment__item',
    'aria-selected': currentFilter === value ? 'true' : 'false',
    onclick: () => { currentFilter = value; refresh(); },
  }, [label]);
}

function emptyTitleFor(f) {
  return {
    all: 'まだTODOがありません',
    open: '未完了のTODOはありません',
    focus: '今日のフォーカス未設定',
    done: '完了したTODOはありません',
  }[f];
}

function filterList(list, f) {
  if (f === 'open')  return list.filter(t => t.status === 'open');
  if (f === 'done')  return list.filter(t => t.status === 'done');
  if (f === 'focus') return list.filter(t => t.focused);
  return list;
}

function renderAddForm() {
  const input = h('input', { class: 'input', type: 'text', placeholder: '新しいTODOを書く…', maxlength: 200 });
  const submit = () => {
    const v = input.value.trim();
    if (!v) return;
    todos.add({ text: v });
    input.value = '';
    refresh();
  };
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
  input.style.flex = '1';
  const btn = h('button', { type: 'button', class: 'btn', onclick: submit }, ['追加']);
  btn.style.flexShrink = '0';
  return h('div', { style: { display: 'flex', gap: '8px', alignItems: 'stretch' } }, [
    input,
    btn,
  ]);
}

function renderTodoRow(t) {
  const chapterLink = t.sourceRef && getChapter(t.sourceRef);
  return h('div', { class: `focus-row ${t.status === 'done' ? 'focus-row--done' : ''}` }, [
    h('label', { class: 'check', 'aria-label': '完了' }, [
      h('input', { type: 'checkbox', checked: t.status === 'done', onchange: () => { todos.toggle(t.id); refresh(); } }),
      h('span', { class: 'check__box', html: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5 9-11"/></svg>' }),
    ]),
    h('div', { style: { flex: '1', minWidth: 0 } }, [
      h('div', { class: 'focus-row__text' }, [t.text]),
      chapterLink ? h('a', {
        class: 'card__lede',
        style: { fontSize: '12px', marginTop: '2px', display: 'inline-block' },
        href: `#/learn/${chapterLink.id}`,
      }, [`← ${chapterLink.title}`]) : null,
    ]),
    h('button', {
      type: 'button',
      class: 'focus-row__remove',
      'aria-label': t.focused ? 'フォーカス解除' : '今日のフォーカスにする（最大3つ）',
      title: t.focused ? 'フォーカス中' : '今日のフォーカスに追加',
      onclick: () => {
        try { todos.toggleFocus(t.id); refresh(); }
        catch (e) { toast(e.message || String(e)); }
      },
      style: { color: t.focused ? 'var(--c-warn)' : 'var(--c-mid-3)' },
    }, [
      h('span', { html: t.focused
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 7.36H22l-6.18 4.49L18.18 22 12 17.27 5.82 22l2.36-8.15L2 9.36h7.61z"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l2.39 7.36H22l-6.18 4.49L18.18 22 12 17.27 5.82 22l2.36-8.15L2 9.36h7.61z"/></svg>',
      }),
    ]),
    h('button', {
      type: 'button',
      class: 'focus-row__remove',
      'aria-label': '削除',
      onclick: () => { if (confirm('このTODOを削除しますか？')) { todos.remove(t.id); refresh(); } },
    }, [
      h('span', { html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"/></svg>' }),
    ]),
  ]);
}

let lastMount = null;
export function mountTodo(viewRoot) {
  viewRoot.innerHTML = '';
  viewRoot.appendChild(renderTodo());
  lastMount = viewRoot;
}
function refresh() {
  if (lastMount) mountTodo(lastMount);
}
