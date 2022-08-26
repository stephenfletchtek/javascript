class Weather {
  constructor(api) {
    this.api = api
  }

  fetch(city) {
    this.city = city;
    this.api.fetchweatherData(this.city, (response) => { this.result = (response) });
  }

  getWeatherData() {
    return this.result
  };
};

module.exports = Weather;

// type in node to use
// const WeatherApi = require('./weatherapi')
// const Weather = require('./weather')
// const weather = new Weather(new WeatherApi)
// weather.fetch('London')
// console.log(weather.getWeatherData())

// to use execute in this file
// const WeatherApi = require('./weatherapi')
// const weather = new Weather(new WeatherApi)
// weather.fetch('London')
// setTimeout(() => { console.log(weather.getWeatherData()) }, 1000)
