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
  { id: 'p3-seven',        phaseId: 'p3', n: '05', title: '爆売れ7ステップ訴求の型',        estMin: 10, suggestedTodos: ['7ステップで訴求の下書きを書く'] },
  { id: 'p3-writing',      phaseId: 'p3', n: '06', title: '引き込まれる文章の作り方',      estMin: 8, suggestedTodos: ['PREPでフック文を1本書く'] },
  { id: 'p3-cautions',     phaseId: 'p3', n: '07', title: '訴求の注意点と運用ルール',      estMin: 6, suggestedTodos: ['NGワード/トーンを自分用にメモ'] },

  // Phase 4 ── 拡張
  { id: 'p4-kpi',          phaseId: 'p4', n: '01', title: '収益化7大ポイントとKPI',       estMin: 8,  suggestedTodos: ['週次KPIシートを開いて記入する'] },
  { id: 'p4-story-design', phaseId: 'p4', n: '02', title: '収益を上げるストーリー構成',    estMin: 8,  suggestedTodos: ['1週間のストーリー設計を書く'] },
  { id: 'p4-mix',          phaseId: 'p4', n: '03', title: 'マネタイズの種類と設計',        estMin: 7,  suggestedTodos: ['アフィ/自社の比率を決める'] },
  { id: 'p4-cross',        phaseId: 'p4', n: '04', title: '横軸展開の伸ばし方',            estMin: 6,  suggestedTodos: ['展開する2軸目のプラットフォームを決める'] },
  { id: 'p4-product',      phaseId: 'p4', n: '05', title: '自社商品の設計と販売戦略',      estMin: 10, suggestedTodos: ['自社商品の3行要約を書く'] },
];

