/* Scroll-reveal: fades + slides section content up as it enters the
   viewport, staggered per section. Progressive enhancement only — every
   element is visible by default until this adds the hidden starting
   state, and it does nothing at all under prefers-reduced-motion. */
(function () {
  "use strict";

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  var targets = document.querySelectorAll("main > section:not(.hero) > *");
  if (!targets.length) return;

  var sectionCounts = new WeakMap();
  targets.forEach(function (el) {
    var parent = el.parentElement;
    var count = sectionCounts.get(parent) || 0;
    el.style.transitionDelay = Math.min(count * 70, 280) + "ms";
    sectionCounts.set(parent, count + 1);
    el.classList.add("reveal-init");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach(function (el) { observer.observe(el); });
})();
