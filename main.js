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
});

onbeforeunload = function () {
  $("content").fadeOut("1000"); // Fade out content
}; // TODO: Fix this (Delay loading of next page until fade out is complete)
