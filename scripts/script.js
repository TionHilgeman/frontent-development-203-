let menu = document.querySelector("#menu");
let menuCloseButton = document.querySelector("#close-menu");
let menuOpenButton = document.querySelector("#open-menu");

function closeMenu() {
  menu.style.left = "-9999em";
}

function openMenu() {
  menu.style.left = "0";
}

menuCloseButton.addEventListener("click", closeMenu)
menuOpenButton.addEventListener("click", openMenu)

