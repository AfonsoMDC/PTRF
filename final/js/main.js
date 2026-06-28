/* Afonso Matos da Cruz — main.js */
'use strict';

/* Year */
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

/* ── CURSOR ─────────────────────────────────────────────────────── */
const cur = document.getElementById('cursor');
if (cur && window.matchMedia('(pointer: fine)').matches) {
  let tx = -200, ty = -200, cx = -200, cy = -200;
  document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
  (function tick() {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    cur.style.left = cx + 'px';
    cur.style.top  = cy + 'px';
    requestAnimationFrame(tick);
  })();
  const label = cur.querySelector('.cursor-label');
  const set = (cls, txt) => { cur.className = cls; if (label) label.textContent = txt || ''; };
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => set('is-link'));
    el.addEventListener('mouseleave', () => set(''));
  });
  document.querySelectorAll('.project-item, .archive-item, .photo-cell').forEach(el => {
    el.addEventListener('mouseenter', () => set('is-hover', el.dataset.label || 'Bekijken'));
    el.addEventListener('mouseleave', () => set(''));
  });
}

/* ── LOADER ─────────────────────────────────────────────────────── */
const loader = document.getElementById('loader');
window.addEventListener('load', () => {
  setTimeout(() => {
    if (loader) loader.classList.add('hidden');
    document.body.classList.remove('noscroll');
  }, 2000);
});

/* ── SCROLL PROGRESS ────────────────────────────────────────────── */
const progress = document.getElementById('progress');
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
  if (progress) progress.style.width = pct + '%';
  if (nav) nav.classList.toggle('is-solid', window.scrollY > 60);
  // Active nav links
  let current = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

/* ── HAMBURGER ──────────────────────────────────────────────────── */
const hbg  = document.getElementById('hbg');
const menu = document.getElementById('mobile-menu');
const closeMenu = () => {
  hbg?.classList.remove('open');
  menu?.classList.remove('open');
  hbg?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};
hbg?.addEventListener('click', () => {
  const open = hbg.classList.toggle('open');
  menu?.classList.toggle('open', open);
  hbg.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

/* ── PAGE TRANSITION ────────────────────────────────────────────── */
const wipe = document.getElementById('page-wipe');
document.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto') ||
      href.startsWith('tel') || a.target === '_blank' ||
      href.startsWith('http') || href.endsWith('.pdf') || href.endsWith('.zip')) return;
  a.addEventListener('click', e => {
    e.preventDefault();
    closeMenu();
    if (wipe) wipe.classList.add('entering');
    setTimeout(() => window.location.href = href, 450);
  });
});
window.addEventListener('pageshow', () => {
  if (!wipe) return;
  wipe.classList.remove('entering');
  wipe.classList.add('leaving');
  setTimeout(() => wipe.classList.remove('leaving'), 450);
});

/* ── SCROLL REVEALS ─────────────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('show');
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fu').forEach(el => revealObs.observe(el));

/* Interstitial parallax */
const intEls = document.querySelectorAll('.interstitial');
const intObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in-view'); intObs.unobserve(e.target); }
  });
}, { threshold: 0.08 });
intEls.forEach(el => intObs.observe(el));

window.addEventListener('scroll', () => {
  intEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const pct = -rect.top / window.innerHeight;
      const img = el.querySelector('img');
      if (img) img.style.transform = `scale(1.04) translateY(${pct * 25}px)`;
    }
  });
}, { passive: true });

/* Footer rl animation */
const footObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.rl-line').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.12) + 's';
      el.classList.add('rl-show');
    });
    footObs.unobserve(e.target);
  });
}, { threshold: 0.2 });
document.querySelectorAll('.footer-big').forEach(el => footObs.observe(el));

/* ── MARQUEE ─────────────────────────────────────────────────────── */
const mqTrack = document.querySelector('.marquee-track');
if (mqTrack) {
  mqTrack.innerHTML += mqTrack.innerHTML;
}

