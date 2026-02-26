(function () {
  const sidebar = document.getElementById("appSidebar");
  const btn = document.getElementById("toggleSidebar");
  const links = Array.from(document.querySelectorAll(".menu a"));

  // Keep old collapse behavior if toggle exists.
  if (sidebar && btn) {
    const key = "blueimg.sidebar.collapsed";
    const saved = localStorage.getItem(key);
    if (saved === "1") sidebar.classList.add("collapsed");

    btn.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
      localStorage.setItem(key, sidebar.classList.contains("collapsed") ? "1" : "0");
    });
  }

  if (!links.length) return;

  function setActiveByHref(pathname) {
    const current = pathname.split("/").pop() || "dashboard.html";
    let matched = false;

    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const isMatch = href === current;
      link.classList.toggle("active", isMatch);
      if (isMatch) matched = true;
    });

    if (!matched) {
      links[0].classList.add("active");
    }
  }

  // Initial state from parent mainFrame if available.
  try {
    if (window.parent && window.parent !== window && window.parent.frames["mainFrame"]) {
      const framePath = window.parent.frames["mainFrame"].location.pathname;
      setActiveByHref(framePath);
    } else {
      setActiveByHref(window.location.pathname);
    }
  } catch (e) {
    setActiveByHref(window.location.pathname);
  }

  // Update active immediately on click.
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
})();
