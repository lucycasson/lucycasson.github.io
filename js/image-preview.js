$(document).ready(function () {
    // When the user clicks an image, clone it, add duplicate-image class, and fade the clone in
    $(".card img, [class*='grid-item'] img").on("click", function () {
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
