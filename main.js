/**
 * Skylager.no — Main JavaScript
 * © 2026 IT-FIRMA — https://it-firma.no
 *
 * Moduler:
 * - Progress bar
 * - Header scroll effect
 * - FAQ accordion
 * - Scroll reveal (IntersectionObserver)
 * - Card hover glow
 * - Active nav tracking
 * - Performance: requestAnimationFrame, passive listeners
 */

(function () {
  'use strict';

  // ========================================
  // PROGRESS BAR
  // ========================================
  const pb = document.getElementById('pb');
  const hdr = document.querySelector('header');
  let scrollTick = false;

  function onScroll() {
    if (!scrollTick) {
      requestAnimationFrame(function () {
        const d = document.documentElement;
        const p = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
        if (pb) pb.style.width = Math.min(p, 100) + '%';
        if (hdr) {
          hdr.style.background = scrollY > 50
            ? 'rgba(6,9,24,.88)'
            : 'rgba(6,9,24,.6)';
        }
        scrollTick = false;
      });
      scrollTick = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ========================================
  // FAQ ACCORDION
  // ========================================
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      const item = this.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(function (el) {
        el.classList.remove('open');
      });

      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });

  // ========================================
  // SCROLL REVEAL
  // ========================================
  const revealElements = document.querySelectorAll('.rv');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('v');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: '0px 0px -80px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add('v');
    });
  }

  // ========================================
  // CARD HOVER GLOW
  // ========================================
  const glowCards = document.querySelectorAll('.fc, .gc, .eco-c');

  glowCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.background =
        'radial-gradient(circle 300px at ' + x + 'px ' + y + 'px, ' +
        'rgba(14,165,233,.035), rgba(255,255,255,.025) 50%, rgba(255,255,255,.025))';
    });

    card.addEventListener('mouseleave', function () {
      card.style.background = '';
    });
  });

  // ========================================
  // ACTIVE NAV TRACKING
  // ========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle(
                'act',
                link.getAttribute('href') === '#' + id
              );
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '-80px 0px -60% 0px' }
    );

    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  // ========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = hdr ? hdr.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

})();
