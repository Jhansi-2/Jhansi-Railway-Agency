/* ================================================================
   JHANSI RAILWAY BOOKING AGENCY
   JAVASCRIPT

   Frontend demonstration only.
   Login: any non-empty email/mobile + password -> index.html.
   Other forms: show a confirmation message on the page.
   ================================================================ */

/* ============================ PAGE START ====================== */
document.addEventListener("DOMContentLoaded", function () {
  setActiveNavigation();
  setupLogin();
  setupDemoForms();
  setCurrentYear();
});

/* ============================ NAVIGATION ====================== */
function setActiveNavigation() {
  const currentPage = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav a").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

/* ============================ LOGIN ============================ */
function setupLogin() {
  const form = document.getElementById("loginForm");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const message = document.getElementById("loginMessage");

    if (!email || !password) {
      message.textContent = "Please enter your email/mobile and password.";
      message.classList.add("show");
      return;
    }

    message.textContent = "Login successful. Opening home page...";
    message.classList.add("show");

    setTimeout(function () {
      window.location.href = "index.html";
    }, 400);
  });
}

/* ============================ DEMO FORMS ====================== */
function setupDemoForms() {
  document.querySelectorAll("[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const message = form.querySelector(".message");
      if (!message) return;

      message.textContent = "Submitted successfully. This is a frontend demonstration.";
      message.classList.add("show");
    });
  });
}

/* ============================ FOOTER YEAR ===================== */
function setCurrentYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}
