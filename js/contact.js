(function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");

  if (!form || !status) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.className = "status";

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      status.textContent = "Please fill in all fields.";
      status.classList.add("error");
      return;
    }

    status.textContent = "Message sent successfully. We will contact you soon.";
    status.classList.add("success");
    form.reset();
  });
})();
