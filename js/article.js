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

const VISUAL_GUIDES = {
  'p1-genre': { pose: 'map', title: '勝てる場所を探す', lead: '需要・継続・出口。この3つが重なる場所だけを選ぶ。', items: ['観客がいるか', '自分が続けられるか', 'お金の出口があるか'] },
  'p1-harm': { pose: 'compass', title: '悩みの深さを見る', lead: '売れる市場には深い悩みがある。HARMで見分ける。', items: ['健康', '人間関係', 'お金・夢'] },
  'p1-stocktake': { pose: 'note', title: '自分の材料を並べる', lead: '経験・悩み・得意を紙に出す。発信の種が見えてくる。', items: ['過去の悩み', '人に聞かれること', 'お金と時間を使ったこと'] },
  'p1-axis': { pose: 'flag', title: '何の人か決める', lead: '発信軸は思い出してもらうためのラベル。広いまま出さない。', items: ['誰に', '何を届けるか', 'どう変えるか'] },
  'p1-bench': { pose: 'search', title: '参考を見つける', lead: '伸びている人を集める。勘ではなく型を見る。', items: ['探す', '分解する', '真似る型を選ぶ'] },
  'p1-profile': { pose: 'profile', title: '入口を整える', lead: 'プロフィールは、投稿を見た人がフォローするか決める場所。', items: ['名前', '肩書き', '導線'] },
  'p2-algo': { pose: 'chart', title: '伸びる流れを見る', lead: 'おすすめに乗る順番を知る。改善点が見える。', items: ['止める', '最後まで見せる', '反応を集める'] },
  'p2-capcut': { pose: 'camera', title: '動画を形にする', lead: '難しい編集より順番。伝わる流れを先に作る。', items: ['素材', '字幕', 'テンポ'] },
  'p2-basics': { pose: 'tool', title: '基本操作を覚える', lead: '最低限の操作でいい。投稿できる動画は作れる。', items: ['切る', '文字を入れる', '書き出す'] },
  'p2-buzz': { pose: 'magnify', title: '伸びた理由を探す', lead: 'バズを偶然で終わらせない。構造を抜き出す。', items: ['冒頭', '展開', '保存理由'] },
  'p2-templates': { pose: 'cards', title: '型に当てはめる', lead: '毎回ゼロから考えず、使える投稿型を持つ。', items: ['フック', '本文', '締め'] },
  'p2-pre': { pose: 'check', title: '出す前に整える', lead: '投稿前の小さな確認で、取りこぼしを減らす。', items: ['伝わるか', '読めるか', '押せるか'] },
  'p2-ana': { pose: 'analytics', title: '数字で直す', lead: '感覚ではなく、数字を見て次の投稿を決める。', items: ['再生', '維持率', '保存'] },
  'p3-feed-vs-story': { pose: 'split', title: '役割を分ける', lead: 'フィードは入口。ストーリーは関係づくり。混ぜない。', items: ['集める', '信頼を積む', '売る'] },
  'p3-monetize': { pose: 'route', title: '収益化の道筋を見る', lead: '増えてから考えない。最初に出口を作る。', items: ['集客', '教育', '販売'] },
  'p3-mind': { pose: 'heart', title: '売る前に信頼を作る', lead: 'ストーリー収益化は、押し売りではなく関係の積み上げ。', items: ['共感', '信用', '提案'] },
  'p3-ideas': { pose: 'light', title: 'ネタを切らさない', lead: '日常をそのまま出すのではなく、見せる役割を決める。', items: ['共感ネタ', '教育ネタ', '販売ネタ'] },
  'p3-conversation': { pose: 'chat', title: '発信を会話に変える', lead: '一方通行ではなく、相手が返したくなる形にする。', items: ['問いかけ', '反応', 'DM'] },
  'p3-seven': { pose: 'stairs', title: '流れで伝える', lead: '点で売らず、信頼が積み上がる順番に並べる。', items: ['問題提起', '教育', '案内'] },
  'p3-writing': { pose: 'write', title: '読まれる文章にする', lead: '上手い文章ではなく、迷わず読める骨格を作る。', items: ['結論', '理由', '行動'] },
  'p3-cautions': { pose: 'guard', title: '信頼を落とさない', lead: '売るほど大事なのは、やりすぎて信用を削らないこと。', items: ['煽らない', '隠さない', '約束を守る'] },
  'p4-kpi': { pose: 'dashboard', title: '見る数字を決める', lead: '詰まりは数字で見る。感覚で決めない。', items: ['流入', '反応', '売上'] },
  'p4-story-design': { pose: 'calendar', title: '1週間を設計する', lead: '気分で出さない。信頼が積もる順番にする。', items: ['共感', '教育', '訴求'] },
  'p4-mix': { pose: 'mix', title: '売り方を組み合わせる', lead: '案件・自社商品・相談を、目的に合わせて配置する。', items: ['アフィ', '自社商品', '相談'] },
  'p4-cross': { pose: 'branch', title: '横に広げる', lead: '同じ軸を別の場所に展開して、入口を増やす。', items: ['再利用', '導線', '管理'] },
  'p4-product': { pose: 'box', title: '商品にまとめる', lead: '知識を並べるだけでなく、変化まで届ける形にする。', items: ['悩み', '手順', '結果'] },
  'p5-overview': { pose: 'launch', title: '販売の全体像を見る', lead: 'ローンチは一発勝負ではない。販売前から流れを作る。', items: ['予告', '教育', '販売'] },
  'p5-target': { pose: 'target', title: '売る相手を決める', lead: '誰に売るかがぼやけると、言葉も商品も弱くなる。', items: ['悩み', '状況', '欲しい未来'] },
  'p5-product': { pose: 'craft', title: '商品を作る', lead: 'できることではなく、相手が欲しい変化から逆算する。', items: ['約束', '中身', 'サポート'] },
  'p5-list': { pose: 'list', title: '見込み客を集める', lead: '販売日に初めて集めるのではなく、前から関係を作る。', items: ['無料導線', '登録', '温度上げ'] },
  'p5-story': { pose: 'story', title: '信頼を積む14日', lead: '売る前に信頼を積む。必要性を先に伝える。', items: ['問題', '変化', '期待'] },
  'p5-letter': { pose: 'letter', title: '販売ページを書く', lead: '迷いを順番に消す。申込みまで案内する。', items: ['共感', '証拠', '申込'] },
  'p5-close': { pose: 'talk', title: '背中を押す', lead: '迷っている人に判断材料を渡す。決断を助ける。', items: ['不安', '期限', '次の一歩'] },
  'p5-highticket': { pose: 'premium', title: '高額商品の導線を作る', lead: '高額は勢いで売らない。相談と信頼で進んでもらう。', items: ['無料相談', '診断', '提案'] },
};

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

