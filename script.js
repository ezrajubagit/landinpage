const widthh = document.querySelector(".width");
const menuIcon = document.querySelector(".menu");
const showMenu = document.querySelector(".nav-links");
const dropdowntitle = document.querySelectorAll(".dropdown .title");
const dropdowntitleArrow = document.querySelectorAll(".dropdown .title img");
const showBody = document.querySelectorAll(".dropdown .body");
let boo = true;

menuIcon.addEventListener("click", function () {
  if (boo) {
    showMenu.style.left = "0";
  } else {
    showMenu.style.left = "-100%";
  }
  boo = !boo;
});

for (let i = 0; i < dropdowntitle.length; i++) {
  showBody[i].classList.add("toggle");
  dropdowntitle[i].addEventListener("click", function () {
    dropdowntitleArrow[i].classList.toggle("toggle-arrow");
    showBody[i].classList.toggle("toggle");
  });
}

window.addEventListener("resize", () => {
  widthh.textContent = window.innerWidth;
});
