$(document).ready(function () {
  // after submit button is clicked, redirect to the next page
  $("#submit").click(function () {
    // wait for 1 second before redirecting
    setTimeout(function () {
      $("content").fadeOut("1000"); // Fade out content

      $("#container").animate(
        // Animate height to auto height
        { height: 500 },
        250
      );
      window.location.href = "received.html";
    }, 1500);
  });
});
