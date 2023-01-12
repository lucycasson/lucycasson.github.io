$(document).ready(function () {
  // AUTOSCROLL FOR PROJECTS PAGE
  function createScrollingDiv(id) {
    const div = document.getElementById(id);
    var scrollWidth = div.scrollWidth;
    var animating = true;
    console.log(scrollWidth);

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

  // Create scrolling divs
  createScrollingDiv("scrollable");
  createScrollingDiv("scrollable2");
});
