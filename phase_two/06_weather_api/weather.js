class Weather {
  constructor(api, view) {
    this.api = api
    this.view = view
    this.result = null;
  }

  fetch(city) {
    this.city = city;
    this.api.fetchweatherData(this.city, (response) => { this.result = (response) });
  }

  getWeatherData() {
    return this.result
  };

  displayWeather() {
    return this.view.displayWeather(this.result)
  }
};

module.exports = Weather;

// TO RUN IN NODE
// const WeatherApi = require('./weatherapi')
// const Weather = require('./weather')
// const weather = new Weather(new WeatherApi)
// weather.fetch('London')
// console.log(weather.getWeatherData())

// TO RUN IN THIS FILE
const WeatherApi = require('./weatherapi')
const WeatherView = require('./weatherview')
const weather = new Weather(new WeatherApi, new WeatherView)
weather.fetch('London')
// setTimeout(() => { console.log(weather.getWeatherData()) }, 1000)
setTimeout(() => { console.log(weather.displayWeather()) }, 1000)
