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
    $("#banner" + 1).css("z-index", "1");
    $("<div>", { id: "descriptionBackground" + 1, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "80%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text(
        "An interactive web application designed to help a user decide between eating in or eating out."
      )
      .appendTo("#inOrOut");
    $("#descriptionBackground" + 1);
    $("<div>", { id: "demoLink" + 1, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("Demo")
      .appendTo("#inOrOut");
    $("<div>", { id: "gitHubRepo" + 1, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("GitHub Repository")
      .appendTo("#inOrOut");
    console.log("hoverInSuccess");
  },
  function() {
    $("#banner" + 1).css("top", "auto");
    $("#banner" + 1).css("bottom", "10%");
    $("#descriptionBackground" + 1).remove();
    $("#demoLink" + 1).remove();
    $("#gitHubRepo" + 1).remove();
    console.log("hoverOutSuccess");
  }
);

$("#weatherNow").hover(
  function() {
    $("#banner" + 2).css("top", "0%");
    $("#banner" + 2).css("bottom", "auto");
    $("#banner" + 2).css("z-index", "1");
    $("<div>", { id: "descriptionBackground" + 2, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "80%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text(
        "A web application that provides the weather conditions for a user-chosen city."
      )
      .appendTo("#weatherNow");
    $("#descriptionBackground" + 2);
    $("<div>", { id: "demoLink" + 2, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("Demo")
      .appendTo("#weatherNow");
    $("<div>", { id: "gitHubRepo" + 2, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("GitHub Repository")
      .appendTo("#weatherNow");
    console.log("hoverInSuccess");
  },
  function() {
    $("#banner" + 2).css("top", "auto");
    $("#banner" + 2).css("bottom", "10%");
    $("#descriptionBackground" + 2).remove();
    $("#demoLink" + 2).remove();
    $("#gitHubRepo" + 2).remove();
    console.log("hoverOutSuccess");
  }
);

$("#dayPlanner").hover(
  function() {
    $("#banner" + 3).css("top", "0%");
    $("#banner" + 3).css("bottom", "auto");
    $("#banner" + 3).css("z-index", "1");
    $("<div>", { id: "descriptionBackground" + 3, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "80%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text(
        "An editable web application capable of recording the user's schedule by the hour."
      )
      .appendTo("#dayPlanner");
    $("#descriptionBackground" + 3);
    $("<div>", { id: "demoLink" + 3, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("Demo")
      .appendTo("#dayPlanner");
    $("<div>", { id: "gitHubRepo" + 3, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("GitHub Repository")
      .appendTo("#dayPlanner");
    console.log("hoverInSuccess");
  },
  function() {
    $("#banner" + 3).css("top", "auto");
    $("#banner" + 3).css("bottom", "10%");
    $("#descriptionBackground" + 3).remove();
    $("#demoLink" + 3).remove();
    $("#gitHubRepo" + 3).remove();
    console.log("hoverOutSuccess");
  }
);

// $("#weatherNow").hover(
//   function() {
//     $("#banner" + 2).css("top", "0%");
//     $("#banner" + 2).css("bottom", "auto");
//     $("#banner" + 2).css("z-index", "1");
//     $("<div>", { id: "descriptionBackground" + 2, class: "flexCenter" })
//       .css("padding", "0px 10%")
//       .css("height", "100%")
//       .css("background", "rgba(0,0,0,0.8)")
//       .css("color", "#fff")
//       .text(
//         "A web application that provides the weather conditions for a user-chosen city."
//       )
//       .appendTo("#weatherNow");
//     $("#descriptionBackground" + 2);
//     console.log("hoverInSuccess");
//   },
//   function() {
//     $("#banner" + 2).css("top", "auto");
//     $("#banner" + 2).css("bottom", "10%");
//     $("#descriptionBackground" + 2).remove();
//     console.log("hoverOutSuccess");
//   }
// );

// $("#dayPlanner").hover(
//   function() {
//     $("#banner" + 3).css("top", "0%");
//     $("#banner" + 3).css("bottom", "auto");
//     $("#banner" + 3).css("z-index", "1");
//     $("<div>", { id: "descriptionBackground" + 3, class: "flexCenter" })
//       .css("padding", "0px 10%")
//       .css("height", "100%")
//       .css("background", "rgba(0,0,0,0.8)")
//       .css("color", "#fff")
//       .text(
//         "An editable web application capable of recording the user's schedule by the hour."
//       )
//       .appendTo("#dayPlanner");
//     $("#descriptionBackground" + 3);
//     console.log("hoverInSuccess");
//   },
//   function() {
//     $("#banner" + 3).css("top", "auto");
//     $("#banner" + 3).css("bottom", "10%");
//     $("#descriptionBackground" + 3).remove();
//     console.log("hoverOutSuccess");
//   }
// );

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
