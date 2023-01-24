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
    });

  $(".card img").on("click", function () {
    var $duplicate = $(this).clone();
    $("body").append($duplicate);
    $duplicate.addClass("duplicate-image");
    setTimeout(function () {
      $duplicate.addClass("fade-in");
    }, 100);

    var $overlay = $('<div class="overlay"></div>');
    $("body").append($overlay);
    setTimeout(function () {
      $overlay.addClass("fade-in");
    }, 100);

    function removeOverlay() {
      var $duplicate = $(".duplicate-image");
      $duplicate.removeClass("fade-in");
      $overlay.removeClass("fade-in");
      setTimeout(function () {
        $duplicate.remove();
        $(".overlay").remove();
      }, 500);
    }

    $(document).on("keyup", function (event) {
      if (event.keyCode === 27) {
        removeOverlay();
      }
    });

    $(document).on("click", ".overlay", function (event) {
      removeOverlay();
    });
  });
});
