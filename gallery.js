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

  $("#container").animate(
    // Animate height to initial height
    { height: 3000 },
    1000
  );

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
      $("#container").height(auto); // BUG: This code is not executing (need decoy)
    });

  $(".inactive")
    .find("a")
    .on("click", function (event) {
      event.preventDefault(); // prevent the browser from following the link immediately
      // play animation
      $("nav li.active").animate(
        // Animate active nav item
        { top: "0px" },
        300
      );
      $("content").fadeOut("1000"); // Fade out content

      $("#container").animate(
        // Animate height to initial height
        { height: 600 },
        250
      );

      setTimeout(function () {
        window.location = event.target.href; // redirect the user to the link location after the animation
      }, 300);
    });
});
