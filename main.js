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
          // GALLERY PRELOAD
          $.preload([
            "media/gallery/3.jpg",
            "media/gallery/1.jpg",
            "media/gallery/4.jpg",
            "media/gallery/14.jpg",
            "media/gallery/18.jpg",
            "media/gallery/9.jpg",
            "media/gallery/2.jpg",
            "media/gallery/5.jpg",
            "media/gallery/6.jpg",
            "media/gallery/7.jpg",
            "media/gallery/26.jpg",
            "media/gallery/10.jpg",
            "media/gallery/8.jpg",
            "media/gallery/13.jpg",
            "media/gallery/12.jpg",
            "media/gallery/11.jpg",
            "media/gallery/17.jpg",
            "media/gallery/27.jpg",
            "media/gallery/21.jpg",
            "media/gallery/24.jpg",
            "media/gallery/19.jpg",
            "media/gallery/20.jpg",
            "media/gallery/22.jpg",
            "media/gallery/28.jpg",
            "media/gallery/29.jpg",
            "media/gallery/15.jpg",
            "media/gallery/16.jpg",
            "media/gallery/34.jpg",
            "media/gallery/25.jpg",
            "media/gallery/23.jpg",
            "media/gallery/33.jpg",
            "media/gallery/30.jpg",
            "media/gallery/31.jpg",
            "media/gallery/32.jpg",
            "media/gallery/37.jpg",
            "media/gallery/36.jpg",
            "media/gallery/35.jpg",
            "media/gallery/38.jpg",
          ]);
          // BATHROOM PROJECT PRELOAD
          $.preload([
            "media/project_photos/bathroom/old2.jpg",
            "media/project_photos/bathroom/old1.jpg",
            "media/project_photos/bathroom/old3.jpg",
            "media/project_photos/bathroom/top1.jpg",
            "media/project_photos/bathroom/top2.jpg",
            "media/project_photos/bathroom/wide1.jpg",
            "media/project_photos/bathroom/niche1.jpg",
            "media/project_photos/bathroom/tall1.jpg",
            "media/project_photos/bathroom/tall2.jpg",
            "media/project_photos/bathroom/niche2.jpg",
            "media/project_photos/bathroom/plan1.jpg",
            "media/project_photos/bathroom/plan2.jpg",
            "media/project_photos/bathroom/big.jpg",
            "media/project_photos/bathroom/final.jpg",
          ]);
          // FREELANCE PRELOAD
          $.preload([
            "media/project_photos/freelance/floorplan.jpg",
            "media/project_photos/freelance/drawing.jpg",
            "media/project_photos/freelance/floorplan2.jpg",
            "media/project_photos/freelance/render.jpg",
            "media/project_photos/freelance/drawing2.jpg",
            "media/project_photos/freelance/render2.jpg",
            "media/project_photos/freelance/floorplan3.jpg",
            "media/project_photos/freelance/drawing3.jpg",
            "media/project_photos/freelance/render3.jpg",
            "media/project_photos/freelance/floorplan4.jpg",
            "media/project_photos/freelance/render4.jpg",
          ]);
          // LCI PROJECT PRELOAD
          $.preload([
            "media/project_photos/home/sketch.JPG",
            "media/project_photos/home/floorplan5.JPG",
            "media/project_photos/home/floorplan1.JPG",
            "media/project_photos/home/photoshop1.jpg",
            "media/project_photos/home/floorplan4.JPG",
            "media/project_photos/home/floorplan3.JPG",
            "media/project_photos/home/lay1.jpg",
            "media/project_photos/home/render1.jpeg",
            "media/project_photos/home/render8.jpg",
            "media/project_photos/home/render9.jpg",
            "media/project_photos/home/render4.jpg",
            "media/project_photos/home/render3.jpg",
            "media/project_photos/home/render2.jpeg",
            "media/project_photos/home/render5.jpg",
            "media/project_photos/home/render7.jpg",
            "media/project_photos/home/render6.jpg",
          ]);
          // TODO: preload images for 3rd project, once it's added
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

      spark.css({ top: startY + "px", left: startX + "px", opacity: opacity });

      if (startY < window.innerHeight && duration > 0) {
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
      const mouseY = event.clientY;

      // Generate a random number of sparks between 5-15
      const numSparks = Math.floor(Math.random() * 11) + 5;

      // Create multiple sparks
      for (let i = 0; i < numSparks; i++) {
          // Create a spark at the mouse position
          const spark = $("<div>").addClass("spark");

          // Randomize spark size and color
          const sparkSize = Math.random() * 6 + 2; // Random size between 2 and 8
          const sparkColor = getRandomColor();

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

  // Helper function to get a random color in hexadecimal format
  function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
});