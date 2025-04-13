document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("hamburger-button");
  const nav = document.getElementById("mobile-nav");
  if (button && nav) {
    button.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }
});