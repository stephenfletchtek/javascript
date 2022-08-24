const ShoppingBasket = require('./basket');

describe('ShoppingBasket object', () => {
  it('gets total price', () => {
    const shoppingbasket = new ShoppingBasket;
    expect(shoppingbasket.getTotalPrice()).toBe(0);
  });
  it('add a mars and check total', () => {
    const shoppingbasket = new ShoppingBasket;
    const fakeMars = { getPrice: () => 4.99 }
    shoppingbasket.addItem(fakeMars)
    expect(shoppingbasket.getTotalPrice()).toBe(4.99);
  });
  it('add a mars and two skittles check total', () => {
    const shoppingbasket = new ShoppingBasket;
    const fakeMars = { getPrice: () => 4.99 }
    const fakeSkittle = { getPrice: () => 3.99 }
    shoppingbasket.addItem(fakeMars)
    shoppingbasket.addItem(fakeSkittle)
    shoppingbasket.addItem(fakeSkittle)
    expect(shoppingbasket.getTotalPrice()).toBe(12.97);
  });
  it('discount a mars and check total', () => {
    const shoppingbasket = new ShoppingBasket;
    const fakeMars = { getPrice: () => 4.99 }
    shoppingbasket.addItem(fakeMars)
    shoppingbasket.applyDiscount(2.98)
    result = shoppingbasket.getTotalPrice()
    expect(Math.round(result + "e+2") / 100).toBe(2.01);
  });
});
