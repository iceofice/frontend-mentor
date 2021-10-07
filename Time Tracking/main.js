var data;
var rawFile = new XMLHttpRequest();
rawFile.overrideMimeType("application/json");
rawFile.open("GET", "data.json", true);
rawFile.onreadystatechange = function () {
  if (rawFile.readyState === 4 && rawFile.status == "200") {
    data = JSON.parse(rawFile.responseText);
    assignData("weekly");
  }
};
rawFile.send(null);

var ul = document.getElementById("timeframes");

function assignData(timeframe) {
  var currentTimeframeElements = document.querySelectorAll(".current");
  var previousTimeframeElements = document.querySelectorAll(".previous");
  for (var i = 0; i < currentTimeframeElements.length; i++) {
    currentTimeframeElements[i].innerHTML = data[i].timeframes[timeframe].current;
    previousTimeframeElements[i].innerHTML = data[i].timeframes[timeframe].previous;
  }
}

ul.addEventListener("click", function (element) {
  if (element.target && element.target.matches("li a")) {
    if (document.querySelector("#timeframes a.active") !== null) {
      document.querySelector("#timeframes a.active").classList.remove("active");
      var time;
      var timeframe = element.target.id;
      switch (timeframe) {
        case "daily":
          time = "Day";
          break;
        case "weekly":
          time = "Week";
          break;
        case "monthly":
          time = "Month";
          break;
      }
      assignData(timeframe);

      Array.from(document.getElementsByClassName("time")).map(function (e) {
        e.innerHTML = time;
      });
    }
    element.target.className = "active";
  }
});
