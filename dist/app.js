const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuButton = document.getElementById("mobile-menu-button");
mobileMenuButton.addEventListener("click", () =>
  mobileMenu.classList.toggle("hidden")
);
