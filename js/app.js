// ============================================================
// App bootstrap — onboarding gate, router wiring, theme apply
// ============================================================

import { storage, migrateLegacyIfNeeded } from './storage.js';
import { router } from './router.js';
import { $, $$, h, escapeHtml, toast, openModal } from './ui.js';
import { mountHome } from './views/home.js';
import { renderLearnIndex, renderChapter, renderPhase } from './views/learn.js';

// ── Theme apply ──
function applyTheme() {
  const t = storage.getTheme();
  document.body.setAttribute('data-theme', t);
}

// ── Streak update on app open ──
function touchStreak() {
  const user = storage.getUser();
  if (!user) return;
  const meta = storage.getMeta(user.id);
  const today = new Date().toISOString().slice(0, 10);
  const last  = meta.lastOpenISO ? meta.lastOpenISO.slice(0, 10) : null;
  if (last === today) return;
  let streak = meta.streak || 0;
  if (last) {
    const d1 = new Date(last + 'T00:00:00Z');
    const d2 = new Date(today + 'T00:00:00Z');
    const diff = Math.round((d2 - d1) / 86400000);
    streak = diff === 1 ? streak + 1 : 1;
  } else {
    streak = 1;
  }
  storage.setMeta(user.id, {
    ...meta,
    lastOpenISO: new Date().toISOString(),
    streak,
    bestStreak: Math.max(meta.bestStreak || 0, streak),
  });
}

function dailyBackupIfNeeded() {
  const user = storage.getUser();
  if (!user) return;
  const meta = storage.getMeta(user.id);
  const today = new Date().toISOString().slice(0, 10);
  const last = meta.lastBackupISO ? meta.lastBackupISO.slice(0, 10) : null;
  if (last === today) return;
  storage.pushBackup(user.id, {
    data: storage.getData(user.id),
    theme: storage.getTheme(),
    user,
  });
  storage.setMeta(user.id, { ...meta, lastBackupISO: new Date().toISOString() });
}

// ── Onboarding modal ──
function showOnboarding() {
  return new Promise((resolve) => {
    const nameInput = h('input', { class: 'input', type: 'text', placeholder: '例：さくら', maxlength: 30, autocomplete: 'off' });
    const idInput   = h('input', { class: 'input', type: 'text', placeholder: '例：sakura2024', maxlength: 24, autocomplete: 'off', pattern: '[A-Za-z0-9_]+' });
    const errBox = h('p', { class: 'field__hint', style: { color: 'var(--c-danger)', minHeight: '18px' } }, ['']);

    const body = h('div', {}, [
      h('div', { class: 'field' }, [
        h('label', { class: 'field__label' }, ['お名前']),
        nameInput,
      ]),
      h('div', { class: 'field' }, [
        h('label', { class: 'field__label' }, ['マイID（半角英数字）']),
        idInput,
        h('p', { class: 'field__hint' }, ['データを区別する識別子です。後から変更できます。']),
      ]),
      errBox,
    ]);

    openModal({
      title: 'ようこそ',
      lede: '名前とマイIDを設定すると、進捗・メモ・TODOが端末に保存されます。',
      body,
      actions: [
        {
          label: 'はじめる',
          variant: '',
          onClick: (_e, { close }) => {
            const name = nameInput.value.trim();
            const id   = idInput.value.trim();
            if (!name || !id) { errBox.textContent = '名前とマイIDを両方入力してください。'; return; }
            if (!/^[A-Za-z0-9_]+$/.test(id)) { errBox.textContent = 'マイIDは半角英数字とアンダースコアのみ使えます。'; return; }
            const user = { id, name, createdAt: new Date().toISOString() };
            storage.setUser(user);
            close();
            resolve(user);
          },
        },
      ],
    });
  });
}

