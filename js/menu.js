const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".Header-nav");

let coin = 0;
burger.addEventListener("click", () => {
  if (coin === 0) {
    menu.classList += " faldian";
    coin = 1;
  } else {
    menu.classList = "Header-nav";
    coin = 0;
  }
});