// 記事冒頭で使う、1枚絵に近い全体マップ
function VisualMapBlock(b) {
  return h('figure', { class: 'g g-vmap' }, [
    h('div', { class: 'g-vmap__head' }, [
      h('div', {}, [
        h('div', { class: 'g-vmap__kicker' }, [b.kicker || 'VISUAL GUIDE']),
        h('div', { class: 'g-vmap__title' }, [b.title]),
      ]),
      b.badge ? h('span', { class: 'g-vmap__badge' }, [b.badge]) : null,
    ]),
    b.text ? h('p', { class: 'g-vmap__lead', html: rich(b.text) }) : null,
    h('div', { class: 'g-vmap__canvas' }, [
      h('div', { class: 'g-vmap__center' }, [
        h('span', { class: 'g-vmap__center-sub' }, [b.centerSub || 'GOAL']),
        h('b', {}, [b.center || '完成']),
      ]),
      h('div', { class: 'g-vmap__grid' }, (b.items || []).map((it, i) => (
        h('div', { class: `g-vmap__item g-vmap__item--${it.tone || ((i % 2) ? 'sky' : 'navy')}` }, [
          h('span', { class: 'g-vmap__num' }, [it.label || String(i + 1).padStart(2, '0')]),
          h('div', { class: 'g-vmap__item-title' }, [it.title]),
          h('p', { class: 'g-vmap__item-text', html: rich(it.text) }),
        ])
      ))),
    ]),
    b.caption ? h('figcaption', { class: 'g__cap' }, [b.caption]) : null,
  ]);
}