// ── Active tab highlight ──
function setActiveTab(headSegment) {
  $$('.tabbar__item').forEach(a => {
    if (a.dataset.tab === headSegment) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderInto(mount) {
  const root = $('#view-root');
  root.innerHTML = '';
  mount(root);
}

// Simple settings view
function viewSettings(root) {
  const user = storage.getUser();
  const themes = [
    { id: 'sage', label: 'Sage', desc: '静謐・和モダン' },
    { id: 'dark', label: 'Dark', desc: '夜間・集中' },
    { id: 'ink',  label: 'Ink',  desc: 'モノクロ・編集' },
    { id: 'rose', label: 'Rose', desc: '温かみ' },
  ];
  const cur = storage.getTheme();
  const view = h('section', { class: 'view' }, [
    h('p', { class: 'eyebrow' }, ['SETTINGS']),
    h('h2', { class: 'section__title', style: { marginTop: '6px', marginBottom: '16px' } }, ['設定']),

    h('section', { class: 'section' }, [
      h('div', { class: 'card' }, [
        h('h3', { class: 'card__title' }, ['ユーザー']),
        h('p', { class: 'card__lede' }, [`${escapeHtml(user.name)} / ID: ${escapeHtml(user.id)}`]),
        h('button', { type: 'button', class: 'btn btn--secondary btn--sm', style: { marginTop: '12px' }, onclick: editProfile }, ['名前・IDを変更']),
      ]),
    ]),

    h('section', { class: 'section' }, [
      h('h3', { class: 'card__title', style: { marginBottom: '10px' } }, ['テーマ']),
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' } },
        themes.map(t => h('button', {
          type: 'button',
          class: `card ${cur === t.id ? 'card--accent' : ''}`,
          style: { textAlign: 'left', cursor: 'pointer', padding: '14px' },
          onclick: () => { storage.setTheme(t.id); applyTheme(); router.resolve(); toast(`テーマ：${t.label}`); },
        }, [
          h('div', { class: 'chapter__phase' }, [t.label.toUpperCase()]),
          h('div', { style: { fontFamily: 'var(--font-serif-jp)', fontSize: 'var(--fs-md)', fontWeight: '600', marginTop: '2px' } }, [t.label]),
          h('div', { class: 'card__lede', style: { marginTop: '2px', fontSize: '12px' } }, [t.desc]),
        ]))
      ),
    ]),

    h('section', { class: 'section' }, [
      h('h3', { class: 'card__title', style: { marginBottom: '10px' } }, ['データ']),
      renderDataCard(),
    ]),

    h('section', { class: 'section' }, [
      h('h3', { class: 'card__title', style: { marginBottom: '10px' } }, ['バックアップ復元']),
      renderBackupsCard(),
    ]),

    h('section', { class: 'section' }, [
      h('h3', { class: 'card__title', style: { marginBottom: '10px', color: 'var(--c-danger)' } }, ['危険ゾーン']),
      h('div', { class: 'card' }, [
        h('p', { class: 'card__lede' }, ['学習の進捗（読了マーク）を全て削除します。事前にJSONエクスポートしてください。']),
        h('button', { type: 'button', class: 'btn btn--danger btn--sm', style: { marginTop: '12px' }, onclick: confirmWipe }, ['全データを削除']),
      ]),
    ]),
  ]);
  root.appendChild(view);
}

function renderDataCard() {
  const user = storage.getUser();
  const data = storage.getData(user.id);
  const counts = {
    reads: Object.keys(data.reads || {}).length,
  };
  return h('div', { class: 'card' }, [
    h('div', { style: { marginBottom: '14px' } }, [
      h('div', { class: 'stat', style: { padding: '10px' } }, [
        h('span', { class: 'stat__label' }, ['読了した章']),
        h('div', { class: 'stat__value', style: { fontSize: 'var(--fs-xl)' } }, [`${String(counts.reads)} 章`]),
      ]),
    ]),
    h('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } }, [
      h('button', { type: 'button', class: 'btn btn--block', onclick: exportJSON }, ['📥 JSONをダウンロード']),
      h('button', { type: 'button', class: 'btn btn--secondary btn--block', onclick: importJSON }, ['📤 JSONをインポート']),
    ]),
    h('p', { class: 'card__lede', style: { marginTop: '10px', fontSize: '12px' } }, ['毎日1回、自動バックアップが取られます（直近7日分）。']),
  ]);
}

function renderBackupsCard() {
  const user = storage.getUser();
  const backups = storage.getBackups(user.id);
  if (!backups.length) {
    return h('div', { class: 'empty' }, [
      h('p', { class: 'empty__title' }, ['バックアップはまだありません']),
      h('p', { class: 'empty__hint' }, ['翌日にアプリを開くと最初のバックアップが取られます']),
    ]);
  }
  return h('div', {}, [
    ...backups.map((b, i) => {
      const d = new Date(b.takenAtISO);
      const dateStr = d.toLocaleString('ja-JP', { dateStyle: 'short', timeStyle: 'short' });
      return h('div', { class: 'list-row', style: { marginTop: '8px' } }, [
        h('div', { style: { flex: '1', minWidth: 0 } }, [
          h('div', { style: { fontFamily: 'var(--font-serif-jp)', fontWeight: '600' } }, [`${i === 0 ? '最新' : `${i} 日前`}`]),
          h('div', { class: 'card__lede', style: { fontSize: '12px' } }, [dateStr]),
        ]),
        h('button', { type: 'button', class: 'btn btn--secondary btn--sm', onclick: () => confirmRestore(b, i) }, ['復元']),
      ]);
    }),
  ]);
}

function exportJSON() {
  const user = storage.getUser();
  const payload = storage.exportAll(user.id);
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = h('a', { href: url, download: `sns-roadmap-${user.id}-${new Date().toISOString().slice(0, 10)}.json` });
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 100);
  toast('JSONをダウンロードしました');
}

