$(document).ready(function () {
  $("content").fadeIn("1000"); // Fade in content
  $("nav li.active").animate(
    // Animate active nav item
    { top: "-15px" },
    300
  );

  // RELOADS PAGE ON RESIZE (just for gallery)
  var dwidth = $(window).width(); // Only on horizontal resize

  $(window).resize(function () {
    var wwidth = $(window).width();
    if (dwidth !== wwidth) {
      dwidth = $(window).width();
      location.reload();
    }
  });

  $(".grid").imagesLoaded(function () {
    // init Masonry after all images have loaded
    $(".grid").masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: ".grid-item",
      // use element for option
      columnWidth: ".grid-sizer",
      percentPosition: true,
      fitWidth: true,
    });
  });
});

onbeforeunload = function () {
  $("content").fadeOut("1000"); // Fade out content
}; // TODO: Fix this (Delay loading of next page until fade out is complete)
