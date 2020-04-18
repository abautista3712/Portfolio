// On-click function for LinkedIn and GitHub
$("#linkedInIcon").on("click", function () {
  window.open("https://www.linkedin.com/in/abelard-bautista", "_blank");
});

$("#gitHubIcon").on("click", function () {
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
  function () {
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
    $("<div>", { id: "demoLink", class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("border-top", "solid white")
      .css("border-bottom", "solid white")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("Demo")
      .appendTo("#inOrOut");
    $("#demoLink").on("click", function () {
      window.open("https://abautista3712.github.io/In-or-Out/", "_blank");
    });
    $("<div>", { id: "gitHubRepo" + 1, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("GitHub Repository")
      .appendTo("#inOrOut");
    $("#gitHubRepo" + 1).on("click", function () {
      window.open("https://github.com/abautista3712/In-or-Out", "_blank");
    });
  },
  function () {
    $("#banner" + 1).css("top", "auto");
    $("#banner" + 1).css("bottom", "10%");
    $("#descriptionBackground" + 1).remove();
    $("#demoLink").remove();
    $("#gitHubRepo" + 1).remove();
  }
);

$("#weatherNow").hover(
  function () {
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
    $("<div>", { id: "demoLink", class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("border-top", "solid white")
      .css("border-bottom", "solid white")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("Demo")
      .appendTo("#weatherNow");
    $("#demoLink").on("click", function () {
      window.open(
        "https://abautista3712.github.io/WeatherDashboard/",
        "_blank"
      );
    });
    $("<div>", { id: "gitHubRepo" + 2, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("GitHub Repository")
      .appendTo("#weatherNow");
    $("#gitHubRepo" + 2).on("click", function () {
      window.open(
        "https://github.com/abautista3712/WeatherDashboard",
        "_blank"
      );
    });
  },
  function () {
    $("#banner" + 2).css("top", "auto");
    $("#banner" + 2).css("bottom", "10%");
    $("#descriptionBackground" + 2).remove();
    $("#demoLink").remove();
    $("#gitHubRepo" + 2).remove();
  }
);

$("#dayPlanner").hover(
  function () {
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
    $("<div>", { id: "demoLink", class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("border-top", "solid white")
      .css("border-bottom", "solid white")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("Demo")
      .appendTo("#dayPlanner");
    $("#demoLink").on("click", function () {
      window.open("https://abautista3712.github.io/DayPlanner/", "_blank");
    });
    $("<div>", { id: "gitHubRepo" + 3, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("GitHub Repository")
      .appendTo("#dayPlanner");
    $("#gitHubRepo" + 3).on("click", function () {
      window.open("https://github.com/abautista3712/DayPlanner", "_blank");
    });
  },
  function () {
    $("#banner" + 3).css("top", "auto");
    $("#banner" + 3).css("bottom", "10%");
    $("#descriptionBackground" + 3).remove();
    $("#demoLink").remove();
    $("#gitHubRepo" + 3).remove();
  }
);

$("#noteTaker").hover(
  function () {
    $("#banner" + 4).css("top", "0%");
    $("#banner" + 4).css("bottom", "auto");
    $("#banner" + 4).css("z-index", "1");
    $("<div>", { id: "descriptionBackground" + 4, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "80%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text(
        "A program that allows the user to read, write, and delete notes utilizing a node.js express server backend."
      )
      .appendTo("#noteTaker");
    $("#descriptionBackground" + 4);
    $("<div>", { id: "demoLink", class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("border-top", "solid white")
      .css("border-bottom", "solid white")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("Demo")
      .appendTo("#noteTaker");
    $("#demoLink").on("click", function () {
      window.open("https://stormy-wildwood-71353.herokuapp.com/", "_blank");
    });
    $("<div>", { id: "gitHubRepo" + 4, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("GitHub Repository")
      .appendTo("#eatDaBurger");
    $("#gitHubRepo" + 4).on("click", function () {
      window.open("https://github.com/abautista3712/noteTaker", "_blank");
    });
  },
  function () {
    $("#banner" + 4).css("top", "auto");
    $("#banner" + 4).css("bottom", "10%");
    $("#descriptionBackground" + 4).remove();
    $("#demoLink").remove();
    $("#gitHubRepo" + 4).remove();
  }
);

$("#eatDaBurger").hover(
  function () {
    $("#banner" + 5).css("top", "0%");
    $("#banner" + 5).css("bottom", "auto");
    $("#banner" + 5).css("z-index", "1");
    $("<div>", { id: "descriptionBackground" + 5, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "80%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text(
        "A program utilizing mySQL and node express-handlebars to keep track of a list of burgers."
      )
      .appendTo("#eatDaBurger");
    $("#descriptionBackground" + 5);
    $("<div>", { id: "demoLink", class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("border-top", "solid white")
      .css("border-bottom", "solid white")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("Demo")
      .appendTo("#eatDaBurger");
    $("#demoLink").on("click", function () {
      window.open("https://mysterious-wildwood-12100.herokuapp.com/", "_blank");
    });
    $("<div>", { id: "gitHubRepo" + 5, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("GitHub Repository")
      .appendTo("#eatDaBurger");
    $("#gitHubRepo" + 5).on("click", function () {
      window.open(
        "https://github.com/abautista3712/nodeExpressHandlebars",
        "_blank"
      );
    });
  },
  function () {
    $("#banner" + 5).css("top", "auto");
    $("#banner" + 5).css("bottom", "10%");
    $("#descriptionBackground" + 5).remove();
    $("#demoLink").remove();
    $("#gitHubRepo" + 5).remove();
  }
);

$("#covid19Tracker").hover(
  function () {
    $("#banner" + 6).css("top", "0%");
    $("#banner" + 6).css("bottom", "auto");
    $("#banner" + 6).css("z-index", "1");
    $("<div>", { id: "descriptionBackground" + 6, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "80%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("Data tracker of Covid-19 global cases visualized via heatmap.")
      .appendTo("#covid19Tracker");
    $("#descriptionBackground" + 6);
    $("<div>", { id: "demoLink", class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("border-top", "solid white")
      .css("border-bottom", "solid white")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("Demo")
      .appendTo("#covid19Tracker");
    $("#demoLink").on("click", function () {
      window.open("http://plague.site/", "_blank");
    });
    $("<div>", { id: "gitHubRepo" + 6, class: "flexCenter" })
      .css("padding", "0px 10%")
      .css("height", "10%")
      .css("background", "rgba(0,0,0,0.8)")
      .css("color", "#fff")
      .text("GitHub Repository")
      .appendTo("#covid19Tracker");
    $("#gitHubRepo" + 6).on("click", function () {
      window.open(
        "https://github.com/yankidank/covid-19-tracker/commits/master",
        "_blank"
      );
    });
  },
  function () {
    $("#banner" + 6).css("top", "auto");
    $("#banner" + 6).css("bottom", "10%");
    $("#descriptionBackground" + 6).remove();
    $("#demoLink").remove();
    $("#gitHubRepo" + 6).remove();
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
