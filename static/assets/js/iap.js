//step-2 weight input
const w = document.getElementById("weight-input");
if (w) {
  document.getElementById("weight-value").innerHTML = w.value;
}
//step-3 height input
const h = document.getElementById("height-input");
if (h) {
  document.getElementById("height-value").value = h.value;
}

function handleWeightChange(value, min, max) {
  document.getElementById("weight-value").innerHTML = value;
  var v = ((value - min) / (max - min)) * 100;
  document.getElementById("weight-input").style.background =
    "linear-gradient(to right, rgb(109 211 104) 0%, rgb(109 211 104) " +
    v +
    "%, rgb(228 228 230) " +
    v +
    "%, rgb(228 228 230) 100%)";
}


function handleHeightChange(value, min, max) {
    document.getElementById("height-value").innerHTML = value;
  var v = ((value - min) / (max - min)) * 100;
  document.getElementById("height-input").style.background =
    "linear-gradient(to right, rgb(109 211 104) 0%, rgb(109 211 104) " +
    v +
    "%, rgb(228 228 230) " +
    v +
    "%, rgb(228 228 230) 100%)";
}

//height unit to cm
function handleCMUnit() {
  const c = document.querySelector(".CM");
  const f = document.querySelector(".FT");
  c.style.boxShadow = "silver 1px 1px 10px";
  f.style.boxShadow = "none";
  c.style.backgroundColor = "white";
  f.style.backgroundColor = "whitesmoke";
  document.querySelector(".unit").value = "CM";
  document.querySelector(".unit-display").innerHTML = "CM";
  document.getElementById("height-value").innerHTML =
    document.getElementById("height-input").value;
}

//height unit to ft
function handleFTUnit() {
  const c = document.querySelector(".CM");
  const f = document.querySelector(".FT");
  f.style.boxShadow = "silver 1px 1px 10px";
  c.style.boxShadow = "none";
  f.style.backgroundColor = "white";
  c.style.backgroundColor = "whitesmoke";
  document.querySelector(".unit").value = "FT";
  document.querySelector(".unit-display").innerHTML = "FT/IN";
  const h = document.getElementById("height-value").innerHTML;
  let ft = Math.floor(h / 2.54 / 12);
  var i = Math.round(h / 2.54 - 12 * ft);
  document.getElementById("height-value").innerHTML = ft + "/" + i;
}

//chart weight input
const cw = document.getElementById("chart-weight-input");
if (cw) {
  document.getElementById("chart-weight-value").value = cw.value;
}
function handleChartWeightChange(value, weight_percentile) {
  document.getElementById("chart-weight-value").innerHTML = value;
  document.getElementById("chart-weight-value").style.left = weight_percentile + "%";
  document.getElementById("chart-weight-value").style.transform =
    "translate(" + -weight_percentile + "%)";
  document.getElementById("chart-weight-input").style.background =
    "linear-gradient(to right, rgb(109 211 104) 0%, rgb(109 211 104) " +
    weight_percentile +
    "%, rgb(228 228 230) " +
    weight_percentile +
    "%, rgb(228 228 230) 100%)";
}

//chart height input
const ch = document.getElementById("chart-height-input");

if (ch) {
  document.getElementById("chart-height-value").value = ch.value;
}
function handleChartHeightChange(value, height_percentile) {
  document.getElementById("chart-height-value").innerHTML = value;
  document.getElementById("chart-height-value").style.left = height_percentile + "%";
  document.getElementById("chart-height-value").style.transform =
    "translate(" + -height_percentile + "%)";
  document.getElementById("chart-height-input").style.background =
    "linear-gradient(to right, rgb(109 211 104) 0%, rgb(109 211 104) " +
    height_percentile +
    "%, rgb(228 228 230) " +
    height_percentile +
    "%, rgb(228 228 230) 100%)";
}

//chart bmi input
const b = document.getElementById("chart-bmi-input");
if (b) {
  document.getElementById("bmi-value").value = b.value;

}
function handleBMIChange(value, min, max) {
  document.getElementById("bmi-value").innerHTML = value;
  var v = ((value - min) / (max - min)) * 100;
  document.getElementById("bmi-value").style.left = v + "%";
  document.getElementById("bmi-value").style.transform =
    "translate(" + -v + "%)";
}
