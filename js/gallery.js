(function () {
  const chips = Array.from(document.querySelectorAll(".chip"));
  const photos = Array.from(document.querySelectorAll(".photo"));
  if (!chips.length || !photos.length) return;

  function applyFilter(filter) {
    photos.forEach(function (photo) {
      const show = filter === "all" || photo.dataset.category === filter;
      photo.classList.toggle("hidden", !show);
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (btn) {
        btn.classList.remove("active");
      });
      chip.classList.add("active");
      applyFilter(chip.dataset.filter || "all");
    });
  });
})();
