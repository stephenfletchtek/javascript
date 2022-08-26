const WeatherApi = require('./weatherapi')
const WeatherView = require('./weatherview')
const Weather = require('./weather')

const readline = require('readline');
const { callbackify } = require('util');
const rl = readline.createInterface(
  process.stdin, process.stdout);

const weather = new Weather(new WeatherApi, new WeatherView)

const fetchweather = (answer) => {
  weather.fetch(answer);
  setTimeout(() => { console.log(weather.displayWeather()) }, 1000);
}


rl.question('Enter a city to get the weather ', (answer) => {
  // fetch weather every 5 sec
  setInterval(() => { fetchweather(answer); }, 5000);
});
