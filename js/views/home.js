// ============================================================
// View: Home — 今日のフォーカス / Streak / 次の章 / 進捗
// ============================================================

import { storage } from '../storage.js';
import { todos, reads } from '../models.js';
import { CHAPTERS, getChapter, nextChapter } from '../curriculum.js';
import { h, escapeHtml, toast } from '../ui.js';

export function renderHome() {
  const user = storage.getUser();
  const meta = storage.getMeta(user.id);
  const focus = todos.todaysFocus();
  const open = todos.openCount();
  const doneToday = todos.doneTodayCount();

  // resume target
  const last = reads.lastChapter();
  const continueCh = last ? (getChapter(last)) : null;
  const resumeTarget = continueCh && !reads.isDone(continueCh.id)
    ? continueCh
    : (last ? nextChapter(last) || firstUnreadChapter() : firstUnreadChapter());

  const totalCh = CHAPTERS.length;
  const doneCh = CHAPTERS.filter(c => reads.isDone(c.id)).length;
  const learnPct = Math.round((doneCh / totalCh) * 100);

  return h('section', { class: 'view' }, [
    // Greeting
    h('header', { class: 'home-hero' }, [
      h('p', { class: 'eyebrow' }, ['YOUR PERSONAL ROADMAP']),
      h('h2', { class: 'home-hero__title' }, [`こんにちは、${escapeHtml(user.name)} さん`]),
      h('div', { class: 'home-hero__meta' }, [
        h('span', { class: 'streak' }, [
          h('span', { class: 'streak__flame' }, ['✦']),
          `連続 ${meta.streak || 0} 日`,
        ]),
        h('span', { class: 'badge' }, [`ベスト ${meta.bestStreak || 0} 日`]),
      ]),
    ]),

    // Today's focus
    h('section', { class: 'section' }, [
      h('div', { class: 'section__head' }, [
        h('h3', { class: 'section__title' }, ['今日やる3つ']),
        h('a', { class: 'section__action', href: '#/todo' }, ['全部見る →']),
      ]),
      renderFocusList(focus),
    ]),

    // Stats
    h('section', { class: 'section' }, [
      h('div', { class: 'stat-grid' }, [
        h('div', { class: 'stat' }, [
          h('span', { class: 'stat__label' }, ['STREAK']),
          h('div', {}, [
            h('span', { class: 'stat__value' }, [String(meta.streak || 0)]),
            h('span', { class: 'stat__unit' }, ['日']),
          ]),
          h('span', { class: 'stat__hint' }, ['毎日開くと加算']),
        ]),
        h('div', { class: 'stat' }, [
          h('span', { class: 'stat__label' }, ['TODAY']),
          h('div', {}, [
            h('span', { class: 'stat__value' }, [String(doneToday)]),
            h('span', { class: 'stat__unit' }, [`/ ${doneToday + focus.filter(f => f.status === 'open').length || open}`]),
          ]),
          h('span', { class: 'stat__hint' }, ['今日の完了数']),
        ]),
        h('div', { class: 'stat' }, [
          h('span', { class: 'stat__label' }, ['LEARN']),
          h('div', {}, [
            h('span', { class: 'stat__value' }, [`${learnPct}`]),
            h('span', { class: 'stat__unit' }, ['%']),
          ]),
          h('span', { class: 'stat__hint' }, [`${doneCh} / ${totalCh} 章`]),
        ]),
      ]),
      h('div', { class: 'progress', style: { marginTop: '10px' } }, [
        h('div', { class: 'progress__fill', style: { width: `${learnPct}%` } }),
      ]),
    ]),

    // Continue from
    h('section', { class: 'section' }, [
      h('div', { class: 'section__head' }, [
        h('h3', { class: 'section__title' }, ['次のひと粒']),
        h('a', { class: 'section__action', href: '#/learn' }, ['学習を見る →']),
      ]),
      resumeTarget
        ? renderChapterCard(resumeTarget, true)
        : h('div', { class: 'empty' }, [
            h('p', { class: 'empty__title' }, ['全章コンプリート']),
            h('p', { class: 'empty__hint' }, ['ノートを見返したり、TODOを進めましょう']),
          ]),
    ]),
  ]);
}

function firstUnreadChapter() {
  return CHAPTERS.find(c => !reads.isDone(c.id)) || null;
}

function renderFocusList(focus) {
  if (!focus.length) {
    return h('div', { class: 'empty' }, [
      h('span', { class: 'empty__icon', html: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M12 5v14"/></svg>' }),
      h('p', { class: 'empty__title' }, ['今日のフォーカスを決めよう']),
      h('p', { class: 'empty__hint' }, ['TODOから最大3つ「★」で固定できます']),
      h('a', { class: 'btn btn--secondary btn--sm', href: '#/todo', style: { marginTop: '12px' } }, ['TODOへ']),
    ]);
  }
  const wrap = h('div', {});
  focus.forEach(t => {
    const row = h('div', { class: `focus-row ${t.status === 'done' ? 'focus-row--done' : ''}` }, [
      h('label', { class: 'check' }, [
        h('input', { type: 'checkbox', checked: t.status === 'done', onchange: () => { todos.toggle(t.id); refreshHome(); } }),
        h('span', { class: 'check__box', html: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5 9-11"/></svg>' }),
      ]),
      h('span', { class: 'focus-row__text' }, [t.text]),
      t.sourceRef ? h('a', { class: 'badge', href: `#/learn/${t.sourceRef}` }, ['章へ']) : null,
      h('button', { type: 'button', class: 'focus-row__remove', 'aria-label': 'フォーカスから外す', onclick: () => { todos.toggleFocus(t.id); refreshHome(); } },
        [h('span', { html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>' })]
      ),
    ]);
    wrap.appendChild(row);
  });
  return wrap;
}

function renderChapterCard(c, isResume = false) {
  const done = reads.isDone(c.id);
  return h('a', { class: `chapter ${done ? 'chapter--done' : ''}`, href: `#/learn/${c.id}` }, [
    h('span', { class: 'chapter__index' }, [done ? '✓' : c.n]),
    h('div', { class: 'chapter__main' }, [
      h('span', { class: 'chapter__phase' }, [c.phaseId.toUpperCase() + ' · ' + (isResume ? 'NEXT UP' : 'CHAPTER')]),
      h('div', { class: 'chapter__title' }, [c.title]),
      h('div', { class: 'chapter__meta' }, [
        h('span', {}, [`目安 ${c.estMin} 分`]),
        done ? h('span', { class: 'badge badge--success' }, ['読了']) : null,
      ]),
    ]),
    h('span', { class: 'chapter__arrow', html: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 6l6 6-6 6"/></svg>' }),
  ]);
}

let lastMount = null;
export function mountHome(viewRoot) {
  viewRoot.innerHTML = '';
  const el = renderHome();
  viewRoot.appendChild(el);
  lastMount = viewRoot;
}
function refreshHome() {
  if (!lastMount) return;
  mountHome(lastMount);
}
