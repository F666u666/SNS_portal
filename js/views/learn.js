// ============================================================
// View: Learn — phase index + chapter list + chapter detail (skeleton)
// ============================================================

import { PHASES, CHAPTERS, CHAPTER_BODIES, chaptersByPhase, getChapter, nextChapter, getPhase } from '../curriculum.js';
import { reads, todos, notes } from '../models.js';
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
      c.suggestedTodos && c.suggestedTodos.length ? h('div', { class: 'chapter-intro__row' }, [
        h('span', { class: 'chapter-intro__label' }, ['次のTODO']),
        h('span', { class: 'chapter-intro__value' }, [c.suggestedTodos[0]]),
      ]) : null,
      h('div', { class: 'chapter-intro__row' }, [
        h('span', { class: 'chapter-intro__label' }, ['読了目安']),
        h('span', { class: 'chapter-intro__value' }, [`${c.estMin} 分`]),
      ]),
    ]),

    // Body: rich prose if available, else placeholder
    CHAPTER_BODIES[c.id]
      ? h('article', { class: 'prose', style: { marginTop: '20px' }, html: CHAPTER_BODIES[c.id] })
      : h('div', { class: 'card card--soft', style: { marginTop: '20px' } }, [
          h('p', { class: 'card__lede' }, ['この章の本文は順次移行中です。']),
          h('p', { class: 'card__lede', style: { marginTop: '8px' } }, ['いまは「読了マーク」「TODO追加」「メモ」が動きます。']),
        ]),

    // Suggested TODOs
    c.suggestedTodos && c.suggestedTodos.length ? h('section', { class: 'section', style: { marginTop: '24px' } }, [
      h('h3', { class: 'card__title', style: { marginBottom: '10px' } }, ['この章を読んだら次にやること']),
      ...c.suggestedTodos.map(text => h('button', {
        type: 'button',
        class: 'list-row',
        style: { width: '100%', textAlign: 'left', cursor: 'pointer' },
        onclick: () => {
          todos.add({ text, source: 'chapter', sourceRef: c.id, focused: false });
          toast('TODOに追加しました');
        },
      }, [
        h('span', { html: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M12 5v14"/></svg>', style: { color: 'var(--c-accent-strong)' } }),
        h('span', { style: { flex: '1' } }, [text]),
        h('span', { class: 'badge badge--accent' }, ['TODOに追加']),
      ])),
    ]) : null,

    // Quick note
    h('section', { class: 'section', style: { marginTop: '24px' } }, [
      h('h3', { class: 'card__title', style: { marginBottom: '10px' } }, ['この章のメモ']),
      renderQuickNote(c.id),
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

function renderQuickNote(chapterId) {
  const existing = notes.all().filter(n => n.chapterRef === chapterId);
  const ta = h('textarea', { class: 'textarea', placeholder: 'メモを書いて保存…', maxlength: 4000 });
  const saveBtn = h('button', {
    type: 'button',
    class: 'btn btn--sm',
    onclick: () => {
      if (!ta.value.trim()) return;
      notes.add({ text: ta.value, chapterRef: chapterId, tags: ['章メモ'] });
      ta.value = '';
      toast('メモを保存');
      list.replaceWith(renderList());
    },
  }, ['保存']);

  function renderList() {
    const cur = notes.all().filter(n => n.chapterRef === chapterId);
    if (!cur.length) return h('p', { class: 'card__lede', style: { marginTop: '12px' } }, ['まだメモはありません']);
    return h('div', { style: { marginTop: '12px' } },
      cur.map(n => h('div', { class: 'card card--soft', style: { marginBottom: '8px' } }, [
        h('p', { style: { whiteSpace: 'pre-wrap' } }, [n.text]),
        h('p', { class: 'card__lede', style: { marginTop: '6px', fontSize: '12px' } }, [
          new Date(n.createdAt).toLocaleString('ja-JP', { dateStyle: 'short', timeStyle: 'short' }),
        ]),
      ]))
    );
  }
  const list = renderList();

  return h('div', {}, [
    ta,
    h('div', { style: { display: 'flex', justifyContent: 'flex-end', marginTop: '8px' } }, [saveBtn]),
    list,
  ]);
}
