(function () {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const statEls = document.querySelectorAll(".stat-value");
  statEls.forEach((el) => {
    const target = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || "";
    const isPadded = target < 10;
    let value = 0;
    const step = Math.max(1, Math.ceil(target / 25));

    const timer = setInterval(() => {
      value += step;
      if (value >= target) {
        value = target;
        clearInterval(timer);
      }

      const display = isPadded ? String(value).padStart(2, "0") : String(value);
      el.textContent = display + suffix;
    }, 24);
  });

  const exploreLink = document.getElementById("explore-link");
  if (exploreLink) {
    exploreLink.addEventListener("click", function () {
      console.log("Navigating to Explore Feed...");
    });
  }
})();
