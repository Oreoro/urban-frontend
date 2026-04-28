// =============================================================
// Maggie App — Homepage Interactions
// =============================================================
(() => {
    const ready = (fn) =>
        document.readyState !== 'loading'
            ? fn()
            : document.addEventListener('DOMContentLoaded', fn);

    // -------------------------------------------------------------
    // Inject runtime CSS for reveal + ripple + drawer
    // -------------------------------------------------------------
    const injectRuntimeCSS = () => {
        const s = document.createElement('style');
        s.textContent = `
      .pre-reveal{
        opacity:0;transform:translateY(30px);
        transition:opacity .7s ease, transform .7s ease;
      }
      .revealed{opacity:1;transform:none}

      .pill,.store-btn{position:relative;overflow:hidden}
      .ripple{
        position:absolute;width:8px;height:8px;
        background:rgba(255,255,255,.55);
        border-radius:50%;transform:translate(-50%,-50%);
        animation:rip .6s ease-out forwards;pointer-events:none;
      }
      @keyframes rip{to{width:320px;height:320px;opacity:0}}

      body.menu-open .side-drawer{transform:translateX(0)}
      body.menu-open .drawer-overlay{opacity:1;pointer-events:auto}
      .drawer-overlay{
        position:fixed;inset:0;background:rgba(0,0,0,.4);
        opacity:0;pointer-events:none;z-index:55;
        transition:opacity .25s ease;
      }
      .side-drawer{
        position:fixed;top:0;left:0;height:100vh;width:280px;
        background:#0F4D3A;color:#fff;
        padding:80px 24px 24px;z-index:60;
        transform:translateX(-100%);
        transition:transform .35s cubic-bezier(.2,.8,.2,1);
        box-shadow:6px 0 0 rgba(0,0,0,.1);
      }
      .side-drawer a{
        display:block;padding:14px 0;color:#fff;
        text-decoration:none;font-weight:900;
        text-transform:uppercase;letter-spacing:.5px;
        border-bottom:1px solid rgba(255,255,255,.15);
      }
      .side-drawer a:hover{color:#FFD93D}
      .drawer-close{
        position:absolute;top:16px;right:16px;
        background:transparent;border:none;color:#fff;
        font-size:28px;cursor:pointer;
      }
    `;
        document.head.appendChild(s);
    };

    // -------------------------------------------------------------
    // 1. Animated count-up for the stats section
    // -------------------------------------------------------------
    const initCounter = () => {
        const counter = document.querySelector('.count');
        if (!counter) return;
        const target = parseInt(counter.dataset.target || '500', 10);
        const duration = 1600;
        let startTs = null;

        const tick = (ts) => {
            if (!startTs) startTs = ts;
            const progress = Math.min((ts - startTs) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            counter.textContent = Math.floor(eased * target) + '+';
            if (progress < 1) requestAnimationFrame(tick);
        };

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        requestAnimationFrame(tick);
                        io.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );
        io.observe(counter);
    };

    // -------------------------------------------------------------
    // 2. Reveal-on-scroll for content blocks
    // -------------------------------------------------------------
    const initReveal = () => {
        const els = document.querySelectorAll(
            '.feature, .card, .mission blockquote, .stats h2, .with-maggie h2'
        );
        els.forEach((el) => el.classList.add('pre-reveal'));

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('revealed');
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        els.forEach((el) => io.observe(el));
    };

    // -------------------------------------------------------------
    // 3. Floating side menu (drawer)
    // -------------------------------------------------------------
    const initDrawer = () => {
        const fab = document.querySelector('.floating-menu');
        if (!fab) return;

        const overlay = document.createElement('div');
        overlay.className = 'drawer-overlay';

        const drawer = document.createElement('aside');
        drawer.className = 'side-drawer';
        drawer.innerHTML = `
      <button class="drawer-close" aria-label="Close menu">×</button>
      <a href="index.html">Home</a>
      <a href="faqs.html">FAQs</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <a href="forbusiness.html">Add Venue</a>
      <a href="policies.html">Policies</a>
    `;

        document.body.appendChild(overlay);
        document.body.appendChild(drawer);

        const open = () => document.body.classList.add('menu-open');
        const close = () => document.body.classList.remove('menu-open');
        const toggle = () => document.body.classList.toggle('menu-open');

        fab.addEventListener('click', toggle);
        overlay.addEventListener('click', close);
        drawer.querySelector('.drawer-close').addEventListener('click', close);
        drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') close();
        });
    };

    // -------------------------------------------------------------
    // 4. Ripple micro-interaction on pills & store buttons
    // -------------------------------------------------------------
    const initRipple = () => {
        document.querySelectorAll('.pill, .store-btn').forEach((btn) => {
            btn.addEventListener('click', function (e) {
                const r = document.createElement('span');
                r.className = 'ripple';
                const rect = this.getBoundingClientRect();
                r.style.left = e.clientX - rect.left + 'px';
                r.style.top = e.clientY - rect.top + 'px';
                this.appendChild(r);
                setTimeout(() => r.remove(), 600);
            });
        });
    };

    // -------------------------------------------------------------
    // 5. Subtle parallax on hero phone mockups
    // -------------------------------------------------------------
    const initParallax = () => {
        const phones = document.querySelectorAll('.phone');
        if (!phones.length) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let raf = null;
        const onMove = (e) => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                phones.forEach((p, i) => {
                    const factor = (i + 1) * 0.4;
                    p.style.translate = `${x * factor}px ${y * factor}px`;
                });
                raf = null;
            });
        };
        window.addEventListener('mousemove', onMove, { passive: true });
    };

    // -------------------------------------------------------------
    // 6. Sticky nav shadow on scroll
    // -------------------------------------------------------------
    const initStickyNav = () => {
        const nav = document.querySelector('.nav');
        if (!nav) return;
        const onScroll = () => {
            nav.style.boxShadow = window.scrollY > 12
                ? '0 4px 0 rgba(15,77,58,.15)'
                : 'none';
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    };

    // -------------------------------------------------------------
    // 7. Smooth scroll for in-page anchors
    // -------------------------------------------------------------
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach((a) => {
            a.addEventListener('click', (e) => {
                const id = a.getAttribute('href');
                if (id.length < 2) return;
                const target = document.querySelector(id);
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    };

    // -------------------------------------------------------------
    // 8. Easter egg — Maggie ghost wink on logo click
    // -------------------------------------------------------------
    const initLogoWink = () => {
        const ghost = document.querySelector('.logo .ghost');
        if (!ghost) return;
        ghost.addEventListener('click', (e) => {
            e.preventDefault();
            ghost.animate(
                [
                    { transform: 'translateY(0) rotate(0)' },
                    { transform: 'translateY(-14px) rotate(-8deg)' },
                    { transform: 'translateY(0) rotate(0)' },
                ],
                { duration: 600, easing: 'cubic-bezier(.2,.8,.2,1)' }
            );
        });
    };

    // -------------------------------------------------------------
    // BOOT
    // -------------------------------------------------------------
    ready(() => {
        injectRuntimeCSS();
        initCounter();
        initReveal();
        initDrawer();
        initRipple();
        initParallax();
        initStickyNav();
        initSmoothScroll();
        initLogoWink();
        console.log('%cMaggie ✨ ready', 'color:#0F4D3A;font-weight:bold');
    });
})();