// $(document).ready(function () {
//   $("a").click(function (event) {
//     event.preventDefault();
//     $(this).hide("slow");
//   });
// });

let testoutput = function () {
  console.log("DSAFASDF");
}



// This is for jQuery stuff after the page loads.
$(function () {
  linedraw(10, 10, 40, 40);
});


function linedraw(x1, y1, x2, y2) {
  if (x2 < x1) {
    tmp = x2; x2 = x1; x1 = tmp
    tmp = y2; y2 = y1; y1 = tmp
  }

  lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  m = (y2 - y1) / (x2 - x1)

  degree = Math.atan(m) * 180 / Math.PI

  document.body.innerHTML += "<div class='line' style='transform-origin: top left; transform: rotate(" + degree + "deg); width: " + lineLength + "px; height: 1px; background: black; position: absolute; top: " + y1 + "px; left: " + x1 + "px;'></div>"
}
