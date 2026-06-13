// ============================================================
// View: Learn — phase index + chapter list + chapter detail (skeleton)
// ============================================================

import { PHASES, CHAPTERS, CHAPTER_BODIES, chaptersByPhase, getChapter, nextChapter, getPhase } from '../curriculum.js';
import { reads } from '../models.js';
import { h, toast } from '../ui.js';

export function renderLearnIndex() {
  return h('section', { class: 'view' }, [
    h('p', { class: 'eyebrow' }, ['LEARN']),
    h('h2', { class: 'section__title', style: { marginTop: '6px', marginBottom: '16px' } }, ['学習ロードマップ']),
    h('p', { class: 'card__lede', style: { marginBottom: '20px' } }, ['4つのフェーズで段階的に。章をタップして読み進めてください。']),
    ...PHASES.map(p => {
      const list = chaptersByPhase(p.id);
      const done = list.filter(c => reads.isDone(c.id)).length;
      return h('section', { class: 'section' }, [
        h('div', { class: 'section__head' }, [
          h('div', {}, [
            h('span', { class: 'chapter__phase' }, [p.label]),
            h('h3', { class: 'section__title' }, [p.title]),
          ]),
          h('span', { class: 'badge' }, [`${done} / ${list.length} 完了`]),
        ]),
        h('p', { class: 'card__lede', style: { marginBottom: '10px' } }, [p.tagline]),
        ...list.map(c => renderChapterRow(c)),
      ]);
    }),
  ]);
}

function renderChapterRow(c) {
  const done = reads.isDone(c.id);
  return h('a', { class: `chapter ${done ? 'chapter--done' : ''}`, href: `#/learn/${c.id}` }, [
    h('span', { class: 'chapter__index' }, [done ? '✓' : c.n]),
    h('div', { class: 'chapter__main' }, [
      h('div', { class: 'chapter__title' }, [c.title]),
      h('div', { class: 'chapter__meta' }, [
        h('span', {}, [`目安 ${c.estMin} 分`]),
        done ? h('span', { class: 'badge badge--success' }, ['読了']) : null,
      ]),
    ]),
    h('span', { class: 'chapter__arrow', html: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 6l6 6-6 6"/></svg>' }),
  ]);
}

export function renderChapter(chapterId) {
  const c = getChapter(chapterId);
  if (!c) {
    return h('section', { class: 'view' }, [
      h('div', { class: 'empty' }, [
        h('p', { class: 'empty__title' }, ['章が見つかりません']),
        h('a', { class: 'btn btn--secondary btn--sm', href: '#/learn', style: { marginTop: '12px' } }, ['学習トップへ']),
      ]),
    ]);
  }
  reads.open(c.id);
  const phase = getPhase(c.phaseId);
  const done = reads.isDone(c.id);
  const next = nextChapter(c.id);

  const view = h('section', { class: 'view' }, [
    h('a', { class: 'btn btn--ghost btn--sm', href: '#/learn', style: { marginBottom: '12px' } }, ['← 学習トップ']),
    // Reading progress bar
    h('div', { class: 'read-progress' }, [
      h('div', { class: 'read-progress__fill', id: 'read-progress-fill' }),
    ]),
    h('p', { class: 'chapter__phase' }, [`${phase.label} · CHAPTER ${c.n}`]),
    h('h2', { class: 'section__title', style: { marginTop: '4px', marginBottom: '8px' } }, [c.title]),
    h('p', { class: 'card__lede' }, [`目安 ${c.estMin} 分　・　${phase.title}`]),

    // Chapter intro box
    h('div', { class: 'chapter-intro', style: { marginTop: '20px' } }, [
      h('div', { class: 'chapter-intro__row' }, [
        h('span', { class: 'chapter-intro__label' }, ['この章で']),
        h('span', { class: 'chapter-intro__value', html: `<strong>${c.title}</strong> の核を1章で掴む。` }),
      ]),
      h('div', { class: 'chapter-intro__row' }, [
        h('span', { class: 'chapter-intro__label' }, ['読了目安']),
        h('span', { class: 'chapter-intro__value' }, [`${c.estMin} 分`]),
      ]),
    ]),

    // Body: rich prose if available, else placeholder
    CHAPTER_BODIES[c.id]
      ? h('article', { class: 'prose', style: { marginTop: '20px' }, html: CHAPTER_BODIES[c.id] })
      : h('div', { class: 'card card--soft', style: { marginTop: '20px' } }, [
          h('p', { class: 'card__lede' }, ['この章の本文は準備中です。']),
        ]),

    // Done toggle
    h('section', { class: 'section', style: { marginTop: '24px' } }, [
      h('button', {
        type: 'button',
        class: `btn ${done ? 'btn--secondary' : ''} btn--block btn--lg`,
        onclick: (e) => {
          reads.markDone(c.id, !done);
          toast(done ? '読了を取り消しました' : '読了マークしました ✓');
          location.hash = next ? `#/learn/${next.id}` : '#/learn';
        },
      }, [done ? '読了を取り消す' : '読了にする ✓']),
      next ? h('a', { class: 'btn btn--ghost btn--block', href: `#/learn/${next.id}`, style: { marginTop: '8px' } }, [`次の章「${next.title}」 →`]) : null,
    ]),
  ]);

  // Attach scroll listener for reading progress
  requestAnimationFrame(() => {
    const fill = document.getElementById('read-progress-fill');
    if (!fill) return;
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? Math.min(100, Math.max(0, (window.scrollY / docH) * 100)) : 0;
      fill.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  });

  return view;
}
