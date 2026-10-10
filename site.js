'use strict';
// Cover tablets using desktop-style user agents as well as phone browsers.
if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
  document.documentElement.classList.add('mobile-device');
}
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
function closeMenu(restoreFocus = false) {
  if (!menu || !nav) return;
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open menu');
  nav.classList.remove('active');
  if (restoreFocus) menu.focus();
}
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav.classList.toggle('active', open);
});
nav?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('header')) closeMenu(); });
document.addEventListener('focusin', event => { if (!event.target.closest('header')) closeMenu(); });
matchMedia('(min-width:801px)').addEventListener('change', () => closeMenu());
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#site-nav a').forEach(a => {
  if (a.getAttribute('href') === page || (page === 'index.html' && a.getAttribute('href') === '#home')) a.setAttribute('aria-current', 'page');
});
const modal = document.querySelector('#contactModal');
const contact = document.querySelector('#contactLink');
const close = document.querySelector('#closeModal');
function closeContact() {
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.style.overflow = '';
  contact?.focus();
}
contact?.addEventListener('click', event => {
  event.preventDefault();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  close.focus();
});
close?.addEventListener('click', closeContact);
modal?.addEventListener('click', event => { if (event.target === modal) closeContact(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (modal && !modal.hidden) closeContact();
    else if (menu?.getAttribute('aria-expanded') === 'true') closeMenu(true);
  }
  if (event.key === 'Tab' && modal && !modal.hidden) {
    const items = [...modal.querySelectorAll('a[href],button')];
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
// Content is visible by default, including when scripts or observers are unavailable.
if ('IntersectionObserver' in window) {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!motion.matches) entry.target.classList.add('reveal');
      reveal.unobserve(entry.target);
    }
  }), { threshold: .08 });
  document.querySelectorAll('.how-it-works-grid>div,.feature-item,.testimonial-item,.research-section').forEach(el => reveal.observe(el));
  const links = [...document.querySelectorAll('.research-toc a')];
  const reading = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => {
        if (a.hash === '#' + entry.target.id) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    }
  }), { rootMargin: '-10% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('.research-content h2[id]').forEach(el => reading.observe(el));
}