function importJSON() {
  const input = h('input', { type: 'file', accept: 'application/json', style: { display: 'none' } });
  document.body.appendChild(input);
  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) { input.remove(); return; }
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(reader.result);
        openModal({
          title: 'JSONをインポート',
          lede: '現在のデータを置き換えます。本当にいいですか？',
          body: h('div', { class: 'card card--soft' }, [
            h('p', {}, [`ユーザー：${escapeHtml(payload.user?.name || '?')} / ID: ${escapeHtml(payload.user?.id || '?')}`]),
            h('p', { class: 'card__lede', style: { marginTop: '6px', fontSize: '13px' } }, [`エクスポート日時：${payload.exportedAtISO || '不明'}`]),
          ]),
          actions: [
            { label: 'キャンセル', variant: 'secondary', onClick: (_e, { close }) => close() },
            { label: '上書きして復元', onClick: (_e, { close }) => {
              try {
                storage.importAll(payload);
                close();
                toast('復元しました');
                setTimeout(() => location.reload(), 600);
              } catch (e) { alert('復元失敗: ' + e.message); }
            } },
          ],
        });
      } catch (e) {
        alert('JSONの読み込みに失敗：' + e.message);
      }
      input.remove();
    };
    reader.readAsText(file);
  });
  input.click();
}

function confirmRestore(backup, idx) {
  openModal({
    title: `${idx === 0 ? '最新' : `${idx} 日前`} のバックアップから復元`,
    lede: '現在のデータをこのバックアップで上書きします。',
    body: h('div', { class: 'card card--soft' }, [
      h('p', {}, [`取得日時：${new Date(backup.takenAtISO).toLocaleString('ja-JP')}`]),
    ]),
    actions: [
      { label: 'キャンセル', variant: 'secondary', onClick: (_e, { close }) => close() },
      { label: '復元する', onClick: (_e, { close }) => {
        const user = storage.getUser();
        if (backup.snapshot?.data) storage.setData(user.id, backup.snapshot.data);
        close();
        toast('復元しました');
        setTimeout(() => location.reload(), 600);
      } },
    ],
  });
}

