const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
mobileMenuButton.addEventListener("click", () =>
  mobileMenu.classList.toggle("hidden")
);
