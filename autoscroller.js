$(document).ready(function () {
  $("content").fadeIn("1000"); // Fade in content
  $("nav li.active").animate(
    // Animate active nav item
    { top: "-15px" },
    300
  );

  // AUTOSCROLL FOR PROJECTS PAGE
  function createScrollingDiv(id) {
    const div = document.getElementById(id);
    var scrollWidth = div.scrollWidth;
    var animating = true;

    function scrollDiv() {
      if (animating == true) {
        if (div.scrollLeft > scrollWidth / 2) {
          div.scroll(0, 0);
        }
        div.scrollLeft += 2;
      }
    }

    // Pause the animation on hover
    $(`#${id}`).hover(
      function () {
        animating = false;
      },
      function () {
        animating = true;
      }
    );

    setInterval(scrollDiv, 20);
  }

  $("#container").animate(
    // Animate height to initial height
    { height: 1000 },
    1000
  );

  // Wait for images to load before creating scrolling divs
  $("#container")
    .imagesLoaded()
    .always(function () {
      // Create scrolling divs
      createScrollingDiv("scrollable");
      createScrollingDiv("scrollable2");
      $("#container").height(auto);
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
