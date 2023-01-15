$(document).ready(function () {
  $("content").fadeIn("1000"); // Fade in content
  $("nav li.active").animate(
    // Animate active nav item
    { top: "-15px" },
    300
  );

  // Wait until images load to do page height animation
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

      localStorage.setItem("startingHeight", newHeight); // Store height for next page
    });

  $(window).resize(function () {
    newHeight = $("#container").height("auto").height();
    localStorage.setItem("startingHeight", newHeight); // Store height for next page
  });

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
