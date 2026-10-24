/* ========== RENDER HELPERS ========== */
function renderDestinations() {
  const grid = document.getElementById('destinations-grid');
  grid.innerHTML = DESTINATIONS.map(d => `
    <article class="dest-card" data-name="${d.name}">
      <img src="${d.img}" alt="${d.name}" loading="lazy" />
      <div class="overlay">
        <h3>${d.name}</h3>
        <span>${d.tours.toLocaleString()} experiences</span>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('click', () => {
      document.getElementById('destination-input').value = card.dataset.name;
      document.getElementById('search-btn').click();
    });
  });
}

function renderCategories() {
  const el = document.getElementById('categories-scroll');
  el.innerHTML = CATEGORIES.map(c => `
    <button class="cat-chip" data-id="${c.id}">
      <span class="icon">${c.icon}</span>
      <span>${c.name}</span>
    </button>
  `).join('');

  el.querySelectorAll('.cat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.id;
      const map = { wildlife: 'wildlife', water: 'water', nightlife: 'nightlife', wellness: 'wellness', family: 'family', private: 'private' };
      applyFilter(map[filter] || filter);
      document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderTours(tours = TOURS) {
  const grid = document.getElementById('tours-grid');
  if (!tours.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px 0;">No experiences match your filters. Try another category.</p>`;
    return;
  }
  grid.innerHTML = tours.map(t => `
    <article class="tour-card" data-id="${t.id}">
      <div class="img-wrap">
        <img src="${t.img}" alt="${t.title}" loading="lazy" />
        ${t.badge ? `<span class="badge">${t.badge}</span>` : ''}
      </div>
      <div class="body">
        <div class="location">📍 ${t.location}</div>
        <h3>${t.title}</h3>
        <div class="meta">
          <span class="rating">★ ${t.rating}</span>
          <span>(${t.reviews.toLocaleString()})</span>
          <span>·</span>
          <span>${t.duration}</span>
        </div>
        <div class="price-row">
          <div class="price">from $${t.price} <span>/ person</span></div>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.tour-card').forEach(card => {
    card.addEventListener('click', () => openTourModal(+card.dataset.id));
  });
}

function applyFilter(filter) {
  document.querySelectorAll('.filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.filter === filter || (filter === 'all' && c.dataset.filter === 'all'));
  });
  if (filter === 'all') {
    renderTours(TOURS);
  } else {
    const extra = TOURS.filter(t => {
      if (filter === 'adventure') return t.category === 'adventure' || t.category === 'wildlife' || t.category === 'water';
      if (filter === 'culture') return t.category === 'culture';
      if (filter === 'food') return t.category === 'food';
      return t.category === filter;
    });
    renderTours([...new Map(extra.map(t => [t.id, t])).values()]);
  }
}

/* ========== MODAL ========== */
function openTourModal(id) {
  const t = TOURS.find(x => x.id === id);
  if (!t) return;
  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <img class="modal-body-img" src="${t.img}" alt="${t.title}" />
    <div class="modal-body-content">
      <h2>${t.title}</h2>
      <div class="modal-meta">
        <span>📍 ${t.location}</span>
        <span>★ ${t.rating} (${t.reviews.toLocaleString()} reviews)</span>
        <span>⏱ ${t.duration}</span>
      </div>
      <p class="modal-desc">${t.desc}</p>
      <div class="modal-price-row">
        <div class="modal-price">from $${t.price} <span>/ person</span></div>
        <button class="btn-primary btn-lg">Check availability</button>
      </div>
    </div>
  `;
  document.getElementById('tour-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('tour-modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ========== SEARCH ========== */
function setupSearch() {
  const input = document.getElementById('destination-input');
  const box = document.getElementById('destination-suggestions');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { box.classList.remove('show'); return; }
    const matches = SEARCH_SUGGESTIONS.filter(s => s.toLowerCase().includes(q)).slice(0, 6);
    if (!matches.length) { box.classList.remove('show'); return; }
    box.innerHTML = matches.map(m => `<div class="suggestion-item">${m}</div>`).join('');
    box.classList.add('show');
    box.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        input.value = item.textContent;
        box.classList.remove('show');
      });
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-field')) box.classList.remove('show');
  });

  document.getElementById('search-btn').addEventListener('click', () => {
    const dest = input.value.trim().toLowerCase();
    if (!dest) {
      renderTours(TOURS);
      document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const filtered = TOURS.filter(t => t.location.toLowerCase().includes(dest) || t.title.toLowerCase().includes(dest));
    renderTours(filtered.length ? filtered : TOURS);
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
  });
}

/* ========== FILTER CHIPS ========== */
function setupFilters() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => applyFilter(chip.dataset.filter));
  });
}

/* ========== MISC ========== */
function setupMisc() {
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('load-more')?.addEventListener('click', () => {
    alert('In a full version this would load more tours from the API. For this demo all sample tours are already shown.');
  });

  document.getElementById('newsletter-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Thanks! ${email} has been added to our travel inspiration list.`);
    e.target.reset();
  });

  const menuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('nav');
  menuBtn?.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '72px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'white';
    nav.style.padding = '20px';
    nav.style.borderBottom = '1px solid var(--border)';
    nav.style.gap = '16px';
  });
}

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
  renderDestinations();
  renderCategories();
  renderTours();
  setupSearch();
  setupFilters();
  setupMisc();
});
