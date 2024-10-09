const convertToCelsius = function(deg1) {
  let cel = (deg1 - 32) * (5/9);
  return Math.round(cel * 10) / 10
};

const convertToFahrenheit = function(deg2) {
  let farh = deg2 * (9 / 5) + 32;
  return Math.round(farh * 10)/ 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
