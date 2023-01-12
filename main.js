$(document).ready(function () {
  $("content").fadeIn("1000"); // Fade in content
  $("nav li.active").animate(
    // Animate active nav item
    { top: "-15px" },
    300
  );

  // after submit button is clicked, redirect to the next page
  $("#submit").click(function () {
    // wait for 1 second before redirecting
    setTimeout(function () {
      window.location.href = "received.html";
    }, 1000);
  });

  // RELOADS PAGE ON RESIZE (FOR NOW)
  var dwidth = $(window).width();

  $(window).resize(function () {
    var wwidth = $(window).width();
    if (dwidth !== wwidth) {
      dwidth = $(window).width();
      location.reload();
    }
  });

  // Wait until images load to do page height animation
  var $grid = $(".grid").imagesLoaded(function () {
    let height = $("#container").height(); // Get auto height of container [CAN WE CALCULATE THIS WITHOUT SETTING IT?]
    $("#container").css("height", localStorage.getItem("startingHeight"));
    // Set height to stored height (from prev page)
    $("#container").animate(
      // Animate height to auto height
      { height: height },
      1000
    );
    localStorage.setItem("startingHeight", height); // Store height for next page
    // TODO: fix auto height of container on window resize WITHOUT RELOADING PAGE
  });
});

onbeforeunload = function () {
  $("content").fadeOut("1000"); // Fade out content
}; // TODO: Fix this (Delay loading of next page until fade out is complete)
