const Weather = require('./weather')

const responseObject = {
  city: 'London',
  weather: 'Chucking it down'
};

const to_display =
  `City:        London\n` +
  `Weather:     Chucking it down\n` +
  `Temperature: 20\n` +
  `Feels like:  19\n` +
  `Humidity:    55%`;

describe('Weather class', () => {
  it('gets the weather data', () => {

    const fakeWeather = {
      fetchweatherData: (_, callback) => {
        callback(responseObject);
      }
    };

    const fakeWeatherView = {
      displayWeather: (_) => {
        return to_display;
      }
    };

    const weather = new Weather(fakeWeather, fakeWeatherView);
    weather.fetch('London');

    expect(weather.getWeatherData()).toEqual(responseObject);
    expect(weather.displayWeather()).toEqual(to_display);
  });
});
