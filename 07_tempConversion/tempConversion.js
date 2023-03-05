const convertToCelsius = function(temperature) {
  let tempYeh = (temperature - 32) / 1.8;

    return Number(tempYeh.toFixed(1)); 
};

const convertToFahrenheit = function(temperature) {
  let tempYeh = (temperature * 1.8) + 32;
    return Number((tempYeh).toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
