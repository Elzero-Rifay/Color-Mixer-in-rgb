function chagneColor() {
  var red = document.getElementById("red").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;
  var colors = "rgb(" + red + "," + green + "," + blue + ")";

  document.body.style.backgroundColor = colors;
  document.getElementById("resultInRgb").innerHTML = colors;
  console.log("Done!");
}



// document.getElementById('red').addEventListener("onmousemove", chagneColor)
// document.getElementById('green').addEventListener("onmousemove", chagneColor())
// document.getElementById('blue').addEventListener("onmousemove", chagneColor())