function confirmWipe() {
  openModal({
    title: '本当に全データを削除しますか？',
    lede: 'TODO・ノート・読了履歴・バックアップが全て消えます。元に戻せません。',
    body: h('div', { class: 'card card--soft', style: { color: 'var(--c-danger)' } }, [
      h('p', {}, ['事前にJSONダウンロードしておくことを強く推奨します。']),
    ]),
    actions: [
      { label: 'キャンセル', variant: 'secondary', onClick: (_e, { close }) => close() },
      { label: '削除する', variant: 'danger', onClick: (_e, { close }) => {
        const user = storage.getUser();
        storage.wipeUser(user.id);
        close();
        toast('全データを削除しました');
        setTimeout(() => location.reload(), 600);
      } },
    ],
  });
}

function editProfile() {
  const user = storage.getUser();
  const nameInput = h('input', { class: 'input', type: 'text', maxlength: 30, value: user.name });
  const idInput = h('input', { class: 'input', type: 'text', maxlength: 24, value: user.id, pattern: '[A-Za-z0-9_]+' });
  const err = h('p', { class: 'field__hint', style: { color: 'var(--c-danger)', minHeight: '18px' } }, ['']);
  const body = h('div', {}, [
    h('div', { class: 'field' }, [h('label', { class: 'field__label' }, ['お名前']), nameInput]),
    h('div', { class: 'field' }, [h('label', { class: 'field__label' }, ['マイID']), idInput, h('p', { class: 'field__hint' }, ['ID変更時はデータも紐づけ直されます'])]),
    err,
  ]);
  openModal({
    title: 'プロフィール編集',
    body,
    actions: [
      { label: 'キャンセル', variant: 'secondary', onClick: (_e, { close }) => close() },
      { label: '保存', onClick: (_e, { close }) => {
        const n = nameInput.value.trim();
        const newId = idInput.value.trim();
        if (!n || !newId) { err.textContent = '入力してください'; return; }
        if (!/^[A-Za-z0-9_]+$/.test(newId)) { err.textContent = 'IDは半角英数字とアンダースコア'; return; }
        if (newId !== user.id) {
          // copy data to new key
          const oldData = storage.getData(user.id);
          const oldMeta = storage.getMeta(user.id);
          storage.setData(newId, oldData);
          storage.setMeta(newId, oldMeta);
          storage.wipeUser(user.id);
        }
        storage.setUser({ ...user, id: newId, name: n });
        close();
        toast('プロフィールを保存');
        router.resolve();
      } },
    ],
  });
}

// ── Boot ──
async function boot() {
  applyTheme();
  migrateLegacyIfNeeded();

  if (!storage.getUser()) {
    await showOnboarding();
  }

  touchStreak();
  dailyBackupIfNeeded();

  $('[data-action="open-settings"]')?.addEventListener('click', () => router.go('/settings'));

  router
    .on('/home',  () => { setActiveTab('home');  renderInto(mountHome); })
    .on('/learn', () => { setActiveTab('learn'); renderInto((r) => r.appendChild(renderLearnIndex())); })
    .on('/phase/:phaseId', ({ phaseId }) => { setActiveTab(phaseId); renderInto((r) => r.appendChild(renderPhase(phaseId))); })
    .on('/learn/:chapterId', ({ chapterId }) => { setActiveTab(chapterId.split('-')[0]); renderInto((r) => r.appendChild(renderChapter(chapterId))); })
    .on('/settings', () => { setActiveTab('settings'); renderInto(viewSettings); })
    .fallback((path) => { setActiveTab('home'); renderInto((r) => r.appendChild(h('section', { class: 'view' }, [
      h('h2', { class: 'section__title' }, ['ページが見つかりません']),
      h('p', { class: 'card__lede' }, [`Path: ${path}`]),
      h('a', { class: 'btn', href: '#/home', style: { marginTop: '12px' } }, ['ホームへ']),
    ]))); })
    .start();
}

boot().catch((err) => {
  console.error(err);
  document.getElementById('view-root').innerHTML = '<p style="color:red">起動エラー: ' + (err.message || err) + '</p>';
});
