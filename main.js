$(document).ready(function () {
  $("content").fadeIn("500"); // fade in content
  $("nav li.active").animate(
    // animate active nav item
    { top: "-15px" },
    300
  );

  // Creates a clone div so we can animate out to auto height (animates clone then fades in real)

  var $originalDiv = $("#container");
  var offset = $originalDiv.offset();

  var $cloneDiv = $originalDiv.clone();
  $("body").append($cloneDiv);

  $cloneDiv.css({
    position: "absolute",
    top: offset.top - 8,
    "z-index": 100000,
  });
  $cloneDiv.height("500");

  $cloneDiv.css("visibility", "visible");
  $(".loading").css("opacity", "60%");

  $("#container") // wait until photos load, especially important for gallery
    .imagesLoaded()
    .always(function () {
      var newHeight = $originalDiv.height();

      $cloneDiv
        .animate(
          // animate height to auto height
          { height: newHeight },
          1000
        )
        .promise()
        .done(function () {
          $(".loading").fadeOut(400); // fade out loading animation
          setTimeout(function () {
            $originalDiv.css("visibility", "visible");
            $cloneDiv.fadeOut(400);
          }, 300);
        });
    });

  // ON CLICK TO NEW PAGE
  $(".inactive")
    .find("a")
    .on("click", function (event) {
      event.preventDefault(); // prevent the browser from following the link immediately
      // play animation
      $("nav li.active").animate(
        // animate active nav item
        { top: "0px" },
        300
      );

      $("content").fadeOut("1000"); // fade out content

      $("#container").animate(
        // animate height to auto height
        { height: 500 },
        250
      );

      setTimeout(function () {
        window.location = event.target.href; // redirect the user to the link location after the animation
      }, 300);
    });

  const emojis = [
    "😽",
    "🐶",
    "🐸",
    "🐈",
    "🐕",
    "🦢",
    "🐤",
    "🦆",
    "🐨",
    "🐰",
    "🐼",
    "🦊",
    "🐭",
    "🐴",
    "🐳",
    "🐬",
    "🦘",
    "🦒",
    "🦩",
    "🐑",
    "🦍",
    "🐷",
    "🙈",
    "🐧",
    "🐝",
    "🦄",
    "🐢",
    "🐡",
    "🐮",
    "🦋",
    "⭐️",
    "😍",
    "😋",
    "🥰",
    "👽",
    "💕",
    "💟",
    "💌",
    "💖",
    "💜",
    "🪴",
    "🌻",
    "🌿",
    "🌱",
    "🌵",
    "🍀",
    "🌸",
    "🌷",
    "🌺",
    "🍄",
    "🌼",
  ];
  var randomNo = Math.floor(Math.random() * 50);
  document.title = "LAIC Design " + emojis[randomNo];
});
