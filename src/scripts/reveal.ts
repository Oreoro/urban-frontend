const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll("[data-reveal]").forEach((el, i) => {
  if (el instanceof HTMLElement) {
    el.style.setProperty("--reveal-delay", `${Math.min(i % 6, 5) * 60}ms`);
  }
  observer.observe(el);
});

const header = document.querySelector(".site-header");
const onScroll = () => {
  if (header) {
    window.scrollY > 4
      ? header.setAttribute("data-scrolled", "")
      : header.removeAttribute("data-scrolled");
  }
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
