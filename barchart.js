let generateBarChart = function (data, options) {
  let barchart = $("<div> TODO </div>");
  return barchart;
}

let drawBarChart = function (data, options, element) {
  element.append(generateBarChart(data, options));
}


$(function () {
  drawBarChart("Data", "Options", $("Body"));
})