/* ── PROJECT LIST (dynamic) ──────────────────────────────────────── */
const PROJECTS = [
  {
    num: '01', year: '2025',
    title: 'Beeld, Twijfel<br>&amp; Constructie',
    sub: 'Tentoonstellingsontwerp — S.M.A.K. Gent',
    tags: ['Branding', 'Print', 'Motion', 'Web'],
    href: 'project/smak.html',
    img: 'assets/smak/poster.jpg',
    alt: 'S.M.A.K. tentoonstellingsaffiche'
  },
  {
    num: '02', year: '2025',
    title: 'Project Disco',
    sub: 'Multimediaal — Editorial, Video &amp; Web',
    tags: ['Editorial', 'Motion', 'Web'],
    href: 'project/disco.html',
    img: 'assets/disco/spread.jpg',
    alt: 'Project Disco editorial spread'
  },
  {
    num: '03', year: '2025',
    title: 'Project Oostende',
    sub: 'Brand Identity — Visueel identiteitssysteem',
    tags: ['Branding', 'Identity', 'Print'],
    href: 'project/oostende.html',
    img: 'assets/oostende/styleguide.jpg',
    alt: 'Project Oostende styleguide'
  }
];

const plist = document.getElementById('project-list');
if (plist) {
  PROJECTS.forEach((p, i) => {
    const tags = p.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    const item = document.createElement('a');
    item.className = 'project-item fu';
    item.href = p.href;
    item.style.setProperty('--delay', (i * 0.1) + 's');
    item.setAttribute('aria-label', p.title.replace(/<[^>]+>/g, ''));
    item.innerHTML = `
      <span class="project-num">${p.num}</span>
      <div class="project-info">
        <div class="project-tags">${tags}</div>
        <div class="project-title">${p.title}</div>
        <div class="project-sub">${p.sub}</div>
        <div class="project-year">${p.year}</div>
      </div>
      <div class="project-thumb">
        <img src="${p.img}" alt="${p.alt}" loading="lazy" decoding="async">
      </div>`;
    plist.appendChild(item);
    revealObs.observe(item);
    item.addEventListener('mouseenter', () => {
      if (cur) { cur.className = 'is-hover'; const l = cur.querySelector('.cursor-label'); if (l) l.textContent = 'Bekijken'; }
    });
    item.addEventListener('mouseleave', () => { if (cur) cur.className = ''; });
  });
}

/* ── ARCHIVE GRID ───────────────────────────────────────────────── */
const ARCHIVE = [
  { img: 'assets/algemeen/travis-scott.jpg',    name: 'Travis Scott Poster',  type: 'Typografische Poster' },
  { img: 'assets/algemeen/silent-spring.jpg',   name: 'Silent Spring',         type: 'Grafische Compositie' },
  { img: 'assets/algemeen/waveform-ticket.jpg', name: 'Waveform Ticket',       type: 'Drukwerk' },
  { img: 'assets/algemeen/english-breakfast.jpg',name:'English Breakfast',     type: 'Illustratieve Poster' },
  { img: 'assets/algemeen/verbondenheid.jpg',   name: 'Verbondenheid',         type: 'Conceptuele Poster' },
  { img: 'assets/algemeen/kaart-vis.jpg',       name: 'Visitekaartje',         type: 'Drukwerk · Kaart' },
  { img: 'assets/algemeen/afonso-logo.jpg',     name: 'Personal Branding',     type: 'Logo · Identiteit' },
];

const agrid = document.getElementById('archive-grid');
if (agrid) {
  ARCHIVE.forEach((a, i) => {
    const el = document.createElement('div');
    el.className = 'archive-item fu';
    el.style.setProperty('--delay', (i * 0.055) + 's');
    el.innerHTML = `
      <div class="archive-thumb">
        <img src="${a.img}" alt="${a.name}" loading="lazy" decoding="async">
      </div>
      <div class="archive-info">
        <div class="archive-name">${a.name}</div>
        <div class="archive-type">${a.type}</div>
      </div>`;
    agrid.appendChild(el);
    revealObs.observe(el);
    el.addEventListener('mouseenter', () => { if (cur) { cur.className = 'is-hover'; const l = cur.querySelector('.cursor-label'); if (l) l.textContent = 'Zien'; } });
    el.addEventListener('mouseleave', () => { if (cur) cur.className = ''; });
  });
}

