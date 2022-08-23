const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(item) {
    this.basket.push(item);
  }

  getTotalPrice() {
    let total = 0;
    this.basket.forEach((item) => total += item.price);
    return total;
  }
}

// here instead of in node
const candy = new Candy('Mars', 4.99);
console.log(candy.getName());
console.log(candy.getPrice());
const basket = new ShoppingBasket();
console.log(basket.getTotalPrice());
basket.addItem(candy);
console.log(basket.getTotalPrice());
basket.addItem(new Candy('Skittle', 3.99))
basket.addItem(new Candy('Skittle', 3.99))
console.log(basket.getTotalPrice());
