// ============================================================
// Article — ブログ型 記事レイアウト ＋ 図解コンポーネント
//   記事データ（blocks配列）を渡すだけで、本文と図解が組み上がる
//   ※このサイトはバニラJSのため、React相当を描画関数として実装
// ============================================================

import { h, escapeHtml } from './ui.js';

// 本文中の **強調** をタグ化（データはプレーンテキストで書ける）
function rich(text) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
}

// ────────────────────────────────────────
// 図解コンポーネント
// ────────────────────────────────────────

// <ComparisonGraphic /> ✗ と ○ を並べる
function ComparisonGraphic(b) {
  const col = (d, kind) => h('div', { class: `g-cmp__col g-cmp__col--${kind}` }, [
    h('div', { class: 'g-cmp__label' }, [d.label || (kind === 'bad' ? '✗' : '○')]),
    d.title ? h('div', { class: 'g-cmp__title' }, [d.title]) : null,
    h('p', { class: 'g-cmp__text', html: rich(d.text) }),
  ]);
  return h('figure', { class: 'g g-cmp' }, [
    h('div', { class: 'g-cmp__grid' }, [col(b.left, 'bad'), col(b.right, 'good')]),
    b.caption ? h('figcaption', { class: 'g__cap' }, [b.caption]) : null,
  ]);
}

// <FlowGraphic /> A → B → C（スマホは縦積み）
function FlowGraphic(b) {
  const nodes = [];
  b.items.forEach((t, i) => {
    if (i > 0) nodes.push(h('span', { class: 'g-flow__arrow', 'aria-hidden': 'true' }, ['▶']));
    const isGoal = b.goal && i === b.items.length - 1;
    nodes.push(h('span', { class: `g-flow__item${isGoal ? ' is-goal' : ''}` }, [t]));
  });
  return h('figure', { class: 'g g-flow' }, [
    h('div', { class: 'g-flow__row' }, nodes),
    b.caption ? h('figcaption', { class: 'g__cap' }, [b.caption]) : null,
  ]);
}

// <StepGraphic /> 番号つき手順
function StepGraphic(b) {
  return h('figure', { class: 'g g-steps' }, [
    b.title ? h('div', { class: 'g__title' }, [b.title]) : null,
    ...b.items.map((it, i) => h('div', { class: 'g-step' }, [
      h('span', { class: 'g-step__n' }, [String(i + 1)]),
      h('div', { class: 'g-step__body' }, [
        h('div', { class: 'g-step__title' }, [it.title]),
        it.text ? h('p', { class: 'g-step__text', html: rich(it.text) }) : null,
      ]),
    ])),
  ]);
}

// <PointCard />
function PointCard(b) {
  return h('aside', { class: 'c c--point' }, [
    h('span', { class: 'c__label' }, ['POINT']),
    b.title ? h('div', { class: 'c__title' }, [b.title]) : null,
    h('p', { class: 'c__text', html: rich(b.text) }),
  ]);
}

// <ExampleCard />
function ExampleCard(b) {
  return h('aside', { class: 'c c--example' }, [
    h('span', { class: 'c__label' }, ['具体例']),
    b.title ? h('div', { class: 'c__title' }, [b.title]) : null,
    b.text ? h('p', { class: 'c__text', html: rich(b.text) }) : null,
    b.items ? h('ul', { class: 'c__list' }, b.items.map(t => h('li', { html: rich(t) }))) : null,
  ]);
}

// <WarningCard />
function WarningCard(b) {
  return h('aside', { class: 'c c--warn' }, [
    h('span', { class: 'c__label' }, ['注意']),
    b.title ? h('div', { class: 'c__title' }, [b.title]) : null,
    h('p', { class: 'c__text', html: rich(b.text) }),
  ]);
}

// <DefinitionCard />
function DefinitionCard(b) {
  return h('aside', { class: 'c c--def' }, [
    h('span', { class: 'c__label' }, ['用語']),
    h('div', { class: 'c__title' }, [b.term]),
    h('p', { class: 'c__text', html: rich(b.text) }),
  ]);
}

// <ChecklistCard /> 今日やること（チェック状態は端末に保存）
function ChecklistCard(b, ctx) {
  const box = h('aside', { class: 'c c--check' }, [
    h('span', { class: 'c__label' }, ['今日やること']),
    b.title ? h('div', { class: 'c__title' }, [b.title]) : null,
  ]);
  const list = h('ul', { class: 'c-check__list' });
  b.items.forEach((t, i) => {
    const key = `snsRoadmap:check:${ctx.id}:${i}`;
    let on = false;
    try { on = localStorage.getItem(key) === '1'; } catch {}
    const input = h('input', { type: 'checkbox', class: 'c-check__box' });
    input.checked = on;
    const li = h('li', { class: `c-check__item${on ? ' is-done' : ''}` }, [
      h('label', {}, [input, h('span', { class: 'c-check__text', html: rich(t) })]),
    ]);
    input.addEventListener('change', () => {
      li.classList.toggle('is-done', input.checked);
      try { localStorage.setItem(key, input.checked ? '1' : '0'); } catch {}
    });
    list.appendChild(li);
  });
  box.appendChild(list);
  return box;
}

