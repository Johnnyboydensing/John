/** @format */
AOS.init();

// for the hamburger menu
const hamburger_btn = document.querySelector(".ham-menu-btn");
const close = document.querySelector(".hamb2");
const ul = document.querySelector(".h-ul");

hamburger_btn.addEventListener("click", () => {
  ul.classList.add("active");
  hamburger_btn.style.zIndex = "0";
  ul.style.opacity = "1";
});

window.addEventListener("resize", () => {
  if (innerWidth >= 901) {
    ul.classList.add("active");
    hamburger_btn.style.zIndex = "0";
    ul.style.opacity = "1";
  }
});

close.addEventListener("click", () => {
  ul.classList.remove("active");
  hamburger_btn.style.zIndex = "1";
  ul.style.opacity = "0";
});
