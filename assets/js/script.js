// On-click function for LinkedIn and GitHub
$("#linkedInIcon").on("click", function() {
  window.open("https://www.linkedin.com/in/abelard-bautista", "_blank");
});

$("#gitHubIcon").on("click", function() {
  window.open("https://www.github.com/abautista3712", "_blank");
});

// $("#bannerIOO").on("click", function() {
//   $("#bannerIOO").text("");
//   $("<div>", { id: "newDiv", dataAttribute: "isClicked" })
//     .text("newDivCreated")
//     .appendTo("#bannerIOO");
// });

// Portfolio Projects
// var resetBanner = () => {
//   $(this).css("top", "auto");
//   $(this).css("bottom", "10%");
// };

// resetBanner();

// function changeBannerPosition(order) {
$("#inOrOut").hover(
  function() {
    $("#banner" + 1).css("top", "0%");
    $("#banner" + 1).css("bottom", "auto");
    console.log("hoverInSuccess");
  },
  function() {
    // $("#inOrOut").attr("isHover", "false");
    $("#banner" + 1).css("top", "auto");
    $("#banner" + 1).css("bottom", "10%");
    // $("#bannerIOO").css("top", null);
    console.log("hoverOutSuccess");
  }
);

$("#weatherNow").hover(
  function() {
    $("#banner" + 2).css("top", "0%");
    $("#banner" + 2).css("bottom", "auto");
    console.log("hoverInSuccess");
  },
  function() {
    // $("#inOrOut").attr("isHover", "false");
    $("#banner" + 2).css("top", "auto");
    $("#banner" + 2).css("bottom", "10%");
    // $("#bannerIOO").css("top", null);
    console.log("hoverOutSuccess");
  }
);

$("#dayPlanner").hover(
  function() {
    $("#banner" + 3).css("top", "0%");
    $("#banner" + 3).css("bottom", "auto");
    console.log("hoverInSuccess");
  },
  function() {
    // $("#inOrOut").attr("isHover", "false");
    $("#banner" + 3).css("top", "auto");
    $("#banner" + 3).css("bottom", "10%");
    // $("#bannerIOO").css("top", null);
    console.log("hoverOutSuccess");
  }
);

// }

// for (a = 1; a < 4; a++) {
//   changeBannerPosition(a);
// }
// $("#weatherNow").on("click", function() {
//   window.open("https://abautista3712.github.io/WeatherDashboard/", "_blank");
// });

// $("#dayPlanner").on("click", function() {
//   window.open("https://abautista3712.github.io/DayPlanner/", "_blank");
// });
