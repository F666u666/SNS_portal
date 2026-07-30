// ============================================================
// View: Learn — phase index + chapter list + chapter detail (skeleton)
// ============================================================

import { PHASES, CHAPTERS, CHAPTER_BODIES, chaptersByPhase, getChapter, nextChapter, getPhase } from '../curriculum.js';
import { reads } from '../models.js';
import { h, toast } from '../ui.js';
import { ARTICLES } from '../articles/index.js';
import { renderArticle, renderArticleNav } from '../article.js';

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

export function renderPhase(phaseId) {
  const p = getPhase(phaseId);
  if (!p) return renderLearnIndex();
  const list = chaptersByPhase(p.id);
  const done = list.filter(c => reads.isDone(c.id)).length;
  const idx = PHASES.findIndex(x => x.id === phaseId);
  const prevP = PHASES[idx - 1];
  const nextP = PHASES[idx + 1];
  return h('section', { class: 'view' }, [
    h('p', { class: 'eyebrow' }, [p.label]),
    h('div', { class: 'section__head', style: { marginTop: '6px', marginBottom: '6px' } }, [
      h('h2', { class: 'section__title' }, [p.title]),
      h('span', { class: 'badge' }, [`${done} / ${list.length} 完了`]),
    ]),
    h('p', { class: 'card__lede', style: { marginBottom: '8px' } }, [p.tagline]),
    h('div', { class: 'progress', style: { marginBottom: '20px' } }, [
      h('div', { class: 'progress__fill', style: { width: `${Math.round((done / list.length) * 100)}%` } }),
    ]),
    h('section', { class: 'section' }, list.map(c => renderChapterRow(c))),
    // Prev / next phase nav
    h('div', { style: { display: 'flex', gap: '8px', marginTop: '20px' } }, [
      prevP ? h('a', { class: 'btn btn--ghost btn--sm', href: `#/phase/${prevP.id}`, style: { flex: '1' } }, [`← ${prevP.title}`]) : h('span', { style: { flex: '1' } }, []),
      nextP ? h('a', { class: 'btn btn--ghost btn--sm', href: `#/phase/${nextP.id}`, style: { flex: '1', textAlign: 'right' } }, [`${nextP.title} →`]) : h('span', { style: { flex: '1' } }, []),
    ]),
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
  const idx = CHAPTERS.findIndex(x => x.id === c.id);
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;

  // ブログ型の記事データがあれば、新テンプレートで描画
  const article = ARTICLES[c.id];
  const view = article
    ? h('section', { class: 'view' }, [
        h('div', { class: 'read-progress' }, [
          h('div', { class: 'read-progress__fill', id: 'read-progress-fill' }),
        ]),
        renderArticle(article, {
          chapter: c, phase, prev, next,
          footer: renderArticleFooter(c, done, next, prev),
        }),
      ])
    : renderLegacyChapter(c, phase, done, next);

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

// ── 記事下：読了ボタン ＋ メモ ＋ 前後リンク ──
function renderArticleFooter(c, done, next, prev) {
  return h('div', { class: 'a-foot' }, [
    h('button', {
      type: 'button',
      class: `btn ${done ? 'btn--secondary' : ''} btn--block`,
      onclick: () => {
        reads.markDone(c.id, !done);
        toast(done ? '読了を取り消しました' : '読了マークしました ✓');
        location.hash = next ? `#/learn/${next.id}` : `#/phase/${c.phaseId}`;
      },
    }, [done ? '読了を取り消す' : '読了にする ✓']),
    renderChapterMemo(c),
    renderArticleNav(prev, next),
  ]);
}

// ── 従来表示（記事データ未整備の章） ──
function renderLegacyChapter(c, phase, done, next) {
  return h('section', { class: 'view' }, [
    h('a', { class: 'btn btn--ghost btn--sm', href: `#/phase/${c.phaseId}`, style: { marginBottom: '12px' } }, [`← ${phase.title}`]),
    // Reading progress bar
    h('div', { class: 'read-progress' }, [
      h('div', { class: 'read-progress__fill', id: 'read-progress-fill' }),
    ]),
    h('p', { class: 'chapter__phase' }, [`${phase.label} · CHAPTER ${c.n}`]),
    h('h2', { class: 'section__title', style: { marginTop: '4px', marginBottom: '8px' } }, [c.title]),
    h('p', { class: 'card__lede' }, [`目安 ${c.estMin} 分　・　${phase.title}`]),

    // Video slot (set c.videoUrl later to embed)
    h('div', { class: 'video-slot' },
      c.videoUrl
        ? [ h('div', { class: 'video-embed', html: `<iframe src="${c.videoUrl}" title="解説動画" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }) ]
        : [ h('div', { class: 'video-pending' }, [
            h('span', { class: 'video-pending__icon' }, ['🎬']),
            h('div', {}, [
              h('div', { class: 'video-pending__t' }, ['解説動画は準備中']),
              h('div', { class: 'video-pending__s' }, ['公開されたらここに表示されます。まずは本文を読もう']),
            ]),
          ]) ]
    ),

    // Body: rich prose if available, else placeholder
    CHAPTER_BODIES[c.id]
      ? h('article', { class: 'prose', style: { marginTop: '20px' }, html: CHAPTER_BODIES[c.id] })
      : h('div', { class: 'card card--soft', style: { marginTop: '20px' } }, [
          h('p', { class: 'card__lede' }, ['この章の本文は準備中です。']),
        ]),

    // この章のメモ（書き出し動線）
    renderChapterMemo(c),

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
}

// ── この章のメモ（端末に保存。書き出し＝動線の要） ──
function renderChapterMemo(c) {
  const key = 'snsRoadmap:memo:' + c.id;
  let saved = '';
  try { saved = localStorage.getItem(key) || ''; } catch {}
  const ta = h('textarea', { class: 'memo__ta', placeholder: '例：一番刺さった一言／明日やること を1つだけ', maxlength: 2000 });
  ta.value = saved;
  const status = h('span', { class: 'memo__status' }, [saved ? '保存済み' : '']);
  ta.addEventListener('input', () => { status.textContent = ''; });
  const save = () => {
    try { localStorage.setItem(key, ta.value); } catch {}
    status.textContent = '保存しました ✓';
    toast('メモを保存しました');
  };
  return h('section', { class: 'section memo' }, [
    h('h3', { class: 'card__title', style: { marginBottom: '6px' } }, ['✍️ この章のメモ（1つでいい）']),
    h('p', { class: 'card__lede', style: { marginBottom: '10px' } }, ['見て終わりにしない。心に残った1つ、または明日やることを書こう。書くと記憶に残る。']),
    ta,
    h('div', { class: 'memo__bar' }, [status, h('button', { type: 'button', class: 'btn btn--sm', onclick: save }, ['保存'])]),
    h('p', { class: 'memo__submit' }, ['📨 書いたら、スクショして提出（DM）。出す前提で読むと完走できる。']),
  ]);
}
