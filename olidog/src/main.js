import { STORE_URL, INSTAGRAM_URL, CATEGORIES, PRODUCTS, WEBBING, THREAD, ICONS, ITEM_TYPES } from './data.js';

const $ = (s, el = document) => el.querySelector(s);
const won = (n) => n.toLocaleString('ko-KR') + '원';

// 외부 링크
document.querySelectorAll('[data-store]').forEach((a) => Object.assign(a, { href: STORE_URL, target: '_blank', rel: 'noopener' }));
document.querySelectorAll('[data-insta]').forEach((a) => Object.assign(a, { href: INSTAGRAM_URL, target: '_blank', rel: 'noopener' }));

/* ---------- CUSTOMIZER ---------- */
const state = { item: ITEM_TYPES[0], name: 'BORI', icon: ICONS[0], webbing: WEBBING[0], thread: THREAD[1] };

// 실패 모양 (색은 --c)
const spool = `<svg viewBox="0 0 40 52" aria-hidden="true">
  <rect x="4" y="2" width="32" height="6" rx="2" fill="#d9c7ad"/>
  <rect x="4" y="44" width="32" height="6" rx="2" fill="#d9c7ad"/>
  <rect x="8" y="8" width="24" height="36" fill="var(--c)"/>
  <path d="M8 13h24M8 18h24M8 23h24M8 28h24M8 33h24M8 38h24" stroke="rgb(0 0 0 / .14)" stroke-width="1"/>
</svg>`;

function picker(container, list, key, labelEl, initial, inner = '') {
  container.innerHTML = list
    .map((c, i) => `<button type="button" style="--c:${c.hex}" aria-label="${c.name}" aria-pressed="${i === initial}" data-i="${i}">${inner}</button>`)
    .join('');
  container.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    container.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
    state[key] = list[b.dataset.i];
    labelEl.textContent = state[key].name;
    render();
  });
}

function segmented(container, list, key, labelOf) {
  container.innerHTML = list
    .map((v, i) => `<button type="button" aria-pressed="${i === 0}" data-i="${i}">${labelOf(v) || '없음'}</button>`)
    .join('');
  container.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    container.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
    state[key] = list[b.dataset.i];
    render();
  });
}

segmented($('#ctl-item'), ITEM_TYPES, 'item', (t) => t.label);
segmented($('#ctl-icon'), ICONS, 'icon', (i) => i);
picker($('#ctl-webbing'), WEBBING, 'webbing', $('#webbing-name'), 0);
picker($('#ctl-thread'), THREAD, 'thread', $('#thread-name'), 1, spool);
$('#thread-name').textContent = state.thread.name;
$('#ctl-name').addEventListener('input', (e) => {
  state.name = e.target.value;
  render();
});

function render() {
  const p = $('#preview');
  p.dataset.item = state.item.id;
  p.style.setProperty('--web', state.webbing.hex);
  p.style.setProperty('--thread', state.thread.hex);
  const name = state.name.trim() || 'NAME';
  $('#emb').textContent = state.icon ? `${name} ${state.icon}` : name;
  $('#meta-item').textContent = state.item.label;
  $('#meta-price').textContent = won(state.item.price);
  p.classList.remove('pop');
  void p.offsetWidth;
  p.classList.add('pop');
}
render();

/* ---------- SHOP ---------- */
function card(p) {
  return `
  <a class="card reveal" href="${STORE_URL}" target="_blank" rel="noopener" data-cat="${p.cat}">
    <div class="card-img">
      <img src="${import.meta.env.BASE_URL}img/${p.img}" alt="${p.name}" loading="lazy" />
      ${p.tag ? `<span class="sewn-tag">${p.tag.toLowerCase()}</span>` : ''}
    </div>
    <div class="card-body">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="card-foot">
        <span class="hang-tag">${won(p.price)}</span>
        <span class="rate">★ ${p.rating.toFixed(2)} <small>(${p.reviews})</small></span>
      </div>
    </div>
  </a>`;
}

const grid = $('#grid');
grid.innerHTML = PRODUCTS.map(card).join('');

const chips = $('#chips');
chips.innerHTML = CATEGORIES.map((c, i) => `<button role="tab" aria-selected="${i === 0}" data-cat="${c.id}">${c.label}</button>`).join('');
chips.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  chips.querySelectorAll('button').forEach((x) => x.setAttribute('aria-selected', x === b));
  const cat = b.dataset.cat;
  grid.querySelectorAll('.card').forEach((c) => {
    c.hidden = cat !== 'all' && c.dataset.cat !== cat;
  });
});

/* ---------- NUMBERS ---------- */
const totalReviews = PRODUCTS.reduce((s, p) => s + p.reviews, 0);
const avgRating = PRODUCTS.reduce((s, p) => s + p.rating * p.reviews, 0) / totalReviews;
const targets = { reviews: [totalReviews, 0], rating: [avgRating, 2] };

function countUp(el) {
  const [to, digits] = targets[el.dataset.count];
  const t0 = performance.now();
  const step = (t) => {
    const k = Math.min(1, (t - t0) / 1200);
    const v = to * (1 - Math.pow(1 - k, 3));
    el.textContent = digits ? v.toFixed(digits) : Math.round(v).toLocaleString('ko-KR');
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- REVEAL ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      en.target.querySelectorAll('[data-count]').forEach(countUp);
      io.unobserve(en.target);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal, .stitch-rule').forEach((el) => io.observe(el));
