class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntrodution() {
    return `Hi, my name is ${this.name}`;
  }
}

module.exports = User;

// type in node:
// const User = require('./user_account.js');
// user = new User('Uma');
// user.getName();
// user.getIntrodution();
