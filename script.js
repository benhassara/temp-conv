function toCelsius(fh) {
  //convert Fahrenheit to Celsius
  return (fh - 32) * (5/9);
}

function toFahrenheit(cs) {
  //convert Celsius to Fahrenheit
  return (9 * cs/5) + 32;
}

//prompt for conversion
var conv = prompt("Celsius to Fahrenheit or Fahrenheit to Celsius? (C > F or F > C)");
conv = conv.toLowerCase();

if (conv === "c > f") {
  var deg = parseFloat(prompt("Enter the temperature in Celsius: "));
  console.log(Math.floor(toFahrenheit(deg)));
}
else if (conv === "f > c") {
  var deg = parseFloat(prompt("Enter the temperature in Fahrenheit: "));
  console.log(Math.floor(toCelsius(deg)));
}
else {
  alert("Input invalid. Please refresh and try again.");
}
