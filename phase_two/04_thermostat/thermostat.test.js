const exp = require('constants');
const Thermostat = require('./thermostat')

describe('Thermostat object', () => {
  it('default 20 degree temp', () => {
    const thermostat = new Thermostat;
    expect(thermostat.getTemperature()).toBe(20);
  });
  it('goes up to 22 degrees', () => {
    const thermostat = new Thermostat;
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(22);
  });
  it('goes down to 21 degrees', () => {
    const thermostat = new Thermostat;
    thermostat.up()
    thermostat.up()
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(21);
  });
  it('minimum 10 degrees', () => {
    const thermostat = new Thermostat;
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
    expect(thermostat.eneryUsage()).toBe('low-usage')
  });
  it('maximum 25 degrees in power save mode', () => {
    const thermostat = new Thermostat;
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
    expect(thermostat.eneryUsage()).toBe('medium-usage')
  });
  it('get 26 degrees with power save mode off', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false)
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(26);
    expect(thermostat.eneryUsage()).toBe('high-usage')
  });
  it('reset back to 20 degrees', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false)
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20);
  });
});
