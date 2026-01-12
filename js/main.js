$(document).ready(function () {
  $("content").fadeIn("500"); // fade in content
  $("nav li.active").animate(
    // animate active nav item
    { top: "-15px" },
    300
  );

  function provideHapticFeedback() {
    // Check if the Vibration API is supported by the browser
    if ("vibrate" in navigator) {
      // Vibrate for 50 milliseconds, wait 25ms, then vibrate again for 10ms
      navigator.vibrate([50,25,10]);
    } else {
      // Fallback for browsers that don't support the Vibration API
      console.log("Vibration API not supported");
    }
  }
  
  // Attach the function to the 'click' event on the document body
  document.body.addEventListener("click", provideHapticFeedback);

  // Creates a clone div so we can animate out to auto height (animates clone then fades in real)

  var $originalDiv = $("#container");
  var offset = $originalDiv.offset();

  var $cloneDiv = $originalDiv.clone();
  $("body").append($cloneDiv);

  $cloneDiv.height("500");
  $cloneDiv.css({
    position: "absolute",
    top: offset.top - 8,
    "z-index": 100000,
  });

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
          250
        )
        .promise()
        .done(function () {
          $(".loading").fadeOut(400); // fade out loading animation
          setTimeout(function () {
            $originalDiv.css("visibility", "visible");
            $cloneDiv.fadeOut(300);
          }, 300);

          // Now that this page is loaded, we can preload other page images so they load faster
          loadScript("service-worker.js", function() {
            console.log("Service worker loaded successfully.");
          });
          
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

      $("content").fadeOut("50"); // fade out content

      $("#container")
        .animate(
          // animate height to auto height
          { height: 500 },
          250
        )
        .promise()
        .done(function () {
          setTimeout(function () {
            window.location = event.target.href; // redirect the user to the link location after the animation
          }, 50);
        });
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

// Create preload function
$.preload = function (imgs) {
  $(imgs).each(function () {
    $("<img />")[0].src = this;
  });
};

$(document).ready(function () {
  function animateSpark(spark, startX, startY, velocityX, velocityY, gravityAcceleration, opacity, duration) {
      velocityY += gravityAcceleration; // Apply gravity to Y velocity
      startX += velocityX;
      startY += velocityY;

      // Get the position of the spark relative to the viewport
      const sparkRect = spark[0].getBoundingClientRect();

      // Calculate the maximum allowed Y position (accounting for the window height and scroll position)
      const maxYPosition = $(window).height() + window.pageYOffset - sparkRect.height;
      const maxXPosition = $(window).width() - sparkRect.width;

      spark.css({ top: startY + "px", left: startX + "px", opacity: opacity });

      if (sparkRect.top < maxYPosition && sparkRect.left < maxXPosition && duration > 0) {
          opacity -= 0.01; // Reduce opacity incrementally
          requestAnimationFrame(function () {
              animateSpark(spark, startX, startY, velocityX, velocityY, gravityAcceleration, opacity, duration - 1);
          });
      } else {
          spark.remove();
      }
  }

  $(document).on("click", function (event) {
      const sparkContainer = $("#spark-container");

      // Get the mouse position
      const mouseX = event.clientX;
      const mouseY = event.clientY + window.pageYOffset; // Add the scroll position

      // Define an array of vibrant spark colors
      const sparkColors = [
          "#E57373", // Red
          "#F06292", // Pink
          "#BA68C8", // Purple
          "#9575CD", // Deep Purple
          "#64B5F6", // Blue
          "#4FC3F7", // Light Blue
          "#81C784", // Green
          "#DCE775", // Lime
          "#FFD54F", // Yellow
          "#FFB74D", // Orange
          "#FF8A65", // Deep Orange
      ];

      // Generate a random number of sparks between 5-15
      const numSparks = Math.floor(Math.random() * 11) + 5;

      // Create multiple sparks
      for (let i = 0; i < numSparks; i++) {
          // Create a spark at the mouse position
          const spark = $("<div>").addClass("spark");

          // Randomize spark size
          const sparkSize = Math.random() * 15 + 2; // Random size between 2 and 8

          // Randomly select a spark color from the predefined array
          const sparkColor = sparkColors[Math.floor(Math.random() * sparkColors.length)];

          spark.css({
              left: mouseX + "px",
              top: mouseY + "px",
              width: sparkSize + "px",
              height: sparkSize + "px",
              background: sparkColor,
          });

          // Add the spark to the container
          sparkContainer.append(spark);

          // Animate the spark away from the cursor at random initial X and Y velocities
          const initialVelocityX = (Math.random() - 0.5) * 5; // Random X velocity between -2.5 and 2.5
          const initialVelocityY = (Math.random() - 1) * 5; // Random Y velocity between -5 and 0

          // Apply constant gravitational acceleration to each spark
          const gravityAcceleration = 0.1; // Adjust the gravity acceleration to control the curve

          // Set the duration for each spark to last between 50 and 100 frames
          const sparkDuration = Math.floor(Math.random() * 51) + 50;

          // Start the animation along the curve for the spark
          animateSpark(spark, mouseX, mouseY, initialVelocityX, initialVelocityY, gravityAcceleration, 1, sparkDuration);
      }
  });
});


function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  // Run the callback function once the script is loaded
  script.onload = function() {
    if (callback) {
      callback();
    }
  };

  // Append the script to the document head or body
  document.head.appendChild(script);  // or document.body.appendChild(script);
}
