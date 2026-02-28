(function () {
  document.documentElement.classList.add("js");

  const topStrip = document.querySelector(".top-strip");
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("topNav");
  if (!topStrip || !toggle || !nav) return;

  const mobileQuery = window.matchMedia("(max-width: 900px)");

  function setExpandedState(expanded) {
    topStrip.classList.toggle("open", expanded);
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  }

  function syncParentHeaderHeight() {
    try {
      if (!window.parent || window.parent === window) return;
      const root = window.parent.document.documentElement;
      if (!root) return;

      if (!mobileQuery.matches) {
        root.style.setProperty("--top-h", "104px");
        return;
      }

      const framePadding = 14;
      const height = Math.ceil(topStrip.getBoundingClientRect().height + framePadding);
      root.style.setProperty("--top-h", height + "px");
    } catch (e) {
      // Ignore cross-frame access failures.
    }
  }

  toggle.addEventListener("click", function () {
    const expanded = !topStrip.classList.contains("open");
    setExpandedState(expanded);
    requestAnimationFrame(syncParentHeaderHeight);
    setTimeout(syncParentHeaderHeight, 260);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (!mobileQuery.matches) return;
      setExpandedState(false);
      requestAnimationFrame(syncParentHeaderHeight);
    });
  });

  mobileQuery.addEventListener("change", function () {
    if (!mobileQuery.matches) setExpandedState(false);
    syncParentHeaderHeight();
  });

  window.addEventListener("load", syncParentHeaderHeight);
  window.addEventListener("resize", syncParentHeaderHeight);
  syncParentHeaderHeight();
})();
