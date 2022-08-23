const User = require("./user_account");

class UserBase {
  constructor(user_list) {
    this.user_list = user_list;
  }

  count() {
    return this.user_list.length;
  }

  getNames() {
    return this.user_list.map((user) => user.getName());
  }

  getIntroductions() {
    return this.user_list.map((element) => element.getIntrodution());
  }
}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
]

const userBase = new UserBase(users);
console.log(userBase.count());
console.log(userBase.getNames());
console.log(userBase.getIntroductions());
