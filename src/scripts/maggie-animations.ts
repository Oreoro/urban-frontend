import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

function showWithoutMotion() {
  revealItems.forEach((item) => item.setAttribute("data-visible", "true"));
}

if (reduceMotion) {
  showWithoutMotion();
} else {
  // Carousel Dot Tracking
  const track = document.querySelector<HTMLElement>(".carousel-track");
  const dots = document.querySelectorAll<HTMLElement>(".nav-dot");
  
  if (track && dots.length > 0) {
    track.addEventListener("scroll", () => {
      const scrollPos = track.scrollLeft;
      const slideWidth = track.offsetWidth;
      const activeIndex = Math.round(scrollPos / slideWidth);
      
      dots.forEach((dot, i) => {
        dot.style.background = i === activeIndex ? "var(--color-ink)" : "var(--color-ink-faint)";
      });
    }, { passive: true });
    
    // Set initial dot
    dots[0].style.background = "var(--color-ink)";
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
    ScrollTrigger.create({
      trigger: countEl,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            countEl.textContent = Math.round(this.targets()[0].val).toLocaleString();
          }
        });
      }
    });
  }

  // Scroll reveal
  revealItems.forEach((el) => {
    el.setAttribute("data-visible", "true");
    gsap.fromTo(el, 
      { y: 40, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Overlap Card "Slide Up" Animation
  const overlapCards = gsap.utils.toArray<HTMLElement>(".section-overlap-card, .footer-cta, .section-origin-bg, .section-features");
  overlapCards.forEach((card) => {
    gsap.fromTo(card,
      { y: 60 },
      {
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 60%",
          scrub: 1
        }
      }
    );
  });

  // Mascot Face Parallax
  const mascotFaces = gsap.utils.toArray<HTMLElement>(".feature-card-face, .origin-face, .final-cta-face");
  mascotFaces.forEach((face) => {
    gsap.to(face, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: face.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // Continuous Marquee (if elements exist)
  const marqueeInner = document.querySelector<HTMLElement>(".marquee-inner");
  if (marqueeInner) {
    gsap.to(".marquee-inner", {
      xPercent: -10, // Slight movement
      ease: "none",
      scrollTrigger: {
        trigger: ".marquee-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
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

