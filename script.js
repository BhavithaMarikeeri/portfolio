// jQuery is used for the responsive navigation menu.
$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    $(".nav-links").toggleClass("open");
  });

  // Close the mobile menu after a navigation link is selected.
  $(".nav-links a").on("click", function () {
    $(".nav-links").removeClass("open");
  });
});
