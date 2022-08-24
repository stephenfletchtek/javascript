class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  getTotalPrice() {
    let total = 0;
    this.basket.forEach((item) => total += item.getPrice());
    return total;
  }

  addItem(candy) {
    this.basket.push(candy);
  }
}

module.exports = ShoppingBasket;
