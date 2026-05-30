// ============================================================
// UI Helpers — DOM, escape, toast, modal
// ============================================================

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export function h(tag, props = {}, children = []) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k === 'text') el.textContent = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k === 'dataset' && typeof v === 'object') Object.assign(el.dataset, v);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k in el && typeof v !== 'object') el[k] = v;
    else el.setAttribute(k, v);
  }
  const list = Array.isArray(children) ? children : [children];
  for (const c of list) {
    if (c == null || c === false) continue;
    el.append(c.nodeType ? c : document.createTextNode(String(c)));
  }
  return el;
}

export function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, m => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;',
  }[m]));
}

// ── Toast ──
export function toast(msg, opts = {}) {
  const root = document.getElementById('toast-root');
  if (!root) return;
  const el = h('div', { class: 'toast', role: 'status' }, [msg]);
  root.appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity 220ms ease, transform 220ms ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    setTimeout(() => el.remove(), 240);
  }, opts.duration || 2200);
}

// ── Modal ──
let lastFocus = null;
export function openModal({ title, lede, body, actions, onClose }) {
  const root = document.getElementById('modal-root');
  if (!root) return;
  lastFocus = document.activeElement;

  const backdrop = h('div', { class: 'modal-backdrop' });
  const modal = h('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': title || 'ダイアログ' });

  if (title) modal.appendChild(h('h2', { class: 'modal__title' }, [title]));
  if (lede)  modal.appendChild(h('p',  { class: 'modal__lede' }, [lede]));
  if (body)  modal.appendChild(body.nodeType ? body : h('div', { html: body }));
  if (actions && actions.length) {
    const wrap = h('div', { class: 'modal__actions' });
    for (const a of actions) {
      const btn = h('button', {
        type: 'button',
        class: `btn ${a.variant ? 'btn--' + a.variant : ''}`,
        onclick: (e) => a.onClick && a.onClick(e, { close }),
      }, [a.label]);
      wrap.appendChild(btn);
    }
    modal.appendChild(wrap);
  }
  backdrop.appendChild(modal);
  root.appendChild(backdrop);

  function close() {
    backdrop.style.transition = 'opacity 200ms ease';
    backdrop.style.opacity = '0';
    setTimeout(() => {
      backdrop.remove();
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      if (onClose) onClose();
    }, 200);
    document.removeEventListener('keydown', onKey);
  }
  function onKey(e) {
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') trapFocus(e, modal);
  }
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
  document.addEventListener('keydown', onKey);

  // Focus first focusable
  setTimeout(() => {
    const focusables = modal.querySelectorAll('input, textarea, select, button, [tabindex]:not([tabindex="-1"])');
    if (focusables.length) focusables[0].focus();
  }, 0);

  return { close, modal };
}

function trapFocus(e, container) {
  const focusables = container.querySelectorAll('input, textarea, select, button, a, [tabindex]:not([tabindex="-1"])');
  if (!focusables.length) return;
  const first = focusables[0];
  const last  = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}
