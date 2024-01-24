const convertToCelsius = function(value) {
  let cecius = Math.round((((value - 32) * 5/9))*10)/10;
  return cecius;
};

const convertToFahrenheit = function(value) {
  let fahrenheit = Math.round((((value * 9/5) + 32))*10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
