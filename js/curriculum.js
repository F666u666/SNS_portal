// ============================================================
// Curriculum — chapter index (titles only for now; bodies in P4)
//   - id is stable; used as reads key + chapterRef in notes/todos
//   - suggestedTodos: 章を読了したら提案する次の行動
// ============================================================

export const PHASES = [
  { id: 'p1', label: 'Phase 01', title: '設計する',   tagline: '何者として発信するかを決める' },
  { id: 'p2', label: 'Phase 02', title: '伸ばす',     tagline: 'リールでフォロワーを増やす' },
  { id: 'p3', label: 'Phase 03', title: '稼ぐ',       tagline: 'ストーリーで収益化する' },
  { id: 'p4', label: 'Phase 04', title: '拡張する',   tagline: '仕組みを作って規模を広げる' },
  { id: 'p5', label: 'Phase 05', title: 'ローンチ',   tagline: '商品を作って一気に売り切る' },
];

export const CHAPTERS = [
  // Phase 1 ── 設計
  { id: 'p1-genre',     phaseId: 'p1', n: '01', title: 'ジャンル選定が10割な理由',  estMin: 6,  suggestedTodos: ['発信するジャンルを1つに絞って書き出す'] },
  { id: 'p1-harm',      phaseId: 'p1', n: '02', title: 'HARMの法則と稼げる市場',     estMin: 7,  suggestedTodos: ['HARM4分類で自分の発信ジャンルを位置づける'] },
  { id: 'p1-stocktake', phaseId: 'p1', n: '03', title: '自分の棚卸し',                 estMin: 10, suggestedTodos: ['自分のH/A/R/M棚卸しを箇条書きで埋める'] },
  { id: 'p1-axis',      phaseId: 'p1', n: '04', title: '発信軸・コンセプトを決める',   estMin: 8,  suggestedTodos: ['「Xが教える/Yの発信/フォローするとZ」を1文で書く'] },
  { id: 'p1-bench',     phaseId: 'p1', n: '05', title: '参考アカウントの探し方',       estMin: 9,  suggestedTodos: ['ジャンルタグでアルゴリズム教育を20いいね分実施', '採用基準を満たす参考アカウントを10個リストアップ'] },
  { id: 'p1-profile',   phaseId: 'p1', n: '06', title: 'アカウント初期設定ガイド',      estMin: 10, suggestedTodos: ['ID/表示名/プロフィール文を確定する', 'プロアカウント切替・連絡先同期オフ・虫眼鏡教育を実施'] },

  // Phase 2 ── 伸ばす
  { id: 'p2-algo',      phaseId: 'p2', n: '01', title: 'アルゴリズムと伸びる仕組み',   estMin: 8,  suggestedTodos: ['冒頭2秒の改善仮説を1つメモする'] },
  { id: 'p2-capcut',    phaseId: 'p2', n: '02', title: 'CapCut動画制作ガイド',         estMin: 12, suggestedTodos: ['今週のリール台本を1本書く'] },
  { id: 'p2-basics',    phaseId: 'p2', n: '03', title: 'CapCut基本操作',                estMin: 8,  suggestedTodos: ['CapCutでテンプレ動画を1本仕上げる'] },
  { id: 'p2-buzz',      phaseId: 'p2', n: '04', title: 'バズ動画分析',                  estMin: 8,  suggestedTodos: ['バズ動画を3本集めて共通点をメモ'] },
  { id: 'p2-templates', phaseId: 'p2', n: '05', title: '投稿テンプレ・型',              estMin: 6,  suggestedTodos: ['よく使うフック型を3つ保存する'] },
  { id: 'p2-pre',       phaseId: 'p2', n: '06', title: '投稿前チェックリスト',          estMin: 4,  suggestedTodos: ['投稿前チェックを1本通しで実施'] },
  { id: 'p2-ana',       phaseId: 'p2', n: '07', title: '投稿分析シート',                estMin: 6,  suggestedTodos: ['直近の投稿1本を数値分析シートで振り返る'] },

  // Phase 3 ── 稼ぐ
  { id: 'p3-feed-vs-story', phaseId: 'p3', n: '01', title: 'フィードとストーリーの役割', estMin: 6, suggestedTodos: ['ストーリーの目的を1行で言語化する'] },
  { id: 'p3-monetize',     phaseId: 'p3', n: '02', title: 'マネタイズの全体像',           estMin: 8, suggestedTodos: ['取り扱う商品/案件を1つ決める'] },
  { id: 'p3-mind',         phaseId: 'p3', n: '03', title: 'ストーリーでマネタイズする考え方', estMin: 7, suggestedTodos: ['訴求前後で出す投稿ネタを3本用意'] },
  { id: 'p3-ideas',        phaseId: 'p3', n: '04', title: 'ストーリーズネタ帳',            estMin: 6, suggestedTodos: ['ネタ帳に共感ネタを5個追加'] },
  { id: 'p3-conversation', phaseId: 'p3', n: '05', title: 'ストーリーの本質について（発信じゃなく会話）', estMin: 9, suggestedTodos: ['自分のストーリーを「会話」に書き直す'] },
  { id: 'p3-seven',        phaseId: 'p3', n: '06', title: 'ストーリー運用の構成について',  estMin: 10, suggestedTodos: ['7ステップで訴求の下書きを書く'] },
  { id: 'p3-writing',      phaseId: 'p3', n: '07', title: 'ストーリー文章の骨格について',  estMin: 8, suggestedTodos: ['PREPでフック文を1本書く'] },
  { id: 'p3-cautions',     phaseId: 'p3', n: '08', title: '訴求の注意点と運用ルール',      estMin: 6, suggestedTodos: ['NGワード/トーンを自分用にメモ'] },

  // Phase 4 ── 拡張
  { id: 'p4-kpi',          phaseId: 'p4', n: '01', title: '収益化7大ポイントとKPI',       estMin: 8,  suggestedTodos: ['週次KPIシートを開いて記入する'] },
  { id: 'p4-story-design', phaseId: 'p4', n: '02', title: '収益を上げるストーリー構成',    estMin: 8,  suggestedTodos: ['1週間のストーリー設計を書く'] },
  { id: 'p4-mix',          phaseId: 'p4', n: '03', title: 'マネタイズの種類と設計',        estMin: 7,  suggestedTodos: ['アフィ/自社の比率を決める'] },
  { id: 'p4-cross',        phaseId: 'p4', n: '04', title: '横軸展開の伸ばし方',            estMin: 6,  suggestedTodos: ['展開する2軸目のプラットフォームを決める'] },
  { id: 'p4-product',      phaseId: 'p4', n: '05', title: '自社商品の設計と販売戦略',      estMin: 10, suggestedTodos: ['自社商品の3行要約を書く'] },

  // Phase 5 ── ローンチ
  { id: 'p5-overview',   phaseId: 'p5', n: '01', title: 'ローンチの全体像と進め方',            estMin: 12, suggestedTodos: [] },
  { id: 'p5-target',     phaseId: 'p5', n: '02', title: 'ターゲット選定（誰に売るか）',          estMin: 12, suggestedTodos: [] },
  { id: 'p5-product',    phaseId: 'p5', n: '03', title: '商品の作り方（何を売るか）',            estMin: 12, suggestedTodos: [] },
  { id: 'p5-list',       phaseId: 'p5', n: '04', title: '集客・リスト構築（どう集めるか）',      estMin: 12, suggestedTodos: [] },
  { id: 'p5-story',      phaseId: 'p5', n: '05', title: 'ローンチのストーリー教育（信頼を積む14日）', estMin: 14, suggestedTodos: [] },
  { id: 'p5-letter',     phaseId: 'p5', n: '06', title: '販売note（セールスレター）の書き方',    estMin: 14, suggestedTodos: [] },
  { id: 'p5-close',      phaseId: 'p5', n: '07', title: '販売・クロージングのしかた',            estMin: 12, suggestedTodos: [] },
  { id: 'p5-highticket', phaseId: 'p5', n: '08', title: '高額を売る（無料相談・バックエンド）',  estMin: 12, suggestedTodos: [] },
];

// ── Chapter bodies — long-form lessons (HTML strings rendered into `.prose`) ──
// Only Phase 1 ch01-02 are written for now; rest fall back to placeholder.
export const CHAPTER_BODIES = {
  'p1-genre': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>SNSの失敗は、走り出す前の「ジャンル選び」でほぼ決まる</li>
<li>今は「人」じゃなく「ジャンル」でフォローされる、その仕組み</li>
<li>「需要 × 続けられる × 自分」の重なりだけが勝てる理由</li>
<li>「好きを発信」「画質を上げる」が伸びない本当の理由</li>
<li>最初からお金につながるジャンルを選ぶ判断軸</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="勝負はアップロード前に決まる">
<rect x="6" y="50" width="120" height="58" rx="12" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<text x="66" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">ジャンル選び</text>
<text x="66" y="96" text-anchor="middle" font-size="11" fill="#1e4e7e">ここで決まる</text>
<text x="66" y="40" text-anchor="middle" font-size="11" fill="#b83280">アップ前</text>
<path d="M132 79 L172 79" stroke="#a0aec0" stroke-width="2" marker-end="url(#a0)"/>
<defs><marker id="a0" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#a0aec0"/></marker></defs>
<rect x="180" y="58" width="64" height="42" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="212" y="83" text-anchor="middle" font-size="11" fill="#718096">撮影</text>
<rect x="252" y="58" width="62" height="42" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="283" y="83" text-anchor="middle" font-size="11" fill="#718096">編集</text>
<text x="247" y="40" text-anchor="middle" font-size="11" fill="#a0aec0">あとの話</text>
</svg>
<div class="figcap">撮影でも編集でもない。もっと手前で勝負はついている</div>
</div>

<div class="key">失敗はたいてい同じ場所に集まる。<strong>「ジャンルを間違えた」か「コンセプトが弱い」か、どっちかだ。</strong>ここさえ外さなければ、最初の数本から手応えが出る。だからこの章を「設計する」の一番最初に置いてある。</div>

<h3>見る側は、あなたのカメラを見ていない</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="見る側が見ているもの">
<rect x="0" y="22" width="150" height="76" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 見ていない</text>
<text x="75" y="74" text-anchor="middle" font-size="11" fill="#a0aec0">機材・頑張り</text>
<text x="75" y="90" text-anchor="middle" font-size="11" fill="#a0aec0">編集の上手さ</text>
<text x="160" y="64" text-anchor="middle" font-size="18" fill="#cbd5e0">→</text>
<rect x="170" y="22" width="150" height="76" rx="12" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<text x="245" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 見ている</text>
<text x="245" y="78" text-anchor="middle" font-size="12" fill="#1e4e7e">自分ごとか</text>
</svg>
<div class="figcap">親指を止める基準は「自分の悩みに関係あるか」だけ</div>
</div>
<p>高いカメラを1ヶ月かけて揃えたAさんより、スマホ1台で「何を発信するか」を3日絞ったBさんが伸びる。見る側はカメラの性能を見ていない。<strong>「自分ごとか」を一瞬で判断し、関係なければ親指で飛ばす。</strong>ジャンル選びとは「誰の親指を止めるか」を決める作業だ。</p>

<div class="flowbig">
<span>正しいジャンル</span><span>悩んでる人に届く</span><span>自分のための人だ</span><span>覚えられる</span><span class="is-goal">お客になる</span>
</div>

<p>包丁さばきがうまくても、腐った食材では美味い料理にならない。<strong>ジャンル選び＝食材選び。技術はそのあと。順番を逆にした人から消えていく。</strong></p>
<div class="warn">「とりあえず始めて走りながら考える」が一番危ない。方向を間違えると、頑張るほどゴールから遠ざかる。最初の30分の設計が、その後の半年を決める。</div>

<h2><span class="s">1</span>今は「人」じゃなく「ジャンル」でフォローされる</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="昔と今のフォローの違い">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">昔：人を選ぶ</text>
<circle cx="79" cy="55" r="16" fill="#cbd5e0"/><rect x="61" y="76" width="36" height="26" rx="8" fill="#cbd5e0"/>
<text x="79" y="120" text-anchor="middle" font-size="11" fill="#718096">好きな人を観る</text>
<line x1="160" y1="16" x2="160" y2="116" stroke="#e2e8f0"/>
<text x="245" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">今：内容が流れてくる</text>
<rect x="186" y="34" width="118" height="20" rx="5" fill="#eaf1f8" stroke="#2b6cb0"/>
<rect x="186" y="60" width="118" height="20" rx="5" fill="#2b6cb0"/>
<text x="245" y="74" text-anchor="middle" font-size="11" fill="#fff">興味あるジャンル</text>
<rect x="186" y="86" width="118" height="20" rx="5" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="125" text-anchor="middle" font-size="11" fill="#1e4e7e">相性で自動表示</text>
</svg>
<div class="figcap">テレビの「好きな芸能人」→「観たいジャンルが自動で流れる」への変化</div>
</div>
<p>今のインスタやTikTokは、フォロー相手より<strong>「あなたが最後まで観そうな内容」を優先して流す。</strong>あなたと見る側の間に立つのは"人のつながり"じゃなく"内容との相性"だ。おすすめ欄に並ぶのは、ほとんどフォローしてないアカウント。料理を数本観れば翌日は料理だらけになる。これが「ジャンルで届く」正体だ。</p>

<div class="vs">
<div class="l"><div class="t">✗ ジャンルがブレてる</div>月：スキンケア／火：ランチ／水：子ども／木：旅行。本人は「私の日常」。見る側は「で、何の人？」となって離れる。</div>
<div class="r"><div class="t">○ 1本に絞れてる</div>毎回スキンケアだけ。「肌のことならこの人」と覚える。次に肌で悩んだ時、真っ先に思い出される。</div>
</div>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ラベルは1つしか貼れない">
<rect x="20" y="30" width="120" height="50" rx="10" fill="#fff" stroke="#cbd5e0"/>
<rect x="30" y="20" width="50" height="16" rx="4" fill="#cbd5e0"/><rect x="40" y="36" width="50" height="16" rx="4" fill="#cbd5e0"/><rect x="28" y="52" width="55" height="16" rx="4" fill="#cbd5e0"/>
<text x="80" y="98" text-anchor="middle" font-size="11" fill="#718096">ラベル多数＝忘れられる</text>
<rect x="195" y="30" width="100" height="50" rx="10" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<rect x="210" y="46" width="70" height="20" rx="5" fill="#2b6cb0"/>
<text x="245" y="60" text-anchor="middle" font-size="11" fill="#fff">肌の人</text>
<text x="245" y="98" text-anchor="middle" font-size="11" fill="#1e4e7e">一語＝記憶に残る</text>
</svg>
<div class="figcap">人はラベルで覚える。1人に複数のラベルは貼れない</div>
</div>
<p>覚えられない相手は二度と思い出されない。<strong>フォローは「思い出してもらえる権利」を取る行為だ。</strong>コーヒーを本気で探す人は「何でも雑貨屋」より「コーヒー100種の専門店」に行く。絞った人のところに、その悩みを持つ人が集まる。</p>
<div class="note">「絞ったら飽きられる」は逆。飽きるのは"同じ話"の繰り返し。"同じジャンルの違う角度"なら飽きない。狭いほど「この人は本気だ」と信頼が積まれる。</div>

<h2><span class="s">2</span>「需要 × 自分」の重なりにしか勝ち目はない</h2>

<div class="vfig">
<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="需要と自分の重なり">
<circle cx="120" cy="80" r="62" fill="#2b6cb0" opacity="0.35"/>
<circle cx="200" cy="80" r="62" fill="#b83280" opacity="0.3"/>
<text x="88" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">需要</text>
<text x="88" y="98" text-anchor="middle" font-size="10" fill="#1e4e7e">観客がいる</text>
<text x="232" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">自分</text>
<text x="232" y="98" text-anchor="middle" font-size="10" fill="#b83280">続けられる</text>
<text x="160" y="76" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">ここだけ</text>
<text x="160" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">勝てる</text>
<text x="160" y="152" text-anchor="middle" font-size="11" fill="#718096">片方だけでは必ず途中で止まる</text>
</svg>
<div class="figcap">需要があるだけでは続かない。好きなだけでは届かない</div>
</div>

<p>SNSは短距離走じゃなく長距離走。だから2つの壁を同時に越えないと止まる。<strong>1つ目「観客がいるか」</strong>＝需要がなければ観客のいない試合。<strong>2つ目「走り続けられるか」</strong>＝興味のないジャンルはネタ探しが苦痛で手が止まる。一番多い敗因は「下手」じゃなく「やめた」だ。</p>

<div class="vs">
<div class="l"><div class="t">✗ 需要だけで選ぶ</div>「稼げるらしいから投資」。でも興味ゼロ。ネタ探しが苦痛ですぐ止まる。走れなきゃ着かない。</div>
<div class="r"><div class="t">✗ 好きだけで選ぶ</div>「マイナーなボードゲーム大好き」。情熱はある。でも検索する人がいない＝観客ゼロの試合。</div>
</div>

<div class="key">需要がある × 続けられる × 自分ならでは。<strong>この3つが揃わない限り、伸びはやってこない。</strong>どれか1つ欠けても、途中で必ず止まる。</div>

<h3>📝 重なりを見つける3ステップ</h3>
<p>頭の中では情報が同時に並ばず比較できない。<strong>重なりは"考えて見つける"ものじゃなく"紙に並べて発見する"もの。</strong></p>
<div class="step"><span class="sn">1</span><span class="snm">「続けられること」を10個書く</span><p>過去に時間もお金もかけた／人に質問される／苦じゃなく語れること。手が止まったら検索履歴・買い物履歴を見る。<strong>履歴は建前抜きの本当の関心が出るから、自己申告より正確だ。</strong></p></div>
<div class="step"><span class="sn">2</span><span class="snm">「悩んでる人が多いか」を○△×で付ける</span><p>検索窓に打ち込む。「毛穴」で「毛穴 開き」「毛穴 黒ずみ」と候補が並べば需要のサイン。<strong>検索候補は人が実際に打った言葉の集計だから、勘より信用できる。</strong></p></div>
<div class="step"><span class="sn">3</span><span class="snm">○が付いて一番語れる1つを選ぶ</span><p>これが重なり。複数残ったら、より狭い方を選ぶ。「美容」より「30代の毛穴ケア」が強い。<strong>狭いほど「私のことだ」の解像度が上がる。</strong></p></div>

<div class="warn">「自分に語れる強みがない」で止まる人へ。強みは「実績」じゃなくていい。<strong>今まさに悩んで試行錯誤してる過程</strong>こそ刺さる。完璧な専門家は遠すぎて真似する気が起きない。半歩先を歩く人が、半歩後ろの人を案内する。その近さが「自分にもできそう」を生む。</div>

<h2><span class="s">3</span>コンセプトが弱いと「観られるのにフォローされない」</h2>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="再生とフォローの違い">
<rect x="0" y="22" width="150" height="76" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">再生</text>
<text x="75" y="72" text-anchor="middle" font-size="11" fill="#a0aec0">今おもしろいか</text>
<text x="75" y="88" text-anchor="middle" font-size="11" fill="#a0aec0">＝内容への反応</text>
<text x="160" y="64" text-anchor="middle" font-size="18" fill="#cbd5e0">≠</text>
<rect x="170" y="22" width="150" height="76" rx="12" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<text x="245" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">フォロー</text>
<text x="245" y="72" text-anchor="middle" font-size="11" fill="#1e4e7e">これからも役立つか</text>
<text x="245" y="88" text-anchor="middle" font-size="11" fill="#1e4e7e">＝人への投資</text>
</svg>
<div class="figcap">再生は今この瞬間、フォローは未来。別物だ</div>
</div>
<p>再生されてもフォローされないのは<strong>「この人を追う理由」が伝わってない</strong>から。見る側は無意識に「この人を追えば未来の悩みも解決してくれそうか」を計算する。<strong>コンセプトとは、その計算に「イエス」と答えさせる一文だ。</strong></p>
<div class="key">コンセプトとは<strong>「誰が・何をして・どう変わるか」を一言で表したもの。</strong>一文で言えないアカウントは、見る側の頭に何も残らない。</div>

<div class="vs">
<div class="l"><div class="t">✗ 弱いコンセプト</div>「美容好き女子のVlog」<br><br>誰でも言える。誰が・何で・どう変わるかが何も伝わらない。フォローする理由がない。</div>
<div class="r"><div class="t">○ 強いコンセプト</div>「借金を抱えてた私が、節約で完済するまで」<br><br>誰が／何で／どう変わるかが一文で明確。共感も再現性もある。</div>
</div>

<div class="flowbig">
<span>① 誰が（共感）</span><span>② 何をして（真似できる）</span><span class="is-goal">③ どう変わるか（続きが見たい）</span>
</div>
<p>この順番は、見る側が無意識に確認する「共感→方法→未来」そのものだ。「元○○の私が」で共感、「節約で」で真似できると感じ、「完済」で続きが見たくなる。</p>

<div class="tc"><div class="hd">📝 コンセプトの型</div><div class="bd">
「（過去の自分）だった私が、（方法）で、（変化）した／する」
<div class="good"><b>例1</b>毛穴だらけだった私が、ドラッグストアのケアだけで、ツルツル肌になった</div>
<div class="good"><b>例2</b>毎月貯金ゼロだった私が、固定費の見直しだけで、貯金できるようになった</div>
<div class="good"><b>例3</b>毎晩怒鳴ってた私が、声かけを変えて、子どもが自分から動くようになった</div>
</div></div>
<div class="note">一文にならない＝ジャンルがまだ広すぎるサイン。もう一段狭めれば自然に決まる。「美容」では作れなくても「30代の毛穴ケア」なら作れる。一文にできない＝相手の頭にも入らない。</div>

<h2><span class="s">4</span>初心者がハマる3つの勘違い</h2>

<div class="tc"><div class="hd">勘違い①「好きを発信すれば伸びる」</div><div class="bd"><span class="lab">半分正解・半分間違い</span>
「好き」は継続力を生む。でも需要がない市場では観客がいない。<span class="lab">奥の理由：</span>「好き」は<b>あなたが走る燃料</b>であって、<b>見る側が集まる理由</b>じゃない。混同するから事故る。正しくは「好き」＋「需要」＋「自分ならではの切り口」の3つ。</div></div>

<div class="tc"><div class="hd">勘違い②「画質を上げれば伸びる」</div><div class="bd"><span class="lab">間違い</span>
ジャンル・コンセプト・フックが弱ければ、映像が綺麗でも観られない。<span class="lab">奥の理由：</span>見る側は画質を見る前に「関係あるか」で一瞬で飛ばす。クオリティが効くのは<b>観てもらえた後</b>。土台のない家に高い壁紙を貼っても倒れる。
<div class="flow"><span>ジャンル・コンセプトを固める</span><span>クオリティを上げる</span></div></div></div>

<div class="tc"><div class="hd">勘違い③「増えてから収益化を考える」</div><div class="bd"><span class="lab">危険</span>
お金につながらないジャンルで育てると、収益化で詰む。<span class="lab">奥の理由：</span>集まる人は「投稿の中身」で性質が決まる。面白い動画には<b>楽しみたい人</b>、悩み解決には<b>払ってでも解決したい人</b>が集まる。後から方向転換しても、最初に集めた層の財布の固さは変えられない。</div></div>

<div class="warn">特に③を甘く見る人が多い。「とりあえず伸ばしてから」はゴールを決めず走り出すのと同じ。<strong>最初に「このジャンルで、誰に、何を売るか」まで想像してから始めろ。</strong></div>

<h2><span class="s">5</span>「お金につながるジャンル」の見分け方</h2>
<p>難しく考えなくていい。<strong>「このジャンルの人は、最後に何にお金を払うか」を想像する</strong>だけだ。</p>

<table>
<tr><th>ジャンル例</th><th>最後にお金が動く場所</th><th>導線</th></tr>
<tr><td>美容・スキンケア</td><td>化粧品・サロン・有料の体系化教材</td><td>強い</td></tr>
<tr><td>節約・お金</td><td>有料テンプレ・相談・教材</td><td>強い</td></tr>
<tr><td>子育て・声かけ</td><td>有料の声かけ集・相談・講座</td><td>中〜強</td></tr>
<tr><td>ただの日常動画</td><td>払う理由が見当たらない</td><td>弱い</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="人がお金を払う理由">
<rect x="6" y="26" width="148" height="72" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="80" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">悩み解決</text>
<text x="80" y="74" text-anchor="middle" font-size="11" fill="#8a4a6e">今すぐ消したい痛み</text>
<text x="80" y="90" text-anchor="middle" font-size="11" fill="#8a4a6e">→ 財布が開く</text>
<rect x="166" y="26" width="148" height="72" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="240" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">娯楽</text>
<text x="240" y="74" text-anchor="middle" font-size="11" fill="#a0aec0">あれば嬉しい</text>
<text x="240" y="90" text-anchor="middle" font-size="11" fill="#a0aec0">→ 観て終わり</text>
</svg>
<div class="figcap">人が払うのは「痛みを消す」か「欲しい未来を得る」ため</div>
</div>
<p>見分けるコツは1つ。<strong>「その悩みのために、人がすでにお金を払ってる市場か」</strong>を考える。すでにお金が動いてる＝痛みが深い証拠であり、出口がある証拠。新しく市場を作るより、人が払ってる場所に立つ方がはるかに早い。</p>

<div class="good"><b>○ 良いジャンルの条件</b> 悩みが深い／すでにお金が動く市場／自分が体験者として語れる。揃うとフォロワーがそのまま「お客さん候補」になる。</div>
<div class="bad"><b>✗ 詰まるジャンルの条件</b> 「面白い」で終わる／払う出口がない／自分は消費するだけ。再生は回るのに財布は動かない。</div>
<div class="key">マネタイズは後付けできない。<strong>最初に選んだジャンルの中に、お金が動く出口があるかが全て。</strong></div>

<h2><span class="s">6</span>実演：ジャンルを1つに絞り込む</h2>
<p>架空の人で手を動かす。まず候補を全部出す。</p>
<div class="flow">
<span>続けられること・語れることを書き出す</span><span>3軸で○△×</span><span>3つとも○を残す</span><span>さらに狭く</span><span class="is-goal">一文にする</span>
</div>
<table>
<tr><th>候補</th><th>需要</th><th>語れる</th><th>お金の出口</th></tr>
<tr><td>スキンケア</td><td>○</td><td>○</td><td>○</td></tr>
<tr><td>カフェ巡り</td><td>△</td><td>○</td><td>×</td></tr>
<tr><td>映画</td><td>△</td><td>○</td><td>×</td></tr>
<tr><td>節約</td><td>○</td><td>△</td><td>○</td></tr>
<tr><td>料理</td><td>○</td><td>△</td><td>△</td></tr>
</table>
<p>3軸を○△×で並べるのは、<strong>感情（好き）と現実（需要・出口）を切り離すため。</strong>頭の中だと「好き」が判断を曇らせる。表にすると、好きでも出口がないものが一目でわかる。</p>

<div class="step"><span class="sn">絞る</span><span class="snm">3つとも○の「スキンケア」を残し、さらに狭める</span><p>カフェ・映画は好きでも出口がないので外す（嫌いだからじゃない、長距離で詰むから）。「スキンケア」→「30代の毛穴ケア」まで狭める。広い言葉は誰の心にも引っかからずすり抜ける。</p></div>

<div class="end" style="text-align:left">
<b>完成したもの</b><br><br>
<b>ジャンル：</b>30代の毛穴ケア<br>
<b>コンセプト：</b>毛穴だらけだった30代の私が、ドラッグストアのケアだけでツルツル肌になる方法<br>
<b>需要：</b>毛穴は悩む人が多く検索もされる → ○<br>
<b>続けられる：</b>毎日やってるから苦じゃない → ○<br>
<b>お金の出口：</b>化粧品・サロン・体系化したケア教材 → ○<br><br>
3つ揃った。最初の数本から手応えが出て、伸びたフォロワーがそのままお客さん候補になる。
</div>

<h2><span class="s">7</span>検品：このジャンルで本当に走れるか</h2>
<div class="check"><ul>
<li>続けられること・語れることを10個書き出したか（頭の中で済ませてないか）</li>
<li>「悩む人が多いか」を勘じゃなく検索で確かめたか</li>
<li>需要・継続・お金の出口、3つとも○のものを選んだか</li>
<li>「美容」レベルじゃなく、もう一段狭く絞ったか</li>
<li>「誰が・何をして・どう変わるか」を一文で書けたか</li>
<li>そのジャンルの「お金が動く出口」を言えたか</li>
<li>半年続けても苦じゃないか（燃料は足りているか）</li>
</ul></div>

<div class="end">ジャンル選びは"才能"じゃない。<br><strong>需要と自分の重なりを、紙の上で1つに絞り込む"作業"だ。<br>勝負はアップロードの前に決まってる。今すぐ、あなたの1ジャンルを書き出せ。</strong></div>
</div>
  `,

  'p1-stocktake': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>「何を発信するか」を検索で探すと、なぜ最初に手が止まるのか</li>
<li>自分の強みは自分では見えない、という人間の仕組み</li>
<li>HARM4分類＋ライフスタイル軸で経験を残らず掘り出すやり方</li>
<li>材料から発信ジャンルを3〜5個に絞る4ステップ</li>
<li>コンプレックスがSNSで最強の武器になる理由</li>
<li>なぜ「結果」より「過程」を見せる人が応援されるのか</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="検索と棚卸しの違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 外で探す</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 中から掘る</text>
<circle cx="79" cy="74" r="20" fill="none" stroke="#a0aec0" stroke-width="4"/>
<line x1="93" y1="88" x2="108" y2="103" stroke="#a0aec0" stroke-width="4"/>
<text x="79" y="132" text-anchor="middle" font-size="11" fill="#718096">借り物の軸。続かない</text>
<rect x="206" y="52" width="70" height="46" rx="6" fill="#fff" stroke="#2b6cb0" stroke-width="2"/>
<line x1="216" y1="64" x2="266" y2="64" stroke="#9cb8d6" stroke-width="3"/>
<line x1="216" y1="74" x2="266" y2="74" stroke="#9cb8d6" stroke-width="3"/>
<line x1="216" y1="84" x2="248" y2="84" stroke="#9cb8d6" stroke-width="3"/>
<text x="241" y="132" text-anchor="middle" font-size="11" fill="#1e4e7e">世界に1つの軸</text>
</svg>
<div class="figcap">押し入れを全部開けて、床に出すのが棚卸し</div>
</div>

<div class="key">発信軸は<strong>「探す」ものじゃなく「自分の中から掘り出す」もの</strong>。だから最初にやるのは検索じゃなく、自分の棚卸しだ。</div>

<h3>なぜ検索で探すと、必ず行き詰まるのか</h3>
<div class="vs">
<div class="l"><div class="t">✗ 外で見つけた軸</div>すでに誰かが書いてるネタ。後追いだから詳しくも面白くもない。書くうちに「言いたいことじゃない」と気づき、続かない。</div>
<div class="r"><div class="t">○ 中から掘った軸</div>あなたの経験は世界に1つ。誰とも被らない。自分の話だからネタが尽きず、書いてて苦しくない。だから続く。</div>
</div>
<p>SNSは1回バズって終わりじゃなく、毎日積み上げる場所。<strong>続くかどうかは、外で見つけたか中から掘ったかで決まる。</strong></p>

<div class="warn">一番やっちゃいけないのが<b>「書く前に選ぶ」</b>こと。頭の中で「これは弱い」「誰も興味ない」とフィルターをかけると、手が止まって1個も書けない。<b>まず量を出す。質はあとだ。</b>誤字も気にせず、思いついた順に箇条書きで打つ。</div>

<h2><span class="s">1</span>なぜ「全部出してから選ぶ」のか</h2>
<p>最初から良いネタだけ書こうとすると必ず失敗する。理由は2つ。どちらも人間の頭の仕組みに根ざしてる。</p>

<div class="tc"><div class="hd">理由① 自分の強みは、自分では気づけない</div><div class="bd">
脳は、苦労せずできることを「特別」と記録しない。毎日料理する人に料理は息と同じで、ネタになる発想すら浮かばない。でも自炊できない人には喉から手が出る知識だ。
<span class="lab">奥の理由：</span>価値は本人の感覚じゃなく、相手との「差」の中にある。だから頭の中をいくら眺めても見つからない。文字にして外に出し、"他人の目"で見る。</div></div>

<div class="good"><b>○ こういうこと</b>「私なんて普通の主婦」と言ってた人が、棚卸しで「冷蔵庫の残り物で5分のおかず」を書いた瞬間、立派な発信軸になった。本人は当たり前すぎて気づいてなかっただけ。料理が苦手な人には、お金を払ってでも知りたい中身だ。</div>

<div class="tc"><div class="hd">理由② 弱いと思ったネタほど、化ける</div><div class="bd">
「恥ずかしくて出せない」と思う失敗談ほど、一番刺さる。本気で悩んだ証拠で、本気の話には熱が乗るから。
<span class="lab">奥の理由：</span>恥ずかしさの強さは、そのまま刺さる強さに変わる。出す段階で捨てない。捨てるかは全部並べてから決める。</div></div>

<div class="key">棚卸しは<strong>「材料集めの段階」</strong>。料理人が冷蔵庫を全部出してから献立を決めるのと同じだ。出す前に奥へ押し戻すから、献立がやせ細る。</div>

<h2><span class="s">2</span>HARMの法則で書き出す</h2>
<p>白紙を前にすると出てこない。<strong>記憶は「思い出して」では動かず、具体的な質問で初めて動く。</strong>そこで<strong>HARM4分類</strong>の引き出しを順に開ける。</p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HARM4つの引き出し">
<g>
<rect x="20" y="14" width="280" height="28" rx="5" fill="#eaf1f8" stroke="#2b6cb0"/>
<circle cx="40" cy="28" r="9" fill="#2b6cb0"/><text x="40" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">H</text>
<text x="60" y="32" font-size="12" fill="#1e4e7e">健康・美容　体・肌・心の悩み</text>
</g>
<g>
<rect x="20" y="48" width="280" height="28" rx="5" fill="#eaf1f8" stroke="#2b6cb0"/>
<circle cx="40" cy="62" r="9" fill="#2b6cb0"/><text x="40" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">A</text>
<text x="60" y="66" font-size="12" fill="#1e4e7e">夢・キャリア　将来・仕事・挑戦</text>
</g>
<g>
<rect x="20" y="82" width="280" height="28" rx="5" fill="#eaf1f8" stroke="#2b6cb0"/>
<circle cx="40" cy="96" r="9" fill="#2b6cb0"/><text x="40" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">R</text>
<text x="60" y="100" font-size="12" fill="#1e4e7e">人間関係　恋愛・家族・人付き合い</text>
</g>
<g>
<rect x="20" y="116" width="280" height="28" rx="5" fill="#eaf1f8" stroke="#2b6cb0"/>
<circle cx="40" cy="130" r="9" fill="#2b6cb0"/><text x="40" y="134" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">M</text>
<text x="60" y="134" font-size="12" fill="#1e4e7e">お金　稼ぐ・貯める・増やす</text>
</g>
</svg>
<div class="figcap">人が一生お金と時間を使い続ける4ジャンル＝需要の在りか</div>
</div>

<p>悩みが深いから解決にお金を払う。だから発信ネタもここに眠ってる。<strong>各項目、最低3個ずつ。</strong>1個だと「たまたま」で終わるが、3個出すと共通する"自分の傾向"が見える。傾向こそ軸の正体だ。</p>

<h3>H — 健康・美容・ダイエット</h3>
<div class="grp"><div class="gh">この引き出しから掘り出す質問</div><div class="gb">
<div class="rule"><span class="rn">健康の悩み</span>気になった健康の悩みは？<span class="gb2">睡眠、疲れ、肌荒れ、冷え性…</span></div>
<div class="rule"><span class="rn">病気・不調</span>病気・体調不良の経験は？<span class="gb2">入院、慢性不調、心の不調…</span></div>
<div class="rule"><span class="rn">美容</span>美容で悩んだ・解決したことは？<span class="gb2">スキンケア、脱毛、ニキビ、年齢肌…</span></div>
<div class="rule"><span class="rn">ダイエット</span>ダイエット経験は？成功も失敗も<span class="gb2">体重の増減、試した方法、リバウンド…</span></div>
<div class="rule"><span class="rn">心</span>心で悩んだ・乗り越えたことは？<span class="gb2">不安、落ち込み、自己肯定感…</span></div>
</div></div>
<div class="good"><b>○ Hの記入見本</b><br>・20代で急に肌が荒れた。スキンケアを総入れ替えして治した<br>・産後に増えた体重を、食事を見直して半年で戻した（途中1回リバウンド）<br>・寝つきが悪かったが、寝る前のスマホをやめたら改善した</div>

<h3>A — 夢・キャリア・将来</h3>
<div class="grp"><div class="gh">この引き出しから掘り出す質問</div><div class="gb">
<div class="rule"><span class="rn">挑戦・挫折</span>夢に挑戦・挫折したことは？<span class="gb2">受験、資格、スポーツ、起業…</span></div>
<div class="rule"><span class="rn">決断</span>将来で悩んだ・決断したことは？<span class="gb2">進路、転職、移住、独立…</span></div>
<div class="rule"><span class="rn">スキル</span>仕事で得たスキルや知識は？<span class="gb2">職種で身についた専門知識すべて</span></div>
<div class="rule"><span class="rn">達成</span>叶えた夢と、その努力の過程は？<span class="gb2">結果より「どう頑張ったか」</span></div>
</div></div>
<div class="good"><b>○ Aの記入見本</b><br>・第一志望に落ちた悔しさで、大学では資格を3つ取った<br>・会社員から独立した。最初の半年は収入ゼロで不安だった<br>・接客でクレーム対応のコツを覚え、怒ってる人を落ち着かせるのが得意に</div>

<h3>R — 人間関係・恋愛・家族</h3>
<div class="grp"><div class="gh">この引き出しから掘り出す質問</div><div class="gb">
<div class="rule"><span class="rn">人間関係</span>人間関係で悩んだ・解決したことは？<span class="gb2">職場、友人、家族、ママ友…</span></div>
<div class="rule"><span class="rn">恋愛</span>恋愛の経験は？<span class="gb2">片思い、失恋、遠距離、婚活…</span></div>
<div class="rule"><span class="rn">家族</span>結婚・子育て・家族での経験は？<span class="gb2">夫婦のすれ違い、子との関わり…</span></div>
<div class="rule"><span class="rn">会話</span>会話が苦手→得意になったことは？<span class="gb2">人見知り克服、聞き上手に…</span></div>
</div></div>
<div class="good"><b>○ Rの記入見本</b><br>・職場の苦手な先輩との距離の取り方を覚えた<br>・婚活アプリを1年やって、見極めるポイントがわかってきた<br>・極度の人見知りだったが、ある接し方を意識したら友達が増えた</div>

<h3>M — お金・節約・資産</h3>
<div class="grp"><div class="gh">この引き出しから掘り出す質問</div><div class="gb">
<div class="rule"><span class="rn">お金の失敗</span>お金の悩み・失敗経験は？<span class="gb2">借金、浪費、節約失敗…</span></div>
<div class="rule"><span class="rn">改善</span>お金で解決・改善したことは？<span class="gb2">節約成功、副収入、投資…</span></div>
<div class="rule"><span class="rn">収入アップ</span>収入を増やそうと試みたことは？<span class="gb2">転職、副業、スキルアップ…</span></div>
<div class="rule"><span class="rn">資産形成</span>貯金・投資で学んだことは？<span class="gb2">家計管理、積立、お金の勉強…</span></div>
</div></div>
<div class="good"><b>○ Mの記入見本</b><br>・浪費グセで貯金ゼロだったが、家計簿アプリで貯められる体質に変えた<br>・副業を3つ試して、2つは失敗、1つが収入になった<br>・固定費を見直して毎月の支出を大きく減らせた</div>

<h3>＋ Lifestyle（生活・趣味・価値観）</h3>
<p>HARMに収まらないが立派なネタになるのがライフスタイル軸。<strong>なぜ日常が武器になるか。</strong>悩み解決系はいつか書き尽きるが、暮らし方・価値観は毎日更新されて尽きない。人は「こういう生き方いいな」という憧れにもお金を払う。</p>
<div class="grp"><div class="gh">この引き出しから掘り出す質問</div><div class="gb">
<div class="rule"><span class="rn">今の環境</span>今の住環境・家族構成・職業は？<span class="gb2">一人暮らし、地方在住、共働き…</span></div>
<div class="rule"><span class="rn">趣味</span>趣味・ハマってることは？<span class="gb2">時間を忘れてやれること全部</span></div>
<div class="rule"><span class="rn">習慣</span>大切にしてる習慣・こだわりは？<span class="gb2">朝のルーティン、買い物の基準…</span></div>
<div class="rule"><span class="rn">価値観</span>人と違うと言われる生き方は？<span class="gb2">「変わってるね」と言われたこと</span></div>
</div></div>
<div class="good"><b>○ Lifestyleの記入見本</b><br>・地方移住して家賃の安い暮らし。都会の友達によく驚かれる<br>・毎朝早起きして散歩するのが長年続く習慣<br>・物を持たない暮らし。服は最小限で回してる</div>

<div class="key">紙が埋まったはず。<strong>埋まらない人は質問不足じゃなく「書く前に却下してる」</strong>。良し悪しは判断しない。思い出したものは全部書く。</div>
<div class="note">つまずきポイント：「3個出てこない」なら、引き出しの質問を声に出して自分に聞く。頭で考えるより記憶が動く。それでも出ないジャンルは無理に埋めなくていい。出ないこと自体が「この領域に縁が薄い」という大事な情報だ。</div>

<h2><span class="s">3</span>分析 — 発信軸の候補を絞る</h2>
<p>材料が机の上に並んだ。ここから選別。次の4ステップを順にやるだけで候補が浮かぶ。<strong>各ステップには「なぜそこを見るか」がある。理由がわかると迷わず選べる。</strong></p>

<div class="flow">
<span>① 繰り返し</span><span>② 他人より詳しい</span><span>③ 悩み→解決済み</span><span class="is-goal">④ 3〜5個に絞る</span>
</div>

<div class="step"><span class="sn">STEP1</span><span class="snm">繰り返し出てきたテーマを探す</span>
<p>メモを読み返し、<strong>2回以上出てくる言葉に丸</strong>をつける。HとMの両方に「節約」、AとRの両方に「人付き合い」——同じ言葉が何度も現れる場所に核がある。</p>
<div class="note"><b>なぜここを見るか：</b>人は心が引き寄せられる方へ自然と足が向く。繰り返すテーマ＝無意識に時間とエネルギーを注いできた証拠。<strong>「やりたい」軸より、すでに何度もやってきた軸の方が強い。</strong></div></div>

<div class="step"><span class="sn">STEP2</span><span class="snm">他人より詳しいものを選ぶ</span>
<p>「友達からよく相談される」「自然と人より知識がある」テーマに印。自慢にならなくていい。</p>
<div class="good"><b>○ 見つけ方のコツ</b>「最近〇〇を聞かれたな」を思い出す。LINEをさかのぼり、自分が長文で答えた話題を探すのもいい。長く答えた話題ほど語れる中身がある証拠だ。</div>
<div class="note"><b>なぜここを見るか：</b>相談されるテーマ＝<strong>すでに身近な人から信頼を勝ち取っている分野。</strong>SNSは、その信頼を知らない人にまで広げるだけ。ゼロから作るより、ある信頼を広げる方がはるかに早い。</div></div>

<div class="step"><span class="sn">STEP3</span><span class="snm">「過去に悩んで→今は解決できてる」ものを探す</span>
<p>これが一番大事。<strong>昔めちゃくちゃ悩んで、今は解決できてること</strong>を探す。</p>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="同じトンネルを先に抜けた人">
<path d="M20 84 a60 60 0 0 1 120 0 z" fill="#1e4e7e"/>
<rect x="20" y="84" width="120" height="20" fill="#1e4e7e"/>
<circle cx="80" cy="78" r="9" fill="#9cb8d6"/>
<text x="80" y="116" text-anchor="middle" font-size="11" fill="#718096">今悩んでる視聴者</text>
<circle cx="200" cy="78" r="9" fill="#2b6cb0"/>
<path d="M214 78 L250 78" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="262" y="74" font-size="11" fill="#b83280">出口</text>
<text x="262" y="90" font-size="11" fill="#b83280">あなた</text>
<text x="200" y="116" text-anchor="middle" font-size="11" fill="#1e4e7e">少し先を歩く人</text>
</svg>
<div class="figcap">「こっちに出口あったよ」を、後ろの人は信じる</div>
</div>
<div class="key"><strong>悩んでた頃のあなた＝今の視聴者そのものだ。</strong>どう悩み、何を試し、どう抜けたか。その全部が、同じ場所で立ち往生する人の「地図」になる。</div>
<p>外にいる人の「こっちだよ」より、少し先を歩く人の「出口あったよ」を信じる。<strong>距離が近いほど言葉は信じられる。</strong>「皮膚科を何軒も回ってようやく合う薬に出会った」という泥くさい遠回りこそ、同じ遠回りをする人の救いになる。「自分にもできそう」が見えるからだ。</p></div>

<div class="step"><span class="sn">STEP4</span><span class="snm">発信ジャンル候補を3〜5個書き出す</span>
<p>STEP1〜3で印をつけたものを見渡すと「これとこれかな」が浮かぶ。それを<strong>3〜5個</strong>書き出して次章へ。</p>
<div class="splitbar"><div class="sb-main" style="width:55%">3〜5個＝比較しやすい</div><div class="sb-sub" style="width:45%">多すぎ／少なすぎはNG</div></div>
<div class="warn">1個に絞り切らなくていい。10個も残すのもダメ。<b>多すぎると選べず、少なすぎると行き詰まる。</b>選択肢が多いほど人は決められない。迷ったら<b>「これを1ヶ月、毎日書けるか」</b>で判断。書けないものは興味が薄い証拠。外す。</div></div>

<h2><span class="s">4</span>コンプレックスを武器にする</h2>
<p>多くの人が見落とす最強の材料が<strong>コンプレックス</strong>だ。太ってた、離婚した、借金があった、友達がいなかった——大きな声で言えない過去ほど、棚卸しで真っ先に消したくなる。そこをあえて残す。</p>
<div class="warn"><b>! 弱さ＝強さ</b><br>隠したいものほど、発信では強みになる。</div>

<h3>なぜ弱さが武器になるのか</h3>
<p><b>奥にある理由：</b>人は、自分と同じ痛みを知る相手にしか本当に心を開かない。ダイエットを教わるなら、生まれつき細い人と、昔太ってて痩せた人、どっちを信じる？</p>
<div class="vs">
<div class="l"><div class="t">✗ 最初から完璧な人</div>「太ったことないけど痩せ方教えます」→「悩んだ気持ちがわからない人に何がわかる」。正しくても、遠い。<b>言葉は上から落ちてくる。</b></div>
<div class="r"><div class="t">○ 乗り越えた人</div>「私も昔太ってて鏡が嫌だった。でもこの方法で変われた」→ 同じ痛みを知る人だから信じられる。近い。<b>言葉は横から差し出される。</b></div>
</div>
<p>人は上から来る言葉に身構え、横から来る言葉に心を開く。応援したくなるのは、いつも後者だ。「声が震えてた私が場数を踏んで克服した話」は、今まさに震えてる人には他人事じゃなく自分の話に聞こえる。</p>
<div class="key">隠したい過去ほど、同じ場所にいる誰かには<strong>「これ、私のことだ」と思える物語</strong>になる。前章の"鏡"を覚えてるか。コンプレックスは最高の鏡だ。だから棚卸しで失敗談を消さない。印をつけて残す。</div>

<h2><span class="s">5</span>コンセプト方程式に当てはめる</h2>
<p>出てきた素材を、いよいよ「発信軸」の形にする。使うのはこの式だ。</p>
<div class="eq"><b>コンプレックス</b> × <b>HARM</b> × <b>変化していく姿</b></div>
<p>なぜこの3つの掛け算か。<strong>3つそろって初めて「応援される物語」になる。</strong>1つでも欠けると軸は弱くなる。</p>
<table>
<tr><th>要素</th><th>役割</th><th>例</th></tr>
<tr><td>コンプレックス</td><td>「同じ痛み」の近さ</td><td>お金に困っていた私が</td></tr>
<tr><td>HARM</td><td>お金を払う需要</td><td>お金の悩みを解決（M）</td></tr>
<tr><td>変化していく姿</td><td>「続きが気になる」</td><td>半年で家計を立て直す過程</td></tr>
</table>
<div class="final">お金に困っていた私が（コンプレックス）× お金の悩みを解決する（M）× 半年で家計を立て直していく過程（変化）</div>
<p>棚卸しで「お金の失敗」と「節約で改善」を書いた人なら、もう埋められる。<strong>「自分の過去・読者の悩み・今の挑戦」の3つがそろってるか確認。</strong>欠けてたら棚卸しに戻って材料を足す。式が埋まらないのは軸が悪いんじゃなく、材料が足りないだけだ。</p>
<div class="good"><b>○ 他ジャンルでの当てはめ例</b><br>・元・万年ダイエット失敗の私が × 体型の悩み（H）× 100日で体を変える過程<br>・元・人見知りで友達ゼロの私が × 人間関係の悩み（R）× 半年で人付き合いが変わる過程<br>・仕事が続かなかった私が × キャリアの悩み（A）× 今の仕事を1年続ける過程</div>

<h2><span class="s">6</span>結果より「過程」を見せる</h2>
<p>方程式の3つ目「変化していく姿」にコツが隠れてる。<strong>完成した結果じゃなく、変わっていく過程を見せる。</strong>SNSで応援される最大の法則だ。</p>
<div class="vs">
<div class="l"><div class="t">✗ 結果だけ</div>「借金を完済しました」「体型を変えました」→ すごいけど、もう終わった話。見てる側は置いてけぼり。応援する隙間がない。</div>
<div class="r"><div class="t">○ 過程を見せる</div>「100日で痩せる過程を毎日記録」「月5万円で生活できるか今から挑戦」→ 一緒にドキドキできる。続きが気になる。</div>
</div>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="観客から応援者へ">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">結果だけ＝観客</text>
<circle cx="79" cy="60" r="22" fill="none" stroke="#a0aec0" stroke-width="3"/>
<polyline points="69,60 76,68 90,52" fill="none" stroke="#a0aec0" stroke-width="3"/>
<text x="79" y="104" text-anchor="middle" font-size="11" fill="#718096">「ふーん」で終わる</text>
<line x1="160" y1="16" x2="160" y2="108" stroke="#e2e8f0"/>
<text x="241" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">過程＝応援者</text>
<polyline points="200,90 222,72 244,76 266,48 300,30" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="200" cy="90" r="4" fill="#2b6cb0"/><circle cx="244" cy="76" r="4" fill="#2b6cb0"/><circle cx="300" cy="30" r="5" fill="#b83280"/>
<text x="241" y="104" text-anchor="middle" font-size="11" fill="#1e4e7e">毎日見に来る</text>
</svg>
<div class="figcap">途中だから、自分の声援が届く気がする</div>
</div>
<p><b>奥にある理由：</b>人は「完成品」に憧れるが応援はしない。自分の出る幕がないから。でも「今頑張ってる人」にはつい手を貸す。生で試合を見ると手に汗を握り、結果だけニュースで知ると「ふーん」で終わるのと同じだ。</p>
<p>「今日は誘惑に負けて食べすぎた」という失敗まで正直に出すと「私もです」「明日また頑張ろう」と声がかかる。失敗を見せた回ほど距離が縮まるのは、そこで「この人も自分と同じ人間だ」と安心するからだ。<strong>この「一緒に」が関係を作る。</strong></p>
<div class="key"><strong>結果は「すごいね」で終わる。過程は「一緒にやろう」が生まれる。</strong>だから発信は、解決した自慢話じゃなく、今まさに変わる途中経過で組む。</div>
<div class="note">つまずきポイント：「まだ完成してないのに発信していいの？」逆だ。「返してる途中の人」の方が応援される。完璧になってから始めると、皮肉にも、もう誰も応援できる余地がない。<b>完璧になってからじゃ遅い。途中だから、人がついてくる。</b></div>

<h2><span class="s">7</span>検品：ちゃんと棚卸しできたか</h2>
<p>1つでも飛ばすと、次章の「絞り込み」で材料不足になる。</p>
<div class="check"><ul>
<li>健康・美容（H）を最低3個書いたか</li>
<li>夢・キャリア（A）を最低3個書いたか</li>
<li>人間関係（R）を最低3個書いたか</li>
<li>お金（M）を最低3個書いたか</li>
<li>生活・趣味・価値観（Lifestyle）を書いたか</li>
<li>書く前に却下せず、全部出したか</li>
<li>繰り返し出てきたテーマに印をつけたか</li>
<li>「友達からよく相談される」分野を見つけたか</li>
<li>「過去に悩んで→今は解決できてる」ものを探したか</li>
<li>コンプレックス（弱さ）を消さず残したか</li>
<li>発信ジャンル候補を3〜5個に絞ったか</li>
</ul></div>
<div class="end">棚卸しは「材料集めの段階」。まだ冷蔵庫の中身を全部出しただけ。<br>ここで良し悪しを判断しちゃいけない。判断は次章でやる。<br><strong>あなたの棚卸しは、誰も持ってない世界に1つだけの材料だ。弱さは隠さず武器にする。</strong></div>
</div>
  `,

  'p1-axis': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>「美容も子育ても投資も」が伸びない本当の理由（人の頭の仕組み）</li>
<li>なぜ「捨てる」のが、いちばん早く伸びる近道なのか</li>
<li>候補を5項目で採点し、勝てる軸を1つだけ選ぶやり方</li>
<li>4段階で優先度を付け、感情に流されず即決する手順</li>
<li>アカウントを「Xが教える／Yの発信／フォローするとZ」の1文で言い切る方法</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>
<div class="key">この章の結論はたった1つ。<strong>軸を1つに絞れ。残りは全部捨てろ。</strong>足し算じゃなく引き算の章だ。最初の半年は1つの軸だけで勝負する。</div>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="絞らない人と絞った人の差">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 全部見せる</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 1つに絞る</text>
<rect x="22" y="40" width="34" height="20" rx="4" fill="#cbd5e0"/><text x="39" y="54" text-anchor="middle" font-size="9" fill="#718096">美容</text>
<rect x="62" y="40" width="34" height="20" rx="4" fill="#cbd5e0"/><text x="79" y="54" text-anchor="middle" font-size="9" fill="#718096">子育て</text>
<rect x="102" y="40" width="34" height="20" rx="4" fill="#cbd5e0"/><text x="119" y="54" text-anchor="middle" font-size="9" fill="#718096">投資</text>
<rect x="42" y="68" width="34" height="20" rx="4" fill="#cbd5e0"/><text x="59" y="82" text-anchor="middle" font-size="9" fill="#718096">副業</text>
<rect x="82" y="68" width="34" height="20" rx="4" fill="#cbd5e0"/><text x="99" y="82" text-anchor="middle" font-size="9" fill="#718096">勉強</text>
<text x="79" y="115" text-anchor="middle" font-size="11" fill="#718096">引き出しが作られず</text>
<text x="79" y="132" text-anchor="middle" font-size="11" fill="#718096">まるごと忘れられる</text>
<rect x="204" y="48" width="74" height="30" rx="6" fill="#2b6cb0"/><text x="241" y="68" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">毛穴の人</text>
<text x="241" y="115" text-anchor="middle" font-size="11" fill="#1e4e7e">頭に1枠だけ席を取る</text>
<text x="241" y="132" text-anchor="middle" font-size="11" fill="#1e4e7e">思い出してもらえる</text>
</svg>
<div class="figcap">人の頭には「あなた専用の引き出し」が1つしかない</div>
</div>

<p>美容、子育て、投資、副業…どれも語れる気がして当然だ。1つの人生で複数を経験してるんだから。でも<strong>選択肢を増やすほど、人は何も覚えてくれない。</strong>脳は、覚える相手1人に何枠も割く余裕がない。詰め込むほど引き出しごと忘れられる。</p>

<div class="flowbig">
<span>1つに絞る</span><span>頭に引き出しができる</span><span>思い出される</span><span>仕組みにも乗る</span><span class="is-goal">伸びる</span>
</div>
<div class="warn">だからこの章の本体は「いい軸を見つけること」だけじゃない。<b>「いらない軸を、覚悟を持って手放すこと」だ。</b>選ぶ作業の本体は、選ぶことより捨てることにある。</div>

<h2><span class="s">1</span>なぜ絞らないと伸びないのか</h2>
<p>「結局この人、何の人？」という疑問が出た瞬間、フォローは消える。理由は3つ。どれも人やシステムの「仕組み」に根ざしている。</p>

<div class="tc"><div class="hd">理由1：人は「肩書き1つ」しか覚えられない</div><div class="bd">
<div class="vs"><div class="l"><div class="t">✗ なんでも屋</div>ケーキもラーメンも寿司も出す店 → 何屋か分からず思い出されない</div><div class="r"><div class="t">○ 専門店</div>モンブラン専門店 → 食べたい瞬間に一発で浮かぶ</div></div>
<span class="lab">奥の理由：</span>覚えてもらうとは、相手の頭の整理棚に1枠もらうこと。枠を3つ要求した瞬間、1枠ももらえなくなる。</div></div>

<p><b>試せ：</b>自分のフォロー一覧を開き、上から10人「この人は何の人？」と一言で言ってみろ。スッと言える人ほど記憶に残っている。言えない人は、フォローしてることすら忘れてる。あなたも他人からそう見られてる。</p>
<div class="note">つまずきポイント：「1つに絞ると幅がなくなる気がする」と不安になる。逆だ。1つに絞った人ほど深く語れて「幅がある人」に見える。幅はテーマの数じゃなく、1テーマの掘り下げで生まれる。</div>

<div class="tc"><div class="hd">理由2：おすすめに乗らない</div><div class="bd">
SNSは「興味がありそうな人」へ投稿を自動で配る仕組み。中身が混ざると配る側も「誰に見せればいい？」と判断できず、どの相手にも中途半端な確率でしか届かない。
<span class="lab">奥の理由：</span>機械は、迷う対象を後回しにする。軸を揃えるとは、機械に迷わせない作業だ。</div></div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="郵便の仕分け">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 宛先ごちゃ混ぜ</text>
<rect x="40" y="34" width="78" height="50" rx="8" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="79" y="56" text-anchor="middle" font-size="10" fill="#718096">美容・育児</text>
<text x="79" y="72" text-anchor="middle" font-size="10" fill="#718096">投資 混在</text>
<text x="79" y="104" text-anchor="middle" font-size="10" fill="#718096">仕分け係が止まる</text>
<text x="79" y="120" text-anchor="middle" font-size="10" fill="#718096">すみっこで届かない</text>
<line x1="160" y1="20" x2="160" y2="124" stroke="#e2e8f0"/>
<text x="245" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 宛先が太字</text>
<rect x="206" y="34" width="78" height="50" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="62" text-anchor="middle" font-size="11" fill="#1e4e7e" font-weight="700">美容好きへ</text>
<path d="M245 88 l0 14" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a1)"/>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker></defs>
<text x="245" y="120" text-anchor="middle" font-size="10" fill="#1e4e7e">迷わず棚へ＝届く</text>
</svg>
<div class="figcap">1ジャンルに揃える＝荷物に宛先を太字で書く作業</div>
</div>

<div class="tc"><div class="hd">理由3：あなた自身が続かない</div><div class="bd">
3ジャンルを同時に追うとネタ探しも勉強も3倍。30分を3つに分けると全部浅い。同じ30分を毛穴ケア1本に注げば、新商品も論争も最新の話題も全部追える。
<span class="lab">奥の理由：</span>人は「成長してる実感」があるから続く。集中すると目に見えて詳しくなり、それが楽しくて続く。続ける力すら、絞ることから生まれる。</div></div>

<div class="vs">
<div class="l"><div class="t">✗ 絞ってない自己紹介</div>「美容・子育て・投資・副業を発信！日々の学びをシェア」→ 何も覚えてもらえず、フォローする理由がない</div>
<div class="r"><div class="t">○ 絞った自己紹介</div>「30代から始める毛穴ケア専門。ズボラでも続く方法だけ発信」→ 毛穴に悩む人が「この人だ」と即フォロー</div>
</div>
<div class="warn">「絞ったらネタが尽きそう」は逆。毛穴1つでも「黒ずみ・開き・たるみ・洗顔・化粧水・季節別・年代別…」と尽きない。<strong>浅く広げると枯れ、深く掘ると湧き出す。</strong></div>

<h2><span class="s">2</span>候補を採点する5項目</h2>
<p>棚卸しで出した候補（3〜5個）を、次の5項目で<strong>必ず紙に書く</strong>。頭の中で考えるな。書くと、強い案と弱い案が目に見えて分かれる。</p>

<table>
<tr><th>項目</th><th>何を見るか</th></tr>
<tr><td>1 キャッチ</td><td>「これは何のアカウント？」を1行で言えるか</td></tr>
<tr><td>2 コンセプト</td><td>誰が・何をして・どうなる（悩み×種類×変化で1文）</td></tr>
<tr><td>3 差別化</td><td>競合との違い。3つ以上の掛け算があると強い</td></tr>
<tr><td>4 売る方法</td><td>何を売れるか。導線がないジャンルはここで除外</td></tr>
<tr><td>5 リスク・課題</td><td>立ちはだかる壁。書くだけで覚悟が決まる</td></tr>
</table>
<p><b>なぜ書くか：</b>頭の中だと全部を都合よく甘く採点する。紙に5項目で並べると、空欄や詰まりが"逃げられない事実"として出る。書くとは、希望と現実を引きはがす作業だ。</p>

<h3>1. キャッチ（一言で表現する）</h3>
<p>1行で即答できるか。考え込むなら、まだ軸が曖昧だ。<b>奥の理由：</b>あなたが一言で言えないものを、他人が一言で覚えられるはずがない。家族や友達に声に出して言ってみろ。</p>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="前のめりとふーん">
<rect x="0" y="20" width="150" height="70" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="75" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">前のめり</text>
<text x="75" y="74" text-anchor="middle" font-size="11" fill="#8a4a6e">「自分に関係ある」</text>
<rect x="170" y="20" width="150" height="70" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="245" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">ふーん</text>
<text x="245" y="74" text-anchor="middle" font-size="11" fill="#a0aec0">「他人事」</text>
</svg>
<div class="figcap">相手が前のめりになる一言が、強いキャッチ</div>
</div>
<div class="good"><b>良い例</b> 30代ズボラ向け毛穴ケア専門／3行日記で頭を整える勉強法／元手取り18万から始める副業</div>
<div class="bad"><b>悪い例</b> 「美容と暮らしと学びについて」→ 何屋か分からない。詰まる時点で外していい合図。</div>

<h3>2. コンセプト（誰が・何をして・どうなる）</h3>
<p>方程式（悩み × 種類 × 変化）に沿って1文で書く。書ければ「物語」がある証拠。</p>
<div class="draft"><b>例：</b>頭の中がごちゃごちゃで何も続かなかった私が、3行日記を毎日書いて、気持ちが整理され、勉強もはかどり、新しい挑戦に動き出せるようになった</div>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="変化の落差">
<rect x="14" y="56" width="90" height="38" rx="8" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="59" y="42" text-anchor="middle" font-size="11" fill="#718096">前</text>
<text x="59" y="79" text-anchor="middle" font-size="11" fill="#718096">ごちゃごちゃ</text>
<path d="M114 75 L150 40" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<rect x="160" y="14" width="90" height="38" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="205" y="38" text-anchor="middle" font-size="11" fill="#1e4e7e">動き出せた</text>
<text x="280" y="55" text-anchor="middle" font-size="11" fill="#b83280">この落差に</text>
<text x="280" y="72" text-anchor="middle" font-size="11" fill="#b83280">読者が乗る</text>
</svg>
<div class="figcap">人が惹かれるのは情報じゃなく「変化の落差」</div>
</div>
<p>「3行日記を書いてます」だけでは行動報告で心は動かない。<strong>コンセプトとは、読み手が主人公として参加できる"変化の物語"のことだ。</strong></p>

<h3>3. 差別化（競合との違い）</h3>
<p>同ジャンル上位の発信者と何が違うか書く。効くのが<strong>「3つ以上の掛け算」</strong>だ。</p>
<div class="venn">
<div class="c c1">日記</div>
<div class="c c2">勉強法</div>
<div class="c c3">30代の働く女性</div>
</div>
<p>「日記が上手い人」は山ほどいても、3つの交差点に立つ人はほぼいなくなる。<b>奥の理由：</b>1点突破でトップは才能勝負で勝ちにくいが、組み合わせの交差点なら自動的に唯一になれる。さらに「自分が実際にやって変わった」という<strong>体験という証拠</strong>が説得力を増す。立派な肩書きはいらない。人は、語る人より"やった人"を信じるからだ。</p>
<div class="key">差別化は「すごい才能」じゃなく<strong>「組み合わせ」と「証拠」</strong>で作る。1つで勝てなくても、3つ掛けた瞬間に競合がいなくなる。</div>

<h3>4. 売る方法（複数可）</h3>
<p>このジャンルで<strong>何を売れるか</strong>を全部書く。商品紹介・自分の商品・相談対応・教材・有料記事など。<strong>どれだけ伸びても、売るものがないジャンルは1円にもならない。</strong></p>
<div class="vs">
<div class="l"><div class="t">✗ 痛みがない</div>「面白い雑学」→ 知れたら楽しい程度。財布は開かない</div>
<div class="r"><div class="t">○ 痛みがある</div>「美容・副業」→「今のままが嫌だ」を解く商品にお金が動く</div>
</div>
<p><b>奥の理由：</b>人がお金を払うのは「悩みを消したい」「変わりたい」という痛みがある時だけ。手を動かすなら、候補ごとに「この人にいくらまで払うか」を一行ずつ想像しろ。<strong>財布の紐がゆるむ場面が浮かぶ軸ほど、その奥に痛みがある＝稼げる軸だ。</strong></p>
<div class="bad"><b>除外の判断</b> 売れるものを書こうとして手が止まる候補は、思い切って外す。伸びても稼げない軸は、最初の半年では選ばない。</div>

<h3>5. リスク・課題</h3>
<p>立ちはだかる壁を先に予測して書く。後から「こんなはずじゃ」とならない予防接種だ。</p>
<table>
<tr><th>壁の種類</th><th>具体的にどういうことか</th></tr>
<tr><td>見栄えの難しさ</td><td>写真や動画が要るか。料理・ファッションはハードルが高い</td></tr>
<tr><td>ネタの枯渇</td><td>1ヶ月で語り尽くしそうなジャンルは危険。深さがあるか</td></tr>
<tr><td>競合の強さ</td><td>すでに大きいアカウントがひしめいてないか。隙間があるか</td></tr>
<tr><td>季節性</td><td>夏だけ・年末だけの需要だと、年の大半が暇になる</td></tr>
</table>
<div class="key"><b>奥の理由：</b>人が挫折するのは壁にぶつかった時じゃなく「予想してなかった壁にぶつかった時」だ。先に書いておけば「分かってたことだ」と冷静に処理できる。<strong>壁は、見えていれば踏み台、見えていなければ落とし穴。</strong></div>

<h2><span class="s">3</span>5項目を実際に埋める（記入例）</h2>
<p>1つの候補を5項目で埋めた完成形。あなたも自分の候補をこの形で埋める。</p>
<table>
<tr><th>項目</th><th>記入例（候補：ズボラ毛穴ケア）</th></tr>
<tr><td>1 キャッチ</td><td>30代から始めるズボラ毛穴ケア専門</td></tr>
<tr><td>2 コンセプト</td><td>毛穴の黒ずみが恥ずかしくてマスクが外せなかった私が、夜の手抜きケアだけで人前で笑えるようになった</td></tr>
<tr><td>3 差別化</td><td>毛穴 × ズボラ（頑張らない）× 30代の3つの掛け算。「手抜きでいい」と言い切る人が少ない</td></tr>
<tr><td>4 売る方法</td><td>化粧品の紹介／毛穴ケア教材／有料記事</td></tr>
<tr><td>5 リスク</td><td>美容は競合が多い。見栄えする写真がやや要る。ただズボラ軸で差別化できる見込み</td></tr>
</table>
<div class="note">つまずきポイント：「全項目をきれいに埋めなきゃ」と完璧を狙って手が止まる人がいる。逆だ。<strong>埋まらない欄こそ最大の収穫。空欄は「この軸のどこが弱いか」を無料で教えてくれる。</strong></div>

<h2><span class="s">4</span>優先度の付け方（4段階）</h2>
<p>全候補を埋めたら、1つずつ優先度を付ける。基準は<strong>差別化・需要・継続力の3拍子</strong>。</p>
<div class="ladder">
<div class="rung"><b>最強：主軸候補</b>3拍子が揃ってる → これで決めて即始める</div>
<div class="rung"><b>強い：主軸候補</b>何かが少し弱いが十分戦える → 主軸として走る</div>
<div class="rung"><b>磨き待ち</b>伸びしろはあるが磨きが必要 → 今は主軸にしない</div>
<div class="rung"><b>サブ素材</b>単体では弱い → 主軸の中で時々入れるトピックに</div>
</div>
<p><b>なぜ点数化するのか：</b>迷ったら各項目を5点満点で点数化しろ。差別化4点・需要5点・継続力2点なら、続けられない弱さが見えてくる。人は「好きか嫌いか」の感情で選びがちで、感情は弱点を見えなくする。<strong>数字は、自分の思い込みに反論してくれる唯一の道具だ。</strong></p>
<div class="key">いちばん弱い「サブ素材」も捨てない。<strong>主軸の中にたまに混ぜるスパイス</strong>として残す。毛穴が主軸なら、たまに「子育て中でも続くケア」を少し混ぜる。軸がブレない範囲で人間味が出て、親しみが増す。</div>

<h2><span class="s">5</span>最終決定の手順</h2>
<p>採点が終わったら、次の順番で<strong>機械的に</strong>1つに決める。悩む時間を作らないために、ルールを先に決めておく。</p>
<p><b>なぜ機械化するか：</b>選択は迷うほど苦しくなり、苦しいほど「決めない」という最悪の結論に逃げ込む。「こう来たらこう決める」を先に縛れば、感情が割り込む隙がなくなり即決できる。</p>

<div class="step"><span class="sn">1</span><span class="snm">候補を5項目で評価しきる</span><p>全候補を5項目で埋める。途中で埋まらない候補は弱いと判断していい。<b>なぜ最初に：</b>比べる土俵を揃えないと印象だけで選んでしまう。同じ5項目で並べて初めてフェアな比較ができる。</p></div>

<div class="step"><span class="sn">2</span><span class="snm">最強が出たら、それを主軸に決める</span><p>3拍子が揃った最強があれば迷わずそれ。複数あるなら「自分が継続できそうな方」。<b>なぜ継続で：</b>半年毎日続けるんだから、能力より「疲れないか」が勝負を分ける。続けた者だけが伸びる。</p></div>

<div class="step"><span class="sn">3</span><span class="snm">最強がなく強い候補が複数なら、売る導線が強い方</span><p>どんぐりの背比べなら<strong>売れるものが多い方</strong>を取る。<b>なぜ売る導線で：</b>これは収益化の教材だ。伸びても1円にならない軸を選べば、半年後に「楽しかったけど稼げなかった」で終わる。</p></div>

<div class="step"><span class="sn">4</span><span class="snm">主軸を1文で言い切る</span><p>「Xが教える／Yの発信／フォローするとZ」の型で1文にする。<b>なぜ最後に1文化：</b>頭で「決めた」つもりでも、1文にできなければまだ決まっていない。1文に落とせて初めて選択が完了する。</p></div>

<div class="warn">やってはいけないのが<b>「最強が2つあるから両方やる」</b>。それがこの章で潰した「絞らない人」そのもの。もう片方は半年後に2アカウント目で始めればいい。1つを伸ばし切った経験は2つ目に必ず効く。<strong>同時にやると両方半端、順番にやると両方本物になる。</strong></div>

<h2><span class="s">6</span>主軸を「1文」で言い切る</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="フォローを押す3条件">
<rect x="8" y="30" width="96" height="70" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="56" y="55" text-anchor="middle" font-size="14" font-weight="700" fill="#2b6cb0">X</text>
<text x="56" y="76" text-anchor="middle" font-size="10" fill="#1e4e7e">誰が教える</text>
<text x="56" y="90" text-anchor="middle" font-size="9" fill="#718096">信用できる？</text>
<rect x="112" y="30" width="96" height="70" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="55" text-anchor="middle" font-size="14" font-weight="700" fill="#2b6cb0">Y</text>
<text x="160" y="76" text-anchor="middle" font-size="10" fill="#1e4e7e">何の発信</text>
<text x="160" y="90" text-anchor="middle" font-size="9" fill="#718096">興味に合う？</text>
<rect x="216" y="30" width="96" height="70" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="264" y="55" text-anchor="middle" font-size="14" font-weight="700" fill="#b83280">Z</text>
<text x="264" y="76" text-anchor="middle" font-size="10" fill="#8a4a6e">どうなる</text>
<text x="264" y="90" text-anchor="middle" font-size="9" fill="#8a4a6e">得がある？</text>
<text x="160" y="120" text-anchor="middle" font-size="11" fill="#1e4e7e">3つ揃った時だけ指が動く</text>
</svg>
<div class="figcap">この1文は、読み手の頭の"フォローを押す条件"そのもの</div>
</div>
<ul>
<li><b>X＝誰が教えるか</b>…肩書き・立場（経験者・同じ悩みを越えた人）</li>
<li><b>Y＝何の発信か</b>…ジャンルと切り口を一言で</li>
<li><b>Z＝フォローするとどうなるか</b>…読者が受け取る変化・得</li>
</ul>
<div class="final">
<b>例1（毛穴）：</b>元・毛穴コンプレックスの私が教える／ズボラでも続く毛穴ケアの発信／フォローすると、頑張らずにマスクを外せる肌になる<br><br>
<b>例2（日記）：</b>頭が散らかってた私が教える／3行日記と勉強法の発信／フォローすると、思考が整理されてやりたいことに動き出せる<br><br>
<b>例3（副業）：</b>元手取り18万の会社員が教える／スキマ時間で始める副業の発信／フォローすると、本業を辞めずに月の収入を増やせる
</div>
<p>この1文が書けたら、プロフィール文も投稿テーマも売る商品も、全部ここから逆算して決まる。<strong>決めた1文を紙に書いて机に貼れ。</strong>投稿に迷ったら「これはZにつながるか」のYes/No1問で一発判断できる。基準が頭の外に固定されるから、毎日の判断が速くなる。</p>

<h2><span class="s">7</span>初心者がつまずく3つの落とし穴</h2>
<div class="stats">
<div class="stat-c"><div class="n">落とし穴1</div><div class="l">「好き」だけで選ぶ → 売るものがない軸は稼げない。売る方法を必ず見る</div></div>
<div class="stat-c"><div class="n">落とし穴2</div><div class="l">「実績がないから」と弱気で選ぶ → 差別化は実績でなく3つの掛け算で作れる</div></div>
<div class="stat-c"><div class="n">落とし穴3</div><div class="l">決めた後にコロコロ変える → 最初の半年は変えない。ブラすと毎回ゼロから</div></div>
</div>
<p>特に落とし穴3が多い。2週間で結果が出ないのは普通だ。<strong>軸を変えるんじゃなく、切り口や見せ方を磨く。</strong></p>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="軸は土台、切り口は飾り">
<rect x="100" y="78" width="120" height="28" rx="6" fill="#1e4e7e"/>
<text x="160" y="97" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">軸＝土台（半年握る）</text>
<rect x="118" y="50" width="36" height="24" rx="5" fill="#9cb8d6"/><text x="136" y="66" text-anchor="middle" font-size="9" fill="#fff">黒ずみ</text>
<rect x="166" y="50" width="36" height="24" rx="5" fill="#9cb8d6"/><text x="184" y="66" text-anchor="middle" font-size="9" fill="#fff">開き</text>
<text x="160" y="34" text-anchor="middle" font-size="11" fill="#b83280">切り口＝飾り（ここを変える）</text>
</svg>
<div class="figcap">伸びない時に削るのは飾り。土台は半年握り続ける</div>
</div>
<p><b>奥の理由：</b>軸を変えると、相手の頭にできかけた「あなた＝何の人」の引き出しが真っ白に戻り、積んだ信頼と認知が全部リセットされる。毛穴ケアで伸びないなら、子育てに乗り換えるんじゃなく「黒ずみ」から「開き」へ、文章から写真へ、と見せ方だけを変える。これが伸びる人と消える人の分かれ目だ。</p>

<div class="check"><ul>
<li>候補を全部、5項目（キャッチ／コンセプト／差別化／売る方法／リスク）で書き切った？</li>
<li>各候補に優先度（最強／強い／磨き待ち／サブ素材）を付けた？</li>
<li>主軸を「1つだけ」に絞った？（2つ残してない？）</li>
<li>その軸は「売るもの」の導線があるか確認した？</li>
<li>「Xが教える／Yの発信／フォローするとZ」の1文を、迷わず言えた？</li>
</ul></div>

<div class="end">人は、欲張る発信者を覚えない。1つに絞った人だけを覚える。<br>だから——候補を1つの軸に絞れ。5項目で評価し、最強または「売る導線が強い強候補」を選ぶ。<br><strong>軸を1文で言い切れた瞬間、あなたのアカウントは動き出す。</strong></div>
</div>
  `,

  'p1-bench': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>「完全オリジナルで考える」が一番伸びない理由</li>
<li>参考が1個でなく10個いる理由</li>
<li>タグでアルゴリズムを"属性教育"する手順（いいね20〜30）</li>
<li>採用基準を満たす参考を10個集める方法</li>
<li>海外から先回りでトレンドを拾う手順</li>
<li>フォロワー数より大事な「構・世・掴・的」の4視点</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>
<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ゼロから考えると分解では">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ ゼロから発明</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 分解して組む</text>
<circle cx="79" cy="78" r="20" fill="#cbd5e0"/>
<text x="79" y="83" text-anchor="middle" font-size="20" fill="#fff">?</text>
<text x="79" y="130" text-anchor="middle" font-size="11" fill="#718096">当たり外れが永遠に不明</text>
<circle cx="206" cy="62" r="9" fill="#2b6cb0"/><circle cx="241" cy="55" r="9" fill="#2b6cb0"/><circle cx="276" cy="62" r="9" fill="#2b6cb0"/>
<path d="M206 71 L235 92" stroke="#b83280" stroke-width="2"/><path d="M276 71 L247 92" stroke="#b83280" stroke-width="2"/><path d="M241 64 L241 92" stroke="#b83280" stroke-width="2"/>
<rect x="221" y="92" width="40" height="22" rx="6" fill="#b83280"/>
<text x="241" y="107" text-anchor="middle" font-size="10" fill="#fff">自分の型</text>
<text x="241" y="130" text-anchor="middle" font-size="11" fill="#1e4e7e">答え合わせ済みを借りる</text>
</svg>
<div class="figcap">伸びてる人は全員、誰かを参考にしている</div>
</div>
<div class="key">オリジナルで型を発明しようとする人が、一番遠回りする。<strong>「先に当てた人の型」を借りて、自分の素材で組み直す。</strong>これが恥でも手抜きでもなく、一番確実な正攻法だ。</div>

<h3>なぜ「オリジナル」だと伸びないのか</h3>
<div class="vs">
<div class="l"><div class="t">理由1｜答えはもう出てる</div>あなたが思いつくアイデアは、たいてい誰かが試して当たり外れが出ている。伸びてる人の投稿欄が、答え合わせ済みの問題集だ。閉じたまま想像で解くな。</div>
<div class="r"><div class="t">理由2｜初心者の感覚は当たらない</div>何が指を止めるか、観察の前は判断基準が育っていない。良い型を大量に見て、基準そのものを自分の中に作る。センスは「良いものを見た量」で後から作れる。</div>
</div>
<div class="warn">参考集めの目的は「ネタをパクること」じゃない。<b>「何が当たるかの判断基準を、自分の中にインストールすること」だ。</b>良い型を浴びると、自分の投稿を見た瞬間「これは弱い」と分かる目が育つ。</div>

<h3>なぜ参考は10個か</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1冊と複数冊">
<rect x="20" y="40" width="32" height="44" rx="3" fill="#cbd5e0"/>
<path d="M70 62 L100 62" stroke="#a0aec0" stroke-width="2" marker-end="url(#a1)"/>
<rect x="110" y="40" width="32" height="44" rx="3" fill="#a0aec0"/>
<text x="36" y="100" text-anchor="middle" font-size="10" fill="#718096">1冊だけ</text>
<text x="126" y="100" text-anchor="middle" font-size="10" fill="#718096">劣化コピー</text>
<rect x="180" y="42" width="20" height="42" rx="3" fill="#9cb8d6"/><rect x="204" y="42" width="20" height="42" rx="3" fill="#2b6cb0"/><rect x="228" y="42" width="20" height="42" rx="3" fill="#9cb8d6"/>
<path d="M256 62 L282 62" stroke="#b83280" stroke-width="2" marker-end="url(#a1)"/>
<rect x="290" y="46" width="24" height="36" rx="3" fill="#b83280"/>
<text x="214" y="100" text-anchor="middle" font-size="10" fill="#1e4e7e">掛け合わせ</text>
<text x="302" y="100" text-anchor="middle" font-size="10" fill="#b83280">自分の味</text>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#a0aec0"/></marker></defs>
</svg>
<div class="figcap">1冊真似ると劣化コピー、複数を混ぜて初めて自分の味になる</div>
</div>
<p>一流のシェフも最初は他人のレシピを真似て体に入れてから、自分の一皿に組み替える。発信も同じ。<strong>だから参考は1つではなく10個集める。</strong></p>

<h2><span class="s">1</span>パクりではなく「分解」</h2>
<div class="vs">
<div class="l"><div class="t">✗ パクり（コピー）</div>結果（完成品）を真似る。同じネタ・言い回し・構成。バレるし、ネタが廃れたら終わり。応用が一切効かない。</div>
<div class="r"><div class="t">○ 分解（言語化）</div>原因（なぜ伸びたか）を取り出す。別ネタにも別ジャンルにも何度でも使い回せる。盗むのは見た目でなく"仕組み"。</div>
</div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="伸びた動画を4要素に分解">
<rect x="120" y="8" width="80" height="30" rx="8" fill="#2b6cb0"/>
<text x="160" y="28" text-anchor="middle" font-size="12" fill="#fff">伸びた動画</text>
<path d="M160 38 L60 62" stroke="#b83280" stroke-width="1.5"/><path d="M160 38 L120 62" stroke="#b83280" stroke-width="1.5"/><path d="M160 38 L200 62" stroke="#b83280" stroke-width="1.5"/><path d="M160 38 L260 62" stroke="#b83280" stroke-width="1.5"/>
<rect x="20" y="64" width="80" height="50" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="60" y="84" text-anchor="middle" font-size="11" fill="#1e4e7e">フック</text>
<text x="60" y="102" text-anchor="middle" font-size="9" fill="#718096">最初の3秒</text>
<rect x="108" y="64" width="80" height="50" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="148" y="84" text-anchor="middle" font-size="11" fill="#1e4e7e">サムネの文字</text>
<text x="148" y="102" text-anchor="middle" font-size="9" fill="#718096">一番大きい字</text>
<rect x="196" y="64" width="60" height="50" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="226" y="84" text-anchor="middle" font-size="11" fill="#1e4e7e">尺感</text>
<text x="226" y="102" text-anchor="middle" font-size="9" fill="#718096">長さ・テンポ</text>
<rect x="264" y="64" width="50" height="50" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="289" y="84" text-anchor="middle" font-size="11" fill="#1e4e7e">カラー</text>
<text x="289" y="102" text-anchor="middle" font-size="9" fill="#718096">世界観</text>
</svg>
<div class="figcap">伸びてる動画を見たら、この4つをバラして自分の言葉でメモする</div>
</div>

<table>
<tr><th>要素</th><th>見るポイント</th></tr>
<tr><td>フックの作り方</td><td>最初の3秒で何を言って止めてるか（例「これ知らない人ヤバい」）</td></tr>
<tr><td>サムネ・最初の文字</td><td>一番大きい文字は何文字・どんな言葉・何色か</td></tr>
<tr><td>尺感（長さ・テンポ）</td><td>カットの切り替わりの速さ、音楽の有無</td></tr>
<tr><td>カラー設計（世界観）</td><td>白基調？暗め？毎回同じ色で統一されてるか</td></tr>
</table>

<div class="warn">「なんかいいな」で終わらせるな。<b>言葉にできない参考は、自分の投稿に移植できない。</b>「不安にさせて→直後に正解」という"仕組み"だけ抜けば、ネタは何でもいい。感覚は持ち運べないが、言葉は持ち運べる。</div>
<div class="note">つまずきポイント：全部すごく見えて盗む所が分からない時は、4要素のうち「一番マネしたい1つ」だけに絞れ。1動画から1部品で十分だ。</div>

<h2><span class="s">2</span>STEP1：タグで検索しアルゴリズムを"教育"する</h2>
<p>いきなり良いアカウントは出てこない。先に<strong>アプリへ「自分はこのジャンルの人間だ」と覚えさせる</strong>。これが属性教育だ。</p>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="耕してから種をまく">
<path d="M20 70 q15 -10 30 0 q15 -10 30 0 q15 -10 30 0" stroke="#a0aec0" stroke-width="2" fill="none"/>
<text x="65" y="95" text-anchor="middle" font-size="10" fill="#718096">何もしない＝土が痩せてる</text>
<text x="65" y="40" text-anchor="middle" font-size="11" fill="#718096">人気動画ばかり</text>
<path d="M150 55 L185 55" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<text x="167" y="45" text-anchor="middle" font-size="10" fill="#b83280">教育</text>
<rect x="210" y="55" width="100" height="22" rx="5" fill="#2b6cb0"/>
<path d="M225 50 l3 -8 l3 8" stroke="#1e4e7e" stroke-width="2" fill="none"/>
<path d="M255 50 l3 -10 l3 10" stroke="#1e4e7e" stroke-width="2" fill="none"/>
<path d="M285 50 l3 -8 l3 8" stroke="#1e4e7e" stroke-width="2" fill="none"/>
<text x="260" y="95" text-anchor="middle" font-size="10" fill="#1e4e7e">耕した土に良い候補が芽吹く</text>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
</svg>
<div class="figcap">探しに行く前に、まず「探す土壌」を自分で耕す。順番が逆だと出会えない</div>
</div>

<div class="step"><span class="sn">1</span><span class="snm">ジャンルの関連タグを検索する</span>
<div class="good"><b>○ 例</b> 垢抜け系なら #垢抜け #ルーティン、節約系なら #節約 #貯金、子育て系なら #子育て #育児。ど真ん中のタグを3〜5個まわす。広いタグ（#垢抜け）と狭いタグ（#垢抜け方法）を両方見る。</div>
<div class="splitbar"><div class="sb-main" style="width:50%">広いタグ＝大物・王道が見える</div><div class="sb-sub" style="width:50%">狭いタグ＝濃いファンの人</div></div>
<p>両方見ることで、自分が狙う立ち位置の地図ができる。</p>
</div>

<div class="step"><span class="sn">2</span><span class="snm">再生数が多い投稿に「いいね・フォロー」する</span>
<div class="splitbar"><div class="sb-sub" style="width:25%">5個＝効かない</div><div class="sb-main" style="width:75%">20〜30個＝教育が効く</div></div>
<div class="key">目安は<strong>最低20〜30投稿にいいね</strong>。これがアルゴリズムへの属性教育になる。さらに<strong>「最後まで見る」がいいねより強い合図</strong>だ。途中スワイプは「興味なし」になる。押す投稿は最後まで見る。</div>
<p>アプリは1〜2回の行動を「たまたま」と見なす。一定量たまって初めて「確かな好み」と判断する。</p>
</div>

<div class="bad"><b>✗ よくある失敗</b> 動物やグルメの動画にもつい押す。すると「垢抜けも動物もグルメも好き」と判定され、検索画面がごちゃ混ぜに。教育期間中は自分のジャンル以外は我慢。どうしても見たいならサブ垢で。</div>
<p><b>奥にある理由：</b>アルゴリズムは「あなたの興味」を1つに絞りたがる。<strong>1点に集中して反応するほど、流れてくる候補の精度が一気に上がる。</strong>教育期間は、わざと「これしか興味がない人」に見せきる。我慢ではなく投資だ。</p>

<h2><span class="s">3</span>STEP2：育った画面から探す</h2>
<div class="flowbig">
<span>STEP1で土を耕す</span><span>画面がジャンル一色に</span><span class="is-goal">「探す」→「選ぶ」へ</span>
</div>
<p>属性教育が進むと、検索画面やリール欄が自分のジャンル一色になる。こうなれば自分から探さなくていい。<strong>探すのは疲れるが、流れてくるものから選ぶのは続く。</strong>これが属性教育の本当のリターンだ。</p>
<p>流れてきた動画で「伸びてるな」と思ったら、プロフィールに飛んで3つを確認する。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="少ない投稿で多いフォロワー">
<line x1="40" y1="105" x2="300" y2="105" stroke="#cbd5e0"/>
<line x1="40" y1="20" x2="40" y2="105" stroke="#cbd5e0"/>
<text x="20" y="30" font-size="9" fill="#718096">フォロワー</text>
<text x="270" y="122" font-size="9" fill="#718096">投稿数</text>
<polyline points="50,100 90,55 120,35 150,28" fill="none" stroke="#b83280" stroke-width="3"/>
<circle cx="150" cy="28" r="5" fill="#b83280"/>
<text x="150" y="20" text-anchor="middle" font-size="9" fill="#b83280">10本で1万＝型が強い</text>
<polyline points="50,100 110,92 180,82 290,70" fill="none" stroke="#a0aec0" stroke-width="3"/>
<circle cx="290" cy="70" r="5" fill="#a0aec0"/>
<text x="280" y="62" text-anchor="end" font-size="9" fill="#718096">数で押した＝真似しづらい</text>
</svg>
<div class="figcap">少ない手数で伸びてる＝型の完成度が高い証拠</div>
</div>

<table>
<tr><th>プロフィールで見る3つ</th><th>確認方法</th></tr>
<tr><td>① 投稿が少ないのにフォロワーが多い</td><td>投稿10本でフォロワー1万、のような効率型を探す</td></tr>
<tr><td>② 開始年月日</td><td>右上「…」→「このアカウントについて」で開始日が見れる</td></tr>
<tr><td>③ 開始から数ヶ月で伸びが速い</td><td>短期間で一気に増えていれば優良候補</td></tr>
</table>

<div class="key">手数の少なさは「盗む価値があるか」の選別装置だ。<strong>少ない手数で伸びた人の中にだけ、初心者が今すぐマネできる"設計の答え"がある。</strong>手数で押し切った人から学べるのは「数を出せ」だけで、初心者には再現できない。</div>

<div class="note">つまずき：開始日が出ない時は<strong>一番古い投稿の日付</strong>を見る。投稿一覧を一番下までスクロール。それも無ければコメントの古さや投稿内の季節・行事から推測する。同じ「1万人」でも3年と3ヶ月では型の強さがまるで違う。スピードこそ「今のアルゴリズムに合うか」の答えだ。</div>

<h2><span class="s">4</span>STEP3：海外アカウントからも探す</h2>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="海外から先回り">
<circle cx="70" cy="55" r="32" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="70" y="52" text-anchor="middle" font-size="12" fill="#1e4e7e">海外</text>
<text x="70" y="68" text-anchor="middle" font-size="9" fill="#718096">先に流行る</text>
<path d="M108 55 L168 55" stroke="#b83280" stroke-width="2" marker-end="url(#a3)"/>
<text x="138" y="46" text-anchor="middle" font-size="9" fill="#b83280">時間差</text>
<circle cx="210" cy="55" r="32" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="210" y="52" text-anchor="middle" font-size="12" fill="#718096">日本</text>
<text x="210" y="68" text-anchor="middle" font-size="9" fill="#a0aec0">遅れて来る</text>
<text x="285" y="50" text-anchor="middle" font-size="10" fill="#b83280">この差を</text>
<text x="285" y="64" text-anchor="middle" font-size="10" fill="#b83280">先取り</text>
<defs><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
</svg>
<div class="figcap">海外で先に当たった型を真似ると、ライバルが少ないうちに伸ばせる</div>
</div>
<p>日本で流行りきってから真似ると「よくある型の一人」、海外から先取りすれば「まだ珍しい型の人」になれる。<strong>同じ努力でも、入るタイミングで成果が変わる。</strong></p>

<div class="step"><span class="sn">1</span><span class="snm">日本語タグを英語・韓国語に直して検索</span>
<div class="flow"><span>翻訳アプリで「垢抜け」</span><span>glow up 等をコピー</span><span>検索欄に貼る</span><span>人気順で上から見る</span></div>
</div>
<div class="step"><span class="sn">2</span><span class="snm">海外のタグから新しいタグを発見</span>
<div class="flow"><span>タグ</span><span>投稿</span><span>新しいタグ</span><span>投稿</span></div>
<p>芋づる式に良いアカウントへたどり着く。<strong>あなたの語彙の外にある良い型は、人のタグを経由しないと見つからない。</strong>タグは「目的地」でなく「次の入口」。</p>
</div>
<div class="step"><span class="sn">3</span><span class="snm">海外も同じ基準（開始日・フォロワー）でメモ</span>
<p>言葉が分からなくても<strong>映像のテンポ・色・フックは言葉を超えて盗める</strong>。「最初の1秒で完成形をチラ見せ→巻き戻して作り方」は見れば分かる。</p>
</div>

<div class="warn">海外は「言葉」をパクるな。直訳すると「変な翻訳」にしか見えない。盗むのは<b>構成・テンポ・世界観・見せ方</b>。中身（言葉・ネタ）は自分のジャンルと日本の読者に合わせて入れ替える。<br><b>文化に縛られる「言葉」は捨て、文化を超える「設計」だけ持ち帰る。</b></div>

<h2><span class="s">5</span>採用基準：この5つを全部満たすか</h2>
<p>10個以上集めたら投稿開始でOK。ただし1個ずつ、下を<strong>全部</strong>満たすか検品する。1つでも欠けたら参考として弱い。</p>
<div class="check"><ul>
<li>☐ 投稿が少ないのにフォロワーが多い（少ない手数で伸びている）</li>
<li>☐ 開始から数ヶ月で伸びが速い（旬の型を持っている）</li>
<li>☐ フォロー数が最小限（相互フォロー目的で増やしてない）</li>
<li>☐ 突き抜けて伸びたリールがある</li>
<li>☐ 自分と共通点があるオリジナル動画を出している</li>
</ul></div>

<table>
<tr><th>基準</th><th>なぜ大事か</th></tr>
<tr><td>少ない投稿で多いフォロワー</td><td>型の完成度が高い証拠。1本の設計がうまく、盗む価値がある</td></tr>
<tr><td>短期間で急成長</td><td>今のアルゴリズムに合った"旬の型"。古い型は今は効きづらい</td></tr>
<tr><td>フォロー数が最小限</td><td>水増しでなく投稿の力で集めた本物の数字。本物の裏にしか本物の型はない</td></tr>
<tr><td>突き抜けたリールがある</td><td>「たまたま」でなく「再現できる型」を持っている</td></tr>
<tr><td>自分と共通点があるオリジナル</td><td>素材・人柄・ジャンルが近い＝真似が自分の体に移植しやすい</td></tr>
</table>
<p><b>5つを貫く一本の理由：</b>全部「その数字は本物か」「その型は再現できるか」を測っている。<strong>5つ全部の足切りは、見せかけを掴まないための検品だ。</strong></p>
<div class="bad"><b>✗ やりがちなミス</b> フォロワー数だけ見て「多いからすごい」と登録。だがフォロー数も多い・古い・突き抜けリールなしだと参考にならない。<b>数字の"中身"を見ろ。</b></div>

<h2><span class="s">6</span>選ぶ視点：「構・世・掴・的」</h2>
<p>フォロワー数は入口の足切り。本当に盗むのは奥にある4つの設計だ。<strong>「全体的にすごい」を4つの引き出しに分けるから、1つずつ取り出して盗める。</strong></p>

<div class="tc"><div class="hd">構｜構成</div><div class="bd"><span class="lab">投稿の流れ・テンポ・パターン</span>冒頭→展開→オチの型。どこで一番盛り上げ、どう締めるか。毎回同じパターンならそれが勝ちパターン。<b>奥の理由：</b>人は「先が読める安心」と「次が気になる引き」の両方で見続ける。</div></div>

<div class="tc"><div class="hd">世｜世界観</div><div class="bd"><span class="lab">色・文字・見た目のトーン</span>色・文字の形・雰囲気が統一されてるか。サムネが同じ色味で並ぶと覚えてもらえる。<b>奥の理由：</b>何度も同じ見た目に触れると「知ってる＝信頼できる」と感じる。一瞬で「あの人だ」と思い出させる装置。</div></div>

<div class="tc"><div class="hd">掴｜フック</div><div class="bd"><span class="lab">冒頭3秒の掴み</span>最初の数秒で続きが気になる設計か。指を止める力。ここが弱いと中身は見られない。<b>奥の理由：</b>フックは「中身を見てもらう権利」を勝ち取る関門。だから達人は一番気合いを冒頭に置く。</div></div>

<div class="tc"><div class="hd">的｜ターゲット像</div><div class="bd"><span class="lab">誰に向けた発信か</span>コメント欄を読むと誰が見てるか分かる。「これ私のことだ」が多い人はターゲットを絞れてる。バラバラなら狙いがぼやけている。<b>奥の理由：</b>「みんなに向けた言葉」は誰にも刺さらない。「この一人」への言葉だけが大勢に刺さる。</div></div>

<div class="key">10個を見る時、毎回この4つの欄を埋めるつもりで観察する。<strong>埋まらない欄があれば、その人はそこが弱い＝あなたが差をつけられる場所</strong>だ。優れた参考は「盗む型」を、弱い参考は「勝てる穴」を教えてくれる。</div>

<h2><span class="s">7</span>記録すべき項目</h2>
<p>見つけたら必ず記録する。頭の中だけだとすぐ忘れる。<strong>記録とは「感覚を、明日使える部品に変換する作業」だ。</strong></p>
<table>
<tr><th>記録項目</th><th>中身</th></tr>
<tr><td>①基本情報</td><td>アカウント名・@ハンドル・どのアプリか</td></tr>
<tr><td>②数字</td><td>フォロワー数・投稿数・開始時期（伸びるスピード用）</td></tr>
<tr><td>③要約</td><td>誰が・何を、を1〜2文で</td></tr>
<tr><td>④参考ポイント</td><td><b>何を盗むか。ここが一番大事。具体的に書く</b></td></tr>
</table>
<div class="key">④が命だ。①②③は誰でも書ける。<strong>「フックがうまい」では弱い。「フックが否定形で、不安にさせてから正解を出す」まで書く。</strong>そこまで書けて初めて、明日の自分の投稿に貼り付けられる。</div>

<div class="good"><b>○ 良い記録の例</b><br>名前：◯◯のひとり暮らし／@xxxx／TikTok<br>数字：フォロワー1.2万・投稿14本・数ヶ月前開始（伸びるの速い）<br>要約：一人暮らしの女性向けに、節約ごはんを30秒で見せる<br>参考ポイント：<b>フックが毎回「これ知らないと損」の否定形。冒頭で完成品を一瞬見せて作り方に入る構成が真似できる</b></div>
<div class="bad"><b>✗ 弱い記録の例</b> 「@xxxx いい感じ」だけ。後で見返しても何を盗むか分からない。<b>「何を・どう盗むか」まで書いて初めて記録の意味がある。</b></div>

<h2><span class="s">8</span>よくある間違い</h2>

<div class="tc"><div class="hd">Q. フォロワー100万人を参考にすべき？</div><div class="bd">違う。参考にすべきは<b>「自分が今いる規模の少し先」</b>。1万から5万を狙うなら3〜10万規模が現実的。100万人は規模も予算もチームも違いすぎて再現できない。<b>奥の理由：</b>参考とは「自分が次に立つ場所の見本」。遠すぎる見本は今の手元で再現できない。<span class="lab">少し先を見る</span></div></div>

<div class="tc"><div class="hd">Q. 参考は何個必要？</div><div class="bd">最低<b>10個</b>。1つだと劣化コピーになる。Aのフック、Bの色、Cの締め方と部品を持ち寄れば、結果として「自分だけのオリジナル」になる。<b>奥の理由：</b>オリジナルとは「無から生む」でなく「既にあるものの、誰もやってない組み合わせ」。参考が多いほど逆にオリジナルになる。<span class="lab">掛け合わせがオリジナルを生む</span></div></div>

<div class="tc"><div class="hd">Q. 参考はジャンルが同じじゃないとダメ？</div><div class="bd">違う。<b>見せ方・フック・世界観はジャンルをまたいで集めていい</b>。節約発信でもガジェット系の編集テンポや料理系の色使いを真似てよい。揃えるのは"ネタ"だけ。<b>奥の理由：</b>ネタは読者に縛られるが、見せ方は人の脳に効くから普遍。越境した瞬間に同ジャンルで珍しくなる。<span class="lab">ネタは同ジャンル、見せ方は横断</span></div></div>

<div class="key">3つ目が一番大事。みんなが「同じジャンルしか見ない」せいで見せ方が均一化し、横並びになる。<strong>あなたが他ジャンルから"見せ方"を持ち込めば、それだけで同ジャンルの中で目立てる。</strong>差別化とは、みんなが見てない場所から部品を持ってくることだ。</div>

<h2><span class="s">9</span>実践チェック：投稿を始める前に</h2>
<div class="check"><ul>
<li>☐ ジャンルのタグで20〜30投稿にいいねした（属性教育）</li>
<li>☐ いいねした投稿は最後まで見た（途中スワイプで汚していない）</li>
<li>☐ 検索画面・リール欄が自分のジャンル一色になった</li>
<li>☐ 海外タグも翻訳して検索し、海外アカウントも見た</li>
<li>☐ 採用基準5つを全部満たすアカウントを10個以上集めた</li>
<li>☐ 各アカウントを「構・世・掴・的」で見た</li>
<li>☐ 「参考アカウント」エリアに、何をどう盗むかまで記録した</li>
</ul></div>

<div class="end">オリジナルで考えるな。あなたの感覚はまだ当たらない。<br><strong>アルゴリズムを属性教育してから、10個以上の参考を集める。表面をパクるな、奥の"仕組み"を分解して、自分の素材で組み直す。</strong><br>次章は「アカウント初期設定」。いよいよ自分のアカウントを立てる。</div>
</div>
  `,

  'p1-profile': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>玄関＝プロフィールでフォローが決まる理由</li>
<li>人がフォローボタンを押す瞬間、頭の中で起きていること</li>
<li>ID・アイコン・表示名・プロフ文の4点セットの揃え方</li>
<li>「誰が・何を・どうなれる」のプロフ文テンプレ</li>
<li>初日に終わらせる3設定（プロアカ・連絡先オフ・虫眼鏡）</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="作る順番">
<rect x="0" y="20" width="150" height="110" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="170" y="20" width="150" height="110" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="75" y="44" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ よくある順</text>
<text x="245" y="44" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 正しい順</text>
<text x="75" y="70" text-anchor="middle" font-size="11" fill="#a0aec0">色を悩む</text>
<text x="75" y="90" text-anchor="middle" font-size="11" fill="#a0aec0">フォント探す</text>
<text x="75" y="110" text-anchor="middle" font-size="11" fill="#718096">＝中身が空っぽ</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#2b6cb0">中身を決める</text>
<text x="245" y="90" text-anchor="middle" font-size="11" fill="#2b6cb0">言葉に落とす</text>
<text x="245" y="110" text-anchor="middle" font-size="11" fill="#1e4e7e">見た目は最後</text>
</svg>
<div class="figcap">見た目から作るな。中身を先に固めろ</div>
</div>

<div class="key">プロフィールはアカウントの<strong>「玄関」</strong>。投稿がバズって人が来ても、来た人は玄関を一瞬見て「フォローするか・去るか」を決める。<strong>ここで勝負が決まる。</strong></div>

<h3>人は「自分に関係あるか」を一瞬で判断している</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="玄関で起きる問い">
<rect x="40" y="20" width="240" height="50" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="160" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">この人を追いかけると</text>
<text x="160" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">私に何かいいことがある？</text>
<path d="M110 70 L90 92" stroke="#a0aec0" stroke-width="2"/>
<path d="M210 70 L230 92" stroke="#2b6cb0" stroke-width="2"/>
<text x="80" y="110" text-anchor="middle" font-size="11" fill="#a0aec0">「？」→ 素通り</text>
<text x="240" y="110" text-anchor="middle" font-size="11" fill="#1e4e7e">「ある」→ フォロー</text>
</svg>
<div class="figcap">綺麗な玄関より「自分のための家だ」と一瞬で伝わるか</div>
</div>
<p>フォローされる理由は「玄関が綺麗だったから」じゃない。<strong>「これは自分に関係がある」と一瞬で分かったから</strong>だ。デザインは、そう思わせるための手段でしかない。</p>

<div class="flowbig">
<span>中身を決める</span><span>4点セットの言葉に落とす</span><span>一瞬で自分ごとに</span><span class="is-goal">フォロー</span>
</div>

<h2><span class="s">1</span>投稿とプロフィールは「役割が違う」</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="出会いと関所">
<circle cx="40" cy="60" r="14" fill="#9cb8d6"/>
<text x="40" y="100" text-anchor="middle" font-size="11" fill="#718096">通りすがり</text>
<rect x="120" y="36" width="44" height="58" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="142" y="68" text-anchor="middle" font-size="11" fill="#1e4e7e">投稿</text>
<text x="142" y="110" text-anchor="middle" font-size="10" fill="#718096">出会う</text>
<rect x="200" y="36" width="44" height="58" rx="8" fill="#2b6cb0"/>
<text x="222" y="68" text-anchor="middle" font-size="11" fill="#fff">玄関</text>
<text x="222" y="110" text-anchor="middle" font-size="10" fill="#1e4e7e">逃さない関所</text>
<circle cx="300" cy="60" r="14" fill="#b83280"/>
<text x="300" y="100" text-anchor="middle" font-size="11" fill="#b83280">フォロー</text>
<path d="M58 60 L116 60" stroke="#a0aec0" stroke-width="2" marker-end="url(#a1)"/>
<path d="M248 60 L282 60" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#a0aec0"/></marker>
<marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
</svg>
<div class="figcap">投稿は出会い、玄関は通りすがりをフォローに変える関所</div>
</div>
<div class="vs">
<div class="l"><div class="t">✗ 投稿だけ磨く</div>バズって人は来る。でも玄関が空っぽだと「面白かった」で去る。出会いはあっても関係が始まらない。</div>
<div class="r"><div class="t">○ 玄関を整える</div>来た人が「自分のための家だ」と分かる。出会いがフォローに変わる。</div>
</div>
<div class="key">先に紙に一文を書け。<strong>「私は◯◯に悩む人へ、◯◯のやり方を教えて、その人を◯◯にする」</strong>。これが決まるまでアイコンもIDもいじるな。中身が決まれば4点セットは後から自然に出る。</div>

<h2><span class="s">2</span>プロフィールは「4点セット」で考える</h2>
<table>
<tr><th>要素</th><th>役割（たとえ）</th><th>一言で</th></tr>
<tr><td>ID（ユーザーネーム）</td><td>家の住所・ネット上の番地</td><td>検索で見つかる入口</td></tr>
<tr><td>アイコン</td><td>玄関に立つ人の顔</td><td>安心感・憧れを渡す</td></tr>
<tr><td>表示名</td><td>玄関の表札</td><td>一発でジャンルが伝わる</td></tr>
<tr><td>プロフ文</td><td>表札の下の案内文</td><td>誰が・何を・どうなれる</td></tr>
</table>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="4つで1つを叫ぶ">
<text x="160" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ バラバラ</text>
<rect x="20" y="32" width="60" height="26" rx="6" fill="#f6f6f7" stroke="#cbd5e0"/><text x="50" y="49" text-anchor="middle" font-size="10" fill="#718096">節約</text>
<rect x="90" y="32" width="60" height="26" rx="6" fill="#f6f6f7" stroke="#cbd5e0"/><text x="120" y="49" text-anchor="middle" font-size="10" fill="#718096">ペット</text>
<rect x="160" y="32" width="60" height="26" rx="6" fill="#f6f6f7" stroke="#cbd5e0"/><text x="190" y="49" text-anchor="middle" font-size="10" fill="#718096">ダイエット</text>
<text x="270" y="50" text-anchor="middle" font-size="20" fill="#a0aec0">→？</text>
<text x="160" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 全部「節約」を指す</text>
<rect x="20" y="92" width="56" height="22" rx="6" fill="#eaf1f8" stroke="#2b6cb0"/><text x="48" y="107" text-anchor="middle" font-size="9" fill="#1e4e7e">ID節約</text>
<rect x="84" y="92" width="56" height="22" rx="6" fill="#eaf1f8" stroke="#2b6cb0"/><text x="112" y="107" text-anchor="middle" font-size="9" fill="#1e4e7e">顔</text>
<rect x="148" y="92" width="56" height="22" rx="6" fill="#eaf1f8" stroke="#2b6cb0"/><text x="176" y="107" text-anchor="middle" font-size="9" fill="#1e4e7e">節約◯◯</text>
<rect x="212" y="92" width="56" height="22" rx="6" fill="#eaf1f8" stroke="#2b6cb0"/><text x="240" y="107" text-anchor="middle" font-size="9" fill="#1e4e7e">節約術</text>
<text x="296" y="107" text-anchor="middle" font-size="14" fill="#b83280">✓</text>
</svg>
<div class="figcap">4つで1つのジャンルを叫ぶ。1つでもズレると脳が「保留」を出す</div>
</div>
<p>矛盾を見ると脳は判断を止める。「節約のIDなのに、なんでアイコンが犬?」と引っかかった時点で指が離れる。<strong>4つが全部同じジャンルを指すと迷いが消えて「あ、節約の人だ」と一発で像が結ぶ。</strong>揃えるのは、迷わせないためだ。</p>

<h2><span class="s">3</span>ID（ユーザーネーム）＝住所</h2>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IDの良し悪し">
<rect x="0" y="20" width="150" height="70" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">@user_3829_xyz</text>
<text x="75" y="70" text-anchor="middle" font-size="11" fill="#a0aec0">住所が暗号。口で言えない</text>
<text x="75" y="85" text-anchor="middle" font-size="11" fill="#a0aec0">＝誰も辿り着けない</text>
<rect x="170" y="20" width="150" height="70" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">@setsuyaku_miku</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#2b6cb0">「節約のみく」と分かる</text>
<text x="245" y="85" text-anchor="middle" font-size="11" fill="#2b6cb0">＝口コミに乗る形</text>
</svg>
<div class="figcap">作り方：ジャンルの言葉 ＋ 名前（年代は末尾に_30程度まで）</div>
</div>
<div class="grp"><div class="gh">IDの絶対ルール3つ</div><div class="gb">
<div class="rule"><span class="rn">1 ジャンルの言葉を入れる</span><span class="gb2">setsuyaku・diet・skincare。住所で何の家か分かる</span></div>
<div class="rule"><span class="rn">2 記号と数字を散らさない</span><span class="gb2">_3829_xyz は住所が暗号になっている</span></div>
<div class="rule"><span class="rn">3 読めて・打てて・覚えられる</span><span class="gb2">友達に「探して」と口で言える形</span></div>
</div></div>
<p>SNSが伸びる一番強いルートは「人が人に勧める」流れ。これは<strong>"口で伝えられる形"でしか起きない</strong>。飲み会で「節約のアカウント教えて」と聞かれた時、暗号IDは相手がその場でスマホに打てない。IDを暗号にした時点で口コミルートを自分で塞いでいる。</p>
<div class="warn">つまずきポイント：表札（表示名）は気軽に変えていいが、<b>住所（ID）は引っ越しと同じ</b>。変えると紹介してくれた人のリンクが全部切れる。最初に腰を据えて決めろ。</div>

<h2><span class="s">4</span>アイコン＝玄関に立つ顔</h2>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="拾い画像と本人写真">
<rect x="0" y="14" width="150" height="84" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 拾い画像</text>
<text x="75" y="62" text-anchor="middle" font-size="11" fill="#a0aec0">出どころ不明</text>
<text x="75" y="80" text-anchor="middle" font-size="11" fill="#a0aec0">＝本物っぽくない違和感</text>
<rect x="170" y="14" width="150" height="84" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 本人の写真</text>
<text x="245" y="62" text-anchor="middle" font-size="11" fill="#2b6cb0">実在する人だ</text>
<text x="245" y="80" text-anchor="middle" font-size="11" fill="#2b6cb0">＝安心が渡る</text>
</svg>
<div class="figcap">綺麗さより、まず本物であること。これが顔の最低条件</div>
</div>
<div class="good"><b>○ やるべき</b> 「何者か分かり、安心感や憧れを抱かせる」オリジナルの綺麗な写真。スマホでいい。<strong>窓際の自然光・白い壁を背に・胸から上</strong>を写すだけで一段マシになる。</div>
<p>顔出しが難しいなら、イラスト・後ろ姿でもOK。ただし雰囲気がはっきり伝わる構図にし、背景はシンプルに。雑さは安っぽさに直結する。</p>
<div class="key"><strong>3〜6ヶ月は変えるな。</strong>人は何度も見たものに親しみを覚える。アイコンを固定すると相手はタイムラインであなたの顔に何度も出会い「いつもの人」になる。変えると毎回"はじめまして"に戻る。</div>
<p>毎日通うコンビニの店員が日替わりで全員入れ替わったら、誰の顔も覚えない。同じ人がいるから「いつもの人」になる。<strong>覚えてもらうことが目的だから、固定しろ。</strong></p>

<h2><span class="s">5</span>表示名＝表札</h2>
<div class="vs">
<div class="l"><div class="t">✗ 名前だけ</div>たろう<br>何を発信してるか1ミリも分からない。フォローする理由が湧かない。</div>
<div class="r"><div class="t">○ 名前＋発信内容</div>節約たろう｜月5万浮かせる暮らし<br>「節約の人」「月5万浮かせる」と分かる。</div>
</div>
<table>
<tr><th>パターン</th><th>具体例</th></tr>
<tr><td>名前｜数字つきの約束</td><td>節約みく｜月3万貯める方法教えます</td></tr>
<tr><td>名前＠実績・変化</td><td>あやの＠1ヶ月で家計を見直し中</td></tr>
<tr><td>名前｜ジャンル＋熱量</td><td>ハナ｜30代肌の保湿ガチ勢</td></tr>
</table>
<div class="key">表示名はタイムラインで投稿と一緒に何度も出る、<strong>"一番短い自己紹介"</strong>。ぼんやりしていると何回見られても「誰だっけ」のまま。脳はぼんやりした言葉は流すが、具体的な数字には一瞬ピントが合う。「節約発信してます」は流れ、「月3万貯める」は画が浮かんで止まる。</div>
<div class="warn">数字は本当に出せる範囲だけ書け。盛った数字は後で自分の首を絞める。<b>約束と中身がズレた瞬間、人は離れる。</b></div>

<h2><span class="s">6</span>プロフ文を確定する（★最重要）</h2>
<p>ここが玄関の心臓部。来た人が無意識に確かめる3つの問いに、先回りで答える"回答用紙"として書く。</p>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3つの問い">
<rect x="6" y="30" width="98" height="60" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="55" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">誰が</text>
<text x="55" y="74" text-anchor="middle" font-size="10" fill="#2b6cb0">信じていい相手か</text>
<rect x="111" y="30" width="98" height="60" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">何を</text>
<text x="160" y="74" text-anchor="middle" font-size="10" fill="#2b6cb0">私の悩みと関係ある？</text>
<rect x="216" y="30" width="98" height="60" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="265" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">どうなれる</text>
<text x="265" y="74" text-anchor="middle" font-size="10" fill="#8a4a6e">私はどう変わる？</text>
<text x="160" y="18" text-anchor="middle" font-size="11" fill="#718096">3つ全部「イエス」で初めてフォロー。1つ空白で判断が止まる</text>
</svg>
<div class="figcap">プロフ文は感想文じゃない。3つの問いへの回答用紙</div>
</div>
<div class="grp"><div class="gh">プロフ文の作り方テンプレ</div><div class="gb">
<div class="rule"><span class="rn">誰が</span><span class="gb2">属性。30代会社員ママ／元借金100万 など</span></div>
<div class="rule"><span class="rn">何を発信</span><span class="gb2">ジャンルを言い切る。完済した節約術 など</span></div>
<div class="rule"><span class="rn">どうなれる</span><span class="gb2">フォローしたら読者がどう変わるか</span></div>
<div class="rule"><span class="rn">＋失敗／実績</span><span class="gb2">過去の失敗・リアルな実績で共感を作る</span></div>
<div class="rule"><span class="rn">＋導線</span><span class="gb2">DMやリンクへ。次の行動先を必ず置く</span></div>
</div></div>

<h3>なぜ「過去の失敗」を書くと強いのか</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="同じ側から上がった証拠">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 最初から成功</text>
<circle cx="79" cy="40" r="9" fill="#cbd5e0"/>
<circle cx="79" cy="95" r="9" fill="#9cb8d6"/>
<text x="79" y="68" text-anchor="middle" font-size="10" fill="#a0aec0">壁／別世界</text>
<line x1="55" y1="68" x2="103" y2="68" stroke="#cbd5e0" stroke-width="2" stroke-dasharray="3 3"/>
<text x="79" y="113" text-anchor="middle" font-size="10" fill="#718096">私には関係ない</text>
<line x1="160" y1="20" x2="160" y2="115" stroke="#e2e8f0"/>
<text x="241" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 失敗→変化</text>
<circle cx="220" cy="95" r="8" fill="#9cb8d6"/>
<circle cx="265" cy="40" r="9" fill="#b83280"/>
<path d="M220 90 Q250 60 263 48" stroke="#2b6cb0" stroke-width="3" fill="none" marker-end="url(#a3)"/>
<defs><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="241" y="113" text-anchor="middle" font-size="10" fill="#1e4e7e">私にもできるかも</text>
</svg>
<div class="figcap">失敗は「同じ側からスタートした証拠」＝読者の未来の予告に見える</div>
</div>
<p>最初から成功している人は"別世界の人"になり「すごいけど私には関係ない」で終わる。<strong>過去の失敗は「この人は元々、私と同じ側にいた」という証拠</strong>になる。実績は"上に立つ道具"でなく、失敗とセットで"同じ側から上がった証拠"として使え。</p>
<div class="final">元借金100万円｜3年で完済した節約術｜30代会社員ママ｜DMでお気軽に🌱</div>
<p><b>誰が＝</b>30代会社員ママ／<b>過去＝</b>元借金100万円／<b>何を＝</b>節約術／<b>実績＝</b>3年で完済／<b>導線＝</b>DMでお気軽に。絵文字🌱で柔らかさを足してる。</p>
<div class="key">絵文字は"柔らかさ担当"。1〜2個そっと置くと「話しかけていい人」に見える。入れすぎるとチャラく見えて信頼が下がる。<strong>盛りすぎるな。</strong>導線（DM・リンク）は、沸いた熱を逃さないための受け皿。次の一歩を必ず玄関に置け。</div>
<h3>つまずきポイント：抽象語で終わる</h3>
<div class="vs">
<div class="l"><div class="t">✗ 抽象的</div>「日々のことを発信します」「丁寧な暮らしを大切に」<br>誰向け・何が得られる・誰が言ってる、全部ぼんやり。記憶に残らない。</div>
<div class="r"><div class="t">○ 具体的</div>「30代会社員｜借金150万→3年で完済｜毎日続く節約術｜DM歓迎」<br>属性・過去・実績・ジャンル・導線が全部ある。</div>
</div>
<p>抽象語は人の頭の中で画が作れない。<strong>人は画が浮かんで初めて感情が動き、自分ごとになる。</strong>抽象語は全部、数字・固有の体験・具体的なジャンル名に書き換えろ。「丁寧な暮らし」→「光熱費を半年で見直した暮らしの工夫」。これだけで刺さりが激変する。</p>

<h2><span class="s">7</span>NG vs OK（4点セットで答え合わせ）</h2>
<div class="vs">
<div class="l"><div class="t">✗ 全部ダメ</div>
<b>ID：</b>@user_3829_xyz<br>
<b>名前：</b>たろう<br>
<b>プロフ：</b>「日々のことを発信します」<br><br>
住所は暗号、表札は名前だけ、案内文は中身ゼロ。<b>誰もフォローしない。</b></div>
<div class="r"><div class="t">○ 全部揃った</div>
<b>ID：</b>@setsuyaku_taro<br>
<b>名前：</b>節約たろう｜月5万浮かせる暮らし<br>
<b>プロフ：</b>「30代会社員｜借金150万→3年で完済｜毎日続く節約術｜DM歓迎」<br><br>
誰が・何を・どうなれる・実績が一目で分かる。<b>フォロー理由が明確。</b></div>
</div>
<div class="key">違いは才能でもセンスでもない。<strong>「具体を入れたか」だけ</strong>だ。空白の玄関は見た人に"考える仕事"を押し付ける。人は、考えるのが面倒な相手はフォローしない。<strong>フォローとは、頭の問いに先回りで答え切った玄関へのごほうび。</strong></div>

<h2><span class="s">8</span>開設後の必須設定3つ（初日に）</h2>
<p>4点セットが固まったら、開設後すぐ3設定。後回しにすると、データが取れない・知人にバレる・投稿が届かないの三重苦。ここは操作と"順番"の話だ。</p>

<div class="step"><span class="sn">1</span><span class="snm">プロアカウントへの切り替え</span>
<p>手順：<b>プロフィール編集 → 「プロアカウントに切り替え」→ ジャンルに合うカテゴリーを選択</b>。これでインサイト（分析データ）が見られる。</p>
<p><b>なぜ必須か：</b>インサイトがないと「どの投稿が伸びたか・誰が見てるか」が分からず、改善のサイクルが回せない。料理にたとえれば味見せずに作り続けるのと同じ。<strong>なぜ初日かというと、最初の投稿のデータから取っておきたいから</strong>。後から切り替えると、それまでの投稿が"味見できないまま"流れる。無料だから初日に必ず。</p>
</div>

<div class="step"><span class="sn">2</span><span class="snm">連絡先の同期オフ</span>
<p>手順：<b>設定 → 「アカウントセンター」→ 個人の情報 → 連絡先のアップロードをオフ</b>。InstagramとThreadsはアカウントセンターでつながっているため、まとめてオフにできる。</p>
<p><b>なぜ必須か：</b>これをやらないと電話帳の<strong>知人に自動でフォローされたり、おすすめに出たりする</strong>。「会社の同僚に副業アカが見つかった」はここで防げる。匿名運用なら最優先。</p>
<div class="warn">順番の理由：一度おすすめ欄に表示されると、後でオフにしても"見られた事実"は消せない。<b>アカウントを作ったら、投稿する前に先に済ませる。</b>玄関の言葉より前に手をつけてもいいくらい優先度が高い。</div>
</div>

<div class="step"><span class="sn">3</span><span class="snm">虫眼鏡（発見タブ）の教育</span>
<p>一言でいうと<strong>「おすすめ機能に、このアカウントが何に関心があるかを覚えさせる」</strong>こと。おすすめ機能は"おせっかいな案内係"。あなたが何を見てるか観察し、似た投稿を集めてくる。先に「私は節約に興味がある人です」と教えると、案内係が節約好きの仲間（＝ターゲット）に投稿を届けやすくなる。</p>
<div class="flow">
<span>検索欄を開く</span><span>ジャンル外は「興味なし」</span><span>自分のジャンルを検索</span><span>同ジャンルにいいね</span><span>数日かけて繰り返す</span>
</div>
<p>ゴールは<strong>「検索欄を開いたら自分のジャンル一色」</strong>。ここまで来ると、アプリはあなたを「節約ジャンルの住人」と認識し、同じ興味の人＝一番フォローしてくれる人に投稿が届きやすくなる。毎朝コーヒー片手に数件いいね、くらいでいい。</p>
<div class="warn">早く染めたくて短時間に連打するな。アプリは「人間らしい自然な動き」を前提に学習している。連打は不自然と見なされ、学習が進まないどころか不審なアカウント扱いされる恐れがある。<b>1日に少しずつ、数日かけて育てる。</b></div>
</div>

<h2><span class="s">9</span>検品：玄関は「自分ごと」を伝えているか</h2>
<div class="check"><ul>
<li>ID：ジャンルの言葉が入り、口で説明できる形か</li>
<li>アイコン：オリジナルで、何者か・雰囲気が伝わるか</li>
<li>表示名：名前＋発信内容で、一発でジャンルが伝わるか</li>
<li>プロフ文：誰が・何を・どうなれるの3点が入っているか</li>
<li>プロフ文：失敗／実績で「私にもできるかも」を作り、DM・リンクの導線を置いたか</li>
<li>4点セットが全部"同じジャンル"を叫んでいるか</li>
<li>抽象語で終わっていないか（画が浮かぶ具体か）</li>
<li>プロアカに切り替え、カテゴリーを選んだか</li>
<li>連絡先の同期を"投稿前に"オフにしたか</li>
<li>虫眼鏡を自分のジャンル一色に染め始めたか</li>
</ul></div>
<div class="end">お客は綺麗な玄関じゃなく「自分に関係がある」という確信を求めてる。<br>だから——プロフィールを飾るな。<strong>「これはあなたのための家だ」と言い切れ。</strong><br><strong>これで Phase「設計する」は完了。次は伸ばすフェーズだ。</strong></div>
</div>
  `,

  'p1-harm': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>投稿スキルより先に「どこで戦うか」で勝負の大半が決まる</li>
<li>人がお金を払ってでも解決したい悩み「HARMの法則」と、その奥の理由</li>
<li>H・A・R・M 4分類で何が売れるか</li>
<li>同じジャンルでも「勝ち筋」と「レッドオーシャン」を分ける2軸</li>
<li>4分類から1つ選び、自分を位置づける手順</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="魚のいない池といる池">
<rect x="0" y="20" width="150" height="115" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="170" y="20" width="150" height="115" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="75" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 魚がいない池</text>
<text x="245" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 魚がいる池</text>
<path d="M18 95 q57 -16 114 0 v22 q-57 14 -114 0 z" fill="#dde3ea"/>
<path d="M40 56 l10 -6 v12 l-10 -6 z" fill="#a0aec0"/><rect x="38" y="50" width="3" height="34" fill="#a0aec0"/>
<text x="75" y="128" text-anchor="middle" font-size="11" fill="#718096">上手くても釣れない</text>
<path d="M188 95 q57 -16 114 0 v22 q-57 14 -114 0 z" fill="#9cb8d6"/>
<path d="M222 70 l16 -7 -3 7 3 7 z" fill="#2b6cb0"/><circle cx="226" cy="76" r="1.5" fill="#fff"/>
<path d="M262 84 l14 -6 -3 6 3 6 z" fill="#2b6cb0"/><circle cx="266" cy="89" r="1.5" fill="#fff"/>
<path d="M210 60 l14 -6 -3 6 3 6 z" fill="#b83280"/><circle cx="214" cy="65" r="1.5" fill="#fff"/>
<text x="245" y="128" text-anchor="middle" font-size="11" fill="#1e4e7e">初心者でも釣れる</text>
</svg>
<div class="figcap">どんなに上手い釣り人でも、魚がいない池では1匹も釣れない</div>
</div>

<div class="key">失敗の原因はたった1つ。<strong>「何を投稿しよう」から考え始めること。</strong>その手前で結果はもう半分決まっている。ジャンル選び＝「どの池で釣るか」。腕（投稿スキル）より先に、池選びで勝負の大半が決まる。</div>

<h3>魚がいる池＝「人が痛みを感じている場所」</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="好きと痛みの対比">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">好き・得意</text>
<text x="75" y="74" text-anchor="middle" font-size="11" fill="#a0aec0">読者は困ってない</text>
<text x="75" y="90" text-anchor="middle" font-size="11" fill="#a0aec0">＝サイフは閉じたまま</text>
<text x="160" y="65" text-anchor="middle" font-size="20" fill="#cbd5e0">≠</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="245" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">痛み</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#8a4a6e">今すぐ解決したい</text>
<text x="245" y="86" text-anchor="middle" font-size="11" fill="#8a4a6e">＝サイフが開く</text>
</svg>
<div class="figcap">人は「好きなもの」じゃなく「痛いと感じるもの」にお金を払う</div>
</div>
<p>同じ「料理が得意」でも、「ふだんの献立紹介」の池は無数の人がいて読者は困っていない。「自炊ゼロだった人が食費を抑えて続けるコツ」なら刺さる相手がはっきりする。<strong>腕は同じ。違うのは相手が痛みを感じているかどうかだ。</strong></p>

<div class="flowbig">
<span>痛みがある</span><span>今すぐ解決したい</span><span>サイフが開く</span><span class="is-goal">売れる</span>
</div>

<div class="warn">ジャンル選びの目的は「自分が語りたいことを決めること」じゃない。<b>「人が痛がっている場所に立つこと」だ。</b>好き・得意は、その場所に立った後で武器として使う。順番を逆にすると稼げない。</div>

<h2><span class="s">1</span>HARMの法則とは何か</h2>
<p>人間が「お金を払ってでも今すぐ解決したい」痛みには共通パターンがある。本能的に・繰り返し・緊急性高く抱える4つの悩みの頭文字が <strong>HARM（ハーム）の法則</strong>だ。</p>

<div class="vfig">
<svg viewBox="0 0 320 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HARM4分類">
<rect x="6" y="6" width="150" height="76" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="22" y="38" font-size="22" font-weight="800" fill="#1e4e7e">H</text>
<text x="46" y="32" font-size="12" font-weight="700" fill="#1e4e7e">Health</text>
<text x="46" y="50" font-size="10.5" fill="#4a6customs">健康・美容</text>
<text x="46" y="50" font-size="10.5" fill="#5a7494">健康・美容</text>
<text x="46" y="66" font-size="10.5" fill="#5a7494">ダイエット</text>
<rect x="164" y="6" width="150" height="76" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="180" y="38" font-size="22" font-weight="800" fill="#1e4e7e">A</text>
<text x="204" y="32" font-size="12" font-weight="700" fill="#1e4e7e">Ambition</text>
<text x="204" y="50" font-size="10.5" fill="#5a7494">キャリア・副業</text>
<text x="204" y="66" font-size="10.5" fill="#5a7494">スキル</text>
<rect x="6" y="90" width="150" height="76" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="22" y="122" font-size="22" font-weight="800" fill="#b83280">R</text>
<text x="46" y="116" font-size="12" font-weight="700" fill="#b83280">Relation</text>
<text x="46" y="134" font-size="10.5" fill="#8a4a6e">恋愛・結婚</text>
<text x="46" y="150" font-size="10.5" fill="#8a4a6e">人間関係</text>
<rect x="164" y="90" width="150" height="76" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="180" y="122" font-size="22" font-weight="800" fill="#b83280">M</text>
<text x="204" y="116" font-size="12" font-weight="700" fill="#b83280">Money</text>
<text x="204" y="134" font-size="10.5" fill="#8a4a6e">お金・投資</text>
<text x="204" y="150" font-size="10.5" fill="#8a4a6e">節約・稼ぎ方</text>
</svg>
<div class="figcap">どれも放置すると人生そのものが苦しくなる悩み</div>
</div>

<p><b>なぜこの4つなのか。</b>体が不調なら毎日つらい。仕事がうまくいかなければ将来が不安。人間関係がこじれれば心がすり減る。お金がなければ何もできない。<strong>生存と幸福に直結する痛みほど「後回しにできない」。サイフが開くのは理性じゃなく本能だ。</strong></p>

<div class="vs">
<div class="l"><div class="t">✗ お金が動きにくい</div>「いつか歯を白くしたい」→ 別に困ってない。本能のスイッチが入らない。</div>
<div class="r"><div class="t">○ お金が動く（HARM）</div>「虫歯が痛い」→ 放置すると毎日苦しい。だから今すぐ動く。</div>
</div>
<div class="key">同じ「歯」のテーマでも、痛みの有無でまるで違う。<strong>テーマで選ぶな、痛みで選べ。</strong></div>

<h2><span class="s">2</span>4分類の中身と、売れるもの</h2>
<p>発信が伸びても売るものがなければ稼げない。<strong>「何が売れるか」までセットで理解する。</strong></p>

<div class="tc"><div class="hd">H｜Health（健康・美容・ダイエット）</div><div class="bd"><span class="lab">客が卒業しない：</span>痩せたい、肌を綺麗に、若く見られたい、疲れを取りたい。鏡を見るたび自分を採点してしまう。しかも20代は肌荒れ、30代は疲れや髪、40代以降は老けて見える悩み——<strong>中身が入れ替わりながら一生続くから客が卒業しない。</strong>
<div class="good"><b>売れる</b> 化粧品・サプリ・ジム/エステ紹介・健康グッズ。自分で作るなら「肌質別・化粧水の選び方」を1枚にまとめるだけでも商品になる。</div></div></div>

<div class="tc"><div class="hd">A｜Ambition（キャリア・副業・スキル）</div><div class="bd"><span class="lab">焦りが燃料：</span>もっと稼ぎたい、出世したい、手に職を、転職したい。人は「現状」と「理想の自分」のギャップに苦しむ。上に行けばまた上が見えて、ゴールにたどり着かない。<strong>特に20代〜30代は将来への焦りが強く、それを埋めるため自己投資にお金を出す。</strong>
<div class="good"><b>売れる</b> スキル講座・ツール・転職サービス紹介・学習アプリ。「未経験から事務職に転職するまでにやったこと」を手順書にすれば欲しがる人がいる。</div></div></div>

<div class="tc"><div class="hd">R｜Relation（恋愛・結婚・人間関係）</div><div class="bd"><span class="lab">感情が動く市場：</span>振り向いてほしい、結婚したい、職場の人間関係を変えたい。感情が動くと人は損得勘定を手放す。さらに人間関係の悩みは死活問題なのに誰にも相談しづらい。<strong>一人で抱えて煮詰まるほど、解決してくれる相手に強く惹かれる。</strong>
<div class="good"><b>売れる</b> マッチング紹介・相談/カウンセリング・コミュニケーション教材。「既読スルーされた時の返し方」のような具体的な場面の投稿は保存されやすい。</div></div></div>

<div class="tc"><div class="hd">M｜Money（お金・投資・節約・稼ぎ方）</div><div class="bd"><span class="lab">需要の母数が最大：</span>節約、投資、副業、借金返済。全員が持っていて放置できない。さらにお金は他の3つ（健康・キャリア・人間関係）を解決する手段でもある。<strong>全ジャンルの土台にあるから需要の母数が最も大きく、紹介できる商品も大量にある。</strong>
<div class="good"><b>売れる</b> 証券口座/カード紹介・投資/副業教材・節約サービス。「固定費を見直して毎月の出費を減らした手順」をまとめるだけでも届く。</div></div></div>

<h2><span class="s">3</span>もう1つの枠：トレンド枠</h2>
<p>HARMとは別に、一時的に強い需要が生まれる<strong>トレンド枠</strong>がある。新しい技術、急に話題になった文化など。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="トレンドの波とHARMの土台">
<line x1="10" y1="100" x2="310" y2="100" stroke="#cbd5e0" stroke-width="2"/>
<path d="M10 100 q60 -75 110 0 q60 50 90 0" fill="none" stroke="#b83280" stroke-width="3"/>
<circle cx="62" cy="55" r="5" fill="#b83280"/>
<text x="62" y="44" text-anchor="middle" font-size="10" fill="#b83280">先に入ると急騰</text>
<circle cx="210" cy="100" r="5" fill="#a0aec0"/>
<text x="252" y="92" text-anchor="middle" font-size="10" fill="#a0aec0">旬が過ぎると消える</text>
<rect x="10" y="106" width="300" height="18" rx="4" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="119" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">土台＝HARM（消えない本能の悩み）</text>
</svg>
<div class="figcap">トレンドで人を集め、HARMでつなぎとめる</div>
</div>

<p><b>なぜ伸びるか：</b>まだ誰も発信していない時期は、供給が需要に追いつかない。欲しがる人が大勢いるのに答える人がほとんどいない。<strong>この需給のズレが先に入った人を一気に押し上げる。</strong></p>
<div class="warn">ただし<strong>旬が過ぎると勢いが落ちる。</strong>競合だらけになり、話題も冷めて需要そのものが消える。<b>トレンドの需要は「借り物」で、自分の資産にならない。</b></div>
<div class="key">だからトレンド枠は<strong>単独で勝負しない。</strong>「新しい技術 × お金（それで稼ぐ方法）」のように、土台に消えない悩み（HARM）を置けば旬が過ぎても発信が生き残る。</div>

<h2><span class="s">4</span>稼げる市場の見極め方（3条件）</h2>
<p>HARMに乗れば全部稼げるわけじゃない。<strong>同じジャンルの中でも稼げる場所と稼げない場所がある。</strong>3つでふるいにかける。</p>

<div class="flow">
<span>① 緊急性が高いか</span><span>② コンプレックスを掛けたか</span><span>③ マネタイズ導線はあるか</span>
</div>

<div class="tc"><div class="hd">条件① 緊急性が高い悩みを選ぶ</div><div class="bd">
<div class="vs"><div class="l"><div class="t">✗ いつか歯を白くしたい</div>「余裕ができたら」と先延ばし。財布は開かない。</div><div class="r"><div class="t">○ 歯が痛い</div>今すぐ歯医者に駆け込み、いくらかかっても払う。</div></div>
<span class="lab">奥の理由：</span>人は痛みが「今ここ」にある時しか本気で動かない。未来の痛みは頭でわかっていても先延ばしにする生き物だ。</div></div>
<div class="warn">つまずき：「緊急性が高い＝深刻すぎて重い」と避けてしまう。逆だ。重いから動く。軽い悩みは共感されても財布が開かない。<b>痛みのど真ん中に立つ。</b></div>

<div class="tc"><div class="hd">条件② コンプレックスと掛け合わせる</div><div class="bd">
<div class="vs"><div class="l"><div class="t">✗ もともと細い人のダイエット</div>正論。「わかってくれる感」がない。</div><div class="r"><div class="t">○ 太っていた人のダイエット</div>「この人なら私の気持ちがわかる」</div></div>
<span class="lab">奥の理由：</span>人は「自分をわかってくれる人」しか信じない。正論を言う人はあふれているが、同じ痛みをくぐった人は少ない。<strong>過去のコンプレックスは引け目じゃなく最強の武器。</strong>次章で棚卸しする。</div></div>

<div class="tc"><div class="hd">条件③ マネタイズ導線が存在するか</div><div class="bd">参入前に必ずチェック：<b>紹介できる案件があるか／自分の商品にできるか／単価はいくらか。</b>
<div class="bad"><b>✗</b> 「好きだから」で決め、後から「これ何も売れない」と気づく。フォロワーは増えても収益ゼロ。</div>
<div class="good"><b>○</b> 始める前に「こういう紹介案件があり、将来こういう教材も作れる」と道筋を描いてから参入。</div>
<span class="lab">奥の理由：</span>注目（フォロワー）はお金に変える出口があって初めて意味を持つ。「人気はあるのに稼げない発信者」はここを確認せず始めている。</div></div>

<div class="key">緊急性が高い悩みには、お金が動く。<strong>「緊急性 × コンプレックス × マネタイズ導線」の3つがそろう場所が、稼げる市場だ。</strong></div>

<h2><span class="s">5</span>狙うべきポジション（2軸）</h2>
<p>同じHARMでも、どこに立つかで勝ち負けが分かれる。<strong>緊急性が「客が動くか」を、コンプレックスが「あなたが選ばれるか」を決める。両方そろう場所だけが勝てる。</strong></p>

<table>
<tr><th></th><th>緊急性 高</th><th>緊急性 低</th></tr>
<tr><td><b>コンプレックスあり</b></td><td>★ 勝ち筋</td><td>ニッチだが弱い</td></tr>
<tr><td><b>コンプレックスなし</b></td><td>レッドオーシャン</td><td>無風ゾーン</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="2軸マトリクス">
<line x1="55" y1="20" x2="55" y2="170" stroke="#cbd5e0" stroke-width="1.5"/>
<line x1="55" y1="170" x2="310" y2="170" stroke="#cbd5e0" stroke-width="1.5"/>
<text x="35" y="95" text-anchor="middle" font-size="9" fill="#718096" transform="rotate(-90 35 95)">コンプレックス →</text>
<text x="182" y="192" text-anchor="middle" font-size="9" fill="#718096">緊急性 →</text>
<rect x="62" y="28" width="118" height="64" rx="8" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="121" y="56" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">ニッチだが弱い</text>
<text x="121" y="74" text-anchor="middle" font-size="9.5" fill="#a0aec0">客が動かない</text>
<rect x="188" y="28" width="118" height="64" rx="8" fill="#fff5fa" stroke="#b83280" stroke-width="2"/>
<text x="247" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#b83280">★ 勝ち筋</text>
<text x="247" y="70" text-anchor="middle" font-size="9.5" fill="#8a4a6e">動く理由＋選ばれる理由</text>
<text x="247" y="84" text-anchor="middle" font-size="9.5" fill="#8a4a6e">両方そろう</text>
<rect x="62" y="98" width="118" height="64" rx="8" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="121" y="126" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">無風ゾーン</text>
<text x="121" y="144" text-anchor="middle" font-size="9.5" fill="#a0aec0">迷わず避ける</text>
<rect x="188" y="98" width="118" height="64" rx="8" fill="#eaf1f8" stroke="#9cb8d6"/>
<text x="247" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">レッドオーシャン</text>
<text x="247" y="140" text-anchor="middle" font-size="9.5" fill="#5a7494">正論で埋もれる</text>
</svg>
<div class="figcap">客が動き、その客にあなたが選ばれる——右上だけが勝てる</div>
</div>

<div class="tc"><div class="hd">★ 勝ち筋（緊急性 高 × コンプレックス あり）</div><div class="bd">「同じ悩みを乗り越えた人」として強く刺さる。<strong>客が動く理由（緊急性）と、あなたが選ばれる理由（共感）が両方そろう唯一のマス。</strong>ここを狙う。</div></div>
<div class="tc"><div class="hd">レッドオーシャン（緊急性 高 × コンプレックス なし）</div><div class="bd">客は動くが、語る経験がなく差別化できない。<strong>正論を言うだけの発信者が大量にいる中で埋もれる。</strong>「なぜあなたから買うのか」に答えられない。</div></div>
<div class="tc"><div class="hd">ニッチだが弱い（緊急性 低 × コンプレックス あり）</div><div class="bd">自分は語れるが読者が急いでいない。共感はもらえても<strong>「今すぐ」じゃないからお金が動きにくい。</strong>趣味の発信になりがち。</div></div>
<div class="tc"><div class="hd">無風ゾーン（緊急性 低 × コンプレックス なし）</div><div class="bd">誰も急いでいないし語る経験もない。<strong>共感も緊急性もない。</strong>迷わず避ける。</div></div>

<div class="key">同じジャンルでも自分の立ち方しだいで結果が変わる。お金で「投資のやり方」を正論で語ればレッドオーシャン。「借金で苦しんだ自分がどう抜け出したか」を語れば勝ち筋。<strong>ジャンルが運命を決めるんじゃない。ジャンルの中での立ち位置が決める。</strong></div>

<h2><span class="s">6</span>あなたのジャンルを位置づける</h2>
<p>4分類のうち、自分の発信がどこに属するか<strong>1つ選ぶ。</strong>複数にまたがるなら、一番時間と熱量を使えるものを主軸にする。</p>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="看板を1本に絞る">
<rect x="0" y="20" width="150" height="70" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">✗ あれもこれも</text>
<text x="40" y="62" text-anchor="middle" font-size="10" fill="#a0aec0">美容</text>
<text x="75" y="62" text-anchor="middle" font-size="10" fill="#a0aec0">副業</text>
<text x="112" y="62" text-anchor="middle" font-size="10" fill="#a0aec0">恋愛</text>
<text x="75" y="80" text-anchor="middle" font-size="9.5" fill="#a0aec0">看板がぼやける</text>
<rect x="170" y="20" width="150" height="70" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">○ まず1本</text>
<text x="245" y="62" text-anchor="middle" font-size="14" font-weight="800" fill="#2b6cb0">美容の人</text>
<text x="245" y="80" text-anchor="middle" font-size="9.5" fill="#5a7494">看板が立つ→思い出される</text>
</svg>
<div class="figcap">柱が立ってから、後で枝を伸ばせばいい</div>
</div>

<p><b>なぜ1本に絞るか：</b>読者の頭に「この人は◯◯の人」という看板が立たないと思い出してもらえない。<strong>まず1本に絞って看板を立て、軌道に乗ってから「美容の発信で月いくら稼いだか」というお金の話を枝として足す</strong>、という順番だ。</p>

<h3>ジャンル決定までの流れ</h3>
<div class="step"><span class="sn">1</span><span class="snm">HARM 4分類から1つ選ぶ</span><p>一番熱量を注げるものを1つだけ。発信は長距離走。続けられないジャンルは机上の空論だ。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">自分のコンプレックスを掛ける</span><p>過去に苦しんだ・乗り越えた経験はあるか。「元◯◯の私が」を探す。ここが選ばれる理由になる。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">緊急性が高いか確認する</span><p>「今すぐ解決したい」ものか。「いつか」なら、もっと緊急性の高い切り口に寄せる。</p></div>
<div class="step"><span class="sn">4</span><span class="snm">マネタイズ導線があるか確認する</span><p>紹介案件／自分の商品／単価。出口を決めてから走り出す。</p></div>

<div class="eq">自分のジャンル ＝ HARM × コンプレックス × 変化の過程</div>
<p>HARMで土俵を決め、コンプレックスで差別化し、変化の過程（どう乗り越えたか）でストーリーを語る。<strong>HARMだけでは競合に埋もれ、コンプレックスだけでは客が動かず、変化の過程がなければ「だからあなたにもできる」という希望を渡せない。</strong></p>

<h2><span class="s">7</span>具体例で確かめる</h2>
<div class="vs">
<div class="l"><div class="t">✗ 埋もれる発信</div>HARM：Money<br>コンプレックス：なし<br>切り口：「投資はこうやります」と教科書通り<br><br>→ 同じことを言う人が無数。「正しいけど、なぜあなたから？」に答えられず、レッドオーシャンで埋もれる。</div>
<div class="r"><div class="t">○ 刺さる発信</div>HARM：Money<br>コンプレックス：借金で苦しんだ過去<br>切り口：「毎月カツカツだった自分が、どう抜け出したか」<br><br>→ 同じ悩みの人が「この人ならわかってくれる」と集まる。緊急性も高く、勝ち筋に立てる。</div>
</div>
<p>土俵（Money）は全く同じ。違うのは<strong>「自分の経験という武器を握っているか」</strong>だけ。だから次章で、自分の中身を棚卸しする。</p>

<h2><span class="s">8</span>検品：池選びを間違えてないか</h2>
<div class="check"><ul>
<li>「何を投稿するか」より先に「どの池で釣るか」を決めたか</li>
<li>HARM 4分類から主軸を1つに絞れているか（看板はぼやけてないか）</li>
<li>自分のコンプレックス（経験）を掛けられるか</li>
<li>その悩みは「いつか」じゃなく「今すぐ」の緊急性があるか</li>
<li>売るもの（紹介案件／自分の商品）の出口を始める前に描いたか</li>
<li>2軸でいうと「勝ち筋」のマスに立てているか</li>
<li>トレンドに乗るなら、HARMと掛け合わせて土台を作ったか</li>
</ul></div>
<div class="end">人は、好きなものじゃなく、痛いと感じるものにお金を払う。<br>だから——自分が語りたい池で釣るな。<strong>魚がいる池で釣れ。</strong></div>
</div>
  `,

  // ============================================================
  // Phase 2 — 伸ばす
  // ============================================================

  'p2-algo': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>インスタが広めるのは「いい動画」じゃなく「反応された動画」だという仕組み</li>
<li>バズを決める4つの関門（初速→完視聴→保存→プロフクリック）の正体と順番の意味</li>
<li>3秒・30秒・30分という3つの数字の使い方</li>
<li>フォロワーのアクティブ時間の調べ方と、投稿時間の合わせ方</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="いい動画と反応された動画">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ いい動画</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 反応された動画</text>
<rect x="34" y="44" width="90" height="50" rx="6" fill="#fff" stroke="#cbd5e0"/>
<path d="M70 56 l18 13 l-18 13 z" fill="#cbd5e0"/>
<text x="79" y="118" text-anchor="middle" font-size="11" fill="#718096">編集がきれいでも</text>
<text x="79" y="134" text-anchor="middle" font-size="11" fill="#718096">埋もれる</text>
<rect x="196" y="44" width="90" height="50" rx="6" fill="#fff" stroke="#2b6cb0"/>
<text x="241" y="63" text-anchor="middle" font-size="11" fill="#b83280">❤ 保存 💬</text>
<path d="M214 76 l14 10 l-14 10 z" fill="#2b6cb0"/>
<text x="241" y="118" text-anchor="middle" font-size="11" fill="#1e4e7e">粗くても</text>
<text x="241" y="134" text-anchor="middle" font-size="11" fill="#1e4e7e">一気に広がる</text>
</svg>
<div class="figcap">機械が見てるのは画質じゃない。見た人の指の動きだ</div>
</div>

<div class="key">インスタが広めるのは「いい動画」じゃなく<strong>「ユーザーが反応した動画」</strong>。合言葉は<strong>「反応を取れる動画を作るのが全て」</strong>。クオリティを上げる前に、反応を取る設計を覚える。</div>

<h3>なぜ「反応」だけを見るのか</h3>
<p>理由はこれだ。<strong>アルゴリズムは、動画が面白いか・役立つか・きれいかを自分では判断できない。</strong>機械は映像の良し悪しを理解する目を持っていない。持っているのは「見た人がどう動いたか」という行動データだけ。</p>

<div class="flow">
<span>中身は読めない</span><span>少人数に出してテスト</span><span>反応が良ければ広げる</span>
</div>
<p>だからインスタにとっての"品質"は、あなたの編集技術じゃなく<strong>見た人の指の動きそのもの</strong>だ。動画作りの目的は「いい作品」じゃなく<strong>「見た人を動かすこと」</strong>。クオリティはその手段でしかない。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="新人芸人をテストするマネージャー">
<text x="160" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">インスタ＝新人を試すマネージャー</text>
<rect x="14" y="60" width="74" height="44" rx="8" fill="#eaf1f8" stroke="#9cb8d6"/>
<text x="51" y="82" text-anchor="middle" font-size="11" fill="#1e4e7e">小ライブ</text>
<text x="51" y="97" text-anchor="middle" font-size="10" fill="#718096">数十人</text>
<rect x="123" y="50" width="74" height="54" rx="8" fill="#cdddec" stroke="#2b6cb0"/>
<text x="160" y="74" text-anchor="middle" font-size="11" fill="#1e4e7e">中規模</text>
<text x="160" y="90" text-anchor="middle" font-size="10" fill="#718096">数百人</text>
<rect x="232" y="38" width="74" height="66" rx="8" fill="#2b6cb0"/>
<text x="269" y="68" text-anchor="middle" font-size="11" fill="#fff">大舞台</text>
<text x="269" y="85" text-anchor="middle" font-size="10" fill="#cdddec">拡散</text>
<path d="M90 82 L121 76" stroke="#b83280" stroke-width="2" marker-end="url(#a1)"/>
<path d="M199 76 L230 70" stroke="#b83280" stroke-width="2" marker-end="url(#a1)"/>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="160" y="122" text-anchor="middle" font-size="11" fill="#718096">ウケた動画だけが次の客に送られる</text>
</svg>
<div class="figcap">最初の数十人がウケれば次へ。スベれば二度と大舞台はない</div>
</div>
<p>屋台と同じだ。最初の数人が「うまい」と並べば人だかりができ、通行人がさらに集まる。<strong>味より「最初の数人が並んだか」で広がりが決まる。</strong>人は行列に並ぶ。インスタの拡散はこの群衆心理を機械にしたものだ。</p>

<h2><span class="s">1</span>判断基準は「4つの関門」だけ</h2>
<p>アルゴリズムは複雑な魔法じゃない。投稿は順番に4つの関門を通る。前を突破した動画だけが次へ進む。</p>

<div class="flowbig">
<span>初速</span><span>完視聴</span><span>保存</span><span class="is-goal">プロフクリック</span>
</div>
<div class="stats">
<div class="stat-c"><div class="n">関門1</div><div class="l">初速：投稿後1〜3時間で反応が取れたか</div></div>
<div class="stat-c"><div class="n">関門2</div><div class="l">完視聴：最後まで見られたか</div></div>
<div class="stat-c"><div class="n">関門3</div><div class="l">保存：後で見返したいと思われたか</div></div>
<div class="stat-c"><div class="n">関門4</div><div class="l">プロフ：もっと見たいと飛んだか</div></div>
</div>

<div class="key"><b>なぜ「順番」なのか。</b>インスタは少人数テストで合格したものだけを次の大きな客に出す。だから後ろの関門は前を超えた動画にしか発動しない。<strong>保存の設計をどれだけ作り込んでも、初速で止められたら保存される機会すら来ない。</strong>「全部そこそこ」より「手前から1つずつ確実に突破」が効く理由だ。</div>
<p>達人は4つを別々の問いとして頭の中でチェックしている。初心者は「全部まとめていい動画に」とするから、どこが弱いか分からず迷子になる。ここから1関門ずつ掘る。</p>

<h2><span class="s">2</span>関門1：初速（投稿後1〜3時間の反応）</h2>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="反応率で勝負が決まる">
<text x="79" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 反応薄い</text>
<rect x="24" y="30" width="110" height="34" rx="8" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="79" y="52" text-anchor="middle" font-size="11" fill="#718096">40人中2人</text>
<text x="79" y="88" text-anchor="middle" font-size="13" fill="#718096">→ 配信ストップ</text>
<line x1="160" y1="20" x2="160" y2="110" stroke="#e2e8f0"/>
<text x="241" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 反応濃い</text>
<rect x="186" y="30" width="110" height="34" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="241" y="52" text-anchor="middle" font-size="11" fill="#1e4e7e">40人中8人</text>
<text x="241" y="88" text-anchor="middle" font-size="13" fill="#1e4e7e">→ 次の数百人へ</text>
<text x="160" y="120" text-anchor="middle" font-size="11" fill="#b83280">差は最初のわずかな人数の動きだけ</text>
</svg>
<div class="figcap">母数が小さいから1人の反応が極端に重い。勝負は最初の数十人</div>
</div>
<p>インスタは投稿直後の<strong>いいね・保存・コメント・シェア</strong>でテスト配信の合否を決める。最初の少人数がよく反応すれば一気に拡散へ。薄ければそこで止まる。これも「行列の最初の1人」と同じで、勢いがさらに勢いを呼ぶ。</p>

<h3>初速を上げる3アクション</h3>
<table>
<tr><td><b>1 投稿直後にストーリーでシェア</b></td><td>反応してくれやすい既存ファンを真っ先に動画へ送り込む</td></tr>
<tr><td><b>2 アクティブ時間に投稿</b></td><td>テスト客が起きてる時間に出す（調べ方はセクション7）</td></tr>
<tr><td><b>3 最初の30分は張り付く</b></td><td>コメントに即返信。コメント欄が動き、反応の総量が上がる</td></tr>
</table>
<p>3つとも狙いは1つ、<strong>「最初の行列を自分で作る」</strong>こと。放置すれば、せっかくの初速のチャンスを自分で捨てる。</p>

<div class="vs">
<div class="l"><div class="t">✗ やりがちなミス</div>夜中2時に投稿してそのまま寝る。朝、伸びてなくてガッカリ。→ テスト客が起きてない時間に出してる。動画の良し悪し以前の問題。</div>
<div class="r"><div class="t">○ 正しい動き</div>フォロワーが起きてる夜に投稿→すぐストーリーでシェア→30分はコメント返信に張り付く。最初の反応を自分で作りにいく。</div>
</div>
<div class="warn">初速＝「数」じゃなく「反応率」。フォロワーが少なくても反応率が高ければ突破できる。<b>濃いフォロワーが少数いる小規模アカウントのほうがむしろ勝てる。</b></div>

<h2><span class="s">3</span>関門2：完視聴率（最後まで見られた割合）</h2>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="完視聴率と尺の関係">
<text x="160" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">同じ「15秒で離脱」でも</text>
<text x="40" y="42" font-size="11" fill="#718096">30秒の動画</text>
<rect x="40" y="48" width="240" height="20" rx="4" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="40" y="48" width="120" height="20" rx="4" fill="#cbd5e0"/>
<text x="285" y="62" font-size="11" fill="#718096">半分</text>
<text x="40" y="90" font-size="11" fill="#1e4e7e">15秒の動画</text>
<rect x="40" y="96" width="120" height="20" rx="4" fill="#2b6cb0"/>
<rect x="160" y="96" width="0" height="20"/>
<rect x="40" y="96" width="240" height="20" rx="4" fill="none" stroke="#2b6cb0"/>
<rect x="40" y="96" width="120" height="20" fill="#2b6cb0"/>
<text x="285" y="110" font-size="11" fill="#1e4e7e">完走</text>
</svg>
<div class="figcap">動画が短いほど完視聴率は上がりやすい。ただし薄すぎると保存もプロフも生まれない</div>
</div>
<p>完視聴率は<strong>「最後まで見られた割合」</strong>。インスタが一番欲しいのは<strong>ユーザーがアプリに長くいること</strong>だから、長く見られる動画を「客を引き止める優秀な動画」として優先的に広げる。だから尺は<strong>30〜40秒がちょうどいい。</strong></p>

<div class="key">完視聴率を上げる近道は2つ。<strong>①尺を欲張らない（30〜40秒）②冒頭で離脱させない。</strong></div>

<h3>冒頭で離脱させないコツ</h3>
<table>
<tr><td><b>1 冒頭3秒で「続きが気になる」</b></td><td>「実は逆」「ほとんどの人が間違ってる」など先を見たくなる入り</td></tr>
<tr><td><b>2 無音・間を作らない</b></td><td>一瞬の沈黙で人は指を動かす。詰めてテンポよく</td></tr>
<tr><td><b>3 結論を後ろに置く</b></td><td>答えを最初に全部言うと見る理由が消える。引っ張る</td></tr>
</table>
<p><b>奥にある理由：</b>人は「気になることがある状態」に耐えられない。脳は途中で終わったものを不快に感じて閉じたがる。<strong>冒頭で種を蒔き、結論を後ろに置くと、見る人は答え合わせがしたくて指を止められなくなる。</strong>無音を作らないのも同じで、空きができた瞬間に脳が「もういいか」と離脱を決める。</p>

<div class="vs">
<div class="l"><div class="t">✗ 離脱される</div>「こんにちは〜今日はスキンケアの話です」と自己紹介から。最初の3秒で何も起きず、見る人は次へスワイプ。</div>
<div class="r"><div class="t">○ 最後まで見られる</div>いきなり「高い化粧水、実は逆効果になることがある」と問題提起。続きが気になって最後まで見る。答えは最後で回収。</div>
</div>
<div class="warn">「丁寧な前置き」が一番の敵。挨拶・自己紹介・前置きは全部カット。<b>あなたの礼儀正しさは、見る側には「本題が始まらない退屈な時間」でしかない。</b>1秒目から本題に殴り込む。</div>

<h3>冒頭3秒のテンプレ（迷ったらこの型）</h3>
<table>
<tr><td><b>逆張り型</b></td><td>「やってる人ほど損する◯◯」「実は逆だった◯◯のやり方」</td></tr>
<tr><td><b>名指し型</b></td><td>「30代の毛穴、これやめて」と相手をピンポイントで呼び止める</td></tr>
<tr><td><b>結末チラ見せ型</b></td><td>完成形を冒頭で一瞬見せて「どうやった?」を作る</td></tr>
</table>
<p>共通の原理は1つ。<strong>「これは自分のことだ」「自分の知ってることと違う」と思わせて脳に引っかかりを作る。</strong>冒頭は「情報」より「引っかかり」を置く。</p>

<h2><span class="s">4</span>関門3：保存（後で見返したいか）</h2>
<p>ここが一番大事な関門だ。<strong>保存はインスタが強く重視するアクションの一つ。</strong></p>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="いいねと保存の重さの違い">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">❤ いいね</text>
<text x="75" y="70" text-anchor="middle" font-size="11" fill="#a0aec0">指1本・軽い</text>
<text x="75" y="86" text-anchor="middle" font-size="11" fill="#a0aec0">本音が出にくい</text>
<text x="160" y="65" text-anchor="middle" font-size="18" fill="#cbd5e0">＜</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="245" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">🔖 保存</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#8a4a6e">手間と意思が要る</text>
<text x="245" y="86" text-anchor="middle" font-size="11" fill="#8a4a6e">＝本音＝強い評価</text>
</svg>
<div class="figcap">重い行動ほど本音が表れる。だからインスタは保存を強く扱う</div>
</div>
<p>いいねは大して良いと思ってなくても押せる。一方、保存は「自分のフォルダに取っておく」手間と意思が要る。<strong>重い行動ほど本音が表れる。</strong>だからインスタは保存を「本当に価値があった証拠」として強く広げる。</p>

<div class="vs">
<div class="l"><div class="t">✗ 保存されない</div>「今日のランチ」「なんとなくの気分の話」。見て終わり、取っておく理由がない。一度で覚えられる「待たずにすぐ乳液」も同じ。</div>
<div class="r"><div class="t">○ 保存される</div>「毛穴ケア5ステップ」「買ってよかった化粧品まとめ7選」「対処リスト」。手数があって、後で見ながら使えるもの。</div>
</div>
<div class="key">線引きはここ。<strong>「一度で覚えられる＝保存されない」「覚えきれない＝保存される」。</strong>人が保存を押すのは「今は覚えきれないから未来の自分のために置いておく」瞬間だ。ノウハウ・チェックリスト・まとめ系が強い。</div>

<h3>必ず入れるCTA（行動を促す一言）</h3>
<div class="flow">
<span>受け身で流してる</span><span>「保存して」と言う</span><span>頭に選択肢が生まれる</span><span>保存される</span>
</div>
<p>保存は黙っていても増えない。見る側は受け身で、良いと思っても自分から保存に頭を切り替える人は少ない。<strong>「保存して」と言葉にした瞬間、見る人の頭に「保存する」という選択肢が初めて生まれる。</strong>あなたが言わない限り、保存ボタンは存在しないのと同じだ。</p>
<div class="step"><span class="sn">コツ</span><span class="snm">保存の理由をセットで言う</span><p>「保存して」より「<b>忘れないように</b>保存して後で見返してね」「<b>買い物の時に</b>見られるよう保存しといて」。理由が腑に落ちると人は動く。理由が行動の言い訳になるからだ。</p></div>
<div class="warn">CTAを「最後にこっそり」入れて満足しがち。<b>声でも言い、テロップでも出す。</b>聞き流す人と音を消して見る人の両方に届けるため、2重で伝えてやっと届く。</div>

<h2><span class="s">5</span>関門4：プロフィールクリック率（フォロワー化）</h2>
<p>最後の関門は<strong>「動画を見た人がプロフに飛んだ割合」</strong>。ここを通ると、ただの再生がフォロワーに変わる。再生だけ伸びてフォロワーが増えない人は、ここで止まっている。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="点と線">
<text x="79" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 1本で満足＝点</text>
<circle cx="50" cy="70" r="7" fill="#a0aec0"/><circle cx="90" cy="55" r="7" fill="#a0aec0"/><circle cx="110" cy="85" r="7" fill="#a0aec0"/>
<text x="79" y="115" text-anchor="middle" font-size="11" fill="#718096">面白かったで終わり</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="241" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ この人を追う＝線</text>
<polyline points="186,92 216,78 246,60 276,44 304,30" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="304" cy="30" r="6" fill="#b83280"/>
<text x="241" y="115" text-anchor="middle" font-size="11" fill="#1e4e7e">次も見たい→フォロー</text>
</svg>
<div class="figcap">点で満足した人は離れ、線を欲しがった人だけがプロフへ向かう</div>
</div>
<p>人がプロフに飛ぶのは「この人、もっと見たい」と感じた時。何が「線で追いたい」を生むかというと、<strong>「コンセプトの明確さ」</strong>だ。「この人は◯◯の人だ」と一瞬で伝わると「次もこういう動画が来る」と期待でき、フォローという"先払い"ができる。何の人か分からないと、次が読めずフォローの理由が立たない。</p>

<div class="vs">
<div class="l"><div class="t">✗ 飛ばれない</div>美容・旅行・グルメがバラバラ。1本伸びても「面白い動画だった」で終わり。他に何があるか想像できない。</div>
<div class="r"><div class="t">○ 飛ばれる</div>「30代の毛穴ケア」で一貫。役立ったら「この人、毛穴詳しそう。他も見たい」と自然にプロフへ。一貫性が"もっと見たい"を生む。</div>
</div>
<div class="key">プロフクリック率は<strong>Phase 1で決めた発信軸がそのまま効く。</strong>軸がブレてると「結局何の人？」となり誰も飛ばない。コンセプトは飾りじゃなくフォロワー化の心臓部だ。</div>
<p>仕掛けもある。動画の最後で<strong>「化粧水編はこれ。次は乳液編をプロフから見てね」</strong>と続きの存在を匂わせる。「途中で終わったものを閉じたい」脳の性質と同じで、続きがあると人はそれを取りに動く。1本完結で終わらせず<strong>「この続きはプロフにある」と道を作る。</strong></p>
<div class="warn">1本伸ばすために、いつもと違うジャンルに手を出すな。一発当たってもフォロワーにならない。<b>バズった動画の客はそのテーマに惹かれて来た人。軸を守ったほうが結局フォロワーは増える。</b></div>

<h2><span class="s">6</span>反応を上げる3つの数字：3秒・30秒・30分</h2>
<p>実行に落とすと、覚える数字は3つだけ。</p>

<div class="stats">
<div class="stat-c"><div class="n">3秒</div><div class="l">冒頭で掴む時間。ここで引けないと最後まで見られない →完視聴</div></div>
<div class="stat-c"><div class="n">30秒</div><div class="l">理想の尺（30〜40秒）。短いほど完視聴率は上がる →完視聴</div></div>
<div class="stat-c"><div class="n">30分</div><div class="l">投稿後の張り付き時間。コメント返信して初速を作る →初速</div></div>
</div>
<p>なぜ数字で覚えるか。<strong>感覚で「短めに」「すぐ掴む」とやると人は必ず甘くなる。</strong>「短めに」は気づけば1分、「しばらく」は気づけば5分で離れる。数字に縛ると自分の甘えを断てる。達人の時間感覚を初心者が再現するための補助輪だ。</p>
<div class="key">迷ったらこの順で確認。<strong>冒頭3秒で掴めてる？尺は30〜40秒？出した後30分は張り付ける時間に出した？</strong></div>

<h2><span class="s">7</span>投稿時間の見方：いつ出すかで初速が変わる</h2>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="寝てる時間に出すとテスト客がいない">
<text x="160" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">時間は動画の質より手前の前提</text>
<rect x="14" y="36" width="130" height="72" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="79" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 寝てる時間</text>
<text x="79" y="80" text-anchor="middle" font-size="11" fill="#a0aec0">最初の数十人が</text>
<text x="79" y="95" text-anchor="middle" font-size="11" fill="#a0aec0">そもそもいない</text>
<rect x="176" y="36" width="130" height="72" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="241" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 開いてる時間</text>
<text x="241" y="80" text-anchor="middle" font-size="11" fill="#1e4e7e">テスト客がいて</text>
<text x="241" y="95" text-anchor="middle" font-size="11" fill="#1e4e7e">反応率が出る</text>
</svg>
<div class="figcap">誰も開いてない時間の投稿は、テストを受ける前に不合格にされている</div>
</div>
<p>勝負は最初の数十人の反応率。フォロワーが寝てる時間に出すと、その大事な「最初の数十人」がそもそも存在しない。<strong>時間は中身より手前にある前提条件だ。</strong></p>

<h3>一般的に反応が高い時間帯</h3>
<div class="tl">
<div class="slot"><span class="time">朝</span><div class="w2"><b>7〜9時</b>｜通勤・身支度の合間にスマホ</div></div>
<div class="slot"><span class="time">昼</span><div class="w2"><b>12〜13時</b>｜昼休憩でゴロッとスマホ</div></div>
<div class="slot"><span class="time">夜</span><div class="w2"><b>20〜22時</b>｜家事が終わってリラックス</div></div>
</div>
<p>これはあくまで一般論。本当に大事なのは<strong>自分のフォロワーが開いてる時間</strong>だ。子育て層は子が寝た夜遅く、会社員は通勤の朝や昼休みに山が来やすい。世間の平均は誰の生活リズムでもない"架空の平均人"の時間。<strong>「自分のフォロワーの正解」を取りにいく。</strong></p>

<h3>自分のフォロワーのアクティブ時間を調べる手順</h3>
<div class="step"><span class="sn">1</span><span class="snm">プロアカウントにする</span><p>個人アカウントだと数字が見られない。設定からプロアカウント（無料）に切り替える。これでインサイトが使える。まずデータを見られる状態を作らないと、勘で投稿し続けることになる。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">インサイトを開く</span><p>プロフィールの「インサイト」からフォロワーの情報を見る。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">「最もアクティブな時間」を見る</span><p>曜日・時間帯ごとにどれだけアプリを開いてるかがグラフで出る。山が高い時間が狙い目。</p></div>
<div class="step"><span class="sn">4</span><span class="snm">その時間の少し前に投稿</span><p>ピークちょうどより少し前に出しておく。<b>なぜ「少し前」か。</b>反応が積み上がるまで時間が要るから、ピークちょうどに出すと一番人が多い瞬間にはまだ動画が"温まっていない"。少し前に出して「開いた時もう新着がそこにある」状態を作れば、ピークの人波をまるごと初速に変えられる。夜21時に山が来るなら20時40分ごろに出す。</p></div>
<div class="warn">フォロワーが少ないうちはインサイトのデータも少なく当てにならない。<b>最初は一般的な時間帯（朝・昼・夜）で試し、反応を見ながら自分の勝ち時間を探る。</b>データは投稿を重ねるほど正確になる。</div>

<h2><span class="s">8</span>この章の結論と、いますぐやること</h2>
<div class="flowbig">
<span>初速</span><span>完視聴</span><span>保存</span><span class="is-goal">プロフクリック</span>
</div>
<p>インスタは動画の中身を読めないから、<strong>見た人の反応だけで広げるか埋めるかを決めている。</strong>だから「いい動画」より「反応を取れる動画」が全て。反応とは突き詰めれば<strong>「見た人の指を、自分が狙った方向に動かすこと」</strong>。理由を分かって作る人と、なんとなく作る人で差が開く。</p>

<div class="check"><ul>
<li>自分の直近の動画、冒頭3秒で「続きが気になる」状態になってる？</li>
<li>尺は30〜40秒に収まってる？長すぎて離脱されてない？</li>
<li>末尾に「保存して」のCTAが声とテロップで入ってる？</li>
<li>プロフを見て「何の人か」が一瞬でわかる？</li>
<li>投稿はフォロワーが起きてる時間に出してる？</li>
</ul></div>

<div class="key"><b>読了後にやること（この章の宿題）</b><br>自分の動画を1本開いて、<strong>「冒頭2秒をこう変えたら掴めるかも」という改善仮説を1つメモする。</strong>たとえば「挨拶を消して、いきなり問題提起」「最初に結論をチラ見せして引っ張る」など。関門は前から順に発動する以上、一番手前の入口を直すのが一番効くからだ。次章では、この4関門を満たす動画の作り方をCapCutで学ぶ。</div>

<div class="end">インスタは「いい動画」じゃなく「反応された動画」を広める。<br>その奥にあるのは「中身を読めず、人の反応しか見られない」という1点だ。<br><strong>4つの関門を1つずつ突破する設計が、伸びる動画の正体だ。</strong></div>
</div>
  `,

  'p2-capcut': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>バズる動画は才能じゃなく「6つの工程の順番」で決まる</li>
<li>なぜ「ゼロから」は外し、「完全模倣」は外さないのか</li>
<li>なぜ結果から話すと指が止まるのか（結→起→転→結）</li>
<li>視聴を決めるタイトル4パターン</li>
<li>読み終えた直後、今週のリール台本を1本書ける</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ゼロから作ると模倣の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ ゼロから</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 完全模倣</text>
<circle cx="50" cy="60" r="6" fill="#cbd5e0"/><circle cx="80" cy="78" r="6" fill="#cbd5e0"/><circle cx="105" cy="55" r="6" fill="#cbd5e0"/><circle cx="65" cy="95" r="6" fill="#cbd5e0"/><circle cx="100" cy="92" r="6" fill="#cbd5e0"/>
<text x="79" y="130" text-anchor="middle" font-size="11" fill="#718096">何が効くか手探り。外す</text>
<rect x="186" y="48" width="50" height="58" rx="6" fill="#fff" stroke="#2b6cb0" stroke-width="2"/>
<rect x="252" y="48" width="50" height="58" rx="6" fill="#2b6cb0"/>
<path d="M236 77 l16 0" stroke="#b83280" stroke-width="2" marker-end="url(#a0)"/>
<defs><marker id="a0" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="241" y="130" text-anchor="middle" font-size="11" fill="#1e4e7e">当たった型を刷り直す</text>
</svg>
<div class="figcap">ゼロから当てるな。当たった型を丸ごと真似ろ</div>
</div>

<div class="key">動画は<strong>才能で作るものじゃなく、順番で作るもの</strong>。手順を守れば、初心者でも当たる確率がガラッと変わる。料理と同じで、最初はレシピ通りに作るから失敗しない。</div>

<h3>当たった動画には「見えない正解」が全部入っている</h3>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="効いている要素の塊">
<rect x="84" y="20" width="152" height="92" rx="12" fill="#fff5fa" stroke="#b83280" stroke-width="2"/>
<text x="160" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">当たった1本＝正解の塊</text>
<text x="160" y="44" text-anchor="middle" font-size="10" fill="#8a4a6e">文字を出すタイミング</text>
<text x="160" y="62" text-anchor="middle" font-size="10" fill="#8a4a6e">声の速さ・間の取り方</text>
<text x="160" y="80" text-anchor="middle" font-size="10" fill="#8a4a6e">余白の量・画角</text>
<text x="160" y="100" text-anchor="middle" font-size="10" fill="#8a4a6e">本人すら言葉にできない要素</text>
</svg>
<div class="figcap">効く要素を1つずつ選ぶな。効いてる塊をまるごとコピーしろ</div>
</div>
<p>初心者の「ここはこうした方がいい」は、効く理由が見える前は<strong>ほぼ全部改悪になる</strong>。だからまず丸ごと真似て、効く感覚を体に入れる。</p>

<div class="flowbig">
<span>当たった型を発見</span><span>まるごと真似る</span><span>6要素を整える</span><span>外さない動画</span><span class="is-goal">やっとアレンジ</span>
</div>

<div class="warn">最初の目的は「オリジナルを出すこと」じゃない。<b>「外さない手順を体に入れること」だ。</b>オリジナルは手順が入った後のごほうびでしかない。</div>

<h3>6つの工程は順番が命</h3>
<p>いきなり構成やタイトルから考えると確実に迷子になる。家を建てるとき壁紙の色から決める人はいない。土地→設計図→骨組みの順番だ。サムネはCanva（無料の画像作成ツール）、編集はCapCut（無料の動画編集アプリ）を使う。ボタン操作は次章。今は順番だけ頭に入れる。</p>
<div class="fig">
<div class="tl">
<div class="slot"><span class="time">1</span><div class="w2"><b>発見</b>／バズ動画を記録</div></div>
<div class="slot"><span class="time">2</span><div class="w2"><b>模倣</b>／完全コピー</div></div>
<div class="slot"><span class="time">3</span><div class="w2"><b>構成</b>／結→起→転→結</div></div>
<div class="slot"><span class="time">4</span><div class="w2"><b>タイトル</b>／15文字以内</div></div>
<div class="slot"><span class="time">5</span><div class="w2"><b>音源/タグ</b>／参考から</div></div>
<div class="slot"><span class="time">6</span><div class="w2"><b>投稿</b>／最適な時間に</div></div>
</div>
</div>

<h2><span class="s">1</span>バズ動画を「発見」して記録する</h2>
<div class="key">真似はお手本の天井をそのまま受け継ぐ作業。<strong>お手本が持つ結果が、あなたの上限になる。</strong>だから「どれを真似るか」で勝負はほぼ決まる。腕より、選ぶレシピが先だ。</div>

<h3>探すのは「投稿が少ないのにフォロワーが多い」アカウント</h3>
<p>これは<strong>「投稿が下手なうちにバズった＝再現性のある型を持ってる」</strong>サイン。100本でやっと1万人なら数の力で伸びている。でも数本で大きく伸びたなら、その数本に「当たる型」だけが濃縮されている。</p>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="投稿数とフォロワーの関係">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">100本で1万人</text>
<text x="75" y="68" text-anchor="middle" font-size="10" fill="#a0aec0">数の力＝真似ても</text>
<text x="75" y="84" text-anchor="middle" font-size="10" fill="#a0aec0">100本出すまで再現不可</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<text x="245" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">数本で大きく伸び</text>
<text x="245" y="68" text-anchor="middle" font-size="10" fill="#1e4e7e">純度の高い正解</text>
<text x="245" y="84" text-anchor="middle" font-size="10" fill="#1e4e7e">＝真似る価値あり</text>
</svg>
<div class="figcap">余計なものが混ざる前の、剥き出しの型を探す</div>
</div>
<div class="grp"><div class="gh">お手本アカウントの目安</div><div class="gb">
<div class="rule"><span class="rn">投稿が1桁</span> フォロワー1000人以上<span class="gb2">数本でこれは型が強い証拠</span></div>
<div class="rule"><span class="rn">投稿が2桁</span> フォロワー1万人以上<span class="gb2">10〜99本でこれも優秀</span></div>
</div></div>

<div class="warn">つまずきポイント：<b>古い動画を真似しても伸びない。</b>"今っぽさ"そのものが拡散の燃料。去年の型は燃料が抜けている。服のトレンドと同じで、見る側は理由を言えなくても無意識に「なんか古い」でスワイプする。<b>必ず直近3ヶ月以内</b>に絞り、投稿日もメモする。</div>

<h3>発見の手順</h3>
<div class="step"><span class="sn">1</span><span class="snm">候補を5〜10個リストアップ</span><p>1つだけだと偶然の当たりを丸ごと外す。複数あれば「共通して効いている型」が見える。スマホのメモにプロフィールURLを貼り、横に「美容/毛穴系」とジャンルを書く。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">そのアカウントの平均をざっと掴む</span><p>上から10本くらいの再生数を眺め、平均を感じ取る。次のステップで「飛び抜けた1本」を見分ける物差しになる。平均を知らないと、どれが当たりか判断できない。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">平均を大きく超えた1本を見つける</span><p>同じ人が同じ顔・同じ声で出して、その1本だけ桁が違うなら、差を生んだのは中身の型しかない。<strong>その1本こそ「当たった型」</strong>。URLを記録する。</p></div>
<div class="step"><span class="sn">4</span><span class="snm">「このアカウントについて」で開始日を確認</span><p>プロフィールから利用開始日が見られる。最近始めて伸びているなら、今のトレンドに乗れている強いお手本。何年も前からの運用は過去の貯金で数字が出ている場合があり、初速の参考にしづらい。</p></div>

<div class="good"><b>○ 良い発見</b>「2週間前に始めたアカウント、投稿15本でフォロワー5000人。普段は数千〜数万再生だけど、1本だけ明らかに桁違いに伸びてる」→ この1本を記録。型が新しくて当たってる。</div>
<div class="bad"><b>✗ 悪い発見</b>「超有名な大型アカウントの去年の動画」→ 規模も時期もかけ離れすぎ。貯金で伸びた数字を、貯金のない自分が真似しても再現できない。</div>

<h2><span class="s">2</span>「完全模倣」する — オリジナルを捨てる</h2>
<div class="key">真似は「コピー機」になる作業。<strong>あなたの顔・声・テーマに差し替えるだけで、構造は完全に同じにする。</strong>最初は1ミリも自己流を入れるな。</div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="改良が改悪になる仕組み">
<rect x="8" y="30" width="120" height="70" rx="10" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<text x="68" y="60" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">冒頭の大きい文字</text>
<text x="68" y="80" text-anchor="middle" font-size="10" fill="#1e4e7e">＝1秒で指を止める</text>
<path d="M132 65 l28 0" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="146" y="55" text-anchor="middle" font-size="9" fill="#b83280">小さく</text>
<text x="146" y="44" text-anchor="middle" font-size="9" fill="#b83280">改良</text>
<rect x="164" y="30" width="148" height="70" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="238" y="60" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">指を止める力が消える</text>
<text x="238" y="80" text-anchor="middle" font-size="10" fill="#a0aec0">＝改悪</text>
</svg>
<div class="figcap">本人が説明できない部分にこそ、効きが隠れている</div>
</div>
<div class="note">「全部真似たら自分らしさが消えるのでは」と不安になる。逆だ。素材があなたの顔・声・テーマである時点で、出てくる動画は自然とあなたのものになる。自分らしさは足すものじゃなく、勝手ににじむもの。</div>

<h3>CapCutにお手本を重ねて真似る</h3>
<p>CapCutにお手本動画を<strong>オーバーレイ（画面の上に半透明で重ねること）</strong>して、見ながら自分の動画を作る。トレーシングペーパーを上に乗せて絵を写すのと同じ。記憶や目分量で真似ると必ずどこかがズレ、効いていた要素を壊す。重ねればズレようがない。取り込み方など細かい操作は次章。</p>

<div class="warn">画角・角度・フォント・文字の影・切り替わる秒数・声のスピード・余白の有無まで<b>全部コピーする。</b>どれが効いてるか分からない以上、選り好みする資格はまだない。</div>

<table>
<tr><th>真似する要素</th><th>何を見るか</th><th>なぜ見るか</th></tr>
<tr><td>画角・角度</td><td>カメラの高さ、顔の大きさ、引きか寄りか</td><td>距離感で「親しみ」か「説明」かが変わる</td></tr>
<tr><td>フォント</td><td>文字の種類、太さ、大きさ</td><td>文字の印象で第一印象が決まる</td></tr>
<tr><td>文字の影</td><td>背景に埋もれない縁取りや影</td><td>読めない文字は、無いのと同じ</td></tr>
<tr><td>切り替わる秒数</td><td>1場面が何秒で次に変わるか</td><td>変化のリズムが飽きさせない速さを作る</td></tr>
<tr><td>声のスピード</td><td>早口か、ゆっくりか</td><td>速さが合わないと内容が頭に入らない</td></tr>
<tr><td>余白の有無</td><td>声と声の間に無音があるか</td><td>無音の有無が集中の途切れを左右する</td></tr>
</table>

<div class="key">動画の長さは<strong>30〜40秒</strong>が目安。長すぎると最後まで見られず、短すぎると中身が伝わらない。SNSは「最後まで見られたか」を次に届けるかの判断材料にする傾向がある。お手本が25秒なら25秒に揃える。<strong>尺もコピー対象だ。</strong></div>

<h2><span class="s">3</span>バズる動画の「構成」— 結→起→転→結</h2>
<p>学校で習った「起承転結」は忘れていい。伸びる動画は<strong>最初に結論（結果）から話す</strong>。ここが伸びるかどうかの分かれ目。</p>

<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="前置きと結果先行の離脱差">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 前置きから</text>
<polyline points="20,40 50,60 80,80 110,100" fill="none" stroke="#a0aec0" stroke-width="3"/>
<circle cx="20" cy="40" r="5" fill="#a0aec0"/><circle cx="110" cy="100" r="6" fill="#cbd5e0"/>
<text x="120" y="118" font-size="10" fill="#718096">途中で指がスワイプ</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="245" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 結果が先</text>
<circle cx="186" cy="40" r="6" fill="#b83280"/>
<text x="186" y="32" text-anchor="middle" font-size="9" fill="#b83280">うわ凄い</text>
<polyline points="186,40 220,52 254,64 288,76 304,84" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<text x="245" y="118" text-anchor="middle" font-size="10" fill="#1e4e7e">最初の1秒で指が止まる</text>
</svg>
<div class="figcap">映画の予告編が一番派手なシーンから始まるのと同じ</div>
</div>
<p><b>奥にある理由：</b>見る側は「これは自分に関係あるか」を最初の一瞬で判断している。先に「うわ、すごい」を見せて関係があると思わせてから、説明に入る。説明は興味を持った人だけが聞けばいい。</p>

<div class="vs">
<div class="l"><div class="t">✗ 起承転結（前置きが長い）</div>「最近ちょっと悩んでて、いろいろ調べたら…」→ ここで指がスワイプ。結論にたどり着かない。</div>
<div class="r"><div class="t">○ 結→起→転→結（結果が先）</div>「肌がワントーン明るくなった方法、これです」→ 最初の1秒で結果。続きが気になって指が止まる。</div>
</div>

<h3>構成で守るルール</h3>
<div class="grp"><div class="gh">伸びる動画の鉄則</div><div class="gb">
<div class="rule"><span class="rn">①</span> 冒頭は「結果」から話す<span class="gb2">前置き禁止。一番おいしいところを頭に</span></div>
<div class="rule"><span class="rn">②</span> タイトルは15文字以内<span class="gb2">長いと一瞬で読めず、目が滑る</span></div>
<div class="rule"><span class="rn">③</span> 画面の切り替わりは2〜3秒<span class="gb2">同じ画が続くと飽きてスワイプ</span></div>
<div class="rule"><span class="rn">④</span> 声と声の間に無音を作らない<span class="gb2">間が空くと「もういいや」で離脱</span></div>
<div class="rule"><span class="rn">⑤</span> 三脚で画角を安定させる<span class="gb2">手ブレは素人感が出て冷める</span></div>
<div class="rule"><span class="rn">⑥</span> 常識を破壊する／賛否を生む<span class="gb2">「みんな間違ってる」系は拡散されやすい</span></div>
</div></div>
<p><b>④が特に効く理由：</b>視聴者の集中は常に「やめる理由」を探している。無音は「やめていいですよ」の合図。電話で相手が黙ると切りたくなるのと同じ。録ったあとCapCutで無音をカットし、声と声をくっつける。これだけで一気に見やすくなる。</p>
<p><b>⑥が効く理由：</b>人は自分の知っていることと食い違う情報を放っておけない。「えっ、そうなの？」のズレがコメントや保存を生み、拡散の力になる。ただし嘘や煽りで賛否を作るな。裏取りした事実の中で世間の思い込みとズレている部分を見せる。前の章のファクトチェックと地続きだ。</p>

<h2><span class="s">4</span>視聴を決める「タイトル」設計</h2>
<div class="key">中身がどれだけ良くても、<strong>タイトルで指が止まらなければ誰にも届かない。</strong>本のタイトルが地味だと、名作でも手に取られないのと同じ。次の4パターンを組み合わせて作る。</div>

<table>
<tr><th>記号</th><th>パターン</th><th>使う言葉の例</th><th>なぜ刺さるか</th></tr>
<tr><td><b>即</b></td><td>即効性</td><td>「今すぐ」「たった5分で」「1日3分で」</td><td>すぐ手に入ると分かると人は動く</td></tr>
<tr><td><b>損</b></td><td>損得訴求</td><td>「損しない〇〇」「これしたら上手くいく」</td><td>人は得より「損したくない」に強く反応</td></tr>
<tr><td><b>権</b></td><td>権威性</td><td>「元美容部員の〜」「実は〇〇だった」</td><td>「この人なら本当かも」と信じる理由</td></tr>
<tr><td><b>ぼ</b></td><td>ぼかし表現</td><td>「アレ」「コレ」で興味を惹く</td><td>正体が分からないと確かめたくなる</td></tr>
</table>
<p>とくに<strong>「損」と「ぼ」が強い</strong>。人は得より「失うこと」を避けたい。だから「やった方がいい」より「やらないと損する」で指が止まる。ぼかしは「分からないことを放っておけない」性質を突く。穴が開いていると埋めたくなる。</p>

<h3>4パターンを組み合わせると強くなる</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="フックを2つ重ねる">
<rect x="44" y="44" width="120" height="46" rx="23" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="104" y="38" text-anchor="middle" font-size="10" font-weight="700" fill="#1e4e7e">即「今すぐ」</text>
<rect x="156" y="44" width="120" height="46" rx="23" fill="#fff5fa" stroke="#b83280"/>
<text x="216" y="38" text-anchor="middle" font-size="10" font-weight="700" fill="#b83280">ぼ「アレ」</text>
<text x="160" y="73" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">今すぐやめるべきアレ</text>
<text x="160" y="110" text-anchor="middle" font-size="11" fill="#8a4a6e">15文字以内に2つのフック＝読む手間ゼロで2回引っかける</text>
</svg>
<div class="figcap">フックが1つだと刺さらない人が離れる。2つで確率が上がる</div>
</div>
<div class="good"><b>○ 組み合わせ例</b><br>・即＋ぼ「今すぐやめるべきアレ」<br>・権＋損「元店員が教える損しない選び方」<br>・損＋ぼ「これ知らないと一生損するコレ」</div>
<div class="bad"><b>✗ つまずき例</b>「私が最近やってみてすごく良かったと感じたスキンケアの方法について」→ 長すぎて一瞬で読めない。即効性もぼかしもなく、指が止まる理由がゼロ。</div>

<h3>言葉に困ったら「ラッコキーワード」で調べる</h3>
<p>タイトルの言葉が浮かばないときは、ラッコキーワードという無料ツールを使う。<strong>同じジャンルでみんなが実際に検索している言葉</strong>が一覧で出る。「毛穴」と入れれば「毛穴 開き」「毛穴 黒ずみ」などが並ぶ。自分の頭で考えるとつい言いたい言葉を選ぶが、検索データは相手が使っている言葉そのもの。<strong>相手の言葉で書くから、相手が「自分のことだ」と感じる。</strong></p>

<h2><span class="s">5</span>音源・キャプション・タグも「参考から」</h2>
<div class="key">ここでも自己流は禁止。<strong>全部、参考アカウントのリサーチ結果をそのまま使う。</strong>当たった動画では「効く組み合わせ」がすでに成立している。好みで選び直した瞬間、それが崩れる。第2章と同じ原則だ。</div>

<div class="grp"><div class="gh">3つの設定、どう真似るか</div><div class="gb">
<div class="rule"><span class="rn">音源</span> リール下部「音源を使用」<span class="gb2">「トレンド中」か、同ジャンルの伸びてる動画と同じ曲</span></div>
<div class="rule"><span class="rn">タグ</span> 参考アカウントのものを5〜10個<span class="gb2">ニッチなタグと広めのタグを混ぜる</span></div>
<div class="rule"><span class="rn">キャプション</span> 参考アカウントの構成を真似る<span class="gb2">どんな順番で何を書いてるかをコピー</span></div>
</div></div>

<h3>なぜトレンド音源が効くのか</h3>
<p>SNSは「今みんなが使っている音」を新しく見せる相手に届けやすい傾向がある。流行りの音はそれ自体が「今っぽさ」のサイン。<strong>流行りの曲に乗るだけで、最初に見てもらえるきっかけが増える。</strong>音源画面で曲名の横に上向きの矢印マークが付いているものが、伸びている音源の目印だ。</p>

<h3>タグは「ニッチ × 広め」を混ぜる</h3>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="広めのタグとニッチなタグ">
<rect x="6" y="30" width="148" height="74" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="80" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">広め「美容」</text>
<text x="80" y="58" text-anchor="middle" font-size="10" fill="#a0aec0">大通りの看板</text>
<text x="80" y="76" text-anchor="middle" font-size="10" fill="#a0aec0">見る人多いが</text>
<text x="80" y="92" text-anchor="middle" font-size="10" fill="#a0aec0">埋もれる</text>
<rect x="166" y="30" width="148" height="74" rx="10" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<text x="240" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">ニッチ「毛穴ケア初心者」</text>
<text x="240" y="58" text-anchor="middle" font-size="10" fill="#1e4e7e">路地の看板</text>
<text x="240" y="76" text-anchor="middle" font-size="10" fill="#1e4e7e">少ないが確実に</text>
<text x="240" y="92" text-anchor="middle" font-size="10" fill="#1e4e7e">興味がある人</text>
</svg>
<div class="figcap">両方に看板を出すから、広くも深くも拾える</div>
</div>
<p>片方だけだと母数か精度のどちらかを捨てる。目安は<strong>広めを2〜3個、ニッチを3〜5個</strong>。お手本のタグをそのまま書き写すところから始めればいい。</p>

<h2><span class="s">6</span>「投稿時間」を最適化する</h2>
<p>同じ動画でも、出す時間で初速が変わる。SNSは出した直後の反応を見て「他の人にも見せる価値があるか」を判断する傾向がある。<strong>最初の数十分の手応えが、その後どこまで広がるかの呼び水になる。</strong></p>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="人がいる時間といない時間">
<rect x="6" y="24" width="148" height="80" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="80" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">深夜に開店</text>
<text x="80" y="72" text-anchor="middle" font-size="10" fill="#a0aec0">手応えゼロ</text>
<text x="80" y="88" text-anchor="middle" font-size="10" fill="#a0aec0">埋もれる</text>
<rect x="166" y="24" width="148" height="80" rx="10" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<text x="240" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">人通りの多い時間に開店</text>
<text x="240" y="72" text-anchor="middle" font-size="10" fill="#1e4e7e">最初にバッと見られ</text>
<text x="240" y="88" text-anchor="middle" font-size="10" fill="#1e4e7e">勢いがつく</text>
</svg>
<div class="figcap">中身が同じでも、入る客の数がまるで違う</div>
</div>
<div class="step"><span class="sn">1</span><span class="snm">参考アカウントの投稿時間を確認</span><p>お手本が当ててる動画を何時頃に出しているか見る。当たってる人は当たる時間に出している。これも模倣の一部。同じジャンルなら見ている人の生活リズムも近いから、時間も流用が効く。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">自分のフォロワーの活動時間も見る</span><p>プロアカウント（ビジネス用に切り替える無料の設定）にするとインサイトという分析画面が使える。そこで<strong>自分のフォロワーが一番アプリを開いている時間帯</strong>がわかる。お手本の時間は「一般論」、インサイトは「あなた専用の正解」。活動の山が来る前に投稿して、開いた瞬間に見られる状態を作る。</p></div>
<div class="key">迷ったら、まず参考アカウントと同じ時間に合わせる。<strong>最初は他人の正解を借り、データが貯まったら自分の正解に切り替える。</strong></div>

<h2><span class="s">7</span>アフレコ台本テンプレ（結→起→転→結）</h2>
<p>声を入れる文章（アフレコ）も、4つの箱に当てはめるだけで組める。真っ白から書くと手が止まるが、箱があれば「何の役割の言葉を入れるか」が決まっているから迷いが消える。穴埋めプリントを埋める感覚でいい。</p>

<div class="flow">
<span>① 結</span><span>② 起</span><span>③ 転</span><span>④ 結</span>
</div>

<div class="tc"><div class="hd">① 結｜結果から話す</div><div class="bd"><span class="lab">最初の1〜2秒で指を止める</span>
<div class="draft">「ずっと準備してきたもの、ようやく発表できます」<br>「DMで何件も来てたアレ、解禁します」</div></div></div>
<div class="tc"><div class="hd">② 起｜状況を説明する</div><div class="bd"><span class="lab">一旦話を括る</span>
<div class="draft">「実は最近〜」と今の状況や背景を短くまとめる。ここで「何の話か」を視聴者に渡す。</div></div></div>
<div class="tc"><div class="hd">③ 転｜逆転させる</div><div class="bd"><span class="lab">ここで一気に話を動かす</span>
<div class="draft">「でも、これを使ったら〜」で状況をひっくり返す。ビフォーからアフターへ流れを切り替える。</div></div></div>
<div class="tc"><div class="hd">④ 結｜変化を見せる</div><div class="bd"><span class="lab">最終的にどうなったか</span>
<div class="draft">「今ではこんなに変わって自分でも驚いてる」と最後の変化を見せて締める。</div></div></div>

<div class="warn">つまずきポイント：<b>②の前置きを長くしない。</b>①で止まった指はまだ「ちょっと気になる」の不安定な状態。背景を長く語ると「思ったより自分に関係ないかも」の隙が生まれる。②は橋渡しに徹し、すぐ③の逆転で「やっぱり気になる」をもう一度作る。言いたいことが2つあるなら動画を2本に分ける。</div>

<div class="good"><b>○ 4つの箱が埋まった台本</b><br>①「肌がワントーン明るくなった方法、これです」<br>②「実は最近、夜のケアをサボりがちで肌がくすんでた」<br>③「でも、寝る前にこれを足しただけで翌朝が違った」<br>④「今では、すっぴんで近所に出られるくらい変わった」</div>

<h2><span class="s">8</span>検品：自己流になってないか</h2>
<div class="check"><ul>
<li>お手本は「投稿少ない×フォロワー多い」か？（積み上げでなく型で伸びた1本か）</li>
<li>直近3ヶ月以内の動画か？（古い型を真似していないか）</li>
<li>画角・フォント・秒数・声のスピード・余白まで全部コピーしたか？</li>
<li>冒頭は結果から始まっているか？（前置きで指を逃していないか）</li>
<li>タイトルは15文字以内で、即・損・権・ぼのどれかが入っているか？</li>
<li>②の前置きは短く、すぐ③の逆転に進んでいるか？</li>
<li>音源・タグ・投稿時間も、参考アカウントから引き継いだか？</li>
</ul></div>

<div class="end">動画は才能で作るものじゃない。<br>当たった型には「見えない正解」が全部入っている。<br>だから——ゼロから作るな。<strong>当たった型を見つけて、丸ごと真似ろ。</strong><br>今週、お手本を1つ見つけて、台本を1本書け。オリジナルは、その後で勝手ににじむ。</div>
</div>
  `,

  'p2-basics': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>編集は「才能」じゃなく「順番」だと言い切れる理由</li>
<li>テンプレ動画が「5ステップ」だけで仕上がる仕組み</li>
<li>カットでテンポを作るルール（15〜20カット・1カット約2秒）</li>
<li>アドゴシック・縁取り・9:16で「1秒で読める」字幕の作り方</li>
<li>効果音・自動字幕・1080p書き出しのつまずき対処</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="センスと順番の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ センス頼み</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 順番どおり</text>
<text x="79" y="62" text-anchor="middle" font-size="24">🎲</text>
<text x="79" y="98" text-anchor="middle" font-size="11" fill="#718096">運まかせ</text>
<text x="79" y="116" text-anchor="middle" font-size="11" fill="#718096">出るかどうか不安</text>
<text x="241" y="58" text-anchor="middle" font-size="20">📋</text>
<text x="241" y="88" text-anchor="middle" font-size="11" fill="#1e4e7e">レシピと同じ</text>
<text x="241" y="106" text-anchor="middle" font-size="11" fill="#1e4e7e">誰でも1本完成する</text>
</svg>
<div class="figcap">編集はセンスじゃない。順番が決まってる「作業」だ</div>
</div>

<div class="key">うまい編集が人を伸ばすんじゃない。<strong>投稿し続けた人が伸びる。</strong>狙うのは「おしゃれな1本」じゃなく「最速で出せる1本」。その型を体に入れるのがこの章のゴールだ。</div>

<p>料理と同じだ。「玉ねぎをみじん切り」と書いてあれば手は動く。動画も「ここで切る」「ここに文字」「ここで音」と順番が決まっていれば、初日でも1本完成する。さらにこの章は<strong>「なぜこの順番か」「なぜこのフォントか」</strong>までセットで渡す。理由が分かると応用が効く。</p>

<div class="warn"><b>完璧を狙う人ほど、何も出せずに終わる。</b>「端から文字をふわっと出したい」と調べ始めると30分溶ける。1本に3時間かけて疲れ、下書きフォルダで眠ったまま二度と出ない。最初の数本は型をそのまま真似ろ。色は手が動くようになってから勝手に出る。</div>

<h2><span class="s">1</span>編集の5ステップ（これだけ覚えろ）</h2>

<div class="flowbig">
<span>① 素材読込</span><span>② カット</span><span>③ テキスト</span><span>④ 効果音</span><span class="is-goal">⑤ 書き出し</span>
</div>

<div class="fig">
<div class="step"><span class="sn">1</span><span class="snm">プロジェクト（素材読込）</span><p>CapCut（無料の動画編集アプリ）を開いて撮った動画を取り込む。比率は9:16。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">カット（15〜20回）</span><p>無音・言いよどみを切ってテンポを作る。一番重要。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">テキスト（アドゴシック）</span><p>字幕を入れる。フォントはアドゴシック一択。縁取り必須。</p></div>
<div class="step"><span class="sn">4</span><span class="snm">効果音（1〜3個）</span><p>テキストが出る瞬間に効果音。テンポがぐっと良くなる。</p></div>
<div class="step"><span class="sn">5</span><span class="snm">書き出し（1080p）</span><p>右上の書き出しボタンで保存。1080p・30fps。</p></div>
</div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="土台が先、飾りが後">
<text x="160" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">動きの大きい作業を先、細かい作業を後</text>
<rect x="20" y="90" width="280" height="24" rx="6" fill="#1e4e7e"/>
<text x="160" y="107" text-anchor="middle" font-size="11" fill="#fff">素材＝土台</text>
<rect x="55" y="62" width="210" height="24" rx="6" fill="#2b6cb0"/>
<text x="160" y="79" text-anchor="middle" font-size="11" fill="#fff">カット＝骨組み</text>
<rect x="90" y="34" width="140" height="24" rx="6" fill="#9cb8d6"/>
<text x="160" y="51" text-anchor="middle" font-size="11" fill="#fff">テキスト・効果音＝飾り</text>
</svg>
<div class="figcap">先に文字を入れて後で切ると、文字がズレてやり直しになる</div>
</div>

<div class="note">最初は④を飛ばして「素材・カット・テキスト・書き出し」の4つでもいい。1本出すことが何より大事だ。飾り（効果音）は後から覚えればいい。</div>

<h2><span class="s">2</span>① プロジェクト作成 — 「9:16」だけは間違えるな</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="9対16と16対9の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 16:9（横）</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 9:16（縦）</text>
<rect x="34" y="58" width="90" height="50" rx="4" fill="#a0aec0"/>
<rect x="34" y="42" width="90" height="14" fill="#2d3748"/>
<rect x="34" y="110" width="90" height="14" fill="#2d3748"/>
<text x="79" y="138" text-anchor="middle" font-size="11" fill="#718096">上下に黒帯＝素人っぽい</text>
<rect x="216" y="40" width="50" height="84" rx="6" fill="#2b6cb0"/>
<text x="241" y="138" text-anchor="middle" font-size="11" fill="#1e4e7e">スマホを縦に持った形</text>
</svg>
<div class="figcap">「スマホの形」＝9:16。「テレビの形」＝16:9。SNSは縦</div>
</div>

<div class="warn"><b>ここで一番つまずく：画面比率</b><br>横型（16:9）のまま進めると、投稿時に上下へ黒帯が出る。比率は「後から変えると全部やり直し」になる設定だ。家を建てた後に土台のサイズは変えられない。<strong>後戻りできない設定ほど、何も乗ってない最初に確定させる。</strong></div>

<div class="good"><b>○ 良い例</b> 作成直後にまず比率を見て9:16を確認 → それから編集開始。</div>
<div class="bad"><b>✗ 悪い例</b> 確認せず進め、書き出し直前に横型だと気づいて全部やり直し。一番多い失敗。</div>

<h2><span class="s">3</span>② カット編集 — テンポは「切る回数」で決まる</h2>

<div class="key">ここが編集で<strong>一番重要</strong>。SNSの動画は「飽きた瞬間にスワイプされて終わり」だ。カットが甘いとテンポが死んで一瞬で離脱される。逆に、内容が同じでもカットが効いてるだけで最後まで見られる。</div>

<div class="eq">30〜40秒 ÷ 15〜20カット ＝ <strong>1カット約2秒</strong></div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="長回しと小刻みカット">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 長回し</text>
<rect x="20" y="34" width="118" height="30" rx="5" fill="#cbd5e0"/>
<text x="79" y="54" text-anchor="middle" font-size="11" fill="#718096">同じ画がだらだら</text>
<text x="79" y="92" text-anchor="middle" font-size="11" fill="#718096">脳「先が読めた」</text>
<text x="79" y="110" text-anchor="middle" font-size="11" fill="#718096">→ 指が離れる</text>
<line x1="160" y1="14" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="241" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 小刻みカット</text>
<rect x="184" y="34" width="22" height="30" rx="3" fill="#2b6cb0"/>
<rect x="210" y="34" width="22" height="30" rx="3" fill="#9cb8d6"/>
<rect x="236" y="34" width="22" height="30" rx="3" fill="#2b6cb0"/>
<rect x="262" y="34" width="22" height="30" rx="3" fill="#9cb8d6"/>
<rect x="288" y="34" width="14" height="30" rx="3" fill="#2b6cb0"/>
<text x="241" y="92" text-anchor="middle" font-size="11" fill="#1e4e7e">脳「次は何が来る？」</text>
<text x="241" y="110" text-anchor="middle" font-size="11" fill="#1e4e7e">→ 指が止まる</text>
</svg>
<div class="figcap">カットは「次が気になる」を起こし続ける装置だ</div>
</div>

<h3>どこを切るか（迷ったらこの3つ）</h3>
<div class="grp"><div class="gh">✓ 必ずカットすべき箇所</div><div class="gb">
<div class="rule"><span class="rn">1 「間」や無音</span><span class="gb2">話と話の沈黙は全部カット。残るともたつく</span></div>
<div class="rule"><span class="rn">2 「えー」「あー」</span><span class="gb2">言いよどみは全部削る。プロっぽさが激変</span></div>
<div class="rule"><span class="rn">3 声が終わった直後</span><span class="gb2">言い終わったら即、次のカットへ。余韻を残さない</span></div>
</div></div>
<p>どれも<strong>「情報がゼロの時間」</strong>だ。情報がない時間は「待たされる時間」になり、人は待たされた瞬間に離れる。基準はひとつ。<strong>「ここ、見てる人が退屈しないか？」</strong></p>

<div class="note">「切りすぎたら不自然では」と不安になるが逆だ。会話のテンポは現実より速いくらいでちょうど良い。「えーっと、今日はですね」なら「今日は」だけ残せば立つ。初心者はほぼ全員「切り方が甘い」側に寄る。</div>

<h3>やり方（実際の操作）</h3>
<div class="fig">
<div class="step"><span class="sn">1</span><span class="snm">動画をタップ</span><p>タイムライン（画面下の動画の帯）の動画をタップして選択。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">再生ヘッドを移動</span><p>白い縦線を、切りたい場所までスライド。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">「分割」</span><p>分割ボタンで、そこから動画が2つに割れる。</p></div>
<div class="step"><span class="sn">4</span><span class="snm">「削除」</span><p>いらない側を選んで削除。これを繰り返す。</p></div>
</div>

<div class="key">慣れるまで時間がかかるなら<strong>「自動カット機能」</strong>を使え。無音を自動で見つけて切ってくれる。ただし機械は「無音かどうか」しか判断できず、「ここは間を残す方が効く」というテンポの呼吸は分からない。<strong>自動で切った後、1か所ずつ微調整する。</strong>その一手間で仕上がりが変わる。</div>

<h2><span class="s">4</span>③ テキスト — 「1秒で読める」が正解</h2>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="無音で字幕だけ追う">
<rect x="120" y="14" width="80" height="92" rx="10" fill="#2d3748"/>
<rect x="130" y="40" width="60" height="40" rx="4" fill="#4a5568"/>
<rect x="134" y="54" width="52" height="9" rx="2" fill="#fff"/>
<rect x="142" y="66" width="36" height="9" rx="2" fill="#fff"/>
<text x="160" y="33" text-anchor="middle" font-size="13">🔇</text>
<text x="160" y="100" text-anchor="middle" font-size="9" fill="#9cb8d6">音オフでも字幕で伝わる</text>
<text x="40" y="62" text-anchor="middle" font-size="11" fill="#718096">電車</text>
<text x="40" y="80" text-anchor="middle" font-size="11" fill="#718096">布団</text>
<text x="280" y="62" text-anchor="middle" font-size="11" fill="#718096">仕事の</text>
<text x="280" y="80" text-anchor="middle" font-size="11" fill="#718096">合間</text>
</svg>
<div class="figcap">動画の半分は文字でできてる。字幕は音を出す前の「入口」</div>
</div>

<p>SNSの動画は<strong>音を消して見られることが多い</strong>。最初は字幕だけ見て「面白そうか」を一瞬で判断している。入口でつまずかせたら、中身がどれだけ良くても届かない。</p>

<h3>フォント — アドゴシック一択</h3>
<p>操作は「テキスト」→「テキスト追加」→ フォントタブで<strong>「アドゴシック」</strong>を選ぶ。</p>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="細い字と太い字の読みやすさ">
<rect x="0" y="14" width="150" height="82" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="40" text-anchor="middle" font-size="12" fill="#a0aec0" font-family="serif">細い字</text>
<text x="75" y="66" text-anchor="middle" font-size="10" fill="#cbd5e0">小さい画面で潰れる</text>
<text x="75" y="84" text-anchor="middle" font-size="10" fill="#cbd5e0">→ 読む前に飛ばす</text>
<rect x="170" y="14" width="150" height="82" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="44" text-anchor="middle" font-size="17" font-weight="800" fill="#1e4e7e">太い字</text>
<text x="245" y="70" text-anchor="middle" font-size="10" fill="#2b6cb0">一目で頭に入る</text>
<text x="245" y="86" text-anchor="middle" font-size="10" fill="#2b6cb0">→ アドゴシック</text>
</svg>
<div class="figcap">読めない文字は、存在しないのと同じ</div>
</div>
<div class="key"><b>なぜアドゴシックか。</b>太くて読みやすく、伸びている動画で使われる定番だからだ。文字は「おしゃれさ」より「一瞬で読めるか」が全て。迷ったらこれで間違いない。</div>

<h3>文字サイズ — 役割で2段階に</h3>
<table>
<tr><th>サイズ</th><th>役割</th><th>使いどころ</th></tr>
<tr><td>大きめ</td><td>タイトル・強調</td><td>一番言いたい一言。迷ったらこちら</td></tr>
<tr><td>中くらい</td><td>本文・説明</td><td>補足の説明、長めのセリフ</td></tr>
</table>
<p>コツは<strong>「全部同じサイズにしない」</strong>。人は読む前に「どこが大事か」を大きさで判断する。新聞の見出しと本文と同じだ。<strong>迷ったら大きめにしておけ。</strong>読めないより、大きすぎるほうがずっとマシだ。</p>

<h3>文字スタイル — 縁取りで背景に負けない</h3>
<table>
<tr><th>背景</th><th>文字色 + 縁取り</th></tr>
<tr><td>明るい背景</td><td>黒文字 + 白縁取り</td></tr>
<tr><td>暗い背景</td><td>白文字 + 黒縁取り</td></tr>
</table>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="縁取りなしとあり">
<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#2d3748"/></linearGradient></defs>
<rect x="0" y="14" width="150" height="82" rx="10" fill="url(#bg)"/>
<text x="75" y="60" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">読める？</text>
<text x="75" y="106" text-anchor="middle" font-size="10" fill="#718096">✗ 縁取りなし＝消える</text>
<rect x="170" y="14" width="150" height="82" rx="10" fill="url(#bg)"/>
<text x="245" y="60" text-anchor="middle" font-size="16" font-weight="800" fill="#1e4e7e" stroke="#fff" stroke-width="3" paint-order="stroke">読める！</text>
<text x="245" y="106" text-anchor="middle" font-size="10" fill="#1e4e7e">○ 縁取りで浮く</text>
</svg>
<div class="figcap">動画は背景がずっと動く。縁取りは「文字を守る保険」</div>
</div>
<div class="key">背景と「逆」の色を文字に使い、縁取りでさらに浮かせる。動画は次の瞬間に背景の色が変わるから、一番明るい場面と一番暗い場面の両方で読めるか確かめる。縁取りは細すぎると効かず、太すぎるとモコモコする。中間に合わせろ。</div>

<h3>余白 — ここで素人感が出る</h3>
<div class="vs">
<div class="l"><div class="t">✗ NG：端ギリギリ・3行詰め込み</div>機種によって端が切れる。情報量が多くて1秒で理解できない。</div>
<div class="r"><div class="t">○ OK：中央〜やや上・1〜2行・余白あり</div>パッと読める。余白があるほど文字は「強く」見える。</div>
</div>
<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="文字の安全な配置">
<rect x="120" y="10" width="80" height="120" rx="10" fill="#2d3748"/>
<rect x="126" y="28" width="68" height="22" rx="4" fill="#1e4e7e"/>
<text x="160" y="43" text-anchor="middle" font-size="9" fill="#fff">安全ゾーン</text>
<text x="160" y="68" text-anchor="middle" font-size="9" fill="#9cb8d6">中央〜やや上</text>
<circle cx="135" cy="112" r="6" fill="#4a5568"/><circle cx="135" cy="98" r="6" fill="#4a5568"/>
<rect x="150" y="100" width="40" height="22" rx="4" fill="#b83280" opacity="0.4"/>
<text x="170" y="115" text-anchor="middle" font-size="8" fill="#fff">✗ ボタンで隠れる</text>
<text x="40" y="74" text-anchor="middle" font-size="10" fill="#718096">端は</text>
<text x="40" y="90" text-anchor="middle" font-size="10" fill="#718096">切れる</text>
<text x="280" y="124" text-anchor="middle" font-size="10" fill="#b83280">下は隠れる</text>
</svg>
<div class="figcap">下に「いいね・コメント」が重なる。端と下は避ける</div>
</div>
<div class="warn"><b>投稿前のプレビューを必ず挟め。</b>画面の一番下に文字を置くと、ボタンで隠れて読めない。これは編集画面では気づけず、実際に投稿した画面で初めて分かる事故だ。</div>

<h2><span class="s">5</span>④ 効果音 — テンポを「音」で締める</h2>
<p>「オーディオ」→「効果音」→ 場面に合った音を追加。入れるだけで一気に「それっぽく」なる。</p>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="文字と音を同時に">
<rect x="50" y="28" width="90" height="40" rx="8" fill="#1e4e7e"/>
<text x="95" y="53" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">バッ！</text>
<text x="95" y="88" text-anchor="middle" font-size="10" fill="#1e4e7e">文字が出る瞬間</text>
<text x="160" y="52" text-anchor="middle" font-size="18" fill="#b83280">＋</text>
<text x="225" y="50" text-anchor="middle" font-size="22">🔊</text>
<text x="225" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#2b6cb0">ポン</text>
<text x="225" y="90" text-anchor="middle" font-size="10" fill="#2b6cb0">同時に音</text>
</svg>
<div class="figcap">目と耳を同時に刺激すると「重要だ」と感じる</div>
</div>

<div class="key">コツは<strong>「テキストが出るタイミングに合わせる」</strong>。文字が出るコマまで再生ヘッドを動かし、その位置に効果音の頭を置く。ズレてたら指でつまんで微調整。音と文字がズレると違和感が残って内容に集中できなくなる。</div>

<div class="splitbar"><div class="sb-main" style="width:25%">効果音1〜3個＝合図</div><div class="sb-sub" style="width:75%">全部に鳴らす＝合図が合図でなくなる</div></div>
<div class="warn"><b>! 使いすぎ注意</b><br>音量は声の邪魔にならない程度に下げろ。そして<strong>1動画に1〜3個まで</strong>。全部が強調なら、何も強調していないのと同じだ。「ここぞ」に絞るから一発が効く。</div>
<div class="bad"><b>✗ 悪い例</b> 全カットに効果音 → ガチャガチャうるさくて内容が頭に入らない。</div>
<div class="good"><b>○ 良い例</b> 一番伝えたい文字に1個「ポン」、締めの一言にもう1個。これで十分。</div>
<p>最初は効果音を飛ばしてもいい。<strong>これは慣れてから足す「味つけ」</strong>。まず素材・カット・テキスト・書き出しで1本出すのが先だ。</p>

<h3>自動字幕（テロップ自動生成）も使える</h3>
<p>「テキスト」→「自動字幕」で<strong>音声を認識してテロップを自動作成</strong>。しゃべりが多い動画ではかなり時短になる。</p>
<div class="warn"><b>必ず確認・修正しろ</b><br>自動字幕は<strong>誤字が出やすい</strong>。固有名詞は特に間違える。誤字が1つあるだけで「雑な人だ」という印象が先に立つ。出てきた文字は全部読んで直し、<strong>フォントはアドゴシックに変更</strong>（「全部に適用」で一括）するのを忘れるな。</div>

<h2><span class="s">6</span>⑤ 書き出し・投稿 — 「1080p・30fps」で固定</h2>
<p>右上の<strong>「↑」（書き出しボタン）</strong>をタップ。確認するのは2つだけ。</p>
<table>
<tr><th>項目</th><th>設定</th><th>理由</th></tr>
<tr><td>解像度</td><td>1080p</td><td>画質と容量のバランスが取りやすい</td></tr>
<tr><td>フレームレート</td><td>30fps</td><td>滑らかさと容量のバランスが取れる標準値</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ちょうどいい設定">
<text x="55" y="60" text-anchor="middle" font-size="11" fill="#718096">低い</text>
<text x="55" y="78" text-anchor="middle" font-size="10" fill="#a0aec0">ボヤける</text>
<rect x="115" y="40" width="90" height="34" rx="8" fill="#1e4e7e"/>
<text x="160" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">1080p・30fps</text>
<text x="160" y="92" text-anchor="middle" font-size="10" fill="#1e4e7e">届く範囲で一番軽い</text>
<text x="270" y="60" text-anchor="middle" font-size="11" fill="#718096">高い</text>
<text x="270" y="78" text-anchor="middle" font-size="10" fill="#a0aec0">重い＋SNSで圧縮</text>
</svg>
<div class="figcap">高くしても見る人に伝わらず、デメリットだけ増える</div>
</div>

<div class="key">迷う必要はない。<strong>「1080p・30fps」で固定。</strong>これより高画質にしてもSNS側で圧縮されて消える。fpsは1秒間のコマ数。30で十分なめらかに見えるから、それ以上は労力の無駄だ。</div>
<div class="warn"><b>書き出し後は必ずプレビュー確認</b><br>投稿前に一度、最初から最後まで再生しろ。よくある事故は「文字の誤字」「縁取りの付け忘れで読めない」「最後だけ無音が残ってる」。編集中は拡大して触ってるから、全体を通しで見る目が抜ける。木ばかり見て森を見ていない状態だ。</div>

<h2><span class="s">7</span>つまずく人へ — よくある質問</h2>
<div class="grp"><div class="gh">つまずきポイントと答え</div><div class="gb">
<div class="rule"><span class="rn">Q カットしすぎ？が不安</span><span class="gb2">切りすぎで困ることはほぼない。迷ったら切れ</span></div>
<div class="rule"><span class="rn">Q 文字がダサい気がする</span><span class="gb2">アドゴシック＋縁取り＋大きめを守れば必ず「読める」字幕に</span></div>
<div class="rule"><span class="rn">Q どの効果音を選べばいい</span><span class="gb2">最初は飛ばしていい。慣れたら「ポン」系を文字の登場に1個</span></div>
<div class="rule"><span class="rn">Q 1本にどれくらいかかる</span><span class="gb2">最初は時間がかかって当然。数本で手が勝手に動く。回数が全て</span></div>
<div class="rule"><span class="rn">Q 完璧に作れない</span><span class="gb2">完璧を狙うな。完璧な1本より、出した10本が人を伸ばす</span></div>
</div></div>
<p>この5つには共通の根っこがある。<strong>どれも「上手くやってから出したい」という同じ恐れだ。</strong>けど順番が逆なんだ。</p>

<div class="flowbig">
<span>出す</span><span>反応を見る</span><span>また作る</span><span class="is-goal">手が覚える</span>
</div>
<div class="key">編集が上手くなる唯一の方法は<strong>「数をこなす」</strong>。自転車と同じで、説明書を百回読んでも乗れない。転びながら漕ぐから体が覚える。<strong>上手くなってから出すんじゃない。出しながら上手くなる。</strong></div>

<h2><span class="s">8</span>この章の結論</h2>
<div class="final">
<b>★ この6つを守れば、バズ動画と同じ「土台」が作れる。</b><br><br>
・フォントは<b>アドゴシック</b>（太くて読みやすい一択）<br>
・文字には<b>縁取り</b>を必ずつける（背景に負けないため）<br>
・画面比率は<b>9:16</b>（スマホの縦の形）<br>
・尺は<b>30〜40秒</b>、その中で<b>15〜20カット</b>（1カット約2秒）<br>
・書き出しは<b>1080p・30fps</b>（画質と容量のバランス）<br>
・効果音は<b>1〜3個</b>、文字の登場に合わせて控えめに<br><br>
凝った編集も特別なセンスもいらない。この型を守って、まず1本書き出せ。<b>編集は順番を覚えた人から、確実に作れるようになるぞ。</b>
</div>

<h2><span class="s">9</span>実践チェック</h2>
<p>書き出す前に<strong>「この型、いくつ守れてる？欠けはどれ？」</strong>で検品しろ。漠然と見ると「まあいいか」で流す。項目に分けるから欠けに気づける。</p>
<div class="check"><ul>
<li>☐ 画面比率は9:16（縦型）になってる？</li>
<li>☐ 30〜40秒で15〜20カット切った？テンポはいい？</li>
<li>☐ 無音・「えー」「あー」を全部切った？</li>
<li>☐ フォントはアドゴシック？大事な一言は大きくした？</li>
<li>☐ 文字に縁取りをつけた？背景に負けてない？</li>
<li>☐ 文字は中央〜やや上、1〜2行、余白あり？端と下を避けた？</li>
<li>☐ 効果音は1〜3個、文字の登場に合わせた？音量は控えめ？</li>
<li>☐ 自動字幕を使ったなら、誤字を直してアドゴシックに変えた？</li>
<li>☐ 1080p・30fpsで書き出した？通しでプレビュー確認した？</li>
</ul></div>
<div class="end">編集はセンスじゃない。<br><strong>順番を覚えた人から、誰でも1本仕上げられるようになる「作業」だ。</strong><br>だから——上手くなってから出すな。<strong>出しながら、上手くなれ。</strong></div>
</div>
  `,

  'p2-buzz': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>バズは「才能」ではなく「観察と記録の量」で作れる、その理由</li>
<li>自分の頭で考えるより、伸びてる動画を見る方が速い原理</li>
<li>毎日メモる4項目（リンク・タイトル・再生数・なぜ）</li>
<li>一番むずかしい「なぜバズったか」を1行で書く4つの切り口</li>
<li>良い記録と悪い記録の差、50本たまるまでの積み上がり方</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="当てにいくと観察するの違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 当てにいく</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 観察する</text>
<text x="79" y="56" text-anchor="middle" font-size="26">🎲</text>
<text x="79" y="86" text-anchor="middle" font-size="11" fill="#718096">頭の中の</text>
<text x="79" y="102" text-anchor="middle" font-size="11" fill="#718096">「面白いはず」</text>
<text x="79" y="134" text-anchor="middle" font-size="11" fill="#718096">＝運任せの博打</text>
<text x="241" y="56" text-anchor="middle" font-size="26">🔍</text>
<text x="241" y="86" text-anchor="middle" font-size="11" fill="#1e4e7e">視聴者が出した</text>
<text x="241" y="102" text-anchor="middle" font-size="11" fill="#1e4e7e">正解をマネる</text>
<text x="241" y="134" text-anchor="middle" font-size="11" fill="#1e4e7e">＝確実に近づく</text>
</svg>
<div class="figcap">センスで当てにいくな。当たった正解を観察しろ</div>
</div>

<div class="key">バズが作れない人の思い込みは1つ。<strong>「バズは才能で決まる」と信じていることだ。</strong>正解は観察と記録。すでに当たってる動画を毎日1本、4点だけメモる。</div>

<h3>あなたの「面白いはず」は、ただの想像</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="想像と正解の違い">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">あなたの好み</text>
<text x="75" y="74" text-anchor="middle" font-size="11" fill="#a0aec0">誰も見てない</text>
<text x="75" y="90" text-anchor="middle" font-size="11" fill="#a0aec0">＝ただの想像</text>
<text x="160" y="65" text-anchor="middle" font-size="20" fill="#cbd5e0">≪</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">伸びてる動画</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#1e4e7e">万人が選んだ</text>
<text x="245" y="86" text-anchor="middle" font-size="11" fill="#1e4e7e">＝確かな正解</text>
</svg>
<div class="figcap">あなたが集めるのは動画じゃない。視聴者が出した正解の数だ</div>
</div>
<p>バズを生む人は生まれつきセンスがあるんじゃない。<strong>正解を大量に見てきたから、何が当たるかが体に染み込んでいるだけだ。</strong></p>

<div class="flowbig">
<span>正解を大量に見る</span><span>共通点が浮かぶ</span><span>自分で試す</span><span class="is-goal">当たる確率が上がる</span>
</div>
<div class="warn">記録の目的は「いい動画コレクション」じゃない。<b>視聴者が出した正解パターンを、自分の手で再現できる形に変えることだ。</b>動画を集めるのはその手段でしかない。</div>

<h2><span class="s">1</span>当てにいくと外れ、観察すると当たる</h2>
<div class="vs">
<div class="l"><div class="t">✗ 当てにいく＝博打</div>頭の中の「面白いはず」だけで投稿。当たるかは運。外れても理由が分からず、次も運任せ。</div>
<div class="r"><div class="t">○ 観察する＝再現</div>当たってる動画の共通点をマネる。理由が分かるから外れても原因が見える。打つたび精度が上がる。</div>
</div>
<p>サッカーが上手い子は、ボールを蹴った回数が多いだけだ。<strong>上達は才能じゃなく触れた回数で決まる。</strong>何が伸びてるかを見た回数が多い人ほど、何を作れば伸びるかが感覚でわかる。</p>
<div class="key">バズの確率は、見てきた<strong>「正解の総量」に比例する。</strong>記録は当てる場じゃなく、正解を毎日少しずつ貯める装置。だから1日1本でいい。</div>
<p><b>プロの打者ほど、相手を研究してから打席に立つ。</b>正解の形を50本見ておけば、自分が打つ時に「どこを狙うか」が最初からわかってる。あなたはその研究を「記録」という形でやるだけだ。</p>

<h2><span class="s">2</span>1本は「点」、30本で「線」になる</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="点と線">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 1本＝点</text>
<circle cx="30" cy="70" r="6" fill="#a0aec0"/><circle cx="70" cy="50" r="6" fill="#a0aec0"/><circle cx="110" cy="85" r="6" fill="#a0aec0"/><circle cx="95" cy="40" r="6" fill="#a0aec0"/>
<text x="79" y="115" text-anchor="middle" font-size="11" fill="#718096">たまたまか必然か不明</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="245" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 30本＝線</text>
<polyline points="186,95 216,80 246,62 276,42 304,28" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="186" cy="95" r="5" fill="#2b6cb0"/><circle cx="216" cy="80" r="5" fill="#2b6cb0"/><circle cx="246" cy="62" r="5" fill="#2b6cb0"/><circle cx="276" cy="42" r="5" fill="#2b6cb0"/><circle cx="304" cy="28" r="5" fill="#b83280"/>
<text x="245" y="115" text-anchor="middle" font-size="11" fill="#1e4e7e">設計図が浮かび上がる</text>
</svg>
<div class="figcap">点を30個打つと「このジャンルは結論が先」という線が見える</div>
</div>
<p>たまたま伸びた1本に飛びつくと再現できず「やっぱり才能か」と諦める。<strong>くり返し出てくる要素——つかみの型・長さ・効果音・字幕位置・タイトル——だけが、再現できる法則だ。</strong></p>

<h3>書いたものだけが、未来の自分に届く</h3>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="記憶と記録の違い">
<rect x="0" y="15" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="45" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">見ただけ</text>
<text x="75" y="68" text-anchor="middle" font-size="11" fill="#a0aec0">毎日リセット</text>
<text x="75" y="84" text-anchor="middle" font-size="11" fill="#a0aec0">＝流れて消える</text>
<rect x="170" y="15" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="45" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">書いた</text>
<text x="245" y="68" text-anchor="middle" font-size="11" fill="#1e4e7e">毎日積み上がる</text>
<text x="245" y="84" text-anchor="middle" font-size="11" fill="#1e4e7e">＝未来へ渡せる</text>
</svg>
<div class="figcap">記録は「1ヶ月後の自分への引き継ぎメモ」</div>
</div>
<div class="key">メモは凝らなくていい。メモアプリでも表計算でも紙でもいい。<strong>続けられる形が一番強い。</strong>きれいにまとめて3日でやめるより、雑でいいから毎日1行書け。</div>

<h2><span class="s">3</span>記録する4項目</h2>
<p>多すぎると続かない。少なすぎると役に立たない。この4つがちょうどいい。</p>
<table>
<tr><th>項目</th><th>書くこと</th><th>奥にある理由</th></tr>
<tr><td><b>リンク</b></td><td>動画リンクをそのまま貼る</td><td>探す手間をゼロに。見返さない記録は無いのと同じ</td></tr>
<tr><td><b>タイトル</b></td><td>見出しを15文字以内で</td><td>枠が「掴みの言葉」だけを強制的に抜き出させる</td></tr>
<tr><td><b>再生数</b></td><td>再生数・保存数の数字</td><td>普段との差を見る。差がないとマネする価値が判断できない</td></tr>
<tr><td><b>なぜ</b></td><td>バズった理由を1〜2行</td><td>仮説を書くから検証できる。外れても地図が1マス埋まる</td></tr>
</table>
<p>3つは見ればすぐ書ける。手が止まるのは<strong>「なぜ」</strong>だけだ。</p>

<h2><span class="s">4</span>一番むずかしい「なぜ」の書き方</h2>
<p>手が止まるのは「正解を当てなきゃ」と力むから。当てる必要はない、仮説でいい。思い浮かばなければ、この4つを上から順に見る。</p>

<div class="tc"><div class="hd">切り口1｜冒頭3秒</div><div class="bd">最初に何が映ってた？顔・文字・結論・意外な絵。<span class="lab">なぜ効く：</span>人は最初の一瞬で「見続ける価値があるか」を判断する。冒頭が弱いと中身が良くても見られない。</div></div>
<div class="tc"><div class="hd">切り口2｜コメント欄</div><div class="bd">「それな」「わかる」「知らなかった」が多い＝痛い所を突いてる。<span class="lab">なぜ効く：</span>コメントは視聴者の本音。想像でなく事実で「どこが刺さったか」が分かる。</div></div>
<div class="tc"><div class="hd">切り口3｜タイトルの言葉</div><div class="bd">数字で言い切る／「それは間違い」と否定／「知ってる？」と問いかけ。<span class="lab">なぜ効く：</span>言葉の型はジャンルが違っても流用できる。型は資産になる。</div></div>
<div class="tc"><div class="hd">切り口4｜字幕（テロップ）</div><div class="bd">位置・色・文字の形・何文字で切ってるか。<span class="lab">なぜ効く：</span>多くの人は音を消して見る。字幕の見やすさが最後まで見るかを左右する。</div></div>

<h3>いい仮説＝「自分でそのまま試せる言葉」か</h3>
<div class="vs">
<div class="l"><div class="t">✗ 真似できない</div>「センスがあった」「なんか良かった」「テンポが良かった」→ 次に何をすればいいか分からない</div>
<div class="r"><div class="t">○ 真似できる</div>「最初の1秒で大きい文字」「1カット2秒以内で次々切り替わる」→ 次に自分がそのまま再現できる</div>
</div>
<div class="key">仮説の価値は<strong>「明日の自分が動けるかどうか」</strong>で決まる。フワッとした感想は、書いた瞬間に役目を終える。</div>
<div class="note">つまずきポイント：「外れたら意味がない」と不安で書くのをやめる。逆だ。最初は半分外れる。それでいい。外れたら「この型はこのジャンルでは効かない」という発見になる。当たっても外れても地図が1マス埋まる。</div>

<h2><span class="s">5</span>良い記録と悪い記録</h2>
<div class="vs">
<div class="l"><div class="t">✗ 悪い記録＝感想</div>「この動画めっちゃ伸びてた、面白い」<br>→ 1ヶ月後に見て「で？」となる。なぜ伸びたかが1個も無い。</div>
<div class="r"><div class="t">○ 良い記録＝次に使える</div>「冒頭で結論を言い切ってた。コメントは知らなかったが多い。知識の意外性で伸びたと見た」<br>→ 次に同じ型を試せる。検証できる。</div>
</div>
<div class="key">記録の価値は<strong>「後から取り出して使えるか」</strong>で決まる。感想は使えない、仮説は次の動画に化ける。だから同じ1本でも書き方で価値が天と地に分かれる。</div>

<h3>こういう集め方は効かない</h3>
<div class="bad"><b>✗ ジャンル違いを集める</b> 料理で伸びたいのに、おもしろ動物ばかり記録する。受ける理由はジャンルごとに別物。点が散らばると線にならない。集めるのは自分が伸ばしたいジャンルだけ。</div>
<div class="bad"><b>✗ 大物だけ集める</b> フォロワーが何十万もいる人は内容が普通でも伸びる。伸びた理由は「内容」でなく「ファンの数」だから真似できない。マネすべきは自分と近い規模なのに飛び抜けた動画。</div>

<h2><span class="s">6</span>そもそもバズ動画はどう見つける</h2>
<div class="step">
<div><span class="n">1</span>おすすめ欄を眺める：ジャンルの動画を毎日少し見ると、アプリが似た動画を出す。再生数が飛び抜けたのを拾う。</div>
<div><span class="n">2</span>ジャンルの言葉で検索：「料理 時短」などで検索。上位＝多くの人が選んだ正解。手っ取り早い。</div>
<div><span class="n">3</span>同じ規模の人を3人追う：近いフォロワー数の人をフォローし、普段より伸びた瞬間をメモる。</div>
</div>
<div class="key"><strong>③が一番おすすめ。</strong>普段5千再生の人が5万再生したら、その1本だけ何かを変えてる。"いつもの自分"があるから「いつもと何が違うか」が浮き彫りになる。<strong>変化点こそ、伸びた理由の一番濃いヒントだ。</strong></div>

<h2><span class="s">7</span>1本まるごと記録した実例</h2>
<div class="draft"><b>リンク：</b>（動画のリンクを貼る）<br><b>タイトル：</b>「卵焼き、火を止めてから巻け」<br><b>再生数：</b>8.2万（普段は5千くらい→今回だけ飛び抜けてる）<br><b>なぜバズったか：</b>冒頭1秒で「火を止めて」と常識の逆を言い切ってた。コメントは「知らなかった」「失敗してた理由これだ」が多い。<u>常識の逆＋失敗してた人の痛みを突いた</u>のが効いたと見た。字幕は画面下・白文字・短め。次に自分も「◯◯は逆」型の冒頭を試す。</div>
<p>このメモが効く理由。<strong>再生数の横に「普段5千」とあるから飛び抜けてると一目で分かる。</strong>「なぜ」はコメントという事実で裏を取り、最後に「次に◯◯は逆型を試す」と明日の行動まで書いてある。</p>
<div class="key">ポイントは下線。<strong>「常識の逆＋痛みを突く」</strong>という次に真似できる形まで言葉にしてる。ここまで落とすから1ヶ月後にネタに化ける。下線が引けないほどフワッとした記録は消える。</div>

<h2><span class="s">8</span>頻度と、たまっていく順番</h2>
<p>頻度は<strong>毎日1本でいい</strong>。見てメモるのは数分。歯磨きと同じで、習慣にできる小ささだから続く。</p>
<div class="vs">
<div class="l"><div class="t">✗ 週末まとめて10本</div>見るのが作業になり仮説が雑になる。1本ずつ向き合う時間がないと脳は「なぜ」を考えられない。</div>
<div class="r"><div class="t">○ 毎日1本ていねいに</div>朝、家事の合間に1本見る。寝る前に1行メモる。結局これが一番たまるし身につく。</div>
</div>

<div class="tl">
<div class="slot"><span class="time">1〜5本</span><div class="w2">パターンは全然見えない。<b>それでいい</b>。点が5個では線は見えない。</div></div>
<div class="slot"><span class="time">10本</span><div class="w2">「最初に結論を言う動画が多いな」と<b>小さい気づき</b>が出る。</div></div>
<div class="slot"><span class="time">30本</span><div class="w2">気づきが<b>確信</b>に。冒頭・長さ・字幕位置まで要素がはっきりする。</div></div>
<div class="slot"><span class="time">50本</span><div class="w2">見た瞬間に<b>伸びる/伸びないが当たる</b>。もう作る側に回れる。</div></div>
</div>
<div class="warn">パターンは点が一定数を超えると<b>急に</b>見え始める。5本でいくら凝視しても線は引けない。だが30本を超えると突然つながる瞬間が来る。<strong>最低30本までは「見えなくて当たり前」と割り切って淡々と続ける。</strong>ここが分かれ道。</div>

<h2><span class="s">9</span>検品：感想で終わってないか</h2>
<div class="check"><ul>
<li>集めてるのは「自分が伸ばしたいジャンル」のバズか</li>
<li>再生数は「そのアカウントの普段」と比べたか</li>
<li>「なぜバズったか」を1〜2行で書いたか（感想で終わってないか）</li>
<li>その仮説は「自分でそのまま試せる言葉」か</li>
<li>冒頭3秒・コメント・タイトル・字幕のどれかを見たか</li>
<li>リンクは1か所にまとめたか／今日の1本、もうメモったか</li>
</ul></div>
<div class="end">バズは才能じゃない。観察と記録の量だ。<br>だから——ゼロから当てにいくな。<strong>すでに当たってる正解を、観察しろ。</strong><br>50本たまる頃には、当てる側でなく"作れる側"に回っている。</div>
</div>
  `,

  'p2-templates': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>発信が続かない本当の原因＝「ネタ切れ」じゃなく「毎回ゼロから考える疲れ」</li>
<li>型を持つと続く理由と、伸びを再現できる理由</li>
<li>動画構成の3つの型（悩み解決・変化・まとめ）と、なぜその順番か</li>
<li>キャプションの組み方とタグの混ぜ方</li>
<li>撮る前に悩まなくなる「鉄板フック3つ」の作り方</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ゼロから考える発信と型に乗る発信の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 毎回ゼロから</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 型に乗る</text>
<path d="M40 110 q35 -55 70 -60" stroke="#a0aec0" stroke-width="3" fill="none"/>
<circle cx="40" cy="110" r="5" fill="#a0aec0"/>
<text x="79" y="78" text-anchor="middle" font-size="11" fill="#718096">坂を歩いて登る</text>
<text x="79" y="138" text-anchor="middle" font-size="11" fill="#718096">毎回消耗する</text>
<line x1="186" y1="112" x2="304" y2="52" stroke="#cbd5e0" stroke-width="6" stroke-linecap="round"/>
<rect x="240" y="70" width="22" height="14" rx="3" fill="#2b6cb0"/>
<circle cx="246" cy="86" r="4" fill="#1e4e7e"/><circle cx="258" cy="80" r="4" fill="#1e4e7e"/>
<text x="241" y="115" text-anchor="middle" font-size="11" fill="#1e4e7e">レールに乗って加速</text>
<text x="241" y="138" text-anchor="middle" font-size="11" fill="#1e4e7e">中身だけに集中</text>
</svg>
<div class="figcap">同じ目的地でも、消耗とスピードがまるで違う</div>
</div>

<div class="key">発信で消える人は、ネタが尽きたんじゃない。<strong>毎回ゼロから「どう撮る・何から話す・どう締める」を考えて疲れて消える。</strong>正解は型を持つこと。型は手抜きじゃなく、頭の体力を「中身」だけに全振りする省エネ装置だ。</div>

<h3>型のもう1つの強み＝「比べられる」</h3>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="型なしは比べられない型ありは比べられる">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 型なし</text>
<rect x="20" y="40" width="30" height="50" rx="4" fill="#cbd5e0"/>
<rect x="60" y="55" width="30" height="35" rx="4" fill="#a0aec0"/>
<rect x="100" y="30" width="30" height="60" rx="4" fill="#cbd5e0"/>
<text x="79" y="110" text-anchor="middle" font-size="11" fill="#718096">作りがバラバラ</text>
<text x="79" y="124" text-anchor="middle" font-size="11" fill="#718096">なぜ伸びたか不明</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="245" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 型あり</text>
<rect x="190" y="55" width="30" height="35" rx="4" fill="#9cb8d6"/>
<rect x="230" y="48" width="30" height="42" rx="4" fill="#2b6cb0"/>
<rect x="270" y="40" width="30" height="50" rx="4" fill="#b83280"/>
<text x="245" y="110" text-anchor="middle" font-size="11" fill="#1e4e7e">枠は同じ・中身だけ変わる</text>
<text x="245" y="124" text-anchor="middle" font-size="11" fill="#1e4e7e">どこが効いたか比べられる</text>
</svg>
<div class="figcap">同じ枠で繰り返すから「ものさし」になる</div>
</div>
<p>フックを変えたら止まる人が増えた、解決策を3つに絞ったら最後まで見られた——<strong>1つずつ検証できる。</strong>型は、運に頼らず伸びを再現するための「ものさし」だ。</p>
<div class="warn">型の目的はラクすることじゃない。<b>考える場所を中身に集中させ、伸びを再現できる状態をつくること。</b>ラクになるのは、その結果でしかない。</div>

<h2><span class="s">1</span>なぜ「型あり」は続いて伸びるのか</h2>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="頭の体力の使い道">
<text x="79" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 構成に消費</text>
<rect x="20" y="30" width="120" height="22" rx="6" fill="#a0aec0"/><text x="80" y="46" text-anchor="middle" font-size="11" fill="#fff">構成で悩む</text>
<rect x="20" y="58" width="55" height="22" rx="6" fill="#cbd5e0"/><text x="47" y="74" text-anchor="middle" font-size="10" fill="#718096">中身</text>
<text x="79" y="100" text-anchor="middle" font-size="11" fill="#718096">中身が薄くなる</text>
<line x1="160" y1="14" x2="160" y2="106" stroke="#e2e8f0"/>
<text x="245" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 中身に全振り</text>
<rect x="186" y="30" width="40" height="22" rx="6" fill="#9cb8d6"/><text x="206" y="46" text-anchor="middle" font-size="10" fill="#1e4e7e">型</text>
<rect x="186" y="58" width="118" height="22" rx="6" fill="#2b6cb0"/><text x="245" y="74" text-anchor="middle" font-size="11" fill="#fff">中身に集中</text>
<text x="245" y="100" text-anchor="middle" font-size="11" fill="#1e4e7e">中身が濃くなる</text>
</svg>
<div class="figcap">構成を型に任せた分、体力をまるごと中身に回せる</div>
</div>
<p>型は料理のレシピと同じ。<strong>迷うのは味付け（中身）だけでよくなる。</strong>頭の体力には限りがある。構成に使い切れば肝心の中身が薄くなる。</p>

<h3>守って、慣れて、それから崩す</h3>
<div class="flow">
<span>まず型通り</span><span>10本で体に入れる</span><span>慣れてから崩す</span>
</div>
<p>初心者がいきなり崩すと、ただの「型なし」に戻る。<strong>基準が体にないうちに自由にやると自己流で終わる。</strong>武道の守破離と同じ。最初は徹底的に真似て、慣れてから少しずつ外す。順番を飛ばすと形にならない。</p>

<h2><span class="s">2</span>動画構成テンプレ①：悩み→解決型</h2>
<p>中身は「悩みを出して、答えを渡す」だけ。一番つぶしが効く基本の型。やり方を教える系はほぼこれで作れる。</p>
<div class="fig"><div class="tl">
<div class="slot"><span class="time">0-3秒</span><div class="w2"><b>① フック</b>／「自分のことだ」と止めさせる</div></div>
<div class="slot"><span class="time">3-10秒</span><div class="w2"><b>② 共感</b>／「私も同じだった」で距離を縮める</div></div>
<div class="slot"><span class="time">10-40秒</span><div class="w2"><b>③ 解決</b>／具体策を3つに分けて渡す（本体）</div></div>
<div class="slot"><span class="time">最後5秒</span><div class="w2"><b>④ CTA</b>／「保存して後で見返してね」</div></div>
</div></div>
<div class="good"><b>○ 例</b>「毎月赤字で悩んでた私が、家計を立て直せた方法を話します。まず最初にやったのが、固定費の見直し。スマホ代を格安プランに替えただけで…」</div>

<div class="vfig">
<svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="心が開く順">
<rect x="6" y="35" width="66" height="34" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="39" y="56" text-anchor="middle" font-size="11" fill="#1e4e7e">悩みを出す</text>
<rect x="92" y="35" width="66" height="34" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="125" y="52" text-anchor="middle" font-size="11" fill="#1e4e7e">私も同じ</text><text x="125" y="65" text-anchor="middle" font-size="10" fill="#2b6cb0">警戒が解ける</text>
<rect x="178" y="35" width="66" height="34" rx="8" fill="#fff" stroke="#2b6cb0"/><text x="211" y="52" text-anchor="middle" font-size="11" fill="#2b6cb0">心が開く</text>
<rect x="252" y="35" width="62" height="34" rx="8" fill="#2b6cb0"/><text x="283" y="56" text-anchor="middle" font-size="11" fill="#fff">答えが入る</text>
<path d="M74 52 l16 0" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<path d="M160 52 l16 0" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<path d="M246 52 l4 0" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="160" y="92" text-anchor="middle" font-size="11" fill="#718096">順番は「届く順」でなく「心が開く順」</text>
</svg>
<div class="figcap">いきなり解決から入る人が伸びないのは、心を開く前に答えを渡すから</div>
</div>
<p>初対面でいきなりアドバイスされても耳に入らないが、「実は私も昔こうで」と前置きされると素直に聞ける。<strong>人は上から教える相手に心を閉じ、同じ目線で並ぶ相手に心を開く。</strong></p>
<div class="warn">つまずき：解決策を5個6個詰め込むと1個ずつ薄くなる。<b>3つに絞る。</b>「節約のコツ」なら固定費・サブスク・コンビニ通いの3つ。1項目10秒以内でテンポよく。</div>

<h2><span class="s">2</span>動画構成テンプレ②：変化型（先に結果を見せる）</h2>
<p>「変わる前・変わった後」を見せる型。ダイエット、収入、肌、スキル。<strong>結果を一番最初に見せるのがキモ。</strong></p>
<div class="fig"><div class="tl">
<div class="slot"><span class="time">①</span><div class="w2"><b>変わった後を先見せ</b>／ゴールの姿をいきなり最初に出す</div></div>
<div class="slot"><span class="time">②</span><div class="w2"><b>変わる前</b>／「昔はこんなにダメだった」とギャップ</div></div>
<div class="slot"><span class="time">③</span><div class="w2"><b>きっかけ</b>／何をして変われたのかを話す</div></div>
<div class="slot"><span class="time">④</span><div class="w2"><b>CTA</b>／「同じ方法はプロフから」</div></div>
</div></div>

<div class="vs">
<div class="l"><div class="t">✗ 順番通り</div>昔こうで…色々あって…結果こうなった。結果が出る前に飽きて離脱する。</div>
<div class="r"><div class="t">○ 結果先出し</div>先にゴールを見せる→「どうやって?」が生まれ、最後まで見たくなる。</div>
</div>
<div class="good"><b>○ 例</b>「半年でここまで変わった。正直こんなに変われると思ってなかった。何年もダイエットに失敗し続けた私がやった、たった2つのことを話します」</div>
<p>マンガの第1話で結末をチラ見せするのと同じ仕掛け。先が分かっているのに過程が気になってつい見てしまう。<strong>人は答えを先に見せられると、かえって"間"を埋めたくなる。</strong></p>
<div class="key">変化型は「数字や見た目でビフォーアフターが出せる時」だけ強い。<strong>引力の燃料は"見えるギャップ"。</strong>ギャップを見せられない知識系に無理に使うと空回りする。その時は①悩み解決型か③まとめ型を使う。</div>

<h2><span class="s">3</span>動画構成テンプレ③：まとめ型（〇〇選）</h2>
<p>「〇〇選」でおなじみのアレ。一番保存されやすく、まとめ・ライフハック系で強い。<strong>見る側の頭に箱を作ってあげるのが役目だ。</strong></p>
<div class="fig"><div class="tl">
<div class="slot"><span class="time">①</span><div class="w2"><b>フック</b>／「〇〇選」と数を宣言。「全部で3つ」と分かると安心して見れる</div></div>
<div class="slot"><span class="time">②</span><div class="w2"><b>本体</b>／3〜5個。1項目10秒以内でテンポよく連打</div></div>
<div class="slot"><span class="time">③</span><div class="w2"><b>CTA</b>／「保存して全部試してみて」</div></div>
</div></div>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="数を区切ると頭に箱ができる">
<rect x="14" y="30" width="44" height="44" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="36" y="58" text-anchor="middle" font-size="16" fill="#2b6cb0">①</text>
<rect x="68" y="30" width="44" height="44" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="90" y="58" text-anchor="middle" font-size="16" fill="#2b6cb0">②</text>
<rect x="122" y="30" width="44" height="44" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="144" y="58" text-anchor="middle" font-size="16" fill="#2b6cb0">③</text>
<text x="90" y="96" text-anchor="middle" font-size="11" fill="#1e4e7e">箱が見える→全部埋めたい→保存</text>
<line x1="190" y1="20" x2="190" y2="90" stroke="#e2e8f0"/>
<path d="M210 35 q40 5 90 0" stroke="#a0aec0" stroke-width="2" fill="none"/>
<path d="M210 52 q40 8 90 -2" stroke="#cbd5e0" stroke-width="2" fill="none"/>
<path d="M210 68 q40 -6 90 4" stroke="#a0aec0" stroke-width="2" fill="none"/>
<text x="255" y="96" text-anchor="middle" font-size="11" fill="#718096">垂れ流し→「へぇ」で流れる</text>
</svg>
<div class="figcap">数の区切りは、相手の頭に"持ち帰る器"を渡す行為</div>
</div>
<div class="good"><b>○ 例</b>「副業インスタ、伸びてる人がやってること3選。1つ目は投稿時間を固定する。2つ目は1投稿1メッセージに絞る。3つ目は最初の1行を質問にする。これ全部やったら変わる、保存して」</div>
<p>保存は、インスタやスレッズの運営側に「価値ある投稿だ」と伝わる強い行動の1つ。だから「保存される型」を1つ持っておくと伸びの底上げになる。</p>
<div class="warn">つまずき：「10選」と数を盛りすぎると動画が長くなって最後まで見られない。<b>まずは3選。</b>箱が多すぎると「全部やるのは無理」とかえって保存されない。1つ目から濃く、テンポを落とさず連打。</div>

<h2><span class="s">4</span>3つの型の使い分け早見表</h2>
<p>ネタができたら、まず「これはどの型か?」を決める。迷ったらこの表。</p>
<table>
<tr><th>型</th><th>こういう時に使う</th><th>例ジャンル</th></tr>
<tr><td>① 悩み→解決</td><td>ノウハウ系・やり方を教える系。教育の王道</td><td>お金・勉強・仕事術</td></tr>
<tr><td>② 変化型</td><td>変わる前後が見せられる時。数字や見た目で差が出る</td><td>ダイエット・収入・肌・スキル</td></tr>
<tr><td>③ まとめ型</td><td>保存されやすい。まとめ・ライフハック系で強い</td><td>〇〇選・神アプリ・コツ集</td></tr>
</table>
<div class="key">先に型を決めれば、残りは枠に中身を流し込むだけ。<strong>判断の数が減るほど手は止まらない。</strong>まずは自分のジャンルで一番ハマる1つを10本やって体に入れてから、次の型に手を出す。</div>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1個のネタが3本になる">
<rect x="118" y="8" width="84" height="30" rx="8" fill="#b83280"/><text x="160" y="28" text-anchor="middle" font-size="12" fill="#fff">ネタ「早起き」</text>
<path d="M150 38 l-70 38" stroke="#a0aec0" stroke-width="2" marker-end="url(#a3)"/>
<path d="M160 38 l0 38" stroke="#a0aec0" stroke-width="2" marker-end="url(#a3)"/>
<path d="M170 38 l70 38" stroke="#a0aec0" stroke-width="2" marker-end="url(#a3)"/>
<defs><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#a0aec0"/></marker></defs>
<rect x="8" y="78" width="96" height="34" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="56" y="93" text-anchor="middle" font-size="10" fill="#1e4e7e">①続けるコツ</text><text x="56" y="106" text-anchor="middle" font-size="10" fill="#2b6cb0">悩み解決</text>
<rect x="112" y="78" width="96" height="34" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="160" y="93" text-anchor="middle" font-size="10" fill="#1e4e7e">②朝型になった話</text><text x="160" y="106" text-anchor="middle" font-size="10" fill="#2b6cb0">変化</text>
<rect x="216" y="78" width="96" height="34" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="264" y="93" text-anchor="middle" font-size="10" fill="#1e4e7e">③続く人3選</text><text x="264" y="106" text-anchor="middle" font-size="10" fill="#2b6cb0">まとめ</text>
</svg>
<div class="figcap">ネタは1個でも、型を変えれば3本撮れる。これがネタ切れしない正体</div>
</div>

<h2><span class="s">5</span>キャプション（投稿文）の基本構成</h2>
<p>動画ができたら次は投稿文。ここも型がある。<strong>ゼロから書かない。</strong></p>
<div class="fig"><div class="tl">
<div class="slot"><span class="time">1行目</span><div class="w2"><b>フック</b>／中身を1行で要約。ここで読むか決まる</div></div>
<div class="slot"><span class="time">2〜3行</span><div class="w2"><b>本文</b>／補足・具体例。動画で言い切れなかった部分</div></div>
<div class="slot"><span class="time">最後</span><div class="w2"><b>CTA</b>／保存・DM・フォローのどれか1つに絞る</div></div>
<div class="slot"><span class="time">タグ</span><div class="w2"><b>5〜10個</b>／ニッチと広めを混ぜる</div></div>
</div></div>
<div class="good"><b>○</b>1行目「毎月赤字だった私が貯金できた理由」→本文「やったのは固定費の見直しだけ」→CTA「保存して今月からやってみて」</div>
<div class="bad"><b>✗</b>1行目から「こんにちは、今日もご覧いただきありがとうございます」。誰の悩みにも刺さらず、1行目で読むのをやめられる。</div>
<p><strong>挨拶は読み手にとって何の情報でもない。</strong>「自分に関係あるか」を一瞬で判断したい相手に関係ない一言を置けば、その一瞬を無駄にして閉じられる。1行目は読み手が自分を見つける場所にする。</p>

<h3>タグの混ぜ方</h3>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="広いタグとニッチタグの役割">
<rect x="6" y="20" width="148" height="76" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="80" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">広いタグ #節約</text>
<text x="80" y="62" text-anchor="middle" font-size="11" fill="#a0aec0">人が多い＝"数"</text>
<text x="80" y="80" text-anchor="middle" font-size="11" fill="#a0aec0">競争激しくすぐ流れる</text>
<rect x="166" y="20" width="148" height="76" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="240" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">ニッチ #手取り20万円台</text>
<text x="240" y="62" text-anchor="middle" font-size="11" fill="#2b6cb0">見る人少ない＝"濃さ"</text>
<text x="240" y="80" text-anchor="middle" font-size="11" fill="#2b6cb0">自分ごと度が高い</text>
</svg>
<div class="figcap">広めで露出を取り、ニッチで「これを探してた人」に届ける</div>
</div>
<p>全部デカいタグだと埋もれる。全部ニッチだと誰も検索しない。<strong>広め2〜3個＋ニッチ5〜7個。</strong>役割が違うから混ぜる。節約ネタなら、広めは「#節約」「#貯金」、ニッチは「#一人暮らし節約」「#手取り20万円台」「#固定費見直し」。</p>

<h2><span class="s">6</span>★よく使うフック型を3つ「保存」する</h2>
<p>この章のゴール。動画の型より細かい「最初の1行（フック）」だけの型を、自分用に3つ決めて保存する。<strong>フックは動画の生死を分ける一番大事なパーツ。</strong></p>
<div class="key">撮影の手が止まる原因の多くは、本体でなく「最初の1行が決まらないこと」。<strong>一番大事で一番悩むパーツを先に用意すれば、撮る前の停滞が消える。</strong></div>
<div class="tc"><div class="hd">フック型A｜損させる（一番万能）</div><div class="bd"><span class="lab">「〇〇な人、これ知らないと損」</span><br>「貯金したい人、この固定費だけは今すぐ見直して」。人は得より損に強く反応する。①悩み解決型と相性抜群。</div></div>
<div class="tc"><div class="hd">フック型B｜結果先出し</div><div class="bd"><span class="lab">「〇〇できた、たった〇つのこと」</span><br>「家計を立て直せた、たった2つのこと」。先に結果を見せて「どうやって?」を作る。②変化型のフックそのもの。</div></div>
<div class="tc"><div class="hd">フック型C｜数で約束</div><div class="bd"><span class="lab">「〇〇な人が絶対やってること3選」</span><br>数を宣言すると頭に箱ができて持ち帰りたくなる。③まとめ型のフック。保存されやすい。</div></div>
<div class="tc"><div class="hd">フック型D｜逆張り・意外性</div><div class="bd"><span class="lab">「実は〇〇は逆効果」「〇〇、やめていい」</span><br>「毎日投稿、実はやめていい」など。思い込みと食い違う情報は、確かめたくてスクロールが止まる。</div></div>
<div class="tc"><div class="hd">フック型E｜痛みの情景</div><div class="bd"><span class="lab">具体的な「あの瞬間」を描く</span><br>「給料日に通帳見てため息ついてない?」。画が浮かぶと自分ごと化が一気に進む。</div></div>
<div class="note">5つに共通する仕掛けは1つ。<strong>「これは自分の話だ」と一瞬で気づかせること。</strong>損・結果・数・意外性・情景は、その気づきを起こす入り方が違うだけだ。</div>
<div class="step"><span class="sn">手順</span><span class="snm">フックを3つ保存する</span>
<p>① A〜Eから自分のジャンルで言えそうなものを3つ選ぶ → ② 〇〇を自分の言葉で埋めて実際の1行にする → ③ スマホのメモに「鉄板フック3つ」として保存。たとえば節約なら、Aで「ボーナス入った人、使う前にこれだけは読んで」、Bで「半年で貯金体質になれた、たった2つの習慣」、Cで「お金が貯まらない人がやめたこと3選」。</p></div>
<div class="warn">選ぶコツ：使う型に合わせる。①が多いならA、②ならB、③ならC。プラスでD（逆張り）かE（情景）を1つ持つと動画が単調にならない。<b>同じフックばかりだと見る側が「またこれか」と慣れて止まらなくなる。</b></div>

<h2><span class="s">7</span>1本まるごと作ってみる（実演）</h2>
<p>型を全部つなげると迷わず1本撮れる。「副業の始め方」を①悩み解決型で組む。</p>
<div class="step"><span class="sn">STEP1</span><span class="snm">型を決める</span><br>→ ノウハウ系だから <b>①悩み→解決型</b></div>
<div class="step"><span class="sn">STEP2</span><span class="snm">保存したフックをあてはめる</span><br>→ フック型A（損させる）「副業やりたいけど一歩が出ない人、これ知らないと一生始められない」</div>
<div class="step"><span class="sn">STEP3</span><span class="snm">共感を入れる</span><br>→ 「私も長いこと"いつか始めよう"で止まってた」</div>
<div class="step"><span class="sn">STEP4</span><span class="snm">解決を3つに絞る</span><br>→ 「①完璧を目指さない ②スマホ1台で始める ③まず1本出す」</div>
<div class="step"><span class="sn">STEP5</span><span class="snm">CTAで締める</span><br>→ 「この3つ、保存して今日中に①だけやってみて」</div>
<div class="final">
（フック）副業やりたいけど一歩が出ない人、これ知らないと一生始められないよ。<br><br>
（共感）私も長いこと「いつか始めよう」で止まってた。完璧な準備ができてから、っていつまで経っても来ないんよね。<br><br>
（解決）抜け出せたのは3つ意識してから。1つ目、完璧を目指さない。最初の1本は下手で当たり前。2つ目、スマホ1台で始める。機材も編集ソフトもいらない。3つ目、とにかくまず1本出す。考えてる時間より、出して気づくことの方が多い。<br><br>
（CTA）この3つ、保存して今日中に1つ目だけやってみて。一歩出した人から変わるよ。
</div>
<div class="vfig">
<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="持ち帰りは3つ動かすのは1つ">
<rect x="10" y="28" width="120" height="38" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="70" y="46" text-anchor="middle" font-size="11" fill="#1e4e7e">持ち帰り</text><text x="70" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#2b6cb0">3つでいい</text>
<path d="M134 47 l30 0" stroke="#b83280" stroke-width="2" marker-end="url(#a4)"/>
<defs><marker id="a4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<rect x="170" y="28" width="140" height="38" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="240" y="46" text-anchor="middle" font-size="11" fill="#8a4a6e">動かすのは</text><text x="240" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">1つに絞る</text>
</svg>
<div class="figcap">「全部やって」は重くて動けない。1つに絞ると「それくらいなら」と腰が上がる</div>
</div>
<div class="key">ゼロから考えた部分はほぼない。型に沿って、保存したフックを入れて、中身を埋めただけ。<strong>これが「毎回ゼロから考えなくていい」の正体だ。</strong>頭を使ったのは「副業の3つのコツ」という中身だけ。慣れれば1本5分で構成が決まる。</div>

<h2><span class="s">8</span>検品：ゼロから考えてないか</h2>
<div class="check"><ul>
<li>☐ どの型で作るか、先に決めた?（①悩み解決／②変化／③まとめ）</li>
<li>☐ 最初の3秒のフックは、保存した3つから選んだ?</li>
<li>☐ 解決やリストは3つに絞った?</li>
<li>☐ 最後にCTA（保存・フォロー・DM）を1つに絞った?</li>
<li>☐ キャプション1行目はフックから始まってる?（挨拶になってない?）</li>
<li>☐ タグは広め＋ニッチを混ぜて5〜10個?</li>
<li>☐ 今回の1本で「次に検証したいこと」を1つ決めた?</li>
</ul></div>
<div class="end">毎回ゼロから考える人は、ネタじゃなく"疲れ"で消える。<br>だから——気合で続けようとするな。<strong>型に乗れ。</strong><br>頭は中身にだけ使い、構成は型に任せる。続いた人だけが、伸びを再現できる。</div>
</div>
  `,

  'p2-pre': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>伸びない原因の大半は「中身」じゃなく「出し方」だという事実</li>
<li>投稿を「作る→確認→投稿→直後30分」の4段階で回す手順</li>
<li>動画・音源・タグ・キャプション・時間の投稿前チェック</li>
<li>投稿の7ステップ（最後の「Facebook OFF」まで）</li>
<li>伸びがほぼ決まる、投稿直後30分の初速アクション</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="中身と出し方の比較">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">中身を10点に</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">出し方の抜けを0に</text>
<circle cx="79" cy="78" r="30" fill="#cbd5e0"/>
<text x="79" y="84" text-anchor="middle" font-size="20" font-weight="700" fill="#fff">+</text>
<text x="79" y="132" text-anchor="middle" font-size="11" fill="#718096">努力の割に効かない</text>
<rect x="216" y="56" width="50" height="44" rx="8" fill="#2b6cb0"/>
<path d="M226 78 l8 9 l16 -18" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
<text x="241" y="132" text-anchor="middle" font-size="11" fill="#1e4e7e">よっぽど効く</text>
</svg>
<div class="figcap">凝った動画を作る前に、出し方の抜けをゼロにしろ</div>
</div>

<div class="key">伸びない原因の大半は、動画の中身じゃない。<strong>「出し方の詰めの甘さ」だ。</strong>音源の入れ忘れ、雑なタグ、ズレた投稿時間、出した後の放置。1つずつは小さいが、1つ抜けるだけでリーチは落ちる。</div>

<div class="flowbig">
<span>作る</span><span>確認</span><span>投稿</span><span class="is-goal">直後30分</span>
</div>
<p>投稿はこの<strong>4段階</strong>。作って終わりじゃない。<strong>出した後の30分までが投稿だ。</strong>どこか1つ手を抜くと、それまでの努力が全部死ぬ。</p>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="料理のたとえ">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="75" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">最高の味</text>
<text x="75" y="74" text-anchor="middle" font-size="11" fill="#8a4a6e">＝中身は良い</text>
<text x="160" y="65" text-anchor="middle" font-size="18" fill="#a0aec0">＋</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="245" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">雑な盛り付け</text>
<text x="245" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">冷めたタイミング</text>
<text x="245" y="86" text-anchor="middle" font-size="11" fill="#a0aec0">＝箸をつけない</text>
</svg>
<div class="figcap">中身が最高でも、出し方が雑なら「冷めた料理」になる</div>
</div>
<p>チェックリストの本質は<strong>「やる気に頼らない仕組み」</strong>。頭の中だけで確認すると、気分や疲れで必ず抜ける。段階に切って見る所を決めれば、毎回同じ品質で出せる。慣れれば指が覚えて短く終わる。</p>

<div class="warn"><b>✗ よくある失敗</b>「急いでるからチェックは飛ばそう」。この1回が一番伸びない。急いでる日ほど手が雑になり、音量を絞り忘れる・Facebook連携をOFFにし忘れる。<strong>例外を作った瞬間にチェックリストは死ぬ。</strong>忙しい日こそ、上から1本通す。</div>

<h2><span class="s">1</span>動画の最終確認（3点）</h2>
<p>投稿ボタンを押す前に、効く順に3つだけ見る。多いほど確認が面倒になって手が止まるからだ。</p>

<div class="flow">
<span>① 冒頭1秒</span><span>② 音量</span><span>③ 文字</span>
</div>
<div class="figcap">「離脱が起きる順」に確認する。冒頭で止まらなければ音も文字も届かない</div>

<div class="tc"><div class="hd">① 冒頭1秒で止まるか</div><div class="bd"><span class="lab">一番大事</span>
頭から再生して<strong>1秒以内に「お、なにこれ」と思えるか</strong>。人はインスタを流し見してて、最初の1秒で見る価値を値踏みする。ここで「なし」と判断されたら中身は再生されない。<br><br>コツは<b>他人の動画だと思って見る</b>こと。一度スマホを置き、初見のつもりで頭の1秒だけ見直す。気にならなければ冒頭を差し替える。

<div class="vs"><div class="l"><div class="t">✗ 弱い</div>「毛穴のケア方法を紹介します」（前置き）</div><div class="r"><div class="t">○ 止まる</div>「毛穴、消す順番これ逆だよ」（結論・意外性）</div></div>
人は「自分が間違ってるかも」と思った瞬間に手を止める。</div></div>

<div class="tc"><div class="hd">② SE（効果音）の音量</div><div class="bd"><span class="lab">声が主役</span>
<strong>声＝しっかり聞こえる、効果音＝控えめ。</strong>引き込むのは声が運ぶ中身。効果音が大きいと声が埋もれ、伝わらず離脱する。<br><br>確認は<b>イヤホンを外し、スピーカーだけで聞く</b>。多くの人は「ながら見」だ。その状態で声がはっきり聞こえれば合格。迷ったら効果音は下げる方に倒す。<strong>下げすぎて困ることはないが、大きすぎると致命傷。</strong></div></div>

<div class="tc"><div class="hd">③ テロップ・文字</div><div class="bd"><span class="lab">見た目の信頼</span>
文字が雑だと「素人の動画」と一瞬でバレる。<strong>見た目の雑さは、中身の信頼まで巻き添えにする。</strong>次の5点：<br>・誤字脱字なし（声と文字がズレてないか）<br>・画面の端で切れてない（特に下、再生バーに隠れる位置）<br>・フォントは太めの見やすいもの<br>・縁取りか影をつける（背景に溶けない）<br>・1画面1〜2行まで<br><br>「1画面1〜2行」は、流し見で文字が多いと読む前に飛ばされるから。一目で頭に入る量に削るほど読まれる。</div></div>

<h2><span class="s">2</span>トレンド音源を入れる</h2>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="音源が広げる入口">
<rect x="118" y="44" width="84" height="32" rx="8" fill="#2b6cb0"/>
<text x="160" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">同じ音源</text>
<path d="M118 60 L70 30" stroke="#9cb8d6" stroke-width="2" marker-end="url(#a2)"/>
<path d="M118 60 L60 60" stroke="#9cb8d6" stroke-width="2" marker-end="url(#a2)"/>
<path d="M118 60 L70 90" stroke="#9cb8d6" stroke-width="2" marker-end="url(#a2)"/>
<path d="M202 60 L256 30" stroke="#b83280" stroke-width="2" marker-end="url(#a2b)"/>
<path d="M202 60 L262 60" stroke="#b83280" stroke-width="2" marker-end="url(#a2b)"/>
<path d="M202 60 L256 90" stroke="#b83280" stroke-width="2" marker-end="url(#a2b)"/>
<defs>
<marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#9cb8d6"/></marker>
<marker id="a2b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker>
</defs>
<text x="40" y="108" text-anchor="middle" font-size="10" fill="#718096">他の動画</text>
<text x="280" y="108" text-anchor="middle" font-size="10" fill="#b83280">知らない人へ</text>
</svg>
<div class="figcap">同じ音源の動画はまとめて表示される。入口を自分から閉じるな</div>
</div>

<div class="key">トレンド音源の見つけ方：リール一覧で<strong>音源名の横に「↑」マーク</strong>がついているものが、今伸びてる音源。これを使う。</div>
<p>一番速いのは<b>参考にしてる伸びてる動画と同じ音源を使う</b>こと。すでに結果が出てるものに乗る。音源名をタップ→使った動画一覧が開く→「この音源を使う」を押す。</p>

<div class="step"><span class="sn">手順</span><span class="snm">投稿画面での音源の付け方</span>
<div class="draft">1.「音楽を追加」を開く<br>2. 使いたい音源を選ぶ（サビなど盛り上がる部分を指定）<br>3. <b>音量は最小（0〜5%）</b>に絞る</div>
<span class="note">音源は「広めるための札」として付けるだけ。聞かせたいのは自分の声だ。鳴ると声とケンカするから、ほぼ無音まで下げる。それでも「その音源を使った」事実は残り、広がる入口は確保できる。</span></div>

<div class="warn"><b>✗ やりがちなミス</b> 音源を付けたまま音量を下げ忘れ、「BGMがうるさくて声が聞こえない」になる。公開後は差し替えにくい。<strong>「音源を選ぶ」と「音量を絞る」は2つで1つの動作。</strong>選んだら、その手で続けて0〜5%まで絞る。</div>

<h2><span class="s">3</span>タグ（ハッシュタグ）</h2>
<p>タグは「この動画はこのジャンルです」とインスタに教える札。間違えると関係ない人に表示され、スルーされて「反応の悪い動画」と判定され広がりが止まる。基本は3つ。</p>

<table>
<tr><th>項目</th><th>目安</th><th>なぜ</th></tr>
<tr><td>個数</td><td>3〜5個</td><td>多いと内容と関係ないタグが混ざる</td></tr>
<tr><td>規模</td><td>投稿数が中くらい</td><td>大きすぎず小さすぎず、ちょうど見られる</td></tr>
<tr><td>選び方</td><td>参考アカウントから流用</td><td>伸びてる人のタグは外れにくい</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="タグの規模">
<rect x="0" y="22" width="100" height="86" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="50" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">大きすぎ</text>
<text x="50" y="68" text-anchor="middle" font-size="10" fill="#a0aec0">行列の最後尾</text>
<text x="50" y="86" text-anchor="middle" font-size="10" fill="#a0aec0">すぐ埋もれる</text>
<rect x="110" y="22" width="100" height="86" rx="10" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<text x="160" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">中くらい</text>
<text x="160" y="68" text-anchor="middle" font-size="10" fill="#2b6cb0">人がいて</text>
<text x="160" y="86" text-anchor="middle" font-size="10" fill="#2b6cb0">埋もれにくい</text>
<rect x="220" y="22" width="100" height="86" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="270" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">小さすぎ</text>
<text x="270" y="68" text-anchor="middle" font-size="10" fill="#a0aec0">裏路地の看板</text>
<text x="270" y="86" text-anchor="middle" font-size="10" fill="#a0aec0">誰も通らない</text>
</svg>
<div class="figcap">狙うのは中くらいの規模。件数の表示で見当をつけ、参考アカウントをマネる</div>
</div>

<div class="grp"><div class="gh">タグの基本ルール</div><div class="gb">
<div class="rule"><span class="rn">1 ジャンルに関係するものだけ</span><span class="gb2">無関係なタグで呼んでも反応せず広がりが止まる</span></div>
<div class="rule"><span class="rn">2 大きすぎるタグは避ける</span><span class="gb2">件数が多いタグはすぐ下へ埋もれる</span></div>
<div class="rule"><span class="rn">3 参考アカウントのタグを流用OK</span><span class="gb2">伸びてる人のタグはすでに当たりが出てる</span></div>
<div class="rule"><span class="rn">4 入れる場所はキャプション欄</span><span class="gb2">文章の後に改行して「#〇〇」と直接入力</span></div>
<div class="rule"><span class="rn">5 毎回少しずつ変える</span><span class="gb2">内容に合わせる。使い回しは内容とズレる</span></div>
</div></div>

<div class="vs">
<div class="l"><div class="t">✗ 雑なタグ</div>#インスタグラム #おすすめ #いいね返し #拡散希望 #フォロバ100<br>→ 大きすぎ・無関係・ジャンル不明。誰にも刺さらない。</div>
<div class="r"><div class="t">○ 整ったタグ（美容なら）</div>#毛穴ケア #スキンケア初心者 #乾燥肌対策<br>→ ジャンル一致・規模ちょうどいい・3〜5個。まっすぐ届く。</div>
</div>

<h2><span class="s">4</span>キャプション</h2>
<p>動画の下に出る文章。最後まで読む人は少ない。だから全部頑張らず、<strong>「1行目と最後の一言」だけに力を集める。</strong></p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="キャプションの力点">
<rect x="40" y="14" width="240" height="26" rx="6" fill="#2b6cb0"/>
<text x="160" y="31" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">1行目＝動画の要約（力を入れる）</text>
<rect x="40" y="48" width="240" height="18" rx="5" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="160" y="61" text-anchor="middle" font-size="10" fill="#a0aec0">中身＝補足を少しだけ（読まれない前提）</text>
<rect x="40" y="74" width="240" height="18" rx="5" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="160" y="87" text-anchor="middle" font-size="10" fill="#a0aec0">「もっと見る」で畳まれる</text>
<rect x="40" y="100" width="240" height="26" rx="6" fill="#b83280"/>
<text x="160" y="117" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">最後＝次の一言（力を入れる）</text>
</svg>
<div class="figcap">理想は3〜5行。言いたいことは畳まれる前に出し切る</div>
</div>

<p>最後に次の一言を入れる理由：<b>人は次に何をすればいいか言われないと動かない。</b>「いいな」と思った気持ちは数秒で消える。「保存してね」の一言で、消える前に指が動く。しかも保存はインスタが「役に立つ投稿」と判断する材料になる。</p>

<div class="tc"><div class="hd">キャプション完成例</div><div class="bd"><span class="lab">3〜5行</span>
<div class="draft">毛穴を目立たなくする方法3選🫧<br><br>毎日やってるのに毛穴が消えない人、順番が逆かも。<br>この3つを夜のケアに足すだけで変わる。<br><br>あとで見返せるように保存してね📌</div></div></div>

<div class="warn"><b>✗ 抜けやすい</b> 1行目を「こんにちは！今日は〜」で始める。挨拶は読み手に何の得もない情報。一番目立つ1行目を潰している。<strong>1行目は必ず動画の要約から始める。</strong>「何が分かる動画か」を最初に出せば、関係ある人が残る。</div>

<h2><span class="s">5</span>投稿時間</h2>
<p>同じ動画でも、出す時間で初速がまるで変わる。狙うのは<strong>「ターゲットがインスタを開いてる時間」</strong>だ。寝てる時間や仕事中に出すと、見られないうちに新しい波に飲まれて埋もれる。</p>

<div class="fig">
<div class="tl">
<div class="slot"><span class="time">主婦ママ</span><div class="w2">21〜23時。家事と育児が一段落して、やっと自分のスマホ時間になる帯。</div></div>
<div class="slot"><span class="time">社会人</span><div class="w2">昼12時（休憩）・夜19〜22時（帰宅後）。通勤や仕事の合間に開く。</div></div>
<div class="slot"><span class="time">学生</span><div class="w2">17〜19時（放課後）・22〜24時（寝る前）。授業が終わってからが本番。</div></div>
</div>
</div>

<div class="key">★最強の指標は、<strong>プロアカウントの分析画面（インサイト）の「フォロワーが最もアクティブな時間」</strong>。上の表は一般的な目安。あなたのフォロワーが実際いつ開くかは分析画面で曜日・時間帯ごとに分かる。<b>自分の数字 &gt; 一般論。</b></p></div>

<div class="flow"><span>初期＝表の目安で出す</span><span>データが溜まる</span><span class="is-goal">分析画面の数字に切替</span></div>
<p>最初はフォロワーが少なくデータも無い。だから順番がある。<strong>一般論で始めて、自分の数字で上書きする。</strong>完璧を狙って止まるより、目安で動き出してデータを溜める方が速い。</p>

<h2><span class="s">6</span>投稿の手順（7ステップ）</h2>
<p>上から流す。各ステップが前を前提にしてるから、順番を守ると手戻りが消える。<strong>特に最後の「Facebook OFF」を絶対に忘れない。</strong></p>

<div class="step"><span class="sn">1</span><span class="snm">カメラロールから動画を選択</span></div>
<div class="step"><span class="sn">2</span><span class="snm">トリミング確認</span><br>頭とお尻の無音・見切れを削る。冒頭1秒が命。出だしに0.5秒でも無音があると「何も始まらない」とスクロールされる。頭はギリギリまで詰める。</div>
<div class="step"><span class="sn">3</span><span class="snm">カバー画像を設定</span><br>プロフィールの表紙になる。<b>一番目立つ場面・気になる文字が出てる場面</b>を選ぶ。訪れた人は表紙だけでフォローを判断する。3本並んで内容が伝わる状態が理想。</div>
<div class="step"><span class="sn">4</span><span class="snm">キャプション入力</span><br>1行目に要約、最後に次の一言（セクション4の通り）。</div>
<div class="step"><span class="sn">5</span><span class="snm">タグ入力</span><br>3〜5個の中規模タグを、文章の後に改行して入れる（セクション3の通り）。</div>
<div class="step"><span class="sn">6</span><span class="snm">音源設定（音量0〜5%）</span><br>トレンド音源を選び、音量を最小まで絞る（セクション2の通り）。</div>
<div class="step"><span class="sn">7</span><span class="snm">シェア（Facebook OFF）</span><br>シェア画面で<b>「Facebookにも投稿」を必ずOFF</b>にしてから投稿ボタンを押す。</div>

<div class="warn"><b>なぜFacebook OFFが大事か</b> ONのままだと意図しない場所にも動画が流れる。インスタでの伸びに集中するため毎回OFFを目で見る。落とし穴：一度ONにすると次の投稿でも引き継がれる。設定は前回を記憶するから「前回OFFにしたから大丈夫」が通用しない。<strong>記憶に頼らず、毎回その場で目で見る。</strong></div>

<h2><span class="s">7</span>投稿直後の30分（一番大事）</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="投稿直後の試し表示">
<rect x="118" y="10" width="84" height="28" rx="8" fill="#1e4e7e"/>
<text x="160" y="29" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">投稿</text>
<path d="M160 38 L160 54" stroke="#a0aec0" stroke-width="2" marker-end="url(#a3)"/>
<rect x="100" y="56" width="120" height="26" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="73" text-anchor="middle" font-size="11" fill="#1e4e7e">まず少人数に試し表示</text>
<path d="M120 82 L80 104" stroke="#b83280" stroke-width="2" marker-end="url(#a3b)"/>
<path d="M200 82 L240 104" stroke="#a0aec0" stroke-width="2" marker-end="url(#a3)"/>
<rect x="14" y="106" width="120" height="38" rx="8" fill="#fff5fa" stroke="#b83280"/>
<text x="74" y="123" text-anchor="middle" font-size="10" font-weight="700" fill="#b83280">最後まで見る・保存</text>
<text x="74" y="138" text-anchor="middle" font-size="10" fill="#b83280">→ もっと広げる</text>
<rect x="186" y="106" width="120" height="38" rx="8" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="246" y="123" text-anchor="middle" font-size="10" font-weight="700" fill="#718096">スルーされる</text>
<text x="246" y="138" text-anchor="middle" font-size="10" fill="#a0aec0">→ 広げるのを止める</text>
<defs>
<marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#a0aec0"/></marker>
<marker id="a3b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker>
</defs>
</svg>
<div class="figcap">最初の少人数の反応が、その動画の運命を握っている</div>
</div>

<div class="key">投稿は「作って終わり」じゃない。<strong>出した直後の30分が投稿の本番。</strong>ここでアクセルを踏むかで、伸びの天井が決まる。だから最初に見にくる既存フォロワーの反応を、こちらから呼んで最大化する。</div>

<div class="grp"><div class="gh">★初速を上げる即アクション</div><div class="gb">
<div class="rule"><span class="rn">1 すぐストーリーズでシェア</span><span class="gb2">「新作出した、見て」と流す。普段フィードを開かない層を掘り起こす</span></div>
<div class="rule"><span class="rn">2 コメントに即返信</span><span class="gb2">30分以内に返す。やりとりが続くほど「盛り上がってる」と見なされる</span></div>
<div class="rule"><span class="rn">3 数字を記録</span><span class="gb2">30分後・1時間後の再生数・保存数をメモ。次の判断材料にする</span></div>
<div class="rule"><span class="rn">4 Facebook OFFの再確認</span><span class="gb2">投稿後にもう一度、意図しない連携がないか見る</span></div>
</div></div>

<div class="good"><b>○ 記録を続けると見えてくる</b> メモを続けると「30分で再生◯◯・保存◯件なら伸びる」という自分の基準が分かる。勘で判断すると毎回ブレるが、過去データという物差しがあれば数字で判断できる。基準を超えなければ、次は冒頭やタグを変えて試す。<strong>記録は、次を当てるための財産になる。</strong></div>

<h2><span class="s">8</span>検品チェック（投稿前に通す）</h2>
<p>ボタンを押す前に上から1本通す。理由はもう分かってるはず。最後の関門として機械的に通す。<strong>1つでも「☐」が残ってたら投稿しない。</strong></p>
<div class="check"><ul>
<li>☐ 冒頭1秒で「見たい」と思えるか（他人目線で確認した？）</li>
<li>☐ イヤホンなしで声がはっきり聞こえるか</li>
<li>☐ 文字に誤字なし・端で切れてない・1画面1〜2行か</li>
<li>☐ トレンド音源（↑マーク）を入れ、音量0〜5%に絞ったか</li>
<li>☐ タグは3〜5個・中規模・ジャンル一致か</li>
<li>☐ キャプション1行目は要約、最後に次の一言を入れたか</li>
<li>☐ ターゲットが開く時間（できれば分析画面）に合わせたか</li>
<li>☐ カバー画像は一番目立つ場面か</li>
<li>☐ 「Facebookにも投稿」はOFFか</li>
<li>☐ 投稿後30分の初速アクションを準備したか</li>
</ul></div>

<div class="end">伸びない原因は、中身じゃなく出し方だ。<br>投稿の質は<strong>「動画・音源・タグ・キャプション・時間・初速30分」の6点で決まる。</strong><br>だから——毎回このチェックを1本通せ。<br>才能じゃなく、毎回そろえる仕組みが、伸びる確率を勝手に上げていくぞ。</div>
</div>
  `,

  // ============================================================
  // Phase 3 — 稼ぐ
  // ============================================================

  'p3-feed-vs-story': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>フィードとストーリーは見た目が似ていて、仕事がまるで違うこと</li>
<li>フィードで売るとフォロワーが離れる本当の理由（信頼の残高）</li>
<li>集客→ファン化→教育→販売、飛ばせない4つの順番</li>
<li>ストーリーの「教育→訴求」がこの順番じゃないと刺さらない理由</li>
<li>どんなジャンルでも使える1日の型</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="フィードとストーリーの役割の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">フィード</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">ストーリー</text>
<text x="79" y="44" text-anchor="middle" font-size="11" fill="#2b6cb0">集客装置</text>
<text x="241" y="44" text-anchor="middle" font-size="11" fill="#8a4a6e">販売装置</text>
<circle cx="50" cy="78" r="8" fill="#9cb8d6"/><circle cx="79" cy="72" r="8" fill="#9cb8d6"/><circle cx="108" cy="78" r="8" fill="#9cb8d6"/>
<text x="79" y="108" text-anchor="middle" font-size="10" fill="#2b6cb0">知らない人が</text>
<text x="79" y="122" text-anchor="middle" font-size="10" fill="#2b6cb0">初めて見る</text>
<text x="79" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#1e4e7e">ファンを作る</text>
<rect x="218" y="66" width="46" height="26" rx="8" fill="#b83280"/><path d="M228 92 l0 8 l10 -8 z" fill="#b83280"/>
<text x="241" y="83" text-anchor="middle" font-size="10" fill="#fff">これいいよ</text>
<text x="241" y="112" text-anchor="middle" font-size="10" fill="#8a4a6e">少し信頼してる</text>
<text x="241" y="126" text-anchor="middle" font-size="10" fill="#8a4a6e">人だけがいる</text>
<text x="241" y="143" text-anchor="middle" font-size="10" font-weight="700" fill="#b83280">ここで売る</text>
</svg>
<div class="figcap">同じ画面でも、試食コーナーとレジは仕事が別</div>
</div>

<div class="key">合言葉は1つ。<strong>「フィードでファンを作り、ストーリーで売る」</strong>。役割を混ぜた瞬間、フォロワーがどれだけ増えても1円にもならない。</div>

<p>フォロワーが多くても売れない人がいて、少なくても稼ぐ人がいる。差は数じゃない。<strong>「どこで、誰に、何をやるか」を分かっているか</strong>だ。そしてその根っこにある理由はこれ——<strong>見ている人の"あなたへの信頼度"が、場所によって正反対だから</strong>。ここが分かると全部つながる。</p>

<h2><span class="s">1</span>2つの場所には、2つの役割がある</h2>

<div class="vs">
<div class="l"><div class="t">フィード / リール｜集客・ファン化</div>おすすめや検索から、<b>あなたを一度も見たことがない人</b>が初めて来る。仕事は「届いてフォローしてもらう」こと。役立つ知識・共感・変化の過程で価値を渡す。<b>絶対に売らない。</b></div>
<div class="r"><div class="t">ストーリー｜収益化・販売</div>基本、<b>すでにフォローしている人だけ</b>に届く。「もうあなたを知っている・少し信頼している人」だけがいる場所。だから商品を紹介する。<b>ここで稼ぐ。</b></div>
</div>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="同じセリフでも関係で意味が逆になる">
<text x="160" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">同じ「これいいよ」でも…</text>
<rect x="14" y="34" width="120" height="34" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="74" y="55" text-anchor="middle" font-size="11" fill="#718096">これいいよ</text>
<text x="74" y="86" text-anchor="middle" font-size="11" fill="#718096">初対面に言うと</text>
<text x="74" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="#a0aec0">＝押し売り</text>
<rect x="186" y="34" width="120" height="34" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="246" y="55" text-anchor="middle" font-size="11" fill="#2b6cb0">これいいよ</text>
<text x="246" y="86" text-anchor="middle" font-size="11" fill="#1e4e7e">友達に言うと</text>
<text x="246" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="#2b6cb0">＝おすすめ</text>
</svg>
<div class="figcap">セリフは同じ。関係が違えば受け取られ方は逆になる</div>
</div>
<p><b>奥にある理由：</b>場所ごとに見ている人の関係が違う。だから場所ごとにセリフを変えるのは当たり前だ。</p>

<h2><span class="s">2</span>なぜフィードで売ると離れるのか</h2>
<div class="warn"><b>✗ やりがちな失敗</b>　フォロワーが増えたから、フィード（リール）で「この商品おすすめ」「DMで販売中」と発信する。→ 一気に離れる。</div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="プロフィール1枚目が宣伝だと去る">
<rect x="20" y="20" width="120" height="90" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="80" y="44" text-anchor="middle" font-size="11" fill="#718096">初めて見た人</text>
<rect x="40" y="56" width="80" height="22" rx="6" fill="#fff" stroke="#cbd5e0"/>
<text x="80" y="71" text-anchor="middle" font-size="10" fill="#a0aec0">いきなり宣伝</text>
<path d="M80 96 l-7 -9 l4 0 l0 -4 l6 0 l0 4 l4 0 z" fill="#a0aec0"/>
<text x="80" y="124" text-anchor="middle" font-size="11" fill="#718096">指で上にスワイプ、去る</text>
<path d="M150 65 L182 65" stroke="#cbd5e0" stroke-width="2" marker-end="url(#a2)"/>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#cbd5e0"/></marker></defs>
<rect x="194" y="20" width="120" height="90" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="254" y="50" text-anchor="middle" font-size="12" fill="#8a4a6e">フォローボタンに</text>
<text x="254" y="70" text-anchor="middle" font-size="12" fill="#8a4a6e">指は伸びない</text>
<text x="254" y="96" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">惚れる前に終了</text>
</svg>
<div class="figcap">フィードは「知らない人が初めて見る場所」だから</div>
</div>

<p><b>奥にある理由：</b>お客が世界で一番警戒しているのは「売りつけられること」。恋愛と同じで、初対面でいきなり距離を詰める相手を、人は本能的に避ける。<strong>フィードで売るのは、相手の警戒心が一番高い瞬間に、一番警戒される行動をぶつけること。</strong>売るのは警戒が消えたあと——ストーリーでやる。</p>

<div class="note">つまずきポイント：「フォロワーが増えたから売っていいだろう」は違う。フィードに新しく来るのは、いつまでも「初めての人」だ。フォロワーが増えても観客の大半は知らない人のまま。フィードは永遠に「初対面」の場所として扱う。</div>

<div class="key">フィードは<strong>「無料の試食コーナー」</strong>。試食で「おいしい」と思わせるのが仕事。爪楊枝を渡す前にレジを突き出したら、誰も足を止めない。<strong>試食は試食に徹するから、客は安心して口に運ぶ。</strong>買ってもらうのはレジ＝ストーリーだ。</div>

<h2><span class="s">3</span>正しい順番＝4つのステップ</h2>
<p>お金が生まれるまでには決まった順番がある。1段ずつ上がる階段だ。<strong>1段飛ばしで上がると、必ず足を踏み外す。</strong></p>

<div class="flowbig">
<span>フィード｜価値提供</span><span>フォロー｜ファン化</span><span>ストーリー｜教育</span><span class="is-goal">訴求｜販売</span>
</div>

<div class="step"><span class="sn">1</span><span class="snm">フィード｜価値提供</span><p>知らない人に役立つ・共感する発信を「与える」だけ。例「夕方のくすみを隠すメイク直しのコツ」。<b>なぜ与えるだけか：</b>先に何かをもらうと「お返ししたい」が自然に生まれ、小さな借りが積まれる。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">フォロー｜ファン化</span><p>「この人いいな」でフォローされ、初めてストーリーが届くようになる。<b>なぜ要るか：</b>フォローは「次も聞きたい」という小さな約束。会話を続ける許可をもらう瞬間だ。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">ストーリー｜教育</span><p>毎日出て相手の悩みを言葉にし、「自分のことだ」と気づかせ信頼を積む。<b>なぜ毎日か：</b>信頼は1回の名演説では貯まらない。会うほど親しみがわく。回数が信頼に変わる。</p></div>
<div class="step"><span class="sn">4</span><span class="snm">訴求｜販売</span><p>信頼がたまった相手にだけ、悩みの解決策として商品を出す。ここで初めてお金が動く。<b>なぜ最後か：</b>1〜3を飛ばすと、信頼という残高がゼロのまま。引き出せるものが無い。</p></div>

<h3>恋愛で考えると一発で分かる</h3>
<div class="flow">
<span>出会う</span><span>仲良くなる</span><span>何度も会って信頼</span><span>告白</span>
</div>
<p>出会ってすぐ「結婚して」は断られる。<strong>告白の成功は、告白そのものじゃなく"その前の毎日"で決まっている。</strong>段を飛ばした分だけ、相手の警戒は強くなる。発信もまったく同じだ。</p>

<h3>「信頼の残高」で考えると、全部つながる</h3>
<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="信頼の残高を貯めてから引き出す">
<rect x="20" y="30" width="130" height="80" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="85" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">1〜3：貯める</text>
<path d="M85 62 l0 30" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a3)"/>
<rect x="60" y="92" width="50" height="10" rx="3" fill="#2b6cb0"/>
<text x="85" y="124" text-anchor="middle" font-size="11" fill="#2b6cb0">価値・フォロー・教育</text>
<defs><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker></defs>
<rect x="170" y="30" width="130" height="80" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="235" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">4：引き出す</text>
<path d="M235 92 l0 -22" stroke="#b83280" stroke-width="2" marker-end="url(#a4)"/>
<rect x="210" y="92" width="50" height="10" rx="3" fill="#f3c6dd"/>
<text x="235" y="124" text-anchor="middle" font-size="11" fill="#b83280">訴求＝販売</text>
<defs><marker id="a4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
</svg>
<div class="figcap">貯めた額より多くは引き出せない。フィードで売る＝残高ゼロから引き出す行為</div>
</div>
<div class="key">フィード（価値提供）→ フォロー（ファン化）→ ストーリー（教育）→ 訴求（販売）。<strong>この4段を絶対に飛ばさない。</strong>先に貯める。引き出すのは最後。これがこの章の背骨だ。</div>

<h2><span class="s">4</span>各場所で「具体的に」何をやるか</h2>

<h3>フィード / リールでやること</h3>
<div class="stats">
<div class="stat-c"><div class="n">知識</div><div class="l">すぐ使える情報「日焼け止めは2〜3時間おきに塗り直す」</div></div>
<div class="stat-c"><div class="n">共感</div><div class="l">心の声を代弁「スキンケアをサボって朝に後悔」</div></div>
<div class="stat-c"><div class="n">過程</div><div class="l">完成形でなく道のり「最初は何もできなかった自分が…」</div></div>
</div>
<p><b>奥にある理由：</b>3つに共通するのは「相手に得をさせている」点。知識は得、共感は「わかってもらえた」という得、過程は「自分にもできそう」という希望の得。<strong>人は得をした相手を信用する。</strong>「買って」は奪う行動だから、フィードでは扉を閉める。</p>
<div class="warn"><b>売り込みは厳禁。</b>「買って」の気配が出た瞬間、フォローされなくなる。ここは全部与える場所だと割り切る。</div>

<h3>ストーリーでやること（2段階）</h3>
<div class="flow">
<span>① 教育：悩みを認識させる</span><span>② 訴求：解決策として商品を出す</span>
</div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="痛みに気づかせてから商品を出す">
<rect x="14" y="28" width="138" height="74" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="83" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">① 教育</text>
<text x="83" y="72" text-anchor="middle" font-size="11" fill="#2b6cb0">「ここ痛んでない?」</text>
<text x="83" y="90" text-anchor="middle" font-size="11" fill="#2b6cb0">痛みを自覚させる</text>
<path d="M156 65 L186 65" stroke="#b83280" stroke-width="2" marker-end="url(#a5)"/>
<defs><marker id="a5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<rect x="190" y="28" width="116" height="74" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="248" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">② 訴求</text>
<text x="248" y="72" text-anchor="middle" font-size="11" fill="#8a4a6e">「これで解決できる」</text>
<text x="248" y="90" text-anchor="middle" font-size="11" fill="#8a4a6e">商品を出す</text>
<text x="160" y="122" text-anchor="middle" font-size="11" fill="#718096">健康な人に薬は売れない。先に「痛い」と気づかせる</text>
</svg>
<div class="figcap">教育のあるなしで、同じ商品の意味が正反対になる</div>
</div>

<div class="good"><b>○ 良い流れ</b>　教育「自己投資、後回しにしてない?」→ 信頼を積む → 訴求「だからこの教材で最初の一歩を」。</div>
<div class="bad"><b>✗ 悪い流れ</b>　いきなり「この教材おすすめ！買って！」だけ。何に困っているかも自覚していないからスルーされる。</div>

<h3>1日のストーリーの流れ（例）</h3>
<table>
<tr><th>時間</th><th>役割</th><th>セリフ例</th></tr>
<tr><td>朝</td><td>教育の入口</td><td>「頑張ってるのに前に進んでる感じがしない人いない?」</td></tr>
<tr><td>昼</td><td>悩みの正体</td><td>「原因は努力不足じゃなくて、やり方を習ってないだけ」</td></tr>
<tr><td>夜</td><td>解決策</td><td>「その『やり方』をまとめたのがこの教材」</td></tr>
</table>
<p>朝の問いかけを抜いて夜の商品紹介だけ出したら、相手は「急に宣伝かよ」で終わる。<strong>順番が全てだ。</strong></p>
<div class="note">つまずきポイント：「毎日同じ流れだと飽きられないか」。逆だ。型が決まっているから相手は安心して見られ、あなたも迷わず手が動く。時間割を決めれば続けるハードルが下がる。続くことが信頼を貯める唯一の道だ。</div>

<h2><span class="s">5</span>どんなアカウントでも使える型</h2>
<div class="flowbig">
<span>朝｜問いかけ</span><span>昼｜正体</span><span class="is-goal">夜｜解決策</span>
</div>
<div class="stats">
<div class="stat-c"><div class="n">美容</div><div class="l">朝「夕方、顔がくすんで見えてない?」→昼「原因は乾燥じゃなくメイク直しの順番」→夜「その順番を解説したのがこれ」</div></div>
<div class="stat-c"><div class="n">子育て</div><div class="l">朝「子どもに毎日同じこと言って疲れてない?」→昼「原因はしつけじゃなく伝え方」→夜「伝え方の具体例をまとめたのがこれ」</div></div>
<div class="stat-c"><div class="n">お金</div><div class="l">朝「頑張ってるのに前に進んでる感じがしない?」→昼「やり方を習ってないだけ」→夜「その『やり方』をまとめた教材」</div></div>
</div>
<div class="warn">どのジャンルでも禁止は「フィードで売ること」と「教育を飛ばすこと」。<b>役割を混ぜた瞬間、信頼が壊れて、フォロワーがいても1円にもならない。</b></div>

<h2><span class="s">6</span>1行で言い切る</h2>
<table>
<tr><th>場所</th><th>1行で言うと</th></tr>
<tr><td>フィード / リール</td><td>知らない人を、ファンに変える「集客装置」</td></tr>
<tr><td>ストーリー</td><td>ファンに、教育してから売る「販売装置」</td></tr>
</table>
<div class="key">ストーリーの目的は、<strong>「信頼している人に、悩みを認識させてから、解決策として商品を届けること」</strong>。短くするなら——ストーリーは「売る場所」。ただし、いきなり売らず教育してから売る場所だ。</div>

<h2><span class="s">7</span>検品：役割を混ぜていないか</h2>
<div class="check"><ul>
<li>フィードの役割を1行で言える?（集客・ファン化）</li>
<li>ストーリーの役割を1行で言える?（教育してから売る）</li>
<li>なぜフィードで売ると離れるか説明できる?（信頼ゼロへの営業）</li>
<li>順番（フィード→フォロー→ストーリー→訴求）を飛ばさず言える?</li>
<li>ストーリーは「教育→訴求」の2段階だと言える?</li>
<li>訴求の前に、相手に「痛み」を自覚させているか?</li>
<li>フィードに「買って」の気配が混ざっていないか?</li>
</ul></div>
<div class="end">フィードは"試食コーナー"、ストーリーは"レジ"。<br>見ている人の信頼度が違うから、やることも変える。<br><strong>売りたいなら、まず信頼を貯めろ。順番を守った人から、フォロワーがお金に変わる。</strong></div>
</div>
  `,

  'p3-monetize': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>「フォロワーが増えたら稼げる」が、なぜ一番危ない勘違いなのか</li>
<li>稼ぎは「単価 × 仕組み」で決まる、その奥にある理由</li>
<li>収益化5つの手段を、単価・始めやすさで丸わかり</li>
<li>初心者が高単価で爆死する「順番ミス」の正体</li>
<li>読み終えたら「最初に売る1つ」を決められる</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="フォロワー数と稼ぎの勘違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 勘違い</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 正解</text>
<text x="79" y="62" text-anchor="middle" font-size="15" font-weight="700" fill="#a0aec0">フォロワー数</text>
<text x="79" y="84" text-anchor="middle" font-size="12" fill="#a0aec0">＝お金</text>
<text x="79" y="124" text-anchor="middle" font-size="11" fill="#718096">数を追う→1円にならない</text>
<text x="241" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">単価×売れる数</text>
<text x="241" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">×仕組み</text>
<text x="241" y="110" text-anchor="middle" font-size="11" fill="#1e4e7e">何を・いくらで・どう売るか</text>
<text x="241" y="126" text-anchor="middle" font-size="11" fill="#1e4e7e">を先に決める</text>
</svg>
<div class="figcap">数は「売れる数」を支える材料の1つにすぎない</div>
</div>

<div class="key">マネタイズでつまずく人の勘違いはたった1つ。<strong>「フォロワーが増えれば勝手に稼げる」だ。</strong>正解は、稼ぎ＝単価 × 売れる数 × 仕組み。<strong>数を追うから稼げない。何を・いくらで・どう売るかを先に決めるから稼げる。</strong></div>

<h3>フォロワーは「数」じゃなく「関係の濃さ」で効く</h3>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="薄い1万人と濃い1000人">
<rect x="0" y="20" width="150" height="90" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">薄い1万人</text>
<circle cx="45" cy="72" r="5" fill="#cbd5e0"/><circle cx="65" cy="72" r="5" fill="#cbd5e0"/><circle cx="85" cy="72" r="5" fill="#cbd5e0"/><circle cx="105" cy="72" r="5" fill="#cbd5e0"/>
<circle cx="55" cy="88" r="5" fill="#cbd5e0"/><circle cx="75" cy="88" r="5" fill="#cbd5e0"/><circle cx="95" cy="88" r="5" fill="#cbd5e0"/>
<text x="75" y="105" text-anchor="middle" font-size="10" fill="#a0aec0">財布を開かない</text>
<text x="160" y="68" text-anchor="middle" font-size="18" fill="#cbd5e0">&lt;</text>
<rect x="170" y="20" width="150" height="90" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="245" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">濃い1000人</text>
<circle cx="225" cy="78" r="9" fill="#b83280"/><circle cx="250" cy="78" r="9" fill="#b83280"/><circle cx="275" cy="78" r="9" fill="#b83280"/>
<text x="245" y="105" text-anchor="middle" font-size="10" fill="#8a4a6e">この人から買いたい</text>
</svg>
<div class="figcap">貯めるべきは"数"じゃなく"この人から買いたい"という濃さ</div>
</div>
<p>フォロワーは、お金に変わる"可能性"を持った人の集まりでしかない。何万人いても収入ゼロの人もいれば、少なくても稼ぐ人もいる。<strong>差は「いくらのものを」「どんな仕組みで」売っているか、ここだけだ。</strong></p>
<div class="warn">出発点は「フォロワーを増やすこと」じゃない。<b>「何を売るか」を1つ決めることだ。</b>フォロワーは、そう決めた後に"そのために集める"ものでしかない。</div>

<h2><span class="s">1</span>なぜ「数」より「単価」を決めると稼げるのか</h2>
<div class="eq">稼ぎ ＝ <strong>単価</strong> × 売れる数 × 仕組み</div>
<p>多くの人は「売れる数（＝フォロワー）」ばかり動かそうとする。でも、いちばん桁を変えるのは<strong>単価</strong>だ。</p>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="安いものを大勢と高いものを少人数">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 安い×大勢</text>
<rect x="20" y="40" width="14" height="14" fill="#cbd5e0"/><rect x="40" y="40" width="14" height="14" fill="#cbd5e0"/><rect x="60" y="40" width="14" height="14" fill="#cbd5e0"/><rect x="80" y="40" width="14" height="14" fill="#cbd5e0"/><rect x="100" y="40" width="14" height="14" fill="#cbd5e0"/>
<rect x="20" y="60" width="14" height="14" fill="#cbd5e0"/><rect x="40" y="60" width="14" height="14" fill="#cbd5e0"/><rect x="60" y="60" width="14" height="14" fill="#cbd5e0"/><rect x="80" y="60" width="14" height="14" fill="#cbd5e0"/><rect x="100" y="60" width="14" height="14" fill="#cbd5e0"/>
<text x="79" y="100" text-anchor="middle" font-size="11" fill="#718096">途方もない数がいる</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="245" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 高い×少人数</text>
<rect x="225" y="48" width="40" height="40" rx="6" fill="#2b6cb0"/>
<text x="245" y="73" text-anchor="middle" font-size="13" fill="#fff">1件</text>
<text x="245" y="105" text-anchor="middle" font-size="11" fill="#1e4e7e">同じ1件で桁が変わる</text>
</svg>
<div class="figcap">アクセサリー1個1,000円 vs 作り方教材1部5,000円。同じ客でも手元に残る額が違う</div>
</div>
<div class="vs">
<div class="l"><div class="t">✗ 数を追う＝終わらない競争</div>単価が小さいまま数で勝とうとする。永遠にフォロワー集めに追われ、数が止まれば稼ぎも止まる。</div>
<div class="r"><div class="t">○ 単価を決める＝少人数で届く</div>「何をいくらで売るか」を先に決める。集める数のプレッシャーから解放される。</div>
</div>
<div class="warn">フォロワーを増やしてから考える、は順序が逆。<b>先に「何を売るか」を1つ決める。</b>「日焼け止めを紹介する」と決めれば、発信は自然と「紫外線対策」「肌を焼かない習慣」に絞られる。<b>迷子の正体は才能不足じゃなく"ゴール未設定"だ。</b></div>

<h2><span class="s">2</span>収益化は、この5つに集約される</h2>
<p>稼ぎ方は無限に見えて、突き詰めると5つだけ。最初は<strong>1つから</strong>。慣れたら掛け合わせて柱を増やす。</p>
<table>
<tr><th>手段</th><th>中身</th><th>単価の目安</th><th>始めやすさ</th></tr>
<tr><td>① アフィリエイト</td><td>商品を紹介して紹介料をもらう</td><td>低め</td><td>◎ 入口に最適</td></tr>
<tr><td>② デジタル販売</td><td>PDF・テンプレを作り繰り返し売る</td><td>中くらい</td><td>○</td></tr>
<tr><td>③ 企業案件・PR</td><td>企業から依頼を受けて紹介</td><td>反応で変わる</td><td>△ フォロワー必要</td></tr>
<tr><td>④ 自社商品</td><td>コンサル・講座など自分の商品</td><td>高め</td><td>△ 信頼が必要</td></tr>
<tr><td>⑤ 横軸展開</td><td>SNSで集客し別の場所で売る</td><td>—（土台）</td><td>—</td></tr>
</table>
<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="単価と必要な信頼のはしご">
<line x1="40" y1="120" x2="280" y2="20" stroke="#cbd5e0" stroke-width="2"/>
<circle cx="60" cy="112" r="7" fill="#9cb8d6"/><text x="74" y="116" font-size="11" fill="#718096">①アフィ（低単価・信頼ゼロでOK）</text>
<circle cx="120" cy="87" r="7" fill="#6f9bcb"/><text x="134" y="91" font-size="11" fill="#4a6b8c">②デジタル販売</text>
<circle cx="180" cy="62" r="7" fill="#2b6cb0"/><text x="194" y="66" font-size="11" fill="#2b6cb0">③企業案件</text>
<circle cx="240" cy="37" r="8" fill="#b83280"/><text x="120" y="33" font-size="11" fill="#b83280">④自社商品（高単価・信頼が要る）</text>
</svg>
<div class="figcap">下に行くほど単価が上がり、その分だけ信頼・実績が要る</div>
</div>
<p><b>奥にある理由：</b>なぜ単価が上がるほど信頼が要るか。<strong>金額は「お客が背負うリスク」だからだ。</strong>数十円なら外れても痛くない。高額コンサルは外したら大損。だから「この人なら大丈夫」が積み上がるまで財布は開かない。<strong>単価とは、集めた信頼の総量をお金に換算した数字だ。</strong></p>
<div class="key">⑤の横軸展開だけ性質が違う。①〜④が「何で稼ぐか（手段）」なのに対し、⑤は「どこで稼ぐか（仕組みの置き場所）」。だから①〜④と組み合わせて使う。</div>

<h2><span class="s">3</span>① アフィリエイト — 初心者の入口</h2>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="紹介リンクから報酬が入る流れ">
<rect x="8" y="38" width="74" height="36" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/><text x="45" y="60" text-anchor="middle" font-size="11" fill="#1e4e7e">あなたの言葉</text>
<rect x="123" y="38" width="74" height="36" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/><text x="160" y="55" text-anchor="middle" font-size="11" fill="#1e4e7e">人が動く</text><text x="160" y="69" text-anchor="middle" font-size="11" fill="#1e4e7e">＝購入</text>
<rect x="238" y="38" width="74" height="36" rx="9" fill="#fff5fa" stroke="#b83280"/><text x="275" y="60" text-anchor="middle" font-size="11" fill="#b83280">報酬</text>
<path d="M84 56 L121 56" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a3)"/>
<path d="M199 56 L236 56" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a3)"/>
<defs><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker></defs>
</svg>
<div class="figcap">在庫なし・客対応なし。最小リスクで「売れる感覚」を掴める</div>
</div>
<div class="good"><b>○ 向いてる人</b> 投稿を量産できる人／特定ジャンル（美容・ガジェット・本など）に詳しい人。「これ良かったよ」を量産できる人ほど強い。</div>
<p><b>奥にある理由：</b>本当の価値は「自分の言葉で人が動いてお金が発生する」体験を最小リスクで掴めること。一度味わうと<strong>「自分の言葉には人を動かす力がある」と腹落ちする。</strong>これが後で自分の商品を作るときの土台になる。</p>
<h4>始め方の手順</h4>
<div class="step"><span class="sn">1</span><span class="snm">ASP（アフィリエイト仲介サービス）に登録</span><p>ASPは「広告主とあなたをつなぐ仲介」。A8.net、もしもアフィリエイト、楽天アフィリエイトなどが代表格。登録は無料。まず1つ登録して中をのぞく。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">自分のジャンルに合う案件を探す</span><p>美容垢なら化粧品、子育て垢なら育児グッズ。<b>発信ジャンルと案件がズレると一切売れない。</b>普段「これ使ってる」と自然に言える商品を選ぶ。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">使った実感を自分の言葉で紹介</span><p>性能の羅列でなく「これで朝の手間が1つ消えた」のように体験を語る。読み手は説明書でなく「使った人のリアルな感想」を信じる。</p></div>
<div class="warn">単価は案件でピンキリ。報酬の高さで選ぶとジャンルがズレて結局売れない。<b>「単価」より「相性」を先に見る。</b>急に知らないジャンルを売り始めると、フォロワーは離れる。<b>1件の高報酬より、積み上げた信頼のほうが長い目で何倍も稼ぐ。</b></div>

<h2><span class="s">4</span>② デジタル商品の販売 — 一度作って繰り返し売る</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="労働型と自販機型">
<rect x="0" y="20" width="150" height="90" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="44" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">労働型</text>
<text x="75" y="68" text-anchor="middle" font-size="11" fill="#a0aec0">動いた分だけ稼ぐ</text>
<text x="75" y="92" text-anchor="middle" font-size="11" fill="#a0aec0">時間に上限がある</text>
<rect x="170" y="20" width="150" height="90" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="44" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">自販機型</text>
<text x="245" y="68" text-anchor="middle" font-size="11" fill="#2b6cb0">作るのは最初の1回だけ</text>
<text x="245" y="92" text-anchor="middle" font-size="11" fill="#2b6cb0">寝てる間にも売れる</text>
</svg>
<div class="figcap">あなたの知識を"自販機の中身"にして並べる、それがデジタル販売</div>
</div>
<div class="key">本質は<strong>「働いた時間と収入を切り離せる」</strong>こと。アフィや案件は動いた分だけの「労働型」。デジタル販売は、稼ぎが「自分の体力」でなく「作った仕組み」に乗る。ここで収入の天井がまるで変わる。</div>
<p>単価は幅広い。初心者は<strong>手の届きやすい価格帯</strong>から。安すぎると価値が伝わらず、高すぎると実績ないうちは買われない。「半年でフォロワーを増やすときにやったこと全部」を手順つきで書けば立派な商品になる。</p>
<div class="vs">
<div class="l"><div class="t">✗ 売れないnote</div>タイトルが「私のノウハウまとめ」＝自分主語。誰の何の悩みを解決するか書いていない。読み手は素通りする。</div>
<div class="r"><div class="t">○ 売れるnote</div>「3日坊主で終わる人へ」＝悩みを名指し。冒頭で「こんな人向け」を明確に。「これ、私のことだ」で売れる。</div>
</div>
<p><b>なぜタイトルがそこまで効くのか。</b>人は自分の話にしか興味がない。<strong>売れるタイトルは、自分の商品なのに読み手が自分を映す"鏡"になっている。</strong>「これ、私のことだ」と感じた瞬間、人は中身を確かめずに財布へ手を伸ばす。</p>

<h2><span class="s">5</span>③ 企業案件・PR — 反応の濃さが単価を決める</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="フォロワー数より反応">
<rect x="0" y="20" width="150" height="90" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="46" text-anchor="middle" font-size="20" font-weight="700" fill="#a0aec0">10万</text>
<text x="75" y="68" text-anchor="middle" font-size="11" fill="#a0aec0">フォロワー多い</text>
<text x="75" y="90" text-anchor="middle" font-size="11" fill="#718096">でも反応が薄い→動かない</text>
<rect x="170" y="20" width="150" height="90" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="245" y="48" text-anchor="middle" font-size="14" font-weight="700" fill="#b83280">熱いファン</text>
<text x="245" y="72" text-anchor="middle" font-size="11" fill="#8a4a6e">いいね・保存・コメント</text>
<text x="245" y="92" text-anchor="middle" font-size="11" fill="#b83280">企業はこっちが欲しい</text>
</svg>
<div class="figcap">企業が買うのは"数"でなく"あなたが言ったら人が動くか"</div>
</div>
<div class="key"><strong>企業が見るのはフォロワー数より「どれだけ反応されているか」だ。</strong>いいね・コメント・保存。企業は「商品が実際に動くか」を求めていて、反応の薄いフォロワーは動かないと知っている。</div>
<p><b>奥にある理由：</b>企業が買うのは「影響力」。本当に測りたいのは"あなたが言ったら人は動くのか"の1点で、その代理指標が反応だ。だから普段から反応を育てる垢ほど、案件が向こうから来るし単価も上がる。</p>
<h4>案件をもらう2つのルート</h4>
<table>
<tr><th>ルート</th><th>動き方</th><th>特徴</th></tr>
<tr><td>A 自分から営業</td><td>紹介したい企業に自分から連絡</td><td>実績ゼロでも仕掛けられる</td></tr>
<tr><td>B 仲介サービス登録</td><td>案件仲介サービスに登録して待つ</td><td>ある程度フォロワーが必要</td></tr>
</table>
<p>最初の1件はAで動く。すでに使って好きなブランドに「いつも使っています。よければ紹介させてください」と丁寧に連絡する。ファンとして使っている事実があると、企業も話を聞きやすい。</p>
<div class="note">つまずきポイント：「実績ゼロで営業なんて図々しい」と止まる。でも企業から見れば、自腹で使っているファンからの連絡はいちばん安心できる相手だ。<b>"もう好きで使っている"という事実が、実績の代わりになる。</b></div>
<div class="warn"><b>広告・案件の投稿には「#PR」などの表記が必須だ。</b>隠すと宣伝だと隠して宣伝する「ステマ」になり規制違反になる。<b>隠して一度稼ぐより、開示して信頼を守るほうが結局ずっと長く稼げる。</b></div>

<h2><span class="s">6</span>④ 自社商品・サービス — 少人数で大きく稼ぐ</h2>
<p>コンサル・スクール・講座など<strong>自分が作った商品を売る</strong>やり方。仲介がいないから利益率が高く、少人数でも大きく稼げる。収益化の最終地点になることが多い。</p>
<table>
<tr><th>形式</th><th>単価の傾向</th><th>特徴</th></tr>
<tr><td>1対1（個別コンサル）</td><td>高め</td><td>深く向き合える</td></tr>
<tr><td>グループ（講座・スクール）</td><td>中くらい</td><td>一度に多人数。仕組み化しやすい</td></tr>
</table>
<p>「いきなり高額なんて売れない」その直感は正しい。<strong>だから順序がある。</strong></p>
<div class="flow">
<span>無料・低単価でためす</span><span>口コミ・実績を集める</span><span>値上げする</span>
</div>
<div class="step"><span class="sn">1</span><span class="snm">無料、または低単価でためす</span><p>「最初の3人だけ無料でコンサルします」と募集して、本当に喜ばれるか・成果が出るかを確かめる。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">口コミ・実績を集める</span><p>無料で受けた人に「感想を一言もらえますか」とお願いし、投稿で見せる。「受けてよかった」の声が次の客を連れてくる。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">口コミが集まったら値上げ</span><p>信頼と実績がたまった分だけ単価を上げる。最初の安さは「実績を買うための投資」だ。</p></div>
<p><b>奥にある理由：</b>高単価の前の壁は「品質」でなく「証明」だ。お客は買う前に中身を確かめられないから他人の声を探す。<strong>自分で「すごい」と言うと疑われるが、他人が「受けてよかった」と言うとお客は証拠として信じる。</strong>無料で配るのは損でなく、最強の証拠を仕入れる投資だ。</p>
<div class="key">自社商品は「信頼の貯金」を使って売る。だから①②③で信頼を積んでから手を出す。<strong>信頼ゼロで高単価を出しても、誰も財布を開かない。</strong></div>

<h2><span class="s">7</span>⑤ 横軸展開 — SNSは集客装置、稼ぐ仕組みは外に作る</h2>
<div class="flowbig">
<span>インスタ・Threadsで集客</span><span>LINEで囲い込み</span><span class="is-goal">note・自社商品で販売</span>
</div>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="出会う場所と売る場所">
<rect x="8" y="30" width="130" height="60" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="73" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">SNS</text>
<text x="73" y="76" text-anchor="middle" font-size="11" fill="#2b6cb0">出会う場所＝看板</text>
<rect x="182" y="30" width="130" height="60" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="247" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">LINE・note</text>
<text x="247" y="76" text-anchor="middle" font-size="11" fill="#8a4a6e">売る場所＝お店</text>
<path d="M140 60 L180 60" stroke="#a0aec0" stroke-width="2" marker-end="url(#a7)"/>
<defs><marker id="a7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#a0aec0"/></marker></defs>
</svg>
<div class="figcap">SNSは入口の看板。お金のやりとりは外（LINE・note）で</div>
</div>
<p>大事な考え方。<strong>SNSはお客と「出会う」場所であって「売る」場所ではない。</strong>看板の前で売りつける店に人が寄りつかないのと同じで、SNS上でいきなり売り込むと一気に冷める。</p>
<p><b>奥にある理由：</b>SNSのタイムラインは"くつろぎに来ている"場所だから、売り込みを向けられると「邪魔された」と警戒する。LINEは"自分が登録した相手"だけの閉じた場所だ。<strong>場所が変わると、お客の心の構えが変わる。</strong></p>
<p>なぜ外に出すのか。理由は2つ。</p>
<div class="vs">
<div class="l"><div class="t">○ 濃いつながり</div>タイムラインは流れて消える。LINEなら新作のお知らせも本人の手元に確実に届く。<b>「運任せ」から「確実に届く」へ。</b></div>
<div class="r"><div class="t">○ 凍結リスク分散</div>SNSは突然使えなくなることがある。連絡先や販売を外に持てば、最悪SNSが消えてもつながり続けられる。<b>「借り物の土地」から「自分の土地」へ。</b></div>
</div>
<div class="warn">これも順序がある。いきなり「LINE登録して！」では誰も来ない。<b>SNSで価値を渡して信頼を作る → その先でLINEに案内。</b>「続きと配布テンプレはLINEで渡します」のように、登録する理由をセットで示す。<b>見返りを求める前に、まず渡す。順序を逆にした瞬間、人は引く。</b></div>

<h2><span class="s">8</span>★順番がすべて — 進む順序を間違えるな</h2>
<p>「自社商品が一番稼げるなら最初からやればいい」と思った人。<strong>それが初心者がいちばん爆死するパターンだ。</strong></p>
<div class="vs">
<div class="l"><div class="t">✗ いきなり高単価から入る</div>実績ゼロで「高額コンサルやります」→誰も信用してないから1人も買わない→心が折れてやめる。脱落者の典型ルート。</div>
<div class="r"><div class="t">○ 単価が低い順に積む</div>アフィで売れる感覚→noteでパッケージ化→口コミがたまる→高単価。一段ずつ信頼を積むから折れない。</div>
</div>
<div class="ladder">
<div class="rung"><span class="rn">1</span>アフィで「売れる感覚」を掴む</div>
<div class="rung"><span class="rn">2</span>noteで自分の言葉を商品にまとめる</div>
<div class="rung"><span class="rn">3</span>口コミが集まったら高単価へ</div>
<div class="rung"><span class="rn">4</span>横展開で柱を増やす</div>
</div>
<div class="key"><b>これは「稼ぎやすさの順」でなく「信頼の積み上がる順」だ。</b>アフィで掴んだ「何が刺さるか」がnoteの中身になり、noteで集まった口コミが高単価の証拠になる。<strong>すべての段が、次の段の材料を生んでいる。</strong>だから飛ばすと材料がないまま挑み、必ず弾かれる。</div>
<div class="note">つまずきポイント：「下の段は稼ぎが小さいから飛ばしたい」と焦る。でも下の段の役目は"稼ぐこと"でなく"次の段の材料を作ること"。材料を持たず上へ行くと、結局止まって下に戻る。急がば回れが最速になる。</div>

<h2><span class="s">9</span>★この章のゴール — 取り扱う1つを決める</h2>
<p>知識を入れて終わりにしない。<strong>「最初に取り組む1つ」を今ここで決める。</strong>迷ったら、ほぼ全員これでいい。</p>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="5つ同時はパンク、1つに絞ると動ける">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 5つ同時</text>
<text x="75" y="70" text-anchor="middle" font-size="11" fill="#a0aec0">選ぶのが面倒で</text>
<text x="75" y="86" text-anchor="middle" font-size="11" fill="#a0aec0">動けない＝パンク</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 1つに絞る</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#2b6cb0">枠が狭いほど</text>
<text x="245" y="86" text-anchor="middle" font-size="11" fill="#2b6cb0">「これなら」と動ける</text>
</svg>
<div class="figcap">絞ることは諦めじゃない。動き出すための設計だ</div>
</div>
<div class="good"><b>○ 初心者の最初の1つは「アフィリエイト」</b> 在庫なし・対応なし・登録無料。お金のリスクがほぼないまま「売れる感覚」を掴める。まずここから、慣れたら順番に広げる。</div>
<div class="check"><ul>
<li>☐ 自分の発信ジャンルは何か（美容／子育て／自己啓発など）</li>
<li>☐ そのジャンルで紹介できる商品・サービスはあるか</li>
<li>☐ まずはアフィで「人が動く感覚」を掴むか</li>
<li>☐ すでに語れる知識があってnoteにできそうか</li>
<li>☐ 決めた1つを、次の章で深掘りする準備はできたか</li>
</ul></div>
<p><b>奥にある理由：</b>人は選択肢が多いと選ぶこと自体が面倒で動けなくなる。「5つ全部やろう」は一見やる気に見えて、いちばん動けない状態だ。<strong>枠を狭く決めるほど人は動き出せる。</strong></p>

<div class="end">稼ぎはフォロワー数ではない。<strong>「単価 × 仕組み」だ。</strong><br>数を追うのをやめろ。先に「何を、いくらで、どう売るか」を決めろ。<br>最初の1つはアフィ。慣れたら順番に広げ、最後は仕組みを外に作る。<br><strong>今、取り扱う1つを決めろ。決めた人から動き出せる。</strong></div>
</div>
  `,

  'p3-mind': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>「教育・販売が大事」を聞いて終わる人と、お金に変える人の決定的な差</li>
<li>マネタイズを支える3つの柱と、なぜその順番でないと崩れるのか</li>
<li>たった1人を描く「ユーザー層の把握」と、それが投稿の材料になる理由</li>
<li>悩み→原因→解決策→未来で人が動く、心の順番</li>
<li>ファンを能動的に作る「雰囲気作り」</li>
<li>訴求の前後で出す投稿ネタを、自分の手で3本そろえる実践</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="知ってると体が動くの距離">
<rect x="6" y="50" width="100" height="44" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="56" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">知ってる</text>
<text x="56" y="87" text-anchor="middle" font-size="10" fill="#a0aec0">言葉を覚えた</text>
<rect x="214" y="50" width="100" height="44" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="264" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">体が動く</text>
<text x="264" y="87" text-anchor="middle" font-size="10" fill="#2b6cb0">投稿が作れる</text>
<path d="M110 72 L210 72" stroke="#b83280" stroke-width="2" stroke-dasharray="5 5"/>
<text x="160" y="42" text-anchor="middle" font-size="11" fill="#b83280">とんでもない距離</text>
<text x="160" y="112" text-anchor="middle" font-size="10" fill="#a0aec0">九九を暗記 ≠ レジで暗算してお釣りを出せる</text>
</svg>
<div class="figcap">「知ってる」で止まるから1円も生まれない</div>
</div>

<div class="key">失敗はほぼ1つに集約される。<strong>「知ってる」で止まっていることだ。</strong>「教育が大事」「販売が大事」を知らない人はいない。でも本当にできる人はほとんどいない。だから手が止まり、その日あった出来事を日記にして「伸びない」と悩む。</div>

<p>もう一段深く掘る。<strong>なぜ知ってるだけだと手が止まるのか。</strong>知識が「順番」と「材料」に変換されていないからだ。レシピを暗記しても、冷蔵庫に材料がなく手順が決まってなければ一品も出ない。</p>

<div class="warn">この章のゴールは知識を増やすことじゃない。<b>爆発的に伸びる人が必ず押さえる「3つの柱」を、自分の手で回せるようにすることだ。</b>柱がそろえば、訴求の前後で出す投稿ネタは向こうから決まってくる。</div>

<h3>マネタイズを支える3つの柱</h3>
<div class="vfig">
<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3つの柱と順番">
<rect x="40" y="120" width="240" height="14" rx="4" fill="#1e4e7e"/>
<text x="160" y="131" text-anchor="middle" font-size="10" fill="#fff">この3本がそろって初めて売れる</text>
<rect x="24" y="60" width="80" height="58" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="64" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">① 把握</text>
<text x="64" y="97" text-anchor="middle" font-size="9" fill="#2b6cb0">誰に届けるか</text>
<text x="64" y="110" text-anchor="middle" font-size="9" fill="#718096">＝土台</text>
<rect x="120" y="60" width="80" height="58" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">② 獲得</text>
<text x="160" y="97" text-anchor="middle" font-size="9" fill="#2b6cb0">どう刺すか</text>
<text x="160" y="110" text-anchor="middle" font-size="9" fill="#718096">＝武器</text>
<rect x="216" y="60" width="80" height="58" rx="8" fill="#fff5fa" stroke="#b83280"/>
<text x="256" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">③ 雰囲気</text>
<text x="256" y="97" text-anchor="middle" font-size="9" fill="#8a4a6e">どう温めるか</text>
<text x="256" y="110" text-anchor="middle" font-size="9" fill="#8a4a6e">＝火の管理</text>
<path d="M104 89 L120 89" stroke="#a0aec0" stroke-width="2"/>
<path d="M200 89 L216 89" stroke="#a0aec0" stroke-width="2"/>
<text x="160" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">順番を入れ替えても崩れる</text>
<text x="160" y="40" text-anchor="middle" font-size="9" fill="#718096">1つ抜けるだけで売れない</text>
</svg>
<div class="figcap">土台 → 武器 → 火の管理。この順でしか積めない</div>
</div>
<p><b>なぜこの順番か。</b>「誰に」を決めず「どう刺すか」を考えても、刺す相手がいない。相手が定まれば痛みが分かり、刺し方は自然に見える。刺して終わると心は冷めるから、③で火を絶やさず温める。<strong>この3つで初めて投稿ネタに一生困らなくなる。</strong></p>

<h2><span class="s">1</span>柱①：ユーザー層の把握</h2>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="全員に叫ぶと1人に呼びかける">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ みなさーん！</text>
<circle cx="40" cy="55" r="7" fill="#cbd5e0"/><circle cx="64" cy="50" r="7" fill="#cbd5e0"/><circle cx="88" cy="55" r="7" fill="#cbd5e0"/><circle cx="52" cy="78" r="7" fill="#cbd5e0"/><circle cx="78" cy="78" r="7" fill="#cbd5e0"/>
<text x="79" y="112" text-anchor="middle" font-size="10" fill="#718096">誰も振り向かない</text>
<line x1="160" y1="20" x2="160" y2="118" stroke="#e2e8f0"/>
<text x="245" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ そこの赤いリュックのあなた！</text>
<circle cx="208" cy="62" r="7" fill="#cbd5e0"/><circle cx="232" cy="62" r="7" fill="#cbd5e0"/>
<circle cx="270" cy="62" r="9" fill="#b83280"/>
<path d="M270 71 v8" stroke="#b83280" stroke-width="2"/>
<text x="245" y="112" text-anchor="middle" font-size="10" fill="#1e4e7e">名指しされた人は必ず止まる</text>
</svg>
<div class="figcap">全員に向けた言葉は、誰のものでもない言葉になる</div>
</div>

<div class="key"><strong>人は、自分に関係ない話を一切聞かない。</strong>だから最初に、たった1人を解像度MAXまで描く。<strong>狭く絞るほど、深く広がる。</strong>1人に向けた言葉は、同じ状況の何千人もが「これ、私のことだ」と受け取る。</p></div>

<h3>ターゲット分析の4項目を「書き出す」</h3>
<p>頭の中じゃなく、必ず紙やメモに書く。書くと言葉に固定され、そのまま投稿のネタ元になる。</p>
<table>
<tr><th>項目</th><th>書き出す中身（運用ジャンルの例）</th></tr>
<tr><td>得たい未来</td><td>お金に余裕／独立したい／副業で収入を増やす／時間の自由</td></tr>
<tr><td>ユーザーの悩み</td><td>成果が出ない／収益化できない／何から始めればいいかわからない</td></tr>
<tr><td>ユーザーの現状</td><td>会社と家の往復／お金に余裕がない／変えたいのに動けない</td></tr>
<tr><td>ターゲット外の層</td><td>運用に興味ない／暮らし美容だけ好き／副業に興味ない</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="頭の中はぼやけ書き出すと固定される">
<rect x="6" y="24" width="140" height="64" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="76" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">頭の中</text>
<text x="76" y="68" text-anchor="middle" font-size="10" fill="#a0aec0">なんとなくな人</text>
<text x="76" y="82" text-anchor="middle" font-size="10" fill="#a0aec0">→ぼやけた言葉</text>
<text x="160" y="60" text-anchor="middle" font-size="18" fill="#cbd5e0">→</text>
<rect x="174" y="24" width="140" height="64" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="244" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">書き出す</text>
<text x="244" y="68" text-anchor="middle" font-size="10" fill="#2b6cb0">言葉に固定</text>
<text x="244" y="82" text-anchor="middle" font-size="10" fill="#2b6cb0">→そのまま投稿へ</text>
</svg>
<div class="figcap">ターゲット分析＝投稿の材料を冷蔵庫に並べる作業</div>
</div>

<div class="key">「ターゲット外の層」は捨てる層じゃなく、<strong>ステップを踏めば取り込める層</strong>として残す。最初から興味がある人は数が少なく、市場の大半は「まだ興味がない人」だ。「今は違うが入口次第で来る人」として手元に置く。</div>

<h3>4項目を書く目的は「メリット」</h3>
<p>人はメリットがないと一切動かない。<strong>得が見えない情報は、脳が「自分に関係ない」と分類して読まずに流す。</strong>投稿に「あなたの現状・悩み・未来」が映ってないと、その人には存在しないのと同じだ。</p>
<div class="vs">
<div class="l"><div class="t">✗ 自分目線</div>「今日は副業の勉強を3時間。みんなも頑張ろう！」<div class="note">読者のトクがゼロ。だから動かない</div></div>
<div class="r"><div class="t">○ 相手のメリット目線</div>「会社と家の往復で1日が終わる人へ。通勤の30分だけ使えば、半年後に副業の入口は作れる」<div class="note">現状＋悩み＋未来が入ってる</div></div>
</div>
<p>右の文は4項目をそのまま材料にしている。現状「往復」、悩み「時間がない」、未来「半年後の入口」。<strong>ターゲット分析は飾りじゃなく、投稿の材料置き場だ。</strong></p>
<div class="warn">初心者の最大のつまずき＝<b>「誰に」を飛ばして「何を書くか」から考えること。</b>逆だ。「何を書くか」から入ると書けるのは「自分が今日やったこと」だけ。だから日記になる。先に「誰に」を決めれば、書く中身は相手の悩みが教えてくれる。</div>

<h2><span class="s">2</span>柱②：理想ファン層の獲得（訴求フレーム）</h2>
<p>誰に届けるかが決まったら、次は「どう刺すか」。このフレームは丸暗記して、考えなくても口から出るレベルまで体に入れる。</p>

<div class="flowbig">
<span>悩み（共感）</span><span>原因（言語化）</span><span>解決策（提示）</span><span class="is-goal">理想（未来）</span>
</div>
<p>この順番に、人の心が動く順番がそのまま入っている。<strong>順番を守るだけで、同じネタでも刺さり方が変わる。</strong></p>

<div class="tc"><div class="hd">1 悩み｜まず共感する</div><div class="bd"><span class="lab">「わかるよ」から入る</span>
例「副業始めたいのに、毎日仕事で疲れて結局スマホ見て寝るだけになってない？」<br><span class="lab">奥の理由：</span>人は自分を理解しない相手の話を聞かない。先に痛みを当てると心の扉が開く。閉じたまま解決策を渡しても押し売りに聞こえる。</div></div>

<div class="tc"><div class="hd">2 原因｜なぜそうなるかを言語化する</div><div class="bd"><span class="lab">モヤモヤに名前をつける</span>
例「動けないのは怠けてるからじゃない。最初の一歩を大きく設定しすぎてるだけ」<br><span class="lab">奥の理由：</span>人は正体のわからない不安には動けない。原因に名前がつくと「自分のせいじゃなかった」と力が抜け、初めて前を向ける。</div></div>

<div class="tc"><div class="hd">3 解決策｜具体的な手を見せる</div><div class="bd"><span class="lab">明日できる形で渡す</span>
例「やることは1つ。寝る前の10分、スマホのメモに『明日やる1個』を書く」<br><span class="lab">奥の理由：</span>抽象的な助言は「で、何を？」が残って動けない。手順が1つに絞られて初めて「これならできる」と手が動く。</div></div>

<div class="tc"><div class="hd">4 理想｜未来を見せて背中を押す</div><div class="bd"><span class="lab">やった先の景色</span>
例「続けた人から、3ヶ月後には『気づいたら副業が回ってた』に変わっていく」<br><span class="lab">奥の理由：</span>人は「今のつらさ」より「手に入る景色」に向かって動く。未来を見せると、作業が「なりたい自分への一歩」に意味が変わる。</div></div>

<h3>抽象論は1ミリも人を動かさない</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抽象は絵が浮かばず具体は浮かぶ">
<rect x="6" y="22" width="150" height="76" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="81" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">抽象</text>
<text x="81" y="62" text-anchor="middle" font-size="9" fill="#a0aec0">「時間の使い方は大切」</text>
<rect x="50" y="70" width="62" height="20" rx="4" fill="#fff" stroke="#cbd5e0" stroke-dasharray="3 3"/>
<text x="81" y="84" text-anchor="middle" font-size="9" fill="#cbd5e0">絵が浮かばない</text>
<rect x="164" y="22" width="150" height="76" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="239" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">具体</text>
<text x="239" y="60" text-anchor="middle" font-size="9" fill="#2b6cb0">「朝6時に30分散歩したら</text>
<text x="239" y="72" text-anchor="middle" font-size="9" fill="#2b6cb0">夜のだるさが消えた」</text>
<circle cx="220" cy="86" r="4" fill="#b83280"/><circle cx="239" cy="86" r="4" fill="#b83280"/><circle cx="258" cy="86" r="4" fill="#b83280"/>
<text x="239" y="113" text-anchor="middle" font-size="9" fill="#b83280">絵が浮かぶ→手が動く</text>
</svg>
<div class="figcap">脳は具体でしか映像化できない。映像が浮かんで初めて人は動く</div>
</div>
<div class="key">刺さる文の正体は<strong>「主語が相手」かつ「中身が具体」</strong>。刺さらない文は「主語が自分」で「中身が感想」。フレームは型、具体はその型に流す中身だ。</div>

<h2><span class="s">3</span>柱③：雰囲気作り（ファンは能動的に作る）</h2>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="放置した畑と世話した畑">
<rect x="6" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="81" y="40" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">✗ 放置</text>
<line x1="40" y1="72" x2="44" y2="60" stroke="#cbd5e0" stroke-width="2"/>
<line x1="70" y1="74" x2="66" y2="62" stroke="#cbd5e0" stroke-width="2"/>
<line x1="110" y1="73" x2="116" y2="61" stroke="#cbd5e0" stroke-width="2"/>
<rect x="20" y="80" width="120" height="6" fill="#cbd5e0"/>
<text x="81" y="98" text-anchor="middle" font-size="9" fill="#a0aec0">実らない</text>
<rect x="164" y="20" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="239" y="40" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">○ 世話する</text>
<circle cx="200" cy="60" r="6" fill="#b83280"/><circle cx="239" cy="56" r="7" fill="#b83280"/><circle cx="278" cy="60" r="6" fill="#b83280"/>
<line x1="200" y1="66" x2="200" y2="80" stroke="#2b6cb0" stroke-width="2"/>
<line x1="239" y1="63" x2="239" y2="80" stroke="#2b6cb0" stroke-width="2"/>
<line x1="278" y1="66" x2="278" y2="80" stroke="#2b6cb0" stroke-width="2"/>
<rect x="178" y="80" width="122" height="6" fill="#2b6cb0"/>
<text x="239" y="98" text-anchor="middle" font-size="9" fill="#2b6cb0">収穫できる</text>
</svg>
<div class="figcap">「置いておけば誰かがファンになる」は幻想。雰囲気は自分で起こす火だ</div>
</div>

<p><b>奥の理由：</b>人はにぎわう場所に入りたがり、しんとした場所には入らない。誰も反応してないアカウントは客のいない店で、新しい人ほど入りづらい。<strong>だからにぎわいは最初に自分の手で作る。</strong></p>

<div class="vs">
<div class="l"><div class="t">✗ 受け身</div>・自然にファンになる<br>・DMはいつか来る<br>・いいことを書けばOK</div>
<div class="r"><div class="t">○ 能動的</div>・まず目の前の1人を満足させる<br>・質問にはストーリーで返答<br>・横のつながりを見せる</div>
</div>

<h3>能動的に、具体的に何をするか</h3>
<div class="step"><span class="sn">1</span><span class="snm">目の前の1人を全力で満足させる</span><p>100人に薄く返すより、1人を感動させる。<b>なぜ1人か：</b>感動した1人は黙ってない。「この人すごい」と周りに話す。その1人が口コミの起点、にぎわいの火種になる。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">質問が来たらストーリーで返す</span><p>許可を取ってストーリーで取り上げて答える。<b>なぜ表で返すか：</b>裏で返すと2人の中で消える。表で見せると「ちゃんと反応してくれる人だ」が全員に伝わり、他の人も質問しやすくなる。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">フォロワー同士の横のつながりを見せる</span><p>コメントを拾い、感想をシェアする。<b>なぜ横か：</b>人は「自分だけじゃない」と感じた場所に居つく。縦の線だけでなく横の線が見えると「仲間がいる場所」になる。</p></div>

<div class="key">にぎわってる店に人が入るのと同じで、にぎわって「見える」アカウントに人は集まる。これは演出ではなく、<strong>火が燃え移るまで自分で薪をくべる作業だ。</strong></div>

<h2><span class="s">4</span>3つの柱をつなぐと「訴求の前後」が見えてくる</h2>
<p>3本柱はバラバラの知識じゃない。<strong>売る瞬間（訴求）を真ん中に置くと、1本の線でつながる。</strong>いきなり訴求日だけ投稿しても、信頼が貯まってない相手には「どうせ宣伝でしょ」で終わる。</p>

<div class="flowbig">
<span>【前】信頼と欲しいを積む</span><span>【訴求】解決策を出す</span><span class="is-goal">【後】不安を消し温め直す</span>
</div>
<div class="vfig">
<svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="信頼欲しい安心の3段階">
<rect x="6" y="40" width="96" height="40" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="54" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">信頼</text>
<text x="54" y="73" text-anchor="middle" font-size="9" fill="#2b6cb0">前：柱①②</text>
<rect x="112" y="40" width="96" height="40" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">欲しい</text>
<text x="160" y="73" text-anchor="middle" font-size="9" fill="#2b6cb0">訴求：解決策</text>
<rect x="218" y="40" width="96" height="40" rx="8" fill="#fff5fa" stroke="#b83280"/>
<text x="266" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">安心</text>
<text x="266" y="73" text-anchor="middle" font-size="9" fill="#8a4a6e">後：柱③</text>
<path d="M102 60 L112 60" stroke="#a0aec0" stroke-width="2"/>
<path d="M208 60 L218 60" stroke="#a0aec0" stroke-width="2"/>
<text x="160" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">信頼→欲しい→安心→初めて買う</text>
</svg>
<div class="figcap">順番を飛ばして売れば押し売り、安心を抜けば最後の一歩で止まる</div>
</div>
<p>だから投稿ネタも「前・訴求・後」の3カテゴリで考えると、迷わずそろう。</p>

<h2><span class="s">5</span>★実践：訴求前後で出す投稿ネタ3本を作る</h2>
<p>例として「副業の始め方をまとめた教材を売る」場面で組み立てる。自分のジャンルに置き換えればそのまま使える。</p>

<div class="tc"><div class="hd">ネタ1【訴求の前】信頼と「欲しい」を積む</div><div class="bd"><span class="lab">柱②フレーム：悩み→原因→解決策→理想</span>
<b>悩み：</b>「副業やりたいのに、毎日仕事で力尽きて結局何も始められてない人いない？」<br>
<b>原因：</b>「動けないのは意志が弱いからじゃない。最初のハードルを高く設定しすぎてるだけ」<br>
<b>解決策：</b>「まずは寝る前の5分、スマホのメモに『明日やる1個』を書くだけ」<br>
<b>理想：</b>「この積み重ねから、半年後に副業の入口を作った人を何人も見てきた」<br>
<div class="note">この日は売らない。売ると悩みの代弁すべてが「売るための前振り」に見え、信頼が一気に冷める。</div></div></div>

<div class="tc"><div class="hd">ネタ2【訴求】解決策として商品を出す</div><div class="bd"><span class="lab">柱①の相手に、メリットを正面から</span>
<b>つなぎ：</b>「『1個ずつ』の積み方を、最初から最後まで順番にまとめた」<br>
<b>中身：</b>「会社と家の往復で時間がない人でも、通勤の30分だけで進められる手順書にした」<br>
<b>言い訳潰し：</b>「『何から始めればいいかわからない』が一番のつまずき。だから順番を全部決めておいた」<br>
<b>行動：</b>「気になる人はDMで『副業』って送って」<br>
<div class="note">前日の信頼があるから「欲しい」が動く。人は買わない理由を1つでも見つけると盾にして動かない。先回りで盾を外す。</div></div></div>

<div class="tc"><div class="hd">ネタ3【訴求の後】不安を消して温め直す</div><div class="bd"><span class="lab">柱③：能動アクション＋他者の実例</span>
<b>反応拾い：</b>「昨日たくさんDMもらった。一番多かったのが『自分にもできる？』って不安」<br>
<b>不安解消：</b>「断言する。これは才能じゃなくて順番の問題。順番どおりなら誰でも進める」<br>
<b>横のつながり：</b>「実際、先に始めた人から『1個ずつなら続いた』って声が届いてる」<br>
<b>もう一押し：</b>「迷ってるなら今日が一番早い。あなたの半年後は、今日動くかで変わる」<br>
<div class="note">人は買う直前に一番ためらう。放置すると欲しかった気持ちごと冷める。他者の声は自分のどんな言葉より信じられる。</div></div></div>

<div class="stats">
<div class="stat-c"><div class="n">前</div><div class="l">①で相手を描き、②のフレームで悩みを代弁し信頼を積む</div></div>
<div class="stat-c"><div class="n">訴求</div><div class="l">解決策として商品を出し、行動まで言い切る</div></div>
<div class="stat-c"><div class="n">後</div><div class="l">③の能動アクションと買った人の声で温め直す</div></div>
</div>
<div class="key">この3本は全部、3つの柱から生まれている。柱がそろえばネタは無限に量産できる。<strong>ネタが出ない時は柱のどれかが空っぽだ。発想を絞らず、柱に戻る。</strong></div>

<h2><span class="s">6</span>よくあるつまずきと直し方</h2>
<table>
<tr><th>つまずき</th><th>直し方</th></tr>
<tr><td>訴求日にいきなり売って滑る</td><td>「信頼を積む日」を抜かしてる。売る前に悩みの代弁を1〜数本はさむ</td></tr>
<tr><td>毎回「いい話」で終わって売れない</td><td>出口を商品につなげてない。勇気を出して「DMで送って」まで言い切る</td></tr>
<tr><td>反応が薄い</td><td>主語が「自分」。柱①の相手に向けて「あなた」で書き直す</td></tr>
<tr><td>ファンが増えない</td><td>受け身。柱③の3アクションを今日やる。にぎわいは起こすもの</td></tr>
</table>

<div class="check"><ul>
<li>柱① 届けたい1人を、未来・悩み・現状・ターゲット外まで書き出した？</li>
<li>柱② 悩み→原因→解決策→理想のフレームで、具体例を入れた？</li>
<li>柱③ 受け身じゃなく、自分のアクションで雰囲気を作る前提で考えた？</li>
<li>【前】信頼を積むネタを用意した？</li>
<li>【訴求】商品を出して行動まで言い切るネタを用意した？</li>
<li>【後】不安を消して温め直すネタを用意した？</li>
</ul></div>

<div class="end">教育と販売は「知ってる」だけじゃ1円にもならない。<br><strong>「誰に・どう刺し・どう温めるか」の3本柱を回した人だけが、ストーリーでお金を生む。</strong><br>まず今日、あなたの訴求前後の3本を書き出すぞ。</div>
</div>
  `,

  'p3-ideas': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>ネタが尽きる本当の原因＝毎回「探している」こと</li>
<li>「探す」と尽きて「型に当てはめる」と尽きない理由</li>
<li>教育・共感・訴求・質問返しの4タイプと回す順番</li>
<li>料理・子育て・自己肯定感・垢抜け・美容・動画編集の使える型</li>
<li>どこでも効く万能ネタと、人柄でファンになる理由</li>
<li>宿題：共感ネタを5個ネタ帳に足す</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="探すと当てはめるの違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 探す</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 当てはめる</text>
<circle cx="55" cy="70" r="5" fill="#cbd5e0"/><circle cx="95" cy="58" r="5" fill="#cbd5e0"/><circle cx="78" cy="92" r="5" fill="#cbd5e0"/><circle cx="110" cy="85" r="5" fill="#cbd5e0"/>
<text x="79" y="118" text-anchor="middle" font-size="11" fill="#a0aec0">砂漠で水を掘る</text>
<text x="79" y="134" text-anchor="middle" font-size="11" fill="#a0aec0">出ない→止まる</text>
<rect x="180" y="46" width="122" height="20" rx="5" fill="#fff" stroke="#2b6cb0"/>
<rect x="180" y="72" width="122" height="20" rx="5" fill="#fff" stroke="#2b6cb0"/>
<text x="241" y="60" text-anchor="middle" font-size="10" fill="#2b6cb0">型に流し込む</text>
<text x="241" y="86" text-anchor="middle" font-size="10" fill="#2b6cb0">言葉を置き換える</text>
<text x="241" y="118" text-anchor="middle" font-size="11" fill="#1e4e7e">選ぶだけ</text>
<text x="241" y="134" text-anchor="middle" font-size="11" fill="#1e4e7e">数分で1本</text>
</svg>
<div class="figcap">ネタは"探すもの"じゃなく"選ぶもの"</div>
</div>

<div class="key">投稿が止まる人の失敗はたった1つ。毎回ゼロから「何かいいネタないかな」と<strong>探している</strong>こと。<strong>ゼロから生むから尽きる。型に流し込むから尽きない。</strong></div>

<h3>人は「白紙」の前で固まる</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="冷蔵庫とレシピ本">
<rect x="14" y="20" width="130" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="79" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">冷蔵庫の前</text>
<text x="79" y="70" text-anchor="middle" font-size="11" fill="#a0aec0">何作ろう…</text>
<text x="79" y="88" text-anchor="middle" font-size="11" fill="#a0aec0">手が止まる</text>
<text x="160" y="65" text-anchor="middle" font-size="18" fill="#cbd5e0">→</text>
<rect x="176" y="20" width="130" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="241" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">レシピを開く</text>
<text x="241" y="70" text-anchor="middle" font-size="11" fill="#2b6cb0">今日はこれ</text>
<text x="241" y="88" text-anchor="middle" font-size="11" fill="#2b6cb0">すぐ手が動く</text>
</svg>
<div class="figcap">人は創るのは苦手、選ぶのは得意</div>
</div>
<p>ネタ帳は保管庫じゃない。<strong>白紙を消す装置だ。</strong>あなたが本当に欲しいのは新しいネタじゃなく、"考えなくても手が動く状態"。</p>

<div class="flowbig">
<span>型がある</span><span>白紙が消える</span><span>数分で1本</span><span>毎日続く</span><span class="is-goal">信頼が貯まる</span>
</div>
<div class="warn">ネタ帳の目的は「面白いネタ集め」じゃない。<b>「手が止まらない状態を作ること」だ。</b>下手な100点を待つより、雑な60点を今日出す人が伸びる。</div>

<h2><span class="s">1</span>なぜ「探す」と尽きて「型」だと尽きないのか</h2>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="切り替え3手順">
<rect x="4" y="40" width="96" height="40" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="52" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">①タイプ決め</text>
<text x="52" y="73" text-anchor="middle" font-size="10" fill="#2b6cb0">今日は共感</text>
<rect x="112" y="40" width="96" height="40" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">②型を選ぶ</text>
<text x="160" y="73" text-anchor="middle" font-size="10" fill="#2b6cb0">献立しんどい</text>
<rect x="220" y="40" width="96" height="40" rx="9" fill="#fff5fa" stroke="#b83280"/>
<text x="268" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">③置き換える</text>
<text x="268" y="73" text-anchor="middle" font-size="10" fill="#8a4a6e">昨日のため息</text>
<path d="M100 60 L112 60" stroke="#a0aec0" stroke-width="2"/>
<path d="M208 60 L220 60" stroke="#a0aec0" stroke-width="2"/>
<text x="160" y="106" text-anchor="middle" font-size="11" fill="#718096">考えてない。選んで、置き換えただけ</text>
</svg>
<div class="figcap">この3手順で「白紙から考える時間」が消える</div>
</div>

<div class="vs">
<div class="l"><div class="t">✗ 尽きる人</div>毎回白紙から考える→思いつかない→やめとこ→3日空く→冷える。点が線にならない。</div>
<div class="r"><div class="t">○ 尽きない人</div>先に枠を決める→型に流し込む→数分で1本→毎日続く。地味でも線になる。</div>
</div>
<div class="key"><strong>売上は、貯まった信頼の総量に比例する。</strong>信頼は毎日の"線"でしか貯まらない。型を持つ意味は楽をすることじゃなく、<strong>毎日続けられる体にして信頼を貯め続けること。</strong>だから1日1本でいい。</div>
<p><b>最初が「タイプ決め」な理由：</b>人は選択肢が広いほど動けない。「何でもいいから書け」が一番止まる。「今日は共感だけ」と枠を狭めた瞬間、脳が「これなら出せる」と動く。<strong>制約は創作の敵じゃない。エンジンだ。</strong></p>

<h2><span class="s">2</span>ネタの4タイプと、回す順番</h2>
<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="4タイプを回す">
<circle cx="160" cy="78" r="58" fill="none" stroke="#cbd5e0" stroke-width="2" stroke-dasharray="4 4"/>
<rect x="118" y="6" width="84" height="30" rx="8" fill="#2b6cb0"/><text x="160" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">教 教育</text>
<rect x="232" y="62" width="84" height="30" rx="8" fill="#9cb8d6"/><text x="274" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">共 共感</text>
<rect x="118" y="120" width="84" height="30" rx="8" fill="#b83280"/><text x="160" y="139" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">訴 訴求</text>
<rect x="4" y="62" width="84" height="30" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="46" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">問 質問返し</text>
</svg>
<div class="figcap">日替わりで役割を変えて回す＝飽きずに信頼が積む</div>
</div>

<table>
<tr><th>タイプ</th><th>役割</th><th>あなたが見える像</th></tr>
<tr><td>教 教育</td><td>知識を「なぜそうするか」まで。保存される</td><td>詳しい人</td></tr>
<tr><td>共 共感</td><td>悩みを代弁。「それ、わかる」を作る</td><td>わかってくれる人</td></tr>
<tr><td>訴 訴求</td><td>体験談ベースの自然な誘導</td><td>そっと背中を押す人</td></tr>
<tr><td>問 質問返し</td><td>質問箱で悩みを集める＋返答で信頼</td><td>話を聞いてくれる人</td></tr>
</table>
<div class="key">覚え方は<strong>「教えて・わかって・誘って・聞いて」</strong>。4つが噛み合うと、ネタ切れも信頼不足も同時に消える。</div>

<h3>なぜ「混ぜる」のか</h3>
<p>同じタイプだけ出すと、あなたの役割が1つに固定される。教育だけ＝便利だけど先生っぽい。訴求だけ＝いつも何か売ってる人。<strong>人は便利な人には頼るが惚れない。売る人には警戒する。</strong>混ぜると像が立体になり「人」を感じる。<strong>惚れるのは機能じゃなく人だ。</strong></p>

<h3>理想バランス（週7本の目安）</h3>
<div class="splitbar">
<div class="sb-main" style="width:43%">共感 3本</div><div class="sb-sub" style="width:28%">教育 2本</div><div class="sb-sub" style="width:15%">訴求 1</div><div class="sb-sub" style="width:14%">問 1</div>
</div>
<p><b>共感を一番増やす理由：</b><strong>人は「正しいこと」より「わかってくれる人」から買う。</strong>情報はググれば出る＝希少価値がない。でも「自分の気持ちを自分より上手に言葉にする人」は少ない。だから惚れる。反応を見て調整していけ。</p>
<div class="note">つまずき：「教育を増やせば役立つ人になれる」は逆。役立つだけの人は便利屋で終わる。買われるのはわかってくれる人。教育は"柱"でいい、前に出すのは共感だ。</div>

<h2><span class="s">3</span>ジャンル別ネタ集（そのまま使える）</h2>
<p>自分のジャンルの型を真似て、言葉だけ自分のものに変える。各タイプ1個ずつで4日分。共通の原理は1つ——<strong>「やり方」で終わらせず「なぜ？」まで言うと、情報が信頼に変わる。</strong></p>

<div class="tc"><div class="hd">料理</div><div class="bd">
<span class="lab">教育</span>鶏むね肉をやわらかくする下処理、知ってますか？<br>
<span class="lab">教育(理由付き)</span>塩を先に入れる理由、ちゃんと知ってますか？<br>
<span class="lab">共感</span>毎日献立を考えるのが正直しんどい方、いませんか？<br>
<span class="lab">訴求</span>この方法を入れてから献立が軽くなった話<br>
<span class="lab">質問返し</span>料理でいちばん困ってることは？
<div class="note">奥の理由：教育は「なぜ？」まで言うと保存される。「塩を先＝下味がしみる」と理由を一言足すと、読み手が"自分で納得"する。人は理由まで腑に落ちたことを信じて使う。</div></div></div>

<div class="tc"><div class="hd">子育て</div><div class="bd">
<span class="lab">教育</span>自己肯定感が上がる声かけ3つ／やる気を引き出す言葉<br>
<span class="lab">失敗談</span>これ、子どもの自己肯定感を下げる言葉だったと気づいた<br>
<span class="lab">共感</span>子育てしながら自分を後回しにしてる方、いませんか？<br>
<span class="lab">訴求</span>これを入れてから育児が楽になった話<br>
<span class="lab">質問返し</span>「0〜3歳のママに届けたい話です」とターゲットを絞る
<div class="note">奥の理由：失敗談が強いのは"横の関係"を作るから。正論は上下を作り、人は身構える。「私もやっちゃってた」から入ると「この人も同じだ」になる。気づきは告白の形で出す。</div></div></div>

<div class="tc"><div class="hd">自己肯定感</div><div class="bd">
<span class="lab">教育(やめたら楽)</span>人と比べるのをやめた話／完璧主義をやめて変わったこと<br>
<span class="lab">教育(1アクション)</span>毎朝これをやってから気持ちが変わった<br>
<span class="lab">共感</span>自分のことが好きになれない時期、ありましたか？<br>
<span class="lab">訴求</span>3年前の私→今の私。きっかけはこれ
<div class="note">奥の理由：「足す」より「やめる」が刺さるのは、しんどい人がすでに頑張りすぎているから。やることを増やすと自分を責める材料が増える。「やめていい」は荷物を下ろす言葉。だから救われて惚れる。</div></div></div>

<div class="tc"><div class="hd">垢抜け</div><div class="bd">
<span class="lab">教育</span>眉毛を変えるだけで印象が変わる理由<br>
<span class="lab">NG理由付き</span>このメイクが実は老けて見える理由<br>
<span class="lab">共感</span>おしゃれしたいけど何が似合うかわからない<br>
<span class="lab">訴求</span>これを使い始めてから印象が変わった＋理由
<div class="note">奥の理由：「NG＋理由」が強いのは、理由がないとただの脅しで終わるから。「老けて見える」だけだと不安をあおっただけ。「なぜ」まで言うと不安が"納得"に変わり、あなたへの信頼になる。脅して終わるな、理由で受け止めろ。</div></div></div>

<div class="tc"><div class="hd">美容</div><div class="bd">
<span class="lab">教育(順番)</span>この順番でやるだけで仕上がりが変わる<br>
<span class="lab">教育(絞り込み)</span>スキンケアで本当に大事な3つだけ<br>
<span class="lab">共感</span>ニキビがあると外出が憂鬱になる気持ち、わかります<br>
<span class="lab">訴求(正直レビュー)</span>期待してたけどイマイチだった話
<div class="note">奥の理由：正直な感想が信頼を一気に上げるのは、人が「売る人」を一番警戒しているから。良いものばかり勧める人は疑われる。「これはイマイチ」と言える人は警戒が外れる。デメリットを言える人の"いい"だけが信じられる。</div></div></div>

<div class="tc"><div class="hd">動画編集</div><div class="bd">
<span class="lab">教育</span>伸びる動画に必ず入っている要素／再生数が伸びない原因<br>
<span class="lab">NG編集</span>初心者がやりがちなミス3つ<br>
<span class="lab">共感</span>動画作っても再生数が全然伸びない経験ありませんか？<br>
<span class="lab">訴求</span>この道具を使ってから編集が一気に速くなった
<div class="note">奥の理由：「ミス3つ」と数で絞ると最後まで読まれるのは、ゴールが見えてゴールまで付き合えるから。終わりの見えない話は途中で離脱する。数は、読み手に地図を渡す行為だ。</div></div></div>

<h2><span class="s">4</span>どのジャンルにも使える万能ネタ</h2>
<div class="stats">
<div class="stat-c"><div class="n">日常</div><div class="l">今日あったこと・気づき。人柄が伝わる</div></div>
<div class="stat-c"><div class="n">感謝</div><div class="l">フォロワーへの感謝・報告。よく来る質問に答える</div></div>
<div class="stat-c"><div class="n">レビュー</div><div class="l">最近買ってよかったもの。正直な感想</div></div>
<div class="stat-c"><div class="n">豆知識</div><div class="l">「これ知ってる？」意外な事実。保存される</div></div>
</div>
<p><b>奥の理由：</b>なぜ何でもない話がファンを作るのか。<strong>正しさは記憶に残らない。感情が記憶に残る。</strong>便利な情報はすぐ消えるが、「この人こういう人なんだ」という人柄は感情とセットで残る。</p>
<div class="key">「今日あったこと」をバカにするな。<strong>人は「完璧な発信者」より「応援したくなる人」を買う。</strong>完璧さは尊敬を生むが、隙は親しみを生む。買うのは親しみの方だ。</div>

<h2><span class="s">5</span>★宿題：共感ネタを5個作る</h2>
<div class="key">一番増やすべきは<strong>共感</strong>。フォロワーの頭の中にある言葉を先に言うだけだから尽きにくい。そして<strong>人が惚れる瞬間が「わかってもらえた」と感じた時</strong>だから。</div>

<div class="step"><span class="sn">STEP1</span><span class="snm">「あの瞬間」を1つ思い出す</span>
<p>抽象的な悩み（「肌が気になる」）じゃダメ。<strong>映像が浮かぶシーン</strong>まで降りる。「鏡を見て、肌の粗をかくす化粧品を重ねながらため息ついた朝」のように。</p>
<p><b>なぜ降りるか：</b>脳は抽象では映像を作れない。<strong>映像が浮かんで初めて感情が動く。</strong>「ため息ついた朝」は画が見えて「それ私だ」になる。</p></div>

<div class="step"><span class="sn">STEP2</span><span class="snm">「〜な方、いませんか？」の形にする</span>
<p><b>なぜ問いかけか：</b>言い切りは読み手を"観客"に、問いかけは"参加者"にする。「ありませんか？」と聞かれると頭の中で「あー、あるある」と自分で答える。<strong>自分で答えた瞬間、その投稿は読み手の話になる。</strong></p>
<div class="draft">ファンデを塗っても、夕方には毛穴落ちしてる…って経験、ありませんか？</div></div>

<div class="step"><span class="sn">STEP3</span><span class="snm">「わかる、私もそうだった」を足す</span>
<p><b>なぜ自己開示か：</b>問いかけだけだと聞く側＝上、答える側＝下の空気が残る。「私もそうでした」で横に並ぶ。<strong>信頼は「すごい」でなく「私と同じだ」から生まれる。</strong></p>
<div class="draft">私もずっとそうでした。何度塗り直しても夕方には崩れて、外で鏡見るのが憂鬱で。</div></div>

<div class="step"><span class="sn">STEP4</span><span class="snm">5個分のシーンを並べる</span>
<p>STEP1〜3を5回くり返すだけ。下の自分のジャンルの行を真似て言葉を変える。</p></div>

<table>
<tr><th>ジャンル</th><th>共感ネタ（あの瞬間を言う）</th></tr>
<tr><td>料理</td><td>夕方になると今日も献立決まってない…ってなる方、いませんか？</td></tr>
<tr><td>子育て</td><td>気づいたら子ども優先で、自分のごはん立ったまま食べてる方、いませんか？</td></tr>
<tr><td>自己肯定感</td><td>SNS見て、なんで自分だけ…って落ち込んだ夜、ありませんでしたか？</td></tr>
<tr><td>垢抜け</td><td>服は買うのに、結局いつもの組み合わせに戻ってる方、いませんか？</td></tr>
<tr><td>美容</td><td>すっぴんで宅配を受け取るのが憂鬱、って気持ちわかります</td></tr>
</table>

<div class="good"><b>○ 良い共感</b>「夜中に子どもがやっと寝て、自分の時間…と思ったらもう日付が変わってた方、いませんか？」<br>→ シーンが具体的。映像が浮かぶから「それ私だ」になる。</div>
<div class="bad"><b>✗ 浅い共感</b>「子育てって大変ですよね。」<br>→ 抽象的すぎて誰にも刺さらない。画が浮かばないから流れて消える。</div>

<div class="check"><ul>
<li>5個とも「具体的なシーン」になってる？（画が浮かぶか）</li>
<li>「〜な方、いませんか？」「気持ち、わかります」の形か？</li>
<li>自分も同じだった、と寄り添う一言を足したか？（横に並べたか）</li>
<li>説教・上から目線になってないか？</li>
<li>5個、いまネタ帳に書き写したか？</li>
</ul></div>

<h2><span class="s">6</span>使い回しのコツ（1ネタを何度も使う）</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1つの悩みを4タイプで回す">
<circle cx="160" cy="65" r="30" fill="#fff5fa" stroke="#b83280"/><text x="160" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">毛穴</text><text x="160" y="78" text-anchor="middle" font-size="10" fill="#8a4a6e">1ネタ</text>
<rect x="120" y="2" width="80" height="22" rx="6" fill="#9cb8d6"/><text x="160" y="17" text-anchor="middle" font-size="10" font-weight="700" fill="#1e4e7e">共感 憂鬱だよね</text>
<rect x="232" y="54" width="84" height="22" rx="6" fill="#2b6cb0"/><text x="274" y="69" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">教育 防ぐ順番</text>
<rect x="120" y="106" width="80" height="22" rx="6" fill="#b83280"/><text x="160" y="121" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">訴求 変えた話</text>
<rect x="4" y="54" width="84" height="22" rx="6" fill="#eaf1f8" stroke="#2b6cb0"/><text x="46" y="69" text-anchor="middle" font-size="10" font-weight="700" fill="#1e4e7e">問 困ってる？</text>
</svg>
<div class="figcap">ネタは「数」じゃなく「角度」で増やす</div>
</div>
<p><b>奥の理由：</b>同じ題材を何度出していいのは、<strong>フォロワーは過去投稿を全部覚えていないから。</strong>むしろ角度を変えて何度も触れる題材ほど「この人はこれに詳しい」を作る。1つの悩みを4タイプで回すのは手抜きじゃなく、専門性を刷り込む設計だ。</p>
<div class="key">1個の悩みを4タイプで回せば1週間もつ。<strong>足りないのは題材の数じゃない。角度の引き出しだ。</strong></div>
<div class="warn">注意：同じ題材を同じ角度・同じ言い回しで出すのはNG。「またこれか」になる。<b>変えるのは題材じゃなく角度だ。</b></div>

<h2><span class="s">7</span>質問返しでネタが「自動で増える」状態に</h2>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="質問返しの循環">
<rect x="6" y="40" width="92" height="34" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/><text x="52" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">質問箱で募集</text>
<rect x="114" y="40" width="92" height="34" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/><text x="160" y="55" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">生の言葉</text><text x="160" y="69" text-anchor="middle" font-size="10" fill="#2b6cb0">そのまま保存</text>
<rect x="222" y="40" width="92" height="34" rx="9" fill="#fff5fa" stroke="#b83280"/><text x="268" y="55" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">返答→投稿</text><text x="268" y="69" text-anchor="middle" font-size="10" fill="#8a4a6e">信頼が積む</text>
<path d="M98 57 L114 57" stroke="#a0aec0" stroke-width="2"/>
<path d="M206 57 L222 57" stroke="#a0aec0" stroke-width="2"/>
<text x="160" y="98" text-anchor="middle" font-size="11" fill="#718096">フォロワーがネタをくれる仕組み</text>
</svg>
<div class="figcap">"確実に刺さるネタ"だけが集まる</div>
</div>
<p><b>奥の理由：</b>自分で考えたネタは「刺さるかな」と当てに行く博打。フォロワーの言葉は<strong>すでに刺さることが証明されたネタだ。</strong>本人が悩んで送ってきた言葉だから外れない。</p>
<div class="step"><span class="sn">1</span><span class="snm">質問箱で悩みを募集する</span><p>ターゲットを絞ると質が上がる（例：「0〜3歳のママに届けたい話です」）。<b>なぜ絞るか：</b>「なんでも送って」は広すぎて止まる。枠を狭く示すほど「これなら送れる」と動く。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">届いた言葉をそのまま書く</span><p>きれいに直さず生の言葉で保存。<b>なぜ直さないか：</b>本人が使った生の言葉は「作り物じゃない」説得力が宿る。それが別の同じ悩みの人に一番刺さる。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">返答を投稿にして信頼を積む</span><p>「よく来る質問に答えます」で全員の疑問に答えたことになる。<b>なぜ全員に効くか：</b>1人の悩みは、言葉にできない大勢が同じく抱える悩みだからだ。</p></div>

<h2><span class="s">8</span>続けるための心構え</h2>
<div class="vs">
<div class="l"><div class="t">✗ 止まる人</div>「もっといいネタないかな」と探し続け、1本も出さずに1週間が終わる。点すら打てない。</div>
<div class="r"><div class="t">○ 伸びる人</div>枠を決めネタ帳から1個選び、数分で雑に1本出す。毎日続く。線になる。</div>
</div>
<p><b>奥の理由：</b>なぜ数を出した人が伸びるのか。<strong>投稿は出すたびに言葉と型が磨かれる"練習"だから。</strong>100点を待つ間、その人は1回も練習していない。雑でも30本出した人は30回フォームを修正している。寝かせた名作は誰の信頼も生まない。</p>

<h2><span class="s">9</span>検品：また「探して」ないか</h2>
<div class="check"><ul>
<li>今日のタイプを、書き出す前に1つ決めたか？（枠から入ったか）</li>
<li>白紙から考えてないか？（型を選んで置き換えただけか）</li>
<li>4タイプを混ぜているか？（人が平面になってないか）</li>
<li>教育は「やり方」で終わってないか？（「なぜ」まで言ったか）</li>
<li>共感は抽象で流してないか？（画が浮かぶシーンまで降りたか）</li>
<li>正論で上から教えてないか？（自己開示で横に並べたか）</li>
<li>完璧を待ってないか？（60点でも今日出す側にいるか）</li>
</ul></div>
<div class="end">ネタは「探すもの」じゃない。<strong>型から「選ぶもの」だ。</strong><br>4タイプを日替わりで回し、ジャンル別の型はそのまま真似していい。<br>完璧を待つな。<strong>今日、共感ネタを1個出すところから始めろ。</strong></div>
</div>
  `,

  'p3-conversation': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>ストーリーの失敗＝「発信」してしまうこと</li>
<li>売れる人は"発信"じゃなく"会話"している理由</li>
<li>お客が欲しいのは「情報」じゃない、という大前提</li>
<li>視聴者を友達に変える9つの原則</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="発信と会話の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 発信</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 会話</text>
<!-- 発信: megaphone to crowd -->
<path d="M30 70 l26 -14 v40 l-26 -14 z" fill="#a0aec0"/>
<rect x="26" y="64" width="8" height="24" rx="2" fill="#718096"/>
<path d="M60 60 q10 16 0 32" stroke="#a0aec0" stroke-width="2" fill="none"/>
<path d="M66 54 q16 22 0 44" stroke="#cbd5e0" stroke-width="2" fill="none"/>
<circle cx="104" cy="62" r="7" fill="#cbd5e0"/><circle cx="126" cy="62" r="7" fill="#cbd5e0"/>
<circle cx="104" cy="92" r="7" fill="#cbd5e0"/><circle cx="126" cy="92" r="7" fill="#cbd5e0"/>
<text x="79" y="130" text-anchor="middle" font-size="11" fill="#718096">一方通行。視聴者は惚れない</text>
<!-- 会話: two speech bubbles -->
<rect x="186" y="50" width="56" height="34" rx="10" fill="#2b6cb0"/><path d="M198 84 l0 10 l12 -10 z" fill="#2b6cb0"/>
<rect x="246" y="74" width="56" height="34" rx="10" fill="#fff" stroke="#2b6cb0"/><path d="M290 108 l0 10 l-12 -10 z" fill="#fff" stroke="#2b6cb0"/>
<text x="214" y="71" text-anchor="middle" font-size="11" fill="#fff">わかるよ</text>
<text x="274" y="95" text-anchor="middle" font-size="11" fill="#2b6cb0">私も！</text>
<text x="241" y="130" text-anchor="middle" font-size="11" fill="#1e4e7e">双方向。友達になる</text>
</svg>
<div class="figcap">マイクで放送するな。隣で会話しろ</div>
</div>

<div class="key">お客を"視聴者"扱いするから売れない。<strong>"友達"扱いするから売れる。</strong>物は、友達になった後に勝手に売れる。</div>

<h3>お客は「情報」が欲しいんじゃない</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="情報とわかってもらえる体験">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">情報</text>
<text x="75" y="74" text-anchor="middle" font-size="11" fill="#a0aec0">ググれば出る</text>
<text x="75" y="90" text-anchor="middle" font-size="11" fill="#a0aec0">＝ありふれてる</text>
<text x="160" y="65" text-anchor="middle" font-size="20" fill="#cbd5e0">≠</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="245" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">わかってもらえた</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#8a4a6e">この人少ない</text>
<text x="245" y="86" text-anchor="middle" font-size="11" fill="#8a4a6e">＝希少＝惚れる</text>
</svg>
<div class="figcap">あなたが本当に売ってるのは"わかってもらえる感覚"</div>
</div>
<p>ファンになる理由は「情報が役立った」からじゃない。<strong>「この人は私をわかってくれる」と感じたからだ。</strong></p>

<div class="flowbig">
<span>わかってもらえる</span><span>信頼が積まれる</span><span>友達になる</span><span class="is-goal">勝手に売れる</span>
</div>

<h2><span class="s">1</span>発信は「点」、会話は「線」</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="点と線">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 発信＝点</text>
<circle cx="30" cy="70" r="6" fill="#a0aec0"/><circle cx="70" cy="50" r="6" fill="#a0aec0"/><circle cx="110" cy="85" r="6" fill="#a0aec0"/><circle cx="95" cy="40" r="6" fill="#a0aec0"/>
<text x="79" y="115" text-anchor="middle" font-size="11" fill="#718096">バラバラ。積み上がらない</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="245" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 会話＝線</text>
<polyline points="186,95 216,80 246,62 276,42 304,28" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="186" cy="95" r="5" fill="#2b6cb0"/><circle cx="216" cy="80" r="5" fill="#2b6cb0"/><circle cx="246" cy="62" r="5" fill="#2b6cb0"/><circle cx="276" cy="42" r="5" fill="#2b6cb0"/><circle cx="304" cy="28" r="5" fill="#b83280"/>
<text x="245" y="115" text-anchor="middle" font-size="11" fill="#1e4e7e">毎日が積み上がり信頼になる</text>
</svg>
<div class="figcap">売上は、貯まった信頼の総量に比例する</div>
</div>
<div class="key">ストーリーは「売り場」じゃなく、<strong>信頼を毎日少しずつ貯める装置</strong>。だから1日1つでいい。毎日続けることに意味がある。</div>
<p><b>友達の言葉は「広告」にならない。</b>お客が一番警戒するのは「売りつけ」。友達ポジションを取ると警戒が消え、同じ紹介でも"おすすめ"として信じられる。</p>

<h2><span class="s">2</span>人は「自分の物語」にしか興味がない</h2>
<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="鏡">
<circle cx="70" cy="55" r="16" fill="#9cb8d6"/><rect x="52" y="76" width="36" height="34" rx="10" fill="#9cb8d6"/>
<text x="70" y="128" text-anchor="middle" font-size="11" fill="#718096">読者</text>
<rect x="150" y="24" width="84" height="96" rx="10" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<circle cx="192" cy="58" r="14" fill="#2b6cb0"/><rect x="176" y="76" width="32" height="30" rx="9" fill="#2b6cb0"/>
<text x="192" y="135" text-anchor="middle" font-size="11" fill="#1e4e7e">映った自分</text>
<path d="M92 65 L146 65" stroke="#b83280" stroke-width="2" marker-end="url(#ar)"/>
<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="262" y="58" font-size="11" fill="#b83280">あなたの投稿は</text>
<text x="262" y="76" font-size="11" fill="#b83280">読者が自分を</text>
<text x="262" y="94" font-size="11" fill="#b83280">映す"鏡"</text>
</svg>
<div class="figcap">「あなたの話」に見えて「読み手の話」になっている</div>
</div>
<p>「看護師時代の私まじこれ」が強いのは、<strong>具体的に説明しないから、読み手が自分の経験で埋める</strong>から。各自が主人公として参加する。これが鏡の力だ。</p>

<h2><span class="s">3</span>会話に変える9つの原則</h2>
<p>どのジャンルでも同じ。✗発信 → ○会話。</p>

<div class="tc"><div class="hd">① 説明するな、削れ</div><div class="bd">
<div class="bad"><b>✗</b>「話題の〇〇に合わせて△△時代のあるあるを話したけど共感する人いる？」</div>
<div class="good"><b>○</b>「△△時代の私まじこれ」（動画を貼る）</div>
<span class="lab">奥の理由：</span>完成した情報は読者を"観客"に、未完成は"参加者"にする。人は手をかけたものに愛着を持つ。</div></div>

<div class="tc"><div class="hd">② 読者を主人公にしろ</div><div class="bd">余白＝読み手が自分を投影するスペース。<span class="lab">奥の理由：</span>主役の椅子を読者に空けて渡す。「私はこう」より「心当たりない？」。</div></div>

<div class="tc"><div class="hd">③ 抽象を具体に</div><div class="bd">
<div class="vs"><div class="l"><div class="t">✗ 抽象</div>冗談じゃないくらい大変</div><div class="r"><div class="t">○ 具体</div>毎日ケーキ爆食いしないと保たないレベル</div></div>
<span class="lab">奥の理由：</span>脳は具体でしか映像化できない。絵が見えた瞬間に共感が起きる。</div></div>

<div class="tc"><div class="hd">④ 正論より自己開示</div><div class="bd">
<div class="bad"><b>✗</b>「一人で抱えないで相談してね」（正論・上から）</div>
<div class="good"><b>○</b>「考えすぎないようにしたら楽になったわ」（自己開示）</div>
<span class="lab">奥の理由：</span>正論は"上下"、自己開示は"横"。信頼は「すごい」でなく「同じだ」から生まれる。</div></div>

<div class="tc"><div class="hd">⑤ 言葉でターゲットを管理</div><div class="bd">
<div class="splitbar"><div class="sb-main" style="width:55%">「今も大変」→大変な人が集まる</div><div class="sb-sub" style="width:45%">「乗り越えた」→なりたい人</div></div>
<span class="lab">奥の理由：</span>言葉は集まる人を選別するフィルター。読者はその言葉に自分を投影する。</div></div>

<div class="tc"><div class="hd">⑥ 見せられるものは見せる</div><div class="bd">動画→サムネ、証拠→スクショ。<span class="lab">奥の理由：</span>人は言われたことより、自分で見つけたことを信じる。</div></div>

<div class="tc"><div class="hd">⑦ 選ばせる時は絞る</div><div class="bd">
<div class="vs"><div class="l"><div class="t">✗</div>なんでも送って</div><div class="r"><div class="t">○</div>この3つから1つ送って</div></div>
<span class="lab">奥の理由：</span>自由を与えるほど人は止まる。枠を狭く示すほど動く。</div></div>

<div class="tc"><div class="hd">⑧ 締めにキャラを残す</div><div class="bd">「私を成仏させてくれ…」のひと言。<span class="lab">奥の理由：</span>正しさは記憶に残らない、感情が残る。"いい人"より"面白い友達"が惚れられる。</div></div>

<div class="tc"><div class="hd">⑨ ゴールは「反応」じゃなく「関係」</div><div class="bd">質問箱で終わらせず「何かあったら相談していい」へ。<span class="lab">奥の理由：</span>点（消える反応）でなく線（資産になる関係）。販売の土台になる。</div></div>

<h2><span class="s">4</span>どんなアカウントでも使える型</h2>
<div class="flowbig">
<span>ネタ（あるある）</span><span>自己開示</span><span>余白を残す</span><span>巻き込み</span><span class="is-goal">関係導線</span>
</div>
<div class="stats">
<div class="stat-c"><div class="n">美容</div><div class="l">「30代の私まじこれ」→ため息の朝→「同じ人いる？」</div></div>
<div class="stat-c"><div class="n">子育て</div><div class="l">「昨日やらかした」→怒鳴った話→「どうしてる？」</div></div>
<div class="stat-c"><div class="n">お金</div><div class="l">「給料日なのに財布が軽い」→失敗談→「一緒に成仏しよ」</div></div>
</div>
<div class="warn">禁止なのは「先生になること」。教えよう・正そうとした瞬間、会話は発信に戻る。<b>最後まで"隣の友達"でいる。</b></div>

<h2><span class="s">5</span>検品：発信になってないか</h2>
<div class="check"><ul>
<li>司会者でなく、隣の友達の口調か</li>
<li>説明しすぎず、読者が入る余白があるか</li>
<li>自分の話で完結せず、鏡になっているか</li>
<li>正論でなく自己開示で横に並べたか</li>
<li>ゴールは関係づくりか</li>
</ul></div>
<div class="end">お客は情報じゃなく「わかってもらえる体験」を求めてる。<br>だから——物を売るな。<strong>友達になれ。</strong></div>
</div>
  `,

  'p3-seven': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>訴求が売れない原因＝「いきなり売る」こと</li>
<li>順番を守るだけで売れる理由（人の感情の動き）</li>
<li>3〜7日前の「予告」が当日をひっくり返す仕組み</li>
<li>7ステップの中身（OK／NG文例＋奥の理由）</li>
<li>1ステップ1〜3枚・合計10〜20枚の組み立て方</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="いきなり売ると順番で連れていくの違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ いきなり売る</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 順番で連れていく</text>
<text x="79" y="60" text-anchor="middle" font-size="26" fill="#a0aec0">⚡</text>
<text x="79" y="92" text-anchor="middle" font-size="11" fill="#718096">「買ってください」</text>
<text x="79" y="110" text-anchor="middle" font-size="11" fill="#718096">→ 一瞬で身構える</text>
<text x="79" y="132" text-anchor="middle" font-size="11" fill="#718096">疑われて売れない</text>
<polyline points="186,95 216,80 246,62 276,44 304,30" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="186" cy="95" r="5" fill="#2b6cb0"/><circle cx="246" cy="62" r="5" fill="#2b6cb0"/><circle cx="304" cy="30" r="5" fill="#b83280"/>
<text x="241" y="115" text-anchor="middle" font-size="11" fill="#1e4e7e">感情を順番に動かす</text>
<text x="241" y="132" text-anchor="middle" font-size="11" fill="#1e4e7e">勝手に売れる状態に</text>
</svg>
<div class="figcap">訴求は1枚のチラシじゃない。感情を動かす"一本の道"だ</div>
</div>

<div class="key">アドリブで売るから散らかる。<strong>順番が決まった設計図に沿って置くから、勝手に売れる。</strong>でもこれは表面の話。もう一段深く掘る——<strong>なぜ順番を守るだけで売れるのか。</strong></div>

<h3>訴求は「教育の最終回」でしかない</h3>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="弾を込めてから撃つ">
<text x="160" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">毎日の教育で"弾"を込める → 最後に撃つ</text>
<rect x="20" y="40" width="70" height="32" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="55" y="60" text-anchor="middle" font-size="11" fill="#1e4e7e">わかって</text>
<rect x="105" y="40" width="70" height="32" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="140" y="60" text-anchor="middle" font-size="11" fill="#1e4e7e">信頼</text>
<rect x="190" y="40" width="70" height="32" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/><text x="225" y="60" text-anchor="middle" font-size="11" fill="#1e4e7e">欲しい</text>
<path d="M268 56 l40 0" stroke="#b83280" stroke-width="2" marker-end="url(#ar0)"/>
<defs><marker id="ar0" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="160" y="100" text-anchor="middle" font-size="11" fill="#718096">教育ゼロで7ステップを使う＝弾なしの銃</text>
<text x="160" y="118" text-anchor="middle" font-size="11" fill="#a0aec0">音だけ鳴って何も飛ばない</text>
</svg>
<div class="figcap">当日売ってるのは商品じゃない。"積んだ信頼を形にして受け取ってもらう"作業だ</div>
</div>

<div class="flowbig">
<span>毎日の教育で信頼が貯まる</span><span>予告で待ちわびる</span><span>当日、順番で感情を動かす</span><span class="is-goal">信頼が購入に変わる</span>
</div>

<div class="warn">訴求の目的は「当日いい文章を書くこと」じゃない。<b>「当日までに、買う準備が整った状態を作っておくこと」だ。</b>当日の文章は最後のひと押し。<strong>勝負は当日が来る前に半分ついている。</strong></div>

<table>
<tr><th>4つの絶対</th><th>中身</th></tr>
<tr><td>順番が絶対</td><td>①→⑦。飛ばさない・入れ替えない</td></tr>
<tr><td>詰め込まない</td><td>各ステップ1〜3枚で展開</td></tr>
<tr><td>合計10〜20枚</td><td>一気に見せず、ゆっくり連れていく</td></tr>
<tr><td>予告がすべて</td><td>当日前に3〜7日かけて温める</td></tr>
</table>
<p>例えるなら告白だ。いきなり「付き合って」は重い。数日前から「話したいことがある」と匂わせ、当日に順番で伝えれば相手も心の準備ができる。<strong>告白の成功が"その前の毎日"で決まるのと同じだ。</strong></p>

<h2><span class="s">1</span>当日の3〜7日前：予告を仕込む</h2>
<p>いちばん多い失敗が、予告ナシで当日いきなり売り始めること。フォロワーは「え、急に売り込み？」と一気に冷める。</p>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="不意打ちと予告の違い">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 不意打ち</text>
<circle cx="79" cy="62" r="22" fill="#f6f6f7" stroke="#cbd5e0"/><text x="79" y="68" text-anchor="middle" font-size="22">🛡️</text>
<text x="79" y="104" text-anchor="middle" font-size="11" fill="#718096">警戒スイッチON</text>
<text x="79" y="120" text-anchor="middle" font-size="11" fill="#a0aec0">何を出しても疑う</text>
<line x1="160" y1="14" x2="160" y2="122" stroke="#e2e8f0"/>
<text x="241" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 予告あり</text>
<circle cx="241" cy="62" r="22" fill="#eaf1f8" stroke="#2b6cb0"/><text x="241" y="68" text-anchor="middle" font-size="22">🎬</text>
<text x="241" y="104" text-anchor="middle" font-size="11" fill="#1e4e7e">待ちわびる気持ち</text>
<text x="241" y="120" text-anchor="middle" font-size="11" fill="#1e4e7e">「待ってました」</text>
</svg>
<div class="figcap">映画の予告編と同じ。予告ゼロの映画には誰も並ばない</div>
</div>
<div class="key">「近々、大事な発表があります」を普段のストーリーに混ぜるだけで、当日の反応が変わる。<strong>予告は「待ちわびる気持ち」を前借りする作業だ。</strong>同じ発表でも、警戒されながら出すか待たれながら出すかで温度がまるで違う。</div>
<div class="good"><b>○ 予告の入れ方</b><br>「実は今、ずっと準備してたものがあって。来週ちゃんと発表します」<br>「近々、伝えたい大事なお知らせがあります。準備中なので待っててね」<br>「DMでよく聞かれてたアレ、やっと形になりそう。週末に話します」</div>
<div class="bad"><b>✗ 予告ナシでいきなり当日</b><br>前日まで通常運転 → 当日突然「新商品できました！買ってください！」→ 心の準備ゼロで即離脱。</div>
<div class="note">つまずきポイント：予告で<b>「何を売るか」までバラさない</b>。中身を伏せるのは出し惜しみじゃない。<strong>人は「分からないもの」の続きを知りたくなる。</strong>その気持ちを当日まで引っ張る余白だ。じらすほど効く。</div>

<h2><span class="s">2</span>7ステップ全体図（先に地図を持つ）</h2>
<p>これはただの作業手順じゃない。<strong>「感情を動かす順番」</strong>だ。共感させ、危機感を出し、希望を見せ、証拠で背中を押す。心が「買ってもいい」に傾く自然な道筋を、そのまま順番にした。</p>
<table>
<tr><th>順</th><th>ステップ</th><th>役割</th><th>枚数</th></tr>
<tr><td>①</td><td>興味を惹く</td><td>「待ってた」感で離脱を防ぐ</td><td>1〜3枚</td></tr>
<tr><td>②</td><td>解決策の提示</td><td>欲しい人を最初に救う・リンク</td><td>1〜3枚</td></tr>
<tr><td>③</td><td>問題提起</td><td>悩みを代弁し「私のことだ」</td><td>1〜3枚</td></tr>
<tr><td>④</td><td>危機感・緊急性</td><td>放置した未来を見せる</td><td>1〜3枚</td></tr>
<tr><td>⑤</td><td>未来の提示</td><td>「でもこうなれる」希望</td><td>1〜3枚</td></tr>
<tr><td>⑥</td><td>利用者の感想</td><td>他人の証拠で最後の一押し</td><td>1〜3枚</td></tr>
<tr><td>⑦</td><td>価値観の共有</td><td>想いで締めファン化へ</td><td>1〜3枚</td></tr>
</table>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="不安と希望の振り幅">
<text x="160" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">③→④→⑤ 感情の振り幅で足が出る</text>
<polyline points="20,60 110,60 160,95 210,30 300,30" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="110" cy="60" r="5" fill="#2b6cb0"/><circle cx="160" cy="95" r="5" fill="#b83280"/><circle cx="210" cy="30" r="5" fill="#2b6cb0"/>
<text x="110" y="50" text-anchor="middle" font-size="10" fill="#718096">③私のことだ</text>
<text x="160" y="113" text-anchor="middle" font-size="10" fill="#b83280">④まずい</text>
<text x="225" y="22" text-anchor="middle" font-size="10" fill="#1e4e7e">⑤でも大丈夫</text>
</svg>
<div class="figcap">不安だけでも希望だけでも動かない。両方並んで初めて足が前に出る</div>
</div>
<div class="key">リンクは①〜⑦の中で<strong>2〜3回</strong>自然に出す。<b>②で1回・⑤か⑥でもう1回・⑦の最後にもう1回</b>が黄金配置。理由は単純、人はストーリーを飛ばし見するから。1回だけだと飛ばした人に届かない。複数回は"取りこぼさない"ためだ。</div>

<h2><span class="s">3</span>①興味を惹く（お待たせしました感）</h2>
<p>1枚目の仕事はただ一つ。<strong>「売り込み」でなく「待ちわびたものが来た」感覚を作る。</strong>本当の仕事は商品紹介じゃない——<strong>"警戒を解くこと"だ。</strong></p>
<div class="key">コツは<b>「迷っていた」「ずっと準備していた」という裏話</b>。完璧な売り手より、迷いながら出した人間に心が動く。「迷ったけど出した」と聞くと警戒が緩み、続きを読んでくれる。</div>
<div class="good"><b>○ OK文例</b><br>「ずっと準備してきたものを、ようやく発表できます」<br>「先日予告した〇〇、今日がその日です。最後まで読んでほしい」<br>「DMで何十件も質問が来ていたアレ、ついに解禁します」<br>「正直ここまで迷ってたけど、やっぱり出すことにしました」</div>
<div class="bad"><b>✗ NG文例</b><br>「今日は◯◯をご紹介します！」← 売り込み感で一瞬で構える<br>「おすすめの商品があります」← 主語が商品。全員スキップ</div>
<div class="note">つまずきポイント：「裏話なんて誰が興味あるの」は逆だ。商品の話は売り手の都合、裏話は人間の話。<strong>主語を「商品」から「迷った私」に変えるだけで読まれ方が変わる。</strong></div>

<h2><span class="s">4</span>②解決策の提示（3枚以内にリンク）</h2>
<p>ここで「もう欲しい人」を最初に救う。教育済みの層はもう買う気だ。<strong>「リンクは最後に貼ります」と言った瞬間、その人は離脱する。</strong></p>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="2種類の客を同時に拾う">
<rect x="10" y="30" width="140" height="70" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="80" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">もう買う気の人</text>
<text x="80" y="78" text-anchor="middle" font-size="11" fill="#8a4a6e">②で即リンク</text>
<text x="80" y="93" text-anchor="middle" font-size="10" fill="#8a4a6e">待たせるのは罪</text>
<rect x="170" y="30" width="140" height="70" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="240" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">まだ迷ってる人</text>
<text x="240" y="78" text-anchor="middle" font-size="11" fill="#1e4e7e">③以降で育てる</text>
<text x="240" y="93" text-anchor="middle" font-size="10" fill="#1e4e7e">ゆっくり連れていく</text>
<text x="160" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">温度の違う2種類が混ざっている</text>
</svg>
<div class="figcap">レジに財布を出してる客に「まず説明を」と待たせる店はない</div>
</div>
<div class="key">教育済みの層には<strong>3枚以内</strong>でリンクを見せる。早めに出すのは"せっかちな売り込み"じゃなく、<strong>温度の違う2種類の客を同時に拾う設計</strong>だ。</div>
<div class="good"><b>○ OK文例</b><br>「詳細はこちらから見てみてください▼（プレッシャーはないので気軽にどうぞ）」<br>「まず見るだけでもOKです。リンクはプロフィールから」<br>「購入が前提じゃなくていいです。気になる方だけどうぞ▼」</div>
<div class="bad"><b>✗ NG文例</b><br>「リンクは最後に貼ります！」← 今すぐ欲しい人が離脱<br>「ぜひ購入してください！」← 押し売り感で温度が下がる</div>
<p><b>もう一つの理由：</b>「見るだけでOK」とハードルを下げて誘う。<strong>人は「買え」と押されると逃げ、「見るだけでいい」と退路を残されると近づく。</strong>押すほど引かれ、引くほど押される。</p>

<h2><span class="s">5</span>③問題提起（悩みの言語化）</h2>
<p>ここから「まだ迷ってる層」を動かす。やることは、<strong>本人がうまく言えてないモヤモヤを、言葉にして代わりに言ってあげる</strong>こと。「私のことだ」と刺さる。</p>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="断言と問いかけの違い">
<rect x="0" y="20" width="150" height="74" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 断言</text>
<text x="75" y="66" text-anchor="middle" font-size="10" fill="#a0aec0">「あなたは悩んでる」</text>
<text x="75" y="84" text-anchor="middle" font-size="10" fill="#a0aec0">→ 決めつけるな</text>
<rect x="170" y="20" width="150" height="74" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 問いかけ</text>
<text x="245" y="66" text-anchor="middle" font-size="10" fill="#1e4e7e">「〜ですよね？」</text>
<text x="245" y="84" text-anchor="middle" font-size="10" fill="#1e4e7e">→ 自分でうなずく</text>
</svg>
<div class="figcap">人は他人に言われた事実より、自分で認めた事実を強く信じる</div>
</div>
<div class="key">「〜な方いませんか？」「〜ですよね」という<strong>問いかけ形式</strong>が一番共感を引き出す。「言いすぎかな」と思うくらいリアルに描写するのが正解。ぼかすほど他人事になる。これがストーリー本質の章の"鏡"の力だ。</div>
<div class="tc"><div class="hd">料理ジャンル例</div><div class="bd"><span class="lab">問いかけ形式</span>「毎日の献立、正直もう考えたくないって思ったことありませんか？」<br>「疲れた日に限って、ご飯作らないといけない状況になりますよね」</div></div>
<div class="tc"><div class="hd">子育てジャンル例</div><div class="bd"><span class="lab">問いかけ形式</span>「子どものために頑張りすぎて、自分のことを後回しにしてませんか？」<br>「ちゃんとした声かけをしたいのに、イライラして怒ってしまう…」</div></div>
<div class="tc"><div class="hd">美容・垢抜け例</div><div class="bd"><span class="lab">問いかけ形式</span>「おしゃれしたいけど、自分に何が似合うのかわからなくて結局同じ服ばかり」<br>「メイクを頑張っても『変わった？』って言われたことが一度もない方、いませんか」</div></div>
<div class="note">つまずきポイント：「みんな悩んでますよね」のような<b>ふわっとした悩みは刺さらない</b>。「疲れた日に限って」「結局同じ服ばかり」のように<strong>具体的なシーンまで描く</strong>。映像が浮かんで初めて「これ私だ」が起きる。</div>

<h2><span class="s">6</span>④危機感・緊急性（放置した未来）</h2>
<p>③で認めさせたら、次は「このまま放っておくとどうなるか」を見せる。ただし<strong>脅しはNG。体験談として語る。</strong></p>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="脅しと体験談の違い">
<rect x="0" y="18" width="150" height="78" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 脅し（上から）</text>
<text x="75" y="63" text-anchor="middle" font-size="10" fill="#a0aec0">「やらないと大変」</text>
<text x="75" y="82" text-anchor="middle" font-size="10" fill="#a0aec0">→ 心を閉じて守る</text>
<rect x="170" y="18" width="150" height="78" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 体験談（横）</text>
<text x="245" y="63" text-anchor="middle" font-size="10" fill="#1e4e7e">「母がそれで後悔」</text>
<text x="245" y="82" text-anchor="middle" font-size="10" fill="#1e4e7e">→ 教えてくれた</text>
</svg>
<div class="figcap">同じ未来でも、説教は嫌われ、告白の形は伝わる</div>
</div>
<div class="key">「〇年後」「〇歳になってから」と<b>時間軸</b>を入れると現実感が増す。そして最後に必ず<strong>「でも、まだ間に合います」「今気づけてよかった」</strong>のフォロー。突き落として終わると人は動けなくなる。</div>
<div class="tc"><div class="hd">料理ジャンル例</div><div class="bd"><span class="lab">体験談+時間軸</span>「栄養の偏りを10年放置すると、体がどうなるか。実は私の母がそれで後悔しているんです」</div></div>
<div class="tc"><div class="hd">子育てジャンル例</div><div class="bd"><span class="lab">体験談+フォロー</span>「3歳までの関わり方が、子どもの自己肯定感の土台を決めると言われています。今気づけてよかった」<br>「何気なく使っていた言葉が、子どもの自信を少しずつ削っていた。そう気づいたのは…」</div></div>
<div class="tc"><div class="hd">自己肯定感ジャンル例</div><div class="bd"><span class="lab">体験談+時間軸</span>「自己肯定感が低いまま何年も過ごすと、チャンスが来ても動けなくなる。私がそうでした」</div></div>
<div class="warn">ここで終わると「不安にさせられただけ」で離脱する。<b>必ず「でもまだ間に合う」を添えて⑤へ橋を架ける。</b>危機感はアクセル、フォローはハンドル。両方ないと事故る。</div>

<h2><span class="s">7</span>⑤未来の提示（理想の姿）</h2>
<p>④の<strong>直後に</strong>「でも、こうなれる」と希望を見せる。この順番が命だ。<b>暗くしてから明るくする</b>から明るさが際立つ。</p>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="暗から明の落差">
<rect x="20" y="30" width="120" height="56" rx="10" fill="#4a5568"/>
<text x="80" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">④暗（不安）</text>
<text x="80" y="74" text-anchor="middle" font-size="10" fill="#cbd5e0">まずい…</text>
<path d="M146 58 l30 0" stroke="#b83280" stroke-width="2" marker-end="url(#ar5)"/>
<defs><marker id="ar5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<rect x="182" y="30" width="120" height="56" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="242" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">⑤明（希望）</text>
<text x="242" y="74" text-anchor="middle" font-size="10" fill="#1e4e7e">でもこうなれる</text>
<text x="160" y="102" text-anchor="middle" font-size="10" fill="#718096">逆だと希望が打ち消される。④→⑤の順が絶対</text>
</svg>
<div class="figcap">不安の直後の希望は、何倍も明るく見える</div>
</div>
<div class="key">具体的な期間（〇日後・〇週間で）で現実感を出し、<strong>感情と一緒に</strong>語る。「あなたもなれる」と直接言わず<b>自分の変化を語る形</b>に。事実だけ置くと、読み手が勝手に「私もなれるかも」と想像する。想像は本人がした方が強く効く。</div>
<div class="tc"><div class="hd">料理ジャンル例</div><div class="bd"><span class="lab">変化+期間</span>「平日5日分の献立を日曜10分で決められるようになりました」<br>「料理が好きじゃなかった私が、今は楽しいと思えるようになったんです」</div></div>
<div class="tc"><div class="hd">子育てジャンル例</div><div class="bd"><span class="lab">変化+感情</span>「声かけを変えて3週間後、子どもが自分から『学校行く』と言った朝があって。涙が出ました」<br>「怒る回数が週20回から3回くらいに減った。親子関係がおだやかになって…」</div></div>
<div class="tc"><div class="hd">美容・垢抜け例</div><div class="bd"><span class="lab">変化+感情</span>「この1アイテムを変えてから、毎朝鏡を見るのが楽しみになりました」</div></div>
<div class="vs">
<div class="l"><div class="t">✗ 機能だけ</div>「このテンプレで献立が決まります」← 何が嬉しいか伝わらない</div>
<div class="r"><div class="t">○ 変化+感情</div>「料理が嫌いだった私が、今は楽しいと思える」← 未来が見える</div>
</div>
<div class="note">人は機能を買うんじゃなく、機能の先にある"変わった自分"を買う。<strong>「何ができるか」でなく「どう変われたか」を語れ。</strong></div>

<h2><span class="s">8</span>⑥利用者の感想（最強の武器）</h2>
<p>ここが訴求の山場だ。<strong>自分の体験談より、他人の感想の方が圧倒的に刺さる。</strong>売り手の「いいですよ」は当たり前。買った人の「変わった」には利害がない。</p>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="売り手の言葉と買った人の言葉">
<rect x="0" y="22" width="150" height="70" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">売り手の言葉</text>
<text x="75" y="68" text-anchor="middle" font-size="10" fill="#a0aec0">「売りたい」が透ける</text>
<text x="75" y="84" text-anchor="middle" font-size="10" fill="#a0aec0">→ 警戒で弾かれる</text>
<rect x="170" y="22" width="150" height="70" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="245" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">買った人の言葉</text>
<text x="245" y="68" text-anchor="middle" font-size="10" fill="#8a4a6e">下心がない</text>
<text x="245" y="84" text-anchor="middle" font-size="10" fill="#8a4a6e">→ フィルターを通る</text>
</svg>
<div class="figcap">「みんなが選んでる」事実そのものが、買う理由になる</div>
</div>
<div class="grp"><div class="gh">感想を集める4ステップ</div><div class="gb">
<div class="rule"><span class="rn">1 仕込む</span>訴求ストーリーに「感想をDMで送ってください」と必ず入れる<span class="gb2">言わないと届かない</span></div>
<div class="rule"><span class="rn">2 保存する</span>届いたDMをスクショする<span class="gb2">名前は隠してOK</span></div>
<div class="rule"><span class="rn">3 載せる</span>「〇〇さんから感想が届きました」とストーリーに載せる<span class="gb2">本人の言葉のまま</span></div>
<div class="rule"><span class="rn">4 繰り返す</span>感想が増えるたびに何度でも載せる<span class="gb2">証拠は多いほど効く</span></div>
</div></div>
<div class="note">なぜ「本人の言葉のまま」か：きれいに整えると"作り物っぽさ"が出て説得力が落ちる。<strong>少し荒削りな生の言葉ほど本物に見える。</strong>誤字や口語もそのまま載せた方が効く。</div>
<div class="key"><b>感想がまだ無いとき</b>：「先着◯名で無料モニター募集」→ 使ってもらう → 感想をもらう。<b>最初の1件さえ作れば、それを見た人が次の感想をくれる。</b>証拠は雪だるま式に増える。</div>
<div class="vs">
<div class="l"><div class="t">✗ 弱い感想</div>「良かったです！」← 何がどう良かったか不明</div>
<div class="r"><div class="t">○ 刺さる感想</div>「今まで何をやっても変わらなかったのに、〇日で変わった」← 具体的な変化</div>
</div>
<p>"以前の悪い状態"と"今の良い状態"の落差が見えるから、自分にも同じ変化が起きる画が浮かぶ。感想をもらう時も<strong>「どこがどう変わったか教えてください」</strong>と聞くと、この落差つきの声が集まる。</p>

<h2><span class="s">9</span>⑦価値観の共有（リンクで終わらない）</h2>
<p>最後の締めで、その人が「次もこの人から買うファン」になるか「売られて終わりの他人」になるかが分かれる。<strong>リンクで終わると売り込みの印象。価値観で終わると次につながる。</strong></p>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="最後に残る味">
<text x="160" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">人は"最後の味"で全体を記憶する</text>
<rect x="0" y="34" width="150" height="62" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="58" text-anchor="middle" font-size="11" fill="#718096">リンクで締め</text>
<text x="75" y="80" text-anchor="middle" font-size="10" fill="#a0aec0">「結局売りたかったのね」</text>
<rect x="170" y="34" width="150" height="62" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="58" text-anchor="middle" font-size="11" fill="#1e4e7e">価値観で締め</text>
<text x="245" y="80" text-anchor="middle" font-size="10" fill="#1e4e7e">「私のことを考えてくれた」</text>
</svg>
<div class="figcap">商品は今日で終わるが、価値観は次の訴求の信頼の土台になる</div>
</div>
<div class="key">締めは<strong>「想い・価値観」</strong>で。価値観を語った後に「気になる方はこちら▼」とリンクを添えるのはOK。そして<b>訴求の翌日は通常の教育ストーリーに戻す。売り続けない。</b>ストーリー本質の章の「ゴールは反応じゃなく関係」と同じ話だ。</div>
<div class="good"><b>○ OK文例</b><br>「私がこれをシェアしたかった理由はただ一つ。昔の私みたいに悩んでいる人を、一人でも減らしたかったから」<br>「買ってもらえることより、この情報があなたの生活を少しでも楽にしてくれることを願ってます」<br>「もし買わなくても、このストーリーが少し参考になったなら嬉しいです」</div>
<div class="bad"><b>✗ NG文例</b><br>「ぜひご購入ください！リンクはこちら▼」← 最後まで売り込みで余韻ゼロ<br>「期間限定なのでお早めに！」← 焦らせ系は信頼を損なう</div>
<div class="note">「買わなくてもいい」と言うと売れなくなる気がする。でも逆だ。<strong>追い詰められると人は冷静になって逃げ、退路を残されると安心して自分の意思で選ぶ。</strong>手を離す勇気が、結局いちばん売る。</div>

<h2><span class="s">10</span>★下書きの作り方（実演）</h2>
<p>順番がわかったら手を動かすだけ。いきなり完成を狙うと手が止まる。<strong>骨→肉→枚数割り</strong>と段階を分ける。美容ジャンルの日焼け止めで実演する。</p>
<div class="flow">
<span>骨：①〜⑦を1行</span><span>肉：裏話・具体・問いかけ</span><span>枚数割り：合計10〜20枚</span>
</div>
<div class="step"><span class="sn">STEP1</span><span class="snm">3〜7日前に予告を仕込む</span>
<div class="draft">（数日前の通常ストーリーに混ぜる）「実は今、みんなにずっと聞かれてた"日焼け止め選び"を、ちゃんとまとめてる最中で。週末に発表します」</div></div>
<div class="step"><span class="sn">STEP2</span><span class="snm">①〜⑦を1行ずつ、骨だけ書く</span>
<div class="draft"><b>①興味：</b>ずっと準備してたアレ、今日発表します。<br><b>②解決策：</b>気になる人はここから見てね▼（見るだけでOK）<br><b>③問題提起：</b>毎朝なんとなく塗ってるだけになってませんか？<br><b>④危機感：</b>何もしないと、シミは後から定着していく。でもまだ間に合う。<br><b>⑤未来：</b>選び方を変えてから、夏でも肌を気にしなくなった。<br><b>⑥感想：</b>「教わった通りにしたら、焼け方が全然違った」とDMが届いた。<br><b>⑦価値観：</b>後悔する前に知ってほしかった。気になる人はこちら▼</div>
<span class="note">骨の段階で順番が通っているか先に確かめれば、後から崩れない。</span></div>
<div class="step"><span class="sn">STEP3</span><span class="snm">各ステップに「裏話・具体・問いかけ」で肉を足す</span>
<table>
<tr><th>ステップ</th><th>足す一言</th></tr>
<tr><td>① 裏話</td><td>「正直ここまで迷ってたけど、やっぱり出すことにした」</td></tr>
<tr><td>③ 具体シーン</td><td>「日焼け止め、なんとなく安いの選んで、塗り直しもサボってない？」</td></tr>
<tr><td>④ 時間軸+フォロー</td><td>「数年後にシミで後悔する前に。今気づけてよかった」</td></tr>
<tr><td>⑤ 感情</td><td>「鏡を見るたびのため息が、なくなった」</td></tr>
<tr><td>⑥ 具体的変化</td><td>「『今まで何塗っても焼けてたのに』と書いてあって嬉しかった」</td></tr>
</table>
<span class="note">①は警戒を解く裏話、③は画が浮かぶ具体、⑤は想像を誘う感情。原理が分かっていれば足す言葉に迷わない。</span></div>
<div class="step"><span class="sn">STEP4</span><span class="snm">1ステップ1〜3枚に割って、合計10〜20枚にする</span>
<div class="draft">①=2枚（裏話→今日発表）／②=1枚（リンク）／③=2枚（問いかけ→具体）／④=2枚（危機感→フォロー）／⑤=2枚（変化→感情）／⑥=2枚（感想スクショ→ひとこと）／⑦=2枚（想い→リンク）<br>＝合計13枚。リンクは②・⑤あたり・⑦の<b>3回</b>。</div>
<span class="note">1枚1メッセージにすると、指でトントン進めるテンポが生まれ、気づけば最後まで見ている。枚数で割るのは"間引き"でなく、無理なく前へ進める階段を作る作業だ。</span></div>

<h2><span class="s">11</span>頻度の決め方：毎日訴求か、週1訴求か</h2>
<p>「どのくらいの頻度で売る？」の答えは2タイプ。どっちが正解ではなく、自分の運用に合う方を選ぶ。</p>
<table>
<tr><th>タイプ</th><th>特徴</th><th>売れ方</th><th>注意点</th></tr>
<tr><td><b>毎日訴求</b><br>（コンスタント型）</td><td>毎日どこかで訴求</td><td>件数は毎日発生し一定ラインを推移</td><td>内容を毎日変える必要あり。使い回しは飽きられる</td></tr>
<tr><td><b>週1訴求</b><br>（集中型）</td><td>週1回その日に集中</td><td>その日に売上が集中</td><td>教育期間に力を入れる。普段の積み上げが当日の爆発を作る</td></tr>
</table>
<div class="key">月間で見ると<strong>2タイプの差は意外と少ない</strong>。だから「毎日売らなきゃ」と焦らなくていい。<b>大事なのは頻度より、訴求までの教育の濃さ。</b></div>
<p><b>なぜ頻度より教育か：</b>0章の通り訴求は最終回でしかない。<strong>弾（信頼）が込められていなければ、何回引き金を引いても飛ばない。</strong>頻度を上げても教育が薄ければ、むしろ「いつも売ってる人」と警戒される。回数で売るんじゃない、積み上げで売る。</p>
<p>目安——毎日ネタを変え続けられるなら毎日訴求。しんどいなら週1に絞り平日は教育に専念。<strong>続けられる方を選べ。</strong>無理な頻度で雑な訴求を量産するより、整った訴求を週1で出す方が売れる。</p>

<h2><span class="s">12</span>検品：いきなり売る訴求になってないか</h2>
<p>書いたら「いい感じ？」でなく<strong>「7ステップ、順番通りに全部入ってる？」</strong>で確認する。1つ飛ぶと感情の流れが切れる。</p>
<div class="check"><ul>
<li>☐ 3〜7日前に予告を入れた？（中身はバラさず匂わせた？）</li>
<li>☐ ①1枚目が「待ってた感」で警戒を解けてる？</li>
<li>☐ ②リンクを3枚以内に出した？（欲しい人を待たせてない？）</li>
<li>☐ ③問いかけ形式で具体的なシーンまで描いた？</li>
<li>☐ ④危機感の後に「でもまだ間に合う」を添えた？（脅しでなく体験談か？）</li>
<li>☐ ⑤④の直後に希望を、自分の変化として語った？（暗→明か？）</li>
<li>☐ ⑥他人の感想を「具体的な変化」つきで載せた？</li>
<li>☐ ⑦価値観で締めた？（リンクで終わってない？）</li>
<li>☐ リンクは全体で2〜3回、自然に入った？</li>
<li>☐ 1ステップ1〜3枚・合計10〜20枚に割れてる？</li>
</ul></div>

<div class="end">訴求は、いきなり売るな。<strong>順番で連れていけ。</strong><br>3日前から予告を出し、1ステップに詰め込まず1〜3枚で展開し、最後は価値観で締める。<br>当日の文章で売るんじゃない。<strong>そこまでに積んだ信頼が、勝手に売ってくれる。</strong></div>
</div>
  `,

  'p3-writing': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>「浅い日記」と「売れる文」を分ける、たった2つの違い</li>
<li>なぜ"概念"がある文だけが信じられ、人が動くのか</li>
<li>文章の型8つと、必ず入れる20のルールの"なぜ"</li>
<li>150字の骨格が1000字の刺さる文に育つ「作り方5ステップ」</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>
<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="日記と手紙の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 日記</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 手紙</text>
<text x="79" y="58" text-anchor="middle" font-size="12" fill="#718096">主語＝「私」</text>
<text x="79" y="80" text-anchor="middle" font-size="12" fill="#718096">中身＝感想</text>
<text x="79" y="112" text-anchor="middle" font-size="11" fill="#a0aec0">「へぇ、あなたはね」</text>
<text x="79" y="130" text-anchor="middle" font-size="11" fill="#a0aec0">で流される</text>
<text x="241" y="58" text-anchor="middle" font-size="12" fill="#1e4e7e">主語＝「あなた」</text>
<text x="241" y="80" text-anchor="middle" font-size="12" fill="#1e4e7e">中身＝概念（軸）</text>
<text x="241" y="112" text-anchor="middle" font-size="11" fill="#2b6cb0">読み手の中に残り</text>
<text x="241" y="130" text-anchor="middle" font-size="11" fill="#2b6cb0">見方を変える</text>
</svg>
<div class="figcap">入れ替えるのは「主語」と「中身」だけ</div>
</div>
<div class="key">売れない人の文章は、ほぼ全部"日記"だ。<strong>主語が「私」で、感想を並べて終わる。</strong>売れる文は逆。主語が「あなた」で、読み手の頭に思考の軸（概念）を1つ置く。<strong>感想は消費されて消えるが、概念は残って、ものの見方を変える。</strong></div>

<h3>なぜ"感想"は流され、"概念"は残るのか</h3>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="消費物と道具">
<rect x="0" y="24" width="150" height="84" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">感想</text>
<text x="75" y="78" text-anchor="middle" font-size="11" fill="#a0aec0">＝消費物</text>
<text x="75" y="96" text-anchor="middle" font-size="11" fill="#a0aec0">読んだら終わり</text>
<text x="160" y="70" text-anchor="middle" font-size="20" fill="#cbd5e0">≠</text>
<rect x="170" y="24" width="150" height="84" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="245" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">概念</text>
<text x="245" y="74" text-anchor="middle" font-size="11" fill="#8a4a6e">＝持ち帰れる道具</text>
<text x="245" y="92" text-anchor="middle" font-size="11" fill="#8a4a6e">自分に当てはめる</text>
</svg>
<div class="figcap">「お金には消費と投資がある」は、読み手が自分の財布に使える道具</div>
</div>
<p>感想は「私はこう思った」で完結し、読み手の人生に関係ない。概念は違う。<strong>道具をもらった人は、それで自分の過去や未来を見直す。</strong>その瞬間、あなたの投稿は「あなたの話」から「読み手が自分を考える話」に変わる。</p>
<div class="flowbig">
<span>概念（道具）を渡す</span><span>読み手が自分に使う</span><span>くれた相手を信頼</span><span class="is-goal">自分から動く</span>
</div>
<div class="warn">ストーリーの目的は「今日あったことの報告」じゃない。<b>「読み手の頭に、今日から使える1つの軸を置くこと」だ。</b>出来事や数字は、その軸を信じてもらう材料でしかない。</div>

<h2><span class="s">1</span>大前提：ストーリーは「教育」の主役</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="出会う場所と育てる場所">
<rect x="6" y="30" width="130" height="74" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="71" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">フィード</text>
<text x="71" y="62" text-anchor="middle" font-size="12" fill="#718096">出会う場所</text>
<text x="71" y="84" text-anchor="middle" font-size="11" fill="#a0aec0">まだ通りすがり</text>
<path d="M142 67 L178 67" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a1)"/>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker></defs>
<rect x="184" y="30" width="130" height="74" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="249" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">ストーリー</text>
<text x="249" y="62" text-anchor="middle" font-size="12" fill="#1e4e7e">育てる場所</text>
<text x="249" y="84" text-anchor="middle" font-size="11" fill="#2b6cb0">毎日「欲しい」を積む</text>
</svg>
<div class="figcap">販売の成否は、ストーリーで毎日どれだけ信頼を積めたかで決まる</div>
</div>
<p>信頼は一度の名演説では積まれない。たまの渾身の長文は"点"で、翌日には忘れられる。<strong>毎日ちいさく顔を出すから"線"になり、線になって初めて親しみに変わる。</strong></p>
<div class="splitbar"><div class="sb-main" style="width:90%">痛みの代弁 9割</div><div class="sb-sub" style="width:10%">商品 1割</div></div>
<div class="key">合言葉は<strong>「痛みの代弁9割・商品の話1割」</strong>。<br><b>奥の理由：</b>人が一番警戒してるのは「売りつけられること」。商品の話を増やすほど"売る人"になり「どうせ宣伝」と疑われる。痛みを代弁する人＝"わかってくれる人"でいる限り、警戒は解けたままだ。</div>
<div class="tc"><div class="bd">
<div class="rule"><span class="rn">売り込まない</span><span class="gb2">「買って」は構えさせる。「わかるよ」はゆるめる</span></div>
<div class="rule"><span class="rn">毎日出す</span><span class="gb2">信頼は線でしか貯まらない。忘れられたら線が切れる</span></div>
<div class="rule"><span class="rn">参加させる</span><span class="gb2">見るだけは他人事。動いた人だけ自分ごとになる</span></div>
<div class="rule"><span class="rn">急がない</span><span class="gb2">痛み→共感→信頼→欲求。飛ばすと「いきなり告白」</span></div>
</div></div>

<h2><span class="s">2</span>「浅い日記型」と「売れる文」</h2>
<p>同じ「美容クリニックに行った日」でも、これだけ差が出る。</p>
<div class="vs">
<div class="l"><div class="t">✗ 浅い日記型（主語＝私・感想だけ）</div>「今日はクリニックDay〜！アラサーは肌悩み増えるよね。私も昔サボってたけど今は大事さ痛感。肌は25歳から老化するらしい。だから美容医療は必須！通うたびお金飛ぶけど😂」</div>
<div class="r"><div class="t">○ 売れる文（主語＝あなた・価値観＋具体）</div>「正直"あの時やっとけば"って後悔ない？お金には消えて終わる『消費』と未来が返る『投資』がある。肌も25歳から、何もしない人から順に定着していく…」</div>
</div>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="傍観者と参加者">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<circle cx="60" cy="55" r="11" fill="#cbd5e0"/><rect x="48" y="70" width="24" height="22" rx="7" fill="#cbd5e0"/>
<text x="105" y="62" font-size="11" fill="#a0aec0">座って</text>
<text x="105" y="80" font-size="11" fill="#a0aec0">眺める</text>
<text x="75" y="14" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">傍観者</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<circle cx="230" cy="50" r="11" fill="#2b6cb0"/><rect x="218" y="65" width="24" height="22" rx="7" fill="#2b6cb0"/>
<path d="M250 62 L286 62" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="298" y="58" text-anchor="middle" font-size="11" fill="#b83280">立つ</text>
<text x="245" y="14" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">参加者</text>
</svg>
<div class="figcap">傍観者は買わない。参加者が買う</div>
</div>
<p>左は「私が行った、私が痛感した」で完結し、読み手が入る隙がない。右は冒頭の「後悔ない？」が読み手を椅子から立たせ、「消費と投資」の軸を渡す。<strong>その時点で、読み手はもうあなたの投稿の中で自分の財布を考えている。</strong></p>

<h2><span class="s">3</span>型（骨組み）— なぜ型から作るのか</h2>
<div class="key">型は<strong>「順番の地図」</strong>。人は順番が決まっていると、中身を考えることに集中できる。地図があれば迷わない。迷わないから、毎日続く。</div>
<table>
<tr><th>型</th><th>構造</th><th>向き</th></tr>
<tr><td>PREP</td><td>結論→理由→例→結論</td><td>短い教育</td></tr>
<tr><td>PASONA</td><td>問題→共感→解決→提案→絞込→行動</td><td>売りに向かう日</td></tr>
<tr><td>AIDA</td><td>注意→興味→欲求→行動</td><td>単発で動かす</td></tr>
<tr><td>BAB</td><td>Before→After→橋渡し</td><td>変化・憧れ</td></tr>
<tr><td>QUEST</td><td>絞る→共感→教育→刺激→行動</td><td>教育してから売る</td></tr>
<tr><td>対比型</td><td>◯◯な人は／逆に◯◯／対句で締め</td><td>価値観（伸びやすい）</td></tr>
<tr><td>列挙型</td><td>断言→連打→まとめ→決め台詞</td><td>情報量で押す（伸びやすい）</td></tr>
<tr><td>物語型</td><td>どん底→きっかけ→気づき→変化→あなたも</td><td>共感・自己開示</td></tr>
</table>
<div class="warn">つまずき：「型に当てはめると不自然」と感じる人が多い。逆だ。型が不自然なのではなく、型に"自分の言葉"を入れてないから不自然になる。<b>骨は型で借り、肉は自分の経験で埋める。読み手に見えるのは肉だけだ。</b></div>

<h3>それぞれ、こういう文章になる</h3>
<div class="tc"><div class="hd">PREP｜短い教育</div><div class="bd"><span class="lab">結論→理由→例→結論</span>
<div class="draft"><b>結論：</b>自分磨きは「読書・筋トレ・ジャーナル」がおすすめ。<br><b>理由：</b>読書しないと思考が浅くなるし、筋トレしないと体力も自信も落ちるから。<br><b>例：</b>週1冊読み続けた友達は、半年で話し方も自信も別人になった。<br><b>結論：</b>だから今のうちに、この3つを習慣にした方がいい。</div>
<span class="lab">奥の理由：</span>人は途中を忘れる。最初で要点を渡し、最後でもう一度刻む。挟まれた理由と例が"信じる根拠"になる。</div></div>

<div class="tc"><div class="hd">PASONA｜売りに向かう日</div><div class="bd"><span class="lab">問題→共感→解決→提案→絞込→行動</span>
<div class="draft"><b>問題：</b>毎日忙しくて、自分の時間ゼロじゃない？<br><b>共感：</b>私も昔は仕事に追われて、気づけば1日終わってた。<br><b>解決：</b>変わったのは「朝の30分だけ自分に使う」と決めてから。<br><b>提案：</b>その使い方をチェックリストにまとめた。<br><b>絞込：</b>本気で変えたい人だけ。<br><b>行動：</b>欲しい人はDMで「朝活」って送って。</div>
<span class="lab">奥の理由：</span>「誰でもどうぞ」は誰も動かない。「本気の人だけ」と線を引くと、人は"選ばれた側"に入りたくて動く。</div></div>

<div class="tc"><div class="hd">AIDA｜単発で動かす</div><div class="bd"><span class="lab">注意→興味→欲求→行動</span>
<div class="draft"><b>注意：</b>多くの人が、一番大事な「朝」を捨ててる。<br><b>興味：</b>うまくいってる人ほど、朝の1時間を自分への投資に使ってる。<br><b>欲求：</b>朝が変わるだけで、1日の集中も機嫌も別物になる。<br><b>行動：</b>明日、いつもより30分だけ早く起きてみて。</div>
<span class="lab">奥の理由：</span>大きな行動は怖くて止まる。「30分だけ」と手が届く一歩を示すと、人は「これなら」と踏み出す。</div></div>

<div class="tc"><div class="hd">BAB｜変化・憧れを見せる</div><div class="bd"><span class="lab">Before→After→橋渡し</span>
<div class="draft"><b>Before：</b>前の私は、鏡を見るたびに肌のくすみでため息ついてた。<br><b>After：</b>今は、すっぴんで近所に出られるくらい肌に自信がある。<br><b>橋渡し：</b>変えたのは、夜のケアに1つ足しただけ。</div>
<span class="lab">奥の理由：</span>人は"差"を見せられて欲しくなる。Beforeに自分を重ね、Afterに憧れ、橋渡しで「自分にもできそう」が生まれる。</div></div>

<div class="tc"><div class="hd">QUEST｜教育してから売る</div><div class="bd"><span class="lab">絞る→共感→教育→刺激→行動</span>
<div class="draft"><b>絞る：</b>これは"本気で変わりたい人"だけに言う。<br><b>共感：</b>何度も三日坊主で終わってきたよね。わかる。<br><b>教育：</b>続かないのは意志じゃなくて"仕組み"の問題。<br><b>刺激：</b>仕組みを変えた人から、勝手に続くようになる。<br><b>行動：</b>まず明日の1個だけ、変えてみて。</div>
<span class="lab">奥の理由：</span>「意志じゃなく仕組み」と原因を言い換えると、できない自分を責めてた人が救われ、解決策に飛びつく。</div></div>

<div class="tc"><div class="hd">対比型｜価値観・気づき（伸びやすい）</div><div class="bd"><span class="lab">◯◯な人は／逆に◯◯な人は／対句で締め</span>
<div class="draft">伸びる人は、投稿を「数」じゃなく「1本の刺さり」で勝負してる。逆に伸びない人ほど、毎日投稿に追われて中身が薄くなる。量より質。狭く、深く。</div>
<span class="lab">奥の理由：</span>「白か黒か」を見せられると、人は無意識に自分がどっちかを判定する。判定＝参加。さらに「伸びる側でいたい」が刺さる。</div></div>

<div class="tc"><div class="hd">列挙型｜情報量で押す（伸びやすい）</div><div class="bd"><span class="lab">断言→連打→まとめ→決め台詞</span>
<div class="draft">肌が変わる人は、朝にビタミンCで酸化を止め、夜にレチノールで作り直し、日焼け止めで防ぎ、湯船で巡らせ、7時間寝てる。肌は加齢じゃなく手入れ。今からでも間に合う。やるしかないぞ。</div>
<span class="lab">奥の理由：</span>具体が連続すると「この人は詳しい」という説得力が積み上がる。最後の「加齢じゃなく手入れ」でバラバラの情報が1つの概念に束ねられる。</div></div>

<div class="tc"><div class="hd">物語型｜共感・自己開示</div><div class="bd"><span class="lab">どん底→きっかけ→気づき→変化→あなたも</span>
<div class="draft">3年前、手取り18万で毎月カツカツだった。ある日"発信で稼ぐ"人に出会って、見よう見まねで始めた。半年は鳴かず飛ばず。でも"型"に気づいてから一変。今は自分のペースで働けてる。才能じゃない。あなたにもできる。</div>
<span class="lab">奥の理由：</span>最初に弱さを見せると上下関係が消え、横に並べる。人は完璧な人より「同じだった人」に心を開く。</div></div>

<h3>冒頭（フック）の型と理由</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="指を止めるフック">
<text x="160" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">1行目で指を止める</text>
<rect x="8" y="34" width="92" height="34" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/><text x="54" y="56" text-anchor="middle" font-size="11" fill="#1e4e7e">問いかけ</text>
<rect x="114" y="34" width="92" height="34" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/><text x="160" y="56" text-anchor="middle" font-size="11" fill="#1e4e7e">否定「逆」</text>
<rect x="220" y="34" width="92" height="34" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/><text x="266" y="56" text-anchor="middle" font-size="11" fill="#1e4e7e">数字</text>
<rect x="61" y="78" width="92" height="34" rx="9" fill="#fff5fa" stroke="#b83280"/><text x="107" y="100" text-anchor="middle" font-size="11" fill="#b83280">意外性</text>
<rect x="167" y="78" width="92" height="34" rx="9" fill="#fff5fa" stroke="#b83280"/><text x="213" y="100" text-anchor="middle" font-size="11" fill="#b83280">痛みの情景</text>
</svg>
<div class="figcap">ストーリーは指1本でスキップされる世界。立ち止まるのは「自分に関係ある」と感じた一瞬だけ</div>
</div>
<p>問いかけは"答えたくなる"、否定は"本当か確かめたくなる"、痛みの情景は"自分のことだと感じる"。<strong>どれも読み手の中に小さな反応を起こして指を止める。</strong>4Uチェック（緊急性・独自性・有益性・超具体）が1つも無い1行目は、ただの独り言として流される。</p>

<h2><span class="s">4</span>必ず入れる「20のルール」と奥の理由</h2>
<p>型に沿って書いたら、この要素が入っているか検品する。<strong>1つでも欠けると刺さらない。</strong>グループごとに「なぜ効くか」で覚える。</p>

<div class="tc"><div class="hd">【掴む】読まれる入口</div><div class="bd">
<div class="rule"><span class="rn">1 1記事＝1メッセージ</span><span class="gb2">言いたいことを1つに絞る。詰め込み禁止</span></div>
<div class="rule"><span class="rn">2 冒頭1行で止める</span><span class="gb2">3秒ルール。フックが弱いと全部読まれない</span></div>
<div class="rule"><span class="rn">3 新情報・意外性</span><span class="gb2">"実は逆""多くが間違い"＝既知じゃない切り口</span></div>
<span class="lab">奥の理由：</span>2つ言われると両方ぼやける。<strong>1つに絞るほど深く刺さる。</strong>人は「もう知ってること」に反応しない。意外性が「続きを読む理由」になる。</div></div>

<div class="tc"><div class="hd">【刺す】自分ごと化させる</div><div class="bd">
<div class="rule"><span class="rn">4 主語は"あなた／みんな"</span><span class="gb2">私の日記にしない</span></div>
<div class="rule"><span class="rn">5 痛みの代弁</span><span class="gb2">具体的な"あの瞬間"を描く。抽象的な悩みNG</span></div>
<div class="rule"><span class="rn">6 読者の言葉で書く</span><span class="gb2">専門用語・きれいごと禁止。生の言葉</span></div>
<div class="rule"><span class="rn">7 具体例＋数字</span><span class="gb2">フワッとした感想で終わらせない</span></div>
<span class="lab">奥の理由：</span>主語が"私"だと他人事、"あなた"だと自分ごと。<strong>「あの瞬間」を具体的に描かれると脳に映像が浮かび、感情が動く。</strong>共感は理屈でなく"絵が見えた瞬間"に生まれる。</div></div>

<div class="tc"><div class="hd">【納得】信じさせる ← この章の心臓</div><div class="bd">
<div class="rule"><span class="rn">8 ★概念／法則を1つ立てる</span><span class="gb2">"消費vs投資"の様な思考の軸。無いと一生"感想"</span></div>
<div class="rule"><span class="rn">9 抽象↔具体を往復</span><span class="gb2">概念→数字→ジャンル→また概念</span></div>
<div class="rule"><span class="rn">10 比喩・たとえ</span><span class="gb2">難しい概念を身近な例に変換</span></div>
<div class="rule"><span class="rn">11 権威／根拠</span><span class="gb2">数字・科学・実例。※捏造せず裏が取れるものだけ</span></div>
<div class="rule"><span class="rn">12 社会的証明</span><span class="gb2">自分だけでなく友達・お客の例</span></div>
<div class="rule"><span class="rn">13 損失回避</span><span class="gb2">"今やらない代償"を見せる</span></div>
<div class="rule"><span class="rn">14 再現性の提示</span><span class="gb2">"才能じゃない・気づいた人から"</span></div>
<span class="lab">奥の理由：</span>概念が無い文は丁寧でも"感想"で終わる。<strong>抽象だけだと「で？」、具体だけだと「あなたの話ね」。往復させると軸と実感が両方残る。</strong>人は「得する」より「損したくない」で動く。最後に再現性で「あなたにもできる」と橋を架ける。</div></div>

<div class="tc"><div class="hd">【動かす】行動させる</div><div class="bd">
<div class="rule"><span class="rn">15 言い訳を先回りで潰す</span><span class="gb2">「高い」「怪しい」「時間ない」を代弁→否定</span></div>
<div class="rule"><span class="rn">16 ハードルを極限まで下げる</span><span class="gb2">"1日コーヒー1杯分"の最初の一歩</span></div>
<div class="rule"><span class="rn">17 ベネフィットは"どうなるか"で</span><span class="gb2">機能でなく読者の未来</span></div>
<div class="rule"><span class="rn">18 冒頭フックを回収</span><span class="gb2">最初の感情を後半で繋ぐ。言いっぱなし禁止</span></div>
<div class="rule"><span class="rn">19 商品は"概念の例"に</span><span class="gb2">主役は概念。商品はその一例に格下げ</span></div>
<div class="rule"><span class="rn">20 オチは行動喚起＋決め台詞</span><span class="gb2">自慢で終わらない。"あなた"主語の断言で締める</span></div>
<span class="lab">奥の理由：</span>「高い」「怪しい」を相手が言う前に否定すると断る口実が消える。<strong>商品を主役にすると宣伝臭い。概念を主役に、商品を"一例"に落とすと欲しくなる。</strong>最後は"あなた"主語の断言で背中に手を当てる。</div></div>

<div class="warn">特に抜けやすい＝<b>8(概念)・15(言い訳潰し)・18(フック回収)・20(オチ)</b>。この4つを意識的に入れるだけで文章は一段深くなる。</div>

<h2><span class="s">5</span>★作り方 5ステップ（実演）</h2>
<div class="flowbig">
<span>STEP1 型を決める</span><span>STEP2 骨格を書く</span><span>STEP3 ルールで足す</span><span>STEP4 1000字に育てる</span><span class="is-goal">STEP5 整形</span>
</div>
<div class="key">いきなり完成を狙わない。<strong>骨→肉→量→整形</strong>の順で積む。<br><b>なぜこの順か：</b>名文を一発で書こうとすると構成と表現を同時に考えて脳がパンクする。順番を分けると各段階で考えることが1つになり、迷わず進める。</div>

<div class="step"><span class="sn">STEP1</span><span class="snm">どの型でやるか決める</span><br>→ 今回は <b>PREP（結論→理由→例→結論）</b>。地図が無いまま書くと途中で「何が言いたかったか」を見失う。先に骨格を決めれば、後は肉を足すだけになる。</div>

<div class="step"><span class="sn">STEP2</span><span class="snm">型だけで"骨格"を作る（短くてOK）</span>
<div class="draft">自己投資は早く始めた人ほど得する。なぜなら、お金には"消費"と"投資"があって、投資は複利で返るから。たとえば月1万でも、5年で60万が知識や肌や自信になる。だから迷ってるなら1日でも早く始めた方がいい。</div>
<span class="lab">ここで止まる理由：</span>筋は通ってるが"教科書的"で刺さらない。「読み手の痛み」も「あなたの弱さ」も無いから。骨はあっても体温が無い。</div>

<div class="step"><span class="sn">STEP3</span><span class="snm">20ルールで足りないものを足す</span>
<table>
<tr><th>足すルール</th><th>追加する一文</th></tr>
<tr><td>5 痛みの代弁</td><td>「"あの時やっとけば"って後悔ない？」</td></tr>
<tr><td>4 自己開示</td><td>「私も昔は服とコスメと飲み会で全部消えてた」</td></tr>
<tr><td>15 言い訳潰し</td><td>「お金かかるしなぁ→今思えば完全に逆」</td></tr>
<tr><td>11 権威</td><td>「肌老化の多くは紫外線（光老化）」</td></tr>
<tr><td>16 ハードル下げ</td><td>「1日コーヒー1杯分でも」</td></tr>
<tr><td>18 フック回収</td><td>「数万円は"あの時やっとけば"を防ぐ投資」</td></tr>
<tr><td>20 決め台詞</td><td>「あなたの5年後は今のお金の使い方で決まるぞ」</td></tr>
</table>
<span class="lab">なぜ効くか：</span>ゼロから名文をひねるのは難しいが、「何が欠けてるか」を表で潰すのは誰でもできる。創作を"穴埋め"に変える。</div>

<div class="step"><span class="sn">STEP4</span><span class="snm">1000字程度に膨らませる</span><br>骨格＋足したルールを繋ぐと下の<b>完成例</b>になる。<strong>150字の骨格が、ルールを足すだけで刺さる文に育つ。</strong>増えた分は全部「痛み・自己開示・根拠・言い訳潰し」という刺さる材料。意味のない言葉で伸ばすと逆に薄まる。</div>

<div class="step"><span class="sn">STEP5</span><span class="snm">インスタ用に整形</span><br>Threads/Xなら<b>ベタ打ちのまま</b>投稿。インスタのストーリーなら、文の切れ目で<b>1枚ずつに割って</b>質問・投票スタンプを足す。1枚1メッセージになり、スタンプで"参加"を挟める。参加した人は次の枚も見る。</div>

<h2><span class="s">6</span>完成例（自己投資・全文）</h2>
<div class="final">
正直に聞くけど「あの時やっとけばよかった」って後悔みんなない？私も20代前半は完全に「今が楽しければいい」派で、給料が入ったら服とコスメと飲み会に全部消えてた。先輩に「今のうちに自分に投資しないと後でとんでもないことになるよ」って言われても正直ピンとこなくて流してたんよね。でも30を超えてこれがマジで本当だったと痛感してる。<br><br>
実はお金には2種類ある。使ったら消えて終わる「消費」と、未来の自分が返ってくる「投資」。同じ月1万円でも、飲み会2回で消えて記憶も残らない使い方と、本やスキンケアや勉強に回して5年後の自分が変わる使い方があって、前者は5年で60万がただ消えるだけ。後者は60万が「知識・肌・自信」になって一生返ってくる。<br><br>
たとえば美容医療がまさにそれ。「高いしなくても死なないし」って先延ばしにしがちだけど、肌老化の多くは紫外線（光老化）で、何もしない人から順にシミもくすみも定着していく。後から消すには予防の何倍もお金も時間もかかる。今の肌をキープする数万円は、未来の「あの時やっとけば」を防ぐ投資なんよ。<br><br>
残酷なのは自己投資は早い者勝ちってこと。25歳から始めた人と35歳から始めた人じゃ、同じことをしても10年分の差がつく。早く始めた人だけが複利でラクをしていく。<br><br>
「自己投資ってお金かかるしなぁ」って私もずっと思ってたけど、今思えば完全に逆。今かけない方が後で何倍も高くつく。1日コーヒー1杯を我慢した分でも自分に回せば、肌も自信も知識も、かけた分だけ返ってくる。<br><br>
自己投資は才能でも年齢でもなくて、気づいた人から確実に巻き返せる。だからもし今モヤモヤしてるなら1日でも早く始めた方がいい。<b>あなたの5年後は、今のお金の使い方で決まるぞ。</b>
</div>
<div class="tl">
<div class="tl-item"><span class="tl-n">5</span>冒頭で痛みを問いかけ、指を止める</div>
<div class="tl-item"><span class="tl-n">4</span>「私も全部消えてた」と弱さを見せ横に並ぶ</div>
<div class="tl-item"><span class="tl-n">8</span>「消費と投資」という軸を渡す</div>
<div class="tl-item"><span class="tl-n">9</span>軸を数字とジャンルで往復させる</div>
<div class="tl-item"><span class="tl-n">19</span>美容医療を"概念の一例"に落とす</div>
<div class="tl-item"><span class="tl-n">13</span>「何もしない人から定着」で代償を見せる</div>
<div class="tl-item"><span class="tl-n">15</span>「お金かかる→逆」で言い訳を潰す</div>
<div class="tl-item"><span class="tl-n">18</span>冒頭「あの時やっとけば」を回収</div>
<div class="tl-item"><span class="tl-n">20</span>"あなた"主語の断言で締める</div>
</div>
<div class="key">この全文に<strong>感想は1つも無い。全部が読み手を動かす材料になっている。</strong>これが「日記」と「手紙」の差だ。</div>
<div class="note">※「肌老化の多くは光老化」は皮膚科学で広く言われる内容。数字や割合は捏造せず、裏が取れるものだけ使う。曖昧なら「多くは」「〜しやすい」と定性で書く。</div>

<h2><span class="s">7</span>検品：感想で終わってないか</h2>
<p>「いい文章？」という曖昧な問いはやめる。<strong>「20ルール、いくつ入ってる？欠けはどれ？」</strong>と数で確認する。欠けを潰す作業なら誰でも同じ精度でできる。</p>
<div class="check"><ul>
<li>8 概念／法則を1つ立てた？（持ち帰れる軸がある？）</li>
<li>4 主語は"あなた"？（私の日記になってない？）</li>
<li>5 痛みを具体的なシーンで代弁した？</li>
<li>7 具体例＋数字で証明した？</li>
<li>15 読者の言い訳を潰した？</li>
<li>18 冒頭フックを回収した？</li>
<li>16 ハードルを下げた？</li>
<li>20 オチは行動喚起＋決め台詞？（自慢で終わってない？）</li>
</ul></div>
<div class="warn">どの型でも禁止なのは「先生になること」。教えよう・正そうとした瞬間、上下関係ができて、文章が"手紙"から"説教"に戻る。<b>最後まで「同じ道を先に通った隣の人」の目線でいる。</b></div>

<div class="end">ストーリーは"日記"じゃない。<br>あなたが渡すのは出来事でも感想でもなく、読み手が一生使う"ものの見方"だ。<br><strong>痛みを代弁し、軸を1つ手渡して、背中を押す"手紙"を書け。</strong></div>
</div>
  `,

  'p3-cautions': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>型を覚えたのに稼げない人の正体＝「運用」で全部こわしている</li>
<li>同じ案件でも飽きられない「角度」3〜5つの作り方</li>
<li>毎日訴求と週1訴求、件数が大きく変わらない理由</li>
<li>リンクを貼るベストな瞬間と、開くと消えるものの正体</li>
<li>長く稼ぐ案件選びと、自分用NGメモの作り方</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="型と運用">
<rect x="0" y="20" width="150" height="110" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<rect x="170" y="20" width="150" height="110" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">型</text>
<text x="75" y="70" text-anchor="middle" font-size="11" fill="#2b6cb0">いい一発を作る</text>
<text x="75" y="88" text-anchor="middle" font-size="11" fill="#2b6cb0">技術</text>
<text x="245" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">運用</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#a0aec0">何ヶ月も信じて</text>
<text x="245" y="88" text-anchor="middle" font-size="11" fill="#a0aec0">もらう技術</text>
<text x="160" y="14" text-anchor="middle" font-size="11" fill="#b83280">両輪</text>
<path d="M150 75 L170 75" stroke="#b83280" stroke-width="2"/>
<text x="160" y="148" text-anchor="middle" font-size="11" fill="#b83280">運用が崩れると、型で稼いだ分も全部こぼれる</text>
</svg>
<div class="figcap">うまい文章の競争じゃない。信頼を守る競争だ</div>
</div>

<div class="key">訴求は「うまい文章を書く競争」じゃない。<strong>「この人が言うなら買う」を何ヶ月もかけて積む競争</strong>だ。運用ルールは、その信頼を守るためにある。</div>

<div class="warn">軽く見る人ほど最初の1〜2件は売れる。だが3件目から急に止まる。<b>初動は「型の力」、継続は「運用の力」。</b>型で売れた成功体験のまま運用を雑にやると、気づかぬうちに信頼の貯金を使い切る。</div>

<h2><span class="s">1</span>訴求の角度を変える</h2>
<p>1案件をずっと売りたいとき、初心者は毎回同じことを言う。「この転職サービスいいですよ、登録無料です」のくり返し。<strong>見る側が飽きる。</strong>「またこれか」で指がスクロールに逃げる。</p>

<h3>人は「商品」じゃなく「自分の痛み」を見ている</h3>
<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1つの案件と3つの痛み">
<rect x="120" y="8" width="80" height="30" rx="8" fill="#2b6cb0"/>
<text x="160" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">転職サービス</text>
<path d="M150 38 L70 78" stroke="#b83280" stroke-width="2" marker-end="url(#a1)"/>
<path d="M160 38 L160 78" stroke="#b83280" stroke-width="2" marker-end="url(#a1)"/>
<path d="M170 38 L250 78" stroke="#b83280" stroke-width="2" marker-end="url(#a1)"/>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<rect x="20" y="82" width="100" height="56" rx="10" fill="#fff5fa" stroke="#b83280"/>
<rect x="110" y="82" width="100" height="56" rx="10" fill="#fff5fa" stroke="#b83280"/>
<rect x="200" y="82" width="100" height="56" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="70" y="106" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">給料</text>
<text x="70" y="124" text-anchor="middle" font-size="10" fill="#8a4a6e">上がらない</text>
<text x="160" y="106" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">人間関係</text>
<text x="160" y="124" text-anchor="middle" font-size="10" fill="#8a4a6e">上司が無理</text>
<text x="250" y="106" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">成長</text>
<text x="250" y="124" text-anchor="middle" font-size="10" fill="#8a4a6e">裁量がほしい</text>
</svg>
<div class="figcap">同じ商品を、3人はまったく別の理由で欲しがる</div>
</div>
<div class="key">1つの角度では1種類の人にしか刺さらない。<strong>角度とは「拾える痛みの数」</strong>。3つあれば、振り向かせられる人の種類が3つになる。</div>

<div class="tc"><div class="hd">角度①｜給料アップ</div><div class="bd"><span class="lab">お金で悩む層に：</span>「がんばってるのに給料が上がらない」人へ。<b>「今より稼げる場所に移る」</b>を入口に。「同じ仕事量なのに会社が違うだけで手取りが変わる」から入る。</div></div>

<div class="tc"><div class="hd">角度②｜人間関係リセット</div><div class="bd"><span class="lab">職場に疲れた層に：</span>「上司が無理」「もうリセットしたい」人へ。<b>「環境を変えれば人間関係はゼロから作り直せる」</b>を入口に。給料の話はしない。</div></div>

<div class="tc"><div class="hd">角度③｜キャリアアップ</div><div class="bd"><span class="lab">上を目指す層に：</span>「スキルをもっと活かしたい」人へ。<b>「強みが正しく評価される環境」</b>を入口に。不満でなく成長を語る。</div></div>

<div class="vs">
<div class="l"><div class="t">✗ 飽きられる</div>月：転職サービスいいですよ<br>水：転職サービスいいですよ<br>金：転職サービスいいですよ<br><br>→ 全部同じ顔。3回目で見られない</div>
<div class="r"><div class="t">○ 角度を回す</div>月：給料の不満を代弁→案件<br>水：人間関係の限界を代弁→案件<br>金：成長したい気持ちを代弁→案件<br><br>→ 毎回ちがう人が振り向く</div>
</div>
<div class="warn">角度は<b>「商品の説明」じゃなく「相手の悩み」で分ける</b>。「料金が安い」「サポートが手厚い」を並べても、それは全部商品の説明。<b>主語が商品なら角度じゃない。主語が読み手の痛みなら角度だ。</b></div>

<h3>角度は最初に「紙に書き出す」</h3>
<div class="flow">
<span>案件を1つ決める</span><span>救われる人を挙げる</span><span>3〜5グループに</span><span>各1行の入口セリフ</span>
</div>
<p>その場で考えると、人は<strong>慣れた道に逃げて「いつもの角度」に戻る。</strong>先に書けば、訴求のたびに「今日はどの入口でいくか」を<strong>選ぶだけ</strong>になる。必ず「商品の機能」でなく「救われる人＝痛み」から挙げる。</p>

<h2><span class="s">2</span>訴求頻度の正解 — 毎日でも週1でもいい</h2>

<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="毎日と週1の温め方">
<text x="79" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">毎日：少しずつ温める</text>
<rect x="20" y="60" width="14" height="30" rx="3" fill="#9cb8d6"/><rect x="44" y="55" width="14" height="35" rx="3" fill="#9cb8d6"/><rect x="68" y="50" width="14" height="40" rx="3" fill="#9cb8d6"/><rect x="92" y="45" width="14" height="45" rx="3" fill="#9cb8d6"/><rect x="116" y="40" width="14" height="50" rx="3" fill="#2b6cb0"/>
<text x="79" y="108" text-anchor="middle" font-size="11" fill="#718096">毎日少しずつ件数が出る</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="241" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">週1：5日ためて一気に</text>
<rect x="186" y="80" width="14" height="10" rx="3" fill="#9cb8d6"/><rect x="210" y="78" width="14" height="12" rx="3" fill="#9cb8d6"/><rect x="234" y="76" width="14" height="14" rx="3" fill="#9cb8d6"/><rect x="258" y="74" width="14" height="16" rx="3" fill="#9cb8d6"/><rect x="282" y="34" width="14" height="56" rx="3" fill="#b83280"/>
<text x="241" y="108" text-anchor="middle" font-size="11" fill="#718096">その1日に売上が集中</text>
<text x="160" y="135" text-anchor="middle" font-size="11" fill="#b83280">温まる人の総量は、そう変わらない</text>
</svg>
<div class="figcap">売上は「売った回数」でなく「温まった人の数」で決まる</div>
</div>
<div class="key">頻度は「量」でなく<strong>「自分のリズム」の問題</strong>。大事なのは「続けられるペースか」「教育を積めているか」。続かないペースを選ぶのが一番ダメだ。途中で止まると温めかけた人が冷める。</div>

<table>
<tr><th>タイプ</th><th>毎日訴求（コンスタント型）</th><th>週1訴求（集中型）</th></tr>
<tr><td>売れ方</td><td>毎日少しずつ件数が出る</td><td>その1日に集中</td></tr>
<tr><td>大変なところ</td><td>毎日ネタと角度を変える</td><td>5日間の教育を積む</td></tr>
<tr><td>向いてる人</td><td>発信に慣れた人</td><td>初心者・これから始める人</td></tr>
<tr><td>失敗しやすい点</td><td>同じ角度を連発</td><td>当日いきなり売って前ふりなし</td></tr>
</table>

<h3>毎日訴求＝毎日ちがう角度が条件</h3>
<p>月は給料、火は人間関係、水は成長と<strong>毎日入口を変える。</strong>毎日見るフォロワーほど反復に早く慣れる。距離が近いぶん飽きるのも早い。慣れた人向けなのは、この「毎日角度を変える」が地味にしんどいからだ。</p>

<h3>週1訴求＝本体は「5日間の教育」</h3>
<div class="flow">
<span>月：迷う人の共通点</span><span>火：辞めた人のその後</span><span>水：変えると楽になる</span><span>木：残るリスク</span><span>金：最初の一歩</span><span class="is-goal">土日：案件を1回</span>
</div>
<p>人はいきなり差し出された解決策を信じない。だが「うすうす気づいていた問題」を言葉にされると<strong>欲しさが自分の中で立ち上がる。</strong>5日間で「動きたい」を作り、最終日で「動く先」を渡す。初心者向きなのは、角度をひねり出さず教育に集中できるからだ。</p>
<div class="good"><b>○ 週1型</b> 月〜金で「疲れる原因」「変えた人の話」を少しずつ → 土日で温まった人に案件を1回だけ。</div>
<div class="bad"><b>✗ よくある失敗</b> 5日間ふつうの日常投稿 → いきなり日曜に「登録して」。前ふりゼロで心がついてこない。</div>

<h3>リンクは「枚数」でなく「欲しくなった瞬間」</h3>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="欲しいの賞味期限">
<polyline points="20,100 70,95 120,60 160,30 200,55 250,85 300,98" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="160" cy="30" r="7" fill="#b83280"/>
<text x="160" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">ここで貼る</text>
<line x1="160" y1="37" x2="160" y2="110" stroke="#b83280" stroke-width="1" stroke-dasharray="3 3"/>
<text x="60" y="125" text-anchor="middle" font-size="10" fill="#a0aec0">まだ早い</text>
<text x="160" y="125" text-anchor="middle" font-size="10" fill="#b83280">欲しさのピーク</text>
<text x="270" y="125" text-anchor="middle" font-size="10" fill="#a0aec0">数分で冷める</text>
</svg>
<div class="figcap">「欲しい」には賞味期限がある。湧いた直後が一番高い</div>
</div>
<div class="key">枚数で決めるな。悩みを代弁し「こうすれば解決する」と道筋を見せ、相手が前のめりになった<strong>その直後の1枚</strong>にリンクを置く。「欲しい」と「リンク」を同じ瞬間にそろえる。</div>
<div class="warn">「何枚に1回」で機械的に貼ると、まだ欲しくないのに出てきて冷められる。逆に欲しいのにリンクがないと取りこぼす。<b>機械の都合でなく、相手の心の都合に合わせる。</b></div>

<h2><span class="s">3</span>複数案件を並行するタイミング</h2>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="絞ると本気・広げると営業">
<text x="79" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 絞る＝本気に見える</text>
<rect x="50" y="40" width="58" height="40" rx="10" fill="#2b6cb0"/>
<text x="79" y="65" text-anchor="middle" font-size="12" fill="#fff">これ1つ</text>
<text x="79" y="110" text-anchor="middle" font-size="10" fill="#1e4e7e">語りが深く具体的</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="241" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 広げる＝営業に見える</text>
<rect x="178" y="44" width="34" height="24" rx="6" fill="#cbd5e0"/><rect x="216" y="44" width="34" height="24" rx="6" fill="#cbd5e0"/><rect x="254" y="44" width="34" height="24" rx="6" fill="#cbd5e0"/>
<text x="241" y="110" text-anchor="middle" font-size="10" fill="#718096">どれも浅い＝見抜かれる</text>
</svg>
<div class="figcap">人は本気を「行動の集中度」で測る。具体は本気の証拠だ</div>
</div>
<div class="warn">最初から複数を同時に売ると<b>「本当におすすめしてるのか」「結局お金目的か」</b>と思われる。あれもこれも紹介する人は何ひとつ信用されない。信頼を失うと、その後どんな案件も売れなくなる。</div>

<div class="step"><span class="sn">1</span><span class="snm">1案件を選んで1ヶ月集中</span><p>角度を3〜5つ用意し、頻度を試し、その1つだけで売上を作る。あえて他をやらないことで語りが深くなる。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">目標売上を達成する</span><p>決めた数字に届くまでよそ見しない。届かないうちに広げると、どっちも中途半端。焦りこそ信頼を削る最大の敵だ。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">達成してから2案件目を足す</span><p>1つで結果が出る型ができてから、同じやり方を応用。土台があるから2つ目は早い。順番が逆だと両方崩れる。</p></div>

<h2><span class="s">4</span>アフィリエイトリンクの注意点 — 開かずにコピー</h2>
<p>初心者がいちばん損する落とし穴。売れたのに<strong>成果が1件もカウントされない</strong>事故が、貼り方ミスで起きる。これは心理でなく手順の話。仕組みで理解すれば二度と間違えない。</p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="紹介状が住所に変わる">
<rect x="30" y="20" width="110" height="50" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="85" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">発行リンク</text>
<text x="85" y="60" text-anchor="middle" font-size="10" fill="#2b6cb0">＝あなたの名の紹介状</text>
<path d="M140 45 L185 45" stroke="#718096" stroke-width="2" marker-end="url(#a2)"/>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#718096"/></marker></defs>
<text x="162" y="38" text-anchor="middle" font-size="10" fill="#718096">開く</text>
<rect x="185" y="20" width="110" height="50" rx="8" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="240" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">開いた先の住所</text>
<text x="240" y="60" text-anchor="middle" font-size="10" fill="#a0aec0">＝名前が消えてる</text>
<text x="160" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">開いた瞬間、紹介状がただの住所に変わる</text>
<text x="160" y="124" text-anchor="middle" font-size="11" fill="#b83280">誰の紹介かわからず成果ゼロ</text>
</svg>
<div class="figcap">発行リンクは絶対に開かない。コピーしてそのまま貼る</div>
</div>

<div class="vs">
<div class="l"><div class="t">✗ NG：クリックしてからコピー</div>発行リンクを<b>いったん開いて</b>、開いた先のアドレスをコピーして貼る。<br><br>→ ただの普通のアドレス。あなた経由の印が消えてるから<b>売れても成果に反映されない。</b></div>
<div class="r"><div class="t">○ OK：開かずそのままコピー</div>発行された<b>リンクを、開かずにそのまま</b>コピーして貼る。<br><br>→ あなた経由の印がついたままだから、ちゃんと成果になる。</div>
</div>
<div class="key">対策はシンプル。<strong>発行リンクは開かない。コピーしてそのまま貼るだけ。</strong>「中身を確認したいから一度開く」が事故の原因。確認は案件サイトの説明ページで。発行リンクそのものは触らない。</div>

<div class="check"><ul>
<li>発行直後のリンクを、開かずにコピーしたか</li>
<li>開いた先のページのアドレスを貼っていないか</li>
<li>貼った後、可能なら自分でテスト経由して成果が動くか確認したか</li>
</ul></div>

<h2><span class="s">5</span>案件選びの鉄則 — 長く続く売上を選ぶ</h2>

<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="一度きりと積み上げ">
<text x="79" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 一度きりの大きな売上</text>
<rect x="55" y="35" width="48" height="60" rx="6" fill="#cbd5e0"/>
<path d="M55 95 q24 25 48 0" fill="none" stroke="#b83280" stroke-width="2"/>
<text x="79" y="120" text-anchor="middle" font-size="10" fill="#718096">信頼を1回で削る</text>
<text x="79" y="134" text-anchor="middle" font-size="10" fill="#b83280">＝未来の前借り</text>
<line x1="160" y1="20" x2="160" y2="130" stroke="#e2e8f0"/>
<text x="241" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 毎月続く売上</text>
<rect x="190" y="80" width="14" height="15" rx="2" fill="#9cb8d6"/><rect x="212" y="68" width="14" height="27" rx="2" fill="#9cb8d6"/><rect x="234" y="56" width="14" height="39" rx="2" fill="#2b6cb0"/><rect x="256" y="42" width="14" height="53" rx="2" fill="#2b6cb0"/><rect x="278" y="30" width="14" height="65" rx="2" fill="#b83280"/>
<text x="241" y="120" text-anchor="middle" font-size="10" fill="#1e4e7e">評価を削らず積む</text>
<text x="241" y="134" text-anchor="middle" font-size="10" fill="#b83280">＝複利で効く</text>
</svg>
<div class="figcap">本当の資産は売った金額でなく「この人のおすすめは間違いない」</div>
</div>
<div class="key">合言葉は<strong>「一度きりの大きな売上より、毎月続く売上」</strong>。1回ドカンと売る案件はたいてい無理が混じり、評価を削る。毎月続けば時間が経つほど売りやすくなる。</div>

<h3>「本当におすすめできるもの」だけ扱う</h3>
<div class="vs">
<div class="l"><div class="t">✗ 微妙なものを売る末路</div>紹介料が高い案件を「最高です」→ がっかり → 「この人のおすすめは当てにならない」が定着 → 何を出しても売れない体質に</div>
<div class="r"><div class="t">○ 本当に良いものだけ売る</div>使って良かったものだけ紹介 → 満足 → 「この人のおすすめは間違いない」が定着 → 次も売れる。信頼が積み上がる</div>
</div>
<p>信頼は積むのに何ヶ月もかかるのに、壊れるのは一瞬。<strong>人は満足より裏切りの方を覚えている。</strong>だから1回の妥協が不釣り合いなほど高くつく。</p>

<h3>採用する前の4チェック</h3>
<div class="grp"><div class="gh">1つでも「いいえ」なら扱わない</div><div class="gb">
<div class="rule"><span class="rn">1 自分で使ったか</span><span class="gb2">使ってないものを「最高」と言うと、語りに具体がなくてバレる。使った人だけが持てる細部が信頼の正体だから</span></div>
<div class="rule"><span class="rn">2 フォロワーの悩みを解決するか</span><span class="gb2">客層とズレた案件は、いい商品でも刺さらない。人は自分の痛みにしか反応しないから</span></div>
<div class="rule"><span class="rn">3 出口が複数あるか</span><span class="gb2">紹介だけで終わらず自分の商品にもつなげられるか。出口が1つだと先細りする</span></div>
<div class="rule"><span class="rn">4 リピートや紹介につながるか</span><span class="gb2">満足した人が次のお客を連れてくる商品か。勝手に広がるから</span></div>
</div></div>
<div class="warn">特に見落とすのが<b>2番「フォロワーの悩みとズレてないか」</b>。紹介料や流行りだけで選ぶと客層に刺さらず、無理に売って信頼を削る。<b>金額より客層の一致を優先する。</b>ズレた案件は売れないうえ信頼も減る、二重の損だ。</div>

<h2><span class="s">6</span>★ゴール：自分用「NGワード／トーン」メモを作る</h2>
<p>頭で分かっていても訴求の最中はつい忘れる。<strong>売りたい気持ちは、ルールを破る方向に人を押す。</strong>だから冷静なときに決めたルールを外に置き、熱くなった自分にブレーキをかける。メモは記憶でなく「判断がゆるむ瞬間」のためにある。</p>

<div class="step"><span class="sn">1</span><span class="snm">NGワードを書き出す</span><p>言いがちで信頼を下げる言葉を並べる。例「絶対稼げる」「誰でも簡単」「今だけ」の煽りすぎ、根拠のない数字（裏付けのない割合や倍数）、作り物っぽい言い回し。煽りは短期の反応を上げ、信頼を削る。</p></div>

<div class="step"><span class="sn">2</span><span class="snm">トーンを1行で決める</span><p>どんな空気で話すかを言葉に。例「友達に本音で教える口調」「上から教えない、隣に立つ」。訴求の日だけ急に営業口調になる事故が防げる。</p></div>

<div class="step"><span class="sn">3</span><span class="snm">運用ルールを箇条書きで足す</span><p>①角度は3〜5つ ②頻度は自分のスタイル ③リンクは欲しい瞬間に ④リンクは開かずコピー ⑤1案件1ヶ月集中 ⑥本当におすすめできるものだけ。</p></div>

<div class="final">
【自分用メモ・記入例】<br><br>
■ 言わないNGワード<br>・「絶対」「誰でも簡単」「今だけ」の煽り過ぎ<br>・裏付けのない数字（割合や倍数）<br>・「〜だと思います」「〜でしょう」のあいまい口調<br><br>
■ トーン<br>・友達に本音で教える口調。上から教えない。<br><br>
■ 運用ルール<br>・角度は3〜5つ用意して毎回変える<br>・頻度は自分が続けられる方（毎日 or 週1）<br>・リンクは「欲しくなった瞬間」に貼る<br>・発行リンクは開かずそのままコピー<br>・1案件を1ヶ月やり込んでから2件目<br>・本当におすすめできるものだけ扱う
</div>
<div class="note">※一度作って終わりじゃない。「これ言うと冷められる」と気づくたび書き足す。失敗を、次の自分を守るルールに変える。</div>

<h2><span class="s">7</span>検品：ルールを守れているか</h2>
<p>出す前に毎回この問いで確認。<strong>「いい訴求か」でなく「ルール、守れてるか」で見る。</strong>うまさは日でブレるが、ルールは守れば必ず信頼が積む。</p>
<div class="check"><ul>
<li>今日の角度は前回と変えたか（同じ角度の連発になってないか）</li>
<li>角度は「相手の痛み」起点か（商品の説明になってないか）</li>
<li>頻度は自分が続けられるペースか</li>
<li>リンクは「欲しくなった瞬間」に置いたか（枚数で機械的に貼ってないか）</li>
<li>複数案件を同時に売ろうとしてないか。まず1つに集中できてるか</li>
<li>リンクは開かずにコピーしたか。成果が反映される状態か</li>
<li>この案件、本当におすすめできるか。4チェック通ったか</li>
<li>NGワードを使ってないか。トーンは自分の基準どおりか</li>
</ul></div>

<div class="end">型は「いい一発」を作る技術。運用は「その一発を、何ヶ月も信じてもらう」技術。<br>角度を3〜5つ用意し、頻度は週1か毎日で自分のスタイルに合わせる。<br>1案件1ヶ月集中、リンクは開かずコピー、案件は本当におすすめできるものだけ。<br><strong>守るほど信頼が積み上がり、長く稼げる。Phase 3 完了。次は規模を広げる Phase 4。</strong></div>
</div>
  `,

  // ============================================================
  // Phase 4 — 拡張する
  // ============================================================

  'p4-kpi': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>稼ぐ人が毎週見る「収益化7大ポイント」と、その並び順の意味</li>
<li>なぜ「数字を見る人」だけが安定して伸びるのか</li>
<li>ストーリー閲覧率とCV率の目安・読み方・折れない基準の持ち方</li>
<li>売上が落ちた時に「どこが悪いか」を一発で切り分ける診断手順</li>
<li>週次KPIシートを埋めて「来週の1手」まで決められるようになる</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="勘と数字の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 勘で伸ばす</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 数字で伸ばす</text>
<rect x="60" y="44" width="6" height="6" fill="#a0aec0"/>
<rect x="44" y="60" width="6" height="6" fill="#cbd5e0"/>
<rect x="92" y="58" width="6" height="6" fill="#cbd5e0"/>
<rect x="70" y="78" width="6" height="6" fill="#a0aec0"/>
<rect x="50" y="92" width="6" height="6" fill="#cbd5e0"/>
<rect x="100" y="90" width="6" height="6" fill="#a0aec0"/>
<text x="79" y="130" text-anchor="middle" font-size="11" fill="#718096">当たりも空振りも分からない</text>
<polyline points="186,108 216,98 246,80 276,58 304,40" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="186" cy="108" r="4" fill="#2b6cb0"/><circle cx="246" cy="80" r="4" fill="#2b6cb0"/><circle cx="304" cy="40" r="5" fill="#b83280"/>
<text x="241" y="130" text-anchor="middle" font-size="11" fill="#1e4e7e">直す場所が見える</text>
</svg>
<div class="figcap">数字を見ない努力は、目隠しの素振り</div>
</div>

<div class="key">収益は「勘」で伸ばすものじゃない。<strong>「数字」で伸ばすものだ。</strong>月100万円を超える人は、毎週おなじ数字を見て、次に何を直すかを決めている。才能じゃなく、見る習慣の差だ。</div>

<h3>数字は「がんばる場所」を教える地図</h3>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="効く努力と効かない努力">
<text x="160" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">売上が落ちた、その原因は？</text>
<rect x="14" y="40" width="136" height="64" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="82" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">見られてない</text>
<text x="82" y="86" text-anchor="middle" font-size="11" fill="#8a4a6e">→ 新規を増やす</text>
<rect x="170" y="40" width="136" height="64" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="238" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">訴求が弱い</text>
<text x="238" y="86" text-anchor="middle" font-size="11" fill="#2b6cb0">→ 文章を直す</text>
<text x="160" y="122" text-anchor="middle" font-size="11" fill="#718096">やることは正反対。汗をかく場所を間違えると伸びない</text>
</svg>
<div class="figcap">数字を見る目的は採点じゃない。力を入れる場所を知ること</div>
</div>
<div class="warn">「忙しくて数字まで見れない」は順番が逆だ。<b>数字を見ないから、ムダな努力で忙しくなってる。</b>週1回5分見るだけで、同じ努力でも進む距離が変わる。</div>

<h2><span class="s">1</span>収益化7大ポイント（全体像）</h2>
<p>この章の主役はこの7つ。先に全体を頭に入れると迷子にならない。</p>
<table>
<tr><th>#</th><th>ポイント</th><th>ひとことで言うと</th></tr>
<tr><td>1</td><td>限定性・緊急性のある案件を選ぶ</td><td>「残り3日」が言える案件は売れる</td></tr>
<tr><td>2</td><td>単価交渉は実績を作ってから</td><td>実績ゼロの値上げ交渉は通らない</td></tr>
<tr><td>3</td><td>フィード投稿と掛け合わせる</td><td>ストーリーを見ない層にも届ける</td></tr>
<tr><td>4</td><td>ストーリー閲覧率を測る</td><td>訴求の日は閲覧率が落ちると知る</td></tr>
<tr><td>5</td><td>CV率を計算する</td><td>クリックした人が買ったかを見る</td></tr>
<tr><td>6</td><td>売上が下がった原因を診断</td><td>訴求のせいか、新規のせいか切り分ける</td></tr>
<tr><td>7</td><td>目標は段階的に上げる</td><td>3万→10万→30万で積み上げる</td></tr>
</table>
<div class="flowbig">
<span>1・2・3 動き方の方針</span><span>4・5・6 数字を見る</span><span class="is-goal">7 折れない設計</span>
</div>
<div class="key">並び順に意味がある。<b>前半で土台を作り、中盤で測り、最後に折れない仕組みを置く。</b>週次KPIで毎週見るのは主に4・5・6だ。</div>

<h2><span class="s">2</span>限定性・緊急性のある案件を選ぶ</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="限定性の弱い案件と強い案件">
<rect x="0" y="20" width="150" height="90" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ いつでも買える</text>
<text x="75" y="70" text-anchor="middle" font-size="11" fill="#a0aec0">「また今度でいいか」</text>
<text x="75" y="90" text-anchor="middle" font-size="11" fill="#a0aec0">→ 先送り→忘れる</text>
<rect x="170" y="20" width="150" height="90" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 残り3日・先着</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#2b6cb0">「逃すと損する」</text>
<text x="245" y="90" text-anchor="middle" font-size="11" fill="#2b6cb0">→ 決断が今日に来る</text>
</svg>
<div class="figcap">限定性は"先送り"を止める装置。背中を押す理由が商品側にある</div>
</div>
<p>人が買わない一番の原因は「興味がない」じゃなく<strong>「今じゃなくていい」</strong>だ。締め切りがないと、欲しくても決断を明日に送り、明日には冷めて忘れる。同じ化粧品でも「いつでも買える」より「今週末まで」が動く。</p>
<div class="key"><strong>最初の案件はこれを最優先で選べ。</strong>実績がないうちは、自分の腕じゃなく「売れやすい案件の力」に乗っかるのが正解だ。腕は売りながら上げればいい。</div>
<div class="warn">つまずき：単価の高さだけで選ぶ。高単価×売れない、より、適正単価×売れる、のほうが手残りは大きい。<b>「今すぐ買う理由を作れるか」で選べ。</b></div>

<h2><span class="s">3</span>単価交渉は実績を作ってから</h2>
<p><strong>特別単価（"特単"）</strong>は、実績のある発信者だけが個別にもらえる上乗せ報酬。ただし順番を間違えると一生通らない。</p>
<div class="step"><span class="sn">1</span><span class="snm">ASPに平均を聞く</span><p>案件を仲介する会社（ASP）に同ジャンルの「月間の平均件数」を聞く。これが交渉の基準ラインになる。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">その平均を超える実績を作る</span><p>普通の単価のまま、まず数字で勝つ。ここを飛ばすと交渉は成立しない。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">特単を交渉する</span><p>「平均よりこれだけ売ってます。上げてもらえればもっと力を入れます」。実績という証拠があるから相手も上げる理由ができる。</p></div>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="交渉はお願いでなく取引">
<text x="160" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">相手の判断はたった1つ</text>
<rect x="40" y="36" width="240" height="44" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">「多く払ったら、その分以上に売ってくれるか」</text>
<text x="160" y="104" text-anchor="middle" font-size="11" fill="#b83280">実績＝「払えば回収できる」と相手が計算できる唯一の答え</text>
</svg>
<div class="figcap">交渉は"お願い"じゃなく"取引"。相手が得する理由を先に用意する</div>
</div>
<div class="bad"><b>✗ 悪い例</b> 実績ゼロで「上げてください」と頼む。売れるか分からない相手に上乗せする理由がない。ほぼ通らない。</div>
<div class="good"><b>○ 良い例</b> 普通単価で平均超え→数字を見せて交渉。「払えばもっと売る」と相手が計算できる。だから通る。</div>
<div class="note">つまずき：「実績を待つのは遠回りでは」と焦る。逆だ。実績ゼロで断られると「数字がない人」の印象がつく。先に作るほうが結局速い。</div>

<h2><span class="s">4</span>フィード投稿と掛け合わせる</h2>
<p>ストーリーだけで売ると届く相手が狭い。<strong>ストーリーは、もともと好きでよく見てる人しか開かない</strong>から、いつも同じ人に売ることになる。</p>
<div class="flowbig">
<span>フィード（出会い）</span><span>ハイライト（深掘り）</span><span>ストーリー（育てる）</span><span class="is-goal">リンク購入</span>
</div>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="看板とレジのたとえ">
<rect x="20" y="44" width="70" height="50" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="55" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">フィード</text>
<text x="55" y="84" text-anchor="middle" font-size="10" fill="#2b6cb0">看板</text>
<rect x="125" y="44" width="70" height="50" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">ストーリー</text>
<text x="160" y="84" text-anchor="middle" font-size="10" fill="#2b6cb0">店員</text>
<rect x="230" y="44" width="70" height="50" rx="8" fill="#fff5fa" stroke="#b83280"/>
<text x="265" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">リンク</text>
<text x="265" y="84" text-anchor="middle" font-size="10" fill="#8a4a6e">レジ</text>
<line x1="90" y1="69" x2="123" y2="69" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a4)"/>
<line x1="195" y1="69" x2="228" y2="69" stroke="#b83280" stroke-width="2" marker-end="url(#a4b)"/>
<defs><marker id="a4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker><marker id="a4b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="160" y="118" text-anchor="middle" font-size="11" fill="#718096">看板がないと、レジだけ用意しても人が入ってこない</text>
</svg>
<div class="figcap">フィードは"出会いの場"、ストーリーは"育てる場"。役割が違う</div>
</div>
<div class="key">ストーリーだけだと同じ顔ぶれにしか売れず、やがて頭打ちになる。<strong>フィードで新しい人を入口に呼び、ストーリーで育てる。</strong>これが売上の天井を上げる唯一の方法だ。</div>
<div class="note">つまずき：「ストーリーの反応がいいからフィードはサボる」。これが天井を作る。フィードを止めると新規が止まり、数ヶ月後にじわじわ落ちる。落ちた頃には原因を忘れている。</div>

<h2><span class="s">5</span>ストーリー閲覧率を測る</h2>
<p>ここから「数字を見るパート」。閲覧率は<b>「フォロワーのうち、何割がそのストーリーを見たか」</b>だ。</p>
<div class="warn">初心者が必ず驚く点：<b>訴求（リンクで売る日）は閲覧率が普段の3分の2〜2分の1まで落ちる。</b>これは普通だ。リンクが見えると「宣伝か」と閉じる人が出る。前章の"警戒"そのもの。知らないと「急に嫌われた」と勘違いして折れる。</div>
<p>だから基準値を先に持つ。見るのは1点だけ——<strong>「いつもより落ちすぎてないか」</strong>。</p>
<table>
<tr><th>評価</th><th>訴求時の閲覧率</th><th>やること</th></tr>
<tr><td>優秀</td><td>30%以上</td><td>この調子で継続</td></tr>
<tr><td>平均</td><td>20〜30%</td><td>質を維持</td></tr>
<tr><td>やや低</td><td>15〜20%</td><td>発信を見直し</td></tr>
<tr><td>要改善</td><td>15%未満</td><td>テーマ・角度を変える</td></tr>
</table>
<div class="key">基準を持つのは自分を守るためだ。「20%しかなかった…」じゃなく<strong>「平均ゾーンか、OK」</strong>と読む。数字に振り回される人は折れる。基準で読む人が続いて、勝つ。</div>

<h2><span class="s">6</span>CV率を計算する</h2>
<p>CV率は発信で一番大事な数字。<b>「リンクをクリックした人のうち、何割が実際に買ったか」</b>だ。</p>
<div class="eq">CV率 ＝ 成果件数 ÷ クリック数 × 100<br><span style="font-size:.85em;color:#718096">例：100人クリック → 15人が買った → 15 ÷ 100 × 100 ＝ CV率15%</span></div>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="入口の数と出口の数">
<rect x="10" y="30" width="140" height="64" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="80" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">クリック数</text>
<text x="80" y="78" text-anchor="middle" font-size="11" fill="#a0aec0">入口＝興味の数</text>
<rect x="170" y="30" width="140" height="64" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="240" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">CV率</text>
<text x="240" y="78" text-anchor="middle" font-size="11" fill="#8a4a6e">出口＝説得できた数</text>
<line x1="150" y1="62" x2="168" y2="62" stroke="#a0aec0" stroke-width="2" marker-end="url(#a6)"/>
<defs><marker id="a6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#a0aec0"/></marker></defs>
</svg>
<div class="figcap">人がたくさん入ってもレジが鳴らなければ売上ゼロ。見るのは出口</div>
</div>
<table>
<tr><th>評価</th><th>CV率</th><th>状態</th></tr>
<tr><td>優秀</td><td>20%超</td><td>訴求が完璧</td></tr>
<tr><td>良</td><td>15%</td><td>維持</td></tr>
<tr><td>普通</td><td>10%</td><td>改善余地あり</td></tr>
<tr><td>要改善</td><td>10%未満</td><td>訴求を見直す</td></tr>
</table>
<div class="warn">つまずき：クリック数だけ見て一喜一憂する。クリックは増やしやすいが売上に直結しない。<b>見るのはCV率。</b>クリックは"人気"、CVは"説得力"。伸ばすべきは後者だ。</div>

<h2><span class="s">7</span>売上が下がった原因を診断する</h2>
<p>ここが核心。落ちた時、<strong>「なんとなく調子が悪い」で終わらせず、原因を2つに切り分ける。</strong>売上は「何人来て（クリック数）×何割が買ったか（CV率）」でできている。落ちたなら、どっちかが落ちている。</p>
<div class="vfig">
<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="売上低下の切り分け">
<rect x="100" y="6" width="120" height="30" rx="8" fill="#1e4e7e"/>
<text x="160" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">売上が落ちた</text>
<line x1="160" y1="36" x2="80" y2="58" stroke="#cbd5e0" stroke-width="2"/>
<line x1="160" y1="36" x2="240" y2="58" stroke="#cbd5e0" stroke-width="2"/>
<rect x="6" y="60" width="148" height="92" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="80" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">CV率が下がった</text>
<text x="80" y="100" text-anchor="middle" font-size="10" fill="#2b6cb0">買う割合が減った</text>
<text x="80" y="120" text-anchor="middle" font-size="10" fill="#2b6cb0">＝接客（訴求）が悪い</text>
<text x="80" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#2b6cb0">→ 訴求の角度を直す</text>
<rect x="166" y="60" width="148" height="92" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="240" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">クリックが減った</text>
<text x="240" y="100" text-anchor="middle" font-size="10" fill="#8a4a6e">入店数が減った</text>
<text x="240" y="120" text-anchor="middle" font-size="10" fill="#8a4a6e">＝看板（新規）が弱い</text>
<text x="240" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#b83280">→ フィードで新規を取る</text>
</svg>
<div class="figcap">CV率は「店に入った人が買う割合」、クリック数は「入店した人数」</div>
</div>
<div class="key"><strong>一番多いのはクリックが減るほう（新規率の低下）だ。</strong>同じフォロワーに毎日訴求すると、買う気のある人から順に買い、残りは「もう買った」人ばかりになる。訴求は変わってないのに売れる相手が枯れる。<b>CV率が変わってないなら、訴求はいじるな。新規を取りに行け。</b></div>
<div class="warn">診断の鉄則：<b>まずCV率を見る。</b>CV率が落ちた→訴求を直す。CV率は同じでクリックだけ落ちた→新規を取る。CV率が"質"、クリックが"量"。質が無事なら量だけ足せばいい。先に質を疑うと無事なものを壊す。</div>

<h2><span class="s">8</span>目標は段階的に上げる</h2>
<p>いきなり「月100万」を狙うと、遠すぎて今日やることが分からず、ほぼ折れる。だから<strong>目標は1段ずつ上げる。</strong></p>
<div class="ladder">
<div class="rung">1日3万円<span>まずここを安定して出す</span></div>
<div class="rung">10万円<span>3万が当たり前になったら</span></div>
<div class="rung is-top">30万円<span>10万が当たり前になったら</span></div>
</div>
<p>人を動かし続ける燃料は<strong>「自分にもできた」という小さな手応え</strong>だ。3万を達成すると「次は10万いけるかも」と思える。最初から30万だと「全然届かない」しか感じず、走るのをやめる。そして——一番こわいのが——<b>数字を見るのが嫌になる。その瞬間、この章で学んだ全部が止まる。</b></p>
<div class="good"><b>○ 良い例</b> 「今週は1日3万を1回でも超える」。達成可能で嬉しい。その嬉しさが次の段の燃料になる。</div>
<div class="bad"><b>✗ 悪い例</b> 「いきなり月100万」。今日何をすれば近づくか分からず、達成感ゼロで辞める。</div>
<div class="key">大目標は「行き先」として持っていい。でも毎日追うのは<strong>「次の1段」だけ</strong>にしろ。遠くのゴールは方角を、足元の1段は今日を動かすためにある。</div>

<h2><span class="s">9</span>週次KPIシートの記入手順（実演）</h2>
<p>毎週この順番で埋めるだけ。<strong>上から埋めると、最後に自動で「やるべきこと」にたどり着くよう設計してある。</strong></p>
<div class="step"><span class="sn">1</span><span class="snm">今週の閲覧率を書く</span><p>訴求日のストーリー閲覧率を記入。第5節の表でゾーンを判定。「届いているか」を確認する。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">クリック数を書く</span><p>リンクが何回クリックされたか。先週と比べて増減を見る。これが"量"だ。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">CV率を計算して書く</span><p>成果件数 ÷ クリック数 × 100。第6節の表でゾーン判定。これが"質"だ。</p></div>
<div class="step"><span class="sn">4</span><span class="snm">先週と比べて原因を切り分ける</span><p>CV率が落ちた→訴求を直す。CV率は同じでクリックが落ちた→新規。2と3を並べた瞬間、原因が見える。</p></div>
<div class="step"><span class="sn">5</span><span class="snm">来週やること1つを決める</span><p>「訴求の角度を変える」か「フィードで新規を取る」か。<b>1つだけ</b>決めてやる。あれもこれも直さない。</p></div>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1つだけ変える理由">
<rect x="0" y="30" width="150" height="56" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">✗ 2つ同時に変える</text>
<text x="75" y="74" text-anchor="middle" font-size="10" fill="#a0aec0">どっちが効いたか不明</text>
<rect x="170" y="30" width="150" height="56" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">○ 1つだけ変える</text>
<text x="245" y="74" text-anchor="middle" font-size="10" fill="#2b6cb0">結果と原因が1対1</text>
</svg>
<div class="figcap">"効くツボ"が毎週1つずつ溜まる。感覚を実力に変える唯一の道</div>
</div>
<div class="key">KPIシートは"成績表"じゃなく"地図"だ。<strong>良し悪しで一喜一憂するためじゃなく、来週どこに力を入れるかを決めるために書く。</strong>必ず最後に「来週やること1つ」まで決めろ。</div>
<div class="note">つまずき：「数字が悪い週は書きたくない」。逆だ。悪い週ほど地図が一番役に立つ。飛ばす人は伸ばすチャンスを飛ばしている。</div>

<h2><span class="s">10</span>この章の結論</h2>
<div class="flowbig">
<span>見る（閲覧率・CV率・クリック数）</span><span>切り分ける（訴求 or 新規）</span><span class="is-goal">直す（どちらか1つ）</span>
</div>
<p>伸びる人は閲覧率とCV率を毎週見ている。基準値を知るから振り回されず、切り分けられるから努力の場所を間違えない。<strong>才能でも運でもない。見る習慣と、切り分ける型を持っているだけだ。</strong></p>

<div class="check"><ul>
<li>限定性・緊急性のある案件を選んでる？（今すぐ買う理由が商品側にあるか）</li>
<li>単価交渉は「実績→交渉」の順になってる？</li>
<li>フィードで新規の入口を作ってる？（同じ人にだけ売ってないか）</li>
<li>訴求日の閲覧率は基準のどのゾーン？（落ちて当然と知った上で見たか）</li>
<li>CV率を計算した？（成果件数÷クリック数×100）</li>
<li>売上が落ちたら、CV率を先に見て原因を切り分けた？</li>
<li>目標は1段ずつ（3万→10万→30万）で追ってる？</li>
<li>週次KPIシートに「来週やること1つ」まで書いた？</li>
</ul></div>

<div class="end">数字を見ない努力は、目隠しの素振り。<br><strong>毎週おなじ数字を見て、原因を切り分け、来週の1手を決める。それが伸びる人の習慣だ。</strong><br>次章では、このKPIを意識したストーリー設計の組み方を学ぶ。</div>
</div>
  `,

  'p4-story-design': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>稼ぐフェーズ最大の失敗＝「今日売ろうとする」こと</li>
<li>1日では売れず、1週間だと売れる理由</li>
<li>月〜日まで埋まった1週間設計テンプレ</li>
<li>1回の訴求を組む「5ステップ構造」</li>
<li>毎日売ると逆に売れなくなる理由</li>
<li>あなた専用の1週間設計を作る5ステップ</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="今日売るのと1週間で売るの違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 今日売る</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 1週間で売る</text>
<circle cx="79" cy="78" r="22" fill="#cbd5e0"/>
<text x="79" y="83" text-anchor="middle" font-size="20" fill="#fff">?</text>
<text x="79" y="120" text-anchor="middle" font-size="11" fill="#718096">今日初めて見た人</text>
<text x="79" y="136" text-anchor="middle" font-size="11" fill="#718096">は買わない</text>
<polyline points="180,95 210,82 240,66 268,48 302,32" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="180" cy="95" r="5" fill="#2b6cb0"/><circle cx="210" cy="82" r="5" fill="#2b6cb0"/><circle cx="240" cy="66" r="5" fill="#2b6cb0"/><circle cx="268" cy="48" r="5" fill="#2b6cb0"/><circle cx="302" cy="32" r="5" fill="#b83280"/>
<text x="241" y="120" text-anchor="middle" font-size="11" fill="#1e4e7e">信頼を貯めてから</text>
<text x="241" y="136" text-anchor="middle" font-size="11" fill="#1e4e7e">最後に1回引き出す</text>
</svg>
<div class="figcap">1日で売ろうとするから売れない。1週間かけて貯めるから売れる</div>
</div>

<div class="key">稼ぐフェーズの失敗はたった1つ。<strong>「今日、売ろうとしてしまうこと」</strong>。人は今日初めて見た人からは買わない。正解は<strong>「1週間で設計する」</strong>。なぜ1週間だと売れるのか——それがこの章の本題だ。</div>

<h3>人は「知ってる・好き・信じてる」が揃わないと買わない</h3>
<p>「いい商品をちゃんと説明すれば売れる」は勘違いだ。商品の前に、お客が越える壁が3つある。</p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3つの壁を越えて買う">
<rect x="36" y="100" width="34" height="40" rx="4" fill="#9cb8d6"/>
<text x="53" y="124" text-anchor="middle" font-size="11" fill="#fff">壁</text>
<text x="53" y="92" text-anchor="middle" font-size="11" fill="#718096">知ってる</text>
<rect x="118" y="80" width="34" height="60" rx="4" fill="#6f97c2"/>
<text x="135" y="114" text-anchor="middle" font-size="11" fill="#fff">壁</text>
<text x="135" y="72" text-anchor="middle" font-size="11" fill="#718096">好き</text>
<rect x="200" y="56" width="34" height="84" rx="4" fill="#2b6cb0"/>
<text x="217" y="102" text-anchor="middle" font-size="11" fill="#fff">壁</text>
<text x="217" y="48" text-anchor="middle" font-size="11" fill="#1e4e7e">信じてる</text>
<path d="M256 110 L296 110" stroke="#b83280" stroke-width="2" marker-end="url(#a0)"/>
<defs><marker id="a0" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="290" y="100" text-anchor="end" font-size="11" font-weight="700" fill="#b83280">買う</text>
<text x="135" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">3つ揃って初めて財布が開く</text>
</svg>
<div class="figcap">1つでも欠けたら、どんなに商品が良くても買わない</div>
</div>

<div class="key">買う理由は「商品が良かったから」だけじゃない。<strong>「この人を知ってて、好きで、信じてるから」買う。</strong>あなたが積み上げてるのは商品説明じゃなく"3つの壁を越えてもらう時間"だ。1日では1つも積めない。1週間あれば3つ積める。だから1週間で設計する。</div>

<h2><span class="s">1</span>大前提：ストーリーは「1日」で売れない</h2>

<div class="vs">
<div class="l"><div class="t">✗ 道で初対面に</div>「この家計シート3万円です」→ 誰でも逃げる。<b>壁が3つ全部立ったまま</b>。誰かも、好きかも、本当かも分からない。</div>
<div class="r"><div class="t">○ 1週間話した相手に</div>「家計しんどいよね」「私も赤字だった」「こう直したよ」の後に「シート渡すね」→ 自然に刺さる。<b>同じシート・同じ値段でも別物</b>。</div>
</div>

<div class="key"><strong>売れるかは、最後の訴求の出来じゃなく、その前の1週間で決まっている。</strong>ストーリーは「売り場」じゃなく"1週間ぶんの会話を設計する作業"だ。</div>

<div class="tc"><div class="hd">頭の切り替え 4つ</div><div class="bd">
<div class="vs"><div class="l"><div class="t">いきなり売らない</div>初対面に営業しない。まず壁①「知ってる」を越える</div><div class="r"><div class="t">順番を守る</div>悩みに寄り添う→信頼させる→欲しくさせる。飛ばさない</div></div>
<div class="vs"><div class="l"><div class="t">1週間で1セット</div>月で始め金で売り土日で休む。毎週まわす</div><div class="r"><div class="t">毎日出す</div>間が空くと壁が立て直される。続けてこそ積み上がる</div></div>
</div></div>

<h2><span class="s">2</span>1週間ストーリー設計テンプレ</h2>
<p>完成形から見せる（主婦・会社員向けの一例）。月〜水で貯め、木金で使い、土日で休む。</p>

<table>
<tr><th>曜日</th><th>役割</th><th>やること</th></tr>
<tr><td>月</td><td>共感ネタ</td><td>「あるある」を代弁して心の距離を縮める</td></tr>
<tr><td>火</td><td>教育ネタ</td><td>役立つやり方を無料で渡す。「ためになる」を作る</td></tr>
<tr><td>水</td><td>信頼・実績</td><td>変化を見せて「言うことは効く」を作る</td></tr>
<tr><td>木</td><td>訴求 前振り</td><td>「明日ちょっと大事な話する」と予告</td></tr>
<tr><td>金</td><td>訴求 本番</td><td>5ステップで1回だけ売る。週で一番力を入れる</td></tr>
<tr><td>土</td><td>日常・余白</td><td>商品の話ゼロ。素の自分を見せる</td></tr>
<tr><td>日</td><td>振り返り共有</td><td>「こんな反応あった」と共有。来週へ橋をかける</td></tr>
</table>

<div class="flowbig">
<span>月火水 貯める</span><span>木金 使う</span><span class="is-goal">土日 休む</span>
</div>

<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="信頼を5日貯めて金曜に1回引き出す">
<text x="160" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">信頼の貯金イメージ</text>
<rect x="20" y="100" width="26" height="20" fill="#9cb8d6"/>
<rect x="60" y="86" width="26" height="34" fill="#9cb8d6"/>
<rect x="100" y="70" width="26" height="50" fill="#9cb8d6"/>
<rect x="140" y="58" width="26" height="62" fill="#6f97c2"/>
<rect x="180" y="48" width="26" height="72" fill="#6f97c2"/>
<text x="33" y="134" text-anchor="middle" font-size="10" fill="#718096">月</text>
<text x="73" y="134" text-anchor="middle" font-size="10" fill="#718096">火</text>
<text x="113" y="134" text-anchor="middle" font-size="10" fill="#718096">水</text>
<text x="153" y="134" text-anchor="middle" font-size="10" fill="#718096">木</text>
<text x="193" y="134" text-anchor="middle" font-size="10" fill="#718096">金</text>
<path d="M210 50 L250 50" stroke="#b83280" stroke-width="2" marker-end="url(#a1)"/>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="288" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">金曜に</text>
<text x="288" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">1回だけ</text>
<text x="288" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">引き出す</text>
</svg>
<div class="figcap">お金じゃなく"信頼"の貯金。5日かけて貯めて金曜に1回だけ引き出す</div>
</div>

<h3>なぜこの並びなのか（各曜日が崩す壁）</h3>
<p>順番を変えると効かない。各曜日が「3つの壁のどれを崩しに行ってるか」で見ると迷わない。</p>

<div class="tc"><div class="hd">月 共感 → 壁① 知ってる</div><div class="bd">いきなりやり方の話は「上から目線」で心が閉じる。まず「私もそうだった」で同じ位置に降りる。<span class="lab">奥の理由：</span>人は自分と同じ痛みを知ってる相手にしか心を開かない。</div></div>

<div class="tc"><div class="hd">火 教育 → 壁② 好き</div><div class="bd">心を開いた翌日に役立つ話を無料で渡す。「フォローして得した」を作る。<span class="lab">奥の理由：</span>受けた恩は返したくなる。だから出し惜しみ厳禁。</div></div>

<div class="tc"><div class="hd">水 信頼 → 壁③ 信じてる</div><div class="bd">「いい人」と分かった上で「しかも結果を出してる」を見せる。<span class="lab">奥の理由：</span>逆順だと自慢に聞こえる。先に好かれてから実績を出すと「信頼の根拠」に変わる。</div></div>

<div class="tc"><div class="hd">木 前振り → 警戒を解く</div><div class="bd">前日に「明日大事な話する」と予告。金曜を構えて待ってくれる。<span class="lab">奥の理由：</span>不意打ちは警戒される。予告は警戒を先に解く作業。</div></div>

<div class="tc"><div class="hd">金 本番 → 信頼を使う</div><div class="bd">時間がある金曜に売る。長めの訴求も最後まで読まれる。月〜水で貯めた信頼を1回だけ使う。</div></div>

<div class="tc"><div class="hd">土 余白 → 警戒を冷ます</div><div class="bd">売った翌日に商品の話をすると「お金の人」に見える。素の日常で「人間なんだ」と安心させる。</div></div>

<div class="tc"><div class="hd">日 振り返り → 来週へ橋</div><div class="bd">「こんな声が」と共有。<span class="lab">奥の理由：</span>人は他人が選んだものを安心して選ぶ。「次は私も」を生む。</div></div>

<div class="warn">よくある失敗が<b>「月火水を飛ばして金曜だけ頑張る」</b>。入金していない口座から引き出そうとしているのと同じ。<b>地味な月〜水こそが金曜を支えている。</b></div>

<h2><span class="s">3</span>1回の訴求を組む「5ステップ構造」</h2>
<p>金曜の本番は行き当たりばったりで書かない。人の感情が動く順番に並べる。<strong>絶対に、いきなり売らない。</strong></p>

<div class="flowbig">
<span>共感</span><span>信頼づくり</span><span>教育</span><span>欲しくさせる</span><span class="is-goal">行動指示</span>
</div>
<p>一言でいうと<strong>「わかるよ→私できたよ→やり方これだよ→でも一人だと難しいよね→じゃあこれ送って」</strong>。下は家計をテーマにした実例。</p>

<div class="tc"><div class="hd">STEP1 共感｜同じ位置に降りる</div><div class="bd">
<div class="draft">毎月の家計、赤字で焦ってた頃の話してもいい？給料日前に口座を見るのが怖くて、レジでも「これ買って大丈夫かな」って手が止まってた。あの頃ほんとに毎日しんどかった。</div>
<span class="lab">奥の理由：</span>痛みをわかってくれた相手の話しか、その先を聞かない。ここで「わかってもらえた」が起きないと、後の教育も実績も全部素通りする。</div></div>

<div class="tc"><div class="hd">STEP2 信頼・実績｜聞く価値を示す</div><div class="bd">
<div class="draft">でもね、赤字続きだった家計が、毎月ちゃんと黒字で締められるようになった。特別な節約はしてない。やる順番を変えただけ。今日はその方法を全部話す。</div>
<span class="lab">奥の理由：</span>共感の直後だから自慢でなく"希望"に聞こえる。順番が実績の意味を変える。数字は自分が本当に出したものだけ。盛りは一発で信頼を失う。</div></div>

<div class="tc"><div class="hd">STEP3 教育｜出し惜しみせず渡す</div><div class="bd">
<div class="draft">まずは固定費の見直し。①スマホを安い料金プランに ②使ってない月額サービスを全部止める ③保険を見直す。食費を毎回がんばって削るより、固定費を1回直すだけで毎月ずっとラクになる。</div>
<span class="lab">奥の理由：</span>「無料でここまで出すなら有料はもっとすごい」と読者が逆算する。ケチった瞬間、共感も実績も全部ウソに見える。</div></div>

<div class="tc"><div class="hd">STEP4 欲しくさせる｜解決策へ橋渡し</div><div class="bd">
<div class="draft">…って言っても、いざ自分でやると「どこから手をつければ」で止まるよね。私もここで挫折しかけた。だから、迷わず順番にやれる仕組みを使ったんだ。これがあるとないとで全然違った。</div>
<span class="lab">奥の理由：</span>「やり方は分かったけど自分には無理そう」のギャップを先に言葉にすると、商品が"売り込み"でなく"その詰まりを埋める道具"に見える。</div></div>

<div class="tc"><div class="hd">STEP5 行動指示｜やることは1つだけ</div><div class="bd">
<div class="draft">メッセージで「家計」って送ってくれたら、私が使ってる家計シート無料で渡すね。今日中に送ってくれた人だけでいいよ。</div>
<span class="lab">奥の理由：</span>選択肢が多いほど人は止まる。「プロフィールも見て」「いいねも」を足した瞬間に迷って動かない。1つだと考えずに手が動く。</div></div>

<h3>なぜ順番を飛ばすと売れないのか</h3>
<div class="vs">
<div class="l"><div class="t">✗ いきなり行動指示</div>「家計シート配ってます！『家計』と送ってね！」<br><br>→「あなた誰？なんで急に売られてるの？」で即スルー。<b>3つの壁が全部立ったまま。</b>越えてない壁の前に商品を置いても跨がない。</div>
<div class="r"><div class="t">○ 5ステップを踏む</div>共感→信頼づくり→教育→欲しくさせる→行動指示<br><br>→「わかってくれる人」が「結果を出してて」「タダで教えて」最後に「これ送って」。<b>壁が1つずつ崩れた後だから断る理由がない。</b></div>
</div>

<h2><span class="s">4</span>訴求頻度と売上の関係</h2>
<p>「売りたいから毎日売る」が一番売れなくなる。<strong>訴求は週1〜2回に抑える。</strong>訴求は「信頼の引き出し」だからだ。</p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="毎日売ると残高マイナス、週1だと黒字">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 毎日訴求</text>
<text x="241" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 週1〜2回</text>
<line x1="14" y1="90" x2="144" y2="90" stroke="#cbd5e0"/>
<polyline points="20,80 50,92 80,104 110,116 138,128" fill="none" stroke="#a0aec0" stroke-width="3"/>
<text x="79" y="118" text-anchor="middle" font-size="11" fill="#718096">残高マイナス</text>
<text x="79" y="140" text-anchor="middle" font-size="10" fill="#718096">自販機扱い・去られる</text>
<line x1="176" y1="120" x2="306" y2="120" stroke="#cdddec"/>
<polyline points="182,116 212,100 242,86 272,98 300,70" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="272" cy="98" r="4" fill="#b83280"/>
<text x="241" y="58" text-anchor="middle" font-size="11" fill="#1e4e7e">5日貯めて1回使う</text>
<text x="241" y="140" text-anchor="middle" font-size="10" fill="#1e4e7e">黒字でまわる</text>
</svg>
<div class="figcap">毎日売る人は「自販機」、週1〜2回の人は「信頼できる友達」</div>
</div>

<div class="key">友達が「これ本当に良かったよ」と言うから買う。自販機に毎日声をかけられたら逃げる。<strong>たまにしか勧めないこと自体が「本気で勧めてる」というメッセージになる。</strong></div>

<div class="tc"><div class="hd">毎日売ると逆に売れない 3つの理由</div><div class="bd">
<b>ありがたみが消える</b>…毎日「おすすめ」と言う人の「おすすめ」は重みが消える。たまに言うから「今回は本気だ」が伝わる。<br>
<b>新規が逃げる</b>…初めて来た人が最初に見た投稿が「買って」だと、知る前に「宣伝アカ」と判断して去る。<br>
<b>信頼残高が減る</b>…価値提供＝貯金、売る＝引き出し。週5で貯めて週1で引き出すから黒字。残高で考えると何回売っていいか自分で判断できる。</div></div>

<div class="warn">「売れない＝訴求不足」と思って訴求を増やすのは<b>真逆の対処</b>。売れない＝信頼残高が足りない、なのに引き出しを増やせばもっとマイナス。<b>売れないときほど、まず価値提供を増やして残高を貯め直す。</b></div>

<h2><span class="s">5</span>★あなた専用の1週間設計を作る 5ステップ</h2>
<p>テンプレを丸写しすると浮く。<strong>骨（貯める→使う→休む）を借りて、中身は自分の読者の痛みで埋める。</strong></p>

<div class="step"><span class="sn">STEP1</span><span class="snm">「金曜に売るもの」を1つ決める</span><br>→ 週のゴールを1つに。例：家計シート／無料相談メッセージ／有料記事。<b>複数あると全部薄まる。</b>月〜水は全部「金曜のゴール」に向けて積むから、ゴールが3つあると3方向に薄く積んでどの壁も越えきれない。</div>

<div class="step"><span class="sn">STEP2</span><span class="snm">月〜水「貯める3日」のネタを埋める</span>
<table>
<tr><th>曜日</th><th>埋め方の質問</th><th>美容ジャンルの例</th></tr>
<tr><td>月 共感</td><td>読者が一番焦る瞬間は？</td><td>「鏡で毛穴を見てため息ついたことない？」</td></tr>
<tr><td>火 教育</td><td>無料で渡せるやり方は？</td><td>「毛穴の正しい洗い方、この3つだけ」</td></tr>
<tr><td>水 信頼</td><td>見せられる変化は？</td><td>「これ続けて肌がこう変わった」</td></tr>
</table>
<span class="note">つまずき：3日とも「金曜に売るもの」と地続きに。金曜に毛穴ケアを売るなら月火水も毛穴で揃える。</span></div>

<div class="step"><span class="sn">STEP3</span><span class="snm">木金「売る2日」を5ステップで組む</span><br>→ 木曜は「明日、〇〇について大事な話するね」と前振りだけ。金曜は<b>セクション3の5ステップ</b>でそのまま組む。行動指示は1つだけ。木曜を省くと金曜が不意打ちになって警戒される。</div>

<div class="step"><span class="sn">STEP4</span><span class="snm">土日「休む2日」を決める</span><br>→ 土曜は商品の話を完全にゼロにして素の自分を出す。日曜は「今週送ってくれた人ありがとう、こんな声をもらった」で締めて来週へつなぐ。この余白が「お金の人」印象を防ぐ。</div>

<div class="step"><span class="sn">STEP5</span><span class="snm">まわして、反応を見て翌週直す</span><br>→ どの曜日で離脱したか、どの教育がよく見られたかをメモ。<b>反応が良かった教育ネタは翌週の金曜「教育パート」に格上げ。</b>よく読まれた＝一番欲しがってる価値だから、訴求の核に据えると刺さる。</div>

<h2><span class="s">6</span>完成例（1週間まるごと・家計）</h2>
<p>各曜日が「3つの壁のどれを崩しているか」を意識しながら読むと、なぜ売れるかが見える。</p>
<div class="final">
<b>月（共感／壁①）</b><br>「毎月の家計、赤字で焦ってた頃の話してもいい？給料日前に口座を見るのが怖くて、レジで毎回手が止まってた。あの頃ほんとしんどかった。」<br><br>
<b>火（教育／壁②）</b><br>「今日は無料でひとつ。家計で最初に見直すのは食費じゃなくて固定費。スマホ・月額サービス・保険。ここを1回直すと毎月ずっとラクになる。今夜、契約してる月額サービスの一覧だけ見てみて。」<br><br>
<b>水（信頼／壁③）</b><br>「私はこのやり方で、赤字続きだった家計を毎月黒字で締められるようになった。特別な節約はしてない。やる順番を変えただけ。お客さんでも同じように変わった人がいる。」<br><br>
<b>木（前振り）</b><br>「明日、私が実際に使ってる家計の仕組みの話をする。一人でやって挫折した人ほど見てほしい。明日の投稿、構えて待っててね。」<br><br>
<b>金（本番・5ステップ）</b><br>「家計しんどいの、わかるよ（共感）。私も赤字だった。でも今は黒字で締められてる（信頼）。やり方はこの固定費3つから（教育）。…とはいえ一人だと順番で迷うよね、私もここで挫折しかけた（欲しくさせる）。だからメッセージで『家計』って送ってくれたら、私が使ってる家計シート無料で渡すね（行動指示）。今日中に送ってくれた人だけでいいよ。」<br><br>
<b>土（余白）</b><br>「今日は完全オフ。子どもと公園行って、帰りにコンビニのプリン買った。こういう日が一番幸せだ。」<br><br>
<b>日（振り返り）</b><br>「今週『家計』って送ってくれた人ありがとう。『固定費って発想なかった』って声がほんと多かった。来週は固定費の中でも効きやすい保険の話をする。また見にきてね。」
</div>
<div class="note">読み解き：月で入口を作り、火で恩を渡して好かれ、水で「信じてる」を立て、木で身構えを解き、金で1回だけ引き出す。土で人間味を見せて冷まし、日で次週の入口を開く。<b>金曜だけ見ても売れる理由は分からない。月〜木が全部その伏線だ。</b></div>
<div class="note">※ここで出した変化は流れを見せる例。実際は自分が本当に出した結果だけを使う。やってない数字・盛った数字は書かない。</div>

<h2><span class="s">7</span>検品：1日単位の売り込みに戻ってないか</h2>
<div class="check"><ul>
<li>1週間で売るものを1つに絞った？</li>
<li>月火水で価値を渡してから売ってる？（残高を貯めたか）</li>
<li>金曜は「共感→信頼づくり→教育→欲しくさせる→行動指示」の順？</li>
<li>いきなり行動指示から始めてない？</li>
<li>行動指示は1つだけ？</li>
<li>訴求は週1〜2回に収まってる？</li>
<li>土曜に商品の話ゼロの「余白」がある？</li>
<li>日曜で来週への橋をかけた？</li>
</ul></div>
<div class="end">ストーリーは"今日1日の売り込み"じゃない。<br>だから——今日売ろうとするな。<strong>1週間かけて信頼を貯めろ。</strong><br>共感→信頼づくり→教育→欲しくさせる→行動指示、訴求は週1〜2回。<br>物は、3つの壁が消えた後に、たった1回渡すだけで売れる。</div>
</div>
  `,

  'p4-mix': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>収益の柱が「1本だけ」だと、フォロワーが増えるほど怖くなる理由</li>
<li>5つの稼ぎ方を「難易度」と「利益率」で並べた地図</li>
<li>アフィ→note→高単価と進む順番が、原理で決まっている理由</li>
<li>後ろの稼ぎ方ほど「信頼の証拠」を要求する、という一本の法則</li>
<li>今のあなたがやるべきアフィ/自社の比率を、自分で決める方法</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>
<p>この章の核は一行だ。<strong>稼ぎ方は「数」と「順番」で決まる。</strong>柱が少ないと崩れ、順番を間違えると進めない。</p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1本の柱と複数の柱">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 柱1本</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 柱を増やす</text>
<rect x="72" y="58" width="14" height="52" fill="#a0aec0"/>
<rect x="48" y="50" width="62" height="10" rx="3" fill="#cbd5e0"/>
<path d="M86 110 l24 14" stroke="#b83280" stroke-width="2"/>
<text x="79" y="132" text-anchor="middle" font-size="11" fill="#718096">折れたら全部消える</text>
<rect x="188" y="62" width="12" height="48" fill="#2b6cb0"/>
<rect x="216" y="62" width="12" height="48" fill="#2b6cb0"/>
<rect x="244" y="62" width="12" height="48" fill="#2b6cb0"/>
<rect x="180" y="54" width="84" height="10" rx="3" fill="#9cb8d6"/>
<text x="241" y="132" text-anchor="middle" font-size="11" fill="#1e4e7e">1本グラついても立つ</text>
</svg>
<div class="figcap">脚1本のイスは押されたら倒れる。3本なら座っていられる</div>
</div>

<div class="key">問いは「どれが一番もうかるか」じゃない。<strong>「どの順番で、何本に増やすか」だ。</strong>稼ぎ方は選ぶものじゃなく積み上げるもの。簡単な方から1本ずつ増やす。</div>
<p>そしてもう一段。<strong>なぜ「アフィから始めて高単価で終わる」が正しいのか。</strong>精神論じゃない。一本の原理がある。<strong>後ろに行く稼ぎ方ほど、お客が「信頼の証拠」を強く求めるからだ。</strong></p>

<h2><span class="s">1</span>柱が1本だと、増えても怖い</h2>
<p>柱を1つに絞ると、収入は「他人の都合」に握られる。報酬が下がった瞬間、依頼が来ない月、それだけで生活が揺れる。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="規模が大きいほど依存リスクも大きい">
<text x="160" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">1本依存は、稼ぐほど怖い</text>
<rect x="30" y="80" width="50" height="30" rx="4" fill="#9cb8d6"/>
<text x="55" y="100" text-anchor="middle" font-size="11" fill="#1e4e7e">月5万</text>
<text x="55" y="125" text-anchor="middle" font-size="10" fill="#718096">折れても軽傷</text>
<path d="M100 95 l40 0" stroke="#a0aec0" stroke-width="2" marker-end="url(#a1)"/>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#a0aec0"/></marker></defs>
<rect x="155" y="45" width="70" height="65" rx="4" fill="#2b6cb0"/>
<text x="190" y="82" text-anchor="middle" font-size="12" fill="#fff">月50万</text>
<text x="190" y="125" text-anchor="middle" font-size="10" fill="#b83280">折れたら重傷</text>
<text x="265" y="80" text-anchor="middle" font-size="10" fill="#718096">規模に比例して</text>
<text x="265" y="95" text-anchor="middle" font-size="10" fill="#718096">リスクも増える</text>
</svg>
<div class="figcap">「稼げてから分散」では遅い。稼ぐ前に設計を入れておく</div>
</div>

<div class="stats">
<div class="stat-c"><div class="n">分散</div><div class="l">1本ダメでも他で支え、急にゼロにならない</div></div>
<div class="stat-c"><div class="n">単価UP</div><div class="l">同じ1人から何度も稼ぐ。資産を使い回す</div></div>
<div class="stat-c"><div class="n">外で稼ぐ</div><div class="l">SNSは集客。稼ぐ仕組みはLINEや販売ページに作る</div></div>
</div>
<div class="warn">勘違い注意：分散＝初日から5つ全部に手を出す、ではない。<b>分散は「同時に始める」じゃなく「順番に増やす」こと。</b>最初は1本に集中し、回り始めてから次を足す。</div>

<h2><span class="s">2</span>全体像：難易度と利益率で並べる</h2>
<p>5つは「始めやすさ」と「手元に残るお金」で並べると、どこから手をつけるか一発でわかる。</p>
<table>
<tr><th>稼ぎ方</th><th>難易度</th><th>単価の目安</th><th>性格</th></tr>
<tr><td>① アフィリエイト</td><td>低</td><td>数十円〜数万円</td><td>在庫・対応なし。最初の一歩</td></tr>
<tr><td>② デジタル商品(note等)</td><td>中</td><td>500〜5万円</td><td>一度作れば売れ続ける。利益率が高い</td></tr>
<tr><td>③ 企業案件・PR</td><td>中</td><td>1万フォロワーで1〜5万円/投稿</td><td>依頼を受けて紹介。月ムラ大</td></tr>
<tr><td>④ 自社の高単価サービス</td><td>高</td><td>月3〜30万円</td><td>少人数で大きく。サポート力が要る</td></tr>
<tr><td>⑤ 横軸展開(別媒体連携)</td><td>—</td><td>—</td><td>稼ぎ方でなく「つなぎ方」。①〜④を加速</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="難易度と利益率の関係">
<line x1="40" y1="115" x2="305" y2="115" stroke="#cbd5e0" stroke-width="2"/>
<line x1="40" y1="115" x2="40" y2="20" stroke="#cbd5e0" stroke-width="2"/>
<text x="170" y="135" text-anchor="middle" font-size="11" fill="#718096">始めやすい → 難しい</text>
<text x="14" y="70" text-anchor="middle" font-size="11" fill="#718096" transform="rotate(-90 14 70)">利益率</text>
<polyline points="60,100 140,72 215,48 285,26" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="60" cy="100" r="6" fill="#a0aec0"/><text x="60" y="92" text-anchor="middle" font-size="10" fill="#718096">アフィ</text>
<circle cx="140" cy="72" r="6" fill="#2b6cb0"/><text x="140" y="64" text-anchor="middle" font-size="10" fill="#2b6cb0">note</text>
<circle cx="215" cy="48" r="6" fill="#2b6cb0"/><text x="215" y="40" text-anchor="middle" font-size="10" fill="#2b6cb0">案件</text>
<circle cx="285" cy="26" r="6" fill="#b83280"/><text x="285" y="18" text-anchor="middle" font-size="10" fill="#b83280">高単価</text>
</svg>
<div class="figcap">左ほど始めやすく、右ほど大きく稼げる。だから順番は左から</div>
</div>

<div class="key"><b>なぜ逆順にきれいに並ぶか：</b>偶然じゃない。<strong>始めやすい＝誰でも参入できる＝単価が低い。難しい＝参入が少ない＝単価が高い。</strong>難しさと値段は連動する。</div>

<h2><span class="s">3</span>① アフィリエイト — 最初の収益体験</h2>
<p>商品を紹介し、自分のリンク経由で買われたら報酬が入る仕組み。テレビCMの個人版だ。<strong>在庫なし・対応なしでリスクがほぼゼロ</strong>。最初の「お金が動いた」体験に一番向く。</p>

<div class="vs">
<div class="l"><div class="t">○ 向いてる理由</div>商品を作らなくていい。発送も問い合わせもメーカー任せ。あなたは「紹介」だけに集中でき、初動が早い。</div>
<div class="r"><div class="t">✗ つまずく点</div>登録だけして何も紹介せず終わる。ジャンル違いの商品を貼って「宣伝ばっかり」と冷められる。</div>
</div>

<div class="key"><b>なぜ「最初の1件」が大事か：</b>金額じゃない。<strong>「自分の言葉で他人が財布を開いた」事実が確信に変わる</strong>から。頭で知るだけでは動き続けられない。一度起こすと腹の底で分かる。最初の1件は収入より「確信を作る装置」だ。</div>

<h4>具体的にどうやるか（3手順）</h4>
<div class="step"><span class="sn">1</span><span class="snm">ASPに1つだけ登録する</span><p>ASPは「紹介できる商品が並ぶ場所」。A8.net・もしもアフィリエイト・楽天アフィリエイトが定番。無料。<b>なぜ1つか：</b>複数だと商品が多すぎて選べず、結局1件も紹介せず終わる。まず1つに絞って慣れる方が早い。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">自分のジャンルで「強い案件」を探す</span><p>普段発信しているジャンルと同じ商品を選ぶ。本当に「これいい」と思えるものだけ。<b>奥にある理由：</b>フォロワーは特定ジャンルを聞きに来ている。関係ない高額案件を勧めた瞬間「信用していいのか」という疑いが生まれる。<strong>信頼は積むのに時間、壊すのは一瞬。</strong></p></div>
<div class="step"><span class="sn">3</span><span class="snm">「自分が使った話」として紹介する</span><p>「これ買って」でなく「私はこう困って、これで解決した」と体験で語る。<b>なぜ売れるか：</b>「これ買って」は広告に聞こえ警戒される。体験談は友達のおすすめに聞こえ信じられる。<strong>リンクを売るな、体験を語れ。</strong></p></div>

<div class="key">最初は単価の低い商品でいい。安い方が財布のハードルが低く売れやすい。まず確実に1件、確信を作りに行く。</div>

<h2><span class="s">4</span>② デジタル商品販売 — 一度作って寝てても売れる</h2>
<p>PDFのノウハウ集・テンプレート・動画教材など。アフィと決定的に違うのは<strong>商品が「自分のもの」だから売上がまるごと入る。利益率が高い。</strong></p>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="代理人と作者の違い">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">アフィ＝代理人</text>
<text x="75" y="72" text-anchor="middle" font-size="11" fill="#a0aec0">売上の一部だけ</text>
<text x="160" y="65" text-anchor="middle" font-size="20" fill="#cbd5e0">→</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">note＝作者</text>
<text x="245" y="72" text-anchor="middle" font-size="11" fill="#2b6cb0">売上の全部が入る</text>
</svg>
<div class="figcap">本と同じ。一度書けば寝てても売れる。作る労力と売れる回数が切り離される</div>
</div>

<div class="vs">
<div class="l"><div class="t">✗ 売れないnote</div>タイトル「私の美容法まとめ」。日記の寄せ集めで誰向けか不明。「自分に必要」と思われずスルー。</div>
<div class="r"><div class="t">○ 売れるnote</div>「毛穴に5年悩んだ私が、皮膚科で言われた順番でやめたこと」。目次で中身が見え、対象が冒頭に明記。自分ごと化される。</div>
</div>
<p><b>なぜタイトルで変わるか：</b>お客は中身を読んでから決めない。<strong>タイトル一瞬で「自分に関係あるか」を判断し、なさそうなら開きすらしない。</strong>入口で自分ごとにならなければ、中身が良くても存在しないのと同じ。</p>

<div class="step"><span class="sn">▸</span><span class="snm">タイトルと目次が命</span><p>「誰の・どんな悩みが・どうなるか」を入れる。</p></div>
<div class="step"><span class="sn">▸</span><span class="snm">「こんな人向け」を冒頭で絞る</span><p>全員向けは誰にも刺さらない。「もう色々試した人だけ」と絞ると、当てはまる人が「私のために書かれた」と感じる。絞るほど価値が濃くなる。</p></div>
<div class="step"><span class="sn">▸</span><span class="snm">売る場所はnoteが一番ラク</span><p>note・BASE・BOOTHが定番。最初はnote。</p></div>
<div class="step"><span class="sn">▸</span><span class="snm">最初は3,000円前後</span><p>高すぎると買われず、安すぎると「その程度か」と思われる。<b>安すぎもダメな理由：</b>人は値段で価値を推し量る。安いと中身も安く見られ、かえって買われない。</p></div>

<div class="good"><b>○ 雪だるま式に売れる理由</b> 良いものは買った人が口コミし、次のお客を連れてくる。<strong>あなたの「いいですよ」は宣伝、第三者の「良かった」は証拠。</strong>人は売り手より買った人の声を信じる。最初の1個の質が雪だるまの大きさを決める。</div>

<h2><span class="s">5</span>③ 企業案件・PR — 依頼を受けて紹介する</h2>
<p>企業から「うちの商品を紹介して」と依頼を受け報酬をもらう。芸能人がCMに出るのと同じ構造を個人がやる。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="数より反応">
<rect x="0" y="20" width="150" height="90" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">1万人</text>
<text x="75" y="70" text-anchor="middle" font-size="11" fill="#a0aec0">でも誰も反応しない</text>
<text x="75" y="92" text-anchor="middle" font-size="11" fill="#a0aec0">＝売れない</text>
<text x="160" y="70" text-anchor="middle" font-size="18" fill="#cbd5e0">＜</text>
<rect x="170" y="20" width="150" height="90" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">3千人</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#2b6cb0">毎回コメントが付く</text>
<text x="245" y="92" text-anchor="middle" font-size="11" fill="#2b6cb0">＝商品が売れる</text>
</svg>
<div class="figcap">企業が見るのは数字でなく「言葉が信じられているか」</div>
</div>

<p><b>奥にある理由：</b>企業が買うのは「数」でなく「フォロワーに与える影響力」。反応が多い＝友達のように信じられている＝行動につながる。前章の「友達のおすすめは疑われない」と同じ原理だ。</p>

<div class="step"><span class="sn">▸</span><span class="snm">報酬の目安</span><p>1万フォロワーで1投稿1〜5万円が一つの目安。反応の良さで変わる。</p></div>
<div class="step"><span class="sn">▸</span><span class="snm">「#PR」表記は必須</span><p>2023年10月からステマ規制開始。お金をもらう投稿には広告とわかる表記を必ず。隠すと法律違反。</p></div>
<div class="step"><span class="sn">▸</span><span class="snm">案件の取り方</span><p>企業に自分からDMで営業するか、企業と発信者をつなぐマッチングサービスに登録する。</p></div>

<div class="bad"><b>✗ ありがちな失敗</b> 報酬が高いからとジャンル違いを引き受ける。フォロワーは「お金で動く人」と見抜く。一度そう思われると発信全部が信じてもらえなくなる。</div>
<div class="key"><b>なぜ「断る勇気」が稼ぎを左右するか：</b>本当の資産はフォロワーでなく<strong>フォロワーが寄せている信頼</strong>。合わない案件は目先の数万円と引き換えに信頼を削る。<strong>1件の報酬より、失う信頼の方が高くつく。</strong>断る勇気は損でなく投資。</div>
<div class="warn">企業案件は安定収入になりにくい。依頼は「相手の都合」で発生し、自分で動かせないからムラが大きい。<b>これだけを柱にするな。</b>第1章のイスでいう「グラつきやすい脚」だ。</div>

<h2><span class="s">6</span>④ 自社の高単価サービス — 少人数で大きく稼ぐ</h2>
<p>1対1コンサル、少人数講座、オンラインスクールなど。<strong>利益率が高く、少人数で大きな収益になる。</strong></p>

<div class="vs">
<div class="l"><div class="t">広く薄く</div>3,000円を10人に売る → 問い合わせ・対応・トラブルも人数分増える</div>
<div class="r"><div class="t">狭く深く</div>月10万を1人に売る → 向き合う相手は1人。手間あたりの稼ぎが大きい</div>
</div>
<p><b>奥にある理由：</b>人数が増えるほど対応の手間も人数分増える。高単価は相手を絞れる。<strong>「広く薄く」より「狭く深く」の方が手間あたり大きく稼げる。</strong>これが高単価の本質。</p>

<h4>いきなり高単価で売らない。順序がある</h4>
<div class="flow">
<span>無料/低単価でテスト</span><span>口コミ・実績を貯める</span><span>実績が貯まったら値上げ</span>
</div>
<div class="step"><span class="sn">1</span><span class="snm">無料 or 低単価でテスト</span><p>実績ゼロでいきなり30万は誰も買わない。<b>確かめるのは「売れるか」でなく「自分が結果を出せるか・続けられるか」。</b>ここを飛ばすと、結果を出せなかった時に取り返しがつかない。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">口コミ・実績を貯める</span><p>結果が出たら声をもらう。<b>あなたの「結果を出せます」は宣伝、変わった人の声は証拠。</b>テストは証拠を作る工程でもある。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">実績が貯まったら値上げ</span><p>声と実績が増えるほど高い値段でも納得して買われる。<b>値段は「価値の証明度」に応じて上げる。</b>安いまま続けるのは証明された価値の安売り。</p></div>

<p><b>なぜ高単価ほど口コミが効くか：</b>値段が高いほど「失敗したくない」が強まる。3,000円は「ダメでもいいか」、月10万は「本当に大丈夫か」と慎重になる。<strong>その不安を消すのが先に体験した人の声だ。</strong></p>
<div class="warn">高単価は一番大きく稼げるが一番難しい。<strong>実績ゼロで始めると売れずに心が折れる。</strong>だから順番は最後。アフィとnoteで土台を作ってから来る。</div>

<h2><span class="s">7</span>⑤ 横軸展開 — SNSは集客、収益は外で作る</h2>
<p>これは稼ぎ方そのものでなく<strong>「SNSで集めた人を、どう収益につなげるか」のつなぎ方</strong>。一番大事な考え方はこれだ。</p>

<div class="key"><strong>SNSは集客装置。収益はSNSの外(LINEや販売ページ)で作る。</strong>SNSは集めるのは得意だが、いきなり売る場所には向かない。「集める場所」と「売る場所」を分ける。</div>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="チラシ配りと接客">
<rect x="10" y="30" width="120" height="55" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="70" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">SNS</text>
<text x="70" y="73" text-anchor="middle" font-size="10" fill="#2b6cb0">道で声かけるチラシ配り</text>
<path d="M134 57 l46 0" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<rect x="186" y="30" width="124" height="55" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="248" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">LINE</text>
<text x="248" y="73" text-anchor="middle" font-size="10" fill="#8a4a6e">店内でじっくり接客</text>
</svg>
<div class="figcap">チラシ配りで売り込む店はない。まず店に入ってもらう</div>
</div>

<p><b>奥にある理由：</b>SNSは「ながら見」の場所。電車・寝る前・休憩中、誰も「今から買うぞ」で開いていない。売り込めば一瞬で飛ばされる。LINEは「この人の話を聞きたい」と自分から登録した場所。聞く準備ができた人にだけ話せる。</p>

<div class="tl">
<div class="slot"><span class="time">1</span><div class="w2"><b>リールで集客</b><br>投稿で見つけてもらい、興味を持たせる</div></div>
<div class="slot"><span class="time">2</span><div class="w2"><b>プロフのリンクへ誘導</b><br>「もっと知りたい人はプロフへ」</div></div>
<div class="slot"><span class="time">3</span><div class="w2"><b>LINEに登録してもらう</b><br>外に連れ出す。ここで「自分のお客リスト」になる</div></div>
<div class="slot"><span class="time">4</span><div class="w2"><b>特典で信頼を作る</b><br>登録特典やメッセージで「本物だ」と感じてもらう</div></div>
<div class="slot"><span class="time">5</span><div class="w2"><b>商品を提供する</b><br>信頼ができた人にだけ案内する</div></div>
</div>
<p><b>なぜ飛ばせないか：</b>各段階は相手との距離を1歩ずつ縮める工程。<strong>距離は1歩ずつしか縮まらない。</strong>初対面にいきなり「付き合って」が通らないのと同じで、見つけたばかりの人に「買って」は通らない。</p>

<div class="good"><b>○ なぜLINEに連れてくるか</b> SNSのフォロワーはアルゴリズムが変わると表示されなくなる。LINEなら直接届く。<strong>SNSは「借りた土地」、LINEは「自分の土地」。</strong>借りた土地は貸し主の都合でいつ使えなくなるか分からない。これが「他人のプラットフォームに依存しない資産」だ。</div>

<h2><span class="s">8</span>進む順番：アフィ → note → 高単価</h2>
<p>全部を一度にやるとパンクする。<strong>簡単で実績の要らないものから、難しくて実績の要るものへ、1本ずつ。</strong></p>

<div class="flowbig">
<span>アフィで売れる感覚</span><span>noteで言葉を商品化</span><span class="is-goal">口コミで高単価へ</span>
</div>
<div class="step"><span class="sn">STEP1</span><span class="snm">アフィで「売れる感覚」を掴む</span><p>1件売れるだけで「発信は稼ぎになる」と腹落ち。在庫も対応もなく、失敗のダメージがない。</p></div>
<div class="step"><span class="sn">STEP2</span><span class="snm">noteで自分の言葉を商品化</span><p><b>なぜアフィの後か：</b>アフィで「どんな話が反応されるか」が見えてくる。その反応データが売れるnoteのネタになる。逆だと的を外す。</p></div>
<div class="step"><span class="sn">STEP3</span><span class="snm">口コミが貯まったら高単価へ</span><p>noteを買った人の声・結果を証拠に高単価を案内。実績があるから高くても納得して買われる。</p></div>

<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="証拠の要求量が階段で増える">
<rect x="20" y="100" width="80" height="25" fill="#9cb8d6"/>
<text x="60" y="117" text-anchor="middle" font-size="11" fill="#1e4e7e">アフィ</text>
<rect x="110" y="70" width="80" height="55" fill="#2b6cb0"/>
<text x="150" y="100" text-anchor="middle" font-size="11" fill="#fff">note</text>
<rect x="200" y="30" width="80" height="95" fill="#b83280"/>
<text x="240" y="80" text-anchor="middle" font-size="11" fill="#fff">高単価</text>
<text x="60" y="92" text-anchor="middle" font-size="10" fill="#718096">証拠ゼロでOK</text>
<text x="150" y="62" text-anchor="middle" font-size="10" fill="#2b6cb0">少し要る</text>
<text x="240" y="22" text-anchor="middle" font-size="10" fill="#b83280">証拠の塊が必須</text>
</svg>
<div class="figcap">後ろほど「信頼の証拠」が必要。3段飛ばしすると転ぶ</div>
</div>

<div class="key"><b>これがこの章の背骨だ：</b>順番は「楽だから簡単な方から」じゃない。<strong>「証拠は前のステップでしか作れないから、前から順に作る」という構造的な必然。</strong>前のステップが次で使う証拠を生む。だから飛ばせない。</div>

<h2><span class="s">9</span>★ あなたのアフィ/自社の比率を決める</h2>
<p>ここがゴール。下の3つの状態から自分がどれかを選ぶだけ。<strong>力を入れる場所を数字で決める。</strong></p>

<div class="grp"><div class="gh">【スタート期】まだ収益がほぼゼロ</div><div class="gb">
<div class="splitbar"><div class="sb-main" style="width:80%">アフィ 8割</div><div class="sb-sub" style="width:20%">note 2割</div></div>
<div class="rule"><span class="rn">アフィ 8割</span><span class="gb2">「1件売れる」を最優先。失敗のダメージなし</span></div>
<div class="rule"><span class="rn">note 2割</span><span class="gb2">並行で小さく1個だけ作り始める。完成は焦らない</span></div>
<div class="rule"><span class="rn">高単価 0割</span><span class="gb2">まだやらない。証拠がなく折れる</span></div>
</div></div>

<div class="grp"><div class="gh">【成長期】アフィで売れた・口コミが少し出た</div><div class="gb">
<div class="splitbar"><div class="sb-main" style="width:40%">アフィ 4割</div><div class="sb-sub" style="width:50%">note 5割</div><div class="sb-sub" style="width:10%;background:#b83280">高1</div></div>
<div class="rule"><span class="rn">アフィ 4割</span><span class="gb2">続けつつ力点を自社商品へ移す</span></div>
<div class="rule"><span class="rn">note 5割</span><span class="gb2">ここを主軸に。利益率が高く収入が伸びる</span></div>
<div class="rule"><span class="rn">高単価 1割</span><span class="gb2">無料 or 低単価で数人だけテスト開始</span></div>
</div></div>

<div class="grp"><div class="gh">【拡張期】商品の口コミ・実績が貯まった</div><div class="gb">
<div class="splitbar"><div class="sb-main" style="width:20%">アフィ2</div><div class="sb-sub" style="width:30%">note 3割</div><div class="sb-sub" style="width:50%;background:#b83280">高単価 5割</div></div>
<div class="rule"><span class="rn">アフィ 2割</span><span class="gb2">相性の良い案件だけ厳選。手間をかけない</span></div>
<div class="rule"><span class="rn">note 3割</span><span class="gb2">入口商品として継続。高単価への導線に</span></div>
<div class="rule"><span class="rn">高単価 5割</span><span class="gb2">一番大きな柱。少人数で大きく稼ぐ</span></div>
</div></div>

<p><b>なぜ段階で比率を変えるか：</b>比率は「今持っている証拠の量」に合わせるもの。証拠ゼロで高単価に力を入れても売れない。証拠が貯まったのにアフィばかりだと、手元に残る金額の小さい稼ぎ方に時間を使い続ける。<strong>証拠が増えるほど後ろの稼ぎ方に重心を移す。</strong></p>
<div class="warn"><b>つまずきポイント：</b>「早く稼ぎたい」焦りから、自分の段階より一つ先の比率を選ぶ人が多い。証拠の量を超えた比率は、売れずに自信を失うだけ。背伸びより、正直な現在地。</div>

<h2><span class="s">10</span>検品：「なるほど」で終わってないか</h2>
<p>「自分の答え」を埋めて初めて意味がある。知識は行動に落とした瞬間に力になる。</p>
<div class="check"><ul>
<li>「稼ぎ方は数と順番で決まる」を自分の言葉で言えるか</li>
<li>自分は「スタート/成長/拡張」のどれか、正直に決めたか</li>
<li>アフィ/自社の比率を、数字で書き出したか</li>
<li>登録するASPを1つ決めたか(A8・もしも・楽天)</li>
<li>最初に紹介する、自分のジャンルに合う商品を1つ選んだか</li>
<li>いきなり高単価から入ろうとしてないか</li>
<li>「SNSは集客・収益は外」を人に説明できるか</li>
</ul></div>

<div class="end">稼ぎ方は1つじゃない。一番もうかる1本を探す競争でもない。<br><strong>簡単な1本から始めて、証拠を貯めながら、柱を1本ずつ増やす。それだけで収入は崩れにくく、大きくなる。</strong><br>まず今日、アフィの1件目を取りに行け。最初の1件は、お金じゃなく確信を作りに行く工程だ。</div>
</div>
  `,

  'p4-cross': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>なぜ「1媒体だけ」は稼げていても危ないのか</li>
<li>横展開を「いつ」始めるか（その1本の基準）</li>
<li>インスタを中心に置く「用途別4媒体」の役割分担</li>
<li>1本の動画を3〜5投稿に化けさせる使い回し術</li>
<li>外注・AI・別アカウントで負荷を下げる仕組み</li>
<li>Phase1→2→3→4のロードマップと2軸目の選び方</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1本足と複線化">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 1本足</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 複線化</text>
<rect x="60" y="60" width="40" height="8" rx="2" fill="#a0aec0"/>
<rect x="76" y="68" width="8" height="44" fill="#cbd5e0"/>
<text x="80" y="48" text-anchor="middle" font-size="11" fill="#718096">収入</text>
<text x="79" y="130" text-anchor="middle" font-size="11" fill="#718096">橋が折れたら全部落ちる</text>
<rect x="190" y="60" width="100" height="8" rx="2" fill="#2b6cb0"/>
<rect x="198" y="68" width="7" height="44" fill="#9cb8d6"/>
<rect x="218" y="68" width="7" height="44" fill="#9cb8d6"/>
<rect x="238" y="68" width="7" height="44" fill="#9cb8d6"/>
<rect x="258" y="68" width="7" height="44" fill="#9cb8d6"/>
<rect x="278" y="68" width="7" height="44" fill="#9cb8d6"/>
<text x="241" y="48" text-anchor="middle" font-size="11" fill="#1e4e7e">収入</text>
<text x="241" y="130" text-anchor="middle" font-size="11" fill="#1e4e7e">1本折れても立っていられる</text>
</svg>
<div class="figcap">横展開は攻めじゃない。守りの設計だ</div>
</div>

<div class="key">横展開で失敗する原因はたった2つ。<strong>「早すぎる」か「全部いっぺん」だ。</strong>逆に言えば、この2つを避ければ難しくない。横展開とは新しく頑張ることじゃない。<strong>今あるものを、形を変えて配り直すことだ。</strong></div>

<p>インスタで作ったファン・コンテンツ・勝ちパターンを、他の場所にも流すだけ。だから手間はそんなに増えない。本質は<strong>「複線化」</strong>。収入が乗ってる橋を1本から複数本に増やす。守りだから、土台ができてから、慎重な順番でやる。</p>

<h2><span class="s">1</span>大前提：1本足は、いつか必ず転ぶ</h2>

<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="橋を握っているのは他人">
<rect x="50" y="40" width="220" height="14" rx="4" fill="#9cb8d6"/>
<rect x="60" y="54" width="10" height="56" fill="#cbd5e0"/>
<rect x="250" y="54" width="10" height="56" fill="#cbd5e0"/>
<circle cx="160" cy="30" r="13" fill="#2b6cb0"/>
<text x="160" y="22" text-anchor="middle" font-size="10" fill="#1e4e7e">あなたの収入</text>
<text x="160" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">インスタという橋</text>
<text x="160" y="98" text-anchor="middle" font-size="11" fill="#b83280">管理してるのは他人の会社</text>
<path d="M30 124 q130 18 260 0" stroke="#b83280" stroke-width="2" fill="none" stroke-dasharray="4 4"/>
<text x="160" y="135" text-anchor="middle" font-size="11" fill="#718096">仕様変更ひとつで一晩で崩れる</text>
</svg>
<div class="figcap">自分でコントロールできない場所に、収入の全部を預けている</div>
</div>

<p>インスタだけで月10万円。これは立派なゴールだ。でもここで止まると危ない。<strong>媒体が「リールのルールを変えます」と決めたら、あなたは何も悪くないのに売上が落ちる。</strong>橋が壊れたら、上に乗ってたもの全部が一緒に落ちる。</p>

<div class="flowbig">
<span>橋を増やす</span><span>収益の柱が増える</span><span>凍結リスクが分散</span><span class="is-goal">1本壊れても立てる</span>
</div>

<p>なぜリスク分散が効くか。<strong>媒体が違えば、運営する会社も、止まる原因も別だから。</strong>インスタが凍結されてもLINEのお客さんは消えない。複数の場所に同じファンがいれば、どこか1つが消えても連絡が取れなくなる事態にならない。これが保険になる。</p>

<div class="warn"><b>始めるタイミングは「月10万円を超えてから」。</b>これより前に手を広げるのはNG。横展開は<b>掛け算</b>だ。元の1媒体が弱いと、何倍にしても弱いまま。育ちきってないアカウントを4つに増やすと、1つを育てる集中力が1/4になる。<b>1本を太く育ててから複製する人の方が、結局速い。</b></div>

<h2><span class="s">2</span>用途別に4媒体を持つ</h2>

<div class="vfig">
<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="インスタを中心に4媒体">
<line x1="160" y1="100" x2="160" y2="40" stroke="#cbd5e0" stroke-width="2"/>
<line x1="160" y1="100" x2="160" y2="160" stroke="#cbd5e0" stroke-width="2"/>
<line x1="160" y1="100" x2="60" y2="100" stroke="#cbd5e0" stroke-width="2"/>
<line x1="160" y1="100" x2="260" y2="100" stroke="#cbd5e0" stroke-width="2"/>
<circle cx="160" cy="100" r="30" fill="#2b6cb0"/>
<text x="160" y="97" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">インスタ</text>
<text x="160" y="111" text-anchor="middle" font-size="9" fill="#eaf1f8">＝出会う場所</text>
<rect x="120" y="8" width="80" height="32" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="22" text-anchor="middle" font-size="10" font-weight="700" fill="#1e4e7e">LINE</text>
<text x="160" y="34" text-anchor="middle" font-size="9" fill="#8a6e4a">囲い込み・販売</text>
<rect x="120" y="160" width="80" height="32" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="174" text-anchor="middle" font-size="10" font-weight="700" fill="#1e4e7e">X／スレッズ</text>
<text x="160" y="186" text-anchor="middle" font-size="9" fill="#718096">信頼を積む</text>
<rect x="0" y="84" width="80" height="32" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="40" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="#1e4e7e">YT／TikTok</text>
<text x="40" y="110" text-anchor="middle" font-size="9" fill="#718096">長期集客</text>
<rect x="240" y="84" width="80" height="32" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="280" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="#1e4e7e">note</text>
<text x="280" y="110" text-anchor="middle" font-size="9" fill="#718096">資産化・販売</text>
</svg>
<div class="figcap">同じことを4箇所でやるな。4つの仕事を分担させる</div>
</div>

<p>なぜ用途別にこだわるか。<strong>同じことを4箇所でやっても、1媒体を4回コピーしてるだけで橋は増えない。</strong>役割を分けて初めて、4つが補い合う「面」になる。</p>

<div class="tc"><div class="hd">L｜LINE公式</div><div class="bd"><span class="lab">囲い込み・販売の本丸</span>
SNSが消えても、LINE登録者とは直接つながり続けられる。インスタは「出会う」場所、LINEは「売る」場所だと割り切る。<b>SNSのフォロワーは借りた関係、LINE登録は自分の手元に来た連絡先だから。</b></div></div>

<div class="tc"><div class="hd">X｜X／スレッズ</div><div class="bd"><span class="lab">テキスト訴求・思考発信</span>
文字だけで勝負できる場所。日々の考えを出して「この人の頭の中、信用できる」を積む。<b>編集された動画は作品に見えるが、素のテキストは本音に見える。飾れないから人柄が伝わる。</b></div></div>

<div class="tc"><div class="hd">Y｜YouTube／TikTok</div><div class="bd"><span class="lab">ロングテール集客</span>
検索流入が長く続く。インスタの投稿は数日で流れて消えるが、1本の動画が長く見つけられ続ける。<b>過去の投稿が、寝てる間も新しいフォロワーを連れてくる資産になる。</b></div></div>

<div class="tc"><div class="hd">N｜note／ブログ</div><div class="bd"><span class="lab">SEO・コンテンツ販売</span>
文章を資産として残せる。検索で長く読まれ、有料販売もしやすい。<b>長文は「じっくり読む」モードの人が来るから、納得して買ってもらいやすい。</b>インスタが花火なら、noteは木を植える。</div></div>

<div class="key">LINEは囲い込み、Xは信頼、YouTubeは長期集客、noteは資産化。<strong>役割が全部違うのがミソ。</strong>分担してるから被らない。被らないから、手間のわりに効果が大きい。</div>

<h2><span class="s">3</span>1本の動画が3〜5投稿に化ける</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1本を割って配る">
<rect x="125" y="14" width="70" height="40" rx="8" fill="#2b6cb0"/>
<text x="160" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">リール</text>
<text x="160" y="46" text-anchor="middle" font-size="9" fill="#eaf1f8">1本</text>
<path d="M160 54 L70 90" stroke="#9cb8d6" stroke-width="2"/>
<path d="M160 54 L160 90" stroke="#9cb8d6" stroke-width="2"/>
<path d="M160 54 L250 90" stroke="#9cb8d6" stroke-width="2"/>
<rect x="30" y="90" width="80" height="34" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="70" y="104" text-anchor="middle" font-size="10" fill="#1e4e7e">Xスレッド</text>
<text x="70" y="117" text-anchor="middle" font-size="9" fill="#718096">起承転結を分割</text>
<rect x="120" y="90" width="80" height="34" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="160" y="104" text-anchor="middle" font-size="10" fill="#1e4e7e">note記事</text>
<text x="160" y="117" text-anchor="middle" font-size="9" fill="#718096">理由まで膨らます</text>
<rect x="210" y="90" width="80" height="34" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="250" y="104" text-anchor="middle" font-size="10" fill="#1e4e7e">スレッズ</text>
<text x="250" y="117" text-anchor="middle" font-size="9" fill="#718096">長めに展開</text>
<text x="160" y="143" text-anchor="middle" font-size="11" fill="#b83280">媒体が違えば、そこにいる人が違う</text>
</svg>
<div class="figcap">あなたの「使い回し」は、相手には「初めて聞く話」</div>
</div>

<p>4媒体も手間が何倍にもなる、と思うはずだ。違う。<strong>新しく作るんじゃない。インスタで作ったものを使い回す。</strong>あなたが「もう何度も言った話」と感じても、インスタを見ない人がXにいる。Xを見ない人がnoteにいる。だから罪悪感はいらない。</p>

<div class="vs">
<div class="l"><div class="t">✗ ゼロから作る</div>インスタの動画を作り、Xもまた一から考え、noteも別ネタで書く。ネタ出しを3回やって息切れ。<b>労力が足し算で増えるから続かない。</b></div>
<div class="r"><div class="t">○ 1本を割って配る</div>リール台本（起承転結）をXのスレッドに組み替え、キャプションを膨らませてnoteに。1本作れば形を変えて配るだけ。<b>1回の労力が掛け算で広がるから続く。</b></div>
</div>

<h4>具体的なやり方（リール1本を例に）</h4>
<div class="step"><span class="sn">1</span><span class="snm">インスタのリール台本を「起承転結」で作る</span>
<p>これが全ての元ネタ。一番厳しく反応が出る媒体だから、ここで当たった台本は「当たり確認済み」の素材。配り直すから転用先でも外しにくい。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">起承転結をXのスレッド形式に組み替える</span>
<p>「起」を1投稿目、「承」を2投稿目…と分けるだけ。<b>起承転結は人が引き込まれる順番そのもの。媒体が変わっても順番は変わらない。</b></p></div>
<div class="step"><span class="sn">3</span><span class="snm">キャプションを膨らませてnoteにする</span>
<p>短くまとめたキャプションに「なぜそうなるか」まで足して記事化。<b>インスタは流し見だから削る、noteはじっくり読むから足す。</b>読む人のモードに合わせる。</p></div>
<div class="step"><span class="sn">4</span><span class="snm">プロフィールリンクで他媒体に誘導</span>
<p>プロフィール欄にXやLINEのリンクを貼り、1人を複数媒体でつながる<b>クロスフォロワー</b>に。<b>接触回数が増えて親しみが深まり、1箇所で会えなくても別の場所で会えるから関係が切れない。</b></p></div>

<div class="key"><strong>横展開の最初の一歩はスレッズが一番ラク。</strong>同じ会社が運営してて、インスタのフォロワーにリーチしやすい。新しい媒体の最大のハードルは「ゼロから人を集め直すこと」。スレッズはそのハードルが最初から低い。<b>最初の一歩は、一番抵抗の少ない所から踏み出す。</b></div>

<h4>Xとスレッズの役割分担</h4>
<div class="vs">
<div class="l"><div class="t">X（エックス）</div>今その瞬間の思考をリアルタイムで。短い言葉の連打で<b>信頼を積む</b>。<b>流れが速く、思考の断片を頻繁に出すのに向く。</b></div>
<div class="r"><div class="t">スレッズ</div>インスタからの流入を受け止め、<b>長めのノウハウ</b>をじっくり展開。<b>ファンがそのまま来るから、関係のある人に深い話を届けられる。</b></div>
</div>

<h2><span class="s">4</span>外注化 — 自分は「指揮者」に回る</h2>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="料理人から店長へ">
<rect x="0" y="0" width="155" height="130" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="165" y="0" width="155" height="130" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="77" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 料理人のまま</text>
<circle cx="77" cy="60" r="14" fill="#a0aec0"/>
<rect x="63" y="78" width="28" height="26" rx="8" fill="#a0aec0"/>
<text x="77" y="120" text-anchor="middle" font-size="10" fill="#718096">1人分しか回らない</text>
<text x="242" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 店長になる</text>
<circle cx="242" cy="56" r="13" fill="#2b6cb0"/>
<rect x="229" y="72" width="26" height="22" rx="7" fill="#2b6cb0"/>
<circle cx="205" cy="100" r="7" fill="#9cb8d6"/>
<circle cx="242" cy="100" r="7" fill="#9cb8d6"/>
<circle cx="279" cy="100" r="7" fill="#9cb8d6"/>
<text x="242" y="122" text-anchor="middle" font-size="10" fill="#1e4e7e">店が何倍も回る</text>
</svg>
<div class="figcap">レシピと味の基準を決め、調理は人に任せる</div>
</div>

<p>投稿量が増えると必ず「全部自分でやってたら寝る時間がない」にぶつかる。目安は<strong>売上が月5〜10万円を超えたら</strong>、編集や台本を人に任せる。あなたは何を発信するか・どう見せるかの<strong>ディレクションに集中する。</strong></p>

<div class="key"><b>あなたにしかできない仕事と、誰でもできる仕事を分けるのが外注の本質。</b>「何を発信するか」はあなたにしかできない。「動画を切ってテロップを入れる」は手順化できる。<strong>あなたの時間を、あなたにしかできない方に全部寄せる。</strong>これが規模を伸ばす唯一の道だ。</div>

<h4>動画編集者を雇う手順</h4>
<div class="step"><span class="sn">1</span><span class="snm">クラウドワークス・ランサーズで募集する</span>
<p>短尺動画の編集相場は<b>1本1,500〜5,000円ほど</b>（内容や経験で上下）。<b>初回は腕も相性も分からない。いきなり高単価で長期契約せず、低リスクで合うか確かめる。</b></p></div>
<div class="step"><span class="sn">2</span><span class="snm">「バズった動画」を見本として渡す</span>
<p>ここが一番大事。「いい感じに」は事故る。<b>「この動画と同じテンポ・テロップの出し方で」と現物を渡せばブレない。</b></p>
<div class="vs"><div class="l"><div class="t">✗ 言葉で頼む</div>「いい感じに」＝あなたの頭の中にしかない基準。相手は自分の基準で作る</div><div class="r"><div class="t">○ 現物を渡す</div>初めて同じゴールを見られる。<b>抽象は事故り、具体は事故らない</b></div></div></div>
<div class="step"><span class="sn">3</span><span class="snm">最初は1本ずつ確認、安定したら量を増やす</span>
<p>いきなり10本任せない。<b>最初にズレを直さず量を出すと、同じズレが10本に増える。</b>数本で「あなたの基準」をインストールしてから量を増やす方が、結局速くて安い。</p></div>

<div class="warn"><b>「外注はもったいない」と全部抱える人ほど規模が頭打ちになる。</b>自分の時間を「タダ」だと錯覚してるからだ。1本3,000円を惜しんで2時間使うと、その2時間で作れた企画や別媒体が消える。<strong>外注はコストじゃなく、時間を買う投資だ。</strong></div>

<h2><span class="s">5</span>AIで量産 — ただし「自分の言葉」に戻す</h2>

<table>
<tr><th>使いどころ</th><th>やり方</th></tr>
<tr><td>台本</td><td>反応が取れた投稿の型を読ませて「この型で別テーマの台本を」とアレンジ</td></tr>
<tr><td>X投稿</td><td>インスタの台本を貼り「Xのスレッド形式に変換して」と頼む</td></tr>
<tr><td>サムネ・画像</td><td>画像生成ツールでサムネのたたき台を量産</td></tr>
</table>

<div class="flowbig">
<span>AIが0→1（骨組み）</span><span>自分が1→10（肉付け）</span><span class="is-goal">速さ＋らしさ</span>
</div>

<div class="warn"><b>AIの出力をそのまま投稿するのはNG。</b>AIの文は誰が書いても同じ「のっぺりした文」になりやすい。読者は「これAIだ」と気づいた瞬間に冷める。<b>奥にある理由：</b>ファンになる理由は「情報が役立った」じゃなく「この人は私をわかってくれる」だった。AIの文には「この人」がいない。<strong>情報はAIで足りる。でも"らしさ"はあなたにしか出せない。そこを手放すと、ファンになる理由そのものが消える。</strong></div>

<div class="key">コツは<strong>「AIに0→1を、自分が1→10を」</strong>。真っ白から書くのが一番しんどく時間を食う。その立ち上がりの重さをAIに肩代わりさせ、出てきた骨組みを自分の言葉で肉付けする。<b>AIは下書きを一瞬で出す相棒。仕上げの判断は最後まであなたの仕事だ。</b></div>

<h2><span class="s">6</span>別アカウント — 勝ちパターンを「もう1回」</h2>

<p>1アカウントが回るようになったら、第2・第3アカウントを別ジャンルで立ち上げる。狙うのは<strong>HARMの法則の「別カテゴリ」</strong>。人が深く悩む4分野だ。</p>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HARMの4分野">
<rect x="6" y="20" width="72" height="70" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="42" y="48" text-anchor="middle" font-size="14" font-weight="700" fill="#1e4e7e">H</text>
<text x="42" y="68" text-anchor="middle" font-size="10" fill="#718096">健康</text>
<rect x="84" y="20" width="72" height="70" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="120" y="48" text-anchor="middle" font-size="14" font-weight="700" fill="#1e4e7e">A</text>
<text x="120" y="68" text-anchor="middle" font-size="10" fill="#718096">夢・将来</text>
<rect x="162" y="20" width="72" height="70" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="198" y="48" text-anchor="middle" font-size="14" font-weight="700" fill="#1e4e7e">R</text>
<text x="198" y="68" text-anchor="middle" font-size="10" fill="#718096">人間関係</text>
<rect x="240" y="20" width="74" height="70" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="277" y="48" text-anchor="middle" font-size="14" font-weight="700" fill="#b83280">M</text>
<text x="277" y="68" text-anchor="middle" font-size="10" fill="#8a4a6e">お金</text>
<text x="160" y="14" text-anchor="middle" font-size="11" fill="#718096">眠れないほど悩む＝財布が開く</text>
</svg>
<div class="figcap">軽い興味にはお金を出さない。深い悩みには出す</div>
</div>

<div class="tc"><div class="hd">具体例｜お金（M）の中で隣に展開</div><div class="bd"><span class="lab">節約系の主軸 → 派生を作る</span>
「節約」で当てたら、同じお金カテゴリの中で<b>副業系・投資系・暮らし系</b>に派生。<b>同じ悩み（お金の不安）から枝分かれしてるから根っこの感情が同じ。1つ目で集めた人が2つ目にも流れやすく、立ち上げが速い。</b></div></div>

<h4>なぜ2つ目は立ち上げが速いのか</h4>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="地図を描く側と持って歩く側">
<text x="79" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">1つ目</text>
<path d="M30 80 q10 -30 30 -10 q20 20 40 -15" stroke="#a0aec0" stroke-width="2.5" fill="none" stroke-dasharray="3 4"/>
<text x="79" y="100" text-anchor="middle" font-size="10" fill="#718096">手探りで地図を描く</text>
<line x1="160" y1="14" x2="160" y2="96" stroke="#e2e8f0"/>
<text x="241" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">2つ目</text>
<path d="M190 80 L300 45" stroke="#2b6cb0" stroke-width="3" fill="none"/>
<circle cx="300" cy="45" r="5" fill="#b83280"/>
<text x="241" y="100" text-anchor="middle" font-size="10" fill="#1e4e7e">地図を持って歩く</text>
</svg>
<div class="figcap">勝ちパターン（型）という設計図がそのまま使える</div>
</div>
<p>コンセプトの作り方、HARMの狙い方、「変化」の見せ方。<strong>2つ目は最初から正解のやり方でスタートできる</strong>から、立ち上げコストが激減する。</p>

<div class="vs">
<div class="l"><div class="t">✗ 1アカウントに固執</div>1つに全部賭ける。伸びは頭打ち、凍結で全てを失う。<b>1本足の怖さがそのまま残る。</b></div>
<div class="r"><div class="t">○ 複数を育てる</div>勝ちパターンを横に複製して柱を増やす。<b>1つ倒れても他で立っていられる。</b></div>
</div>

<div class="key">さらに<strong>アカウント間でフォロー誘導してファンを「循環」させる。</strong>「投資の話はこっちの別アカウントで」と紹介する。<b>すでにあなたを信頼してる人は別アカウントも信頼してくれる。ゼロから作るより、既存の信頼を貸す方がはるかに速い。</b></div>

<h2><span class="s">7</span>ロードマップ — この順番を守る</h2>

<div class="flowbig">
<span>1 土台</span><span>2 複線化</span><span>3 外注</span><span class="is-goal">4 量産・複製</span>
</div>

<p><strong>後ろのPhaseは前が終わってないと成立しない。</strong>土台がなければ転用する素材がない。素材を作る仕組みがなければ外注に渡すものがない。1つずつ積むのは遠回りに見えて一番の近道だ。</p>

<table>
<tr><th>段階</th><th>やること</th><th>なぜこの順か</th></tr>
<tr><td><b>Phase 1</b></td><td>インスタ単独で月10万円まで</td><td>横軸はまだ広げない。<b>掛け算の元になる土台を先に固めきる</b></td></tr>
<tr><td><b>Phase 2</b></td><td>LINE構築＋X／スレッズに転用</td><td>既存コンテンツを再利用。新規制作しない。<b>一番ラクで保険になるLINEから</b></td></tr>
<tr><td><b>Phase 3</b></td><td>編集・台本を外注化</td><td>自分は訴求設計に集中。<b>手が回らなくなった所で初めて任せる</b></td></tr>
<tr><td><b>Phase 4</b></td><td>AI量産＋別アカウント展開</td><td>第2・第3を別ジャンルで。<b>仕組みが回り始めて初めて複製できる</b></td></tr>
</table>

<div class="warn"><b>一番やりがちな失敗：</b>Phase1を飛ばしていきなりPhase2や4に行くこと。横展開は足し算じゃなく<b>掛け算</b>。Phase1という元の数字がゼロに近いと、何を掛けてもゼロに近い。<strong>土台が固まるまで横は広げない。</strong>これだけは守る。</div>

<h2><span class="s">8</span>★この章のゴール：2軸目を1つ決める</h2>

<p>宿題はシンプル。<strong>インスタの次に伸ばす「2軸目」を1つだけ決める。</strong>なぜ1つに絞るか。選択肢が多いと選ぶこと自体が面倒になって動かなくなる。前のストーリーの章の「選ばせる時は絞る」と同じ原理が、あなた自身にも働く。</p>

<div class="step"><span class="sn">1</span><span class="snm">まだ月10万円に届いてない → 決めるだけ、着手しない</span>
<p>今はインスタに集中。「次はこれ」と決めて頭の隅に置くだけでいい。<b>ゴールが見えると今の作業に意味が生まれて続けやすい。でも着手はしない。土台が先だ。</b></p></div>
<div class="step"><span class="sn">2</span><span class="snm">月10万円を超えた → 「LINE」か「スレッズ」から</span>
<p>LINEは売る場所の本丸で凍結保険。スレッズはインスタと相性が良く一番ラクに伸ばせる。<b>「効果が大きい（LINE）」か「労力が小さい（スレッズ）」のどちらかを満たす。最初の1歩は効くか・ラクか、その片方が立ってる所から。</b></p></div>
<div class="step"><span class="sn">3</span><span class="snm">長期で資産を残したい → YouTube／TikTokかnote</span>
<p>手間はかかるが検索流入が長く続く。ただし優先度はLINE・スレッズの後。<b>資産化は効くまで時間がかかる。先に即効性のある足場を作ってから長期の仕込みに入る方が息切れしない。</b></p></div>

<div class="check"><ul>
<li>☐ 今、横展開を始めていい段階か（月10万円を超えたか）</li>
<li>☐ 2軸目を1つ決めたか（4つ全部やろうとしてないか）</li>
<li>☐ 選んだ理由を言えるか（保険か・信頼か・集客か・資産化か）</li>
<li>☐ 新規制作でなく、インスタ素材を「使い回す」前提か</li>
<li>☐ 各媒体に被らない「役割」を割り振れているか</li>
<li>☐ Phase1→2→3→4の順番を守れているか</li>
</ul></div>

<div class="end">横展開は新しく頑張ることじゃない。<strong>今あるものを、形を変えて配り直すことだ。</strong><br>LINE・X・noteで複線化し、外注とAIで負荷を下げる。<br>1本足は、いつか転ぶ。だから——橋を増やせ。ただし、土台が固まってから、1本ずつ。<br>次章では、いよいよ自社商品の作り方を学ぶ。</div>
</div>
  `,

  'p4-product': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>月100万円の壁を越える人が、ほぼ全員「自社商品」を持つ理由</li>
<li>最初の1個に選ぶべき商品タイプと、その選び方</li>
<li>売る前に需要を確かめる「商品設計の4ステップ」</li>
<li>未完成で売って育てる「MVP→口コミ→値上げ」のループ</li>
<li>初心者が必ずハマる失敗3つ、その共通の正体</li>
<li>自分の商品を3行で言い切れるようになる</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="完璧に作ってから売るのと未完成で売るの違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 完璧にしてから売る</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 未完成で売る</text>
<rect x="40" y="46" width="78" height="48" rx="8" fill="#cbd5e0"/>
<text x="79" y="74" text-anchor="middle" font-size="11" fill="#718096">こもって制作</text>
<text x="79" y="118" text-anchor="middle" font-size="11" fill="#a0aec0">出る頃に熱が冷める</text>
<text x="79" y="134" text-anchor="middle" font-size="11" fill="#a0aec0">売上ゼロのまま</text>
<rect x="186" y="46" width="50" height="34" rx="7" fill="#2b6cb0"/>
<text x="211" y="67" text-anchor="middle" font-size="10" fill="#fff">60点で出す</text>
<path d="M240 63 l16 0" stroke="#b83280" stroke-width="2" marker-end="url(#a0)"/>
<rect x="262" y="46" width="50" height="34" rx="7" fill="#b83280"/>
<text x="287" y="67" text-anchor="middle" font-size="10" fill="#fff">声で育つ</text>
<defs><marker id="a0" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="241" y="118" text-anchor="middle" font-size="11" fill="#1e4e7e">売りながら強くなる</text>
<text x="241" y="134" text-anchor="middle" font-size="11" fill="#1e4e7e">今日から売上が立つ</text>
</svg>
<div class="figcap">完璧を待つな。未完成で売って、お客の声で育てろ</div>
</div>

<div class="key">この章の核は1つ。<strong>「完璧な商品を作ってから売る」をやめて、「未完成のまま売って、お客の声で育てる」に切り替える。</strong>これができた瞬間、自社商品は動き出す。</div>

<h3>なぜ自社商品が一番利益を残すのか</h3>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="販売員とオーナーの違い">
<rect x="0" y="22" width="150" height="86" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">アフィリ＝販売員</text>
<text x="75" y="72" text-anchor="middle" font-size="11" fill="#a0aec0">人の店で売る</text>
<text x="75" y="90" text-anchor="middle" font-size="11" fill="#a0aec0">入るのは歩合だけ</text>
<text x="160" y="70" text-anchor="middle" font-size="20" fill="#cbd5e0">≠</text>
<rect x="170" y="22" width="150" height="86" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">自社＝オーナー</text>
<text x="245" y="72" text-anchor="middle" font-size="11" fill="#2b6cb0">自分の店で売る</text>
<text x="245" y="90" text-anchor="middle" font-size="11" fill="#2b6cb0">売れた分が全部入る</text>
</svg>
<div class="figcap">差は「労力」じゃなく「構造」。値段も棚も全部自分で決められる</div>
</div>
<p>デジタル商品は、1個目を作る労力と、その後たくさん売る労力がほとんど同じだ。<strong>一度作れば仕入れも在庫もなく、寝ている間にも同じものが売れていく。</strong>少人数でも大きく稼げるのは、根性でも才能でもなく、この構造があるからだ。</p>
<div class="warn">だから目的は「立派な作品を完成させること」じゃない。<b>「この構造を、今日から回し始めること」だ。</b>完成度はあとから上げられる。回し始めが遅れるほど、機会だけが消える。</div>

<h2><span class="s">1</span>自社商品の4タイプ — どれから作るか</h2>
<p>商品は大きく4つ。どれが偉いかではなく、フォロワー数・体力・サポートにかけられる時間で選ぶ。最初の1個は<strong>「作るのが一番ラクで、説明が一番カンタンなもの」</strong>が鉄則だ。</p>
<div class="key"><b>奥の理由：</b>1個目で大事なのは「いい商品」じゃなく「売る経験を一周すること」。何ヶ月もかかる商品を選ぶと、売る練習に入る前に力尽きる。<strong>最初の1個は、ゴールでなくスタートを切るためのもの。</strong></div>

<table>
<tr><th>タイプ</th><th>価格の目安</th><th>特徴</th><th>売る場所</th></tr>
<tr><td>PDF・テンプレ</td><td>2,000円〜</td><td>一度作って繰り返し販売。労働時間ゼロで売れ続ける</td><td>note / BASE / BOOTH</td></tr>
<tr><td>オンライン講座</td><td>1万〜10万円</td><td>録画して販売。リール制作スキルがそのまま使える</td><td>Udemy / Teachable / 自社LP</td></tr>
<tr><td>1対1コンサル</td><td>月3〜30万円</td><td>少人数で高収益。深い関係で口コミが生まれる</td><td>DM・LINE（無料テスト→値上げ）</td></tr>
<tr><td>グループコミュニティ</td><td>月1,000〜50,000円</td><td>継続課金。メンバー同士の横のつながりが価値</td><td>Discord / Slack / noteメンバーシップ</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="作る手間と単価の関係">
<line x1="40" y1="120" x2="310" y2="120" stroke="#cbd5e0" stroke-width="1.5"/>
<line x1="40" y1="120" x2="40" y2="14" stroke="#cbd5e0" stroke-width="1.5"/>
<text x="175" y="142" text-anchor="middle" font-size="11" fill="#a0aec0">作る手間・サポート量 →</text>
<text x="20" y="70" text-anchor="middle" font-size="11" fill="#a0aec0" transform="rotate(-90 20 70)">単価 →</text>
<circle cx="78" cy="104" r="9" fill="#2b6cb0"/>
<text x="78" y="92" text-anchor="middle" font-size="10" fill="#1e4e7e">PDF</text>
<text x="78" y="119" text-anchor="middle" font-size="9" fill="#fff">軽</text>
<circle cx="150" cy="80" r="9" fill="#2b6cb0"/>
<text x="150" y="68" text-anchor="middle" font-size="10" fill="#1e4e7e">講座</text>
<circle cx="222" cy="50" r="9" fill="#b83280"/>
<text x="222" y="38" text-anchor="middle" font-size="10" fill="#b83280">コンサル</text>
<circle cx="285" cy="64" r="9" fill="#9cb8d6"/>
<text x="285" y="40" text-anchor="middle" font-size="10" fill="#1e4e7e">コミュ</text>
<text x="285" y="54" text-anchor="middle" font-size="9" fill="#718096">継続課金</text>
</svg>
<div class="figcap">まずは左下のPDFから。手間が軽く、外しても損が出ない</div>
</div>

<div class="tc"><div class="hd">PDF・テンプレ｜2,000円〜</div><div class="bd"><span class="lab">一番ラクに始められる：</span>一度作れば寝てても売れる。A4で10枚からでも商品になる。「フォロワー1万人までにやった投稿テンプレ集」のように、自分が通った道をまとめるだけ。<b>なぜ最初に向くか：</b>テスト販売がしやすく、売れなくても損が出ない。失敗のコストがほぼゼロなら、何度でも打席に立てる。<b>迷ったらまずこれ。</b></div></div>

<div class="tc"><div class="hd">オンライン講座｜1万〜10万円</div><div class="bd"><span class="lab">話すのが得意な人向け：</span>画面を録画して売る。リールの撮る・話す・編集スキルがそのまま使える。<b>なぜ単価が上がるか：</b>文章は読み手が自分で読み解く負担がある。動画は「人が目の前で教えてくれる」体験になり、安心感が乗るから高く払う理由が生まれる。</div></div>

<div class="tc"><div class="hd">1対1コンサル｜月3〜30万円</div><div class="bd"><span class="lab">少人数で一番稼げる：</span>数人でも大きな収益。深い関係ができて口コミが広がる。<b>なぜ単価が一番高いか：</b>人は「自分だけのために向き合ってくれる」ことに最大の価値を感じる。この特別感が値段を押し上げる。時間の切り売りなので増やしすぎると体が持たない。最初は無料テスト→結果が出たら値上げ。</div></div>

<div class="tc"><div class="hd">グループコミュニティ｜月1,000〜50,000円</div><div class="bd"><span class="lab">毎月お金が入り続ける：</span>継続課金で売上が積み上がる。価値の本体は知識だけでなく<b>メンバー同士の横のつながり</b>。<b>なぜ続くか：</b>人は1人だと続かない。仲間がいると辞めにくい。「ここに居場所がある」感覚が解約を止める。<b>いきなり大人数を狙わず、まず10人で回す。</b></div></div>

<div class="key">継続課金は売上が「先月＋今月」で積み上がるから、一番安定する。ただし運営の手間がかかる。<strong>PDFやコンサルで実績と信頼を作ってから足すのが正しい順番。</strong>信頼の貯金がない状態で「集まれ」と言っても、人は集まらない。</div>

<h2><span class="s">2</span>商品設計の4ステップ — なぜ売れる前に確かめるのか</h2>
<p>初心者が一番やるミスは「自分が作りたいものを作って、売れずに終わる」こと。順番が逆だ。<strong>先に「買う人がいるか」を確かめてから作る。</strong></p>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="作る前に需要を確かめる順番">
<rect x="6" y="34" width="86" height="44" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="49" y="54" text-anchor="middle" font-size="11" fill="#1e4e7e">まず聞く</text>
<text x="49" y="70" text-anchor="middle" font-size="10" fill="#2b6cb0">需要を確認</text>
<path d="M96 56 l18 0" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<rect x="118" y="34" width="86" height="44" rx="9" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="161" y="60" text-anchor="middle" font-size="11" fill="#1e4e7e">それから作る</text>
<path d="M208 56 l18 0" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<rect x="230" y="34" width="84" height="44" rx="9" fill="#fff5fa" stroke="#b83280"/>
<text x="272" y="60" text-anchor="middle" font-size="11" fill="#b83280">売れる</text>
<text x="160" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">需要 → 制作 の順番だけが当たる</text>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="160" y="98" text-anchor="middle" font-size="10" fill="#a0aec0">逆だと「作りたい」と「欲しい」を取り違える</text>
</svg>
<div class="figcap">人は時間をかけたものを「いいもの」と思い込む。だから先に確かめる</div>
</div>

<div class="step"><span class="sn">1</span><span class="snm">フォロワーの悩みを言語化する</span>
<p>DMの質問・コメント・アンケートから<b>「一番多い悩み」</b>を抜き出す。同じ質問が何度も来るなら、それが商品のタネだ。ストーリーのアンケートで「◯◯に困ってますか？」と直接聞き、手を挙げる人の数を見る。<b>需要は自分の頭でなく、相手が何度も口にする言葉の中にしかない。</b></p>
<div class="vs"><div class="l"><div class="t">✗ 悪い見つけ方</div>自分が語りたいから「発信の哲学」を商品にする。誰も聞いていない。</div><div class="r"><div class="t">○ 良い見つけ方</div>毎週3人から「リールのネタが思いつかない」とDM。確実に需要がある。</div></div>
<div class="note">つまずき：「聞いたら手の内がバレる」と不安になる。逆だ。聞くこと自体が「私の悩みを分かろうとしてる」という信頼になり、売れる前から関係が温まる。</div>
</div>

<div class="step"><span class="sn">2</span><span class="snm">最小限の商品（MVP）から始める</span>
<p>完璧を作ろうとしない。<b>A4で10枚のPDF</b>か<b>60分の動画1本</b>でテストする。テーマは1つに絞る。MVPとは「お試しの最小サイズ」。料理屋でいえば、10品のコースをいきなり作らず、まず看板メニュー1品で反応を見る考え方だ。<b>大きく作るほど外した傷が深い。小さく出せば、外しても痛くない。</b>タイトルには<b>「◯◯日で◯◯になれた方法」</b>と実績と数字を入れる。</p>
<div class="warn">「10枚じゃ薄いと思われそう」と怖がってページを増やすのは逆。<b>薄くても1つの悩みを完全に解決できれば商品になる。</b>お客が払うのはページ数でなく「悩みが消えること」にだ。</div>
</div>

<div class="step"><span class="sn">3</span><span class="snm">価格設定と訴求設計</span>
<p>最初は低めに設定して、まずレビューを集める。口コミが増えたら徐々に値上げ。<b>実績ゼロでは、値段が「リスク」として目に映る。</b>安く出すのは安売りでなく、お客のリスクを下げて「買ってよかった」の声を貯める投資だ。売り文句は<b>Phase 3の「7ステップ訴求」をそのまま使う。</b></p>
<div class="flow">
<span>共感</span><span>権威</span><span>教育</span><span>欲求</span><span>CTA</span>
</div>
<p>さらに<b>「先着◯名様限定価格」</b>と数を区切る。<b>なぜ効くか：</b>人は「いつでも買える」ものを後回しにし、後回しはほぼ買われない。締め切りや枠が後回しを止める。</p>
<div class="good"><b>○ 緊急性の作り方</b>「最初の10名だけ3,000円。11人目から5,000円に上げます」→今動く理由が生まれ、値上げ予告が後の人の「早く買わなきゃ」にもなる。</div>
</div>

<div class="step"><span class="sn">4</span><span class="snm">口コミ・実績を積み上げて単価を上げる</span>
<p>買った人の声を、ストーリーに<b>載せ続ける</b>。一度で終わりでなく、増えるたびに何度も出す。訴求には<b>「◯人が購入・◯件の感想」</b>の数字を必ず使う。<b>なぜ「みんなが買っている」が効くか：</b>人は自分で良し悪しを判断するのが苦手で、他人の判断に乗りたがる。「すでに買われた」事実が、お客に代わって「安全だ」と証明する。</p>
<div class="splitbar"><div class="sb-main" style="width:30%">1人目を売る＝一番難しい</div><div class="sb-sub" style="width:70%">「50人が買った」と言えれば51人目はぐっとラク</div></div>
<p>だから最初の数人の感想は、何としても集める。<strong>最初の口コミは、次の口コミを呼ぶ種だ。</strong></p>
</div>

<h2><span class="s">3</span>販売チャネルの選び方 — 商品で決まる</h2>
<p>どこで売るかは「商品のタイプ」で決まる。単発で売り切るものと、月額・分割で長く続けるもので、向いている場所が違う。</p>
<div class="vs">
<div class="l"><div class="t">単発販売 → note / BASE / BOOTH</div>商品ページを作るだけで売れる。決済も最初から完備。PDFや単発講座を「ポンと1個売る」のに向く。最初の自社商品はここで十分。</div>
<div class="r"><div class="t">継続・LP → UTAGE / 自社サイト</div>月額や分割払いに対応。コミュニティやコンサルなど「長く続く仕組み」はこっち。LPで訴求をじっくり読ませて売れる。実績が積み上がってから移行する。</div>
</div>
<div class="key">最初から自社サイトを作り込まなくていい。<strong>1個目はnoteやBASEで「売れるか」を試す。</strong>売れる手応えが出てから継続課金やLPに広げる。逆にすると、立派な箱だけで中身がない空回りになる。売れると分かってから箱を大きくするほうが、結局速い。</div>

<h2><span class="s">4</span>★この章の心臓：MVP→口コミ→値上げのループ</h2>
<p>自社商品の全部は、結局このループに集約される。1周ごとに商品が強くなり、単価が上がる。ここが一番大事な1個だ。</p>

<div class="vfig">
<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MVPから口コミ値上げまで一周するループ">
<rect x="98" y="14" width="124" height="40" rx="10" fill="#2b6cb0"/>
<text x="160" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">① 未完成でも売る</text>
<text x="160" y="47" text-anchor="middle" font-size="9" fill="#cdddec">PDF10枚 / 動画1本・安く</text>
<rect x="206" y="78" width="108" height="40" rx="10" fill="#9cb8d6"/>
<text x="260" y="96" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">② 声を集める</text>
<text x="260" y="111" text-anchor="middle" font-size="9" fill="#1e4e7e">感想と「◯人購入」</text>
<rect x="6" y="78" width="108" height="40" rx="10" fill="#b83280"/>
<text x="60" y="96" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">③ 値上げ＆改良</text>
<text x="60" y="111" text-anchor="middle" font-size="9" fill="#fde">実績を盾に強くする</text>
<path d="M222 44 q40 12 44 30" stroke="#a0aec0" stroke-width="2.5" fill="none" marker-end="url(#a4)"/>
<path d="M206 112 q-46 30 -92 0" stroke="#a0aec0" stroke-width="2.5" fill="none" marker-end="url(#a4)"/>
<path d="M60 78 q4 -40 38 -42" stroke="#a0aec0" stroke-width="2.5" fill="none" marker-end="url(#a4)"/>
<text x="160" y="150" text-anchor="middle" font-size="11" fill="#718096">①に戻る＝さらに強い商品で売る</text>
<text x="160" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">1周ごとに単価が上がる</text>
<defs><marker id="a4" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#a0aec0"/></marker></defs>
</svg>
<div class="figcap">完璧を求めず、売って・声をもらって・直す。お客と一緒に育てる</div>
</div>

<div class="vs">
<div class="l"><div class="t">✗ 100点を待つ</div>半年こもって作り込む。出す頃には思い込みで固まり、ズレに気づけない。半年ぶんの売上と改善のヒントが消える。</div>
<div class="r"><div class="t">○ 60点で出す</div>2週間で出して声をもらう。お客の言葉で70点・80点に上がる。売りながら直すから、売上も商品も同時に育つ。</div>
</div>
<p><b>なぜ60点で出すほうが、結局いい商品になるのか：</b>1人で考える100点は、自分の頭の中だけの100点で、お客が欲しいものとはズレている。世に出すと「ここが分かりにくい」「ここがもっと欲しい」という、自分では気づけない改善点が手に入る。<strong>お客の声は、最高の編集者だ。</strong></p>
<div class="key">Phase 3の訴求テンプレ（7ステップ）と、このループを組み合わせれば、<strong>月100万円→500万円の壁を越えられる。</strong>訴求が型で量産でき、商品がループで強くなり続けるからだ。型だけでも商品だけでも止まる。両輪で初めて回る。</div>

<h2><span class="s">5</span>失敗パターン3つ — 奥の正体は同じ</h2>
<p>つまずく人の失敗は、だいたいこの3つ。先に知れば全部避けられる。</p>

<div class="tc"><div class="hd">失敗1｜完璧にしてから売り出したい</div><div class="bd">
<div class="bad"><b>✗ 何が起きる</b>完成に時間がかかり、その間にフォロワーが離れる。出す頃には熱が冷めて誰も買わない。</div>
<span class="lab">奥の正体：</span>「未完成を出すのが怖い」恐れが本当の原因。完璧さは出さない言い訳に使われている。<br><span class="lab">どうする：</span><b>未完成でも売る。</b>完成度より販売実績の積み上げが先。60点で出してお客の声で直す。</div></div>

<div class="tc"><div class="hd">失敗2｜商品はできたのに売れない</div><div class="bd">
<div class="bad"><b>✗ 何が起きる</b>原因はほぼ訴求不足。良い商品でも、欲しいと思わせる言葉がなければ売れない。</div>
<span class="lab">奥の正体：</span>「いい物なら黙っていても伝わる」という思い込み。お客は中身を見る前に、まず言葉でしか良さを知れない。<br><span class="lab">どうする：</span>7ステップの型に当てはめ、共感→権威→教育→欲求→CTAで語る。<b>週1〜2回</b>出し続ける。1回で売れないのは当たり前。</div></div>

<div class="tc"><div class="hd">失敗3｜いきなり高単価から始めたい</div><div class="bd">
<div class="bad"><b>✗ 何が起きる</b>実績ゼロで30万円のコンサルを出しても誰も買わない。信頼の貯金がゼロだから。</div>
<span class="lab">奥の正体：</span>値段は「数字」でなく「信頼で払う」もの。信頼の残高を超える値段は、どんな良い商品でも払われない。<br><span class="lab">どうする：</span>最初は<b>無料 or 低単価でテスト</b>。10〜20人の口コミが集まってから値上げ。</div></div>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="実績の階段を一段ずつ登る">
<rect x="20" y="116" width="86" height="24" rx="4" fill="#9cb8d6"/>
<text x="63" y="132" text-anchor="middle" font-size="10" fill="#1e4e7e">未完成→販売</text>
<rect x="106" y="86" width="86" height="54" rx="4" fill="#2b6cb0"/>
<text x="149" y="106" text-anchor="middle" font-size="10" fill="#fff">低単価→口コミ</text>
<rect x="192" y="50" width="86" height="90" rx="4" fill="#b83280"/>
<text x="235" y="86" text-anchor="middle" font-size="10" fill="#fff">値上げ・高単価</text>
<path d="M250 44 l-8 -10 l-8 10 z" fill="#b83280"/>
<text x="160" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">飛ばすと落ちる。1段ずつが結局速い</text>
</svg>
<div class="figcap">各段は次の段に乗る土台。土台を抜いて上に乗れば崩れる</div>
</div>
<div class="warn">3つに共通するのは<b>「順番を飛ばそうとしている」</b>こと。販売経験という土台がないと改良できないし、口コミという土台がないと値上げできない。焦って2段飛ばしするより、1段ずつのほうが結局速い。</div>

<h2><span class="s">6</span>仕上げ：自社商品を3行で言い切る</h2>
<p>この章のゴール。自分の商品を次の3行で書けるかで「商品になっているか」が決まる。<b>3行で言い切れない＝頭の中で「誰に・何を・どう」が固まっていない</b>ということだ。自分が分かっていないものを、お客が理解できるはずがない。</p>

<div class="step"><span class="sn">1</span><span class="snm">誰の</span><p>どんな人に向けた商品か。ターゲットを1つに絞る。全員に向けると、誰にも刺さらない。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">どんな悩みを</span><p>その人が一番困っている具体的な悩み。「自分のことだ」と思わせる具体性を持たせる。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">どう解決するか</span><p>何日で・何ができるようになるか。実績と数字を入れ、変化の姿が画で浮かぶようにする。</p></div>

<div class="key"><b>【誰の】</b>フォロワー1,000人を超えたのに、商品が作れず収益ゼロのSNS運用者へ。<br><b>【どんな悩みを】</b>「自分に売れるものなんてない」「何を商品にすればいいかわからない」と止まっている。<br><b>【どう解決するか】</b>A4 10枚のPDFで、最初の1個を14日で売り出すまでの手順を、テンプレ付きで全部見せる。</div>
<div class="note">この3行がスラスラ書けたら、商品はもう出せる。書けないならステップ1（悩みの言語化）に戻る。3行が、そのまま商品の設計図になる。</div>

<h2><span class="s">7</span>検品：欠けはどれか</h2>
<p>出す前に「いい商品かな？」でなく<strong>「この項目、全部できてる？欠けはどれ？」</strong>で確認する。感覚で見るとブレるが、項目で見れば欠けが一目で分かる。</p>
<div class="check"><ul>
<li>DMやアンケートで「一番多い悩み」を確かめた？</li>
<li>完璧を目指さず、A4 10枚 or 動画1本のMVPに絞った？</li>
<li>テーマは1つに絞った？</li>
<li>タイトルに実績・数字（◯日で◯◯）を入れた？</li>
<li>最初は低単価にして、口コミを集める設計にした？</li>
<li>「先着◯名」で今すぐ買う理由を作った？</li>
<li>7ステップ訴求の型で、週1〜2回売る計画になってる？</li>
<li>商品の形に、売る場所（単発か継続か）を合わせた？</li>
<li>自分の商品を「誰の・どんな悩みを・どう解決するか」の3行で言い切れる？</li>
</ul></div>

<div class="end">自社商品は、完璧な作品じゃなくていい。<br>お客が払うのは、ページ数や完成度にじゃない。<strong>「悩みが消える体験」にだ。</strong><br>だから——完璧を待つな。未完成のまま売って、お客さんの声で育てる。<strong>今ある60点を、今日売り出せ。</strong><br>Phase 4 完了。これでロードマップ全章修了。</div>
</div>
  `,

  'p2-ana': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>振り返りの失敗＝「感覚で語る」こと。なぜ記憶は当てにならないか</li>
<li>1投稿につき記録する4ブロック（基本・初速・反応・メモ）の中身</li>
<li>「1時間後が普段の3倍」をバズの予兆として使う手順</li>
<li>週1回5分の健康診断と、3ヶ月で見える「時・型・尺・音」</li>
<li>直近の投稿1本を、今その場でシートに落とす実演</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="感覚と数字の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 感覚で振り返る</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 数字で測る</text>
<text x="79" y="58" text-anchor="middle" font-size="11" fill="#a0aec0">「あの言い回しが効いた」</text>
<text x="79" y="78" text-anchor="middle" font-size="11" fill="#a0aec0">「タイミングが悪かった」</text>
<text x="79" y="112" text-anchor="middle" font-size="11" fill="#718096">記憶が勝手に書き換わる</text>
<text x="79" y="130" text-anchor="middle" font-size="11" fill="#718096">＝同じ所でつまずく</text>
<text x="241" y="58" text-anchor="middle" font-size="11" fill="#2b6cb0">「冒頭で離脱されてる」</text>
<text x="241" y="78" text-anchor="middle" font-size="11" fill="#2b6cb0">「初速が普段の半分」</text>
<text x="241" y="112" text-anchor="middle" font-size="11" fill="#1e4e7e">直す場所を名指しできる</text>
<text x="241" y="130" text-anchor="middle" font-size="11" fill="#1e4e7e">＝次が良くなる</text>
</svg>
<div class="figcap">伸びない人の振り返りは、ぜんぶ「感覚で語る」に集約される</div>
</div>

<div class="key">伸びる人と伸びない人の差は才能でもセンスでもない。<strong>毎回「測ること」をやるかやらないか、それだけだ。</strong>感覚は「よかった気がする」で止まり、次の一手が出ない。数字だけが「次に何を変えるか」を教えてくれる。</div>

<h3>記録は「未来の自分」のためにやる</h3>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="記録の回し車">
<circle cx="160" cy="65" r="50" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<path d="M205 50 l8 -10 l3 13 z" fill="#2b6cb0"/>
<text x="160" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">測る</text>
<text x="250" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">直す所がわかる</text>
<text x="160" y="124" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">次が良くなる</text>
<text x="68" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">また数字が動く</text>
</svg>
<div class="figcap">体重計と同じ。測るから次の行動が変わる</div>
</div>
<p>今日の自分は、3ヶ月前の自分が何を考えて投稿したかを覚えていない。<strong>記録は、未来の自分が読める形で「今日の読み」を残す作業だ。</strong>これをやった瞬間、「なんとなく投稿する人」から「数字で組み立てる人」に変わる。</p>
<div class="warn">記録の最大の失敗は「続けないこと」。先に4つの覚悟を決めろ。<b>①感覚で判断しない（「なんかウケた」は記録じゃない）②毎投稿やる（気が向いた時だけだと比べられない）③仮説を必ず書く④3ヶ月貯める。</b>③が抜けると、ただの数字の墓場になる。</div>

<h2><span class="s">1</span>記録は「4ブロック」で取る</h2>
<p>見るのはたった4つのかたまり。スマホのメモに4行用意し、上から打ち込むだけ。<strong>前3つは事実を写すだけ、最後だけ頭を使う。</strong></p>
<div class="flowbig">
<span>① 基本</span><span>② 初速</span><span>③ 反応</span><span class="is-goal">④ メモ（勝負）</span>
</div>
<div class="fig">
<div class="tc"><div class="hd">① 投稿の基本</div><div class="bd">いつ・何を・どんな音で・何秒で出したか。<span class="lab">条件をそろえて比べるための「ラベル」</span></div></div>
<div class="tc"><div class="hd">② 初速メトリクス</div><div class="bd">出して1時間でどれだけ見られ、見続けられたか。<span class="lab">伸びるかは最初の1時間でほぼ決まる</span></div></div>
<div class="tc"><div class="hd">③ 反応の伸び</div><div class="bd">保存数と、翌朝・2日後・1週間後の再生数。<span class="lab">じわじわ伸び続ける投稿が本物</span></div></div>
<div class="tc"><div class="hd">④ 分析メモ（一番大事）</div><div class="bd">なぜこの数字か、次にどうするか。<span class="lab">抜けると数字の墓場になる</span></div></div>
</div>
<p><b>なぜこの順番か。</b>「事実→事実→事実→解釈」だから。①〜③は機械の数字を写すだけで、疲れていても手が動く。<strong>考えない作業を先に終え、考える作業を最後に1つだけ残す。</strong>これが続けられる順番だ。多くの人は①〜③で満足して④を書かない。それは健康診断の結果を封も開けず引き出しに溜めるのと同じ。</p>

<h2><span class="s">2</span>① 投稿の基本情報を記録する</h2>
<p>「この投稿はどんな条件で出したか」のラベルを最初に貼る。これがないと、数字を貯めても「どの条件が良かったか」を切り分けられない。</p>
<table>
<tr><th>記録する項目</th><th>なぜ取るか</th></tr>
<tr><td>投稿日・曜日・時間</td><td>「一番伸びる時間帯」を割り出す材料。曜日と時間はセットで必ず</td></tr>
<tr><td>動画タイトル</td><td>どの投稿の数字か一目で思い出す。冒頭のつかみをそのまま書く</td></tr>
<tr><td>使った音・特徴</td><td>流行りの音か・静かな音か・声だけか。伸びる音の傾向をつかむ</td></tr>
<tr><td>動画の秒数</td><td>15秒・30秒・60秒で分け、最後まで見られた尺を出す</td></tr>
</table>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="条件をそろえて比べる">
<rect x="10" y="30" width="130" height="70" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<rect x="180" y="30" width="130" height="70" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">○ ラベルあり</text>
<text x="245" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">✗ ラベル雑</text>
<text x="75" y="58" text-anchor="middle" font-size="11" fill="#2b6cb0">火 21:15／15秒</text>
<text x="75" y="78" text-anchor="middle" font-size="11" fill="#2b6cb0">無音字幕</text>
<text x="75" y="94" text-anchor="middle" font-size="10" fill="#1e4e7e">→ 何が効いたか比べられる</text>
<text x="245" y="62" text-anchor="middle" font-size="11" fill="#a0aec0">「昼ごろ」</text>
<text x="245" y="80" text-anchor="middle" font-size="11" fill="#a0aec0">「短め」</text>
<text x="245" y="94" text-anchor="middle" font-size="10" fill="#718096">→ 何も比べられない</text>
</svg>
<div class="figcap">分析＝条件をそろえて比べること。ラベルは仕分けの名札</div>
</div>
<div class="warn">つまずくのは「曜日と時間を雑に取る」こと。<b>「昼ごろ」ではなく「12:30」と分単位で書く。</b>「昼」と「夕方」では届く人数がまるで違う。同じ投稿でも、出した時間が違うだけで反応が変わる。最初の名札を丁寧に貼ることが、後の自分を救う。</div>

<h2><span class="s">3</span>② 初速メトリクス（投稿1時間後）</h2>
<p>ここが分析シートの心臓だ。<strong>伸びるかスベるかは、出してから最初の1時間でほぼ決まる。</strong></p>
<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="少人数に見せて反応で広げる">
<circle cx="40" cy="70" r="18" fill="#9cb8d6"/>
<text x="40" y="74" text-anchor="middle" font-size="10" fill="#fff">少人数</text>
<text x="40" y="108" text-anchor="middle" font-size="10" fill="#718096">まず見せる</text>
<path d="M62 70 L108 70" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a1)"/>
<text x="85" y="60" text-anchor="middle" font-size="9" fill="#b83280">反応が良い</text>
<circle cx="150" cy="70" r="26" fill="#cdddec"/>
<text x="150" y="74" text-anchor="middle" font-size="10" fill="#1e4e7e">中くらい</text>
<path d="M180 70 L222 70" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a1)"/>
<circle cx="270" cy="70" r="38" fill="#2b6cb0"/>
<text x="270" y="74" text-anchor="middle" font-size="11" fill="#fff">大拡散</text>
<text x="160" y="128" text-anchor="middle" font-size="11" fill="#1e4e7e">冒頭で離脱されると、ここで配信が止まる</text>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker></defs>
</svg>
<div class="figcap">最初の1時間は「拡散するかどうかの面接」。手応えを見ずに帰るな</div>
</div>
<h4>投稿1時間後に、この3つを記録する</h4>
<div class="fig">
<div class="tc"><div class="hd">1時間後の再生数</div><div class="bd">何人が入口を通ったか。<span class="lab">伸びの初速そのもの＝「量」</span></div></div>
<div class="tc"><div class="hd">1時間の再生時間（分）</div><div class="bd">合計で何分見続けられたか。<span class="lab">多いほど長く見られている</span></div></div>
<div class="tc"><div class="hd">平均再生時間（秒）</div><div class="bd">1人あたり何秒見たか。<span class="lab">つかみが効いたか＝「質」</span></div></div>
</div>
<p>同じ100再生でも、全員が冒頭1秒で離脱した100と、全員が最後まで見た100では評価が天と地ほど違う。<strong>再生数が「量」、再生時間が「質」。両方そろって面接の手応えが読める。</strong></p>
<div class="tl">
<div class="slot"><span class="time">投稿</span><div class="w2">出した瞬間。基本情報（①）をシートに書く</div></div>
<div class="slot"><span class="time">+1時間</span><div class="w2">アラームを「投稿1時間後」にセット。鳴ったら3つの数字を写す</div></div>
</div>
<div class="key">★ <strong>1時間後の再生数が、普段の3倍以上ならバズの予兆。</strong>迷わず<b>同じ型でもう1本作って、すぐ投稿する。</b>システムがあなたを「今、良い投稿を出す人」と判断して配信を強めている窓が開いている間だ。1日空けると、その人たちの熱は冷め、窓も閉じる。</div>
<p>ただし「3倍」は他人の基準ではなく、<b>自分の普段の数字を3倍したライン</b>のこと。最初の2週間は3倍を気にせず淡々と記録し、10本ほどで「自分の普通」が見える。普段100なら300超え、普段30なら90が合図。<strong>数字の大きさは人によって違っていい。大事なのは「自分の普通」と比べること。</strong></p>
<div class="vs">
<div class="l"><div class="t">✗ 初速を見ない人</div>夜に1本出して寝る。翌朝「あんまり伸びてないな」で終わり。伸びていた投稿に気づかず、波を逃して放置する。</div>
<div class="r"><div class="t">○ 初速を見る人</div>1時間後に確認。「いつもの3倍だ」と気づき、その場で同じ型をもう1本仕込む。波に2本乗せて一気に伸ばす。</div>
</div>
<div class="note">つまずきポイント：「1時間後にいちいち見るのは面倒」。だが見るのはアラームが鳴ってから30秒、3つの数字を写すだけ。慣れれば歯磨きと同じになる。</div>

<h2><span class="s">4</span>③ 反応の伸び（じわ伸びを見る）</h2>
<p>初速が良くても、そこで止まる投稿はただの花火だ。<strong>本物は、出した後も日をまたいで伸び続ける。</strong>決まったタイミングで再生数を写すだけ。</p>
<table>
<tr><th>記録するタイミング</th><th>何を見るか</th></tr>
<tr><td>初速の保存数</td><td>「あとで見返したい」と思われた数。強い反応として重く見る</td></tr>
<tr><td>翌朝の再生数</td><td>一晩でどこまで伸びたか。伸びが止まってないか</td></tr>
<tr><td>2日後の朝</td><td>さらに伸びたか。伸び続けていれば配信が広がっている</td></tr>
<tr><td>1週間後</td><td>最終的にどこまで届いたか。この投稿の「実力」の確定値</td></tr>
</table>
<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="じわ伸びと花火の形">
<line x1="40" y1="120" x2="310" y2="120" stroke="#cbd5e0"/>
<line x1="40" y1="20" x2="40" y2="120" stroke="#cbd5e0"/>
<polyline points="40,110 110,92 190,60 300,28" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="300" cy="28" r="5" fill="#b83280"/>
<text x="250" y="44" font-size="11" fill="#1e4e7e">○ じわ伸び</text>
<polyline points="40,108 80,40 130,116 300,118" fill="none" stroke="#a0aec0" stroke-width="3" stroke-dasharray="4 3"/>
<text x="86" y="32" font-size="11" fill="#718096">✗ 花火</text>
<text x="40" y="138" font-size="9" fill="#718096" text-anchor="middle">初速</text>
<text x="110" y="138" font-size="9" fill="#718096" text-anchor="middle">翌朝</text>
<text x="190" y="138" font-size="9" fill="#718096" text-anchor="middle">2日後</text>
<text x="300" y="138" font-size="9" fill="#718096" text-anchor="middle">1週間</text>
</svg>
<div class="figcap">最終数より「伸び方の曲線」が、直す場所を名指しする</div>
</div>
<div class="good"><b>○ 伸びる形</b> 初速そこそこ→翌朝伸び→2日後さらに→1週間でぐっと。ゆっくり広がり続けた良い投稿。同じ型を続ける。</div>
<div class="bad"><b>✗ 花火の形</b> 初速だけ高く、翌朝ピタッと停止。冒頭は刺さったが中身か締めが弱い。つかみは正解、中身を直す。</div>
<p><b>なぜ保存をいちばん重く見るか。</b>「いいね」は親指1本の一瞬の反応。だが「保存」は<b>「自分に必要だ、あとで使う」</b>という強い意思表示で、わざわざ引き出しにしまう手間をかけている。<strong>保存は「もっと欲しい」とフォロワーが手を挙げた印。</strong>手順集や言い回し集のように見返したい中身は保存されやすい。保存が多い型は、迷わずもう一度作っていい。</p>
<div class="warn">やりがちなミス＝<b>再生数を見る時刻がバラバラ</b>。翌朝といっても、ある日は7時・ある日は11時では比較にならない。<b>「毎朝8時に見る」と決めて固定する。</b>歯磨きの前に確認する、と生活の動作にひもづけると忘れない。</div>

<h2><span class="s">5</span>④ 分析メモ — ここが一番大事</h2>
<p>数字を取ったら、<strong>必ず仮説を一言書き残す。</strong>数字は「何が起きたか」しか教えない。「なぜ起きたか」を言葉にするのは自分の仕事だ。</p>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="言語化で検証できるデータに変わる">
<rect x="10" y="35" width="120" height="55" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="70" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">頭の中の読み</text>
<text x="70" y="76" text-anchor="middle" font-size="10" fill="#a0aec0">検証できない</text>
<path d="M138 62 L182 62" stroke="#b83280" stroke-width="2" marker-end="url(#a2)"/>
<text x="160" y="52" text-anchor="middle" font-size="9" fill="#b83280">書く</text>
<rect x="190" y="35" width="120" height="55" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="250" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">試せる仮説</text>
<text x="250" y="76" text-anchor="middle" font-size="10" fill="#2b6cb0">当たり外れを判定</text>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
</svg>
<div class="figcap">言語化＝頭の中の感覚を「検証できるデータ」に変える作業</div>
</div>
<p>書くのは2つだけ。<b>「伸びた／スベった理由」</b>と<b>「次にどう活かすか」</b>。完璧じゃなくていい、当てずっぽうでもいいから言葉にする。</p>
<div class="grp"><div class="gh">メモの書き方（この2行でいい）</div><div class="gb">
<div class="rule"><span class="rn">理由の仮説</span>なぜこの数字になったか<span class="gb2">例「冒頭の問いかけが刺さって最後まで見られた」</span></div>
<div class="rule"><span class="rn">次の一手</span>次の投稿で何を変える／続けるか<span class="gb2">例「同じ問いかけ型でテーマだけ変えてもう1本」</span></div>
</div></div>
<div class="vs">
<div class="l"><div class="t">✗ メモなし・感想だけ</div>「今日のはまあまあ伸びた。よかった。」→ 何も残らない。来月見ても、なぜ伸びたか思い出せない。</div>
<div class="r"><div class="t">○ 仮説を書いたメモ</div>「1時間後がいつもの3倍。冒頭1秒で結論を言い切ったのが効いた。次は同じ言い切りで別テーマ。音は無音、尺は15秒が効いてそう。」</div>
</div>
<div class="key">仮説は外れてもいい。<strong>外れた仮説も「この読みは違った」という立派なデータ。</strong>仮説→検証を繰り返すうち、自分の勝ち筋が言葉で説明できるようになる。「なぜか伸びた」ではなく「こう作ったから伸びた」と言えるようになる。</div>
<div class="note">つまずきポイント：「外したくないから確実なことしか書けない」と手が止まる。逆だ。外れた数だけ「違う道」が消え、勝ち筋が浮かぶ。当てる作業じゃなく、絞り込む作業だと思え。</div>

<h2><span class="s">6</span>週1回5分の健康診断</h2>
<p>毎投稿の記録とは別に、<strong>週1回・決まった曜日に5分だけ全体を見る。</strong>木を1本ずつ見るのが毎投稿、森全体を見るのが週次だ。</p>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="木と森">
<circle cx="60" cy="50" r="20" fill="#9cb8d6"/><rect x="56" y="68" width="8" height="22" fill="#718096"/>
<text x="60" y="108" text-anchor="middle" font-size="10" fill="#718096">毎投稿＝木</text>
<text x="160" y="62" text-anchor="middle" font-size="16" fill="#cbd5e0">+</text>
<g>
<circle cx="225" cy="45" r="13" fill="#2b6cb0"/><circle cx="255" cy="55" r="16" fill="#2b6cb0"/><circle cx="285" cy="48" r="12" fill="#2b6cb0"/>
<circle cx="240" cy="68" r="11" fill="#9cb8d6"/><circle cx="272" cy="70" r="10" fill="#9cb8d6"/>
</g>
<text x="255" y="108" text-anchor="middle" font-size="10" fill="#1e4e7e">週次＝森（流れ）</text>
</svg>
<div class="figcap">1本では誤差に見えるものが、週でならすと傾向になる</div>
</div>
<div class="check"><ul>
<li>☐ <b>最後の行動につながる割合</b>は先週より上か下か … 下がったら誘い文句（リンク・DM案内）を見直す合図</li>
<li>☐ <b>届いた割合（閲覧率）</b>は落ちてないか … 落ちたら最近の投稿が刺さってない</li>
<li>☐ <b>新規フォロワー数</b>は増えているか … 横ばい・減なら入口（プロフ・導線）か魅力が弱っている</li>
<li>☐ <b>感想・購入報告をストーリーに載せた</b>か … お客さんの声は強い証拠。週1で必ず拾う</li>
</ul></div>
<p>比べる相手は、よその誰かではなく<strong>先週の自分。</strong>行動につながる割合が落ちたなら、読まれてるのに最後の「誘い文句」で取りこぼしている。届いた割合が落ちたなら、そもそも届いてない。<strong>どの数字が落ちたかで、直す場所が変わる。</strong></p>
<div class="warn">全部いっぺんに直すな。落ちた数字を1つだけ選び、その週はそこだけ手を打つ。<b>一度に1ヶ所</b>が鉄則。複数いじると何が効いたか分からなくなる。料理の味付けで塩と砂糖を同時に足したら、どっちが効いたか分からないのと同じだ。</p></div>

<h2><span class="s">7</span>3ヶ月貯めると見えてくる4つ</h2>
<p>1本2本では何も見えない。だが3ヶ月貯まると、バラバラの点が線になり、<strong>自分だけの「勝ちパターン」</strong>が浮かぶ。</p>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="点が線になる">
<text x="79" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">✗ 1〜2本＝点</text>
<circle cx="40" cy="70" r="5" fill="#a0aec0"/><circle cx="80" cy="48" r="5" fill="#a0aec0"/><circle cx="110" cy="88" r="5" fill="#a0aec0"/>
<text x="79" y="118" text-anchor="middle" font-size="10" fill="#718096">偶然と実力の区別がつかない</text>
<line x1="160" y1="18" x2="160" y2="118" stroke="#e2e8f0"/>
<text x="245" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">○ 3ヶ月＝線</text>
<polyline points="186,92 216,78 246,60 276,42 304,28" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="304" cy="28" r="5" fill="#b83280"/>
<text x="245" y="118" text-anchor="middle" font-size="10" fill="#1e4e7e">偶然が消え、実力だけ残る</text>
</svg>
<div class="figcap">3ヶ月は「偶然をふるい落とすのに必要な量」。途中で投げるな</div>
</div>
<div class="fig">
<div class="tc"><div class="hd">時｜最強の投稿時間</div><div class="bd">曜日と時間を並べると最も伸びる帯が出る。<span class="lab">「火曜21時で毎回伸びる」が確定</span></div></div>
<div class="tc"><div class="hd">型｜勝ち筋の型</div><div class="bd">言い切り型・問いかけ型・物語型…どれが伸びるか。<span class="lab">ネタを変えて量産できる</span></div></div>
<div class="tc"><div class="hd">尺｜理想の秒数</div><div class="bd">最後まで見られた割合が一番高い秒数。<span class="lab">全部その尺に寄せる</span></div></div>
<div class="tc"><div class="hd">音｜伸びる音の傾向</div><div class="bd">流行りの音か・無音＋字幕か・声だけか。<span class="lab">傾向に寄せる</span></div></div>
</div>
<div class="flowbig">
<span>火曜21時</span><span>言い切り型</span><span>15秒</span><span class="is-goal">無音字幕</span>
</div>
<p>ここまで来ると、新しい投稿の迷いが消える。伸びる条件を自分で組み立てられる。<strong>これが再現性だ。</strong>まぐれで一度おいしくできるのと、レシピを持って毎回同じ味を出せるのは別の話。あなたが作るのは自分だけのレシピ。<strong>そしてこのレシピが、そのまま販売（ローンチ）の土台になる。</strong>「いつ・どう出せば届くか」を数字で握る人だけが、売りたい時に確実に届けられる。</p>

<h2><span class="s">8</span>★実演：直近の投稿1本を振り返る</h2>
<p>理屈はここまで。いま手元にある<strong>直近の1本</strong>を、その場でシートに落とす。<strong>「完璧に」より「まず1本やりきる」。</strong>1本やれば2本目から手が覚えている。</p>
<div class="step"><span class="sn">STEP1</span><span class="snm">基本情報を書く</span><p>投稿日・曜日・時間（分単位）／タイトル（冒頭のつかみそのまま）／音の特徴／秒数。例「6/10 火 21:15 ／『○○で損する人の共通点』／無音＋字幕／15秒」</p></div>
<div class="step"><span class="sn">STEP2</span><span class="snm">初速の3数字を入れる</span><p>1時間後の再生数・1時間の再生時間（分）・平均再生時間（秒）。時間が経った投稿は今の数字で代用し、次回から1時間後に取る。</p></div>
<div class="step"><span class="sn">STEP3</span><span class="snm">反応の数字を入れる</span><p>保存数・翌朝・2日後・1週間後の再生数。古い投稿は今わかるぶんを埋める。空欄があってもいい、まず1本やりきる。</p></div>
<div class="step"><span class="sn">STEP4</span><span class="snm">普段と比べる</span><p>初速は普段より上か下か。じわ伸びの形か、花火の形か。一言で判定。比べる相手は他人ではなく自分の普段。</p></div>
<div class="step"><span class="sn">STEP5</span><span class="snm">仮説を2行書く</span><p>「伸びた／スベった理由」と「次にどうするか」。これで1本ぶん完成。次の投稿から毎回やる。</p></div>
<div class="final">
<b>記入例（直近の1本）</b><br>
基本：6/10 火 21:15 ／「○○で損する人の共通点」／無音＋字幕／15秒<br>
初速：1時間後の再生数＝いつもの3倍／平均再生時間＝最後の方まで見られている<br>
反応：保存が普段より多い／翌朝もまだ伸びてる／花火じゃなく、じわ伸びの形<br>
仮説：冒頭1秒の言い切りで止められた。無音字幕で最後まで読まれた。<br>
次の一手：同じ言い切りつかみでテーマだけ変えて、今夜もう1本。火曜21時台に寄せる。
</div>
<div class="check"><ul>
<li>☐ 基本情報を、時間は分単位で書いたか</li>
<li>☐ 初速の3つの数字を取ったか（次回からは1時間後にアラーム）</li>
<li>☐ 自分の「普段」と比べて、上か下か判定したか</li>
<li>☐ 保存数・じわ伸びの形を見たか</li>
<li>☐ 仮説と次の一手を、一言でも文字にしたか</li>
<li>☐ 週1回の健康診断の曜日を決めたか</li>
</ul></div>

<div class="end">感覚は嘘をつく。先週の自分の数字だけが、本当のことを教えてくれる。<br>だから——伸びた理由を「思い出そう」とするな。<strong>毎投稿後5分、書いて残せ。</strong><br>3ヶ月続けると、運ではなく数字で当てられるようになる。Phase 2 完了。次は稼ぐフェーズへ。</div>
</div>
  `,

  'p5-overview': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>ローンチ＝「恋愛・告白」とまったく同じ、という全体像</li>
<li>販売の成否が「告白の前」でほぼ決まる理由</li>
<li>売上の方程式（リスト×成約率×単価）と、最初に頑張る場所</li>
<li>販売日までの4つの時期と、なぜその順番なのか</li>
<li>頭が固まらないための「まず1個だけ」の進め方</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>
<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="いきなり告白と順番を守る告白の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ いきなり告白</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 順番を守る</text>
<circle cx="50" cy="62" r="13" fill="#a0aec0"/><circle cx="108" cy="62" r="13" fill="#cbd5e0"/>
<path d="M68 62 L88 62" stroke="#b83280" stroke-width="2" marker-end="url(#a0)"/>
<defs><marker id="a0" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="79" y="96" text-anchor="middle" font-size="11" fill="#718096">出会ってすぐ「買って」</text>
<text x="79" y="112" text-anchor="middle" font-size="11" fill="#718096">＝当たり前に断られる</text>
<circle cx="200" cy="62" r="11" fill="#9cb8d6"/><circle cx="282" cy="62" r="11" fill="#2b6cb0"/>
<line x1="211" y1="62" x2="271" y2="62" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="231" cy="62" r="4" fill="#2b6cb0"/><circle cx="251" cy="62" r="4" fill="#2b6cb0"/>
<text x="241" y="96" text-anchor="middle" font-size="11" fill="#1e4e7e">毎日かけて仲良くなる</text>
<text x="241" y="112" text-anchor="middle" font-size="11" fill="#1e4e7e">＝「待ってました」になる</text>
</svg>
<div class="figcap">商品は悪くない。相手の心がまだ「買う準備」になってないだけ</div>
</div>
<div class="key">この教材ぜんぶを1つのたとえで通す。<strong>ローンチとは、お客に告白して「はい」をもらうまでの流れだ。</strong>販売は最後の「告白」、それ以外は全部「仲良くなる時間」。<strong>勝負は告白の日じゃない。告白の前で、もう決まっている。</strong></div>
<div class="flowbig"><span>出会う</span><span>仲良くなる</span><span>好きにさせる</span><span>告白＝販売</span><span class="is-goal">買ってもらう</span></div>

<h3>なぜ「たとえ」が恋愛なのか</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="販売と恋愛は同じ警戒">
<rect x="10" y="30" width="130" height="60" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="75" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">販売</text>
<text x="75" y="76" text-anchor="middle" font-size="10" fill="#1e4e7e">「売りつけ」が怖い</text>
<text x="160" y="65" text-anchor="middle" font-size="18" font-weight="700" fill="#b83280">＝</text>
<rect x="180" y="30" width="130" height="60" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="245" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">恋愛</text>
<text x="245" y="76" text-anchor="middle" font-size="10" fill="#8a4a6e">「踏み込まれる」が怖い</text>
<text x="160" y="108" text-anchor="middle" font-size="11" fill="#718096">奥で動く心理は同じ＝警戒をほどく作業</text>
</svg>
<div class="figcap">迷ったら「これ、好きな人にやったらどう感じる?」で考える</div>
</div>
<p><strong>嫌われる売り方は、たいてい恋愛でも嫌われる行動だ。</strong>この物差しがこの章の背骨になる。</p>

<h2><span class="s">1</span>販売は「点」、ローンチは「線」</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="点と線">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ いきなり告白＝点</text>
<circle cx="79" cy="65" r="9" fill="#a0aec0"/>
<text x="79" y="115" text-anchor="middle" font-size="11" fill="#718096">一発で「誰? 怪しい」</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="245" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 順番を守る＝線</text>
<polyline points="186,95 216,80 246,62 276,42 304,28" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="186" cy="95" r="5" fill="#2b6cb0"/><circle cx="216" cy="80" r="5" fill="#2b6cb0"/><circle cx="246" cy="62" r="5" fill="#2b6cb0"/><circle cx="276" cy="42" r="5" fill="#2b6cb0"/><circle cx="304" cy="28" r="5" fill="#b83280"/>
<text x="245" y="115" text-anchor="middle" font-size="11" fill="#1e4e7e">毎日が積み上がり信頼になる</text>
</svg>
<div class="figcap">告白の成功は、告白そのものでなく"その前の毎日"で決まる</div>
</div>
<p>人は1回の名スピーチでは惚れない。惚れるのは「毎日この人を見てきた」積み重ねの結果だ。<strong>本当に効いているのは、販売日に至るまでの線だ。</strong></p>
<div class="warn">迷ったら必ずここに戻る。<b>「これ、告白の前にやることだっけ? それとも告白そのものだっけ?」</b>これを自問するだけで、やる順番を間違えなくなる。</div>

<h2><span class="s">2</span>まず持つべき3つの心構え</h2>
<p>手順はあとから直せるが、姿勢のズレは文章のすみずみから漏れる。だから土台の3つを先に入れる。</p>
<div class="tc"><div class="hd">① 追いかけるな、好きにさせろ</div><div class="bd">
<div class="bad"><b>✗</b>「今すぐ買って! 残りわずか! 急いで!」を毎回連呼</div>
<div class="good"><b>○</b>「合う人だけでいい。いらない人は読み流してね」</div>
<span class="lab">奥の理由：</span>人は追われると逃げ、選ばせてもらえると前に出る。決定権を相手に返すから欲しくなる。</div></div>

<div class="tc"><div class="hd">② 主役は「私」じゃなく「あなた」</div><div class="bd">
<div class="vs"><div class="l"><div class="t">✗ 自慢</div>「私はこうやって成功した」→他人事で流れる</div><div class="r"><div class="t">○ 鏡</div>「あなた、こういうことで困ってない?」→立ち止まる</div></div>
<span class="lab">奥の理由：</span>人は自分の話にしか興味がない。投稿は読み手が自分を映す"鏡"でなければいけない。書いたら「私」の数を数える。</div></div>

<div class="tc"><div class="hd">③ 先に与える</div><div class="bd">タダで「もう元取れた」と思える手引きを1本渡す。<span class="lab">奥の理由：</span>人は良くしてもらうと返したくなる。出し惜しみした瞬間「撒き餌か」とバレて警戒が強まる。<b>出し切ること自体が信用の証拠</b>になる。</div></div>

<h2><span class="s">3</span>必ず灯す「2つの自分」</h2>
<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="2つの関門">
<rect x="14" y="30" width="120" height="80" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="74" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">関門①</text>
<text x="74" y="80" text-anchor="middle" font-size="12" fill="#8a4a6e">これ、自分のことだ</text>
<text x="74" y="98" text-anchor="middle" font-size="10" fill="#8a4a6e">無いと読まれない</text>
<path d="M138 70 L182 70" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a3)"/>
<defs><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker></defs>
<rect x="186" y="30" width="120" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="246" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">関門②</text>
<text x="246" y="80" text-anchor="middle" font-size="12" fill="#1e4e7e">自分にもできる</text>
<text x="246" y="98" text-anchor="middle" font-size="10" fill="#1e4e7e">無いと感心で終わる</text>
<text x="160" y="130" text-anchor="middle" font-size="11" fill="#718096">この順番を両方通って初めて「やってみよう」になる</text>
</svg>
<div class="figcap">ダイエット広告：「下っ腹だけ落ちないあなたへ」→「運動が苦手でも続けられた」</div>
</div>
<div class="vs">
<div class="l"><div class="t">✗ 片方だけ</div>①だけ→痛い所を突かれて「でも無理」。②だけ→「すごいね」で終わり、自分の話だと思わない。</div>
<div class="r"><div class="t">○ 両方そろう</div>まず①で足を止めさせ、次に②でハードルを下げる。この順番でだけ動く。</div>
</div>
<div class="warn">よくある失敗＝実績ばかり語って②を作り損ねる。実績を出すほど「すごい人。私とは違う」と離れる。<b>実績は"自慢"でなく「だからあなたもできる証拠」</b>として、必ず「だからあなたにもできる」とセットで出す。</div>

<h2><span class="s">4</span>売上の方程式</h2>
<div class="eq"><div class="eq-box is-key">売上</div><div class="eq-op">=</div><div class="eq-box">リスト数<small>来る人の数</small></div><div class="eq-op">×</div><div class="eq-box">成約率<small>買う割合</small></div><div class="eq-op">×</div><div class="eq-box">単価<small>1人の額</small></div></div>
<div class="figcap">カレー屋＝「客数 × 注文した割合 × 1皿の値段」。レバーは3つだけ</div>
<table>
<tr><th>レバー</th><th>意味</th><th>特徴</th></tr>
<tr><td>リスト</td><td>来てくれる人の数</td><td>集めるのに時間がかかる。前もって貯める</td></tr>
<tr><td>成約率</td><td>買う人の割合</td><td>ローンチの腕で一番伸ばせる</td></tr>
<tr><td>単価</td><td>1人あたりの金額</td><td>より手厚い次の商品で上がる</td></tr>
</table>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="掛け算は一番細い所が上限">
<rect x="20" y="40" width="40" height="60" rx="6" fill="#cbd5e0"/>
<text x="40" y="115" text-anchor="middle" font-size="10" fill="#718096">リスト(細)</text>
<text x="78" y="78" text-anchor="middle" font-size="16" fill="#a0aec0">×</text>
<rect x="96" y="20" width="40" height="80" rx="6" fill="#2b6cb0"/>
<text x="116" y="115" text-anchor="middle" font-size="10" fill="#1e4e7e">成約率</text>
<text x="154" y="78" text-anchor="middle" font-size="16" fill="#a0aec0">×</text>
<rect x="172" y="20" width="40" height="80" rx="6" fill="#2b6cb0"/>
<text x="192" y="115" text-anchor="middle" font-size="10" fill="#1e4e7e">単価</text>
<text x="230" y="78" text-anchor="middle" font-size="16" fill="#a0aec0">=</text>
<rect x="252" y="62" width="50" height="38" rx="6" fill="#b83280"/>
<text x="277" y="115" text-anchor="middle" font-size="10" fill="#b83280">売上(小)</text>
</svg>
<div class="figcap">掛け算だから、一番細い所が全体の上限を決める。0に何を掛けても0</div>
</div>
<div class="warn">初心者がまずやるのは<b>「リストを増やす」</b>。成約率や単価は明日からでも直せるが、リストは貯まるのに時間がかかる。<b>時間がかかるものから先に手を付ける</b>のが鉄則。</div>
<div class="note">つまずき：コピーやテクは楽しいから成約率を上げたがる。でも母数が小さいと、倍に磨いても増える人数はわずか。先に母数を太らせてから磨く。</div>

<h2><span class="s">5</span>販売日までの地図（4つの時期）</h2>
<table>
<tr><th>恋愛でいうと</th><th>ローンチでいうと</th></tr>
<tr><td>出会う</td><td>投稿を見つけてもらう・フォローされる</td></tr>
<tr><td>仲良くなる</td><td>毎日発信して「いい人だな」と思わせる</td></tr>
<tr><td>好きにさせる</td><td>タダで価値を渡す・悩みを代弁する</td></tr>
<tr><td>告白する</td><td>商品を案内する（販売）</td></tr>
<tr><td>付き合う</td><td>買ってもらう・お客になる</td></tr>
</table>
<div class="tl">
<div class="slot"><span class="time">時期①</span><div class="w2"><b>プレローンチ前半｜出会う・仲良くなる</b><br>毎日発信して「いい人だな」を積む。ここでは売らない。痛みの代弁と共感が主役。スイッチ①「自分のことだ」を毎日灯す。</div></div>
<div class="slot"><span class="time">時期②</span><div class="w2"><b>プレローンチ後半｜好きにさせる</b><br>タダで価値を渡す（無料プレゼント・無料の手引き）。「タダなのにここまで?」で信頼を積み、同時にリストを集める。</div></div>
<div class="slot"><span class="time">時期③</span><div class="w2"><b>反論処理｜不安を消す</b><br>「自分にもできる」を積む。証拠・実例・自己開示で、買えない壁（3つの不信）を1つずつ壊す。</div></div>
<div class="slot"><span class="time">時期④</span><div class="w2"><b>販売｜告白する</b><br>抗えないオファーを出す。「あなたの話＋あなたにもできる」を最大化。締切と限定で背中を押す。</div></div>
</div>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="心が温まる順番">
<rect x="8" y="46" width="60" height="34" rx="9" fill="#eaf1f8" stroke="#9cb8d6"/><text x="38" y="67" text-anchor="middle" font-size="11" fill="#1e4e7e">①いい人</text>
<rect x="86" y="46" width="60" height="34" rx="9" fill="#cfe0f0" stroke="#9cb8d6"/><text x="116" y="67" text-anchor="middle" font-size="11" fill="#1e4e7e">②タダ価値</text>
<rect x="164" y="46" width="60" height="34" rx="9" fill="#9cb8d6"/><text x="194" y="67" text-anchor="middle" font-size="11" fill="#fff">③不安消す</text>
<rect x="242" y="46" width="68" height="34" rx="9" fill="#b83280"/><text x="276" y="67" text-anchor="middle" font-size="11" fill="#fff">④告白</text>
<path d="M68 63 L84 63" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a5)"/>
<path d="M146 63 L162 63" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a5)"/>
<path d="M224 63 L240 63" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a5)"/>
<defs><marker id="a5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker></defs>
<text x="160" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">1つ前が済まないと次が空回りする</text>
<text x="160" y="105" text-anchor="middle" font-size="11" fill="#718096">人の心が温まる順番は飛ばせない</text>
</svg>
<div class="figcap">知らない人はタダの価値も「裏があるのでは」と受け取らない。だから順番</div>
</div>
<div class="key">販売（時期④）は全体のほんの一部。<strong>勝負は①〜③でほぼ決まる。</strong>①〜③をていねいにやれば、④は「案内するだけ」で売れる。<strong>販売日に汗をかいているなら、準備不足の証拠だ。</strong></div>

<h3>各時期で初心者がつまずく点</h3>
<div class="step"><span class="sn">時期①</span><span class="snm">早く売りたくて出会ってすぐ商品を出す</span><br>→「いきなり告白」で逃げられる。売らずに我慢して共感を積む。</div>
<div class="step"><span class="sn">時期②</span><span class="snm">タダで渡すのが惜しくてケチる</span><br>→信頼が溜まらない。「もう元取れた」レベルまで出し切る。</div>
<div class="step"><span class="sn">時期③</span><span class="snm">自分の実績だけ並べる</span><br>→「すごいね、でも私は無理」で終わる。お客と同じ立場の人の実例を出す。</div>
<div class="step"><span class="sn">時期④</span><span class="snm">締切を作らない</span><br>→「あとで考える」で永遠に買われない。期限と限定を必ず置く。</div>
<div class="warn">4つの根っこは1つ。<b>「早く結果がほしくて、相手の心が温まる前に次へ進む」こと。</b>一番試されるのはテクニックより「相手のペースを待てるか」だ。</div>

<h2><span class="s">6</span>販売前に「断る理由」をゼロにする</h2>
<p>告白を断られる理由は3つしかない。これを<strong>販売日が来る前に</strong>消すのが①〜③の仕事だ。</p>
<div class="tc"><div class="hd">壁① 手段への不信</div><div class="bd">本音：「これ本当にうまくいくの?」<br>壊し方：<b>実例＝事実を見せる。</b><span class="lab">奥の理由：</span>人は言われたことより自分で見たものを信じる。</div></div>
<div class="tc"><div class="hd">壁② 自分への不信</div><div class="bd">本音：「他の人はできても私には無理」<br>壊し方：<b>普通の人ができた話を見せる。</b><span class="lab">奥の理由：</span>「あの人にできたなら」と地続きに感じられる。</div></div>
<div class="tc"><div class="hd">壁③ 発信者への不信</div><div class="bd">本音：「この人、信じていい? 怪しくない?」<br>壊し方：<b>自己開示・ダサい過去も見せる。</b><span class="lab">奥の理由：</span>完璧な人より欠点を見せる人が「正直だ」と信じられる。</div></div>
<div class="key"><strong>3つの不信が全部消えた時、人は「断る理由がない」状態になる。</strong>そこで初めて告白すれば「はい」がもらえる。</div>
<p>販売日にやるのは「説得」じゃない。壁が消えたお客に<b>「準備できたよ、どうぞ」と案内するだけ。</b>必死さは「売れてない人のサイン」として伝わり、新しい不信を生む。</p>

<h2><span class="s">7</span>初心者の進め方｜まず「1個だけ」</h2>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="やること多すぎと1個ずつ">
<rect x="0" y="20" width="150" height="70" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">✗ 全部一度に</text>
<circle cx="40" cy="62" r="5" fill="#cbd5e0"/><circle cx="60" cy="58" r="5" fill="#cbd5e0"/><circle cx="80" cy="66" r="5" fill="#cbd5e0"/><circle cx="100" cy="56" r="5" fill="#cbd5e0"/><circle cx="55" cy="74" r="5" fill="#cbd5e0"/><circle cx="95" cy="74" r="5" fill="#cbd5e0"/>
<text x="75" y="100" text-anchor="middle" font-size="10" fill="#718096">「無理だ」で固まる</text>
<rect x="170" y="20" width="150" height="70" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">○ 1個ずつ</text>
<rect x="232" y="54" width="26" height="20" rx="5" fill="#2b6cb0"/><text x="245" y="68" text-anchor="middle" font-size="11" fill="#fff">これ</text>
<text x="245" y="100" text-anchor="middle" font-size="10" fill="#1e4e7e">「これなら」で動ける</text>
</svg>
<div class="figcap">枠を狭く「まずこれだけ」と示すほど人は動ける。作り手の自分にも効く</div>
</div>
<div class="step"><span class="sn">STEP1</span><span class="snm">誰に告白するか1人決める</span><br>たった1人のお客を思い浮かべ、「今のつらい1日」と「理想の1日」を映像が浮かぶレベルで書く。名前・年齢・口グセまで決める。<br><b>なぜ1人か：</b>「みんな」に書くと誰も自分のことだと思わない。1人に絞るほど、同じ悩みの大勢に刺さる。</div>
<div class="step"><span class="sn">STEP2</span><span class="snm">タダで渡すものを1個作る</span><br>無料プレゼント（手引き・チェックリスト）を1個。「タダなのにここまで?」の中身に。これが時期②の主役。<br><b>なぜ：</b>受け取った人に"返したい気持ち"が積まれ、後の告白が通る。</div>
<div class="step"><span class="sn">STEP3</span><span class="snm">リストを集める器を1個置く</span><br>「メッセージで合言葉を送ってくれた人に渡す」など、連絡先が貯まる形に。掛け算の一番左を太くする準備。<br><b>なぜ：</b>連絡先が残る形にして初めて、後でもう一度会いに行ける。</div>
<div class="step"><span class="sn">STEP4</span><span class="snm">毎日「自分のことだ」を1投稿</span><br>時期①。お客の痛みを代弁する投稿を毎日1本。売らない。共感だけ。<br><b>なぜ毎日1本でいいか：</b>信頼は大作でなく積み重ねで貯まる。続くこと自体が「いつもいる」安心になる。</div>
<div class="step"><span class="sn">STEP5</span><span class="snm">壁を壊す投稿を3本用意</span><br>時期③。3つの不信（手段・自分・発信者）を1つずつ壊す投稿を販売前に作る。販売日が「案内するだけ」になる。<br><b>なぜ3本か：</b>不信は3種類あり効く薬が違う。1本ずつ別々に当てる。</div>
<div class="step"><span class="sn">STEP6</span><span class="snm">締切つきで案内する</span><br>時期④。オファーを出し、期限と限定で背中を押す。ここで初めて「告白」する。<br><b>なぜ締切が要るか：</b>「いつでも買える」は「今は買わなくていい」と同じ。締切は急かす道具でなく、迷う人が決めるための区切り。</div>
<div class="key">細かいやり方（オファー・物語の型・心理スイッチ）は別の章でやる。<strong>今は「全体がこの順番で進む」地図を頭に入れるのが最優先。</strong></div>

<h2><span class="s">8</span>この章のまとめ</h2>
<div class="flowbig"><span>順番がすべて</span><span>勝負は告白の前</span><span>リストを先に太く</span><span>2つの自分</span><span class="is-goal">3つの不信を消す</span></div>
<div class="stats">
<div class="stat-c"><div class="n">順番</div><div class="l">出会う→仲良く→好きに→告白。心が温まる順は飛ばせない</div></div>
<div class="stat-c"><div class="n">前で決まる</div><div class="l">販売日に汗をかくのは準備不足の証拠</div></div>
<div class="stat-c"><div class="n">掛け算</div><div class="l">一番左が0なら全部0。時間のかかるリストを先に</div></div>
</div>
<div class="check"><ul>
<li>ローンチ＝恋愛の「順番」だと説明できる?</li>
<li>「告白の前で勝負が決まる」のはなぜか言える?</li>
<li>売上の3つのレバーを言える?（リスト・成約率・単価）</li>
<li>まず太くするのはどれ?（リスト）とその理由は?</li>
<li>「2つの自分」を順番つきで、なぜその順番かまで言える?</li>
<li>販売日までの4つの時期を順番に並べられる?</li>
<li>3つの不信と、効く壊し方が違う理由を言える?</li>
<li>自分の最初の一歩（STEP1の「誰に」）を1人決めた?</li>
</ul></div>
<div class="end">ローンチは「販売日の魔法」じゃない。<br><strong>告白の前に、毎日コツコツ好きにさせた人だけが「はい」をもらえる手紙だ。</strong><br>だから——販売日に売り込むな。<strong>その前に、好きにさせろ。</strong></div>
</div>
  `,
  'p5-target': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>ローンチで一番最初にやるのが「誰に売るか」である理由</li>
<li>なぜ「みんな」じゃなく「たった1人」に絞ると、かえって多くに刺さるのか</li>
<li>顔が浮かぶ1人を決める6ステップ（選ぶ→Before→After→欲求→本音→言葉）</li>
<li>財布を開かせる「深い本音」の掘り方（9つの欲求・4階層）</li>
<li>ターゲットが決まると、商品もストーリーも全部逆算で決まる仕組み</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>
<p>ローンチで失敗する人の大半は、同じ場所でつまずく。<strong>「誰に売るか」を決めないまま、商品を作り始めることだ。</strong></p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="あなたが売っているのは商品でなく移動">
<rect x="6" y="36" width="86" height="78" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="49" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">Before（今）</text>
<circle cx="49" cy="62" r="13" fill="#a0aec0"/><rect x="34" y="78" width="30" height="26" rx="8" fill="#a0aec0"/>
<text x="49" y="132" text-anchor="middle" font-size="10" fill="#718096">つらい自分</text>
<rect x="228" y="36" width="86" height="78" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="271" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">After（理想）</text>
<circle cx="271" cy="62" r="13" fill="#2b6cb0"/><rect x="256" y="78" width="30" height="26" rx="8" fill="#2b6cb0"/>
<text x="271" y="132" text-anchor="middle" font-size="10" fill="#1e4e7e">なりたい自分</text>
<path d="M100 75 L220 75" stroke="#b83280" stroke-width="3" marker-end="url(#a0)"/>
<defs><marker id="a0" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="160" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">商品＝移動の手段</text>
</svg>
<div class="figcap">お客が買うのは商品じゃない。Before→Afterの"移動"だ</div>
</div>

<div class="key">合言葉は<strong>「みんなに売るな、1人に売れ」</strong>。ターゲットは"層"じゃない。<strong>顔が浮かぶ、生身の1人</strong>だ。その1人が今どこにいて、どこに行きたいか分からなければ、何を作っても売れない。</div>

<div class="warn">ターゲット選定の目的は「客層を絞ること」じゃない。<b>「1人の移動を、つらさも理想も含めて全部見えるようにすること」だ。</b>絞り込みは、その1人を高い解像度で見るための手段でしかない。</div>

<h2><span class="s">1</span>なぜ「1人」に絞ると、かえって多くに刺さるのか</h2>
<p>「できるだけ多くの人に買ってほしい」。気持ちはわかる。でもこれが一番の落とし穴だ。<strong>みんなに向けて書くほど、誰の心にも刺さらない。</strong></p>

<div class="vs">
<div class="l"><div class="t">✗ みんなに向けて（ぼんやり）</div>「日々の生活、もっと良くしたい？将来のお金も気になる？新しい働き方、始めてみない？」→ 全員に当てはまるけど<b>誰も「これ私だ」と思わない</b></div>
<div class="r"><div class="t">○ たった1人に向けて（くっきり）</div>「日曜の夜、サザエさんが終わると胸が重くなる。月曜が憂鬱で、でも転職する勇気もなくて…じゃない？」→ <b>「なんで私の日曜の夜を知ってるの」</b>と刺さる</div>
</div>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="太陽の光と虫めがね">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗「みんなに」＝太陽の光</text>
<circle cx="44" cy="50" r="14" fill="#cbd5e0"/>
<line x1="44" y1="68" x2="34" y2="118" stroke="#cbd5e0" stroke-width="2"/>
<line x1="64" y1="60" x2="78" y2="112" stroke="#cbd5e0" stroke-width="2"/>
<line x1="24" y1="60" x2="14" y2="112" stroke="#cbd5e0" stroke-width="2"/>
<rect x="10" y="118" width="120" height="14" fill="#edf2f7"/>
<text x="79" y="146" text-anchor="middle" font-size="10" fill="#718096">広く照らすが焦がせない</text>
<line x1="160" y1="24" x2="160" y2="138" stroke="#e2e8f0"/>
<text x="245" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○「1人に」＝虫めがね</text>
<circle cx="222" cy="48" r="14" fill="#fde68a" stroke="#d69e2e"/>
<line x1="222" y1="62" x2="245" y2="100" stroke="#d69e2e" stroke-width="2"/>
<line x1="240" y1="58" x2="248" y2="98" stroke="#d69e2e" stroke-width="2"/>
<line x1="204" y1="58" x2="242" y2="98" stroke="#d69e2e" stroke-width="2"/>
<circle cx="247" cy="106" r="6" fill="#b83280"/>
<path d="M247 112 q-4 8 0 16" stroke="#a0aec0" stroke-width="2" fill="none"/>
<text x="245" y="146" text-anchor="middle" font-size="10" fill="#1e4e7e">一点に集めるから貫通する</text>
</svg>
<div class="figcap">同じメッセージでも、一点に集めるから人の心に煙が立つ</div>
</div>

<p><b>奥にある理由：</b>人は、自分に向けられた言葉にしか反応しない。<strong>「みんなへ」は、裏を返せば「あなた個人へではない」という意味になる。</strong>駅の「皆さまご注意ください」を自分ごとに聞く人はいない。でも改札で名指しで呼び止められたら、全員が振り返る。</p>

<div class="key">大事なのはここ。<strong>1人に向けて尖らせるほど、その人と"似た人みんな"に刺さる。</strong>日曜の夜に胸が重くなる人は山ほどいる。絞ることは客を捨てることじゃない。似た客をまとめて呼ぶことだ。</div>

<div class="warn">よくある失敗＝<b>「20〜40代の働く人みんな」</b>みたいな広いターゲット。これは絞れてない。<b>顔が1人、はっきり浮かぶところまで</b>絞る。名前・年齢・口ぐせまで言えたら合格。</div>

<h2><span class="s">2</span>ターゲットを決めると、全部が逆算で決まる</h2>
<p>なぜこの作業を一番最初にやるのか。<strong>ターゲットさえ決まれば、後ろの工程が全部「逆算」で決まる</strong>からだ。</p>

<div class="flowbig">
<span>ターゲット（1人）</span><span>商品＝乗り物</span><span class="is-goal">ストーリー＝育てる</span>
</div>

<table>
<tr><th>順番</th><th>やること</th><th>中身</th></tr>
<tr><td><b>最初</b></td><td>ターゲット（1人）</td><td>顔が浮かぶ、生身の1人を決める</td></tr>
<tr><td><b>次</b></td><td>商品</td><td>その1人のBeforeをAfterへ運ぶ"乗り物"を作る</td></tr>
<tr><td><b>最後</b></td><td>ストーリー</td><td>その1人の痛み・言葉・思い込みを使って毎日育てる</td></tr>
</table>

<p><b>なぜこの順番か：</b>商品もストーリーも、「誰の何を解決するか」が決まって初めて中身が決まる。順番を逆にすると<strong>土台のない家を建てる</strong>ことになる。話しかける相手の顔がないまま、いい言葉は出てこない。</p>

<div class="key">順番が命だ。<strong>ここを飛ばすと、後で必ず全部やり直しになる。</strong>ここで決めた1人が、後ろの全工程の"設計図"になる。だから一番最初にやり、一番時間をかける価値がある。</div>

<h2><span class="s">3</span>ステップ1：まず「1人」を選ぶ</h2>
<p>実在する（した）生身の1人を選ぶ。想像で作った理想の客じゃダメだ。<strong>リアルに顔・声・口ぐせが浮かぶ1人</strong>を選ぶ。</p>

<div class="ladder">
<div class="rung"><span class="rk">① 過去の自分</span>変わる前の自分。悩みも言葉も全部知ってるから最強</div>
<div class="rung"><span class="rk">② 実在する友人・知人</span>その悩みを今まさに抱えてる人。顔を浮かべて書ける</div>
<div class="rung"><span class="rk">③ すでにいる客・フォロワー</span>似たDMをくれる人。生の言葉がそのまま手に入る</div>
</div>

<div class="good"><b>○ 良い記入例</b>「3年前の自分。25歳、会社員。給料が上がらず、このままでいいのか毎日モヤモヤしてた頃。日曜の夜になると次の日が憂鬱で、でも何から変えればいいか分からなかった」</div>
<div class="bad"><b>✗ 悪い記入例</b>「向上心のある20〜30代の社会人」← 顔が浮かばない。"層"であって"1人"じゃない</div>

<p><b>奥にある理由：</b>想像で作った客は、自分の都合のいいように歪む。「こう悩んでるはず」という願望が混ざって、実在しない"きれいな客"ができる。きれいな客は現実とズレてるから、誰にも刺さらない。<strong>実在の1人なら歪めようがない。事実だけが残る。</strong></p>

<div class="key">迷ったら<strong>「過去の自分」</strong>を選べ。あなたが乗り越えた悩みで止まってる人はたくさんいる。あなたはその"少し先"を歩いた<strong>先生じゃなく先輩</strong>だ。先生は上から教えるが、先輩は隣で「俺もそこで詰まった」と言える。</div>

<h2><span class="s">4</span>ステップ2：「今」と「理想」を書く（Before→After）</h2>
<p>選んだ1人の<strong>Before（今のつらい毎日）</strong>と<strong>After（なりたい未来）</strong>を、映像が浮かぶレベルまで具体的に書く。</p>

<div class="vs">
<div class="l"><div class="t">Before（今のつらい毎日）</div>・日曜の夜が憂鬱で眠れない<br>・給料日に通帳を見てため息<br>・変わりたいのに何も動けてない<br>・同年代がキラキラ見えて焦る</div>
<div class="r"><div class="t">After（なりたい未来）</div>・平日の昼間に自由がある<br>・お金に少し余裕ができる<br>・自分で稼げるという自信<br>・「私、変われた」と思える</div>
</div>

<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="渡し舟と価格は距離で決まる">
<path d="M0 104 q160 22 320 0 v36 h-320 z" fill="#dbeafe"/>
<rect x="6" y="58" width="78" height="46" rx="8" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="45" y="84" text-anchor="middle" font-size="11" fill="#718096">こっち岸</text>
<text x="45" y="50" text-anchor="middle" font-size="10" fill="#718096">Before</text>
<rect x="236" y="58" width="78" height="46" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="275" y="84" text-anchor="middle" font-size="11" fill="#1e4e7e">向こう岸</text>
<text x="275" y="50" text-anchor="middle" font-size="10" fill="#1e4e7e">After</text>
<path d="M132 96 l56 0 l-8 14 l-40 0 z" fill="#b83280"/>
<rect x="150" y="78" width="20" height="18" rx="3" fill="#fff" stroke="#b83280"/>
<text x="160" y="124" text-anchor="middle" font-size="10" fill="#b83280">商品＝渡し舟</text>
<path d="M88 36 L232 36" stroke="#1e4e7e" stroke-width="1.5" marker-start="url(#aL)" marker-end="url(#aR)"/>
<defs><marker id="aR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#1e4e7e"/></marker><marker id="aL" markerWidth="8" markerHeight="8" refX="0" refY="3" orient="auto"><path d="M6 0 L0 3 L6 6 z" fill="#1e4e7e"/></marker></defs>
<text x="160" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">この距離が大きいほど価格が上がる</text>
</svg>
<div class="figcap">価格を正当化するのは、岸と岸の距離そのものだ</div>
</div>

<div class="warn">一番つまずくのが<b>「抽象的に書く」</b>こと。「毎日がつらい」「幸せになりたい」はダメ。<b>「いつ・どこで・何をしてる瞬間か」まで描く。</b>「お金がない」じゃなく「給料日に通帳を見てため息をつく瞬間」。</div>

<p><b>奥にある理由：</b>人の脳は、抽象では映像を作れない。<strong>映像が浮かんで初めて感情が動く。</strong>「給料日に通帳を見てため息」と書くと、読み手は自分が通帳を見た瞬間を思い出す。その瞬間、他人の話が自分の記憶とつながって「それ、まさに私だ」になる。</p>

<div class="key">💡 超重要。<strong>商品とは、BeforeをAfterへ運ぶ"乗り物"だ。</strong>「今」と「理想」の距離が大きいほど、その乗り物の価値は高くなる。両方くっきり描くほど、商品が高く売れる。</div>

<h2><span class="s">5</span>ステップ3：「9つの欲求」で掘る</h2>
<p>その1人が本当は何を欲しがってるか。1つの角度だと浅くなるから<strong>9つの角度から書き出す。</strong>埋まるところから埋めればOK。</p>

<table>
<tr><th>欲求</th><th>掘る質問</th><th>記入例</th></tr>
<tr><td><b>快楽追求</b></td><td>何を手に入れたい？</td><td>時間とお金の自由／好きな時に旅行</td></tr>
<tr><td><b>損失回避</b></td><td>何が一番こわい？</td><td>このまま何者にもなれず歳をとること</td></tr>
<tr><td><b>承認</b></td><td>誰に認められたい？</td><td>同年代を見返したい／親に誇りたい</td></tr>
<tr><td><b>つながり</b></td><td>どんな仲間がほしい？</td><td>同じ志の仲間・応援してくれる人</td></tr>
<tr><td><b>自由</b></td><td>何から解放されたい？</td><td>満員電車・上司・時間の縛り</td></tr>
<tr><td><b>自己実現</b></td><td>どんな自分になりたい？</td><td>「何者か」になりたい・自立したい</td></tr>
<tr><td><b>安心</b></td><td>どんな不安を消したい？</td><td>将来のお金・収入が1つだけの不安</td></tr>
<tr><td><b>必要</b></td><td>何が必要？</td><td>何から始めるかの手順・やり方</td></tr>
<tr><td><b>共感</b></td><td>「それ私だ」の瞬間は？</td><td>SNSで同年代を見て落ち込む</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="欲求は細い糸の束">
<g stroke="#cbd5e0" stroke-width="2" fill="none">
<path d="M20 30 q60 0 110 28"/><path d="M20 46 q60 4 110 14"/><path d="M20 62 q60 0 110 0"/><path d="M20 78 q60 -4 110 -14"/><path d="M20 94 q60 0 110 -28"/>
</g>
<text x="14" y="14" font-size="10" fill="#718096">9つの細い糸（欲求）</text>
<rect x="130" y="50" width="40" height="24" rx="6" fill="#1e4e7e"/>
<text x="150" y="66" text-anchor="middle" font-size="10" fill="#fff">束</text>
<path d="M170 62 L228 62" stroke="#b83280" stroke-width="3" marker-end="url(#a9)"/>
<defs><marker id="a9" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<rect x="232" y="44" width="82" height="36" rx="8" fill="#fff5fa" stroke="#b83280"/>
<text x="273" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">買うという決断</text>
</svg>
<div class="figcap">欲求は1本の柱じゃない。何本もの糸が束になって財布が開く</div>
</div>

<p><b>奥にある理由：</b>人はたった1つの理由で物を買わない。<strong>表向きの理由（時間がほしい）と、裏の理由（自由になりたい）と、もっと奥の理由（自分に価値があると思いたい）が重なって財布が開く。</strong>だから9つの角度から光を当てて、束の全体を見る。</p>

<div class="key">9マスが埋まると、ストーリーのネタが9個手に入る。「自由」のマスからは満員電車の話。「承認」のマスからは見返したい話。<strong>1マス＝1本のストーリー</strong>になる。ネタ切れの正体は、実は「ターゲットを掘り切れていないこと」だ。</div>

<div class="note">つまずきポイント：9マス全部を無理に埋めようとして手が止まる。空欄でいい。むしろ<b>「強く埋まったマス」がその人の一番の動機</b>だ。濃いマスから順にストーリーにする。</div>

<h2><span class="s">6</span>ステップ4：「本音」まで掘る（4階層）</h2>
<p>この章で一番大事なところだ。<strong>人は浅い欲求しか口に出さない。でも実際に財布を開かせるのは、深い欲求のほうだ。</strong></p>

<div class="vfig">
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="欲求の4階層ビル">
<rect x="70" y="120" width="180" height="34" rx="4" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="84" y="135" font-size="11" font-weight="700" fill="#1e4e7e">1階</text>
<text x="160" y="141" text-anchor="middle" font-size="11" fill="#1e4e7e">お金・時間がほしい（口に出すのはここだけ）</text>
<rect x="80" y="84" width="160" height="32" rx="4" fill="#cfe0f0" stroke="#2b6cb0"/>
<text x="92" y="98" font-size="11" font-weight="700" fill="#1e4e7e">2階</text>
<text x="165" y="104" text-anchor="middle" font-size="11" fill="#1e4e7e">自信・安心がほしい</text>
<rect x="90" y="50" width="140" height="30" rx="4" fill="#b9d3ec" stroke="#2b6cb0"/>
<text x="101" y="64" font-size="11" font-weight="700" fill="#1e4e7e">3階</text>
<text x="165" y="69" text-anchor="middle" font-size="11" fill="#1e4e7e">認められたい・見返したい</text>
<rect x="100" y="18" width="120" height="28" rx="4" fill="#1e4e7e"/>
<text x="111" y="31" font-size="11" font-weight="700" fill="#fff">4階</text>
<text x="168" y="36" text-anchor="middle" font-size="10.5" fill="#fff">なりたい自分（本人も自覚なし）</text>
<text x="14" y="40" font-size="10" fill="#b83280">深い</text><text x="14" y="142" font-size="10" fill="#718096">浅い</text>
</svg>
<div class="figcap">1階で人を集めて、深い階で刺す。これが核心だ</div>
</div>

<table>
<tr><th>口で言う（表）</th><th>本当の動機（裏）</th></tr>
<tr><td>「お金を稼ぎたい」</td><td>自信がほしい・見返したい・自立したい</td></tr>
<tr><td>「在宅で働きたい」</td><td>自由がほしい・誰にも支配されたくない</td></tr>
<tr><td>「やりたいことが分からない」</td><td>自分に価値があると思いたい</td></tr>
</table>

<p><b>なぜ本音を口に出さないか：</b>2つある。<strong>1つは、深い欲求ほど"格好悪い"から。</strong>「あの子を見返したい」は人前で言うには恥ずかしい。だから「お金がほしい」に着替えさせる。<strong>もう1つは、本人すら本音に気づいていないから。</strong>4階の「なりたい自分」は深すぎて当人も言葉にできていない。</p>

<div class="key">💡 プロの技。<strong>「あの子を見返したい」とは誰も口に出さない。</strong>でも、それを言い当てると相手は「うわ、なんで分かったの」とグサッと刺さる。<strong>言わない本音を代弁する。</strong>あなたが本当に売っているのは「わかってもらえた」という体験で、その入口がこの代弁だ。</div>

<p>掘り方は簡単。1階の欲求に<strong>「それが手に入ったら何が嬉しいの？」と3回くらい繰り返す。</strong></p>

<div class="step"><span class="sn">例</span><span class="snm">「お金がほしい」を掘る</span>
<div class="draft">
「お金がほしい」<br>→ <b>なんで？</b> →「生活に余裕がほしいから」<br>→ <b>余裕ができたら何が嬉しい？</b> →「人にバカにされなくなる」<br>→ <b>つまり？</b> →「自分に自信を持ちたい・見返したい」<br><br>→ <b>本音は「お金」じゃなく「自信と承認」だった。</b>ここまで掘れたら刺さる言葉が書ける。
</div>
<span class="note">「なんで？」を繰り返すだけで1階から3階・4階へ降りていける。質問が階段になっている。これを9つの欲求それぞれでやると、本音がごっそり手に入る。</span></div>

<div class="warn">注意。最初の答え（1階）で止めない。「お金がほしい→生活のため」で満足したら、まだ表面だ。<b>相手が「それは…」と少し詰まるところまで掘る。</b>スラスラ答える部分は"用意した建前"、詰まる部分こそ普段は触らない本音だ。</div>

<h2><span class="s">7</span>ステップ5：「信じてる嘘」を見つける（買えない壁）</h2>
<p>お客が動けない理由は<strong>間違った思い込み＝「信じてる嘘」</strong>だ。これを集めておくと、後でストーリーで1つずつ壊せる。<strong>この壁を壊さない限り、どんなに良い商品でも売れない。</strong></p>

<div class="bad"><b>✗ お客が信じてる嘘（記入例）</b><br>「才能がある人だけが成功する」／「私には人に教える価値なんてない」／「SNSはもう遅い、今からじゃ無理」／「私には無理」／「稼いでる人は何か特別なことをしてる」</div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="鍵のかかった部屋とストーリーの鍵">
<rect x="20" y="24" width="120" height="86" rx="6" fill="#f6f6f7" stroke="#cbd5e0" stroke-width="2"/>
<circle cx="100" cy="68" r="12" fill="#9cb8d6"/><rect x="86" y="82" width="28" height="22" rx="7" fill="#9cb8d6"/>
<rect x="132" y="58" width="14" height="22" rx="3" fill="#a0aec0"/>
<circle cx="139" cy="66" r="3" fill="#f6f6f7"/>
<text x="80" y="18" text-anchor="middle" font-size="11" fill="#718096">鍵のかかった部屋＝お客</text>
<text x="173" y="50" font-size="14" fill="#b83280">→</text>
<path d="M196 66 a10 10 0 1 0 0.1 0 M206 66 l40 0 M236 60 l0 12 M246 60 l0 12" stroke="#2b6cb0" stroke-width="3" fill="none"/>
<text x="262" y="50" font-size="11" fill="#1e4e7e">正しい鍵＝</text>
<text x="262" y="68" font-size="11" fill="#1e4e7e">ストーリー</text>
<text x="262" y="90" font-size="10" fill="#2b6cb0">嘘を1つずつ外す</text>
</svg>
<div class="figcap">どの鍵がかかってるか先に調べる。多くの発信者はドアの外で叫ぶだけ</div>
</div>

<p><b>奥にある理由：</b>人は「やりたい」より「できない理由」を強く信じてる。動かずにいれば失敗もしないから、「できない理由」は<strong>傷つかないための"心の盾"</strong>になっている。盾を構えている限り、行動しない＝買わない。本人は守っているつもりで、自分を止めている。</p>

<div class="key">ストーリーの役割は、この壁を1枚ずつ壊すこと。「才能ある人だけ成功する」と信じてる人には「私も才能ゼロから始めた」を見せる。<strong>嘘を集める＝後で壊す壁のリストを作ること。</strong>語る順番すら、壁のリストが教えてくれる。</div>

<div class="warn">壊し方そのものは別の章（ストーリー教育の型）で詳しくやる。ここでは<b>「壊す壁を見つけて書き出すだけ」</b>でOK。最低3つは書き出す。</div>

<h2><span class="s">8</span>ステップ6：「生の言葉」を集める</h2>
<p>最後のステップ。お客が<strong>実際に使ってる言葉</strong>を集めて、そのまま発信に使う。ここを手抜きすると「冷める文章」になる。</p>

<div class="vs">
<div class="l"><div class="t">✗ 教科書みたいな言葉</div>「現状に課題を感じており、自己実現に向けた一歩を踏み出したいと考えています」→ 正しいけど<b>誰もこんな喋り方しない。一瞬で冷める</b></div>
<div class="r"><div class="t">○ お客の生の言葉</div>「このままでいいのかな…」「何から始めればいいか分かんない」「私なんかには無理だよね」「これって怪しくない…？」→ <b>「私が思ってることそのまま」</b>と刺さる</div>
</div>

<p><b>奥にある理由：</b>人は<strong>自分が頭の中でつぶやく言葉と同じ言葉を見ると「この人は私を分かってる」と感じる。</strong>心の中の独り言は整っていない。その"地のままの言葉"を外で見せられると、脳が「これは自分の内側の声だ」と錯覚する。きれいに整えた言葉は"よそゆき"に聞こえて自分ごとにならない。整える努力が、かえって距離を生む。</p>

<div class="ladder">
<div class="rung"><span class="rk">① DM・コメント・口コミ</span>お客が実際に送ってきた言葉。宝の山。そのままメモ</div>
<div class="rung"><span class="rk">② 同じ悩みの人の投稿・レビュー</span>質問サイトや商品レビューを読む</div>
<div class="rung"><span class="rk">③ 過去の自分の口ぐせ</span>あの頃、自分が何てつぶやいてたかを思い出す</div>
</div>

<div class="note">つまずきポイント：「お客はこう言うだろう」と作文してしまう。あなたのフィルターを通った時点で整ってしまう。必ず実在する言葉を"そのまま"拾う。語尾の「…」や「笑」まで含めて加工せずメモする。</div>

<div class="key">集めた生の言葉は、<strong>そのままストーリーの1行目（フック）に使える。</strong>「このままでいいのかな、って思ってない？」と書けば、その言葉を心の中でつぶやいてた人が全員止まる。<strong>あなたの仕事は、いい言葉を"発明"することじゃない。お客がすでに持っている言葉を"発見"することだ。</strong></div>

<h2><span class="s">9</span>まとめ：これを決めると、全部が決まる</h2>
<p>6ステップ、お疲れさま。手元には次のものが揃ってる。この6つは、1人の人物を立体的に描くための6つの角度だ。</p>

<div class="stats">
<div class="stat-c"><div class="n">顔</div><div class="l">誰に向けて全部を作るかが定まった</div></div>
<div class="stat-c"><div class="n">距離</div><div class="l">Before→After＝商品が運ぶ距離が見えた</div></div>
<div class="stat-c"><div class="n">ネタ9</div><div class="l">9つの欲求＝ストーリーのネタが9個</div></div>
<div class="stat-c"><div class="n">刺し所</div><div class="l">深い本音＝財布を開かせる場所が分かった</div></div>
<div class="stat-c"><div class="n">壁</div><div class="l">信じてる嘘＝後で壊す壁のリスト</div></div>
<div class="stat-c"><div class="n">言葉</div><div class="l">生の言葉＝そのまま使えるフック</div></div>
</div>

<p>顔・現在地と行き先・欲しいもの・本音・思い込み・口ぐせ。ここまで揃えば、その1人はもう"想像の客"じゃなく、<strong>隣に座っている生身の人間</strong>になっている。隣にいる人になら、何を作り何を語ればいいかは自然に分かる。</p>

<div class="flowbig">
<span>ターゲット（1人）</span><span>商品＝Before→Afterの乗り物</span><span class="is-goal">ストーリー＝痛み・生の言葉・嘘つぶし</span>
</div>

<div class="key"><strong>ターゲットが決まれば、商品もストーリーも逆算で決まる。</strong>だから一番最初にやる。ここでの解像度が、後の全工程の解像度の天井になる。</div>

<h2><span class="s">10</span>検品：1人が見えてるか</h2>
<div class="check"><ul>
<li>顔が浮かぶ「1人」まで絞れたか（名前・年齢・口ぐせが言えるか）</li>
<li>Beforeを具体的なシーンで書けたか（いつ・どこで・何をしてる瞬間か）</li>
<li>After（なりたい理想）を書けたか</li>
<li>9つの欲求を掘れたか（埋まるところだけでもOK）</li>
<li>"お金"の裏の本音（深い欲求）を1つ見つけたか</li>
<li>信じてる嘘を3つ書き出したか</li>
<li>お客の生の言葉を、加工せず集めたか</li>
</ul></div>

<div class="end">お客は商品じゃなく「今の自分から、なりたい自分への移動」を求めてる。<br>だから——いきなり商品を作るな。<strong>まず、その1人の顔を浮かべろ。</strong><br>ターゲットが決まれば、もう半分終わったようなもの。<br><strong>次は「何を売るか（商品の作り方）」へ。</strong></div>
</div>
  `,
  'p5-product': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>売れない原因は「中身」じゃなく「誘い方（オファー）」が弱いだけ</li>
<li>人は中身の良さでなく「自分にとっての意味」で動く理由</li>
<li>商品は「今→理想」から逆算して作る、という原理</li>
<li>「欲しい！」が生まれるオファーの公式</li>
<li>安く見せる・特典・保証・限定・無料→入口→本命の階段</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>
<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="中身を足すより誘い方を組み直す">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 中身を足す</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 誘い方を直す</text>
<rect x="50" y="48" width="58" height="14" rx="3" fill="#cbd5e0"/>
<rect x="50" y="66" width="58" height="14" rx="3" fill="#cbd5e0"/>
<rect x="50" y="84" width="58" height="14" rx="3" fill="#cbd5e0"/>
<rect x="50" y="102" width="58" height="14" rx="3" fill="#a0aec0"/>
<text x="79" y="135" text-anchor="middle" font-size="11" fill="#718096">盛っても売れない</text>
<rect x="196" y="60" width="90" height="44" rx="8" fill="#2b6cb0"/>
<text x="241" y="80" text-anchor="middle" font-size="11" fill="#fff">同じ中身を</text>
<text x="241" y="96" text-anchor="middle" font-size="11" fill="#fff">組み直す</text>
<text x="241" y="135" text-anchor="middle" font-size="11" fill="#1e4e7e">断れない形に変わる</text>
</svg>
<div class="figcap">発明するな。今あるものを組み直せ</div>
</div>
<div class="key">売れない一番の原因は中身じゃなく<strong>「提案（オファー）の弱さ」</strong>。同じ知識・同じ経験でも、組み立て次第で「いつか欲しい」が「今すぐ欲しい」に変わる。</div>

<h3>人は「中身の良さ」では動かない</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="客観的な質と自分にとっての意味">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">中身の質</text>
<text x="75" y="76" text-anchor="middle" font-size="11" fill="#a0aec0">客観的に良い</text>
<text x="75" y="92" text-anchor="middle" font-size="11" fill="#a0aec0">でも財布は閉じたまま</text>
<text x="160" y="65" text-anchor="middle" font-size="20" fill="#cbd5e0">→</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="245" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#b83280">自分ごと</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#8a4a6e">私の悩みが消える</text>
<text x="245" y="86" text-anchor="middle" font-size="11" fill="#8a4a6e">＝ここで財布が開く</text>
</svg>
<div class="figcap">オファー＝中身を「お客にとっての意味」に翻訳する作業</div>
</div>
<p>お客は商品の質を評価して買うんじゃない。<strong>「自分の悩みを解決してくれるか」「自分にもできそうか」で判断してる。</strong>誘い方が変わると、お客の頭の中で"意味"が変わる。だから売れ方が変わる。</p>

<div class="key">恋愛で考えると一発で分かる。同じ「食事に行きたい」気持ちでも、誘い方で結果は真逆になる。</div>
<div class="vs">
<div class="l"><div class="t">✗ 弱い提案</div>「今度いつか、飯でも行けたらいいね〜」<br><br>→ 社交辞令に聞こえる。いつか＝一生行かない。動く理由がない。</div>
<div class="r"><div class="t">○ 強い提案（同じ気持ち）</div>「金曜19時、好きそうなイタリアン予約しといた。来てくれるだけでいい」<br><br>→ 日時が決まり、好みに合い、ハードルも低い。断る理由が見つからない。</div>
</div>
<div class="warn">人は"気持ちの強さ"では動かず、<b>"自分が動いた後の絵が見えるか"</b>で動く。「いつか飯」は絵が浮かばない。「金曜19時のイタリアン」は浮かぶ。だからこの章の目的は、発明じゃなく<b>「今ある知識・経験を、相手が断れない提案の形に組み直すこと」</b>だ。</div>

<h2><span class="s">1</span>商品は「ターゲットから逆算」して作る</h2>
<p>初心者が一番やる失敗が<strong>「自分が作りたいもの」から決める</strong>こと。順番が逆だ。お客は、あなたの作りたいものに興味がない。自分の悩みが消えることにしか興味がない。</p>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="商品はビフォーをアフターに運ぶ乗り物">
<rect x="6" y="50" width="84" height="44" rx="10" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="48" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">Before</text>
<text x="48" y="86" text-anchor="middle" font-size="10" fill="#a0aec0">つらい今</text>
<rect x="118" y="44" width="84" height="56" rx="12" fill="#2b6cb0"/>
<text x="160" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">商品</text>
<text x="160" y="86" text-anchor="middle" font-size="10" fill="#cdddec">＝乗り物</text>
<rect x="230" y="50" width="84" height="44" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="272" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">After</text>
<text x="272" y="86" text-anchor="middle" font-size="10" fill="#8a4a6e">理想の未来</text>
<path d="M92 72 L116 72" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a1)"/>
<path d="M204 72 L228 72" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a1)"/>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker></defs>
<text x="160" y="120" text-anchor="middle" font-size="11" fill="#718096">行き先のない乗り物に、人は乗らない</text>
</svg>
<div class="figcap">商品とは、つらい今を理想の未来まで運ぶ"乗り物"</div>
</div>
<p>だから商品の前に、まず<strong>ターゲットの悩みを具体的に書き出す</strong>。同じ材料でも、悩みが違えば乗り物の形が変わる。</p>
<table>
<tr><th>お客の悩み（Before）</th><th>逆算した商品（乗り物）</th></tr>
<tr><td>「何から始めればいいか分からない」</td><td>最初の一歩がわかる"設計図"・手順書</td></tr>
<tr><td>「一人だと続かない・不安」</td><td>個別の伴走サポート（一緒に進める）</td></tr>
<tr><td>「やり方は知ってるけど時間がない」</td><td>そのまま使える穴埋めテンプレ</td></tr>
</table>
<div class="good"><b>○</b> 「お客がこう言ってた悩み→だからこの商品」と、悩みから矢印を引いて説明できる。</div>
<div class="bad"><b>✗</b> 「作りたかったから」「他の人も売ってるから」で決める。誰の悩みも解決しないから売れない。</div>
<div class="warn">つまずきポイント＝<b>悩みが抽象的すぎる</b>こと。「稼ぎたい」じゃ乗り物が作れない。「副業を始めたいけど、何を売ればいいか分からず3ヶ月止まってる」まで具体にすると商品が自動的に決まる。<b>書き出すときはターゲットが実際に口にした言葉をそのまま使え。</b>翻訳した瞬間、悩みはぼやけて他人事になる。</div>

<h2><span class="s">2</span>「欲しい！」を生むオファーの公式</h2>
<p>提案の強さは感覚じゃなく"公式"で測れる。人が「欲しい」と感じる瞬間、頭の中ではこの計算が走ってる。</p>
<div class="eq">（叶う未来 × 達成の確実性）÷（かかる時間 × 手間・労力）</div>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="得るものと払うものの天秤">
<line x1="160" y1="20" x2="160" y2="44" stroke="#718096" stroke-width="3"/>
<line x1="60" y1="44" x2="260" y2="44" stroke="#718096" stroke-width="3"/>
<rect x="20" y="54" width="80" height="40" rx="8" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="60" y="70" text-anchor="middle" font-size="10" fill="#1e4e7e">未来×確実性</text>
<text x="60" y="86" text-anchor="middle" font-size="10" fill="#1e4e7e">＝得るもの</text>
<rect x="220" y="54" width="80" height="40" rx="8" fill="#f6f6f7" stroke="#a0aec0"/>
<text x="260" y="70" text-anchor="middle" font-size="10" fill="#718096">時間×手間</text>
<text x="260" y="86" text-anchor="middle" font-size="10" fill="#718096">＝払うもの</text>
<line x1="60" y1="44" x2="60" y2="54" stroke="#718096" stroke-width="2"/>
<line x1="260" y1="44" x2="260" y2="54" stroke="#718096" stroke-width="2"/>
<polygon points="150,108 170,108 160,118" fill="#718096"/>
<text x="160" y="128" text-anchor="middle" font-size="11" fill="#b83280">得る方が重いほど「欲しい！」</text>
</svg>
<div class="figcap">価格は絶対値じゃない。この天秤の相対値で決まる</div>
</div>
<p>値段が高くても、得る未来が大きく確実なら「安い」と感じる。逆に安くても、得るものが曖昧で面倒なら「高い」と感じる。<strong>レバーは4つ。1つだけ強くしても天秤は傾ききらない。全部いじる。</strong></p>
<div class="tc"><div class="hd">分子を大きく（上に引っ張る2つ）</div><div class="bd">
<div class="rule"><span class="rn">① 叶う未来を大きく</span><span class="gb2">「SNSの作り方」でなく「在宅で自由に生きる人生」。人は手段でなく、その先の景色に払う</span></div>
<div class="rule"><span class="rn">② 確実性を上げる</span><span class="gb2">型・実例・保証・伴走で「私でもできそう」に。人を止めるのは"できなかったら"の不安だから</span></div>
</div></div>
<div class="tc"><div class="hd">分母を小さく（下げる2つ）</div><div class="bd">
<div class="rule"><span class="rn">③ かかる時間を短く</span><span class="gb2">「1年かけて掴んだ順番を近道で渡す」。人は結果までの時間を一番のコストだと感じる</span></div>
<div class="rule"><span class="rn">④ 手間・労力を減らす</span><span class="gb2">穴埋めテンプレで「考えなくていい」状態に。"自分で考える"が一番の負担だから</span></div>
</div></div>
<div class="key">個別指導のジムが高くても売れる理由がこれ。あの値段は器具代じゃない。<strong>「確実に痩せる」確実性と「自分で考えなくていい」楽さに払ってる。</strong>人は商品でなく、公式の中身（未来・確実性・早さ・楽さ）にお金を出す。</div>
<div class="vs">
<div class="l"><div class="t">✗ レバーが効いてない</div>「SNSの教科書を売ります。やり方が書いてあります」<br><br>→ 未来も確実性も時短もない。ただの情報。ググれば出るから買う理由がない。</div>
<div class="r"><div class="t">○ 4レバー全部入り</div>「在宅で生きる（未来）順番を、実例つきの型（確実性）で。1年の道を最短（時間）、穴埋めテンプレで考えず進める（手間）」<br><br>→ 中身は同じでも、欲しさが跳ね上がる。</div>
</div>
<div class="note">つまずき＝「未来を大きく」と「盛る・誇張」の混同。誇張は約束が嘘なら確実性を自分で壊す。<strong>未来を大きく見せるとは、嘘でなく「その商品が本当につながる、もっと先の景色」を言葉にすること。</strong></div>

<h2><span class="s">3</span>商品の「形」と「価格」を決める</h2>
<p>商品の形は、ターゲットの"状態"で決まる。同じ内容でも、相手が「自分でやりたい人」か「一人だと不安な人」かで、向いてる形と価格が違う。</p>
<table>
<tr><th>ターゲットの状態</th><th>向いてる形</th><th>価格の位置づけ</th></tr>
<tr><td>初心者・まず自分でやってみたい</td><td>読み物（記事・電子書籍）＋テンプレ</td><td>低価格（入口）</td></tr>
<tr><td>一人だと不安・確実に結果がほしい</td><td>個別サポート・伴走</td><td>高価格（本命）</td></tr>
</table>
<p><b>奥にある理由：</b>読み物は"渡して終わり"。伴走は"あなたの時間"をずっと使う。だから確実性（分子）が跳ね上がり、「迷わなくていい」楽さ（分母）も下がる。<strong>伴走はオファーの公式そのものを底上げする形だから、高くて当然だ。</strong></p>
<div class="warn">つまずき＝<b>いきなり高額一本で始める</b>こと。高額が払えるのは"あなたを信頼している人"だけ。だが信頼はまだ存在しない。まず安い入口で「この人は役に立つ」と体験させる。体験が信頼に変わって、初めて高額が視野に入る。順番はセクション7で組む。</div>

<h2><span class="s">4</span>価格を「安く感じさせる」見せ方</h2>
<p>同じ価格でも、見せ方次第で「高っ」にも「安すぎ？」にもなる。人は値段そのものを判断できず、<strong>必ず"何かと比べて"決める。</strong>だから比べる基準をこちらで用意する。やり方は2つ。</p>

<h3>① 価値の積み上げ（合計してから、今だけ価格）</h3>
<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="価値を積み上げて合計を見せてから実売価格">
<rect x="40" y="20" width="160" height="22" rx="4" fill="#eaf1f8" stroke="#cdddec"/>
<text x="50" y="35" font-size="10" fill="#1e4e7e">設計書 本体 …… 〇円</text>
<rect x="40" y="46" width="160" height="22" rx="4" fill="#eaf1f8" stroke="#cdddec"/>
<text x="50" y="61" font-size="10" fill="#1e4e7e">初心者キット …… 〇円</text>
<rect x="40" y="72" width="160" height="22" rx="4" fill="#eaf1f8" stroke="#cdddec"/>
<text x="50" y="87" font-size="10" fill="#1e4e7e">優先相談枠 …… 〇円</text>
<line x1="40" y1="100" x2="200" y2="100" stroke="#a0aec0"/>
<text x="50" y="116" font-size="11" font-weight="700" fill="#718096">合計 〇円</text>
<rect x="220" y="60" width="90" height="44" rx="10" fill="#b83280"/>
<text x="265" y="80" text-anchor="middle" font-size="11" fill="#fff">今だけ</text>
<text x="265" y="96" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">〇円</text>
<path d="M202 110 L218 90" stroke="#b83280" stroke-width="2" marker-end="url(#a4)"/>
<defs><marker id="a4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="160" y="142" text-anchor="middle" font-size="11" fill="#718096">基準（合計）を先に作るから安く見える</text>
</svg>
<div class="figcap">値引きでなく"比べる基準を作っただけ"で印象が変わる</div>
</div>
<p>人は最初に見た数字を無意識に"ものさし"にする。合計を先に見せると、同じ実売価格でも<strong>「こんなに付いてこの値段？」</strong>と安く感じる。</p>
<div class="good"><b>○</b> 1個ずつ価値を見せ、合計を出し、最後に実売価格を落とす。</div>
<div class="bad"><b>✗</b> 「全部入りで〇円！」と一言だけ。中身が見えず、比べる基準もないから高く感じる。</div>

<h3>② 値上げ階段（締切で「今買う理由」を作る）</h3>
<p>人は「いつでも買える」ものを今は買わない。後回しにする。<strong>人は"損をする"のを"得をする"より強く嫌う。</strong>「今買わなくても損はしない」状態だと、行動の理由がゼロになる。</p>
<div class="tl">
<div class="slot"><span class="time">最初の72時間</span><div class="w2">一番おトクな価格</div></div>
<div class="slot"><span class="time">その後</span><div class="w2">少し上がる</div></div>
<div class="slot"><span class="time">最終</span><div class="w2">定価</div></div>
</div>
<div class="key">後から値上がりすると分かってるから、「迷ってるうちに上がるのは嫌だ」が迷う人の背中を押す。背中を押すのは値引きでなく<strong>"後で損する"という未来の痛み</strong>だ。</div>
<div class="warn">注意＝<b>値上げは必ず本当に上げる。</b>嘘の締切は一度バレると二度と信じてもらえない。「期間限定」と言ってずっと同じ値段だとバレると、その人の"今だけ"が全部嘘に見える。一度死んだ信頼は戻らない。</div>

<h2><span class="s">5</span>特典・保証・限定を付ける</h2>
<p>商品と価格が決まったら、最後に"後押しの3点セット"。3つとも、買う直前に頭をよぎる別々の不安に対応している。</p>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="特典保証限定が消す3つの不安">
<rect x="6" y="30" width="98" height="70" rx="10" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="55" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">特典</text>
<text x="55" y="74" text-anchor="middle" font-size="10" fill="#1e4e7e">今やる気にする</text>
<text x="55" y="90" text-anchor="middle" font-size="10" fill="#8aa6c4">"消えると損"</text>
<rect x="111" y="30" width="98" height="70" rx="10" fill="#fff5fa" stroke="#b83280"/>
<text x="160" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">保証</text>
<text x="160" y="74" text-anchor="middle" font-size="10" fill="#8a4a6e">失敗が怖いを消す</text>
<text x="160" y="90" text-anchor="middle" font-size="10" fill="#b88aa0">本気の人限定</text>
<rect x="216" y="30" width="98" height="70" rx="10" fill="#f6f6f7" stroke="#a0aec0"/>
<text x="265" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">限定</text>
<text x="265" y="74" text-anchor="middle" font-size="10" fill="#718096">今やる理由を作る</text>
<text x="265" y="90" text-anchor="middle" font-size="10" fill="#a0aec0">時間 or 数</text>
<text x="160" y="122" text-anchor="middle" font-size="11" fill="#718096">役割が違う3つを、迷いの数だけ重ねる</text>
</svg>
<div class="figcap">特典＝即決／保証＝不安消し／限定＝今やる理由</div>
</div>
<table>
<tr><th>要素</th><th>役割</th><th>記入例</th></tr>
<tr><td>特典</td><td>即決を生む（期限つき・人が絡むもの）</td><td>初心者キット／無料相談の優先枠</td></tr>
<tr><td>保証</td><td>「失敗したら…」の不安を消す</td><td>合わなければ〇〇（本気の人限定の条件つき）</td></tr>
<tr><td>限定</td><td>「今やる理由」を作る</td><td>時間（72時間）／数（数名まで）</td></tr>
</table>
<div class="warn">最重要ルール＝<b>限定には必ず本当の理由をつける。</b>「数名まで」なら「一人ずつ丁寧に見るから」、「72時間」なら「本気の人だけ集めたいから」。<strong>理由のない限定は"操作"に見えて警戒されるが、理由があると"納得"に変わる。</strong>人は制限そのものより「なぜ制限されるか分からないこと」に反発する。嘘の限定はバレて信頼が死ぬ。</div>

<h2><span class="s">6</span>"旗"を立てる（一本の旗・独自の仕組み・敵）</h2>
<p>商品が同じでも「どんな旗を掲げて売るか」で刺さり方が変わる。<strong>人は商品単体でなく、"その商品が背負う物語"に共感して買う。</strong>旗は3本だ。</p>
<div class="tc"><div class="hd">① 一本の旗</div><div class="bd"><span class="lab">この発信の"一番言いたいこと"を1行で</span>
<div class="draft">「料理が上手いかどうかじゃない。"設計"があるかで人生は変わる」</div>
発信全部に芯が通る。<strong>人は毎回違う話をする人を信用できない。</strong>1行の旗が、すべての発信を1人の人格にまとめる。</div></div>
<div class="tc"><div class="hd">② 独自の仕組み</div><div class="bd"><span class="lab">「なぜ今までうまくいかなかったか」の新しい説明</span>
<div class="draft">「みんな"何を発信するか"から考えて失敗する。順番が逆。先にコンセプトを設計するのが正解」</div>
<strong>人は"自分が悪かった"と思いたくない。</strong>「怠けたんじゃない、順番が違っただけ」と説明されると、一度あきらめた人ほどもう一度やる気になる。</div></div>
<div class="tc"><div class="hd">③ 共通の敵（一緒に戦う相手）</div><div class="bd"><span class="lab">お客と同じ方向を向くための"倒すべき常識"</span>
<div class="draft">「"会社に依存しろ"という古い常識」</div>
<strong>人は"敵"を共有した相手に強い仲間意識を持つ。</strong>売る人・買う人の関係が、横に並ぶ仲間に変わる。<strong>ただし敵は"常識・考え方"に。個人攻撃は絶対ダメ。</strong>「次は自分が叩かれるかも」と思わせ、人が離れる。</div></div>
<div class="key">3本は別々に考えなくていい。<strong>「古い常識（敵）のせいで、みんな順番を間違えて失敗してる（仕組み）。だから設計が全て（一本の旗）」</strong>と1本の物語につなぐと一気に強くなる。原因→説明→結論で1本につながった物語ほど、人の頭に残る。</div>

<h2><span class="s">7</span>入口→高額をつなぐ「バリューラダー」</h2>
<p>商品・価格・旗ができたら、最後に"階段"の形に並べる。いきなり高額は売れない。1段ずつ上げる。</p>
<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="無料から本命までの信頼の階段">
<rect x="10" y="116" width="70" height="24" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="45" y="132" text-anchor="middle" font-size="10" fill="#718096">無料</text>
<rect x="80" y="92" width="70" height="48" fill="#eaf1f8" stroke="#cdddec"/>
<text x="115" y="120" text-anchor="middle" font-size="10" fill="#1e4e7e">入口</text>
<rect x="150" y="58" width="70" height="82" fill="#9cb8d6"/>
<text x="185" y="102" text-anchor="middle" font-size="10" fill="#1e4e7e">本命</text>
<rect x="220" y="28" width="70" height="112" fill="#2b6cb0"/>
<text x="255" y="90" text-anchor="middle" font-size="10" fill="#fff">継続</text>
<path d="M20 110 L280 24" stroke="#b83280" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#a7)"/>
<defs><marker id="a7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<text x="160" y="16" text-anchor="middle" font-size="11" fill="#b83280">小さく賭けて小さく確かめ、信頼が積まれる</text>
</svg>
<div class="figcap">無料→入口→本命→継続。飛ばすと足を出せない</div>
</div>
<table>
<tr><th>段</th><th>中身</th></tr>
<tr><td>無料</td><td>プレゼント（無料の読み物・特典）</td></tr>
<tr><td>入口</td><td>設計書（低価格）</td></tr>
<tr><td>本命</td><td>3ヶ月伴走（高価格）</td></tr>
<tr><td>継続</td><td>長期サポート・メンバーシップ</td></tr>
</table>
<div class="key">大事な発想の転換＝<strong>入口は"利益を出す商品"でなく、"本気の客を集める装置"だ。</strong>1円でも払った瞬間、人は「元を取ろう」と本気で取り組む。本当の利益は、その先の高額にある。</div>
<p>だから1回の売上で考えない。<strong>一人のお客が、出会ってから最後まででいくら払うか（生涯の合計）で考える。</strong>1回ごとの黒字を追うと、入口の価格を上げざるを得ず、人が入ってこなくなる。合計で黒字なら、入口が薄利でも問題ない。</p>
<div class="vs">
<div class="l"><div class="t">✗ 階段がない</div>いきなり「高額の伴走、どうぞ」とだけ出す。<br><br>→ 誰もあなたを知らず、確かめる段がなく、怪しまれて終わる。</div>
<div class="r"><div class="t">○ 階段がある</div>無料の読み物→低価格の設計書→「もっと確実にやりたい人へ」と本命の伴走。<br><br>→ 一段ずつ確かめてきたので、高額が自然に売れる。</div>
</div>
<div class="note">つまずき：段差を急にしすぎること。無料の次がいきなり高額だと足が届かない。<strong>間に「これなら払える」低価格の入口を必ず1段はさむ。</strong>段差が小さいほど次の一歩を出しやすい。</div>

<h2><span class="s">8</span>検品：誘い方は弱くないか</h2>
<div class="check"><ul>
<li>商品を「Before→After」から逆算したか（行き先のある乗り物か）</li>
<li>オファーの公式で「大きく・確実に・早く・楽に」を4つとも考えたか</li>
<li>価値の積み上げ＋値上げ階段で、比べる基準を用意できたか</li>
<li>特典・保証・限定を付けたか（限定に"本当の理由"を添えたか）</li>
<li>一本の旗を1行で言えるか（毎回バラバラの話になってないか）</li>
<li>無料→入口→本命のバリューラダーを設計したか（段差が急すぎないか）</li>
<li>1回でなく、一人の生涯の合計で黒字を考えているか</li>
</ul></div>
<div class="end">売れないのは中身が悪いからじゃない。<br>人は中身の良さでなく、自分にとっての意味で動く。<br>だから——商品を磨く前に、<strong>「誘い方（オファー）」を組み直せ。</strong><br>次は「ストーリー教育・完全ガイド」へ進む。</div>
</div>
  `,
  'p5-list': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>フォロワーを増やしても売れない、その本当の理由</li>
<li>なぜ「リスト」だと狙って届き、売れるのか</li>
<li>無料プレゼントの正体は「満足させる物」じゃない</li>
<li>キーワードDMで集める手順とテンプレ</li>
<li>必要リスト数の逆算と、毎日数える先行サイン</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>
<p>集客の失敗は1つに集約される。<strong>「販売日に向かってフォロワーを増やそう」としていることだ。</strong></p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="フォロワーとリストの違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ フォロワー</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ リスト</text>
<circle cx="40" cy="55" r="7" fill="#cbd5e0"/><circle cx="65" cy="50" r="7" fill="#cbd5e0"/><circle cx="90" cy="58" r="7" fill="#cbd5e0"/><circle cx="115" cy="52" r="7" fill="#cbd5e0"/>
<circle cx="50" cy="80" r="7" fill="#cbd5e0"/><circle cx="78" cy="84" r="7" fill="#cbd5e0"/><circle cx="105" cy="80" r="7" fill="#cbd5e0"/>
<text x="79" y="118" text-anchor="middle" font-size="11" fill="#718096">届くかは運任せ</text>
<text x="79" y="134" text-anchor="middle" font-size="11" fill="#718096">通行人の群れ</text>
<rect x="186" y="44" width="40" height="22" rx="6" fill="#2b6cb0"/><path d="M256 50 l-30 5 l30 5 z" fill="#2b6cb0"/>
<circle cx="270" cy="55" r="8" fill="#b83280"/>
<text x="241" y="92" text-anchor="middle" font-size="11" fill="#1e4e7e">DMで直接届く</text>
<text x="241" y="118" text-anchor="middle" font-size="11" fill="#1e4e7e">入荷連絡を</text>
<text x="241" y="134" text-anchor="middle" font-size="11" fill="#1e4e7e">待ってる人</text>
</svg>
<div class="figcap">通行人に店内から叫ぶな。待ってる人へ一通届けろ</div>
</div>

<div class="key">ストーリーは24時間で消え、投稿は流れて沈む。だから集めるのは数字じゃない。<strong>「届けたい時に確実に届く相手」＝届く回路だ。</strong></div>

<div class="flowbig">
<span>消えない宛先を貯める</span><span>一人ずつ温める</span><span>関係ができる</span><span>いつもの人のお知らせ</span><span class="is-goal">売れる</span>
</div>

<div class="warn">集客の目的はフォロワー増やしじゃない。<b>「販売日に、あなたから連絡が来て嬉しい相手を何人作れるか」だ。</b></div>

<h2><span class="s">1</span>なぜ「フォロワー」では売れないのか</h2>
<p>フォロワーが買うには、3つの「たまたま」が重ならないといけない。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3つのたまたま">
<circle cx="70" cy="55" r="40" fill="#f6f6f7" stroke="#cbd5e0"/>
<circle cx="130" cy="55" r="40" fill="#f6f6f7" stroke="#cbd5e0" fill-opacity="0.7"/>
<circle cx="190" cy="55" r="40" fill="#f6f6f7" stroke="#cbd5e0" fill-opacity="0.5"/>
<text x="70" y="50" text-anchor="middle" font-size="10" fill="#718096">たまたま</text>
<text x="70" y="64" text-anchor="middle" font-size="10" fill="#718096">開いて</text>
<text x="130" y="50" text-anchor="middle" font-size="10" fill="#718096">たまたま</text>
<text x="130" y="64" text-anchor="middle" font-size="10" fill="#718096">表示され</text>
<text x="190" y="50" text-anchor="middle" font-size="10" fill="#718096">たまたま</text>
<text x="190" y="64" text-anchor="middle" font-size="10" fill="#718096">買う気に</text>
<text x="250" y="50" text-anchor="middle" font-size="14" fill="#a0aec0">→</text>
<circle cx="285" cy="55" r="16" fill="#b83280"/>
<text x="285" y="59" text-anchor="middle" font-size="10" fill="#fff">激レア</text>
<text x="160" y="120" text-anchor="middle" font-size="11" fill="#718096">3つ同時はめったに起きない</text>
</svg>
<div class="figcap">数が多くても、3つ重なった人にしか売れない</div>
</div>

<div class="vs">
<div class="l"><div class="t">✗ フォロワー＝偶然待ち</div>届くかは表示アルゴリズム任せ。数が多くても売上に結びつかない。</div>
<div class="r"><div class="t">○ リスト＝狙って届く</div>DMという1対1の回路で全員へ直接届く。数が少なくても売上になる。</div>
</div>

<div class="key"><strong>リストは、偶然を「狙って届ける」に変える仕組みだ。</strong>運任せを、自分で押せるスイッチに変える。</div>

<h3>「事前に」集めることに意味がある</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="告白は前の毎日で決まる">
<text x="60" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 初対面で告白</text>
<circle cx="40" cy="55" r="12" fill="#9cb8d6"/><circle cx="85" cy="55" r="12" fill="#cbd5e0"/>
<path d="M55 55 L70 55" stroke="#a0aec0" stroke-width="2"/>
<text x="60" y="100" text-anchor="middle" font-size="11" fill="#718096">突然の宣伝→引かれる</text>
<line x1="160" y1="15" x2="160" y2="110" stroke="#e2e8f0"/>
<text x="245" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 毎日の後に告白</text>
<circle cx="200" cy="55" r="12" fill="#9cb8d6"/><circle cx="290" cy="55" r="12" fill="#2b6cb0"/>
<polyline points="212,58 235,52 260,58 278,55" fill="none" stroke="#2b6cb0" stroke-width="2"/>
<text x="245" y="100" text-anchor="middle" font-size="11" fill="#1e4e7e">親しくなった後→通る</text>
</svg>
<div class="figcap">告白の成功は、その前の毎日で決まってる</div>
</div>
<p>信頼は一晩では積めない。販売日に集め始めても温める時間が残らない。<strong>発売前の数週間が勝負だ。</strong></p>

<h2><span class="s">2</span>無料プレゼント（餌）を作る</h2>
<p>相手がDMを送る「理由」がいる。それが無料プレゼントだ。</p>

<div class="key">奥にある理由：目的は<strong>満足させきることじゃない。「DMを送る口実」と「信頼の入口」を作ることだ。</strong>効くのは中身のすごさより「受け取った」体験そのもの。</div>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="満たすと終わり、渇かせると続く">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">満たしきる</text>
<text x="75" y="70" text-anchor="middle" font-size="11" fill="#a0aec0">もう十分</text>
<text x="75" y="86" text-anchor="middle" font-size="11" fill="#a0aec0">＝関係が終わる</text>
<text x="160" y="65" text-anchor="middle" font-size="18" fill="#cbd5e0">≠</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">少し渇かせる</text>
<text x="245" y="70" text-anchor="middle" font-size="11" fill="#1e4e7e">もっと欲しい</text>
<text x="245" y="86" text-anchor="middle" font-size="11" fill="#1e4e7e">＝続きを取りにくる</text>
</svg>
<div class="figcap">完結でなく"序章"として設計する</div>
</div>

<h3>何を渡すか</h3>
<div class="tc"><div class="hd">きっかけ話のまとめ読み物（共感系）</div><div class="bd">「どん底→きっかけ→今」を書いた読み物。「もっと聞きたい」になる。共感でファンを作る。</div></div>
<div class="tc"><div class="hd">そのまま使える型・チェックリスト</div><div class="bd">穴埋め台本や印刷して使う一覧。「考える手間が消える」から喜ばれる。実用でファンを作る。</div></div>
<div class="tc"><div class="hd">「○○の始め方」まとめ</div><div class="bd">最初の一歩を順番に並べた簡単ガイド。「で、まず何すれば？」に答える。初心者が一番欲しがる。</div></div>

<div class="vs">
<div class="l"><div class="t">✗ ダメな無料プレゼント</div>30ページの完璧な教科書。作るのに何週間もかかり、読んだ人が「もう十分」になって有料を買う理由が消える。</div>
<div class="r"><div class="t">○ 良い無料プレゼント</div>「最初の3ステップだけ」のチェックリスト1枚。すぐ作れて、すぐ渡せて、すぐ使える。続きが欲しくなる。</div>
</div>

<div class="key">作る基準は「読み終えた感」より<strong>「使える・続きが気になる」</strong>。使える一部を渡し、深い部分は有料への伏線にする。</div>

<div class="tc"><div class="hd">1枚チェックリストの例（副業ライターの始め方）</div><div class="bd">①プロフに「何が書ける人か」を1行で書く ②過去に書いた文章を1本、見せられる形で用意する ③募集を出してる相手に自分から1日1通連絡する。これで動ける。作るのに1時間もかからない。</div></div>

<h2><span class="s">3</span>キーワードDMで集める</h2>
<p>価値を出した流れのまま、こう呼びかける。ここが集客の心臓部だ。</p>

<div class="flow">
<span>ストーリーで価値を出す</span><span>「○○送って」と呼びかけ</span><span>送った人にDMでプレゼント</span><span>その人＝待機リスト</span>
</div>

<div class="tc"><div class="hd">ストーリーの呼びかけ文（例）</div><div class="bd"><div class="draft">この続き（○○のテンプレ）が欲しい人は、DMに「○○」って送って☺️ 順番に送るね</div></div></div>
<div class="tc"><div class="hd">DM返信文（例）</div><div class="bd"><div class="draft">「○○」ありがとう！これだよ→（リンク）。読んだら感想もらえたら嬉しい😊 何か聞きたいことあれば気軽にどうぞ！</div></div></div>

<div class="key"><b>なぜDMを送らせるのか：</b>リンクを貼るだけでは一方通行で、開かれたかも分からない。送らせた瞬間、<strong>1対1の部屋が開く。</strong>この部屋が、温めて販売日に届ける回路だ。</div>

<h3>キーワードの決め方（ここで差がつく）</h3>
<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="欲しい気持ちと打つ手間の天秤">
<line x1="160" y1="30" x2="160" y2="55" stroke="#718096" stroke-width="3"/>
<polygon points="150,90 170,90 160,55" fill="#718096"/>
<line x1="70" y1="40" x2="250" y2="40" stroke="#a0aec0" stroke-width="3"/>
<rect x="40" y="20" width="60" height="22" rx="6" fill="#2b6cb0"/>
<text x="70" y="35" text-anchor="middle" font-size="10" fill="#fff">欲しい</text>
<rect x="220" y="40" width="60" height="22" rx="6" fill="#b83280"/>
<text x="250" y="55" text-anchor="middle" font-size="10" fill="#fff">打つ手間</text>
<text x="160" y="106" text-anchor="middle" font-size="11" fill="#718096">手間に傾いた瞬間、リストが1人逃げる</text>
</svg>
<div class="figcap">短く・言いやすく。面倒を感じた瞬間に人はやめる</div>
</div>

<div class="vs">
<div class="l"><div class="t">✗ 送ってもらえない</div>「フリーランスの始め方完全ロードマップ希望」<br>長い。打つのが面倒。変換ミスも起きる。</div>
<div class="r"><div class="t">○ 送ってもらえる</div>「フリーランス」「設計図」「テンプレ」<br>短い。一瞬で打てる。迷わない。</div>
</div>

<div class="warn">よくある失敗＝<b>キーワードを凝りすぎる</b>。3〜5文字の日本語が基本。「かっこよさ」と「送りやすさ」がぶつかったら、必ず送りやすさを取る。<b>プレゼントの中身を表す言葉</b>にして、呼びかけ文と同じ言葉を2回出すと、考えずに手が動く。</div>

<h2><span class="s">4</span>関係を作る（ここで本当の差がつく）</h2>
<p>送ってきた人にこまめに個別返信し、1対1の関係を作る。ここを飛ばす人がとても多い。だから一番の差になる。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="同じDMでも誰から来たかで意味が変わる">
<rect x="20" y="55" width="60" height="26" rx="6" fill="#cbd5e0"/>
<text x="50" y="72" text-anchor="middle" font-size="10" fill="#4a5568">告知DM</text>
<text x="50" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#718096">関係なし</text>
<text x="50" y="100" text-anchor="middle" font-size="11" fill="#718096">突然の宣伝</text>
<text x="50" y="116" text-anchor="middle" font-size="11" fill="#718096">→スルー</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<rect x="240" y="55" width="60" height="26" rx="6" fill="#2b6cb0"/>
<text x="270" y="72" text-anchor="middle" font-size="10" fill="#fff">告知DM</text>
<text x="270" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">関係あり</text>
<text x="270" y="100" text-anchor="middle" font-size="11" fill="#1e4e7e">いつもの人</text>
<text x="270" y="116" text-anchor="middle" font-size="11" fill="#1e4e7e">→読まれ買われる</text>
</svg>
<div class="figcap">同じ文面でも、温めの有無で意味が割れる</div>
</div>

<p>人が一番警戒するのは「売りつけられること」。何度か言葉を交わした相手にはその警戒が外れる。<strong>温めとは、警戒を販売日より前に解いておく作業だ。</strong></p>

<div class="vs">
<div class="l"><div class="t">✗ 渡して終わり</div>リンクを送って放置。販売日にいきなり「買ってね」→「誰だっけ…」→スルー。</div>
<div class="r"><div class="t">○ 渡してから温める</div>感想に返信、質問に答える。販売日に「前に話してたあの件、形になったよ」→「待ってました」→購入。</div>
</div>

<div class="tc"><div class="hd">温めの会話（3往復だけでいい）</div><div class="bd"><div class="draft">あなた「読んでくれた？どこから始めそう？」→ 相手「①からやってみます」→ あなた「いいね！詰まったらいつでも聞いて。応援してる」</div></div></div>

<div class="key">奥にある理由：人は「自分を覚えてくれている」相手を特別扱いする。この3往復で告知が「知らない宣伝」から<strong>「気にかけてくれてた人からのお知らせ」</strong>に変わる。全員が理想だが、無理なら反応の良い相手から優先でいい。</div>

<div class="note">つまずきポイント：「全員と深い会話を」と気負って結局ゼロになる。深さはいらない。一言の返信でも、ゼロと1では天と地ほど違う。</div>

<h2><span class="s">5</span>必要なリスト数を逆算する</h2>
<p>ゴールが数字で見えない作業は続かない。<strong>目標部数から逆算し、1日に何人集めればいいかを出す。</strong></p>

<table>
<tr><th>項目</th><th>計算</th><th>例</th></tr>
<tr><td>目標部数</td><td>—</td><td>120部</td></tr>
<tr><td>自分で置く成約率</td><td>温めたリストから（低めに）</td><td>20%</td></tr>
<tr><td>必要リスト数</td><td>部数 ÷ 成約率</td><td>600人</td></tr>
<tr><td>1日あたり</td><td>必要数 ÷ 期間</td><td>40人/日</td></tr>
</table>

<div class="eq">120部 ÷ 0.2 ＝ 600人　→　600人 ÷ 15日 ＝ 1日40人</div>

<p>これで「今日40人送ってきたか？」という、その場で採点できる目標に変わる。</p>

<div class="warn"><b>なぜ成約率を低めに置くか：</b>高く見積もると必要数が少なく出て、早めに集めるのをやめ、本番で足りないと気づいても集め直す時間がない。<strong>低く置けば「余る」だけ。高く置くと「足りない」という取り返しのつかない失敗になる。</strong>外す方向を安全側に倒す。これは弱気でなく設計だ。</div>

<div class="step"><span class="sn">STEP1</span><span class="snm">目標部数を決める</span><p>「なんとなく」をやめて数字に。例：120部。</p></div>
<div class="step"><span class="sn">STEP2</span><span class="snm">成約率を控えめに置く</span><p>盛らない。外すなら余る方向に。</p></div>
<div class="step"><span class="sn">STEP3</span><span class="snm">部数 ÷ 成約率</span><p>120 ÷ 0.2 ＝ 600人。これが総数。</p></div>
<div class="step"><span class="sn">STEP4</span><span class="snm">必要数 ÷ 期間</span><p>600 ÷ 15日 ＝ 40人/日。これが今日の行動目標。</p></div>

<h2><span class="s">6</span>リスト数を毎日数える</h2>
<p>逆算したら毎日数える。これがローンチで一番早く出る「売れる／売れない」のサインだ。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="リストは売上の天気予報">
<polyline points="20,100 60,90 100,78 140,60 180,45 220,30" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="20" cy="100" r="4" fill="#2b6cb0"/><circle cx="60" cy="90" r="4" fill="#2b6cb0"/><circle cx="100" cy="78" r="4" fill="#2b6cb0"/><circle cx="140" cy="60" r="4" fill="#2b6cb0"/><circle cx="180" cy="45" r="4" fill="#2b6cb0"/>
<text x="120" y="120" text-anchor="middle" font-size="11" fill="#1e4e7e">リスト＝原因（毎日見える）</text>
<line x1="240" y1="20" x2="240" y2="110" stroke="#e2e8f0"/>
<circle cx="285" cy="35" r="16" fill="#b83280"/>
<text x="285" y="39" text-anchor="middle" font-size="10" fill="#fff">売上</text>
<text x="285" y="70" text-anchor="middle" font-size="10" fill="#718096">＝結果</text>
<text x="285" y="86" text-anchor="middle" font-size="10" fill="#718096">販売日まで</text>
<text x="285" y="100" text-anchor="middle" font-size="10" fill="#718096">見えない</text>
</svg>
<div class="figcap">原因が伸びてなければ結果も伸びない。雨より先に気圧が動く</div>
</div>

<div class="good"><b>○</b> 毎日「新規が何人来たか」をメモ。40人目標に対して20人なら、その日のうちに「呼びかけを増やす・プレゼントを見直す」と動ける。</div>
<div class="bad"><b>✗</b> 数えずに「集まってる気がする」で進める。販売日に蓋を開けて足りないと気づく。もう打ち手がない。</div>

<div class="key">合言葉は<strong>「リストの伸びは、売上の天気予報」</strong>。記録はメモか手帳に「新規○人／累計○人」の2つだけ。凝ると続かない。<strong>3日続けて目標を割ったら黄色信号。</strong></div>

<div class="note">つまずきポイント：1日の数字に一喜一憂しない。点で見ず、「3日続けて割っているか」という線で見る。</div>

<h2><span class="s">7</span>そもそも「来る人」を増やす</h2>
<p>1日40人いると分かっても、ストーリーを見てる母数が小さいと届かない。入口の母数も同時に広げる。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="蛇口とバケツ">
<rect x="60" y="20" width="40" height="14" rx="4" fill="#a0aec0"/><rect x="95" y="24" width="10" height="6" fill="#718096"/>
<line x1="100" y1="34" x2="100" y2="55" stroke="#9cb8d6" stroke-width="4"/>
<text x="80" y="16" text-anchor="middle" font-size="10" fill="#718096">蛇口＝入口の母数</text>
<path d="M70 60 L130 60 L122 110 L78 110 Z" fill="#eaf1f8" stroke="#2b6cb0" stroke-width="2"/>
<rect x="78" y="85" width="44" height="25" fill="#9cb8d6"/>
<text x="100" y="126" text-anchor="middle" font-size="10" fill="#1e4e7e">バケツ＝リスト化</text>
<text x="200" y="55" font-size="11" fill="#718096">蛇口が細いと</text>
<text x="200" y="72" font-size="11" fill="#718096">バケツを磨いても</text>
<text x="200" y="89" font-size="11" fill="#718096">貯まらない。</text>
<text x="200" y="106" font-size="11" font-weight="700" fill="#1e4e7e">両方同時に回す</text>
</svg>
<div class="figcap">蛇口だけ太くても、貯める仕組みがなければ消える</div>
</div>

<div class="tc"><div class="hd">① 新規流入を増やす</div><div class="bd">短い動画や発見欄で、まだ知らない人に届ける。理由：今のフォロワーだけではいつか枯れる。</div></div>
<div class="tc"><div class="hd">② 反応を増やす</div><div class="bd">質問・投票など参加できる仕掛けを毎日。コメント・DMが増えるほど表示も伸びる。理由：見るより押せる方が動く。</div></div>
<div class="tc"><div class="hd">③ 他の人の力を借りる</div><div class="bd">同じジャンルの発信者と紹介し合う。理由：信頼してる人の紹介は警戒が外れる。</div></div>

<div class="flow">
<span>新規流入で通行人を増やす</span><span>参加型で常連に変える</span><span>無料プレゼントで待機リストに</span>
</div>

<h2><span class="s">8</span>つまずきと対処</h2>
<table>
<tr><th>つまずき</th><th>原因</th><th>対処</th></tr>
<tr><td>DMが来ない</td><td>キーワードが長い／プレゼントが欲しくない／呼びかけが弱い</td><td>キーワードを短く。「すぐ使える1枚」に。呼びかけ前に価値を出す</td></tr>
<tr><td>渡して終わってる</td><td>関係作りをサボってる</td><td>感想に必ず返信。販売前に1回は会話する</td></tr>
<tr><td>本番で足りない</td><td>成約率を盛った／期間が短い</td><td>成約率は低め。早めに集め始める。入口を広げる</td></tr>
<tr><td>伸びてるか不明</td><td>数えてない</td><td>毎日新規人数をメモ。目標ペースと比べる</td></tr>
</table>

<div class="warn">特に抜けやすい＝<b>関係作り（4章）と毎日数える（6章）</b>。この2つを飛ばすと「リストはあるのに売れない」が起きる。集めただけのリストは"名刺の束"で、まだ"届く回路"になっていない。</div>

<h2><span class="s">9</span>まとめ手順</h2>
<div class="step"><span class="sn">1</span><span class="snm">無料プレゼントを作る</span><p>すぐ渡せて、すぐ使える、続きが気になるもの。目的は満足でなく「口実」と「信頼の入口」。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">キーワードを決める</span><p>短く・言いやすく。3〜5文字の日本語。送りやすさ最優先。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">ストーリーで呼びかける</span><p>価値を出した流れで「○○送って、順番に渡すね」。双方向の回路を開く。</p></div>
<div class="step"><span class="sn">4</span><span class="snm">渡したら温める</span><p>こまめに個別返信。販売前に1回は会話する。</p></div>
<div class="step"><span class="sn">5</span><span class="snm">逆算する</span><p>部数 ÷ 成約率 ＝ 必要数。÷ 期間 ＝ 1日のノルマ。成約率は低めに。</p></div>
<div class="step"><span class="sn">6</span><span class="snm">毎日数える</span><p>新規人数を記録。遅ければ即その日に手を打つ。</p></div>

<div class="check"><ul>
<li>無料プレゼントを用意したか（すぐ渡せる・満たしきってない？）</li>
<li>キーワードを決めたか（短く・打ちやすく・中身を表す言葉か）</li>
<li>呼びかけ文・DM返信文を用意したか</li>
<li>送ってきた人に返信し、販売前に1回は会話したか</li>
<li>必要リスト数を逆算したか（成約率は低めか）</li>
<li>1日あたりのノルマを出したか</li>
<li>リスト数を毎日、線で見ているか</li>
</ul></div>

<div class="end">リストが集まれば、販売は"売り込み"じゃなく"確認作業"になる。<br>あなたが集めてるのはフォロワーという数字じゃない。"届く回路"だ。<br><strong>「出ました」を待ってる人を、販売前にどれだけ作れたか。集客とは、その一点だ。</strong></div>
</div>
  `,
  'p5-story': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>ストーリーは「売る場所」じゃなく「育てる場所」だ、の本当の意味</li>
<li>なぜ販売日の結果は、販売日には決まっていないのか</li>
<li>1日6枚の組み方と、売り色を1〜2枚に抑えると逆に売れる理由</li>
<li>毎日混ぜる「8つの型」を、なぜ効くかから使えるようにする</li>
<li>14日でどの型をいつ使うか（痛み→共感→信頼→欲求の順番）</li>
<li>反応を増やす技術／ネタが尽きない出し方</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="掲示板と育てる場所の違い">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 掲示板にする</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 育てる場所にする</text>
<rect x="30" y="44" width="98" height="20" rx="4" fill="#cbd5e0"/>
<text x="79" y="58" text-anchor="middle" font-size="10" fill="#718096">講座作りました</text>
<rect x="30" y="70" width="98" height="20" rx="4" fill="#cbd5e0"/>
<text x="79" y="84" text-anchor="middle" font-size="10" fill="#718096">特典はこれ</text>
<text x="79" y="116" text-anchor="middle" font-size="11" fill="#718096">急に物を売る</text>
<text x="79" y="132" text-anchor="middle" font-size="11" fill="#718096">知らない人＝沈黙</text>
<circle cx="188" cy="120" r="5" fill="#9cb8d6"/><circle cx="210" cy="106" r="5" fill="#9cb8d6"/><circle cx="232" cy="88" r="5" fill="#2b6cb0"/><circle cx="254" cy="68" r="5" fill="#2b6cb0"/><circle cx="280" cy="48" r="5" fill="#b83280"/>
<polyline points="188,120 210,106 232,88 254,68 280,48" fill="none" stroke="#2b6cb0" stroke-width="2"/>
<text x="241" y="116" text-anchor="middle" font-size="11" fill="#1e4e7e">毎日少しずつ</text>
<text x="241" y="132" text-anchor="middle" font-size="11" fill="#1e4e7e">"欲しい"が育つ</text>
</svg>
<div class="figcap">ストーリーは掲示板じゃない。"欲しい"を育てる畑だ</div>
</div>

<div class="key">ストーリーは売り場じゃない。販売日までに「この人わかってる」「私にもできそう」を毎日少しずつ積んで、<strong>"欲しい"という気持ちそのものを14日かけて育てる場所だ。</strong>商品を売るんじゃない。気持ちを育てるんだ。</div>

<h3>販売日の結果は、販売日には決まっていない</h3>
<div class="vfig">
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="告白は前の毎日で決まる">
<text x="160" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">告白（＝販売日）の成功は、その前の毎日で決まる</text>
<circle cx="36" cy="78" r="5" fill="#9cb8d6"/><circle cx="76" cy="78" r="5" fill="#9cb8d6"/><circle cx="116" cy="78" r="5" fill="#9cb8d6"/><circle cx="156" cy="78" r="5" fill="#9cb8d6"/><circle cx="196" cy="78" r="5" fill="#2b6cb0"/><circle cx="236" cy="78" r="5" fill="#2b6cb0"/>
<line x1="36" y1="78" x2="236" y2="78" stroke="#cbd5e0" stroke-width="2"/>
<text x="136" y="100" text-anchor="middle" font-size="10" fill="#718096">会って・笑って・わかるよを届けた回数</text>
<path d="M236 78 L284 50" stroke="#b83280" stroke-width="2" marker-end="url(#ar0)"/>
<defs><marker id="ar0" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<circle cx="290" cy="44" r="12" fill="#fff5fa" stroke="#b83280"/>
<text x="290" y="48" text-anchor="middle" font-size="11" fill="#b83280">♥</text>
<text x="290" y="74" text-anchor="middle" font-size="10" fill="#b83280">告白成功</text>
</svg>
<div class="figcap">浅いまま告白すれば引かれる。販売日にできることは前日までに終わってる</div>
</div>
<p>いきなり「付き合って」は振られる。でも何回も会って、悩みを聞いて、味方になってからの告白は通る。ローンチも同じだ。<strong>合言葉は「痛みの代弁が主役・商品の話はおまけ」。</strong>人が惚れるのは商品スペックじゃなく「この人は私をわかってくれる」と感じた瞬間だ。</p>
<div class="warn">ストーリー教育ができていないと、何を売っても買われない。商品の良さは関係ない。温まってない人に売れば「いきなり何？」で終わる。<b>お客が買っているのは商品じゃなく"あなたとの関係"だ。</b></div>

<h2><span class="s">1</span>なぜ売り色を薄めると逆に売れるのか</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="売り色を続けると警戒スイッチが入る">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 6枚全部 売り</text>
<rect x="30" y="34" width="98" height="14" rx="3" fill="#a0aec0"/><rect x="30" y="52" width="98" height="14" rx="3" fill="#a0aec0"/><rect x="30" y="70" width="98" height="14" rx="3" fill="#a0aec0"/>
<text x="79" y="106" text-anchor="middle" font-size="11" fill="#718096">警戒スイッチON</text>
<text x="79" y="120" text-anchor="middle" font-size="11" fill="#718096">どうせ売りたいだけ</text>
<line x1="160" y1="20" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="241" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 売りは1〜2枚</text>
<rect x="192" y="34" width="98" height="14" rx="3" fill="#9cb8d6"/><rect x="192" y="52" width="98" height="14" rx="3" fill="#2b6cb0"/><rect x="192" y="70" width="98" height="14" rx="3" fill="#9cb8d6"/>
<text x="241" y="106" text-anchor="middle" font-size="11" fill="#1e4e7e">日常に溶けて</text>
<text x="241" y="120" text-anchor="middle" font-size="11" fill="#1e4e7e">友達のつぶやきに</text>
</svg>
<div class="figcap">売り色を薄めるのは遠慮じゃない。警戒スイッチを押させない販売戦略だ</div>
</div>
<div class="key"><strong>販売・教育系は1〜2枚だけ。</strong>残りは日常と参加型で「宣伝してる感」を消す。「今日のランチ」のあとに「お金の不安」を置くと、宣伝くささが消えて自然に読める。日常に挟まれた1枚は広告じゃなく"友達のつぶやき"になる。</div>

<h3>1日6枚の組み方</h3>
<div class="fig"><div class="tl">
<div class="slot"><span class="time">朝</span><div class="w2"><b>日常</b>／ごはん・仕事・買い物。生活感で親近感を作る</div></div>
<div class="slot"><span class="time">昼</span><div class="w2"><b>痛みの代弁</b>／「それ私だ」と立ち止まらせる今日の主役。一番見られる時間に置く</div></div>
<div class="slot"><span class="time">夕方</span><div class="w2"><b>参加型</b>／質問・投票で巻き込み、アカウントを温める</div></div>
<div class="slot"><span class="time">夜</span><div class="w2"><b>日常/料理</b>／通常運転で販売色を薄める</div></div>
<div class="slot"><span class="time">夜</span><div class="w2"><b>気づき/自己開示</b>／明日への"引き"を残して終える</div></div>
<div class="slot"><span class="time">夜</span><div class="w2"><b>社会的証明</b>／来た反応を見せる（毎日でなく、ある日だけ）</div></div>
</div></div>
<p><b>痛みは昼、引きは夜。</b>毎回きれいに完結させると次に来る理由が消える。続きが気になる状態で終わると、人は明日も探しに来る。</p>
<p class="note">時間は目安。フォロワーが見てる時間帯（アプリのインサイトで確認）に合わせる。会社員が多いなら朝の通勤前と夜、主婦層が多いなら昼の手すき。「いつ出すか」も相手の生活から逆算しろ。</p>

<h2><span class="s">2</span>ストーリーの「型」完全版（8つと、その奥の理由）</h2>
<p>毎日混ぜる。1つの型ばかりだと飽きてスキップされる。痛みばかりは重い、自慢ばかりは冷める。理由まで分かれば、例文を暗記しなくても自分のジャンルに応用できる。</p>

<div class="tc"><div class="hd">型① 痛みの代弁（最優先・毎日）</div><div class="bd">
<span class="lab">奥の理由：</span>お客が欲しいのは情報じゃなく「わかってもらえた」体験。具体的なシーンを言い当てると「この人、私の中を見たの？」と距離が縮まる。
<div class="good"><b>○</b>「給料日、通帳を見るのがちょっと怖い…って人いない？私、当時まさにそれだった」</div>
<div class="bad"><b>✗</b>「お金の悩みは尽きませんよね」← 抽象的すぎて絵が浮かばない</div>
</div></div>

<div class="tc"><div class="hd">型② 共感・自己開示</div><div class="bd">
<div class="vs"><div class="l"><div class="t">✗ 成功談</div>上下関係ができ、心を開かない</div><div class="r"><div class="t">○ 弱さ・ダサい過去</div>横に並び、心を開く</div></div>
<span class="lab">奥の理由：</span>信頼は「すごい」でなく「私と同じだ」から生まれる。
<div class="good"><b>○</b>「えらそうに言ってるけど、私も最初は何ヶ月も全然ダメで毎晩落ち込んでた」</div>
<div class="bad"><b>✗</b>「私は順調に成功しました」← 自慢は手の届かない遠い人になる</div>
</div></div>

<div class="tc"><div class="hd">型③ 参加型・質問箱（毎日1つ）</div><div class="bd">
<div class="flow"><span>見るだけ＝観客</span><span>1回答えた＝参加者</span><span class="is-goal">愛着が生まれる</span></div>
<span class="lab">奥の理由：</span>人は自分が関わった場所に愛着を持つ。参加させること自体が信頼を積む。まず自分の文脈を置いてから聞く。
<div class="good"><b>○</b>「最近また旅行欲がヤバくて。みんなの"行ってよかった場所"教えて！」</div>
<div class="bad"><b>✗</b>「おすすめの場所教えて」← 唐突でこっちの都合だけに見える</div>
</div></div>

<div class="tc"><div class="hd">型④ 参加型・投票/2択</div><div class="bd">
<div class="flow"><span>小さなYES</span><span>小さなYES</span><span class="is-goal">大きな提案にYES</span></div>
<span class="lab">奥の理由：</span>小さく頷いた相手は、最後の大きな提案にも頷きやすい。2択は"買う方向への助走"になる。
<div class="good"><b>○</b>「今の仕事、明日辞めても生活できるなら…辞める？続ける？」</div>
<div class="bad"><b>✗</b>「この商品ほしい？ほしくない？」← 売り急ぎで一気に引かれる</div>
</div></div>

<div class="tc"><div class="hd">型⑤ 憧れ・理想（押し付けない）</div><div class="bd">
<span class="lab">奥の理由：</span>人は言われたことより自分で見つけたことを信じる。「自由になれます」は宣伝、景色を"見せる"とお客が勝手に「いいな」と思う。
<div class="good"><b>○</b>「平日の昼に好きなカフェで仕事してる。昔の私が一番欲しかった景色がこれ」</div>
<div class="bad"><b>✗</b>「自由な生活最高！あなたもなれます！」← 自分で見つける隙がない</div>
</div></div>

<div class="tc"><div class="hd">型⑥ 社会的証明（階段で増やす）</div><div class="bd">
<div class="flow"><span>1件</span><span>数件</span><span>たくさん</span><span class="is-goal">実例</span></div>
<span class="lab">奥の理由：</span>少しずつ増える様子は"本物が育つ過程"に見えて信じられる。いきなり大量だと「盛ってる」と勘づかれる。来た声を画面ごと見せる（許可をとる/名前は隠す）。
<div class="good"><b>○</b>「昨日の話、気づいたら感想こんなに来てた…ありがとう（画面）」</div>
<div class="bad"><b>✗</b>作り話・架空の声 ← 一発でバレて信頼が一生戻らない</div>
</div></div>

<div class="tc"><div class="hd">型⑦ 反論つぶし（販売前に）</div><div class="bd">
<p>「買えない理由」を先に消す。残ると人は買わない。</p>
<div class="stats">
<div class="stat-c"><div class="n">お金</div><div class="l">高くない？</div></div>
<div class="stat-c"><div class="n">時間</div><div class="l">続けられる？</div></div>
<div class="stat-c"><div class="n">自信</div><div class="l">私にできる？</div></div>
</div>
<span class="lab">奥の理由：</span>不安を"こちらから先に言葉にする"と「この人わかってる」とさらに信頼が増す。反論つぶしは説得でなく共感の続き。
<div class="good"><b>○</b>「"自分にできるか不安"って来たけど、できないから一緒にやるんだよ」</div>
<div class="bad"><b>✗</b>不安に触れず「とにかく買って！」← 不安が残ったまま離脱</div>
</div></div>

<div class="tc"><div class="hd">型⑧ 気づき・価値提供</div><div class="bd">
<span class="lab">奥の理由：</span>もらうと「お返ししたい」が湧く。無料で価値を渡すのは"信頼の前払い"。出し惜しみは逆効果、惜しみなく渡すと「無料でこれなら有料は…」と期待が育つ。結論を1つだけズバッと。
<div class="good"><b>○</b>「伸びない人ほど"発信内容"から考えて失敗する。順番が逆。最初に決めるのは…」</div>
<div class="bad"><b>✗</b>長い・結論がぼやける・教科書みたい ← 最後まで見られない</div>
</div></div>

<h2><span class="s">3</span>文章の型で書く（PREP・PASONA）</h2>
<p>「何を書くか（8つの型）」が決まったら「どう言葉を組むか」。型は、伝わる順番を保証する"線路"だ。感情任せだと言いたいことが後ろに行き、読み手が途中で離れる。</p>

<div class="tc"><div class="hd">PREP法｜短い「気づき・教育」に（1〜4枚）</div><div class="bd">
<div class="flow"><span>P 結論</span><span>R 理由</span><span>E 具体例</span><span class="is-goal">P 結論+一歩</span></div>
<p><b>なぜ結論を先に：</b>ストーリーは指1本で飛ばされる。最初の1枚で止めないと理由まで読まれない。1枚＝1要素で割る。</p>
<div class="draft"><b>1枚 P：</b>SNSで伸びない人ほど"発信内容"から考えてる。順番が逆<br><b>2枚 R：</b>先に「誰に・何を」を決めないと投稿がブレるから<br><b>3枚 E：</b>私も好きな投稿ばかりで何ヶ月も伸びなかった。順番を変えたら一気に変わった<br><b>4枚 P：</b>だからまず"誰に"から。気になる人はメッセージに『フリーランス』って送って</div>
</div></div>

<div class="tc"><div class="hd">PASONA法｜1日かけて「販売・告知」に（5〜6枚）</div><div class="bd">
<div class="flow"><span>P 問題</span><span>A 共感</span><span>S 解決</span><span>O 提案</span><span>N 絞る</span><span class="is-goal">A 行動</span></div>
<p><b>なぜこの順番：</b>人は「問題→わかってもらえて→出口が見えて→背中を押されて」初めて動く。いきなり解決策から入ると気持ちが温まっておらず「で？」で終わる。1フレーム＝1ステップ。</p>
<div class="draft"><b>① P：</b>給料、何年も上がってないですよね…<br><b>② A：</b>私も会社員時代、給料日に通帳見てため息ついてた。痛いほどわかる<br><b>③ S：</b>変わったのは"設計"を知ってから。才能でなく順番があるだけ<br><b>④ O：</b>その順番をまとめた「設計書」、明日21時に出します<br><b>⑤ N：</b>本気で変えたい人だけでいい<br><b>⑥ A：</b>明日21時。見逃したくない人は『フリーランス』送って＆通知ON</div>
<p class="note">⑤の「絞る」を怖がる人が多い。でも逆だ。間口を広げるほど人は「自分じゃなくてもいいか」と動かない。絞られると「自分に向けて言われた」と前に出てくる。</p>
</div></div>

<h3>どっちを使う？</h3>
<table>
<tr><th>こんな日</th><th>使う型</th></tr>
<tr><td>気づき・価値提供・常識否定（短い教育）</td><td>PREP</td></tr>
<tr><td>共感→告知→行動（売りに向かう日）</td><td>PASONA</td></tr>
<tr><td>サッと注意を引く単発</td><td>AIDA（注意→興味→欲しい→行動）</td></tr>
</table>
<div class="vs">
<div class="l"><div class="t">✗ 型のまま機械的に</div>「結論。理由。具体例。」と固いまま。型がバレた時点で負け。お客は「説得されてる」と警戒する。</div>
<div class="r"><div class="t">○ 口語に崩す</div>型は「下書きの骨」。「〜なんです」→「〜なんだよね」。骨は中に隠し、表に出すのは"友達の話し方"だけ。</div>
</div>

<h2><span class="s">4</span>14日でどの型をいつ使うか（順番が命）</h2>
<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="気持ちの段階">
<text x="160" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">飛ばすと崩れる4段の階段</text>
<rect x="24" y="112" width="64" height="24" rx="4" fill="#9cb8d6"/><text x="56" y="128" text-anchor="middle" font-size="10" fill="#1e4e7e">わかって<tspan x="56" dy="0">もらえた</tspan></text>
<rect x="92" y="88" width="64" height="24" rx="4" fill="#2b6cb0"/><text x="124" y="104" text-anchor="middle" font-size="10" fill="#fff">この人すごい</text>
<rect x="160" y="64" width="64" height="24" rx="4" fill="#2b6cb0"/><text x="192" y="79" text-anchor="middle" font-size="10" fill="#fff">不安が消えた</text>
<rect x="228" y="40" width="68" height="24" rx="4" fill="#b83280"/><text x="262" y="55" text-anchor="middle" font-size="10" fill="#fff">欲しい→買う</text>
<text x="160" y="148" text-anchor="middle" font-size="10" fill="#718096">下の段を飛ばして上に行っても響かない</text>
</svg>
<div class="figcap">焦って前半をすっ飛ばすと、後半でいくら頑張っても売れない</div>
</div>
<div class="fig"><div class="tl">
<div class="slot"><span class="time">1〜4日</span><div class="w2"><b>①痛み ②共感 ③④参加型 ⑤憧れ</b>／「それ私だ」と立ち止まらせ温める。売りの話は一切しない。"わかってもらえた"を貯める</div></div>
<div class="slot"><span class="time">5〜7日</span><div class="w2"><b>⑧価値提供 ⑥社会的証明（弱）</b>／無料で価値を渡し「この人すごい」＋信頼の前払い</div></div>
<div class="slot"><span class="time">8〜11日</span><div class="w2"><b>⑥社会的証明（強） ⑦反論つぶし</b>／みんな来てる安心感＋"欲しいけど不安"の不安を削る</div></div>
<div class="slot"><span class="time">12日</span><div class="w2"><b>告知</b>／前夜に価格・特典・締切を出し、期待を最大化</div></div>
<div class="slot"><span class="time">13〜15日</span><div class="w2"><b>実況・社会的証明・締切</b>／一気に売る。「もう動いてる」でシーンとさせない</div></div>
</div></div>
<div class="warn">初心者が一番やらかすのが「いきなり12日目から始める」こと。温めゼロで告知だけ出して反応ゼロ。<b>前半11日の積み上げが全て。販売日に頑張るんじゃない。販売日までに頑張るんだ。</b></div>

<h2><span class="s">5</span>リアクションを増やす技術</h2>
<div class="flowbig">
<span>反応が増える</span><span>表示が伸びる</span><span class="is-goal">見込み客が増える</span>
</div>
<p>アプリは「よく反応される投稿」を優先して人に見せる。反応はそのまま追い風になり新しい目に触れる。反応を増やすのは見栄えのためでなく"関係を増やす入口"だ。</p>
<div class="step"><span class="sn">1</span><span class="snm">質問は答えやすく</span><p>自由記述より2択・スタンプ。自由を与えるほど人は止まる。</p></div>
<div class="step"><span class="sn">2</span><span class="snm">来た回答に必ず返す</span><p>返ってくるとまた答えたくなる。一度無視されると二度と参加しない。</p></div>
<div class="step"><span class="sn">3</span><span class="snm">「あなたはどう？」を口ぐせに</span><p>一方的に話すと観客になる。必ず相手に振って参加者に変える。</p></div>
<div class="step"><span class="sn">4</span><span class="snm">クイズ・穴埋め</span><p>「○○だと思う人？」で参加のハードルを下げる。考える隙＝参加の隙。</p></div>
<div class="step"><span class="sn">5</span><span class="snm">メッセージを誘う</span><p>「気になる人は"○○"送って」で集団から個へ。</p></div>
<div class="vs">
<div class="l"><div class="t">✗ 反応に無反応</div>投票してくれたのに返さない。「答えても意味ない」と学習され冷えていく。</div>
<div class="r"><div class="t">○ 必ず触れる</div>「○○って答えた人多かった！」と翌日拾う。承認が次の参加を生む。</div>
</div>

<h2><span class="s">6</span>見せ方とメッセージ誘導（リストの入口）</h2>
<div class="key">どんなに良い話も、最初の1行で止められなければ存在しないのと同じ。スマホで指が止まるか流れるかは一瞬で決まる。<strong>そこが勝負時間だ。</strong></div>
<div class="step"><span class="sn">A</span><span class="snm">文字は少なく</span><p>1枚に詰め込まない。詰まった画面は読む前に飛ばされる。</p></div>
<div class="step"><span class="sn">B</span><span class="snm">最初の1行で止める</span><p>痛み・意外・問いかけ。脳は"自分に関係ある"と感じた瞬間に止まる。</p></div>
<div class="step"><span class="sn">C</span><span class="snm">テンポ</span><p>1つの話を2〜4枚で。長い話は分けて"次が気になる"を作る。</p></div>
<div class="step"><span class="sn">D</span><span class="snm">スタンプ・ハイライト</span><p>質問・投票で参加の入口を増やす。「①きっかけ②変化③声」で残し、途中から来た人が一気見できる。</p></div>
<p>価値を出したら、見込み客を1対1の関係＝リストに変える。<b>なぜ一手間かけさせるか：</b>誰が本気の見込み客かがはっきりし、自分から動いた人ほど関係が続く。一手間は、ふるいであり関係の始まりの儀式だ。</p>
<div class="good"><b>○</b>「この続き（○○のテンプレ）が欲しい人は、メッセージに『○○』って送って。送るね」</div>
<p class="note">送ってくれた人＝見込み客。こまめに返信して関係を作ると、販売日の告知が届く。アプリは「やり取りの多い相手」の投稿を優先して上に出すから、1対1でつながっている人ほど告知が見える。日頃の返信は、優しさであると同時に"販売日に告知を届ける仕込み"だ。</p>

<h2><span class="s">7</span>販売日のストーリー実況</h2>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="シーンとした店と賑わう店">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ シーン…</text>
<text x="75" y="68" text-anchor="middle" font-size="11" fill="#a0aec0">売れてないのかな</text>
<text x="75" y="84" text-anchor="middle" font-size="11" fill="#a0aec0">＝不安で入れない</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ もう動いてる</text>
<text x="245" y="68" text-anchor="middle" font-size="11" fill="#1e4e7e">人がいる気配</text>
<text x="245" y="84" text-anchor="middle" font-size="11" fill="#1e4e7e">＝安心して入れる</text>
</svg>
<div class="figcap">人がいる気配そのものが、迷う人の最後の一押しになる</div>
</div>
<div class="step"><span class="sn">前夜</span><span class="snm">予告</span><p>「明日○時に出します」＋価格・特典・締切。心の準備をさせ当日の決断を軽くする。</p></div>
<div class="step"><span class="sn">開始</span><span class="snm">告知</span><p>「出ました！」＋リスト案内＋ベネフィット総まとめ。人は買う直前に"自分の未来"をもう一度見たい。</p></div>
<div class="step"><span class="sn">販売中</span><span class="snm">実況</span><p>「もう動いてる」「感想きた（画面）」。沈黙は不安を、賑わいは安心を生む。</p></div>
<div class="step"><span class="sn">締切前</span><span class="snm">背中押し</span><p>カウントダウン。「迷ってるなら、それは欲しいってこと」。締切が決断を生む。</p></div>

<h2><span class="s">8</span>ネタが尽きない出し方＆NG集</h2>
<p>「毎日6枚も無理」で止まる人が多い。でもネタは無限。<strong>枠を狭くするほどアイデアは湧く。</strong>下の引き出しを毎日ひとつずつ開ければいい。</p>
<div class="stats">
<div class="stat-c"><div class="n">1</div><div class="l">来たメッセージ・コメント（本物が一番刺さる）</div></div>
<div class="stat-c"><div class="n">2</div><div class="l">お客の本音（悩み・憧れ・不安を1日1つ）</div></div>
<div class="stat-c"><div class="n">3</div><div class="l">自分の過去（どん底・転機・失敗）</div></div>
<div class="stat-c"><div class="n">4</div><div class="l">日常の一コマ（仕事・食事・買い物）</div></div>
<div class="stat-c"><div class="n">5</div><div class="l">ニュース・季節（共通の入口になる）</div></div>
</div>
<div class="warn">NG集（なぜダメかも一緒に覚える）：<br>・売りの話ばかり → 警戒スイッチで離脱<br>・自分の自慢ばかり → 人は自分の話にしか興味がない。主役を奪われると見なくなる<br>・急に売り出す → 関係前の告白。「いきなり何？」<br>・反応に無反応 → 「答えても無駄」と学習され誰も参加しない<br>・盛った数字・作り話 → バレた瞬間に信頼が死ぬ。戻らない<br>・長い・結論がない → 指で飛ばされる</div>

<h2><span class="s">9</span>検品：その日のストーリーは"会話"か</h2>
<p>出す前でなく、組む前にこれで検品する。1つでも欠けると"ただの日記"か"ただの宣伝"に落ちる。</p>
<div class="check"><ul>
<li>「痛みの代弁」を1枚入れたか（それ私だ、と思わせたか）</li>
<li>「参加型」を1つ入れたか（観客を参加者にしたか）</li>
<li>売り色は1〜2枚に抑えたか（残りは日常で警戒を解いたか）</li>
<li>来た反応・メッセージに返したか（承認で次の参加を生んだか）</li>
<li>最後の1枚に"次への引き"を残したか（明日来る理由を作ったか）</li>
<li>主役は「お客」になっているか（自慢で主役を奪っていないか）</li>
<li>先生になっていないか（隣の友達の自己開示で並べたか）</li>
</ul></div>

<div class="end">ストーリーは"宣伝"じゃない。<br>お客が欲しいのは情報でも商品でもなく「わかってもらえる体験」だ。<br>だから——<strong>14日かけて痛みを代弁し、味方になり、"欲しい"を育てろ。</strong><br>物は、関係ができた後に勝手に売れる。</div>
</div>
  `,
  'p5-letter': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>販売noteは「物語」じゃなく「ループ」で売れる、その理由</li>
<li>なぜ"同じ悩み"を何度も出すと、しつこくならずに「欲しい」が積み上がるのか</li>
<li>つかみ→ループ本体→クロージングの3部構成と各ブロックの狙い</li>
<li>「悩み→恐怖→解決→未来→証拠」を角度を変えて回す書き方</li>
<li>悩み（ネガ）と願望（ポジ）の作り分けと、交互だと動く理由</li>
<li>そのまま埋めれば1本完成する、フリーランス版の全文通し例</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>
<p>うまくいかない人の失敗はほぼ1つ。<strong>「長い物語」を書こうとすることだ。</strong>過去をダラダラ語って最後に「だから作りました」。これは読まれない。<strong>読者は他人の半生に興味がない。自分の悩みが解決するかにしか興味がない。</strong></p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="物語の線とループの渦">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 物語＝線</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ ループ＝渦</text>
<line x1="24" y1="80" x2="134" y2="80" stroke="#a0aec0" stroke-width="3"/>
<circle cx="134" cy="80" r="5" fill="#a0aec0"/>
<text x="79" y="116" text-anchor="middle" font-size="11" fill="#718096">通り過ぎたら終わり</text>
<path d="M241 88 m0 -6 a6 6 0 1 1 -0.1 0 M241 88 m0 -16 a16 16 0 1 1 -0.1 0 M241 88 m0 -26 a26 26 0 1 1 -0.1 0" fill="none" stroke="#2b6cb0" stroke-width="2.5"/>
<circle cx="241" cy="62" r="4" fill="#b83280"/>
<text x="241" y="124" text-anchor="middle" font-size="11" fill="#1e4e7e">回るたび深く巻き込む</text>
</svg>
<div class="figcap">線は一度で終わる。渦は同じ場所を回って読者を深く沈める</div>
</div>

<div class="key">正解は<strong>「ループ」</strong>。<strong>同じ「悩み→恐怖→解決→未来→証拠」を、角度を変えて何度も回す。</strong>回すたびに「欲しい」が積み上がる。物語は線、ループは渦だ。</div>

<h3>なぜ物語は売れず、ループは売れるのか</h3>
<div class="vs">
<div class="l"><div class="t">✗ 物語</div>半生を語るほど主役は"あなた"。読者は観客席へ。観客は感心しても財布を開かない。</div>
<div class="r"><div class="t">○ ループ</div>毎周「あなたの悩み、これだよね？」と問う。主役の椅子が毎回読者に向く。自分の話から人は離れられない。</div>
</div>

<div class="key">一番効いてる正体は<strong>「悩みの箇条書きを何度も畳み掛けること」</strong>。1回だけは素人。プロは形を変えて何度も刺す。<strong>奥にある理由：人は1回見ただけのものは"他人事"で流す。同じ痛みに3回触れて初めて「放置できない自分の問題だ」と腹落ちする。</strong></div>

<div class="flowbig">
<span>1回目<br>通り過ぎる</span><span>2回目<br>立ち止まる</span><span class="is-goal">3回目<br>動く</span>
</div>

<p>しつこさが出ないのは置き場所を変えるから。同じ悩みでも「現状」「将来」「最後の駄目押し」と角度をずらせば「また同じ話」でなく「その面もそうだ」になる。<strong>同じ素材を、違う光で照らす。</strong></p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="5ステップのループ">
<defs><marker id="lp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker></defs>
<circle cx="160" cy="75" r="58" fill="none" stroke="#cbd5e0" stroke-width="1.5" stroke-dasharray="4 4"/>
<g font-size="11" font-weight="700">
<rect x="128" y="6" width="64" height="22" rx="11" fill="#2b6cb0"/><text x="160" y="21" text-anchor="middle" fill="#fff">悩み</text>
<rect x="232" y="50" width="64" height="22" rx="11" fill="#2b6cb0"/><text x="264" y="65" text-anchor="middle" fill="#fff">恐怖</text>
<rect x="206" y="116" width="64" height="22" rx="11" fill="#2b6cb0"/><text x="238" y="131" text-anchor="middle" fill="#fff">解決</text>
<rect x="50" y="116" width="64" height="22" rx="11" fill="#2b6cb0"/><text x="82" y="131" text-anchor="middle" fill="#fff">未来</text>
<rect x="24" y="50" width="64" height="22" rx="11" fill="#b83280"/><text x="56" y="65" text-anchor="middle" fill="#fff">証拠 ↻</text>
</g>
</svg>
<div class="figcap">この5つを2〜4周。安い商品は2周、高い商品は3〜4周で買わない理由を潰す</div>
</div>
<div class="warn">勘違いするな。「ループ＝同じ文章のコピペ」じゃない。<b>同じ"悩みの核"を、毎回ちがう言葉・ちがう時間軸で出す。</b>核は同じ、見せ方は別。取り違えるとただのしつこい文章になる。</div>

<h2><span class="s">1</span>全体の骨格（3部構成）</h2>
<p>販売noteは3つの箱でできてる。この地図がないと書く途中で迷子になる。箱に中身を放り込むだけで形になる。</p>
<table>
<tr><th>部</th><th>役割</th><th>中身</th></tr>
<tr><td>A. つかみ</td><td>3秒で引き込む</td><td>再定義フック → 警告で証拠先出し → 絞り込み</td></tr>
<tr><td>B. ループ本体 ★</td><td>「欲しい」を積む</td><td>悩み連打 → 常識否定 → 恐怖 → 原理 → 証拠 → 未来…を反復</td></tr>
<tr><td>C. クロージング</td><td>背中を押して売る</td><td>解決宣言 → 不安消し → 特典 → 目次 → 価格＋ボリューム</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3部の重みの違い">
<rect x="8" y="35" width="60" height="40" rx="8" fill="#9cb8d6"/><text x="38" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">A</text>
<rect x="84" y="12" width="152" height="86" rx="10" fill="#2b6cb0"/><text x="160" y="50" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">B ループ本体</text><text x="160" y="70" text-anchor="middle" font-size="11" fill="#cdddec">ここが心臓</text>
<rect x="252" y="35" width="60" height="40" rx="8" fill="#9cb8d6"/><text x="282" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">C</text>
<text x="38" y="92" text-anchor="middle" font-size="10" fill="#718096">入口</text>
<text x="282" y="92" text-anchor="middle" font-size="10" fill="#718096">出口</text>
</svg>
<div class="figcap">分量も大事さもBが最大。AとCは型通りに埋めろ</div>
</div>

<div class="key">主役は<strong>B</strong>。<strong>奥にある理由：人は「欲しい」と思ってから理由を探す。</strong>Bで感情の「欲しい」を積めなければ、Cで価格やお得感を頑張っても受け取る器がない。Bが効いていれば、Cは軽く押すだけで決まる。料理と同じ。Aは匂いで引き込む、Bは味を何度も感じさせる、Cはお会計。<b>味が薄ければ2度と来ない。Bが命だ。</b></div>

<h2><span class="s">2</span>A. つかみ（最初の3手）</h2>
<p>最初の3秒で引き込めなければ、その先は読まれない。<strong>奥にある理由：人は「自分に関係ない」と判断した瞬間に閉じる。</strong>つかみは「これは私の話だ」と一瞬で錯覚させる勝負。決まった3手を順番通りに置け。</p>

<div class="step"><span class="sn">A-1</span><span class="snm">再定義フック</span>
<p>商品を独自の強い言葉で言い換える。「作業」を「資産」に、「方法」を「設計図」に。読者が一瞬で価値を感じる名詞を選ぶ。</p>
<div class="draft">「SNS設計」とは——あなたの過去の経験を、毎月お金を生む「資産」に変える設計図のこと。</div>
<span class="note"><b>奥にある理由：</b>人は中身そのものより「自分にとって何を意味するか」で価値を測る。言葉が、頭の中の値札を書き換える。</span></div>

<div class="step"><span class="sn">A-2</span><span class="snm">警告で「証拠」を先出し</span>
<p>お客の声を「注意書き」で冒頭に置く。結果を先に見せ「覚悟のある人だけ」と突き放す。最初に結果を見た読者は「私もなれるかも」で本文に入る。</p>
<div class="draft">【注意】効果がありすぎて「思ったより早く会社を辞めたくなった」という声が続いた。覚悟のある人だけ読んでくれ。</div>
<span class="note"><b>奥にある理由：</b>人は禁じられたものほど欲しくなる。「覚悟のある人だけ」と突き放されると「自分はその側だ」と証明したくて先を読む。突き放すことが引き込みになる。</span></div>

<div class="step"><span class="sn">A-3</span><span class="snm">絞り込み</span>
<p>「興味がある人だけ」と自分ごとの人を選別する。<strong>万人向けは無人向けだと思え。</strong></p>
<div class="draft">少しでも「今のままじゃ嫌だ」と思ったことがある人だけ、この先を読み進めてくれ。</div>
<span class="note"><b>奥にある理由：</b>「みんなにおすすめ」を人は自分のものと感じない。条件を付けられると当てはまる人は「名指しされた」と前のめりになる。客を減らす行為に見えて、残った客の本気度を上げる。</span></div>

<h2><span class="s">3</span>B. ループ本体（★主役）</h2>
<p>ここが心臓。1周ごとに切り口を変えて回す。記号（B-1…）はブロックの名前。自分のnoteには書かず、中身だけ埋める。</p>

<h3>▼ 1周目：現状の悩み</h3>
<div class="grp"><div class="gh">1周目で使うブロック</div><div class="gb">
<div class="rule"><span class="rn">B-1 意地悪な質問</span><span class="gb2">「今の給料、あと10年このままで大丈夫って言えるか？」</span></div>
<div class="rule"><span class="rn">B-2 悩み連打①（現状）</span><span class="gb2">具体的な"あるある"の瞬間で。きれいにまとめない</span></div>
<div class="rule"><span class="rn">B-3 常識否定</span><span class="gb2">信じてる嘘を壊す。「才能がある人だけ成功する→逆だ」</span></div>
<div class="rule"><span class="rn">B-4 わかること</span><span class="gb2">好奇心の穴。禁断／たった1つ／最短 などの強ワード</span></div>
<div class="rule"><span class="rn">B-5 再現性の約束</span><span class="gb2">「この通りにやれば、0から、誰でも」</span></div>
</div></div>
<p>入り口が質問なのは、<strong>人は問われると勝手に答えを探すから。</strong>「大丈夫か？」で読者は自分の通帳を思い浮かべ、自分で自分を不安にしてくれる。命令より質問の方が、相手が自分から動く。</p>
<p>そしてB-2の悩み連打が命。ここで初心者は抽象的に書いて失敗する。<strong>「給料日に通帳を見てため息」という"瞬間"を描け。</strong>時間・場所・動作の3つで一気に映像になる。</p>
<div class="vs">
<div class="l"><div class="t">✗ 抽象（刺さらない）</div>・お金の不安がある<br>・将来が心配<br>・自分を変えたい</div>
<div class="r"><div class="t">○ 瞬間で描く（刺さる）</div>・給料日に通帳を見て、ため息をついた<br>・日曜の夜になると、胸がザワつく<br>・同期の昇進・結婚報告を素直に喜べない<br>・「変わりたい」と思って何年も経った</div>
</div>
<div class="key">違いは<strong>「瞬間があるか」</strong>。<strong>奥にある理由：脳は抽象では映像を作れない。映像が浮かんで初めて感情が動く。</strong>読者が「昨日それやった」と言いそうな場面を3つ書き出せ。</div>
<p>B-3の常識否定は頭に「えっ」を作る。<strong>奥にある理由：人は信じていた前提を崩されると、続きを聞かずにいられない。</strong>「逆だ」とぶつけると穴が開き、埋めたくて先を読む。B-4はその穴を広げて目次へつなぐ。</p>

<h3>▼ 2周目：将来の恐怖＋原理</h3>
<div class="grp"><div class="gh">2周目で使うブロック</div><div class="gb">
<div class="rule"><span class="rn">B-6 損失回避＋悩み②（将来）</span><span class="gb2">「今動かないと、こうなる」で未来の痛みを箇条書き</span></div>
<div class="rule"><span class="rn">B-7 原理</span><span class="gb2">なぜそうなるか。簡単なロジックで「だから必要」を納得</span></div>
<div class="rule"><span class="rn">B-8 証拠①（感想スクショ）</span><span class="gb2">ループの途中に挟む。最後にまとめない</span></div>
</div></div>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="得る喜びより失う痛み">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">買えばこうなる</text>
<text x="75" y="76" text-anchor="middle" font-size="11" fill="#a0aec0">得る喜び</text>
<text x="160" y="65" text-anchor="middle" font-size="18" fill="#cbd5e0">＜</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">動かないと失う</text>
<text x="245" y="76" text-anchor="middle" font-size="11" fill="#2b6cb0">失う痛み</text>
</svg>
<div class="figcap">人は得る喜びより、今あるものを失う痛みを強く感じる</div>
</div>
<p>1周目は「今」、2周目は「将来」。時間軸を未来へずらすのが角度を変えること。「今これだよね」の直後に「このまま行くとこうなる」で放置のコストが重くなる。恐怖は煽りでなく、動かないコストを正しく見せるためにある。</p>
<div class="draft"><b>B-6 恐怖：</b>今動かないと——<br>・1年後も、同じ給料・同じため息<br>・「あの時やってれば」が口癖になる<br>・年下に追い抜かれて、焦りだけが増える</div>
<p>B-7の原理が、ただの煽りを「教育」に変える。なぜ続かないかを簡単なロジックで説明する。<strong>納得した人だけが財布を開く。</strong>理由がないと「結局売りたいだけだろ」と冷める。</p>
<div class="draft"><b>B-7 原理：</b>人が続けられるのは「手応え」があるから。型が無いと手応えが出ず、多くの人が途中でやめる。だから「型」が要る。</div>
<div class="warn">B-7で数字を盛るな。割合は裏が取れないなら使わない。「多くの人が」で十分。<b>裏の取れない数字は信頼を一発で壊す。</b>一度「盛る人」と思われたら、その先の言葉が全部疑われる。</div>
<p>B-8の証拠を最後にまとめずループの途中に挟むのにも理由がある。<strong>奥にある理由：人は「言われたこと」より「自分で見たもの」を信じる。</strong>恐怖の直後に変わった人の声を見せると「この不安はこれで消せる」という橋がかかる。合間に挟むから毎回かかる。</p>

<h3>▼ 3周目：願望＋未来</h3>
<div class="grp"><div class="gh">3周目で使うブロック</div><div class="gb">
<div class="rule"><span class="rn">B-9 願望の箇条書き（ポジ）</span><span class="gb2">悩みとは別に「こうなりたい」を列挙。絵文字OK</span></div>
<div class="rule"><span class="rn">B-10 未来をセリフで見せる</span><span class="gb2">お客や周りの"言葉"で未来を描く</span></div>
<div class="rule"><span class="rn">B-11 証拠②（また感想）</span><span class="gb2">2回目の証拠。1周目とは別の声を出す</span></div>
</div></div>
<p>1・2周目はネガで刺した。3周目はポジで引き上げる。<strong>奥にある理由：痛みだけだと人は逃げたくなり、ページ自体から離れる。</strong>痛みで掘った穴に希望を流し込む。穴を掘りっぱなしにするな。</p>
<div class="draft"><b>B-9 願望：</b><br>・好きな場所で、好きな時間に働きたい😌<br>・自分の力で稼げる自信がほしい<br>・「すごいね」って言われたい🤍<br>・もう、お金で諦めたくない</div>
<p>B-10は未来を「セリフ」で見せる。「自由になれます」と説明するな。当事者の口から出た言葉で見せろ。説明はナレーション、セリフは主演だ。</p>
<div class="vs">
<div class="l"><div class="t">✗ 説明（薄い）</div>このnoteを実践すれば、会社に縛られない自由な生き方が手に入る。</div>
<div class="r"><div class="t">○ セリフ（濃い）</div>「会社、辞めました」「今が一番自由です」——そんな報告が、あなたからも届く。</div>
</div>
<div class="key">セリフは頭の中で「自分が言ってる場面」を再生させる。これが未来の疑似体験だ。<strong>買う前に「もう手に入れた感覚」を作れたら勝ち。</strong>実際に届いた感想の言葉をそのまま使うと、作り物っぽさが消えて一番リアルになる。</div>
<p>B-11の2回目の証拠は別の声を出す。<strong>奥にある理由：同じ人の声を2回だと「たまたまその人」に見える。違う人を重ねると「いろんな人に効く」に変わる。</strong>声の数でなく種類が信頼を作る。</p>

<h2><span class="s">4</span>C. クロージング（売り切る）</h2>
<p>「欲しい」を積んだら背中を押す。順番が決まっている。特に<strong>価格は一番最後</strong>。1つ入れ替えるだけで売れなくなる。</p>
<div class="flow">
<span>C-1 解決宣言</span><span>C-2 継続価値</span><span>C-3 不安消し</span><span>C-4 特典</span><span>C-5 目次</span><span class="is-goal">C-6 価格</span>
</div>
<div class="step"><span class="sn">C-1</span><span class="snm">解決宣言＋悩み再掲</span>
<div class="draft">・給料への不安・このままの恐怖・「私には無理」——そんな悩みも、今日で終わりだ。</div>
<span class="note">冒頭から繰り返した悩みに「終止符」を打つ。ループの締めだ。<b>奥にある理由：</b>始まりと終わりがつながった話に人は「完結した」満足を感じる。閉じた満足が決断を後押しする。</span></div>
<div class="step"><span class="sn">C-2</span><span class="snm">実務注意（継続価値）</span>
<div class="draft">このnoteは更新し続ける。登録してから買うと、更新分もずっと読める。</div>
<span class="note"><b>奥にある理由：</b>人は「後で買えばいい」と先延ばしする。「今買うほど得」を見せると先延ばしのコストが生まれ、今動く理由になる。</span></div>
<div class="step"><span class="sn">C-3</span><span class="snm">買えない理由を消す</span>
<div class="draft">クレジットカード以外でも買える。分からないことは気軽にメッセージしてくれ。</div>
<span class="note"><b>奥にある理由：</b>「欲しい」と思っても人は小さな引っかかり1つで離脱する。「支払い方法が分からない」程度でも言い訳になる。買わない口実を奪う。</span></div>
<div class="step"><span class="sn">C-4</span><span class="snm">無料特典</span>
<div class="draft">購入者限定で「最初の1週間の投稿テンプレ」を無料プレゼント（最後にある）。</div>
<span class="note"><b>奥にある理由：</b>おまけで人は得した気になる。さらに「最初の1週間のテンプレ」は買った後の不安まで消す。価値の上乗せと不安消しを同時にやる。</span></div>
<div class="step"><span class="sn">C-5</span><span class="snm">目次（好奇心の穴を並べる）</span>
<div class="draft">【1】多くの人がやる"逆の順番" /【2】最初に決めるたった3つ /【3】0→1万円の導線 …</div>
<span class="note">「中身の説明」でなく「続きが気になる見出し」を並べる。<b>奥にある理由：</b>人は見えそうで見えないものに手を伸ばす。「逆の順番」だけ書くと「何が逆だ」と知りたくなる。穴を量産する装置だ。</span></div>
<div class="step"><span class="sn">C-6</span><span class="snm">価格＋ボリューム証明</span>
<div class="draft">ここから先は——（例）1万5千字 / 図解十数枚。価格はここで初めて出す。</div>
<span class="note">量を見せてから、やっと価格。<b>奥にある理由：</b>人は価格を「何と比べるか」で判断する。先に量を見せると基準ができ、同じ価格でも安く感じる。字数や枚数は自分のnoteの実数を入れろ。盛るな。</span></div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="価値を積んでから価格">
<text x="79" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 先に価格</text>
<rect x="40" y="80" width="78" height="26" rx="6" fill="#a0aec0"/><text x="79" y="98" text-anchor="middle" font-size="11" fill="#fff">価格</text>
<text x="79" y="124" text-anchor="middle" font-size="11" fill="#718096">基準ゼロ→「高い」</text>
<line x1="160" y1="14" x2="160" y2="120" stroke="#e2e8f0"/>
<text x="245" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 価値を積んでから</text>
<rect x="206" y="86" width="78" height="14" rx="3" fill="#9cb8d6"/><rect x="206" y="68" width="78" height="14" rx="3" fill="#9cb8d6"/><rect x="206" y="50" width="78" height="14" rx="3" fill="#9cb8d6"/>
<rect x="206" y="30" width="78" height="16" rx="4" fill="#b83280"/><text x="245" y="42" text-anchor="middle" font-size="10" fill="#fff">価格</text>
<text x="245" y="124" text-anchor="middle" font-size="11" fill="#1e4e7e">基準あり→「安い」</text>
</svg>
<div class="figcap">量・特典・未来を積み上げてから、最後に価格</div>
</div>
<div class="warn">価格を最初や途中に出すな。<b>基準が頭にない状態で数字だけ見せられると、人は反射的に高いと感じる。</b>順番を守るだけで売れ方が変わる。</div>

<h2><span class="s">5</span>2種類の箇条書きを「作り分ける」</h2>
<p>箇条書きには<strong>2種類あって役割が違う</strong>。混同すると刺さらない。書く前に「ネガかポジか」を毎回問え。</p>
<table>
<tr><th>種類</th><th>役割</th><th>例</th></tr>
<tr><td>悩み（ネガ）</td><td>「それ私だ」共感＋恐怖</td><td>給料日にため息／日曜の夜が憂鬱</td></tr>
<tr><td>願望（ポジ）</td><td>「こうなりたい」憧れ</td><td>好きな場所で働きたい😌／見返したい</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ネガとポジの振り子">
<line x1="160" y1="20" x2="160" y2="50" stroke="#cbd5e0" stroke-width="2"/>
<circle cx="160" cy="20" r="5" fill="#a0aec0"/>
<line x1="160" y1="50" x2="70" y2="95" stroke="#2b6cb0" stroke-width="2.5"/>
<circle cx="70" cy="95" r="20" fill="#eaf1f8" stroke="#2b6cb0"/><text x="70" y="99" text-anchor="middle" font-size="11" font-weight="700" fill="#1e4e7e">ネガ</text>
<line x1="160" y1="50" x2="250" y2="95" stroke="#b83280" stroke-width="2.5" stroke-dasharray="4 3"/>
<circle cx="250" cy="95" r="20" fill="#fff5fa" stroke="#b83280"/><text x="250" y="99" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">ポジ</text>
<text x="160" y="122" text-anchor="middle" font-size="11" fill="#718096">ネガ→ポジの「落差」が感情を動かす</text>
</svg>
<div class="figcap">寒い外から暖かい部屋へ。寒さを感じさせてから暖かさが沁みる</div>
</div>

<div class="key">売れるnoteは<strong>この2種類を交互に</strong>使う。ネガで刺し、ポジで引き上げる。<strong>奥にある理由：感情は「差」でしか動かない。</strong>ずっと暗いと麻痺し、ずっと明るいとありがたみが消える。順番は必ずネガが先、ポジが後。逆にすると上げた温度を自分で下げる。</div>

<h2><span class="s">6</span>フリーランス版・全文通し例</h2>
<p>ブロックを1本に繋げたのがこれ。記号を見ながらどう繋がるか確認し、自分の商品で同じ順番に埋めろ。<strong>記号は説明用。本番のnoteには書かない。</strong></p>
<div class="final">
<b>【A-1 再定義】</b><br>
「SNS設計」とは、あなたの過去の経験を、毎月お金を生む「資産」に変える設計図だ。<br><br>
<b>【A-2 警告で証拠】</b><br>
【注意】効果がありすぎて「思ったより早く会社を辞めたくなった」という声が続いた。覚悟のある人だけ読んでくれ。<br><br>
<b>【B-1 質問】</b><br>
いきなりだが——今の給料、あと10年このままで、本当に大丈夫って言えるか？<br><br>
<b>【B-2 悩み連打①】</b><br>
・給料日に通帳を見てため息<br>・日曜の夜が憂鬱<br>・同期の報告を素直に喜べない<br>・「変わりたい」と思って何年も経った<br><br>
<b>【B-3 常識否定】</b><br>
「才能がある人だけ成功する」って思ってないか？ 逆だ。多くの人は「順番」を間違えてるだけ。<br><br>
<b>【B-4 わかること】</b><br>
・多くの人が逆からやる、たった1つの順番<br>・フォロワー0から最初の1万円を作る導線<br>・「私には無理」が消える最初の3日<br><br>
<b>【B-6 恐怖②】</b><br>
今動かないと——1年後も同じ給料、同じため息。「あの時やってれば」が口癖になる。<br><br>
<b>【B-7 原理】</b><br>
続くのは「手応え」があるから。型が無いと手応えが出ず、多くの人が途中でやめる。だから型が要る。<br><br>
<b>【B-8 証拠①】</b><br>
実際にやった人からこんな声が届いた（感想スクショ）<br><br>
<b>【B-9 願望】</b><br>
・好きな場所で働きたい😌<br>・自分で稼ぐ自信がほしい<br>・もうお金で諦めたくない<br><br>
<b>【B-10 未来のセリフ】</b><br>
「会社、辞めました」「今が一番自由です」——そんな報告が、あなたからも届く。<br><br>
<b>【B-11 証拠②】</b><br>
これも実際に変わった人の声だ（感想スクショ）<br><br>
<b>【C-1 解決宣言】</b><br>
給料の不安も、このままの恐怖も、「私には無理」も——今日で終わりだ。<br><br>
<b>【C-4 特典】</b><br>
購入者限定で「最初の1週間の投稿テンプレ」を無料プレゼント。<br><br>
<b>【C-6 価格】</b><br>
ここから先は——（例）1万5千字 / 図解十数枚。価格はここで初めて出す。
</div>
<div class="note">同じ「悩み」がB-2（現状）→B-6（将来）→C-1（再掲）と形を変えて何度も出てるのが分かるか。これがループだ。<b>3回とも"言葉は違うのに核は同じ"。</b>これがしつこさを出さず刺し続けるコツの正体だ。</div>

<h2><span class="s">7</span>やってはいけない（落とし穴）</h2>
<p>1つでも当てはまったら売れない。書いたあとこのリストで自分を疑え。理由が分かれば応用が効く。</p>
<div class="bad"><b>✗</b> 長い自分語り・感動ストーリーで埋める → 主役が"あなた"になり読者が観客席へ。毎周、椅子を読者に向けろ</div>
<div class="bad"><b>✗</b> 悩みを1回しか出さない → 1回では他人事で流される。形を変えて何度も出して初めて「自分の問題」になる</div>
<div class="bad"><b>✗</b> 抽象的な悩み（「お金の不安」）→ 脳が映像を作れず感情が動かない。「通帳を見てため息」まで描け</div>
<div class="bad"><b>✗</b> 価格を最初・途中に出す → 基準がないと「高い」としか感じない。価値を積んでから最後に価格</div>
<div class="bad"><b>✗</b> 証拠を1箇所だけ → 不安と証拠の橋が一度しかかからない。合間に挟んで毎回かけ直す</div>
<div class="bad"><b>✗</b> ネガだけ／ポジだけ → 感情は落差で動く。片方だと振り子が振れない。交互に使う</div>
<div class="bad"><b>✗</b> 裏の取れない割合を盛る → 一度見抜かれたら全部疑われる。「多くの人が」に置き換える</div>

<h2><span class="s">8</span>書き終わったら検品する</h2>
<p>「いい文章かな？」で悩むな。<strong>「ループ、回ってる？欠けはどれ？」</strong>で確認しろ。<strong>奥にある理由：</strong>「いいか悪いか」は主観で答えが出ない。「あるかないか」は事実ですぐ判定できる。感覚でなく項目で判断しろ。</p>
<div class="check"><ul>
<li>☐ つかみ＝再定義フック＋警告で証拠先出し＋絞り込み、になってるか</li>
<li>☐ 「悩み→恐怖→解決→未来→証拠」を2周以上回したか</li>
<li>☐ 周回ごとに切り口を変えたか（現状→将来→願望）</li>
<li>☐ 悩みの箇条書きを「何度も」出したか（核は同じ・言葉は別）</li>
<li>☐ 悩みは抽象でなく「瞬間」で描いたか（時間・場所・動作）</li>
<li>☐ ネガとポジを交互に使ったか（ネガが先、ポジが後）</li>
<li>☐ 証拠を複数回、合間に挟んだか（別の人の声）</li>
<li>☐ 未来を「セリフ」で見せたか</li>
<li>☐ 価格は最後＋ボリューム（◯字/◯枚）で出したか</li>
<li>☐ 裏の取れない数字を使ってないか</li>
</ul></div>

<div class="end">物語を書こうとするな。<br><strong>「悩み→恐怖→解決→未来→証拠」を、角度を変えて何度も回せ。</strong><br>読者が欲しいのは、あなたの半生じゃない。<strong>「これで自分の悩みが終わる」という確信だ。</strong></div>
</div>
  `,
  'p5-close': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>販売パート＝「売り込む場所」じゃなく「ある熱を回す段取り」</li>
<li>売上の山が「開始直後」と「締切直前」の2回しか来ない理由</li>
<li>前夜→開始→販売中→締切の4フェーズ通し台本</li>
<li>コピペで使える実況・カウントダウンの文例</li>
<li>信頼を殺さない「理由のある限定」の作り方</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="火を起こすと火を動かす">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">✗ 火を起こす</text>
<text x="241" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">○ 火を動かす</text>
<circle cx="79" cy="78" r="22" fill="none" stroke="#cbd5e0" stroke-width="2" stroke-dasharray="4 4"/>
<text x="79" y="84" text-anchor="middle" font-size="20" fill="#cbd5e0">･</text>
<text x="79" y="130" text-anchor="middle" font-size="11" fill="#718096">温めゼロ。空回りする</text>
<path d="M241 60 q-12 14 0 26 q12 -12 0 -26 z" fill="#b83280"/>
<path d="M241 66 q-7 9 0 17 q7 -8 0 -17 z" fill="#f6ad55"/>
<text x="241" y="130" text-anchor="middle" font-size="11" fill="#1e4e7e">温めの火に薪をくべる</text>
</svg>
<div class="figcap">販売は新しく火を起こす場所じゃない。ある火を消さず締切まで運ぶ場所</div>
</div>

<div class="key">販売がうまくいかない人は当日に急にセールスマンの顔になる。順番が逆だ。<strong>販売は「欲しい」と思ってる人に「出たよ、ここで買える」と教えるだけの確認作業。</strong>新しく売り込む場所じゃない。</div>

<div class="flowbig">
<span>告知</span><span>実況</span><span class="is-goal">締切</span>
</div>
<p>難しく考えるな。温めで火がついてるなら、あとは段取り通りに薪をくべて消さないだけ。アドリブの名スピーチで売る場所じゃない。</p>

<div class="warn">逆に言う。<b>温めがゼロなら、ここで何をやっても売れない。</b>販売パートで急に頑張って巻き返すことはできない。火が無いのに段取りだけ回しても空回りするだけだ。</div>

<h2><span class="s">1</span>なぜ売上の山は「2回」しか来ないのか</h2>
<p>これを知らないと、ローンチの真ん中で勝手に心が折れる。<strong>売上は最初と最後にドカッと来て、真ん中は必ずダレる。</strong>異常じゃない、毎回そうなる。</p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="売上の2つの山">
<line x1="20" y1="120" x2="310" y2="120" stroke="#cbd5e0"/>
<path d="M20 120 Q55 30 90 60 Q130 100 200 102 Q250 102 280 35 L300 35" fill="none" stroke="#2b6cb0" stroke-width="3"/>
<circle cx="62" cy="48" r="6" fill="#b83280"/>
<circle cx="285" cy="38" r="6" fill="#b83280"/>
<text x="62" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">山① 開始直後</text>
<text x="62" y="138" text-anchor="middle" font-size="10" fill="#718096">「待ってた」</text>
<text x="180" y="92" text-anchor="middle" font-size="11" fill="#a0aec0">中だるみ</text>
<text x="180" y="138" text-anchor="middle" font-size="10" fill="#a0aec0">焦らない</text>
<text x="270" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">山② 締切直前</text>
<text x="285" y="138" text-anchor="middle" font-size="10" fill="#718096">「もう買えない」</text>
</svg>
<div class="figcap">最初の客は「待ってたから」、最後の客は「もう買えなくなるから」買う</div>
</div>

<p><b>奥にある理由：</b>2回の山は、買う人の<strong>動機がまったく違う</strong>から起きる。間にいる「いいな、でも今すぐじゃなくてもいいか」という大多数は、どちらの動機にもまだ火が着いていない。だから真ん中は動かない。怠けでも失敗でもなく、人の決断が「最初のワクワク」か「最後の締切」のどちらかで起きるという性質そのものだ。</p>

<div class="vs">
<div class="l"><div class="t">✗ 山を知らない人</div>開始で喜ぶ→真ん中で止まって「もうダメだ」と凹む→締切前に何もしない→2回目の山が来ず本当に終わる</div>
<div class="r"><div class="t">○ 山を知ってる人</div>開始に全力→真ん中は「ダレて当然」と冷静に保温→締切前にもう一度全火力→2回目の山を取りに行く</div>
</div>

<div class="key">戦略はシンプル。<strong>開始直後と締切直前に全火力。中だるみは「もう売れてる」「感想がこんなに来てる」という社会的証明で熱を保つ。</strong>真ん中の仕事は「攻める」じゃなく「冷まさない」だ。</div>
<div class="note">つまずきポイント：真ん中で売れないと商品や値段をいじりたくなる。やめろ。段取りの問題で、商品の問題じゃない。中身をいじると、開始直後に買った人が「後の人のほうが得じゃん」と不信感を持つ。静かに保温して締切まで運べばいい。</div>

<h2><span class="s">2</span>前夜：期待を最大化して締切を刻む</h2>
<p>当日の朝に「はい今日から売ります」では遅い。<strong>前夜に「明日、出る」という空気を作る。</strong>これで開始直後の山の大きさが変わる。</p>

<div class="step"><span class="sn">①</span><span class="snm">時間を刻む</span><p>「明日21時に出します」と分単位で時刻を宣言。「明日のどこかで」は弱い。</p></div>
<div class="step"><span class="sn">②</span><span class="snm">中身を発表</span><p>価格・特典・締切（例：最初の3日間だけ）を全部見せる。当日に初めて知らせない。</p></div>
<div class="step"><span class="sn">③</span><span class="snm">先行をにおわす</span><p>「無料の見本を受け取ってくれた人には先に届ける」と特別感を出す。</p></div>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="前夜に価格を見せる効果">
<rect x="0" y="20" width="150" height="82" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">当日に初めて見る</text>
<text x="75" y="68" text-anchor="middle" font-size="11" fill="#a0aec0">「えっ高くない？」</text>
<text x="75" y="86" text-anchor="middle" font-size="11" fill="#a0aec0">防御が立つ→止まる</text>
<text x="160" y="65" text-anchor="middle" font-size="18" fill="#cbd5e0">→</text>
<rect x="170" y="20" width="150" height="82" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">前夜に見ておく</text>
<text x="245" y="68" text-anchor="middle" font-size="11" fill="#2b6cb0">一晩で値段と向き合う</text>
<text x="245" y="86" text-anchor="middle" font-size="11" fill="#2b6cb0">朝にはスッと買える</text>
</svg>
<div class="figcap">人は「知ってから決める」までに時間がかかる。一晩で驚きを消しておく</div>
</div>

<p>時刻を分単位で刻むのは、相手の頭に「その時間に見る」という小さな予約を入れるためだ。前夜の投稿は1本でいい。長文も要らない。価格・締切・出る時刻の3点が入っていれば仕事は終わりだ。</p>

<div class="tc"><div class="hd">前夜の文例（コピペ可）</div><div class="bd">
<div class="draft">ついに明日21時、出します。<br>最初の3日間だけ、お試し価格。そのあと値上げします。<br>通知ONにして待っててね！</div>
</div></div>

<div class="warn"><b>価格・締切・出る時刻</b>の3点が抜けると当日の山がしぼむ。「楽しみにしててね」だけで終わらせるな。期待は数字を見せた瞬間に具体になる。必ず数字を入れる。</div>

<h2><span class="s">3</span>開始：一番売れる瞬間に全力</h2>
<p>ここが最大の山だ。<strong>1日のうちで、ここに一番エネルギーを注ぐ。</strong>「リンクを貼って終わり」じゃない。</p>

<div class="fig"><div class="tl">
<div class="slot"><span class="time">直前</span><div class="w2">「あと1時間…！」で空気を作る。期待のピークを当日もう一度作り直す</div></div>
<div class="slot"><span class="time">21:00</span><div class="w2">公開→リンク投下。「買うとどう変わるか」を総まとめで見せる</div></div>
<div class="slot"><span class="time">21:00</span><div class="w2">待ってた人へ一斉メッセージ「出ました！先に届けるね」。取りこぼさない</div></div>
<div class="slot"><span class="time">夜</span><div class="w2">「もう動き始めた！」と実況スタート。動いてる感を即出す</div></div>
</div></div>

<div class="good"><b>○</b> 公開と同時に待ってた人へ一斉メッセージ。「先に届けるね」で待ってた人が罪悪感ゼロで一番乗りできる。最初の数件が出たら「もう売れ始めた！」と即実況に繋げる。</div>
<div class="bad"><b>✗</b> リンクを貼っただけで放置。「興味ある人は見てね」と他人事。待ってた人すら「後でいいか」になって山が来ない。</div>

<p><b>なぜ「先に届けるね」が効くのか。</b>人は一番乗りで買うことに微妙な照れがある。「真っ先に飛びつくの必死っぽい」という心理だ。<strong>「待っててくれた人へ先に届ける」という枠を用意すると、一番乗りが"必死"じゃなく"特別扱い"に変わる。</strong>出だしの数件は、売上以上に"動いてる証拠"として価値がある。</p>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="弱気と言い切り">
<rect x="0" y="18" width="150" height="86" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 弱気</text>
<text x="75" y="66" text-anchor="middle" font-size="11" fill="#a0aec0">「もしよかったら…」</text>
<text x="75" y="88" text-anchor="middle" font-size="11" fill="#a0aec0">→「買って大丈夫かな」</text>
<rect x="170" y="18" width="150" height="86" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 言い切り</text>
<text x="245" y="66" text-anchor="middle" font-size="11" fill="#2b6cb0">「出した。ここで買える」</text>
<text x="245" y="88" text-anchor="middle" font-size="11" fill="#2b6cb0">→「買って大丈夫だ」</text>
</svg>
<div class="figcap">売り手の自信は、そのまま相手の安心に変換される</div>
</div>

<p>開始でやりがちな失敗が「謙虚すぎる」こと。<strong>「もしよかったら」「お時間あれば」は全部消せ。</strong>最後に急に弱気になると、相手は「この人、自分の商品に自信ないのかな」と感じる。具体的には語尾を全部言い切りにして、「〜かも」「〜と思う」を1つ残らず削る。それだけで文章の温度が変わる。</p>
<div class="note">つまずきポイント：「言い切ると押し売りっぽくない？」と不安になる。逆だ。押し売りに見えるのは"言い切り"じゃなく"相手を無視した一方的な連投"のほう。温めで関係ができてる相手に堂々と勧めるのは「友達に良いものを教える」のと同じだ。</div>

<h2><span class="s">4</span>販売中：実況で「動き」を見せ続ける</h2>
<p>真ん中の中だるみ期。やることは新ネタ作りじゃなく<strong>「動いてる証拠」を見せ続けること</strong>だ。人だかりのある店にさらに人が集まる。シーンとした店には誰も近寄らない。</p>

<div class="step"><span class="sn">①</span><span class="snm">動きを実況</span><p>「また売れた」「感想こんなに来てる（画面の写真）」をその場で投下。</p></div>
<div class="step"><span class="sn">②</span><span class="snm">言い訳に答える</span><p>買えない理由（お金・時間・自信）に1つずつ正面から答える。</p></div>
<div class="step"><span class="sn">③</span><span class="snm">窓をリマインド</span><p>「3日過ぎたら値上げ」と価格の締切を繰り返し思い出させる。</p></div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="売り手の言葉と購入者の声">
<rect x="0" y="20" width="150" height="90" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">売り手の言葉</text>
<text x="75" y="66" text-anchor="middle" font-size="11" fill="#a0aec0">「いい商品です」</text>
<text x="75" y="88" text-anchor="middle" font-size="11" fill="#a0aec0">割り引いて聞かれる</text>
<rect x="170" y="20" width="150" height="90" rx="12" fill="#fff5fa" stroke="#b83280"/>
<text x="245" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="#b83280">買った人の声</text>
<text x="245" y="66" text-anchor="middle" font-size="11" fill="#8a4a6e">「これすごい」</text>
<text x="245" y="88" text-anchor="middle" font-size="11" fill="#8a4a6e">警戒なしに届く</text>
</svg>
<div class="figcap">人は売り手の宣伝より、自分と同じ側にいる人の感想を信じる＝社会的証明</div>
</div>

<p>特に強いのが<strong>「購入者の声を画面の写真で撮ってすぐ投下」</strong>だ。もう一段ある——迷ってる人は「買ったあとの自分」を想像できないから動けない。先に買った人の声は、その未来を先に見せる見本になる。感想は"未来の試着室"だ。やり方は単純で、感想が届いたら名前を隠して画面を撮り、「こんな感想もらった」と一言添えて流すだけ。1日に1〜2枚でいい。</p>

<div class="vs">
<div class="l"><div class="t">✗ 中だるみで止める</div>「初日売れたしもういいや」と音沙汰なし。迷ってた人は「もう終わったのかな」と離れ、2回目の山が消える</div>
<div class="r"><div class="t">○ 実況を止めない</div>「お昼にまた売れた」「こんな感想もらった（写真）」と動きを刻む。火が消えず締切まで繋がる</div>
</div>

<h3>「買えない理由」への答え方</h3>
<p>人が買わない理由はだいたい3つ。お金・時間・自信。これを<strong>相手が口に出す前に、こっちから代弁して潰す。</strong>人は自分で見つけた断る理由には固執する。先に「高いよね、わかる」と言葉にすると、断る理由が"自分の壁"から"二人で見てる課題"に変わる。</p>

<table>
<tr><th>言い訳</th><th>代弁して潰す一言</th></tr>
<tr><td>お金（高い）</td><td>「1日コーヒー1杯分くらいを3ヶ月。それで一生使えるスキルが残る」</td></tr>
<tr><td>時間（忙しい）</td><td>「1日10分でいい。今やらないと来年も同じこと言ってる」</td></tr>
<tr><td>自信（私にできる？）</td><td>「初心者向けに順番通り並べた。できる人から並んでるだけ」</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="大きな壁を小さく分ける">
<rect x="20" y="25" width="60" height="70" rx="6" fill="#cbd5e0"/>
<text x="50" y="64" text-anchor="middle" font-size="11" fill="#718096">大きい</text>
<text x="50" y="78" text-anchor="middle" font-size="11" fill="#718096">動けない</text>
<path d="M95 60 L130 60" stroke="#b83280" stroke-width="2" marker-end="url(#a4)"/>
<defs><marker id="a4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<rect x="150" y="68" width="22" height="22" rx="4" fill="#2b6cb0"/>
<rect x="180" y="68" width="22" height="22" rx="4" fill="#2b6cb0"/>
<rect x="210" y="68" width="22" height="22" rx="4" fill="#2b6cb0"/>
<rect x="240" y="68" width="22" height="22" rx="4" fill="#2b6cb0"/>
<text x="225" y="50" text-anchor="middle" font-size="11" fill="#1e4e7e">小さく分けて手の届くサイズに</text>
</svg>
<div class="figcap">否定せず受け止めて、大きく見えるものを小さく分解する</div>
</div>

<p>3つに共通する型を見抜いてほしい。<strong>どれも「相手の不安を否定せず、いったん受け止めてから見方を変えている」。</strong>「高くないよ」じゃなく「コーヒー1杯分に分解する」。この型に当てはめれば、自分のジャンルでも言葉は作れる。</p>

<div class="key">「シーンとさせない」が販売中の唯一のルール。<strong>投稿が止まると勢いも止まる。</strong>ネタが無いなら「あと○時間で値上げ」のリマインドだけでもいい。とにかく止めるな。</div>

<h2><span class="s">5</span>なぜ締切が無いと「一生買われない」のか</h2>
<p>ここが2回目の山。<strong>締切こそがローンチを完成させる部品だ。</strong>締切が無いと、人は「いい商品だね、また今度買うね」と言って、その「今度」は一生来ない。</p>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="後回しの順位">
<text x="160" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">締切ナシ：いつまでも一番下</text>
<rect x="60" y="28" width="200" height="22" rx="4" fill="#e2e8f0"/><text x="160" y="44" text-anchor="middle" font-size="10" fill="#718096">急ぎの用事</text>
<rect x="60" y="54" width="200" height="22" rx="4" fill="#e2e8f0"/><text x="160" y="70" text-anchor="middle" font-size="10" fill="#718096">他の急ぎ</text>
<rect x="60" y="80" width="200" height="22" rx="4" fill="#f6f6f7" stroke="#cbd5e0"/><text x="160" y="96" text-anchor="middle" font-size="10" fill="#a0aec0">「いつか買う」←毎回負ける</text>
<text x="160" y="124" text-anchor="middle" font-size="11" fill="#b83280">締切＝この商品を一番上に押し上げる装置</text>
</svg>
<div class="figcap">人は「いつでもできること」を毎回後回しにする。締切は順位を変える</div>
</div>

<div class="key"><strong>締切が無い＝一生買わない。</strong>人は「いつでも手に入るもの」の価値を低く見積もる。締切は急かすためじゃなく、迷ってる人が「決める」のを手伝う優しさだと思え。決められないことほど、人にストレスはない。</div>

<div class="fig"><div class="tl">
<div class="slot"><span class="time">残り24h</span><div class="w2">「明日21時でお試し価格は終了」。値上げの事実を冷静に告知</div></div>
<div class="slot"><span class="time">残り3h</span><div class="w2">「あと3時間。迷ってるなら、それは"欲しい"ってこと」</div></div>
<div class="slot"><span class="time">締切</span><div class="w2">「ここまで！ありがとう。明日から一緒にやろう」で締める</div></div>
</div></div>

<p>締切前の最強の一言がこれ。<strong>「迷ってるなら、それは"欲しい"ってこと」。</strong>本当に要らない物に人は迷わない、スルーするだけだ。<strong>迷っているという事実そのものが、心がもう欲しがっている証拠。</strong>「迷ってる＝欲しい証拠だよ」と返すと、本人も気づいていなかった本心が外から言語化される。煽りじゃない、本心の代弁だ。</p>
<p>残り3時間の投稿は長く書くな。この一言と「締切は21時」だけでいい。<strong>文章が短いほど緊張感が伝わる。</strong>長文を書くと、読んでいる間に緊張感が緩む。</p>

<div class="tc"><div class="hd">締切のカウントダウン文例（コピペ可）</div><div class="bd">
<div class="draft"><b>残り24時間：</b>明日の21時で、お試し価格は終了します。そのあとは値上げ。迷ってる人は今日中に。<br><br><b>残り3時間：</b>あと3時間で締切。「迷ってる」なら、それはもう"欲しい"ってことだよ。最後の背中、押すね。<br><br><b>締切：</b>ここまで！受け取ってくれた人、本当にありがとう。明日から一緒にやろう。</div>
</div></div>

<div class="warn"><b>締切は絶対に守る。</b>「やっぱりあと1日延ばします」を一度でもやると、次回から誰も急がない。「どうせまた延びる」と思われ、締切が機能しなくなる。これを<b>オオカミ少年</b>という。締切の力は商品の力じゃなく、あなたの言葉の信用そのもの。締切を守るのは、次回も売るための投資だ。</div>

<h2><span class="s">6</span>限定（締切）の正しい作り方</h2>
<p>締切＝限定には種類がある。<strong>どれを使ってもいいが、必ず「理由のある限定」にすること。</strong>嘘の限定は必ずバレるし、バレた瞬間に信頼が死ぬ。</p>

<table>
<tr><th>種類</th><th>例</th><th>注意</th></tr>
<tr><td>時間</td><td>3日間だけこの価格</td><td>一番使いやすい。初心者はまずこれ</td></tr>
<tr><td>価格の窓</td><td>段階的に値上げしていく</td><td>「今買わないと損」を作れる</td></tr>
<tr><td>特典</td><td>先着の人に特典をつける</td><td>なぜ先着なのか理由をつける</td></tr>
</table>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="価格の窓">
<line x1="20" y1="95" x2="300" y2="95" stroke="#cbd5e0"/>
<rect x="30" y="70" width="70" height="25" fill="#eaf1f8" stroke="#2b6cb0"/><text x="65" y="87" text-anchor="middle" font-size="10" fill="#1e4e7e">お試し</text>
<rect x="110" y="55" width="70" height="40" fill="#cdddec" stroke="#2b6cb0"/><text x="145" y="80" text-anchor="middle" font-size="10" fill="#1e4e7e">少し上げ</text>
<rect x="190" y="35" width="70" height="60" fill="#2b6cb0"/><text x="225" y="70" text-anchor="middle" font-size="10" fill="#fff">通常</text>
<text x="65" y="112" text-anchor="middle" font-size="10" fill="#718096">最初の3日</text>
<text x="225" y="112" text-anchor="middle" font-size="10" fill="#718096">あとで買うと高い</text>
<text x="145" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="#b83280">早く買った人ほど得</text>
</svg>
<div class="figcap">「あとで買うと高くなる」と分かると、待つこと自体が損になる</div>
</div>

<p><strong>「価格の窓」</strong>は値段を段階的に上げる方法だ。人は「得をしたい」より「損をしたくない」のほうが強く動く。<strong>「あとで買うと高くなる」と分かると、待つこと自体が損になる。</strong>値上げの予定日は前もって全部公開しておけ。隠すと後出しに見えて、「損したくない」が「だまされた」に変わる。</p>

<div class="good"><b>○</b> 理由のある限定。「最初の3日は待っててくれた人へのお礼として安くする」「先着を絞るのは、初回だから一人ずつ手厚くサポートしたいから」。理由があると、限定が"こちらの都合"じゃなく"相手への配慮"に見える。</div>
<div class="bad"><b>✗</b> 嘘の限定。「先着10名！」と言ったのに11人目以降も同じ条件で売る。「今日まで！」と言ったのに翌日も普通に売ってる。一度バレたら、その人の言葉は二度と信じてもらえない。</div>

<p>理由のない限定は「これは私を急かす演出だ」と見抜かれる。見抜かれた瞬間、「操られそう」という警戒を生む。<strong>限定の強さは「数の少なさ」じゃなく「理由の納得感」で決まる。</strong></p>

<div class="key">限定の鉄則は<strong>「嘘をつかない」これだけ。</strong>守れる限定しか口にしない。短期的には「先着10名」を破って多く売るほうが得に見える。でも一度バレた信用は戻らず、次回のローンチが丸ごと死ぬ。嘘をつかないことが、結局いちばん長く売れ続ける唯一の道だ。</div>

<h2><span class="s">7</span>4フェーズ通し台本（まとめ）</h2>
<p><strong>この順番に流すだけでいい。</strong>暗記不要。販売の日はこの地図を見ながら上から投稿していけ。アドリブで売ろうとせず、型に流し込む——それが一番強い。</p>

<div class="flowbig">
<span>前夜</span><span>開始</span><span>販売中</span><span class="is-goal">締切</span>
</div>

<div class="step"><span class="sn">前夜</span><span class="snm">期待を最大化して締切を刻む</span><p>「明日21時に出す」と時刻を宣言。価格・特典・締切を全部発表。「先に届ける」と特別感。→ 当日の朝には「もう買うと決めてた人」が出来上がる。</p></div>

<div class="step"><span class="sn">開始</span><span class="snm">一番売れる瞬間に全力</span><p>直前に「あと1時間」で煽る→21時に公開＆「どう変わるか」を総まとめ→同時に待ってた人へ一斉メッセージ→夜に「もう売れ始めた！」で実況開始。語尾は全部言い切りで弱気を消す。</p></div>

<div class="step"><span class="sn">販売中</span><span class="snm">実況で動きを見せ続ける</span><p>「また売れた」「感想の写真」をその場で。お金・時間・自信の言い訳を1つずつ小さく分解して潰す。「3日で値上げ」を繰り返す。攻めなくていい、ただシーンとさせるな。</p></div>

<div class="step"><span class="sn">締切</span><span class="snm">駆け込みを生む</span><p>残り24時間→残り3時間→締切、とカウントダウン。「迷ってるなら欲しいってこと」で本心を代弁して背中を押す。締切は絶対に守る。守ることが次回への投資。</p></div>

<h2><span class="s">8</span>検品：機構を回しきれたか</h2>
<p>販売が終わったら「売れた・売れなかった」の前に、<strong>「機構をちゃんと回せたか？」で振り返る。</strong>売上は結果でしかない。欠けた部品を次回直すだけで山は大きくなる。</p>

<div class="check"><ul>
<li>前夜に価格・特典・締切（出る時刻も）を告知したか</li>
<li>開始時に待ってた人へ一斉メッセージしたか／語尾の弱気を消したか</li>
<li>販売中、実況で「動き」を見せ続けたか（シーンとさせてないか）</li>
<li>購入者の声を写真で撮って→すぐ投下したか</li>
<li>お金・時間・自信の言い訳を、小さく分解して潰したか</li>
<li>締切前にカウントダウンしたか／「迷ってる＝欲しい」を伝えたか</li>
<li>締切を守ったか（オオカミ少年になってないか）</li>
<li>限定に「理由」をつけたか（嘘の限定になってないか）</li>
</ul></div>

<div class="end">販売は売り込みじゃない。すでにある熱を、止めずに回す段取りだ。<br>温めができていれば、これはただの確認作業。<strong>告知→実況→締切の機構を、止めずに回しきれ。</strong><br>次は「高額を売るしかた（バックエンド）」で、ここで生まれた信頼を利益に変える。</div>
</div>
  `,
  'p5-highticket': `
<div class="lesson">
<div class="what"><div class="h">📍 この章でわかること</div><ul>
<li>高額は「文章」では売れず「会話」でしか売れない理由</li>
<li>表（note）で集めて裏（高額）で回収する仕組み</li>
<li>冷やかしを弾く「関所ページ」と「来ないで」の効果</li>
<li>オンライン通話で売る7ステップ（相手にしゃべらせる型）</li>
<li>お金・時間・自信の3反論の返しと、声で回す好循環</li>
</ul></div>

<h2><span class="s">0</span>結局、何が言いたいか</h2>
<p>高額を売る、と聞くと「もっと上手い売り文句を」と身構える。違う。<strong>高額は言葉のうまさでは売れない。「会話」でしか売れない。</strong></p>

<div class="vfig">
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="安い物は文章・高額は会話">
<rect x="0" y="0" width="158" height="150" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<rect x="162" y="0" width="158" height="150" rx="12" fill="#eaf1f8" stroke="#cdddec"/>
<text x="79" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">安い物</text>
<text x="241" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">高額</text>
<rect x="34" y="44" width="90" height="56" rx="6" fill="#fff" stroke="#cbd5e0"/>
<line x1="46" y1="58" x2="112" y2="58" stroke="#cbd5e0" stroke-width="2"/>
<line x1="46" y1="70" x2="112" y2="70" stroke="#cbd5e0" stroke-width="2"/>
<line x1="46" y1="82" x2="96" y2="82" stroke="#cbd5e0" stroke-width="2"/>
<text x="79" y="120" text-anchor="middle" font-size="11" fill="#718096">文章で決まる</text>
<text x="79" y="136" text-anchor="middle" font-size="11" fill="#a0aec0">失敗しても痛くない</text>
<rect x="186" y="48" width="50" height="30" rx="9" fill="#2b6cb0"/><path d="M198 78 l0 9 l11 -9 z" fill="#2b6cb0"/>
<rect x="246" y="68" width="52" height="30" rx="9" fill="#fff" stroke="#2b6cb0"/><path d="M290 98 l0 9 l-11 -9 z" fill="#fff" stroke="#2b6cb0"/>
<text x="241" y="120" text-anchor="middle" font-size="11" fill="#1e4e7e">1対1の会話で溶ける</text>
<text x="241" y="136" text-anchor="middle" font-size="11" fill="#8a4a6e">不安は文章で消えない</text>
</svg>
<div class="figcap">高額は怖い。だから「私専用の答え」を会話で渡す</div>
</div>

<div class="key">核は1つ。<strong>「説得して売る」のではなく「価値を渡して、向こうから申し込ませる」。</strong>売り込んだ瞬間に冷められる。渡し切るから選ばれる。相談は売り込む場ではなく信頼を渡す場だ。</div>

<h3>人は「説得されたもの」を買わない。「自分で決めたもの」を買う</h3>
<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="説得と自己決定">
<rect x="0" y="20" width="150" height="80" rx="12" fill="#f6f6f7" stroke="#cbd5e0"/>
<text x="75" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#718096">説得のYES</text>
<text x="75" y="74" text-anchor="middle" font-size="11" fill="#a0aec0">乗せられた感が残る</text>
<text x="75" y="90" text-anchor="middle" font-size="11" fill="#a0aec0">後で不安になる</text>
<text x="160" y="65" text-anchor="middle" font-size="20" fill="#cbd5e0">≠</text>
<rect x="170" y="20" width="150" height="80" rx="12" fill="#eaf1f8" stroke="#2b6cb0"/>
<text x="245" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#1e4e7e">自分のYES</text>
<text x="245" y="74" text-anchor="middle" font-size="11" fill="#8a4a6e">迷いがない</text>
<text x="245" y="90" text-anchor="middle" font-size="11" fill="#8a4a6e">本気で取り組む</text>
</svg>
<div class="figcap">狙うのは「相手が自分でYESにたどり着く道を、隣で照らす」こと</div>
</div>
<div class="flowbig">
<span>価値を渡す</span><span>来てよかった</span><span>この人なら信じられる</span><span>自分で決める</span><span class="is-goal">売れる</span>
</div>
<div class="warn">相談の目的は「契約を取る」ことではない。<b>相手が自分で前に進む決断をできる状態にすること</b>だ。契約は結果として後からついてくる。順番を逆にした瞬間、売り込みに戻って冷められる。</div>

<h2><span class="s">1</span>本当の利益は「裏」にある</h2>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="表で集めて裏で回収">
<rect x="6" y="74" width="120" height="44" rx="10" fill="#eaf1f8" stroke="#9cb8d6"/>
<text x="66" y="94" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">表 note 9,800円</text>
<text x="66" y="110" text-anchor="middle" font-size="11" fill="#718096">本気の客を集める入口</text>
<path d="M132 96 L182 96" stroke="#b83280" stroke-width="2" marker-end="url(#a1)"/>
<defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b83280"/></marker></defs>
<rect x="190" y="40" width="124" height="78" rx="10" fill="#1e4e7e"/>
<text x="252" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">裏 高額サポート</text>
<text x="252" y="90" text-anchor="middle" font-size="11" fill="#cdddec">数ヶ月の伴走・個別指導</text>
<text x="252" y="108" text-anchor="middle" font-size="11" fill="#fff">ここに利益が乗る</text>
<text x="160" y="22" text-anchor="middle" font-size="11" fill="#718096">表で集めて、裏で回収する</text>
</svg>
<div class="figcap">noteで稼ぐな。noteで本気の客を集め、高額を渡すのが本番</div>
</div>

<h3>なぜ「集める」と「回収する」を分けるのか</h3>
<p>人は信用していない相手にいきなり大金を払えない。初対面でいきなり結婚を申し込むのと同じだ。だから階段を作る。</p>
<div class="ladder">
<div class="rung">無料で知ってもらう</div>
<div class="rung">9,800円で「お金を出す」小さな一歩</div>
<div class="rung">価値を実感</div>
<div class="rung is-top">高額へ</div>
</div>
<p class="figcap-ish"><b>金額の階段は、信頼の階段とぴったり重なる。</b></p>
<div class="key">note購入者は<b>「自分の財布から払い」「読んで行動した」</b>人だ。口だけでなく本気だと、すでに行動で証明している。<strong>人は言葉より自分の行動を信じる。</strong>「私はこれに本気で取り組む人間だ」という自己像ができているから、伴走の案内がまっすぐつながる。</div>
<div class="warn">noteだけで終わらせるのは<b>「魚がいる池の前で釣り竿を置いて帰る」</b>のと同じ。本気な人ほど、次の一歩を案内されるのを待っている。</div>

<h2><span class="s">2</span>なぜ「無料相談」で売るのか</h2>
<div class="vs">
<div class="l"><div class="t">✗ 相談＝売り込みの場</div>プレゼンして説得して契約させる場だと思う。相手は防御に入り、売り込まれた瞬間に冷める。</div>
<div class="r"><div class="t">○ 相談＝価値を渡す場</div>その場で本気のアドバイスを渡して帰す。相談だけで満足させると「もっと教わりたい」と<b>向こうから申し込む</b>。</div>
</div>

<div class="vfig">
<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="先に渡すと心が開く">
<text x="79" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 先に奪う</text>
<circle cx="79" cy="64" r="22" fill="#f6f6f7" stroke="#cbd5e0" stroke-width="2"/>
<path d="M70 56 l18 16 M88 56 l-18 16" stroke="#a0aec0" stroke-width="3"/>
<text x="79" y="104" text-anchor="middle" font-size="11" fill="#718096">心が閉じる</text>
<line x1="160" y1="16" x2="160" y2="110" stroke="#e2e8f0"/>
<text x="241" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 先に渡す</text>
<rect x="216" y="48" width="50" height="36" rx="8" fill="#b83280"/>
<path d="M232 56 l9 9 l16 -16" stroke="#fff" stroke-width="3" fill="none"/>
<text x="241" y="104" text-anchor="middle" font-size="11" fill="#1e4e7e">借り＋信頼が積まれる</text>
</svg>
<div class="figcap">もらった相手にお返ししたくなる。先に渡すから心が開く</div>
</div>
<p>美容室のカウンセリングと同じだ。いきなり高い施術を勧める人より、「あなたの髪はこうケアするといい」とタダで的確に教えてくれる人に「お願いしたい」と思う。相手の状況を聞いて<b>今日から試せる手を1〜2個渡す</b>。<strong>出し惜しみは「まだ信用してません」というメッセージとして伝わる。</strong></p>
<div class="note">つまずき：「全部教えたら払う理由がなくなるのでは」と怖くなる。逆だ。少し渡して効果を体感した人は「一人で続けるのは無理だ、伴走してほしい」と気づく。人は情報より「一緒に走ってくれる人」を買う。</div>
<div class="good"><b>○</b> 相談の終わりに「これ無料でこんなに教えてもらっていいんですか」と言われたら大成功。心に「借り」と「信頼」が両方積まれた状態だ。</div>

<h2><span class="s">3</span>関所ページ＝本気の人だけ通す</h2>
<p>無料相談を始めると必ず<strong>「無料だしとりあえず聞いてみよ」という冷やかし</strong>が来る。1件1時間、何件も対応すれば時間が丸ごと溶ける。これは事故だ。</p>
<div class="key"><strong>「関所ページ（申込前のふるい）」で本気の人だけ絞る。</strong>関所とは昔の街道で「通っていい人」を見分けた検問所。冷やかしはここで弾く。</div>

<div class="tc"><div class="hd">関所に必ず書く2つ</div><div class="bd">
<div class="vs"><div class="l"><div class="t">① こんな人向け</div>「本気で〇〇を変えたい人」「行動する覚悟がある人」と、欲しい相手を書く</div><div class="r"><div class="t">② こんな人は来ないで</div>「情報だけ聞いてやらない人」「今すぐ無料で稼ぎたい人」と、来てほしくない相手も書く</div></div>
</div></div>

<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="来ないでが本気を呼ぶ">
<rect x="130" y="20" width="60" height="90" rx="6" fill="#1e4e7e"/>
<text x="160" y="62" text-anchor="middle" font-size="11" fill="#fff">関所</text>
<text x="160" y="78" text-anchor="middle" font-size="11" fill="#cdddec">来ないで</text>
<circle cx="40" cy="50" r="9" fill="#2b6cb0"/><path d="M40 62 L118 55" stroke="#2b6cb0" stroke-width="2" marker-end="url(#a2)"/>
<text x="40" y="80" text-anchor="middle" font-size="10" fill="#1e4e7e">本気</text>
<circle cx="40" cy="100" r="9" fill="#cbd5e0"/><path d="M52 100 L92 100" stroke="#cbd5e0" stroke-width="2" stroke-dasharray="3 3"/>
<path d="M96 92 l12 16 M108 92 l-12 16" stroke="#a0aec0" stroke-width="2"/>
<text x="40" y="120" text-anchor="middle" font-size="10" fill="#a0aec0">冷やかし</text>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2b6cb0"/></marker></defs>
<text x="262" y="56" font-size="11" fill="#b83280">本気は</text>
<text x="262" y="74" font-size="11" fill="#b83280">「私のことだ」</text>
<text x="262" y="92" font-size="11" fill="#b83280">と前のめり</text>
</svg>
<div class="figcap">「来ないで」＝裏返せば「選ばれた人だけ通れる」という宣言</div>
</div>
<p>人は誰でも入れる場所を安く感じ、選ばれないと入れない場所を価値があると感じる。本気の人は線を見た瞬間「自分は通れる側だ」と前に出る。冷やかしは静かに引く。<b>言葉でターゲットを管理するのと同じ原理だ。</b></p>
<div class="tl">
<div class="slot"><span class="time">最初</span><div class="w2">誰のためのページか1行で言い切る</div></div>
<div class="slot"><span class="time">次</span><div class="w2">この相談で何が手に入るか</div></div>
<div class="slot"><span class="time">最後</span><div class="w2">来てほしくない人（読み終えた勢いで申込ボタンへ）</div></div>
</div>
<div class="note">※書き方は別添の「記入例_関所ページ」を見本に、自分の言葉に置き換える。</div>

<h2><span class="s">4</span>オンライン通話で売る7ステップ</h2>
<p>ここが心臓部。<strong>いきなり商品の話をしない。順番を飛ばすと売れない。</strong>心が「閉じた状態」から「自分で決める状態」へ動くには、段差を一段ずつ上る必要がある。</p>
<div class="splitbar"><div class="sb-main" style="width:70%">相手が話す 7</div><div class="sb-sub" style="width:30%">自分 3</div></div>
<p class="figcap-ish"><b>相手に多くしゃべらせろ。</b>人は他人の言葉より、自分の口から出た言葉を信じる。「変えたい」と一回自分で言う方が、こちらが百回言うより強い。</p>

<div class="step"><span class="sn">①</span><span class="snm">場を温める</span>
<p>雑談で1〜2分、緊張をほどく。<b>奥の理由：</b>警戒している間、人は本音を1ミリも出さない。「敵じゃない」と体に分からせる。</p></div>

<div class="step"><span class="sn">②</span><span class="snm">現状を話させる</span>
<p>「今、どこで一番困ってますか」。解決策を言いたいのをこらえ「なるほど」「それで」で深掘り。<b>奥の理由：</b>悩みは口に出すほど輪郭がはっきりし、無視できない問題に育つ。</p></div>

<div class="step"><span class="sn">③</span><span class="snm">理想を聞く（なぜを2回掘る）</span>
<p>「本当はどうなりたい」→「なぜ」を2回。例：月10万→会社を辞めたい→家族との時間がほしい。<b>奥の理由：</b>人を動かすのは表面の目標（お金）でなく奥の感情（家族）。<strong>手段では動かないが、目的のためなら動く。</strong></p></div>

<div class="step"><span class="sn">④</span><span class="snm">ギャップを一緒に見る</span>
<p>理想と現状の差を、責めずに事実として並べる。<b>奥の理由：</b>差を自覚した時、人はそれを埋めたくなる。横に並んで一緒に見るから「変えなきゃ」と<strong>自分で気づく</strong>。与えられた気づきは反発し、つかんだ気づきは決意になる。</p></div>

<div class="step"><span class="sn">⑤</span><span class="snm">価値提供する</span>
<p>その場で使える方向性を本気で描く。例「最初の1週間はネタ集めだけ」「次の2週間で型に沿って10本」。出し惜しみしない。<b>奥の理由：</b>役立つものを渡されて初めて「本物だ」と体感する。<strong>人は言われたことより体験したことを信じる。</strong></p></div>

<div class="step"><span class="sn">⑥</span><span class="snm">橋渡し（許可を取る）</span>
<p>「一人でやってみます？それとも一緒にやった方が早そうですか」。「一緒に」と言ったら、向こうから提案を求めている状態。<b>奥の理由：</b><strong>人は自分が選んだことには逆らわない。</strong>自分の口で言わせるから、提案が「自分が頼んだこと」になる。</p></div>

<div class="step"><span class="sn">⑦</span><span class="snm">オファー（言い切って黙る）</span>
<p>中身・期間・価格を提示し、<b>言い切ったら黙る。</b>「無理にとは言いませんが」と逃げ道を作ると台無し。<b>奥の理由：</b>提示者がブレた瞬間、商品の価値も同じだけブレる。言い切って黙るのは態度で「これだけの価値がある」と示すことだ。</p></div>

<div class="warn">⑦の沈黙に耐えられるかが分かれ目。<b>沈黙は気まずさでなく、相手が真剣に考えてる時間だ。</b>価格を言ったら心の中でゆっくり10数える。相手は今、自分でYESにたどり着こうとしている。その道を一言で潰すな。</div>
<div class="note">※トーク台本は別添の「記入例_オンライン相談台本」を見本にする。</div>

<h2><span class="s">5</span>反論処理（よく出る3つ）</h2>
<div class="key">反論は<strong>嫌がってるのでなく、背中を押してほしいサイン</strong>のことが多い。本当に興味がない人は反論せず「検討します」で去る。<strong>反論は、買いたい気持ちがある人しか出さない。</strong></div>
<table>
<tr><th>反論</th><th>返し方</th></tr>
<tr><td>お金が</td><td>「このまま迷ってる時間が一番高くつく。さっきの『家族との時間がほしい』、いつ叶えますか」</td></tr>
<tr><td>時間が</td><td>「一人でやると遠回りに一番時間を使う。型に沿うから、忙しい人ほど速く進める」</td></tr>
<tr><td>自信が</td><td>「できるか不安だから私が付く。一人でできる自信がある人は相談に来てません」</td></tr>
</table>
<p>コツは<b>③で掘った本当の動機を使う</b>こと。「お金が」は頭の言い訳。「家族との時間、いつ叶えます」は相手が自分で語った一番熱い場所に触れる。<strong>頭の言い訳より、心の動機が強い。</strong>7ステップを飛ばすと、この弾を持てない。返した後は一拍おいて相手に番を渡す。畳みかけると天秤が「説得された」に逆戻りする。</p>
<div class="good"><b>○</b> 反論は「拒否」でなく「最後の確認」。誠実に、でも逃げずに言い切ると「この人なら任せられる」と腹を決める。</div>

<h2><span class="s">6</span>断られたら軽いプランを出す</h2>
<div class="key">本命（高額）を断られたら<strong>もっと軽い入口</strong>を出し、何も渡さずに帰さない。例：本命「半年伴走20万円」→「まず1ヶ月だけのお試しも」。20万が無理でも3万なら踏み出せる人を拾える。</div>
<div class="vfig">
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="先に見た金額が物差しになる">
<text x="79" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e4e7e">○ 20万→3万</text>
<rect x="40" y="30" width="78" height="40" rx="6" fill="#1e4e7e"/><text x="79" y="55" text-anchor="middle" font-size="13" fill="#fff">20万</text>
<rect x="58" y="80" width="42" height="24" rx="6" fill="#2b6cb0"/><text x="79" y="96" text-anchor="middle" font-size="11" fill="#fff">3万</text>
<text x="79" y="122" text-anchor="middle" font-size="11" fill="#1e4e7e">3万が手に届く</text>
<line x1="160" y1="14" x2="160" y2="116" stroke="#e2e8f0"/>
<text x="241" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#718096">✗ 最初に3万</text>
<rect x="220" y="36" width="42" height="24" rx="6" fill="#cbd5e0"/><text x="241" y="52" text-anchor="middle" font-size="11" fill="#718096">3万</text>
<rect x="202" y="70" width="78" height="40" rx="6" fill="#f6f6f7" stroke="#cbd5e0"/><text x="241" y="95" text-anchor="middle" font-size="13" fill="#a0aec0">20万</text>
<text x="241" y="124" text-anchor="middle" font-size="11" fill="#718096">20万がぼったくりに見える</text>
</svg>
<div class="figcap">先に見た金額が、後の金額の物差しになる</div>
</div>
<div class="warn">超重要：<b>軽いプランを最初から出すな。</b>最初に見せると本命が薄まり、誰も高い方を選ばない。<b>本命を断られて初めて</b>出すから活きる。レストランで先に「安いランチも」と言われたら誰もコースを頼まないのと同じだ。</div>

<h2><span class="s">7</span>相談後の声→好循環をつくる</h2>
<div class="key">相談後の声は<strong>必ずスクショ→ストーリーで紹介</strong>する。それを見た人が「私も相談してみよう」と来る。この好循環を作る。</div>
<div class="flowbig">
<span>声を見せる</span><span>信頼が生まれる</span><span>新しい相談が来る</span><span>また声を回収</span><span class="is-goal">相談が相談を呼ぶ</span>
</div>
<p><b>奥の理由：</b>人は自分で決められない時「他の人がどうしたか」を見て決める。みんなが並ぶ店に並ぶのと同じだ。<strong>自分と似た誰かの「やってよかった」が、迷う人の最後の一押しになる。</strong>自分で言う宣伝は疑われ、他人の声は信じられる。</p>
<div class="good"><b>○</b> コツ：最後に「今日、率直にどうでした」と聞き、返ってきた言葉をそのままスクショ。<strong>整いすぎた声は「やらせ」に見え、生の言葉は「本物」に見える。</strong>紹介時は名前を伏せ、「ストーリーで紹介していいですか」と許可を取る。</div>
<div class="bad"><b>✗</b> 声を回収せず相談しっぱなしで終わる。せっかくの満足が次の客に繋がらず消える。一番もったいない。</div>

<h2><span class="s">8</span>全体の流れをもう一度</h2>
<p>1人の客を、入口から好循環まで1本の線で見る。全体が「相手が自分でYESにたどり着く道」だ。</p>
<div class="tl">
<div class="slot"><span class="time">入口</span><div class="w2">noteを買って行動した本気の客が生まれる</div></div>
<div class="slot"><span class="time">関所</span><div class="w2">「本気の人だけ来て」で絞られ、覚悟ある人だけ申し込む</div></div>
<div class="slot"><span class="time">温め</span><div class="w2">雑談→現状→理想（なぜ2回）→ギャップを一緒に見る</div></div>
<div class="slot"><span class="time">価値</span><div class="w2">その場で本気のアドバイスを渡し「来てよかった」と満足させる</div></div>
<div class="slot"><span class="time">橋渡し</span><div class="w2">「一人でやる？一緒にやる？」と許可を取る</div></div>
<div class="slot"><span class="time">提案</span><div class="w2">中身・期間・価格を提示→言い切って黙る</div></div>
<div class="slot"><span class="time">反論</span><div class="w2">お金・時間・自信を、掘った動機を使って返す</div></div>
<div class="slot"><span class="time">取りこぼし</span><div class="w2">断られたら軽いプランを出す（最初には出さない）</div></div>
<div class="slot"><span class="time">循環</span><div class="w2">相談後の声を回収→ストーリーで紹介→次の相談を呼ぶ</div></div>
</div>
<div class="key">本質は1つ。<strong>「説得して売る」のではなく「価値を渡して、向こうから申し込ませる」。</strong>どのステップも、相手から主導権を奪わず、相手に決めさせるためにある。</div>

<h2><span class="s">9</span>検品：説得になってないか</h2>
<div class="check"><ul>
<li>関所ページで本気の人だけ絞ったか（「来ないで」を書けたか）</li>
<li>通話で相手に多くしゃべらせたか（自分がしゃべりすぎてないか）</li>
<li>理想の「なぜ」を2回掘り、本当の動機まで届いたか</li>
<li>相談自体に、その場で価値を渡したか（出し惜しみしてないか）</li>
<li>オファー後、言い切って黙れたか（先に逃げ道を作ってないか）</li>
<li>断られた時の軽いプランを用意したか（最初に出してないか）</li>
<li>相談後の声を回収して、ストーリーで回したか</li>
</ul></div>
<div class="end">高額は、説得では売れない。<br>相手が自分で「やりたい」と決めた時にしか、人は大金を払わない。<br>だから——売り込むな。<strong>価値を渡し切れ。</strong><br>表で集めて、裏で回収する。これでローンチの全工程が完成だ。</div>
</div>
  `,

};

export function chaptersByPhase(phaseId) {
  return CHAPTERS.filter(c => c.phaseId === phaseId);
}
export function getChapter(id) {
  return CHAPTERS.find(c => c.id === id) || null;
}
export function getPhase(id) {
  return PHASES.find(p => p.id === id) || null;
}
export function nextChapter(currentId) {
  const i = CHAPTERS.findIndex(c => c.id === currentId);
  if (i < 0) return CHAPTERS[0];
  return CHAPTERS[i + 1] || null;
}