// 表（スマホでは1行ずつのカードに変形）
function TableBlock(b) {
  const thead = h('thead', {}, [h('tr', {}, b.head.map(t => h('th', {}, [t])))]);
  const tbody = h('tbody', {}, b.rows.map(r => h('tr', {},
    r.map((cell, i) => h('td', { 'data-label': b.head[i] || '', html: rich(String(cell)) }))
  )));
  return h('figure', { class: 'g g-table' }, [
    h('table', {}, [thead, tbody]),
    b.caption ? h('figcaption', { class: 'g__cap' }, [b.caption]) : null,
  ]);
}

// ────────────────────────────────────────
// ブロック → DOM
// ────────────────────────────────────────
const RENDERERS = {
  h2:         (b, ctx) => h('h2', { class: 'a-h2' }, [h('span', { class: 'a-h2__n' }, [String(++ctx._h2)]), b.text]),
  h3:         (b) => h('h3', { class: 'a-h3' }, [b.text]),
  p:          (b) => h('p',  { class: 'a-p', html: rich(b.text) }),
  list:       (b) => h('ul', { class: 'a-list' }, b.items.map(t => h('li', { html: rich(t) }))),
  comparison: ComparisonGraphic,
  flow:       FlowGraphic,
  steps:      StepGraphic,
  point:      PointCard,
  example:    ExampleCard,
  warning:    WarningCard,
  definition: DefinitionCard,
  checklist:  ChecklistCard,
  table:      TableBlock,
};

function renderBlocks(blocks, ctx) {
  return blocks.map(b => {
    const fn = RENDERERS[b.type];
    if (!fn) return null;
    return fn(b, ctx);
  }).filter(Boolean);
}

// ────────────────────────────────────────
// ArticleLayout — 記事ページの共通テンプレート
//   パンくず → カテゴリ → H1 → 概要 → わかること → 本文/図解 → 前後リンク
// ────────────────────────────────────────
export function renderArticle(article, meta) {
  const { chapter, phase, prev, next, footer } = meta;
  const ctx = { id: chapter.id, _h2: 0 };

  return h('article', { class: 'article' }, [
    // 1. パンくず
    h('nav', { class: 'a-crumb', 'aria-label': 'パンくず' }, [
      h('a', { href: '#/home' }, ['ホーム']),
      h('span', { class: 'a-crumb__sep' }, ['/']),
      h('a', { href: `#/phase/${phase.id}` }, [phase.title]),
      h('span', { class: 'a-crumb__sep' }, ['/']),
      h('span', { class: 'a-crumb__cur' }, [chapter.title]),
    ]),

    // 2. カテゴリータグ ＋ 読了目安
    h('div', { class: 'a-tags' }, [
      h('a', { class: 'a-tag', href: `#/phase/${phase.id}` }, [`${phase.label} ${phase.title}`]),
      h('span', { class: 'a-meta' }, [`読了 約${chapter.estMin}分`]),
    ]),

    // 3. H1
    h('h1', { class: 'a-title' }, [chapter.title]),

    // 4. この記事の概要
    article.lead ? h('p', { class: 'a-lead', html: rich(article.lead) }) : null,

    // 動画（URLがある時だけ表示）
    chapter.videoUrl ? h('div', { class: 'a-video' }, [
      h('div', { class: 'video-embed', html: `<iframe src="${escapeHtml(chapter.videoUrl)}" title="解説動画" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }),
    ]) : null,

    // 5. この記事でわかること
    article.takeaways && article.takeaways.length
      ? h('aside', { class: 'a-takeaways' }, [
          h('div', { class: 'a-takeaways__h' }, ['この記事でわかること']),
          h('ul', {}, article.takeaways.map(t => h('li', { html: rich(t) }))),
        ])
      : null,

    // 6〜12. 本文・図解・カード
    h('div', { class: 'a-body' }, renderBlocks(article.blocks || [], ctx)),

    // 読了 ＋ 13. 前の記事 / 次の記事
    footer || null,
  ]);
}

// 前後リンク（記事下ナビ）
export function renderArticleNav(prev, next) {
  return h('nav', { class: 'a-nav', 'aria-label': '前後の記事' }, [
    prev
      ? h('a', { class: 'a-nav__link a-nav__link--prev', href: `#/learn/${prev.id}` }, [
          h('span', { class: 'a-nav__lab' }, ['← 前の記事']),
          h('span', { class: 'a-nav__t' }, [prev.title]),
        ])
      : h('span', { class: 'a-nav__link is-empty' }, []),
    next
      ? h('a', { class: 'a-nav__link a-nav__link--next', href: `#/learn/${next.id}` }, [
          h('span', { class: 'a-nav__lab' }, ['次の記事 →']),
          h('span', { class: 'a-nav__t' }, [next.title]),
        ])
      : h('span', { class: 'a-nav__link is-empty' }, []),
  ]);
}
