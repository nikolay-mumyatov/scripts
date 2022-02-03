/* styleToScroll */
function styleToScroll() {
  const headerMenu = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    let scrollTop = $(window).scrollTop();
    if (scrollTop >= 1) {
      headerMenu.classList.add("header--active");
    } else {
      headerMenu.classList.remove("header--active");
    }
  });
}
styleToScroll();