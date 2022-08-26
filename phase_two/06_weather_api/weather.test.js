const Weather = require('./weather')

describe('Weather class', () => {
  it('gets the repo data', () => {
    const fakeWeather = {
      fetchweatherData: (city, callback) => {
        const responseObject = {
          city: 'London',
          weather: 'Chucking it down'
        };
        callback(responseObject);
      }
    }
    const weather = new Weather(fakeWeather);
    weather.fetch('London')
    expect(weather.getWeatherData()).toEqual({
      city: 'London',
      weather: 'Chucking it down'
    })
  });
});
