const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla']

const joinMessage = (person) => {
  return `Hi ${person}! 50% off our best candies for you today!`;
}

const generateMessages = (names) => {
  return names.map(joinMessage);
}

console.log(generateMessages(names));
