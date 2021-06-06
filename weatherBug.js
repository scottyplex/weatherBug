/*Recently, Kelvin began publishing his weather forecasts on his website. 
However there’s a problem: All of his forecasts describe the temperature in Kelvin.
*/

// The weather today is 293 we saved as a constant variable kelvin.
const kelvin = 293;

// Converting Kelvin to Celsius which is 273 less than kelvin.
let celsius = kelvin - 273;

// Converting Celsius to Fahrenheit by using the formula below.
let fahrenheit = celsius * (9/5) + 32;

// Converting Celsius to Newton by using the formula below.
let newton = celsius * (33/100);

// When converting Celsius to Fahrenheit this often results in a decimal number. We use the .floor() to round down to the nearest whole number.
newton = Math.floor(newton);

// When converting Celsius to Fahrenheit this often results in a decimal number. We use the .floor() to round down to the nearest whole number.
fahrenheit = Math.floor(fahrenheit);

console.log(`The remperature is ${fahrenheit} degrees Farhenheit`);