$(document).ready(function () {
  // RELOADS PAGE ON RESIZE (just for gallery)
  var dwidth = $(window).width(); // Only on horizontal resize
  $(window).resize(function () {
    var wwidth = $(window).width();
    if (dwidth !== wwidth) {
      dwidth = $(window).width();
      location.reload();
    }
  });

  $(".grid")
    .imagesLoaded()
    .always(function () {
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