function mascotProp(pose) {
  const props = {
    map: '<rect x="84" y="92" width="54" height="42" rx="5" class="m-soft"/><path d="M94 112h12l8-10 9 18 8-8" class="m-line"/>',
    compass: '<circle cx="112" cy="114" r="22" class="m-soft"/><path d="M112 97v34M95 114h34M105 121l15-20-4 24z" class="m-line"/>',
    note: '<rect x="88" y="88" width="52" height="58" rx="5" class="m-paper"/><path d="M98 104h30M98 116h28M98 128h18" class="m-line"/>',
    flag: '<path d="M92 145V92M94 96h42l-8 13 8 13H94" class="m-soft m-fill"/>',
    search: '<circle cx="108" cy="110" r="18" class="m-paper"/><path d="M122 124l18 18M101 110h14" class="m-line"/>',
    profile: '<rect x="86" y="92" width="58" height="48" rx="7" class="m-paper"/><circle cx="108" cy="111" r="8" class="m-dot"/><path d="M97 132c4-9 18-9 22 0M126 106h12M126 118h12M126 130h9" class="m-line"/>',
    chart: '<rect x="86" y="94" width="60" height="45" rx="6" class="m-paper"/><path d="M98 128v-12M114 128v-22M130 128v-30" class="m-line"/>',
    camera: '<rect x="85" y="99" width="62" height="40" rx="8" class="m-paper"/><circle cx="116" cy="119" r="12" class="m-soft"/><path d="M96 99l7-9h22l7 9" class="m-line"/>',
    tool: '<path d="M92 128l31-31 12 12-31 31H92z" class="m-paper"/><path d="M124 96l13-13M132 104l13-13" class="m-line"/>',
    magnify: '<circle cx="106" cy="109" r="20" class="m-paper"/><path d="M120 123l20 20M98 108h16M106 100v16" class="m-line"/>',
    cards: '<rect x="84" y="102" width="42" height="35" rx="5" class="m-soft"/><rect x="103" y="91" width="42" height="35" rx="5" class="m-paper"/>',
    check: '<rect x="86" y="91" width="56" height="56" rx="6" class="m-paper"/><path d="M99 109l7 7 15-18M99 130h30" class="m-line"/>',
    analytics: '<rect x="84" y="92" width="62" height="48" rx="7" class="m-paper"/><path d="M96 126l13-12 10 7 16-21M96 134h38" class="m-line"/>',
    split: '<rect x="83" y="96" width="28" height="45" rx="6" class="m-soft"/><rect x="119" y="96" width="28" height="45" rx="6" class="m-paper"/>',
    route: '<path d="M90 134c18-36 28 16 54-28" class="m-line"/><circle cx="90" cy="134" r="6" class="m-soft"/><circle cx="144" cy="106" r="6" class="m-dot"/>',
    heart: '<path d="M116 139s-28-16-28-34c0-16 20-18 28-5 8-13 28-11 28 5 0 18-28 34-28 34z" class="m-soft m-fill"/>',
    light: '<path d="M116 90c-13 0-23 10-23 22 0 9 5 15 11 20h24c6-5 11-11 11-20 0-12-10-22-23-22zM106 141h20" class="m-paper"/>',
    chat: '<path d="M87 98h58v36h-34l-18 14 4-14H87z" class="m-paper"/><path d="M99 113h32M99 124h22" class="m-line"/>',
    stairs: '<path d="M88 137h20v-12h18v-12h18V96" class="m-line"/><circle cx="146" cy="96" r="8" class="m-soft"/>',
    write: '<rect x="86" y="91" width="56" height="58" rx="6" class="m-paper"/><path d="M99 108h26M99 121h30M99 134h18M134 91l11-12 8 8-12 11z" class="m-line"/>',
    guard: '<path d="M116 91l34 13c-2 27-13 42-34 50-21-8-32-23-34-50z" class="m-paper"/><path d="M104 120l9 9 18-21" class="m-line"/>',
    dashboard: '<rect x="82" y="91" width="68" height="54" rx="7" class="m-paper"/><path d="M94 108h18M94 124h12M124 133v-20M138 133v-32" class="m-line"/>',
    calendar: '<rect x="84" y="94" width="64" height="50" rx="7" class="m-paper"/><path d="M84 109h64M99 88v12M133 88v12M98 122h9M114 122h9M130 122h9" class="m-line"/>',
    mix: '<circle cx="101" cy="112" r="18" class="m-soft"/><circle cx="130" cy="112" r="18" class="m-paper"/><path d="M104 134h24" class="m-line"/>',
    branch: '<path d="M94 136c26-10 18-34 46-44M104 106c20 2 22 24 38 30" class="m-line"/><circle cx="94" cy="136" r="6" class="m-dot"/><circle cx="140" cy="92" r="6" class="m-soft"/><circle cx="142" cy="136" r="6" class="m-paper"/>',
    box: '<path d="M88 105l28-15 28 15v31l-28 15-28-15z" class="m-paper"/><path d="M88 105l28 15 28-15M116 120v31" class="m-line"/>',
    launch: '<path d="M116 83c16 15 21 34 11 57h-22c-10-23-5-42 11-57z" class="m-paper"/><path d="M105 125l-15 18M127 125l15 18M116 139v18" class="m-line"/>',
    target: '<circle cx="116" cy="116" r="34" class="m-paper"/><circle cx="116" cy="116" r="20" class="m-soft"/><circle cx="116" cy="116" r="6" class="m-dot"/>',
    craft: '<rect x="87" y="102" width="58" height="38" rx="7" class="m-paper"/><path d="M98 102v-9h36v9M104 122h24" class="m-line"/>',
    list: '<rect x="86" y="90" width="58" height="58" rx="6" class="m-paper"/><path d="M100 107h29M100 121h29M100 135h20M94 107h1M94 121h1M94 135h1" class="m-line"/>',
    story: '<rect x="88" y="92" width="56" height="58" rx="12" class="m-paper"/><path d="M100 108h32M100 122h22M100 136h28" class="m-line"/>',
    letter: '<path d="M84 100h64v44H84zM84 100l32 26 32-26" class="m-paper"/>',
    talk: '<path d="M86 99h55v34h-22l-17 14 3-14H86z" class="m-paper"/><path d="M98 114h28M98 124h18" class="m-line"/>',
    premium: '<path d="M116 90l9 18 20 3-14 14 3 20-18-9-18 9 3-20-14-14 20-3z" class="m-soft m-fill"/>',
  };
  return props[pose] || props.note;
}

