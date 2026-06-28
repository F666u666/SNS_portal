// ============================================================
// View: Home — あいさつ / 進捗 / 続きを読む
// ============================================================

import { storage } from '../storage.js';
import { reads } from '../models.js';
import { CHAPTERS, getChapter, nextChapter } from '../curriculum.js';
import { h, escapeHtml } from '../ui.js';

export function renderHome() {
  const user = storage.getUser();
  const meta = storage.getMeta(user.id);

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
      h('p', { class: 'eyebrow' }, ['SNS収益化 教材']),
      h('h2', { class: 'home-hero__title' }, [`こんにちは、${escapeHtml(user.name)} さん`]),
      h('div', { class: 'home-hero__meta' }, [
        h('span', { class: 'streak' }, [
          h('span', { class: 'streak__flame' }, ['✦']),
          `連続 ${meta.streak || 0} 日`,
        ]),
        h('span', { class: 'badge' }, [`ベスト ${meta.bestStreak || 0} 日`]),
      ]),
    ]),

    // この教材の使い方（動線）
    h('section', { class: 'section' }, [
      h('div', { class: 'howto' }, [
        h('div', { class: 'howto__title' }, ['📖 この教材の使い方']),
        h('p', { class: 'howto__lede' }, ['渡されて終わり、見て終わりが一番もったいない。下の4ステップを毎日回せば、必ず力になる。']),
        h('div', { class: 'howto__steps' }, [
          h('div', { class: 'howto__step' }, [h('span', { class: 'howto__n' }, ['1']), h('span', {}, ['1日1章 読む']) ]),
          h('div', { class: 'howto__step' }, [h('span', { class: 'howto__n' }, ['2']), h('span', {}, ['解説動画を見る（順次追加）']) ]),
          h('div', { class: 'howto__step' }, [h('span', { class: 'howto__n' }, ['3']), h('span', {}, ['章末メモを1つ書く']) ]),
          h('div', { class: 'howto__step' }, [h('span', { class: 'howto__n' }, ['4']), h('span', {}, ['スクショして提出（DM）']) ]),
        ]),
        h('p', { class: 'howto__note' }, ['※ 提出する前提で読むと、頭への残り方が変わる。']),
      ]),
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
          h('span', { class: 'stat__label' }, ['READ']),
          h('div', {}, [
            h('span', { class: 'stat__value' }, [String(doneCh)]),
            h('span', { class: 'stat__unit' }, ['章']),
          ]),
          h('span', { class: 'stat__hint' }, ['読了した章']),
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
        h('h3', { class: 'section__title' }, ['続きを読む']),
        h('a', { class: 'section__action', href: '#/learn' }, ['全章を見る →']),
      ]),
      resumeTarget
        ? renderChapterCard(resumeTarget, true)
        : h('div', { class: 'empty' }, [
            h('p', { class: 'empty__title' }, ['全章コンプリート']),
            h('p', { class: 'empty__hint' }, ['お疲れさま。気になる章を読み返そう']),
          ]),
    ]),
  ]);
}

function firstUnreadChapter() {
  return CHAPTERS.find(c => !reads.isDone(c.id)) || null;
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

export function mountHome(viewRoot) {
  viewRoot.innerHTML = '';
  const el = renderHome();
  viewRoot.appendChild(el);
}
