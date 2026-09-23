/* hamza iqbal — site script
   theme toggle · pixel star field · reveal-on-scroll · hero typewriter */
(function () {
  'use strict';

  var html = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- theme ---------- */
  function currentTheme() { return html.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
  function setTheme(t, persist) {
    html.setAttribute('data-theme', t);
    if (persist) { try { localStorage.setItem('theme', t); } catch (e) { /* private mode etc. */ } }
    document.dispatchEvent(new CustomEvent('themechange', { detail: t }));
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-theme-toggle]'), function (btn) {
    btn.addEventListener('click', function () { setTheme(currentTheme() === 'dark' ? 'light' : 'dark', true); });
  });

  /* ---------- active nav ---------- */
  var page = document.body.getAttribute('data-page');
  if (page) {
    Array.prototype.forEach.call(document.querySelectorAll('.nav a[data-nav]'), function (a) {
      if (a.getAttribute('data-nav') === page) a.classList.add('active');
    });
  }

  /* ---------- reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    Array.prototype.forEach.call(reveals, function (el, i) {
      el.style.transitionDelay = (Math.min(i % 5, 4) * 70) + 'ms';
      io.observe(el);
    });
  } else {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('in'); });
  }

  /* ---------- typewriter ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-type]'), function (el) {
    var text = el.getAttribute('data-type');
    if (reduce) { el.textContent = text; el.classList.add('done'); return; }
    el.textContent = '';
    var i = 0;
    function tick() {
      i += 1;
      el.textContent = text.slice(0, i);
      if (i < text.length) setTimeout(tick, 30 + Math.random() * 45);
      else el.classList.add('done');
    }
    setTimeout(tick, 450);
  });

  /* ---------- footer year ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- star field ---------- */
  var canvas = document.getElementById('sky');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var W = 0, H = 0, stars = [], raf = null, running = false;
  var scrollY = window.scrollY || 0, mx = 0, my = 0, tx = 0, ty = 0;
  var meteor = null, nextMeteor = 0;

  function seed() {
    var n = Math.min(300, Math.round((W * H) / 7500));
    stars = [];
    for (var i = 0; i < n; i++) {
      var z = Math.random();                       // depth: 0 far .. 1 near
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        z: z,
        s: z < 0.72 ? 1 : (z < 0.93 ? 2 : 3),      // pixel size
        a: 0.22 + Math.random() * 0.6,
        ph: Math.random() * Math.PI * 2,
        sp: 0.35 + Math.random() * 1.1,
        c: Math.random() < 0.16 ? '#ffe2a6' : (Math.random() < 0.3 ? '#d9e6ff' : '#ffffff')
      });
    }
  }

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function draw(t) {
    var time = t / 1000;
    ctx.clearRect(0, 0, W, H);
    tx += (mx - tx) * 0.05; ty += (my - ty) * 0.05;

    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var px = s.x + tx * (3 + s.z * 9);
      var py = s.y - scrollY * (0.04 + s.z * 0.16) + ty * (3 + s.z * 9);
      py = ((py % H) + H) % H;
      px = ((px % W) + W) % W;
      var tw = reduce ? 1 : (0.72 + 0.28 * Math.sin(time * s.sp + s.ph));
      var X = Math.round(px), Y = Math.round(py);
      ctx.globalAlpha = s.a * tw;
      ctx.fillStyle = s.c;
      ctx.fillRect(X, Y, s.s, s.s);
      if (s.s === 3) {                              // a small sparkle cross on the brightest few
        ctx.globalAlpha = s.a * tw * 0.45;
        ctx.fillRect(X - 2, Y + 1, 7, 1);
        ctx.fillRect(X + 1, Y - 2, 1, 7);
      }
    }
    ctx.globalAlpha = 1;

    if (!reduce) {
      if (!meteor && time > nextMeteor) {
        meteor = { x: W * (0.1 + Math.random() * 0.6), y: H * (0.05 + Math.random() * 0.3),
                   vx: 8 + Math.random() * 4, vy: 3.5 + Math.random() * 2, life: 0, max: 50 + Math.random() * 25 };
      }
      if (meteor) {
        meteor.life += 1;
        meteor.x += meteor.vx; meteor.y += meteor.vy;
        var fade = Math.sin(Math.PI * meteor.life / meteor.max);
        var x2 = meteor.x - meteor.vx * 9, y2 = meteor.y - meteor.vy * 9;
        var g = ctx.createLinearGradient(meteor.x, meteor.y, x2, y2);
        g.addColorStop(0, 'rgba(255,255,255,' + (0.85 * fade).toFixed(3) + ')');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(meteor.x, meteor.y); ctx.lineTo(x2, y2); ctx.stroke();
        if (meteor.life >= meteor.max || meteor.x > W + 120 || meteor.y > H + 120) {
          meteor = null; nextMeteor = time + 14 + Math.random() * 26;
        }
      }
    }
  }

  function loop(t) {
    if (!running) return;
    draw(t);
    if (reduce) { running = false; return; }        // one static frame is enough
    raf = requestAnimationFrame(loop);
  }
  function start() { if (running) return; running = true; raf = requestAnimationFrame(loop); }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; }
  function isDark() { return currentTheme() === 'dark'; }

  var rt = null;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { resize(); if (isDark()) { stop(); start(); } }, 150);
  });
  window.addEventListener('scroll', function () {
    scrollY = window.scrollY || 0;
    if (reduce && isDark()) { running = true; loop(performance.now()); }
  }, { passive: true });
  window.addEventListener('pointermove', function (e) {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    mx = e.clientX / W - 0.5; my = e.clientY / H - 0.5;
  }, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else if (isDark()) start();
  });
  document.addEventListener('themechange', function () { if (isDark()) start(); else stop(); });

  nextMeteor = 5 + Math.random() * 10;
  resize();
  if (isDark()) start();
})();
