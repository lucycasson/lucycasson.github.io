$(document).ready(function () {
  // GALLERY
  var $grid = $(".grid").imagesLoaded(function () {
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