function MascotSvg(pose) {
  return `
    <svg class="mascot-svg mascot-svg--${escapeHtml(pose)}" viewBox="0 0 230 210" role="img" aria-label="教材キャラクター">
      <path d="M56 181c34 10 88 10 122 0" class="m-ground"/>
      <path d="M159 54c4-16 17-20 23-7 4 9-7 15-20 12 12-8 25-7 29 1 5 11-13 17-29 4" class="m-line m-sprout"/>
      <path d="M44 86c0-40 31-72 71-72s71 32 71 72c0 32-20 54-36 59H80c-16-5-36-27-36-59z" class="m-hood"/>
      <path d="M70 96c0-26 20-48 45-48s45 22 45 48c0 23-16 37-45 37s-45-14-45-37z" class="m-face"/>
      <circle cx="98" cy="98" r="4.8" class="m-dot"/><circle cx="133" cy="98" r="4.8" class="m-dot"/>
      <path d="M111 112h9" class="m-line"/>
      <path d="M72 134c-10 12-14 32-4 43 8 9 84 9 94 0 10-11 6-31-4-43" class="m-body"/>
      <path d="M82 138c-24-4-28 33-7 38M148 138c24-4 28 33 7 38" class="m-arm"/>
      <path d="M100 178c0 12-7 16-20 14M130 178c0 12 7 16 20 14" class="m-line"/>
      ${mascotProp(pose)}
      <path d="M184 171c8-19 21-21 17-3 13-9 21-4 7 7-10 8-18 9-24 9" class="m-leaf"/>
    </svg>`;
}

function renderVisualGuide(chapter, phase) {
  const guide = VISUAL_GUIDES[chapter.id] || {
    pose: 'note',
    title: chapter.title,
    lead: phase.tagline,
    items: ['全体像を見る', '手順に分ける', '今日やることを決める'],
  };
  const spriteMap = {
    map: 'teacher', compass: 'teacher', flag: 'flag',
    note: 'notebook', write: 'notebook', story: 'notebook', letter: 'notebook',
    profile: 'phone', camera: 'phone', tool: 'phone',
    cards: 'sticky', split: 'sticky', mix: 'sticky', branch: 'sticky',
    search: 'magnify', magnify: 'magnify', target: 'magnify',
    check: 'clipboard', guard: 'clipboard', list: 'clipboard',
    route: 'route', stairs: 'route', launch: 'route',
    chart: 'cards', analytics: 'cards', dashboard: 'cards',
    calendar: 'calendar', light: 'calendar',
    box: 'box', craft: 'box', premium: 'box',
    heart: 'megaphone', chat: 'megaphone', talk: 'megaphone',
  };
  const sprite = spriteMap[guide.pose] || 'teacher';
  return h('section', { class: `a-visual a-visual--${phase.id}` }, [
    h('div', { class: 'a-visual__art' }, [
      h('div', { class: `a-visual__sprite a-visual__sprite--${sprite}`, role: 'img', 'aria-label': '教材キャラクター' }),
    ]),
    h('div', { class: 'a-visual__body' }, [
      h('div', { class: 'a-visual__eyebrow' }, ['イメージでつかむ']),
      h('h2', { class: 'a-visual__title' }, [guide.title]),
      h('p', { class: 'a-visual__lead' }, [guide.lead]),
      h('div', { class: 'a-visual__chips' }, guide.items.map((item, i) => (
        h('span', { class: 'a-visual__chip' }, [
          h('b', {}, [String(i + 1)]),
          item,
        ])
      ))),
    ]),
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
  visualMap:  VisualMapBlock,
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

    renderVisualGuide(chapter, phase),

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
