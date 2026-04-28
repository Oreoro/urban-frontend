import { gsap } from "gsap";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

function showWithoutMotion() {
  revealItems.forEach((item) => item.setAttribute("data-visible", "true"));
}

if (reduceMotion) {
  showWithoutMotion();
} else {
  // Hero entrance
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (hero) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-eyebrow", { y: 16, opacity: 0, duration: 0.5 })
      .from(".hero-title", { y: 40, opacity: 0, duration: 0.7 }, "-=0.15")
      .from(".hero-section .cta-row", { y: 18, opacity: 0, duration: 0.5 }, "-=0.3");
  }

  // Floating items gentle animation
  document.querySelectorAll<HTMLElement>(".float-item").forEach((item, i) => {
    gsap.to(item, {
      y: `${(i % 2 === 0 ? -1 : 1) * 12}`,
      duration: 3 + i * 0.4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: i * 0.3
    });
  });

  // Counter animation for stats
  const countEl = document.querySelector<HTMLElement>("[data-count-target]");
  if (countEl) {
    const target = parseInt(countEl.dataset.countTarget || "0", 10);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to({ val: 0 }, {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: function () {
              countEl.textContent = Math.round(this.targets()[0].val).toLocaleString();
            }
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(countEl);
  }

  // Scroll reveal
  if ("IntersectionObserver" in window) {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.setAttribute("data-visible", "true");
          gsap.fromTo(el, { y: 28, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7,
            ease: "power3.out", overwrite: true
          });
          revealObs.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    revealItems.forEach((item) => revealObs.observe(item));
  } else {
    revealItems.forEach((item) => item.setAttribute("data-visible", "true"));
  }
}

// -------------------------------------------------------------
// MICRO-INTERACTIONS (Ripple, Logo Wink, Sticky Nav)
// -------------------------------------------------------------

// Ripple micro-interaction
document.querySelectorAll<HTMLElement>(".pill-button, .nav-link, .app-store-badge").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (reduceMotion) return;
    const r = document.createElement("span");
    r.className = "ripple";
    const rect = this.getBoundingClientRect();
    r.style.left = e.clientX - rect.left + "px";
    r.style.top = e.clientY - rect.top + "px";
    this.appendChild(r);
    setTimeout(() => r.remove(), 600);
  });
});

// Easter egg — Maggie ghost wink on logo click
const brandMark = document.querySelector<HTMLElement>(".brand-mark");
if (brandMark) {
  brandMark.addEventListener("click", (e) => {
    if (reduceMotion) return;
    // Don't prevent default so the link still works, just add animation to the child SVG/container if needed
    // Or animate the brand-mark itself
    brandMark.animate(
      [
        { transform: "translateY(0) rotate(0)" },
        { transform: "translateY(-10px) rotate(-8deg)" },
        { transform: "translateY(0) rotate(0)" }
      ],
      { duration: 600, easing: "cubic-bezier(.2,.8,.2,1)" }
    );
  });
}

// Sticky nav shadow
const header = document.querySelector<HTMLElement>(".site-header");
if (header) {
  const onScroll = () => {
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Mouse Parallax for phones
document.addEventListener("mousemove", (e) => {
  if (reduceMotion) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  
  document.querySelectorAll<HTMLElement>(".phone").forEach((phone, index) => {
    const speed = (index + 1) * 0.5;
    // getComputedStyle to maintain the CSS custom property --rot
    const rot = getComputedStyle(phone).getPropertyValue('--rot') || '';
    phone.style.transform = `translate(${x * speed}px, ${y * speed}px) ${rot}`;
  });
});
