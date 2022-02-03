/* scrolToLink */
function scrolToLink() {
  $("a.scroll-link").click(function () {
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    $("html, body")
      .stop()
      .animate({ scrollTop: destination - $(".header").outerHeight() }, 600);
  });
}
scrolToLink();