// ── Chapter bodies — long-form lessons (HTML strings rendered into `.prose`) ──
// Only Phase 1 ch01-02 are written for now; rest fall back to placeholder.
export const CHAPTER_BODIES = {
  'p1-genre': `
    <p>SNSで失敗する人の9割は<strong>「ジャンルを間違えた」か「コンセプトが弱い」</strong>のどちらか。動画のクオリティがどれだけ高くても、ジャンルとコンセプトがズレていたら伸びない。逆に言えば、ここを外さなければ、最初の数本から手応えが出る。</p>

    <h3>なぜジャンルがすべてを決めるのか</h3>

    <h4>1. インスタは「人」ではなく「ジャンル」をフォローする時代</h4>
    <p>ユーザーは「この人が好き」ではなく<strong>「このジャンルが好き」</strong>でフォローする。ジャンルがブレると離脱する。アカウントの軸＝ジャンルが、全フォロワー獲得の入口になる。</p>
    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        <div class="callout__title">よくある失敗</div>
        「美容もやるし旅行もやるし料理も」というアカウント。誰にも刺さらない典型。最初は <em>スキンケアのみ</em> など1テーマに絞り込むのが正解。
      </div>
    </div>

    <h4>2. マーケットイン × プロダクトアウト の重なりが最強</h4>
    <p>需要がある市場だけを狙っても続かない。自分の好きだけを発信しても誰にも届かない。<strong>「需要がある × 自分が続けられる」の重なり</strong>が月100万円への最短ルート。</p>

    <svg class="diagram-venn" viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" aria-label="マーケットインとプロダクトアウトのベン図">
      <circle cx="150" cy="120" r="100" style="fill: var(--c-accent); fill-opacity: 0.22; stroke: var(--c-accent);" stroke-width="1.4"/>
      <circle cx="270" cy="120" r="100" style="fill: var(--c-accent-strong); fill-opacity: 0.22; stroke: var(--c-accent-strong);" stroke-width="1.4"/>
      <text x="90"  y="60"  text-anchor="middle" font-family="serif" font-style="italic" font-size="13" style="fill: var(--c-mid-1);" letter-spacing="2">MARKET-IN</text>
      <text x="90"  y="125" text-anchor="middle" font-family="sans-serif" font-size="13" style="fill: var(--c-ink);">市場の需要</text>
      <text x="90"  y="145" text-anchor="middle" font-family="sans-serif" font-size="12" style="fill: var(--c-mid-1);">悩み・トレンド</text>
      <text x="330" y="60"  text-anchor="middle" font-family="serif" font-style="italic" font-size="13" style="fill: var(--c-mid-1);" letter-spacing="2">PRODUCT-OUT</text>
      <text x="330" y="125" text-anchor="middle" font-family="sans-serif" font-size="13" style="fill: var(--c-ink);">自分の強み</text>
      <text x="330" y="145" text-anchor="middle" font-family="sans-serif" font-size="12" style="fill: var(--c-mid-1);">経験・好き</text>
      <text x="210" y="118" text-anchor="middle" font-family="serif" font-size="15" font-weight="700" style="fill: var(--c-accent-strong);">勝てる</text>
      <text x="210" y="140" text-anchor="middle" font-family="serif" font-size="15" font-weight="700" style="fill: var(--c-accent-strong);">ジャンル</text>
    </svg>
    <p class="diagram-venn__caption">需要 × 自分の重なり</p>

    <ul>
      <li><strong>マーケットイン</strong>：市場の需要・ニーズを起点に参入する</li>
      <li><strong>プロダクトアウト</strong>：自分の強み・好き・コンプレックスを起点にする</li>
      <li>この2つが重なるジャンルが <em>あなたが勝てる市場</em></li>
    </ul>

    <div class="pull-quote">需要がある × 続けられる × 自分ならでは。<br>この3つが揃わない限り、伸びはやってこない。</div>

    <h4>3. コンセプトが弱いと「認知はされるがフォローされない」</h4>
    <p>動画が再生されてもフォロワーが増えないのは、<strong>「この人をフォローする理由」</strong>が伝わっていないから。コンセプトとは「誰が・何をして・どう変わるか」を一言で表したもの。</p>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">弱い例</div>
        <div class="diagram-compare__example">美容好き女子のVlog</div>
        <div class="diagram-compare__body">誰でも言える。差別化ゼロ。フォロー理由が伝わらない。</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">強い例</div>
        <div class="diagram-compare__example">元借金100万の私が、節約で6ヶ月完済</div>
        <div class="diagram-compare__body">誰が／何で／どう変わるが一文で明確。共感と再現性がある。</div>
      </div>
    </div>

    <h3>よくある間違い</h3>
    <div class="qa">
      <div class="qa__q">「好きなことを発信すれば伸びる」は本当？</div>
      <div class="qa__a">半分正解・半分間違い。「好き」は継続力を生むが、需要がない市場では伸びない。<strong>「好き」＋「需要がある」＋「自分ならではの切り口」</strong>の3つが揃って初めて伸びる。</div>
    </div>
    <div class="qa">
      <div class="qa__q">動画のクオリティを上げれば伸びる？</div>
      <div class="qa__a">間違い。ジャンル・コンセプト・フックが弱ければ、どれだけ映像が綺麗でも再生されない。<strong>まずジャンルとコンセプトを固め、次にクオリティ</strong>の順番が正しい。</div>
    </div>
    <div class="qa">
      <div class="qa__q">フォロワーが増えてから収益化を考えればいい？</div>
      <div class="qa__a">危険。マネタイズを想定しないジャンルで育てると、収益化の段階で詰む。<strong>最初からマネタイズ導線があるジャンル</strong>を選ぶ。</div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--tip">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        ジャンル選定は <strong>「需要 × 継続 × 差別化」</strong> の3条件で決める。最初は1テーマに絞り、マネタイズ導線が想定できるジャンルから入る。これだけで、伸びない9割から抜け出せる。
      </div>
    </div>
  `,

  'p1-stocktake': `
    <p><strong>「何を発信するか」</strong> に悩む前に、まず自分が持っているものを全部書き出す。これが棚卸し。正解はない。思いつくまま書いて埋めていけば、自分の発信軸の候補が自然に浮かび上がる。</p>

    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        <div class="callout__title">この章のゴール</div>
        HARM 4分類 ＋ ライフスタイル軸で <strong>自分の経験・悩み・強み</strong> を列挙し、発信ジャンルの候補を3〜5個まで絞る。
      </div>
    </div>

    <h3>HARM の法則で書き出す</h3>
    <p>前章の HARM 4分類に沿って、自分の経験を全部書き出していく。「これは弱いから書かない」と判断しない。一度全部出してから選ぶ。</p>

    <h4>H — Health（健康・美容・ダイエット）</h4>
    <ul>
      <li>気になった・悩んだ健康の悩みは？（睡眠、疲れやすい、肌荒れ、冷え性…）</li>
      <li>病気・体調不良の経験は？（入院、慢性的な不調、メンタル不調…）</li>
      <li>美容で悩んだ・解決したことは？（スキンケア、脱毛、ニキビ、エイジング…）</li>
      <li>ダイエットの経験は？ 成功も失敗も書く（◯kgの増減、試した方法、リバウンド…）</li>
      <li>メンタル面で悩んだ・乗り越えたことは？（不安症、うつ、自己肯定感、ストレス…）</li>
    </ul>

    <h4>A — Ambition（夢・キャリア・将来）</h4>
    <ul>
      <li>夢や目標に向かって挑戦・挫折したことは？（受験、資格、スポーツ、起業…）</li>
      <li>将来について悩んだ・決断したことは？（進路、転職、移住、独立…）</li>
      <li>今までの仕事・キャリアで得たスキルや知識は？</li>
      <li>叶えた夢・達成したことと、その努力プロセスは？</li>
    </ul>

    <h4>R — Relation（人間関係・恋愛・家族）</h4>
    <ul>
      <li>人間関係で悩んだ・解決したことは？（職場、友人、家族、ママ友…）</li>
      <li>恋愛経験：片思い、失恋、遠距離、婚活…</li>
      <li>結婚・子育て・家族関係での経験は？</li>
      <li>コミュニケーションが苦手だった・得意になったことは？</li>
    </ul>

    <h4>M — Money（お金・節約・資産）</h4>
    <ul>
      <li>お金の悩み・失敗経験は？（借金、浪費、節約失敗…）</li>
      <li>お金で解決・改善したことは？（節約成功、副収入、投資…）</li>
      <li>収入アップのために試みたことは？（転職、副業、スキルアップ…）</li>
      <li>資産形成・投資について学んだことは？</li>
    </ul>

    <h4>＋ Lifestyle（生活・趣味・価値観）</h4>
    <ul>
      <li>今の住環境・家族構成・職業は？</li>
      <li>趣味・好きなこと・ハマっていることは？</li>
      <li>日常で大切にしている習慣・こだわりは？</li>
      <li>人と違うと言われる価値観・生き方は？</li>
    </ul>

    <h3>分析 — 発信軸の候補を絞る</h3>

    <h4>Step 1 ── 共通テーマを探す</h4>
    <p>書き出した中で <strong>繰り返し出てきたテーマ</strong> やキーワードに印をつける。自分が無意識に詳しい領域がそこにある。</p>

    <h4>Step 2 ── 他人より詳しいものを選ぶ</h4>
    <p>「友達からよく相談される」「自然と人より知識がある」テーマ。自慢にならなくていい。素直に書く。</p>

    <h4>Step 3 ── 過去の悩み → 今は解決できているもの</h4>
    <p>悩んでいた頃の自分 ＝ 今の視聴者のイメージ。<strong>解決した経験ほど発信の武器</strong>になる。</p>

    <h4>Step 4 ── 発信できそうなジャンル候補（3〜5個）</h4>
    <p>ここまでで自然に浮かび上がる候補を、3〜5個まで書き出して次章へ持ち越す。</p>

    <h3>コンプレックスを武器にする</h3>
    <p>太っていた・離婚経験・借金などの <strong>「コンプレックス（弱いところ）」</strong> はSNSで最大の武器になる。同じ悩みを持つ人が「この人に任せたい」と思うから。</p>
    <div class="callout callout--tip">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        <div class="callout__title">Your Weakness = Strength</div>
        人には大きな声で言えない悩み・過去の失敗・コンプレックスを、正直に書いてみる。隠したいものほど、発信では強みになる。
      </div>
    </div>

    <h3>コンセプト方程式</h3>
    <p>棚卸しで出てきた素材を、次の式に当てはめる。これが発信軸のテンプレ。</p>
    <div class="formula">
      コンプレックス <span class="formula__op">×</span> HARM <span class="formula__op">×</span> 変化していく姿
    </div>
    <p><strong>例：</strong> 元借金100万の私が（コンプレックス）× お金の悩みを解決（M：Money）× 6ヶ月で完済する過程（変化）</p>
    <div class="callout callout--point">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        <strong>結果より過程</strong> を見せるのがSNSでバズる法則。「100日で痩せる」「月5万円で生活できるか」など、目標に向かうプロセスを発信することで、視聴者は応援者になる。
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        棚卸しは <strong>「材料集めの段階」</strong>。良し悪しを判断せず全部書き出す。コンプレックスは隠さず武器にする。次章では、ここで出した素材を「発信軸」に絞り込む。
      </div>
    </div>
  `,

  'p1-axis': `
    <p>棚卸しで出てきた候補を、<strong>1つの「発信軸」に絞り込む</strong>のがこの章。複数案を並べて評価項目で比較し、勝てる軸を1つ決める。</p>

    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        <div class="callout__title">絞らないと伸びない</div>
        「美容も子育ても投資も」というアカウントは、見る側に <em>「結局この人は何の人なの？」</em> と疑問を持たせる。最初の半年は <strong>1つの軸だけ</strong> で勝負する。
      </div>
    </div>

    <h3>候補ごとに評価する5項目</h3>
    <p>棚卸しで出した候補（3〜5個）それぞれを、次の5項目で書き出す。書いていくと、自然に強い案と弱い案が見えてくる。</p>

    <h4>1. キャッチ（一言で表現する）</h4>
    <p>「これは何のアカウント？」を1行で言えるか。<br><em>例：心理学×ジャーナル×勉強法 ＋HSP＋TOPIK6級</em></p>

    <h4>2. コンセプト（誰が・何をして・どうなる）</h4>
    <p>前章の方程式（コンプ × HARM × 変化）に沿って1文で書く。<br><em>例：HSPで頭の中がごちゃごちゃだった私が、3行日記を4年続けて、メンタル安定→韓国語6級取得→ビジネス挑戦まで到達した</em></p>

    <h4>3. 差別化ポイント（競合との違い）</h4>
    <p>同ジャンルで上位の発信者と何が違うか。<strong>3軸以上の組み合わせ</strong> があると差別化しやすい。<br><em>例：ジャーナリング×勉強法×HSPの3軸を持つ発信者がほぼいない。4年間の日記継続実績とTOPIK6級が証拠</em></p>

    <h4>4. マネタイズ方法（複数可）</h4>
    <p>このジャンルで <strong>何を売れるか</strong>。アフィリ商材・自社商品・コンサル・教材など、想定できる収益源を全部書く。導線がないジャンルはここで除外する。</p>

    <h4>5. リスク・課題</h4>
    <p>始めたら立ちはだかる壁を予測する。映え難易度、ネタの枯渇しやすさ、競合の強さ、季節性など。書くだけで覚悟が決まる。</p>

    <h3>優先度の付け方</h3>
    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">★★</div>
        <div class="framework__name">主軸候補（最強）</div>
        <p class="framework__desc">差別化・需要・継続力の3拍子。これで決めて即始める。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">★</div>
        <div class="framework__name">主軸候補（強い）</div>
        <p class="framework__desc">何かが少し弱いが、十分戦える。サブにせず主軸として走る選択肢。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">○</div>
        <div class="framework__name">突き詰めたらアリ</div>
        <p class="framework__desc">伸びしろはあるが磨きが必要。今は主軸にしない。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">△</div>
        <div class="framework__name">サブ素材</div>
        <p class="framework__desc">主軸の中で時々入れるトピックとして使う。</p>
      </div>
    </div>

    <h3>最終決定の手順</h3>
    <ol>
      <li>候補を5項目で評価しきる</li>
      <li>★★ が出たらそれを主軸に決める。複数あれば「継続できそうな方」を選ぶ</li>
      <li>★★ がなく ★ が複数あるなら、<strong>マネタイズ導線が強い方</strong> を主軸に</li>
      <li>主軸を「Xが教える / Yの発信 / フォローするとZ」の1文で言い切る</li>
    </ol>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        棚卸し素材を <strong>1つの軸</strong> に絞る。5項目で評価し、★★ または「マネタイズ導線が強い ★」を選ぶ。次章では、その軸で参考にすべきアカウントの見つけ方を学ぶ。
      </div>
    </div>
  `,

  'p1-bench': `
    <p>発信軸が決まったら、次は <strong>参考アカウントを最低10個</strong> リストアップする。ここをサボると伸びる型が分からないまま投稿し続けることになる。完全オリジナルで作ろうとせず、伸びている人を徹底的に観察するのが最短ルート。</p>

    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        <div class="callout__title">パクりではなく分解</div>
        コピーするのではなく <em>「なぜこれが伸びるのか」を分解</em> する。フックの作り方・サムネ文字・尺感・カラー設計など、要素ごとに自分の言葉で言語化していく。
      </div>
    </div>

    <h3>実際の手順（4ステップ）</h3>

    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">ジャンルのハッシュタグを検索してアルゴリズムを教育する</div>
        <div class="step-grid__body">ジャンルが決まったら関連タグを Instagram・TikTok で検索。再生数が多い投稿に <strong>いいね・フォロー</strong> して、インスタ側に「このアカウントのジャンル」を認知させる。</div>
        <div class="step-grid__example">例：垢抜け系なら <strong>#垢抜け #ルーティン</strong> を検索 → 再生数が多いものをいいね・フォロー。<br>最低 <strong>20〜30投稿</strong> にいいね。これがアルゴリズムへの「属性教育」になる。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">虫眼鏡・リール欄が育ってきたらそこから探す</div>
        <div class="step-grid__body">属性教育が進むと <strong>虫眼鏡・左のリール欄が自分のジャンル一色</strong> になる。そこに流れてくる動画のプロフィールをチェックする。</div>
        <div class="step-grid__example">✅ 投稿数が少ないのにフォロワーが多いアカウントを探す<br>✅ プロフィール右上「…」→「このアカウントについて」で <em>開始年月日</em> を確認<br>✅ 開始 <strong>2〜3ヶ月以内でフォロワー5,000〜10,000以上</strong> → 優良参考アカウント</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">海外アカウントからも探す</div>
        <div class="step-grid__body">日本にまだ来ていないトレンドは <strong>海外に先にある</strong>。海外タグを翻訳して検索し、海外アカウントも同じ基準でリストアップする。</div>
        <div class="step-grid__example">① 日本語タグを英語・韓国語に翻訳して検索<br>② 海外アカウントが使っているタグ → そのタグを検索 → 新しいタグ発見 の繰り返し<br>③ 海外アカウントも同じ基準（開始日・フォロワー数）でメモ</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">参考アカウントの採用基準</div>
        <div class="step-grid__body"><strong>10個以上</strong> 集まったら投稿を始めてOK。下記の基準を全部満たしているか確認する。</div>
        <div class="step-grid__example">✅ 投稿1桁でフォロワー1,000人以上（または2桁で1万人以上）<br>✅ 開始 2〜3ヶ月以内でフォロワー 5,000〜10,000以上<br>✅ フォロー数が最小限（相互フォロー目的ではない）<br>✅ バズっているリールがある<br>✅ 自分と共通点があるオリジナル動画</div>
      </div>
    </div>

    <h3>選ぶ視点（フォロワー数より重要）</h3>
    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">構</div>
        <div class="framework__name">構成</div>
        <p class="framework__desc">投稿の流れ・テンポ・パターン。冒頭→展開→オチの型。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">世</div>
        <div class="framework__name">世界観</div>
        <p class="framework__desc">カラースキーム、フォント、ビジュアルトーンが統一されているか。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">掴</div>
        <div class="framework__name">フック</div>
        <p class="framework__desc">冒頭3秒の掴み。続きが気になる設計。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">的</div>
        <div class="framework__name">ターゲット像</div>
        <p class="framework__desc">誰に向けた発信か、コメント欄から読み取れる。</p>
      </div>
    </div>

    <h3>記録すべき項目</h3>
    <p>見つけたらアプリ内の「参考アカウント」エリアに登録。最低限の項目は以下：</p>
    <ul>
      <li>アカウント名・@ハンドル・プラットフォーム</li>
      <li>フォロワー数・投稿数・開始時期（伸びるスピード把握用）</li>
      <li>発信内容を1〜2文で要約（誰が・何を）</li>
      <li><strong>参考ポイント</strong>：何を盗むか。フックの型？世界観？尺感？</li>
    </ul>

    <h3>よくある間違い</h3>
    <div class="qa">
      <div class="qa__q">フォロワー100万人のアカウントを参考にすべき？</div>
      <div class="qa__a">必ずしも違う。<strong>「自分が今いる規模の少し先」</strong> を参考にする方が再現性が高い。フォロワー1万→5万を狙うなら、3〜10万規模の参考が現実的。</div>
    </div>
    <div class="qa">
      <div class="qa__q">参考アカウントは何個必要？</div>
      <div class="qa__a">最低 <strong>10個</strong>。1つだけだと盗作っぽくなる。複数の良いところを掛け合わせるのが正解。</div>
    </div>
    <div class="qa">
      <div class="qa__q">参考はジャンルが同じじゃないとダメ？</div>
      <div class="qa__a">違う。<strong>「映像表現の参考」「フックの参考」「世界観の参考」</strong> はジャンル横断で集める。節約発信でも、ガジェット系YouTuberの編集テンポを参考にしていい。</div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        オリジナルで考えず、<strong>分解と組み合わせ</strong> で勝つ。アルゴリズムを属性教育してから10個以上の参考アカウントを集める。次章は <em>アカウント初期設定</em> でいよいよ自分のアカウントを立てる。
      </div>
    </div>
  `,

  'p1-profile': `
    <p>アカウントを開設する前に <strong>コンセプトとプロフィールを固める</strong>。見た目より中身を先に決める。ここがブレると伸びても収益化につながらない。</p>

    <div class="pull-quote">プロフィールはアカウントの<br>「玄関」。 ここで90%が決まる。</div>

    <h3>4要素の設定ポイント</h3>

    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">アカウントID（ユーザーネーム）</div>
        <div class="step-grid__body">ネットのドメインと同じ役割。<strong>覚えやすく、検索しやすく、ジャンルが一発で分かる</strong> ものにする。記号や数字を使いすぎない。</div>
        <div class="step-grid__example">@setsuyaku_miku<br>@diet_ayano_30<br>@skincare_hana_30s</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">アイコン</div>
        <div class="step-grid__body">拾い画像はNG。自分が <strong>何者か分かり、安心感や憧れを抱かせる</strong> オリジナルの綺麗な写真を使う。</div>
        <div class="step-grid__example">顔出しが難しい場合 → イラスト・後ろ姿でもOK<br>背景はシンプル、顔・雰囲気がはっきり見えるもの<br>3〜6ヶ月で変えない（覚えてもらう）</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">表示名（ニックネーム）</div>
        <div class="step-grid__body">「自分の名前 ＋ どんな発信をしているか」を記載し、<strong>一発でジャンルが伝わる</strong> ようにする。</div>
        <div class="step-grid__example">節約みく｜月3万貯める方法教えます<br>あやの@30日でマイナス8kg達成<br>ハナ｜30代肌の保湿ガチ勢</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">プロフィール文</div>
        <div class="step-grid__body">発信内容、発信者の属性、境遇をしっかり書く。<strong>「誰が・何を・どうなれる」の3点</strong> を必ず入れる。絵文字で柔らかさを出して安心感を与える。</div>
        <div class="step-grid__example">コンプレックスや過去の失敗も正直に書くと共感を得やすい：<br>「元借金100万円｜3年で完済した節約術｜30代会社員ママ｜DMでお気軽に🌱」</div>
      </div>
    </div>

    <h3>プロフィール文の作り方テンプレ</h3>
    <div class="formula">
      <span style="display:block; margin-bottom:6px;">【誰が】<span class="formula__op">×</span>【何を発信】<span class="formula__op">×</span>【フォローでどうなれる】</span>
      <span style="font-size:14px; color:var(--c-mid-1); display:block;">＋ コンプレックス／実績 ＋ DMやリンクへの導線</span>
    </div>

    <h3>開設後の必須設定3つ</h3>

    <div class="callout callout--point">
      <div class="callout__icon">1</div>
      <div class="callout__body">
        <div class="callout__title">プロアカウントへの切り替え</div>
        プロフィール編集 → 「プロアカウントに切り替え」→ <strong>自分のジャンルに合うカテゴリーを選択</strong>。インサイト（分析データ）が見られるようになる。これがないと PDCA が回せない。
      </div>
    </div>

    <div class="callout callout--point">
      <div class="callout__icon">2</div>
      <div class="callout__body">
        <div class="callout__title">連絡先の同期オフ</div>
        設定 → 「アカウントセンター」→ 連絡先のアップロードを <strong>オフ</strong>。これをやらないと知人に自動フォローされる事故が起きる。匿名で運用したい人は必須。
      </div>
    </div>

    <div class="callout callout--point">
      <div class="callout__icon">3</div>
      <div class="callout__body">
        <div class="callout__title">虫眼鏡（発見タブ）の教育</div>
        インスタのAIに「このアカウントが何に関心があるか」を認識させる作業。検索欄を開き、関係ない投稿は <em>「興味なし」</em> にする。自分の発信ジャンルのタグを検索して「いいね」を押す。<strong>20いいね毎に間隔を空けながら</strong> 繰り返し、検索欄を自分のジャンル一色に染める。これでターゲット層に投稿が届きやすくなる。
      </div>
    </div>

    <h3>NG vs OK 設定例</h3>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">NG</div>
        <div class="diagram-compare__example">@user_3829_xyz / 名前：たろう / プロフ：「日々のことを発信します」</div>
        <div class="diagram-compare__body">ID不明・ジャンル不明・誰向けか不明。誰もフォローしない。</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">OK</div>
        <div class="diagram-compare__example">@setsuyaku_taro / 名前：節約たろう｜月5万浮かせる暮らし / プロフ：「30代会社員｜借金150万→3年で完済｜毎日続く節約術｜DM歓迎」</div>
        <div class="diagram-compare__body">誰が・何を・どうなれる・どんな実績が一目で分かる。フォロー理由が明確。</div>
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        プロフィールは <strong>「ID・アイコン・表示名・プロフ文」の4点セット</strong>。誰が・何を・どうなれるを明確に。プロアカ切替・連絡先同期オフ・虫眼鏡教育を初日に終わらせる。<em>Phase 1 完了。次は伸ばすフェーズ。</em>
      </div>
    </div>
  `,

  'p1-harm': `
    <p>人間が<strong>「お金を払ってでも解決したい」</strong>と感じる悩みには、共通のパターンがある。そのパターンを知ることが、稼げるジャンル選びの第一歩。マーケティング業界で長く使われている <em>HARM</em> の枠組みで見ていく。</p>

    <h3>HARMの法則とは</h3>
    <p>人間が生活する上で <strong>本能的に・繰り返し・緊急性高く</strong> 求めるジャンルの頭文字。この市場は「早く解決したい」という欲求が強く、お金が動きやすい。</p>

    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">H</div>
        <div class="framework__name">Health（健康・美容・ダイエット）</div>
        <p class="framework__desc">痩せたい、肌を綺麗にしたい、若く見られたい。<strong>見た目と健康は一生の悩み</strong>。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">A</div>
        <div class="framework__name">Ambition（キャリア・副業・スキル）</div>
        <p class="framework__desc">もっと稼ぎたい、出世したい、手に職をつけたい。<strong>向上心は尽きない</strong>。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">R</div>
        <div class="framework__name">Relation（恋愛・結婚・人間関係）</div>
        <p class="framework__desc">振り向いてほしい、離婚したい、人間関係を改善したい。<strong>感情が動く市場</strong>。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">M</div>
        <div class="framework__name">Money（お金・投資・節約・稼ぎ方）</div>
        <p class="framework__desc">節約から投資・副業まで幅広い。<strong>マネタイズ商品が豊富</strong>でアフィリも組みやすい。</p>
      </div>
    </div>

    <div class="callout callout--info">
      <div class="callout__icon">+</div>
      <div class="callout__body">
        <div class="callout__title">＋ トレンド枠（AI・投資・Z世代文化など）</div>
        一時的に爆発的な需要が生まれるジャンル。タイミングを掴めば短期間で大きく伸びる。ただし<strong>旬が過ぎると急落するリスク</strong>もある。
      </div>
    </div>

    <h3>稼げる市場の見極め方</h3>

    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        <div class="callout__title">緊急性が高い悩みを選ぶ</div>
        「いつかやりたい」より <strong>「今すぐ解決したい」</strong> 悩みの方がお金が動く。借金・肌荒れ・失恋・転職など、放置できない悩みがターゲット。
      </div>
    </div>

    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        <div class="callout__title">コンプレックスと掛け合わせる</div>
        同じジャンルでも、発信者が同じ悩みを持っていた経験があると共感力が倍増。<em>「元〇〇の私が」</em> という文脈が最強の差別化になる。
      </div>
    </div>

    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        <div class="callout__title">マネタイズ導線が存在するか確認する</div>
        参入前に「このジャンルで何を売れるか」を必ずチェック。<strong>アフィリ案件があるか / 自社商品化できるか / 単価はいくらか</strong>を想定してから始める。
      </div>
    </div>

    <div class="pull-quote">緊急性が高い悩みには、お金が動く。</div>

    <h3>狙うべきポジション</h3>
    <p>同じHARMジャンルの中でも、<strong>緊急性 × コンプレックス保有</strong> の2軸で見ると勝ち目のあるポジションが見える。</p>

    <div class="diagram-matrix">
      <span class="diagram-matrix__x-axis">　　　　　　緊急性 　 →</span>
      <span class="diagram-matrix__y-axis">コンプレックス保有  ↑</span>
      <div class="diagram-matrix__cell diagram-matrix__cell--target">
        <div class="diagram-matrix__cell-label">★ 勝ち筋</div>
        共感 ＋ 緊急性。<br>「同じ悩みを乗り越えた人」として強く刺さる。
      </div>
      <div class="diagram-matrix__cell">
        <div class="diagram-matrix__cell-label">レッドオーシャン</div>
        緊急性は高いが共感差別化が薄い。<br>競合だらけで埋もれやすい。
      </div>
      <div class="diagram-matrix__cell">
        <div class="diagram-matrix__cell-label">ニッチだが弱い</div>
        共感はあるが急がない悩み。<br>お金が動きにくい。
      </div>
      <div class="diagram-matrix__cell">
        <div class="diagram-matrix__cell-label">無風ゾーン</div>
        誰も急いでなく、自分にも語る権利がない。<br>避ける。
      </div>
    </div>

    <h3>あなたのジャンルをHARMで位置づける</h3>
    <p>4分類のうち、自分の発信が <strong>どこに属するか</strong> を1つ選ぶ。複数にまたがる場合は、最も時間と熱量を使えるものを主軸にする。トレンド枠は単独で勝負せず、HARMのどれかと掛け合わせるのが安全。</p>

    <h4>ジャンル決定までの流れ</h4>
    <div class="diagram-funnel">
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">1</span>HARM 4分類から1つ選ぶ</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">2</span>自分のコンプレックスを掛ける</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">3</span>緊急性が高いか確認</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">4</span>マネタイズ導線あり</div>
    </div>

    <div class="formula">
      自分のジャンル <span class="formula__op">=</span> HARM <span class="formula__op">×</span> コンプレックス <span class="formula__op">×</span> 変化の過程
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        稼げる市場には共通パターンがある。<strong>HARM 4分類のどれか</strong>に乗り、<strong>緊急性 × コンプレックス × マネタイズ導線</strong>の3条件で見極める。次章では、自分の中身を棚卸しして、この枠組みに当てはめていく。
      </div>
    </div>
  `,

  // ============================================================
  // Phase 2 — 伸ばす
  // ============================================================

  'p2-algo': `
    <p>インスタは <strong>「いい動画」ではなく「ユーザーが反応した動画」</strong> を広める。アルゴリズムの判断基準を知ることが、再生数を伸ばす最短ルート。基準はシンプルに4つだけ。</p>

    <div class="pull-quote">アルゴリズムは、視聴者の反応を見て拡散する。<br>＝ 反応を取れる動画を作るのが全て。</div>

    <h3>バズを決める4指標</h3>
    <p>インスタはまず少人数にテスト配信し、反応が良ければ広げる。投稿は <strong>4段階の関門</strong> を通る。</p>

    <div class="diagram-funnel">
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">1</span>初速：投稿後1〜3時間の反応</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">2</span>完視聴率：最後まで見られたか</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">3</span>保存：後で見返したいか</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">4</span>プロフクリック：フォロワー化</div>
    </div>

    <h4>1. 初速（投稿後1〜3時間）</h4>
    <p>インスタは投稿直後の <strong>「いいね・保存・コメント・シェア」</strong> でテスト配信の合否を判定する。ここで反応が取れると一気に拡散される。</p>
    <ul>
      <li>投稿後すぐにストーリーでシェアして初速を上げる</li>
      <li>ターゲットがアクティブな時間に投稿する（後述）</li>
      <li>最初の30分はアプリを開いてコメント返信</li>
    </ul>

    <h4>2. 完視聴率（最後まで見られた割合）</h4>
    <p>30秒動画を15秒で離脱されると完視聴率50%。動画が短いほど完視聴率は上がる。<strong>30〜40秒がベスト</strong>。</p>
    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        冒頭3秒で「続きが気になる」状態を作る。<br>
        無音・間を作らず、テンポよく展開する。
      </div>
    </div>

    <h4>3. 保存数（後で見返したいか）</h4>
    <p><strong>「保存」はインスタが最も重視するアクション</strong>。「有益だから取っておこう」と思わせるノウハウ・チェックリスト・まとめ系が強い。投稿末尾に <em>「保存して後で試してみて」</em> のCTAを必ず入れる。</p>

    <h4>4. プロフィールクリック率</h4>
    <p>動画を見てプロフィールに飛ぶ人の割合。<strong>コンセプトが明確</strong> で「もっと見たい」と思わせる動画ほどクリック率が上がり、フォロワー増加につながる。Phase 1 の発信軸がここで効いてくる。</p>

    <h3>反応を上げる3つの基本</h3>
    <div class="stat-row">
      <div class="stat-row__cell">
        <div class="stat-row__num">3<span class="stat-row__num-unit">秒</span></div>
        <div class="stat-row__label">冒頭で掴む時間</div>
      </div>
      <div class="stat-row__cell">
        <div class="stat-row__num">30<span class="stat-row__num-unit">秒</span></div>
        <div class="stat-row__label">動画の理想尺</div>
      </div>
      <div class="stat-row__cell">
        <div class="stat-row__num">30<span class="stat-row__num-unit">分</span></div>
        <div class="stat-row__label">投稿後の張り付き</div>
      </div>
    </div>

    <h3>投稿時間の見方</h3>
    <p>ターゲットがインスタを開いている時間に投稿する。一般的な高反応時間帯は：</p>
    <ul>
      <li><strong>朝</strong>：7〜9時（通勤・支度の隙間）</li>
      <li><strong>昼</strong>：12〜13時（休憩中）</li>
      <li><strong>夜</strong>：20〜22時（家事終わりリラックス）</li>
    </ul>
    <p>プロアカウントの <strong>インサイトでフォロワーのアクティブ時間</strong> を必ず確認する。自分のフォロワーの傾向に合わせるのが最強。</p>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        伸びる動画は <strong>「初速 → 完視聴 → 保存 → プロフクリック」</strong> の4関門を通る。冒頭3秒・30秒尺・投稿後30分張り付きが基本。次章は、この基準を満たす動画の <em>作り方</em> をCapCutで学ぶ。
      </div>
    </div>
  `,

  'p2-capcut': `
    <p>バズる動画は <strong>「発見 → 模倣 → 構成 → タイトル → 音源/タグ → 投稿時間」</strong> の6要素で決まる。サムネはCanva、動画編集はCapCut。この章ではCapCutで動画を作る流れを掴む（基本操作は次章）。</p>

    <h3>バズる投稿の6要素</h3>

    <div class="diagram-flow">
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">1</span><span class="diagram-flow__step-label">発見</span>バズ動画記録</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">2</span><span class="diagram-flow__step-label">模倣</span>完全コピー</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">3</span><span class="diagram-flow__step-label">構成</span>結→起→転→結</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">4</span><span class="diagram-flow__step-label">タイトル</span>15文字以内</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">5</span><span class="diagram-flow__step-label">音源/タグ</span>参考から</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">6</span><span class="diagram-flow__step-label">投稿</span>最適時間</div>
    </div>

    <h4>1. バズ動画を発見・記録する</h4>
    <p>リールに流れてくる動画から、<strong>「少ない投稿数でフォロワーが多いアカウント」</strong> を探し、直近3ヶ月以内のものをリストアップ。平均再生数を大きく超えている1本のURLを記録する。</p>
    <ul>
      <li>投稿1桁でフォロワー1000人以上 or 2桁で1万人以上が目安</li>
      <li>「このアカウントについて」から利用開始日を確認する</li>
    </ul>

    <h4>2. 完全模倣（モデリング）</h4>
    <p><strong>オリジナルで作ろうとすると失敗する</strong>。バズ動画のリンクをCapCutにオーバーレイ（上書き表示）して、すべてを真似る。</p>
    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        画角・角度・フォント・シャドウ・文字の切り替わり秒数・声のスピード・余白の有無まで <strong>完全コピー</strong>。動画の長さは <em>30〜40秒</em> がベスト。
      </div>
    </div>

    <h4>3. バズる動画の構成（型）</h4>
    <p>伸びている動画は <strong>「結 → 起 → 転 → 結」</strong> の構成。起承転結ではない。</p>
    <ul>
      <li>冒頭は「結果」から話す</li>
      <li>タイトルは15文字以内</li>
      <li>画面の切り替わりは2〜3秒</li>
      <li>声と声の間に無音・余白を作らない</li>
      <li>三脚を使用して画角を安定させる</li>
      <li>「常識を破壊する」「賛否両論を生む」コンテンツは拡散されやすい</li>
    </ul>

    <h4>4. バズるタイトルワード設計</h4>
    <p>タイトルは <strong>視聴を決める最重要要素</strong>。以下のパターンを組み合わせる。</p>
    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">即</div>
        <div class="framework__name">即効性</div>
        <p class="framework__desc">「今すぐ」「たった5分で」「1日3分で」</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">損</div>
        <div class="framework__name">損得訴求</div>
        <p class="framework__desc">「損しない〇〇」「これしたら上手くいく」</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">権</div>
        <div class="framework__name">権威性</div>
        <p class="framework__desc">「元美容部員の〜」「実は〇〇だった」</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">ぼ</div>
        <div class="framework__name">ぼかし表現</div>
        <p class="framework__desc">「アレ」「コレ」で興味を惹く</p>
      </div>
    </div>
    <p style="font-size: 13px; color: var(--c-mid-1)">ワードに困ったら <em>ラッコキーワード</em> で同ジャンルの検索キーワードを調べる。</p>

    <h4>5. 音源・キャプション・タグの設定</h4>
    <p>全部 <strong>参考アカウントのリサーチ結果</strong> をそのまま使う。オリジナルで考えない。</p>
    <ul>
      <li><strong>音源</strong>：リール下部「音源を使用」→「トレンド中」or 同ジャンルの伸びてる動画と同じ曲</li>
      <li><strong>タグ</strong>：参考アカウントが使っているものを5〜10個、ニッチ × 広めを混合</li>
      <li><strong>キャプション</strong>：参考アカウントの構成を真似る</li>
    </ul>

    <h4>6. 投稿時間の最適化</h4>
    <p>参考アカウントの投稿時間を確認し、<strong>同じ時間帯</strong> に合わせる。プロアカウントのインサイトでフォロワーのアクティブ時間も確認する。</p>

    <h3>アフレコ文章テンプレ（結 → 起 → 転 → 結）</h3>
    <div class="callout callout--tip">
      <div class="callout__icon">①</div>
      <div class="callout__body">
        <div class="callout__title">結果から話す</div>
        「ずっと準備してきたもの、ようやく発表できます」「DMで何十件も来てたアレ、解禁します」
      </div>
    </div>
    <div class="callout callout--tip">
      <div class="callout__icon">②</div>
      <div class="callout__body">
        <div class="callout__title">起：状況説明</div>
        「実は最近〜」と一旦話を括る。
      </div>
    </div>
    <div class="callout callout--tip">
      <div class="callout__icon">③</div>
      <div class="callout__body">
        <div class="callout__title">転：逆転</div>
        「でも、これを使ったら〜」で一気に話を逆転させる。
      </div>
    </div>
    <div class="callout callout--tip">
      <div class="callout__icon">④</div>
      <div class="callout__body">
        <div class="callout__title">結：変化</div>
        「今ではこんなに変わってヤバい」最終的な変化を示す。
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        伸びる動画はゼロから作らない。<strong>発見 → 完全模倣 → 6要素を整える</strong> 順で作る。アフレコは「結 → 起 → 転 → 結」。次章で実際のCapCut操作を覚える。
      </div>
    </div>
  `,

  'p2-basics': `
    <p>難しく考えなくていい。<strong>この順番で覚えれば誰でも動画が作れる</strong>。まずここに書いてあることだけをやる。慣れたらアレンジ。</p>

    <h3>編集の5ステップ</h3>
    <div class="diagram-flow">
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">1</span><span class="diagram-flow__step-label">プロジェクト</span>素材読込</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">2</span><span class="diagram-flow__step-label">カット</span>15〜20回</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">3</span><span class="diagram-flow__step-label">テキスト</span>アドゴシック</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">4</span><span class="diagram-flow__step-label">SE</span>1〜3個</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">5</span><span class="diagram-flow__step-label">書き出し</span>1080p</div>
    </div>

    <h3>① プロジェクト作成</h3>
    <p>CapCutを開く → 「新しいプロジェクト」→ カメラロールから素材を選択。<strong>画面比率は 9:16（縦型）を必ず選ぶ</strong>。撮影した動画はそのまま読み込めばOK。</p>

    <h3>② カット編集（一番重要）</h3>
    <p>30〜40秒の動画で <strong>15〜20カットが目安</strong>。1カットあたり約2秒。テンポよく切ることで最後まで見てもらえる。</p>
    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        <strong>カットすべき箇所</strong><br>
        ・「間」や無音部分は全部<br>
        ・「えー」「あー」などの言葉<br>
        ・声が終わったら即次へ
      </div>
    </div>
    <p><strong>やり方</strong>：タイムラインの動画をタップ → 再生ヘッド（白い縦線）を切る場所に移動 → 「分割」→ 不要部分を「削除」。<em>自動カット機能</em> を使うと楽になる。</p>

    <h3>③ テキスト（文字入れ）</h3>

    <h4>フォント — アドゴシック一択</h4>
    <p>下部メニュー「テキスト」→「テキスト追加」→ フォントタブで「アドゴシック」を選ぶ。<strong>太くて読みやすく、バズ動画で最もよく使われている</strong>。迷ったらこれ。</p>

    <h4>文字サイズ</h4>
    <div class="stat-row">
      <div class="stat-row__cell">
        <div class="stat-row__num">8〜10</div>
        <div class="stat-row__label">タイトル・強調</div>
      </div>
      <div class="stat-row__cell">
        <div class="stat-row__num">5〜7</div>
        <div class="stat-row__label">本文・説明</div>
      </div>
      <div class="stat-row__cell">
        <div class="stat-row__num">大</div>
        <div class="stat-row__label">迷ったらこちら</div>
      </div>
    </div>

    <h4>文字スタイル — 縁取りで読みやすく</h4>
    <p>「スタイル」タブで <strong>縁取り（アウトライン）かシャドウ</strong>を必ずつける。背景に応じて：</p>
    <ul>
      <li>背景が明るい → 黒文字 + 白縁取り</li>
      <li>背景が暗い → 白文字 + 黒縁取り</li>
      <li>縁取りの太さは 2〜4 が目安</li>
    </ul>

    <h4>余白（スペース）の使い方</h4>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">NG</div>
        <div class="diagram-compare__example">画面の端ギリギリ・3行詰め込み</div>
        <div class="diagram-compare__body">読みにくい。スマホで切れて見えない。</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">OK</div>
        <div class="diagram-compare__example">中央〜やや上・1〜2行・余白あり</div>
        <div class="diagram-compare__body">パッと読める。1秒で理解できる。</div>
      </div>
    </div>

    <h3>④ サウンドエフェクト（SE）</h3>
    <p>下部「オーディオ」→「効果音」→ 場面に合ったSEを追加。<strong>テキストが出るタイミング</strong> に合わせるとテンポよく見える。</p>
    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        音量は控えめに（声の邪魔にならない程度）。<br>
        <strong>1動画に1〜3個まで</strong>。使いすぎるとうるさい。
      </div>
    </div>

    <h4>自動字幕（テロップ自動生成）</h4>
    <p>「テキスト」→「自動字幕」→ 音声を認識してテロップを自動生成。<strong>誤字が出やすいので必ず確認・修正</strong>。フォントはアドゴシックに変更。</p>

    <h3>⑤ 書き出し・投稿</h3>
    <p>右上の「↑」→ <strong>解像度 1080p ／ フレームレート 30fps</strong>。画質と容量のバランスが一番いい。書き出し後は必ずプレビュー確認。</p>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        覚えるのは <strong>5ステップだけ</strong>。素材→カット→テキスト→SE→書き出し。フォントはアドゴシック、縁取り、9:16、30〜40秒、1080p。これでバズ動画と同じ「土台」が作れる。
      </div>
    </div>
  `,

  'p2-buzz': `
    <p>バズった動画を <strong>「見つけたら必ず記録する」</strong> 習慣をつくる。これが、自分のジャンルで何が受けるかのパターンを体に染み込ませる最短ルート。</p>

    <div class="pull-quote">バズは才能ではなく、観察と記録の量で決まる。</div>

    <h3>なぜ記録するのか</h3>
    <p>1本2本見ただけでは <strong>パターンは見えない</strong>。10本、30本と記録していくと、自分のジャンルで共通する要素（フックの型・尺・SE・テロップ位置・タイトル構造）が浮かび上がる。再現性のあるバズが見えてくる。</p>

    <h3>記録すべき項目</h3>
    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">URL</div>
        <div class="framework__name">動画のリンク</div>
        <p class="framework__desc">後から見返せるよう必ず保存。CapCutにオーバーレイする時にも使う。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">名</div>
        <div class="framework__name">動画の見出し</div>
        <p class="framework__desc">15文字以内のタイトル。バズ動画の「掴み」を集める。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">再</div>
        <div class="framework__name">再生数・保存数</div>
        <p class="framework__desc">数字で「異常値」を判別する。同アカウントの平均と比較。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">析</div>
        <div class="framework__name">分析メモ</div>
        <p class="framework__desc">なぜバズったかの仮説を必ず1〜2行書く。アプリ内でAI解析も使える。</p>
      </div>
    </div>

    <h3>分析メモのコツ</h3>
    <p>「バズった」だけでは記録の意味がない。<strong>「なぜバズったか」を仮説で書く</strong>。仮説が外れててもいい。次に検証する材料になる。</p>
    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        <div class="callout__title">分析の切り口</div>
        ・冒頭3秒に何が映っていた？<br>
        ・誰がコメントしている？どんな共感？<br>
        ・タイトルのどのワードが効いた？<br>
        ・テロップ位置・色・フォントは？
      </div>
    </div>

    <h3>頻度</h3>
    <p>毎日1本でいい。<strong>1週間に5〜7本</strong>、3ヶ月で50本以上のバズ動画を集めると、自分のジャンルの「正解パターン」が体感で分かる。</p>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        バズは観察と記録の量。<strong>「URL・タイトル・再生数・なぜバズったか」</strong> の4点だけ毎日メモる。50本溜まる頃には自分の型ができている。
      </div>
    </div>
  `,

  'p2-templates': `
    <p>型を身につければ、もう <strong>毎回ゼロから考えなくていい</strong>。最初は型通りに作る。アレンジは10本投稿してから。型を使い倒して「自分の型」に育てる。</p>

    <div class="pull-quote">型がない発信は、毎回ゼロから坂を登る。<br>型を持つ発信は、レールに乗って加速する。</div>

    <h3>動画構成テンプレ3種</h3>

    <h4>テンプレ① Problem → Solution（悩み → 解決型）</h4>
    <div class="diagram-flow">
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">1</span><span class="diagram-flow__step-label">フック</span>0-3秒</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">2</span><span class="diagram-flow__step-label">共感</span>3-10秒</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">3</span><span class="diagram-flow__step-label">解決</span>10-40秒</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">4</span><span class="diagram-flow__step-label">CTA</span>最後5秒</div>
    </div>
    <ul>
      <li><strong>フック</strong>：「〇〇で悩んでる人、これ知らないと損」</li>
      <li><strong>共感</strong>：「私も◯◯で悩んでいた」「こんな失敗した」</li>
      <li><strong>解決策</strong>：3つのポイントなど具体策を伝える</li>
      <li><strong>CTA</strong>：「保存して後で見返してね」「続きはフォロー」</li>
    </ul>
    <p style="font-size: 13px; color: var(--c-mid-1)"><em>例：</em> 「毎月赤字で悩んでいた私が、3ヶ月で月3万円貯められるようになった方法を教えます。まず最初にやったのが…」</p>

    <h4>テンプレ② Before → After（変化型）</h4>
    <div class="diagram-flow">
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">1</span><span class="diagram-flow__step-label">結果</span>After先見せ</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">2</span><span class="diagram-flow__step-label">Before</span>過去の状態</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">3</span><span class="diagram-flow__step-label">きっかけ</span>変化の理由</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">4</span><span class="diagram-flow__step-label">CTA</span>続き・購入</div>
    </div>
    <p style="font-size: 13px; color: var(--c-mid-1)"><em>例：</em> 「半年で-8kg。正直こんなに変われると思ってなかった。3年間ダイエットに失敗し続けた私がやった、たった2つのことを話します」</p>

    <h4>テンプレ③ List / Tips（まとめ型）</h4>
    <div class="diagram-flow">
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">1</span><span class="diagram-flow__step-label">フック</span>〇〇選</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">2</span><span class="diagram-flow__step-label">本体</span>3-5個</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">3</span><span class="diagram-flow__step-label">CTA</span>保存促進</div>
    </div>
    <ul>
      <li><strong>フック</strong>：「〇〇な人が絶対やっていること3選」</li>
      <li><strong>リスト本体</strong>：3〜5個。1項目10秒以内でテンポよく</li>
      <li><strong>CTA</strong>：「保存して全部試してみて」</li>
    </ul>
    <p style="font-size: 13px; color: var(--c-mid-1)"><em>例：</em> 「月5万稼ぐ副業インスタ、伸びてる人がやっていること3選。1つ目は…2つ目は…3つ目は…これ全部やったら伸びます、保存して」</p>

    <h3>キャプション（投稿文）テンプレ</h3>
    <div class="callout callout--point">
      <div class="callout__icon">📝</div>
      <div class="callout__body">
        <div class="callout__title">基本構成</div>
        <p style="margin-top:6px"><strong>1行目</strong>：フック（動画の要約を1行で）</p>
        <p><strong>2〜3行</strong>：本文（補足・具体例）</p>
        <p><strong>最後</strong>：CTA（保存・DM・フォロー）</p>
        <p><strong>タグ</strong>：5〜10個（ニッチ × 広め混合）</p>
      </div>
    </div>

    <h3>型を選ぶ目安</h3>
    <div class="diagram-compare">
      <div class="diagram-compare__col">
        <div class="diagram-compare__head">使い分け</div>
        <div class="diagram-compare__example">テンプレ①</div>
        <div class="diagram-compare__body">ノウハウ系・チュートリアル系。教育コンテンツに最適。</div>
      </div>
      <div class="diagram-compare__col">
        <div class="diagram-compare__head">使い分け</div>
        <div class="diagram-compare__example">テンプレ②</div>
        <div class="diagram-compare__body">変化が見せられる時。ダイエット・収入・スキル系。</div>
      </div>
      <div class="diagram-compare__col">
        <div class="diagram-compare__head">使い分け</div>
        <div class="diagram-compare__example">テンプレ③</div>
        <div class="diagram-compare__body">保存されやすい。まとめ・ライフハック系で強い。</div>
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        最初の10本は <strong>型を守って書く</strong>。3つのテンプレを使い分け、キャプションも基本構成を守る。型に慣れたら、後から自分のアレンジを足す。これがバズの再現性を作る土台。
      </div>
    </div>
  `,

  'p2-pre': `
    <p>投稿前に <strong>必ずこのチェックリストを通す</strong>。面倒でも毎回やる。1つ抜けるだけで伸びが変わる。投稿は <em>「作る → 確認 → 投稿 → 直後30分」</em> の4段階。</p>

    <h3>① 動画の最終確認（3点）</h3>

    <div class="callout callout--tip">
      <div class="callout__icon">1</div>
      <div class="callout__body">
        <div class="callout__title">冒頭1秒で止まるか</div>
        動画を再生して、<strong>1秒以内に「見たい」と思えるか</strong>。冒頭が弱いと即スクロールされる。インパクトのある言葉・映像・テロップが冒頭にあるか。
      </div>
    </div>

    <div class="callout callout--tip">
      <div class="callout__icon">2</div>
      <div class="callout__body">
        <div class="callout__title">SE音量</div>
        自分の声 = 100%、SE = 控えめ。<strong>イヤホンなしで聞いて声が聞こえる</strong>ことを確認。
      </div>
    </div>

    <div class="callout callout--tip">
      <div class="callout__icon">3</div>
      <div class="callout__body">
        <div class="callout__title">テロップ・文字</div>
        誤字脱字なし／画面の端で切れていない／フォント = アドゴシック／縁取り or シャドウあり／1画面1〜2行まで。
      </div>
    </div>

    <h3>② トレンド音源</h3>
    <p>リール一覧で <strong>音源名の右に「↑」マーク</strong> がついているものがトレンド中。参考動画と同じ音源を使うのが最も効果的。</p>
    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        投稿画面で「音楽を追加」→ サビなど使いたい部分を選択 → <strong>音量は最小（0〜5%）</strong>。音源を設定するだけで発見されやすくなる。
      </div>
    </div>

    <h3>③ タグ（ハッシュタグ）</h3>
    <div class="stat-row">
      <div class="stat-row__cell">
        <div class="stat-row__num">3〜5<span class="stat-row__num-unit">個</span></div>
        <div class="stat-row__label">基本ルール</div>
      </div>
      <div class="stat-row__cell">
        <div class="stat-row__num">1万〜100万</div>
        <div class="stat-row__label">ミドルタグ</div>
      </div>
      <div class="stat-row__cell">
        <div class="stat-row__num">参考</div>
        <div class="stat-row__label">アカウントから流用</div>
      </div>
    </div>
    <p>多すぎるとスパム判定されることがある。ジャンルに関係するものを選ぶ。</p>
    <ul>
      <li>投稿数が多すぎるタグ（#インスタグラム など）は避ける</li>
      <li>投稿数 <strong>1万〜100万のミドルタグ</strong> が狙い目</li>
      <li>参考アカウントのタグをそのまま流用してOK</li>
      <li>キャプション欄に直接「#〇〇」と入力。文章の後に改行して入れると見た目がきれい</li>
      <li>毎回同じタグを使い続けず、投稿内容に合わせて少しずつ変える</li>
    </ul>

    <h3>④ キャプション</h3>
    <p>1行目に動画の <strong>要約を1行</strong>。最後に <strong>CTA</strong> を入れる。3〜5行が理想。</p>
    <ul>
      <li>1行目：「〇〇する方法3選」など動画の要約</li>
      <li>最後：「保存してね」「DMで聞いてね」などCTAを入れる</li>
      <li>長くなりすぎず3〜5行が理想</li>
    </ul>

    <h3>⑤ 投稿時間</h3>
    <p>ターゲットがインスタを開く時間に合わせる：</p>
    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">主</div>
        <div class="framework__name">主婦・ママ</div>
        <p class="framework__desc">21〜23時 が最高エンゲージ</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">OL</div>
        <div class="framework__name">OL・社会人</div>
        <p class="framework__desc">12時・19〜22時</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">学</div>
        <div class="framework__name">学生</div>
        <p class="framework__desc">17〜19時・22〜24時</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">★</div>
        <div class="framework__name">最強指標</div>
        <p class="framework__desc">プロアカウントのインサイト「フォロワーが最もアクティブな時間」</p>
      </div>
    </div>

    <h3>⑥ 投稿の手順（7ステップ）</h3>
    <p>順番通りに進める。最後の <em>「Facebook にも投稿」OFF</em> を忘れないこと。</p>
    <div class="diagram-funnel">
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">1</span>カメラロールから動画を選択</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">2</span>トリミング確認</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">3</span>カバー画像を設定</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">4</span>キャプション入力</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">5</span>タグ入力</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">6</span>音源設定（音量0〜5%）</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">7</span>シェア（Facebook OFF）</div>
    </div>
    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        カバー画像はサムネになる。<strong>一番目立つ場面</strong>を選ぶ。「Facebookにも投稿」は必ず OFF。
      </div>
    </div>

    <h3>⑦ 投稿直後の30分（一番大事）</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        <div class="callout__title">初速を上げる即アクション</div>
        ・投稿直後にストーリーズで「新しい投稿しました」とシェア<br>
        ・コメントが来たら <strong>30分以内に返信</strong><br>
        ・30分後・1時間後に再生数・保存数を記録<br>
        ・「Facebookにも投稿」は OFF
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        投稿の質は <strong>「動画・音源・タグ・キャプション・時間・初速30分」</strong> の6点で決まる。毎回チェックリストを通せば、自然と伸びる確率が上がる。
      </div>
    </div>
  `,

  // ============================================================
  // Phase 3 — 稼ぐ
  // ============================================================

  'p3-feed-vs-story': `
    <p>稼ぐフェーズに入る前に、<strong>フィードとストーリーの役割</strong> を正しく分けて理解する。ここを間違えるとどれだけフォロワーが増えても1円にもならない。</p>

    <div class="pull-quote">フィードでファンを作り、<br>ストーリーで売る。</div>

    <h3>2つの場所、2つの役割</h3>

    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">フィード / リール</div>
        <div class="diagram-compare__example">集客・ファン化</div>
        <div class="diagram-compare__body">知らない人に届いてフォローしてもらう。ノウハウ・共感・変化の過程で価値提供。<strong>ここで売らない</strong>。</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">ストーリー</div>
        <div class="diagram-compare__example">収益化・販売</div>
        <div class="diagram-compare__body">既存フォロワーへの訴求の場所。信頼関係のある人にだけ商品を紹介する。<strong>ここで稼ぐ</strong>。</div>
      </div>
    </div>

    <h3>よくある最大の間違い</h3>
    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        <div class="callout__title">フィードで売ろうとする</div>
        フィードは <em>「知らない人が初めて見る場所」</em>。そこで売ろうとすると、まだ信頼ゼロの状態での営業になり、フォロワーが離れる。
      </div>
    </div>

    <h3>正しい順番</h3>
    <div class="diagram-flow">
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">1</span><span class="diagram-flow__step-label">フィード</span>価値提供</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">2</span><span class="diagram-flow__step-label">フォロー</span>ファン化</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">3</span><span class="diagram-flow__step-label">ストーリー</span>教育</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">4</span><span class="diagram-flow__step-label">訴求</span>販売</div>
    </div>

    <h3>各場所でやること</h3>
    <ul>
      <li><strong>フィード/リール</strong>：ノウハウ・共感・変化の過程を発信してファンを増やす。<em>売り込み厳禁</em>。</li>
      <li><strong>ストーリー</strong>：① 教育（悩みを認識させる）→ ② 訴求（解決策として商品を紹介）の2段階。</li>
    </ul>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        フィードは集客装置、ストーリーは販売装置。<strong>この役割分担を守るだけ</strong>で、収益化の成功率が劇的に変わる。次章では、具体的なマネタイズ手段の全体像を整理する。
      </div>
    </div>
  `,

  'p3-monetize': `
    <p>収益化はフォロワー数ではなく <strong>「単価 × 仕組み」</strong> で決まる。本章では収益化の5つの手段を、難易度・単価・始めやすさの3軸で整理する。</p>

    <h3>収益化の5手段</h3>
    <p>SNS収益化はこの5つに集約される。最初は1つから、慣れたら掛け合わせる。</p>

    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">A</div>
        <div class="framework__name">アフィリエイト</div>
        <p class="framework__desc">紹介料型。在庫・対応不要。<strong>初心者の入口</strong>。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">D</div>
        <div class="framework__name">デジタル販売</div>
        <p class="framework__desc">PDF・テンプレ。一度作って繰り返し売れる。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">P</div>
        <div class="framework__name">PR・案件</div>
        <p class="framework__desc">企業案件。エンゲ率が単価に直結。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">S</div>
        <div class="framework__name">自社商品</div>
        <p class="framework__desc">コンサル・講座。利益率が高い。</p>
      </div>
    </div>

    <h4>① アフィリエイト</h4>
    <p>商品を紹介 → リンク経由で購入されたら報酬。<strong>在庫・対応不要</strong>。コンテンツ量を増やせる人・特定ジャンルに詳しい人に向く。</p>
    <ul>
      <li>単価：数十円〜数万円</li>
      <li>ASP登録が必要（A8、もしも、楽天アフィなど）</li>
      <li>案件との相性が重要</li>
    </ul>

    <h4>② note・デジタルコンテンツ販売</h4>
    <p>PDF・テンプレ・ノウハウ記事を <strong>一度作って繰り返し販売</strong>。労働時間が収益に直結しない仕組み。</p>
    <ul>
      <li>単価：500〜50,000円（3,000円前後から始めやすい）</li>
      <li>タイトルと目次が命</li>
      <li>「こんな人に向いてる」を明確に</li>
    </ul>

    <h4>③ 企業案件・PR（タイアップ）</h4>
    <p>企業から依頼を受けて商品を紹介。<strong>フォロワー数より「エンゲージメント率」</strong> が重要。</p>
    <ul>
      <li>目安：1万フォロワーで1投稿 1〜5万円</li>
      <li>ステマ規制で「#PR」表記必須</li>
      <li>DM直営業 or マッチングサービス</li>
    </ul>

    <h4>④ 自社商品・サービス（高単価）</h4>
    <p>コンサル・スクール・オンライン講座。<strong>利益率が高く少人数で大収益</strong>。</p>
    <ul>
      <li>単価：月3〜30万円（1対1）／1〜10万円（グループ）</li>
      <li>順序：無料 or 低単価でテスト → 口コミ → 値上げ</li>
    </ul>

    <h4>⑤ 横軸展開（別媒体）</h4>
    <p>インスタで集客 → LINE 囲い込み → note 販売。<strong>SNSは集客装置</strong>、収益の仕組みは外に作る。アカウント凍結リスクの分散にもなる。</p>

    <h3>順序が大事</h3>
    <p>いきなり高単価から入らない。<strong>アフィ → デジタル販売 → 自社商品</strong> の順で進む。</p>
    <div class="diagram-funnel">
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">1</span>アフィで「売れる感覚」を掴む</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">2</span>noteで自分の言葉でパッケージ化</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">3</span>口コミが集まったら高単価へ</div>
      <div class="diagram-funnel__arrow"></div>
      <div class="diagram-funnel__step"><span class="diagram-funnel__num">4</span>横展開で柱を増やす</div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        収益化は <strong>5手段の組み合わせ</strong>。最初の1つはアフィ。慣れたら順番に広げていく。フォロワー数より「単価 × 仕組み」で稼ぐ意識を持つ。
      </div>
    </div>
  `,

  'p3-mind': `
    <p>「教育・販売が重要」はみんな知っている。でも <strong>「本当の意味でできている人」</strong> は少ない。本章では爆発的な成果を出す人が必ず押さえている3つの柱を整理する。</p>

    <div class="pull-quote">教育と販売を理解しているつもりで、<br>大半の人は何も理解していない。</div>

    <h3>3つの柱</h3>

    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">①</div>
        <div class="framework__name">ユーザー層の把握</div>
        <p class="framework__desc">誰に届けたいかを徹底的に書き出す。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">②</div>
        <div class="framework__name">理想ファン層の獲得</div>
        <p class="framework__desc">悩み→原因→解決策→未来 の訴求フレーム。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">③</div>
        <div class="framework__name">雰囲気作り</div>
        <p class="framework__desc">ファンは自然には増えない。自分で作る。</p>
      </div>
    </div>

    <h3>柱① ユーザー層の把握</h3>
    <p>「誰に届けたいか」を徹底的に書き出す。<strong>この作業をやり切った人が売れる</strong>。</p>

    <h4>ターゲット分析の4項目</h4>
    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">得たい未来</div>
        <div class="step-grid__body">お金に余裕を持ちたい／独立したい／副業で収入を増やしたい／時間の自由が欲しい。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">ユーザーの悩み</div>
        <div class="step-grid__body">成果が出ない／収益化できない／何から始めればいいかわからない。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">ユーザーの現状</div>
        <div class="step-grid__body">会社と家の往復／お金に余裕がない／変えたいけど動けていない。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">ターゲット外の層</div>
        <div class="step-grid__body">運用に興味ない／暮らし美容だけが好き／副業に興味ない。<strong>ステップを踏めば取り込める層</strong>として把握。</div>
      </div>
    </div>
    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        人はメリットがないと動かない。<strong>ユーザーのメリットを理解する</strong>ことが正しい訴求につながる。
      </div>
    </div>

    <h3>柱② 理想ファン層の獲得</h3>
    <p>訴求の基本フレーム。<strong>必ず覚える</strong>。</p>
    <div class="diagram-flow">
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">1</span><span class="diagram-flow__step-label">悩み</span>共感</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">2</span><span class="diagram-flow__step-label">原因</span>言語化</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">3</span><span class="diagram-flow__step-label">解決策</span>提示</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">4</span><span class="diagram-flow__step-label">理想</span>未来</div>
    </div>

    <h4>具体例・例え話が「行動」を生む</h4>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">NG</div>
        <div class="diagram-compare__example">抽象的</div>
        <div class="diagram-compare__body">「時間の使い方は大切」 — 100人中100人がわかっている。行動につながらない。</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">OK</div>
        <div class="diagram-compare__example">具体例</div>
        <div class="diagram-compare__body">「朝6時に起きて30分散歩したら、夜のだるさが消えた」 — 行動に落とし込める。</div>
      </div>
    </div>

    <h3>柱③ 雰囲気作り</h3>

    <h4>NG思考 vs OK思考</h4>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">NG思考</div>
        <div class="diagram-compare__example">受け身</div>
        <div class="diagram-compare__body">「フォロワーが自然にファンになる」「DMはいつか来る」「いいことを書けばOK」</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">OK思考</div>
        <div class="diagram-compare__example">能動的</div>
        <div class="diagram-compare__body">「まず目の前の1人を満足させる」「質問にはストーリーで返答」「フォロワーの横のつながりを見せる」</div>
      </div>
    </div>

    <div class="pull-quote">ファンは勝手に増えない。<br>自分でアクションを起こして作るもの。</div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        ファン化と販売を成功させる柱は <strong>「ユーザー層の理解」「悩み→未来の訴求フレーム」「能動的な雰囲気作り」</strong>。次章は具体的なストーリーズのネタ帳。
      </div>
    </div>
  `,

  'p3-ideas': `
    <p>ネタに困ったら <strong>ここを開く</strong>。自分のジャンルのネタはそのまま使ってOK。完璧を求めず、まず投稿するのが最優先。</p>

    <h3>ネタの4タイプを使い分ける</h3>

    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">教</div>
        <div class="framework__name">教育</div>
        <p class="framework__desc">役立つ知識・「なぜそうするか」まで。保存される。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">共</div>
        <div class="framework__name">共感</div>
        <p class="framework__desc">フォロワーの悩みを代弁。「わかる」を作る。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">訴</div>
        <div class="framework__name">訴求</div>
        <p class="framework__desc">体験談ベースの自然な誘導。「私はこれで変わった」。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">Q</div>
        <div class="framework__name">Q&amp;A</div>
        <p class="framework__desc">質問箱で悩み収集 + 返答で信頼構築。</p>
      </div>
    </div>

    <h3>ジャンル別ネタ集</h3>

    <h4>料理</h4>
    <ul>
      <li><strong>教育</strong>：「鶏むね肉をやわらかくする下処理、知ってますか？」</li>
      <li><strong>教育（理由付き）</strong>：「塩を先に入れる理由、ちゃんと知ってますか？」</li>
      <li><strong>共感</strong>：「毎日献立を考えるのが正直しんどい方、いませんか？」</li>
      <li><strong>訴求</strong>：「この方法を取り入れてから献立ストレスが半分になった話」</li>
      <li><strong>Q&amp;A</strong>：「料理でいちばん困ってることは？」</li>
    </ul>

    <h4>子育て</h4>
    <ul>
      <li><strong>教育</strong>：「自己肯定感が上がる声かけ3つ」「やる気を引き出す言葉」</li>
      <li><strong>失敗談ベース</strong>：「これ、子どもの自己肯定感を下げる言葉だったと気づいた」</li>
      <li><strong>共感</strong>：「子育てしながら自分を後回しにしてる方、いませんか？」</li>
      <li><strong>訴求</strong>：「これを取り入れてから育児が楽になった話」</li>
      <li><strong>Q&amp;A</strong>：「0〜3歳のママに届けたい話です」とターゲットを絞る</li>
    </ul>

    <h4>自己肯定感</h4>
    <ul>
      <li><strong>教育（やめたら楽）</strong>：「人と比べるのをやめた話」「完璧主義をやめてから変わったこと」</li>
      <li><strong>教育（1アクション）</strong>：「毎朝これをやってから気持ちが変わった」</li>
      <li><strong>共感</strong>：「自分のことが好きになれない時期、ありましたか？」</li>
      <li><strong>訴求</strong>：「3年前の私 → 今の私。きっかけはこれ」のビフォーアフター</li>
    </ul>

    <h4>垢抜け</h4>
    <ul>
      <li><strong>教育</strong>：「眉毛を変えるだけで印象が激変する理由」</li>
      <li><strong>NG理由付き</strong>：「このメイクが実は老けて見える理由」</li>
      <li><strong>共感</strong>：「おしゃれしたいけど何が似合うかわからない」</li>
      <li><strong>訴求</strong>：「これを使い始めてから印象が変わった」+ 理由</li>
    </ul>

    <h4>美容</h4>
    <ul>
      <li><strong>教育（正しい順番）</strong>：「この順番でやるだけで効果が変わる」</li>
      <li><strong>教育（絞り込み）</strong>：「スキンケアで本当に大事な3つだけ」</li>
      <li><strong>共感</strong>：「ニキビがあると外出が憂鬱になる気持ち、わかります」</li>
      <li><strong>訴求（正直レビュー）</strong>：「期待してたけどイマイチだった話」</li>
    </ul>

    <h4>動画編集</h4>
    <ul>
      <li><strong>教育</strong>：「バズる動画に必ず入っている要素」「再生数が伸びない原因1位」</li>
      <li><strong>NG編集</strong>：「初心者が必ずやるミス3つ」</li>
      <li><strong>共感</strong>：「動画作っても再生数が全然伸びない経験ありませんか？」</li>
      <li><strong>訴求</strong>：「このアプリで編集スピードが3倍になった」</li>
    </ul>

    <h3>どのジャンルにも使えるネタ</h3>
    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">今日あったこと・気づき</div>
        <div class="step-grid__body">日常の1コマ。人柄が伝わってファン化しやすい。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">フォロワーへの感謝・報告</div>
        <div class="step-grid__body">「◯人になりました、ありがとう」「よく来る質問に答えます」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">最近買ってよかったもの</div>
        <div class="step-grid__body">正直な感想。アフィリエイトにも自然に使える。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">「これ知ってる？」豆知識</div>
        <div class="step-grid__body">意外な事実。保存・シェアにつながる。</div>
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        ネタは <strong>「教育・共感・訴求・Q&amp;A」の4タイプ</strong> をローテーション。ジャンル別の型を真似してOK。完璧を求めず、まず投稿する習慣を優先。
      </div>
    </div>
  `,

  'p3-seven': `
    <p>ストーリー訴求の <strong>7ステップ完全テンプレ</strong>。順番通りに守れば誰でも売れる。教育が積み上がった状態でやるから売れる。1ステップ1〜3枚で、合計10〜20枚が理想。</p>

    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        <div class="callout__title">大前提：3〜7日前から「予告」を入れる</div>
        「近々大事な発表があります」を普段のストーリーに混ぜておくだけで、訴求当日の反応が <strong>劇的に変わる</strong>。
      </div>
    </div>

    <h3>7ステップ訴求テンプレ</h3>

    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">興味を惹く（お待たせしました感）</div>
        <div class="step-grid__body">1枚目は「売り込み」ではなく <strong>「待ちわびていたものが来た」</strong> 感覚を作る。いきなり紹介から始めると即離脱。「迷っていた」「ずっと準備していた」という裏話を入れると人間味が出る。</div>
        <div class="step-grid__example"><strong>OK文例</strong>：<br>「ずっと準備してきたものを、ようやく発表できます」<br>「先日予告した〇〇、今日がその日です。最後まで読んでほしい」<br>「DMで何十件も質問が来ていたアレ、ついに解禁します」<br>「正直ここまで迷ってたけど、やっぱり出すことにしました」<br><br><strong>NG文例</strong>：<br>「今日は◯◯をご紹介します！」← 売り込み感<br>「おすすめの商品があります」← 全員スキップ</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">解決策の提示（3枚以内にリンク）</div>
        <div class="step-grid__body">「もう欲しい人」を最初に救う。教育済みの層には <strong>3枚以内</strong> でリンクを見せる。後回しは離脱を生む。リンクは1回でなく <strong>③〜⑦の中でも2〜3回</strong> 自然な形で。</div>
        <div class="step-grid__example"><strong>OK文例</strong>：<br>「詳細はこちらから見てみてください▼（プレッシャーはないので気軽にどうぞ）」<br>「まず見るだけでもOKです。リンクはプロフィールから」<br>「購入が前提じゃなくていいです。気になる方だけどうぞ▼」<br><br><strong>NG文例</strong>：<br>「リンクは最後に貼ります！」← 欲しい人が離脱<br>「ぜひ購入してください！」← 押し売り感</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">問題提起（悩みの言語化）</div>
        <div class="step-grid__body">フォロワーが心の中で感じている悩みを <strong>言葉にして代わりに言う</strong>。「私のことだ」と思わせる。<em>「〜な方いませんか？」「〜ですよね」</em> という問いかけ形式が一番共感を引き出す。「言いすぎかな」と思うくらいリアルに描写するのが正解。</div>
        <div class="step-grid__example"><strong>料理ジャンル例</strong>：<br>「毎日の献立、正直もう考えたくないって思ったことありませんか？」<br>「疲れた日に限って、ご飯作らないといけない状況になりますよね」<br><br><strong>子育てジャンル例</strong>：<br>「子どものために頑張りすぎて、自分のことを後回しにしてませんか？」<br>「ちゃんとした声かけをしたいのに、イライラして怒ってしまう…」<br><br><strong>美容・垢抜け例</strong>：<br>「おしゃれしたいけど、自分に何が似合うのかわからなくて結局同じ服ばかり」<br>「メイクを頑張っても『変わった？』って言われたことが一度もない方、いませんか」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">危機感・緊急性</div>
        <div class="step-grid__body">「放っておくとどうなるか」を見せる。脅しでなく <strong>体験談として</strong>。「〇年後」「〇歳になってから」の時間軸を入れると現実感が増す。最後に必ず <em>「でも、まだ間に合います」「今気づけてよかった」</em> のフォローを入れる。</div>
        <div class="step-grid__example"><strong>料理ジャンル例</strong>：<br>「栄養の偏りを10年放置すると、体がどうなるか。実は私の母がそれで後悔しているんです」<br><br><strong>子育てジャンル例</strong>：<br>「3歳までの関わり方が、子どもの自己肯定感の土台を決めると言われています。今気づけてよかった」<br>「何気なく使っていた言葉が、子どもの自信を少しずつ削っていた。そう気づいたのは…」<br><br><strong>自己肯定感ジャンル例</strong>：<br>「自己肯定感が低いまま何年も過ごすと、チャンスが来ても動けなくなる。私がそうでした」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">未来の提示（理想の姿）</div>
        <div class="step-grid__body">④の直後に <strong>「でも、こうなれる」</strong> という希望を見せる。順番が大事。具体的な期間（〇日後・〇週間で）を入れると現実感が出る。<em>感情と一緒に</em> 語る。「あなたもなれる」と直接言わず自分の変化を語る形が押しつけにならない。</div>
        <div class="step-grid__example"><strong>料理ジャンル例</strong>：<br>「平日5日分の献立を日曜10分で決められるようになりました」<br>「料理が好きじゃなかった私が、今は楽しいと思えるようになったんです」<br><br><strong>子育てジャンル例</strong>：<br>「声かけを変えて3週間後、子どもが自分から『学校行く』と言った朝があって。涙が出ました」<br>「怒る回数が週20回から3回くらいに減った。親子関係がおだやかになって…」<br><br><strong>美容・垢抜け例</strong>：<br>「この1アイテムを変えてから、毎朝鏡を見るのが楽しみになりました」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">利用者の感想（最強の武器）</div>
        <div class="step-grid__body">自分の体験談より <strong>他人の感想が10倍刺さる</strong>。購入報告・感想DMをスクショで掲載。「社会的証明」が購買の後押しになる。</div>
        <div class="step-grid__example"><strong>やり方ステップ</strong>：<br>① 訴求ストーリーに「感想をDMで送ってください」と必ず入れる<br>② 届いたDMをスクショする（名前は隠してOK）<br>③ 「〇〇さんから感想が届きました」とストーリーに載せる<br>④ 感想が増えるたびに何度でも載せる<br><br><strong>感想がない場合</strong>：「先着◯名で無料モニター募集」→使ってもらう→感想をもらう。<br><br><strong>刺さる感想の特徴</strong>：<br>「〇日で変わった」「今まで何をやっても変わらなかったのに」など <em>具体的な変化</em> が書かれたもの。「良かったです」だけの感想より100倍説得力がある。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">価値観の共有（リンクで終わらない）</div>
        <div class="step-grid__body">最後を <strong>「想い・価値観」</strong> で締める。リンクで終わると売り込み印象。価値観で終わると次のファン化につながる。価値観を語った後に「気になる方はこちら▼」とリンクを入れるのはOK。訴求翌日は通常の教育ストーリーに戻す。<em>売り続けない</em>。</div>
        <div class="step-grid__example"><strong>OK文例</strong>：<br>「私がこれをシェアしたかった理由はただ一つ。昔の私みたいに悩んでいる人を、一人でも減らしたかったから」<br>「買ってもらえることより、この情報があなたの生活を少しでも楽にしてくれることを願っています」<br>「もし買わなくても、このストーリーが少し参考になったなら嬉しいです」<br><br><strong>NG文例</strong>：<br>「ぜひご購入ください！リンクはこちら▼」<br>「期間限定なのでお早めに！」← 焦らせ系は信頼を損なう</div>
      </div>
    </div>

    <h3>枚数の目安</h3>
    <div class="stat-row">
      <div class="stat-row__cell">
        <div class="stat-row__num">1〜3<span class="stat-row__num-unit">枚</span></div>
        <div class="stat-row__label">各ステップ</div>
      </div>
      <div class="stat-row__cell">
        <div class="stat-row__num">10〜20<span class="stat-row__num-unit">枚</span></div>
        <div class="stat-row__label">①〜⑦合計</div>
      </div>
      <div class="stat-row__cell">
        <div class="stat-row__num">2〜3<span class="stat-row__num-unit">回</span></div>
        <div class="stat-row__label">リンク掲載</div>
      </div>
    </div>

    <h3>訴求頻度</h3>
    <div class="diagram-compare">
      <div class="diagram-compare__col">
        <div class="diagram-compare__head">毎日訴求</div>
        <div class="diagram-compare__example">コンスタント型</div>
        <div class="diagram-compare__body">件数は毎日発生。一定ラインを推移。<em>内容を毎日変える必要あり</em>。</div>
      </div>
      <div class="diagram-compare__col">
        <div class="diagram-compare__head">週1訴求</div>
        <div class="diagram-compare__example">集中型</div>
        <div class="diagram-compare__body">その日に売上集中。<em>教育期間に力を入れる</em>。月間の差は意外と少ない。</div>
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        7ステップは <strong>順番が絶対</strong>。1ステップに詰め込まず1〜3枚で展開。3日前から予告を出し、最後は価値観で締める。これでクロージング率が安定する。
      </div>
    </div>
  `,

  'p3-writing': `
    <p>文章力は <strong>センスではなく型</strong>。型を知れば初心者でも「読まれる文章・刺さる文章」が書ける。本章では8つの型と「刺さるワード集」を学ぶ。</p>

    <div class="pull-quote">前置きが長い文章は、<br>1秒で飛ばされる。</div>

    <h3>① PREPの法則（話の組み立て方）</h3>
    <p>結論先行 → 理由 → 具体例 → 結論。すべての文章の基礎。</p>

    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">P — Point（結論）まず答えを言う</div>
        <div class="step-grid__body">「今日は◯◯について話します」は前置き。いきなり <strong>結論から入る</strong>。</div>
        <div class="step-grid__example">「毎日の料理が5分で終わるようになった話をします」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">R — Reason（理由）なぜそう言えるか</div>
        <div class="step-grid__body">「なぜなら〇〇だから」。<strong>体験談 or データ・研究結果</strong> で根拠を示す。「言われているから」だけでなく <em>「私自身が実感したから」</em> も強い根拠になる。</div>
        <div class="step-grid__example"><strong>料理ジャンル例</strong>：<br>「なぜなら、食材の切り方を1種類に統一するだけで、まな板を洗う回数も包丁を持ち替える時間もゼロになるから」<br><br><strong>子育てジャンル例</strong>：<br>「なぜなら、子どもは『結果』より『過程』を認めてもらった時に自信がつくと言われているから。私もそれを知るまでは結果しか褒めていませんでした」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">E — Example（具体例）実例で見せる</div>
        <div class="step-grid__body">「例えば〇〇の場合」。<strong>数字・固有名詞・体験</strong> でリアルにする。<em>「昨日」「先週」</em> など時間を特定するとリアル感が出る。家族の名前（イニシャルでもOK）を入れると臨場感が増す。</div>
        <div class="step-grid__example"><strong>料理ジャンル例</strong>：<br>「例えば昨日の夕食。鶏もも肉・ブロッコリー・にんじんを全部一口大に切って、フライパンで炒めるだけ。包丁を使ったのは1回。洗い物は1つ。20分で完成しました」<br><br><strong>子育てジャンル例</strong>：<br>「昨日、宿題をやりたくないと言った息子に『100点じゃなくていいよ、やったことがすごい』と言ったら、10分後に自分から机に向かっていました」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">P — Point（結論）もう一度まとめる</div>
        <div class="step-grid__body">最後にもう一度結論。<strong>CTA</strong> で次の行動につなげる。</div>
        <div class="step-grid__example">「切り方を統一するだけで料理ストレスが減ります。今日の夕食から試してみてください」</div>
      </div>
    </div>

    <h3>② 1ストーリー1テーマの法則</h3>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">NG</div>
        <div class="diagram-compare__example">詰め込み</div>
        <div class="diagram-compare__body">「時短レシピ3選と節約術と今週買ってよかった食材」 — 何も残らない。</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">OK</div>
        <div class="diagram-compare__example">絞り込み</div>
        <div class="diagram-compare__body">「今日は料理時間を半分にする方法だけ話します」 — 記憶に残る。</div>
      </div>
    </div>

    <h3>③ 冒頭の1文で全てが決まる</h3>
    <p>0.5秒で「見るか飛ばすか」が決まる。<strong>最初の1文が弱いと何も伝わらない</strong>。</p>

    <h4>読まれる冒頭の型</h4>
    <ul>
      <li>「◯◯な方いませんか？」（問いかけ→共感）</li>
      <li>「実は◯◯だと知ってましたか？」（驚き→知識欲）</li>
      <li>「これをやって後悔しました」（失敗談→次が気になる）</li>
      <li>「◯◯するだけで△△が変わった話です」（結論先行）</li>
      <li>「正直に言います。◯◯って◯◯なんです」（本音→信頼）</li>
      <li>「◯年間悩んでいたことが、ある日急に解決した話」（物語）</li>
    </ul>

    <h3>④ 文字・余白の使い方</h3>
    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        <div class="callout__title">読む気を失わせる文章</div>
        改行なし／1文が長すぎる／文字サイズ全部同じ／余白なし／絵文字多すぎ
      </div>
    </div>
    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        <div class="callout__title">読まれる文章</div>
        2行以上で必ず改行（1行15〜20文字）／強調ワードだけ大きく／上下左右に余白／1枚に3〜5行まで／背景は毎回変える
      </div>
    </div>

    <h3>⑤ 対話形式にする</h3>
    <p>「〜です。〜します」の講義調はNG。<strong>友人に話しかける文体</strong> にする。</p>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">講義調</div>
        <div class="diagram-compare__example">硬い</div>
        <div class="diagram-compare__body">「料理において時短を実現するには、食材の下処理を効率的に行うことが重要です」</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">対話形式</div>
        <div class="diagram-compare__example">柔らかい</div>
        <div class="diagram-compare__body">「毎日の料理、疲れてないですか？実は私もずっとしんどかった。でも、あることをやめてから急に楽になって…」</div>
      </div>
    </div>

    <h3>⑥ 臨場感・LIVE感を出す</h3>
    <p>過去の体験を「解説」するのではなく、<strong>「今体験している」感覚</strong> で書く。</p>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">過去形解説</div>
        <div class="diagram-compare__example">距離感あり</div>
        <div class="diagram-compare__body">「先日、子どもが泣き止まなくて30分困りました」</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">現在進行形</div>
        <div class="diagram-compare__example">引き込み</div>
        <div class="diagram-compare__body">「もう30分泣き止まない。さすがに限界だと思った。でもこの一言を言ったら、ピタッと泣き止んだ」</div>
      </div>
    </div>
    <p>感情ワードを入れる：<em>「ついに」「ようやく」「まさか」「正直」「涙が出た」「震えた」</em></p>

    <h3>⑦ 感想・質問をコンテンツにする</h3>
    <p>「◯◯さんからこんな質問が来ました」「こんな感想をいただきました」をストーリーにする。<strong>ネタ切れがなくなり、双方向のやりとり</strong>が生まれる。</p>

    <h3>⑧ 絶対に使える「刺さるワード集」</h3>

    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">共</div>
        <div class="framework__name">共感を生む</div>
        <p class="framework__desc">「〜な方いませんか？」「私もそうでした」「言葉にできなかった気持ちを代わりに言います」</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">続</div>
        <div class="framework__name">続きを読ませる</div>
        <p class="framework__desc">「実は〇〇なんです」「正直に言います」「まさかと思ったけど本当でした」</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">信</div>
        <div class="framework__name">信頼を生む</div>
        <p class="framework__desc">「私の体験談です」「◯ヶ月やり続けた結果」「失敗もしました」「押しつけはしません」</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">行</div>
        <div class="framework__name">行動を促す</div>
        <p class="framework__desc">「今日から試してみてください」「保存しておくと見返せます」「DMで教えてください」</p>
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        文章は <strong>「PREP + 1テーマ + 冒頭1文」</strong> の3要素で決まる。対話形式と臨場感を意識し、刺さるワードを意識的に混ぜる。これだけで読まれる確率が劇的に上がる。
      </div>
    </div>
  `,

  'p3-cautions': `
    <p>訴求テンプレを知っても <strong>運用ルールを間違えると稼げない</strong>。本章では訴求の角度・頻度・案件選びの注意点を整理する。</p>

    <h3>① 訴求の角度を変える</h3>
    <p>同じ角度の訴求は <strong>ユーザーが飽きる</strong>。1つの案件でも「刺さる理由」は人それぞれ。3〜5つの角度を用意する。</p>

    <h4>訴求角度の例（転職案件）</h4>
    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">給料アップ角度</div>
        <div class="step-grid__body">「月収◯万円UP」狙いの層に刺さる。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">人間関係リセット角度</div>
        <div class="step-grid__body">「職場の人間関係に疲れた」層に刺さる。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">キャリアアップ角度</div>
        <div class="step-grid__body">「スキルを活かせる環境」を求める層に刺さる。</div>
      </div>
    </div>

    <h3>② 訴求頻度の正解</h3>
    <p>毎日 vs 週1 — どちらでも月間の件数は大差ない。<strong>自分の運用スタイルに合う方を選ぶ</strong>。</p>
    <div class="diagram-compare">
      <div class="diagram-compare__col">
        <div class="diagram-compare__head">毎日訴求</div>
        <div class="diagram-compare__example">コンスタント</div>
        <div class="diagram-compare__body">毎日少しずつ件数発生。<strong>内容を毎日変える</strong>必要あり。慣れた人向け。</div>
      </div>
      <div class="diagram-compare__col">
        <div class="diagram-compare__head">週1訴求</div>
        <div class="diagram-compare__example">集中型</div>
        <div class="diagram-compare__body">その日に売上集中。<strong>5日間の教育に集中</strong>。初心者向き。</div>
      </div>
    </div>

    <h4>リンクを貼るタイミング</h4>
    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        「何枚に1回」ではなく <strong>「購買欲が高まった瞬間」</strong> にリンクを入れる。タイミングが命。
      </div>
    </div>

    <h3>③ 複数案件を並行するタイミング</h3>
    <p><strong>まずは1案件を最低1ヶ月やり込む</strong>。目標売上を達成してから2案件目へ。</p>
    <div class="callout callout--warn">
      <div class="callout__icon">!</div>
      <div class="callout__body">
        複数案件を最初からやると <em>「本当におすすめなの？」「お金目的では？」</em> と信頼を失う。1つに集中して結果を出してから広げる。
      </div>
    </div>

    <h3>④ アフィリエイトリンクの注意点</h3>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">NG（よくあるミス）</div>
        <div class="diagram-compare__example">クリック→コピー</div>
        <div class="diagram-compare__body">ASPリンクを開いてから、開いた先のURLをコピー → <strong>普通のHPリンクになり成果に反映されない</strong>。</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">OK</div>
        <div class="diagram-compare__example">そのままコピー</div>
        <div class="diagram-compare__body">ASPで発行されたリンクのURLを <strong>開かずそのままコピー</strong> して貼る。</div>
      </div>
    </div>

    <h3>⑤ 案件選びの鉄則</h3>
    <div class="pull-quote">短期100万円より、<br>月30万円 × 12ヶ月。</div>

    <p>「自分が本当におすすめできるもの」だけを扱う。<strong>微妙なものを売ると</strong>「◯◯さんのおすすめは微妙」という評価が定着して、長期的に稼げなくなる。</p>

    <h4>選び方チェックリスト</h4>
    <ul>
      <li>自分が実際に使って良かったか？</li>
      <li>フォロワー像の悩みを解決できるか？</li>
      <li>マネタイズ導線が複数あるか（アフィ + 自社展開可能か）？</li>
      <li>1回売って終わりではなく、リピート or 紹介につながるか？</li>
    </ul>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        訴求は <strong>角度を3〜5つ用意</strong>し、頻度は週1か毎日で自分のスタイルに合わせる。1案件1ヶ月集中、リンクは開かずコピー、案件は本当におすすめできるものだけ。<em>Phase 3 完了。次は規模を広げる Phase 4。</em>
      </div>
    </div>
  `,

  // ============================================================
  // Phase 4 — 拡張する
  // ============================================================

  'p4-kpi': `
    <p>収益を伸ばすには <strong>勘ではなく数字で判断する</strong>。本章では、月100万円〜稼ぐ人が必ず見ている7つの指標と、KPIの目安を整理する。</p>

    <div class="pull-quote">数字を見ない努力は、暗闇でスイングするバット。<br>ヒットしたかどうかも分からない。</div>

    <h3>収益化7大ポイント</h3>

    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">限定性・緊急性のある案件を選ぶ</div>
        <div class="step-grid__body">「残り3日」「残り◯個」と訴求できる案件は CV が伸びやすい。<strong>最初の案件はこれを最優先</strong>。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">単価交渉は実績を作ってから</div>
        <div class="step-grid__body">ASPに同ジャンル月間平均件数を聞く → それを超える実績を作る → <strong>特別単価（特単）</strong>を交渉。実績ゼロの初手交渉はほぼ通らない。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">フィード投稿と掛け合わせる</div>
        <div class="step-grid__body">フィード → ハイライト → ストーリー → リンク購入。普段ストーリーを見ない層にも届ける。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">ストーリー閲覧率を測る</div>
        <div class="step-grid__body">訴求時はリンクを貼るため閲覧率が <strong>2/3〜1/2 に落ちる</strong>のが普通。基準値を知っておく。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">CV率を計算する</div>
        <div class="step-grid__body">CV率 = 成果件数 ÷ クリック数 × 100。<em>クリックした人が買ったか</em>が本質。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">売上が下がった原因を診断</div>
        <div class="step-grid__body">CV率が下がる → 訴求の質。クリック数が減る → 新規率の低下（最頻）。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">目標は段階的に上げる</div>
        <div class="step-grid__body">1日3万円 → 10万円 → 30万円。<strong>小さな達成を積み重ねる</strong>。いきなり大目標を追わない。</div>
      </div>
    </div>

    <h3>ストーリー閲覧率の目安</h3>
    <p>訴求時の閲覧率は通常時より下がる。基準を知って一喜一憂しない。</p>
    <div class="kpi-grid">
      <div class="kpi">
        <div class="kpi__label">優秀</div>
        <div class="kpi__value">30<span class="kpi__value-unit">%以上</span></div>
        <div class="kpi__hint">この調子で継続</div>
      </div>
      <div class="kpi">
        <div class="kpi__label">平均</div>
        <div class="kpi__value">20〜30<span class="kpi__value-unit">%</span></div>
        <div class="kpi__hint">質を維持</div>
      </div>
      <div class="kpi">
        <div class="kpi__label">やや低</div>
        <div class="kpi__value">15〜20<span class="kpi__value-unit">%</span></div>
        <div class="kpi__hint">発信を見直し</div>
      </div>
      <div class="kpi">
        <div class="kpi__label">要改善</div>
        <div class="kpi__value">15<span class="kpi__value-unit">%未満</span></div>
        <div class="kpi__hint">テーマ・角度を変える</div>
      </div>
    </div>

    <h3>CV率の目安</h3>
    <div class="kpi-grid">
      <div class="kpi">
        <div class="kpi__label">優秀</div>
        <div class="kpi__value">20<span class="kpi__value-unit">%超</span></div>
        <div class="kpi__hint">訴求が完璧</div>
      </div>
      <div class="kpi">
        <div class="kpi__label">良</div>
        <div class="kpi__value">15<span class="kpi__value-unit">%</span></div>
        <div class="kpi__hint">維持</div>
      </div>
      <div class="kpi">
        <div class="kpi__label">普通</div>
        <div class="kpi__value">10<span class="kpi__value-unit">%</span></div>
        <div class="kpi__hint">改善余地</div>
      </div>
      <div class="kpi">
        <div class="kpi__label">要改善</div>
        <div class="kpi__value">10<span class="kpi__value-unit">%未満</span></div>
        <div class="kpi__hint">訴求を見直す</div>
      </div>
    </div>

    <h3>売上低下の診断フロー</h3>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">原因 ①</div>
        <div class="diagram-compare__example">訴求が悪い</div>
        <div class="diagram-compare__body">症状：CV率が下がっている。<br>対策：内容・角度を見直す。</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">原因 ②（最多）</div>
        <div class="diagram-compare__example">新規率の低下</div>
        <div class="diagram-compare__body">症状：CV率は同じだがクリックが減少。<br>対策：投稿に力を入れ新規獲得。</div>
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        伸びる人は <strong>閲覧率・CV率を毎週見ている</strong>。基準値を知り、原因を切り分け、訴求 or 新規獲得のどちらに手を入れるかを判断する。次章では、KPIを意識したストーリー設計の組み方を学ぶ。
      </div>
    </div>
  `,

  'p4-story-design': `
    <p>稼ぐフェーズに入ったら、ストーリーを <strong>1日単位ではなく1週間単位</strong> で設計する。共感・教育・訴求・CTA の流れを意識的に組むことで、CV率が安定する。</p>

    <h3>1週間ストーリー設計テンプレ</h3>
    <p>主婦・OL向けの場合の一例。<em>月〜水で価値提供と信頼構築、木金で訴求、土日でリラックス</em>。</p>

    <div class="week-grid">
      <div class="week-grid__day week-grid__day--story">
        <div class="week-grid__day-name">MON</div>
        <div class="week-grid__day-task">共感ネタ</div>
      </div>
      <div class="week-grid__day week-grid__day--story">
        <div class="week-grid__day-name">TUE</div>
        <div class="week-grid__day-task">教育コンテンツ</div>
      </div>
      <div class="week-grid__day week-grid__day--story">
        <div class="week-grid__day-name">WED</div>
        <div class="week-grid__day-task">権威・実績</div>
      </div>
      <div class="week-grid__day week-grid__day--feed">
        <div class="week-grid__day-name">THU</div>
        <div class="week-grid__day-task">訴求 前振り</div>
      </div>
      <div class="week-grid__day week-grid__day--feed">
        <div class="week-grid__day-name">FRI</div>
        <div class="week-grid__day-task">訴求 本番</div>
      </div>
      <div class="week-grid__day week-grid__day--off">
        <div class="week-grid__day-name">SAT</div>
        <div class="week-grid__day-task">日常・余白</div>
      </div>
      <div class="week-grid__day week-grid__day--off">
        <div class="week-grid__day-name">SUN</div>
        <div class="week-grid__day-task">振り返り共有</div>
      </div>
    </div>

    <h3>ストーリーの5ステップ構造</h3>
    <p>1回の訴求もこの構造で組む。<strong>いきなり売らない</strong>。視聴者の感情を順番に動かす。</p>

    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">共感</div>
        <div class="step-grid__body">「私もこれで悩んでた」「あなたと同じ立場だった」<br>視聴者と同じ位置に降りる。</div>
        <div class="step-grid__example">「毎月の家計、赤字で焦ってた頃の話してもいい？」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">権威・実績</div>
        <div class="step-grid__body">「私はこの方法で◯◯になった」<br>聞く価値があると示す。</div>
        <div class="step-grid__example">「3ヶ月で月3万円貯まるようになった、その方法を全部話す」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">教育</div>
        <div class="step-grid__body">具体ノウハウを <strong>無料で出し惜しみせず</strong> 教える。<br>ここで信頼が決まる。</div>
        <div class="step-grid__example">「まずは固定費の見直し。具体的にはこの3つ…」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">欲求喚起</div>
        <div class="step-grid__body">「でも自分で実践するの難しいよね」<br>商品が解決策だと自然に橋渡しする。</div>
        <div class="step-grid__example">「私もここで挫折しかけた。だから一気に変わる仕組みを使ったんだ」</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">CTA</div>
        <div class="step-grid__body">具体的な行動を1つだけ示す。<strong>選択肢を増やさない</strong>。</div>
        <div class="step-grid__example">「DMで『家計』と送ってくれたら、私が使ってるシート無料で渡すね」</div>
      </div>
    </div>

    <h3>訴求頻度と売上の関係</h3>
    <p>毎日訴求すると視聴者は離脱する。<strong>週1〜2回が黄金比</strong>。</p>
    <div class="diagram-compare">
      <div class="diagram-compare__col diagram-compare__col--bad">
        <div class="diagram-compare__head">NG</div>
        <div class="diagram-compare__example">毎日訴求</div>
        <div class="diagram-compare__body">「売り込み臭がきつい」と離脱。新規率も下がる。</div>
      </div>
      <div class="diagram-compare__col diagram-compare__col--good">
        <div class="diagram-compare__head">OK</div>
        <div class="diagram-compare__example">週1〜2回 × 5日価値提供</div>
        <div class="diagram-compare__body">信頼を貯めてから渡す。CV率が安定する。</div>
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        ストーリーは <strong>1週間単位で設計</strong>。共感→権威→教育→欲求→CTA の順で組み、訴求は週1〜2回。これで月100万円が再現できる。次章は、複数のマネタイズ手段の組み合わせ方。
      </div>
    </div>
  `,

  'p4-mix': `
    <p>収益の柱は <strong>1本だと脆い</strong>。複数の手段を組み合わせて、リスク分散と単価アップを両立する。本章では5つのマネタイズ手段を、難易度と利益率で整理する。</p>

    <h3>マネタイズ手段の全体像</h3>

    <div class="tier-grid">
      <div class="tier">
        <div class="tier__name">アフィリエイト</div>
        <div class="tier__price">低<span class="tier__price-unit">難易度</span></div>
        <p class="tier__lede">紹介料型。在庫・対応不要。最初に始めるのに最適。</p>
        <ul class="tier__features">
          <li>単価：数十円〜数万円</li>
          <li>初動が早い</li>
          <li>ASP登録が必要</li>
          <li>商品との相性が重要</li>
        </ul>
      </div>
      <div class="tier tier--recommended">
        <div class="tier__name">自社デジタル商品</div>
        <div class="tier__price">中<span class="tier__price-unit">難易度</span></div>
        <p class="tier__lede">PDF・テンプレ・動画教材。労働時間が収益に直結しない。</p>
        <ul class="tier__features">
          <li>単価：500〜5万円</li>
          <li>利益率ほぼ100%</li>
          <li>note・BASEで販売可</li>
          <li>口コミで雪だるま式</li>
        </ul>
      </div>
      <div class="tier">
        <div class="tier__name">高単価コンサル</div>
        <div class="tier__price">高<span class="tier__price-unit">難易度</span></div>
        <p class="tier__lede">1対1・グループ講座。少人数で大きな収益。</p>
        <ul class="tier__features">
          <li>単価：3〜30万円/月</li>
          <li>関係性が深まりやすい</li>
          <li>サポート力が必要</li>
          <li>口コミが鍵</li>
        </ul>
      </div>
    </div>

    <h3>5つのマネタイズ手段</h3>

    <h4>① アフィリエイト（紹介料型）</h4>
    <p>商品紹介→リンク経由で購入→報酬。<strong>在庫なし・対応なしの低リスク</strong>。最初の収益体験を作るのに最適。</p>
    <ul>
      <li>単価：数十円〜数万円（商品次第）</li>
      <li>A8・もしも・楽天アフィなどASP登録</li>
      <li>同ジャンルの強いASP案件を狙う</li>
    </ul>

    <h4>② note・デジタルコンテンツ販売</h4>
    <p>PDF・テンプレ・ノウハウ記事を <strong>一度作って繰り返し販売</strong>。労働時間ゼロで売れ続ける仕組み。</p>
    <ul>
      <li>単価：500〜50,000円（最初は3,000円前後が始めやすい）</li>
      <li>タイトル・目次が命。「こんな人向け」を明確に</li>
      <li>note・BASE・BOOTHが定番</li>
    </ul>

    <h4>③ 企業案件・PR（タイアップ）</h4>
    <p>企業から依頼を受けて商品を紹介。<strong>フォロワー数よりエンゲージメント率</strong> が重要。</p>
    <ul>
      <li>目安：1万フォロワーで1投稿 1〜5万円</li>
      <li>ステマ規制で「#PR」表記必須（2023年10月〜）</li>
      <li>DM直営業 or マッチングサービス活用</li>
      <li>自分のブランドと合う案件だけ受ける</li>
    </ul>

    <h4>④ 自社商品・サービス（高単価）</h4>
    <p>コンサル・スクール・オンライン講座など。<strong>利益率が高く少人数で大収益</strong>。</p>
    <ul>
      <li>単価：月3〜30万円（1対1コンサル）／1〜10万円（グループ）</li>
      <li>順序：無料 or 低単価でテスト → 口コミ → 値上げ</li>
      <li>サポート対応が好きな人向き</li>
    </ul>

    <h4>⑤ 横軸展開（別媒体への拡張）</h4>
    <p>インスタで集客 → LINE 囲い込み → note 販売、の連携。<strong>SNSは集客装置、収益は外で作る</strong>。</p>
    <div class="diagram-flow">
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">1</span><span class="diagram-flow__step-label">リール</span>集客</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">2</span><span class="diagram-flow__step-label">プロフ</span>リンク</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">3</span><span class="diagram-flow__step-label">LINE</span>登録</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">4</span><span class="diagram-flow__step-label">特典</span>信頼構築</div>
      <span class="diagram-flow__arrow">→</span>
      <div class="diagram-flow__step"><span class="diagram-flow__step-num">5</span><span class="diagram-flow__step-label">販売</span>商品提供</div>
    </div>

    <h3>順序が大事</h3>
    <p>いきなり自社商品から入らない。<strong>アフィ → デジタル商品 → 高単価</strong> の順で進む。</p>
    <ul>
      <li><strong>Step 1</strong>：アフィで「売れる感覚」を掴む</li>
      <li><strong>Step 2</strong>：noteで自分の言葉でパッケージ化</li>
      <li><strong>Step 3</strong>：口コミが集まったら高単価サービスへ</li>
    </ul>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        収益の柱は <strong>3本以上に分散</strong>。アフィ→noteと進めて、口コミが貯まったら高単価へ。SNSは集客装置として割り切り、収益の仕組みは外（LINEや自社LP）に作る。
      </div>
    </div>
  `,

  'p4-cross': `
    <p>インスタで作ったファン・コンテンツ・ノウハウを <strong>他媒体に横展開</strong> して収益の柱を増やす。アカウント凍結リスクも分散できる。月10万円を超えたら必ず手をつける。</p>

    <div class="pull-quote">プラットフォーム1本足の運用は、<br>そのプラットフォームの仕様変更で即終わる。</div>

    <h3>横軸展開の全体設計</h3>
    <p>インスタを中心に、用途別に4媒体を持つ。</p>

    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">L</div>
        <div class="framework__name">LINE公式</div>
        <p class="framework__desc">囲い込み・販売の本丸。SNS閉鎖リスクの保険。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">X</div>
        <div class="framework__name">X / スレッズ</div>
        <p class="framework__desc">テキスト訴求・思考発信。フォロワーの信頼構築。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">Y</div>
        <div class="framework__name">YouTube / TikTok</div>
        <p class="framework__desc">ロングテール集客。検索流入が長期間続く。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">N</div>
        <div class="framework__name">note / ブログ</div>
        <p class="framework__desc">SEO・コンテンツ販売。資産化しやすい。</p>
      </div>
    </div>

    <h3>X・スレッズの伸ばし方</h3>
    <p><strong>インスタのリール台本・キャプションをそのまま転用</strong>する。1本の動画から3〜5投稿作れる。同じ内容でも媒体が違えば届く人が違う。</p>
    <ul>
      <li>リール台本の「起承転結」をXスレッドに転用</li>
      <li>スレッズはインスタと連動 → 同ターゲットにリーチしやすい</li>
      <li>インスタ → プロフィールリンク → Xフォロー誘導でクロスフォロワーを増やす</li>
    </ul>
    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        <strong>X / スレッズの役割分担</strong><br>
        ・X：テキストで価値提供・リアルタイム思考 → 信頼構築<br>
        ・スレッズ：インスタ流入を受けて、より長めのノウハウを展開
      </div>
    </div>

    <h3>別アカウント運用</h3>
    <p>メインアカウントが伸びたら、<strong>第2・第3アカウントを別ジャンル</strong> で展開する。HARMの法則の別カテゴリを狙うと立ち上げが早い。</p>
    <ul>
      <li>メインと同じ型（<em>コンセプト × HARM × 変化</em>）で設計 → 立ち上げコストを下げる</li>
      <li>アカウント間でフォロー誘導してファンを <strong>循環</strong> させる</li>
      <li>1つのアカウントに集中する人より、複数アカウントを育てる人の方が長期的に強い</li>
    </ul>
    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        例：節約系の主軸 → 副業系・投資系・暮らし系の派生を作る。<strong>HARMの「M（Money）」内</strong> で隣接ジャンルへ展開すると親和性が高い。
      </div>
    </div>

    <h3>外注化のタイミング</h3>
    <p>売上が <strong>月5〜10万円</strong> を超えたら編集・台本を外注。自分はディレクションに集中する仕組みを作る。</p>
    <ul>
      <li>クラウドワークス・ランサーズで動画編集者を募集（相場：1本1,500〜5,000円）</li>
      <li><strong>バズった動画を参考として渡す</strong>とブレない</li>
      <li>初月は1本ずつ確認 → クオリティが安定したら量を増やす</li>
    </ul>

    <h3>AI活用で量産</h3>
    <p>ChatGPT・Claudeで <strong>コンテンツ制作を効率化</strong>。台本・キャプション・タグを自動生成して投稿量を増やす。</p>
    <ul>
      <li><strong>台本</strong>：バズの型をAIに学習させてアレンジ生成</li>
      <li><strong>X投稿</strong>：インスタ台本をXスレッド形式に変換</li>
      <li><strong>サムネ</strong>：Canva AI・Midjourneyで量産</li>
      <li>AI生成は必ず <strong>自分の言葉でリライト</strong>して「らしさ」を出す</li>
    </ul>

    <h3>横軸展開ロードマップ</h3>
    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">Phase 1：インスタ単独で月10万円まで</div>
        <div class="step-grid__body">メインに集中。横軸はまだ広げない。土台を固める。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">Phase 2：LINE構築 + X / スレッズに転用</div>
        <div class="step-grid__body">既存コンテンツを再利用するだけ。新規制作はしない。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">Phase 3：編集・台本を外注化</div>
        <div class="step-grid__body">自分はブランディング・訴求設計に集中。投稿量を維持しつつ自分の時間を確保。</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">Phase 4：AI量産 + 別アカウント展開</div>
        <div class="step-grid__body">第2・第3アカウントを別ジャンルで立ち上げ。HARMの別カテゴリで横展開。</div>
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        SNSの収益は <strong>媒体に依存しない設計</strong>にする。LINE・X・noteで複線化し、外注とAIで運用負荷を下げる。Phase 1→2→3→4の順で広げる。最終章では自社商品の作り方を学ぶ。
      </div>
    </div>
  `,

  'p4-product': `
    <p>自社商品は <strong>利益率が最も高く、少人数でも大きな収益</strong>になる。アフィリエイトで「売れる感覚」を掴んだら、ここに進む。月収100万→500万の壁はここで越える。</p>

    <h3>自社商品の4タイプ</h3>

    <div class="tier-grid">
      <div class="tier">
        <div class="tier__name">PDF・テンプレ</div>
        <div class="tier__price">2,000〜<span class="tier__price-unit">円</span></div>
        <p class="tier__lede">一度作って繰り返し販売。労働時間ゼロで売れ続ける。</p>
        <ul class="tier__features">
          <li>note・BASE・BOOTH</li>
          <li>10枚PDFから可</li>
          <li>テスト販売しやすい</li>
        </ul>
      </div>
      <div class="tier tier--recommended">
        <div class="tier__name">オンライン講座</div>
        <div class="tier__price">1万〜10万<span class="tier__price-unit">円</span></div>
        <p class="tier__lede">録画して販売。リール制作スキルがそのまま使える。</p>
        <ul class="tier__features">
          <li>Udemy・Teachable</li>
          <li>自社LP販売も可</li>
          <li>受講生コミュも作れる</li>
        </ul>
      </div>
      <div class="tier">
        <div class="tier__name">1対1コンサル</div>
        <div class="tier__price">月3〜30万<span class="tier__price-unit">円</span></div>
        <p class="tier__lede">少人数で高収益。深い関係で口コミが生まれる。</p>
        <ul class="tier__features">
          <li>DM・LINE経由</li>
          <li>無料テスト → 値上げ</li>
          <li>サポート力が必要</li>
        </ul>
      </div>
    </div>

    <h4>＋ グループコミュニティ（継続課金）</h4>
    <p>月額1,000〜50,000円の継続課金。メンバー同士の <strong>横のつながり</strong> が価値になる。Discord・Slack・noteメンバーシップで運営。まず10人集めてPDCAを回す。</p>

    <h3>商品設計の4ステップ</h3>

    <div class="step-grid">
      <div class="step-grid__item">
        <div class="step-grid__title">フォロワーの悩みを言語化する</div>
        <div class="step-grid__body">DMの質問・コメント・アンケートから <strong>「一番多い悩み」</strong> を抽出。商品を作る前に「買う人がいるか」を確認する。</div>
        <div class="step-grid__example">ストーリーアンケート「◯◯に困っていますか？」で需要を事前検証</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">最小限の商品（MVP）から始める</div>
        <div class="step-grid__body">完璧な商品を作ろうとしない。<strong>A4 10枚のPDF か 60分の動画1本</strong>で販売テスト。1テーマに絞る。</div>
        <div class="step-grid__example">タイトル：「◯◯日で◯◯になれた方法」と実績・数字を入れる</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">価格設定と訴求設計</div>
        <div class="step-grid__body">最初は低めに設定してレビューを集め、口コミが増えたら徐々に値上げ。<em>「先着◯名様限定価格」</em>で緊急性を作る。</div>
        <div class="step-grid__example">訴求はPhase 3 の「7ステップ訴求」の型をそのまま使う</div>
      </div>
      <div class="step-grid__item">
        <div class="step-grid__title">口コミ・実績を積み上げて単価を上げる</div>
        <div class="step-grid__body">購入者の声を <strong>ストーリーに掲載し続ける</strong>。実績が積み上がったらバージョンアップと値上げを繰り返す。</div>
        <div class="step-grid__example">「◯人が購入・◯件の感想」の数字を訴求に使う</div>
      </div>
    </div>

    <h3>販売チャネルの選び方</h3>
    <div class="diagram-compare">
      <div class="diagram-compare__col">
        <div class="diagram-compare__head">単発販売</div>
        <div class="diagram-compare__example">note / BASE / BOOTH</div>
        <div class="diagram-compare__body">手軽。商品ページ作成のみ。決済も完備。</div>
      </div>
      <div class="diagram-compare__col">
        <div class="diagram-compare__head">継続販売・LP</div>
        <div class="diagram-compare__example">UTAGE / 自社サイト</div>
        <div class="diagram-compare__body">月額・分割払い対応。長期的な仕組みを作れる。</div>
      </div>
    </div>

    <h3>失敗パターン</h3>
    <div class="qa">
      <div class="qa__q">完璧な商品を作ってから売り出したい</div>
      <div class="qa__a">時間がかかりすぎる間にフォロワーが離脱する。<strong>未完成でもいいから売る</strong>。完成度より販売実績の積み上げが優先。</div>
    </div>
    <div class="qa">
      <div class="qa__q">商品ができたのに売れない</div>
      <div class="qa__a">原因はほぼ <strong>訴求不足</strong>。7ステップの型に当てはめて、共感→権威→教育→欲求→CTAの順で語る。週1〜2回の頻度で。</div>
    </div>
    <div class="qa">
      <div class="qa__q">いきなり高単価から始めたい</div>
      <div class="qa__a">実績がないうちは <strong>無料 or 低単価でテスト</strong>。10〜20人の口コミが集まってから値上げ。最初から30万円のコンサルを売っても成立しない。</div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        自社商品は <strong>MVP → 口コミ → 値上げ</strong> のループ。完璧を求めず、未完成でも販売してフィードバックを得る。Phase 3 の訴求テンプレと組み合わせれば、月100万円→500万円の壁を越えられる。<em>Phase 4 完了。これでロードマップ全章修了。</em>
      </div>
    </div>
  `,

  'p2-ana': `
    <p>投稿するたびに <strong>数値を記録する</strong>。感覚で「いい・悪い」を判断しない。データだけが嘘をつかない。記録の積み重ねで「バズのパターン」が浮かび上がる。</p>

    <div class="pull-quote">伸びる人と伸びない人の差は、<br>「測ること」をやるかやらないか。</div>

    <h3>記録する5項目</h3>
    <div class="stat-row">
      <div class="stat-row__cell">
        <div class="stat-row__num">①</div>
        <div class="stat-row__label">投稿の基本</div>
      </div>
      <div class="stat-row__cell">
        <div class="stat-row__num">②</div>
        <div class="stat-row__label">初速メトリクス</div>
      </div>
      <div class="stat-row__cell">
        <div class="stat-row__num">③</div>
        <div class="stat-row__label">エンゲージ</div>
      </div>
    </div>

    <h4>① 投稿の基本情報</h4>
    <ul>
      <li>投稿日・曜日・投稿時間</li>
      <li>動画タイトル</li>
      <li>使用した音源・特徴</li>
      <li>動画の秒数</li>
    </ul>

    <h4>② 初速・視聴メトリクス（1時間後）</h4>
    <ul>
      <li>1時間後の再生数</li>
      <li>1時間の再生時間（分）</li>
      <li>1時間の平均再生時間（秒）</li>
    </ul>
    <div class="callout callout--tip">
      <div class="callout__icon">✓</div>
      <div class="callout__body">
        1時間後の再生数が <strong>普段の3倍</strong> 以上なら、その投稿はバズの予兆。同じ型をもう1本作って投稿する。
      </div>
    </div>

    <h4>③ エンゲージメント</h4>
    <ul>
      <li>初速の保存数</li>
      <li>翌朝の再生数</li>
      <li>2日後の朝の再生数</li>
      <li>1週間後の再生数</li>
    </ul>

    <h4>④ 分析メモ（一番大事）</h4>
    <p>数字を取った後、<strong>必ず仮説を書き残す</strong>。「バズった理由は何か」「次にどう活かすか」を一言でも。</p>

    <h3>週次チェックリスト（金曜or日曜に5分）</h3>
    <div class="callout callout--point">
      <div class="callout__icon">📋</div>
      <div class="callout__body">
        <div class="callout__title">週に1回必ず確認</div>
        ・<strong>CV率は10%超</strong> か？（下回ったら訴求を見直し）<br>
        ・<strong>閲覧率は20〜30%前後</strong> を維持できているか？<br>
        ・<strong>新規フォロワー数</strong> は増えているか？<br>
        ・感想・購入報告をストーリーに掲載しているか？
      </div>
    </div>

    <h3>3ヶ月分が貯まると見えること</h3>
    <div class="framework">
      <div class="framework__card">
        <div class="framework__letter">時</div>
        <div class="framework__name">最強の投稿時間</div>
        <p class="framework__desc">自分のアカウントで最も伸びる時間帯がわかる。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">型</div>
        <div class="framework__name">勝ち筋の型</div>
        <p class="framework__desc">どのテンプレが自分のジャンルで伸びるか確定する。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">尺</div>
        <div class="framework__name">理想尺</div>
        <p class="framework__desc">完視聴率が最も高い秒数が見える。</p>
      </div>
      <div class="framework__card">
        <div class="framework__letter">音</div>
        <div class="framework__name">伸びる音源傾向</div>
        <p class="framework__desc">自ジャンルでハマる音源の特徴が分かる。</p>
      </div>
    </div>

    <h3>この章の結論</h3>
    <div class="callout callout--point">
      <div class="callout__icon">★</div>
      <div class="callout__body">
        記録は <strong>未来の自分への贈り物</strong>。毎投稿後5分の記録を3ヶ月続けると、再現性のあるバズパターンが手に入る。<em>Phase 2 完了。</em> 次は稼ぐフェーズへ。
      </div>
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
