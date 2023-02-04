$(document).ready(function () {
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

  // Wait for images to load before creating scrolling divs
  $("#container")
    .imagesLoaded()
    .always(function () {
      // Create scrolling divs
      createScrollingDiv("scrollable");
      createScrollingDiv("scrollable2");
      createScrollingDiv("scrollable3");
    });

  // When the user clicks an image, clone it, add duplicate-image class, and fade the clone in
  $(".card img").on("click", function () {
    var $duplicate = $(this).clone();
    $("body").append($duplicate);
    $duplicate.addClass("duplicate-image");
    setTimeout(function () {
      $duplicate.addClass("fade-in");
    }, 100);

    // Append overlay to body and fade in
    var $overlay = $('<div class="overlay"></div>');
    $("body").append($overlay);
    setTimeout(function () {
      $overlay.addClass("fade-in");
    }, 100);

    // Remove overlay (and image duplicate) function
    function removeOverlay() {
      var $duplicate = $(".duplicate-image");
      $duplicate.removeClass("fade-in");
      $overlay.removeClass("fade-in");
      setTimeout(function () {
        $duplicate.remove();
        $(".overlay").remove();
      }, 500);
    }

    // Remove overlay on any key press
    $(document).keyup(function (e) {
      removeOverlay();
    });

    // Remove overlay when user clicks it
    $(document).on("click", ".overlay", function (event) {
      removeOverlay();
    });
  });
});
