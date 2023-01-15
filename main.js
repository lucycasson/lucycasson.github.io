$(document).ready(function () {
  $("content").fadeIn("1000"); // Fade in content
  $("nav li.active").animate(
    // Animate active nav item
    { top: "-15px" },
    300
  );

  $("#container")
    .imagesLoaded()
    .always(function () {
      var $originalDiv = $("#container");
      var $cloneDiv = $originalDiv.clone();
      $cloneDiv.css("visibility", "hidden");
      $("body").append($cloneDiv);

      $cloneDiv.height("auto");
      var newHeight = $cloneDiv.height();
      console.log($cloneDiv.height());

      $cloneDiv.remove();

      $("#container").animate(
        // Animate height to auto height
        { height: newHeight },
        1000
      );
    });

  // after submit button is clicked, redirect to the next page
  $("#submit").click(function () {
    // wait for 1 second before redirecting
    setTimeout(function () {
      window.location.href = "received.html";
    }, 1000);
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
        // Animate height to auto height
        { height: 600 },
        250
      );

      setTimeout(function () {
        window.location = event.target.href; // redirect the user to the link location after the animation
      }, 300);
    });
});
