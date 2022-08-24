const Candy = require('./candy');

describe('Candy object', () => {
  it('gets candy name', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars')
  })
  it('gets candy price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99)
  })
});
