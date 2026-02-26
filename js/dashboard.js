(function () {
  const dateEl = document.getElementById("live-date");
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  const counters = [
    { id: "boards-count", suffix: "" },
    { id: "pins-count", suffix: "" },
    { id: "views-count", suffix: "" },
    { id: "save-rate", suffix: "%" }
  ];

  counters.forEach((item) => {
    const el = document.getElementById(item.id);
    if (!el) return;

    const target = Number(el.dataset.target || 0);
    let value = 0;
    const step = Math.max(1, Math.ceil(target / 30));

    const timer = setInterval(() => {
      value += step;
      if (value >= target) {
        value = target;
        clearInterval(timer);
      }
      el.textContent = String(value) + item.suffix;
    }, 22);
  });

  const progress = 73;
  const fillEl = document.getElementById("goal-fill");
  const labelEl = document.getElementById("goal-label");
  if (fillEl) fillEl.style.width = progress + "%";
  if (labelEl) labelEl.textContent = progress + "%";
})();
