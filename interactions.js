(function(){
  'use strict';

  /* ── Scroll progress bar ──────────────────────────────── */
  var bar = document.createElement('div');
  bar.id = 'scroll-prog';
  document.body.appendChild(bar);
  window.addEventListener('scroll', function(){
    var d = document.documentElement;
    var pct = d.scrollTop / (d.scrollHeight - d.clientHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, {passive: true});

  /* ── Cursor glow (smooth lerp) ────────────────────────── */
  var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  var tx = cx, ty = cy;
  var glowEl = document.createElement('div');
  glowEl.id = 'cursor-glow';
  document.body.appendChild(glowEl);
  document.addEventListener('mousemove', function(e){ tx = e.clientX; ty = e.clientY; });
  (function loopGlow(){
    cx += (tx - cx) * 0.09;
    cy += (ty - cy) * 0.09;
    glowEl.style.left = cx + 'px';
    glowEl.style.top  = cy + 'px';
    requestAnimationFrame(loopGlow);
  })();

  /* ── 3D Card Tilt ─────────────────────────────────────── */
  function applyTilt(selector, maxDeg) {
    document.querySelectorAll(selector).forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        el.style.transition = 'transform 0.12s ease';
      });
      el.addEventListener('mousemove', function(e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left)  / r.width  - 0.5;
        var y = (e.clientY - r.top)   / r.height - 0.5;
        el.style.transform =
          'perspective(700px) ' +
          'rotateY(' + (x * maxDeg * 2) + 'deg) ' +
          'rotateX(' + (-y * maxDeg)    + 'deg) ' +
          'translateZ(8px)';
      });
      el.addEventListener('mouseleave', function() {
        el.style.transition = 'transform 0.45s ease';
        el.style.transform = '';
        setTimeout(function() { el.style.transition = ''; }, 450);
      });
    });
  }

  applyTilt('.card',               9);
  applyTilt('.pcard',              8);
  applyTilt('.pj-card',            7);
  applyTilt('.mvv-card',           8);
  applyTilt('.contact-info-card',  6);
  applyTilt('.hero-img-card',      10);
  applyTilt('.glance-card',        4);
  applyTilt('.brand-cell',         6);
  applyTilt('.svc-cell',           5);
  applyTilt('.stat-box',           5);
  applyTilt('.stat-item',          4);
  applyTilt('.svc-visual-card',    7);
  applyTilt('.diff-card',          6);
  applyTilt('.brand-card',         6);
  applyTilt('.mv-card',            5);

  /* ── Magnetic Buttons ─────────────────────────────────── */
  var MAGNET = 0.28;
  var magnetBtns = '.btn,.btn-quote-nav,.slide-btn,.btn-white,.btn-outline-w';
  document.querySelectorAll(magnetBtns).forEach(function(btn) {
    btn.addEventListener('mousemove', function(e) {
      var r = btn.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width  / 2) * MAGNET;
      var y = (e.clientY - r.top  - r.height / 2) * MAGNET;
      btn.style.transform = 'translate(' + x + 'px,' + y + 'px) translateY(-1px)';
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.transition = 'transform 0.35s ease';
      btn.style.transform = '';
      setTimeout(function() { btn.style.transition = ''; }, 350);
    });
  });

  /* ── Stagger children on scroll ───────────────────────── */
  var stObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      Array.from(e.target.children).forEach(function(child, i) {
        setTimeout(function() { child.classList.add('stagger-in'); }, i * 75);
      });
      stObs.unobserve(e.target);
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.stagger').forEach(function(el) { stObs.observe(el); });

  /* ── Glance card parallax on hover ───────────────────── */
  document.querySelectorAll('.glance-card').forEach(function(card) {
    var bg = card.querySelector('.glance-bg');
    if (!bg) return;
    card.addEventListener('mousemove', function(e) {
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width  - 0.5;
      var y = (e.clientY - r.top)  / r.height - 0.5;
      bg.style.transform = 'scale(1.08) translate(' + (x * 12) + 'px,' + (y * 8) + 'px)';
    });
    card.addEventListener('mouseleave', function() {
      bg.style.transform = '';
    });
  });

  /* ── Section heading reveal with word stagger ────────── */
  document.querySelectorAll('.section-title').forEach(function(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = '1';
    var text = el.innerHTML;
    var words = text.split(' ');
    el.innerHTML = words.map(function(w, i) {
      return '<span class="word-reveal" style="transition-delay:' + (i * 0.06) + 's">' + w + '&nbsp;</span>';
    }).join('');
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (!e.isIntersecting) return;
        el.querySelectorAll('.word-reveal').forEach(function(w) { w.classList.add('in'); });
        obs.unobserve(el);
      });
    }, { threshold: 0.3 });
    obs.observe(el);
  });

  /* ── Ripple effect on buttons ─────────────────────────── */
  document.querySelectorAll('.btn,.slide-btn,.btn-quote-nav,.btn-white,.btn-outline-w').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var r = btn.getBoundingClientRect();
      var ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      ripple.style.left = (e.clientX - r.left) + 'px';
      ripple.style.top  = (e.clientY - r.top)  + 'px';
      btn.appendChild(ripple);
      setTimeout(function() { ripple.remove(); }, 600);
    });
  });

  /* Note: no transform/parallax on .page-banner-bg — the videos are native
     16:9 and the hero boxes are 16:9, so any scale would crop/stretch them. */

  /* ── Header: transparent over the dark hero, solid over light content ── */
  (function(){
    var header = document.getElementById('site-header');
    if (!header) return;
    var hero = document.querySelector('.hero-v2, .page-banner');
    function update(){
      var trigger = hero
        ? (hero.offsetTop + hero.offsetHeight - header.offsetHeight)
        : 40;
      header.classList.toggle('solid', window.scrollY >= trigger);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
  })();

})();
