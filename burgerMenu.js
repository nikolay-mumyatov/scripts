/* Burger-menu */
function burgerMenu() {
  const burgerBtn = document.querySelector(".burger__menu"),
    burgerMenu = document.querySelector(".header__nav"),
    burgerLink = document.querySelectorAll(".header__link"),
    closeBtn = document.querySelector(".header__nav-close--img"),
    html = document.querySelector("html");

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.add("header__nav--active");
    html.classList.add("noscroll");
  });

  burgerMenu.addEventListener("click", (event) => {
    let target = event.target;
    if (target === closeBtn) {
      burgerMenu.classList.toggle("header__nav--active");
      html.classList.remove("noscroll");
    }
  });

  burgerLink.forEach((item) => {
    item.addEventListener("click", () => {
      burgerMenu.classList.toggle("header__nav--active");
      html.classList.remove("noscroll");
    });
  });
  
}
burgerMenu();