/* ── PHOTOGRAPHY ─────────────────────────────────────────────────── */
const PHOTOS = [
  { src: 'assets/fotografie/foto1.jpg',     alt: 'Straatfotografie',      tall: true  },
  { src: 'assets/fotografie/foto3.jpg',     alt: 'Sfeerbeelden'                       },
  { src: 'assets/fotografie/foto2.jpg',     alt: 'Licht en compositie'                },
  { src: 'assets/fotografie/foto_9335.jpg', alt: 'Straatfoto Gent'                    },
  { src: 'assets/fotografie/foto4.jpg',     alt: 'Detail en textuur'                  },
  { src: 'assets/fotografie/foto_9358.jpg', alt: 'Architectuurstudie'                 },
  { src: 'assets/misc/woordwolk.jpg',       alt: 'Woordwolk — Illustrator', tall: true },
  { src: 'assets/fotografie/foto_9421.jpg', alt: 'Fotostudie'                         },
  { src: 'assets/fotografie/foto_9460.jpg', alt: 'Kleur en sfeer'                     },
];

const mosaic = document.getElementById('photo-mosaic');
if (mosaic) {
  PHOTOS.forEach(p => {
    const cell = document.createElement('div');
    cell.className = 'photo-cell fu' + (p.tall ? ' tall' : '');
    cell.innerHTML = `<img src="${p.src}" alt="${p.alt}" loading="lazy" decoding="async">`;
    mosaic.appendChild(cell);
    revealObs.observe(cell);
  });
}

/* ── FORM ────────────────────────────────────────────────────────── */
const form   = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form && status) {
  const fn  = document.getElementById('fn');
  const fe  = document.getElementById('fe');
  const fm  = document.getElementById('fm');
  [fn, fe, fm].forEach(el => el?.addEventListener('input', () => el.closest('.field')?.classList.remove('has-error')));
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    const check = (el, test) => {
      const pass = test(el?.value.trim() || '');
      el?.closest('.field')?.classList.toggle('has-error', !pass);
      if (!pass) ok = false;
    };
    check(fn, v => v.length > 0);
    check(fe, v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    check(fm, v => v.length > 0);
    if (!ok) return;
    const btn = document.getElementById('submit-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Verzenden…'; }
    setTimeout(() => {
      status.innerHTML = '<span class="status-ok">✓ Bericht ontvangen — ik neem zo snel mogelijk contact op.</span>';
      form.reset();
      if (btn) { btn.disabled = false; btn.textContent = 'Bericht versturen'; }
    }, 900);
  });
}

/* ── LIGHTBOX ────────────────────────────────────────────────────── */
const lb    = document.getElementById('lightbox');
const lbImg = lb?.querySelector('.lb-img');
const lbCap = lb?.querySelector('.lb-cap');
let lbAll = [], lbIdx = 0;

const lbOpen = i => {
  if (!lb || !lbImg) return;
  lbIdx = i;
  lbImg.src = lbAll[i].src;
  lbImg.alt = lbAll[i].alt;
  if (lbCap) lbCap.textContent = lbAll[i].alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
};
const lbClose = () => { lb?.classList.remove('open'); document.body.style.overflow = ''; };
const lbNav = d => {
  lbIdx = (lbIdx + d + lbAll.length) % lbAll.length;
  if (lbImg) {
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = lbAll[lbIdx].src;
      lbImg.alt = lbAll[lbIdx].alt;
      if (lbCap) lbCap.textContent = lbAll[lbIdx].alt;
      lbImg.style.opacity = '1';
    }, 150);
  }
};
function initLb() {
  const els = document.querySelectorAll('[data-lightbox]');
  lbAll = Array.from(els).map(el => ({ src: el.src, alt: el.alt }));
  els.forEach((el, i) => { el.style.cursor = 'none'; el.addEventListener('click', () => lbOpen(i)); });
}
if (lb) {
  lb.querySelector('.lb-close')?.addEventListener('click', lbClose);
  lb.querySelector('.lb-prev')?.addEventListener('click', () => lbNav(-1));
  lb.querySelector('.lb-next')?.addEventListener('click', () => lbNav(1));
  lb.addEventListener('click', e => { if (e.target === lb) lbClose(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowLeft') lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
  });
}
initLb();
