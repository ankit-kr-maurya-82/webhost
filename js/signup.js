(function () {
  const form = document.getElementById("signup-form");
  const message = document.getElementById("form-message");

  if (!form || !message) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    message.className = "message";

    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const terms = document.getElementById("terms");

    if (!fullName || !email || !password || !confirmPassword) {
      message.textContent = "Please fill in all fields.";
      message.classList.add("error");
      return;
    }

    if (password.length < 8) {
      message.textContent = "Password must be at least 8 characters.";
      message.classList.add("error");
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match.";
      message.classList.add("error");
      return;
    }

    if (!terms || !terms.checked) {
      message.textContent = "Please accept the terms to continue.";
      message.classList.add("error");
      return;
    }

    message.textContent = "Account created successfully. Redirecting to dashboard...";
    message.classList.add("success");

    setTimeout(function () {
      window.location.href = "dashboard.html";
    }, 1000);
  });
})();
