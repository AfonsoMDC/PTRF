/* Afonso Matos da Cruz — project.js */
'use strict';

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

/* Cursor */
const cur = document.getElementById('cursor');
if (cur && window.matchMedia('(pointer: fine)').matches) {
  let tx = -200, ty = -200, cx = -200, cy = -200;
  document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
  (function tick() {
    cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
    cur.style.left = cx + 'px'; cur.style.top = cy + 'px';
    requestAnimationFrame(tick);
  })();
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cur.className = 'is-link');
    el.addEventListener('mouseleave', () => cur.className = '');
  });
}

/* Loader */
const loader = document.getElementById('loader');
window.addEventListener('load', () => {
  setTimeout(() => { if (loader) loader.classList.add('hidden'); document.body.classList.remove('noscroll'); }, 1400);
});

/* Scroll + Nav */
const progress = document.getElementById('progress');
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  if (progress) progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  if (nav) nav.classList.toggle('is-solid', window.scrollY > 60);
}, { passive: true });

/* Hamburger */
const hbg = document.getElementById('hbg');
const mob = document.getElementById('mobile-menu');
const closeMenu = () => {
  hbg?.classList.remove('open'); mob?.classList.remove('open');
  hbg?.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
};
hbg?.addEventListener('click', () => {
  const o = hbg.classList.toggle('open');
  mob?.classList.toggle('open', o);
  hbg.setAttribute('aria-expanded', String(o));
  document.body.style.overflow = o ? 'hidden' : '';
});
mob?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

/* Page transition */
const wipe = document.getElementById('page-wipe');
document.querySelectorAll('a[href]').forEach(a => {
  const h = a.getAttribute('href');
  if (!h || h.startsWith('#') || h.startsWith('mailto') || h.startsWith('tel') ||
      a.target === '_blank' || h.startsWith('http') || h.endsWith('.pdf')) return;
  a.addEventListener('click', e => {
    e.preventDefault(); closeMenu();
    if (wipe) wipe.classList.add('entering');
    setTimeout(() => window.location.href = h, 450);
  });
});
window.addEventListener('pageshow', () => {
  if (!wipe) return;
  wipe.classList.remove('entering'); wipe.classList.add('leaving');
  setTimeout(() => wipe.classList.remove('leaving'), 450);
});

/* Reveals */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (!e.isIntersecting) return; e.target.classList.add('show'); revObs.unobserve(e.target); });
}, { threshold: 0.1, rootMargin: '0px 0px -25px 0px' });
document.querySelectorAll('.fu').forEach(el => revObs.observe(el));

/* Slideshow */
document.querySelectorAll('.slideshow').forEach(ss => {
  const slides = ss.querySelectorAll('.slide');
  const dots   = ss.querySelectorAll('.slide-dot');
  const count  = ss.querySelector('.slide-count');
  let cur = 0;
  const go = n => {
    slides[cur].classList.remove('active'); if (dots[cur]) dots[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active'); if (dots[cur]) dots[cur].classList.add('active');
    if (count) count.textContent = String(cur + 1).padStart(2,'0') + ' / ' + String(slides.length).padStart(2,'0');
  };
  ss.querySelector('.slide-btn-p')?.addEventListener('click', () => go(cur - 1));
  ss.querySelector('.slide-btn-n')?.addEventListener('click', () => go(cur + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
});

/* Lightbox */
const lb = document.getElementById('lightbox');
const lbImg = lb?.querySelector('.lb-img');
const lbCap = lb?.querySelector('.lb-cap');
let lbAll = [], lbIdx = 0;
function buildLb() {
  const els = document.querySelectorAll('[data-lightbox]');
  lbAll = Array.from(els).map(e => ({ src: e.src, alt: e.alt }));
  els.forEach((el, i) => { el.style.cursor = 'none'; el.addEventListener('click', () => open(i)); });
}
const open = i => {
  if (!lb || !lbImg) return;
  lbIdx = i; lbImg.src = lbAll[i].src; lbImg.alt = lbAll[i].alt;
  if (lbCap) lbCap.textContent = lbAll[i].alt;
  lb.classList.add('open'); document.body.style.overflow = 'hidden';
};
const close = () => { lb?.classList.remove('open'); document.body.style.overflow = ''; };
const nav2 = d => {
  lbIdx = (lbIdx + d + lbAll.length) % lbAll.length;
  if (lbImg) { lbImg.style.opacity = '0'; setTimeout(() => { lbImg.src = lbAll[lbIdx].src; lbImg.alt = lbAll[lbIdx].alt; if (lbCap) lbCap.textContent = lbAll[lbIdx].alt; lbImg.style.opacity = '1'; }, 150); }
};
if (lb) {
  lb.querySelector('.lb-close')?.addEventListener('click', close);
  lb.querySelector('.lb-prev')?.addEventListener('click', () => nav2(-1));
  lb.querySelector('.lb-next')?.addEventListener('click', () => nav2(1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') nav2(-1);
    if (e.key === 'ArrowRight') nav2(1);
  });
  if (lbImg) lbImg.style.transition = 'opacity .15s';
}
buildLb();
