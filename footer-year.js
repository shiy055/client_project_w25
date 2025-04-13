document.addEventListener("DOMContentLoaded", function () {
    const footerYearSpan = document.getElementById("footer-year");
    if (footerYearSpan) {
      footerYearSpan.textContent = new Date().getFullYear();
    }
  });